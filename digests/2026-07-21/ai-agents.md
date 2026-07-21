# OpenClaw 生态日报 2026-07-21

> Issues: 354 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-21 02:03 UTC

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

# OpenClaw 项目日报 | 2026-07-21

---

## 1. 今日速览

OpenClaw 今日呈现**高并发维护态势**：过去 24 小时累计 354 条 Issue 更新（新开/活跃 226、关闭 128）与 500 条 PR 更新（待合并 392、已合并/关闭 108），零新版本发布。核心矛盾集中在 **会话上下文管理（context/compaction）**、**多模态工具输出渲染**、**跨后端模型切换一致性** 以及 **安全边界（SSRF、Secrets 泄露）** 四大领域。维护团队正以“小步快跑”节奏清理积压：已合并 PR 多为 XS/S 级修复，涵盖编码安全、协议兼容、日志结构化等基建；大型特性 PR（如会话流式模式、工作台看板集成、聊天分页）仍处“需验证/等待作者”状态。社区高热度 Issue 多带 `clawsweeper:needs-product-decision` 标签，说明产品层面决策滞后于技术债积累。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

| PR | 类型 | 影响面 | 状态 | 关键进展 |
|----|------|--------|------|----------|
| [#110008](https://github.com/openclaw/openclaw/pull/110008) | **Bug Fix (XS)** | QQ Bot 媒体上传 | ✅ **已合并** | 修复非 OK 响应体未取消导致的连接泄漏 |
| [#110002](https://github.com/openclaw/openclaw/pull/110002) | **Bug Fix (S)** | QQ Bot 内存安全 | ✅ **已合并** | 防止超大 `clientSecretFile` 导致启动期内存尖峰 |
| [#108012](https://github.com/openclaw/openclaw/pull/108012) | **Bug Fix (S)** | Agent 工具 stderr UTF-8 安全 | 👀 **待维护者审阅** | 修复 CJK/Emoji 路径在 `find/grep` 截断时产生 U+FFFD 乱码 |
| [#111098](https://github.com/openclaw/openclaw/pull/111098) | **Security Fix (XS)** | 模型定价缓存 DNS SSRF 绕过 | 📣 **需验证** | 用 `isIP` 守卫 loopback 校验，防 `127.evil.com` 绕过 |
| [#111233](https://github.com/openclaw/openclaw/pull/111233) | **Security Fix (XS)** | Codex WebSocket SSRF | 📣 **需验证** | 同理修复 `isLoopbackWebSocketUrl` 宿主名校验 |
| [#111908](https://github.com/openclaw/openclaw/pull/111908) | **Bug Fix (S)** | JSON 控制台日志结构化 | 👀 **待维护者审阅** | 统一三大 plain-text 产出路径为结构化 JSON |
| [#109699](https://github.com/openclaw/openclaw/pull/109699) | **Compat Fix (M)** | 插件安装 npm v12 元数据 | 👀 **待维护者审阅** | 兼容 npm 12 新 JSON 形态，解决 `npm view` 数组解析残留问题 |
| [#111941](https://github.com/openclaw/openclaw/pull/111941) | **Feature (XL)** | Web UI 聊天历史分页游标 | 📣 **需验证** | 引入可见游标分页，依赖 #110900 堆叠分支 |
| [#111989](https://github.com/openclaw/openclaw/pull/111989) | **Feature (XL)** | WorkBoard 卡片↔会话仪表盘联动 | 👀 **待维护者审阅** | 首轮打通“卡片派发会话”与“会话仪表盘”双向链接 |
| [#93218](https://github.com/openclaw/openclaw/pull/93218) | **Feature (L)** | 会话级流式模式切换 | 📣 **需验证** | 解决全局预览流式模式无法会话级动态切换痛点 |

**整体推进度评估**：核心基建（安全、编码、日志、插件兼容）已落地 7 个合并/待合 PR；用户可见特性（分页、看板、会话流式）仍在验证链路，预计下周进入主干。

---

## 4. 社区热点

| Issue | 评论/👍 | 标签 | 核心诉求 |
|-------|---------|------|----------|
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | 23/2 | `P1`, `impact:message-loss`, `impact:session-state` | **长会话/ANSI 重工具链中，工具输出崩塌为图片占位符**，Agent 无法读取原始 stdout/stderr，导致证据丢失 |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | 22/5 | `Regression`, `P1`, `clawsweeper:needs-live-repro` | **Codex app-server 2026.5.27 回归**：多工具轮次可靠触发 “Codex stopped before confirming the turn was complete” |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 19/0 | `P2`, `impact:security`, `issue-rating: 🦞 diamond lobster` | **记忆信任标签化**：按来源（用户指令/网页抓取/三方 Skill）打标，防记忆投毒 |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | 17/3 | `P1`, `impact:crash-loop` | **Telegram + Codex 2026.5.27**：子轮次反复工作但永不抵达 `turn/completed`，会话交付失败 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 15/4 | `P1`, `impact:security`, `clawsweeper:needs-security-review` | **掩码 Secrets 机制**：Agent 可用 API Key 但不可见明文，防注入泄露 |
| [#111971](https://github.com/openclaw/openclaw/issues/111971) | 5/0 | `maintainer` | **Web UI 媒体设置权限请求缺失**：麦克风/摄像头选择器不主动请求权限，宽度抖动 |

**趋势洞察**：Top 5 热点中 4 个为 `P1` 且涉及 **会话状态/消息丢失/崩溃循环**，且均挂 `clawsweeper:needs-product-decision`——**产品侧决策带宽已成瓶颈**。安全类增强（#7707、#10659）虽热度高但缺乏配套 PR，处于“共识达成、工程未启动”阶段。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 已有 Fix PR | 关键症状 |
|--------|-------|------|-------------|----------|
| **P0 级（生产阻断）** | [#108238](https://github.com/openclaw/openclaw/issues/108238) | 🟢 **CLOSED** | — | 2026.7.1 将累计 `cacheRead` 计入 `totalTokens`，误判上下文超限触发压缩失败 |
| **P1 级（核心流程）** | [#99241](https://github.com/openclaw/openclaw/issues/99241) | 🔴 OPEN | 无 | 工具输出渲染为图片占位符，Agent 失明 |
| | [#87744](https://github.com/openclaw/openclaw/issues/87744) | 🔴 OPEN | 无 | Telegram + Codex 轮次永不完成 |
| | [#86996](https://github.com/openclaw/openclaw/issues/86996) | 🔴 OPEN | 无 | Active Memory + Codex 路径导致延迟/超时/网关事件循环卡顿 |
| | [#92076](https://github.com/openclaw/openclaw/issues/92076) | 🔴 OPEN | 无 | 子 Agent 完成交付失败（请求会话已驱逐/锁定） |
| | [#78562](https://github.com/openclaw/openclaw/issues/78562) | 🔴 OPEN | 无 | 成功压缩后立即再次溢出，陷入自动压缩循环 |
| | [#108215](https://github.com/openclaw/openclaw/issues/108215) | 🔴 OPEN | 无 | 上下文用量 57%→13% 无压缩计数变化，怀疑隐式截断 |
| **P1 级（安全）** | [#111098](https://github.com/openclaw/openclaw/pull/111098) | 🟡 PR 验证中 | #111098 | 模型定价缓存 DNS SSRF 绕过 |
| | [#111233](https://github.com/openclaw/openclaw/pull/111233) | 🟡 PR 验证中 | #111233 | Codex WebSocket SSRF 绕过 |
| **P2 级（体验/兼容）** | [#94032](https://github.com/openclaw/openclaw/issues/94032) | 🔴 OPEN | 无 | `exec` 私有网访问失败，但同用户 GUI/LaunchAgent 正常 |
| | [#79752](https://github.com/openclaw/openclaw/issues/79752) | 🟢 CLOSED | — | Node v26 macOS gzip 未解压导致 Discord HTTP 报错 |
| | [#71326](https://github.com/openclaw/openclaw/issues/71326) | 🟢 CLOSED | — | 2026.4.20 回归：跨 exec 读取文件返回陈旧内容 |

**修复覆盖率**：今日新增/活跃 P1 Bug 6 个，**零配套 Fix PR**；仅 2 个安全类 P1 有 PR 且处验证态。建议维护者本周内为 Top 3 会话稳定性 Issue 指派 Owner 并产出最小可行修复。

---

## 6. 功能请求与路线图信号

| Issue | 信号强度 | 关联 PR/进展 | 可能纳入版本 |
|-------|----------|--------------|--------------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging | 🔥 高（19 评论、🦞 钻石龙虾级） | 无 PR，需安全评审 | 2026.Q3 里程碑（若产品决策通过） |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets | 🔥 高（15 评论、4 👍、安全标签） |

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-07-21）

---

## 1. 生态全景

当前生态呈现 **“一超多强、分层演进”** 态势：OpenClaw 以日均 850+ Issue/PR 更新量绝对领跑，确立了“内核级基础设施”的事实标准地位；Hermes Agent、IronClaw、ZeroClaw、LobsterAI、CoPaw 组成第一梯队，分别在**多端协同、架构重构收敛、安全/控制平面、产品化交付、插件生态**五个维度深耕；NullClaw、NanoClaw 等处于维护静默或早期探索期。整体技术焦点已从“模型接入竞赛”转向 **上下文/记忆管理、多模态工具链渲染、跨后端一致性、安全边界（SSRF/Secrets）、多端会话同步** 等工程化硬骨头。生产可用性与企业级治理能力成为区分梯队的关键分水岭。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Release (今日) | 核心健康度指标 | 阶段判定 |
|------|--------------|-----------|----------------|----------------|----------|
| **OpenClaw** | 354 更新 (新/活跃 226) | 500 更新 (待合并 392) | 无 | **极高并发维护**，P1 Bug 积压 6 个零 Fix PR，产品决策成瓶颈 | **高速迭代期/技术债偿还期** |
| **Hermes Agent** | 43 新/活跃 | 42 新/活跃 | v0.19.0 (昨日) | **发布后修复期**，P1 分发缺陷 (#68311) 已有修复 PR，响应速度快 | **版本稳定化冲刺期** |
| **IronClaw** | 数十级 (含 Bug Bash) | 28 合并/关闭 | 1.0.0-rc.1 筹备中 | **架构收敛冲刺**，v1 遗留删除完成，三大 XL 重构并行 | **1.0 发布前夜/架构定型期** |
| **ZeroClaw** | 39 更新 (新/活跃 30) | 50 更新 (待合并 38) | 无 | **高活跃**，S0/S1 级回归 5 个 (Windows CI、Landlock、web_fetch、CI 卫生、TOCTOU) | **v0.9.0 候选发布窗口期** |
| **LobsterAI** | 0 新 | 15 更新 (合并 10) | 无 | **健康交付态**，单日合并 10 PR 全为稳定性/体验修复，依赖升级长期秩压 | **产品化打磨期/技术债窗口期** |
| **CoPaw (QwenPaw)** | 30 新/活跃 | 42 新/活跃 (合并 10) | 无 (最新 v2.0.0.post3) | **高企活跃**，P1 核心缺陷 4 个 (Thinking 重复、死循环、并发轮询、Token 透传) 无 Fix | **v2.x 架构落地后稳定性偿还期** |
| **NullClaw** | 0 | 1 (Dependabot) | 无 | **维护静默期**，唯一 PR 挂起 36 天 | **低维护/内部开发期** |
| *其他 (NanoBot, PicoClaw, NanoClaw, TinyClaw, Moltis, ZeptoClaw)* | 0 | 0 | 0 | 无活动/摘要失败 | **休眠/早期探索** |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 优势/特征 | 同类对比差异 |
|------|-------------------|--------------|
| **社区规模与吞吐** | 日均 Issue/PR 量级为第二名 (Hermes/ZeroClaw) 的 **5-10 倍**；450+ 贡献者 (Hermes 数据) 级别规模 | 绝对中心节点，承担生态基础设施 (协议、工具链、安全基线) 的演进压力 |
| **技术路线** | **“内核+插件+多后端”** 极简核心，聚焦会话上下文管理、工具协议、安全边界、流式渲染等横切关注点 | Hermes/ZeroClaw/IronClaw 更偏“全能运行时/控制平面”；LobsterAI/CoPaw 侧重上层产品体验与特定生态 (Qwen/钉钉/飞书) 集成 |
| **核心矛盾** | **产品决策带宽滞后于技术债积累** (4 大 P1 热点均挂 `needs-product-decision`) | Hermes/IronClaw/ZeroClaw 核心维护者主导架构决策，决策链路更短；LobsterAI/CoPaw 由商业团队驱动，优先级明确 |
| **生态角色** | **“Linux 内核式”基础设施提供者** —— 协议标准 (MCP/ACP 兼容)、安全基线 (SSRF/Secrets)、工具渲染协议的事实制定者 | 其它项目多为“发行版”或“上层应用”消费者，兼容 OpenClaw 协议/接口是共识 |

---

## 4. 共同关注的技术方向 (多项目共振信号)

| 技术方向 | 涉及项目 | 具体诉求/痛点 | 成熟度 |
|----------|----------|--------------|--------|
| **会话上下文/记忆管理** | **OpenClaw** (#99241, #78562, #108215), **ZeroClaw** (#8891, #8837), **IronClaw** (#6263, #6189), **Hermes** (#4335, #67600), **CoPaw** (#6246, #6242) | 压缩循环失控、工具输出渲染崩塌、跨端会话同步、持久化记忆分类/检索、Embedding 维度透传 | **高频刚需，方案碎片化**，缺乏跨项目标准 |
| **安全边界与供应链** | **OpenClaw** (#111098, #111233, #10659, #7707), **ZeroClaw** (#8713, #9204), **Hermes** (#65613, #66369), **IronClaw** (#5598 breaking changes) | SSRF 绕过 (DNS/WS)、Secrets 掩码/最小权限、Landlock/沙箱逃逸、插件/扩展权限网格、依赖升级 (Electron/React) | **P0 级阻断**，OpenClaw/ZeroClaw 已有修复 PR，其余多停留 Issue 阶段 |
| **多模态工具输出渲染** | **OpenClaw** (#99241 图片占位符), **LobsterAI** (#2366 批量注释/截图), **CoPaw** (#6257 Thinking 重复), **ZeroClaw** (#9207 gzip 解压) | 非文本流 (图片、二进制、结构化数据) 的统一展示协议、流式分片渲染、离线预览 | **产品体验分水岭**，LobsterAI/CoPaw 已有 UI 级方案，内核层缺标准 |
| **跨后端/多模型一致性** | **OpenClaw** (#93218 会话级流式切换), **Hermes** (#68222 ACPClient 泛化), **ZeroClaw** (#3566 A2A, #8486 OpenAI 网关), **IronClaw** (Provider 引导 #6360) | 统一接口适配 OpenAI/Anthropic/Gemini/Qwen/Codex/Copilot、会话级参数动态切换、A2A 互操作 | **生态互联关键**，Hermes/ZeroClaw 推进协议层标准化 |
| **多端/跨平台一致性** | **Hermes** (WebUI/TUI/Desktop 三端), **LobsterAI** (Windows 分发 #2367/2368), **ZeroClaw** (#7462 Windows 74 失败), **CoPaw** (#6239 Windows PATH, #6252 Linux 缩放), **IronClaw** (Telegram/WebUI 渲染) | Windows CI 缺失、原生分发/静默更新、系统托盘/移动端适配、终端/桌面/Web 状态同步 | **工程化短板集中暴露**，LobsterAI 工程化最完善 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户/场景 | 架构关键词 | 差异化护城河 |
|------|----------|---------------|------------|--------------|
| **OpenClaw** | **Agent OS 内核/基础设施层** | 框架开发者、二次分发商、企业内部平台组 | 微内核、插件化、多后端抽象、安全优先 | 协议/安全标准制定者，生态兼容性最广 |
| **Hermes Agent** | **全模态个人助手运行时 (Consumer/Prosumer)** | 终端高级用户、多平台 (IM/Web/Desktop) 重度用户 | 三端同步、Plugin/ACP/MCP/Skill 多生态融合、Cron 调度 | **多端会话无缝衔接**、BlueBubbles/Telegram/Discord 原生深度集成 |
| **IronClaw** | **类型安全、可验证的 Agent 基础设施 (Rust 首选)** | 基础设施工程师、追求正确性/可观测的团队 | Reborn 架构、SOP 控制平面、线性类型/会话类型系统、InMemory→SQLite 持久化 | **编译期正确性保证**、SOP 形式化控制平面、零 GC 运行时 |
| **ZeroClaw** | **可编程、可评估的自主 Agent 平台** | Agent 应用开发者、评测/回归测试需求强的团队 | SOP 守护进程、持久化内存三平面、`zeroclaw eval` 框架、OpenAI 兼容网关 | **SOP 即代码的控制平面**、内置评估/回放体系、A2A 互操作野心 |
| **LobsterAI** | **产品级、开箱即用的 AI 协作客户端 (Electron/Tauri)** | 知识工作者、团队协作、Windows/企业环境 | Cowork 协作协议、AI Skin 个性化、Windows 分发工程化、OpenClaw 深度集成 | **极致的产品化交付能力**、Windows 原生体验、多模态附件流转闭环 |
| **CoPaw (QwenPaw)** | **阿里系生态原生 Agent 客户端 (Qwen + 钉钉/飞书)** | 阿里云/通义模型用户、钉钉/飞书企业用户 | PawApp SDK、Unified Browser、ReMe 记忆、AgentScope 集成 | **通义/Qwen 模型深度适配**、IM 生态原生集成、中文语境下的交互打磨 |

---

## 6. 社区热度与成熟度分层

| 梯队 | 项目 | 特征标签 | 核心风险/机遇 |
|------|------|----------|---------------|
| **L0: 生态内核层** | **OpenClaw** | 超高吞吐、技术债高企、决策瓶颈、标准制定者 | **风险**：P1 Bug 积压可能动摇下游信任；**机遇**：推进协议/安全标准落地，巩固中心地位 |
| **L1: 快速迭代/发布冲刺层** | **Hermes Agent**, **IronClaw**, **ZeroClaw** | 版本里程碑驱动、架构收敛明确、高响应修复 | **Hermes**：v0.19.1 质量门控考验；**IronClaw**：1.0.0 发布后生态扩展；**ZeroClaw**：S0/S1 清零能否如期 v0.9.0 |
| **L2: 产品化交付/打磨层** | **LobsterAI**, **CoPaw** | 商业团队主导、用户可见特性密集、依赖上游内核 | **LobsterAI**：Electron/React 大版本升级窗口期；**CoPaw**：v2.x 稳定性偿还能否跟上功能扩展 |
| **L3: 低维护/探索层** | **NullClaw**, *NanoBot, PicoClaw 等* | 活动稀疏、依赖自动化维护、无明确路线图 | 需明确项目状态 (归档/孵化/内部转型)，避免误导贡献者 |

**关键观测指标**：
- **OpenClaw** 的 `clawsweeper:needs-product-decision` 标签清理速度
- **Hermes/IronClaw/ZeroClaw** 的 RC/稳定版发布节奏能否从“月度”转为“双周”
- **LobsterAI/CoPaw** 能否建立上游依赖 (OpenClaw/Electron/React) 的**同步升级机制**

---

## 7. 值得关注的趋势信号 (对开发者/决策者的参考)

| 趋势信号 | 证据来源 | 对开发者/决策者的启示 |
|----------|----------|------------------------|
| **“会话上下文管理” 成为新的核心护城河** | 6/7 个活跃项目均有 P0/P1 级 Issue，涉及压缩、渲染、跨端同步、记忆分类 | **投入

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-07-21

---

## 1. 今日速览

**整体状态：高强度发布后修复期，核心稳定性风险显现。**  
项目于昨日（7月20日）发布 **v0.19.0 "The Quicksilver Release"**，这是一个里程碑版本（累计 2,245+ commits、1,065+ PR、3,300+ issues 关闭、450+ 贡献者）。然而发布不足 24 小时即出现 **P1 级分发包缺陷（#68311）**：所有 0.13.0–0.19.0 的 sdist 均缺少 `tests/conftest.py`，导致运行打包测试时触发 `os.kill(-1, SIGTERM)` 杀死用户整个会话。同时，**插件处理器崩溃（#68318，P2）** 与 **Desktop 默认配置会话列表为空（#67600，P2，9 条评论）** 等回归问题集中爆发。社区活跃度极高：过去 24h 新增/活跃 Issue 43 条、PR 42 条，维护者正以“快速跟进”模式响应（当日已提交 10+ 修复型 PR）。项目健康度：**发布质量门控需加强，但修复响应速度与社区协作能力强**。

---

## 2. 版本发布

### **v0.19.0 "The Quicksilver Release" (2026-07-20)**
- **发布规模**：~2,245 commits · ~1,065 merged PRs · ~2,465 files changed · ~300k insertions · ~36k deletions · **~3,300 issues closed** · **450+ contributors**
- **核心主题**：The Quicksilver Release（详细变更日志未在数据中给出，但从近期 PR/Issue 推断涉及：插件架构重构、会话/上下文跨平台共享、Cron/调度器增强、WebUI/TUI/Desktop 三端同步、安全加固、MCP/ACP/技能系统扩展）。
- **破坏性变更/迁移提示**（从已关闭 Issue 与 PR 推断）：
  - BlueBubbles webhook 事件去重逻辑调整（#45317，仍在审核）
  - 插件工具处理器签名变更：`registry.dispatch` 现向 handler 传播 `task_id`，**所有单参数形插件工具将崩溃**（#68318，已有修复 PR 待合并）
  - Cron 调度器的认证/模型回退链重构（#66868, #46511）
  - Webhook 认证 `INSECURE_NO_AUTH` 迁移至 `config.yaml: allow_insecure`（#66369）
- **已知阻塞性缺陷（发布后发现）**：
  - **P1**：sdist 缺少 `conftest.py` 导致测试杀进程（#68311，**影响所有 0.13.0–0.19.0 包**，已有修复 PR #68317）
  - **P2**：插件工具 `TypeError: unexpected keyword argument 'task_id'`（#68318）
  - **P2**：Desktop `default` profile 会话侧边栏为空（#67600）

> **建议**：生产环境暂缓升级至 0.19.0，等待 0.19.1 热修复版本；若已升级，请立即应用 #68317 并关注 #68318 修复合并。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（8 个）
| PR | 类型 | 影响 | 关联 Issue |
|----|------|------|------------|
| **#54895** | feat(WebUI) | 侧边栏徽章新增“运行时模型/回退指示器”，解决回落模型不可见问题 | #54509 |
| **#57642** | feat(CLI/OpenRouter) | 检测并警告 OpenRouter 精选模型从实时 API 中移除 | — |
| **#67817** | fix(Telegram) | 修复 `HTTPXRequest.do_request` 只读属性导致的连接失败（版本兼容性） | — |
| **#67194** | fix(Windows) | 修复安装程序无法安装（重复/误报） | — |
| **#66611** | fix(Desktop) | 修复“已是最新版”弹窗关闭按钮无响应 & 红色焦点框 | — |
| **#46511** | fix(Cron/OAuth) | Cron 任务凭证池耗尽时正确回退到 `fallback_providers` | — |
| **#68301** | chore | 关闭重复 Issue（跨平台会话桥接） | #4335 |

### 进行中高影响力 PR（待合并，42 个，节选）
| PR | 类型 | 核心价值 | 状态 |
|----|------|----------|------|
| **#68317** | **test/P1** | 让 live-system-guard canary **fail-closed**，彻底修复 #68311 分发包杀进程缺陷 | **Open，急需合并** |
| **#68319** | fix(agent/P2) | 守卫可选 Telegram rich-hint 导入，修复 #68300 启动崩溃 | Open |
| **#68318** | fix(plugins/P2) | 解决插件 handler 收到意外 `task_id` 崩溃（v0.19.0 回归） | Open |
| **#45317** | fix(BlueBubbles/P2) | 防止 v0.19.0 重复入站轮次（`new-message` + `updated-message`） | Open，长期阻塞 |
| **#66369** | security/webhook | `INSECURE_NO_AUTH` 迁移至 `config.yaml: allow_insecure`，统一回环安全护栏 | Open |
| **#65613** | security/Desktop | 针对链接标题预览的 SSRF 加固（DNS pinning、公网仅 HTTP(S)、失败关闭） | Open |
| **#68306** | feat(TUI/P3) | **Widget App SDK**：state+reducer+render 组件模型，内置 3 个参考应用 | Open |
| **#68222** | feat(ACP/P4) | 将 Copilot ACP 客户端泛化为通用 `ACPClient`（Claude Code, Codex, Gemini, Qwen...） | Open |
| **#61337** | feat(Voice/P3) | 语音交互流改进：Phase A 确认 + Phase B 答案，减少静默等待 | Open |
| **#27601** | feat(Webhook/P3) | 增加 Bearer Token 认证支持 | Open |

**进展评估**：发布后 24h 内，**安全/稳定性修复类 PR 占主导**（#68317, #68319, #68318, #65613, #66369），功能性大型 PR（ACP 泛化、TUI SDK、Voice、Fluxer 插件）并行推进。项目呈现“修复发布缺陷 + 持续架构演进”双轨并行态势。

---

## 4. 社区热点

| Issue/PR | 评论/👍 | 核心诉求 | 分析 |
|----------|---------|----------|------|
| **#67600** Desktop `default` profile 会话列表为空 | 9 💬 | **发布回归**：仅 `default` profile 受影响，named profiles 正常，后端已确认返回数据 | 最高讨论热度，阻塞桌面端核心流程，需优先排查前端状态同步或 profile 加载顺序 |
| **#4335** 跨平台会话上下文共享 | 8 💬, 2 👍 | **核心架构需求**：CLI ↔ Telegram 等多端会话隔离，用户期望统一上下文 | 长期需求（3 月创建），近期被 #68301 重复，说明社区呼声高；与 “Native session bridging” 方向一致 |
| **#2788** Cron 任务不执行/失败无日志 | 6 💬 | **可靠性缺口**：调度器静默失败，无可观测性 | 3 月创建至今未解，涉及 `comp/cron` 核心组件，建议纳入 0.19.x 稳定性冲刺 |
| **#64900** 插件扩展 `send_message` 平台字段 | 5 💬 | **插件生态能力**：内置平台硬编码 schema，插件无法注入自定义参数/发送处理器 | 阻塞第三方平台插件开发，配合 #64231（生命周期钩子目录）可系统性解决 |
| **#34372** BlueBubbles webhook 双重处理 | 5 💬 | **消息去重**：`updated-message` 导致每条 iMessage 处理两次，且 chat-id 不一致 | #45317 正在修复，但需验证 v0.19.0 回归情况 |
| **#66868** Cron 主模型调用 401 | 5 💬 | **认证回退失效**：cron.scheduler 路径未复用 gateway 的 provider 回退逻辑 | 与 #33333/#34651（auxiliary_client 已修复）形成对比，揭示调度器认证路径割裂 |
| **#68311** sdist 测试杀进程 | 3 💬 | **分发质量事故**：所有 0.13.0–0.19.0 包含缺陷测试文件 | **P1 级**，已有 #68317 修复，社区关注度快速上升 |
| **#4256** 可配置键位绑定 | 3 💬, 6 👍 | **UX 诉求**：硬编码快捷键与 tmux/screen/编辑器冲突，无障碍需求 | 高 👍/评论比，典型“长尾高价值”改进，适合 0.20.0 纳入 |

---

## 5. Bug

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 | 2026-07-21

---

## 1. 今日速览
- **整体活跃度：极低** 。过去 24 小时内无人工 Issue 活动，无代码变更合并，无版本发布。
- **唯一动态** 为 Dependabot 自动提交的依赖升级 PR (#956)，将 Docker 基础镜像 `alpine` 从 3.23 升级至 3.24，当前处于待评审/合并状态。
- 社区讨论、Bug 上报、功能需求均为零，项目处于**维护静默期**，核心维护者可能专注于未公开的内部开发或下一版本规划。
- **健康度提示**：依赖更新 PR 已挂起 35 天（创建于 2026-06-15），建议尽快评审合并以规避基础镜像潜在 CVE 风险。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 项目进展
**今日无 PR 合并/关闭。**  
唯一在途 PR 为自动化依赖更新，尚未推进至合并：
- **#956** `ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group`  
  - 类型：维护/安全（基础镜像升级）  
  - 状态：Open，依赖自动化测试通过后需人工批准合并  
  - 影响：仅涉及 Docker 镜像构建层，无业务代码变更  
  - 链接：[nullclaw/nullclaw#956](https://github.com/nullclaw/nullclaw/pull/956)

---

## 4. 社区热点
**过去 24 小时无人工 Issue/PR 评论、Reactions 或讨论。**  
社区处于完全静默状态，无热点话题产生。

---

## 5. Bug 与稳定性
**过去 24 小时无新 Bug 报告、崩溃日志或回归问题。**

---

## 6. 功能请求与路线图信号
**过去 24 小时无新功能需求或路线图相关讨论。**  
当前在途 PR (#956) 仅为常规依赖维护，不包含功能性变更，无法据此推断下一版本规划。

---

## 7. 用户反馈摘要
**无用户反馈数据。**  
Issues 列表为空，无法提炼痛点、使用场景或满意度信息。

---

## 8. 待处理积压 ⚠️
| 编号 | 标题 | 类型 | 创建时间 | 停滞天数 | 优先级建议 | 链接 |
|------|------|------|----------|----------|------------|------|
| #956 | `ci(deps): bump alpine from 3.23 to 3.24` | 依赖升级/安全 | 2026-06-15 | **36 天** | **高**（基础镜像安全补丁） | [#956](https://github.com/nullclaw/nullclaw/pull/956) |

> **维护者行动建议**：  
> 1. 立即评审并合并 #956，确保 CI 镜像构建使用受支持的 Alpine 版本。  
> 2. 若项目进入长期维护模式，建议在 README 或 GitHub Description 标注当前状态，避免外部贡献者产生“项目弃坑”误判。  
> 3. 考虑配置 Dependabot 自动合并策略（通过 status checks 后自动合并），减少此类低风险 PR 的人工积压。

---

**报告生成时间**：2026-07-21 06:00 UTC  
**数据来源**：GitHub REST API / GraphQL（Issues, PRs, Releases）  
**下一份报告**：2026-07-22 同一时段

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-07-21

---

## 1. 今日速览

IronClaw 今日处于 **架构重构收尾与 1.0.0-rc.1 发布冲刺** 的关键节点。过去 24 小时合并/关闭 28 个 PR、关闭 3 个 Issue，核心里程碑为 **PR #6375 删除 v1 遗留单体** 并将生产部署切换至 Reborn 栈。当前主分支因遗留 CI 引用（release-plz、replay-gate）一度变红，已由 #6379 修复。Bug Bash 活动产出 10+ P1/P2 缺陷，集中在流式响应、Provider 引导、扩展授权、Telegram/WebUI 渲染等用户感知路径。三个 XL 级重构 PR（#6382、#6386、#6387）同步开启，标志着代码库正向“授权策略单一化、存储层精简、部署模式收敛”三大架构简化目标推进。整体活跃度 **极高**，核心维护者（ilblackdragon、henrypark133、serrrfirat）主导重构与发布，Dependabot 自动化依赖更新并行不阻塞。

---

## 2. 版本发布

**无新版本发布**。但 **PR #6383** 正在 `release-fix-1.0.0-rc.1` 分支上准备 1.0.0-rc.1 标签推送，修复两个阻塞项：
- 移除发布说明中的 "Reborn" 代号
- 修复 MSI 安装程序构建阻塞  
该版本基于 `40ae7200`（刻意不包含 #6374/#6375 的 v1 删除重构），预计近期发布。破坏性变更见 **PR #5598**：`ironclaw_common 0.5.0`、`ironclaw_skills 0.4.0` 均含 breaking changes。

---

## 3. 项目进展

| PR | 状态 | 规模/风险 | 核心推进内容 |
|----|------|-----------|--------------|
| [#6375](https://github.com/nearai/ironclaw/pull/6375) | **已合并** | XL / High | **删除 v1 遗留单体 (`src/`)**，移除 `ironclaw-legacy` 二进制，生产部署配置全部指向 Reborn 栈。项目彻底切入 Reborn 架构。 |
| [#6374](https://github.com/nearai/ironclaw/pull/6374) | **已合并** | XL / Low | 消除最后一处 `LocalTriggerAccess` 影子存储（~1.4k LOC），触发器访问统一走配置+身份模型，响应架构简化文档 §4.4。 |
| [#6337](https://github.com/nearai/ironclaw/pull/6337) | **已合并** | XL / Low | **流式响应韧性重构**：超时改为基于不活跃而非总时长、强制真实终止标记、移除语义续写 workaround、保留逐线程偏移量。直接修复 #6189、#6352 类问题。 |
| [#6378](https://github.com/nearai/ironclaw/pull/6378) / [#6377](https://github.com/nearai/ironclaw/pull/6377) | **已合并** | L/M / Low | 清理 `ironclaw_runner` 死特性标志（`libsql-secrets`、`filesystem-goal-store`、`local_trigger_access`），仅保留 `libsql-restart-tests`。 |
| [#6379](https://github.com/nearai/ironclaw/pull/6379) | **已合并** | M / Medium | 修复 #6375 合并后主分支变红：release-plz 移除已删除包配置、replay-gate 移除遗留引用。 |
| [#6370](https://github.com/nearai/ironclaw/pull/6370) | **已合并** | XS / Low | 准备 1.0.0-rc.1 变更日志，修复 `reborn-binary.md` 过期内容。 |
| [#6382](https://github.com/nearai/ironclaw/pull/6382) | **审核中** | XL / Low | 文件系统存储精简：退役 Blob Store、去重转换/提交路径、拆解巨型文件。配合 #6263 耐久性证据。 |
| [#6386](https://github.com/nearai/ironclaw/pull/6386) | **审核中** | XL / Low | **授权策略单一化**：将所有预检策略折叠进 `authorize()`，落实 §5.3.2/§9 安全里程碑。 |
| [#6387](https://github.com/nearai/ironclaw/pull/6387) | **审核中** | XL / Low | 部署模式分支收敛 5→3，推进 #6274 Track 1，仅保留 `deployment.rs` 为合法分支点。 |

**整体进度**：v1 删除完成、Reborn 栈成产、三大架构简化 PR 并行、rc.1 发布在即。

---

## 4. 社区热点

| Issue/PR | 评论/反应 | 核心诉求 |
|----------|-----------|----------|
| [#6263](https://github.com/nearai/ironclaw/issues/6263) | 9 💬 | **InMemoryTurnStateStore 退役** 需 Slice 0 Oracle + 无活锁证据，关联存储层收敛最终战役。 |
| [#6274](https://github.com/nearai/ironclaw/issues/6274) | 4 💬 | **DeploymentConfig 成为唯一组合配置**，需补全 §4.4/§5.6/§5.11 剩余采集工作。 |
| [#6190](https://github.com/nearai/ironclaw/issues/6190) | 4 💬 | **单次执行多错误横幅合并**：流式错误与上下文限制错误同时显示，用户无法定位根因。 |
| [#6189](https://github.com/nearai/ironclaw/issues/6189) | 4 💬 | **可重试流错误导致成功响应标红**：“Replay unavailable” 误导用户认为请求失败。 |
| [#6369](https://github.com/nearai/ironclaw/issues/6369) | 3 💬 | **Tier B 收尾**：v1 删除留下的能力缺口清单（CLI、WebUI、部署、测试）。 |
| [#6384](https://github.com/nearai/ironclaw/issues/6384) | 0 💬 (新建) | **聊天内命令覆盖优先级待办**：对列**，供 #3286 规划使用。 |

**趋势**：核心维护者主导的架构级 Issue 讨论深度高；Bug Bash 产出的用户体验类 Issue 评论较少但数量多，反映前端/交互层痛点集中。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 标题 | 状态 | 关联 Fix PR |
|--------|-------|------|------|-------------|
| **P1** | [#6360](https://github.com/nearai/ironclaw/issues/6360) | Provider 引导无返回导航 | OPEN | — |
| **P1** | [#6348](https://github.com/nearai/ironclaw/issues/6348) | Gmail 扩展重装后自动授权（无 OAuth 提示） | OPEN | — |
| **P2** | [#6190](https://github.com/nearai/ironclaw/issues/6190) | 单次请求多错误横幅并存 | OPEN | — |
| **P2** | [#6189](https://github.com/nearai/ironclaw/issues/6189) | 可重试流错误误标成功响应为失败 | OPEN | **#6337 已合并**（应修复） |
| **P2** | [#6351](https://github.com/nearai/ironclaw/issues/6351) | 多工具请求因 checkpoint 不可用失败 | OPEN | — |
| **P2** | [#6350](https://github.com/nearai/ironclaw/issues/6350) | 助手意外切换响应语言 | OPEN | — |
| **P2** | [#6353](https://github.com/nearai/ironclaw/issues/6353) | 长消息截断无展开入口 | OPEN | — |
| **P2** | [#6352](https://github.com/nearai/ironclaw/issues/6352) | 离开页面返回后流式重放循环 | OPEN | **#6337 已合并**（应修复） |
| **P2** | [#6349](https://github.com/nearai/ironclaw/issues/6349) | Telegram 历史在 WebUI 渲染错位 | OPEN | — |
| **P2** | [#6362](https://github.com/nearai/ironclaw/issues/6362) | “测试连接”与“获取模型”重复流程 | OPEN | — |
| **已修复** | [#6178](https://github.com/nearai/ironclaw/issues/6178) | 自动化错误横幅不可关闭且暴露原始 API 错误 | CLOSED | — |
| **已修复** | [#6179](https://github.com/nearai/ironclaw/issues/6179) | 设置导入空成功误报 | CLOSED | — |
| **已修复** | [#6335](https://github.com/nearai/ironclaw/issues/6335) | Host 侧能力修复被静默占位 | CLOSED | — |

**观察**：#6337 解决了两个核心流式稳定性问题（P2），其余 P1/P2 仍在积压，建议冲刺周优先处理 Provider 引导与扩展授权两个 P1。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可能纳入版本 | 判断依据 |
|------|------|--------------|----------|
| **ACP 子线程后端**（Codex/Droid/OpenCode 委托） | [#2277](https://github.com/nearai/ironclaw/issues/2277) | v2 / 1.x 后续 | 1 👍，长期规划，架构就绪后并行 |
| **IronHub 扩展安装流** | [#6320](https://github.com/nearai/ironclaw/issues/6320) | 1.0 / 1.1 | 基于 #4479，Reborn 原生扩展生态关键 |
| **线程级 MCP 会话/编程配置** | [#6325](https://github.com/nearai/ironclaw/issues/6325) | 1.1+ | 基于 #6244，需凭据中介与运行时边界 |
| **WebUI 工作区重设计 + 聊天优先引导** | [#6324](https://github.com/nearai/ironclaw/issues/6324) | 1.1 | 基于 #6162/#6163，产品模型对齐 |
| **聊天内命令覆盖补全** | [#6384](https://github.com/nearai/ironclaw/issues/6384) | 1.0/1

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-07-21

---

## 1. 今日速览
- **整体活跃度：高**。过去 24 小时内无新 Issue，但有 **15 条 PR 更新**，其中 **10 条已合并/关闭**，显示核心团队处于密集的功能交付与缺陷修复冲刺期。
- **核心进展集中在**：Windows 安装/分发体验优化（#2368, #2367）、协作/浏览器注释多附件能力落地（#2366）、Cowork 会话稳定性修复（#2364, #2363）、AI Skin 创建流程重构（#2361）、认证重试健壮性（#2360）及 UI 布局抖动消除（#2359）。
- **技术债治理**：Dependabot 自动化依赖升级 PR（#1277, #1282-#1284）长期搁置（标记 `stale`），涉及 Electron 40→43、React 18→19 等重大跨版本升级，需规划专项窗口处理。
- **发布节奏**：今日无新 Release，积累的合并变更预示着近期将切出一个包含大量体验修复的小版本。
- **项目健康度**：主干分支合并频繁、CI 通过率高、回归测试覆盖同步跟进（如 #2360, #2364），处于**健康交付态**。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 影响面 | 链接 |
|----|------|----------|--------|------|
| **#2366** | **Feat** | **浏览器多注释附件支持**：新增注释协议、WebView preload、截图资产存储 IPC；支持批量创建/保存裁剪截图；作为草稿附件展示、清理、排队、发送；在 Cowork metadata 与 OpenClaw prompt 传递结构化上下文；隐藏普通图片附件改为注释数量徽标。 | Renderer, Main, Cowork, Artifacts, Docs | [#2366](https://github.com/netease-youdao/LobsterAI/pull/2366) |
| **#2367** | **Feat (Build)** | **Windows 分发渠道显式入口**：新增 `scripts/dist-win-channel.cjs` 与 `scripts/dist-win-web.cjs`，显式传递 `keyfrom` 与 `web-installer` 环境变量，避免构建间变量泄漏。 | Build, Windows | [#2367](https://github.com/netease-youdao/LobsterAI/pull/2367) |
| **#2364** | **Fix** | **防止会话刷新时滚动跳动**：按 Session ID 限定刷新事件范围，保留已加载消息历史。 | Renderer, Main, Cowork | [#2364](https://github.com/netease-youdao/LobsterAI/pull/2364) |
| **#2363** | **Fix** | **消除周期性 IM 消息闪烁**：对账时比对匹配历史窗口，修复网关尾部不匹配时保留旧消息。 | Main, Cowork | [#2363](https://github.com/netease-youdao/LobsterAI/pull/2363) |
| **#2361** | **Feat** | **AI Skin 创建流程改进**：外观设置新增持久入口与首用引导；Designer Kit 首屏放置框架提示词；支持跨轮次持续创建与复用；激活态同步。 | Renderer, Main, Skin | [#2361](https://github.com/netease-youdao/LobsterAI/pull/2361) |
| **#2360** | **Fix** | **登录重试时保留本地回调服务器**：复用活跃回调处理并发/重复登录尝试；新增生命周期诊断与回归覆盖。 | Renderer, Main, Auth | [#2360](https://github.com/netease-youdao/LobsterAI/pull/2360) |
| **#2359** | **Fix** | **Artifact 预览/输入区布局稳定**：稳定拖拽柄与内容区 Key 避免子树重建；布局阶段同步更新输入区高度消除闪动。 | Renderer, Cowork, Artifacts | [#2359](https://github.com/netease-youdao/LobsterAI/pull/2359) |
| **#2365** | **Fix** | **OpenClaw 配置热重载改用 RPC ACK 触发**：替代文件监听，降低竞态风险。 | Main, OpenClaw | [#2365](https://github.com/netease-youdao/LobsterAI/pull/2365) |
| **#2362** | **Fix** | **修复 Cron UI Bug** | Renderer | [#2362](https://github.com/netease-youdao/LobsterAI/pull/2362) |
| **#1349** | **Fix (Stale)** | **POPO 连通性测试接入真实 API 校验**：修复任意凭据均显示“验证通过”的问题。 | IM, Main | [#1349](https://github.com/netease-youdao/LobsterAI/pull/1349) |

> **进展小结**：单日合并 10 PR，覆盖 **协作核心流、Windows 分发工程化、AI 个性化入口、认证健壮性、UI 稳定性** 五大维度，代码库向“生产级稳定、多模态协作、可扩展分发”方向显著推进。

---

## 4. 社区热点
> 过去 24h **无新 Issue**，所有 PR 评论数为 0，**无高热度讨论**。  
> 长期关注点集中在 **Dependabot 依赖升级系列（Electron/React/HeadlessUI）** 的破坏性变更评估，建议维护者在下一个规划周期发起 RFC 讨论。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 关联 PR | 状态 |
|----------|----------|---------|------|
| **P1 - 核心流程阻塞** | 登录重试/并发时本地回调丢失导致认证失败 | [#2360](https://github.com/netease-youdao/LobsterAI/pull/2360) | ✅ **已修复并合并** |
| **P1 - 数据一致性** | 周期性 IM 消息对账导致旧消息丢失/闪烁 | [#2363](https://github.com/netease-youdao/LobsterAI/pull/2363) | ✅ **已修复并合并** |
| **P2 - 体验回归** | 会话刷新触发滚动位置跳动 | [#2364](https://github.com/netease-youdao/LobsterAI/pull/2364) | ✅ **已修复并合并** |
| **P2 - UI 抖动** | Artifact 预览展开/折叠导致输入区布局闪动 | [#2359](https://github.com/netease-youdao/LobsterAI/pull/2359) | ✅ **已修复并合并** |
| **P3 - 功能缺陷** | POPO 连通性测试未真实校验凭据有效性 | [#1349](https://github.com/netease-youdao/LobsterAI/pull/1349) | ✅ **已修复并合并**（长期积压） |
| **P3 - 定时任务** | Cron 表达式 UI 交互异常 | [#2362](https://github.com/netease-youdao/LobsterAI/pull/2362) | ✅ **已修复并合并** |

> **稳定性结论**：今日合并 PR 全部为 **Bug Fix 或稳定性增强**，且均附带回归测试或诊断日志，主干稳定性显著提升。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 已有 PR 支撑 | 纳入下版本可能性 |
|----------|----------|--------------|------------------|
| **#2366** | 浏览器侧多注释/截图作为一等附件流转 | ✅ 已合并完整链路 | **极高**（已入主干） |
| **#2361** | AI Skin 创建持久化入口、引导、跨轮次复用 | ✅ 已合并 | **极高**（已入主干） |
| **#2368 (Open)** | Windows 静默更新安装（/S 标志 + UAC 降级提示本地化） | 🔄 **待审核** | **高**（Windows 体验关键路径） |
| **#2367** | Windows 分发渠道参数显式化，消除构建污染 | ✅ 已合并 | **高**（工程化基建） |
| **Dependabot 系列** | Electron 43 / React 19 / HeadlessUI 2 升级 | ⏳ **长期搁置** | **中**（需专项窗口，破坏性变更大） |

> **路线图推测**：下一版本（vNext）将聚焦 **“协作多模态附件 + AI 个性化入口 + Windows 分发体验”** 三大用户可见特性；依赖大版本升级将另辟分支攻坚。

---

## 7. 用户反馈摘要
> 今日 **无新 Issue/评论**，无法直接提炼用户痛点。  
> 结合近期合并 PR 反推的隐性用户诉求：
1. **协作场景下“所见即所得”的多媒体附件流转**（#2366 解决截图/注释混排、预览闪动问题）
2. **Windows 用户期望“无感更新、无 UAC 干扰”**（#2368 正在解决）
3. **登录/重连的高可用性**（#2360 解决并发重试回调丢失）
4. **IM 消息列表的视觉稳定性**（#2363/2364 消除闪烁/跳动）
5. **AI 能力的低门槛入口与持久化**（#2361 入口固化、引导、跨轮次状态保持）

---

## 8. 待处理积压（需维护者关注）

| 项目 | 类型 | 停滞时长 | 风险/建议 | 链接 |
|------|------|----------|-----------|------|
| **#1277** | chore(deps-dev): Electron 40.2.1 → 43.1.1 + electron-builder 升级 | **~110 天** (`stale`) | **高风险**：Electron 43 涉及 V8/Node/Chrome 重大升级，可能触发原生模块重编译、API 变更；建议建立 `upgrade/electron-43` 分支并行验证。 | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) |
| **#1282** | chore(deps): @headlessui/react 1.7.19 → 2.2.9 | **~110 天** (`stale`) | **中风险**：HeadlessUI 2.x 迁移到 React 19、类名变更、组件 API 调整；需配合 React 升级同步处理。 | [#1282](https://github.com/netease-youdao/LobsterAI/pull/1282) |
| **#1283** | chore(deps): React 18.3.1 → 19.2.4 | **~110 天** (`stale`) | **最高风险**：React 19 引入 Compiler、Actions、新 Hook、并发特性默认开启；全量组件回归测试成本极高，建议分阶段：先升级到 18.3 稳定，再切 19。 | [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283) |
| **#1284** | chore(deps): react-syntax-highlighter 15.6.6 → 16.1.1 | **~110 天** (`stale`) | **低风险**：通常兼容性较好，可随 React 升级顺带处理。 | [#1284](https://github.com/netease-youdao/LobsterAI/pull/1284) |
| **#2368** | feat(update): Windows 静默安装更新 | **0 天** (Open) | **阻塞发布**：Windows 自动更新体验关键路径，建议优先 Code Review 合并，纳入下一个 RC。 | [#2368](https://github.com/netease-youdao/LobsterAI/pull/2368) |

---

## 附：关键链接汇总
- **仓库**：https://github.com/netease-youdao/LobsterAI
- **今日合并 PR 列表**：[Closed PRs (2026-07-20)](https://github.com/netease-youdao/LobsterAI/pulls?q=is%3Apr+closed%3A2026-07-20+merged%3A2026-07-20)
- **待审核 PR**：#2368
- **长期秩压 Dependabot PRs**：#1277, #1282, #1283, #1284

---

*报告生成时间：2026-07-21 06:00 UTC | 数据窗口：2026-07-20 00:00 – 23:59 UTC*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-07-21

> **数据基准**：GitHub 过去 24 小时增量（Issues: 30 | PRs: 42 | Releases: 0）  
> **统计口径**：2026-07-20 00:00 – 2026-07-21 00:00 (UTC)

---

## 1. 今日速览
- **活跃度高企**：单日 72 条 Issue/PR 更新，其中 **PR 合并/关闭 10 条、新开/活跃 PR 32 条**，显示核心团队与外部贡献者并行推进多条特性分支（Unified Browser、PawApp SDK、Memory 重构、Provider 扩展等）。
- **Bug 修复与架构重构并重**：关闭的 8 个 Issue 多为 v2.0.0 回归缺陷（循环执行、沙箱回退审批、Embedding 维度未透传、文件名过长崩溃），并已有对应 Fix PR 合入；Open 状态的高热 Issue 集中于 **推理重复输出、工具调用 Thinking 重复、DoomLoop 检测误报、Windows PATH 拼接丢失分号** 等核心路径稳定性。
- **生态扩展加速**：新增 `AIOnly` 内置 Provider（PR #6271）、`qwenpaw-creator` 视频创作插件（PR #6284）、Chrome Extension 原生消息桥接（PR #6157）、Windows UIA 桌面自动化（PR #5187），生态插件矩阵初具规模。
- **用户体验打磨**：前端侧涌现“会话分组/文件夹”、“思考/工具折叠”、“移动端适配”、“系统托盘最小化”、“可编辑 Agent Mode”、“一键复制 Agent 配置”等高赞诉求，已有 PR 进入 Review 流程。
- **技术债显性化**：CSS 前缀不匹配（`ant-` vs `qwenpaw-`）、Langfuse Trace ID 格式错误、TUI Warming 卡死、离线 Code 预览依赖在线资源等长尾问题集中浮现，提示 v2.x 架构落地后需系统性偿还前端/桌面端技术债。

---

## 2. 版本发布
> **今日无新版本发布**。当前最新稳定版 `v2.0.0.post3`，开发分支已推进至 `2.0.1b1`（commit `52a369d9`）。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 关联 Issue | 影响面 |
|----|------|----------|------------|--------|
| **#6235** | feat(memory) | ReMe Light 索引重建改为显式维护操作；升级 `reme-ai` 至 `0.4.1.3`；Dream 任务随机错峰；完善 Embedding 配置与文档 | #6242, #6246 | 长期记忆稳定性、启动性能、运维可控性 |
| **#6250** | fix(sandbox) | 新增配置项绕过沙箱不可用时的硬编码 `ASK` 审批 | #6250 | Docker/WSL2 沙箱降级体验 |
| **#6246** | fix(memory) | 修复 `_saved_tool_refs` 导致 `recall_history` 文件名过长崩溃 | #6246 | 记忆检索稳定性 |
| **#6255** | fix(chat) | 修复 `task_tracker.py` 中 `openai.BadRequestError` 导致的聊天中断 | #6255 | 核心对话链路鲁棒性 |
| **#6264** | feat(desktop) | 支持最小化到系统托盘 | #6264 | 桌面端原生体验 |
| **#6277** | fix(observability) | 修正 Langfuse Trace ID 为 `uuid4().hex`（无连字符） | #5128, #5922 | 可观测性数据质量 |
| **#6210** | refactor(agent) | 将默认 ReAct 循环提升为 `DefaultMode`，剥离 `AgentBuilder`/`CommandHandler` 的 Gate 所有权 | #6101 | Agent 模式架构清晰化、并发语义统一 |
| **#6150** | feat(pawapp) | 引入 PawApp SDK 与 `agent-kanban` 看板插件 | — | 插件生态基础设施 |
| **#5922** | feat(observability) | Langfuse 传播 user/session/version；根 Span 用 `start_as_current_observation` | — | 多租户追踪能力 |
| **#6041** | fix(loop) | `DoomLoopGate` 豁免只读工具（如 `memory_search`），阻断误报终止 | #5906 | 循环检测精准度 |

> **整体推进度**：核心稳定性回归基本修复；Agent Mode 重构、Unified Browser、PawApp SDK 三大架构级分支并行进入 Review，预计将在 `2.0.1` 里程碑合入。

---

## 4. 社区热点（高互动 Issue/PR）

| 排名 | 标题 | 类型 | 评论/👍 | 核心诉求 | 链接 |
|------|------|------|---------|----------|------|
| 1 | **Multiple tool calls produce identical thinking output** | Bug | 13 💬 / 0 👍 | 单轮多工具调用时，每个调用的 `thinking` 块内容完全相同，破坏可解释性与调试 | [#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) |
| 2 | **v2.0.0 版本循环执行问题（写入-删除反复）** | Bug | 8 💬 / 0 👍 | 搭配 qwen3.7-plus 模型时陷入文件读写死循环，任务无法收敛 | [#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) |
| 3 | **同时开两个 subagent 导致主 agent 无限快速轮询** | Bug | 5 💬 / 0 👍 | 后台任务并发触发高频 `check_agent_task`，飞书侧无法打断 | [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) |
| 4 | **Reasoning relay repeats first thinking block across iterations** | Bug | 1 💬 / 1 👍 | AgentScope 2.0 多 ReAct 迭代时，Formatter 将首个 Thinking 复制到所有片段 | [#6282](https://github.com/agentscope-ai/QwenPaw/issues/6282) |
| 5 | **在结果呈现上需要提升（思考/工具折叠、结果优先）** | Enhancement | 1 💬 / 1 👍 | UI 层面：思考过程占满屏幕，交付结果被淹没，参考 Cursor/Claude Code 折叠交互 | [#6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) |
| 6 | **新增 ask_user_question 工具，支持 Human-in-the-Loop** | Enhancement | 1 💬 / 0 👍 | 官方工具集缺乏结构化人工介入能力，需多选题+兜底输入 | [#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274) |
| 7 | **支持禁用/自定义内置工具描述（节省 8k-10k tokens）** | Feature | 1 💬 / 0 👍 | 22 个内置工具全量注入上下文，Token 压力大，需按需加载 | [#6286](https://github.com/agentscope-ai/QwenPaw/issues/6286) |
| 8 | **Web 控制台适配移动端** | Feature | 1 💬 / 0 👍 | 移动端操作刚需，当前布局不适配 | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) |

> **热点洞察**：
> - **推理/Thinking 渲染一致性** 成为当前最高频痛点（Issue #6257, #6282），直接关联 AgentScope 2.0 新消息格式与 QwenPaw Formatter 的适配。
> - **Token 成本控制**（#6286）与 **人工介入标准化**（#6274）反映生产级落地对精细化控制的强诉求。
> - **移动端/桌面端原生能力**（托盘、缩放、移动端适配）集中爆发，提示多端统一交互框架亟待补齐。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 根因/定位 | 已有 Fix PR | 状态 |
|--------|-------|------|-----------|-------------|------|
| **P0 - 崩溃/数据丢失** | [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) | `recall_history` 触发 `OSError: File name too long` | `_SAVED_TOOL_FILE_RE` 匹配超长工具结果（如 git diff）生成过长文件名 | #6246 (已合并) | ✅ Fixed |
| **P0 - 核心链路中断** | [#6255](https://github.com/agentscope-ai/QwenPaw/issues/6255) | 聊天中报 `openai.BadRequestError: invalid_parameter_error` | `task_tracker.py` 参数构造异常 | #6255 (已合并) | ✅ Fixed |
| **P1 - 功能严重受损** | [#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) | 多工具调用共享同一 Thinking 内容 | Provider Formatter 复用首个 ThinkingBlock | **无** | 🔴 Open |
| **P1 - 死循环/资源耗尽** | [#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) | Agent 反复写入/删除文件，任务不收敛 | v2.0.0 循环检测/停止门控失效 | **无**（已关闭但未见 Fix PR） | 🟡 Closed w/o fix |
| **P1 - 并发竞态** | [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) | 双 SubAgent 触发主 Agent 高频轮询，飞书无法打断 | `check_agent_task` 缺乏节流/取消机制 | **无** | 🔴 Open |
| **P1 - 配置不生效** | [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | OpenAI 模型 `max_output_tokens` 设置无效 | 参数透传链路断裂 | **无** | 🔴 Open |
| **P2 - 体验回归** | [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) | Console 设置 Embedding 维度未传 `use_dimensions` 给 OpenAI 兼容 API | 配置字段未暴露 | **无** | 🔴 Open |
| **P2 - 逻辑误报** | [#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241) | Agent 连续轮次重复输出 + `memory_search` 死循环，框架层缺重复检测拦截 | `DoomLoopGate` 仅警告不阻断 | #6041 (已合并，豁免只读工具) | 🟡 Partially Fixed |
| **P2 - 平台兼容** | [#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252) | Linux Tauri 模式 `Ctrl+/-`/滚轮缩放失效 | WebView 快捷键未绑定 | **无** | 🔴 Open |
| **P2 - 环境假设失效** | [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Windows PATH 拼接丢失 `;`，导致子进程丢失 npm global | 字符串拼接逻辑缺陷 | **无** | 🔴 Open |
| **P3 - 离线可用性** | [#6261](https://github.com/agentscope-ai/QwenPaw/issues/6261) | 离线环境 Code 模式无法预览文件（依赖在线 CDN） | 前端资源未内联/本地化 | **无** | 🔴 Open |
| **P3 - 启动卡死** | [#6249](https://github.com/agentscope-ai/QwenPaw/issues/6249) | 源码启动 TUI 永久停留 Warming | 启动依赖未就绪/竞态 | **无** | 🔴 Open |
| **P3 - 可观测性数据脏** | [#6277](https://github.com/agentscope-ai/QwenPaw/issues/6277) | Langfuse Trace ID 含连字符被拒绝 | `uuid.uuid4()` vs `uuid.uuid4().hex` | #6277 (已合并) | ✅ Fixed |

> **关注点**：P1 级 **Thinking 重复（#6257, #6282）** 与 **并发 SubAgent 轮询（#4873）** 无 Fix PR，建议优先排期；**Windows PATH（#6239）** 影响面广（所有子进程），易被忽视但破坏力强。

---

## 6. 功能请求与路线图信号

| 需

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-07-21

---

## 1. 今日速览
- **活跃度评估：高**。过去 24 小时内 Issues 更新 39 条（新开/活跃 30，关闭 9），PR 更新 50 条（待合并 38，已合并/关闭 12），无新版本发布。
- **核心主题**：**Windows 兼容性修复**、**SOP（标准作业程序）控制平面落地**、**持久化内存子系统重构**、**安全加固（SSRF/沙箱/Landlock）**、**Agent 评估框架** 与 **OpenAI 兼容网关** 并行推进。
- **风险点**：Windows 测试缺失导致 74 个用例失败（#7462）、Landlock 沙箱锁死主进程（#9204）、Cron 任务工作目间歇性解析为根目录（#9206，S0 级）、评论卫生检查在 master 上失败阻塞 CI（#9216）。
- **里程碑信号**：v0.9.0 认证/安全/网关破坏性变更队列（#7432）与 SOP 5/5 能力达标（#8288）均有 PR 实质性推进，预计近期将进入候选发布窗口。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 项目进展（今日合并/关闭的重要 PR 与 Issue）

| 类型 | 编号 | 标题 | 核心推进内容 | 影响面 |
|------|------|------|--------------|--------|
| **PR Merged/Closed** | #8675 | **修复：OpenRouter/OpenAI 格式提供商未校验即发送畸形 tool-call 参数导致 400** | 在提供商层增加 JSON 校验与回退，彻底堵住 S1 级“空回复”通道。 | 所有 OpenAI 兼容提供商（OpenRouter, Azure, Copilot 等） |
| **PR Merged/Closed** | #8837 | **修复：历史裁剪在禁用 pruning 时仍静默触发** | 修正运行时裁剪逻辑分支，恢复用户预期的上下文保留行为。 | 运行时/守护进程，用户会话体验 |
| **PR Merged/Closed** | #9078 | **修复：串口传输非匹配响应 ID 后不同步** | 在 `SerialPeripheral::send_request` 增加缓冲区排空与重同步逻辑。 | 硬件外设/固件协议栈 |
| **PR Merged/Closed** | #8644 | **修复：ZeroCode Code 回合无可见助手输出即完成** | 修正 TUI 与运行时的完成信号判定，确保至少渲染一次助手消息。 | ZeroCode TUI |
| **Issue Closed** | #9117 | **ZeroCode Windows 启动依赖 ZEROCLAW_SOCKET** | 已通过配置默认管路路径修复，无需手动设置环境变量。 | Windows 用户开箱即用 |
| **Issue Closed** | #8664 | **ZeroCode 代码块复制包含 Markdown 围栏** | 调整复制逻辑仅提取代码内容，修复高亮残留。 | ZeroCode TUI 交互细节 |
| **Issue Closed** | #8765 / #8944 | **ZeroCode 叠加层继承终端背景 / 鼠标选择被拦截** | 两项 TUI 渲染与交互细节修复已合并。 | ZeroCode TUI 易用性 |

> **整体进度判断**：核心运行时稳定性（Windows、沙箱、内存、SOP）与开发者体验（ZeroCode、评估框架、网关）双线并进，**v0.9.0 阻断项正在收敛**，但 S0/S1 级回归仍需优先清零。

---

## 4. 社区热点（评论/反应最多的 Issues/PRs）

| 编号 | 类型 | 评论/👍 | 核心诉求与讨论焦点 | 链接 |
|------|------|---------|-------------------|------|
| **#6808** | RFC (Tracker) | 14 评论 | **Work Lanes、看板自动化、标签清理**治理级 RFC：试图用自动化替代人工分拣，降低维护负担，已进入推广期。 | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) |
| **#7462** | Bug (Windows) | 10 评论 | **Windows 11 上 74 个测试失败**（路径语义、控制台编码、Unix-only 命令），CI 仅跑 Linux 未拦截。呼吁补齐 Windows CI 作业。 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| **#3566** | Feature (A2A) | 9 评论 / 7 👍 | **原生 A2A 协议支持**：跨实例/跨框架（NanoClaw, OpenClaw）Agent 互通，属于 v0.9.0 互操作里程碑。 | [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) |
| **#8891** | Tracker (Memory) | 6 评论 | **持久化内存三平面（策策、相关性、可操作性）对齐**追踪：18 项开放任务（3 Issue + 15 PR），属于核心长期 Epic。 | [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) |
| **#7065** | Feature (Eval) | 4 评论 | **`zeroclaw eval` 评估框架**：Replay + Live 双模式、可插拔 Grader、LLM-as-Judge，衍生出 3 个 Follow-up Issue（#9226-9228）。 | [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) |

**热点洞察**：社区关注点集中在 **跨平台稳定性（Windows）**、**互操作标准（A2A）**、**长期架构治理（RFC/Tracker）** 与 **可观测/可评估能力**——符合“个人 AI 助手向企业级/多 Agent 协作演进”的战略方向。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重级 | 编号 | 标题 | 组件 | 是否有 Fix PR | 备注 |
|--------|------|------|------|---------------|------|
| **S0** | #9206 | Cron `agent` 类型任务间歇性解析 `workspace_dir` 为 `/` | runtime/daemon | ❌ 无 | **数据丢失/安全风险**，需立即排查上下文传递链路 |
| **S1** | #9204 | Landlock 沙箱将 zeroclaw 自身锁入 landlock，导致 SQLite 等内存访问失败 | security/sandbox | ❌ 无 | 继发 #5153，阻断沙箱模式可用性 |
| **S1** | #9207 | `web_fetch` 对 gzip/brotli/deflate 响应返回垃圾二进制 | tools/web_fetch | ❌ 无 | **工作流完全阻断**，需在 HTTP 客户端层统一解压 |
| **S1** | #9216 | Comment hygiene gate 在 master 失败（zeroclaw-providers 含 #8675 引用） | tooling/ci | ❌ 无 | **CI 阻塞合并**，需清理注释或调整规则 |
| **S1** | #9192 | `shared_budget` TOCTOU 竞态 + `SopEngine::finish_unwrap` panic | runtime/daemon | ❌ 无 | 并发子 Agent 场景易触发，属 #8288 SOP 达标阻断项 |
| **S2** | #7462 | Windows 7 | 74 个测试失败（路径、编码、Unix 命令） | tooling/ci | ❌ 无 | 需补 Windows CI 作业，防止回归 |
| **S2** | #8837 | 历史裁剪在禁用时仍触发 | runtime/daemon | ✅ 已修复（Closed） | 已合并修复 |
| **S2** | #9078 | 串口非匹配 ID 后不同步 | hardware/peripherals | ✅ 已修复（Closed） | 已合并修复 |
| **S2** | #8644 | ZeroCode 无输出完成回合 | zerocode/tui | ✅ 已修复（Closed） | 已合并修复 |
| **S3** | #9198 | Discord 重载后 typing indicator 卡死 | channel | ❌ 无 | 低频但影响体验 |
| **S3** | #9202 | `zeroclaw desktop` 死链接且不识别已装 AppImage | zerocode/tui | ❌ 无 | 发布/分发流程缺陷 |

> **修复优先级建议**：S0/S1 项（尤其是 #9206、#9204、#9207、#9216、#9192）应纳入**热修复分支**或**下一版本必修清单**；Windows 测试补齐（#7462）应同步进 CI 流水线。

---

## 6. 功能请求与路线图信号

| 信号来源 | 功能/方向 | 关联 PR/Issue | 纳入下一版本可能性 | 备注 |
|----------|-----------|---------------|-------------------|------|
| **Tracker #8288** | SOP 守护进程控制平面 5/5 能力达标 | #9203 (wired HTTP fan-in), #9205 (ingress adapter), #9030 (step agent policy), #8979 (gate prompts) | ⭐⭐⭐⭐⭐ **极高** | 多个 PR 已开且互为依赖，属 v0.9.0 核心交付物 |
| **Tracker #7432** | v0.9.0 认证/安全/网关/破坏性变更 | #8486 (OpenAI Chat Completions), #8879 (风险档案工具权限网格), #8713 (file_download SSRF) | ⭐⭐⭐⭐ **高** | 破坏性变更需配合迁移指南，OpenAI 网关为外部集成关键 |
| **Tracker #8891** | 持久化内存三平面对齐 | #8900 (typed classification), #8984 (write/recall 扫描), #8897 (retrieval cache) | ⭐⭐⭐ **中高** | 基础设施级，若 v0.9.0 以“记忆完备”为卖点则必入 |
| **Feature #3566** | A2A 协议原生支持 | 暂无对应 PR | ⭐⭐ **中** | 依赖网关与多 Agent 边界（#7432），可能滚动至 v0.9.x |
| **Feature #7065** | `zeroclaw eval` 评估框架 | #9223 (JUnit), #9222 (LLM-judge), #9226/9227/9228 (Follow-ups) | ⭐⭐⭐ **中高** | 诊断优先策略，核心框架已落地，仪表盘/校准为增量 |
| **RFC #6808** | Work Lanes/看板自动化/标签清理 | 无代码 PR | ⭐ **低（治理类）** | 不阻塞功能发布，但长期维护效率关键 |

**判断**：**v0.9.0 核心范围已锁定**（SOP 控制平面、Auth/Security/Gateway 破坏性变更、OpenAI 网关、内存子系统基线），A2A 与 Eval 仪表盘大概率作为 **v0.9.x 迭代增量** 交付。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点/场景 | 代表 Issue | 用户原声/推断诉求 | 满意度倾向 |
|-----------|------------|-------------------|------------|
| **Windows 原生体验断层** | #7462, #9117 | “CI 只跑 Linux，Windows 用户每次升级都在踩坑”；“ZeroCode 还要手动设环境变量才能跑” | ⚠️ **强烈不满**，视为一线阻断 |
| **沙箱/安全机制反噬** | #9204, #8713 | “开启 Landlock 连自己都锁死”；“file_download 连内网元数据服务都能访问，太危险” | ⚠️ **焦虑/不信任**，期望开箱即安全 |
| **上下文/记忆不可控** | #8837, #8891 | “明明关了裁剪却丢上下文”；“跨会话记忆到底存没存上、能不能查” | 😐 **困惑/观望**，等待持久化记忆完备 |
| **ZeroCode 交互细节粗糙** | #8664, #8765, #8944 | “复制代码带围栏”、“侧边栏背景错乱”、“鼠标选字被拦截” | 😐 **可用但不爽**，属“千刀万剐”型体验损耗 |
| **集成友好度** | #3566, #8486 | “想用 OpenAI SDK 直连 ZeroClaw”；“A2A 能不能让我家 NanoClaw 直接跟 ZeroClaw 说话” | 👍 **强烈期待**，视为生态扩展关键 |
| **可观测/可评估缺失** | #7065, #9228 | “没法在 CI 里跑 Agent 回归”；“想看 Pass@k 趋势图，别只给我一堆 JSON” | 😐 **工程化刚需**，研发/运维团队高呼 |

---

## 8. 待处理积压（长期未响应/高价值滞留）

| 编号 | 类型 | 停滞时长 | 价值/风险 | 建议动作 |
|------|------|----------|-----------|----------|
| **#7462** | Bug (Windows CI) | 41 天 | **高**：阻断 Windows 支持

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*