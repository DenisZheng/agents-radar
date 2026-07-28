# OpenClaw 生态日报 2026-07-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-28 01:57 UTC

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

# OpenClaw 项目日报 | 2026-07-28

---

## 1. 今日速览

OpenClaw 今日呈现**高强度维护与修复并行**态势：过去 24 小时共更新 **500 个 Issues**（新开/活跃 242，已关闭 258）与 **500 个 PRs**（待合并 282，已合并/关闭 218），**关闭量略超新开量**，技术债偿还与稳定性治理为主线。核心关注点集中在 **网关内存泄漏（RSS 增长至 15.5GB）、会话状态丢失/死锁、多平台适配（Linux/Windows 缺失）、安全加固（Secrets 掩码、技能权限清单）**。无新版本发布，但多个 P0/P1 级修复 PR 处于“待维护者审核”状态，预示下一版本将以稳定性补丁为主。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展——今日合并/关闭的重要 PR

| PR | 类型 | 核心变更 | 影响范围 | 状态 |
|----|------|----------|----------|------|
| [#114820](https://github.com/openclaw/openclaw/pull/114820) | **fix(cron)** | 防止网关重启后已完成的 Cron 任务再次执行 | 调度可靠性、避免重复副作用 | **CLOSED / merged** |
| [#110795](https://github.com/openclaw/openclaw/pull/110795) | **fix(usage)** | 修复 GitHub Copilot 使用量查看时的恶性 payload 导致的 TypeError | 扩展兼容性、避免 CLI 崩溃 | **CLOSED / merged** |
| [#113083](https://github.com/openclaw/openclaw/pull/113083) | **chore(deps)** | Android 依赖组升级（kotest 等 5 项） | 移动端构建链安全性 | **CLOSED / merged** |
| [#113200](https://github.com/openclaw/openclaw/pull/113200) | **fix(doctor)** | `doctor` 尊重配置的插件加载路径，修复升级后 BOOT.md 启动受阻 | 升级平滑度、插件生态 | **OPEN / ready for maintainer** |
| [#113625](https://github.com/openclaw/openclaw/pull/113625) | **fix(auto-reply)** | `typingMode: "message"` 下阻断执行阶段的打字指示器 | WhatsApp/Telegram UX 一致性 | **OPEN / ready for maintainer** |
| [#111126](https://github.com/openclaw/openclaw/pull/111126) | **fix(agent)** | 网关运行未完成时 CLI 返回非零退出码，修复 CI/脚本误判成功 | 自动化集成可靠性 | **OPEN / ready for maintainer** |
| [#114845](https://github.com/openclaw/openclaw/pull/114845) | **fix(process)** | 防止同作用域下重叠的受监管进程在替换后残留 | 资源泄漏、会话状态污染 | **OPEN / ready for maintainer** |

**整体推进评估**：**核心稳定性修复 7 项已就绪/合并**，覆盖 Cron 幂等、CLI 语义、进程管理、移动端依赖、插件加载、自动回复 UX；**大型重构类 PR（如 #114388 移除全局默认 Agent、#113920 多 Auth Profile 配额展示）仍在评审**，预计下一周期落地。

---

## 4. 社区热点——讨论最活跃的 Issues/PRs

| Issue/PR | 评论/👍 | 核心诉求 | 代表性声音 |
|----------|---------|----------|------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) **Linux/Windows Clawdbot Apps** | 115 💬 / 80 👍 | **平台完整性缺失**：macOS/iOS/Android 已有原生 App，Linux/Windows 仅能通过 CLI/Web UI 使用，企业桌面部署受阻 | “生产环境全是 Linux 服务器，缺原生托管能力”是高赞理由 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) **Gateway Memory Leak — RSS 350MB→15.5GB** | 21 💬 / 1 👍 | **P0 级内存泄漏**：2-3 天触发 OOM Kill，导致 `launchd-handoff` 重启风暴，生产不可用 | 附带 heap profile 与复现步骤，呼吁“优先级拉满、阻塞发布” |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) **Memory Trust Tagging by Source** | 22 💬 | **供应链安全**：按来源（用户指令/网页抓取/第三方 Skill）给记忆打标，防记忆投毒 | 安全团队标记 `impact:security`，配合 #10659 Masked Secrets 形成纵深防御 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) **Masked Secrets - Prevent Agent from Accessing Raw API Keys** | 15 💬 / 4 👍 | **凭据零信任**：Agent 只能“使用”不能“看到” Secret，防提示词注入窃密 | 已有链接 PR `#10660`（未在列表中），处于安全审核阶段 |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) **SQLite snapshot restore lacks crash/identity guarantees** | 12 💬 | **数据完整性**：快照恢复报成功但目录/身份守卫未落盘，灾备演练失效 | 标记 `impact:data-loss`，运维团队高度关注 |

**趋势研判**：**“生产级可靠性”（内存、会话、数据、安全）超越“新功能”成为社区第一诉求**；Linux/Windows 原生 App 需求持续 200+ 天未决，建议纳入路线图公开承诺。

---

## 5. Bug 与稳定性——按严重程度排序

| 严重度 | Issue | 现象 | 已有 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **P0 / Blocker** | [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway Memory Leak | RSS 350MB→15.5GB/2-3d → OOM Kill → 重启风暴 | **无** | 需立即组织专项排查，建议回滚可疑提交 `604f22c`（见 #40255） |
| **P0 / Blocker** | [#109867](https://github.com/openclaw/openclaw/issues/109867) Beta.2 迁移建索引在加列前 | 网关启动失败，`doctor --fix` 也报错 | **无** | 已标记 `no-stale`、`queueable-fix`，阻塞 Beta 用户升级 |
| **P1 / Critical** | [#87109](https://github.com/openclaw/openclaw/issues/87109) Gateway idle heap 558MB→1073MB+ | 空闲增长触发 `heap_threshold`，Cron 静默失败（无输出/报错） | **无** | 与 #91588 可能同根，macOS 可稳定复现 |
| **P1 / Critical** | [#113434](https://github.com/openclaw/openclaw/issues/113434) Codex sessions.reset 复用退役 ID + 目录扫描耗尽 RAM | Gateway 全面降级至崩溃，Windows 11 复现 | **无** | Beta.4 回归，涉及 Codex 集成与会话 ID 管理 |
| **P1 / Critical** | [#85844](https://github.com/openclaw/openclaw/issues/85844) Auto-update 留存 stale hashed bundle imports | 更新后旧模块图仍引用已删除哈希文件，导入报错 | **无** | 需在更新钩子中强制清理 require cache |
| **P1** | [#102020](https://github.com/openclaw/openclaw/issues/102020) 第 2 条消息 "reply session initialization conflicted" | 跨频道、位置相关，Signal/Discord 均复现 | **无** | 已关闭但标记 `clawsweeper-recovery-stuck`，可能未真解决 |
| **P1** | [#94251](https://github.com/openclaw/openclaw/issues/94251) Ollama 远程流式未消费 | `model_call:started` 后无后续，聊天会话卡死 | **无** | 远程 Ollama 场景阻塞，本地正常 |
| **P1** | [#113323](https://github.com/openclaw/openclaw/issues/113323) LLM idle timeout 误判推理流 | 本地推理模型输出 reasoning tokens 时被判超时中止 | **无** | 需区分“首 token 延迟”与“流式间隙” |
| **P2 / Regression** | [#86519](https://github.com/openclaw/openclaw/issues/86519) Telegram 重复回复 2-10x | 5.20 版本引入，5.22 缓解未根治 | **无** | 涉及去重/幂等逻辑，建议对照 #114799 统一修复 |
| **P2** | [#94939](https://github.com/openclaw/openclaw/issues/94939) 6.x 迁移留空 SQLite conversation store | MS Teams 主动发送失效，引用孤儿记录 | **无** | 迁移脚本缺失 `VACUUM`/完整性校验 |

> **修复管线现状**：上述 10 个 P0/P1 Bug **仅 #109867 有标记 `queueable-fix`**，其余均无关联 PR，维护团队需建立“P0 72h 内必须有 WIP PR”机制。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 社区热度 | 相关 PR / 实现就绪度 | 入版概率 |
|------|-------|----------|----------------------|----------|
| **Linux/Windows 原生 App** | [#75](https://github.com/openclaw/openclaw/issues/75) | ⭐⭐⭐⭐⭐ (80 👍) | 无 | **高**（平台完整性基线，建议 2026 Q3 立项） |
| **Memory Trust Tagging** | [#7707](https://github.com/openclaw/openclaw/issues/7707) | ⭐⭐⭐ | 无 | **中高**（安全纵深，配合 #10659 可打包为 “Security Hardening Sprint”） |
| **Masked Secrets** | [#10659](https://github.com/openclaw/openclaw/issues/10659) | ⭐⭐⭐⭐ (4 👍) | `#10660`（推测） | **高**（零信任趋势，企业准入门槛） |
| **动态模型发现** | [#10687](https://github.com/openclaw/openclaw/issues/10687) | ⭐⭐⭐ (3 👍) | 无 | **中**（OpenRouter 目录高频变更，现有静态目录痛点大） |
| **Webhook 多轮会话复用** | [#11665](https://github.com/openclaw/openclaw/issues/11665) | ⭐⭐ | 文档声称支持但实现缺失 | **中高**（修复成本低，文档与实现对齐即可） |
| **Exec-approvals Denylist** | [#6615](https://github.com/openclaw/openclaw/issues/6615) | ⭐⭐⭐ (8 👍) | 无 | **中**（允许列表互补，安全策略灵活度） |
| **Skill 权限清单标准** | [#12219](https://github.com/openclaw/openclaw/issues/12219) | ⭐⭐ | 无 | **中长期**（生态治理基建，需配合插件市场） |

**路线图建议**：下一版本（v2026.7.x / v2026.8.x）聚焦 **“稳定性 + 安全基线”**：合并上述 P0/P1 修复 + Masked Secrets + Denylist + Webhook 多轮修复；Linux/Windows App 列为 **v2026.9 里程碑** 并招募 Maintainer。

---

## 7. 用户反馈摘要——真实痛点与场景

| 痛点类别 | 典型引述（Issue 评论精炼） | 影响用户群 | 频次 |
|----------|----------------------------|------------|------|
| **内存/稳定性焦虑** | “Gateway 跑 2 天必重启，Cron 全挂，生产环境不敢用” (#91588, #87109) | 自托管运维、企业用户 | 极高 |
| **会话/消息丢失** | “Telegram 第二条消息必报错；WhatsApp 长调用直接丢回复” (#102020, #84569) | 即时通讯机器人运营者 | 高 |
| **平台缺失** | “团队全 Linux 桌面，只能用 Web UI，托管、通知、剪贴板集成全无” (#75) | 桌面端开发者、企业 IT | 持续高 |
| **安全合规阻滞** | “审计要求 Agent 不能见明文 AK/SK，目前只

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 | 2026-07-28

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现 **“头部项目攻坚稳定性、腰部项目拓展生态边界、长尾项目维护乏力”** 的三层态势。OpenClaw、NanoBot、Hermes Agent、IronClaw、ZeroClaw 等头部项目同步进入 **“生产级可靠性”建设期**，核心精力集中于内存泄漏治理、会话状态一致性、跨平台原生支持（Linux/Windows）及零信任安全基线（Secrets 掩码、权限清单）。腰部项目（Moltis、CoPaw、NanoClaw、LobsterAI）在 ACP 协议互操作、Computer Use 原生自动化、技能市场、多渠道接入等差异化赛道加速落子。长尾项目（NullClaw、TinyClaw、ZeptoClaw、PicoClaw）多处于低维护或停滞状态。生态整体从“功能竞赛”转向 **“工程化交付、安全合规、多平台一致性体验”** 的深水区竞争。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活跃/关闭) | PRs (待合并/已合并/关闭) | Release (今日) | 健康度评估 | 核心状态关键词 |
|------|----------------------|--------------------------|----------------|------------|----------------|
| **OpenClaw** | 242 / — / 258 | 282 / 218 / — | 无 | ⭐⭐⭐⭐⭐ **高强度稳定性治理** | P0内存泄漏、会话死锁、安全加固、平台缺失 |
| **NanoBot** | 1 / — / 63 | 13 / 23 / — | 无 | ⭐⭐⭐⭐⭐ **大规模技术债清仓** | GitStore修复、多模态会话、LINE Channel、技能市场 |
| **Hermes Agent** | 42 / — / 8 | 43 / 7 / — | 无 | ⭐⭐⭐⭐ **跨平台兼容性攻坚** | Windows路径/编码、macOS权限、会话状态同步 |
| **IronClaw** | 高活跃 (89条更新) | 19 已合并/关闭 | **v1.0.0 (7/27)** | ⭐⭐⭐⭐⭐ **发布后快速迭代** | 错误可恢复性契约、测试平台隔离、WebChat SSE 429 |
| **ZeroClaw** | 高活跃 (安全类P1集中) | 多关键Fix PR在审 | 无 (v0.8.3) | ⭐⭐⭐⭐ **高强度安全加固** | API Key泄露、沙箱绕过、Delegate越权、Landlock兼容 |
| **Moltis** | 0 | 5 待合并 / 0 | 无 | ⭐⭐⭐⭐ **架构级功能并行** | ACP Agent模式、Operator权限、可观测性基建、zvec向量后端 |
| **CoPaw (QwenPaw)** | 50 | 49 (多大型特性PR) | 无 (v2.0.x) | ⭐⭐⭐⭐ **次世代核心能力冲刺** | Computer Use、统一浏览器、第三方Agent、视觉压缩 |
| **NanoClaw** | 0 | 8 待合并 / 1 关闭 | 无 | ⭐⭐⭐ **评审瓶颈明显** | Agent编排一致性、Signal修复、Dial Channel、ncc CLI技能 |
| **LobsterAI** | 8 | 9 (6合并) | 无 | ⭐⭐⭐⭐ **Windows原生体验补课** | 安装器回滚、exec中文路径、加速器数据损坏、Electron滞后 |
| **NullClaw** | 0 | 1 (Dependabot, 43天) | 无 | ⭐ **维护模式/停滞** | Alpine基础镜像更新堆积 |
| **TinyClaw / ZeptoClaw / PicoClaw** | 无活动 | 无活动 | 无 | ⭐ **非活跃/归档态** | 无增量数据 |

> **注**：健康度评估维度 = 代码吞吐率 × 关键路径修复响应速度 × 社区互动质量 × 版本发布节奏。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 定位 | 差异化对比 |
|------|---------------|------------|
| **技术路线** | **全栈自研网关+插件生态**，强调“网关即运行时”，单二进制部署，内置 Cron、技能、记忆、多渠道网关 | 对比 IronClaw/ZeroClaw 的微服务/沙箱架构，OpenClaw 部署门槛更低；对比 NanoBot/CoPaw 的 TypeScript/Rust 混合栈，OpenClaw Go 单栈运维更轻量 |
| **社区规模** | **头部规模**：单日 500+ Issues/PRs，长期高热 Issue（Linux/Windows App 80👍，内存泄漏 21💬） | 远超 NanoBot（63 Closed Issues 但多为历史清仓）、Hermes（50 Issues）、ZeroClaw（安全类集中爆发） |
| **核心优势** | 1. **生产级自托管最佳实践积累最深**（Gateway 内存/会话/数据完整性治理经验）<br>2. **插件/技能生态最成熟**（BOOT.md、doctor、skill manifest 标准化）<br>3. **企业级安全合规先行**（Masked Secrets、Memory Trust Tagging、Exec-approvals Denylist） | NanoBot 在“本地优先、GitStore 持久化、Dream 自动化”差异化；IronClaw 在“Reborn 重架构、PostgreSQL 会话后端、Extension Host”差异化；ZeroClaw 在“WASM 插件沙箱、Landlock、ACP 协议”差异化 |
| **主要短板** | **Linux/Windows 原生 App 缺失 200+ 天**，桌面端托管、通知、剪贴板集成断层 | CoPaw 已有 Tauri 原生桌面（Computer Use）、NanoBot 覆盖全平台 CLI/WebUI、IronClaw v1.0 重构含桌面端国际化 |

**结论**：OpenClaw 是当前生态中 **“自托管生产部署参考实现”** 的事实标杆，但需尽快补齐桌面原生能力，否则面临被 CoPaw/IronClaw 在“开发者体验”维度反超风险。

---

## 4. 共同关注的技术方向（跨项目高频涌现）

| 技术方向 | 涉及项目 | 具体诉求/实现进展 |
|----------|----------|-------------------|
| **零信任安全基线（Secrets 掩码/权限最小化）** | **OpenClaw** (#10659 Masked Secrets, #12219 Skill 权限清单)、**ZeroClaw** (6个P1安全漏洞：API Key泄露、沙箱绕过、Token泄露)、**NanoBot** (Dream写保护 #4667)、**IronClaw** (CA+凭证防火墙 #6723) | 从“Agent 能看到 Key”转向“Agent 只能使用 Key”；技能/工具调用需显式授权清单；审批 Token 生命周期强制管理 |
| **跨平台原生一致性（Linux/Windows 桌面级体验）** | **OpenClaw** (#75 80👍)、**Hermes Agent** (Windows路径/编码/IME、macOS权限/签名)、**LobsterAI** (安装器回滚、exec中文路径、Electron升级)、**CoPaw** (Windows索引持久化 #5259、Tauri原生沙箱 #6462)、**NanoBot** (Ollama本地部署 #2570) | 核心痛点：原生通知、剪贴板、文件系统监听、中文路径/编码、系统级沙箱、自动更新可靠性 |
| **会话/记忆/状态的可靠性工程** | **OpenClaw** (会话死锁、SQLite快照恢复 #113306、Codex会话ID复用 #113434)、**NanoBot** (GitStore对象ID损坏 #5124、会话合并丢媒体 #5120、Memory Consolidation卡死 #1174)、**ZeroClaw** (空响应误判成功 #9421、SOP无取消路径 #9425)、**IronClaw** (错误可恢复性契约 #6284、进程日志投影 #6696) | 从“能跑通”转向“可验证、可回滚、可审计”：幂等性、事务性、快照一致性、心跳看门狗 |
| **ACP / 互操作协议标准化** | **Moltis** (#1169 暴露为 ACP Agent)、**ZeroClaw** (ACP 协议栈)、**CoPaw** (#6397 第三方Agent集成 Codex/Qoder/MCP)、**NanoClaw** (技能体系标准化) | 推动 Agent 之间、Agent 与编辑器/编排器（Zed、buzz-acp）的标准化互调，MCP 生态接入成为基线能力 |
| **长上下文/多模态工程化（视觉压缩、重排、工件）** | **CoPaw** (#6456 Visual Compact、#6398 Reranker)、**NanoBot** (Artifact 预览/分享/部署 #2388)、**LobsterAI** (Sites/Renderer 批量更新)、**OpenClaw** (动态模型发现 #10687) | Token 成本控制：选择性压缩、候选集过采样→重排→截断；Artifact 作为结构化交互单元的生产化 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|----------|----------|------------------|
| **OpenClaw** | **全能型自托管网关**：Cron、技能市场、多渠道、记忆、审批流一体化 | 运维团队、企业内网部署、重合规场景 | Go 单二进制，SQLite/PostgreSQL 双后端，插件热加载，Gateway 为核心运行时 |
| **IronClaw** | **重架构平台化**：Extension Host、ACP Agent、PostgreSQL-only、错误可恢复性契约 | 平台构建者、需要强隔离/可观测性的二次开发者 | Rust 微服务化，Reborn 重写，WASM 沙箱，CAP 定理显式建模，v1.0 破坏性迁移 |
| **ZeroClaw** | **安全优先运行时**：Landlock/WASM 双重沙箱、ACP 原生、PostgreSQL 会话、形式化验证倾向 | 高安全合规要求、联邦学习/多租户、供应链安全敏感组织 | Rust + WASM 插件，能力系统细粒度授权，零信任网络平面，CI/测试极度重视确定性 |
| **NanoBot** | **本地优先/开发者体验**：GitStore (Git 语义持久化)、Dream 自动化、技能市场、ACP Client | 个人开发者、极客、追求“可黑客化”本地 Agent | TypeScript/Rust 混合，Git 为存储核心，Dream 模式自进化，WebUI 为主交互面 |
| **CoPaw (QwenPaw)** | **多模态桌面原生**：Computer Use (无障碍树)、统一浏览器、视觉压缩、第三方 Agent 生态 | 桌面端重度用户、自动化测试/QA、需要 GUI 操控的场景 | Tauri + Rust + TS，原生沙箱，Accessibility Tree 驱动，Chrome Extension 插件架构 |
| **Moltis** | **ACP 生态枢纽**：ACP Agent/Client 双模、zvec 向量后端、可观测性基建、PWA 优先 | 编辑器/IDE 集成场景、需要嵌入式 Agent 的平台方 | Rust，ACP 协议栈完整实现，插桩观测框架，Feature-gated 实验性后端 |
| **Hermes Agent** | **多平台网关一致性**：桌面端 i18n、键盘布局、IME、WebChat SSE 稳定性 | 跨平台桌面用户、国际化团队、Web 托管实例 | Electron + Go 后端，重前端交互细节（Dvorak、IME、快捷键），Feishu/Discord 深度适配 |
| **LobsterAI** | **Windows 原生体验补齐**：安装器、exec 中文路径、Electron 升级、Artifact 生态 | Windows 主力开发者、非技术用户友好度要求高 | Electron + TypeScript，OpenClaw 内核下游，重“开箱即用”打磨 |
| **NanoClaw** | **轻量化编排内核**：Agent 交互一致性、审批卡片持久化、Signal/Dial 通道、ncc CLI | 轻量部署、终端交互为主、通道聚合场景 | Go，精简核心，技能即插件，通道适配器模式 |

---

## 6. 社区热度与成熟度分层

|

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-07-28

> **数据基准**：GitHub 过去 24 小时（2026-07-27 至 2026-07-28）Issues/PRs 活动快照  
> **统计口径**：Issues 64 条（新/活跃 1，关闭 63），PRs 36 条（待合并 13，已合并/关闭 23），Release 0 个

---

## 1. 今日速览

- **整体活跃度极高**：单日关闭 **63 个 Issues** 与 **23 个 PRs**，呈现大规模“清仓式”收敛态势，核心维护者（`chengyongru`、`hamb1y`、`ATECHPCS` 等）集中攻坚历史遗留缺陷与近期回归问题。
- **零新版本发布**：当前处于 **v0.1.x 预发布迭代期**，重心在架构修补（GitStore、Session、Memory、Channel）与 WebUI 体验打磨，而非功能大版本推进。
- **核心技术债偿还**：修复 `GitStore` 对象 ID 双重十六进制编码导致的内存一致性崩溃（#5124/#5126）、会话合并丢失媒体路径（#5120）、Dream 模式写保护用户技能（#4667）等 P1 级阻断性缺陷。
- **多渠道生态扩展**：新增 **LINE Messaging API Channel** (#5115)，补齐东南亚/日台主流 IM 接入；WebUI 引入 **技能市场** (#5116) 与 **只读 Dream 会话回放** (#5112)，生态化信号明显。
- **社区响应及时**：高热度 Issues（如 #1991 多 Custom 支持、#3123 Cron 消息上下文、#1174 内存整理卡死）今日均已关闭，表明维护团队对长期痛点的清理决心。

---

## 2. 版本发布

> **今日无新版本发布**。当前最新发布版本仍为 `v0.1.4.post3`（历史版本），主分支处于高频提交状态，建议关注后续 `v0.1.5` 或 `v0.2.0` 预发布标签。

---

## 3. 项目进展：今日合并/关闭的关键 PRs

| PR | 类型 | 核心变更 | 影响面 | 状态 |
|----|------|----------|--------|------|
| [#5124](https://github.com/HKUDS/nanobot/pull/5124) / [#5126](https://github.com/HKUDS/nanobot/pull/5126) | **Regression Fix (P1)** | 修复 `GitStore` 对 `dulwich` 返回的 Git Object ID 调用 `.hex()` 导致“十六进制的十六进制”，破坏内存存储一致性 | 核心内存/会话持久化，**全用户影响** | ✅ Merged / ✅ Open (重复) |
| [#5120](https://github.com/HKUDS/nanobot/pull/5120) | **Bug Fix (P1)** | 会话合并时，仅存在于结构化 `media[]` 字段的上传文件绝对路径被丢弃，导致多模态上下文丢失 | 多模态对话、文件上传、WebUI/CLI 通用 | ✅ Open (待合并) |
| [#4667](https://github.com/HKUDS/nanobot/pull/4667) | **Security / Feature Guard** | Dream 模式新增写保护：仅允许修改带 `dream_managed: true` frontmatter 的技能，防止自动化流覆盖用户技能 | Dream 自动化、技能生态安全 | ⚠️ Open (Conflict) |
| [#5114](https://github.com/HKUDS/nanobot/pull/5114) | **Bug Fix (P1)** | Dream 提示词组装保留完整会话历史；`write_file` 精准落盘到 `SOUL.md`/`USER.md`/`MEMORY.md`，避免历史篡改 | Dream 推理质量、长期记忆完整性 | ✅ Merged |
| [#5115](https://github.com/HKUDS/nanobot/pull/5115) | **Feature (Channel)** | 新增 **LINE Messaging API Channel**（Webhook + HMAC-SHA256 验签、允许列表、主动推送） | 东南亚/日台用户接入，**生态扩展里程碑** | ⚠️ Open |
| [#5116](https://github.com/HKUDS/nanobot/pull/5116) | **Feature (WebUI)** | WebUI 接入 `skills.sh` 市场：搜索、安装确认、安装历史火花线、已装技能管理 | 技能分发、开发者生态、WebUI 核心入口 | ⚠️ Open |
| [#5112](https://github.com/HKUDS/nanobot/pull/5112) | **Feature (WebUI)** | Dream 运行以只读会话组形式回放：推理链、工具调用、文件编辑、流式输出、文件预览 | 可观测性、调试、复盘体验 | ⚠️ Open (Conflict) |
| [#5110](https://github.com/HKUDS/nanobot/pull/5110) | **Feature (CLI)** | `nanobot status` 扩展为 **Agent 就绪度离线检查**：环境引用、模型解析、Provider 构建、Schema 校验，错误定位到字段级 | 运维诊断、CI/CD 集成、新手引导 | ⚠️ Open |
| [#5077](https://github.com/HKUDS/nanobot/pull/5077) | **UX (WebUI)** | Composer 长按拖拽切换 Model Preset，移动端友好 Dock 交互 | 模型切换效率、移动端体验 | ✅ Merged |
| [#5080](https://github.com/HKUDS/nanobot/pull/5080) | **Brand/Infra** | README 与 WebUI 资产全面迁移 SVG，移除 PNG，零字体依赖 | 品牌一致性、加载性能、维护成本 | ✅ Merged |
| [#5076](https://github.com/HKUDS/nanobot/pull/5076) | **Bug Fix** | Vite Dev 模式下正确代理自定义 Gateway 端口 WebSocket | 本地开发体验 | ✅ Merged |

**进展评估**：核心存储层（GitStore）与会话生命周期的**基础设施级 Bug 基本清零**；WebUI 从“可用”向“好用/可扩展”跨越；Channel 生态完成主流 IM 覆盖拼图（Telegram/Discord/Feishu/Matrix/Slack/Webhook/**LINE**）。

---

## 4. 社区热点：高互动 Issues 深度解析

| Issue | 评论/👍 | 核心诉求 | 当前进展 | 分析 |
|-------|--------|----------|----------|------|
| [#1991](https://github.com/HKUDS/nanobot/issues/1991) | 9 / 0 | **多 Custom Provider 支持**：用户期望在配置中定义 `custom2`、`custom3` 以便自由切换模型（如本地/云/不同厂商） | ✅ Closed (今日) | 典型**多租户/多环境**需求，反映配置系统灵活度不足。关闭可能因架构重构（Provider Registry）已在主分支支持多命名 Provider，待文档跟进。 |
| [#3123](https://github.com/HKUDS/nanobot/issues/3123) | 8 / 0 | **Cron 任务发送消息无上下文**：定时任务发出的消息使用独立 Session，用户无法在后续对话中引用/纠正该内容 | ✅ Closed (今日) | 暴露 **Session 隔离与跨 Channel 消息路由** 设计短板。关联 #3074、#2549，提示需统一“会话总线”语义。 |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) | 7 / 0 | **Ollama 本地部署 404 / 端口不监听**：Gateway 宣称监听 18790 实则未监听，vLLM Provider 前缀导致模型名错误 | ✅ Closed (今日) | 本地模型接入**文档与实现脱节**高发区。#1590 提供了完整 Workaround，建议固化为官方配置模板。 |
| [#1174](https://github.com/HKUDS/nanobot/issues/1174) | 5 / 2 | **Memory Consolidation 耗时/失败阻塞新会话**：本地模型无法完成整合，导致无法开启新 Session | ✅ Closed (今日) | **可用性底线问题**。需提供“跳过整合/异步整合/降级策略”开关，避免单点卡死整个 Agent。 |
| [#4792](https://github.com/HKUDS/nanobot/issues/4792) | 3 / 0 | **`/stop` 静默丢弃待处理队列消息**：`cmd_stop` 排空队列但不重新发布，导致永久消息丢失 | ✅ Closed (今日) | **数据一致性严重缺陷**，已有修复思路（参考 `_dispatch` finally 块），需尽快合入主分支。 |
| [#3559](https://github.com/HKUDS/nanobot/issues/3559) | 3 / 0 | **WebSocket 无法替代 Webhook 做主动推送**：多租户下 Cron/Heartbeat/主动发送仍需 Webhook | ✅ Closed (今日) | 架构层面的 **Channel 能力分层** 讨论。WebSocket 适合被动接收，主动推送需统一 `Outbound Bus` 抽象。 |

**热点画像**：用户多为**自部署开发者/高级用户**，痛点聚焦于**本地模型接入稳定性、多会话/多渠道上下文共享、长期记忆可靠性、生产级运维可观测性**。维护团队今日集中回应了大量历史积压，社区信任度修复明显。

---

## 5. Bug 与稳定性：今日报告/修复的关键缺陷

| 严重度 | Issue/PR | 标题 | 状态 | 修复 PR |
|--------|----------|------|------|---------|
| **P0 - 数据丢失** | [#4792](https://github.com/HKUDS/nanobot/issues/4792) | `/stop` 丢弃 pending queue 消息 | ✅ Closed | 需对照 `_dispatch` 补全 `bus.publish_inbound` |
| **P0 - 内存损坏** | [#5124](https://github.com/HKUDS/nanobot/pull/5124) | GitStore Object ID 双重 Hex 编码 | ✅ Merged | #5124 / #5126 |
| **P1 - 多模态丢失** | [#5120](https://github.com/HKUDS/nanobot/pull/5120) | Session Consolidation 丢弃 `media[]` 路径 | ⚠️ Open | #5120 |
| **P1 - 安全越界** | [#4667](https://github.com/HKUDS/nanobot/pull/4667) | Dream 可任意覆盖用户技能 | ⚠️ Open (Conflict) | #4667 |
| **P1 - 回归** | [#2549](https://github.com/HKUDS/nanobot/issues/2549) | 跨 Channel 并发 `_sent_in_turn` 覆盖写 | ✅ Closed | 需锁或 Thread-Local 存储 |
| **P1 - 静默失败** | [#4805](https://github.com/HKUDS/nanobot/issues/4805) | `suppress(Exception)` 吞没工具验证错误 | ✅ Closed | 改为捕获特定异常并记录 |
| **P2 - 体验阻塞** | [#1174](https://github.com/HKUDS/nanobot/issues/1174) | Memory Consolidation 卡死阻塞新 Session | ✅ Closed | 需引入 `consolidation: optional/async/skip` 配置 |
| **P2 - 渠道不一致** | [#3166](https://github.com/HKUDS/nanobot/issues/3166) | Feishu 无进度通知（Telegram/Matrix 有） | ✅ Closed | 统一 `send_progress` 抽象层实现 |

**趋势判断**：**存储层、会话生命周期、多渠道一致性**是当前三大高危区。今日 P0/P1 修复率高，但 #5120、#4667 仍在 Review/Conflict 状态，**建议维护者优先解除冲突合入**，避免主分支长期带病运行。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心需求 | 关联 PR/Issue | 入版概率 | 备注 |
|----------|----------|---------------|----------|------|
| [#1991](https://github.com/HKUDS/nanobot/issues/1991) | 多 Custom Provider / 动态模型切换 | 架构层 Provider Registry 已支持，缺配置层文档 | **高** | v0.1.5 文档更新即可交付 |
| [#5115](https://github.com/HKUDS/nanobot/pull/5115) | LINE Channel | PR 已开，含测试 | **高** | 补全东南亚拼图，下个 Minor 版必入 |
| [#5116](https://github.com/HKUDS/nanobot/pull/5116) | WebUI 技能市场 | PR 开发中，依赖 `skills.sh` API | **中高** | 需 `skills.sh` 侧稳定性达标，可能随 v0.2.0 发布 |
| [#5112](https://github.com/HKUDS/nanobot/pull/5112) | Dream 只读回放 |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-07-28

## 1. 今日速览
- **整体活跃度：高** —— 过去 24 小时共 50 条 Issue 更新（42 个活跃/新开，8 个关闭），50 条 PR 更新（43 个待合并，7 个已合并/关闭），无新版本发布。  
- **核心动能集中在“修复与稳定性”**：7 个 PR 合并/关闭，主要解决会话状态泄漏、Windows 路径兼容、macOS 启动权限、网关看门狗缺失等 P1/P2 级阻塞问题。  
- **社区讨论热度上升**：Issue #67600（默认配置会话侧边栏空白）积累 13 条评论，成为当日最热话题；多个 Windows/路径/编码相关 Bug 并行讨论，显示跨平台适配压力持续。  
- **新功能探索并行**：语音唤醒词、Discord 线程生命周期、动态编排契约、宠物拖拽动画等 6 个特性 PR 同步推进，显示产品向“多模态交互、多平台网关、可观测性”三条线演进。  
- **技术债清理可见**：测试隔离（#71271）、贡献者邮箱映射（#71783）、文档漂移检测（#67325）等工程化 PR 进入审查，代码库健康度治理同步进行。

## 2. 版本发布
> 今日无新版本发布。

## 3. 项目进展（今日合并/关闭的关键 PR 与对应 Issue）
| PR / Issue | 标题 | 类型 | 影响范围 | 进展说明 |
|------------|------|------|----------|----------|
| #72016 (Closed) | Gateway sessions lack activity watchdog — agent loop stalls silently | **Bug (P1)** | `comp/gateway`, `platform/feishu` | 已关闭，配套修复 PR #73031 今日重新提交并进入审查，解决网关会话无心跳导致的静默卡死。 |
| #72970 (Closed) | Windows startup slow: optional skill provenance backfill repeatedly scans active skills | **Perf (P2)** | `comp/cli`, `tool/skills`, `platform/windows` | 标记为重复关闭，性能回归已由后续 PR 处理。 |
| #65735 (Closed) | Support multiple openai/codex subscriptions | **Feature (P3)** | `comp/cli`, `provider/openai`, `area/config` | 已实现并合并主干，支持多 Codex 订阅切换。 |
| #66757 (Closed) | Desktop app i18n: respect display.language config | **Feature (P3)** | `comp/desktop`, `area/i18n` | 标记重复关闭，桌面端国际化配置已在其他 PR 落地。 |
| #72667 (Closed) | MCP stdio: stale serve processes mask fixes + unbounded dart mcp-server accumulation (macOS) | **Perf (P2)** | `comp/cli`, `tool/mcp` | 已关闭，MCP 进程管理与资源泄漏修复并入主干。 |
| #63632 (Closed) | MEDIA_TAG_CLEANUP_RE fails when [[as_document]] glued to path | **Bug (P2)** | `comp/gateway` | 正则修复已合并，媒体标签清理不再因无空格丢失文件。 |
| #47456 (Closed) | browser_tool.py UnicodeDecodeError on Windows with non-UTF-8 encoding | **Bug (P2)** | `comp/agent`, `tool/browser`, `platform/windows` | 编码处理修复已合并，解决 GBK/CJK 环境下浏览器工具崩溃。 |
| #46369 (Closed) | Keyboard shortcuts ignore Dvorak/non-QWERTY layouts | **Bug (P3)** | `comp/desktop` | 已修复合并，快捷键改用 `event.key` 而非 `event.code`。 |

> **整体推进**：7 个关闭项覆盖 **P1 稳定性、跨平台兼容、网关可靠性、启动性能、国际化** 五大维度，核心阻塞点基本清除，主干进入“特性并行 + 长尾 Bug 收敛”阶段。

## 4. 社区热点（评论数 Top 10 Issues/PRs）
| 排名 | Issue/PR | 评论数 | 核心诉求 | 关联链接 |
|------|----------|--------|----------|----------|
| 1 | #67600 | 13 | **默认配置会话侧边栏空白**（仅 `default` profile 受影响），后端已确认返回数据，前端渲染/状态同步疑似回归。 | [Issue #67600](https://github.com/NousResearch/hermes-agent/issues/67600) |
| 2 | #61396 | 5 | macOS arm64 `node-pty` spawn-helper 执行位丢失导致终端启动失败，需在打包流程保留可执行权限。 | [Issue #61396](https://github.com/NousResearch/hermes-agent/issues/61396) |
| 3 | #63177 | 5 | Windows 绝对路径传给 `search_files` 时被 `_bash_safe_path` 误改为 MSYS 格式，原生 `rg` 无法解析。 | [Issue #63177](https://github.com/NousResearch/hermes-agent/issues/63177) |
| 4 | #40146 | 4 | Windows 桌面端中文 IME 输入时语音/发送按钮切换延迟，需在 composition 期间即显示发送按钮。 | [Issue #40146](https://github.com/NousResearch/hermes-agent/issues/40146) |
| 5 | #26037 | 4 | Feishu 回复图片/非文本消息丢失父上下文，`_fetch_message_text` 返回空导致网关无法构建引用。 | [Issue #26037](https://github.com/NousResearch/hermes-agent/issues/26037) |
| 6 | #68339 | 4 | 混合批次工具执行（#66317）与 `TOOL_USE_ENFORCEMENT_GUIDANCE` 交互导致早期会话工具调用异常前置。 | [Issue #68339](https://github.com/NousResearch/hermes-agent/issues/68339) |
| 7 | #50681 | 3 | pytest 运行时因模块级 `DEFAULT_DB_PATH` 常量冻结，测试会话泄漏写入生产 `state.db`。 | [Issue #50681](https://github.com/NousResearch/hermes-agent/issues/50681) |
| 8 | #46369 | 3 | ~~桌面端快捷键忽略 Dvorak 布局~~（已修复合并）。 | [Issue #46369](https://github.com/NousResearch/hermes-agent/issues/46369) |
| 9 | #72971 | 3 | 模型响应慢时切换会话，`prompt.submit` 发往错误会话，导致消息错位。 | [Issue #72971](https://github.com/NousResearch/hermes-agent/issues/72971) |
| 10 | #42376 | 3 | macOS 26.5.1 `hermes gateway restart` 生成的 plist 含 `LimitLoadToSessionType` 导致 `launchctl bootstrap` 失败。 | [Issue #42376](https://github.com/NousResearch/hermes-agent/issues/42376) |

> **热点分析**：Top 10 中 7 个为 **跨平台/跨环境兼容性**（Windows 路径、macOS 权限/编码、IME、键盘布局），1 个为 **核心会话状态同步**（#67600、#72971），1 个为 **网关上下文丢失**（#26037），1 个为 **工具执行策略副作用**（#68339）。社区痛点高度聚焦“多环境一致性体验”与“会话可靠性”。

## 5. Bug 与稳定性（按严重度排序，标注修复状态）
| 严重度 | Issue | 标题 | 影响组件 | 修复 PR 状态 |
|--------|-------|------|----------|--------------|
| **P1** | #72975 | Interrupt/abort 静默无操作：`force_close_tcp_sockets()` 返回 0 导致请求存活数分钟 | `comp/agent`, `provider/openai` | 🟡 **Open** — 无关联 PR，需紧急排查 |
| **P1** | #72016 | Gateway 会话缺乏活动看门狗，Agent 循环静默卡死无检测/通知 | `comp/gateway`, `platform/

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-07-28

> **数据来源**：GitHub `qwibitai/nanoclaw` 仓库近 24 小时增量数据  
> **统计窗口**：2026-07-27 00:00 – 2026-07-28 00:00 (UTC)  
> **报告生成时间**：2026-07-28

---

## 1. 今日速览
- **整体活跃度**：**中等偏高**。过去 24 小时无新 Issue，但有 **9 条 PR 活动**（8 个待合并、1 个关闭），核心团队与外部贡献者均在推进通道适配、技能体系、Signal 适配器稳定性及核心调度逻辑的修复。
- **核心动向**：核心团队成员 `Koshkoshinsk` 提交两个核心修复 PR（#3137、#3143），聚焦 Agent 交互一致性与审批卡片状态持久化；`ira-at-work` 连续修复 Signal 附件路径与文档同步问题（#3142、#2685）；新增 Dial 通道集成（#3050）与 ncc 运维 CLI 技能（#2971）正在评审。
- **风险提示**：多个长期开放 PR（如 #2346、#2685）已超 2 月未合并，需关注评审瓶颈；无新 Release 计划可见。

---

## 2. 版本发布
**今日无新版本发布**。当前最新稳定版仍为此前发布的版本（具体版本号需查阅 Releases 页）。

---

## 3. 项目进展：今日合并/关闭的重要 PR

| PR | 类型 | 核心变更 | 影响评估 |
|----|------|----------|----------|
| **[#2598](https://github.com/nanocoai/nanoclaw/pull/2598)** `[CLOSED]` | **Fix / Config** | 修复配置加载：在 `settingSources` 中新增 `local`，支持按组加载 `CLAUDE.local.md` | 🟢 **已关闭但未合并**（标记为 CLOSED，可能被替代方案取代或关闭合并），配置分层能力落地受阻，需确认后续方案。 |

> **进展小结**：今日仅 1 个 PR 关闭且非合并入主干，主干代码实际推进为 **0**。核心功能均停留在评审阶段，工程吞吐率偏低。

---

## 4. 社区热点：讨论最活跃 / 关注度最高的 PR

| PR | 标签 | 作者 | 更新时间 | 核心诉求 / 争议点 |
|----|------|------|----------|-------------------|
| **[#3137](https://github.com/nanocoai/nanoclaw/pull/3137)** | `core-team` | Koshkoshinsk | 2026-07-27 | **Agent 交互一致性重构**：保留累积上下文、开放组级 Agent 自检/调整 engagement policy、拒绝非法正则。核心团队主导，关乎多 Agent 编排稳定性。 |
| **[#3143](https://github.com/nanocoai/nanoclaw/pull/3143)** | `PR: Fix, core-team` | Koshkoshinsk | 2026-07-27 | **审批卡片持久化**：解决已决审批卡片标题/详情丢失、按钮未正确替换为决策/超时态的问题，提升终端交互体验。 |
| **[#3142](https://github.com/nanocoai/nanoclaw/pull/3142)** | `fix(signal)` | ira-at-work | 2026-07-27 | **Signal 附件路径修复**：将未挂载的 `/workspace/extra/signal-attachments/<id>` 替换为 mounted inbox 路径，解决 PDF/文档等非图片附件无法读取的阻塞性 Bug。 |
| **[#3050](https://github.com/nanocoai/nanoclaw/pull/3050)** | `PR: Feature, PR: Skill` | OmriBenShoham | 2026-07-27 | **新增 Dial 通道集成**：向通道选择器/向导/技能体系添加 Dial 支持，扩展即时通讯生态覆盖面。 |

> **热点分析**：核心团队集中修复 **Agent 编排一致性**（#3137）与 **终端交互完整性**（#3143），Signal 适配器修复（#3142）解决数据面阻塞，Dial 集成（#3050）拓展渠道广度。四大 PR 均在 24h 内更新，显示核心维护者聚焦“稳定性+扩展性”双轨并行。

---

## 5. Bug 与稳定性：今日报告/修复的缺陷

| 严重级 | PR / Issue | 标题 | 状态 | 修复 PR | 影响范围 |
|--------|------------|------|------|---------|----------|
| **🔴 Critical** | [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) | Signal 适配器将附件指向未挂载容器路径，导致所有非图片/非音频附件（PDF、文本、文档）无法读取 | **Open** | **#3142 自身** | Signal 通道文件交互完全失效 |
| **🟡 High** | [#3143](https://github.com/nanocoai/nanoclaw/pull/3143) | 已决审批卡片丢失标题/详情、按钮未正确渲染为决策态或超时态 | **Open** | **#3143 自身** | 终端审批流交互体验破损，决策追溯困难 |
| **🟡 High** | [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) | Agent 无法自检/调整 engagement policy、非法正则未拦截、上下文累积触发误判 | **Open** | **#3137 自身** | 多 Agent 编排策略失效，可能导致无限循环或权限越界 |
| **🟢 Medium** | [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | 未知斜杠命令被误判为 `passthrough` 导致 SDK 静默丢包 | **Open (陈旧)** | **#2346 自身** | 自定义命令兼容性，影响扩展性 |
| **🟢 Medium** | [#2685](https://github.com/nanocoai/nanoclaw/pull/2685) | Signal 文档滞后：群组输入指示器、出站表情、引用回复修复未同步文档 | **Open (陈旧)** | **#2685 自身** | 开发者对接文档不准，增加集成成本 |

> **稳定性结论**：当前有 **3 个高严重级 Bug 处于修复评审中**（#3142、#3143、#3137），均为核心路径阻塞性问题；2 个中等级陈旧 PR 超 2 月未合并，技术债累积明显。

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR | 纳入下一版本概率 | 备注 |
|------|----------|---------|------------------|------|
| **外部贡献** | 新增 **Dial 通道**（即时通讯）集成：通道选择器、向导、技能体系全链路支持 | [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | **🟢 高** | 已完成代码+技能文档，遵循贡献指南，仅待核心团队评审合并 |
| **外部贡献** | 新增 **ncc 运维/健康检查 CLI 技能**（Utility Skill），无源码变更 | [#2971](https://github.com/nanocoai/nanoclaw/pull/2971) | **🟢 高** | 纯技能包，风险极低，符合技能体系扩展方向 |
| **核心团队** | Agent 自助式 engagement policy 配线控制、上下文累积解耦 | [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) | **🟢 极高** | 核心团队自提，属架构级修复，必入下一版本 |
| **核心团队** | 审批卡片内容持久化、终端态保留 | [#3143](https://github.com/nanocoai/nanoclaw/pull/3143) | **🟢 极高** | 核心团队自提，用户体验关键修复 |
| **文档同步** | Signal 群组输入指示、出站表情、引用回复文档化 | [#2685](https://github.com/nanocoai/nanoclaw/pull/2685) | **🟡 中** | 文档类 PR，优先级常低于代码修复，可能滞后合并 |

> **路线图推断**：下一版本（预计 v0.x+1）将聚焦 **“Agent 编排稳定性（#3137、#3143）+ 通道生态扩展（#3050、#2971）+ Signal 数据面修复（#3142）”** 三大主题。文档债（#2685、#2346）大概率随后续维护版本逐步清理。

---

## 7. 用户反馈摘要
> **数据限制**：过去 24 小时 **无新 Issue 创建/评论**，无法直接提炼终端用户痛点。以下为从陈旧 PR 评论历史（非今日增量）推断的长期反馈模式：

| 痛点类别 | 典型场景 | 涉及 PR | 满意度趋势 |
|----------|----------|---------|------------|
| **Signal 文件交互失效** | 用户发送 PDF/文档给 Bot，Agent 读取报错“路径不存在” | #3142 | ⬇️ **强烈不满**（阻塞性） |
| **审批流交互破损** | 终端审批后卡片内容消失，无法追溯决策人/理由 | #3143 | ⬇️ **不满**（核心流程） |
| **自定义命令兼容性** | 引入自定义斜杠命令被 SDK 静默吞包，调试困难 | #2346 | 🟡 **中性偏负**（开发者体验） |
| **文档滞后** | Signal 新功能（群组输入指示、表情回复）文档缺失，集成试错成本高 | #2685 | 🟡 **中性**（文档用户） |

---

## 8. 待处理积压：长期未响应的重要 PR / Issue

| 对象 | 类型 | 创建时间 | 停滞天数 | 关键阻碍 | 建议动作 |
|------|------|----------|----------|----------|----------|
| **[#2346](https://github.com/nanocoai/nanoclaw/pull/2346)** | Fix (formatter) | 2026-05-08 | **81 天** | 未知命令分类修复，影响 SDK 兼容层 | 🔴 **P0：指派 Core Reviewer 48h 内决策** |
| **[#2685](https://github.com/nanocoai/nanoclaw/pull/2685)** | Docs (signal) | 2026-06-04 | **54 天** | Signal 文档同步，阻塞外部集成开发者 | 🟠 **P1：合并文档改动，标记需同步官网** |
| **[#2598](https://github.com/nanocoai/nanoclaw/pull/2598)** | Fix (config) | 2026-05-23 | **66 天** | 已关闭未合并，配置分层功能缺口 | 🟡 **P2：确认是否被 #3137 替代，补齐 CHANGELOG** |
| **[#2971](https://github.com/nanocoai/nanoclaw/pull/2971)** | Skill (utility) | 2026-07-07 | **21 天** | ncc CLI 技能评审中，无代码风险 | 🟢 **P3：加速走完 CI/Review 流程** |

> **维护者提醒**：
> 1. **评审带宽不足**是主因——4 个陈旧 PR 合计滞留 **222 天·PR**，建议设立 “每周二/四 固定 Review 窗口” 或引入 **自动化合规检查+小组轮值 Reviewer** 机制。
> 2. **#2346 与 #2685** 已超 7 周，属于“低风险高价值”长尾，合并后可立即改善开发者体验与文档准确性，建议本周内清理。

---

## 📊 附：关键指标仪表盘 (2026-07-28)

| 指标 | 数值 | 环比趋势 | 备注 |
|------|------|----------|------|
| 新增 Issues | 0 | ➖ | 社区提问/反馈沉寂 |
| 活跃 PR 总数 | 9 | 🔼 +9 | 以核心团队与高频贡献者为主 |
| 合并入主干 PR | 0 | 🔴 | **吞吐率为 0**，需关注评审瓶颈 |
| 高严重级 Bug 在修 | 3 | 🔼 +3 | 均为核心路径，修复后将显著提升稳定性 |
| 陈旧 PR (>30d) | 4 | ➖ | 技术债利息累积中 |
| 新增技能/通道 | 2 (Dial, ncc) | 🔼 | 生态扩展动能良好 |

---

**下一期报告将于 2026-07-29 生成，重点跟踪 #3137、#3143、#3142 合并进度及新版本切线动向。**

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

---

# NullClaw 项目动态日报 | 2026-07-28

> **数据来源**: GitHub API / 仓库 `nullclaw/nullclaw`  
> **统计周期**: 2026-07-27 00:00 – 2026-07-28 00:00 (UTC)  
> **报告生成**: 2026-07-28

---

## 1. 今日速览

- **整体活跃度：极低** —— 过去 24 小时内无人工 Issue 活动，仅有 1 条 Dependabot 自动化依赖更新 PR（`alpine 3.23 → 3.24`），且该 PR 已挂起 43 天未合并。
- **代码库状态：维护模式** —— 无新功能合并、无 Bug 修复、无版本发布，项目处于“依赖更新堆积、核心开发停滞”状态。
- **技术债信号：** Docker 基础镜像更新滞后近 1.5 个月，若不及时合并可能累积 CVE 风险。
- **社区互动：静默** —— 无讨论、无评论、无用户反馈，Issue/PR 列表均为空。
- **建议：** 维护团队应优先审核并合并 #956，随后评估是否恢复常规迭代节奏或正式宣布进入低维护期。

---

## 2. 版本发布

> **本周期无新版本发布。**  
> 最近一次 Release 记录早于统计窗口，建议关注后续是否规划 vNext 里程碑。

---

## 3. 项目进展

| PR | 状态 | 标题 | 影响范围 | 备注 |
|----|------|------|----------|------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | **OPEN** (Dependabot) | `ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group` | Docker 基础镜像 (CI/部署层) | 自动化依赖升级，创建于 2026-06-15，最近更新 2026-07-27。**尚未通过 CI / 无人工审核**，阻塞合并。 |

- **合并/关闭 PR 数：0**  
- **功能推进度：0%** —— 无业务代码变更进入主分支。

---

## 4. 社区热点

> **本周期无人工 Issue/PR 产生评论或 Reactions。**  
> 仅有的 PR #956 为机器人生成，`👍: 0`，`评论: 0`。社区处于完全静默状态。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 标题 | 状态 | Fix PR |
|--------|----------|------|------|--------|
| — | — | **无新报告** | — | — |

- 历史未关闭 Bug 未在本周期更新，建议维护者执行 `stale` 扫描确认是否已废弃。

---

## 6. 功能请求与路线图信号

> **本周期无新 Feature Request**。  
> 结合长期积压的 Dependabot PR（#956 及更早的依赖更新），推测下一版本（若发布）将以 **依赖安全修复、基础设施升级** 为主，不太可能包含新业务功能。

---

## 7. 用户反馈摘要

> **无用户评论、Issue 描述或 Discussion 数据可供分析。**  
> 若项目进入维护期，建议在 README 或 GitHub Description 明确标注支持状态，避免用户误判项目活跃度。

---

## 8. 待处理积压 ⚠️

| 编号 | 类型 | 标题 | 创建时间 | 停滞天数 | 建议动作 |
|------|------|------|----------|----------|----------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | PR (Dependabot) | bump alpine 3.23 → 3.24 (docker-images) | 2026-06-15 | **43 天** | **立即审核 CI 结果 → 合并或关闭**；若 CI 失败需修复 Dockerfile 兼容性。 |
| *(历史积压)* | PR/Issue | 更早的 Dependabot 依赖更新 (如 node, golang, github-actions 等) | < 2026-06 | > 60 天 | 批量评估：若项目仍维护，建议启用 **Dependabot auto-merge (minor/patch)** 或定期人工清理；若已停止维护，建议归档仓库或标记 `unmaintained`。 |

---

## 📌 维护者行动清单 (Action Items)

1. **今日内** 检查 #956 CI 状态 → 通过即合并，失败即修复 Dockerfile。  
2. **本周内** 清理所有停滞 > 30 天的 Dependabot PR，或在仓库设置中开启 `Allow auto-merge` + `Require status checks`。  
3. **本月内** 确认项目路线图：  
   - 若继续迭代 → 发布 `vNext` 计划、招募贡献者、恢复 Issue 分流。  
   - 若进入维护/归档 → 更新 README、GitHub Description、添加 `unmaintained` 标签、关闭 Issue/PR 权限。  

---

> **下一份日报将于 2026-07-29 自动生成。**  
> 如需自定义关注指标（如特定标签、代码扫描告警、贡献者活跃度），请在 Issue 中提出。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-07-28

---

## 1. 今日速览

**整体状态：高强度交付期，v1.0.0 正式版发布次日，核心团队集中修复发布阻断级问题与架构债务清理。**  
- **活跃度评分：⭐⭐⭐⭐⭐ (极高)** — 过去 24h 合计 89 条 Issue/PR 更新，其中 19 个 PR 已合并/关闭，显示发布后快速迭代节奏。  
- **发布里程碑：** `ironclaw-v1.0.0` 于 2026-07-27 发布，标志着 “Reborn” 重架构版本进入生产可用阶段，旧单体二进制更名为 `ironclaw-legacy`。  
- **核心焦点：** 错误可恢复性契约落地 (#6284)、测试平台隔离性 (#6524)、WebChat SSE 429 限流 (#6581)、Extension OAuth 登录失效 (#6741)、文档站内部文档泄露修复 (#6692)。  
- **技术债务清理：** 5 个失败类型枚举合并为统一 `FailureKind` (#6684)、进程生命周期状态压缩入行级日志 (#6696)、组合装配器重构 (#6691)、沙箱 TLS 终止 seam 接入 (#6740)。  
- **社区信号：** 新增 3 个 UX 增强 Issue (#6741-6743) 反映首批用户上手痛点；多个 Epic 级 Issue 并行推进，显示 v1.1 规划已展开。

---

## 2. 版本发布

### 🎉 `ironclaw-v1.0.0` — 2026-07-27 发布
| 维度 | 详情 |
|------|------|
| **性质** | 首个稳定版，非 0.29.x 增量，而是 **地面重写** |
| **核心变更** | Agent Runtime、Storage、Extension Host、Web UI 全部重构 |
| **二进制变更** | `ironclaw` = 新架构 CLI；旧单体编译为 `ironclaw-legacy` |
| **破坏性变更** | 架构层面全量不兼容，需全新部署/迁移（迁移路径见 #6725 追踪） |
| **迁移注意** | - 旧配置/数据需通过迁移工具转换<br>- Extension Manifest 需升级至 V3<br>- 文档站已按新二进制重组 (#6692) |
| **链接** | [Release Notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.0.0) |

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 标题 | 规模/风险 | 核心推进 | 状态 |
|----|------|-----------|----------|------|
| [#6684](https://github.com/nearai/ironclaw/pull/6684) | **refactor: 统一失败词汇 — 5 个枚举合并为 `FailureKind`** | XL / Low | 消除 6 个错误分类/重试 Bug，配合红绿测试回归保护 | ✅ **Closed** |
| [#6692](https://github.com/nearai/ironclaw/pull/6692) | **docs: 重组文档站，移除内部工程文档公开访问** | XL / Low | 修复 33 个内部路径泄露（含 contracts/、secrets/ 等） | ✅ **Closed** |
| [#6723](https://github.com/nearai/ironclaw/pull/6723) | **sandbox: 引入 CA + 凭证防火墙原语** | XL / Low | 为沙箱 TLS 终止 (#6740) 与持久化沙箱奠基 | ✅ **Closed** |
| [#6687](https://github.com/nearai/ironclaw/pull/6687) | **deps: everything-else 组 33 依赖升级** | XL / Low | 含 async-trait、thiserror、uuid 等核心库 | ✅ **Closed** |
| [#3847](https://github.com/nearai/ironclaw/pull/3847) | **feat: Filesystem-backed Reborn Skill Bundle Source** | XL / Low | 技能包文件系统源，支持系统/用户/租户多根信任策略 | ✅ **Closed** (长期 PR 终入库) |
| [#6575](https://github.com/nearai/ironclaw/pull/6575) | **bug: `ironclaw onboard` 后 systemd 服务报错** | — | Ubuntu 本地部署阻断修复 | ✅ **Closed** |
| [#6060](https://github.com/nearai/ironclaw/pull/6060) | **bug: Routine 投递目标全局泄露** | — | 修复自动化投递目标跨 Routine 污染 | ✅ **Closed** |
| [#4548](https://github.com/nearai/ironclaw/pull/4548) | **bug: DeepSeek 请求重复 `model` 字段导致 400** | — | 修复工具调用序列化去重 | ✅ **Closed** |

**整体推进度：** 核心架构债务（错误模型、进程日志、组合装配、沙箱安全、文档安全）在发布后 24h 内集中落地，为 v1.1 稳定性奠基。

---

## 4. 社区热点（评论/互动最多的 Issue/PR）

| 排名 | Issue/PR | 评论 | 核心诉求 | 分析 |
|------|----------|------|----------|------|
| 1 | [#6284](https://github.com/nearai/ironclaw/issues/6284) **[EPIC] error-recoverability endgame** | 14 | **模型必须从 100% 错误中恢复**：运行存活、模型可见、携带原因与修复建议、给模型行动机会、永不上报非成功为成功 | 核心契约级 Epic，贯穿 v1.0 全生命周期；#6684、#6697、#6738 均为其子项，优先级最高 |
| 2 | [#6581](https://github.com/nearai/ironclaw/issues/6581) **[v1-launch-checklist] WebChat SSE 429 Too Many Requests** | 3 | 多线程下 SSE 频繁 429 导致“Disconnected/Reconnecting”卡死，刷新也无效 | 发布阻断级，影响托管实例用户体验，需限流策略或连接复用优化 |
| 3 | [#6524](https://github.com/nearai/ironclaw/issues/6524) **[EPIC] Hermetic capability & journey testing platform** | 3 | 能否机械回答“每个能力/关键旅程是否有确定性覆盖” | 测试基建 Epic，#6728、#6738 为其工作流 3 交付物，目标消除测试间状态泄漏 |
| 4 | [#6696](https://github.com/nearai/ironclaw/pull/6696) **Collapse lifecycle state into process journal** | — (活跃讨论) | 进程表成权威，Turn 状态投影化，事务游标、观察者游标、租约恢复策略 | 核心存储层重构，配合 #6284 失败恢复契约，审阅中 |
| 5 | [#6741](https://github.com/nearai/ironclaw/issues/6741) **[bug] Extension OAuth 登录 Gmail/Calendar 失败** | 0 (新建) | 完成 OAuth 流程后报错而非关联工具 | 首日用户反馈，阻断 Extension 核心价值链，需尽快分流至对应 Provider 修复 |

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 影响范围 | 是否有 Fix PR |
|--------|-------|------|----------|---------------|
| **P0 发布阻断** | [#6581](https://github.com/nearai/ironclaw/issues/6581) WebChat SSE 429 | 多线程正常使用即触发，Header 卡 Disconnected，刷新不恢复 | 所有托管实例 WebUI 用户 | ❌ 无 |
| **P0 核心功能** | [#6741](https://github.com/nearai/ironclaw/issues/6741) Extension OAuth 失败 | Gmail/Calendar 完成授权后报错，工具无法关联 | 所有尝试接入 Google 服务的用户 | ❌ 无 |
| **P1 严重回归** | [#6720](https://github.com/nearai/ironclaw/issues/6720) 任务无限运行 + 停止按钮失效 | 冒烟测试 15 min 未完成，UI 报 "Couldn't stop this run" | Railway QA 实例，可能波及生产 | ❌ 无 |
| **P1 数据一致性** | [#6719](https://github.com/nearai/ironclaw/issues/6719) 

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-07-28

> **数据来源**：GitHub API（netease-youdao/LobsterAI）  
> **统计窗口**：2026-07-27 00:00 – 2026-07-28 23:59 (UTC+8)  
> **报告生成**：2026-07-29 06:00 (UTC+8)

---

## 1. 今日速览

- **整体活跃度**：**高**。过去 24 小时内累计 **8 个 Issue 活跃/新开**、**9 个 PR 更新**（其中 6 个已合并/关闭，3 个待审），呈现“快速迭代 + 社区反馈并行”的健康态势。
- **版本发布**：**无新版本**，但已有多个修复型 PR 合入主干（`#2386`、`#2388`、`#2389`、`#2394` 等），预示下一个补丁版本（Patch）积累了足够变更量。
- **核心风险点**：Windows 安装器回滚失败（#2395）、`exec` 工具中文路径编码/Shell 硬编码（#2390）、加速器导致二进制数据静默损坏（#2393）三个 **Severity: Critical** 问题同天浮现，需优先安排热修复。
- **技术债信号**：Dependabot 提交的 Electron 升级 PR（#1277）停滞 100+ 天，版本落后 3 个大版本（40.2.1 → 43.2.0），安全补丁积压风险上升。
- **社区参与度**：新开 Issue 多为真实用户场景（定时任务、技能重命名、长任务超时），用户粘性与反馈质量均处于良性区间。

---

## 2. 版本发布

> **今日无新 Release**。  
> 最近一次发布为 `2026.6.1`（OpenClaw 内核），已合并 PR 将汇聚至下一迭代（预计 `2026.7.x` 或 `2026.8.0`）。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 类型 | 核心变更 | 对项目推进度影响 |
|----|------|----------|------------------|
| [#2394](https://github.com/netease-youdao/LobsterAI/pull/2394) | **Fix (Windows Installer)** | 修复 Windows 手动安装时“用户技能备份失败导致更新中止、旧版本未被替换”的阻塞性问题 | 🟢 **高** — 直接解除 #2395 同类用户的安装受阻 |
| [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) | **Security (Skills/Email)** | 修复邮件技能附件路径遍历漏洞，新增跨平台安全测试，技能版本号递增 | 🟢 **高** — 封堵 RCE 攻击面，合规必选项 |
| [#2388](https://github.com/netease-youdao/LobsterAI/pull/2388) | **Feat (Artifacts/Renderer)** | Artifact 预览工具栏新增分享/部署入口，按内容类型区分 HTML 分享与本地服务部署，补充埋点与设计文档 | 🟡 **中** — 完善 Artifact 生态闭环，提升二次传播转化 |
| [#2387](https://github.com/netease-youdao/LobsterAI/pull/2387) | **Feat (Sites/Renderer)** | “2026.7.20 sites”批量更新，细节待 Release Notes 补充 | 🟡 **中** — 站点适配持续跟进 |
| [#2386](https://github.com/netease-youdao/LobsterAI/pull/2386) | **Fix (Agent Engine)** | 终止“无进度工具循环”防止 Token 预算耗尽，修复长任务异常停机 | 🟢 **高** — 直接缓解 #2062 “任务超过最大时长”痛点 |
| [#1323](https://github.com/netease-youdao/LobsterAI/pull/1323) | **Fix (Cowork)** | 修正 `input-too-long` 错误分类过宽导致的误报 UI | 🟢 **中** — 提升错误提示准确性 |

**合计**：6 个 PR 合入，**4 个高优先级**（安装器、安全、Agent 稳定性、错误分类），主干代码库稳定性显著提升。

---

## 4. 社区热点

| 排名 | Item | 互动指标 | 核心诉求 |
|------|------|----------|----------|
| 1 | [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) **无法安装** | 👍 0 · 💬 1 (作者自述) | **阻塞性**：Windows 更新器因技能备份失败回滚，用户无法完成版本升级 |
| 2 | [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) **加速器把 `\f` 替换为 `\x0C` 导致文件损坏** | 👍 0 · 💬 0 | **数据完整性**：`write` 工具落盘时静默破坏包含 `\firecrawl`、`\foo` 等转义序列的二进制/文本文件 |
| 3 | [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) **exec 工具硬编码 PowerShell 5.1 + 中文路径编码** | 👍 0 · 💬 0 | **跨平台兼容**：强制使用 legacy `powershell.exe` 导致中文用户名/路径乱码，呼吁改用 `pwsh.exe` (PS 7+) |
| 4 | [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) **Settings 关闭无确认，配置静默丢失** | 👍 0 · 💬 1 | **UX 基础体验**：表单脏检测缺失，用户误触即丢失 API Key 等敏感配置 |
| 5 | [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) **Fix Settings 脏检测** | 👍 0 · 💬 0 | 对应 #1237 的修复 PR，**已停滞 118 天**未合入，维护者需决策审核 |

> **洞察**：Top 3 热点均为 **Windows 平台原生体验缺陷**（安装器、文件系统、Shell），反映用户群体以 Windows 为主，且对“开箱即用”容忍度低。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 影响面 | 是否有 Fix PR |
|--------|-------|------|--------|---------------|
| 🔴 **Critical** | [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) | 更新器报错 `user skills could not be backedup`，旧版本残留，无法完成升级 | 所有 Windows 自动/手动更新用户 | ✅ **#2394 已合并** (需验证回归) |
| 🔴 **Critical** | [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) | 加速器将字面量 `\f` (5C 66) 重写为 Form Feed `\x0C`，导致 PS 脚本、Windows 路径、JSON 转义文件静默损坏 | 任何使用 `write` 工具落盘包含反斜杠转义的用户 | ❌ 无 |
| 🔴 **Critical** | [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) | `exec` 硬编码 `powershell.exe` (5.1) + 中文用户名编码错误，命令执行失败 | Windows 中文用户名用户（占比极高） | ❌ 无 |
| 🟠 **High** | [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) | 长任务 (>24h) 报错 `Task timed out`，不清楚任务是否仍在后台运行 | 持续运行型 Agent 用户 | ✅ **#2386 已合并** (终止无进度循环) |
| 🟡 **Medium** | [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) | 单模型受限导致全局所有对话/模型切换失效，重启后无法启动需回滚配置 | 多模型并行用户 | ❌ 无 (架构层面隔离缺失) |
| 🟡 **Medium** | [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) | Settings 表单无脏检测，误关即丢失 API Key | 所有修改配置的用户 | ✅ **#1241 待合并** (停滞久) |

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 社区热度 | 实现就绪度 | 纳入下版本概率 |
|------|----------|----------|------------|----------------|
| **定时任务支持指定 Agent/Skill** | [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) | 新开 0 💬 | 无 PR | 🟡 中 (需调度器扩展) |
| **技能重命名** | [#2391](https://github.com/netease-youdao/LobsterAI/issues/2391) | 新开 0 💬 | 无 PR | 🟢 高 (纯前端+配置持久化，低风险) |
| **Settings 脏检测防误丢** | [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) / [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | 1 💬 / 118 天停滞 | **PR 完备** | 🟢 **极高** (仅待 Review/Merge) |
| **任务完成闪烁任务栏/Dock 提醒** | [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | 118 天停滞 | **PR 完备** | 🟡 中 (跨平台原生 API 需回归测试) |
| **Electron 升级至 43.x** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Dependabot 自动 | 版本落后 3 大版本 | 🔴 **低** (未见人工介入，破坏性变更风险大) |

> **路线图推测**：下一补丁版本 (`2026.7.x`) 极大概率包含 **#2394、#2386、#2389、#1241**；`2026.8.0` 可能纳入 **技能重命名、定时任务 Agent 选择、任务栏提醒**；Electron 升级需单独排期。

---

## 7. 用户反馈摘要（从 Issue 评论/描述提炼）

| 场景 | 痛点原话 | 情感倾向 | 隐性需求 |
|------|----------|----------|----------|
| **Windows 更新** | “弹出错误……用户技能无法备份……之前的安装未被替换” (#2395) | 😡 **愤怒/焦虑** | 一键修复、自动回滚验证、离线安装包兜底 |
| **文件落盘** | “想用 write 工具保存 MEMORY.md，文件落盘后发现 bytes 异常” (#2393) | 😰 **恐惧/不信任** | **绝对数据保真**、关闭加速器开关、二进制安全模式 |
| **中文路径** | “用户名含中文……硬编码 powershell.exe……导致编码问题” (#2390) | 😤 **挫败** | 原生支持 `pwsh.exe`、UTF-8 管道、路径自动引用 |
| **长任务** | “也不知道任务是停止了还是后台还在跑” (#2062) | 😕 **迷茫** | 可观测性：心跳上报、进度持久化、断点续跑 |
| **模型隔离** | “受限 api 还没有解封。所以 lobsterai 整体陷入瘫痪” (#1240) | 😱 **恐慌** | **故障域隔离**、熔断降级、多模型热切换不重启 |
| **配置丢失** | “修改了 API Key……直接点击 X 按钮……修改已丢失” (#1237) | 😤 **恼火** | 表单脏检测、离线草稿自动保存、撤销/恢复历史 |

> **高频关键词**：Windows、中文、编码、安装器、数据完整性、隔离性、可观测性。

---

## 8. 待处理积压（建议维护者本周关注）

| Item | 停滞时长 | 优先级建议 | 行动项 |
|------|----------|------------|--------|
| [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) **Settings 脏检测 PR** | 118 天 | **P0** | 安排 Core Reviewer 立即 Review/Merge，配套 #1237 关闭 |
| [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) **任务栏闪烁 PR** | 118 天 | **P1** | 补充 macOS/Linux 回归测试，合入提升用户留存 |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) **Electron 43 升级** | 117 天 | **P1 (安全)** | 评估 Breaking Changes，制定升级计划或锁定 40.x 安全回港补丁 |
| [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) **模型受限全局瘫痪** | 118 天 | **P0 (架构)** | 设计 Provider 级熔断/隔离机制，避免单点拖垮全局

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-07-28

---

## 1. 今日速览
- **整体状态**：项目处于**活跃开发期**，过去 24 小时无 Issue 更新、无版本发布，但有 **5 个 PR 处于待合并状态**，涵盖向量数据库后端、ACP Agent 协议支持、权限加固、可观测性基建与 PWA 推送优化等核心方向。
- **活跃度评估**：**中高**。虽然无合并动作，但单日堆积 5 个功能型 PR（均由核心维护者 `penso` 或贡献者 `demyanrogozhin` 提交），说明研发管线流动顺畅，正在推进多项架构级增强。
- **风险提示**：`#1170` 涉及特权命令执行的授权修复，属安全加固类变更，建议优先评审合并以规避潜在风险。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 项目进展
> 过去 24 小时**无 PR 合并/关闭**，项目代码库主分支未前推。当前 5 个 OPEN PR 均为增量功能开发，合并后将显著扩展生态兼容性、安全性与工程化能力。

---

## 4. 社区热点
| PR / Issue | 标题 | 作者 | 更新时间 | 核心诉求/讨论焦点 | 链接 |
|------------|------|------|----------|-------------------|------|
| **#1158** | feat(memory): add zvec vector database memory backend | demyanrogozhin | 2026-07-28 | 引入 `zvec` + `redb` 作为嵌入向量存储后端，提供除现有方案外的新选项，默认通过 `zvec` feature gate 控制。 | [#1158](https://github.com/moltis-org/moltis/pull/1158) |
| **#1169** | feat(acp): expose Moltis as an ACP agent over stdio | penso | 2026-07-27 | **里程碑式功能**：将 Moltis 从纯 ACP Client 扩展为 ACP Agent，使其可被 Zed、buzz-acp 等编排器直接调度，打通生态闭环。 | [#1169](https://github.com/moltis-org/moltis/pull/1169) |
| **#1170** | fix(channels): gate /sh and privileged tools behind a per-account operators list | penso | 2026-07-27 | **安全修复**：修复 `/sh` 等特权命令在群聊中任意成员可触发的漏洞，引入账号级 Operator 白名单机制。 | [#1170](https://github.com/moltis-org/moltis/pull/1170) |
| **#1174** | Add instrumentation and feedback collection infrastructure | penso | 2026-07-27 | 建立可插拔的 Agent 运行时插桩体系（`ObservationSink` fan-out）与用户反馈采集管线，为后续评测、在线学习奠基。 | [#1174](https://github.com/moltis-org/moltis/pull/1174) |
| **#1173** | feat(pwa): make push notifications reliable and non-disruptive | penso | 2026-07-27 | 修复 Service Worker 通知静默替换 Bug（缺 `renotify`），并优化会话级标签与去抖动逻辑，提升 PWA 体验。 | [#1173](https://github.com/moltis-org/moltis/pull/1173) |

**热点分析**：
- **生态互操作**（#1169）与 **安全加固**（#1170）是当前社区最关注的两大方向。
- 核心维护者 `penso` 在单日内推进 4 个 PR，显示维护带宽集中，评审吞吐可能成为瓶颈。

---

## 5. Bug 与稳定性
| 严重程度 | 问题描述 | 相关 PR | 状态 |
|----------|----------|---------|------|
| **高** | `/sh` 命令在群聊/公共频道可被任意通过准入门槛的用户执行，导致任意主机命令执行风险 | [#1170](https://github.com/moltis-org/moltis/pull/1170) | **已有 Fix PR，待合并** |
| **中** | PWA 推送通知因缺少 `renotify` 导致同一会话内后续消息静默覆盖前一条，用户无感知 | [#1173](https://github.com/moltis-org/moltis/pull/1173) | **已有 Fix PR，待合并** |
| 低/无 | 过去 24h 无新增 Issue 报告的崩溃、回归或数据丢失问题 | — | — |

---

## 6. 功能请求与路线图信号
结合当前 OPEN PR 判断，**下一版本（或近期里程碑）极大概率纳入**：
1. **ACP Agent 模式** (#1169) —— 战略级功能，解锁 Moltis 在 Zed 等编辑器/编排器中作为后端 Agent 的能力。
2. **Operator 权限模型** (#1170) —— 安全基线，预计作为补丁级版本快速发布。
3. **可观测性基建** (#1174) —— 工程化里程碑，为后续 Agent 评测、RLHF、成本核算提供数据底座。
4. **PWA 通知可靠性** (#1173) —— 用户体验修复，阻塞移动端/桌面端原生感知。
5. **zvec 向量后端** (#1158) —— 实验性后端，默认 feature-gated，风险可控，可能作为可选组件合入。

**路线图信号**：项目正从 “单体聊天机器人” 向 “可编排、可观测、多后端、安全强化的 Agent 平台” 演进。

---

## 7. 用户反馈摘要
> 过去 24 小时**无新 Issue 评论、无用户反馈数据**。现有 PR 均为维护者主动推进，缺乏外部用户直接痛点输入。建议关注后续合并后的用户验收反馈。

---

## 8. 待处理积压
| 条目 | 类型 | 停留天数 | 关注理由 | 链接 |
|------|------|----------|----------|------|
| **#1158** | PR | 11 天 | 实验性向量后端，需确认 `zvec`/`redb` 依赖成熟度与维护成本，避免引入脆弱依赖链。 | [#1158](https://github.com/moltis-org/moltis/pull/1158) |
| **#1169** | PR | 2 天 | 核心架构变更（新增 `crates/acp`），需完整 E2E 测试覆盖 ACP 协议兼容性。 | [#1169](https://github.com/moltis-org/moltis/pull/1169) |
| **#1170** | PR | 2 天 | **安全修复**，建议优先评审合并并回港到稳定分支。 | [#1170](https://github.com/moltis-org/moltis/pull/1170) |
| **#1174** | PR | 1 天 | 基建代码量大，涉及运行时热路径，需性能基准与采样策略评审。 | [#1174](https://github.com/moltis-org/moltis/pull/1174) |
| **#1173** | PR | 2 天 | PWA 前端关键路径，需真机多平台验证 Service Worker 生命周期。 | [#1173](https://github.com/moltis-org/moltis/pull/1173) |

**维护者行动建议**：
1. **今日优先合并 #1170**（安全），随后 #1173（体验阻塞）。
2. 安排专项评审窗口处理 #1169 与 #1174（架构级变更）。
3. 对 #1158 进行依赖风险评估（`zvec`/`redb` 社区活跃度、MSRV 兼容性）。

---

*报告生成时间：2026-07-28 00:00 UTC | 数据来源：GitHub REST API / GraphQL*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-07-28

> **数据统计周期**：2026-07-27 至 2026-07-28（基于 GitHub 更新时间）  
> **报告生成时间**：2026-07-28

---

## 1. 今日速览

- **活跃度评级：🔥 高** — 过去 24 小时合计 **99 条** Issue/PR 更新（Issue 50 条、PR 49 条），呈现“批量清理历史积压 + 推进大型特性并行”的双轨节奏。
- **版本状态**：无新版本发布，当前主线集中在 **v2.0.x** 稳定化与 **下一代核心能力（Computer Use、统一浏览器、第三方 Agent 集成、记忆重排、视觉压缩）** 的合入冲刺。
- **社区信号**：飞书/钉钉等企业级渠道稳定性、Windows 原生体验、v2.0 升级数据迁移是用户最痛点；贡献者侧正引入覆盖率门槛、原生沙箱文档修正等工程化建设。
- **风险提示**：多个高热度 Bug（飞书静默、控制台卡顿、Windows 索引丢失、v2.0 会话映射丢失）虽标记 Closed，但缺乏关联 PR 链接，需确认是否真修复或仅标记待后续回归测试。

---

## 2. 版本发布

> 今日无新 Release。最近标签停留在 `v2.0.1` / `v2.0.0.post3`。建议关注以下里程碑合入后的首个 Patch 版本（预计包含 Feishu 修复、Windows PATH 修正、History Migration 修复）。

---

## 3. 项目进展（今日合并/关闭的重要 PR 与推进中的大型特性）

| PR | 标题 | 状态 | 核心推进内容 | 影响面 |
|----|------|------|--------------|--------|
| [#6462](https://github.com/agentscope-ai/QwenPaw/pull/6462) | docs(sandbox): clarify native Windows sandbox support | **Merged** | 修正文档：Windows 已支持 AppContainer / Restricted Token 原生沙箱，WSL2 不再是前提 | 📚 文档/Windows 用户认知 |
| [#6489](https://github.com/agentscope-ai/QwenPaw/pull/6489) | test(drivers): add Driver unit tests + enable fail_under=50 coverage gate | **Open** | Driver 子系统从 0% 覆盖率引入单测并强制 CI 门槛 ≥50% | 🧪 工程质量/回归防护 |
| [#6508](https://github.com/agentscope-ai/QwenPaw/pull/6508) | fix(agents): inherit session approval_level in spawn_subagent | **Open** | 修复子会话丢失父会话 `approval_level`（如 Console 设置的 OFF），导致权限回退 | 🔐 安全/审批流一致性 |
| [#6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) | fix(scroll): preserve session IDs during history migration | **Open** | 历史迁移保留规范 `session_id`，解决 v2.0 升级后会话映射丢失（关联 #5964） | 💾 数据迁移/用户资产 |
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | feat: add reranker support for ReMe memory search (backend) | **Under Review** | 引入外部 Reranker API，候选集过采样→重排→截断，显著提升记忆检索精度 | 🧠 记忆/长上下文 |
| [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) | feat(computer-use): native desktop GUI automation for Windows/macOS | **Open** | **里程碑级**：基于无障碍树 + Tauri 控制模式的原生桌面自动化（Computer Use） | 🖥️ 交互范式扩展 |
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | feat(browser): unified browser — one SDK, any backend | **Open** | 统一浏览器抽象层，解耦后端（Playwright/CDP/Extension），为 Chrome Extension 插件铺路 | 🌐 浏览器自动化架构 |
| [#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) | feat(third-party agents): integrate Codex, Qoder, Skills, MCP | **Under Review** | 可扩展第三方 Agent 架构，首批接入 Codex/Qoder，打通 MCP 生态 | 🤝 生态互操作 |
| [#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456) | feat(context): Visual Compact | **Open** | 长历史视觉压缩：选择性压缩工具结果/历史，支持盈利门控与精确恢复 | 📦 上下文工程/Token 成本 |
| [#6269](https://github.com/agentscope-ai/QwenPaw/pull/6269) | feat(checkpoints): add workspace checkpoint management | **Open** | 工作区级影子 Git 检查点，不侵入用户 `.git`，提供可恢复对话历史 | ⏪ 会话时光机/安全性 |
| [#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387) | feat(channels): support on-demand installation and version repair | **Open** | 渠道 SDK 按需安装 + 启动时自动修复不兼容版本，降低部署摩擦 | 📦 插件化/运维体验 |

> **整体判断**：核心架构重构（统一浏览器、Computer Use、第三方 Agent、记忆重排、视觉压缩）均已进入 **Under Review / Ready-for-human-review** 阶段，预计将在下一个 Minor 版本（v2.1 或 v2.0.2）集中落地。

---

## 4. 社区热点（高评论/高关注 Issue 与 PR）

| 类型 | 编号 | 标题 | 评论/互动 | 核心诉求 |
|------|------|------|-----------|----------|
| **Issue** | [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | **飞书信息不回复**（首条回复后静默） | 14 💬 | **企业级渠道可用性**；Docker/Platform 均复现，阻塞生产环境接入 |
| **Issue** | [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) | **Console 流式输出浏览器卡顿**（长回答越明显） | 6 💬 | **前端渲染性能**；对标 DeepSeek 网页版，要求虚拟列表/分块渲染 |
| **Issue** | [#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964) | **v2.0.0 升级后聊天列表与历史映射丢失**（500 报错） | 5 💬 | **数据迁移可靠性**；用户核心资产受损，亟需迁移工具或回滚方案 |
| **Issue** | [#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259) | **Windows 向量索引无法持久化**（关闭重建选项后失效） | 5 💬 | **Windows 原生体验**；记忆功能在 Windows 上不可用 |
| **Issue** | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | **Edge + Wayland 单标签高 CPU**（大结果集渲染/WebSocket 推送） | 3 💬 | **Linux Way

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-07-28

---

## 1. 今日速览
**整体状态：高强度安全加固与核心运行时修复并行，CI 稳定性治理持续推进。**  
过去 24 小时内，项目呈现“高危安全漏洞修复 + 核心运行时逻辑修正 + 跨平台兼容性治理”三大主线并行：  
- **安全域** 集中爆发 6 个 P1 级漏洞（API Key 泄露、沙箱绕过、认证缺失、Token 泄露、紧急停止失效、配置注入），均已有 Fix PR 进入审查流程；  
- **运行时核心** 针对“空响应误判成功”“Delegate 工具链越权”“SOP 无取消路径”等阻断性缺陷推进修复，PR #9424/#9447 形成依赖链直击 Anthropic/Reliable 供应商路径；  
- **CI/Windows 兼容** 连续修复 `zeroclaw-config` 编译失败（#9422）、Channels 定时器抖动（#9429）、Plugins WASM 测试缺失（#9462）等长尾问题。  
**活跃度评估：** ⭐⭐⭐⭐⭐（Issue/PR 双高频，维护者响应及时，关键路径均有 in-progress PR，项目处于“攻坚克难”高健康度阶段）。

---

## 2. 版本发布
**无新版本发布。** 当前主分支版本仍为 `0.8.3`，里程碑 `v0.9.0`（Tracker #7432）正在积累 Breaking Change 与安全加固项。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 标题 | 类型 | 影响范围 | 进展说明 |
|----|------|------|----------|----------|
| [#9388](https://github.com/zeroclaw-labs/zeroclaw/pull/9388) | docs(governance): retire CONTRIBUTORS.md, ground maintainer roles in FND-003 | 文档/治理 | 贡献者记录、维护者职责 | ✅ **已合并** — 治理文档落地，移除不存在的 `CONTRIBUTORS.md`，维护者角色锚定 FND-003 §5.3。 |
| [#9251](https://github.com/zeroclaw-labs/zeroclaw/pull/9251) | feat(infra): PostgreSQL as the first supported session backend | 增强/基建 | Session 存储、Gateway、Daemon | ✅ **已合并** — 确立 PostgreSQL 为唯一受支持会话后端，减少多后端矩阵维护成本，为 v0.9.0 网关重构铺路。 |
| [#9429](https://github.com/zeroclaw-labs/zeroclaw/issues/9429) | Bug: zeroclaw-channels tests flake on slow runners (fixed wall-clock timeouts) | Bug/CI | Channels 测试、CI 稳定性 | ✅ **已关闭** — 改为有界等待/条件轮询，消除 macOS/慢速 Runner 上的抖动。 |
| [#9238](https://github.com/zeroclaw-labs/zeroclaw/issues/9238) | Bug: config_save_isolation skips all tests/ files on Windows | Bug/CI/Windows | 配置隔离测试、Windows 兼容 | ✅ **已关闭** — 修复路径规范化与 glob 匹配，Windows 上集成测试隔离生效。 |
| [#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808) | Bug: CLI secret prompts give no feedback after paste | Bug/UX/Config | 首次配置、Secret 输入 | ✅ **已关闭** — 改为光标不回显但显示 `*` 掩码，提升粘贴确认体验。 |

> **整体推进度：** 核心基建项落地 2 个，CI 抖动/跨平台顽疾清理 3 个，治理文档 1 个。v0.9.0 阻塞项（PostgreSQL 单后端、治理落地）已清除，剩余风险集中在安全漏洞修复与运行时语义修正。

---

## 4. 社区热点（高讨论度 Issues/PRs）

| 入口 | 标签/评论 | 核心诉求 | 分析 |
|------|-----------|----------|------|
| [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) `bug, ci, runtime, tests, priority:p1, risk:high` **5 评论** | `cargo test -p zeroclaw-runtime --lib` 19/20 失败，全局互斥锁中毒导致连锁崩溃 | **CI 稳定性最高优先级** — 主分支频繁红构建阻断合并队列，需从测试隔离、锁粒度、冥等性三层面系统性治理。 |
| [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) `bug, runtime, security, tool, landlock, priority:p1, risk:high` **4 评论** | Landlock 沙箱下 `sh` 无法访问 `/dev/null`，Fedora 全复现 | **生产可用性阻断** — 联邦安全策略强制开启 Landlock 的环境直接不可用，需在 sandbox profile 中显式放行 `/dev/null` 等必要设备节点。 |
| [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) `bug, provider:gemini, security:leak-detector, priority:p1, risk:high` **4 评论** | Gemini API Key 以 `?key=` 明文出现在 URL，错误上报未脱敏直达用户聊天 | **凭据泄露零容忍** — `sanitize_api_error` 需补全 query-param 规则，且建议统一在 HTTP 客户端层做敏感参数剥离。 |
| [#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) `bug, channel:bluesky, channel:reddit, security, priority:p1, risk:high` **3 评论** | Bluesky/Reddit 入站缺发送者授权，无中心网关覆盖 | **多通道安全基线缺失** — 需在 `orchestrator` 接入层统一实现 `verify_sender` 接口，纳入现有 pairing/allowlist 体系。 |
| [#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417) `bug, channel:whatsapp, security, priority:p1, risk:high` **2 评论** | WhatsApp Cloud `request_approval` 失败/取消时泄露有效审批 Token | **Token 生命周期管理缺陷** — 需在 `finally` 块强制撤销/失效 pending approval，避免重放攻击。 |

> **热点画像：** 安全类 P1 占比 80%，集中在“凭据脱敏、沙箱策略、通道授权、审批 Token 生命周期”四大攻击面，均已有对应 Fix PR（见第 5 节）。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 标题 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **S0 安全/数据丢失** | [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | Delegate 绕过父 Agent 工具白名单，子 Agent 可调用被禁止工具 | 暂无 PR（需重构 `delegate` 权限继承链） | 🔴 Open, in-progress |
| **S1 工作流阻断** | [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | 不完整终端响应被误报为成功（Anthropic/Reliable/Delegate 路径） | [#9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424), [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | 🟡 PR Review 中（堆叠依赖） |
| **S1 工作流阻断** | [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) | Web Dashboard 运行中 SOP 无操作员取消路径 | 暂无 PR | 🔴 Open, in-progress |
| **S2 退化行为** | [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) | Runtime lib 测试高频抖动，全局锁中毒连锁 | 暂无 PR（需测试架构重构） | 🔴 Open, accepted |
| **S2 退化行为** | [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) | Landlock 导致 shell 无法访问 `/dev/null` (Fedora) | 暂无 PR | 🟡 Open, in-progress |
| **S2 退化行为** | [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) | Gemini API Key 明文泄露至用户聊天 | 暂无 PR（需扩展 `sanitize_api_error`） | 🔴 Open, accepted |
| **S2 退化行为** | [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) | 非英语语言下 Config 元数据未本地化 | 暂无 PR | 🔴 Open, accepted |
| **S2 退化行为** | [#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392) | LINE 群消息跳过允许列表与配对握手 | 暂无 PR | 🔴 Open, accepted |
| **S2 退化行为** | [#9380](https://github.com/zeroclaw-labs/zeroclaw/issues/9380) | Vendored `wit/v0` 漂移仅在注册期失败，无前置校验 | 暂无 PR | 🟡 Open, in-progress |
| **S3 次要** | [#9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462) | `zeroclaw-plugins` WASM 单元测试在 CI 未执行 | [#9466](https://github.com/zeroclaw-labs/zeroclaw/pull/9466) (CI 侧) | 🔴 Open, accepted |

> **修复覆盖率：** 11 个高/关键 Bug 中，已有 PR 介入 4 个（#9421, #9425, #9380, #9462），其余 7 个处于“accepted/in-progress”待实现阶段。建议本周内集中攻克 Delegate 越权（#8279）与 Landlock 沙箱（#8973）两个生产阻断项。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 相关 PR/Tracker | 纳入 v0.9.0 概率 | 备注 |
|------|------|-----------------|------------------|------|
| [#8983](https://github.com/zeroclaw-labs/zeroclaw/issues/8983) | **Proposal: category-scoped `read_memory_from`** — 按记忆分类共享给兄弟 Agent | Tracker #7432 (v0.9.0 auth/security) | 🟢 **高** — 符合多 Agent 隔离架构，已标 `accepted, risk:high` | 
| [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | **Support: Bedrock Nova 2 Lite 禁用 cachePoint** | 暂无 PR | 🟡 **中** — 需 Provider 层配置扩展，属于长尾兼容 | 
| [#9463](https://github.com/zeroclaw-labs/zeroclaw/issues/9463) | **Feature: Wire WASM memory/channel plugins into runtime backend selection** | 暂无 PR | 🟢 **高** — 插件体系完整性缺口，已 `accepted, risk:high` | 
| [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) | **RFC: Anthropic stored-profile OAuth alias contract** | 依赖 [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) | 🟢 **高** — 认证体系重构核心配套，`type:rfc, status:accepted` | 
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | **RFC: AI-assisted PR pre-review & re-review** | 暂无 PR | 🔵 **低/长期** — CI 效能提升，非功能性里程碑 | 

> **路线图推断：** v0.9.0 将锁定 **“认证/授权重构（PostgreSQL 后端 + OAuth Alias + 记忆分类隔离） + 插件体系完整性（WASM memory/channel） + 安全基线（沙箱/通道/Token）”** 三大主题。上述 4 项高概率需求均已进入 `accepted` 且挂载 Tracker，预计下两周内会有配套 PR 进入 `in-progress`。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点场景 | 典型引述/现象 | 频次/广度 | 满意度倾向 |
|----------|---------------|-----------|------------|
| **Windows 原生体验缺失** | “PowerShell 原生支持缺失导致脚本迁移成本高”、“`config init` 生成的模板在 Windows 直接报错” | #9182 (PR), #9422, #9238 等多 Issue | 😞 **负面** — 跨平台一致性仍是最大吐槽点 |
| **安全配置“开箱即不安全”** | “Landlock 默认开启却跑不通 shell”、“Delegate 直接拿走父 Agent 所有工具”、“WhatsApp 审批 Token 泄露” | #8973, #8279, #9417 等 6 个 P1 安全 Issue | 😡 **强

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*