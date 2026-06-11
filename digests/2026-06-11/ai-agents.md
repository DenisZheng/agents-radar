# OpenClaw 生态日报 2026-06-11

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-11 00:42 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 — 2026-06-11

---

## 1. 今日速览

OpenClaw 今日处于**高活跃状态**：过去 24 小时内 Issues 更新 500 条（新开/活跃 465 条，关闭 35 条），PR 更新 500 条（待合并 400 条，已合并/关闭 100 条），并发布了 **v2026.6.6-beta.1** 安全强化版本。社区讨论热度集中在安全边界、会话状态一致性和消息投递可靠性三大主题。整体来看，项目正处于快速迭代期，安全加固与多平台适配是当前主线，但积压的 P0/P1 Issue 数量仍然偏高，维护者响应压力较大。

---

## 2. 版本发布

### v2026.6.6-beta.1 — 安全边界全面收紧

**核心变更：** 本次 beta 版本聚焦安全加固，涉及面广泛：

| 领域 | 变更内容 |
|------|----------|
| **Transcripts** | 转录文件安全边界强化 |
| **Sandbox Binds** | 沙箱挂载绑定策略收紧 |
| **Host Environment Inheritance** | 主机环境变量继承控制 |
| **MCP stdio** | MCP 标准输入/输出通道安全加固 |
| **Codex HTTP Access** | Codex HTTP 访问策略限制 |
| **Native Search Policy** | 本地搜索策略收紧 |
| **Elevated Sender Checks** | 高权限发送者校验增强 |
| **Deleted-Agent ACP Bypasses** | 已删除 Agent 的 ACP 绕过防护 |
| **Loopback Tools** | 回环工具安全限制 |
| **Discord Moderation** | Discord 内容审核增强 |
| **Teams Group Access** | Teams 群组访问控制 |

**迁移注意事项：**
- 沙箱配置可能需要重新校验，特别是依赖主机环境变量继承的工作流
- MCP stdio 通道的变更可能影响现有 MCP 服务器集成，建议测试后升级
- 如果使用了 Codex HTTP 访问功能，需确认新的访问策略不会阻断合法请求

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 状态 | 说明 |
|----|------|------|
| [#92059](https://github.com/openclaw/openclaw/pull/92059) | ✅ 已合并 | 修复心跳/静默回复触发时 `NO_REPLY` 响应被错误分类的问题 |
| [#92056](https://github.com/openclaw/openclaw/pull/92056) | ✅ 已合并 | 将 exec 审批文件迁移至 `OPENCLAW_STATE_DIR`，支持 macOS 主机 |
| [#91305](https://github.com/openclaw/openclaw/pull/91305) | ✅ 已合并 | 修复 Control UI 启动配置端点路径重复问题（[#66946](https://github.com/openclaw/openclaw/issues/66946)） |
| [#91720](https://github.com/openclaw/openclaw/pull/91720) | ✅ 已合并 | 移除 `gpt-5.3-codex` 目录条目中硬编码的 ChatGPT 后端传输覆盖 |
| [#91292](https://github.com/openclaw/openclaw/pull/91292) | ✅ 已合并 | 修复配置空白 base URL 时捆绑提供商标典被意外清除的问题（[#91270](https://github.com/openclaw/openclaw/issues/91270)） |
| [#91711](https://github.com/openclaw/openclaw/pull/91711) | ✅ 已合并 | 将 harness 提供商标识不匹配归类为格式错误（[#91710](https://github.com/openclaw/openclaw/issues/91710)） |
| [#91471](https://github.com/openclaw/openclaw/pull/91471) | ✅ 已合并 | 为 `cron runs` JSON 输出添加可读 ISO 时间字段 |
| [#92027](https://github.com/openclaw/openclaw/pull/92027) | ✅ 已合并 | 修复 chokidar watcher 错误后配置热重载永久失效的问题 |
| [#91351](https://github.com/openclaw/openclaw/pull/91351) | ✅ 已合并 | 为 opencode-go 添加 qwen3.7-plus 分层定价元数据 |

**整体进展评估：** 今日合并的 PR 覆盖了安全加固（exec 审批路径）、用户体验（Control UI 启动修复、cron 时间可读性）、模型兼容性（gpt-5.3-codex、Gemini 模型解析）和系统可靠性（配置热重载恢复）四个维度。项目在安全性和稳定性方面稳步前进。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 |
|------|-------|--------|----------|
| 🥇 | [#25592](https://github.com/openclaw/openclaw/issues/25592) — 工具调用间文本泄露到消息渠道 | 31 | Agent 在工具调用之间产生的中间文本（错误处理、处理确认、叙述）被路由到 Slack/iMessage 等消息渠道，严重影响 UX |
| 🥈 | [#88838](https://github.com/openclaw/openclaw/issues/88838) — SQLite 会话/转录迁移跟踪 | 19 | 将会话/转录运行时状态迁移到 SQLite，通过分支抽象接缝实现小步快跑、可审查的 PR |
| 🥉 | [#32473](https://github.com/openclaw/openclaw/issues/32473) — Control UI 需要设备身份（HTTPS/安全上下文） | 17 | VPS + Docker 环境下 Control UI 报错，用户无法找到解决方案 |
| 4 | [#22438](https://github.com/openclaw/openclaw/issues/22438) — 分层引导文件加载 | 17 | 引导文件在每个会话中消耗 LLM token，需要分层加载以节省上下文窗口 |
| 5 | [#22676](https://github.com/openclaw/openclaw/issues/22676) — Signal 守护进程 SIGUSR1 重启竞态条件 | 17 | Signal 守护进程在配置热重载时产生孤儿进程和发送失败 |

### 分析

**安全边界与消息投递**是社区最关注的两大主题。[#25592](https://github.com/openclaw/openclaw/issues/25592) 以 31 条评论位居榜首，反映了用户对 Agent 行为可预测性的强烈需求——用户不希望看到 Agent 的内部处理过程暴露在对话中。[#88838](https://github.com/openclaw/openclaw/issues/88838) 的活跃讨论表明社区对架构演进（SQLite 迁移）有高度参与感。

---

## 5. Bug 与稳定性

### P0 — 严重问题

| Issue | 描述 | 已有 Fix PR |
|-------|------|-------------|
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | 核心会话/转录 SQLite 迁移需要可审查的接缝方案 | 🔗 有开放 PR 跟踪 |

### P1 — 高优先级

| Issue | 描述 | 已有 Fix PR |
|-------|------|-------------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间文本泄露到消息渠道 | 🔗 有开放 PR |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal 守护进程竞态条件导致孤儿进程 | 🔗 有开放 PR |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | Agent 回复上一条消息而非当前消息（会话上下文混淆） | ⚠️ 无 PR |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | agentDir 中的引导文件被静默忽略 | ⚠️ 无 PR |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | exec 工具不继承 skills.entries.*.env 环境变量（回归） | 🔗 有开放 PR |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | write 工具缺少追加模式，隔离 cron 会话破坏共享文件 | 🔗 有开放 PR |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) | 飞书图片读取工具结果在最终出站载荷前丢失媒体 | ⚠️ 无 PR |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | MCP 工具未注入到子 Agent 会话 | ⚠️ 无 PR |
| [#83184](https://github.com/openclaw/openclaw/issues/83184) | 心跳驱动的 Agent 回复导致 pendingFinalDelivery 卡住 | 🔗 有开放 PR |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | google-vertex/gemini-3.1-pro-preview 崩溃（回归） | ⚠️ 无 PR |

### P2 — 中优先级（精选）

| Issue | 描述 | 已有 Fix PR |
|-------|------|-------------|
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | Control UI 需要 HTTPS/安全上下文（回归） | ⚠️ 无 PR |
| [#40540](https://github.com/openclaw/openclaw/issues/40540) | Windows 上 `openclaw update` 因 EBUSY 错误失败 | ⚠️ 无 PR |
| [#31331](https://github.com/openclaw/openclaw/issues/31331) | Docker + 沙箱无法绑定 workspaceAccess | ⚠️ 无 PR |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | sandbox workspaceAccess=none 时工作区只读 | ⚠️ 无 PR |
| [#86508](https://github.com/openclaw/openclaw/issues/86508) | Discord 运行中 EmbeddedAttemptSessionTakeoverError | ⚠️ 无 PR |

**稳定性评估：** 当前积压的 P1 Bug 中，约 50% 已有开放 PR 正在处理，但仍有多个关键问题（会话上下文混淆、引导文件忽略、MCP 子 Agent 注入）缺乏修复进展。Windows 更新失败和 Docker 沙箱问题影响了特定平台用户的日常使用，需要优先关注。

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| Issue | 描述 | 信号强度 | 判断 |
|-------|------|----------|------|
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | 添加 `tools.web.fetch.allowPrivateNetwork` 允许私有网络访问 | 👍 9 | 高概率纳入——安全相关，有明确配置方案 |
| [#18160](https://github.com/openclaw/openclaw/issues/18160) | Cron 作业的直接执行模式（绕过 LLM） | 👍 10 | 高概率纳入——用户需求强烈，解决可靠性痛点 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 掩码密钥系统——防止 Agent 访问原始 API 密钥 | 👍 4 | 中概率——安全增强，但实现复杂度高 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Agent 级别成本预算强制执行 | 👍 1 | 中概率——运营需求明确，但优先级可能低于安全 |
| [#22358](https://github.com/openclaw/openclaw/issues/22358) | 子 Agent 完成后的扩展钩子 | 👍 1 | 中概率——架构增强，社区有讨论 |
| [#35203](https://github.com/openclaw/openclaw/issues/35203) | 多 Agent 协作增强：能力画像 + 共享黑板 + 分层记忆 | 👍 0 | 低概率——RFC 阶段，范围较大 |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | Control UI 添加 MathJax/LaTeX 支持 | 👍 6 | 低概率——UI 增强，非核心功能 |

### 路线图信号总结

从社区反馈和 PR 活跃度判断，**下一版本的重点方向**可能包括：
1. **安全加固**（v2026.6.6-beta.1 已启动，将继续推进）
2. **Cron 可靠性**（直接执行模式需求强烈）
3. **私有网络访问控制**（web_fetch 安全策略细化）
4. **多 Agent 稳定性**（会话隔离、配置并发安全）

---

## 7. 用户反馈摘要

### 真实痛点

| 痛点 | 典型场景 | 来源 Issue |
|------|----------|------------|
| **Agent 行为不可预测** | 工具调用间的内部文本泄露到 Slack，用户看到"处理中..."等中间状态 | [#25592](https://github.com/openclaw/openclaw/issues/25592) |
| **会话上下文混乱** | Agent 回复上一条消息而非当前消息，导致对话错位 | [#32296](https://github.com/openclaw/openclaw/issues/32296) |
| **跨平台部署困难** | VPS + Docker 环境下 Control UI 报 HTTPS 错误；Windows 更新 EBUSY 失败 | [#32473](https://github.com/openclaw/openclaw/issues/32473), [#40540](https://github.com/openclaw/openclaw/issues/40540) |
| **数据静默丢失** | write 工具无追加模式，cron 会话覆盖共享文件；飞书图片媒体丢失 | [#40001](https://github.com/openclaw/openclaw/issues/40001), [#41744](https://github.com/openclaw/openclaw/issues/41744) |
| **Agent 承诺不兑现** | Agent 说"我会稍后跟进"但实际未启动任何后台操作 | [#58450](https://github.com/openclaw/openclaw/issues/58450) |
| **多 Agent 编排不可靠** | 并发 Agent 配置覆盖、会话锁失败、子 Agent 工作脱离 | [#43367](https://github.com/openclaw/openclaw/issues/43367) |

### 满意点

- 安全边界持续收紧（v2026.6.6-beta.1）获得社区正面响应
- Control UI 启动修复（[#91305](https://github.com/openclaw/openclaw/pull/91305)）解决了长期存在的 404 问题
- cron runs 可读时间字段（[#91471](https://github.com/openclaw/openclaw/pull/91471)）提升了运维体验

---

## 8. 待处理积压

### 长期未响应的重要 Issue（按创建时间排序）

| Issue | 创建日期 | 优先级 | 状态 | 建议行动 |
|-------|----------|--------|------|----------|
| [#10659](https://github.com/openclaw/openclaw/issues/10659) — 掩码密钥系统 | 2026-02-06 | P1 | 开放，13 条评论 | 需要产品决策，建议纳入安全路线图 |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) — 动态模型发现 | 2026-02-06 | P2 | 开放，9 条评论 | 需要维护者评审，OpenRouter 用户等待已久 |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) — 预响应强制执行钩子 | 2026-02-10 | P2 | 开放，11 条评论 | 高价值安全功能，需要架构讨论 |
| [#13610](https://github.com/openclaw/openclaw/issues/13610) — 原生密钥管理集成 | 2026-02-10 | P2 | 开放，7 条评论 | AWS Secrets Manager/Vault 集成，安全基础设施 |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) — 引导向导缺少记忆/嵌入设置 | 2026-02-15 | P2 | 开放，8 条评论 | 影响新用户上手体验，建议优先处理 |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) — 工具调用间文本泄露 | 2026-02-24 | P1 | 开放，31 条评论 | 社区最活跃 Issue，需要明确修复时间表 |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) — agentDir 引导文件被忽略 | 2026-02-28 | P1 | 开放，14 条评论 | 影响多 Agent 配置用户，需要安全审查 |

### 长期开放的重要 PR

| PR | 创建日期 | 优先级 | 状态 | 建议行动 |
|----|----------|--------|------|----------|
| [#86360](https://github.com/openclaw/openclaw/pull/86360) — Codex 执行主机策略 | 2026-05-25 | P1 | 等待作者 | 安全边界相关，建议加速审查 |
| [#90173](https://github.com/openclaw/openclaw/pull/90173) — A2A 提示缓存上下文稳定化 | 2026-06-04 | P2 | 准备维护者审查 | 多 Agent 核心功能，建议尽快合并 |
| [#90747](https://github.com/openclaw/openclaw/pull/90747) — 插件设置注册表缓存 | 2026-06-05 | P2 | 需要真实行为证明 | 解决 /models CPU 风暴，性能优化 |
| [#91296](https://github.com/openclaw/openclaw/pull/91296) — 监督式 git 更新切换 | 2026-06-08 | P1 | 需要证明 | 安全更新流程，建议优先审查 |

---

**日报总结：** OpenClaw 项目当前处于安全加固与功能扩展并行的快速迭代阶段。v2026.6.6-beta.1 的发布标志着安全边界进入新阶段，但积压的 P0/P1 问题（特别是会话状态一致性和消息投递可靠性）仍然是影响用户体验的主要瓶颈。建议维护者近期优先处理 [#25592](https://github.com/openclaw/openclaw/issues/25592)（工具调用间文本泄露）和 [#32296](https://github.com/openclaw/openclaw/issues/32296)（会话上下文混淆）这两个社区关注度最高的 Issue。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：2026-06-11 | 分析引擎：OWL**

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态正处于**从功能扩张向工程质量转型的关键阶段**。头部项目（OpenClaw、NanoBot、CoPaw）日处理 Issues/PR 量级已达数百条，社区规模与活跃度堪比主流基础设施项目。**安全加固**成为全生态共同主题——OpenClaw 今日发布安全强化版本，NanoBot 修复沙箱逃逸，PicoClaw 封堵 SSRF 漏洞，NullClaw 修复信息泄露，反映出 Agent 从"能用"走向"可信"的行业共识。**多模型 Provider 适配**和**跨平台兼容性**是第二大共同诉求，几乎所有项目都在处理 Windows/macOS/Linux 差异和多 LLM 后端兼容问题。整体来看，生态已进入**多项目并行竞争、技术路线分化明显**的成熟期，用户选择空间显著扩大。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新开/活跃→关闭) | PR (待合并→已合并/关闭) | 版本发布 | 健康度评估 |
|------|------------------------|------------------------|----------|------------|
| **OpenClaw** | 465 → 35 | 400 → 100 | ✅ v2026.6.6-beta.1 | 🟡 高活跃，积压压力大 |
| **NanoBot** | 4 → 6 | 14 → 19 | — | 🟢 高活跃，响应迅速 |
| **Hermes Agent** | 44 → 6 | 46 → 4 | — | 🟡 活跃，PR 合并率偏低(8%) |
| **PicoClaw** | 5 更新 | 14 更新(6 合并) | ✅ Nightly v0.2.9 | 🟢 快速迭代，安全响应快 |
| **NanoClaw** | 1 新开 | 4 → 6 | — | 🟢 中等活跃，节奏稳定 |
| **NullClaw** | 0 | 4 → 2 | — | 🟢 维护阶段，稳定 |
| **IronClaw** | 50 更新 | 50 更新 | — | 🟡 Reborn 迁移期，积压显著 |
| **LobsterAI** | 0 | 2 → 20 | ✅ 2026.6.10 | 🟢 密集迭代，合并率高 |
| **CoPaw** | 19 → 18 | 20 → 30 | ✅ v1.1.11 + beta.3 | 🟢 高活跃，合并率 60% |
| **ZeroClaw** | 22 → 19 | 31 → 19 | — | 🟡 v0.8.0 冲刺，PR 积压 |
| **Moltis** | 1 新开 | 0 | — | 🔴 低活跃 |
| **TinyClaw** | 0 | 0 | — | 🔴 无活动 |
| **ZeptoClaw** | 0 | 0 | — | 🔴 无活动 |

> **活跃项目 9 个，低活跃/无活动 3 个**。OpenClaw 以绝对量级领先，CoPaw 和 NanoBot 紧随其后。

---

## 3. OpenClaw 在生态中的定位

### 社区规模与影响力

OpenClaw 是生态中**体量最大、社区最活跃的项目**：单日 Issues 更新 500 条、PR 更新 500 条，远超第二名 CoPaw（Issues 37/PR 50）和第三名 Hermes Agent（各 50）。其 Issue 编号已突破 92,000，PR 编号突破 92,000，表明项目已积累大量历史贡献。

### 核心优势

| 维度 | OpenClaw | 同类对比 |
|------|----------|----------|
| **安全深度** | 今日发布安全强化版本，覆盖 11 个安全领域（沙箱、MCP、ACP、Discord 审核等） | 多数项目仅做基础沙箱隔离，OpenClaw 的安全覆盖面最广 |
| **多平台通道** | 支持 Slack、iMessage、Discord、Teams、Telegram、飞书等 | 多数项目支持 2-3 个通道，OpenClaw 覆盖最全 |
| **Agent 协作** | 子 Agent、ACP 协议、多 Agent 编排已有完整实现 | NanoBot/CoPaw 子 Agent 能力仍在完善中 |
| **Cron/定时任务** | 功能完整，社区正在推动直接执行模式 | NanoBot/Cron 刚修复参数校验，CoPaw 定时任务仍有触发失败 |

### 技术路线差异

- **vs NanoBot**：OpenClaw 走"大而全"路线，功能覆盖面广但积压多；NanoBot 走"小而精"路线，响应速度快、工程质量高，但功能覆盖面较窄。
- **vs Hermes Agent**：OpenClaw 社区贡献者更多元（PR 来源分散），Hermes 核心维护者集中度更高但 PR 合并率偏低。
- **vs CoPaw**：OpenClaw 更偏向开发者/运维场景（CLI 优先），CoPaw 更注重桌面端用户体验（Tauri 桌面应用 + WebUI）。
- **vs ZeroClaw**：OpenClaw 采用 TypeScript/Node.js 技术栈，ZeroClaw 采用 Rust，后者在性能和 WASM 插件生态上有差异化优势。

### 主要短板

积压的 P0/P1 Issue 数量偏高（10+ 条 P1 无 PR），会话状态一致性和消息投递可靠性是社区最集中的不满。Windows 更新失败（EBUSY）和 Docker 沙箱问题影响了特定平台用户。

---

## 4. 共同关注的技术方向

以下需求在**两个及以上项目**中同时涌现，代表生态级共识：

### 🔒 安全加固（涉及：OpenClaw、NanoBot、PicoClaw、NullClaw、CoPaw）

| 项目 | 具体诉求 |
|------|----------|
| OpenClaw | 沙箱绑定收紧、MCP stdio 安全、主机环境变量继承控制 |
| NanoBot | bwrap 沙箱 $HOME 重置（防逃逸） |
| PicoClaw | SSRF 防护绕过修复（198.18.0.0/15） |
| NullClaw | Agent 失败时 stderr 日志泄露到频道 |
| CoPaw | File Guard 安全策略、Agent 范围认证隔离 |

**共性诉求**：Agent 的沙箱隔离、信息防泄露、工具调用安全已成为基础门槛，而非差异化功能。

### 🔄 多模型 Provider 适配（涉及：OpenClaw、NanoBot、PicoClaw、CoPaw、IronClaw）

| 项目 | 具体诉求 |
|------|----------|
| OpenClaw | gpt-5.3-codex 后端传输、Gemini 模型解析 |
| NanoBot | DeepSeek 空响应回退、OpenAICompatProvider max_completion_tokens |
| PicoClaw | OpenAI web_search_preview 兼容性、Claude Opus 4.7 temperature 参数 |
| CoPaw | 小米 MiMo Provider、Free Model OAuth |
| IronClaw | NEAR AI Provider 配置持久化、Anthropic 上下文长度分类 |

**共性诉求**：用户不希望被绑定到单一 LLM 提供商，多模型灵活切换是刚需。Provider 配置的**向后兼容性**是高频痛点。

### 📡 消息投递可靠性（涉及：OpenClaw、NanoBot、PicoClaw、NullClaw）

| 项目 | 具体诉求 |
|------|----------|
| OpenClaw | 工具调用间文本泄露到消息渠道（#25592，31 条评论） |
| NanoBot | 流式超时无恢复（已修复） |
| PicoClaw | 异步子代理重复推送消息 |
| NullClaw | Cron 投递归属错误 |

**共性诉求**：Agent 的输出到用户可见消息之间的路由逻辑是普遍薄弱环节，消息去重、状态一致性、失败回退是共同挑战。

### 🖥️ 跨平台兼容性（涉及：OpenClaw、NanoBot、PicoClaw、LobsterAI、CoPaw）

| 项目 | 具体诉求 |
|------|----------|
| OpenClaw | Windows EBUSY 更新失败 |
| NanoBot | macOS 飞书 SDK 懒加载优化 |
| PicoClaw | Windows 路径分隔符不兼容（已修复） |
| LobsterAI | Windows 关闭行为配置、NSIS 安装修复 |
| CoPaw | Windows Tauri 多会话卡顿、aiohttp SSL 证书 |

**共性诉求**：Windows 是各平台中问题最多的，macOS 次之。跨平台一致性测试覆盖不足是普遍问题。

### 🤖 子 Agent 与多 Agent 编排（涉及：OpenClaw、NanoBot、CoPaw、ZeroClaw）

| 项目 | 具体诉求 |
|------|----------|
| OpenClaw | MCP 工具未注入子 Agent 会话 |
| NanoBot | 子代理模型预设、聚合通知 |
| CoPaw | Agent OS Driver 统一 MCP/A2A/ACP 抽象 |
| ZeroClaw | Subagent cwd 继承、Agent turn 引擎统一 |

**共性诉求**：多 Agent 协作从"能跑"走向"可靠"，子 Agent 的上下文隔离、模型差异化配置、结果聚合是下一阶段核心挑战。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键词 | 差异化亮点 |
|------|----------|----------|----------------|------------|
| **OpenClaw** | 全功能 Agent 运行时 | 开发者/运维/高级用户 | TypeScript, 多通道, ACP 协议 | 安全覆盖面最广，通道支持最全 |
| **NanoBot** | 轻量稳定 Agent 框架 | 个人用户/小团队 | Python, 模块化, 快速迭代 | 工程质量高，响应速度快 |
| **Hermes Agent** | 研究级 Agent 平台 | 研究人员/高级用户 | Python, TUI, 多模型路由 | 凭证池轮换、多 profile 隔离 |
| **PicoClaw** | 边缘/嵌入式 Agent | IoT 开发者/树莓派用户 | Go, 轻量, 跨平台 | 资源占用低，支持 ARM 架构 |
| **NanoClaw** | Skill 驱动 Agent 容器 | DevOps/容器化部署 | Docker, Skill 即配置 | "一切皆 Skill"的扩展哲学 |
| **NullClaw** | 安全优先 Agent 运行时 | 安全敏感场景 | Zig, 编译型, 最小攻击面 | 脱敏引擎、信息泄露防护 |
| **IronClaw** | Web3/NEAR 生态 Agent | Web3 开发者 | Rust, WASM, Reborn 架构 | NEAR 区块链集成、WASM 插件 |
| **LobsterAI** | 桌面端 AI 助手 | 普通用户/企业办公 | Electron, macOS/Windows | 桌面体验最完善，富文本编辑器 |
| **CoPaw** | 全栈 Agent 应用 | 个人/企业用户 | Python + Tauri, AgentScope | 桌面+Web 双端，AgentScope 生态 |
| **ZeroClaw** | 高性能模块化 Agent | 性能敏感场景 | Rust, WASM 插件, TUI | WASM 插件系统、zerocode TUI |
| **Moltis** | 语音 Agent 集成 | 语音应用开发者 | 多 Provider TTS | 小众语音合成集成 |

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：高活跃 + 快速迭代

| 项目 | 特征 |
|------|------|
| **OpenClaw** | 体量最大，安全加固与功能扩展并行，积压管理是挑战 |
| **CoPaw** | 版本迭代最快（今日连发两版），合并率最高（60%），桌面+Web 双端并进 |
| **NanoBot** | 工程质量提升期，核心稳定性问题集中落地，响应速度获社区认可 |

### 🔨 第二梯队：活跃 + 质量巩固

| 项目 | 特征 |
|------|------|
| **Hermes Agent** | 功能扩展期，但 PR 合并率偏低（8%），需加快审查节奏 |
| **IronClaw** | Reborn 架构迁移期，本地测试体验碎片化，crates.io 发布断裂 |
| **ZeroClaw** | v0.8.0 冲刺期，文档重构和 MCP 稳定性是重点，PR 积压 31 条 |
| **PicoClaw** | 安全响应快（SSRF 24h 修复），Windows 兼容性持续改善 |
| **LobsterAI** | 密集迭代期，Windows 体验系统性补齐，版本发布节奏稳定 |

### 🌿 第三梯队：中等活跃 + 维护打磨

| 项目 | 特征 |
|------|------|
| **NanoClaw** | 安全加固（IPC 隔离）和文档体系建立，节奏稳定 |
| **NullClaw** | 维护阶段，脱敏准确性和系统提示词一致性改善 |

### 💤 第四梯队：低活跃/休眠

| 项目 | 状态 |
|------|------|
| **Moltis** | 仅 1 个新 Issue，无 PR 活动 |
| **TinyClaw** | 无活动 |
| **ZeptoClaw** | 无活动 |

---

## 7. 值得关注的趋势信号

### 趋势一：安全从"附加项"变为"基础设施"

**信号**：OpenClaw 今日发布安全强化版本（11 个安全领域），NanoBot 修复沙箱逃逸，PicoClaw 封堵 SSRF，NullClaw 修复信息泄露，CoPaw 推出 File Guard。**5 个活跃项目同日处理安全议题**，这在以往日报中罕见。

**对开发者的启示**：Agent 安全不再是可选项。沙箱隔离、信息脱敏、SSRF 防护、凭证管理应作为 Agent 框架的一等公民功能设计，而非事后补丁。

### 趋势二：Agent 协作从"能跑"走向"可靠"

**信号**：OpenClaw 的 MCP 工具子 Agent 注入问题、NanoBot 的子代理模型预设和聚合通知、CoPaw 的 Agent OS Driver 统一抽象、ZeroClaw 的 Subagent cwd 继承——**4 个项目同时聚焦多 Agent 编排的可靠性**。

**对开发者的启示**：单 Agent 能力已接近天花板，多 Agent 协作是下一个竞争焦点。但协作的可靠性（上下文隔离、结果聚合、错误传播）远比"能 spawn 子 Agent"更重要。

### 趋势三：桌面端体验成为差异化竞争点

**信号**：LobsterAI 系统性补齐 Windows 体验（关闭行为、NSIS 安装、应用内更新），CoPaw 推进 Tauri 桌面端（但多会话卡顿问题突出），Hermes Agent 的 Desktop 入口点与 CLI 存在配置一致性差距。

**对开发者的启示**：CLI 优先的开发者工具市场已趋饱和，**桌面端体验**（尤其是 Windows）是获取非开发者用户的关键。但跨平台桌面开发的技术债不容忽视。

### 趋势四：WASM 插件生态初现雏形

**信号**：ZeroClaw 提出动态库插件系统 RFC（#7420），已有 office-tools WASM 插件 PR（#7454），v0.8.2 milestone tracker 明确将 WASM 插件作为核心特性。

**对开发者的启示**：插件化是 Agent 框架从"单体"走向"平台"的必经之路。WASM 提供了语言无关、沙箱隔离的插件运行环境，可能是 Agent 扩展性的最优解。

### 趋势五：版本升级回归问题频发

**信号**：NanoBot 用户从 0.1.5 升级到 0.2.0 后遭遇流式超时（"任何实际工作都无法进行"），CoPaw 本地千问模型在 1.1.9/1.1.10 版本无响应（1.1.5 正常），OpenClaw 的 exec 工具环境变量继承被标记为回归。

**对开发者的启示**：Agent 框架的版本升级风险高于普通软件——模型 API 变化、Provider 行为差异、配置格式变更都可能导致静默失败。**向后兼容性测试**和**渐进式迁移路径**应成为版本发布的标准流程。

### 趋势六：Configuration-as-Code 需求浮现

**信号**：IronClaw 核心维护者提出 Configuration-as-Code EPIC（#3036），NanoClaw 确立"一切改动皆为 skill"的定制化契约，OpenClaw 的掩码密钥系统（#10659）和凭证管理需求持续活跃。

**对开发者的启示**：随着 Agent 部署从个人走向团队/企业，**声明式、可审计、可版本化的配置管理**将成为刚需。分散的 .env、JSON、CLI 参数模式已无法满足多租户、多环境的企业部署需求。

---

> **报告总结**：个人 AI 助手开源生态已进入多项目并行竞争的成熟期。OpenClaw 以体量和功能覆盖面领先，但 NanoBot、CoPaw 等追赶者在工程质量和迭代速度上展现出强劲竞争力。安全加固、多 Agent 编排可靠性、桌面端体验、WASM 插件化是未来 6-12 个月的核心竞争赛道。对于技术决策者，建议根据目标用户（开发者 vs 普通用户）、部署场景（云端 vs 边缘 vs 桌面）和性能要求（功能丰富 vs 轻量稳定）进行差异化选型。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-06-11 | 项目地址：github.com/HKUDS/nanobot**

---

## 1. 今日速览

过去 24 小时，NanoBot 项目共处理 **10 条 Issues**（4 条新开/活跃，6 条已关闭）和 **33 条 Pull Requests**（14 条待合并，19 条已合并/关闭），社区活跃度处于**高位**。今日无新版本发布，但 PR 吞吐量极高，涉及 WebUI 体验优化、上下文管理修复、多平台通道改进等多个方向。值得注意的是，多位贡献者围绕 **上下文污染、流式超时回退、子代理通知机制** 等核心问题集中发力，反映出项目正从功能扩展阶段向**稳定性与工程质量**阶段过渡。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 19 条 PR 覆盖了以下关键方向：

### 🔧 核心稳定性修复

| PR | 说明 |
|---|---|
| **[#4272](https://github.com/HKUDS/nanobot/pull/4272)** | **流式超时回退**：LLM 流式响应中断时，系统现在会重试同一模型并回退到备用模型，而非返回截断回复。直接回应了 Issue #4013 的用户痛点。 |
| **[#4274](https://github.com/HKUDS/nanobot/pull/4274)** | **会话隔离修复**：为 `history.jsonl` 写入添加 `session_key` 元数据，按会话过滤 `# Recent History` 注入，解决跨会话上下文污染问题（对应 Issue #4259）。 |
| **[#4275](https://github.com/HKUDS/nanobot/pull/4275)** | **配置快速失败**：配置文件无法解析/迁移/验证时立即报错，而非静默降级。 |
| **[#4277](https://github.com/HKUDS/nanobot/pull/4277)** | **飞书 SDK 懒加载**：将 `lark_oapi` SDK 从模块导入时延迟到飞书通道实际启动时，减少启动开销。 |

### 🖥️ WebUI 体验优化

| PR | 说明 |
|---|---|
| **[#4278](https://github.com/HKUDS/nanobot/pull/4278)** | **分段式 Transcript 存储**：将大型 WebUI 会话的 JSONL 文件拆分为活跃追加段和不可变历史段，解决 8MB 限制导致聊天历史消失的问题。 |
| **[#4247](https://github.com/HKUDS/nanobot/pull/4247)** | **自动压缩超大 Transcript**：当 JSONL 文件超过 8MB 时自动压缩而非直接丢弃历史。 |
| **[#4255](https://github.com/HKUDS/nanobot/pull/4255)** | **按需版本检查**：用"点击检查"按钮替代后台 PyPI 轮询，消除守护线程开销。 |
| **[#4283](https://github.com/HKUDS/nanobot/pull/4283)** | **活动时长显示修正**：使用最终助手轮次延迟而非早期推理时间来计算活动块时长。 |

### 🛠️ 工具与配置改进

| PR | 说明 |
|---|---|
| **[#4273](https://github.com/HKUDS/nanobot/pull/4273)** | **exec 工具 `pathPrepend` 配置**：允许配置的目录在 PATH 查找中优先，解决 Issue #3934 中虚拟环境 PATH 追加无效的问题。 |
| **[#4285](https://github.com/HKUDS/nanobot/pull/4285)** | **Cron 调度参数校验**：在创建时拒绝无效 cron 表达式、非正 `every_ms`、缺失 `at_ms` 等非法参数。 |
| **[#4257](https://github.com/HKUDS/nanobot/pull/4257)** | **消息分块感知代码围栏**：`split_message` 现在避免在围栏代码块内部分割，防止 HTML 渲染损坏。 |

### 📡 通道与集成

| PR | 说明 |
|---|---|
| **[#4281](https://github.com/HKUDS/nanobot/pull/4281)** | **SiliconFlow 转录提供商**：新增 Whisper 兼容的 SiliconFlow 语音转录支持。 |
| **[#4289](https://github.com/HKUDS/nanobot/pull/4289)** | **Slack `groupRequireMention`**：在 allowlist 策略下支持仅在被 @提及时响应，细化群组消息控制。 |

### 📊 整体评估

项目在**工程质量**上迈出显著步伐：上下文隔离、流式超时回退、配置校验、Transcript 存储等核心基础设施问题集中得到修复。WebUI 方向的持续投入（分段存储、自动压缩、版本检查）表明团队正着力改善**长时间运行场景下的用户体验**。

---

## 4. 社区热点

### 🔥 最受关注的 Issues

| Issue | 链接 | 分析 |
|---|---|---|
| **#4259 `history.jsonl` 跨会话注入导致上下文污染** | [链接](https://github.com/HKUDS/nanobot/issues/4259) | 2 条评论，技术细节详实，指出 `ContextBuilder.build_system_prompt()` 未做会话隔离。**已通过 PR #4274 修复合并。** 这反映了多会话场景下用户对"记忆串味"的强烈担忧。 |
| **#4013 LLM 流式响应超时 90 秒** | [链接](https://github.com/HKUDS/nanobot/issues/4013) | 4 条评论（今日最多），用户从 0.1.5post2 升级到 0.2.0 后遇到此问题，导致"任何实际工作都无法进行"。**已通过 PR #4272 修复关闭。** |
| **#3934 exec 工具无法通过 pip 安装第三方库** | [链接](https://github.com/HKUDS/nanobot/issues/3934) | 3 条评论，用户发现虚拟环境 PATH 追加在 `$PATH` 末尾导致系统 Python 优先。**已通过 PR #4273 的 `pathPrepend` 配置解决。** |

### 🔥 最受关注的 PRs

| PR | 链接 | 分析 |
|---|---|---|
| **#4276 model-agnostic computer use** | [链接](https://github.com/HKUDS/nanobot/pull/4276) | 将 computer use 和 browser 工具作为原生进程内工具（非 MCP），支持 pixel-based 和 DOM-based 两种后端。这是**重大功能扩展**，方向对标行业前沿。 |
| **#4291 子代理可配置模型预设** | [链接](https://github.com/HKUDS/nanobot/pull/4291) | 允许 spawn 时指定命名模型预设，子代理可使用与父代理不同的 provider/model/temperature。直接回应了 Issue #4279 的子代理灵活性需求。 |
| **#4280 上下文压力下的记忆连续性** | [链接](https://github.com/HKUDS/nanobot/pull/4280) | 修复 consolidate 指针之后、`max_messages` 范围之前的消息丢失问题，关联 Issue #4044 的短期记忆丢失。 |

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| 🔴 **高** | **#4259** 跨会话上下文污染 — `history.jsonl` 未隔离导致其他会话摘要混入当前 system prompt | ✅ 已关闭 | [#4274](https://github.com/HKUDS/nanobot/pull/4274) |
| 🔴 **高** | **#4013** LLM 流式响应超时 90 秒无恢复 — 升级 0.2.0 后出现，阻断正常工作流 | ✅ 已关闭 | [#4272](https://github.com/HKUDS/nanobot/pull/4272) |
| 🔴 **高** | **#4237** bwrap 沙箱未重置 `$HOME` — 沙箱内命令写入宿主机 home 目录失败 | ✅ 已关闭 | 未明确标注 fix PR |
| 🟡 **中** | **#4287** 空模型响应未触发回退 — DeepSeek 高峰时段返回空 choices 时不 fallback | 🟡 待处理 | [#4288](https://github.com/HKUDS/nanobot/pull/4288)（待合并） |
| 🟡 **中** | **#4290** cronjob 因子代理提前结束 — 子代理完成后主代理无法回复结果 | 🔴 待处理 | 无 |
| 🟡 **中** | **#4286** 反复报告缺少 "sustained goal" 上下文 — 影响长文写作等长时间任务 | 🔴 待处理 | 无 |
| 🟡 **中** | **#4261** OpenAICompatProvider 不识别 `max_completion_tokens` — GPT-5.x 兼容性问题 | ✅ 已关闭 | 未明确标注 fix PR |
| 🟢 **低** | **#3934** exec 工具 PATH 追加顺序导致虚拟环境无效 | ✅ 已关闭 | [#4273](https://github.com/HKUDS/nanobot/pull/4273) |

---

## 6. 功能请求与路线图信号

| 功能请求 | 链接 | 信号强度 | 判断 |
|---|---|---|---|
| **子代理聚合通知** — 避免逐个推送结果导致 LLM 幻觉 | [#4279](https://github.com/HKUDS/nanobot/issues/4279) | 🟡 中 | 与 #4291（子代理模型预设）共同指向"子代理能力增强"方向，可能纳入下一版本 |
| **Computer Use 原生工具** — pixel-based + DOM-based 双后端 | [#4276](https://github.com/HKUDS/nanobot/pull/4276) | 🟢 强（已有 PR） | 重大功能扩展，若 review 顺利将成为下一版本亮点 |
| **WebUI 技能面板** — 通过斜杠命令激活技能 | [#4284](https://github.com/HKUDS/nanobot/pull/4284) | 🟢 强（已有 PR） | WebUI 体验持续优化，大概率合并 |
| **WebUI 文件管理** — 设置视图中浏览/管理 Agent 生成的文件 | [#4282](https://github.com/HKUDS/nanobot/pull/4282) | 🟡 中 | 实用性高，但需评估安全边界 |
| **Slack 群组 @提及 才响应** | [#4289](https://github.com/HKUDS/nanobot/pull/4288) | 🟢 强（已有 PR） | 通道精细化控制，趋势明确 |

**路线图判断：** 下一版本（可能为 v0.2.2 或 v0.3.0）大概率聚焦于：
1. **稳定性收尾** — 上下文隔离、流式回退、沙箱修复
2. **子代理能力** — 模型预设 + 聚合通知
3. **WebUI 成熟化** — 分段存储、技能面板、文件管理
4. **Computer Use**（若 review 周期允许）

---

## 7. 用户反馈摘要

### 😤 痛点

- **升级后回归**：用户从 0.1.5post2 升级到 0.2.0 后遭遇流式超时（Issue #4013），导致"任何实际工作都无法进行"，需要手动反复催促。说明版本升级的**向后兼容性测试**需要加强。
- **上下文"串味"**：多会话场景下，其他会话的历史摘要被混入当前会话（Issue #4259），严重影响多任务/多用户场景的可靠性。
- **沙箱安全缺陷**：bwrap 沙箱未重置 `$HOME`，沙箱内进程可能写入宿主机 home 目录（Issue #4237），存在安全隐患。
- **长时间任务失败**：cronjob 因子代理机制提前结束（Issue #4290），以及长文写作中反复报 "sustained goal" 缺失（Issue #4286），表明**长时任务编排**仍是薄弱环节。

### 😃 满意

- Issue #4013 用户明确表示 0.1.5post2 版本"非常好用"，对项目整体评价积极。
- 多个 Issue 在报告当天即获得 PR 修复（#4259→#4274, #4013→#4272, #3934→#4273），**响应速度**获得社区认可。

### 💡 使用场景

- **Telegram Bot 运行时**（Issue #4287）：使用 DeepSeek 作为主模型，高峰时段稳定性是关键需求。
- **网站内容创作**（Issue #4286）：长时间文章写作任务，对 sustained goal 机制依赖度高。
- **Python 脚本执行**（Issue #3934）：需要在 exec 工具中安装第三方库，对 PATH 管理有明确需求。

---

## 8. 待处理积压

以下 Issue/PR 尚未合并或缺少响应，建议维护者优先关注：

| 类型 | 链接 | 等待时间 | 建议 |
|---|---|---|---|
| 🔴 Issue | **[#4290](https://github.com/HKUDS/nanobot/issues/4290)** — cronjob 因子代理提前结束 | 刚报告（6/10） | 影响 cron 工作流完整性，建议尽快确认复现路径并指派修复 |
| 🔴 Issue | **[#4286](https://github.com/HKUDS/nanobot/issues/4286)** — 反复报告缺少 sustained goal 上下文 | 刚报告（6/10） | 影响长时间任务，建议与 #4290 一并排查子代理/长任务相关逻辑 |
| 🟡 Issue | **[#4287](https://github.com/HKUDS/nanobot/issues/4287)** — 空响应未触发回退 | 1 天 | Fix PR #4288 已提交，建议加速 review 合并 |
| 🟡 PR | **[#4288](https://github.com/HKUDS/nanobot/pull/4288)** — 空 choices fallback 修复 | 1 天 | 直接解决 #4287，建议优先合并 |
| 🟡 PR | **[#4280](https://github.com/HKUDS/nanobot/pull/4280)** — 上下文压力下记忆连续性 | 1 天 | 关联 #4044 短期记忆丢失，建议评估后决定合并或迭代 |
| 🟡 PR | **[#4276](https://github.com/HKUDS/nanobot/pull/4276)** — Computer Use 原生工具 | 1 天 | 大型功能 PR，建议启动正式 review 流程 |
| 🟡 PR | **[#4291](https://github.com/HKUDS/nanobot/pull/4291)** — 子代理模型预设 | 刚提交（6/11） | 新功能，建议引导社区讨论设计边界（spawnPresets 白名单策略） |
| 🟡 PR | **[#4282](https://github.com/HKUDS/nanobot/pull/4282)** — WebUI 文件管理 | 1 天 | 实用性高，但需评估路径遍历等安全风险 |

---

**总结：** NanoBot 今日在工程质量和稳定性方面取得显著进展，上下文隔离、流式回退、沙箱修复等核心问题集中落地。社区反馈的痛点集中在**版本升级回归**和**长时任务可靠性**两个方向，建议在下一版本发布前重点加强集成测试覆盖。Computer Use 和子代理增强等新功能正在酝酿中，项目正稳步向更成熟的企业级 Agent 运行时演进。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-06-11

---

## 1. 今日速览

Hermes Agent 今日处于**高活跃维护期**，过去 24 小时内 Issues 与 PR 各更新 50 条，社区参与度极高。Issues 以新开/活跃为主（44 条新开 vs 6 条关闭），显示问题涌入速度超过解决速度，积压仍在增长。PR 端有 46 条待合并，仅 4 条已合并/关闭，**合并率偏低（8%）**，存在一定的 review 瓶颈。无新版本发布，项目处于 v0.16.0 之后的密集迭代阶段。整体健康度：**活跃但积压压力增大**，维护者需加快 PR 审查节奏。

---

## 2. 版本发布

**无新版本发布。** 当前稳定版本仍为 v0.16.0。

---

## 3. 项目进展

今日合并/关闭的 PR 共 4 条，均为已存在 PR 的收尾：

| PR | 状态 | 内容摘要 |
|---|---|---|
| [#42813](https://github.com/NousResearch/hermes-agent/pull/42813) | ✅ 已合并 | 将上下文压缩摘要中的标题从现在时态改为历史标记（如 "Active Task" → "Historical Task (prior session)"），避免 LLM 将已压缩的历史当作当前活跃任务 |
| [#41824](https://github.com/NousResearch/hermes-agent/pull/41824) | ✅ 已合并 | 抑制 Docker 沙箱启动日志泄露到 TUI 对话记录，减少 transcript 污染 |
| [#36245](https://github.com/NousResearch/hermes-agent/pull/36245) | ✅ 已合并 | 修复 auxiliary task（如 title_generation、kanban specify/decompose）未正确传递 `extra_body` 参数的问题 |
| 第4条 | ✅ 已关闭 | （数据中未展示详情） |

**整体推进评估：** 合并的 3 个 PR 均为质量改进类（UX 清晰度、日志整洁、auxiliary task 正确性），无重大新功能落地。项目在稳定性打磨层面稳步前进。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

**① [#10143](https://github.com/NousResearch/hermes-agent/issues/10143) — Telegram Topic-to-Profile 路由（14 条评论）**
> 用户 `willy-scr` 请求让单个 Telegram bot 将不同 forum topic/thread 的消息路由到不同的 Hermes profile，使每个 topic 可以由具有专属模型、技能、记忆和 system prompt 的 agent 处理。

**分析：** 这是社区讨论最持久的需求之一（自 4 月 15 日创建至今），反映了多租户/多场景 Telegram 部署的核心诉求。14 条评论表明社区对此有强烈共识，但实现涉及 gateway 层架构改动，复杂度较高。

**② [#17861](https://github.com/NousResearch/hermes-agent/issues/17861) — Anthropic 多轮历史丢失 thinking/redacted_thinking 块（7 条评论，已关闭）**
> `_build_assistant_message()` 未将 Anthropic 的 content array 作为 source of truth 保留，导致多轮对话中 thinking 块丢失。

**分析：** 由 Hermes Agent 自身在调试会话中发现并提交，体现了项目的自我诊断能力。已关闭，说明已修复。

**③ [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) — OpenAI-Codex 凭证池在轮换时丢失新添加凭证（7 条评论）**
> 凭证轮换期间另一个 Hermes 进程重写 `~/.hermes/auth.json` 导致新添加的凭证被丢弃。

**分析：** 并发写入竞态条件问题，影响多进程部署场景。已有相关 PR #43856 尝试解决凭证池的退避策略。

**④ [#43731](https://github.com/NousResearch/hermes-agent/issues/43731) & [#43733](https://github.com/NousResearch/hermes-agent/issues/43733) — Honcho 内存插件两个 Bug（各 4 条评论）**
> - #43731: "一次性"内存文件迁移每次新会话都重复运行，导致重复事实洪水
> - #43733: 技能调用时注入的文本被同步为用户发言，污染 deriver

**分析：** 两个 bug 均由同一用户 `smckir` 在同一天报告，说明 Honcho 内存插件存在系统性质量问题。已有 PR #43803 尝试修复 Honcho 配置读取问题。

**⑤ [#40416](https://github.com/NousResearch/hermes-agent/issues/40416) — Telegram 上下文压缩视觉删除消息（4 条评论，👍1）**
> 上下文压缩触发时，消息从用户聊天视图中视觉消失，用户体验极差。

**分析：** 这是一个影响终端用户感知的关键 UX 问题，虽然技术上是 Telegram 消息编辑的副作用，但用户反馈强烈。

---

## 5. Bug 与稳定性

### 🔴 P1 — 严重

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#17861](https://github.com/NousResearch/hermes-agent/issues/17861) | Anthropic 多轮历史丢失 thinking 块 | ✅ 已关闭 | 已修复 |

### 🟠 P2 — 重要

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) | OpenAI-Codex 凭证池竞态丢失凭证 | 🔴 开放 | [#43856](https://github.com/NousResearch/hermes-agent/pull/43856)（相关，退避策略改进） |
| [#40416](https://github.com/NousResearch/hermes-agent/issues/40416) | Telegram 上下文压缩视觉删除消息 | 🔴 开放 | 无 |
| [#43830](https://github.com/NousResearch/hermes-agent/issues/43830) | WhatsApp bridge 向 LID 地址群组发送消息静默失败 | 🔴 开放 | 无（建议升级 Baileys 至 v7.0.0-rc13） |
| [#43814](https://github.com/NousResearch/hermes-agent/issues/43814) | WhatsApp bridge Baileys CVE-2026-48063 安全漏洞 | 🔴 开放 | 无（需升级依赖） |
| [#43823](https://github.com/NousResearch/hermes-agent/issues/43823) | Desktop TUI 不注册 shell hooks | 🔴 开放 | 无 |
| [#43835](https://github.com/NousResearch/hermes-agent/issues/43835) | Telegram 双消息（工具输出 + 响应体） | 🔴 开放 | 无 |
| [#43617](https://github.com/NousResearch/hermes-agent/issues/43835) | kimi-coding provider 使用错误的 endpoint + User-Agent | 🔴 开放 | 无 |
| [#43571](https://github.com/NousResearch/hermes-agent/issues/43571) | Desktop 忽略 `--profile` CLI 参数 | 🔴 开放 | 无 |
| [#43747](https://github.com/NousResearch/hermes-agent/issues/43747) | openai-codex 凭证池错误标记健康账户为 rate-limited | 🔴 开放 | 无 |
| [#43827](https://github.com/NousResearch/hermes-agent/issues/43827) | MiniMax-M3 中文推理标签泄露到用户输出 | 🔴 开放 | 无 |
| [#43713](https://github.com/NousResearch/hermes-agent/issues/43713) | profile config providers dict 替换而非继承默认 providers | 🔴 开放 | 无 |
| [#43657](https://github.com/NousResearch/hermes-agent/issues/43657) | aiohttp ClientSession 泄漏 | 🔴 开放 | 无 |
| [#39856](https://github.com/NousResearch/hermes-agent/issues/39856) | Email adapter 在不支持 RFC 2971 的服务器上连接失败 | 🔴 开放 | 无 |
| [#43810](https://github.com/NousResearch/hermes-agent/issues/43810) | Nix 构建因 extraPythonPackages 与 sealed venv 冲突失败 | 🔴 开放 | 无 |

### 🟡 P3 — 一般

| Issue | 描述 | 状态 |
|---|---|---|
| [#43731](https://github.com/NousResearch/hermes-agent/issues/43731) | Honcho 内存迁移重复运行 | 开放 |
| [#43733](https://github.com/NousResearch/hermes-agent/issues/43733) | Honcho 技能调用文本污染记忆 | 开放 |
| [#43829](https://github.com/NousResearch/hermes-agent/issues/43829) | Dashboard 技能安装因缺少 `--yes` 始终取消 | 开放 |
| [#43825](https://github.com/NousResearch/hermes-agent/issues/43825) | Desktop 打开 Settings 清除 prompt 窗口文本 | 开放 |
| [#43837](https://github.com/NousResearch/hermes-agent/issues/43837) | `hermes update` 每次无条件重装 Node.js 依赖，Windows 浪费 ~8 分钟 | 开放 |
| [#43796](https://github.com/NousResearch/hermes-agent/issues/43796) | Profile 作用域技能每次 skill_view 触发安全警告 | 开放 |

**关键发现：**
- **WhatsApp 安全问题突出**：CVE-2026-48063 安全漏洞 + LID 群组消息静默失败，建议优先升级 Baileys 依赖。
- **Honcho 内存插件质量堪忧**：3 个关联 bug 集中爆发，建议对该插件进行系统性审查。
- **Desktop/TUI 体验问题密集**：shell hooks 不生效、Settings 清除输入、profile 参数被忽略，显示 Desktop 入口点与 CLI 存在配置一致性差距。

---

## 6. 功能请求与路线图信号

### 高可能性纳入下一版本的功能

| 需求 | Issue | 对应 PR | 信号强度 |
|---|---|---|---|
| 凭证池指数退避 | [#15296](https://github.com/NousResearch/hermes-agent/issues/15296) | [#43856](https://github.com/NousResearch/hermes-agent/pull/43856)（今日新开） | ⭐⭐⭐ PR 已存在 |
| Cron 独立守护进程模式 | — | [#43864](https://github.com/NousResearch/hermes-agent/pull/43864)（今日新开） | ⭐⭐⭐ PR 已存在 |
| 技能 trigger_keywords 索引 | [#3879](https://github.com/NousResearch/hermes-agent/issues/3879) | [#43862](https://github.com/NousResearch/hermes-agent/pull/43862)（今日新开） | ⭐⭐⭐ PR 已存在 |
| 空会话自动清理 | — | [#43855](https://github.com/NousResearch/hermes-agent/pull/43855)（今日新开，port from gemini-cli） | ⭐⭐⭐ PR 已存在 |
| 多语言 i18n（15 种语言） | [#40347](https://github.com/NousResearch/hermes-agent/issues/40347)（俄语） | [#38846](https://github.com/NousResearch/hermes-agent/pull/38846)（已存在，同步至 v0.16.0） | ⭐⭐ PR 已存在且持续更新 |
| 本地 + 远程后端同时连接 | [#37876](https://github.com/NousResearch/hermes-agent/issues/37876) | 无 | ⭐ 仅 Issue |

### 长期愿景级需求

| 需求 | Issue | 说明 |
|---|---|---|
| Telegram Topic-to-Profile 路由 | [#10143](https://github.com/NousResearch/hermes-agent/issues/10143) | 架构级改动，14 条评论持续讨论，短期内难以落地 |
| Feishu 交互式卡片按钮 | [#43818](https://github.com/NousResearch/hermes-agent/issues/43818) | 飞书平台体验对齐 |

---

## 7. 用户反馈摘要

### 😤 痛点

1. **凭证管理混乱**：多个用户报告 OpenAI-Codex 凭证池在轮换时丢失凭证（#19566）、错误标记健康账户为 rate-limited（#43747），显示凭证池的并发安全和状态判断逻辑存在根本性问题。

2. **Desktop 与 CLI 行为不一致**：`--profile` 参数被 Desktop 忽略（#43571）、shell hooks 在 TUI 中不生效（#43823），用户期望 Desktop 不是"二等公民"。

3. **WhatsApp 桥接可靠性**：LID 群组消息静默失败（#43830）+ 安全漏洞（#43814），WhatsApp 用户面临功能性和安全性双重风险。

4. **Honcho 内存插件体验差**：重复迁移洪水（#43731）、技能文本污染记忆（#43733）、自托管 v3 服务器不兼容（#43775），用户对该插件信心不足。

5. **更新体验**：`hermes update` 在 Windows 上浪费 ~8 分钟重复安装 Node.js 依赖（#43837），用户感到沮丧。

### 😐 中性 / 建设性

- 用户 `smckir` 一次性提交了 3 个 Honcho 相关 bug，说明用户在认真使用该插件并期望它变好。
- 用户 `warment` 主动为 Desktop 创建了俄语安装器（#40347），社区本地化贡献活跃。

### 👍 满意信号

- Issue #17861 由 Hermes Agent 自身在调试中发现并提交，用户对项目的自我诊断能力表示认可。
- 多个 PR 从 gemini-cli 移植（#43855、#43852），显示社区对跨项目最佳实践的积极采纳。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者关注：

### 🔴 长期开放的重要 Issue（>30 天无实质进展）

| Issue | 创建日期 | 天数 | 描述 | 优先级 |
|---|---|---|---|---|
| [#10143](https://github.com/NousResearch/hermes-agent/issues/10143) | 2026-04-15 | 57 天 | Telegram Topic-to-Profile 路由 | 高（14 条评论） |
| [#15296](https://github.com/NousResearch/hermes-agent/issues/15296) | 2026-04-24 | 48 天 | 凭证池无指数退避 | 高（已有 PR #43856） |
| [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) | 2026-05-04 | 38 天 | OpenAI-Codex 凭证池竞态 | 高 |
| [#39856](https://github.com/NousResearch/hermes-agent/issues/39856) | 2026-06-05 | 6 天 | Email adapter RFC 2971 兼容性 | 中 |

### 🟡 长期开放的 PR（等待 review >2 天）

| PR | 创建日期 | 天数 | 描述 |
|---|---|---|---|
| [#42846](https://github.com/NousResearch/hermes-agent/pull/42846) | 2026-06-09 | 2 天 | 安全：出站消息凭证脱敏 |
| [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) | 2026-06-04 | 7 天 | Desktop 多语言 i18n（15 种语言） |
| [#43703](https://github.com/NousResearch/hermes-agent/pull/43703) | 2026-06-10 | 1 天 | CI 可靠性改进 |

### ⚠️ 建议优先处理

1. **WhatsApp 安全漏洞**（[#43814](https://github.com/NousResearch/hermes-agent/issues/43814)）：CVE-2026-48063 为关键安全漏洞，应优先升级 Baileys 依赖。
2. **凭证池竞态**（[#19566](https://github.com/NousResearch/hermes-agent/issues/19566) + [#43747](https://github.com/NousResearch/hermes-agent/issues/43747)）：两个关联 bug 指向同一根因，建议统一修复。
3. **Desktop i18n**（[#38846](https://github.com/NousResearch/hermes-agent/pull/38846)）：PR 已存在 7 天且持续同步上游，建议尽快 review 合并。

---

> **日报生成时间：** 2026-06-11  
> **数据来源：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)  
> **分析周期：** 过去 24 小时

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-11

---

## 1. 今日速览

PicoClaw 今日活跃度**较高**，共处理 5 条 Issue 更新与 14 条 PR 更新，并发布了新的 Nightly 构建版本。项目整体呈现**快速迭代、密集修复**的状态：安全类漏洞（SSRF）在报告后 24 小时内即有关闭 PR 跟进，Windows 兼容性问题（#2472）也在近两个月后迎来修复 PR 合并。社区贡献者集中在**类型断言安全检查、多平台兼容性、Provider API 适配**等方向，反映出项目正从功能扩张期转向**稳定性与安全性加固期**。

---

## 2. 版本发布

### Nightly Build — `v0.2.9-nightly.20260610.b9a8fad6`

- **类型**：自动化 Nightly 构建，**非稳定版本**，请谨慎用于生产环境。
- **基于**：`v0.2.9` → `main` 分支的最新累积变更。
- **参考链接**：[Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

> ⚠️ Nightly 版本包含当日合并的多项修复（SSRF 防护、Windows 路径分隔符、类型断言检查等），适合测试环境验证，不建议直接部署到生产。

---

## 3. 项目进展

今日合并/关闭的 PR 共 6 条，推进了以下关键方向：

| PR | 状态 | 说明 |
|---|---|---|
| **#3089** `fix os.Root api on windows issue` | ✅ 已合并 | 修复 Windows 下 `list_dir` 因反斜杠路径分隔符导致 `os.Root` 返回 `invalid argument` 的问题（对应 Issue #2472，近两个月后终于关闭） |
| **#3085** `fix(tools): block 198.18.0.0/15 in SSRF guard` | ✅ 已合并 | 在 `web_fetch` 的 SSRF 防护中补充封锁 RFC 2544 基准测试地址段 `198.18.0.0/15`，封堵绕过漏洞（对应 Issue #3077） |
| **#2945** `feat: add debug trace viewer (picocaw-tracer)` | ✅ 已合并 | 新增独立二进制 `picocaw-tracer`，提供实时 LLM 调用链路追踪 Web UI，可查看每轮的系统提示、消息数组、工具执行和响应元数据 |
| **#2951** `fix: use function-type web_search for better API compatibility` | ✅ 已合并 | 修复 OpenAI API 端点不支持 `web_search_preview` 工具类型时返回 HTTP 400 的问题，改用标准 `function` 类型 |
| **#2948** `fix: skip temperature parameter for claude-opus-4-7 models` | ✅ 已合并 | 修复 `claude-opus-4-7` 模型不再接受 `temperature` 参数导致的 HTTP 400 错误 |
| **#3043** `fix: check strconv.Atoi and json.Unmarshal errors` | ✅ 已合并 | 修复两处静默丢弃错误的问题（`strconv.Atoi` 和 `json.Unmarshal`），提升代码健壮性 |

**整体评估**：项目在安全加固（SSRF 修复）、跨平台兼容性（Windows 路径）、多模型 Provider 适配（OpenAI/Claude）和可观测性（Tracer）四个方向同步推进，健康度良好。

---

## 4. 社区热点

### 🔥 Issue #2472 — `list_dir` Windows 路径分隔符 Bug
- **链接**：[sipeed/picoclaw#2472](https://github.com/sipeed/picoclaw/issues/2472)
- **热度**：5 条评论，👍 1
- **分析**：这是今日讨论最活跃的 Issue。问题根源在于 Windows 平台使用反斜杠 `\` 作为路径分隔符，而 Go 的 `os.Root`/`fs.FS` 严格要求正斜杠 `/`。该 Issue 自 4 月 10 日创建以来持续活跃，终于在今日通过 PR #3089 合并修复。背后诉求是**Windows 用户的开箱即用体验**，反映出 PicoClaw 的跨平台用户群体正在增长。

### 🔒 Issue #3077 — SSRF 绕过漏洞（已关闭）
- **链接**：[sipeed/picoclaw#3077](https://github.com/sipeed/picoclaw/issues/3077)
- **分析**：安全研究员报告 `web_fetch` 的 SSRF 防护可通过 `198.18.0.0/15`（RFC 2544 基准测试地址段）绕过。该地址段虽非全局可路由，但未被列入私有/受限地址黑名单。PR #3085 在 24 小时内完成修复并合并，响应速度值得肯定。

### 🐛 Issue #3094 — 异步子代理重复消息
- **链接**：[sipeed/picoclaw#3094](https://github.com/sipeed/picoclaw/issues/3094)
- **分析**：新报告 Bug，`spawn` 派发异步子代理任务完成后，飞书/Telegram 等通道会收到两条相同消息——一条是子代理原始结果的直接推送，另一条是主代理汇总后的排版输出。这涉及**消息路由逻辑的去重机制**，尚无修复 PR。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 **高** | [#3077](https://github.com/sipeed/picoclaw/issues/3077) | SSRF 防护绕过（`198.18.0.0/15`） | ✅ 已修复（PR #3085 已合并） |
| 🟡 **中** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) | Windows 下 `list_dir` 路径分隔符不兼容 | ✅ 已修复（PR #3089 已合并） |
| 🟡 **中** | [#3094](https://github.com/sipeed/picoclaw/issues/3094) | 异步子代理完成时重复推送消息 | 🔴 待修复，无 PR |
| 🟢 **低** | [#3090](https://github.com/sipeed/picoclaw/issues/3090) | iOS Safari < 16.4 上面板无法使用 | 🔴 待修复，无 PR |
| 🟢 **低** | [#3091](https://github.com/sipeed/picoclaw/pull/3091) | `openai_compat` 中 `native_search` 类型断言未检查 `ok` | 🔄 PR 待合并 |
| 🟢 **低** | [#3092](https://github.com/sipeed/picoclaw/pull/3092) | `skills_install` 中 `version`/`force` 类型断言未检查 `ok` | 🔄 PR 待合并 |
| 🟢 **低** | [#3053](https://github.com/sipeed/picoclaw/pull/3053) | `evolution` 中 `LoadOrStore` 类型断言未检查 `ok` 可能导致 panic | 🔄 PR 待合并 |

> **类型断言安全检查**成为今日 PR 的集中主题（#3091、#3092、#3053、#3043），说明社区正在系统性地排查 Go 代码中不安全的类型断言模式，这是稳定性加固的积极信号。

---

## 6. 功能请求与路线图信号

| 方向 | Issue/PR | 描述 | 信号强度 |
|---|---|---|---|
| **Agent 协作总线** | [PR #2937](https://github.com/sipeed/picocaw/pull/2937) | 引入 Agent 间持久化通信总线（邮箱、协作线程、结构化消息信封、权限感知投递） | ⭐⭐⭐ 大型功能 PR，长期未合并但仍在活跃更新 |
| **可观测性** | [PR #2945](https://github.com/sipeed/picoclaw/pull/2945) ✅ | `picoclaw-tracer` 调试追踪 UI 已合并 | ✅ 已落地 |
| **启动器访问控制** | [PR #3083](https://github.com/sipeed/picoclaw/pull/3083) | 启动器网络访问控制加固，支持配置 localhost 绕过和可信代理 CIDR | ⭐⭐ 安全增强，待合并 |
| **新通信协议** | [#3093](https://github.com/sipeed/picoclaw/issues/3093) | 请求支持 SimpleX / Wire / Tox 网关 | ⭐ 单一用户请求，尚无社区响应 |
| **会话隔离配置持久化** | [PR #3067](https://github.com/sipeed/picoclaw/pull/3067) | 修复 `dm_scope` 设置无法保存的问题 | ⭐⭐ 用户体验修复，待合并 |

**判断**：Agent 协作总线（#2937）是最大的在途功能，架构复杂度高，可能需要更多审查周期。启动器安全加固（#3083）和会话配置持久化（#3067）属于高优先级的小修复，有望在下一版本合并。SimpleX/Tox 等协议支持目前社区关注度较低，短期内不太可能排入路线图。

---

## 7. 用户反馈摘要

**痛点**：
- **Windows 兼容性问题长期未解决**：Issue #2472 自 4 月创建，用户等待近两个月才获得修复，期间 Windows 用户无法正常使用 `list_dir` 工具。
- **异步子代理消息重复**（#3094）：影响飞书/Telegram 用户体验，用户明确区分了"粗糙的原始推送"和"排版后的汇总"两条消息，期望只收到一条。
- **iOS 旧版本 Safari 兼容性**（#3090）：运行在 Raspberry Pi OS 上的 PicoClaw 实例，其 Web 面板在 iOS < 16.4 的 Safari 上完全不可用，影响移动端管理体验。
- **配置无法持久化**（PR #3067）：用户在 UI 上修改"会话隔离范围"后无法保存，刷新页面即恢复默认，属于基础功能缺陷。

**满意点**：
- SSRF 安全漏洞从报告到修复合并不到 24 小时，安全响应速度获得社区认可。
- `picocaw-tracer` 的合并为用户提供了开箱即用的调试追踪能力，降低排查成本。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于 stale 状态，建议维护者关注：

| 项目 | 链接 | 状态 | 等待时长 | 建议 |
|---|---|---|---|---|
| PR #2937 | [Feat/agent collaboration](https://github.com/sipeed/picoclaw/pull/2937) | OPEN / stale | 自 5 月 24 日创建，已 18 天 | 大型架构 PR，建议维护者明确审查时间表或拆分 |
| PR #2951 | [fix: use function-type web_search](https://github.com/sipeed/picoclaw/pull/2951) | CLOSED / stale | 5 月 26 日创建 | 已合并，可清理 stale 标签 |
| PR #2948 | [fix: skip temperature for claude-opus-4-7](https://github.com/sipeed/picoclaw/pull/2948) | CLOSED / stale | 5 月 26 日创建 | 已合并，可清理 stale 标签 |
| PR #2945 | [feat: add debug trace viewer](https://github.com/sipeed/picoclaw/pull/2945) | CLOSED / stale | 5 月 26 日创建 | 已合并，可清理 stale 标签 |
| Issue #3094 | [异步子代理重复消息](https://github.com/sipeed/picoclaw/issues/3094) | OPEN | 今日新报告 | 建议尽快确认并分配修复 |
| Issue #3090 | [iOS Safari < 16.4 面板不可用](https://github.com/sipeed/picoclaw/issues/3090) | OPEN | 今日新报告 | 建议确认影响范围，评估是否需要 polyfill |

> **特别提醒**：PR #2937（Agent Collaboration Bus）是最大的在途功能，已标记 stale 但仍在活跃更新，建议维护者与其作者沟通审查进度，避免贡献者流失。

---

*数据来源：GitHub sipeed/picoclaw | 报告生成时间：2026-06-11 | 分析周期：过去 24 小时*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-06-11

---

## 1. 今日速览

NanoClaw 今日活跃度**中等偏高**：过去 24 小时内共处理 10 条 PR（6 条已合并/关闭，4 条待审）和 1 条新开 Issue，无新版本发布。项目当前处于**功能快速迭代期**，社区贡献集中在 skill 生态扩展（guardrails、web-search-plus、tool-visibility）和运维可靠性（容器日志持久化、僵尸卡片清理）。核心架构层面，多运行时 Agent SDK 抽象（Issue #1690）持续引发讨论，表明社区对解耦底层 LLM 提供商的诉求强烈。整体项目健康度良好，合并节奏稳定，但待审 PR 积压略有增加。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 共 6 条，按重要性排列：

| # | PR | 状态 | 说明 |
|---|-----|------|------|
| 1 | **PR #2721** — docs: customizing intro, skills model, and skill guidelines | ✅ 已合并 | 新增三份公共文档（`docs/customizing.md`、技能模型说明、技能指南），正式确立了"一切改动皆为 skill"的定制化契约，降低贡献者上手门槛。这是项目文档体系的重要里程碑。 |
| 2 | **PR #3** — Secure IPC with per-group namespaces | ✅ 已合并 | 将共享全局 IPC 目录改为按 groupFolder 隔离的命名空间，通过请求来源目录而非自报数据确定身份，修复了权限提升漏洞。这是**安全层面的关键修复**，已积压超过 4 个月终于落地。 |
| 3 | **PR #2718** — fix(feishu): cleanup zombie active_cards | ✅ 已合并 | 修复飞书交互卡片在 agent-runner 被 PROCESS_TIMEOUT 杀死后仍显示"运行中"长达 50+ 分钟的生产 Bug。根因是 `deleteActiveCard` 仅在 SDK `final` 事件中触发，异常退出时不会执行。 |
| 4 | **PR #2719** — feat: add uninstall.sh | ✅ 已合并 | 新增带确认提示、dry-run 和 OneCLI agent 清理的逐副本卸载脚本，完善项目生命周期管理。 |
| 5 | **PR #2723** — Finance dd agent | ❌ 已关闭 | 金融尽调 agent 贡献，未说明关闭原因。 |
| 6 | **PR #2724** — Opened against wrong repo | ❌ 已关闭 | 误开至错误仓库，立即关闭。 |

**整体推进评估**：项目在安全加固（IPC 隔离）、文档体系（skills 模型正式化）、生产稳定性（飞书僵尸卡片）三个维度均有实质进展。IPC 安全修复的合并尤其值得关注——该 PR 自 2 月创建以来长期未处理，今日合并说明维护者正在清理积压。

---

## 4. 社区热点

### Issue #1690 — Multi-runtime agent SDK abstraction
- **链接**: [nanocoai/nanoclaw#1690](https://github.com/nanocoai/nanoclaw/issues/1690)
- **数据**: 6 条评论，3 个 👍，创建于 4 月 7 日，6 月 10 日仍有更新
- **分析**: 这是今日唯一活跃的 Issue，也是近期社区讨论最集中的话题。贡献者 `chiptoe-svg` 在 NanoClaw 之上构建了多运行时抽象层，允许将不同 Agent SDK（Claude、Codex、本地模型）作为模块化 skill 安装——与现有 channel 模式（`/add-telegram`、`/add-slack`）完全对称。核心诉求是**解耦 NanoClaw 与特定 LLM 提供商的绑定**，使 host 层通过统一的 `AgentRuntime` 接口调用不同后端。6 条评论和 3 个 👍 表明社区对此方向有明确需求，但 Issue 自创建至今已逾 2 个月仍处于 OPEN 状态，说明该架构变更的优先级或实现方案尚未达成共识。

### PR #2726 — feat: add /add-guardrails skill
- **链接**: [nanocoai/nanoclaw#2726](https://github.com/nanocoai/nanoclaw/pull/2726)
- **分析**: 新增 per-agent-group 输入/输出 guardrails，支持确定性正则/关键词规则（prompt injection 短语拦截、凭证泄露模式），`block`/`flag` 双动作，聊天告警，以及 host 端隔离审计轨迹。在规则解析失败时"fails closed"（默认拒绝），安全设计思路严谨。这是对 Issue #1690 所反映的"多运行时安全管控"需求的直接响应。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|----------|------|------|--------|
| 🔴 **高** | 飞书交互卡片在 agent-runner 异常退出后永久卡在"运行中"状态 | ✅ 已修复 | PR #2718（已合并） |
| 🟡 **中** | Agent 容器 stdout/stderr 被丢弃，无法事后排查问题 | 🔧 修复中 | PR #2727（待审） |
| 🟢 **低** | 容器日志持久化缺失导致调试困难（与上一条同源） | 同上 | 同上 |

**说明**：飞书僵尸卡片是已确认的生产 Bug，今日已合并修复。容器日志持久化（PR #2727）是对应的 sibling PR（源自 microsoft/amplifier-app-nanoclaw#7），将 stdout+stderr 落盘，属于运维可观测性改进，目前待审。

---

## 6. 功能请求与路线图信号

| 方向 | 来源 | 信号强度 | 判断 |
|------|------|----------|------|
| **多运行时 Agent SDK 抽象** | Issue #1690 | ⭐⭐⭐ | 高优先级架构需求，已有社区原型实现，可能纳入下一大版本 |
| **Per-agent-group 安全 guardrails** | PR #2726 | ⭐⭐⭐ | 安全能力刚需，设计成熟，大概率近期合并 |
| **多 provider 网页搜索** | PR #2725 | ⭐⭐ | 实用工具 skill，无 MCP 依赖，轻量易审，合并阻力小 |
| **实时 tool-call 预览** | PR #2211 | ⭐⭐ | 自 5 月创建，6 月 10 日仍在更新，贡献者积极跟进，但审核周期较长 |
| **容器日志持久化** | PR #2727 | ⭐⭐ | 运维刚需，有 sibling PR 背书，预计近期处理 |

**路线图预判**：下一版本的主题可能是 **"安全 + 可观测性 + 多运行时支持"**。Guardrails skill 和 IPC 安全修复已落地，容器日志持久化和多运行时抽象正在推进中。

---

## 7. 用户反馈摘要

从 Issue #1690 的评论和 PR 描述中提炼：

- **痛点 1 — 运行时锁定**：用户不希望被绑定到单一 LLM 提供商，需要在 Claude、Codex 和本地模型之间灵活切换。这反映了 AI 基础设施领域"vendor lock-in"的普遍焦虑。
- **痛点 2 — 安全管控缺失**：多 agent 场景下缺乏 per-group 的输入/输出过滤机制，存在 prompt injection 和凭证泄露风险。PR #2726 的"fails closed"设计表明用户对安全默认值的重视。
- **痛点 3 — 运维可观测性不足**：容器日志被丢弃（PR #2727）、飞书卡片状态不同步（PR #2718）等问题表明，随着 NanoClaw 进入更多生产场景，用户对可观测性和可靠性的要求在提升。
- **满意点**：skills 模式（`/add-xxx`）的对称性设计获得社区认可，多运行时抽象提案直接复用了这一模式，说明现有架构的扩展性设计是成功的。

---

## 8. 待处理积压

| 项目 | 链接 | 等待时间 | 建议 |
|------|------|----------|------|
| **Issue #1690** — Multi-runtime agent SDK abstraction | [链接](https://github.com/nanocoai/nanoclaw/issues/1690) | 65 天 | 🔴 长期未响应。社区已有原型实现，建议维护者明确立场：接受/拒绝/需修改。若接受，可引导贡献者提交正式 PR。 |
| **PR #2211** — tool-visibility skill | [链接](https://github.com/nanocoai/nanoclaw/pull/2211) | 39 天 | 🟡 贡献者持续跟进，但审核周期过长。建议至少给出初步反馈，避免贡献者流失。 |
| **PR #2727** — 容器日志持久化 | [链接](https://github.com/nanocoai/nanoclaw/pull/2727) | 1 天 | 🟢 刚提交，正常排队。 |
| **PR #2726** — /add-guardrails skill | [链接](https://github.com/nanocoai/nanoclaw/pull/2726) | 1 天 | 🟢 刚提交，安全相关建议优先审。 |
| **PR #2725** — web-search-plus skill | [链接](https://github.com/nanocoai/nanoclaw/pull/2725) | 1 天 | 🟢 刚提交。 |

**积压健康度评估**：当前待审 PR 4 条，其中 3 条为昨日/今日新提交，属于正常流速。但 Issue #1690（65 天）和 PR #2211（39 天）的长期未响应需要关注——前者涉及核心架构方向，后者可能导致贡献者流失。建议维护者本周内至少对这两项给出明确反馈。

---

> **日报生成时间**: 2026-06-11  
> **数据来源**: GitHub API (nanocoai/nanoclaw)  
> **分析引擎**: OWL Project Analytics

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw 项目动态日报 — 2026-06-11

---

## 1. 今日速览

过去 24 小时内，NullClaw 项目**无新 Issue 报告、无新版本发布**，但 PR 活动较为活跃，共 6 条 PR 更新（4 条待合并、2 条已关闭）。所有 PR 均围绕**稳定性修复与配置灵活性提升**展开，未出现新功能提交。整体来看，项目当前处于**维护与打磨阶段**，社区贡献者集中在修复边界场景和测试泄漏问题，活跃度中等偏上。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日共有 **2 条 PR 被合并/关闭**，均于 2026-06-10 完成处理：

| PR | 状态 | 核心内容 |
|---|---|---|
| [#945](https://github.com/nullclaw/nullclaw/pull/945) | ✅ 已关闭 | **修复脱敏模块的误报**：`redaction.zig` 中的 `matchPhone` 函数此前会将系统提示词中自动生成的 ISO 日期时间格式（如 `2026-06-02 20:17`）误判为电话号码并进行脱敏替换。新增 `isDateLike()` 守卫逻辑，排除日期/时间模式的误匹配。 |
| [#946](https://github.com/nullclaw/nullclaw/pull/946) | ✅ 已关闭 | **修复系统提示词中的工具过滤**：新增 `filterToolsForPromptText`，确保文本形式的系统提示词仅包含内置工具和 `always` 过滤组的 MCP 工具，动态分组的 MCP 工具不再出现在文本中（其 schema 仍通过原生 API tool-calling 传递）。同时移除了 `Parallel` 相关冗余逻辑。 |

**项目整体向前推进**：脱敏准确性和系统提示词一致性得到改善，减少了 AI 代理在输出中产生混乱信息的风险。

---

## 4. 社区热点

今日无 Issue 讨论，PR 评论数据暂不可用（`undefined`），但以下 **4 条待合并 PR** 值得重点关注：

| PR | 作者 | 核心诉求 |
|---|---|---|
| [#951](https://github.com/nullclaw/nullclaw/pull/951) | vernonstinebaker | **抑制 agent 失败时的 stderr 初始化日志泄露**：当 agent 子进程非零退出时，`buildAgentOutput` 此前会将 stderr 中的初始化日志（内存计划、MCP 服务器注册、通道启动信息）作为 agent 响应推送到频道。修复后仅在成功时使用 stderr 作为回退。 |
| [#949](https://github.com/nullclaw/nullclaw/pull/949) | vernonstinebaker | **队列模式可配置化**：新增 `agent.default_queue_mode` 配置字段，允许通过 `config.json` 设置新会话的初始队列模式，默认值为 `latest`。将 `QueueMode` 枚举统一到 `config_types.zig` 作为单一事实来源。 |
| [#948](https://github.com/nullclaw/nullclaw/pull/948) | DonPrus | **修复 cron agent 投递归属**：将 cron 投递来源元数据传递到 `nullclaw agent` 子进程，确保 `agent_start` 事件正确归属到投递频道/账户，同时保留本地存储和 gateway `/cron/add` 负载中的路由标志。 |
| [#950](https://github.com/nullclaw/nullclaw/pull/950) | addadi | **修复 gateway 测试中的端口探测泄漏**：将端口可用性探测提前到所有资源分配之前，避免 `AddressInUse` 错误路径上 `Config`、`RuntimeProviderBundle`、`SessionManager` 等分配无法被 defer 完全清理的问题。 |

**分析**：这些 PR 反映出社区对**生产环境稳定性**和**配置灵活性**的强烈需求。vernonstinebaker 一人贡献了 3 条 PR，是今日最活跃的贡献者。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题描述 | 对应 PR | 状态 |
|---|---|---|---|
| 🔴 **高** | Agent 失败时初始化日志（内存计划、MCP 注册等）被推送到频道，暴露内部实现细节 | [#951](https://github.com/nullclaw/nullclaw/pull/951) | 待合并 |
| 🟡 **中** | Cron 定时任务的 agent 投递无法正确归属到触发频道/账户 | [#948](https://github.com/nullclaw/nullclaw/pull/948) | 待合并 |
| 🟡 **中** | Gateway 测试中端口冲突导致资源泄漏，影响测试可靠性 | [#950](https://github.com/nullclaw/nullclaw/pull/950) | 待合并 |
| 🟢 **低** | 脱敏模块将 ISO 日期时间误判为电话号码（已修复） | [#945](https://github.com/nullclaw/nullclaw/pull/945) | ✅ 已合并 |
| 🟢 **低** | 系统提示词中包含不应暴露的动态分组 MCP 工具（已修复） | [#946](https://github.com/nullclaw/nullclaw/pull/946) | ✅ 已合并 |

---

## 6. 功能请求与路线图信号

今日无新的功能请求 Issue。但从待合并 PR 中可以观察到以下**路线图信号**：

- **队列模式可配置化**（[#949](https://github.com/nullclaw/nullclaw/pull/949)）：用户需要更灵活的消息队列行为控制，默认 `latest` 模式表明项目倾向于"只处理最新消息"的交互范式。这暗示 NullClaw 正在向更成熟的多会话管理方向演进。
- **Cron 投递归属**（[#948](https://github.com/nullclaw/nullclaw/pull/948)）：定时任务与投递渠道的关联性增强，说明项目正在完善**多频道、多账户场景下的消息路由追踪**能力。

这两项若合并，将显著提升 NullClaw 在**企业级多频道部署**场景下的可用性。

---

## 7. 用户反馈摘要

今日无新 Issue 提交，评论数据暂不可用。从已合并/待合并 PR 的摘要中可以间接提炼以下**用户痛点**：

- **痛点 1 — 信息泄露**：Agent 崩溃时内部初始化日志被推送到用户频道，既造成信息混乱，也存在安全隐患。（→ PR #951 修复中）
- **痛点 2 — 定时任务归属不清**：Cron 触发的 agent 回复无法追溯到原始投递渠道，多频道部署时难以区分来源。（→ PR #948 修复中）
- **痛点 3 — 配置不够灵活**：队列模式硬编码，无法根据部署场景调整。（→ PR #949 修复中）

---

## 8. 待处理积压

当前有 **4 条 PR 待合并**，均创建于 2026-06-10，尚未收到审查意见：

| PR | 等待时间 | 建议优先级 |
|---|---|---|
| [#951](https://github.com/nullclaw/nullclaw/pull/951) — 抑制 stderr 日志泄露 | 1天 | 🔴 高 — 涉及信息泄露 |
| [#948](https://github.com/nullclaw/nullclaw/pull/948) — Cron 投递归属 | 1天 | 🟡 中 — 影响多频道用户 |
| [#950](https://github.com/nullclaw/nullclaw/pull/950) — Gateway 测试泄漏 | 1天 | 🟡 中 — 影响 CI 可靠性 |
| [#949](https://github.com/nullclaw/nullclaw/pull/949) — 队列模式可配置 | 1天 | 🟢 低 — 增强型改进 |

> ⚠️ **提醒维护者**：PR #951 涉及 agent 失败时的信息泄露问题，建议优先审查合并。所有 4 条 PR 均为同一天创建，建议尽快安排审查以避免积压。

---

*数据来源：[github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) | 报告生成时间：2026-06-11*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-06-11

---

## 1. 今日速览

IronClaw 今日处于**高活跃开发期**，过去 24 小时内 Issues 与 PR 各更新 50 条，社区参与度极高。项目重心仍在 **Reborn 架构迁移**与 **WebUI v2 打磨**上，多个核心功能（Slack 触发式投递、附件上传 UX、LLM Provider 配置修复）完成合并。无新版本发布，crates.io 仍停留在 0.24.0，与 GitHub 最新 tag 0.27.0 存在显著差距，下游用户受 wasmtime 28.x CVE 影响被迫钉住旧版本。今日新开的 Issue 集中在 Reborn 本地测试体验（UX 缺陷、认证流程、配置保存），反映出 Reborn 已进入广泛内测阶段。

---

## 2. 版本发布

**无新版本发布。**

> ⚠️ 注意：GitHub 仓库已 tag 至 `ironclaw-v0.27.0`（2026-04-29），但 crates.io 最高仍为 `0.24.0`（2026-03-31），下游因 wasmtime 28.x CVE 被迫钉住旧版。Issue [#3259](https://github.com/nearai/ironclaw/issues/3259) 已开放 14 条评论，持续呼吁发布。

---

## 3. 项目进展

今日合并/关闭的 PR 推进了以下关键方向：

| PR | 状态 | 核心贡献 |
|---|---|---|
| [#4743](https://github.com/nearai/ironclaw/pull/4743) | ✅ 已合并 | 修复 NEAR/Anthropic 兼容的 `prompt is too long` 400 响应分类为 `ContextLengthExceeded`，新增 token 用量解析与回归覆盖 |
| [#4742](https://github.com/nearai/ironclaw/pull/4742) | ✅ 已合并 | 修复手动 token 运行时凭据选择链路（ManualToken vs OAuth），贯通授权义务→主机运行时请求→WASM 重部署→WebUI 凭据状态→产品认证选择 |
| [#4730](https://github.com/nearai/ironclaw/pull/4730) | ✅ 已合并 | **个人触发式事件投递：Slack DM 端到端** — 用户配对 Slack 后自动配置 DM 投递目标，触发运行结果、审批提示、认证通知均可投递至 DM |
| [#4717](https://github.com/nearai/ironclaw/pull/4717) | ✅ 已合并 | 恢复 WebUI v2 "始终允许"（Always Approval）功能，支持持久化审批策略，仅对类型化产品工作流审批门控生效 |
| [#4739](https://github.com/nearai/ironclaw/pull/4739) | ✅ 已合并 | 为 Railway QA 部署的 Reborn Docker 配置启用 Slack，添加 QA Slack workspace/app 标识 |
| [#4652](https://github.com/nearai/ironclaw/pull/4652) | ✅ 已合并 | 新增 `docs/reborn-binary.md` 文档 + `scripts/run-reborn-webui.sh` 一键启动脚本，大幅降低本地 Reborn + WebChat v2 测试门槛 |

**整体判断**：项目在 Reborn 产品化落地上迈出实质性一步——Slack DM 投递闭环、WebUI 审批 UX 修复、本地开发体验改善均已合并。多个大型 PR（[#4745](https://github.com/nearai/ironclaw/pull/4745) 自动化面板重构、[#4735](https://github.com/nearai/ironclaw/pull/4735) 扩展 MCP 配置、[#4738](https://github.com/nearai/ironclaw/pull/4738) 附件上传 UX）处于开放状态，预计近期陆续合并。

---

## 4. 社区热点

### 🔥 Issue [#3259](https://github.com/nearai/ironclaw/issues/3259) — crates.io 发布严重滞后（14 条评论）

> **"Publish 0.25.0–0.27.0 to crates.io — downstream pinned to 0.24.0 by wasmtime 28.x CVEs"**

这是当前讨论最活跃的 Issue。GitHub 已有 0.27.0 tag，但 crates.io 停在 0.24.0，下游用户因 wasmtime 28.x CVE 被迫使用旧版，无法获取安全修复。**诉求**：尽快将 0.25.0–0.27.0 发布至 crates.io，或至少说明发布计划。此 Issue 自 5 月 5 日创建以来持续活跃，已近 40 天未得到官方回应。

### 🔥 Issue [#3036](https://github.com/nearai/ironclaw/issues/3036) — Configuration-as-Code EPIC（6 条评论）

> **"[EPIC] Configuration-as-Code for IronClaw Reborn: tenant blueprints and use-case harnesses"**

由核心维护者 `ilblackdragon` 提出的 EPIC，希望将 IronClaw 的配置从分散的 `.env`、`.system/...`、settings JSON、扩展安装、运行时标志统一为声明式、可 diff、可审计的代码化配置。**诉求**：为 Reborn 提供类似 Infrastructure-as-Code 的租户蓝图能力。

### 🔥 Issue [#4703](https://github.com/nearai/ironclaw/issues/4703) — NEAR AI Provider 配置成功后对话无法使用

用户报告：Test connection 成功（返回 40 个可用模型），Save provider 后验证 active provider 也正确，但实际对话时无法使用 NEAR AI provider。**诉求**：排查配置持久化与运行时 provider 选择之间的不一致。

---

## 5. Bug 与稳定性

### 🔴 严重（影响核心功能）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#4673](https://github.com/nearai/ironclaw/issues/4673) | NEAR AI provider 配置 Test connection 成功但 Save 静默失败 | ✅ 已关闭 — PR [#4731](https://github.com/nearai/ironclaw/pull/4731) 修复中 |
| [#4642](https://github.com/nearai/ironclaw/issues/4642) | Strict-mode provider 的 null 可选参数被 capability-port 校验拒绝，影响大多数第一方工具 | ✅ 已关闭（修复已合并） |
| [#4729](https://github.com/nearai/ironclaw/issues/4729) | 本地/桌面构建的 NEAR AI 登录被 private.near.ai 拒绝（frontend_callback 校验过严） | 🔴 无 fix PR |

### 🟡 中等（影响体验）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#4741](https://github.com/nearai/ironclaw/issues/4741) | 本地开发密钥库损坏/低熵时返回不透明的 "Invalid master key" 错误 | 🔴 无 fix PR |
| [#4740](https://github.com/nearai/ironclaw/issues/4740) | Slack tool 的 parameters_schema 仅声明 `action`，其余参数无类型导致模型猜测错误 | 🔴 无 fix PR |
| [#4704](https://github.com/nearai/ironclaw/issues/4704) | builtin.http 审批后 `invalid_input` 失败，无 actionable 错误详情，且循环重复请求 | 🔴 无 fix PR |
| [#4683](https://github.com/nearai/ironclaw/issues/4683) | 无效 model provider 配置时 WebUI 显示无意义的 "driver unavailable" 错误 | 🔴 无 fix PR |

### 🟢 轻微（UI/UX）

| Issue | 描述 |
|---|---|
| [#4734](https://github.com/nearai/ironclaw/issues/4734) | Agent 头像显示 "IC" 而非 IronClaw 图标 — ✅ 已关闭 |
| [#4733](https://github.com/nearai/ironclaw/issues/4733) | 点击回复中的链接会导航离开当前对话 |
| [#4708](https://github.com/nearai/ironclaw/issues/4708) | 代码块缺少语法高亮 |
| [#4707](https://github.com/nearai/ironclaw/issues/4707) | 对话页字体过小 |
| [#4724](https://github.com/nearai/ironclaw/issues/4724) | 未发送的草稿在离开 New Conversation 后丢失 |
| [#4725](https://github.com/nearai/ironclaw/issues/4725) | Working 状态下 Composer 悬停样式仍显示可交互 |
| [#4722](https://github.com/nearai/ironclaw/issues/4722) | 对话消息不显示用户/助手身份标识 |

---

## 6. 功能请求与路线图信号

| 方向 | 信号来源 | 判断 |
|---|---|---|
| **Configuration-as-Code** | Issue [#3036](https://github.com/nearai/ironclaw/issues/3036)（EPIC，6 评论，核心维护者发起） | 🔮 高概率纳入下一阶段路线图 |
| **OpenAI-compatible Responses API 迁移至 Reborn** | Issue [#3283](https://github.com/nearai/ironclaw/issues/3283)（已关闭，子任务 #4445 已合并） | ✅ 进行中，部分完成 |
| **Reborn WebUI v2 E2E 测试覆盖** | Issue [#4632](https://github.com/nearai/ironclaw/issues/4632)（EPIC）+ PR [#4604](https://github.com/nearai/ironclaw/issues/4604)（已关闭） | 🔮 正在推进，浏览器驱动全栈 E2E 缺失 |
| **扩展 MCP 程序化配置** | PR [#4735](https://github.com/nearai/ironclaw/pull/4735)（开放中） | 🔮 近期可能合并 |
| **附件上传完整链路** | PR [#4738](https://github.com/nearai/ironclaw/pull/4738)（开放中，堆叠于 #4677 之上） | 🔮 后端已就绪，前端 UX 补齐中 |
| **自动化面板重构** | PR [#4745](https://github.com/nearai/ironclaw/pull/4745)（开放中，用 TriggerRepository 替代 capability dispatch） | 🔮 架构清理，预计近期合并 |
| **Trace Commons 代理引导注册** | PR [#4559](https://github.com/nearai/ironclaw/pull/4559)（开放中） | 🔮 新功能，需审核 |
| **NEAR AI MCP 自动启用** | Issue [#4700](https://github.com/nearai/ironclaw/issues/4700) | 💡 低复杂度改进，可能被快速采纳 |

---

## 7. 用户反馈摘要

### 😤 痛点

1. **crates.io 发布断裂**：下游用户因 CVE 被迫钉住 0.24.0，而 GitHub 已有 0.27.0。这是当前最强烈的社区不满（[#3259](https://github.com/nearai/ironclaw/issues/3259)，14 条评论）。

2. **Reborn 本地测试体验碎片化**：今日集中涌现 15+ 个 Reborn 本地测试 Issue（[#4692](https://github.com/nearai/ironclaw/issues/4692) 为父问题），涵盖配置保存静默失败、认证流程断裂、错误信息不透明、UI 元素缺失等。用户反馈的核心是：**"Reborn 的 first-run 体验远未就绪"**。

3. **错误信息不透明**：多个 Issue 提到错误信息无法指导用户行动——"Invalid master key"（[#4741](https://github.com/nearai/ironclaw/issues/4741)）、"driver unavailable"（[#4683](https://github.com/nearai/ironclaw/issues/4683)）、"invalid_input"（[#4704](https://github.com/nearai/ironclaw/issues/4704)）。

4. **审批流程 UX 不足**：builtin.http 工具的审批模态框缺少上下文信息（[#4701](https://github.com/nearai/ironclaw/issues/4701)），用户不知道在批准什么。

### 😊 满意

- PR [#4652](https://github.com/nearai/ironclaw/pull/4652) 新增的一键启动脚本 `run-reborn-webui.sh` 和文档更新，直接回应了社区对降低本地测试门槛的诉求。
- Slack DM 端到端投递（[#4730](https://github.com/nearai/ironclaw/pull/4730)）的完成标志着 Reborn 在个人自动化场景上的闭环能力。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于关键阻塞状态，建议维护者优先关注：

| 项目 | 年龄 | 状态 | 建议行动 |
|---|---|---|---|
| **Issue [#3259](https://github.com/nearai/ironclaw/issues/3259)** — crates.io 发布 0.25.0–0.27.0 | 37 天 | 开放，14 评论 | 🔴 **最高优先级**：发布计划不明确正在阻塞下游用户。建议至少给出 ETA 或临时方案。 |
| **Issue [#3036](https://github.com/nearai/ironclaw/issues/3036)** — Configuration-as-Code EPIC | 44 天 | 开放，6 评论 | 建议拆分为可执行的子任务并分配 owner。 |
| **PR [#3708](https://github.com/nearai/ironclaw/pull/3708)** — 自动发布 PR（ironclaw 0.24.0→0.29.1） | 26 天 | 开放 | 此 PR 包含 API breaking changes，长期开放可能导致合并冲突加剧。建议审核或关闭。 |
| **Issue [#4729](https://github.com/nearai/ironclaw/issues/4729)** — 本地构建 NEAR AI 登录被拒 | 1 天 | 无 fix | 🔴 影响所有本地/桌面用户，建议高优排查 `frontend_callback` 校验逻辑。 |
| **Issue [#4740](https://github.com/nearai/ironclaw/issues/4740)** — Slack tool schema 不完整 | 1 天 | 无 fix | 影响所有使用 Slack 工具的模型调用，建议补充参数类型声明。 |

---

> **项目健康度评估**：IronClaw 开发节奏强劲，Reborn 架构迁移进入密集落地期。主要风险在于（1）crates.io 发布断裂持续侵蚀下游信任；（2）Reborn first-run 体验缺陷集中爆发，可能影响内测用户留存；（3）多个大型 PR 长期开放存在合并冲突风险。建议维护者近期优先处理 crates.io 发布和本地测试体验问题。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报 — 2026-06-11

---

## 1. 今日速览

LobsterAI 今日活跃度**极高**，共处理 22 条 PR（20 条已合并/关闭，2 条待合并），并发布了新版本 **2026.6.10**。无新开或活跃 Issue，社区反馈通道暂时平静。项目整体处于**密集迭代期**，多个此前积压的 stale PR（涉及定时任务、会话裁剪、技能管理、Windows 关闭行为等）在本日集中合并，同时新功能开发（数据迁移、本地回调登录、UI 打磨）持续推进。项目健康度良好，维护者响应迅速。

---

## 2. 版本发布

### LobsterAI 2026.6.10（发布于 2026-06-10）

**主要新功能：**

- **数据备份与迁移** — 新增用户数据备份与恢复功能，支持在恢复时保留目标端的 backups、cowork、runtimes 和 mcp-packages 数据。
  - PR: [#2125](https://github.com/netease-youdao/LobsterAI/pull/2125) | [#2138](https://github.com/netease-youdao/LobsterAI/pull/2138)
- **本地回调登录流程** — 新增 `local callback` 登录方式，扩展认证选项。
  - PR: [#2122](https://github.com/netease-youdao/LobsterAI/pull/2122)
- **任务完成通知** — 支持从任务完成通知恢复 LobsterAI 主窗口，优化 macOS Notification Center 点击交互。
  - PR: [#2134](https://github.com/netease-youdao/LobsterAI/pull/2134)
- **设置面板增强** — 新增 OpenClaw 相关设置项（具体细节在 Release Notes 中被截断）。

**迁移注意事项：**
- 数据迁移功能涉及文件备份与恢复操作，建议用户在执行完整迁移前先手动备份关键数据。
- 本地回调登录为新增认证方式，不影响现有登录流程，无需强制迁移。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（按重要性排列）

| # | PR | 作者 | 说明 |
|---|-----|------|------|
| 1 | [#2140](https://github.com/netease-youdao/LobsterAI/pull/2140) | fisherdaddy | **Release 2026.6.8 合入主干** — 包含数据备份迁移、本地回调登录、任务通知三大功能，涉及 ~6,900 行新增 / ~470 行删除，跨 49 个文件 |
| 2 | [#2139](https://github.com/netease-youdao/LobsterAI/pull/2139) | fisherdaddy | **UI 打磨** — Markdown 阅读体验优化：代码块切换为 One Dark/Light 语法高亮、透明背景、默认自动换行；新增 `enableLargePreview` 切换；模型选择器样式优化 |
| 3 | [#2138](https://github.com/netease-youdao/LobsterAI/pull/2138) | fisherdaddy | **数据迁移修复** — 恢复操作时保留目标端已有数据，避免覆盖用户现有配置 |
| 4 | [#2134](https://github.com/netease-youdao/LobsterAI/pull/2134) | liuzhq1986 | **任务完成通知** — 主窗口关闭/销毁后仍可从通知恢复，确保 macOS 通知点击可用 |
| 5 | [#1499](https://github.com/netease-youdao/LobsterAI/pull/1499) | linlihua | **会话裁剪** — 长对话自动裁剪，防止超出模型上下文窗口，对标 OpenClaw Session Pruning |
| 6 | [#1485](https://github.com/netease-youdao/LobsterAI/pull/1485) | kayo5994 | **禁用技能策略强制执行** — 禁用技能后不再注入系统提示词，修复安全/隐私问题 |
| 7 | [#1486](https://github.com/netease-youdao/LobsterAI/pull/1486) | BucleLiu | **定时任务"测试"按钮** — 创建表单新增"保存并立即执行"快捷入口 |
| 8 | [#1489](https://github.com/netease-youdao/LobsterAI/pull/1489) | BucleLiu | **定时任务本地通知渠道** — 新增 macOS 本地通知支持，修复通知配置不生效问题 |
| 9 | [#1490](https://github.com/netease-youdao/LobsterAI/pull/1490) | BucleLiu | **定时任务通知渠道编辑修复** — 修复修改通知渠道后详情页不更新的问题 |
| 10 | [#1497](https://github.com/netease-youdao/LobsterAI/pull/1497) | Yang1k | **Windows 关闭行为配置** — 新增"最小化到任务栏"或"退出应用"选项 |
| 11 | [#1503](https://github.com/netease-youdao/LobsterAI/pull/1503) | swuzjb | **Agent 引导文件富文本编辑器** — IDENTITY.md / SOUL.md / USER.md 引入 Markdown 所见即所得编辑器 |
| 12 | [#1501](https://github.com/netease-youdao/LobsterAI/pull/1501) | MaoQianTu | **禁用技能仍被调用修复** — 清理 activeSkillIds 时同步检查 enabled 状态 |
| 13 | [#1505](https://github.com/netease-youdao/LobsterAI/pull/1505) | MaoQianTu | **Agent 技能列表保存后即时生效** — 无需切换 Agent 即可同步 activeSkillIds |
| 14 | [#1507](https://github.com/netease-youdao/LobsterAI/pull/1507) | kayo5994 | **POPO IM AES Key 校验** — 启用 bot 时强制要求非空 AES Key |
| 15 | [#1491](https://github.com/netease-youdao/LobsterAI/pull/1491) | dependabot | CI: upload-artifact v4→v7 |
| 16 | [#1492](https://github.com/netease-youdao/LobsterAI/pull/1492) | dependabot | CI: setup-node v4→v6 |
| 17 | [#1493](https://github.com/netease-youdao/LobsterAI/pull/1493) | dependabot | CI: action-gh-release v1→v2 |

**整体评估：** 项目今日向前迈进显著——一个正式版本发布、一个 release candidate 合入主干、一个 UI 大改、一个关键安全修复（禁用技能策略），以及多个用户体验改进集中落地。

---

## 4. 社区热点

今日无活跃 Issue，PR 评论数据暂不可用（均显示 `undefined`）。从 PR 内容本身分析，以下方向最受关注：

- **数据迁移与备份**（[#2125](https://github.com/netease-youdao/LobsterAI/pull/2125)、[#2138](https://github.com/netease-youdao/LobsterAI/pull/2138)）— 用户数据是核心资产，备份恢复功能直接关系到用户信任度，是 LobsterAI 从"可用"走向"可靠"的关键一步。
- **会话裁剪**（[#1499](https://github.com/netease-youdao/LobsterAI/pull/1499)）— 长对话上下文溢出是 AI Agent 类应用的通病，此功能解决的是高频痛点。
- **Windows 体验补齐**（[#1497](https://github.com/netease-youdao/LobsterAI/pull/1497)、[#2142](https://github.com/netease-youdao/LobsterAI/pull/2142)）— 多个 PR 聚焦 Windows 平台，说明 Windows 用户群体不可忽视。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | PR | 状态 |
|----------|------|-----|------|
| 🔴 高 | 禁用技能后仍被注入系统提示词，存在隐私/安全风险 | [#1485](https://github.com/netease-youdao/LobsterAI/pull/1485) | ✅ 已合并 |
| 🔴 高 | 禁用技能 ID 仍保留在 activeSkillIds 中 | [#1501](https://github.com/netease-youdao/LobsterAI/pull/1501) | ✅ 已合并 |
| 🔴 高 | POPO IM 启用 bot 时允许空 AES Key | [#1507](https://github.com/netease-youdao/LobsterAI/pull/1507) | ✅ 已合并 |
| 🟡 中 | 定时任务通知渠道编辑后不更新 | [#1490](https://github.com/netease-youdao/LobsterAI/pull/1490) | ✅ 已合并 |
| 🟡 中 | 定时任务缺少本地通知渠道 | [#1489](https://github.com/netease-youdao/LobsterAI/pull/1499) | ✅ 已合并 |
| 🟡 中 | Agent 技能列表保存后当前会话不同步 | [#1505](https://github.com/netease-youdao/LobsterAI/pull/1505) | ✅ 已合并 |
| 🟡 中 | Windows 应用内更新修复 | [#2141](https://github.com/netease-youdao/LobsterAI/pull/2141) | ✅ 已关闭 |
| 🟢 低 | NSIS 安装程序破坏性初始化问题 | [#2142](https://github.com/netease-youdao/LobsterAI/pull/2142) | ⏳ 待合并 |

**总结：** 今日所有已识别 Bug 均有对应修复 PR，其中 7 个已合并，1 个待合并。项目稳定性在持续提升。

---

## 6. 功能请求与路线图信号

从已合并和待合并的 PR 中，可观察到以下路线图方向：

1. **数据可移植性** — 备份/迁移功能已落地，后续可能扩展为跨设备同步。
2. **Windows 平台一等公民** — 关闭行为配置（[#1497](https://github.com/netease-youdao/LobsterAI/pull/1497)）、NSIS 安装修复（[#2142](https://github.com/netease-youdao/LobsterAI/pull/2142)）、Windows 应用内更新修复（[#2141](https://github.com/netease-youdao/LobsterAI/pull/2141)）——Windows 体验正在系统性补齐。
3. **定时任务体系完善** — 测试按钮、本地通知、通知渠道编辑修复三连发，说明定时任务是重点打磨方向。
4. **Agent 配置体验升级** — 富文本 Markdown 编辑器（[#1503](https://github.com/netease-youdao/LobsterAI/pull/1503)）表明项目在降低 Agent 配置门槛。
5. **会话管理智能化** — 会话裁剪（[#1499](https://github.com/netease-youdao/LobsterAI/pull/1499)）是起点，后续可能引入更精细的上下文管理策略。

---

## 7. 用户反馈摘要

今日无新开 Issue，但从历史 PR 描述中可提炼以下用户痛点：

- **"禁用技能后仍然生效"** — 用户期望禁用即生效，不需要重启或切换 Agent。已修复。
- **"定时任务调试路径太长"** — 用户需要快速验证任务指令，不想保存后再手动运行。已新增测试按钮。
- **"长对话突然报错"** — 上下文溢出导致不可恢复错误，用户被迫删除会话。已引入自动裁剪。
- **"Windows 关闭按钮行为不符合预期"** — Windows 用户期望关闭即退出或最小化到任务栏，而非隐藏。已新增配置项。
- **"Agent 配置编辑体验差"** — 纯文本 textarea 编辑 Markdown 引导文件体验不佳。已引入富文本编辑器。

---

## 8. 待处理积压

| PR | 标题 | 创建日期 | 状态 | 建议 |
|-----|------|----------|------|------|
| [#2142](https://github.com/netease-youdao/LobsterAI/pull/2142) | fix: fix nsis destructive init and redesign engine loading page | 2026-06-10 | ⏳ OPEN | **高优先级** — 涉及 Windows 安装程序核心流程，建议尽快审查合并 |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | chore(deps-dev): bump electron 40→42 | 2026-04-02 | ⏳ OPEN | **需关注** — Electron 大版本跨越（40→42）已积压 2 个月，可能存在兼容性风险，建议尽快验证合并或关闭 |

---

> **日报生成时间：** 2026-06-11
> **数据来源：** [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)
> **分析工具：** OWL — ZOO 公司开发的 AI 智能体

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-06-11

---

## 1. 今日速览

过去 24 小时内，Moltis 项目整体活跃度**极低**。仅新增 1 个 Issue，无 PR 活动，无新版本发布。项目处于相对平静期，社区贡献与核心开发节奏明显放缓。Issue #1114 为唯一新增内容，属于配置层面的 Bug 报告，尚未获得任何社区响应。当前项目健康度指标（Issue/PR 吞吐量、版本迭代频率）均处于低位，建议维护者关注积压 Issue 的响应时效。

---

## 2. 版本发布

过去 24 小时无新版本发布，本节省略。

---

## 3. 项目进展

过去 24 小时无 PR 合并或关闭，项目在功能推进与缺陷修复方面**零进展**。

---

## 4. 社区热点

今日社区讨论近乎停滞，仅有一个新 Issue 且**零评论、零反应**：

- **[Issue #1114 — Bug: provider 'coqui' not configured](https://github.com/moltis-org/moltis/issues/1114)**
  - 作者：vvuk | 创建于 2026-06-10
  - 标签：`bug`，严重程度标注为 `minor`
  - 状态：OPEN，尚无回复

**分析：** 该 Issue 反映用户在配置 `coqui` provider 时遇到未正确配置的问题。从摘要来看，报告者已完成预检清单（确认已搜索现有问题、使用最新版本），说明这是一个**新发现的、未被重复报告的边缘配置缺陷**。由于 `coqui` 属于较为小众的 TTS/语音 provider，此 Bug 影响范围可能有限，但暴露了 Moltis 在 provider 配置校验或错误提示方面的不足——用户可能未获得足够清晰的引导信息来定位配置缺失的根因。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|---------|-------|------|--------|
| 🟡 Minor | [#1114](https://github.com/moltis-org/moltis/issues/1114) | provider 'coqui' 未正确配置 | ❌ 无 |

**评估：** 当前 Bug 积压量极低，仅此 1 条新增。该问题严重程度为 `minor`，不影响核心功能，但可能影响使用 `coqui` provider 的用户体验。**尚无修复 PR 提交**，建议维护者至少回复确认问题并指引排查方向。

---

## 6. 功能请求与路线图信号

过去 24 小时**无新功能请求**提交，无相关 PR 活动。无法判断下一版本的路线图方向。

---

## 7. 用户反馈摘要

从今日唯一的 Issue #1114 中可提炼以下信息：

- **痛点：** 用户在配置 `coqui` provider 时遇到障碍，错误信息或配置引导不够明确，导致用户无法自行排查。
- **使用场景：** 用户尝试集成 `coqui`（开源 TTS 引擎）作为 Moltis 的语音 provider，属于**语音合成集成场景**。
- **满意度信号：** 报告者态度规范（完成预检清单、确认使用最新版本），说明用户对项目仍抱有期待，但配置体验有待改善。

---

## 8. 待处理积压

由于今日仅 1 个新 Issue 且刚创建不足 24 小时，**暂无需要特别提醒的长期积压项**。但建议维护者：

1. **尽快响应 Issue #1114**，即使只是确认问题或请求更多复现信息，以维持社区响应速度的健康指标。
2. 关注 `coqui` provider 相关配置文档是否需要补充，以降低同类问题的重复报告率。

---

> **总结：** Moltis 今日处于低活跃状态，项目健康度指标平稳但缺乏推进动力。唯一的社区信号指向 provider 配置体验的改进空间，建议维护者借此机会完善相关文档与错误提示机制。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-06-11

---

## 1. 今日速览

CoPaw 今日处于**高活跃迭代期**。过去 24 小时内 Issues 更新 37 条（新开/活跃 19 条，关闭 18 条），PR 更新 50 条（待合并 20 条，已合并/关闭 30 条），并连续发布 **v1.1.11** 和 **v1.1.11-beta.3** 两个版本。项目整体节奏快、合并率高（PR 合并率 60%），但积压的开放 Issue 数量仍然可观，且多个涉及稳定性和用户体验的 Bug 尚未完全收敛。

---

## 2. 版本发布

### v1.1.11（正式版）
**Release PR:** [#5080](https://github.com/agentscope-ai/QwenPaw/pull/5080)

**主要更新：**

- **Free Model OAuth**：零配置免费模型，支持一键 OAuth 认证接入（[#5049](https://github.com/agentscope-ai/QwenPaw/pull/5049)）
- **Xiaomi MiMo Provider**：新增小米 MiMo Token Plan 作为内置 Provider（[#4722](https://github.com/agentscope-ai/QwenPaw/pull/4722)）
- **Skills 增强**：`make-skill` 流程升级，支持自进化技能创建（[#4857](https://github.com/agentscope-ai/QwenPaw/pull/4857)）
- **安全增强**：File Guard 支持预览工作区外文件（[#5081](https://github.com/agentscope-ai/QwenPaw/pull/5081)）
- **错误提示优化**：模型执行错误现在直接在用户可见消息中展示原始错误原因，不再仅写入临时 JSON 文件（[#5079](https://github.com/agentscope-ai/QwenPaw/pull/5079)）
- **Windows 构建修复**：修复 aiohttp 3.14.1 引入的 SSL 证书错误（[#5082](https://github.com/agentscope-ai/QwenPaw/pull/5082)、[#5083](https://github.com/agentscope-ai/QwenPaw/pull/5083)）

### v1.1.11-beta.3
- CI 优化：移除冗余的 channel-tests workflow（[#5056](https://github.com/agentscope-ai/QwenPaw/pull/5056)）
- Skills 增强：同正式版的自进化技能创建功能

**迁移注意事项：**
- 本次版本无破坏性变更声明，但 Issue [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) 已标记为 Breaking Change，计划将后端从 AgentScope 1.x 迁移至 AgentScope 2.0，用户应关注后续版本升级路径。

---

## 3. 项目进展

今日合并/关闭的 30 个 PR 推进了以下关键方向：

| 方向 | 代表 PR | 说明 |
|------|---------|------|
| **版本发布** | [#5080](https://github.com/agentscope-ai/QwenPaw/pull/5080) | v1.1.11 正式发布 |
| **安全** | [#5081](https://github.com/agentscope-ai/QwenPaw/pull/5081) | File Guard 允许预览工作区外文件，提升 Agent 文件访问灵活性 |
| **错误处理** | [#5079](https://github.com/agentscope-ai/QwenPaw/pull/5079) | 模型错误原因直接展示给用户，减少排查成本 |
| **Windows 构建** | [#5082](https://github.com/agentscope-ai/QwenPaw/pull/5082)、[#5083](https://github.com/agentscope-ai/QwenPaw/pull/5083)、[#5084](https://github.com/agentscope-ai/QwenPaw/pull/5084) | 修复 aiohttp SSL 证书问题和 Discord 打包验证问题 |
| **认证** | [#4858](https://github.com/agentscope-ai/QwenPaw/pull/4858) | Web 登录支持按 Agent 范围隔离，多用户安全部署 |
| **DingTalk** | [#5061](https://github.com/agentscope-ai/QwenPaw/pull/5061) | 移除 AI Card 预创建，避免空输出时发送空白卡片 |

**整体评估：** 项目在稳定性修复（Windows 构建、错误提示）、安全性（File Guard、Agent 隔离认证）和 Provider 生态扩展（小米 MiMo、免费模型 OAuth）三个维度同步推进，v1.1.11 是一个质量较高的维护性版本。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

1. **[#4342](https://github.com/agentscope-ai/QwenPaw/issues/4342) — 后端单元测试覆盖率提升（Phase 5）**（11 条评论）
   - 涉及 `local_models/`、`providers/`、`tunnel/`、`utils/` 模块的单元测试补充，是项目质量保障的基础设施工作。

2. **[#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) — 从 AgentScope 1.x 迁移至 2.0（Breaking Change）**（8 条评论，👍2）
   - 这是未来最大的架构升级议题。AgentScope 2.0 已正式发布，QwenPaw 计划跟进升级，涉及新架构、API 和运行时模型的全面迁移。社区关注度较高。

3. **[#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878) — 微信频道定时任务推送失败**（7 条评论）
   - 根因已定位：微信 `channel.py` 中 `to_handle_from_target` 处理逻辑问题。

4. **[#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) — 新建会话后 Models 配置页面丢失**（7 条评论）
   - 影响用户体验的核心 Bug，需重启才能恢复。

5. **[#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) — 本地千问 3.6-27B 模型对话无响应**（5 条评论）
   - 1.1.9/1.1.10 版本的回归问题，v1.1.5.post2 正常。

### 🔥 活跃 PR

- **[#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) — Agent OS Driver：统一 MCP/A2A/ACP 外部能力抽象层**
  - 这是一个架构级 PR，旨在为 MCP 工具服务器、远程 Agent（A2A）和 ACP 服务提供统一抽象，减少重复代码。

- **[#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) — Runtime 2.0 模块化架构**
  - 将单体 Runner 拆分为可组合、可测试的 Runtime 2.0 单元，引入 ToolCoordinator 层。与 Issue #4727 的 AgentScope 2.0 迁移方向一致。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（影响核心功能）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) | 本地千问 3.6-27B 模型对话无响应（1.1.9/1.1.10 回归） | 🔓 开放 | 暂无 |
| [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) | Agent 创建的定时任务无法触发且无法手动编辑 | 🔓 开放 | 暂无 |
| [#5052](https://github.com/agentscope-ai/QwenPaw/issues/5052) | 工具调用若干次后全部报 `unexpected keyword argument 'arguments'` | 🔓 开放 | 暂无 |
| [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) | 新建会话后 Models 配置页面丢失 | ✅ 已关闭 | 已修复 |

### 🟡 中等（影响体验）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878) | 微信频道定时任务推送失败 | ✅ 已关闭 | 根因已定位 |
| [#5053](https://github.com/agentscope-ai/QwenPaw/issues/5053) | Windows Tauri 桌面端多会话切换卡顿超 10 秒 | 🔓 开放 | 暂无 |
| [#5031](https://github.com/agentscope-ai/QwenPaw/issues/5031) | Skill 斜杠调用在 Console 中显示为展开的 SKILL.md 内容 | 🔓 开放 | 暂无 |
| [#4993](https://github.com/agentscope-ai/QwenPaw/issues/4993) | 图片预览放大后拖动异常抖动 | ✅ 已关闭 | 已修复 |
| [#4917](https://github.com/agentscope-ai/QwenPaw/issues/4917) | 聊天界面数据多时切换卡顿 | ✅ 已关闭 | 已修复 |

### 🟢 低（UI/UX 优化）

| Issue | 描述 | 状态 |
|-------|------|------|
| [#4777](https://github.com/agentscope-ai/QwenPaw/issues/4777) | Windows 桌面版执行 Shell 命令弹 CMD 窗口 | ✅ 已关闭 |
| [#4213](https://github.com/agentscope-ai/QwenPaw/issues/4213) | 网页对话内容分片/分页传输 | ✅ 已关闭 |
| [#4170](https://github.com/agentscope-ai/QwenPaw/issues/4170) | Agent 执行过程中无实时动作信息展示 | ✅ 已关闭 |

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 相关 PR | 信号强度 |
|----------|-------|---------|----------|
| **Agent OS Driver（统一 MCP/A2A/ACP 抽象）** | — | [#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) | ⭐⭐⭐ 架构级，已在开发 |
| **Runtime 2.0 模块化架构** | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) | ⭐⭐⭐ 与 AgentScope 2.0 迁移绑定 |
| **独立视觉模型配置（Visual Model Fallback）** | [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) | 暂无 | ⭐⭐ 用户需求明确，👍1 |
| **DataPaw 数据分析插件（12 个 BI 技能）** | — | [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | ⭐⭐ 外部贡献者提交，审核中 |
| **Token 用量可视化** | — | [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) | ⭐⭐ 审核中 |
| **Headroom 上下文压缩集成（60-95% token 节省）** | [#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) | 暂无 | ⭐ 新提案 |
| **Windows 系统托盘图标** | [#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751) | 暂无 | ⭐ 长期需求 |
| **DingTalk 私有化部署自定义端点** | [#4887](https://github.com/agentscope-ai/QwenPaw/issues/4887) | 暂无 | ⭐ 企业用户诉求 |
| **Tauri 桌面自动更新** | — | [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | ⭐⭐ 审核中 |
| **子代理任务运行时内容查看** | [#4923](https://github.com/agentscope-ai/QwenPaw/issues/4923) | 暂无 | ⭐ 用户体验诉求 |

**判断：** 下一版本的重点方向可能是 **Runtime 2.0 架构升级** 和 **Agent OS Driver**，这两者正在并行推进中。DataPaw 插件和 Token 用量可视化作为增值功能也在审核队列中。

---

## 7. 用户反馈摘要

### 😤 痛点

- **本地模型兼容性退化**：多个用户报告 1.1.9/1.1.10 版本使用本地部署模型（千问 3.6-27B via vLLM）时对话无响应，而旧版本正常。这是典型的回归问题，严重影响本地部署用户群体。
- **Windows 桌面体验差**：Shell 命令执行弹 CMD 窗口、多会话切换卡顿超 10 秒、重启后 Agent 配置丢失——Windows 桌面端用户面临多个体验问题。
- **定时任务功能不可靠**：Agent 创建的定时任务无法触发且无法编辑，微信频道推送失败，定时任务作为核心功能之一稳定性不足。
- **工具调用偶发失败**：多轮对话后工具调用突然全部报 `unexpected keyword argument 'arguments'`，用户无法稳定使用工具调用能力。

### 😊 满意

- v1.1.11 持续交付，Free Model OAuth 和小米 MiMo Provider 扩展了模型选择。
- 错误提示优化（直接展示原始错误原因）获得正面反馈。
- Agent 范围 Web 登录隔离满足了多用户部署的安全需求。

### 📋 使用场景

- **智能家居自动化**：用户通过微信频道 + 定时任务控制 home_agent（Issue #4878）。
- **本地模型部署**：大量用户使用 vLLM 部署千问系列模型，对本地模型兼容性高度敏感。
- **多 Agent 协作**：用户使用 `spawn_subagent` 启动子代理任务，但无法实时查看子任务进展（Issue #4923）。
- **数据分析**：外部贡献者提交 DataPaw 插件，说明用户有 BI 数据分析需求。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者关注：

| 项目 | 链接 | 状态 | 等待天数 | 说明 |
|------|------|------|----------|------|
| 本地模型对话无响应 | [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) | 🔓 开放 | 5 天 | 回归 Bug，影响本地部署用户 |
| Agent 创建定时任务无法触发 | [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) | 🔓 开放 | 1 天 | 核心功能不可用 |
| 工具调用偶发失败 | [#5052](https://github.com/agentscope-ai/QwenPaw/issues/5052) | 🔓 开放 | 2 天 | 影响工具调用稳定性 |
| AgentScope 2.0 迁移 | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | 🔓 开放 | 15 天 | Breaking Change，需规划 |
| 独立视觉模型配置 | [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) | 🔓 开放 | 4 天 | 用户需求明确 |
| Agent OS Driver PR | [#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) | 🔍 审核中 | 1 天 | 架构级 PR，需及时评审 |
| Runtime 2.0 PR | [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) | 🔍 审核中 | 1 天 | 架构级 PR，需及时评审 |
| 9router 支持 | [#5001](https://github.com/agentscope-ai/QwenPaw/issues/5001) | 🔓 开放 | 3 天 | 第三方路由支持 |
| Windows 多会话卡顿 | [#5053](https://github.com/agentscope-ai/QwenPaw/issues/5053) | 🔓 开放 | 2 天 | 桌面端体验 |
| Skill 斜杠调用显示异常 | [#5031](https://github.com/agentscope-ai/QwenPaw/issues/5031) | 🔓 开放 | 2 天 | Console UI 问题 |

---

> **日报生成时间：** 2026-06-11  
> **数据来源：** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)  
> **分析工具：** OWL — ZOO Company

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-11

---

## 1. 今日速览

ZeroClaw 今日处于**高活跃维护期**，过去 24 小时内 Issues 更新 41 条（新开/活跃 22 条，关闭 19 条），PR 更新 50 条（待合并 31 条，已合并/关闭 19 条），无新版本发布。项目当前处于 **v0.8.0 发布冲刺阶段**，多个 release tracker（#7112、#6970、#7314）均在活跃推进中。今日 PR 合并节奏显著加快，单日关闭 19 条 PR，显示维护者正在集中消化积压的合并队列。整体项目健康度良好，但待合并 PR 积压量（31 条）仍然较高，需关注 review 带宽。

---

## 2. 版本发布

**无新版本发布。**

当前版本线仍处于 v0.7.x → v0.8.0 的冲刺阶段，v0.8.0 release tracker（[#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)）和 v0.8.1 集成队列 tracker（[#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)）均在活跃更新中。

---

## 3. 项目进展

今日合并/关闭的 19 条 PR 覆盖了多个关键方向，以下为最重要的几项：

| PR | 状态 | 说明 |
|---|---|---|
| [#7444](https://github.com/zeroclaw-labs/zeroclaw/pull/7444) | ✅ 已合并 | **zerocode Dashboard 状态区分**：修复 Dashboard 无法区分 loading/error/live 状态的问题，提升 TUI 可用性 |
| [#7365](https://github.com/zeroclaw-labs/zeroclaw/pull/7365) | ✅ 已合并 | **文档全面重构**：mdBook 重新组织，provider/config 文档从源码派生，大幅改善文档一致性和可维护性 |
| [#7466](https://github.com/zeroclaw-labs/zeroclaw/pull/7466) | ✅ 已合并 | **CI 编译修复**：修复合并批次后的 channel 测试编译失败，恢复 master 绿色状态 |

**整体推进评估**：今日合并的 PR 主要集中在 **稳定性修复和基础设施改善** 上。文档重构（#7365）是一个重要的 XL 规模 PR，标志着项目文档体系从手工维护转向源码驱动。CI 修复（#7466）表明近期合并节奏较快，偶尔引入编译回归，但维护者响应迅速。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

1. **[#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)** — "A better LOGO of Zerocaw"（20 条评论，👍2）
   - 社区对品牌形象的关注，讨论已持续近 3 个月。虽然优先级低，但反映了社区参与度和归属感。

2. **[#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)** — "Provide a 'full' docker image"（12 条评论，👍3）
   - 用户希望提供包含所有 feature flags（如 WhatsApp）的完整 Docker 镜像，降低非技术用户的入门门槛。这是一个持续存在的 **易用性诉求**。

3. **[#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)** — "单轮/多轮对话丢失 user message"（6 条评论）
   - **P1 级别 bug**，影响核心对话流程。用户报告所有 provider/model 均失败，返回 400 Bad Request。

4. **[#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721)** — "tool_search 未在 default_auto_approve 中 → webhook 模式静默挂起 120s"（5 条评论）
   - **P1 级别 bug**，MCP deferred_loading 模式下 tool_search 需要审批但 webhook 模式无法交互审批，导致静默失败。

5. **[#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)** — "RFC: 通过外部集成实现更轻量的 ZeroClaw 核心"（4 条评论）
   - 架构层面的 RFC，建议将 gws-cli、jira、github 等集成从核心代码中移除，改为通过 skills 交互。

### 📌 今日新开的 RFC

- **[#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)** — "RFC: 统一三个 agent turn engines"
- **[#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420)** — "RFC: Native Dynamic-Library Plugin System"

这两份 RFC 均于 6 月 9 日提出，反映了社区对 **核心架构简化** 和 **插件系统扩展** 的强烈兴趣。

---

## 5. Bug 与稳定性

### 🔴 P1 高危 Bug（需优先关注）

| Issue | 严重程度 | 描述 | Fix PR |
|---|---|---|---|
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | S1 - 工作流阻塞 | 对话丢失 user message | ❌ 无 |
| [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) | S1 - 工作流阻塞 | MCP tool_search 审批导致 webhook 静默挂起 | ❌ 无 |
| [#7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263) | S1 - 工作流阻塞 | Subagents 未继承 cwd（ACP sessions） | ❌ 无 |
| [#7436](https://github.com/zeroclaw-labs/zeroclaw/issues/7436) | S2 - 降级 | image_info 工具输出无法传递给多模态模型 | ❌ 无 |
| [#7469](https://github.com/zeroclaw-labs/zeroclaw/issues/7469) | S3 - 轻微 | 容器默认使用 vi 但未安装 | ❌ 无 |

### 🟡 P2 中危 Bug

| Issue | 描述 | Fix PR |
|---|---|---|
| [#7376](https://github.com/zeroclaw-labs/zeroclaw/issues/7376) | Dashboard 隐藏错误状态 | ✅ [#7444](https://github.com/zeroclaw-labs/zeroclaw/pull/7444) 已合并 |
| [#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722) | MemoryConfig rerank 参数无消费者 | ✅ 已关闭 |
| [#6309](https://github.com/zeroclaw-labs/zeroclaw/issues/6309) | model_routing_config 覆盖 schema_version=2 设置 | ✅ 已关闭（需作者操作） |

### 稳定性趋势

- **MCP 相关 bug 集中**：#6721、#7351（PR 待合并）、#7456（PR 待合并）均涉及 MCP 子系统的稳定性和策略一致性，说明 MCP 集成是当前最活跃的故障域。
- **今日新增 P1 bug 1 个**（#7436 image_info），**关闭 P1 bug 2 个**（#6309、#6722），净减少 1 个。

---

## 6. 功能请求与路线图信号

### 近期可能被纳入的功能

| 方向 | 相关 Issue/PR | 信号强度 |
|---|---|---|
| **MCP 稳定性改进** | [#7351](https://github.com/zeroclaw-labs/zeroclaw/pull/7351)（auto-reconnect）、[#7456](https://github.com/zeroclaw-labs/zeroclaw/pull/7456)（MCP policy）、[#7464](https://github.com/zeroclaw-labs/zeroclaw/pull/7464)（默认启用 MCP） | 🟢🟢🟢 强 — 3 个 PR 同时在推进 |
| **WASM 插件系统** | [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)（v0.8.2 tracker）、[#7454](https://github.com/zeroclaw-labs/zeroclaw/pull/7454)（office-tools WASM 插件）、[#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420)（动态库插件 RFC） | 🟢🟢🟢 强 — 架构 RFC + 参考实现 + milestone tracker 三位一体 |
| **Agent turn 引擎统一** | [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)（RFC） | 🟡 中 — RFC 刚提出，待社区评审 |
| **Pre-turn 路由意图提取** | [#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) | 🟡 中 — 与 send_via 路由相关 |
| **完整 Docker 镜像** | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | 🟡 中 — 长期需求，12 条评论 |
| **Subagent cwd 继承** | [#7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263) | 🟢 强 — P1 bug，影响 ACP 工作流 |

### 路线图判断

v0.8.0 的核心主题似乎是 **稳定性提升 + MCP 完善**，v0.8.1 聚焦 **集成/通道/提供者扩展**，v0.8.2 将主推 **WASM 插件系统**。架构层面的插件化（WASM + 动态库）是社区最关注的长期方向。

---

## 7. 用户反馈摘要

### 😤 痛点

1. **MCP 配置体验差**：多个 issue（#6721、#7464）反映 MCP 的默认配置不符合用户预期——deferred_loading 开启后 tool_search 需要审批但非交互模式下无法审批，导致静默失败。用户期望"配置即能用"。

2. **容器化体验不完善**：#3642 和 #7469 分别反映了两个问题——完整功能镜像缺失、容器内默认编辑器 vi 未安装。Docker 用户群体的入门门槛仍然较高。

3. **核心对话可靠性**：#6034 报告 user message 丢失，这是最核心功能的回归，严重影响用户信任。

4. **文档链接失效**：#6222 和 #6760 反映文档链接断裂和 Docker 文档过时，新用户上手困难。

### 😊 满意点

- **zerocode TUI 持续改进**：#7444 合并了 Dashboard 状态区分改进，#7467 和 #7468 提出了更细粒度的 TUI 增强需求，说明用户对 zerocode 交互体验的认可和期待。
- **社区积极参与架构讨论**：#6165、#7415、#7420 等 RFC 的提出，显示社区对项目架构有深入思考和参与意愿。

---

## 8. 待处理积压

以下长期未响应或积压的重要 Issue/PR 需维护者关注：

| 项目 | 类型 | 创建时间 | 状态 | 说明 |
|---|---|---|---|---|
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | Issue | 2026-03-15 | 开放 3 个月 | "full" Docker 镜像需求，12 条评论，被阻塞 |
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | Issue | 2026-04-23 | 开放 1.5 月 | P1 对话消息丢失，6 条评论，无 fix PR |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | Issue (RFC) | 2026-04-27 | 开放 1.5 月 | 轻量核心 RFC，被阻塞 |
| [#7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263) | Issue | 2026-06-05 | 开放 6 天 | P1 Subagent cwd 继承，1 条评论 |
| [#7351](https://github.com/zeroclaw-labs/zeroclaw/pull/7351) | PR | 2026-06-07 | 开放 4 天 | MCP auto-reconnect，需要作者操作 |
| [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) | Issue (RFC) | 2026-06-09 | 开放 2 天 | Agent turn 引擎统一 RFC，需要维护者评审 |
| [#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) | Issue (RFC) | 2026-06-09 | 开放 2 天 | 动态库插件系统 RFC，需要维护者评审 |

**特别提醒**：
- **待合并 PR 31 条**，review 积压严重，建议维护者集中处理。
- **#6034**（对话消息丢失）已开放 1.5 个月且为 P1，建议优先排查。
- 两份新 RFC（#7415、#7420）均标记 `needs-maintainer-review`，需要维护者尽快给出初步反馈以推动讨论。

---

*数据来源：GitHub zeroclaw-labs/zeroclaw | 统计时间：2026-06-11 | 生成工具：OWL*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*