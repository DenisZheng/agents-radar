# OpenClaw 生态日报 2026-06-27

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-27 00:38 UTC

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

# OpenClaw 项目日报 — 2026-06-27（周六）

---

## 1. 今日速览

OpenClaw 社区在 6 月 27 日保持高活跃度，Issues 与 PR 各更新 500 条。无新版本发布，显示项目处于**功能打磨与问题修复高峰期**。PR 待合并量 453 条远超已合并/关闭的 47 条，积压压力明显；Issues 侧新开/活跃 469 条 vs 已关闭 31 条，反映出大量社区诉求仍在排队等待处理。多个 P1 Bug 涉及会话崩溃、内存泄漏、安全边界和跨平台兼容性，需维护者持续关注。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日无明确合并/关闭记录。以下 PR 处于**审核就绪（👀 ready for maintainer look）**或**等待作者推进（⏳ waiting on author）**状态，代表近期可预期的合并方向：

| PR | 方向 | 状态 |
|---|---|---|
| [PR #97041](https://github.com/openclaw/openclaw/pull/97041) | 修复 `collectMediaUrlsFromRecord` 递归无环保护导致的潜在崩溃 | 👀 审核就绪 |
| [PR #97110](https://github.com/openclaw/openclaw/pull/97110) | 原生应用（Android/Apple）本地化字符串清单补全 | 👀 审核就绪 |
| [PR #97125](https://github.com/openclaw/openclaw/pull/97125) | `doctor` 命令暴露 auth profile 健康诊断结果 | ⏳ 等待作者 |
| [PR #97123](https://github.com/openclaw/openclaw/pull/97123) | Codex 插件新增 `always` 审批模式（每次写操作需确认） | ⏳ 等待作者 |
| [PR #96873](https://github.com/openclaw/openclaw/pull/96873) | OpenRouter provider 限制视频响应读取大小，防止 OOM | 👀 审核就绪 |
| [PR #96322](https://github.com/openclaw/openclaw/pull/96322) | MiniMax provider 限制 JSON 响应读取大小，防止 OOM | ⏳ 等待作者 |
| [PR #96323](https://github.com/openclaw/openclaw/pull/96323) | OpenAI provider 限制 JSON/文本响应读取大小，防止 OOM | ⏳ 需要证明 |
| [PR #94828](https://github.com/openclaw/openclaw/pull/94828) | 新增 `openclaw skills uninstall <slug>` CLI 命令 | ⏳ 等待作者 |
| [PR #97100](https://github.com/openclaw/openclaw/pull/97100) | 修复 Slack 线程上下文在 session reset 后未重新注入的 Bug | ⏳ 需要证明 |
| [PR #97127](https://github.com/openclaw/openclaw/pull/97127) | 新增 OpenPhone Android 节点识别与只读命令支持 | ⏳ 等待作者 |

**关键推进方向：**
- **安全加固**：多个 provider（OpenRouter、MiniMax、OpenAI）统一修复响应体无界读取漏洞，防止恶意上游导致 OOM。
- **开发者体验**：`doctor` 命令持续扩展诊断维度（auth profile），`skills uninstall` 补全 skill 生命周期管理。
- **跨平台**：OpenPhone Android 节点支持、原生应用本地化覆盖改进。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| # | Issue | 👍 | 评论 | 核心诉求 |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows 桌面客户端 | 81 | 109 | 补全 macOS/iOS/Android 之外的平台覆盖，呼声最高的功能请求之一 |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | Android 预编译 APK 下载 | 2 | 25 | 降低非技术用户运行 Android 节点的门槛 |
| [#77598](https://github.com/openclaw/openclaw/issues/77598) | 实时追踪 AI dev agent 行为 | 1 | 22 | 社区对 agent 自主运行的透明度和可观测性有强烈兴趣 |
| [#86538](https://github.com/openclaw/openclaw/issues/86538) | Session 写锁超时阻塞子 agent 投递 | 1 | 16 | 多 agent 编排的可靠性基础问题 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets — 防止 agent 读取原始 API Key | 4 | 13 | 安全/防 prompt injection 的核心诉求 |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | MCP 工具调用的 channel 审批机制 | 1 | 13 | 将 shell-exec 已有的审批流程扩展到 MCP 工具 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多 agent 编排不稳定 | 1 | 13 | 并发 `agents add` 配置覆盖、session-lock 失败 |
| [#74484](https://github.com/openclaw/openclaw/issues/74484) | Gateway pairing scope 死锁 | 2 | 12 | CLI 权限不足无法审批修复请求 |

**分析：** 社区讨论集中在三大主题——**安全边界扩展**（masked secrets、MCP approval、sandbox）、**多 agent 可靠性**（session lock、subagent delivery、orchestration）、**平台覆盖**（Linux/Windows、Android APK）。👍 数最高的是 #75（Linux/Windows 客户端），反映出桌面平台缺失是长期痛点。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1 — 严重（崩溃/数据丢失/安全）

| Issue | 类型 | 影响面 | 有 Fix PR |
|---|---|---|---|
| [#86538](https://github.com/openclaw/openclaw/issues/86538) — Session 写锁超时阻塞子 agent 投递通道 | 行为 Bug | session-state, message-loss | 无 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) — 多 agent 并发配置覆盖 + detached child work | 行为 Bug | session-state, message-loss, auth | 无 |
| [#75593](https://github.com/openclaw/openclaw/issues/75593) — `/subagents list` spawn 后仍返回空列表 | 行为 Bug | session-state | 无 |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) — active-memory 阻塞回复 + QMD boot 过载多 agent 网关 | 可靠性 | crash-loop | 无 |
| [#43996](https://github.com/openclaw/openclaw/issues/43996) — Sandbox 容器因 no-new-privileges 立即退出 | 行为 Bug | security, crash-loop | 无 |
| [#76042](https://github.com/openclaw/openclaw/issues/76042) — 2026.5.x 无法在合理时间内完成全新安装 | 回归 | auth, crash-loop | 无 |
| [#76171](https://github.com/openclaw/openclaw/issues/76171) — 陈旧 worker 进程堆积导致主机负载 25-31 | 可靠性 | crash-loop | 无 |
| [#76038](https://github.com/openclaw/openclaw/issues/76038) — Stuck Session Recovery 双重失效 + session 预处理耗时过长 | Bug | session-state, crash-loop | 无 |
| [#77012](https://github.com/openclaw/openclaw/issues/77012) — WebChat session transcript 每轮被覆盖（5.2 回归） | 回归 | data-loss, message-loss | 无 |
| [#77642](https://github.com/openclaw/openclaw/issues/77642) — lossless-claw 重复回答 + 工具结果丢失（5.3 回归） | 回归 | session-state, message-loss | 无 |
| [#73182](https://github.com/openclaw/openclaw/issues/73182) — Claude reasoning 默认被静默开启，双倍消耗 Anthropic 额度 | 回归 | security, auth | 无 |
| [#75380](https://github.com/openclaw/openclaw/issues/75380) — provider-payload.jsonl / cache-trace.jsonl 无大小限制持续增长 | 可靠性 | security, crash-loop | 无 |
| [#78055](https://github.com/openclaw/openclaw/issues/78055) — Subagent announce 传递过期输出 + 继承无关历史 | Bug | session-state, message-loss | 无 |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) — Anthropic 路径历史 thinking 块重放导致 400 错误，长会话永久卡死 | Bug | session-state, message-loss, auth | 无 |
| [#77467](https://github.com/openclaw/openclaw/issues/77467) — MiniMax Portal OAuth 无法自动刷新 | Bug | auth | 无 |
| [#75782](https://github.com/openclaw/openclaw/issues/75782) — Embedded-run auth 阶段始终 10-15s 同步阻塞事件循环 | 性能 | auth | 无 |

### 🟡 P2 — 中等

| Issue | 类型 | 有 Fix PR |
|---|---|---|
| [#77930](https://github.com/openclaw/openclaw/issues/77930) — Discord channel 在 2026.5.4 中无法加载（回归） | 回归 | 无 |
| [#77802](https://github.com/openclaw/openclaw/issues/77802) — `doctor --fix` 遇到多验证错误时原子性失败 | Bug | 无 |
| [#77136](https://github.com/openclaw/openclaw/issues/77136) — WebChat 部分助手消息不渲染（TUI 正常） | Bug | 无 |
| [#77733](https://github.com/openclaw/openclaw/issues/77733) — `/new` / `/reset` 不再触发 persona 问候（5.3 回归） | 回归 | 无 |
| [#72031](https://github.com/openclaw/openclaw/issues/72031) — Bedrock `image` 工具在 aws-sdk 认证模式下仍要求 apiKey | 回归 | 无 |
| [#75621](https://github.com/openclaw/openclaw/issues/75621) — Gateway 重复生成相同 stdio MCP 子进程（内存+CPU 泄漏） | Bug | 无 |

**关键发现：** 16 个 P1 Issue 中**无一**关联了明确的 Fix PR，说明维护者处理速度跟不上问题积压。多个 5.x 回归（WebChat transcript 覆盖、persona greeting 丢失、Discord channel 加载失败）直接影响日常使用体验，建议优先处理。

---

## 6. 功能请求与路线图信号

### 高优先级功能请求（已有 PR 推进）

| 功能 | Issue | 相关 PR | 信号 |
|---|---|---|---|
| Linux 桌面客户端 | [#75](https://github.com/openclaw/openclaw/issues/75) | [PR #61576](https://github.com/openclaw/openclaw/pull/61576) — Rust/GTK4 实现 | ✅ 已有替代轨道 PR |
| Codex 插件 always 审批模式 | — | [PR #97123](https://github.com/openclaw/openclaw/pull/97123) | ✅ 审核就绪 |
| Skills uninstall 命令 | — | [PR #94828](https://github.com/openclaw/openclaw/pull/94828) | ⏳ 等待作者 |
| OpenPhone Android 节点 | — | [PR #97127](https://github.com/openclaw/openclaw/pull/97127) | ⏳ 等待作者 |
| Provider 响应体大小限制（安全） | — | [PR #96873](https://github.com/openclaw/openclaw/pull/96873), [#96322](https://github.com/openclaw/openclaw/pull/96322), [#96323](https://github.com/openclaw/openclaw/pull/96323) | ✅ 多 provider 同步修复 |
| Session reset hooks 触发 daily/idle reset | — | [PR #61675](https://github.com/openclaw/openclaw/pull/61675) | ⏳ 需要证明 |
| Webchat 内联按钮支持 | [#46656](https://github.com/openclaw/openclaw/issues/46656) | 无 | ❌ 无 PR |
| Filesystem 沙箱配置 | [#7722](https://github.com/openclaw/openclaw/issues/7722) | 无 | ❌ 无 PR |
| Exec-approvals denylist 支持 | [#6615](https://github.com/openclaw/openclaw/issues/6615) | 无 | ❌ 无 PR |
| 动态模型发现（OpenRouter） | [#10687](https://github.com/openclaw/openclaw/issues/10687) | 无 | ❌ 无 PR |
| 工具 schema token 开销削减 | [#14785](https://github.com/openclaw/openclaw/issues/14785) | 无 | ❌ 无 PR |

### 路线图判断

- **安全加固**是近期主线：masked secrets、MCP approval、sandbox 修复、provider OOM 防护均有社区强需求，部分已有 PR。
- **多 agent 可靠性**（session lock、subagent delivery、orchestration）是 P1 重灾区但缺少 PR，可能是维护者需要亲自调研的领域。
- **Linux 桌面客户端**出现双轨道 PR（Rust/GTK4 vs C/GTK4），需要维护者做出技术选型决策。

---

## 7. 用户反馈摘要

### 😤 痛点与不满

1. **5.x 版本回归集中爆发**：WebChat transcript 覆盖、persona greeting 丢失、Discord channel 加载失败、Bedrock image 工具认证回退——多位用户明确指出从 4.x 升级后体验降级，部分用户表示"无法在合理时间内完成安装"（[#76042](https://github.com/openclaw/openclaw/issues/76042)）。
2. **多 agent 编排不可靠**：并发 `agents add` 导致配置覆盖、subagent list 返回空、session 写锁超时——影响依赖并行 agent 的高级用户工作流（[#43367](https://github.com/openclaw/openclaw/issues/43367), [#86538](https://github.com/openclaw/openclaw/issues/86538)）。
3. **Claude reasoning 默认静默开启**：用户发现 Anthropic 账单翻倍，thinking 块泄露到聊天界面，且无回退路径（[#73182](https://github.com/openclaw/openclaw/issues/73182)）。
4. **Stuck Session Recovery 形同虚设**：session 长时间卡在 processing 状态，recovery 机制选择"保持 lane"而非强制恢复，最终导致 Gateway 被 systemd 超时杀死（[#76038](https://github.com/openclaw/openclaw/issues/76038)）。
5. **Android 无预编译 APK**：有用户通过 AI 助手代发 Issue，反映非技术用户无法自行编译 Android 客户端（[#9443](https://github.com/openclaw/openclaw/issues/9443)）。

### 😐 中性 / 建设性

1. **Token 开销关注**：工具 schema 每 session 消耗 ~3,500 tokens，用户建议按需加载或延迟加载（[#14785](https://github.com/openclaw/openclaw/issues/14785)）。
2. **TUI 体验细节**：Shift+Enter 换行、emoji 可访问性开关等终端用户体验优化请求持续存在（[#10118](https://github.com/openclaw/openclaw/issues/10118), [#9637](https://github.com/openclaw/openclaw/issues/9637)）。
3. **macOS TCC 权限粒度**：用户建议打包专用 Node 二进制文件以缩小 Full Disk Access 授权范围（[#69799](https://github.com/openclaw/openclaw/issues/69799)）。

### 😊 满意 / 认可

1. **Agent 行为追踪 Issue**（[#77598](https://github.com/openclaw/openclaw/issues/77598)）获得社区长期关注，用户认可这种透明化监控 agent 自主运行的方式。
2. **Masked Secrets 提案**获得 4 👍 和 13 条评论，安全方向得到社区共鸣（[#10659](https://github.com/openclaw/openclaw/issues/10659)）。

---

## 8. 待处理积压

### ⚠️ 长期未响应的高优先级 Issue

| Issue | 创建日期 | 状态 | 建议 |
|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) — Linux/Windows 客户端 | 2026-01-01 | 开放，有 PR 但需技术决策 | 对 PR #61576 做出选型回应 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) — Masked Secrets | 2026-02-06 | 开放，无 PR | 排入安全路线图 |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) — Filesystem Sandbox | 2026-02-03 | 开放，无 PR | 评估实现复杂度 |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) — Exec denylist | 2026-02-01 | 开放，7 👍 | 相对简单，建议尽快排期 |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) — 动态模型发现 | 2026-02-06 | 开放，无 PR | 影响 OpenRouter 用户体验 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) — 工具 schema token 开销 | 2026-02-12 | 开放，无 PR | 影响所有用户的成本 |
| [#73182](https://github.com/openclaw/openclaw/issues/73182) — Claude reasoning 默认开启 | 2026-04-28 | 开放，无 PR | 直接影响用户账单，建议优先 |
| [#76042](https://github.com/openclaw/openclaw/issues/76042) — 5.x 安装超时 | 2026-05-02 | 开放，无 PR | 影响新用户入门 |
| [#76171](https://github.com/openclaw/openclaw/issues/76171) — Worker 进程堆积 | 2026-05-02 | 开放，无 PR | 影响所有长时间运行的实例 |
| [#77012](https://github.com/openclaw/openclaw/issues/77012) — WebChat transcript 覆盖 | 2026-05-04 | 开放，无 PR | 5.2 回归，影响所有 WebChat 用户 |

### ⚠️ 积压 PR 风险

- **453 个待合并 PR** 远超 47 个已合并/关闭，大量 PR 处于 "⏳ waiting on author" 状态。
- 多个安全相关 PR（provider OOM 防护）已 ready 但未合并，建议维护者尽快审核。
- [PR #61576](https://github.com/openclaw/openclaw/pull/61576)（Rust/GTK4 Linux 客户端）和 [#75](https://github.com/openclaw/openclaw/issues/75) 形成竞争轨道，需明确技术方向以避免社区贡献者困惑。

---

**日报生成时间：** 2026-06-27
**数据来源：** [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)
**下次建议关注：** 5.x 回归修复进度、多 agent 可靠性 PR 排期、安全加固 PR 合并节奏。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比报告

**数据日期：2026-06-27 | 覆盖项目：14 个**

---

## 1. 生态全景

2026 年 6 月 27 日，个人 AI 助手与自主智能体开源生态处于**密集迭代与安全加固并行**的活跃期。14 个跟踪项目中，8 个处于高活跃状态，1 个已发布大版本（CoPaw v2.0.0-beta.1），2 个有新版本发布（LobsterAI 2026.6.26、ZeroClaw v0.8.2），3 个处于低活动或静默维护期。三大共性趋势浮现：**安全边界加固**（供应链签名、沙箱逃逸防护、密钥隔离）、**多 Agent 编排可靠性**（session 锁、子代理投递、审批状态机）、**跨平台桌面端体验**（Linux/Windows 客户端、移动端适配）。PR 积压是普遍现象，OpenClaw（453 待合并）、Hermes（47 待合并）、ZeroClaw（39 待合并）均面临审查带宽瓶颈。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度 | 阶段判断 |
|------|------------|---------|---------|--------|----------|
| **OpenClaw** | 500 | 500 | 无 | 🟡 积压严重 | 功能打磨 & 问题修复高峰 |
| **NanoBot** | 28 | 46 | 无 | 🟡 快速迭代 | 安全修复 & 功能扩张 |
| **Hermes Agent** | 50 | 50 | 无 | 🟡 积压上升 | 桌面端稳定性攻坚 |
| **PicoClaw** | 4 | 18 | 无 | 🟢 稳定 | 日常迭代维护 |
| **NanoClaw** | 3 | 11 | 无 | 🟡 审查积压 | 密集功能迭代 |
| **NullClaw** | 1 | 0 | 无 | 🔴 静默 | 维护停滞 |
| **IronClaw** | 29 | 50 | 无 | 🟢 高活跃 | Reborn 架构大规模迭代 |
| **LobsterAI** | 1 | 8 | ✅ 2026.6.26 | 🟢 紧凑 | 版本发布 & 质量修复 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ 无活动 | — |
| **Moltis** | 0 | 0 | 无 | 🟡 间歇期 | 功能迭代间歇 |
| **CoPaw** | 29 | 50 | ✅ v2.0.0-beta.1 | 🟢 高活跃 | 大版本迁移收尾 |
| **ZeptoClaw** | 0 | 0 | 无 | ⚪ 无活动 | — |
| **ZeroClaw** | 50 | 50 | ✅ v0.8.2 | 🟢 高活跃 | 安全架构演进 |
| **合计** | **744** | **783** | **3 个版本** | — | — |

> **注**：Issues/PR 数为过去 24 小时更新量，含新开、活跃、关闭。健康度综合积压比、P1 Bug 数量、合并节奏判断。

---

## 3. OpenClaw 在生态中的定位

### 社区规模优势

| 维度 | OpenClaw | 最接近竞品 | 倍数 |
|------|----------|-----------|------|
| Issues 日活 | 500 | ZeroClaw (50) | 10× |
| PR 日活 | 500 | Hermes/IronClaw/ZeroClaw (50) | 10× |
| 社区讨论深度 | Issue #75 获 81 👍、109 评论 | — | 生态内最高 |
| P1 Bug 积压 | 16 个 | NanoBot (3) | 5.3× |

OpenClaw 是生态内**社区体量最大、问题暴露最充分**的项目，但同时也是**积压最严重**的项目——453 个待合并 PR 和 16 个无 Fix PR 的 P1 Issue 反映出维护者带宽已成为核心瓶颈。

### 技术路线差异

| 维度 | OpenClaw | 竞品做法 |
|------|----------|---------|
| 多 Agent 编排 | Session 写锁 + subagent announce，P1 问题集中 | ZeroClaw 推独立 delegate mode + bounded delegation；IronClaw 用 Capability Policy 四维度模型 |
| 安全边界 | Masked Secrets（Issue 提案中）、MCP approval（社区诉求） | IronClaw 已实现 CapabilityDispatcher 权限密封；ZeroClaw 推供应链 SLSA 签名 |
| 桌面端 | Linux/Windows 客户端长期高需求（Issue #75, 👍81），有 Rust/GTK4 PR | Hermes 已有 macOS/Windows 桌面端但 Bug 集中；CoPaw 用 Tauri |
| Provider 管理 | 多 provider OOM 防护 PR 已就绪 | NanoBot 同步修复 exec 白名单绕过 |

### 核心判断

OpenClaw 处于**"社区驱动暴露问题 → 维护者消化滞后"**的阶段。其功能覆盖面广（多通道、多 provider、多平台），但架构治理深度落后于 IronClaw（Capability Policy）和 ZeroClaw（WASM 插件运行时、供应链安全）。若积压持续，可能导致贡献者向竞品分流。

---

## 4. 共同关注的技术方向

### 方向一：安全边界加固（涉及 8/14 个项目）

| 项目 | 具体诉求 | 进展阶段 |
|------|----------|---------|
| OpenClaw | Masked Secrets 防 prompt injection、MCP 工具审批 | Issue 提案，无 PR |
| NanoBot | exec.allowPatterns 白名单绕过（5 变体） | 修复 PR #4562 待审 |
| IronClaw | CapabilityDispatcher 权限密封、NoExposureGuard | ✅ 已合并 |
| ZeroClaw | 供应链 SLSA 签名 + 硬件 PGP、per-agent MCP 隔离 | RFC blocked，回归测试 PR 已提交 |
| PicoClaw | web_fetch SSRF guard 绕过（ISATAP IPv6） | ✅ 已合并 |
| NanoClaw | libsignal 日志泄露密钥材料 | PR #2860 待审 |
| Hermes | Honcho 记忆泄露（#40170） | 22 天未处理 |
| CoPaw | 治理策略模式泛化 | PR #5546 待审 |

### 方向二：多 Agent 编排可靠性（涉及 6/14 个项目）

| 项目 | 具体诉求 | 进展阶段 |
|------|----------|---------|
| OpenClaw | Session 写锁超时阻塞子代理投递、并发 agents add 配置覆盖 | P1，无 PR |
| NanoBot | Cron job 上下文串扰、heartbeat 独立 session_key | PR 已就绪 |
| Hermes | 子代理 UI 永远卡在 running、状态不一致 | 开放 |
| IronClaw | 工具批准状态机作用域泄漏 | 多 Bug 集中，#5366 部分缓解 |
| ZeroClaw | 独立 delegate mode、per-agent 环境变量隔离 | RFC 阶段 |
| LobsterAI | Subagent 进度回退（stale progress） | ✅ 已修复 |

### 方向三：跨平台桌面端体验（涉及 5/14 个项目）

| 项目 | 具体诉求 | 进展阶段 |
|------|----------|---------|
| OpenClaw | Linux/Windows 桌面客户端（Issue #75, 👍81） | PR #61576 待决策 |
| Hermes | macOS segfault、Windows 控制台闪烁 | P0/Fix PR 已提交 |
| CoPaw | Tauri 桌面端启动黑屏、优雅关机 | ✅ 已修复 |
| LobsterAI | Windows 数据备份卡死 | 🔴 无 PR |
| PicoClaw | Android 启动失败 | 无响应 |

### 方向四：成本控制与推理优化（涉及 4/14 个项目）

| 项目 | 具体诉求 |
|------|----------|
| OpenClaw | Claude reasoning 默认静默开启导致双倍消耗（#73182） |
| Hermes | 动态 reasoning effort 按模型调整（PR #53343） |
| NanoBot | 推理 effort 中途升级（PR #4552） |
| CoPaw | 模型自动降级（#5572）、DeepSeek thinking 卡死（#5328） |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构特色 | 差异化壁垒 |
|------|----------|---------|-------------|-----------|
| **OpenClaw** | 全功能个人 AI 助手 OS | 技术通用户、自托管爱好者 | 多通道 + 多 provider + 多平台，插件/Skill 生态 | 社区规模、通道覆盖广度 |
| **IronClaw** | 安全优先的多 Agent 运行时 | 企业/安全敏感用户 | Reborn 架构 + Capability Policy 四维度 + Rust 实现 | 权限密封、多租户隔离契约测试 |
| **ZeroClaw** | 可扩展的 Agent 平台 | 开发者生态 | WASM 插件运行时 + A2A 发现 + SLSA 供应链安全 | 插件沙箱化、Agent 间互操作标准 |
| **CoPaw** | 桌面端 AI 助手（原 QwenPaw） | 中文用户群体 | Tauri 桌面 + agentscope 2.0 + Scroll 上下文策略 | 中文生态、桌面端体验、消息聚合 |
| **NanoBot** | 轻量多通道 Agent 框架 | 中小团队 | Python + Node.js 混合、heartbeat/cron 内置 | 快速功能交付、低门槛部署 |
| **Hermes Agent** | 研究型个人 AI 助手 | 研究者/高级用户 | Dashboard + STT/TTS + 密码学审计链提案 | 学术社区、可审计性方向 |
| **NanoClaw** | 移动端优先的 AI 助手 | 移动用户 | Kotlin/Android + libsignal 加密 + Baileys WhatsApp | 端到端加密、WhatsApp/Telegram/Discord 三通道 |
| **PicoClaw** | 嵌入式/轻量 Agent | IoT/边缘场景 | Go 实现 + 低资源占用 | 小体积、快速启动 |
| **LobsterAI** | 团队协作 AI 助手 | 企业团队 | Electron 桌面 + OpenClaw 运行时 + Cowork 多 Agent | Plan Mode 工作流、子代理进度追踪 |
| **NullClaw** | Zig 语言 Agent 实验 | Zig 社区 | Zig 0.16 实现 | 语言生态独占 |
| **Moltis** | 浏览器自动化 Agent | 开发者 | Rust + browser-use + 视觉反馈 | 浏览器操作截图时序视图 |
| **TinyClaw** | — | — | — | 当前无活动 |

---

## 6. 社区热度与成熟度分层

### 🟢 快速迭代期（高产出、高积压）

| 项目 | 特征 | 风险 |
|------|------|------|
| OpenClaw | 社区体量最大，问题暴露充分，PR 积压 453 | 维护者带宽瓶颈 → 贡献者流失 |
| IronClaw | Reborn 架构密集迭代，安全体系领先 | 工具批准体验碎片化可能影响用户信任 |
| ZeroClaw | v0.8.2 发布，安全 RFC 活跃 | 多条 blocked RFC 需维护者裁决 |
| CoPaw | v2.0.0-beta.1 发布，agentscope 2.0 迁移 | 桌面端体验仍不成熟，插件适配滞后 |

### 🟡 质量巩固期（中等活跃、重点修复）

| 项目 | 特征 |
|------|------|
| NanoBot | 安全漏洞集中修复，功能 PR 大量积压 |
| Hermes | 桌面端 P0 Bug 频发，需稳定化 |
| NanoClaw | 多通道修复集中，审查队列积压 9 个 PR |
| LobsterAI | 版本发布后质量修复，Windows 数据备份卡死需紧急处理 |

### 🟢 稳定维护期

| 项目 | 特征 |
|------|------|
| PicoClaw | 合并节奏良好，错误处理 hygiene 系列快速合入 |

### ⚪ 低活动/静默

| 项目 | 状态 |
|------|------|
| NullClaw | 唯一 Issue 超 64 天无回应 |
| TinyClaw | 无活动 |
| ZeptoClaw | 无活动 |
| Moltis | 唯一 PR 零互动 |

---

## 7. 值得关注的趋势信号

### 信号一：Agent 安全从"功能"变为"基线"

**数据支撑**：8/14 个项目今日有安全相关 Issue 或 PR，覆盖沙箱逃逸（NanoBot）、密钥泄露（NanoClaw、Hermes）、供应链签名（ZeroClaw）、权限密封（IronClaw）、SSRF 防护（PicoClaw）。

**趋势判断**：2026 年下半年，**没有安全 posture 的 Agent 项目将失去企业用户信任**。IronClaw 的 Capability Policy 四维度模型（available → control-plane）和 ZeroClaw 的 SLSA 供应链安全正在成为新基准。OpenClaw 的 Masked Secrets 提案若不能快速落地，可能在安全维度被竞品拉开差距。

### 信号二：多 Agent 编排进入"可靠性决胜"阶段

**数据支撑**：6/14 个项目报告了多 Agent 相关的 Bug——session 锁（OpenClaw）、子代理进度回退（LobsterAI）、审批状态机泄漏（IronClaw）、cron 上下文串扰（NanoBot）。

**趋势判断**：Agent 编排正从"能跑"向"可靠跑"过渡。**Session 生命周期管理**（轮转、GC、超时）和**子代理状态一致性**（进度、输出、生命周期）是下一版本的核心竞争力。OpenClaw 和 IronClaw 在此问题上的处理速度将直接影响开发者选择。

### 信号三：桌面端成为 AI 助手的"第二战场"

**数据支撑**：5/14 个项目在桌面端有活跃 Issue 或 PR——OpenClaw 的 Linux 客户端需求（👍81）、Hermes 的 macOS/Windows P0 Bug、CoPaw 的 Tauri 适配、LobsterAI 的 Windows 卡死。

**趋势判断**：CLI 和 Web 之后，**桌面端（Electron/Tauri/GTK）是个人 AI 助手的下一个标配交付物**。但跨平台 GUI 开发的复杂度远超预期，维护者需做好长期投入准备。OpenClaw 的双轨道 PR（Rust/GTK4 vs C/GTK4）需要尽快做出技术选型决策。

### 信号四：成本控制成为用户留存关键因素

**数据支撑**：Claude reasoning 默认开启导致双倍账单（OpenClaw #73182）、工具 schema 每 session 消耗 ~3,500 tokens（OpenClaw #14785）、动态 reasoning effort（Hermes PR #53343）、模型自动降级需求（CoPaw #5572）。

**趋势判断**：随着 Agent 执行的任务越来越复杂（多步骤、多工具调用），**token 成本控制将从"优化项"变为"生存项"**。能够提供智能模型路由、推理 effort 动态调整、工具 schema 按需加载的项目将获得成本敏感用户的青睐。

### 信号五：PR 积压是生态级系统性风险

**数据支撑**：OpenClaw 453 个待合并 PR、Hermes 47 个、ZeroClaw 39 个、NanoClaw 9 个。多个安全相关 PR 已 ready 但未合并。

**趋势判断**：开源项目的**审查带宽**正在成为比代码产出更稀缺的资源。PR 积压不仅打击贡献者积极性，更可能导致安全修复延迟合入，形成**安全风险窗口期**。建议各项目建立安全 PR 快速通道（类似 IronClaw 的合并链机制）和定期 PR triage 节奏。

---

**报告生成时间：2026-06-27 | 数据来源：各开源项目 GitHub 公开 API | 下次更新：2026-06-28**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-06-27 | 数据窗口：过去 24 小时**

---

## 1. 今日速览

NanoBot 社区今日活跃度处于**高位**，共产生 28 条 Issue 更新与 46 条 PR 更新。安全类议题集中爆发——研究者 YLChen-007 在 6 月 25 日单日提交了 5 个 `exec.allowPatterns` 白名单绕过及 MCP 范围绕过漏洞，其中 4 个已于当日关闭，反映出安全审计正在密集进行。开发者 dajiaohuang 以极高产出围绕 heartbeat 隔离、cron 上下文、Windows 兼容性、TTS 工具等提交了大量修复与新功能 PR，PR 队列中待合并数已达 39 条，合并压力较大。无新版本发布，项目仍处于快速迭代阶段。

---

## 2. 版本发布

无新 Release。

---

## 3. 项目进展

今日共 **7 个 PR 被合并/关闭**，推进了以下能力：

| PR | 状态 | 推进内容 |
|---|---|---|
| **[#4561](https://github.com/HKUDS/nanobot/pull/4561)** — 新增 Crawl4AI 网页抓取提取器 | 已合入 | 解决了长期存在的网页抓取可靠性诉求（[#2700](https://github.com/HKUDS/nanobot/issues/2700)），通过可选的 Crawl4AI 后端增强当前 Jina + Python fetch 的降级链 |
| **[#4519](https://github.com/HKUDS/nanobot/issues/4519)** — MCP `enabledTools` 范围绕过（Issue 关闭） | 已关闭 | MCP server 暴露资源/包装器未受 `enabledTools` 限制的安全问题得到处置 |
| **[#4514](https://github.com/HKUDS/nanobot/issues/4514)、[#4515](https://github.com/HKUDS/nanobot/issues/4515)、[#4516](https://github.com/HKUDS/nanobot/issues/4516)、[#4520](https://github.com/HKUDS/nanobot/issues/4520)** — exec 白名单多个绕过变体（Issue 关闭） | 已关闭 | 关闭了命令链注入、注释尾绕过、包装器前缀绕过、OpenAI-API 路径绕过四类沙箱逃逸 |

尚未合并但已就绪的关键 PR：

| PR | 关联 Issue | 意义 |
|---|---|---|
| **[#4550](https://github.com/HKUDS/nanobot/pull/4550)** | [#4082](https://github.com/HKUDS/nanobot/issues/4082) | cron job 每次运行使用独立 session key，修复上下文串扰 |
| **[#4549](https://github.com/HKUDS/nanobot/pull/4549)** | [#4431](https://github.com/HKUDS/nanobot/issues/4431) | heartbeat 支持独立模型覆盖，降低常态化巡检成本 |
| **[#4548](https://github.com/HKUDS/nanobot/pull/4548)** | [#4490](https://github.com/HKUDS/nanobot/issues/4490) | OpenAI 兼容 API 在绑定 `0.0.0.0` 时强制要求 `api_key`，与 WS gateway 对齐 |
| **[#4562](https://github.com/HKUDS/nanobot/pull/4562)** | #4521 | 修复 `exec.allowPatterns` 每个 shell 段的独立校验，彻底封堵链式注入 |
| **[#4545](https://github.com/HKUDS/nanobot/pull/4545)** | [#4544](https://github.com/HKUDS/nanobot/issues/4544) | Windows 统一使用 PowerShell，消除 cmd/PowerShell 双语义不一致 |
| **[#4546](https://github.com/HKUDS/nanobot/pull/4546)** | [#4513](https://github.com/HKUDS/nanobot/issues/4513) | Windows 下 `/restart` 改用 `subprocess.Popen + sys.exit`，兼容 nssm/winsw |
| **[#4560](https://github.com/HKUDS/nanobot/pull/4560)** | [#4010](https://github.com/HKUDS/nanobot/issues/4010) | 新增 TTS 工具，支持 edge-tts/macOS say/espeak-ng/Windows SAPI |
| **[#4559](https://github.com/HKUDS/nanobot/pull/4559)** | [#3436](https://github.com/HKUDS/nanobot/issues/3436), [#3024](https://github.com/HKUDS/nanobot/issues/3024) | 新增 `agent_delegate` 工具，可调用外部 AI Agent CLI（Claude Code、Codex、opencode） |
| **[#4558](https://github.com/HKUDS/nanobot/pull/4558)** | [#2231](https://github.com/HKUDS/nanobot/issues/2231) | 最小化插件系统，通过 `plugin.json` manifest 注册 tools/skills/MCP servers |
| **[#4557](https://github.com/HKUDS/nanobot/pull/4557)** | [#3096](https://github.com/HKUDS/nanobot/issues/3096) | 信任 LLM 的并行工具调用，全部并发执行 |
| **[#4555](https://github.com/HKUDS/nanobot/pull/4555)** | [#4253](https://github.com/HKUDS/nanobot/issues/4253) | 会话级模型覆盖，每个对话保留自身模型选择 |
| **[#4552](https://github.com/HKUDS/nanobot/pull/4552)** | [#4419](https://github.com/HKUDS/nanobot/issues/4419) | 推理 effort 中途中断升级（reasoningEffortEscalated） |

**整体状态：** 合并速度显著落后于产出速度——46 条活跃 PR 中仅 7 条完结，积压 39 条待合并。

---

## 4. 社区热点

### 🔥 安全漏洞集中披露（最高关注度）

**[#2439](https://github.com/HKUDS/nanobot/issues/2439) — PyPI 包中发现数据外泄恶意代码（👍 4，评论 6）**
- 严重等级：Critical
- 问题：`nanobot-ai v0.1.4.post5` 中的 `litellm_init.pth` 在 site-packages 目录下执行恶意数据外传代码。
- 状态：已关闭，但该 Issue 被重新激活讨论（2026-06-26），表明用户对 PyPI 包完整性的持续担忧。

**[#4519](https://github.com/HKUDS/nanobot/issues/4519)、[#4514](https://github.com/HKUDS/nanobot/issues/4514)、[#4515](https://github.com/HKUDS/nanobot/issues/4515)、[#4516](https://github.com/HKUDS/nanobot/issues/4516)、[#4520](https://github.com/HKUDS/nanobot/issues/4520) — exec.allowPatterns 白名单系列绕过**
- 由安全研究者 YLChen-007 单日连续披露，涵盖命令链注入、注释尾绕过、包装器前缀、MCP scope bypass 等多种变体。
- 前 4 个已关闭；对应修复 PR **[#4562](https://github.com/HKUDS/nanobot/pull/4562)** 已提交待审。

**[#4073](https://github.com/HKUDS/nanobot/issues/4073) — filesystem `extra_allowed_dirs` 被当作可写根目录（已关闭）**
- 路径策略未区分只读额外根目录与可写根目录，属于中高危设计缺陷。

### 💬 评论最活跃

| Issue/PR | 评论 | 核心诉求 |
|---|---|---|
| **[#660](https://github.com/HKUDS/nanobot/issues/660)** | 12 👍 | "Ultra-lightweight" 宣传与 Dockerfile 要求 Node.js 的矛盾 — 用户对品牌诚信和依赖膨胀的不满 |
| **[#2439](https://github.com/HKUDS/nanobot/issues/2439)** | 6 👍 | PyPI 供应链安全，要求对发布流程进行审计 |
| **[#2231](https://github.com/HKUDS/nanobot/issues/2231)** | 4 | 插件系统诉求 — 已有 PR [#4558](https://github.com/HKUDS/nanobot/pull/4558) 推进 |
| **[#4253](https://github.com/HKUDS/nanobot/issues/4253)** | 4 | 按会话切换模型 — 已有 PR [#4555](https://github.com/HKUDS/nanobot/pull/4555) 推进 |
| **[#4419](https://github.com/HKUDS/nanobot/issues/4419)** | 3 | 推理深度自动升级 — 已有 PR [#4552](https://github.com/HKUDS/nanobot/pull/4552) 推进 |

### 📈 PR 提交集中度

开发者 **dajiaohuang** 在 6 月 26 日单日提交了 **15 个 PR**，几乎覆盖所有活跃 Issue 的修复/实现，是当日产出的核心驱动力。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重 (Critical)

| 问题 | Issue | Fix PR | 状态 |
|---|---|---|---|
| exec 命令链注入绕过 allowlist | [#4514](https://github.com/HKUDS/nanobot/issues/4514), [#4515](https://github.com/HKUDS/nanobot/issues/4515), [#4516](https://github.com/HKUDS/nanobot/issues/4516), [#4520](https://github.com/HKUDS/nanobot/issues/4520) | [#4562](https://github.com/HKUDS/nanobot/pull/4562) 待审 | Issue 已关，修复未合 |
| MCP enabledTools scope bypass | [#4519](https://github.com/HKUDS/nanobot/issues/4519) | — | 已关闭，修复状态待确认 |
| PyPI 供应链恶意代码 | [#2439](https://github.com/HKUDS/nanobot/issues/2439) | — | 已关闭但讨论重新激活 |

### 🟡 中等 (Medium)

| 问题 | Issue | Fix PR | 状态 |
|---|---|---|---|
| Windows 后台启动后 `/restart` state 文件 PID 不一致 | [#4511](https://github.com/HKUDS/nanobot/issues/4511) | [#4547](https://github.com/HKUDS/nanobot/pull/4547) 待审 | 修复已提交 |
| Windows 下 nssm 服务 `/restart` 状态异常 | [#4513](https://github.com/HKUDS/nanobot/issues/4513) | [#4546](https://github.com/HKUDS/nanobot/pull/4546) 待审 | 修复已提交 |
| Windows exec 工具 cmd/PowerShell 双语义不一致 | [#4544](https://github.com/HKUDS/nanobot/issues/4544) | [#4545](https://github.com/HKUDS/nanobot/pull/4545) 待审 | 修复已提交 |
| cron job 多次运行共享会话上下文 | [#4082](https://github.com/HKUDS/nanobot/issues/4082) | [#4550](https://github.com/HKUDS/nanobot/pull/4550) 待审 | 修复已提交 |
| filesystem extra_allowed_dirs 可写 | [#4073](https://github.com/HKUDS/nanobot/issues/4073) | — | 已关闭，修复待确认 |

### 🟢 低 (Low)

| 问题 | Issue | 状态 |
|---|---|---|
| Telegram Web 消息渲染异常 | [#4539](https://github.com/HKUDS/nanobot/issues/4539) | 已关闭 |

---

## 6. 功能请求与路线图信号

今日提交的功能请求及对应实现 PR，**高概率纳入下一版本**：

| 功能 | Issue | PR | 信号强度 |
|---|---|---|---|
| TTS / 语音输出 | [#4010](https://github.com/HKUDS/nanobot/issues/4010) | [#4560](https://github.com/HKUDS/nanobot/pull/4560) | ✅ PR 已就绪 |
| 插件系统 | [#2231](https://github.com/HKUDS/nanobot/issues/2231) | [#4558](https://github.com/HKUDS/nanobot/pull/4558) | ✅ PR 已就绪 |
| 外部 Agent 委派工具 | [#3436](https://github.com/HKUDS/nanobot/issues/3436) | [#4559](https://github.com/HKUDS/nanobot/pull/4559) | ✅ PR 已就绪 |
| 并行工具执行信任 LLM | [#3096](https://github.com/HKUDS/nanobot/issues/3096) | [#4557](https://github.com/HKUDS/nanobot/pull/4557) | ✅ PR 已就绪 |
| Dream 模型独立覆盖 | [#4029](https://github.com/HKUDS/nanobot/issues/4029) | [#4556](https://github.com/HKUDS/nanobot/pull/4556) | ✅ PR 已就绪 |
| 推理 effort 中途升级 | [#4419](https://github.com/HKUDS/nanobot/issues/4419) | [#4552](https://github.com/HKUDS/nanobot/pull/4552) | ✅ PR 已就绪 |
| Heartbeat 结果投递到固定频道 | [#4418](https://github.com/HKUDS/nanobot/issues/4418) | [#4553](https://github.com/HKUDS/nanobot/pull/4553) | ✅ PR 已就绪 |
| Heartbeat 独立模型 / 共享会话 | [#4431](https://github.com/HKUDS/nanobot/issues/4431), [#1899](https://github.com/HKUDS/nanobot/issues/1899) | [#4549](https://github.com/HKUDS/nanobot/pull/4549), [#4551](https://github.com/HKUDS/nanobot/pull/4551) | ✅ PR 已就绪 |
| `ask_clarification` 工具 | [#4508](https://github.com/HKUDS/nanobot/issues/4508) | — | 📋 仅需求，无 PR |
| CLI 内联 TUI | — | [#4329](https://github.com/HKUDS/nanobot/pull/4329) | 🟡 PR 已就绪但沉积 2 周 |
| Cron silent 模式 | — | [#4357](https://github.com/HKUDS/nanobot/pull/4357) | 🟡 PR 已就绪但沉积 2 周 |

**路线图判断：** 当前大量 PR（#4548–#4562）集中在 6 月 26 日提交，内容覆盖安全加固、Windows 兼容性、插件系统、外部 Agent 委派、语音输出等。一旦合并审查通过，下一版本（可能为 `v0.2.3` 或 `v0.3.0`）将是一次**重大功能跃迁**。

---

## 7. 用户反馈摘要

### 😟 不满与痛点

1. **依赖膨胀与宣传不符** — [#660](https://github.com/HKUDS/nanobot/issues/660)（👍 5，评论 12）
   > "声称 ultra-lightweight，但 Dockerfile 同时需要 Python + Node.js。"
   > 用户期望"轻量"名副其实，建议优化 Dockerfile 或调整措辞。

2. **Windows 支持体验差** — [#4511](https://github.com/HKUDS/nanobot/issues/4511)、[#4513](https://github.com/HKUDS/nanobot/issues/4513)、[#4544](https://github.com/HKUDS/nanobot/issues/4544)
   Windows 用户报告重启状态文件错乱、nssm 服务冲突、cmd/PowerShell 语义分裂三大问题。反馈显示 Windows 是使用量可观但测试覆盖不足的平台。

3. **Heartbeat 与主会话隔离的默认行为令人困惑** — [#1899](https://github.com/HKUDS/nanobot/issues/1899)
   中文用户指出：与 OpenClaw 不同，nanobot 默认 heartbeat 使用独立 session_key (`heartbeat`)，导致普通聊天上下文无法在心跳任务中被利用。已有 PR [#4551](https://github.com/HKUDS/nanobot/pull/4551) 修复。

4. **Cron 任务上下文串扰** — [#4082](https://github.com/HKUDS/nanobot/issues/4082)
   多次调度共用固定 session key，导致后续运行看到前次残留。已有 PR [#4550](https://github.com/HKUDS/nanobot/pull/4550) 修复。

### 👍 满意/期待

- 用户积极提交 featTTS、插件系统、外部 Agent 委派等请求，表明社区对 NanoBot 的平台化方向有较高期待。
- security 研究者的密集披露（而非恶意利用）反映项目受到专业社区关注，且维护者响应迅速（4/5 同日关闭）。

### 💡 使用场景

- **多模型路由**：用户同时使用 OpenRouter（快速）和本地 llamacpp（隐私），需要按会话切换 — [#4253](https://github.com/HKUDS/nanobot/issues/4253)
- **Windows 部署**：生产环境用 nssm 挂系统服务，强调后台稳定与热重启
- **Heartbeat 经济型运行**：希望心跳巡检走便宜模型 — [#4431](https://github.com/HKUDS/nanobot/issues/4431)
- **Agent-to-Agent**：希望 Nanobot 委派子任务给 Claude Code / Codex / opencode — [#3436](https://github.com/HKUDS/nanobot/issues/3436)

---

## 8. 待处理积压

以下 Issue/PR **超过 7 天未得到实质响应**，建议维护者优先关注：

### Issue 积压

| Issue | 等待时长 | 严重性 | 内容 |
|---|---|---|---|
| **[#660](https://github.com/HKUDS/nanobot/issues/660)** | 4 个月+ | 中 | Ultra-lightweight 宣传 vs Node.js 实际依赖矛盾（👍5，评论 12）— 涉及品牌定位 |
| **[#4073](https://github.com/HKUDS/nanobot/issues/4073)** | 无修复确认 | 中 | filesystem extra_allowed_dirs 可写问题已关闭，但修复未明确关联 PR |
| **[#4519](https://github.com/HKUDS/nanobot/issues/4519)** | 1 天 | 高 | MCP enabledTools 绕过已关闭，但修复 PR 需明确 |
| **[#4253](https://github.com/HKUDS/nanobot/issues/4253)** | 接近 2 个月 | 低 | 每会话模型覆盖，已有 PR 但未合并 |

### PR 积压（超 7 天未决）

| PR | 等待时长 | 影响面 | 说明 |
|---|---|---|---|
| **[#4329](https://github.com/HKUDS/nanobot/pull/4329)** — CLI 内联 TUI | 14 天 | 中高 | 全新的交互式终端 UI，改动较大需审慎审查 |
| **[#4357](https://github.com/HKUDS/nanobot/pull/4357)** — Cron silent 模式 | 12 天 | 中 | 简单 flag 添加，建议优先合并 |

### ⚠️ 关键风险

- **PR 积压数 (39) 远超合并数 (7)**，若继续堆积，将产生严重的合并冲突，并打击贡献者积极性。
- **安全类 PR #4562**（修复 exec 白名单绕过）涉及高危漏洞修复，建议提升审查优先级。
- **#4329 TUI PR** 因涉及 terminal UI 大面积重构，审查成本高，可能需要拆分或加急评审。

---

*日报生成时间：2026-06-27 | 数据来源：GitHub (HKUDS/nanobot) | 下次更新：2026-06-28*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-06-27（数据截至 2026-06-27 23:59 UTC）**

---

## 1. 今日速览

过去 24 小时项目共录得 **50 条 Issue 活动**（新开/活跃 36，关闭 14）和 **50 条 PR 活动**（47 个仍处于待合并状态，仅 3 个被合并/关闭），社区参与度高，但 PR 积压明显。**无新版本发布**。多个桌面端关键 Bug 和一个 Windows 严重阻塞问题同步爆雷，新 PR 贡献积极，急需关注积压处理。整体活跃度高，但积压风险上升，项目健康度略偏紧。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

今日有 **3 个 PR 合并或关闭**，**47 个 PR 仍处于待合并状态**，今日活跃推进包括：

- **PR #53343**：提议支持按模型动态调整 reasoning effort（如 Gemini 3.5 Flash 启用 Minimal 级别、Opus 启用 Max），有望成为 agent 模型适配的新功能。
- **PR #53344**：针对 Windows 桌面端控制台闪烁问题提出了修复，并入今日开放的严重 Bug 报告，有望提升 Windows 用户体验。
- **PR #18873**：一次大规模上游合并（27 commits），涉及多个组件的集成测试。
- Dashboard 相关 PR（#20221, #20515, #20615, #20686, #20685, #20808, #20838, #20871 等）数量众多，集中在 TUI 构建修复、会话恢复、Tailscale/CF 代理兼容、多容器健康检查等功能，显示 Dashboard 是当前最活跃的模块之一。

整体项目在网关安全、STT/TTS 兼容性、构建优化等各条线都有实质推进，但近 50 个待合并 PR 形成积压瓶颈。

---

## 4. 社区热点

以下 Issues 因评论量和社区反应热度最高：

### Issue #487 — Feature: Cryptological Audit Trail（🗨️ 25 评论）
**[NousResearch/hermes-agent Issue #487](https://github.com/NousResearch/hermes-agent/issues/487)**
社区对比 OpenFang 项目的 SHA-256 哈希链式审计日志机制，要求 Hermes 为每条 Agent 操作提供防篡改、可追溯的密码学审计链。这是今日讨论最集中的议题，反映了社区对 **Agent 可审计性和信任** 的高度关注。

### Issue #42006 — Bug: macOS launchd restart 失败（🗨️ 7 评论）
**[NousResearch/hermes-agent Issue #42006](https://github.com/NousResearch/hermes-agent/issues/42006)**
`"hermes update"` 后 macOS launchd 重启过程未先执行 bootout 即尝试 bootstrap，导致 gateway 回退到 detached 状态。Mac 桌面用户持续受困。

### Issue #44147 — Bug: Dashboard 非默认 profile 会话无法加载消息（🗨️ 5 评论）
**[NousResearch/hermes-agent Issue #44147](https://github.com/NousResearch/hermes-agent/issues/44147)**
前端请求 messages 端点时未携带 profile 参数，导致非默认 profile 的会话记录在多用户/多 profile 场景下完全不可见。profile 隔离的设计存在 UI 层漏洞。

### Issue #31668 — Bug: Anthropic 模型调用遇 rate limit / extra usage 报错（🗨️ 5 评论，👍 1）
**[NousResearch/hermes-agent Issue #31668](https://github.com/NousResearch/hermes-agent/issues/31668)**
用户配置 claude-sonnet-4-6 后仍报“Third-party apps draw from extra usage”错误。**已持续 34 天未解决**，反映 Anthropic 协作者认证路径理解偏差，严重影响核心用户体验。

### Issue #12020 — Feature: 抑制 hermes.tool.progress 事件输出（🗨️ 5 评论）
**[NousResearch/hermes-agent Issue #12020](https://github.com/NousResearch/hermes-agent/issues/12020)**
自定义事件导致前端 OpenAI 兼容接口解析异常，增加了“关闭开关”的需求，显示 apisever 协议兼容性是长期痛点。

---

## 5. Bug 与稳定性

按严重程度排列，今日报告的突出 Bug：

| 严重度 | Issue / PR | 状态 | 摘要 | Fix PR |
|--------|-----------|------|------|--------|
| **P0 🔴** | [#53342](https://github.com/NousResearch/hermes-agent/issues/53342) | 🔴 **OPEN** | Windows 11 桌面端 cmd 窗口不停闪烁，程序无法使用 | [PR #53344](https://github.com/NousResearch/hermes-agent/pull/53344) 已提交 |
| **P0 🔴** | [#46789](https://github.com/NousResearch/hermes-agent/issues/46789) | 🟢 CLOSED | macOS 桌面端所有进程执行工具 segfault（exit code -11） | 已关闭 |
| **P1 🟠** | [#42006](https://github.com/NousResearch/hermes-agent/issues/42006) | 🟠 OPEN | macOS launchd 更新后 gateway 重置失败 | 无 |
| **P1 🟠** | [#31668](https://github.com/NousResearch/hermes-agent/issues/31668) | 🟠 OPEN | Anthropic provider 持续 rate limit 误报（34 天） | 无 |
| **P2 🟡** | [#46131](https://github.com/NousResearch/hermes-agent/issues/46131) | 🟠 OPEN | Ollama 推理/思考模型返回空响应，需设 reasoning_effort | 无 |
| **P2 🟡** | [#52805](https://github.com/NousResearch/hermes-agent/issues/52805) | 🟠 OPEN | Telegram/WeChat 网关收到消息但从不回复 | needs-repro |
| **P2 🟡** | [#53297](https://github.com/NousResearch/hermes-agent/issues/53297) | 🟢 CLOSED | Telegram 现有会话需 15-30s 才激活 | 已关闭 |
| **P2 🟡** | [#46082](https://github.com/NousResearch/hermes-agent/issues/46082) | 🟠 OPEN | Dashboard 内存泄漏达 5.2GB 并被 OOM Kill | 无 |
| **P2 🟡** | [#13965](https://github.com/NousResearch/hermes-agent/issues/13965) | 🟠 OPEN | Agent 错误修改用户 provider 配置 | 无 |
| **P2 🟡** | [#27715](https://github.com/NousResearch/hermes-agent/issues/27715) | 🟢 CLOSED | get_hermes_dir 向后兼容解析器静默覆盖已有数据路径 | 已关闭 |
| **P3 🔵** | [PR #53343](https://github.com/NousResearch/hermes-agent/pull/53344) | OPEN | Ollama reasoning_effort 动态映射 | 同一 PR |

**关键信号**：
- **两个 P0 在 24 小时内出现并关闭/储备**，桌面端稳定性仍是高风险区；
- #31668 已沉默 34 天，用户仅获得 1 个 👍，**Anthropic 认证误解**可能正导致用户群体流失；
- #46082 内存泄漏拉低 Dashboard 长期运行信心。

---

## 6. 功能请求与路线图信号

以下功能需求已有 PR 支持或长期趋势，有可能被纳入下一版本：

- **动态 Reasoning Effort（[PR #53343](https://github.com/NousResearch/hermes-agent/pull/53343)）**：解耦全局 4 档推理级别，为每个模型动态配置合理的思考强度（如 Opus→Max、Gemini Flash→Minimal），成本与效果双赢，符合趋势。
- **Vestige 作为新的记忆提供方（[Issue #53320](https://github.com/NousResearch/hermes-agent/issues/53320)）**：用户已向外扩展第三方记忆后端正趋标准化，接纳 Vestige 可补足生态位。
- **CLI `!` 前缀实现 Shell 直传（[Issue #53341](https://github.com/NousResearch/hermes-agent/issues/53341)）**：降低交互式键入时的 LLM 中转成本，已有较多赞同可能作为体验优化项。
- **密码学校验审计链（[Issue #487](https://github.com/NousResearch/hermes-agent/issues/487)）**：社区呼声高，参考 OpenFang 实现 Merkle 哈希链，可能作为高优先级特性规划。
- **桌面 GUI 自动滚动及侧边栏修补（[Issue #44140](https://github.com/NousResearch/hermes-agent/issues/44140), 👍4）**：Desktop 基础交互升级，低摩擦，易落地。
- **Telegram 流式长消息分块（[Issue #4445](https://github.com/NousResearch/hermes-agent/issues/4445), 👍1）**：平台网关适配，优先级中低但持续需求。

**趋势判读**：社区持续向 **更省成本的推理**、**更健壮的桌面端**、**可扩展的记忆生态** 三个方向发力，与 Hermes 定位为个人 AI 助手 OS 的路线吻合。

---

## 7. 用户反馈摘要

从评论和描述中提炼的痛点与场景：

- **桌面端体验两极化**：macOS segfault（exit -11）与 Windows 黑屏闪烁（#46789、#53342）显示桌面壳层与进程执行后端的跨平台同步存在显著差距。一位用户明确表示“CLI 正常工作，但桌面端所有进程工具归零”，反馈两极分化严重。
- **会话状态可见性差**：`/agents` UI 子代理永远卡在 running（[Issue #52318](https://github.com/NousResearch/hermes-agent/issues/52318)），Dashboard 非默认 profile 无法查看历史（[Issue #44147](https://github.com/NousResearch/hermes-agent/issues/44147)），这种状态不一致感让用户多次受挫，值得关注。
- **成本敏感度上升**：寻求智能模型路由（[Issue #46285](https://github.com/NousResearch/hermes-agent/issues/46285)）和 Gemini 免费 STT（[PR #22122](https://github.com/NousResearch/hermes-agent/pull/22122)）体现个人用户对 token 消耗和 API 资费极度敏感。
- **期望开箱即用的平台集成**：Honcho 去重与写入优化（[Issue #9404](https://github.com/NousResearch/hermes-agent/issues/9404)）、Discord 表格自动转代码围栏（[Issue #21168](https://github.com/NousResearch/hermes-agent/issues/21168)）等，均反映用户对“无须额外配置即可在文中/表格等常见格式中正确渲染”的强烈期待。
- **积极反馈**：社区对 Tailscale/Raspberry Pi 远程网关支持、Docker 构建加速等基础设施改进有明显正向响应，部分用户主动投稿 PR，展现高粘性追随者群体。

---

## 8. 待处理积压

以下长期未响应的重要 Issue/PR 积压，建议维护者近期关注：

| 编号 | 类型 | 年龄 | 积压天数 | 风险 |
|------|------|------|--------|------|
| [#31668](https://github.com/NousResearch/hermes-agent/issues/31668) | P2 Bug | 2026-05-24 | **34 天** | 🔴 Anthropic 用户因认证误解持续受损，需确认是否为文档ошиб还是代码缺陷 |
| [#13965](https://github.com/NousResearch/hermes-agent/issues/13965) | P2 Bug | 2026-04-22 | **66 天** | 🔴 Agent 主动修改 provider 配置，属数据损坏风险 |
| [#46082](https://github.com/NousResearch/hermes-agent/issues/46082) | P2 Bug | 2026-06-14 | **13 天** | 🟠 Dashboard 泄漏至 OOM，影响长时间使用 |
| [#44147](https://github.com/NousResearch/hermes-agent/issues/44147) | P3 Bug | 2026-06-11 | **16 天** | 🟠 profile 逻辑隐藏用户数据 |
| [PR #18873](https://github.com/NousResearch/hermes-agent/pull/18873) | Chore | 2026-05-02 | **56 天** | 🟠 27 commit 上游合并长期悬挂，可能引发后续冲突 |
| [PR #20221](https://github.com/NousResearch/hermes-agent/pull/20221) | Fix | 2026-05-05 | **53 天** | 🟡 Dashboard 平台状态保留 |
| [PR #20515](https://github.com/NousResearch/hermes-agent/pull/20515) | Feature | 2026-05-06 | **52 天** | 🟡 Tailscale 身份认证 |
| [PR #40170](https://github.com/NousResearch/hermes-agent/issues/40170) | Security | 2026-06-05 | **22 天** | 🔴 Honcho 记忆泄露，需紧急处理 |
| [#27602](https://github.com/NousResearch/hermes-agent/issues/27602) | P1 Bug | 2026-05-17 | **41 天** | 🟠 存在目录为空即覆盖数据的逻辑风险 |

**重点关注**：
1. **#40170 Honcho Recall Leak**：涉及客户数据外泄，22 天未处理，需立即审查。
2. **#31668** 和 **#13965**：同为 P2 与 provider 配置相关的长寿命 Bug，反映出核心 Agent 对环境理解与配置管理的能力缺失，是影响用户信任的关键。
3. **47 个待合并 PR** 是健康隐患的集中区：大量 Dashboard 修复挂起，已合并的 PR #53344 就是针对今日 #53342 的快速反应，但整体合并节奏仍待提速。

---

**总体评估**：Hermes Agent 项目今日维持高社区热度，Bug 发现与 PR 贡献同步增加，但 **待合并 PR 积压、桌面端关键系统崩溃、安全类 Bug 长时间未处理** 是三大亟需化解的风险点。建议近期优先消化 Dashboard 合并队列、专项排查桌面端进程管理和 provider 认证策略，并对 Honcho 泄露启动根因复现。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-27

> 数据区间：2026-06-26 ~ 2026-06-27（UTC）

---

## 1. 今日速览

PicoClaw 今日活跃度**中等偏高**：18 条 PR 更新（14 条已合并/关闭，4 条待合并）远超日常水平，主要由一批 dependabot 自动化依赖升级和一个集中清理 `Close()` 错误处理 hygiene 系列贡献驱动。Issues 方面新增/活跃 4 条、关闭 1 条，涉及 Android 兼容性、WhatsApp WebSocket 稳定性等用户痛点。无新版本发布，项目处于日常迭代维护期。

**活跃度评级：🟢 活跃**
**健康度评级：🟢 稳定**（合并节奏良好，但积压 stale issue 仍需关注）

---

## 2. 版本发布

无新增 Release。

---

## 3. 项目进展

今日合并/关闭的 14 条 PR 可分为以下几类：

### 3.1 质量与错误处理 Hygiene（7 条，集中贡献）

来自 **chengzhichao-xydt** 的系列 PR 集中修复了多个包中 `Close()` 和 `Encode()` 错误未处理的问题，覆盖 webhook、health 检查、工具层、OneBot/WebSocket channel 等：

| PR | 内容 |
|---|---|
| [#3172](https://github.com/sipeed/picoclaw/pull/3172) | Close() errors in error paths & retry loops（4 files, 8 call sites） |
| [#3184](https://github.com/sipeed/picoclaw/pull/3184) | WebSocket dial cleanup 中 resp.Body.Close() 错误显式忽略 |
| [#3185](https://github.com/sipeed/picoclaw/pull/3185) | Updater checksum 下载路径关闭错误处理 |
| [#3186](https://github.com/sipeed/picoclaw/pull/3186) | membench 重试循环中 Close() 错误处理 |
| [#3183](https://github.com/sipeed/picoclaw/pull/3183) | OneBot WebSocket dial 路径关闭错误处理 |
| [#3188](https://github.com/sipeed/picoclaw/pull/3188) | Health server JSON 编码错误显式忽略 |
| [#3187](https://github.com/sipeed/picoclaw/pull/3187) | 测试文件中 resp.Body.Close() 错误显式忽略 |

另外：
- **[#3170](https://github.com/sipeed/picoclaw/pull/3170)** — 修复 agent 在 `io.Copy` 到 base64 encoder 失败时未调用 `encoder.Close()` 的资源泄漏问题。

> **进展评估**：这批 PR 虽非功能性 feature，但整体提升了项目错误处理的健壮性和静态分析通过率，属于高质量技术债偿还。

### 3.2 安全性修复

- **[#3143](https://github.com/sipeed/picoclaw/pull/3143)** — 修复 `web_fetch` SSRF guard 绕过漏洞（Issue [#3074](https://github.com/sipeed/picoclaw/issues/3074)），使 IP 分类器能识别 ISATAP IPv6 字面量中嵌入的私网/回环 IPv4 地址，覆盖 `00:00:5e:fe` 和 `02:00:5e:fe` 两种常见 ISATAP IID 格式。
  - ⚠️ 注意：该 PR 被标记为 **stale**，但已在今日合并。

### 3.3 Gateway / 基础设施修复

- **[#3181](https://github.com/sipeed/picoclaw/pull/3181)** — Gateway 启动信息断言保护（guard against missing/malformed `GetStartupInfo()` sections），提供回退零值并跳过畸形日志字段，提升启动日志稳定性。

### 3.4 依赖自动化升级（5 条，dependabot）

| PR | 依赖 | 旧版本 → 新版本 |
|---|---|---|
| [#3177](https://github.com/sipeed/picoclaw/pull/3177) | github.com/github/copilot-sdk-go | 0.2.0 → 1.0.4（⚠️ 大版本跳跃） |
| [#3176](https://github.com/sipeed/picoclaw/pull/3176) | github.com/mymmrac/telego | 1.9.0 → 1.10.0 |
| [#3175](https://github.com/sipeed/picoclaw/pull/3175) | fyne.io/systray | 1.12.1 → 1.12.2 |
| [#3174](https://github.com/sipeed/picoclaw/pull/3174) | github.com/line/line-bot-sdk-go/v8 | 8.20.0 → 8.20.1 |
| [#3173](https://github.com/sipeed/picoclaw/pull/3173) | modernc.org/sqlite | 1.51.0 → 1.53.0 |

### 3.5 进行中 PR

- **[#3179](https://github.com/sipeed/picoclaw/pull/3179)** — WhatsApp WebSocket 断线重连（进行中，直接关联 Issue [#3178](https://github.com/sipeed/picoclaw/issues/3178)）
- **[#3180](https://github.com/sipeed/picoclaw/pull/3180)** — CLI 工具调用参数合法性校验（进行中）
- **[#3063](https://github.com/sipeed/picoclaw/pull/3063)** — DeltaChat Gateway 新功能（长期进行中）
- **[#3088](https://github.com/sipeed/picoclaw/issues/3088)** — libolm → vodozemac 迁移（高优先级 feature request，尚无 PR）

---

## 4. 社区热点

### 🔥 Issue [#3178](https://github.com/sipeed/picoclaw/issues/3178) — WhatsApp WebSocket 超时
- **作者**：Jh123x
- **环境**：PicoClaw v0.2.9 / Go 1.25.11 / deepseek-v4-pro / Docker+Launchpad / WhatsApp
- **问题**：WhatsApp WebSocket 连接不稳定，调度功能受影响
- **响应**：已有一条 Open PR [#3179](https://github.com/sipeed/picoclaw/pull/3179) 正在进行修复（断线重连 + 读写超时配置 + ping/pong 心跳），修复进展良好

### 🔥 Issue [#3182](https://github.com/sipeed/picoclaw/issues/3182) — Android 版本启动失败
- **作者**：Monessem
- **问题**：Android 端服务无法启动（附截图和日志），已确认权限完整，且设置中无法修改路径
- **状态**：暂无响应，需要维护者介入

### 🔥 Issue [#3088](https://github.com/sipeed/picocaw/issues/3088) — 用 vodozemac 替代 libolm
- **作者**：pbsds
- **👍**：2（最高互动之一）
- **标签**：help wanted, priority: high
- **诉求**：libolm 已停止维护且存在安全风险，提议在编译时可选 libolm，改用 vodozemac
- **状态**：Open，尚无实现 PR

### 🔥 Issue [#3094](https://github.com/sipeed/picoclaw/issues/3094) — 子代理重复消息
- **作者**：v2up-32mb
- **问题**：spawn 异步子代理完成时，用户收到两条相同的消息（原始输出 + 主代理汇总）
- **状态**：已关闭（stale），但至今未合并具体修复方案

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 简述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#3088](https://github.com/sipeed/picoclaw/issues/3088) | libolm 已停止维护，加密层存在安全隐患 | ❌ 尚无 |
| 🔴 高 | [#3143](https://github.com/sipeed/picoclaw/pull/3143) | web_fetch SSRF guard 可绕过（ISATAP IPv6 嵌入私网 IPv4） | ✅ 已合并 |
| 🟡 中 | [#3178](https://github.com/sipeed/picoclaw/issues/3178) | WhatsApp WebSocket 频繁超时断开 | 🔄 [#3179](https://github.com/sipeed/picoclaw/pull/3179) 进行中 |
| 🟡 中 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android 端服务无法启动，路径设置不可修改 | ❌ 尚无 |
| 🟡 中 | [#3094](https://github.com/sipeed/picoclaw/issues/3094) | spawn 子代理重复推送消息 | ❌ 已关闭但未修复 |
| 🟢 低 | [#3170](https://github.com/sipeed/picoclaw/pull/3170) | base64 encoder 资源泄漏（io.Copy 失败时未 Close） | ✅ 已合并 |
| 🟢 低 | [#3150](https://github.com/sipeed/picoclaw/issues/3150) | Agent"失忆"问题描述不完整 | ❌ stale |
| 🟢 低 | [#3181](https://github.com/sipeed/picoclaw/pull/3181) | Gateway 启动信息断言不够防御性 | ✅ 已合并 |
| 🟢 低 | [#3172–3188](https://github.com/sipeed/picoclaw/pulls) | Close()/Encode() 错误未显式忽略（hygiene） | ✅ 全部已合并 |

---

## 6. 功能请求与路线图信号

### 明确信号

| 方向 | 信号来源 | 当前状态 |
|---|---|---|
| **DeltaChat 通道支持** | PR [#3063](https://github.com/sipeed/picoclaw/pull/3063)（长期 Open，持续更新） | 开发中，进度可观察 |
| **加密层现代化** | Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088)（👍2, high priority） | 提议阶段，无 PR |
| **Android 端体验** | Issue [#3182](https://github.com/sipeed/picoclaw/issues/3182) | 被阻塞，需排查 |
| **WhatsApp 稳定性** | Issue [#3178](https://github.com/sipeed/picoclaw/issues/3178) + PR [#3179](https://github.com/sipeed/picoclaw/pull/3179) | 修复进行中 |
| **CLI 工具调用鲁棒性** | PR [#3180](https://github.com/sipeed/picoclaw/pull/3180)（跳过无效 JSON 参数的工具调用） | 进行中 |
| **嵌入式私网 IP 泄露防护** | PR [#3143](https://github.com/sipeed/picoclaw/pull/3143)（ISATAP 字面量识别） | 已合并 |

### 路线判断

下一版本（预计 v0.3.x）大概率包含：
- WhatsApp WebSocket 稳定性修复
- DeltaChat Gateway（如果 PR 收尾顺利）
- iOS/Android 移动端兼容性改进
- libolm → vodozemac 迁移可能性较高（社区呼声明确）

---

## 7. 用户反馈摘要

### 痛点（Pain Points）

1. **WhatsApp 连接不可靠**（[#3178](https://github.com/sipeed/picoclaw/issues/3178)）：Docker+Launchpad 部署环境下 WebSocket 频繁超时，影响定时任务触发。用户期望更健壮的连接恢复机制。

2. **Android 端启动即崩溃**（[#3182](https://github.com/sipeed/picoclaw/issues/3182)）：用户已授予完整权限但仍无法启动服务，且设置中路径不可编辑——可能是权限模型变更或外部存储访问策略导致。附带了截图和日志但尚未获得社区响应。

3. **子代理输出重复**（[#3094](https://github.com/sipeed/picoclaw/issues/3094)）：spam-like 体验影响用户对信息密度的信任度。该 Issue 被关闭时标记为 stale 而非 resolved，暗示问题可能未被根本解决。

4. **Agent 失忆**（[#3150](https://github.com/sipeed/picoclaw/issues/3150)）：Issue 模板未填写，描述模糊，可能涉及上下文丢失或会话状态持久化问题。

### 满意点

- dependabot 依赖升级响应迅速（5 条依赖更新 PR 均在 ~26 小时内合并）
- SSRF 安全修复（[#3143](https://github.com/sipeed/picoclaw/pull/3143)）虽标记 stale 但仍被认真对待并合并
- 错误处理 hygiene 系列 PR 被快速审查和合并，外部贡献者体验良好

---

## 8. 待处理积压

| 积压项 | 年龄 | 风险 | 建议 |
|---|---|---|---|
| **[#3088](https://github.com/sipeed/picoclaw/issues/3088)** libolm → vodozemac 迁移 | 18 天 | 🔴 安全隐患 | 考虑分配 maintainer 或社区 call-to-action |
| **[#3182](https://github.com/sipeed/picoclaw/issues/3182)** Android 启动失败 | 1 天 | 🟡 移动端用户增长受阻 | 尽快复现 + 请求用户调试日志 |
| **[#3094](https://github.com/sipeed/picoclaw/issues/3094)** spawn 子代理重复消息 | 16 天 | 🟡 UX 质量 | 重新open 或确认修复分支 |
| **[#3150](https://github.com/sipeed/picoclaw/issues/3150)** Agent 失忆 bug 报告 | 7 天 | 🟢 描述不完整 | 要求用户补充复现步骤，否则考虑关闭 |
| **[#3063](https://github.com/sipeed/picoclaw/pull/3063)** DeltaChat Gateway | 18 天 | 🟡 新功能等待 | 需要 reviewer 反馈，确认 ETA |
| **[#3177](https://github.com/sipeed/picoclaw/pull/3177)** copilot-sdk-go 0.2.0 → 1.0.4 大版本升级 | 1 天，仍 Open | 🟡 大版本兼容性风险 | 重点回归测试 |
| **[#3180](https://github.com/sipeed/picoclaw/pull/3180)** CLI 工具调用无效参数处理 | 1 天 | 🟢 改进型 | 常规审查流程 |

---

*PicoClaw 日报由 AI 助手基于 GitHub 公开数据自动生成。如有偏差，请以 [sipeed/picoclaw](https://github.com/sipeed/picoclaw) 仓库为准。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-06-27

## 1. 今日速览

NanoClaw 今日（6/26）呈现**高活跃度开发状态**：共产生 3 条 Issue 更新和 11 条 PR 更新，其中 9 个 PR 处于待合并状态，表明代码审查队列积压较为显著。核心贡献者 `grantland` 一人贡献了 6 个新 PR，涵盖 MCP 环境变量扩展、session 轮转、Telegram/Markdown 迁移等多个领域。无新版本发布，但以 `elancode` 的 WhatsApp 群组消息修复为代表的多个 bug fix 正在排队等待审查和合并，项目整体处于密集迭代期。

---

## 2. 版本发布

本周期内无新版本发布。

---

## 3. 项目进展

今日（6/26）共 **2 个 PR 合并/关闭**，1 个 v2 数据库迁移修复，另 1 个测试相关 PR 关闭。9 个 PR 仍在审查中。

| PR | 状态 | 概要 | 链接 |
|---|---|---|---|
| **#2859** | ✅ 已合并 | `fix(migrate-v2)`：修复 v1→v2 数据库迁移时因旧版 `registered_groups` 表缺少 `is_main` 列导致的崩溃问题，确保 1.1.0 等老版本用户能顺利迁移 | [nanocoai/nanoclaw#2859](https://github.com/nanocoai/nanoclaw/pull/2859) |
| **#2867** | ✅ 关闭 | 测试/发现类 PR，已关闭（内容未明确） | [nanocoai/nanoclaw#2867](https://github.com/nanocoai/nanoclaw/pull/2867) |

**待合并重点 PR（9 个，含多个跨模块修复）：**

| PR | 分类 | 概要 | 链接 |
|---|---|---|---|
| **#2870** | Bug Fix | WhatsApp 群组消息发送后不显示的修复——保留群组加密所需的原始参与方寻址信息 | [nanocoai/nanoclaw#2870](https://github.com/nanocoai/nanoclaw/pull/2870) |
| **#2860** | 安全性 | 消除 `libsignal` 库的 debug 日志泄露密钥材料风险 | [nanocoai/nanoclaw#2860](https://github.com/nanocoai/nanoclaw/pull/2860) |
| **#2866** | 功能升级 | Telegram 适配器弃用旧 markdown sanitizer，升级为 MarkdownV2 | [nanocoai/nanoclaw#2866](https://github.com/nanocoai/nanoclaw/pull/2866) |
| **#2864** | 稳定性 | Provider session 在 ceiling-kill 和空结果时自动轮转 | [nanocoai/nanoclaw#2864](https://github.com/nanocoai/nanoclaw/pull/2864) |
| **#2865** | 稳定性 | OpenCode 在 ceiling-kill 信号和超时阈值下轮转过期 session | [nanocoai/nanoclaw#2865](https://github.com/nanocoai/nanoclaw/pull/2865) |
| **#2861** | 功能增强 | MCP server spawn 时支持 `${VAR_NAME}` 环境变量扩展 | [nanocoai/nanoclaw#2861](https://github.com/nanocoai/nanoclaw/pull/2861) |
| **#2863** | 新技能 | 新增 `/setup-system-digest` 和 `/system-digest` 实用技能 | [nanocoai/nanoclaw#2863](https://github.com/nanocoai/nanoclaw/pull/2863) |
| **#2862** | 新技能 | 新增 `/manage-agents` 和 `/manage-agents` 运营技能 | [nanocoai/nanoclaw#2862](https://github.com/nanocoai/nanoclaw/pull/2862) |
| **#2752** | Bug Fix | Discord 入站附件（文本/图片）无法到达 agent 的长期问题修复 | [nanocoai/nanoclaw#2752](https://github.com/nanocoai/nanoclaw/pull/2752) |

**关键进展评估：**
- 🔒 **安全**：`#2860` 修复 libsignal 日志中可能泄露密钥材料的问题，建议优先审查合并。
- 📱 **多通道**：WhatsApp（#2870）、Telegram（#2866）、Discord（#2752）三大通道均有活跃修复，多通道稳定性持续改善。
- 🔧 **Session 管理**：#2864 + #2865 两个 PR 共同构建了 session 自动轮转框架，减少僵尸 session 堆积。
- 🧩 **技能系统进化**：两个新 utility/operational skill PR 表明技能管理正在向更细粒度方向发展。

---

## 4. 社区热点

### 🔴 最值得关注的 Issue

**[#2868] `/update-skills` 对已安装渠道静默跳过代码和依赖刷新**（Open）
- 作者：`glifocat`
- 链接：[nanocoai/nanoclaw#2868](https://github.com/nanocoai/nanoclaw/issues/2868)
- **分析**：该 bug 直接影响技能维护流程——用户在已安装渠道上运行 `/add-<channel>` 时，变更日志中的迁移提示形同虚设。这意味着即使贡献者正确标注了 `[Unreleased]` migration 步骤，用户也无法通过标准命令获取最新代码。这是工具链与用户体验之间的关键断裂点，尤其影响频繁更新技能的开发者。尚未有对应修复 PR。

### 🟡 遗留的长期诉求

**[#1275] 加入新 Telegram 群组时自动提示注册**（Closed，但通过 PR 合并解决）
- 链接：[nanocoai/nanoclaw#1275](https://github.com/nanocoai/nanoclaw/issues/1275)
- **分析**：该 Issue 创建于 3 月 19 日，经 3 个月等待后于 6/26 关闭。用户诉求是改善群组注册的首次使用体验——bot 加入群组后应主动引导而非静默。此类 UX 改进反映出自托管 AI 助手在部署友好性上的真实需求。

### 🟢 噪音清理

**[#2869] 误提交至错误仓库**（Closed，自关闭）
- 链接：[nanocoai/nanoclaw#2869](https://github.com/nanocoai/nanoclaw/issues/2869)
- 用户主动承认错误并关闭，无实质影响。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | 链接 |
|---|---|---|---|
| 🔴 **高** | **libsignal session 日志泄露密钥材料**（`session_record.js` 在每次 session 打开/关闭时打印完整 session 对象） | ✅ Fix PR 待合并：[#2860](https://github.com/nanocoai/nanoclaw/pull/2860) | [PR #2860](https://github.com/nanocoai/nanoclaw/pull/2860) |
| 🔴 **高** | **v2 数据库迁移崩溃**：旧版 v1 缺少 `is_main` 列导致 `migrate-v2` 步骤失败，整条迁移链中断 | ✅ 已合并：[#2859](https://github.com/nanocoai/nanoclaw/pull/2859) | [PR #2859](https://github.com/nanocoai/nanoclaw/pull/2859) |
| 🟠 **中** | **WhatsApp 群组消息不显示**：Baileys 返回了 server message id 但消息从未实际送达群组 | 🔧 Fix PR 待合并：[#2870](https://github.com/nanocoai/nanoclaw/pull/2870) | [PR #2870](https://github.com/nanocoai/nanoclaw/pull/2870) |
| 🟠 **中** | **Discord 入站附件不可读**：`message.txt` / 图片附件仅有元信息，无实际字节或路径 | 🔧 Fix PR 待合并：[#2752](https://github.com/nanocoai/nanoclaw/pull/2752)（创建于 6/12，已等待 15 天） | [PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752) |
| 🟠 **中** | **`/update-skills` 对已安装渠道静默空转**：不刷新代码和依赖，使迁移文档失效 | ⏳ 无 Fix PR | [Issue #2868](https://github.com/nanocoai/nanoclaw/issues/2868) |
| 🟡 **低** | **Telegram 旧 Markdown sanitizer 有瑕疵** | 🔧 Fix PR 待合并：[#2866](https://github.com/nanocoai/nanoclaw/pull/2866) | [PR #2866](https://github.com/nanocoai/nanoclaw/pull/2866) |
| 🟡 **低** | **Provider session 过期不轮转**导致资源浪费 | 🔧 Fix PR 待合并：[#2864](https://github.com/nanocoai/nanoclaw/pull/2864)、[#2865](https://github.com/nanocoai/nanoclaw/pull/2865) | — |

---

## 6. 功能请求与路线图信号

### 已由 PR 推动（高概率纳入下一版本）

| 方向 | 内容 | PR |
|---|---|---|
| 🔐 安全加固 | 消除 libsignal 日志泄露 | [#2860](https://github.com/nanocoai/nanoclaw/pull/2860) |
| 📝 Markdown 标准化 | Telegram 全面迁移至 MarkdownV2 | [#2866](https://github.com/nanocoai/nanoclaw/pull/2866) |
| 🔄 Session 自动管理 | ceiling-kill 信号 + 超时自动轮转过期 session（通用框架 + OpenCode 适配器） | [#2864](https://github.com/nanocoai/nanoclaw/pull/2864)、[#2865](https://github.com/nanocoai/nanoclaw/pull/2865) |
| 🌐 MCP 环境变量 | Spawn 时 `${VAR_NAME}` 动态扩展，提升配置灵活性 | [#2861](https://github.com/nanocoai/nanoclaw/pull/2861) |
| 🧩 技能管理层 | `/manage-agents`、`/manage-schedules` 运营技能 + `/system-digest` 实用技能 | [#2862](https://github.com/nanocoai/nanoclaw/pull/2862)、[#2863](https://github.com/nanocoai/nanoclaw/pull/2863) |

### 社区诉求但未启动修复

| 需求 | 来源 |
|---|---|
| `/update-skills` 需真正刷新已安装渠道的代码和依赖 | [Issue #2869](https://github.com/nanocoai/nanoclaw/issues/2868) |
| Bot 加入新群组时的自动注册引导 | Issue [#2868](https://github.com/nanocoai/nanoclaw/issues/1275)（已关闭，需求已满足） |

### 路线图信号判断

从 `grantland` 单日提交密度来看，项目当前处于**功能加速期**，重点方向为：
1. **Session 生命周期管理**（#2864, #2865）——可能正在构建统一的 session GC 框架；
2. **技能工具链强化**（#2861, #2862, #2863）——`/manage-agents` 暗示多 agent 调度能力即将上线；
3. **多通道消息可靠性**——WhatsApp + Telegram + Discord 三通道同时修复，反映项目对跨平台稳定性的战略优先级。

---

## 7. 用户反馈摘要

### 🔴 痛点

- **技能更新流程断裂**：`#2868` 反映用户按照 CHANGELOG 指引操作却发现命令静默失败，这种"文档说可以但实际不行"的体验是最高优先级问题。
- **WhatsApp 群组消息丢失**：`#2870` 描述了"日志显示发送成功但实际不显示"的假成功陷阱——这种问题在消息平台中严重影响信任度。
- **Discord 附件不可读**：`#2752` 创建于 6/12，已影响用户 15 天，说明缺乏文件状态回传给 agent 的机制。

### 🟡 使用场景观察

- **自托管部署者关注首次体验**：`#1275`（群组注册引导）反映出自托管 bot 在共享协作场景下的配置复杂度痛点。
- **安全敏感用户关注日志卫生**：`#2866` 中 `caburi00` 主动提出 libsignal 日志可能泄露密钥材料，表明有用户群体在生产环境中严格审计日志输出。

### 🟢 满意方向

- 无正面评论数据（所有 PR 的 👍 均为 0），但 Issue #1275 在 3 个月后成功关闭，反映了维护者响应的闭环能力。

---

## 8. 待处理积压

以下 PR 值得维护者**优先审查**，避免贡献者流失和社区信心下降：

| PR | 等待天数 | 优先级 | 理由 | 链接 |
|---|---|---|---|---|
| **#2752** | 15 天 | 🔴 高 | Discord 附件修复影响面广，长期停留可能反映审查资源不足 | [PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752) |
| **#2860** | 1 天 | 🔴 高 | 安全修复（日志泄露密钥），应走快速通道审查 | [PR #2860](https://github.com/nanocoai/nanoclaw/pull/2860) |
| **#2870** | 1 天 | 🟠 中高 | WhatsApp 群组消息不显示是功能性阻断 | [PR #2870](https://github.com/nanocoai/nanoclaw/pull/2870) |
| **#2866** | 1 天 | 🟠 中 | Telegram markdown 迁移需确认向后兼容性 | [PR #2866](https://github.com/nanocoai/nanoclaw/pull/2866) |
| **#2861** | 1 天 | 🟠 中 | MCP 环境变量扩展涉及 spawn 时安全，需审查注入风险 | [PR #2861](https://github.com/nanocoai/nanoclaw/pull/2861) |
| **#2863** | 1 天 | 🟡 中 | 新 SKILL.md 类 PR 需验证与现有技能系统无冲突 | [PR #2863](https://github.com/nanocoai/nanoclaw/pull/2863) |
| **#2862** | 1 天 | 🟡 中 | 同上，运营技能需确认权限模型 | [PR #2862](https://github.com/nanocoai/nanoclaw/pull/2862) |
| **#2864** | 1 天 | 🟡 中 | Session 轮转框架需合并后配套其适配器 PR (#2865) | [PR #2864](https://github.com/nanocoai/nanoclaw/pull/2864) |

**特别提醒**：今日积压 9 个待合并 PR，其中 `grantland` 独占 6 个，建议维护者按模块拆分审查（安全 → Bug Fix → 功能 → 技能），避免形成单点审查瓶颈。`#2752` 已超过两周未合并，建议给出明确的合并时间线或说明阻塞原因。

---

*数据来源：[github.com/qwibitai/nanoclaw](https://github.com/nanocoai/nanoclaw) | 报告生成时间：2026-06-27*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-06-27

---

## 1. 今日速览

NullClaw 过去 24 小时社区活跃度极低：无新 PR 提交、无版本发布，仅 1 条存量 Issue（#868）在昨日（06-26）有评论更新。项目当前处于**静默维护期**，没有可见的代码合并或功能推进。唯一的活跃信号来自一位 Termux/Android 用户在持续跟进一个已持续 64 天未解决的 Zig 构建链接错误。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

过去 24 小时内无 PR 合并或关闭。项目代码库无可见推进。

---

## 4. 社区热点

### Issue #868 — Zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat

- **链接**: https://github.com/nullclaw/nullclaw/issues/868
- **状态**: OPEN | 👍: 0 | 💬 3 条评论
- **最后更新**: 2026-06-26（昨日）

**分析**：这是过去 24 小时内唯一有活动的 Issue。该问题自 2026-04-23 创建以来已存在 **64 天**，涉及在 Android/Termux 环境下使用 Zig 0.16.0 编译 NullClaw 时，`linkat` 系统调用触发 `AccessDenied` 错误。昨日有新的评论活动，说明受影响用户仍在尝试复现或寻找 workaround。该问题反映了 NullClaw 在**非标准 POSIX 环境**（Android 受限文件系统 + Termux 的 proot 层）下的构建兼容性短板，属于边缘但真实存在的用户场景。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 有 fix PR? |
|---------|-------|------|------------|
| 🟡 中 — 特定平台构建失败 | [#868](https://github.com/nullclaw/nullclaw/issues/868) Zig build fails on Android/Termux (aarch64) — `linkat` AccessDenied | OPEN，64 天未解决 | ❌ 无 |

**评估**：该 Bug 影响范围有限（仅 Android/Termux + aarch64 + Zig 0.16.0 组合），但持续超过两个月未响应，可能影响项目在移动端/嵌入式开发者群体中的口碑。根因大概率是 Android 的 `linkat` 系统调用在特定 SELinux 策略或文件系统（FUSE/proot）下被拒绝，需要条件编译或 fallback 路径。

---

## 6. 功能请求与路线图信号

过去 24 小时无新功能请求或相关 PR。从当前积压来看，项目近期路线图信号不明确。

---

## 7. 用户反馈摘要

从 Issue #868 及其评论中提炼：

- **使用场景**：开发者在 Xiaomi Redmi Note 9（中端 Android 设备）上通过 Termux 搭建 NullClaw 开发/运行环境，使用 LineageOS 22.2 + Zig 0.16.0
- **痛点**：`zig build` 在 ReleaseSmall 优化模式下，链接阶段对 `.zig` 临时文件执行 `linkat` 时遭遇权限拒绝，导致整个构建流程中断
- **隐含诉求**：用户希望 NullClaw 能在移动/受限环境中可用，或至少提供明确的"不支持"说明和替代方案
- **满意度信号**：该 Issue 获得 0 👍，且已持续 64 天无官方回应，用户可能已转向其他方案或在自行探索 patch

---

## 8. 待处理积压

| Issue | 创建日期 | 未响应天数 | 建议 |
|-------|---------|----------|------|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) Zig build fails on Android/Termux | 2026-04-23 | **64 天** | 🔴 建议维护者尽快 triage：确认是否可复现、是否需要平台特定 workaround，或在文档中标注 Android/Termux 为不受支持平台 |

**维护者关注建议**：Issue #868 是当前唯一活跃 Issue，且已超两个月无官方响应。即使该问题修复成本较高，也建议至少给出状态更新（如"已知悉，计划版本 X 修复"或"不受支持，欢迎 PR"），以维护社区信任度。

---

*报告生成时间：2026-06-27 | 数据来源：github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 · 2026-06-27

---

## 1. 今日速览

过去 24 小时 IronClaw 项目保持高活跃度：共处理 **29 条 Issues**（新开/活跃 24 条，关闭 5 条）与 **50 条 PR**（待合并 35 条，已合并/关闭 15 条）。项目当前处于 **Reborn 架构大规模迭代期**，工作重心集中在四大方向：① **能力策略系统（Capability Policy）** 的四维度模型（available → control-plane）正在通过 epic #5261 推进落地；② **Reborn WebUI v2** 的稳定性与体验修复密集（#5365 修复 Retry 按钮等）；③ **E2E 测试套件** 进行大规模修复（BenKurrek 主导 #5329/#5330 等）；④ **Trace Commons** 基础设施 PR #5280 开启 Instance 级 trace enrollment。无新版本发布。

---

## 2. 版本发布

无。

---

## 3. 项目进展 —— 今日合并/关闭的重要 PR

| PR | 状态 | 核心内容 | 项目意义 |
|---|---|---|---|
| **#5265** | 已合并 | `feat(reborn): env-configurable turn-runner concurrency` —— 通过环境变量控制 turn-runner 并发（0=无限），便于压测 libSQL 写入并发 | 🔧 基础设施弹性扩展 |
| **#3890** | 已合并 | Reborn crate 级多租户隔离契约测试（workspace/project 附件路径、事件游标回放流隔离） | 🛡️ 多租户安全基线 |
| **#3767** | 已合并 | 精简版 `NoExposureGuard` 服务，包裹 `LeakDetector`，接住 host HTTP egress 与义务泄露路径 | 🛡️ 安全防护加固 |
| **#3766** | 已合并 | `(auth) Seal dispatch authority with AuthorizedDispatchRequest` —— CapabilityDispatcher 不再接受原始未授权请求 | 🛡️ **安全核心：权限密封** |
| **#3703** | 已合并 | `RebornRuntime` 接口futureproof，为 Configuration-as-Code（#3036）铺路 | 🏗️ 架构前瞻 |
| **#3277** | 已合并 | Telegram `allowed_chat_ids` 群组过滤器回收到 main | 📱 Telegram 精细化控制 |
| **#2854** | 已合并 | CodeAct host shims + gated rich result 对象 + A/B 滚出控制 | 🤖 Agent 能力层扩展 |
| **#4934** | 已合并 | js-yaml 4.1.1→4.2.0（docs 依赖维护） | 🔧 依赖更新 |
| **#5311** | 待合并 | **release**: `ironclaw` 0.24→0.29.1、`ironclaw_common` 0.4→0.5（breaking）、`ironclaw_skills` 0.3→0.4（breaking） | ⏫ 版本跳跃 |

**关键里程碑**：#3766 完成 CapabilityDispatcher 的权限密封是整个安全架构的核心闭环——此后所有工具调用必须经过签名 authority；#5265 的合并则为即将到来的并发压测开了闸门。

---

## 4. 社区热点

### Issue 热点（讨论最活跃）

- **#5364 —— Make "Always allow eligible tools" the default** (loopstring)  
  [链接](https://github.com/nearai/ironclaw/issues/5364)  
  一句话提案：将"始终允许符合资格的工具"默认从 OFF 改为 ON。**诉求**：新用户首次体验被反复出现的工具批准弹窗打断（一条"Gmail 连接"命令可触发 5+ 逐次批准）。  
  ⮕ 已关联 PR **#5366** 正在提交，预计在下一版本落地。

- **#5119 系列 + #5192/#5196/#5331 —— Reborn 工具批准体验 Bug 集**  
  [5192](https://github.com/nearai/ironclaw/issues/5192) · [5196](https://github.com/nearai/ironclaw/issues/5196) · [5331](https://github.com/nearai/ironclaw/issues/5331) · [5283](https://github.com/nearai/ironclaw/issues/5283)  
  问题聚类：拒绝/批准工具后的状态机混乱——"始终批准"未持久化（#5283）、拒绝后仍被追问、跨对话审批阻塞（#5302）。核心根因疑似 **approval flag 的写入/读取时序与 session 级作用域未清理**。  
  ⮕ 目前无统一修复 PR，但 #5366 的默认策略调整将减少用户实际遇到的批准频率。

- **#5332 —— Coverage `--all-features` 自动启用 forward feature gates** (BenKurrek)  
  [链接](https://github.com/nearai/ironclaw/issues/5332)  
  结构性 gating bug：PR7-ready/PR3180-ready 等 forward gate 被整体开启，导致特意推迟的 `soul_md_persistence` 安全不变量测试失败。**安全级别：中高**。  

### PR 热点（最大规模 / 最关键）

- **#5280 —— Trace Commons: instance-wide enrollment + per-user profiles + trace inspection** (zmanian)  
  [链接](https://github.com/nearai/ironclaw/pull/5280)  
  size: XL，跨 21 个 scope 标签，是今日涉及面最广的 PR。在个人 invite flow 之上叠加**实例级 trace 系统**，与 `trace-commons-server` 联动。

- **#5271 —— Dependabot: everything-else 组 45 包升级** (dependabot)  
  [链接](https://github.com/nearai/ironclaw/pull/5271)  
  size: XL, risk: high。rustls 0.23.40→0.23.41、refinery 0.8→0.9 等。合并前需通过 E2E 回归。

- **#5349 → #5355 —— Capability Policy 体系（Epic #5261）**  
  [5349](https://github.com/nearai/ironclaw/pull/5349) · [5355](https://github.com/nearai/ironclaw/pull/5355)  
  合并链 `#5262 → #5344 (engine) → #5349 (availability) → #5355 (control-plane)`。这是 Reborn 安全模型的**下周决**，预计本周内合并完成 first slice。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 问题 | 状态 |
|---|---|---|---|
| 🔴 **高** | [#5332](https://github.com/nearai/ironclaw/issues/5332) | Coverage 模式意外启动 forward feature gates，破坏 soul_md 安全不变量测试 | open，无 PR |
| 🔴 **高** | [#5337](https://github.com/nearai/ironclaw/issues/5337) | Wasm-channel OAuth 首次配置永远报 "missing secret"——auth descriptor 从未被 seed | open，无 PR |
| 🔴 **高** | [#5009](https://github.com/nearclaw/ironclaw/issues/5009) | Slack OAuth live 路径未实现 DM-parity（security reviewer follow-up from #4953） | 已关闭，需确认修复是否在 PR #4953 中覆盖 |
| 🟡 **中** | [#5196](https://github.com/nearai/ironclaw/issues/5196) | "Ask each time" 批准点击后出现 authorization 错误，触发重复批准流程 | open |
| 🟡 **中** | [#5192](https://github.com/nearai/ironclaw/issues/5196) | 拒绝工具批准后仍收到额外批准请求 | open |
| 🟡 **中** | [#5322](https://github.com/nearai/ironclaw/issues/5322) | 自动化创建超时 | open |
| 🟡 **中** | [#5323](https://github.com/nearai/ironclaw/issues/5323) | 自动化创建因 runner lease 过期失败 | open |
| 🟡 **中** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E 连续失败（自 2026-05-27 起） | open，长期未解决 |
| 🟢 **低** | [#5333](https://github.com/nearai/ironclaw/issues/5333) | Composer 发送后短暂保留已提交文本 | open |
| 🟢 **低** | [#5289](https://github.com/nearai/ironclaw/issues/5289) | `invalid_input` 错误被泛化为 "driver protocol error" | open |
| 🟢 **低** | [#5282](https://github.com/nearai/ironclaw/issues/5282) | 运行中 composer 出现 "Logs" 入口 | **已关闭** ✅ |
| 🟢 **低** | [#5227](https://github.com/nearai/ironclaw/issues/5227) | Run failure 信息错误绑定到新 turn | **已关闭** ✅ |

**已修复 / 已关闭 Today**：#5282（Logs 入口）、#5227（错误 turn 绑定）、#5365（Retry 按钮 dead code，已 PR）。

---

## 6. 功能请求与路线图信号

| 方向 | Issue | 信号 | 落地点判断 |
|---|---|---|---|
| 体验优化 | [#5364](https://github.com/nearai/ironclaw/issues/5364) | 默认开启"始终允许合格工具" | ✅ **即将落地** —— PR #5366 已在提交 |
| 安全策略体系 | [#5261](https://github.com/nearai/ironclaw/issues/5261) Epic | Capability Policy 四维度 | 🚀 **本周内** —— 合并链 #5344→#5349→#5355 |
| 可观测基础设施 | — — | Trace Commons instance enrollment | 🚀 **本周内** —— PR #5280 |
| 浏览器自动化 | [#2355](https://github.com/nearai/ironclaw/issues/2355) Epic | 持久多身份 Chrome + CDP 浏览 | ⏳ 长期跟踪，无近期 PR |
| 配置即代码 | [#3036](https://github.com/nearai/ironclaw/issues/3036) | Configuration-as-Code | ⏳ 基础设施已就绪（#3703 已合并），业务层未启动 |
| 多租户隔离 | — — | Reborn 多租户隔离契约测试 | ✅ 已完成（#3890 已合并） |
| 自动化调度 | [#5319](https://github.com/nearai/ironclaw/issues/5319) | 创建自动化时未确认时区，默认 UTC 导致困惑 | ⏳ 待排期 |

---

## 7. 用户反馈摘要

**痛点（不满意）**：
- **工具批准体验碎片化**：sunglow666 在 24 小时内连续提交 8+ 条 Reborn UI 相关 bug（#5192/#5196/#5197/#5282/#5283/#5302/#5319/#5322/#5323/#5333），核心诉求是"**批准一次就别再问了**"和"**拒绝后别再来烦我**"。这反映出 Reborn 的 approval state machine 在 session 级和 conversation 级存在作用域泄漏。
- **自动化创建不可靠**：多个用户报告自动化创建在 planning 阶段就停止（#5320）、超时（#5322）、lease 过期（#5323）。
- **错误信息不透明**：#5289 的 "driver protocol error" 掩盖了真实的 `invalid_input` 失败。

**满意 / 正向信号**：
- 社区贡献者（BenKurrek、serrrfirat、zetyquickly、pranavraja99）在 E2E 修复、benchmark hill-climbing、capability policy 等方向持续输出高质量 PR，项目协作节奏健康。
- #5364 的"默认开启"提案获得快速响应（PR 同日提交），说明维护者对用户体验反馈响应及时。

---

## 8. 待处理积压 —— 提醒维护者关注

| 积压项 | 类型 | 等待时间 | 风险 |
|---|---|---|---|
| **#4108** —— Nightly E2E 持续失败 | Issue | **30+ 天**（自 2026-05-27） | 🔴 CI 红灯长期不灭，掩盖真实回归 |
| **#5332** —— Coverage forward-gate bug | Issue | 1 天 | 🔴 安全不变量测试被跳过 |
| **#5337** —— Wasm OAuth 首次配置失败 | Issue | 1 天 | 🔴 阻断 Gmail 等 channel 首次接入 |
| **#5271** —— Dependabot 45 包升级 | PR | 2 天 | 🟡 含 rustls 安全更新，延迟有风险 |
| **#5221** —— DeepSeek-V4-Flash harness backlog** | Issue | 2 天 | 🟡 benchmark 改进候选积压 |
| **#5315** —— Daily failure taxonomy 2026-06-26** | Issue | 1 天 | 🟢 日常跟踪，需有人认领分类 |

**建议优先处理顺序**：#4108（恢复 CI 健康）→ #5332（安全不变量）→ #5337（OAuth 阻断）→ #5271（安全依赖更新）。

---

*数据来源：GitHub nearai/ironclaw，截至 2026-06-27 00:00 UTC。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 — 2026-06-27（周六）

---

## 1. 今日速览

LobsterAI 今日（6/26-27）活跃度**较高**：合并/关闭 8 个 PR、新开 1 个 Bug Issue、发布 2026.6.26 新版本。核心工作集中在 **OpenClaw 运行时大版本升级**（v2026.4.14 → v2026.6.1）及其配套修复，同时修复了多个 cowork 子代理进度追踪和 Mermaid 渲染稳定性问题。桌面端出现一个高严重度数据备份卡死 Issue（Windows），尚无修复 PR。项目整体处于**密集迭代期**，维护节奏紧凑。

---

## 2. 版本发布

### [LobsterAI 2026.6.26](https://github.com/netease-youdao/LobsterAI/releases) — 2026-06-26

**主要变更：**

| 类型 | 内容 | PR |
|------|------|-----|
| 🚀 feat | OpenClaw 运行时升级至 v2026.6.1（原 v2026.4.14），跨度约2个月 | [#2209](https://github.com/netease-youdao/LobsterAI/pull/2209) |
| 🚀 feat | Cowork 新增 Plan Mode 工作流 | [#2183](https://github.com/netease-youdao/LobsterAI/pull/2183) |
| 🐛 fix | 支持升级后的 IM 插件即时通讯 | [#2209 合入](https://github.com/netease-youdao/LobsterAI/pull/2209) |

**⚠️ 破坏性变更 / 迁移注意事项：**
- OpenClaw 运行时跨越 2 个大版本升级（4.x → 6.x），涉及运行时 patches、插件升级、构建脚本更新和 Cowork 集成修复。建议用户在升级后重新验证自定义技能与插件兼容性。
- 合入的 Skill Tooltip PR [#1459](https://github.com/netease-youdao/LobsterAI/pull/1459) 修改了所有技能选择入口的 UI 行为，对依赖旧布局的屏幕可能存在微影响。

---

## 3. 项目进展

今日合并/关闭的 8 个 PR 可按主题归为以下方向：

### 🔧 OpenClaw 运行时升级（核心里程碑）
- **[#2209](https://github.com/netease-youdao/LobsterAI/pull/2209)** — 将 OpenClaw 运行时从 v2026.4.14 升级至 v2026.6.1，同步更新运行时 patches、插件、构建脚本和 Cowork 集成。这是本次版本的核心升级，为后续 Plan Mode 工作流和 IM 插件改进奠定基础。

### 🤖 Cowork 子代理稳定性
- **[#2208](https://github.com/netease-youdao/LobsterAI/pull/2208)** — 持久化 terminal subagent 的 `endedAt` 时间戳，侧边栏对已结束的 subagent 使用 `endedAt - createdAt` 冻结时长显示，运行中的 subagent 继续实时滚动。提升多 agent 工作流的可观测性。
- **[#2207](https://github.com/netease-youdao/LobsterAI/pull/2207)** — 将 subagent 进度追踪从依赖模型输出的 announce text 改为依赖本地 `subagent_runs` 数据源，修复了 chat.final 后进度回退（如本地 5/5 却显示 3/5）的 stale 问题，同时保留 failed spawn 行并追加重试替代。**解决了多 agent 协作中进度可信度问题。**

### 🎨 渲染/前端稳定性
- **[#2213](https://github.com/netease-youdao/LobsterAI/pull/2213)** — 修复 Mermaid 渲染失败时泄露隐藏/error SVG 到文档的问题；完善渲染完成和组件卸载时的 DOM 清理；保持 prompt tools skill 子菜单在焦点在内部时不意外关闭。
- **[#2210](https://github.com/netease-youdao/LobsterAI/pull/2210)** — 在渲染前使用 `mermaid.parse()` 校验 Mermaid artifact 内容，语法错误走受控的 artifact error UI 而非 Mermaid 原始错误 SVG；渲染使用临时隐藏容器并在完成后清理 DOM 节点。
- **[#2212](https://github.com/netease-youdao/LobsterAI/pull/2212)** — 修复 prompt tools skill 子菜单在焦点于搜索输入框时意外关闭的问题；搜索列表高度在结果变化时保持稳定。

### 🧹 代码维护
- **[#2211](https://github.com/netease-youdao/LobsterAI/pull/2211)** — 对 `finalUpgradePatchDecisions.test.ts` 按 `simple-import-sort` 规范排序 import，跟随 [#2209](https://github.com/netease-youdao/LobsterAI/pull/2209) 的合并 commit 进行的定向清理。
- **[#1459](https://github.com/netease-youdao/LobsterAI/pull/1459)** — 为所有技能选择入口添加 hover Tooltip，展示完整名称、图标和描述。四方向智能定位 + 300ms 延迟防误触，解决了长久以来技能描述被截断的用户痛点。

**总结：** 项目今日完成了运行时隔两个月的跨版本升级，同步夯实了 cowork 子代理的进度可观测性和前端 Mermaid 渲染稳定性，整体向前迈进了**一个完整版本周期**的功能与质量基座。

---

## 4. 社区热点

| # | 议题 | 热度 | 链接 |
|---|------|------|------|
| 1 | Issue #1462 — 期望每个 agent 单独绑定模型 + 正式多 agent 协作能力 | 3 条评论 | [Issue #1462](https://github.com/netease-youdao/LobsterAI/issues/1462) |
| 2 | PR #1459 — 技能 hover Tooltip 展示完整描述（Stale PR，提出于 4 月，今日合入） | Stale 关闭 | [PR #1459](https://github.com/netease-youdao/LobsterAI/pull/1459) |

**分析：**

- **Issue #1462** 来自用户 @orion0608，自 2026-04-04 创建至今已有近 3 个月，互动量不高但反映了**架构层面的深层需求**：① 单个 agent 级别的模型绑定（细化资源管控）；② 多 agent 协作房间/小组模式，由 main agent 动态调度。用户明确提到对比过阿里 HiClaw 后选择了 LobsterAI。结合今日合入的 PR #2208/#2207 中正推进的 subagent 进度追踪改进，说明团队已在底层逐步建设多 agent 协作能力，但面向用户的"房间/manager"概念尚未有明确的 roadmap 承诺。该 Issue 被 stale bot 关闭但未真正解决，可能需社区经理主动回应路线图。

- **PR #1459** 创建最早（2026-04-03），关注技能选择 UI 的描述截断问题，今日终于合入，说明团队在批量清理积压 stale PR。

---

## 5. Bug 与稳定性

| 严重度 | Bug 描述 | 环境 | 状态 | 链接 |
|--------|----------|------|------|------|
| 🔴 **高** | 桌面端"数据备份"功能导致主进程卡死（100% 可复现） | Windows 11 24H2, v2026.6.1, better-sqlite3, WAL 模式 | **OPEN — 无修复 PR** | [Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214) |
| 🟡 中 | Mermaid 渲染失败时 error SVG 泄露到文档 | 全平台 | ✅ fixed via PR #2210, #2213 | [PR #2210](https://github.com/netease-youdao/LobsterAI/pull/2210) |
| 🟡 中 | Skill 子菜单在焦点于搜索框时意外关闭 | 全平台 | ✅ fixed via PR #2212 | [PR #2212](https://github.com/netease-youdao/LobsterAI/pull/2212) |
| 🟡 中 | Subagent 进度在 chat.final 后回退（stale progress，5/5 → 3/5） | 全平台 | ✅ fixed via PR #2207 | [PR #2207](https://github.com/netease-youdao/LobsterAI/pull/2207) |
| 🟢 低 | Terminal subagent 结束后侧边栏时长不冻结 | 全平台 | ✅ fixed via PR #2208 | [PR #2208](https://github.com/netease-youdao/LobsterAI/pull/2208) |

**⚠️ Issue #2214 需要优先关注：** 该 Bug 在 Windows 平台上 100% 可复现，用户在大数据量（几百条消息 + WAL 模式下 71.6MB 数据库）场景下执行数据备份会导致整个应用进程未响应，只能强制结束。考虑到 LobsterAI 的用户往往运行大量对话数据，该问题影响面可能较广，且直接触及**数据安全**这一核心关切点。建议尽快确认是否需要使用异步备份 + WAL checkpoint 方案替代同步备份路径。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 已有信号 | 预判 |
|------|------|----------|------|
| 单 agent 级别模型绑定 | Issue #1462 | OpenClaw 运行时大版本升级（#2209）提升了可扩展性，为多模型路由奠基 | ⭐ 可能纳入下一版本，但尚需架构设计 |
| 多 agent 协作（房间/manager 模式） | Issue #2214 #1462 | Cowork subagent 进度/时长改进（#2207/#2208）正在建设底层；Plan Mode 工作流（#2183）已合入 | ⭐⭐ 底层在推进，但完整"房间"体验大概率需 2-3 个版本周期 |
| Plan Mode 工作流 | PR #2183 | 已在本次版本中合入并随 2026.6.26 发布 | ✅ 已上线 |
| 技能描述 Tooltip 改进 | PR #1459 | 已合入并发布 | ✅ 已上线 |

---

## 7. 用户反馈摘要

**从 Issues 和 PR 评论中提炼：**

- **满意方面：**
  - 用户对 LobsterAI 在 IM 多实例方面的实用性表示认可（Issue #1462 中明确提到对比竞品后选择了 LobsterAI）
  - 技能描述截断问题的修复（PR #1459）虽然历时近 3 个月但最终落地，反映了小型但实际的 UI 痛点

- **痛点：**
  - **Windows 数据备份 100% 卡死**（Issue #2214）：用户运行数百条消息、WAL 模式数据库场景下，备份操作会阻塞主进程。这暴露了 better-sqlite3 同步操作在 Electron 主进程中的风险，用户期望备份应在后台线程执行
  - **多 agent 协作体验不透明**：subagent 进度回退、时长显示异常（#2207/#2208 已修复）说明用户在真实使用中已深度依赖多 agent 模式，对可观测性期望很高

- **使用场景画像：**
  - 重度 Windows 用户，日消息量数百条，重视数据安全（主动触发备份）
  - 有跨团队协作需求的用户，关注 agent 间调度和模型差异化配置

---

## 8. 待处理积压

| 积压项 | 类型 | 创建/更新时间 | 建议 |
|--------|------|---------------|------|
| [Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214) — 数据备份卡死 | Bug | 2026-06-26 | 🔴 **紧急** — 高严重度且无修复 PR，建议下一个 hotfix 版本优先处理 |
| [Issue #1462](https://github.com/netease-youdao/LobsterAI/issues/1462) — 单 agent 模型绑定 + 多 agent 协作 | Feature Request | 2026-04-04（已 stale 关闭） | 🟡 建议社区经理回复路线图；需求与当前 subagent 改进方向一致，可在下一版本提供 beta 支持 |
| 多个 Stale PR（如 #1459 已合入） | PR | 4 月积压 | 🟢 今日已批量清理，关注是否还有遗漏 |

---

> **编辑注：** 本报告基于 2026-06-26 LobsterAI 仓库公开数据自动生成，数据截取时间窗口为过去 24h。所有链接指向 [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-06-27

---

## 1. 今日速览

Moltis 在过去 24 小时内社区活跃度处于**低活动期**：无新开 Issue、无新版本发布、无合并 PR。唯一值得关注的动态是一项面向浏览器自动化场景的自动截图功能提案（PR #1135），目前处于 **OPEN 待合并** 状态，尚无任何 reviewer 反馈或互动。整体而言，项目处于功能迭代间歇期，社区参与度平静。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

过去 24 小时内 **无已合并 PR**。

**待合并 PR：**

| # | PR | 状态 | 说明 |
|---|---|---|---|
| #1135 | `browser: optional auto-screenshot after each action` | 🟠 OPEN 待合并 | 作者 resumeparseeval，由 AI 代理自动提交 |

**PR #1135 功能解读：**
- 核心改动位于 `BrowserManager::execute_action`（`crates/browser/`），在浏览器**状态变更动作**的单一调度节点自动截图并附加到 tool result。
- 目标：让 AI 聊天客户端能够渲染 **per-step screenshot 时序视图**。
- 评估：这是一个面向 AI Agent / 浏览器代理（browser-use）场景的 UX 增强，解决了 Agent 执行过程中缺乏视觉反馈的痛点。但该 PR 目前无人工 review，也无任何评论互动，短期内合入的可能性较低。

---

## 4. 社区热点

由于今日无社区讨论或互动数据，暂无热点话题可供分析。PR #1135 作为唯一动态，其主题为浏览器自动化场景下的自动截图反馈，直击 AI Agent 在浏览器操作中缺少视觉记录的痛点，但目前社区尚未就此展开讨论。

---

## 5. Bug 与稳定性

- 过去 24 小时内 **无新报告**的 Bug、崩溃或回归问题。
- 未发现与该 PR 相关的已知稳定性风险。

---

## 6. 功能请求与路线图信号

尽管今日无正式路线图更新，但 PR #1135 暗示了项目可能在向 **browser-use / AI Agent 浏览器自动化** 的体验增强方向探索。该 PR 关注点并非传统意义上的自动化测试，而是为 AI 编程助手提供浏览器操作的视觉反馈。这反映出社区（至少是 AI 代理自动提交的一个尝试）对更丰富的浏览器 Agent 工具链有实际需求。鉴于项目名称与 AI 智能体/个人助手定位的关联，此方向与项目战略方向**高度契合**，值得维护者评估优先级。

---

## 7. 用户反馈摘要

过去 24 小时无新增用户评论或反馈。从 PR #1135 可提取一个信号：**浏览器自动化场景用户需要更直观的执行过程可视化**，单次截图时序视图能有效降低调试门槛。但当前缺少真实用户的声音，该需求仍停留在单一 AI 代理提交层面。

---

## 8. 待处理积压

- **PR #1135**（`browser: optional auto-screenshot after each action`）：自 2026-06-26 提交以来无任何 reviewer 反馈，已超过 **24 小时无互动**。建议维护者指派 reviewer 进行技术评审，确认方案合理性及与现有 browser crate 架构的兼容性。
- 整体积压：当前 Issues 和活跃 PR 列表均为短期窗口可见项，未额外积压该 PR。

---

> **健康度评估：** 🟡 中等偏低 — 代码冻结或间歇期正常，但唯一活跃 PR 零互动值得关注。建议社区管理者尽快响应以避免贡献者流失。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-06-27

**项目**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)
**数据窗口**: 2026-06-26 ~ 2026-06-27

---

## 1. 今日速览

项目处于 **高活跃状态**，过去 24 小时处理了 **29 条 Issue**（20 条新开/活跃、9 条已关闭）和 **50 条 PR**（26 条待合并、24 条已合并/关闭），并发布了 **v2.0.0-beta.1** 版本——这标志着平台正式进入 2.0 时代的早期预览阶段。社区反馈非常活跃，涌现了大量围绕新版本的 bug 报告和迁移适配讨论，尤其是 agent 上下文管理、多通道消息交付、以及多个 OpenAI 兼容性痛点。PR 合并节奏稳健，多个高价值修复与 v2.0 beta 同步推进。

---

## 2. 版本发布

### v2.0.0-beta.1 — QwenPaw 2.0.0 早期 Beta

- **状态**: ⚠️ 早期 Beta，不推荐生产使用
- **变更摘要**: `refactor: migrate agent` — agentscope 核心框架已升级至 2.x 系列，Agent 实现完成重构迁移
- **破坏性变更**: 由于底层 agentscope 从 1.x 迁移至 2.x（对应 PR #5576 将为升级 agentscope 依赖至 2.0.3），存在大量潜在 breaking changes
- **迁移注意事项**:
  - 第三方插件可能需要适配（已有 PR #5568 修复 5 个官方插件在 QwenPaw 2.0 下的安装问题）
  - 桌面端 Tauri 生命周期需重新适配（PR #5265 已修复 graceful shutdown）
  - 多个旧 Issue 已因架构变更而自动失效（如 #5259 memory-index 问题，已在 #5440 中说明 memory manager 已用 ReMe4 重写）

🔗 Release: [v2.0.0-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.1)

---

## 3. 项目进展

今日合并/关闭的关键 PR 及推进方向：

| PR | 状态 | 进展说明 |
|---|---|---|
| **#5440** | ✅ Merged | agentscope 2.0 合并后清理（Ponytail cleanup），删除 1493 行冗余代码，修复 CancelledError 处理、清理无用内存索引逻辑 |
| **#5153** | ✅ Merged | pywebview 桌面客户端获得与 Tauri 一致的即时窗口启动优化，消除 10-30 秒黑屏等待 |
| **#5436** | ✅ Merged | 消息发送区域支持拖拽文件上传（#5420 的交付） |
| **#5297** | ✅ Merged | 模型管理中支持批量测试和批量删除模型 |
| **#5265** | ✅ Merged | T桌面端优雅关机 + Tauri 生命周期修复 |
| **#3993** | ✅ Closed | OpenAI Responses API 与原生工具调用支持（已合并完成） |
| **#5474** | ✅ Closed | Skill ZIP 上传的 YAML Front Matter 错误不再导致假成功 |

**整体推进评估**: 项目正在完成两个并行工作流——(1) agentscope 2.0 大版本迁移后的收尾清理，(2) 桌面端用户体验优化（启动速度、拖拽上传）。本周合并密度高，清理型 PR 多于功能型，说明 2.0 beta 发布后已进入稳定化阶段。

---

## 4. 社区热点（按评论参与度排序）

### Issue #5262 · 内置技能禁用状态无法跨版本保持（12 条评论，已关闭）
每次版本升级后，用户手动禁用的内置技能（如 docx、xlsx）会被重置为启用状态。这是自 #4807 以来的反复出现的问题，复现路径清晰，影响所有需要精简工具列表的用户。
🔗 [Issue #5262](https://github.com/agentscope-ai/QwenPaw/issues/5262)

### Issue #5379 · Python 安装报错 Internal Server Error（7 条评论）
通过 `pip install` 安装最新版本后启动报 `get_remote_addr(transport)` 错误。该平台 Windows 部署群体的环境配置问题，可能与新依赖版本冲突有关。
🔗 [Issue #5379](https://github.com/agentscope-ai/QwenPaw/issues/5379)

### Issue #5563 · 多步骤 Agent 回复碎片化刷屏（5 条评论，关联 PR #5577）
Agent 在执行多步骤任务时逐条发送消息卡片，10 步操作即产生 10 条消息。已有社区开发者提交 PR #5577 实现 opt-in 消息聚合机制。
🔗 [Issue #5563](https://github.com/agentscope-ai/QwenPaw/issues/5563)

### Issue #5480 · Console 长消息排版错乱（5 条评论，已关闭）
Web Console 接收长 Markdown 消息时格式坍塌（换行丢失、代码块挤压），需切换 Tab 才能触发重新渲染。典型的 CSS layout recalculation 时机问题，已修复。
🔗 [Issue #5480](https://github.com/agentscope-ai/QwenPaw/issues/5480)

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高优先级

| # | 问题 | 状态 | Fix PR |
|---|---|---|---|
| **#5550** | Remote SSH 插件依赖安装循环 + 旧 backend 进程残留，内存耗尽 | 🔴 Open | **#5570** (已提) |
| **#5520** | `browser_use stop()` 未清理 Chrome renderer 进程，持续内存泄漏 | 🔴 Open | **#5536** (已提) |
| **#5539** | Heartbeat 任务硬编码 120 秒超时，复杂任务无端被中断 | 🟠 Open | **#5557** (已提，可配置超时) |

### 🟡 中优先级

| # | 问题 | 状态 | Fix PR |
|---|---|---|---|
| **#5401** | Console 打开大量工具调用历史的会话时前端崩溃（`type: "data"` 渲染缺失） | ✅ Closed | 已修复 |
| **#5543** | functionDeclaration `type: null` 导致第三方中转模型报错 | 🟠 Open | **#5549** (已提) |
| **#5379** | pip 安装后启动报 Internal Server Error | 🟠 Open | 调查中 |
| **#5474** | Skill ZIP 的无效 YAML Front Matter 导致假成功 | ✅ Closed | 已修复 |
| **#5554** | 企业微信发送文件后 bot 无回复（channel 重启中断处理） | 🟠 Open | **#5575** (关联) |

### 🟢 低优先级

| # | 问题 | 状态 |
|---|---|---|
| **#5328** | DeepSeek 模型在 thinking 阶段频繁卡死 | 🟠 Open |
| **#5472** | GLM 系列模型通过 OpenCode Go 调用时报 json_schema 编译错误 | ✅ Closed |
| **#5556** | 源码安装找不到 `reme-ai 0.4.0.4` 版本 | ✅ Closed |
| **#5262** | 升级后内置技能禁用状态重置 | ✅ Closed |

---

## 6. 功能请求与路线图信号

### 已提交 PR 的活跃功能（高概率纳入）

| PR | 功能 | 关联 Issue |
|---|---|---|
| **#5577** | 通道消息回复聚合（opt-in `aggregate_message_replies`） | 回应 #5563 |
| **#5575** | 媒体消息无文字时可配置是否等待（`no_text_debounce_enabled`） | 回应 #5554 |
| **#5557** | Heartbeat 执行超时可配置 | 回应 #5539 |
| **#5568** | 官方插件在 QwenPaw 2.0 下的安装修复 | v2.0 beta 配套 |
| **#5546** | 治理策略模式泛化（governance policy pattern） | 新架构扩展 |
| **#5321** | Scroll 上下文策略 — 持久化历史到 SQLite + REPL 召回 | 新能力 |

### 已讨论但尚未有 PR 的功能需求

| Issue | 功能 | 分析 |
|---|---|---|
| **#5572** | 模型自动降级（配额耗尽/超时→备选模型） | 实用性极强，但架构依赖深，短期可能不会实现 |
| **#5573** | DeepSeek V4 thinking 模式在 OpenAI 兼容端点上修复流式兜底 + null schema 清洗 | 已在 #5549 中部分覆盖 null schema 问题 |
| **#4865** | `write_file` 工具生成内容时不流式渲染，界面看似卡死 | 已有 2 👍，社区关注度高 |
| **#5566** | cron 任务静默执行 + `channels send` 通知不可达 | 定时任务场景刚需 |
| **#5564** | `channels send` 与 API 支持钉钉 `@mention` | 多 Agent 协作场景 |
| **#4865** | Web 控制台代码生成的流式渲染 | 影响大文件生成体验 |

### 信号判断

项目当前路线图重心：**稳定 v2.0 beta → 正式发布**。上述已 PR 的功能（#5577、#5575、#5557）属于低成本高回报的体验优化，大概率在正式版前合入。

---

## 7. 用户反馈摘要

### 核心痛点

1. **Desktop 端体验仍不成熟**:
   - 启动白屏 (#5569 已 PR)
   - 插件依赖安装风暴 (#5570 已 PR)
   - 长消息 UI 渲染崩溃 (#5480 已修复)

2. **Channel 集成健壮性不足**:
   - 企业微信文件上传后静默失败 (#5554)
   - 钉钉静默任务产生垃圾通知 (#5566)
   - 飞书长消息发送失败 (#5561)
   - 第三方中转站兼容问题频发 (#5573, #5472)

3. **状态持久化薄弱**:
   - 内置技能禁用状态不跨版本保持 (#5262)

**满意方向**:

- agentscope 2.0 迁移后代码量大幅缩减（PR #5440:-1493），社区用户称之为“Ponytail cleanup”
- 桌面端正在获得与 Tauri 一致的启动体验优化（PR #5153）
- Scroll 上下文策略 (#5321) 被认为是对话记忆管理的突破性工作

**:
- Windows 用户比例高但平台兼容性 bug 多 (#5379, #5554)
- “企业微信”作为被频繁使用的通道，健壮性仍不够
- 碎片化消息 (#5563) 影响所有面向客户的 Bot 场景

---

## 8. 待处理积压

以下长期开放的重要Issue/PR需要维护者关注：

| 类型 | # | 标题 | 开放天数 | 风险 |
|---|---|---|---|---|
| Issue | **#4865** | `write_file` 不流式渲染，生成长文件时界面卡死 | 56 天+ | 👍:2，社区呼声高，影响基础体验 |
| Issue | **#5379** | pip 安装启动报 Internal Server Error | 5 天 | 新用户安装门槛问题 |
| Issue | **#4807** | 内置技能升级重置（关联 #5262） | 长期反复 | 反复出现说明根因未彻底解决 |
| Issue | **#5328** | DeepSeek thinking 卡死 | 8 天 | 影响主力模型用户体验 |
| PR | **#5321** | Scroll 上下文管理策略 | 8 天（审查中） | 大型 PR，审查进度需关注 |
| PR | **#5546** | governance policy pattern | 1 天 | 新架构泛化，可能需要讨论 |
| Issue | **#5550** | Remote SSH 插件 fork-bomb 风险 | 1 天 | 严重稳定性风险，PR 已提 |
| Issue | **#5554** | 企业微信文件消息丢失 | 1 天 | 关键通道数据丢失 |
| Issue | **#5520** | browser_use 内存泄漏 | 2 天 | 长期运行必现 |

---

**日报生成时间**: 2026-06-27
**数据来源**: CoPaw GitHub Repository (agentscope-ai/CoPaw)
**下次更新**: 2026-06-28

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-27

---

## 1. 今日速览

ZeroClaw 维持高活跃度，过去 24 小时共处理 **50 条 Issue 更新**（48 条新开/活跃，2 条关闭）和 **50 条 PR 更新**（39 条待合并，11 条已合并/关闭）。今日发布了 **v0.8.2**，引入 A2A Agent 发现机制与 Skills 增强，是近期功能密度较高的一个版本。社区讨论热点集中在供应链安全签名（#8177）、WASM 插件运行时（#8135、#8187）、delegate 独立模式（#8238）等高安全级别 RFC，表明项目正加速向生产级安全架构演进。积压的重要 Issue/PR 数量较多，维护者响应压力仍偏高。

---

## 2. 版本发布

### v0.8.2

- **Release**: [v0.8.2](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.2)
- **核心新特性**:
  - **A2A Agent Discovery**: 开放 Agent 间互操作的前门，支持 agent-to-agent 发现与对接
  - **Skills 增强**: 支持用户配置的额外 registry，以及类型化的 slash 命令选项（typed slash-command options），扩展了技能生态
- **安全加固**: 在 plugins 和 channels 层面整体提升安全 posture（release notes 截断，具体内容以完整公告为准）
- **迁移注意事项**: 建议关注 skills 配置格式变化，如已有自定义 skills registries 需在升级后验证配置兼容性

---

## 3. 项目进展

以下 PR 在过去 24 小时内推进或闭合，代表项目关键前进方向：

| PR | 状态 | 说明 |
|---|---|---|
| [#8370](https://github.com/zeroclaw-labs/zeroclaw/pull/8370) | OPEN | 为 #7733（per-agent MCP 作用域静默 no-op 漏洞）增加回归测试，确认生产修复已在 master 生效 |
| [#8158](https://github.com/zeroclaw-labs/zeroclaw/pull/8158) | **CLOSED** | 添加 CycloneDX SBOM 生成（Rust + npm），实现 #7675 供应链安全 Phase 2 — Job 4 |
| [#8146](https://github.com/zeroclaw-labs/zeroclaw/pull/8146) | **CLOSED** | 修复 CLI 一次性命令退出时遥测与 token 总计丢失的问题 |
| [#8299](https://github.com/zeroclaw-labs/zeroclaw/pull/8299) | **CLOSED** | 渠道 allowlist 通配符短路匹配的单测覆盖 |
| [#8300](https://github.com/zeroclaw-labs/zeroclaw/pull/8300) | **CLOSED** | Discord 自定义 ID 类型转义的单测覆盖 |

**整体评估**: 合入/关闭的 PR 以小体量测试覆盖和安全基建为主；大型功能 PR（如 #8337 Herdr 集成、#8338 ACP Phase 1、#8311 可配置 shell、#8033 双路径引导流）仍处于开放待审状态，**积压风险较高**。

---

## 4. 社区热点

### 热门 Issues

| Issue | 评论 | 标签 | 核心诉求 |
|---|---|---|---|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes, Board Automation, Label Cleanup | 11 👍0 | rfc, governance, p2 | 治理流程自动化，希望减少维护者手动分类工作量。已 Accepted，正在 rollout，讨论聚焦 Board 自动化规则设计 |
| [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) RFC: Supply chain signing — hardware PGP, SLSA provenance | 9 👍0 | rfc, security, high-risk, blocked | 要求对容器镜像和发布二进制实施硬件级 PGP 多方签名 + SLSA 溯源，讨论最活跃的安全议题 |
| [#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238) Independent delegate mode for specialist handoffs | 4 👍0 | feature, runtime, high-risk | 为 specialist 子 Agent 提供独立策略/工具集执行模式，与主 Agent 的 bounded delegation 并行 |
| [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) Per-agent custom environment variables | 4 👍0 | feature, security, high-risk | 引入 `runtime_context` / `runtime_secrets` 块，解决多 Agent 共享 MCP 时的身份与 token 多租户隔离 |

**分析**: 社区高活力议题集中于 **安全纵深**（供应链签名、WASM Agent 沙箱、per-agent 密钥隔离）和 **多 Agent 编排**（delegate 独立模式、Goal Mode），说明项目正处于从"工具平台"向"安全多 Agent 运行时"跃迁的关键期。[#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) 带有 **blocked** 状态，等待维护者 review。

### 值得关注的 PR

| PR | 标签 | 说明 |
|---|---|---|
| [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) Herdr agent reporting | size:L | 可观测性增强 — Herdr 面板可自动显示 Agent lifecycle 状态 |
| [#8338](https://github.com/zeroclaw-labs/zeroclaw/pull/8338) ACP elicitation Phase 1 | size:XL | 渠道级 ACP 交互增强，替换旧有多选 prompts，使用 standard JSON-RPC |
| [#8233](https://github.com/zeroclaw-labs/zeroclaw/pull/8233) Fill unpriced models from live gateway pricing | size:XL | 成本追踪修复 — 未定价模型将从网关动态获取价格，不再静默记 $0 |
| [#8311](https://github.com/zeroclaw-labs/zeroclaw/pull/8311) Configurable native runtime shell | size:M | 允许在 `config.toml` 指定 `[runtime].shell`，解决不同 shell 兼容问题 |

---

## 5. Bug 与稳定性

按严重程度排列今日活跃的 Bug：

| 级别 | Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|---|
| S2 | [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | mcp_bundles parsed in Config but never enforced at runtime — per-agent MCP scoping 静默 no-op | Accepted, p1 | ✅ 已有 PR [#8370](https://github.com/zeroclaw-labs/zeroclaw/pull/8370) 增加回归测试确认修复 |
| S2 | [#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312) | fill-translations leak-repair 遗留 stale entries，通过 write_po 重新发布泄露文本 | OPEN, p1 | ⚠ 无修复 PR |
| S2 | [#8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366) | Heartbeat engine 从 data_dir 而非 agent workspace 读取 HEARTBEAT.md | Accepted, p2 | ⚠ 无修复 PR |
| S2 | [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) | ZeroCode TUI 快捷键/帮助误导或不可达（macOS 尤甚） | Accepted, p2 | ⚠ 无修复 PR |
| S2 | [#8039](https://github.com/zeroclaw-labs/zeroclaw/issues/8039) | Leak repair 延续行孤儿问题（#8312 提及的关联问题） | — | — |
| S3 | [#8275](https://github.com/zeroclaw-labs/zeroclaw/issues/8275) | Scoop manifest 未注册 zerocode.exe | p3 | ⚠ 无修复 PR |
| S1 | [#5866](https://github.com/zeroclaw-labs/zeroclaw/issues/5866) | Telegram group bot 在 mention_only=true 时忽略对 bot 消息的回复 | **CLOSED** | 已修复 |

**关键关注**: [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) 是 **p1 高危安全 Bug**（Agent 间 MCP 隔离失效），修复已在 master 部署但需关注回归测试 PR 的落地情况。[#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312) 为数据丢失路径，虽触发场景狭窄但涉及敏感文本泄露，应优先响应。

---

## 6. 功能请求与路线图信号

今日及近期提出的 Feature Request 与正在进行的 RFC，预示下一版本（v0.8.3+）方向：

| 方向 | 来源 | 信号强度 |
|---|---|---|
| **WASM-first 插件运行时** | [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) RFC（WASM 默认开启）+ [#8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187) RFC（WASI 硬件能力门控）+ [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) RFC（React→Rust→Wasm 迁移） | 🟢 多条 RFC 并行，主线清晰 |
| **供应链安全 & SLSA** | [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) RFC + #7675 父 Issue + PR [#8158](https://github.com/zeroclaw-labs/zeroclaw/pull/8158) SBOM | 🟢 基础设施已在建 |
| **In-app 升级 + Web Dashboard** | [#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) RFC（Accepted） | 🟡 等待实现 |
| **Goal Mode（有界自主会话工作）** | [#8303](https://github.com/zeroclaw-labs/zerocaw/issues/8303) RFC | 🟡 用户有明确的"持续性目标追踪"需求 |
| **Per-turn output routing** | [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) PR（RFC-6969，send_via）| 🟡 大体积 PR 仍未合并 |
| **ACP elicitation** | [#8338](https://github.com/zeroclaw-labs/zeroclaw/pull/8338) PR | 🟡 Phase 1 已提交 |
| **OpenRouter fallback models** | [#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) | 🟠 用户需求明确但暂无 PR |
| **DingTalk streaming** | [#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228) | 🟠 国内渠道增值需求 |
| **Discord mention-tread 模式** | [#7849](https://github.com/zeroclaw-labs/zeroclaw/issues/7849) | 🟠 Accepted 无实现 |
| **v0.8.3 稳定性追踪** | [#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071) Tracker | 🟢 活跃的 milestone tracker |

**下一版本（v0.8.3）预判**: runtime 稳定性 + agent-loop/cron 工具修复已有明确 tracker（[#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071)）。WASM 与供应链安全是中长期主线，不会一次性交付但会持续迭代。in-app 升级 + per-turn routing + ACP elicitation 如 PR 顺利合并，最快可进入 v0.8.4。

---

## 7. 用户反馈摘要

从 Issues 评论与描述中提炼真实用户声音：

| 类别 | 痛点 | 来源 |
|---|---|---|
| **安全隔离落空** | 用户已配置 `mcp_bundles` 期望 Agent 间工具隔离，但 runtime 完全不执行 —— "silent no-op of a security-relevant isolation field" | [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) |
| **供应链担忧** | 用户明确援引 SLSA StageX 模型，要求硬件级签名、多方共识、离线签名，合规压力真实 | [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) |
| **Discord 对话淹没公共频道** | 多轮追问影响其他成员 | [#7849](https://github.com/zeroclaw-labs/zeroclaw/issues/7849) |
| **macOS 键位误导** | ZeroCode TUI 在 macOS 上提示了实际不可用的操作，造成理解成本 | [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) |
| **Heartbeat 路径混淆** | `HEARTBEAT.md` 读取路径与 workspace 不一致导致行为不符预期 | [#8366](https://github.com/zeroclaw-labs/zerocaw/issues/8366) |
| **OpenRouter failover 不可用** | 用户希望在 provider 配置中直接利用 `models[]` 数组实现主备切换 | [#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) |
| **Scoop 包不完整** | Windows 包管理器安装后 `zerocode.exe` 不在 PATH 中 | [#8275](https://github.com/zeroclaw-labs/zeroclaw/issues/8275) |
| **ACP 会话无工具** | Standalone ACP 会话可对话但无法调用工具 | [#8237](https://github.com/zeroclaw-labs/zeroclaw/pull/8237) |
| **治理流程疲劳** | 标签与看板手动路由消耗维护者大量精力 | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) |

用户反馈整体呈两极化：**深度用户**（企业/安全敏感型）持续推动安全隔离、供应链验证、多 Agent 编排等高端能力；**日常用户体验**层面仍有可访问性、跨平台一致性的基础问题仍需打磨。

---

## 8. 待处理积压

以下 Issue/PR 高优先级但长期未获响应，提醒维护者关注：

| 类型 | # | 标题 | 等待时长+风险 |
|---|---|---|---|
| RFC | [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) | Supply chain signing — hardware PGP, SLSA | blocked, high-risk, 5 天未更新 |
| RFC | [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) | WASM-first plugin runtime | blocked, high-risk, 5 天 |
| Feature | [#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238) | Independent delegate mode | in-progress 但无 PR 链接 |
| Feature | [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) | Per-agent env vars | in-progress 但实现路径不明 |
| Feature | [#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) | In-app web dashboard upgrade | accepted, needs-implementer |
| Bug | [#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312) | fill-translations stale entries 数据泄露路径 | 2 天, p1, 无 fix |
| Bug | [#8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366) | Heartbeat path mismatch | 1 天, p2 |
| Bug | [#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) | SkillForge orphaned — wire up or remove? | 2 天, 影响代码可维护性 |
| PR | [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) | RFC-6969 per-turn voice + routing (size:XL) | 20 天未合入 |
| PR | [#7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946) | Context window bar across UI (size:L) | 9 天 |
| PR | [#8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033) | Two-path onboard tree (size:XL) | 7 天 |
| PR | [#7440](https://github.com/zeroclaw-labs/zeroclaw/pull/7440) | System-prompt floor exceeds context (size:S) | 18 天 |

**建议**: 对 blocked 状态的 RFC（#8177、#8135）尽快给出 maintainer 裁决，避免贡献者等待过久流失；#7361 XL 体量 PR 已超 3 周，维护者应考虑拆分 review 或安排专项 review session。

---

*数据截止时间: 2026-06-27 | 数据来源: github.com/zeroclaw-labs/zerocaw*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*