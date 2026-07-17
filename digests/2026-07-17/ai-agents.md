# OpenClaw 生态日报 2026-07-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-17 02:04 UTC

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

# OpenClaw 项目日报 | 2026-07-17

---

## 1. 今日速览

**整体状态：高活跃度维护期，核心稳定性问题密集修复中**  
过去 24 小时 Issues 与 PR 各 500 条更新，呈现「高吞吐、重修复」特征：新增/活跃 Issue 329 条、关闭 171 条；PR 待合并 322 条、已合并/关闭 178 条。**零版本发布**，说明项目处于补丁密集迭代期而非大版本发布窗口。社区讨论聚焦于 **2026.7.1 回归波**（网关崩溃循环、上下文统计错误、Codex 轮次卡死、cron schema 兼容性）与 **长期架构诉求**（Linux/Windows 原生应用、内存信任标记、凭据脱敏、文件系统沙箱）。维护者正通过大量小尺度「bound/fix」PR 封堵资源泄漏、超时未绑定、权限越界等隐患，整体向「生产级稳定性」迈进。

---

## 2. 版本发布

**今日无新版本发布**。当前最新稳定版为 `2026.7.1`，但该版本引入多个 P0/P1 级回归（见下文），建议生产环境用户暂停升级，等待 `2026.7.2` 或热修复版本。

---

## 3. 项目进展：今日合并/关闭的关键 PR

| PR | 类型 | 核心变更 | 影响面 | 状态 |
|----|------|----------|--------|------|
| [#104840](https://github.com/openclaw/openclaw/pull/104840) | **Fix** | QA Lab 启动诊断修复 Unicode 损坏 | 测试基建 | ✅ **已合并** |
| [#107220](https://github.com/openclaw/openclaw/pull/107220) | **Fix** | 网关启动时对遗留 memory sidecar 冲突改为自动解决而非致命报错 | 网关启动稳定性 | ✅ **已关闭**（问题已通过其他 PR 解决） |
| [#107694](https://github.com/openclaw/openclaw/pull/107694) | **Fix** | 放宽 `startupMigrationWarnings` 守卫，避免良性迁移跳过导致网关启动失败 | 网关启动稳定性 | ✅ **已关闭** |
| [#106920](https://github.com/openclaw/openclaw/pull/106920) | **Fix** | 修复 `2026.7.1` 无法重启网关 | 运维体验 | ✅ **已关闭** |
| [#96336](https://github.com/openclaw/openclaw/pull/96336) | **Security** | 强制托管状态目录权限 `0o700`，防多用户环境信息泄露 | 安全基线 | ✅ **已关闭**（后续将重开） |
| [#92172](https://github.com/openclaw/openclaw/pull/92172) | **Fix** | 飞书渠道无可见回复回退信息双语化+错误码 | 国际化/渠道体验 | ✅ **已关闭** |
| [#109513](https://github.com/openclaw/openclaw/pull/109513) | **Chore** | 清理 Codex review 早期门控的遗留 follow-up | 维护流程 | ✅ **已合并** |

> **进展小结**：今日合并/关闭 PR 以 **P0 级崩溃循环修复**、**启动守卫放宽**、**安全基线补强** 为主，集中解决 `2026.7.1` 发布后暴露的「升级即不可用」问题。架构级重构（如 `#109411` 分离外部会话与本地会话）仍在评审中。

---

## 4. 社区热点：讨论最活跃的 Issues / PRs

| 排名 | Issue/PR | 评论 | 👍 | 核心诉求 | 关联标签 |
|------|----------|------|-----|----------|----------|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) **Linux/Windows Clawdbot Apps** | 114 | 81 | **跨平台原生应用缺位**——仅有 macOS/iOS/Android，Linux/Windows 用户长期等待 | `enhancement`, `help wanted`, `P2`, `impact:ux-friction` |
| 2 | [#88312](https://github.com/openclaw/openclaw/issues/88312) **Codex app-server 轮次完成卡死** | 21 | 5 | **2026.5.27 回归**：多工具 Agent 轮次可靠复现 `"Codex stopped before confirming the turn was complete"` | `bug`, `regression`, `P1`, `impact:session-state`, `impact:message-loss` |
| 3 | [#7707](https://github.com/openclaw/openclaw/issues/7707) **Memory Trust Tagging by Source** | 17 | 0 | **内存投毒防御**：按来源（用户指令/网页抓取/第三方技能）给记忆打信任等级 | `enhancement`, `P2`, `impact:security`, `issue-rating: 🦞 diamond lobster` |
| 4 | [#104721](https://github.com/openclaw/openclaw/issues/104721) **工具结果全变 `"(see attached image)"`** | 17 | 1 | **数据丢失级回归**：文件读取返回占位符而非实际内容 | `bug`, `P0`, `impact:ux-release-blocker` ✅ **已关闭** |
| 5 | [#87744](https://github.com/openclaw/openclaw/issues/87744) **Codex-backed Telegram 轮次超时** | 15 | 3 | **2026.5.27 回归**：Telegram 会话因 `turn/completed` 永不到达而失败 | `P1`, `impact:session-state`, `impact:message-loss`, `impact:crash-loop` |
| 6 | [#91009](https://github.com/openclaw/openclaw/issues/91009) **PreToolUse hook 狂刷 CPU 进程** | 14 | 2 | **资源耗尽**：`openclaw-hooks` 短命进程并发占满 CPU，阻塞网关 RPC | `P2`, `impact:crash-loop` |
| 7 | [#10659](https://github.com/openclaw/openclaw/issues/10659) **Masked Secrets：Agent 用 Key 不见 Key** | 13 | 4 | **凭据安全**：防止 Prompt Injection 窃取 `~/.openclaw/.env` 明文密钥 | `enhancement`, `P1`, `impact:security`, `impact:auth-provider` |
| 8 | [#94518](https://github.com/openclaw/openclaw/issues/94518) **DeepSeek 缓存命中率 <10%** | 11 | 10 | **6.x 升级后边界感知缓存破坏前缀匹配**，成本激增 | `P1`, `impact:auth-provider` ✅ **已关闭** |
| 9 | [#108182](https://github.com/openclaw/openclaw/issues/108182) **Control UI 变差** | 9 | 1 | **导航缺失**：Skill Proposals、Dreaming 等页面入口消失 | `regression`, `P1`, `impact:ux-friction` |
| 10 | [#107464](https://github.com/openclaw/openclaw/issues/107464) **Telegram 过早释放 Codex 轮次** | 5 | 1 | **message_tool_only 模式下**可见消息发送前触发轮次释放 | `P1`, `impact:session-state`, `impact:message-loss` |

> **热点洞察**：Top 1 长期开放（半年+），反映 **桌面端原生支持** 是社区最大未被满足诉求；Top 2/5/7/10 均指向 **Codex 集成链路的稳定性**；安全类（信任标记、凭据脱敏、沙箱）虽评论不多但 `👍` 与 `diamond lobster` 评级高，属于 **企业级采用前置条件**。

---

## 5. Bug 与稳定性：今日报告的关键缺陷（按严重度）

| 严重度 | Issue | 标题 | 核心现象 | 是否有 Fix PR | 关键标签 |
|--------|-------|------|----------|---------------|----------|
| **P0 / Release Blocker** | [#104721](https://github.com/openclaw/openclaw/issues/104721) | 所有工具结果返回 `"(see attached image)"` 字面量 | 数据层面丢失，非显示问题 | ✅ **已关闭**（推测已修） | `bug`, `P0`, `impact:ux-release-blocker` |
| **P0 / Crash Loop** | [#107220](https://github.com/openclaw/openclaw/issues/107220) | 网关启动崩溃循环：遗留 memory sidecar 冲突视为致命 | 升级 `2026.6.11 → 2026.7.1` 即复现 | ✅ **已关闭**（`#96336` 相关） | `P0`, `impact:ux-release-blocker`, `impact:crash-loop` |
| **P0 / Crash Loop** | [#107694](https://github.com/openclaw/openclaw/issues/107694) | 严格 `startupMigrationWarnings` 导致良性迁移跳过也拒绝启动 | 网关无法启动 | ✅ **已关闭** | `P0`, `impact:ux-release-blocker`, `impact:crash-loop` |
| **P1 / Regression** | [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex app-server 轮次完成卡死 | `2026.5.27` 起多工具轮次 100% 失败 | ❌ 无关联 PR | `regression`, `P1`, `impact:session-state`, `impact:message-loss` |
| **P1 / Regression** | [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex-backed Telegram 轮次反复超时 | `turn/completed` 永不触达 | ❌ 无关联 PR | `P1`, `impact:crash-loop` |
| **P1 / Regression** | [#108075](https://github.com/openclaw/openclaw/issues/108075) | `2026.7.1` Agent 回复前失败：provider 拒绝 schema/payload | 全量工具调用被拒 | ❌ 无关联 PR | `bug`, `regression` |
| **P1 / Regression** | [#108238](https://github.com/openclaw/openclaw/issues/108238) | 上下文用量把累计 `cacheRead` 算进 `totalTokens` 触发误压缩 | 实际 transcript 很小却判定超限 | ❌ 无关联 PR | `bug:behavior`, `P1`, `impact:session-state` |
| **P1 / Regression** | [#108473](https://github.com/openclaw/openclaw/issues/108473) | cron tool schema 破坏 llama.cpp tool-calling | 未锚定 regex `pattern: "\S"` | ❌ 无关联 PR（`#107449` 同源） | `bug`, `regression` |
| **P1 / Data Loss** | [#95833](https://github.com/openclaw/openclaw/issues/95833) | Subagent abort-settle 不释放 `.jsonl.lock` 导致会话永久卡死 | 锁文件残留，后续消息全报错 | ✅ **已关闭** | `P1`, `impact:session-state`, `impact:message-loss` |
| **P1 / Resource Leak** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/Tool 子进程泄漏成僵尸，运行时退化 | `openclaw-hooks`、`bash`、`codex` 僵尸累积 | ❌ 无关联 PR | `bug`, `regression` |
| **P2 / UX Regression** | [#108182](https://github.com/openclaw/openclaw/issues/108182) | Control UI 导航缺失 | Skill Proposals、Dreaming 入口消失 | ❌ 无关联 PR | `regression`, `P1`, `impact:ux-f

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 | 2026-07-17

---

## 1. 生态全景

当前生态呈现**「头部项目密集修复回归、腰部项目加速架构重构、尾部项目进入维护/静默期」**的三层态势。OpenClaw、Hermes Agent、ZeroClaw、CoPaw 四大头部项目单日 PR+Issue 更新均超 80 条，集中解决 2026 年上半年大版本发布引入的 P0 级回归（网关崩溃、会话状态丢失、工具链死锁）；IronClaw、NanoClaw、LobsterAI、Moltis 等腰部项目以「架构收敛 + 模型生态扩展」为主线推进插件化、多供应商降级、外部 Agent 集成等结构性能力；PicoClaw、ZeptoClaw、TinyClaw 处于低频维护或文档治理状态。整体来看，**生产级稳定性**已取代「新功能竞赛」成为全生态共识的首要交付目标。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新增/关闭) | PRs (待合并/合并) | Release | 健康度评估 | 核心状态关键词 |
|------|-------------------|------------------|---------|------------|----------------|
| **OpenClaw** | 329 / 171 | 322 / 178 | 无 | 🟢 **高活跃·修复期** | 回归波密集修复、生产级稳定性冲刺 |
| **Hermes Agent** | 42 / 8 | 44 / 6 | 无 | 🟢 **高活跃·修复期** | 本地模型大Prompt卡顿、MCP保活、多Profile会话丢失 |
| **ZeroClaw** | 22 / 2 | 46 / 4 | 无 | 🟢 **高活跃·重构期** | Channel Plugin WASM堆栈、Provider统一、RFC管道饱和 |
| **CoPaw/QwenPaw** | 43 / - | 46 / 25 | 无 | 🟢 **高活跃·热修复期** | v2.0回归爆发：Win权限、会话一致性、Docker时区、流式渲染 |
| **IronClaw** | 15 / 3 | 28 / 11 | 无 | 🟡 **高活跃·架构收敛期** | Reborn拆解、统一扩展运行时、WebUI v2、CI治理体系 |
| **NanoClaw** | 3 / 1 | 16 / 3 | 无 | 🟡 **高活跃·功能落地期** | 多渠道适配器隔离、LLM降级容灾、Signal容器化、安全加固 |
| **LobsterAI** | 3 / - | 14 / 0 | RC分支合并 | 🟡 **高活跃·发布冻结期** | Cowork稳定化、Win原生标题栏、文件夹上下文、社区UX积压 |
| **Moltis** | 0 / 0 | 0 / 3 | **Daily 20260716.01** | 🟡 **内驱高频·交付稳健** | 外部Agent元数据同步、Kimi K3接入、Web降级诚实展示 |
| **NanoBot** | 1 / 0 | 11 / 1 | 无 | 🟡 **冲刺修复·零积压** | 内存泄漏LRU、Docker去特权、Provider编码清洗、取消信号判别 |
| **PicoClaw** | 1 / 1 | 9 / 0 | 无 | 🔴 **低频维护·依赖堆积** | 核心PR停滞35天、ARM64发布缺失、NanoKVM兼容性待解 |
| **ZeptoClaw** | 5 / 5 | 0 / 0 | 无 | ⚪ **文档治理·静默期** | 安全Issue结构化分类、LLM增强数据集构建 |
| **TinyClaw** | 0 / 0 | 0 / 0 | 无 | ⚪ **无活动** | — |

> **注**：健康度评估维度 = 代码吞吐量 × 修复/重构比 × 社区响应速度 × 发布节奏可预测性。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类头部对比 (Hermes/ZeroClaw/CoPaw) | 定位结论 |
|------|----------|----------------------------------------|----------|
| **社区规模** | 单日 500+ 更新量、Issue #75 积累 114 评论/81 👍（半年+） | Hermes 单日 100 更新、ZeroClaw 74、CoPaw 89 | **生态「风向标」与「压力测试场」**：最大规模社区暴露最全回归面，修复方案常被下游参考 |
| **技术路线** | 网关 + Sidecar + Memory + Codex/Tool 多运行时编排 | Hermes：CLI↔Telegram 跨平台会话共享；ZeroClaw：WASM 插件化通道；CoPaw：多 Agent 并发编排 | **「重运行时编排、重生态兼容」**：定位为企业级部署的标准实现，而非极客玩具 |
| **优势** | 1. 最大规模实战验证的稳定性基线 2. Codex/工具链集成最深 3. 安全基线（信任标记、凭据脱敏、沙箱）最完备 | Hermes 在跨平台会话统一；ZeroClaw 在插件沙箱隔离；CoPaw 在多 Agent 编排 | **「生产级基准实现」**：其他项目常以「兼容 OpenClaw 协议/配置」为集成目标 |
| **短板** | Linux/Windows 原生应用缺位（社区最大诉求）、UI 导航回归、Codex 轮次稳定性仍有长尾 | Hermes/ZeroClaw 已有跨平台桌面端；IronClaw 推进原生服务安装 | **桌面端分发能力为短板**，影响个人开发者采纳曲线 |

---

## 4. 共同关注的技术方向（多项目共振信号）

| 技术方向 | 涉及项目 | 具体诉求/动作 | 成熟度 |
|----------|----------|---------------|--------|
| **会话/记忆状态的一致性与持久化** | OpenClaw(#108238,#95833)、Hermes(#65384,#41904)、CoPaw(#6148,#6047)、ZeroClaw(#9046,#9048)、LobsterAI(#2289,#2292) | 修复上下文统计错误、锁文件残留、会话ID复用、Memory/History 分层、Compaction 重试泄漏 | 🟡 **攻关中**，多项目仍有 P1 级未闭环 |
| **多模型供应商容灾与自动降级** | NanoClaw(#3069,#3057)、IronClaw(#5937 Provider统一)、Moltis(Kimi K3接入)、ZeroClaw(#9104 Grok CLI) | Claude→Codex 安装级/Group级双层降级、Provider 架构统一、新模型首发即接入、本地 CLI Provider | 🟢 **落地加速**，NanoClaw 设计文档最完备 |
| **插件/通道沙箱化与 WASM 运行时** | ZeroClaw(#8852堆栈)、IronClaw(#6116 统一扩展运行时)、NanoClaw(#2913 WhatsApp隔离)、OpenClaw(文件系统沙箱诉求) | WASM 插件运行时、Webhook/WS/TCP 出站能力、镜像内置通道、凭证平权、最小权限容器 | 🟡 **架构定型，工程化进行中** |
| **本地/自托管模型推理链路优化** | Hermes(#61265 大Prompt卡顿)、ZeroClaw(#9105 ARM冷启动)、Moltis(推理参数原生化)、OpenClaw(上下文压缩) | Prompt 截断/分页、超时兜底、ARM 架构适配、推理参数标准化、缓存命中率恢复 | 🟡 **痛点明确，方案碎片化** |
| **安全基线：凭据脱敏、信任标记、供应链签名** | OpenClaw(#10659,#7707,#96336)、ZeroClaw(#9101 三重签名整合)、NanoBot(#4955 Docker去特权)、NanoClaw(#3065 Webhook认证) | Masked Secrets、Memory Trust Tagging、单一签名故事、容器最小权限、Webhook 回环认证 | 🟢 **企业级采纳前置条件，共识度高** |
| **跨平台原生桌面/后台服务分发** | OpenClaw(#75 Linux/Win)、IronClaw(#6172 launchd/systemd)、CoPaw(#6161 Win UAC)、Hermes(#45779 多网关标签) | 原生安装包、后台服务管理、免管理员启动、多后端标签页管理 | 🟡 **从「能跑」向「好装/好管」演进** |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|----------|----------|------------------|
| **OpenClaw** | 企业级网关、多运行时编排、Codex 深度集成、安全合规 | 企业内部部署、平台工程师、需要审计/合规的团队 | **Centeral Gateway + Sidecar 模式**，强中心化状态管理，插件通过 Sidecar 接入 |
| **Hermes Agent** | 跨平台会话统一、本地模型优先、多网关管理、桌面端原生 | 个人高级用户、多设备开发者、本地推理爱好者 | **Gateway + 多前端**，强调 CLI/Telegram/Discord 会话上下文共享，Desktop 多标签管理多后端 |
| **ZeroClaw** | WASM 插件化通道、A2A 协议、Provider 统一、供应链安全 | 平台构

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-07-17

> 数据范围：2026-07-16 至 2026-07-17 | 数据来源：GitHub API (HKUDS/nanobot)

---

## 1. 今日速览
- **活跃度评级：高** —— 单日提交 11 个新 PR、1 个新 Issue，且全部集中在 2026-07-16，显示核心团队正在进行高密度的冲刺式开发。
- **核心主题：** 稳定性与安全性加固占主导（7/11 PR 标记 `priority: p1`），涵盖会话内存泄漏、Docker 默认配置加固、Provider 编码异常、取消信号泄露、WebUI 子代理可见性丢失等生产级阻塞问题。
- **交付节奏：** 无新版本发布，但 1 个文档类 PR 已合并（#4950），其余 11 个 PR 均处于代码审查阶段，预计将在近期合并并汇聚至下一个补丁版本。
- **社区信号：** 新增 Issue #4948 直接关联 PR #4954，形成“报告-修复”闭环；外部贡献者 PeterDaveHello 提交繁体中文优化（#4958），社区协作氛围良好。
- **技术债偿还：** 会话缓存上限（LRU 128 条）、消息持久化上限（2000 条）、UTF-16 代理项清洗等长期隐患集中落地，体现项目进入“强化期”。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 项目进展

| PR | 类型 | 状态 | 核心推进内容 | 对项目里程碑的意义 |
|----|------|------|--------------|-------------------|
| [#4950](https://github.com/HKUDS/nanobot/pull/4950) | docs | **已合并** | README 更新：明确项目现由开源社区协作维护 | 正式对外确立社区治理地位，利于吸引新贡献者 |
| [#4957](https://github.com/HKUDS/nanobot/pull/4957) | bug/perf | 审查中 | `SessionManager` 引入 128-entry LRU + weak overflow 缓存，修复长期运行内存无限增长 | 解决生产环境 OOM 风险，属核心基础设施级修复 |
| [#4956](https://github.com/HKUDS/nanobot/pull/4956) | bug/perf | 审查中 | 持久化边界强制截断 2000 条消息，覆盖 SDK 旁路写入路径 | 防止会话文件膨胀导致启动缓慢/磁盘耗尽 |
| [#4955](https://github.com/HKUDS/nanobot/pull/4955) | security | 审查中 | 移除默认 Compose 的 `SYS_ADMIN`/unconfined seccomp，新增 `docker-compose.bwrap.yml` 供沙箱模式显式启用 | 大幅降低容器逃逸攻击面，符合最小权限原则 |
| [#4954](https://github.com/HKUDS/nanobot/pull/4954) | bug/webui | 审查中 | 子代理完成触发的“迟到 system turn”继承 WebUI delivery metadata，恢复 WebSocket 可见性 | 直接修复 #4948，恢复多轮子代理场景下的用户感知连续性 |
| [#4960](https://github.com/HKUDS/nanobot/pull/4960) | bug | 审查中 | 引入 `task_is_cancelling()` 区分真实取消与 MCP/AnyIO 泄露的 `CancelledError`，避免静默吞噬 | 提升 Agent 循环健壮性，减少难以复现的“幽灵中止” |
| [#4952](https://github.com/HKUDS/nanobot/pull/4952) | bug/provider | 审查中 | Provider 请求边界清洗 UTF-16 surrogate，修复 Emoji 密集内容导致的 `UnicodeEncodeError` | 消除多模态/富文本场景下的间歇性请求失败 |
| [#4959](https://github.com/HKUDS/nanobot/pull/4959) | bug/provider | 审查中 | 重试延迟统一 +1s，缓解“请求限额触顶即重试”导致的连锁 429 | 改善高并发/速率受限模型的可用性 |
| [#4953](https://github.com/HKUDS/nanobot/pull/4953) | feat/webui | 审查中 | 原生文件夹选择器桥接：loopback + tab-scoped token，凭证不落 URL | 增强 WebUI 与原生宿主集成安全性，为桌面端分发铺路 |
| [#4951](https://github.com/HKUDS/nanobot/pull/4951) | feat/web | 审查中 | 新增 Nimble 搜索提供商，统一 REST 适配层 | 扩展联网检索来源，降低单一提供商依赖风险 |
| [#4937](https://github.com/HKUDS/nanobot/pull/4937) | feat/ci | 审查中 | 一键部署 Render Blueprint（Gateway + WebUI 单服务，含持久化） | 降低生产化门槛，支撑“开箱即用”云端分发 |
| [#4958](https://github.com/HKUDS/nanobot/pull/4958) | i18n | 审查中 | 繁体中文 (zh-TW) 翻译质量全面修正 | 完善繁中用户体验，响应社区本地化需求 |

> **合并统计**：1 merged / 11 open。核心修复类 PR（p1）占比 64%，显示维护者优先清理技术债与阻塞性缺陷。

---

## 4. 社区热点

| 标的 | 互动指标 | 核心诉求分析 |
|------|----------|--------------|
| **Issue [#4948](https://github.com/HKUDS/nanobot/issues/4948)** | 👍 0 / 💬 0（刚创建） | **WebUI 子代理“隐身”Bug**：子代理在主轮次注入上限后完成，触发新 system turn 但未继承 WebUI delivery lifecycle，导致前端无法感知后续进度/结果。已有对应修复 PR #4954，形成快速响应闭环。 |
| **PR [#4955](https://github.com/HKUDS/nanobot/pull/4955)** | 👍 0 / 💬 0 | **Docker 安全基线提升**：移除默认特权能力，提供显式加固路径。虽无讨论，但涉及供应链安全，属“静默高关注”类。 |
| **PR [#4937](https://github.com/HKUDS/nanobot/pull/4937)** | 👍 0 / 💬 0（跨 3 天） | **一键云部署**：引入 Render Blueprint，降低非 Kubernetes 用户托管门槛。CC @Re-bin 审查，显示核心维护者重视分发体验。 |

> **趋势**：讨论集中在“生产就绪”（安全、稳定性、部署）而非新功能探讨，符合项目成熟期特征。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 现象 | 影响面 | 修复状态 |
|--------|----------|------|--------|----------|
| **P0/阻塞** | [#4948](https://github.com/HKUDS/nanobot/issues/4948) / [#4954](https://github.com/HKUDS/nanobot/pull/4954) | 子代理迟到完成导致 WebUI 完全失去可见性 | 所有使用子代理且触及注入上限的 WebUI 会话 | **PR 已提交，待审查合并** |
| **P1/严重** | [#4957](https://github.com/HKUDS/nanobot/pull/4957) | `SessionManager._cache` 无上限增长 → OOM | 长期运行的网关/服务端实例 | **PR 已提交，LRU+weak ref 方案** |
| **P1/严重** | [#4956](https://github.com/HKUDS/nanobot/pull/4956) | 持久化层未强制截断 → 会话文件无限膨胀 | 所有启用持久化的部署 | **PR 已提交，边界截断+回归测试** |
| **P1/严重** | [#4955](https://github.com/HKUDS/nanobot/pull/4955) | 默认 Compose 授予 `SYS_ADMIN` + unconfined seccomp | 容器逃逸攻击面 | **PR 已提交，默认去特权+可选 bwrap** |
| **P1/严重** | [#4960](https://github.com/HKUDS/nanobot/pull/4960) | MCP/AnyIO 泄露 `CancelledError` 被静默吞噬 → Agent 异常中止 | 使用 MCP 工具链的所有场景 | **PR 已提交，引入判别 helper** |
| **P1/严重** | [#4952](https://github.com/HKUDS/nanobot/pull/4952) | Emoji/UTF-16 surrogate 导致 Provider 请求 `UnicodeEncodeError` | 多语言/富文本/HTML 内容场景 | **PR 已提交，边界清洗** |
| **P2/一般** | [#4959](https://github.com/HKUDS/nanobot/pull/4959) | 速率限制重试无抖动 → 连锁 429 | 高并发/受限模型调用 | **PR 已提交，+1s 抖动** |

> **整体判断**：今日无未修复的 P0 暴露在外，所有已知严重缺陷均有对应 PR 进入审查管线，稳定性趋势向好。

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR | 纳入下一版本概率 | 备注 |
|------|----------|---------|------------------|------|
| 社区贡献 | **Nimble 搜索提供商** | [#4951](https://github.com/HKUDS/nanobot/pull/4951) | ⭐⭐⭐⭐⭐ | 适配层成熟，测试通过即可合并 |
| 核心团队 | **一键 Render 部署** | [#4937](https://github.com/HKUDS/nanobot/pull/4937) | ⭐⭐⭐⭐ | 文档与 Blueprint 就绪，待 CI 验证 |
| 核心团队 | **原生文件夹选择器桥接** | [#4953](https://github.com/HKUDS/nanobot/pull/4953) | ⭐⭐⭐ | 面向桌面端分发，优先级 p2 |
| 外部贡献 | **繁体中文翻译修正** | [#4958](https://github.com/HKUDS/nanobot/pull/4958) | ⭐⭐⭐⭐⭐ | 纯 i18n，低风险，极大概率合并 |

> **路线图推测**：下一版本（预计 vX.Y.Z+1）将以 **“稳定性补丁 + 部署体验增强”** 为主题，新功能仅限于低风险的 Provider 扩展与 i18n。

---

## 7. 用户反馈摘要
> 过去 24 小时 Issue 评论区无新增用户对话，主要反馈隐含在 PR 描述与 Issue 再现步骤中：
- **痛点 1**：长会话内存泄漏（开发者在 #4957 描述中明确指出 `_cache` 无上限）
- **痛点 2**：子代理“隐身”导致 WebUI 体验断裂（#4948 详细复现路径）
- **痛点 3**：Docker 默认配置过于宽松，生产上线需手动加固（#4955 动机）
- **满意点**：社区响应速度快——Issue 创建同日即有针对性修复 PR（#4948 → #4954）

---

## 8. 待处理积压提醒
> 以下长期未响应/跨周期滚动的重要项，建议维护者在本周内过筛：

| 标的 | 创建时间 | 停滞天数 | 关注理由 |
|------|----------|----------|----------|
| 无明显积压 | — | — | 今日新增 12 项全部为当日创建，无遗留 PR/Issue 超过 7 天无动态。维护者保持了极佳的“零积压”节奏。 |

---

### 📌 维护者行动建议
1. **优先合并 P1 修复链**：#4957 / #4956 / #4955 / #4960 / #4952 / #4954 — 共同构成下一补丁版本的稳定性基石。
2. **同步审查低风险增强**：#4951 / #4958 / #4953 可并行通过，快速释放社区贡献价值。
3. **Render Blueprint (#4937)** 需确认 CI/CD 流水线在 Render 环境的端到端验证通过后再合并。
4. **版本规划**：建议本周内切 `vX.Y.(Z+1)-rc.1`， changelog 聚焦 “Security Hardening / Memory Safety / WebUI Reliability”。

---

*报告生成时间：2026-07-17 06:00 UTC | 下次更新：2026-07-18 同一时间*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-07-17

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时内 **50 条 Issue 更新**（42 个新增/活跃，8 个关闭）与 **50 条 PR 更新**（44 个待合并，6 个已合并/关闭），无新版本发布。项目处于密集的迭代修复与功能扩展期。
- **核心矛盾集中在**：本地/自托管模型的超大 Prompt 导致卡顿（#61265）、MCP 长连接保活机制 O(tool-count) 超时（#65787）、Desktop 多 Profile 会话状态丢失（#65384）、Windows 环境下的进程残留与启动弹窗（#65935, #61183）、以及技术债偿还（Kanban DB 卫士、cron 会话隔离、网关内存监控缺失）。
- **社区强诉求**：Claude 订阅用户期望复用 OAuth 而非双付费（#25267，41 👍），跨平台（CLI↔Telegram）会话上下文共享（#4335），多网关并发管理（#45779）。
- **合并/关闭 PR 6 个**，主要覆盖：内存泄漏修复、Dashboard WebSocket 回归、认证插件被误禁用、Windows 子进程继承环境变量导致自动重启失败等阻塞性问题。
- **整体健康度**：Issue 与 PR 数量持平，关闭率约 12%，说明维护团队正在高强度清理积压与回归，但新增缺陷与功能需求涌入速度仍快于消化速度，积压风险上升。

---

## 2. 版本发布

> 今日无新版本发布。

---

## 3. 项目进展（今日合并/关闭的关键 PR 与 Issue）

| # | 类型 | 标题 | 影响范围 | 状态 | 链接 |
|---|------|------|----------|------|------|
| #53222 | **Bug Fix** | `fix(memory): gate auto recall + scrub inline-echoed recall block` | 修复外部渠道（Telegram/Discord 等）收到内部 `<memory-context>` 回显块的泄露问题；双层防护：入站注入控制 + 出站流包含 | **Closed (Merged)** | [PR #53222](https://github.com/NousResearch/hermes-agent/pull/53222) |
| #61284 | **Bug Fix** | `Dashboard chat sessions fail to render due to recent WebSocket regression` | Dashboard 切换会话时 PTY 终端无输出、UI 不刷新；根因为 WebSocket 静默失败 | **Closed** | [Issue #61284](https://github.com/NousResearch/hermes-agent/issues/61284) |
| #41904 | **Bug Fix** | `Codex app-server runtime loses thread context across turns` | `codex_app_server` 运行时每条消息新建线程，导致多轮对话丢失工作上下文 | **Closed** | [Issue #41904](https://github.com/NousResearch/hermes-agent/issues/41904) |
| #52470 | **Bug Fix** | `Dashboard auto-restart silently fails — _spawn_hermes_action inherits _HERMES_GATEWAY=1` | 子进程继承环境变量导致网关自检失败，静默重启失效 | **Closed** | [Issue #52470](https://github.com/NousResearch/hermes-agent/issues/52470) |
| #54489 | **Bug Fix** | `hermes setup disables basic plugin → dashboard auth fails silently on non-loopback bind` | 向导误将 `basic` 插件加入禁用列表，导致 0.0.0.0 绑定时认证失效 | **Closed** | [Issue #54489](https://github.com/NousResearch/hermes-agent/issues/54489) |
| #66022 | **Feature (Duplicate)** | `feat: /branch should open a new thread on Discord/Telegram/Slack` | 重复提交，已关闭；原需求为 `/branch` 在支持线程的平台另开线程而非复用 | **Closed (Duplicate)** | [Issue #66022](https://github.com/NousResearch/hermes-agent/issues/66022) |

**进展评估**：今日合并/关闭的 6 项均为 **P2 级阻塞性回归或安全边界问题**，覆盖 Dashboard、Gateway、认证、Codex 运行时、内存泄漏五大核心路径。技术债偿还（如 #53222 双层防护）质量较高，但新增 PR 多为“修补式”而非架构级重构，整体向前迈进约 **1 个 Sprint 的修复量级**。

---

## 4. 社区热点（高互动 Issue/PR）

| # | 类型 | 标题 | 互动 | 核心诉求 | 链接 |
|---|------|------|------|----------|------|
| #25267 | **Feature** | Claude Agent SDK model provider with subscription OAuth (Codex-style) | 41 👍, 11 评论 | **复用 Claude 订阅 OAuth**，避免“订阅+API 双付费”；期望像 Codex 一样走 Anthropic 官方 SDK 的订阅通道 | [Issue #25267](https://github.com/NousResearch/hermes-agent/issues/25267) |
| #61265 | **Bug** | Hermes sends extremely large prompts to local OpenAI-compatible models, causing multi-minute stalls | 6 评论, 1 👍 | 本地模型（Ollama/vLLM/Llama.cpp）收到超大 Prompt 导致分钟级卡顿，跨模型规模复现；怀疑上下文构建未截断或重复注入 | [Issue #61265](https://github.com/NousResearch/hermes-agent/issues/61265) |
| #4335 | **Feature** | Cross-platform session context sharing (CLI ↔ Telegram) | 6 评论, 1 👍 | 网关架构下各平台会话隔离，用户期望 CLI 与 Telegram 共享上下文/历史，实现真正“跨设备无缝” | [Issue #4335](https://github.com/NousResearch/hermes-agent/issues/4335) |
| #45779 | **Feature** | Multi-gateway connections with per-gateway tabs in Desktop | 4 👍, 4 评论 | 同时连接多个远程 `hermes serve` 后端（VPS/家庭服务器/Mac Mini），Desktop 以标签页形式管理 | [Issue #45779](https://github.com/NousResearch/hermes-agent/issues/45779) |
| #65787 | **Bug** | MCP keepalive uses list_tools() (O(tool-count)) — guaranteed timeout + reconnect loop on large servers | 4 评论 | 保活调用 `list_tools()` 成本随工具数线性增长，大型 MCP Server 必超时（30s 硬编码），引发重连风暴 | [Issue #65787](https://github.com/NousResearch/hermes-agent/issues/65787) |
| #65384 | **Bug** | Desktop App creates new session on every message when using non-default profile via remote hermes serve backend | 4 评论 | 非默认 Profile（如 "coder"）每条消息新建会话 `history=0`，默认 Profile 正常；远程后端场景专有 | [Issue #65384](https://github.com/NousResearch/hermes-agent/issues/65384) |

**热点分析**：
- **商业化压力显性化**：#25267 高赞揭示“订阅制用户被迫双付费”是当前最大采用障碍之一，官方若不提供 OAuth 适配，用户将流向 Codex/Claude Code 等原生方案。
- **本地推理链路脆弱**：#61265 与 #65787 同指向“大上下文/大工具集下的超时与 OOM”，说明当前架构未针对长上下文、大工具集做流控与分页。
- **多设备/多后端成刚需**：#4335、#45779、#65384 合力指向 **“会话状态统一与多网关管理”** 为下一阶段核心产品方向。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | # | 标题 | 关键症状 | 是否有 Fix PR | 链接 |
|--------|---|------|----------|---------------|------|
| **P0 (生产阻塞)** | #65787 | MCP keepalive O(tool-count) timeout → reconnect storm | 大型 MCP Server 必现 30s 超时，重连风暴导致不可用 | **无** | [Issue #65787](https://github.com/NousResearch/hermes-agent/issues/65787) |
| **P0** | #61265 | Extremely large prompts → multi-minute stalls on local models | 所有本地 OpenAI-compat 模型分钟级卡顿，跨规模复现 | **无** | [Issue #61265](https://github.com/NousResearch/hermes-agent/issues/61265) |
| **P1 (核心功能失效)** | #65384 | Desktop non-default profile → new session every message | 远程后端 + 非默认 Profile 会话状态全丢 | **无** | [Issue #65384](https://github.com/NousResearch/hermes-agent/issues/65384) |
| **P1** | #65746 | MoA/local calls crash after 30s: cannot convert float infinity to integer | Mixture of Agents 非流式调用 30s 心跳触发 `inf` 转整数崩溃 | **无** | [Issue #65746](https://github.com/NousResearch/hermes-agent/issues/65746) |
| **P1** | #53002 | Z.ai 429/code 1305 persists on chat/completions path | 仅修复了 Anthropic 适配器，OpenAI 路径仍复现 | **无** | [Issue #53002](https://github.com/NousResearch/hermes-agent/issues/53002) |
| **P1** | #58345 | xAI grok-4.3 drops optional multiline string args from MCP tool calls | AgentMail 发空邮件；文档推荐组合受影响 | **无** | [Issue #58345](https://github.com/NousResearch/hermes-agent/issues/58345) |
| **P2 (退化/兼容性)** | #66019 | `hermes -z` oneshot ignores `terminal.backend` → sandbox bypass | 一键运行模式静默绕过 SSH/Docker/Daytona/Modal 沙箱 | **无** | [Issue #66019](https://github.com/NousResearch/hermes-agent/issues/66019) |
| **P2** | #65854 | Uninstall can delete other packages from shared Python folder | 卸载误删共享 site-packages 其它包 | **无** | [Issue #65854](https://github.com/NousResearch/hermes-agent/issues/65854) |
| **P2** | #65650 | `/model` picker ~5s slow when custom providers have discover_models enabled | 启动时顺序拉取每个自定义端点 `/v1/models` | **无** | [Issue #65650](https://github.com/NousResearch/hermes-agent/issues/65650) |
| **P2** | #66008 | Desktop "Read aloud" times out on long replies (15s fetch timeout) | 长回复 TTS 合成 >15s 失败，疑似回归 | **无** | [Issue #66008](https://github.com/NousResearch/hermes-agent/issues/66008) |

**已有 Fix PR 的关键缺陷**：
- #66039 **Fix OOM from MCP poll loop swallowing real TimeoutError** → 直接修复 #65787 同根因（poll loop 误吞 `TimeoutError` 导致内存泄漏）

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-07-17

> **数据范围**：2026-07-16 至 2026-07-17 (UTC)  
> **数据源**：GitHub Issues / PRs / Releases 实时同步

---

## 1. 今日速览
- **整体活跃度：中等偏低** —— 过去 24 小时无新版本发布，**0 个 PR 合并**，代码库处于“依赖更新堆秦 + 长期 PR 待审”状态。
- **Issue 动态**：1 个新增 Bug (#3260) 已快速关闭（缺少 ARM64 发布产物），1 个旧 Bug (#3195) 仍在排查中（NanoKVM 上 OpenAI 兼容性）。
- **PR 队列**：9 个待合并 PR，其中 **6 个为 Dependabot 自动依赖升级**，2 个为功能型长期 PR (#3118, #3115)，1 个为新增繁体中文本地化 (#3261)。
- **维护信号**：核心维护者近期未直接合并代码，主要精力可能集中在离线/内部版本或 NanoKVM 集成调试，社区贡献（本地化、依赖更新）成为当前推进主力。

---

## 2. 版本发布
> **无新版本发布**  
> 当前最新稳定版仍为 `0.3.1` (Build: 2026-07-03)，下一版本里程碑尚未公开。

---

## 3. 项目进展
| PR | 类型 | 状态 | 核心变更 | 进展评估 |
|----|------|------|----------|----------|
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | ✨ 新增/本地化 | **Open** | 新增 `zh-TW` 语言包，统一 WebUI 与文档术语（台湾用语） | 社区贡献，待 Review 合入，可提升繁中用户体验 |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | ✨ 功能/架构 | **Open (stale)** | `picoclaw agent` 新增 `--remote ws://...` 模式，支持远程 WebSocket 连接 | 设计完整，含文档与测试，**阻塞点：需核心维护者审核架构影响** |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | 🐞 Bugfix | **Open (stale)** | 修复通用工具输出中 `data:image/...;base64` 被误判为媒体附件导致会话历史损坏 | 修复关键数据完整性问题，**建议优先合并** |
| [#3235~#3238](https://github.com/sipeed/picoclaw/pull/3235) | 🔧 依赖升级 | **Open** | AWS SDK Go v2, golang.org/x/sync, GitHub Copilot SDK, pion/rtp 等小版本升级 | 例行维护，CI 通过后可批量合入 |
| [#3262, #3263](https://github.com/sipeed/picoclaw/pull/3262) | 🔧 CI 升级 | **Open** | `actions/setup-go` 6→7, `actions/setup-node` 6→7 (Breaking: Node 20+ 默认) | 需验证构建矩阵兼容性，建议配合依赖 PR 一并处理 |

> **整体进度**：核心功能推进 **停滞**（0 merged），社区维护类 PR **积压 9 个**，建议安排例行 “PR 梳理日” 清理 Dependabot 与 stale 标签。

---

## 4. 社区热点
| 排名 | 对象 | 互动量 | 核心诉求 |
|------|------|--------|----------|
| 1 | **Issue [#3195](https://github.com/sipeed/picoclaw/issues/3195)** | 💬 3 条评论 | **NanoKVM 2.4.0 集成场景下，默认配置无法调用 OpenAI GPT（疑似 gpt-5.4 模型名/协议不匹配）**，用户期望官方提供开箱即用的 NanoKVM 配置模板或文档修正。 |
| 2 | **PR [#3261](https://github.com/sipeed/picoclaw/pull/3261)** | 👍 0 / 💬 0 | 繁体中文本地化贡献，作者为资深开源贡献者，期望快速合入以完善多语言覆盖。 |

> **洞察**：当前社区讨论聚焦于 **嵌入式/边缘设备 (NanoKVM, Raspberry Pi ARM64) 的开箱即用体验**，而非核心模型能力扩展。

---

## 5. Bug 与稳定性
| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **High** | [#3195](https://github.com/sipeed/picoclaw/issues/3195) | NanoKVM 上 PicoClaw 无法与 OpenAI 通信，所有交互失败 | 无 | 🔴 **Open / 排查中** |
| **Medium** | [#3260](https://github.com/sipeed/picoclaw/issues/3260) | 官网下载的 ARM64 (aarch64) 归档缺少 `picoclaw` launcher 二进制 | 无 (已关闭) | ✅ **Closed / 可能为打包流程遗漏** |
| **Medium** | 隐性 (PR [#3115](https://github.com/sipeed/picoclaw/pull/3115)) | 工具输出含 Base64 图片字符串导致会话历史损坏 | **#3115** | 🟡 **Open / 待 Review** |
| **Low** | 依赖安全风险 | 多项 Go 依赖停留在旧版本 (aws-sdk, sync, copilot-sdk 等) | **#3235~#3238** | 🟡 **Open / 依赖更新堆积** |

> **建议**：优先审核合并 #3115 修复数据损坏；建立 ARM64 发布产物校验清单防止 #3260 复发。

---

## 6. 功能请求与路线图信号
| 来源 | 需求描述 | 关联 PR | 纳入下版本可能性 |
|------|----------|---------|------------------|
| PR [#3118](https://github.com/sipeed/picoclaw/pull/3118) | **Agent 远程 WebSocket 模式** — 支持分布式/边缘部署架构 | #3118 (就绪) | ⭐⭐⭐ **高** — 架构扩展性强，已含测试 |
| PR [#3261](https://github.com/sipeed/picoclaw/pull/3261) | **繁体中文 (zh-TW) 完整本地化** | #3261 (就绪) | ⭐⭐⭐ **高** — 低风险，社区贡献 |
| Issue [#3195](https://github.com/sipeed/picoclaw/issues/3195) | **NanoKVM 官方预设配置 / 文档补全** | 无 | ⭐⭐ **中** — 需产品侧决策，非代码变更 |
| 依赖 PR 群 | **CI 基础设施现代化 (Go/Node Action v7)** | #3262, #3263 | ⭐⭐ **中** — 长期维护必需 |

> **路线图推测**：v0.3.2 或 v0.4.0 将以 **“边缘部署增强 (Remote Agent) + 多语言完善 + 依赖/CI 升级”** 为主题；NanoKVM 集成问题更可能通过文档/配置仓库解决而非核心代码变更。

---

## 7. 用户反馈摘要
| 场景 | 痛点 / 正向反馈 | 典型引用 |
|------|-----------------|----------|
| **NanoKVM 嵌入式部署** | ❌ “按文档配置 gpt-5.4 后完全无法工作，怀疑模型列表/协议映射有误” | #3195 作者 rtadams89 |
| **Raspberry Pi ARM64 安装** | ❌ “官网下载的 arm64 包里根本没有可执行文件，安装失败” | #3260 作者 tomopas |
| **国际化** | ✅ 社区主动提交繁体中文翻译，期望官方合入 | PR #3261 作者 PeterDaveHello |
| **开发者体验** | ⚠️ 多个功能 PR (#3118, #3115) 搁置 >1 个月，贡献者动力受挫 | PR 评论区隐性信号 |

---

## 8. 待处理积压 ⚠️
| 对象 | 停滞时长 | 优先级 | 建议行动 |
|------|----------|--------|----------|
| **PR [#3118](https://github.com/sipeed/picoclaw/pull/3118)** | 35 天 | **P1** | 指派 Reviewer，确认架构无副作用后合入；或标明 “需重构” 关闭并重写。 |
| **PR [#3115](https://github.com/sipeed/picoclaw/pull/3115)** | 35 天 | **P1** | 修复会话损坏的核心 Bug，**建议本周内合并**。 |
| **Issue [#3195](https://github.com/sipeed/picoclaw/issues/3195)** | 17 天 | **P1** | 复现 NanoKVM 环境，给出配置修正或代码补丁；若为上游模型变更，同步更新文档。 |
| **Dependabot PR 群 (#3235~#3238, #3262, #3263)** | 8~1 天 | **P2** | 批量跑 CI，通过后统一合并；冲突时由维护者手动解决。 |
| **ARM64 发布缺失 (#3260 根因)** | - | **P2** | 在 Release Workflow 中增加 `aarch64` 产物校验步骤，防止回归。 |

---

## 📌 维护者行动清单 (建议今日/本周)
1. **Review & Merge #3115** — 阻断会话数据损坏风险。  
2. **Triage #3195** — 给出 NanoKVM 配置指引或最小复现步骤。  
3. **批量处理 Dependabot PR** — 启用 auto-merge (需 CI 绿) 或人工批量合并。  
4. **发布 ARM64 校验清单** — 修复打包流程，避免 #3260 复发。  
5. **决策 #3118** — 确认是否纳入下个 minor 版本，给贡献者明确反馈。

---

> **项目健康度指标**  
> - **代码合并率 (24h)**: 0% (0/9)  
> - **Issue 响应率 (24h)**: 50% (1 closed / 2 updated)  
> - **Stale PR 占比**: 78% (7/9)  
> - **社区贡献占比**: 11% (1/9 人工 PR)  

> **下一报告关注点**：#3115/#3118 合并进度、NanoKVM 兼容性修复、v0.3.2 发布节奏。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-07-17

---

## 1. 今日速览
- **整体活跃度：高**。过去 24 小时内共产生 **4 个 Issue 更新**（3 新开/活跃，1 关闭）和 **19 个 PR 更新**（16 待合并，3 已合并/关闭），核心维护团队与社区贡献者并行推进多条关键修复与新特性。
- **核心主题聚焦**：**多渠道适配器稳定性**（WhatsApp Cloud/原生冲突修复、Signal 附件与已读回执、Dial 新渠道接入）、**LLM 降级容灾**（Claude→Codex 配额自动切换）、**安全加固**（本地 Webhook 认证、SECURENTY.md 修正）、**启动链路健壮性**（适配器启动失败阻断进程、容器 PID 1 僵尸进程回收）以及**测试基建治理**（弃用轮询循环泄漏）。
- **交付节奏**：3 个 PR 已合并/关闭（含 WhatsApp Cloud 注册键冲突修复 #2913、文档同步 #2914、空 PR #3061），其余 16 个 PR 处于审查/讨论期，显示项目处于“积累变更、准备批量落地”阶段。
- **风险点**：Issue #3064 揭示适配器启动失败被静默吞噬导致“宿主报健康实则失聪”，已有对应 Fix PR #3067；Issue #3016 指出速率限制日志噪音污染可观测性，尚无修复 PR。
- **社区信号**：新贡献者（如 `OmriBenShoham` 推进 Dial 短信/语音渠道，`salvodmt`/`elia-ben-cnaan` 并行实现 LLM 降级）活跃度高，核心成员（`QuantumBreakz`、`glifocat`、`moshe-nanoco`）主导审查与架构把关，协作模式健康。

---

## 2. 版本发布
**今日无新版本发布**。当前主分支积累了大量待合并 PR，预计近期将切 v2.1.18 或 v2.2.0 版本。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 类型 | 核心推进内容 | 关联 Issue |
|----|------|------|--------------|------------|
| [#2913](https://github.com/nanocoai/nanoclaw/pull/2913) | **fix(whatsapp-cloud): register bridge under distinct 'whatsapp-cloud' instance key** | **Bug Fix / 核心渠道** | 解决 WhatsApp Cloud 与原生 Baileys 适配器在注册表中键冲突（均为 `whatsapp`），导致安装任一即静默禁用另一渠道、消息错路由。引入 `whatsapp-cloud` 独立实例键，彻底隔离两条路径。 | 关闭 [#2911](https://github.com/nanocoai/nanoclaw/issues/2911) |
| [#2914](https://github.com/nanocoai/nanoclaw/pull/2914) | **docs(add-whatsapp-cloud): document webhook route + state-namespace migration for instance key** | **Docs** | 配套 #2913 补全文档：记录 Webhook 路由变更、状态命名空间迁移指引，降低现有用户升级摩擦。 | 关闭 [#2911](https://github.com/nanocoai/nanoclaw/issues/2911) |
| [#3061](https://github.com/nanocoai/nanoclaw/pull/3061) | **[follows-guidelines] Custom** | **空 PR / 流程** | 作者 `hoangvantuan` 提交空 PR 后自行关闭，疑为误操作或流程演练，无代码变更。 | — |

> **整体评估**：今日合并聚焦于**渠道注册表冲突的根因修复**（WhatsApp 双路径隔离），消除了一类生产级静默故障，文档同步到位。其余 16 个 Open PR 涵盖降级、安全、启动链路、新渠道、测试治理等核心域，审查通过后将显著提升稳定性与扩展性。

---

## 4. 社区热点（讨论最活跃/关注度最高）

| 对象 | 热度指标 | 核心诉求/争议点 | 分析 |
|------|----------|----------------|------|
| [Issue #3016](https://github.com/nanocoai/nanoclaw/issues/3016) | **评论 2、创建 5 天持续更新** | **可观测性噪音**：`rate_limit_event` 即使状态为 `allowed` 也被记为 `quota error`，导致日志被大量误报污染（一周 82 次），干扰真实错误排查。用户 `glifocat` 指出源头在 #2965 引入的日志逻辑。 | 高频误报直接破坏 SLO 监控信噪比，亟需在 `agent-runner` 侧按 `retryable`/`quota` 语义分级记录，而非统一 `Error` 级别。 |
| [Issue #3064](https://github.com/nanocoai/nanoclaw/issues/3064) | **新开即关联 Fix PR #3067、评论 0** | **启动链路静默失败**：`initChannelAdapters()` 捕获 `adapter.setup()` 异常仅打日志，宿主仍上报 `NanoClaw running`，导致 KeepAlive 无法感知、无法自愈。作者 `plongth` 给出最小复现路径。 | 典型“绿灯实红”故障，**已有 Fix PR #3067** 引入 `ChannelAdapterStartupError` 让进程非零退出，符合“快速失败”原则，优先级最高。 |
| [PR #3069](https://github.com/nanocoai/nanoclaw/pull/3069) | **新开、含完整设计文档 `docs/fallback.md`** | **LLL 降级编排**：宿主层面实现 Claude 真实配额耗尽/计费失败/持久过载时的**安装级**自动切换到 Codex，排除瞬时速率限制。作者 `salvodmt` 提供检测、切换、回退、可观测性全链路方案。 | 架构级特性，**与 #3057（Claude↔Codex 组级降级）并行推进**，说明项目正从“单模型依赖”向“多供应商容灾”演进，社区关注度极高。 |
| [PR #3070](https://github.com/nanocoai/nanoclaw/pull/3070) | **新开、关联 Issue #3069** | **WhatsApp 发送者身份分歧**：Baileys 与 Cloud 两条路径对同一手机号产出不同 `user ID`（前者含 `@s.whatsapp.net` 后缀），导致上下文碎片、会话错位。作者 `QuantumBreakz` 提出统一归一化规则。 | 直接支撑 #2913 隔离后的**身份一致性**，是多渠道融合的关键补丁。 |

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue / PR | 标题 | 状态 | 关键影响 | 是否有 Fix PR |
|--------|------------|------|------|----------|---------------|
| **P0 - 启动静默失败** | [#3064](https://github.com/nanocoai/nanoclaw/issues/3064) | Channel adapter that fails to start is swallowed: host reports healthy but runs deaf | **Open** | 适配器启动异常被吞噬，宿主误报健康，KeepAlive 失效，生产环境“失聪”不可感知 | **是** [#3067](https://github.com/nanocoai/nanoclaw/pull/3067) 已提交，引入 `ChannelAdapterStartupError` 强制退出 |
| **P1 - 身份分歧导致会话错乱** | [#3070](https://github.com/nanocoai/nanoclaw/pull/3070) | Fix WhatsApp sender identity divergence between Baileys and Cloud paths | **Open (PR)** | 同一手机号在两条渠道产生不同 `user ID`，上下文隔离、消息路由、审计日志全部受影响 | **进行中**，PR 已给出归一化方案 |
| **P1 - 可观测性噪音** | [#3016](https://github.com/nanocoai/nanoclaw/issues/3016) | Every rate_limit_event is logged as a quota error, even when status is "allowed" | **Open** | 日志系统被大量误报淹没，真实配额错误被掩盖，告警失效 | **否**，需在 `agent-runner` 侧按语义分级 |
| **P2 - 测试基建污染** | [#2851](https://github.com/nanocoai/nanoclaw/pull/2851) | fix(test): stop abandoned poll loops from stealing later tests' messages | **Open (PR, 23 天)** | 弃用轮询循环在超时时未停止，窃取后续测试消息，导致 CI 偶发性失败 | **是**，PR 已修复 `runPollLoopWithTimeout` 与 `upload-trace.test.ts` 助手 |
| **P2 - Signal 容器化读取失败** | [#2695](https://github.com/nanocoai/nanoclaw/pull/2695) | fix(signal): stage inbound image attachments as base64 so the container can read them | **Open (PR, 41 天)** | Signal 适配器返回宿主路径，容器内无法读取图片，媒体消息处理完全失效 | **是**，PR 将附件编码为 base64 传入容器 |
| **P2 - Signal 缺少已读回执** | [#3062](https://github.com/nanocoai/nanoclaw/pull/3062) | fix(signal): send read receipts so senders see messages marked read | **Open (PR)** | 仅发送送达回执，发送方见“空心双钩”，用户体验降级 | **是**，PR 增加 `--send-read-receipts` 参数 |
| **P2 - 容器僵尸进程** | [#3060](https://github.com/nanocoai/nanoclaw/pull/3060) | fix(container): add --init to agent container spawn args so PID 1 reaps zombie processes | **Open (PR)** | 容器 PID 1 为 `bash -c 'exec ...'`，无法回收子进程，长期运行导致僵尸进程累积 | **是**，PR 增加 `--init` 并修正文档 |

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 成熟度判断 | 可能纳入版本 |
|----------|----------|------------|--------------|
| [PR #3069](https://github.com/nanocoai/nanoclaw/pull/3069) + [PR #3057](https://github.com/nanocoai/nanoclaw/pull/3057) | **多 LLM 供应商自动降级**：宿主级（安装级）与 Agent Group 级双层降级，含检测、切换、回退、指标、审计全套。**已有完整设计文档与实现**，两路并行说明优先级极高。 | **高** — 核心团队 `salvodmt`/`elia-ben-cnaan` 主导，文档完备，测试覆盖。 | **v2.2.0 / v2.1.18** |
| [PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041) + [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) | **Dial 短信/语音渠道**：新增 `dial` 适配器（SMS + AI 语音通话）、向导技能、Channel Picker 集成。**Feature Skill 完整交付**，含 `SKILL.md` 与向导。 | **高** — 贡献者 `OmriBenShoham` 交付全套，符合项目“渠道即插即用”路线图。 | **v2.2.0** |
| [PR #3040](https://github.com/nanocoai/nanoclaw/pull/3040) | **审批保持统一生命周期契约**：核心团队 `moshe-nanoco` 推进，统一审批流程的状态机与持久化。 | **中** — 标记 `core-team`，但 PR 描述较抽象，需审查细节。 | **v2.2.0** |
| [PR #3066](https://github.com/nanocoai/nanoclaw/pull/3066) | **SECURITY.md v2 准确性修正**：清理残留 v1 内容，澄清 `nonMainReadOnly` 语义。 | **低/维护型** — 文档债务偿还，无功能变更。 | **v2.1.18** |
| [PR #3065](https://github.com/nanocoai/nanoclaw/pull/3065) | **本地 Webhook 认证修复 (GHSA-h9g4-589h-68xv)**：修复 `chat-sdk-bridge.ts` 回环 Webhook 缺失认证，防动作伪造。 | **高（安全）** — CVE 编号已分配，属安全热修复类。 | **v2.1.18 (安全补丁)** |

> **路线图推断**：下一版本（v2.1.18）将以**安全修复（#3065）、启动链路硬化（#3067）、文档修正（#3066）、WhatsApp 身份统一（#3070）**为主；v2.2.0 将打包 **LLM 多供应商降级（#3069/#3057）、Dial 新渠道（#3041/#3050）、审批契约统一（#3040）**、**Signal 容器化修复（#2695/#3062）**、**测试治理（#2851）**、**容器 PID 1 修正（#3060）**。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点/场景 | 代表性声音 | 满意度倾向 |
|-----------|------------|------------

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-07-17

---

## 1. 今日速览

IronClaw 今日呈现**高强度重构与架构收敛**态势。过去 24 小时产生 18 个 Issue（含 3 个关闭）与 39 个 PR（含 11 个合并/关闭），**无新版本发布**。核心动力集中在三条主线：**Reborn 运行时拆解**（将 156k LOC 的神级 crate 拆解至 ~10%）、**认证/扩展统一运行时落地**（OAuth 生命周期修正、Slack/Telegram 通道一等公民化）、**WebUI v2 体验补齐**（加载态、主题、Toast、下载反馈、国际化）。CI 层面新增“组合体积棘轮门禁”与开发指标脚本，显示项目已进入**可度量、可自限**的治理阶段。整体活跃度极高，且呈现“核心成员主导重构 + 社区贡献体验打磨”双轨并行。

---

## 2. 版本发布

> 今日无新版本发布。  
> 最近一次自动化发布 PR [#5598](https://github.com/nearai/ironclaw/pull/5598) 仍处于开放状态，包含 `ironclaw_common` 0.5.0（破坏性变更）、`ironclaw_skills` 0.4.0（破坏性变更）等版本跃迁，建议关注其合并时机以评估下游迁移工作量。

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 核心推进内容 | 对项目的里程碑意义 |
|----|------|--------------|-------------------|
| [#6166](https://github.com/nearai/ironclaw/pull/6166) | **Revert** | 完整回滚 #6130（OAuth flow-lifecycle hygiene），恢复 `cbc84d6` 树状态 | 说明主分支对认证流程变更采取**谨慎门控**，避免破坏性变更直接落地 |
| [#6164](https://github.com/nearai/ironclaw/issues/6164) | **Issue Closed** | 删除冗余的 Slack 连接纪元状态机，改由 auth-flow 记录派生尝试存活性 | 消除重复状态源，减少 Bug 面；为统一扩展运行时铺路 |
| [#6118](https://github.com/nearai/ironclaw/issues/6118) | **Issue Closed** | 前端 API 已支持的用户级密钥管理在 Admin UI 暴露 | 补齐多租户运营能力缺口 |
| [#6117](https://github.com/nearai/ironclaw/issues/6117) | **Issue Closed** | Workspace 区域名本地化 + 文件大小人性化显示 | 国际化与 UX 细节收尾 |
| [#6115](https://github.com/nearai/ironclaw/pull/6115) | **Dependabot** | 25 个依赖批量升级（含 `agent-client-protocol` 0.10.4→1.2.0） | 保持依赖新鲜度，规避供应链风险 |
| [#6114](https://github.com/nearai/ironclaw/pull/6114) | **Test** | 共享 OAuth-flow 一致性测试套件覆盖 fake 与耐久实现 | 夯实认证核心正确性基线 |

> **合计**：6 个关闭项（3 PR + 3 Issue）集中在**认证稳定性、运维工具化、国际化收尾**——表明 v2 发布前的“硬骨头”正在被系统性清理。

---

## 4. 社区热点（高互动/高关注度）

| 项 | 链接 | 互动 | 核心诉求分析 |
|----|------|------|--------------|
| **Issue #6168** | [神级 crate 拆解](https://github.com/nearai/ironclaw/issues/6168) | 💬2 | **架构治理最高优先级**：`ironclaw_reborn_composition` 占全 workspace 24% 代码，违反“仅组装”宪章。需拆出 `crate-minimal` 并引入体积棘轮（已在 #6167 落地）。 |
| **Issue #6155** | [失败运行后会话卡死](https://github.com/nearai/ironclaw/issues/6155) | 💬2 | **P2 阻塞性 Bug**：模型提供商不可用后，后续用户消息完全无响应，无错误回显。严重影响可用性，需尽快修复。 |
| **PR #6172** | [后台服务安装](https://github.com/nearai/ironclaw/pull/6172) | 新建 | **核心成员推进**：`ironclaw-reborn` 获得 launchd/systemd 原生服务管理，含 `full` feature bundle 与 libsql。生产化部署关键一步。 |
| **PR #6159** | [Telegram 通道扩展](https://github.com/nearai/ironclaw/pull/6159) | 新建 | **通道生态扩展**：Admin 侧配置 Bot Token，自动验证、配对码生成、DM 入口。按统一扩展架构（#6116）落地，示范作用强。 |
| **PR #6167** | [开发指标 + 组合体积棘轮](https://github.com/nearai/ironclaw/pull/6167) | 新建 | **工程治理基建**：三层指标报告（git/GitHub/working tree）+ 强制体积门禁。防止架构腐化的自动化护栏。 |

> **信号**：核心成员（`ilblackdragon`、`BenKurrek`、`henrypark133`）主导的**架构重构类 PR** 与 **P2 级用户阻塞 Issue** 并列热点，反映“内部治理”与“外部体验”双重压力。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P2 阻塞** | [#6155](https://github.com/nearai/ironclaw/issues/6155) | 运行失败后会话完全无响应，无错误 UI | ❌ 无 | 需优先排查 WebChat v2 错误边界与 SSE 重连逻辑 |
| **P3 体验** | [#6126](https://github.com/nearai/ironclaw/issues/6126) | 新会话首条消息无加载/流式状态，显得卡死 | ❌ 无 | 属于 WebUI v2 首屏体验债，建议与 #6163 onboarding 统一处理 |
| **P3 体验** | [#6127](https://github.com/nearai/ironclaw/issues/6127) | 首次执行 routine 仍显示“Previous run still in progress” | ❌ 无 | 状态机初始化逻辑缺陷，影响可观测性信任度 |
| **P3 数据** | [#6149](https://github.com/nearai/ironclaw/issues/6149) | Workspace 文件下载失败静默吞噬，用户无感知 | ❌ 无 | 需在下载 Promise 链补统一错误 Toast（关联 #6145） |
| **安全** | [#6170](https://github.com/nearai/ironclaw/issues/6170) | 多租户实例下用户可通过 shell 命令越权访问文件系统 | ❌ 无 | **高风险**，需在沙箱层强制 workspace 隔离，禁止裸 shell 执行 |
| **回归** | [#6164](https://github.com/nearai/ironclaw/issues/6164) | Slack 连接纪元状态机与 auth-flow 重复导致 Bug | ✅ 已关闭（设计层面修复） | 通过删除冗余状态机从根源消除 |

> **关注点**：安全 Issue #6170 虽无 👍/评论，但属**多租户隔离底线**，建议立即纳入安全审计清单。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 关联 PR/进展 | 入版概率评估 |
|----------|------|--------------|--------------|
| **Issue #6158** | 新增 `zh-TW` 繁体中文本地化 | 仅 Issue，无 PR | ★★★☆☆ — 国际化框架已就绪（见 #6117），贡献门槛低，易合入 |
| **Issue #6160** | Release pipeline 多 CPU 架构构建验证 | 仅 Issue，审计现有 workflow | ★★★★☆ — 生产交付硬指标，CI 团队可能并行处理 |
| **Issue #6143** | CLI 可执行文件重命名 `ironclaw-reborn` → `ironclaw` | 设计决策，后续重构 | ★★★★★ — v1 退役后必然步骤，#6077/#6122/#6123 已铺路 |
| **Issue #6142** | WebUI v2 从 `/v2` 迁移至根路径 | 静态挂载与路由重写 | ★★★★★ — 用户可见 URL 简化，发布前必做 |
| **PR #6159** | Telegram 通道一等公民化 | 已开 PR，依赖 #6116 统一扩展运行时 | ★★★★☆ — 架构就绪后快速落地，演示扩展生态能力 |
| **PR #6172** | 原生后台服务安装 | 已开 PR，剥离自 #6157 | ★★★★★ — 生产化部署核心能力，核心成员主导 |
| **PR #6162/6163** | Workspace 重设计 + Chat-first Onboarding | 已开 PR，拆分自 #5565 | ★★★★★ — WebUI v2 核心用户旅程，设计系统应用示范 |

> **路线图推断**：下一版本（v0.29+ / v0.30）将聚焦 **“Reborn 生产就绪”** 三件套：① 统一扩展运行时落地（Slack/Telegram 为样板）② CLI/WebUI 品牌与路径收敛 ③ 后台服务与多架构分发。体验类 PR（Onboarding、Theme、Toast）大概率随同捆绑发布。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 场景 | 痛点原声 | 满意/不满意 | 隐含需求 |
|------|----------|-------------|----------|
| **模型调用失败** | “对话完全卡住，不知道发生了什么，也无法继续” (#6155) | ❌ 极度不满 | 优雅降级：错误 UI、自动重试、上下文保持 |
| **首次使用** | “界面空白以为崩了，等了很久才出回复” (#6126) | ❌ 不满 | 骨架屏/流式占位/进度指示器 |
| **定时任务** | “明明是第一次跑，却提示上一次还在跑” (#6127) | ❌ 困惑 | 状态文案准确性，首次运行特判 |
| **文件下载** | “点下载没反应，也不知道成没成功” (#6149) | ❌ 无感知 | 统一错误 Toast + 进度反馈 |
| **国际化** | “浏览器是繁体中文，只能回退到简体或英文” (#6158) | ⚠️ 受限 | 完整 locale 覆盖，尊重 `Accept-Language` |
| **管理员运维** | “API 已支持用户密钥，但 UI 看不到、改不了” (#6118) | ⚠️ 半成品 | Admin UI 补齐，RBAC 可视化 |

> **共性**：用户对 **“不可见的失败”**、**“缺乏反馈的等待”**、**“不一致的文案”** 容忍度极低。WebUI v2 的体验完成度直接决定 Reborn 版本的口碑。

---

## 8. 待处理积压（长期未响应/高价值未推进）

| 项 | 类型 | 停滞时长 | 价值/风险 | 建议动作 |
|----|------|----------|-----------|----------|
| [#4471](https://github.com/nearai/ironclaw/issues/4471) | Issue | 43 天 | **架构债追踪**：`runtime.rs` 已超 3000 行预算，包含 5 类运行时关注点 | 指定 Owner 拆解为子 Issue，纳入 #6168 拆解计划 |
| [#5602](https://github.com/nearai/ironclaw/issues/5602) | Issue | 14 天 | **Slack 连接回环**：DM 返回配对码而非完成连接 | 关联 #6164 状态机删除，验证 auth-flow 新路径是否修复 |
| [#5978](https://github.com/nearai/ironclaw/pull/5978) | PR | 6 天 | **编码工具安全**：`read-before-edit` + 防竞态写入，Bench 数据证明必要性 | 属于核心工具链硬化，建议加速 Review 合入 |
| [#6116](https://github.com/nearai/

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-07-17

> 数据统计窗口：2026-07-16 00:00 ~ 2026-07-16 23:59 (UTC)  
> 数据来源：GitHub API / 网页端实时抓取

---

## 1. 今日速览
- **核心发布流程推进**：核心维护者 `liuzhq1986` 发起并合并了 **Release/2026.7.16** (#2344)，标志着当前迭代周期进入发布冻结/验证阶段，版本号暗示采用日期语义化版本。
- **高频合并，代码库健康度高**：过去 24 小时 **14 个 PR 合并/关闭**，涵盖 Cowork 核心协作逻辑重构、Windows 原生标题栏适配、剪贴板/文件夹附件处理、Steer 跟进路由稳定化等核心模块，显示团队处于高强度交付节奏。
- **技术债偿还与体验打磨并行**：合并 PR 中显著包含「可测试性重构」(#2343)、「滚动跳动修复」(#2329)、「Compaction 重试清理」(#2289) 等稳定性建设；同时社区贡献者提交了快捷键提示(#1318)、骨架屏(#1320)、ESC 关闭弹窗(#1362)、输入框模型选择器(#1364)等 **UX 增强 PR**，但均处于 **Open/Stale** 状态，尚未进入主干。
- **Issue 活跃度低，存量问题清理中**：仅 3 条 Issue 更新，均为 4 月创建的 Stale 标签旧问题，维护者正通过 PR 逐个闭环（如 #1361 已关闭，#1317/1319 有对应 PR 待审）。
- **整体评估**：**🟢 健康·高活跃**。核心团队专注于架构稳固与发布交付，社区贡献活跃但审核吞吐存在延迟，建议加速 UX 类 PR 的 Code Review 合入。

---

## 2. 版本发布
**无新版本发布 (Releases 为空)**  
但检测到 **Release Candidate 分支合并**：
- **PR #2344** `Release/2026.7.16` (作者: `liuzhq1986`, 状态: **CLOSED/MERGED**)  
  🔗 [netease-youdao/LobsterAI#2344](https://github.com/netease-youdao/LobsterAI/pull/2344)  
  *意义：主干已包含本次迭代全部特性，预计近期将切 Tag 发布 v2026.7.16 或类似版本。关注后续 Release Notes 以确认破坏性变更（如 Cowork 流程变更、设置迁移等）。*

---

## 3. 项目进展：核心合并 PR 概览 (14 个 Merged/Closed)

| # | 标题 | 领域 | 核心价值 | 链接 |
|---|------|------|----------|------|
| **2344** | **Release/2026.7.16** | `renderer, docs, main, cowork` | **版本发布集成**，汇总本周期所有变更入主干 | [#2344](https://github.com/netease-youdao/LobsterAI/pull/2344) |
| **2343** | `refactor(cowork): extract clipboard attachment file extraction into testable helper` | `renderer, cowork` | **可测试性重构**：剥离剪贴板文件提取逻辑为纯函数，便于单测覆盖 | [#2343](https://github.com/netease-youdao/LobsterAI/pull/2343) |
| **2339** | `fix(update): align update card header content` | `renderer` | **UI 修复**：更新卡片标题在窄侧边栏完整显示、响应式对齐 | [#2339](https://github.com/netease-youdao/LobsterAI/pull/2339) |
| **2329** | `fix(cowork): prevent conversation scroll jumps` | `renderer, cowork` | **核心体验修复**：流式输出时尊重手动滚动，取消待定自动滚动，消除「跳动」 | [#2329](https://github.com/netease-youdao/LobsterAI/pull/2329) |
| **2289** | `fix(cowork): clear stalled compaction retry maintenance` | `main` | **稳定性修复**：复用可恢复重试路径，防止自动压缩完成后上下文维护泄漏，含回归测试 | [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289) |
| **2292** | `fix(cowork): stabilize steer follow-up routing` | `renderer, docs, main, cowork` | **架构重构**：引入 Codex 风格 Steer 跟进队列、替换临时会话、作用域化流式状态，防止输入状态污染 | [#2292](https://github.com/netease-youdao/LobsterAI/pull/2292) |
| **2300** | `fix(cowork): support attachments in steer queue` | `renderer, cowork` | **功能补全**：Steer 排队消息支持附件(文件/图片/选中文本)，轻量快照+延迟rehydrate避免大对象驻留 | [#2300](https://github.com/netease-youdao/LobsterAI/pull/2300) |
| **2302** | `Liuzhq/windows status bar` | `renderer, cowork` | **平台适配**：Windows 原生品牌标题栏(Logo/窗口控制)，折叠侧边栏动作迁移至标题栏，去重 Header 图标 | [#2302](https://github.com/netease-youdao/LobsterAI/pull/2302) |
| **2313** | `fix(cowork): submit only the selected queued steer` | `renderer, cowork` | **逻辑修正**：Steer 队列严格 FIFO 处理，仅提交选中项，增诊断日志与回归测试 | [#2313](https://github.com/netease-youdao/LobsterAI/pull/2313) |
| **2310** | `feat(cowork): add folder context attachments` | `renderer, main, cowork` | **新能力**：拖拽/粘贴文件夹作为 Prompt 附件，传路径给 OpenClaw 而非上传内容，Electron 原生路径解析 | [#2310](https://github.com/netease-youdao/LobsterAI/pull/2310) |
| **2307** | `fix(cowork): refine prompt modes and steer follow-up handling` | `renderer, cowork` | **交互重构**：移除 Plan Mode 开关、Goal/Steer 状态栏上移贴合输入框、统一图标、修复队列 Steer 处理 | [#2307](https://github.com/netease-youdao/LobsterAI/pull/2307) |
| **1362** | `feat(cowork): 权限弹窗添加 ESC 键关闭支持` | `renderer` (社区 PR) | **键盘交互补全**：CoworkPermissionModal 监听 ESC 调用 deny，含 cleanup 防泄漏 | [#1362](https://github.com/netease-youdao/LobsterAI/pull/1362) |
| **1364** | `feat(cowork): 新建任务页面输入框工具栏增加模型选择器` | `renderer` (社区 PR) | **效率提升**：Home 页输入框工具栏新增模型选择器，双选择器共享 Redux 状态联动 | [#1364](https://github.com/netease-youdao/LobsterAI/pull/1364) |
| **1367** | `fix(scheduled-task): validate duplicate task names` | `main, renderer` (社区 PR) | **数据完整性**：定时任务命名归一化+去重校验，IPC 层结构化错误码、表单提示+回归测试 | [#1367](https://github.com/netease-youdao/LobsterAI/pull/1367) |

> **进展总结**：本周期核心推进 **Cowork 协作引擎稳定化(滚动/压缩/Steer/附件/队列)** 与 **Windows 原生体验对齐**，同时引入 **文件夹上下文** 这一差异化能力。社区贡献高质量 UX/基建 PR 4 个，均已通过 CI 但待 Maintainer Review 合入。

---

## 4. 社区热点

| 排名 | 对象 | 互动指标 | 核心诉求 | 分析 |
|------|------|----------|----------|------|
| 1 | **Issue #1317 / PR #1318** | 💬 1 评论 / ⏳ Open 106 天 | **侧边栏按钮显示键盘快捷键(kbd)提示** | 新用户发现成本高；PR 已实现跨平台符号转换(⌘/Ctrl)、Hover 渐显、设置联动，**就绪度极高**，建议优先 Review 合入。 |
| 2 | **Issue #1319 / PR #1320** | 💬 1 评论 / ⏳ Open 106 天 | **会话列表骨架屏，区分"加载中/空状态"** | 启动闪烁「暂无会话」误导用户；PR 在 Slice 增 `sessionsLoaded` 标志位，**最小侵入修复**，阻塞仅在于 Review 带宽。 |
| 3 | **Issue #1361** | 💬 2 评论 / ✅ Closed (Stale) | **自定义 Agent 详情页删除按钮显示 "delete" 未汉化** | 已关闭，可能随其他 PR 隐式修复或判定为低优先级。 |
| 4 | **PR #1321** | ⏳ Open 106 天 | **设置页切 Tab 时关闭残留 Modal(内存编辑/连接测试)** | 修复「点击穿透遮罩层导致只读假象」的严重 UI Bug，**高优先级**，未合并风险留存。 |
| 5 | **PR #1364** | ⏳ Open 106 天 | **新建任务输入框工具栏增模型选择器** | 解决「Header 与输入框距离远」高频痛点，双选择器状态联动设计完善，**强烈建议合入**。 |

> **热点信号**：社区高产出 **高完成度 UX PR** 但 **审核周期 > 3 个月**，形成「交付就绪-审核积压」矛盾。建议设立 **Community PR Triage** 机制或指定 Reviewer 专门处理此类低风险高价值改动。

---

## 5. Bug 与稳定性

| 严重级 | 问题来源 | 现象描述 | 修复状态 | 关联 PR |
|--------|----------|----------|----------|---------|
| **🔴 Critical** | PR #1321 (Open) | 设置页切 Tab 后，Cowork Memory Editor / Model Connection Test Modal 残留为全屏 `absolute inset-0` 遮罩，点击穿透导致 UI 伪只读 | **已有 Fix PR 待合并** | [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) |
| **🟠 High** | PR #2329 (Merged) | 流式输出期间对话区随新消息强制滚动底部，打断用户手动上翻阅读历史 | **已合入主干** | [#2329](https://github.com/netease-youdao/LobsterAI/pull/2329) |
| **🟠 High** | PR #2289 (Merged) | Auto-compaction 完成请求重试时，维护上下文未清理，导致后续无流到达时泄漏/死锁 | **已合入主干+回归测试** | [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289) |
| **🟡 Medium** | PR #2292 (Merged) | Steer 跟进路由不稳：临时 new-chat session 残留、流式状态跨会话污染输入 | **已合入主干(架构级重构)** | [#2292](https://github.com/netease-youdao/LobsterAI/pull/2292) |
| **🟡 Medium** | PR #2313 (Merged) | Steer 队列提交逻辑异常，非选中项被提交，破坏 FIFO 语义 | **已合入主干+诊断日志** | [#2313](https://github.com/netease-youdao/LobsterAI/pull/2313) |
| **🟢 Low** | Issue #1361 (Closed) | Agent 详情页删除按钮文案 "delete" 未国际化 | **已关闭(Stale)** | - |

> **稳定性趋势**：核心协作链路 **滚动/压缩/Steer/队列** 连续修复，回归测试覆盖率提升；**设置页 Modal 残留(#1321)** 为当前唯一已知高危未修复 Bug，建议 **立即安排 Review 合入**。

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能描述 | 实现就绪度 | 纳入下版本概率 | 备注 |
|----------|----------|------------|----------------|------|
| **Issue #1317 / PR #1318** | 侧边栏按钮 KBD 快捷键可视化(跨平台符号/Hover显示/设置联动) | ✅ 代码完备、CI 过 | **极高 (95%)** | 纯增量 UI，零破坏性，符合「降低发现成本」产品目标 |
| **Issue #1319 / PR #1320** | 会话列表骨架屏 + `sessionsLoaded` 状态区分 | ✅ 代码完备、CI 过 | **极高 (95%)** | 修复启动闪烁，体验提升显著，风险极低 |
| **PR #1364** | Home 页输入框工具栏模型选择器(

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-07-17

> **数据统计周期**：2026-07-16 00:00 - 2026-07-16 23:59 (UTC)  
> **报告生成时间**：2026-07-17

---

## 1. 今日速览

*   **整体状态**：项目处于**高强度迭代期**，单日无 Issue 活动但合并了 3 个核心 PR，并发布了 1 个日常构建版本 (`20260716.01`)，展现了维护团队对核心功能打磨与模型生态扩展的双线并行能力。
*   **活跃度评估**：⭐⭐⭐⭐☆ (高)。虽然社区外部互动为 0，但核心贡献者 `penso` 在单日内完成了 Agent/Sandbox 状态反馈重构、Kimi K3 模型接入、Web 端降级策略修复三大任务，代码交付效率极高。
*   **核心看点**：**外部 Agent 集成架构显著增强**（会话元数据广播、历史持久化、Apple Container 支持）、**模型提供商矩阵扩展至 Moonshot/Kimi K3**、**Web 端 Sandbox 缺失时的优雅降级体验**。

---

## 2. 版本发布

### `20260716.01` (Daily Build)
*   **发布时间**：2026-07-16
*   **更新范围**：此版本为日常构建版，聚合了今日合并的 3 个 PR 内容，无独立变更日志。
*   **核心变更包含**：
    1.  **Agent/Sandbox 状态反馈机制重构**：解决外部 Agent 会话 ID 可用前的元数据同步问题，修复 Web 会话存储合并冲突。
    2.  **Kimi K3 / K2.7 正式接入**：新增模型目录项，修正推理参数处理，补全引导流程 E2E 测试。
    3.  **Web 端 Direct Mode 降级策略**：沙箱后端不可用时自动切换并锁定 UI 状态，防止用户误操作。
*   **破坏性变更/迁移提示**：**无破坏性变更**。属于功能增强与体验修复类更新，现有配置平滑兼容。

---

## 3. 项目进展

今日合并的 3 个 PR 均由核心维护者 `penso` 推进，覆盖了 **后端架构、模型生态、前端交互** 三大核心层，项目向“多 Agent 协作平台”目标显著迈进。

| PR | 标题 | 核心推进内容 | 影响面 |
| :--- | :--- | :--- | :--- |
| **[#1155](https://github.com/moltis-org/moltis/pull/1155)** | **Improve agent and sandbox status feedback** | 1. **元数据广播机制**：外部 Agent 会话 ID 就绪后主动广播会话元数据。<br>2. **历史持久化**：全量上下文请求返回持久化的外部 Agent 历史，修复 Web Session Store 合并时的竞态条件。<br>3. **后端识别**：将已安装外部 Agent 标记为可用聊天后端，**新增 Apple Container 支持**。 | **核心架构**<br>外部 Agent 集成稳定性、多沙箱后端扩展性 |
| **[#1156](https://github.com/moltis-org/moltis/pull/1156)** | **Add Kimi K3 provider support** | 1. **模型目录更新**：新增 `Kimi K3` 与 `Kimi K2.7 Code Highspeed`。<br>2. **能力对齐**：更新模型能力定义、Moonshot `reasoning-effort` 参数处理逻辑。<br>3. **工程化**：更新 Provider 默认配置、配置模板、文档及 Key 帮助链接。<br>4. **质量保障**：新增 Onboarding E2E 测试验证 Moonshot 接入流程。 | **模型生态**<br>国内头部大模型厂商接入完整度 |
| **[#1154](https://github.com/moltis-org/moltis/pull/1154)** | **fix(web): show direct mode when sandbox is unavailable** | 1. **状态诚实展示**：无真实沙箱后端时，聊天头部切换器显示 "Direct" 而非 "Sandboxed"。<br>2. **交互防呆**：禁用沙箱切换开关与镜像选择器，避免用户尝试不可用功能。<br>3. **回归防护**：新增 E2E 测试覆盖沙箱不可用场景下的头部组件行为。 | **前端体验**<br>降级场景下的用户预期管理与交互安全 |

---

## 4. 社区热点

*   **数据现状**：过去 24 小时 **Issues 0 条，PR 评论 0 条，Reactions 总计 0**。
*   **分析**：当前项目处于**核心团队内驱式开发阶段**，社区外部参与度极低。所有重大变更均由 Maintainer `penso` 独立完成并自测合并，缺乏外部 Code Review 与讨论。
*   **建议**：建议在 README 或 Contributing 指南中明确“Good First Issue”标签，或发布月度 Roadmap 吸引外部贡献者参与 Sandbox 后端适配、模型 Provider 维护等模块化任务。

---

## 5. Bug 与稳定性

*   **今日新报告 Bug**：0 个。
*   **今日修复/规避的稳定性隐患**（来自 PR 内部修复）：
    1.  **[高] Web Session Store 合并竞态** (`#1155`)：外部 Agent 历史加载时可能导致会话状态不一致，已通过持久化历史返回机制修复。
    2.  **[中] 沙箱不可用时的 UI 误导** (`#1154`)：用户误以为沙箱功能正常，实则走降级路径，已通过状态诚实展示 + 交互禁用修复。
    3.  **[低] Moonshot Provider 配置引导缺失测试** (`#1156`)：新增 E2E 测试覆盖 Onboarding 流程，防止配置项变更导致引导页崩溃。

---

## 6. 功能请求与路线图信号

结合今日 PR 与近期提交历史，推测下一版本 (v0.x / v1.0 预备期) 重点方向：

1.  **外部 Agent 生态建设** (`#1155` 信号强)：
    *   **已落地**：Apple Container 后端支持、会话元数据同步、历史持久化。
    *   **预期下一步**：更多沙箱后端适配，外部 Agent 间通信协议标准化，Agent Marketplace/Registry 雏形。
2.  **国内模型厂商深度适配** (`#1156` 持续推进)：
    *   **已落地**：Moonshot/Kimi 全系接入（含最新 K3）、推理参数原生化、引导流程自动化测试。
    *   **预期下一步**：Zhipu GLM-4、DeepSeek-V3/Reasoner 等厂商特有功能（如 Function Calling 规范差异、长上下文计费模式）的适配。
3.  **Web 端弹性交互体系** (`#1154` 体现设计成熟度)：
    *   **趋势**：从“功能可用”转向“状态诚实、降级优雅、测试兜底”。
    *   **预期下一步**：离线模式/本地模型推理的 UI 状态机完善，多会话并发时的资源隔离提示。

---

## 7. 用户反馈摘要

*   **数据来源**：过去 24 小时无 Issue 评论，无 PR 审查评论。
*   **间接推断**：
    *   **痛点**：`#1154` 修复的“沙箱不可用却显示可用”属于典型的**用户预期与系统实际能力不符**问题，说明用户在无 Docker/Apple Container 环境下使用体验曾受挫。
    *   **诉求**：`#1156` 快速跟进 Kimi K3 发布，反映用户对**最新国内 SOTA 模型即时可用性**的强烈需求。
    *   **满意度指标**：核心功能迭代速度极快（当日合并 3 PR），但缺乏用户侧反馈闭环，真实 NPS 无法量化。

---

## 8. 待处理积压提醒

> **注意**：本数据源仅包含过去 24 小时增量，无法扫描历史积压。建议维护者定期执行以下 GitHub 搜索查询以识别长期滞留项：

*   **滞留 PR (>14 天无更新)**:
    `repo:moltis-org/moltis is:pr is:open updated:<=2026-07-03 sort:updated-asc`
*   **高优先级 Bug 无人认领**:
    `repo:moltis-org/moltis is:issue is:open label:bug -label:"in progress" sort:created-asc`
*   **设计讨论类 Issue 久未决策**:
    `repo:moltis-org/moltis is:issue is:open label:"design" sort:comments-desc`

**维护者行动建议**：
1.  当前核心开发节奏极快，建议每周固定时间进行 **Dependency Audit**（特别是 Sandbox 后端、模型 Provider SDK 依赖更新）。
2.  引入 **Dependabot/Renovate** 自动化依赖升级 PR，减少手动维护成本。
3.  考虑设立 **Bi-weekly Community Sync** (Issue 形式) 同步进度、收集反馈，打破“零评论”僵局。

---

**报告结束** | 数据来源: GitHub API (moltis-org/moltis) | 下次更新: 2026-07-18

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-07-17

> **数据基准**：过去 24 小时 GitHub 活动（Issues: 43 更新，PRs: 46 更新），无新版本发布。

---

## 1. 今日速览
- **活跃度评级：🔴 高** —— 单日 89 条 Issue/PR 更新，合并/关闭比约 1:1，显示维护团队正在高强度清理 2.0 发布后的回归缺陷与用户反馈。
- **核心矛盾**：v2.0.0.post2 发布后，**Windows 启动权限**、**会话/记忆一致性**、**Docker 时区**、**流式渲染空白丢失** 等高频阻断性 Bug 集中爆发，已触发多条热修复 PR。
- **架构演进**：并行推进“工具治理统一注册”、“多 Agent 启动并发控制”、“Channel 基类重构”等结构性重构，旨在解决 2.0 架构落地带来的技术债。
- **社区情绪**：Windows 普通用户无法启动（需管理员权限）、Token 异常消耗、升级后“失忆症”引发强烈不满；但修复响应极快（多 Issue 几小时内关联 PR），信任度尚在可控区间。
- **风险提示**：`nvidia-smi` 挂起导致 Desktop 启动卡死、Clash 代理冲突、QQ 频道发图崩溃等环境兼容性问题仍在扩散，建议尽快切入 2.0.1 热修复版本。

---

## 2. 版本发布
**无新版本发布**。当前最新稳定版 `v2.0.0.post2`（2026-07-15 左右发布），建议团队规划 `v2.0.1` 聚焦修复本日报前 5 类 P0 级回归问题。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 关联 Issue | 进展意义 |
|----|------|----------|------------|----------|
| [#6166](https://github.com/agentscope-ai/QwenPaw/pull/6166) | **Bug Fix** | 修复流式 `thinking`/`text` delta 片段首尾空白/换行被 `strip` 导致渲染粘连 | [#6129](https://github.com/agentscope-ai/QwenPaw/issues/6129) | 恢复流式思维链可读性，用户可见改善 |
| [#6180](https://github.com/agentscope-ai/QwenPaw/pull/6180) | **Bug Fix** | 消息处理后刷新 `ChatSpec.updated_at`，修复会话列表排序失效 | [#6131](https://github.com/agentscope-ai/QwenPaw/issues/6131) | 解决 2.0 升级后会话列表“updatedAt 不更新”回归 |
| [#6192](https://github.com/agentscope-ai/QwenPaw/pull/6192) | **Bug Fix** | Docker Compose 挂载宿主 `/etc/localtime` `/etc/timezone`，修复容器 UTC 时区偏移 8h | [#6188](https://github.com/agentscope-ai/QwenPaw/issues/6188), [#6196](https://github.com/agentscope-ai/QwenPaw/issues/6196) | 彻底解决 Docker 定时任务/日志/文件时间戳偏移 |
| [#6171](https://github.com/agentscope-ai/QwenPaw/pull/6171) | **Bug Fix** | 新增 `dream_cron_enabled` 开关，防止清空 `dream_cron` 仍触发默认 `0 23 * * *` | - | 修复记忆梦境任务不可关闭的配置逻辑漏洞 |
| [#6168](https://github.com/agentscope-ai/QwenPaw/pull/6168) | **Stability** | 修复 Mattermost/OneBot/XiaoYi Channel 无界集合与火炼任务泄漏 | - | 消除长跑内存泄漏隐患，提升多渠道稳定性 |
| [#6142](https://github.com/agentscope-ai/QwenPaw/pull/6142) | **Enhancement** | `auto_memory_interval` 表单校验增强（必填、min=0、i18n 7 语言） | - | 规范自动记忆配置，防止空值导致异常 |
| [#6200](https://github.com/agentscope-ai/QwenPaw/pull/6200) | **Bug Fix** | `qwenpaw cron update` 保留未修改的 `runtime/request` 字段，不再硬编码覆盖 | - | 修复 Cron 更新丢字段回归 |
| [#6185](https://github.com/agentscope-ai/QwenPaw/pull/6185) | **Test** | 适配 v2.0.0 UI 重构的 E2E 选择器/路由 | - | 恢复夜ly 回归套件绿标，保障后续发布质量 |
| [#6194](https://github.com/agentscope-ai/QwenPaw/pull/6194) | **CI** | 夜ly 全量流水线新增 Console Vitest 覆盖率跑分 | - | 补齐前端单测缺口，完整 CI 质量门禁 |

> **整体判断**：今日合并 25 个 PR，其中 **8 个直接修复 P0/P1 回归**，3 个夯实工程基建（测试/CI/内存），项目从“发布后混乱期”进入“快速稳定期”。

---

## 4. 社区热点（评论/互动 Top 5）

| 排名 | Issue/PR | 评论 | 核心诉求 | 分析 |
|------|----------|------|----------|------|
| 1 | [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) Doom Loop 工具重复调用 | 6 | 单轮内同工具同参数狂调 ~6 次才报警，浪费 Token/配额 | **已关闭 wontfix**，但暴露 Agent 循环检测阈值过高、缺乏早期熔断机制，建议在 `tool_call` 进入历史前做幂等去重。 |
| 2 | [#6161](https://github.com/agentscope-ai/QwenPaw/issues/6161) Windows 更新后普通用户卡 `Waiting for HTTP ready...` | 5 | **仅管理员可启动**，`.bat`/快捷方式/开机自启全挂，端口/防火墙/权限均正常 | **P0 阻断**，关联 PR [#6127](https://github.com/agentscope-ai/QwenPaw/pull/6127) 正在 Review（移除无条件 UAC 提权），需尽快合并回主干并发布 hotfix。 |
| 3 | [#6158](https://github.com/agentscope-ai/QwenPaw/issues/6158) Token 异常消耗 2800w/周，无对话记录 | 5 | 用户未对话但 DeepSeek 巨额扣费，怀疑后台静默调用 | **信任红线**，需提供调用审计日志/计费明细导出功能，排查是否为 Cron/技能/插件隐式触发。 |
| 4 | [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) 忙碌会话静默丢消息（无队列/无报错） | 5 | Feishu Webhook 收到但未入队，多轮并发场景数据丢失 | **架构级缺陷**，Channel 层缺乏背压队列与幂等 ACK，建议引入持久化消息总线或至少内存队列+重试。 |
| 5 | [#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155) 1.x→2.0 升级多问题（Embedding 映射漏字段、Auto-Memo 失效等） | 4 | 升级文档/迁移脚本缺失，导致配置不兼容静默失败 | **迁移体验断层**，需输出 `1.x→2.0 迁移清单` 与自动化修正脚本，纳入 2.0.1 Release Note。 |

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 状态 |
|--------|-------|------|---------------|------|
| **P0 - 启动阻断** | [#6161](https://github.com/agentscope-ai/QwenPaw/issues/6161) Windows 非管理员无法启动 | 卡 `Waiting for HTTP ready...` | [#6127](https://github.com/agentscope-ai/QwenPaw/pull/6127) (Review 中) | 🔥 **最急** |
| **P0 - 启动阻断** | [#6169](https://github.com/agentscope-ai/QwenPaw/issues/6169) pip 安装版强制 UAC 提权 | 拒绝即退出 | [#6127](https://github.com/agentscope-ai/QwenPaw/pull/6127) 同款 | 🔥 |
| **P0 - 启动挂死** | [#6197](https://github.com/agentscope-ai/QwenPaw/issues/6197) `nvidia-smi` 挂起导致 Desktop 启动卡死 | 冻结二进制无响应 | [#6204](https://github.com/agentscope-ai/QwenPaw/pull/6204) (移除冗余 probe) | 🔥 |
| **P0 - 数据丢失** | [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) 忙碌会话静默丢消息 | 无队列、无错误、无重试 | 暂无 | ⚠️ 需设计评审 |
| **P0 - 渠道崩溃** | [#6152](https://github.com/agentscope-ai/QwenPaw/issues/6152) QQ 频道回复本地图片路径崩溃 | Pydantic `AnyUrl` 校验失败 | 暂无 | ⚠️ 需修复 `DataBlock` 序列化 |
| **P1 - 核心功能** | [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) Doom Loop 重复调工具 | 6 次才报警，浪费巨大 | 已关闭 wontfix（建议重开优化） | 🔄 |
| **P1 - 记忆回归** | [#6148](https://github.com/agentscope-ai/QwenPaw/issues/6148) 2.0 严重失忆/`/compact` 无效 | 同对话忘记上下文、截断、压缩失效 | 暂无 | 🧠 核心体验 |
| **P1 - 会话状态** | [#6047](https://github.com/agentscope-ai/QwenPaw/issues/6047) 新建会话误复用旧 `chats.json` 会话 | 升级后会话索引不同步 | 暂无 | 🔄 |
| **P1 - 多 Agent 切换** | [#6074](https://github.com/agentscope-ai/QwenPaw/issues/6074) Console 切 Agent 丢失上下文 | 切回等于新会话 | 暂无 | 🔄 |
| **P2 - 环境兼容** | [#6156](https://github.com/agentscope-ai/QwenPaw/issues/6156) Clash 代理冲突启动报错 | 终端启动失败 | 暂无 | 🌐 |
| **P2 - UI 渲染** | [#6202](https://github.com/agentscope-ai/QwenPaw/issues/6202) Desktop 技能导航渐进渲染失效 | >20 技能只显示前 20 | 暂无 | 🖥️ Tauri/IntersectionObserver 差异 |
| **P2 - 时区** | [#6196](https://github.com/agentscope-ai/QwenPaw/issues/6196) 容器日志时间戳固定 UTC | 忽略 `user_timezone` | [#6192](https://github.com/agentscope-ai/QwenPaw/pull/6192) **已合并** | ✅ |
| **P3 - 交互细节** | [#6165](https://github.com/agentscope-ai/QwenPaw/issues/6165) 英文输入建议弹窗无开关 | Mac M1 干扰输入 | 已关闭 invalid（建议增设置） | 💡 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 社区热度 | 实现进展 | 纳入下版本概率 |
|------|----------|----------|----------|----------------|
| **免认证主机白名单支持 CIDR** | [#6048](https://github.com/agentscope-ai/QwenPaw/issues/6048) | 5 评论 | 暂无 PR | 🟡 中（安全加固，易实现） |
| **可复用工作流编排 + 审计轨迹** | [#6163](https://github.com/agentscope-ai/QwenPaw/issues/6163) | 2 评论 | 暂无 PR | 🟢 高（符合多 Agent 编排战略，可能并入 2.1） |
| **Policy 规则 Web 端增删改** | [#5880](https://github.com/agentscope-ai/QwenPaw/issues/5880) | 2 评论 | 暂无 PR | 🟡 中（治理面板补全） |
| **禁用 Chat Input 建议弹窗** | [#6165](https://github.com/agentscope-ai/QwenPaw/issues/6165) | 4 评论 | 已关闭，建议重开为 Feature | 🟢 高（一行配置，用户痛点明确） |
| **内置/隔离 Python 运行时** | [#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160) | 3 评论 | 暂无 PR | 🟡 中（Desktop 打包体积权衡） |
| **Win7 兼容/非 Tauri 发布** | [#6076](https://github.com/agentscope-ai/QwenPaw/issues/6076) | 2 评论 | 暂无 PR | 🔴 低（Tauri

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 | 2026-07-17

---

## 1. 今日速览
**项目整体状态：低频维护模式，聚焦安全文档结构化治理。**  
过去 24 小时内无代码变更（0 PR）、无版本发布，全部动态集中在 5 条 **Issue 关闭** 上，均由贡献者 `YLChen-007` 发起并当日完成。任务性质高度一致：对历史安全 Issue（CVE 相关）进行 **D2 触发方式（`d2_xclaw_trigger_way`）分类归档**，并将证据写入 `llm-enhance/official-cve/issue-security/` 目录下的结构化 JSON 文件。社区无外部用户参与、无讨论热度，项目处于**内部文档治理收尾阶段**，代码层面处于静默期。

> **活跃度评分：⭐☆☆☆☆（极低）** —— 仅有文档分类任务推进，无功能迭代、Bug 修复或社区互动。

---

## 2. 版本发布
**今日无新版本发布。**  
最近一次 Release 记录不在本数据范围内，当前无预发布标签或 RC 版本迹象。

---

## 3. 项目进展
**无 PR 合并/关闭，代码库零变更。**  
全部进展体现在 Issue 侧的**元数据治理**上，共完成 5 份安全 Issue 的触发路径分类录入（涉及 Issue #264, #268, #271, #329, #466），对应 CSV 行号 121、123、124、125。  
此类工作属于 **LLM 增强数据集构建/安全知识库完善** 的配套动作，不直接推进核心功能，但为后续自动化分析管线（如 Prompt-to-Tool 链路复现）提供结构化标注。

---

## 4. 社区热点
**无高热度讨论。**  
所有 5 条 Issue 均为**单人创建、单人评论（疑为流程确认/自动化校验）、即时关闭**，评论数均为 1，Reactions 均为 0。无外部用户参与，无争议或需求讨论。  
典型链接示例：  
- [#631](https://github.com/qhkm/zeptoclaw/issues/631) — Issue 264 分类  
- [#632](https://github.com/qhkm/zeptoclaw/issues/632) — Issue 268 分类  
- [#633](https://github.com/qhkm/zeptoclaw/issues/633) — Issue 271 分类  
- [#634](https://github.com/qhkm/zeptoclaw/issues/634) — Issue 329 分类  
- [#635](https://github.com/qhkm/zeptoclaw/issues/635) — Issue 466 分类  

**诉求分析：** 维护团队正在系统性补全历史安全样本的「触发方式」字段，可能为下一阶段的 **自动化红队评测 / Prompt 注入分类器训练** 铺路。

---

## 5. Bug 与稳定性
**今日零 Bug 报告、零崩溃、零回归。**  
Issues 列表中无 `bug`、`crash`、`regression` 标签，全部为 `docs(security)` 文档分类任务。  
当前数据窗口内**不存在阻塞性缺陷**，亦无对应 Fix PR。

---

## 6. 功能请求与路线图信号
**无用户侧功能需求，无路线图新信号。**  
全部动作为内部治理任务，未涉及新特性提案。  
若结合任务模式推测：项目可能正在构建 **「Prompt → LLM → Custom Tool → Shell」完整调用链的标注数据集**，为后续 **Agent 安全评测基准** 或 **自动化漏洞复现能力** 奠基。建议关注 `llm-enhance/` 目录后续是否出现训练/评测脚本 PR。

---

## 7. 用户反馈摘要
**无真实终端用户反馈。**  
所有评论均来自任务执行者 `YLChen-007`，内容为流程性确认（如「validated」「workflow receipt recorded」），不包含使用场景、痛点或满意度信息。  
当前项目处于**纯维护者自驱模式**，缺乏外部采纳信号。

---

## 8. 待处理积压提醒
**数据窗口内无长期积压 Issue/PR 显现。**  
本次 5 条 Issue 均为「创建即关闭」，周期 < 1 天，执行效率极高。  
**建议维护者关注：**  
- 确认 `llm-enhance/official-cve/issue-security/` 目录下 JSON Schema 是否已稳定，避免后续批量导入时结构漂移。  
- 若该分类任务为批量作业一部分，建议引入 **GitHub Actions 自动校验 JSON 合规性**，减少人工 Issue 开销。  
- 关注是否有遗留历史 Issue 未完成 `d2_xclaw_trigger_way` 字段补全，防止数据集不完整影响下游任务。

---

> **总结：** ZeptoClaw 于 2026-07-17 处于**文档治理收尾期**，核心代码库静默，社区零互动。短期看无功能交付风险，中长期需警惕「无外部贡献、无用户反馈」导致的项目孤岛化风险。建议在下个迭代周期引入 **对外可用的功能增量** 或 **文档化成果发布**，激活社区生命力。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-07-17

---

## 1. 今日速览

*   **整体活跃度：极高**。过去 24 小时内共有 **74 条** 核心动态，其中 PR 更新 **50 条**（含 4 条合并/关闭），Issues 更新 **24 条**（含 2 条关闭），显示项目处于密集的特性开发与重构冲刺期。
*   **核心焦点：插件架构与通道重构**。PR 列表由 JordanTheJet 主导的 **Channel Plugin 堆栈（#8852, #8862, #8863, #8949, #8923）** 占据主导，旨在实现 WASM 沙箱化通道插件的运行时、Webhook 入口、WebSocket/TCP 出站能力，这是当前最大的架构级变更。
*   **技术债务清理并行推进**。针对 v0.8.3 发布后遗留的 **三重签名机制冗余（#9101）**、**pgvector 启动恐慌（#9085）**、**模型缓存写入缺失（#9046）** 等 S1/S2 级阻塞性 Bug 均已有对应修复 PR 或正在处理中。
*   **RFC 管道饱和**。当前有 **10+ 个** 处于 `accepted` 或 `in-progress` 状态的 RFC/Tracker（如统一 Provider 架构 #5937、记忆分层 #9048、A2A 出站客户端 #9106），表明项目正从“功能堆砌”转向“架构治理”阶段。
*   **维护者变动**。核心维护者 `@singlerider` 于 7 月 15 日离项目，PR #9107 已移除其 44 处 CODEOWNERS 条目，需关注相关模块（zeroclaw-api, zeroclaw-infra 等）的审查接力。

---

## 2. 版本发布

> **无新版本发布**。当前处于 v0.8.3 发布后的维护窗口（Tracker #7320 已关闭），v0.8.4 维护列车（Tracker #8357）目标日期为 2026-07-31，正在积累修复与小增量。

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR (4 条)
*   **#7320 [Tracker] v0.8.3 milestone index** — **已关闭**。标志着 v0.8.3 里程碑正式收尾，所有子 Tracker 均已关闭。
*   **#8798 [RFC] Consolidate /ws/chat and /acp** — **已关闭 (wontfix)**。决定保留双 WebSocket 通道架构，避免过度合并带来的复杂度。
*   *其余 2 条合并/关闭 PR 标题未在列表中显示，推测为小型修复或文档更新。*

### 🚧 核心在研 PR 堆栈 (Channel Plugin 生态)
以下 PR 构成依赖链，**需按顺序合并**，共同构建“插件化通道”基础设施：
1.  **#8852 (Root)**: `feat(channels): run installed WASM channel plugins` — 运行时入口，使安装的 WASM 通道插件可运行。
2.  **#8862**: `feat(gateway): host webhook ingress → plugin inbound queue` — Webhook 入站路由至插件队列。
3.  **#8863**: `feat(plugins): host-mediated outbound WebSocket for channel plugins` — 插件出站 WebSocket 能力 (WIT: `ws-client`)。
4.  **#8949 (Stacked on #8862)**: `feat(gateway): webhook GET + challenge-echo for plugin verification` — 补充 GET 验证回调，满足 Line/Slack 等平台验证需求。
4.  **#8923**: `feat(plugins): host-mediated outbound raw TCP (+TLS)` — 插件原始 TCP/TLS 能力 (WIT: `socket`)，解锁 IRC/SMTP/MQTT 等协议。
5.  **#8855**: `feat(channels): mirror built-in channels via plugin provides` — 允许插件镜像内置通道家族。
6.  **#8857**: `feat(channels): mirror-channel parity — owner-gate + env credential fallback` — 镜像通道凭证平权。

### 🚀 其他重要进行中 PR
*   **#8486**: `feat(gateway): add OpenAI chat completions endpoint` — **极高价值**，使 ZeroClaw 网关兼容 OpenAI SDK/生态工具，关联 Issue #8550。
*   **#8571**: `fix(delegate): skip global credential fallback for OAuth target providers` — 修复委托给 OAuth 子代理时错误回退全局凭证的安全/功能性 Bug。
*   **#8966**: `fix(config): fix max ctx fallback` — 修复上下文窗口回退逻辑，三级兜底：Profile -> Provider Model -> 默认值。
*   **#9104**: `feat(providers): add grok_cli subprocess model provider` — 新增 Grok CLI 本地子进程 Provider，无需 HTTP API 即可接入 Grok。
*   **#9105**: `fix(memory): allow Lucid ARM cold starts` — 将 Lucid 向量检索超时从 500ms/800ms 调至 3s，解决 ARM 架构冷启动超时问题。

---

## 4. 社区热点

| 排名 | Issue/PR | 标题 | 评论数 | 核心诉求分析 |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **#5937** | **Refactor: Unify providers architecture** | **11** | **架构治理核心**。旨在解决 Provider 模块中 `reqwest` 客户端管理混乱、配置碎片化、代码重复严重的问题。风险标记 `risk:high`，已接受进入实施阶段。 |
| **2** | **#7952** | **Publish optional broad-channel prebuilts** | **7** | **分发策略优化**。用户因精简版预构建缺少特定通道而困惑，提议发布 `channels-full` 可选包，平衡安装体积与开箱即用性。 |
| **3** | **#9101** | **Consolidate release attestation mechanisms** | **5** | **供应链安全与 CI 效率**。v0.8.3 引入三重签名机制，导致 CI 耗时翻倍、资产膨胀至 53 个。急需统一为单一签名故事。 |
| **4** | **#8832** | **RFC: Gateway-local Kanban board** | **5** | **可观测性缺口**。缺乏统一视图查看 Agent 工作进度，参考 OpenClaw/Hermes 引入看板，属于 `type:rfc` 讨论期。 |
| **5** | **#9048** | **RFC: Separate conversation history from long-term memory** | **5** | **记忆架构解耦**。实现层面仍混用 `MemoryCategory::Conversation`，导致生命周期管理混淆，需在运行时/网关/通道层分离。 |

> **趋势**：热点集中在**架构重构**、**发布工程**、**记忆系统**三大结构性议题，而非单点功能需求。

---

## 5. Bug 与稳定性

| 严重级 | Issue | 标题 | 状态 | 关联 Fix PR | 影响范围 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **S1 (Workflow Blocked)** | **#9085** | `try_enable_pgvector` nested runtime panic on startup | `accepted` | *暂无 PR* | **Postgres + pgvector 启动崩溃**。Tokio 运行时上下文中初始化客户端导致 panic，阻断网关/代理启动。 |
| **S1 (Workflow Blocked)** | **#8560** | `browser_open` hangs agent turn (unbounded subprocess wait) | `in-progress` | *暂无 PR* | **工具链死锁**。无头环境/启动器前台阻塞导致 Agent 轮次无限挂起，波及 `robot-kit TTS`、`channels ffmpeg`。 |
| **S2 (Degraded)** | **#9046** | `models_cache.json` read but never written | `in-progress` | *暂无 PR* | **模型刷新失效**。`zeroclaw models refresh` 提示无法生效，每次启动均重新拉取目录。 |
| **S2 (Degraded)** | **#9089** | Tool output `[AUDIO:]` marker not parsed | `accepted` | *暂无 PR* | **多模态缺口**。仅支持 `[IMAGE:]` 解析，音频标记作为纯文本传给模型。 |
| **Security/Logic** | **#8571** | Delegate falls back to global cred for OAuth providers | **Open PR #8571** | **#8571** | **凭证泄露/认证失败**。委托给 OAuth 子代理时错误使用协调者 API Key。 |

> **关注点**：S1 级 Bug (#9085, #8560) 均处于“已接受/进行中”但**缺乏对应修复 PR 链接**，建议维护者优先排期或确认 PR 关联。

---

## 6. 功能请求与路线图信号

结合 Issue 状态与 PR 进度，判断下一版本 (v0.8.4 / v0.9.0) 纳入概率：

| 功能/需求 | 来源 Issue | 状态 | 纳入概率 | 理由 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAI 兼容 Chat Completions API** | #8550 (关联 #8486) | **PR Open** | ⭐⭐⭐⭐⭐ **极高** | PR #8486 体量大 (XL) 但进度推进快，生态兼容性刚需，v0.8.4 核心卖点。 |
| **Channel Plugin Runtime (WASM)** | #8852 等堆栈 | **PR Stack Open** | ⭐⭐⭐⭐ **高** | 架构战略级重构，PR 堆栈已就绪，但风险高需充分测试，可能分批合入 v0.8.x 维护列车。 |
| **Grok CLI Provider** | 新需求 | **PR #9104 Open** | ⭐⭐⭐ **中高** | 实现简单 (子进程调用)，无外部 API 依赖，代码变更小，易回滚。 |
| **Lucid ARM Timeout Fix** | 隐性需求 | **PR #9105 Open** | ⭐⭐⭐⭐ **高** | 修复现有功能在 ARM 上的可用性回归，补丁级变更。 |
| **Memory: History vs Long-term Separation** | #9048 | `accepted` RFC | ⭐⭐ **中** | 设计共识已达成，但涉及运行时/网关/通道多层改动，工程量大，预计 v0.9.0。 |
| **A2A Outbound Client (A2ATool)** | #9106 / #3566 | 新 RFC | ⭐⭐ **中** | 补全 A2A 协议闭环，但依赖 #3566 Server 侧成熟度，优先级次于核心稳定性。 |
| **Realtime Speech Channel (Gemini Live)** | #8780 | `accepted` RFC | ⭐ **低/中** | 前沿探索，依赖 Gemini Live API 稳定性，属实验性功能，可能以 Feature Flag 形式进入。 |

---

## 7. 用户反馈摘要

从 Issue 评论与描述中提炼的真实痛点：

1.  **“开箱即用”与“定制化”的矛盾** (#7952)：
    *   *痛点*：精简版预构建不含所有通道，用户配置冷门通道时发现不可用，需自行编译，门槛高。
    *   *期望*：提供 `channels-full` 可选安装包，或文档明确指引编译步骤。

2.  **记忆系统“听不懂人话”** (#9048, #8891, #9103)：
    *   *痛点*：对话历史污染长期记忆；Lucid 等向量连接器被迫实现完整存储后端接口而非仅做增强；用户无法直观控制“记住什么/忘记什么”。
    *   *期望*：权威存储与增强连接器解耦；提供记忆策略配置（TTL、作用域、重要性阈值）。

3.  **多模态工具链断层** (#9089, #8560)：
    *   *痛点*：工具返回音频路径被当文本处理；浏览器打开失败导致整个 Agent 挂死，无超时兜底。
    *   *期望*：统一多模态 Marker 协议 (`[IMAGE:]`, `[AUDIO:]`, `[FILE:]`); 所有子进程调用强制超时与错误捕获。

4.  **运维可视化缺失** (#8832, #8170, #8905)：
    *   *痛点*：Web Dashboard 仅展示版本号，无法升级；无法看到 Agent 正在做什么；无法看到并发负载。
    *   *期望*：Dashboard 集成在线升级、Kanban 视图、实时 In-flight 计数器。

---

## 8. 待处理积压

需维护者优先关注的长期未响应/高风险项：

| 项目 | 类型 | 创建/更新时间 | 风险 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- |
| **#5937** | Issue (Enhancement) | 2026-04-20 / 2026-07-16 | 🔴 **High** | **Provider 统一重构**拖延 3 月，代码腐烂加剧。建议指定 Owner 拆解为小 PR 并行推进，或明确延期至 v0.9.0。 |
| **#8398** | Issue (RFC) | 2026-06-27 / 2026-07-16 | 🟠 **High** | **Plugin 权限/密钥模型** 两次重构未定论，

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*