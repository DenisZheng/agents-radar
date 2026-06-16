# OpenClaw 生态日报 2026-06-16

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-16 00:49 UTC

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

# OpenClaw 项目动态日报 — 2026-06-16

---

## 1. 今日速览

OpenClaw 今日处于**高活跃但高积压**状态。过去 24 小时内 Issues 更新 500 条（新开/活跃 444，关闭 56），PR 更新 500 条（待合并 435，合并/关闭 65），社区讨论量极大但消化速率偏低——关闭率仅约 11%，合并率约 13%，说明维护者审查带宽严重不足。无新版本发布，项目处于日常迭代期。多个 P0/P1 级安全性和稳定性问题（内存泄漏、竞态条件、消息丢失）仍未关闭，需引起关注。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 共 65 条，以下列举已确认合并或关闭的重要条目：

| # | PR | 说明 |
|---|-----|------|
| 1 | **#93418** [CLOSED] fix(telegram): forward Bot API 10.1 rich_message content to agent | 修复 Telegram Bot API 10.1 富文本消息被静默丢弃的问题，确保 `rich_message` 字段正确转发给 agent |
| 2 | **#68936** [CLOSED] Autofix: add PR review autofix pipeline + Windows daemon | 新增基于 Claude Agent SDK 的 PR review 自动修复流水线及 Windows 后台守护进程 |
| 3 | **#93445** [OPEN] fix(session): preserve user-set behavior overrides across implicit daily rollover | 修复用户通过 `/think medium`、`/verbose` 等命令设置的行为覆盖在隐式每日会话重置后被静默丢弃的 bug |
| 4 | **#93439** [OPEN] fix(agents): honor embedded run default model | 修复 embedded agent 运行未正确继承 `agents.defaults.model.primary` 的问题 |
| 5 | **#93452** [OPEN] fix(bedrock): strip inference profile prefix from model ID in embedding adapter | 修复 Amazon Bedrock 推理配置文件前缀导致 embedding 适配器 `ValidationException` 的问题 |
| 6 | **#93309** [OPEN] add download/wait-for-download actions to browser tool | 为浏览器工具新增 `download` 和 `wait-for-download` 动作，解决 agent 无法感知文件下载完成的问题 |
| 7 | **#93447** [OPEN] feat(tts): add word-level timestamps to TTS synthesis | 为 TTS 合成新增词级时间戳支持，切换 ElevenLabs 至 `/with-timestamps` 端点 |
| 8 | **#93442** [OPEN] Expose tool_use blocks in llm_output / agent_end hook payloads | 在 `llm_output` 和 `agent_end` hook 事件中暴露 `toolUse` 块，使下游监督插件可审计工具调用 |

**整体评估：** 项目在 agent 运行模型解析、Telegram 兼容性、浏览器工具、TTS 功能增强等方向稳步推进。但 435 个待合并 PR 的积压量表明审查队列压力极大。

---

## 4. 社区热点

以下按讨论热度排序，展示今日最活跃的 Issues：

### 🔥 Issue #75 — Linux/Windows Clawdbot Apps
- **链接：** https://github.com/openclaw/openclaw/issues/75
- **数据：** 109 条评论 | 👍 79 | 创建于 2026-01-01
- **分析：** 这是社区**点赞量最高**的 issue。macOS、iOS、Android 已有原生应用，Linux 和 Windows 桌面端缺失。79 个点赞和 109 条评论说明跨平台桌面端是用户最强烈的诉求之一，尤其对开发者和企业用户而言。

### 🔥 Issue #25592 — Text between tool calls leaks to messaging channels
- **链接：** https://github.com/openclaw/openclaw/issues/25592
- **数据：** 32 条评论 | P1 安全级别
- **分析：** Agent 在工具调用之间产生的中间文本（错误处理、处理确认、旁白）被路由到 Slack、iMessage 等消息通道，造成严重的 UX 问题。这是**安全 + 体验双重影响**的 P1 问题。

### 🔥 Issue #9443 — Prebuilt Android APK releases
- **链接：** https://github.com/openclaw/openclaw/issues/9443
- **数据：** 25 条评论
- **分析：** 用户希望 GitHub Releases 提供预编译 APK，降低非技术用户安装门槛。

### 🔥 Issue #22438 — Tiered bootstrap file loading for progressive context control
- **链接：** https://github.com/openclaw/openclaw/issues/22438
- **数据：** 17 条评论
- **分析：** 大型工作区中 bootstrap 文件消耗大量 LLM token，用户希望引入分层加载机制控制 context 窗口预算。

### 🔥 Issue #32473 — control ui requires device identity (HTTPS or localhost)
- **链接：** https://github.com/openclaw/openclaw/issues/32473
- **数据：** 17 条评论 | 👍 5
- **分析：** 回归 bug，Docker + VPS 部署场景下 Control UI 要求设备身份验证，用户无法找到解决方案。

### 🔥 Issue #22676 — Signal daemon stop() race condition on SIGUSR1 restart
- **链接：** https://github.com/openclaw/openclaw/issues/22676
- **数据：** 17 条评论 | P1
- **分析：** Signal 守护进程在 SIGUSR1 重启时存在竞态条件，导致进程孤儿化和发送失败。

### 🔥 Issue #91588 — Gateway Memory Leak (RSS 350MB → 15.5GB)
- **链接：** https://github.com/openclaw/openclaw/issues/91588
- **数据：** 12 条评论 | P0
- **分析：** **最严重的稳定性问题。** Gateway 进程存在严重内存泄漏，2-3 天内 RSS 从 350MB 增长到 15.5GB，触发 OOM killer 和反复重启循环。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的关键 Bug：

### 🔴 P0 — 严重

| # | Issue | 描述 | Fix PR |
|---|-------|------|--------|
| 1 | **#91588** | Gateway 内存泄漏：RSS 从 350MB 增长至 15.5GB，触发 OOM 崩溃和 launchd 重启循环 | ❌ 无 |

### 🟠 P1 — 高优先级

| # | Issue | 描述 | Fix PR |
|---|-------|------|--------|
| 1 | **#25592** | Agent 工具调用间文本泄漏到消息通道 | ❌ 无 |
| 2 | **#22676** | Signal daemon SIGUSR1 重启竞态条件，产生孤儿进程 | ❌ 无 |
| 3 | **#32296** | Agent 回复上一条消息而非当前消息（会话上下文混淆） | ❌ 无 |
| 4 | **#29387** | agentDir 中的 bootstrap 文件被静默忽略，仅加载 workspace 目录文件 | ❌ 无 |
| 5 | **#31583** | exec 工具未继承 skills.entries.*.env 环境变量（回归） | ❌ 无 |
| 6 | **#90325** | Matrix 通道在 v2026.6.1 中崩溃（TypeError: Cannot read properties of undefined） | ❌ 无 |
| 7 | **#31331** | Docker + Sandbox 无法绑定 workspace | ❌ 无 |
| 8 | **#87327** | Isolated agent 运行在 runtime-plugins 阶段卡住 | ❌ 无 |
| 9 | **#91931** | 预置 SOUL.md/IDENTITY.md 导致 bootstrap 被自动完成并删除用户 BOOTSTRAP.md | ❌ 无 |
| 10 | **#93263** [CLOSED] | Telegram 客户端显示"not supported"（2026.6.8-beta.1） | ✅ 已关闭 |

### 🟡 P2 — 中优先级

| # | Issue | 描述 | Fix PR |
|---|-------|------|--------|
| 1 | **#32473** | Control UI 要求设备身份（HTTPS/localhost 安全上下文）回归 | ❌ 无 |
| 2 | **#44993** [CLOSED] | Heartbeat/Cron "Current time" 时间戳不刷新 | ✅ 已关闭 |
| 3 | **#67417** | `openclaw backup create` 在会话文件被清理时 ENOENT 失败 | ❌ 无 |
| 4 | **#75380** | provider-payload.jsonl 和 cache-trace.jsonl 无界增长，无轮转策略 | ❌ 无 |
| 5 | **#25574** | 配置警告在每次重载时重复记录，日志膨胀 | ❌ 无 |

**稳定性评估：** 项目当前存在 **1 个 P0 内存泄漏**和 **10+ 个 P1 级 bug**（涉及安全、消息丢失、会话状态、回归），其中绝大多数尚无 fix PR。这是项目健康度的主要风险点。

---

## 6. 功能请求与路线图信号

### 高优先级功能请求（已有活跃 PR 推进）

| 功能 | Issue | 相关 PR | 信号强度 |
|------|-------|---------|----------|
| 浏览器下载感知 | — | **#93309** | ✅ PR 已提交 |
| TTS 词级时间戳 | — | **#93447** | ✅ PR 已提交 |
| Hook 中暴露 tool_use 块 | — | **#93442** | ✅ PR 已提交 |
| Telegram Bot API 10.1 富文本 | — | **#93418** (已合并) | ✅ 已合并 |
| 会话行为覆盖持久化 | — | **#93445** | ✅ PR 已提交 |
| 请求上下文转发至模型 Header | — | **#93451** | ✅ PR 已提交 |

### 高需求但无 PR 的功能

| 功能 | Issue | 👍 | 说明 |
|------|-------|-----|------|
| Linux/Windows 桌面应用 | **#75** | 79 | 社区最高呼声 |
| Android 预编译 APK | **#9443** | 2 | 降低非技术用户门槛 |
| 密钥掩码（Masked Secrets） | **#10659** | 4 | 防止 Agent 读取原始 API Key |
| 内存信任标签 | **#7707** | 0 | 防止记忆投毒攻击 |
| 文件系统沙箱配置 | **#7722** | 4 | 限制 Agent 文件访问范围 |
| 执行审批拒绝名单 | **#6615** | 7 | 补充现有允许名单 |
| Slack Block Kit 支持 | **#12602** | 0 | 富文本消息 |
| 子 Agent 完成通知路由 | **#27445** | 5 | 多步骤工作流编排 |
| Telegram Business Bot 支持 | **#20786** | 6 | 企业场景 |
| 主题定制系统 | **#28300** | 5 | Control UI 个性化 |

**路线图判断：** 浏览器工具增强、TTS 改进、Hook 系统扩展最可能在下版本落地。Linux/Windows 桌面端和 Android APK 虽呼声高但无 PR 推进，可能需要社区贡献。

---

## 7. 用户反馈摘要

### 痛点

1. **部署门槛高：** Docker + VPS 场景下 Control UI 设备身份验证问题（#32473）、Docker + Sandbox workspace 绑定失败（#31331）让大量用户卡在部署阶段。
2. **消息通道体验差：** 工具调用间文本泄漏（#25592）、Agent 回复错位（#32296）、Telegram "not supported"（#93263）严重影响日常使用。
3. **安全担忧：** Agent 可读取原始 API Key（#10659）、记忆投毒风险（#7707）、文件系统无沙箱（#7722）让用户对生产部署缺乏信心。
4. **资源消耗：** 内存泄漏（#91588）、bootstrap 文件 token 浪费（#22438）、工具 schema 固定消耗 ~3500 tokens（#14785）、诊断日志无界增长（#75380）导致运行成本不可控。
5. **多平台缺失：** Linux/Windows 桌面端缺失（#75）是最大痛点。

### 满意点

- Telegram Bot API 10.1 富文本支持的快速修复（#93418 已合并）显示团队对兼容性问题的响应速度。
- ClawSweeper 自动化机器人（#75469）持续发现回归风险，社区对自动化质量保障持正面态度。

### 典型使用场景

- **量化/金融用户**（#13583）：需要硬门控策略规则，不接受软提示。
- **多 Agent 编排用户**（#27445、#22358）：需要子 Agent 完成后的路由控制和扩展钩子。
- **企业部署用户**（#26370、#13751）：需要多租户隔离、最小权限原则。
- **中文 Windows 用户**（#93151）：GBK 编码文件读取乱码问题。

---

## 8. 待处理积压

以下长期未响应的重要 Issue/PR 需维护者关注：

### 🔴 超期 P0/P1 Issue（创建 >30 天，无 fix PR）

| # | 创建日期 | 天数 | 描述 |
|---|---------|------|------|
| **#91588** | 2026-06-09 | 7 天 | Gateway 内存泄漏（P0，但发现仅 7 天，需紧急处理） |
| **#25592** | 2026-02-24 | 112 天 | 工具调用间文本泄漏 |
| **#22676** | 2026-02-21 | 115 天 | Signal daemon 竞态条件 |
| **#32296** | 2026-03-02 | 106 天 | Agent 回复错位 |
| **#29387** | 2026-02-28 | 108 天 | agentDir bootstrap 文件被忽略 |
| **#31583** | 2026-03-02 | 106 天 | exec 工具环境变量继承回归 |
| **#31331** | 2026-03-02 | 106 天 | Docker + Sandbox workspace 绑定 |
| **#10659** | 2026-02-06 | 130 天 | 密钥掩罩功能请求 |
| **#75** | 2026-01-01 | 166 天 | Linux/Windows 桌面端（最高呼声） |

### 🟡 长期开放的高价值 PR

| # | 创建日期 | 天数 | 描述 |
|---|---------|------|------|
| **#75469** | 2026-05-01 | 46 天 | 同会话推断承诺饥饿问题修复（ClawSweeper 发现） |
| **#90122** | 2026-06-04 | 12 天 | Control UI 非终端工具错误折叠 |
| **#90057** | 2026-06-03 | 13 天 | Workboard 操作视图优化 |
| **#89858** | 2026-06-03 | 13 天 | systemd 网关单元作用域冲突修复 |
| **#89123** | 2026-06-01 | 15 天 | 转录写入器路由重构 |

### 积压总结

- **435 个待合并 PR** 和大量未关闭 Issue 表明审查队列严重超载。
- **#75**（Linux/Windows 桌面端）已开放 166 天，79 个点赞，是社区最高优先级诉求，建议明确路线图表态。
- **#91588**（内存泄漏）虽发现仅 7 天但为 P0 级别，建议立即分配资源排查。
- 多个 100+ 天未解决的 P1 bug 需要维护者给出明确时间线或优先级调整说明。

---

> **日报生成时间：** 2026-06-16  
> **数据来源：** GitHub.com/openclaw/openclaw  
> **分析周期：** 过去 24 小时

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**分析日期：2026-06-16 | 分析师：OWL**

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态处于**高位分化期**。头部项目（OpenClaw、Hermes Agent、IronClaw）日 Issue + PR 吞吐量均达 100 条级别，社区体量和功能完整度遥遥领先，但普遍面临审查带宽不足和 PR 积压的结构性瓶颈。中部项目（NanoBot、CoPaw、NanoClaw、ZeroClaw、PicoClaw、LobsterAI）在 50 条以下量级各自深耕垂直方向——语音交互、桌面端、多平台适配、安全性、MCP 协议等，呈现出明显的功能互补态势。尾部项目（TinyClaw、ZeptoClaw、NullClaw、Moltis）活跃度微弱，社区体量尚处早期。所有项目共同面对的核心挑战是：**上下文管理精细化、多通道消息稳定性、安全加固**三大方向的工程成熟度仍远落后于社区预期，这也是驱动整个生态迭代的最强公共压力。

---

## 2. 各项目活跃度对比

| 项目 | GitHub | Issues（开/闭/总） | PR（待合并/合闭/总） | Release | 吞吐评估 | 健康度 |
|---|---|---|---|---|---|---|
| **OpenClaw** | openclaw/openclaw | 444 / 56 / **500** | 435 / 65 / **500** | 无 | 🔴 极高 | 🟡 积压严重 |
| **Hermes Agent** | NousResearch/hermes-agent | 41 / 9 / **50** | 44 / 6 / **50** | 无 | 🟠 高 | 🟡 桌面端拖累 |
| **IronClaw** | nearai/ironclaw | 34 / 13 / **47** | 27 / 23 / **50** | 无 | 🟠 高 | 🟢 良好 |
| **CoPaw** | agentscope-ai/CoPaw | 31 / 19 / **50** | 15 / 35 / **50** | 无 | 🟠 中 | 🟡 Bug 积压 |
| **ZeroClaw** | zeroclaw-labs/zeroclaw | 46 / 4 / **50** | 47 / 3 / **50** | 无 | 🟠 中 | 🟢 安全关注 |
| **NanoBot** | HKUDS/nanobot | 4 / 0 / **4** | 19 / 16 / **35** | 无 | 🟡 中高 | 🟢 合并高效 |
| **NanoClaw** | qwibitai/nanoclaw | 0 / 0 / **0** | 9 / 3 / **12** | 无 | 🟡 中 | 🟢 轻量迭代 |
| **PicoClaw** | sipeed/picocaw | 1 / 2 / **3** | 10 / 2 / **12** | ✅ Nightly | 🟡 中 | 🟢 安全悬案 |
| **LobsterAI** | netease-youdao/LobsterAI | 2 / 0 / **2** | 6 / 5 / **11** | 无 | 🟡 中 | 🟡 stale 积压 |
| **NullClaw** | nullclaw/nullclaw | 3 / 0 / **3** | 1 / 0 / **1** | 无 | 🔵 低 | 🟡 成长早期 |
| **Moltis** | moltis-org/moltis | 0 / 0 / **0** | 2 / 0 / **2** | 无 | 🔵 低 | 🟡 静默期 |
| **TinyClaw** | TinyAGI/tinyagi | — | — | — | 🔵 无活动 | ⚠️ 停滞 |
| **ZeptoClaw** | qhkm/zeptoclaw | — | — | — | 🔵 无活动 | ⚠️ 停滞 |

> **投入产出比亮点**：IronClaw 以 50 PR 更新实现了 46% 的合并率（23/50），是所有高活跃项目中消化效率最高的；NanoBot 的 PR 合并率亦达 46%（16/35），趋势同样健康。相反，OpenClaw 13% 的 PR 合并率暴露了严重的审查瓶颈。

---

## 3. OpenClaw 在生态中的定位

### 社区规模与影响力

OpenClaw 是无可争议的生态**流量中心与参照基准**。今日 Issue + PR 各 500 条的吞吐量是整个生态的 **5–10 倍**（第二名 Hermes Agent 仅 50 条）。在报告撰写中，CoPaw、NanoBot、Hermes Agent 等多个项目的功能请求均明确提到"对标 OpenClaw 体验"，说明 OpenClaw 已成为**事实上的产品设计参照物**。

### 技术路线差异

| 维度 | OpenClaw | 主要差异方 |
|---|---|---|
| **架构** | 单体 Gateway，多通道插件 | ZeroClaw 已规划多 Agent 路由（RFC #7218）；Hermes 向 Sister Registry 多角色演进 |
| **Channel** | 8+ 通道，Telegram/Discord/Slack 为主 | CoPaw 深耕中国生态（小艺、飞书、企业微信）；PicoClaw 关注 QQ 频道 |
| **桌面端** | macOS/iOS/Android 原生 | Hermes 有 Electron Desktop 但构建不稳定；CoPaw 专注 Windows 桌面体验 |
| **安全模型** | 工具审批、exec 沙箱 | ZeroClaw 在三项 RFC 上推进得更激进（供应链安全、WASM-first、上下文压缩） |
| **上下文管理** | Bootstrap 文件、Soft Prompt | CoPaw 在 token 可视化上走得更远；Headroom 压缩方案被 CoPaw 提出作为下阶段目标 |
| **Hook/Plugin** | `agent_end`/`llm_output` Hook | Hermes 有后台 skill 写入+自改进；IronClaw 有更完善的 OAuth/凭证授权体系 |

### 核心优势

1. **生态体量与兼容覆盖面**：最广泛的 Channel 支持、最大量的第三方贡献者。
2. **功能完整度**：从消息路由、工具调用、TTS、浏览器自动化、Hook 系统到备份机制，几乎覆盖个人 AI 助手所需的全链路能力。
3. **事实标准地位**：API 兼容层（`/v1/chat/completions`）使 OpenClaw 成为 NanoBot 等其他项目的互操作目标。

### 核心劣势

1. **积压危机**：435 个待合并 PR、关闭率仅 11%，维护者带宽严重不足，已接近治理瓶颈。
2. **稳定性落差**：1 个 P0 内存泄漏 + 10 个 P1 bug 无修复方案，与社区成熟度预期不匹配。
3. **跨平台桌面端缺失**：Linux/Windows 桌面应用（Issue #75，79 👍，开放 166 天）是社区最高呼声，但尚无 PR 推进。

---

## 4. 共同关注的技术方向

以下需求在**两个以上项目**中同时涌现，代表行业共性压力：

### 方向 1：上下文管理精细化与 Token 可见性

| 项目 | 信号 |
|---|---|
| **OpenClaw** | #22438 分层 bootstrap loading（17 评论）；#14785 工具 schema 固定消耗 ~3500 tokens |
| **CoPaw** | #4284 实时上下文用量显示 → PR 已合并；#5171 上下文压缩清零问题（P1）；#4647 token speed/usage 显示 → 已合并 |
| **ZeroClaw** | #7673 RFC：原生上下文压缩装饰器（维护者评审中） |
| **IronClaw** | Compaction 摘要持久化（Hermes 关联 PR #11236）；凭证作用域跨线程持久化 |

> **核心诉求**：用户已无法接受上下文的"黑盒"状态——不仅要求压缩，更要求精确知道每轮消耗多少、压缩保留了多少、膨胀来自哪里。CoPaw 率先实现全链路 token 可视化，正在被其他项目追赶。

### 方向 2：多 Agent 编排与路由

| 项目 | 信号 |
|---|---|
| **Hermes Agent** | PR #46942 Sister Registry——12-sister 注册中心 + CLI + `delegate_to_sister` |
| **OpenClaw** | #25592 子 Agent 工具调用间文本路由错误；#27445 子 Agent 完成通知路由需求（5👍） |
| **ZeroClaw** | #2767 多 Agent 路由（9👍）；RFC #7218 A2A Agent Discovery 协议（accepted） |

> **核心诉求**：从单一智能体走向角色化多智能体协作已成确定性趋势，统一的身份注册、发现协议和委托机制是下一阶段的基础设施瓶颈。

### 方向 3：安全与最小权限

| 项目 | 信号 |
|---|---|
| **OpenClaw** | #10659 密钥掩码（Agent 不应读取原始 Key）；#7707 记忆投毒防御；#7722 文件系统沙箱 |
| **ZeroClaw** | #7675 RFC：供应链扫描 + SBOM（needs-maintainer-review）；#7674 RFC：WASM-first 消除 Node.js |
| **PicoClaw** | #3069 Launcher CIDR 绕过安全漏洞（已关闭但无明确修复） |
| **IronClaw** | #4939 凭证所有者作用域修复；#4944 授权拒绝后反馈而非无限循环 |

> **核心诉求**：Agent 权限边界正在成为生产部署的最大阻力，涵盖凭证隔离、文件系统沙箱、访问控制、供应链信任链等多个层次。

### 方向 4：桌面端/Native App 体验

| 项目 | 信号 |
|---|---|
| **OpenClaw** | #75 Linux/Windows 桌面应用（79👍，166 天，最高呼声） |
| **Hermes Agent** | #40187 macOS Desktop Electron 构建失败；#41222 Desktop 集成 Kanban Board |
| **CoPaw** | #5192 Windows console 崩溃修复（已合并）；#5211 布局比例不合理 → #5212 wide mode |
| **LobsterAI** | #1428 会话完成系统通知（对标 Claude Code/Cursor） |

> **核心诉求**：个人 AI 助手的"从 Terminal 到 Native"跨越尚未完成，Electron/Tauri 构建链稳定性、System Tray、开机自启、通知系统是被高频提及的桌面端缺口。

### 方向 5：MCP 协议与远程工具集成

| 项目 | 信号 |
|---|---|
| **NanoClaw** | PR #2776 远程 HTTP/SSE MCP 服务器支持；PR #2777 Strava 官方 MCP 集成 |
| **ZeroClaw** | #7733 Per-Agent MCP 作用域静默忽略（安全类 silent no-op） |
| **Hermes Agent** | #31246 MCP 连接失败仅写入 DEBUG 日志，用户无感知 |

> **核心诉求**：MCP 正在从"本地 stdio"走向"远程 HTTP/SSE"标准化，但配置验证、运行时生效确认、静默失败可见性等工程细节仍是各项目的共同痛点。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键词 | 关键差异点 |
|---|---|---|---|---|
| **OpenClaw** | 通用个人 AI 助手**事实标准** | 技术型个人用户、开发者 | 单体 Gateway、多通道插件、Hook 系统 | 最完整的 Channel 覆盖和工具生态；最大社区体量 |
| **Hermes Agent** | **多角色 Agent 协作**平台 | 高级用户、研究机构 | Sister Registry、delegation 管道、自改进机制 | 最具前瞻性的多角色体系；Nous Research 学术背书 |
| **IronClaw** | **企业/生产力** Agent 工作平台 | 企业团队、Power User | Reborn WebUI、OAuth/凭证系统、Learning System | 最完善的授权体系；学习系统从 0 到 1 |
| **NanoBot** | **轻量可组合** Bot Runtime | Telegram/WhatsApp Bot 开发者 | Provider Failover、OpenAI API 兼容、Memory 层 | 深度打磨多模型 fallback；Telegram bot runtime 标杆 |
| **CoPaw** | **中国生态** Agent 控制台 | 中国用户、AgentScope 生态 | Token 可视化、元宝/飞书/企业微信渠道、Skill 市场 | 最精细的上下文 token 追踪；深耕中国 IM 生态 |
| **ZeroClaw** | **安全优先** Rust Agent Runtime | Rust 社区、安全敏感场景 | Rust 实现、WASM-first 愿景、CI 供应链安全 | 最激进的安全架构路线图；v0.8→v0.9 转型期 |
| **PicoClaw** | **嵌入式/Linux** AI Agent | 开发者、嵌入式场景 | Go、轻量、Picovoice 语音集成 | RISC-V/嵌入式场景探索；QQ 频道支持 |
| **NanoClaw** | **容器化** Agent 运营商 | DevOps、自托管用户 | Docker 容器、OneCLI 网关、Codex 归档 | 独特的 Agent 容器化运行模型；会话日志结构化 |
| **LobsterAI** | **语音交互** AI 助手 | 有道系用户、语音优先场景 | 实时 ASR、Artifacts 文档、Cowork 产品 | 最完整的语音输入重构；Artifacts 文件类型最广 |
| **NullClaw** | **无状态** Agent Runtime | 轻量 API 消费者 | 最小化设计、JSON 输出、无 memory | 极简设计；Ollama 本地模型集成 |

---

## 6. 社区活跃度分层

### 第一梯队：基础设施级（日吞吐 100+ 条）

> **OpenClaw** — 整个生态的引力中心

- 500 Issues + 500 PR / 天，社区体量断层领先
- **但危机暗藏**：PR 合并率 13%、Issue 关闭率 11%，如果不扩充维护者团队或引入自动化治理，积压可能导致社区流失

### 第二梯队：高成长型（日吞吐 30–100 条）

> **Hermes Agent、IronClaw、CoPaw、ZeroClaw**

- 均处于**快速迭代期**，核心架构功能在密集推进
- **IronClaw** 消化效率最优（合并率 46%），且方向性最清晰（授权体系 + Learning System + 多模态）
- **ZeroClaw** 的技术路线最具野心（WASM-first、供应链安全），但 47 个待合并 PR 同样需要关注
- **Hermes Agent** Desktop 体验是当前短板，macOS 构建失败直接影响装机转化率
- **CoPaw** Bug 积压问题突出，上下文压缩清零（#5171）、附件下载 404（#5140）等多版本未根治

### 第三梯队：垂直深耕型（日吞吐 10–30 条）

> **NanoBot、NanoClaw、PicoClaw、LobsterAI**

- 各在细分方向保持健康节奏，PR 合并率普遍较高
- **NanoBot** 在 API 合规性（OpenAI 兼容）和数据鲁棒性上扎实前进
- **NanoClaw** 的 MCP 远程支持 + Strava 集成是今日最亮眼的功能信号
- **PicoClaw** goroutine panic recovery（PR #3132）和 Telegram 回复即提及（PR #2975）值得尽快合并
- **LobsterAI** 语音输入子系统一天完成架构精简→合并冲突修复→UI 打磨的完整闭环，工程执行力突出

### 第四梯队：早期探索/停滞（日吞吐 <10 条或无活动）

> **NullClaw、Moltis、TinyClaw、ZeptoClaw**

- NullClaw 的 Agent Runtime 极简定位有差异化空间，但需解决 Ollama 输出截断的核心 Bug
- Moltis 仅有 2 个待合并 PR，处于功能扩展审查等待期
- TinyClaw、ZeptoClaw 过去 24 小时无活动，需观察是否为短期静默

---

## 7. 值得关注的趋势信号

### 趋势 1：上下文管理正从「统计学」走向「工程学」

用户使用 AI 助手的方式已从"偶尔对话"进入"持续运行的生产型工作流"——这直接导致上下文管理从边缘功能变为核心瓶颈。CoPaw 率先完成的 token 全链路可视化已成为行业标配预期，ZeroClaw 的上下文压缩装饰器 RFC 则代表了从"看到问题"到"自动解决"的下一步。**对开发者的启示**：上下文预算控制（而非仅依赖压缩）将成为 Agent 标准功能模块。

### 趋势 2：MCP 生态从「本地玩具」走向「远程基础设施」

NanoClaw PR #2776 的远程 MCP 服务器支持和 Hermes Agent、CoPaw 的 MCP 静默失败问题同时说明：MCP 已经从"让 Agent 调用本地工具"进化到"标准化远程能力调用协议"的工程阶段。**对开发者的启示**：MCP Gateway（验证、发现、权限隔离、超时治理）将是一个独立的基础设施层。

### 趋势 3：「Sister Registry」揭示多 Agent 协作范式正在统一

Hermes Agent 的 Sister Registry + ZeroClaw 的 A2A Agent Discovery RFC + OpenClaw 的子 Agent 路由诉求，三者从不同角度收敛到同一方向：**多个专业化 Agent 协作完成复杂任务的编排范式正在成为标准架构预期，而非高级用户的定制玩法。** 这将对 Agent 身份管理、能力声明格式、委托权限模型产生深远的标准化需求。

### 趋势 4：桌面端/Native App 成为下一轮竞争焦点

OpenClaw #75（79👍、166 天）、Hermes Agent #40187（macOS 构建失败）、CoPaw #5212（wide mode）、LobsterAI #1428（系统通知）——四个项目从不同角度瞄准同一缺口：**AI 助手的体验标准已经被 Cursor、Claude Code 等商业产品拉高到"Native App 级别"，开源生态必须在桌面体验上补课。**

### 趋势 5：安全加固从「功能需求」走向「架构约束」

ZeroClaw 的三项 RFC（供应链安全、WASM-first、上下文压缩）、OpenClaw 的密钥掩码和文件系统沙箱诉求、PicoClaw 的 CIDR 绕过漏洞共同表明：社区对 Agent 安全性的关注已从"最好有"变成"不具备就不敢部署"。特别是 ZeroClaw 提出的 **WASM-first** 消除 Node.js 依赖链，如果实现，将深刻影响整个生态的构建链选择。**对开发者的启示**：安全不再是功能列表的可选项，而是架构选型的硬约束。

---

*本报告由 OWL 基于 2026-06-16 各项目 GitHub 社区动态自动生成。数据截止当日，评级基于可观测指标，不构成对项目长期价值的判断。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-16

---

## 1. 今日速览

NanoBot 今日活跃度处于**高位**：过去 24 小时内共产生 **35 条 PR 更新**（19 个待合并、16 个已合并/关闭）和 **4 条 Issue 更新**，无新版本发布。项目正处于密集的功能迭代与 bug 修复并行期——多个独立贡献者围绕 provider 兼容性、session 管理、WebUI 功能扩展和 API 合规性提交了实质性变更。合并节奏健康（16 个 PR 在一天内完成合并或关闭），说明维护者响应效率较高。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 16 个 PR 覆盖了多个关键方向，以下为最重要的几项：

| PR | 状态 | 说明 |
|---|---|---|
| [#4310](https://github.com/HKUDS/nanobot/pull/4310) | ✅ 已合并 | **修复 `/v1/chat/completions` 始终返回零 token 使用量** — 此前该端点硬编码 `usage: {0,0,0}`，破坏了依赖 OpenAI 标准 usage 字段的下游计费/计量集成。现在转发真实 LLM 使用数据。 |
| [#4315](https://github.com/HKUDS/nanobot/pull/4315) | ✅ 已合并 | **修复 memory 模块对畸形历史条目的容错** — 对 `history.jsonl` 中字段类型异常的行进行过滤，防止 prompt 构建和 Dream 读取时崩溃。 |
| [#4337](https://github.com/HKUDS/nanobot/pull/4337) | ✅ 已合并 | **修复 runner 对空注入 payload 的处理** — 跳过空的用户注入内容，避免追加空白用户消息或将非用户字典强制字符串化。 |
| [#4348](https://github.com/HKUDS/nanobot/pull/4348) | ✅ 已合并 | **修复 auto-compact 在 user turn 上的截断问题** — 确保 idle 自动压缩至少保留最近的 user turn 后缀，避免长工具轮次被部分截断。 |

**整体评估：** 项目在 API 合规性（OpenAI 兼容端点）、数据鲁棒性（memory/runner 容错）和 session 管理（auto-compact 边界）三个维度上向前推进了一步，均为影响用户体验和系统稳定性的基础修复。

---

## 4. 社区热点

### Issue [#4287](https://github.com/HKUDS/nanobot/issues/4287) — Empty model responses not triggering fallback
- **状态：** OPEN | 2 条评论
- **核心诉求：** 当 DeepSeek 等主模型在高峰时段返回空响应（completion 中无 choices）时，nanobot 将其归类为"不可 fallback"错误，导致请求直接失败而非切换到备用模型。用户期望空响应应被视为可 fallback 的 transient 错误。
- **分析：** 这暴露了 provider fallback 策略对"空响应"场景的分类缺陷。对于配置了多模型 fallback 链的用户，这是一个影响可用性的关键路径问题。

### Issue [#4345](https://github.com/HKUDS/nanobot/issues/4345) — Image-strip fallback leaks file path and misleads model
- **状态：：** OPEN | 0 条评论（当日新报）
- **核心诉求：** `LLMProvider._strip_image_content` 在图片被剥离后重试时，将本地文件路径作为文本发送给模型，既泄露了路径信息，又让模型误以为它看到了图片。
- **分析：** 这是一个**安全 + 正确性**双重问题。已有 PR [#4346](https://github.com/HKUDS/nanobot/pull/4346) 直接修复此问题（见 Bug 章节）。

### PR [#4320](https://github.com/HKUDS/nanobot/pull/4320) — feat(audit): add tools.audit config and AuditTool
- **状态：** OPEN
- **核心诉求：** 为 nanobot 添加最小化、无偏见的 agent 动作审计模块，支持配置启用/禁用和作用域控制。
- **分析：** 这是企业级可观测性需求进入社区的信号，说明 nanobot 的使用场景正从个人助手向需要审计追踪的生产环境扩展。

### PR [#4344](https://github.com/HKUDS/nanobot/pull/4344) — Refactor config and agent loop boundaries
- **状态：** OPEN
- **核心诉求：** 重构 config 模块与 agent loop 之间的边界，将工具配置模型移至各自工具实现旁，延迟 schema 解析，提取 AgentLoop 协调器。
- **分析：** 这是一项重要的架构重构，旨在解决 config schema 与工具模块之间的循环依赖和耦合问题，为后续功能扩展打基础。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高 — 安全/数据泄露

**Issue [#4345](https://github.com/HKUDS/nanobot/issues/4345) — Image-strip fallback 泄露本地文件路径**
- **影响：** 本地文件系统路径通过文本消息泄露给 LLM，存在信息泄露风险；同时模型收到非预期的路径文本，影响推理正确性。
- **Fix PR：** ✅ [#4346](https://github.com/HKUDS/nanobot/pull/4346)（OPEN，已提交，将图片标记为 unviewable 而非泄露路径）

### 🟠 中 — 功能缺陷

**Issue [#4287](https://github.com/HKUDS/nanobot/issues/4287) — 空模型响应未触发 fallback**
- **影响：** 配置了多模型 fallback 的用户在高峰时段遭遇直接失败而非自动切换。
- **Fix PR：** ❌ 尚无

**Issue [#4322](https://github.com/HKUDS/nanobot/issues/4322) — `session_key` NameError 导致启动崩溃**
- **影响：** 合并 `origin/main` 到 `fix/prompt-caching` 分支后，`_build_memory_context` 方法引用了未定义的 `session_key`，agent 启动即崩溃。
- **Fix PR：** ❌ 尚无（但 Issue 已被标记 stale，可能已在主分支修复）

**Issue [#4309](https://github.com/HKUDS/nanobot/issues/4309) — `/v1/chat/completions` 始终返回零 usage tokens**
- **影响：** 下游计费/计量集成无法工作。
- **Fix PR：** ✅ [#4310](https://github.com/HKUDS/nanobot/pull/4310)（已合并）

### 🟡 低 — 边界情况

**PR [#4303](https://github.com/HKUDS/nanobot/pull/4303) — MCP server 关闭时的 GC crash**
- **影响：** `streamableHttp` MCP server 会话终止时，`_close_server` 在不同 asyncio task 中退出 cancel scope 导致 `RuntimeError`。
- **状态：** OPEN，已有修复方案

---

## 6. 功能请求与路线图信号

| 方向 | 信号来源 | 判断 |
|---|---|---|
| **Agent 审计/可观测性** | PR [#4320](https://github.com/HKUDS/nanobot/pull/4320) | 高概率纳入 — 功能完整、设计最小化、零开销关闭 |
| **WebUI 自动化管理** | PR [#4330](https://github.com/HKUDS/nanobot/pull/4330) | 高概率纳入 — 补齐 WebUI 与 config.json 的功能差距 |
| **Cron silent 模式** | PR [#4357](https://github.com/HKUDS/nanobot/pull/4357) | 中等概率 — 监控类场景的合理需求，但需评估与现有 cron 交付模型的兼容性 |
| **新搜索提供商 (Keenable)** | PR [#4350](https://github.com/HKUDS/nanobot/pull/4350) | 中等概率 — 社区持续扩展搜索提供商生态，但需评估维护成本 |
| **Mistral 原生支持** | PR [#4351](https://github.com/HKUDS/nanobot/pull/4351) | 高概率纳入 — 修复 Mistral API 的 4 个严格校验点，提升 provider 兼容性 |
| **Config/AgentLoop 架构重构** | PR [#4344](https://github.com/HKUDS/nanobot/pull/4344) | 高概率纳入 — 架构健康度改进，但需充分 review 以避免回归 |

---

## 7. 用户反馈摘要

**真实痛点：**
- **多模型 fallback 策略不够健壮：** 用户配置了 DeepSeek 主模型 + fallback 链，但空响应场景未被正确处理，导致高峰时段服务中断（[#4287](https://github.com/HKUDS/nanobot/issues/4287)）。
- **OpenAI 兼容性存在缺口：** `/v1/chat/completions` 端点返回零 usage tokens，破坏了与标准 OpenAI 客户端/计费工具的互操作性（[#4309](https://github.com/HKUDS/nanobot/issues/4309)）。
- **分支合并风险：** 用户在合并主分支后遭遇 `session_key` NameError 崩溃，说明近期重构（提取 `_build_memory_context`）引入了跨分支兼容性问题（[#4322](https://github.com/HKUDS/nanobot/issues/4322)）。
- **图片处理的安全意识不足：** 图片剥离 fallback 将本地路径泄露给模型，用户关注到了这一安全隐患（[#4345](https://github.com/HKUDS/nanobot/issues/4345)）。

**使用场景信号：**
- 用户将 nanobot 作为 **Telegram bot runtime** 运行，配置多模型 fallback。
- 用户依赖 **OpenAI 兼容 API** 进行下游集成（计费/计量）。
- 用户使用 **WhatsApp bridge** 处理语音消息（驱动了 PR [#4353](https://github.com/HKUDS/nanobot/pull/4353) 的音频转换修复）。
- 用户开始关注 **agent 动作审计**，暗示企业级部署需求。

---

## 8. 待处理积压

| 项目 | 链接 | 状态 | 建议 |
|---|---|---|---|
| Empty model responses fallback | [#4287](https://github.com/HKUDS/nanobot/issues/4287) | OPEN，创建于 06-10，已 6 天 | **优先处理** — 影响多模型 fallback 用户的核心可用性 |
| `session_key` NameError | [#4322](https://github.com/HKUDS/nanobot/issues/4322) | OPEN，已标记 stale | 确认是否已在主分支修复；若已修复则关闭 |
| MCP server GC crash | [#4303](https://github.com/HKUDS/nanobot/pull/4303) | OPEN PR，创建于 06-11 | 已有修复方案，建议尽快 review 合并 |
| Image-strip path leak | [#4346](https://github.com/HKUDS/nanobot/pull/4346) | OPEN PR | 安全问题，建议优先 review |
| Config/AgentLoop 重构 | [#4344](https://github.com/HKUDS/nanobot/pull/4344) | OPEN PR | 架构重构，需要充分 review 和回归测试 |

---

> **日报生成时间：** 2026-06-16
> **数据来源：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库
> **分析周期：** 过去 24 小时（2026-06-15 至 2026-06-16）

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-06-16** | **数据来源：NousResearch/hermes-agent GitHub Repository**
**分析师：OWL**

---

## 1. 今日速览

过去 24 小时，Hermes Agent 项目共处理 **50 条 Issues**（新开/活跃 41，关闭 9）和 **50 条 PRs**（待合并 44，已合并/关闭 6），无新版本发布。社区活跃度处于**高位**，讨论集中在：(a) Desktop App 构建稳定性和 UI 体验问题；(b) Agent 子任务委托（delegation/background）行为正确性；(c) 后台自改进（self-improvement）机制的可靠性修复。总体而言，项目正处于**密集迭代期**，多条高优修复链（skill 验证、子任务中断、Bedrock 缓存）正在推进，但 Desktop 端积压的构建/体验类 bug 仍较突出，需维护力量介入。

---

## 2. 版本发布

无新版本发布。（当前最新状态以 `main` 分支为准。）

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PR 推进的变更

| PR | 作者 | 说明 |
|---|---|---|
| — | — | 今日合并/关闭 PR 共 6 条，但本次数据集中展示的 TOP 20 PR 中无已合并项，说明当前重点 PR 仍处于 pending review 状态，尚未落地 |

### 🔀 待合并但进展关键的重要 PR（按影响面排序）

**Agent 核心稳定性**

| PR | 作者 | 优先级 | 说明 |
|---|---|---|---|
| [#46943](https://github.com/NousResearch/hermes-agent/pull/46943) | argus-metis | **P2** | **异步子代理 background=True 模式下用户中断被丢弃** — root cause 修复，恢复 `busy_input_mode='interrupt'` 语义 |
| [#46937](https://github.com/NousResearch/hermes-agent/pull/46937) | JoaoMarcos44 | **P2** | 后台 skill 写入的自检纠错，解决 #46897「Skill created 但 session 无法加载」问题 |
| [#46936](https://github.com/NousResearch/hermes-agent/pull/46936) | Tranquil-Flow | **P2** | 与 #46937 同类修复，确保 background-review 仅在实际可加载时才发送通知 |
| [#46945](https://github.com/NousResearch/hermes-agent/pull/46945) | zhonghui5207 | **P2** | `delegate_task(background=True)` 标志位传递修复（#46944） |
| [#46946](https://github.com/NousResearch/hermes-agent/pull/46946) | zenplace-system | — | Bedrock prompt cache prefix 复用，减少 token 成本 |

**Gateway / 集成**

| PR | 作者 | 优先级 | 说明 |
|---|---|---|---|
| [#4684](https://github.com/NousResearch/hermes-agent/pull/4684) | WolframRavenwolf | P3 | 后台记忆/skill 通知的可配置开关（off/all/new 三模式） |
| [#43929](https://github.com/NousResearch/hermes-agent/pull/43929) | mgonto | **P2** | WhatsApp 群组白名单策略在 bridge 层落地 |
| [#34603](https://github.com/NousResearch/hermes-agent/pull/34603) | fstolze | P3 | 定时任务 HTML 邮件投递端到端支持 |
| [#11236](https://github.com/NousResearch/hermes-agent/pull/11236) | jairodriguez | **P2** | `on_pre_compress()` 返回值接入 + compaction 摘要持久化，减少上下文压缩丢失 |

**Desktop / UI**

| PR | 作者 | 优先级 | 说明 |
|---|---|---|---|
| [#41677](https://github.com/NousResearch/hermes-agent/pull/41677) | DrawusMas | P3 | Desktop 俄语 (ru) 全量国际化，覆盖 ~850 字符串 |
| [#41619](https://github.com/NousResearch/hermes-agent/pull/41619) | WolframRavenwolf | P3 | 上下文文件截断警告可配置化，用户可感知 project/identity context 是否被裁剪 |

> **点评：** WolframRavenwolf 一人贡献了 10+ 条高质量 PR，覆盖 gateway 安全、可观测性、i18n、通知、Bedrock 缓存等多维度，是当前项目最活跃的核心贡献者。子代理 delegation 和 skill 写入修复是今日最关键的两条主线。

---

## 4. 社区热点

以下按评论数、👍 数、互动热度选取 TOP 讨论：

1. **[#7237](https://github.com/NousResearch/hermes-agent/issues/7237)** — *Response truncated due to output length limit*
   **50 评论 / 6 👍 / 已关闭**。这是**全样本中讨论热度最高的 Issue**。用户在使用 CLI 或 gateway 消息（Telegram/Discord/Slack）时，agent 长响应被截断。虽已关闭，但评论量说明这是高频痛点。社区诉求：需要可配置的 output length 上限，或优雅的截断后继续机制。

2. **[#40187](https://github.com/NousResearch/hermes-agent/issues/40187)** — *macOS Desktop 构建失败*
   **8 评论**。`hermes update` / `hermes desktop` 在 Electron 构建最后阶段崩溃。macOS 桌面用户的核心体验阻断，影响装机量增长。已有副本 #46939 补充了 Electron mirror 备选失败的细节。

3. **[#41222](https://github.com/NousResearch/hermes-agent/issues/41222)** — *Desktop 集成 Kanban Board*
   **3 评论 / 2 👍**。用户希望在 Desktop 内直接访问看板功能，而非通过终端 CLI 切换。2 👍 说明需求明确，是现代 AI agent 工作流中的自然延伸。

4. **PR [#46942](https://github.com/NousResearch/hermes-agent/pull/46942)** — *Sister Registry — 12-sister 注册中心 + CLI + 委托管道*
   今日最具野心的 feature PR。引入「sister」身份体系、CLI 命令（`hermes sister list/show/match/status/run`）、以及 `delegate_to_sister` 委托机制。代表项目从单一 agent 走向**角色化多 agent 架构**的信号。

5. **PR [#46943](https://github.com/NousResearch/hermes-agent/pull/46943)** — *async subagent 中断修复*
   虽评论尚未激活，但涉及核心交互语义（用户在 agent 运行时发消息被静默丢弃），影响面广，需要高优 review。

---

## 5. Bug 与稳定性

### 🔴 严重（P1/YAML 级阻断）

| # | Issue/PR | 说明 | 状态 |
|---|---|---|---|
| 1 | [#46675](https://github.com/NousResearch/hermes-agent/issues/46675) | Anthropic Claude Max OAuth token + 工具调用被拒（HTTP 400 "extra usage"）。单下划线 `mcp_` 工具名前缀被视为第三方应用。**直接影响 OAuth 用户正常使用。** | ❌ 无 fix PR |
| 2 | [#32574](https://github.com/NousResearch/hermes-agent/issues/32574) | Gateway 缺乏平台连接活性 watchdog，zombie 连接导致消息黑洞（Discord 已知案例）。影响所有平台。 | ❌ 无 fix PR |
| 3 | [#46934](https://github.com/NousResearch/hermes-agent/issues/46934) | Gateway 重启后 stale session 绕过 idle reset，导致 context bleed。已开放，今日新增。 | ❌ 无 fix PR |
| 4 | [#46918](https://github.com/NousResearch/hermes-agent/issues/46918) | Desktop 定时任务 "Trigger now" 按钮无效，Run History 永远 "No runs yet"。⚠️ 疑似与 #46906 的 P12 Lifecycle-Scheduler 事故高度相关。 | ❌ 无 fix PR |

### 🟠 中等（P2 级功能异常）

| # | Issue/PR | 说明 | Fix PR |
|---|---|---|---|
| 5 | [#46897](https://github.com/NousResearch/hermes-agent/issues/46897) | Background-review 误报 "Skill created" 但 skill 实际不可加载 | ✅ #46936 + #46937 |
| 6 | [#46941](https://github.com/NousResearch/hermes-agent/issues/46941) | 飞书等平台终端命令在代码块中被截断为单行（`tool_preview_length` 限制） | ❌ |
| 7 | [#44888](https://github.com/NousResearch/hermes-agent/issues/44888) | Desktop 审批对话框中长 shell 命令被截断，无滚动/展开 | ❌ |
| 8 | [#46917](https://github.com/NousResearch/hermes-agent/issues/46917) | Agent 被要求保持沉默时仍强制输出 "(silence)" 占位文本 | ❌ |
| 9 | [#46891](https://github.com/NousResearch/hermes-agent/issues/46891) | `credential_pool` 的重试延迟解析器不支持绝对时间戳格式的 rate-limit 响应 | ❌ |
| 10 | [#31246](https://github.com/NousResearch/hermes-agent/issues/31246) | MCP server 连接失败仅 writes 到 DEBUG 日志，gateway.log 完全无提示 | ❌ |
| 11 | [#46756](https://github.com/NousResearch/hermes-agent/issues/46756) | 小米 MiMo 空内容 web_extract 400 错误 | ❌ |

### 🟡 低优先（P3 级体验改善）

| # | Issue/PR | 说明 |
|---|---|---|
| 12 | [#40480](https://github.com/NousResearch/hermes-agent/issues/40480) | Desktop 自定义 provider 模型不出现在下拉列表中 |
| 13 | [#38855](https://github.com/NousResearch/hermes-agent/issues/38855) | Desktop Working Directory 设置被 localStorage 旧值覆盖 |
| 14 | [#46908](https://github.com/NousResearch/hermes-agent/issues/46908) | Background-review 通知不可配置抑制（已由 PR #4684 覆盖） |
| 15 | [#46753](https://github.com/NousResearch/hermes-agent/issues/46753) | Cron health-check 在 tool-call 错误时静默报告 "ok"，文档缺失 |

---

## 6. 功能请求与路线图信号

以下功能请求有活跃 PR 支撑，**大概率进入下一版本**：

| 功能 | 关联 Issue | 关联 PR | 路由信号强度 |
|---|---|---|---|
| **后台记忆/skill 通知可开关** | [#46908](https://github.com/NousResearch/hermes-agent/issues/46908) | [#4684](https://github.com/NousResearch/hermes-agent/pull/4684) 🟢 | ✅ 高（PR 已 pending） |
| **上下文压缩摘要持久化 + on_pre_compress 修复** | — | [#11236](https://github.com/NousResearch/hermes-agent/pull/11236) 🟢 | ✅ 高 |
| **WhatsApp 群组白名单** | — | [#43929](https://github.com/NousResearch/hermes-agent/pull/43929) 🟢 | ✅ 高 |
| **Sister 注册中心 + 多角色 agent** | — | [#46942](https://github.com/NousResearch/hermes-agent/pull/46942) 🟢 | ✅ 中高（12-sister + CLI + delegate_to_sister） |
| **HTML 邮件投递 for Cron** | — | [#34603](https://github.com/NousResearch/hermes-agent/pull/34603) 🟢 | ✅ 中 |

**路线图推测：**
- 近期重点：**Agent 可靠性**（子代理 delegation 正确性、skill 验证、cache 优化）+ **Gateway 可观测性**
- 中期方向：**多角色 agent 架构**（Sister Registry）、**Kanban 集成 Desktop**
- 长期关注：**macOS 桌面构建稳定性** — 这是阻碍桌面用户增长的持续瓶颈

**收到但暂无 PR 的功能请求（可能积压）：**

| 功能 | Issue | 说明 |
|---|---|---|
| Desktop 集成 Kanban Board | [#41222](https://github.com/NousResearch/hermes-agent/issues/41222) | 明确需求，2 👍，无 PR |
| 全局并发使用上限 | [#44761](https://github.com/NousResearch/hermes-agent/issues/44761) | self-hosted LLM 用户刚需 |
| 双亚 agent 模型配置 | [#46880](https://github.com/NousResearch/hermes-agent/issues/46880) | 按任务类型分配不同模型 |
| Per-provider HTTP headers | [#46877](https://github.com/NousResearch/hermes-agent/issues/46877) | 企业级需求 |

---

## 7. 用户反馈摘要

### 🟢 正面反馈

- **SSO/OAuth 集成** 是 Hermes Agent 被选择的关键因素之一（参见 #7237 中高频使用 Telegram/Discord/Slack 生态的描述）
- **子任务委托（delegation）** 机制的深度用户活跃，提出高级诉求（双模型、背景中断、后台 skill 验证），说明核心功能已被重度采用
- **Cron + HTML 邮件 + 健康检查** 的组合使用反映企业级 AI 运维场景正在落地
- **俄语 i18n** PR 的提交说明非英语用户群正在增长
- **Bedrock prompt cache** 优化 PR 反映成本敏感型用户（self-hosted / 企业）的关注

### 🔴 负面痛点（按提及频次排序）

1. **输出截断无预警**（#7237，全样本最热讨论）— 用户生成长响应时频繁被截断，无法获得完整输出
2. **macOS Desktop 构建可靠性**（#40187 + #46939）— `hermes desktop` 失败，Electron 下载困难，严重影响 macOS 用户首次体验
3. **审批 UI 信息不足**（#44888）— 长命令被截断且无滚动，用户无法安全审批
4. **夜间自动化（Cron/Kanban）的"静默失败"模式** — tool-call 错误被忽略（#46753）、zombie session（#46934）、P12 Lifecycle-Scheduler 事故（#46906）
5. **后台自改进机制的"假阳性"通知** — 出现 Skill 已创建的提示但实际无法使用（#46897），损害用户信任
6. **MCP 配置无反馈** — 错误仅写 DEBUG 日志，用户无法排查（#31246）

---

## 8. 待处理积压 ⚠️

以下 PR/Issue 长期处于待 review 或未响应状态，建议维护者关注：

### 积压 PR（创建 > 7 天，仍待 review/merge）

| PR | 创建日期 | 作者 | 说明 |
|---|---|---|---|
| [#11236](https://github.com/NousResearch/hermes-agent/pull/11236) | 2026-04-16 | jairodriguez | **`on_pre_compress()` 修复 + compaction 摘要持久化**（P2，涉及上下文丢失） |

> 超过 **60 天** 未合并，是当前积压中最古老的 PR 之一，且修复的是上下文压缩核心路径的数据丢失 bug。

| PR | 创建日期 | 作者 | 说明 |
|---|---|---|---|
| [#4684](https://github.com/NousResearch/hermes-agent/pull/4684) | 2026-04-03 | WolframRavenwolf | 后台记忆/skill 通知可配置开关 |

> 超过 **40 天** 未合并，关联 #46908 功能请求。

### 积压 Issue（无 fix，影响重要）

| Issue | 创建日期 | 影响 | 说明 |
|---|---|---|---|
| [#31246](https://github.com/NousResearch/hermes-agent/issues/31246) | 2026-05-24 | 中 | MCP server misconfiguration 静默忽略，无 PR |
| [#32574](https://github.com/NousResearch/hermes-agent/issues/32574) | 2026-05-26 | **高** | Gateway 平台 watchdog 缺失（zombie 连接），无 PR |
| [#46934](https://github.com/NousResearch/hermes-agent/issues/46934) | 2026-06-16 | **高** | Stale session context bleed，今日新添 |
| [#44761](https://github.com/NousResearch/hermes-agent/issues/44761) | 2026-06-12 | 低 | 全局并发上限功能请求，无响应 |

---

## 📊 项目健康度总评

| 维度 | 评级 | 说明 |
|---|---|---|
| 活跃度 | 🟢 高 | 50 Issues + 50 PRs / 24h，多语言/多平台贡献者活跃 |
| 稳定性 | 🟡 средняя | 核心 agent 路径有多个 P2 bug 在修，但 OAuth 阻断（P1）和 Gateway watchdog 缺失（P1）仍未解决 |
| 代码质量 | 🟢 良好 | 积压的修复 PR（#46943、#46937、#11236）均附回归测试 |
| 用户体验 | 🟡 偏弱 | macOS 构建失败、输出截断、审批 UI 问题是桌面用户的核心阻力 |
| 路线图执行力 | 🟢 清晰 | Sister Registry、Kanban 集成等方向有明确 PR 推进 |
| 长期积压风险 | 🔴 关注 | #11236（60 天未合并的 P2 上下文修复）和 #32574（Gateway zombie 连接）是最危险的积压项 |

---

**建议维护者今日行动项：**
1. 🔴 **优先审查** [#46943](https://github.com/NousResearch/hermes-agent/pull/46943)（async subagent 中断修复）、[#46936](https://github.com/NousResearch/hermes-agent/pull/46936)（skill 验证修复）— 已进入 issue 修复黄金期
2. 🔴 关注 [#46918](https://github.com/NousResearch/hermes-agent/issues/46918)（Cron Trigger now 无效）+ [#46906](https://github.com/NousResearch/hermes-agent/issues/46906)（P12 事故）的关联，可能是同一类 scheduler 竞态
3. 🟡 推动 #11236 的 merge/review（60 天积压）
4. 🟡 macOS Desktop 构建稳定性需要专项跟进，考虑建立 CI 守夜或文档降级策略

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 · 2026-06-16

---

## 1. 今日速览

PicoClaw 今日活跃度较高，代码推进节奏明显。24小时内共处理了 **3 条 Issue 更新**（1 开 2 闭）、**12 条 PR 更新**（10 待合并，2 已合并/关闭），并发布了 **一个 Nightly 构建版本**。贡献者集中围绕安全性加固、代码健壮性和渠道兼容性三大方向发力，有 10 个 PR 处于待合并状态，提示维护者的 Review 压力值得关注。整体项目健康度良好，迭代节奏稳定。

---

## 2. 版本发布

### Nightly Build — `v0.2.9-nightly.20260615.13a38bd1`

- **版本号**: v0.2.9-nightly.20260615.13a38bd1
- **类型**: 自动化每日构建，标记为潜在不稳定版本，建议谨慎使用
- **Changelog**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- **说明**: 官方未在此 nightly 中标注具体破坏性变更或迁移指南。用户若从 stable 升级，建议先在本环境充分测试，特别是涉及 launcher 网络安全策略和 Web UI 会话历史的变更。

---

## 3. 项目进展

今日共 **2 个 PR 完成闭合**，推进了安全性诊断能力和 Web 交互细节：

| # | 状态 | 说明 |
|---|------|------|
| [#3097](https://github.com/sipeed/picoclaw/pull/3097) | ✅ **已合并** | **Web UX 改进**：在聊天输入框下方增加 `Shift+Enter` 换行提示，提升新用户交互可发现性 |
| [#3126](https://github.com/sipeed/picoclaw/pull/3126) | ❌ **已关闭（未合并）** | launcher allowlist 绕过诊断改进，该 PR 被关闭（可能与 Issue #3069 另有官方修复方案） |

另有 **10 个 PR 处于待合并**，呈现出明显的贡献者集中态势——**`chengzhichao-xydt`** 一人提交了 **6 个**，主要聚焦于以下方向：

- **错误处理规范化**：消除 `Close()` 返回值等 linter 警告（#3059、#3127、#3128、#3129）
- **类型断言安全化**：为 `sync.Map` 和 tool schema 的类型断言添加 `ok` 检查（#3054、#3131）
- **JSON 序列化容错**：`grep` 和 `expand` 工具中处理 `json.Marshal` 错误（#3130）

此外，**#3132**（SiYue-ZO）为核心执行路径的 goroutine 添加 panic recovery，防止单个 goroutine 崩溃拖垮整个进程，是值得优先合并的关键稳定性补丁。

---

## 4. 社区热点

### Issue #2887 — RISC-V 平台 .deb 无法调用 OpenAI 模型
- **状态**: ❌ 已关闭（标记为 stale）
- **评论数**: 10 | 👍: 0
- **链接**: [sipeed/picoclaw#2887](https://github.com/sipeed/picoclaw/issues/2887)
- **摘要**: 用户在 RISC-V 架构的 Debian GNU 系统上运行 `v0.2.8` 的 `.deb` 包时，调用 `gpt-5.4-2026-03-05` 模型失败。由于本地未安装 Go 编译器，无法自行排查。Issue 被标记为 stale 后关闭，**未明确给出根因或修复方案**。
- **诉求分析**: 反映了 RISC-V 等非主流架构兼容性的现实痛点。有 10 条评论说明社区关注度高，但可能因难以复现而被搁置。用户期待官方声明是否正式支持 RISC-V。

### Issue #3015 — Windows 端 QQ 频道连接失败
- **状态**: 🟠 开放中（标记为 stale）
- **评论数**: 3 | 👍: 0
- **链接**: [sipeed/picoclaw#3015](https://github.com/sipeed/picoclaw/issues/3015)
- **摘要**: Windows 发布版运行 `picoclaw gateway` 时，QQ 频道因获取 `bots.qq.com` access token 超时而启动失败。Pico 频道工作正常。
- **诉求分析**: 指向 Windows 环境下网络模块或 token 获取逻辑的平台兼容性问题（可能与代理、TLS 实现或超时配置有关）。QQ 频道消息未出圈，社区呼声适中。

### Issue #3069 — Launcher `allowed_cidrs` 可通过同主机反向代理绕过
- **状态**: ✅ 已关闭（标记为 Security）
- **评论数**: 0 | 👍: 0
- **链接**: [sipeed/picoclaw#3069](https://github.com/sipeed/picoclaw/issues/3069)
- **摘要**: 安全 advisory——PicoClaw launcher 的网络信任列表中，访问控制仅依赖 `RemoteAddr`，当部署在同主机反向代理后方时，可信 IP 被代理覆盖，导致 CIDR 限制可被绕过。
- **诉求分析**: 这是今日最严肃的安全议题。虽有 PR #3126 尝试改进诊断日志，但该 PR 本身被关闭。目前**不确定是否有正式的访问控制修复已合并**，维护者需尽快确认。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 已有 Fix PR | 状态 |
|--------|----------|------|-------------|------|
| 🔴 **高** | [#3069](https://github.com/sipeed/picoclaw/issues/3069) | Launcher CIDR allowlist 可被反向代理绕过 — 安全漏洞 | PR #3126（已关闭，未合并）⚠️ | 待确认是否另有修复计划 |
| 🟡 **中** | [#3015](https://github.com/sipeed/picoclaw/issues/3015) | Windows QQ 频道 token 获取超时 | 🔲 无 | 开放中 |
| 🟢 **低** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | RISC-V .deb 调用 OpenAI 模型失败 | 🔲 无 | 已关闭（stale） |
| 🟡 **中** | [#3132](https://github.com/sipeed/picoclaw/pull/3132) | 核心 goroutine 无 panic recovery，可导致进程整体崩溃 | ✅ PR #3132 | 待合并 |
| 🟢 **低** | PR群 #3054, #3127–3131 | 多处错误处理缺失、类型断言不安全 | ✅ 各自 PR 自含修复 | 待合并 |

> ⚠️ **特别提醒**: Issue #3069 的安全漏洞目前处于"已关闭但无明确修复"状态，建议维护者尽快确认是否已合并或计划正式 security fix，避免用户误以为问题已解决。

---

## 6. 功能请求与路线图信号

| 方向 | 信号来源 | 说明 | 纳入可能性 |
|------|----------|------|-----------|
| **Telegram 群组交互增强** | PR [#2975](https://github.com/sipeed/picoclaw/pull/2975) | 将"回复机器人消息"视为等同于 @提及，当 `mention_only: true` 时也能触发回复 | **高** — PR 内容具体清晰，低副作用 |
| **Web 会话历史完整性** | PR [#3047](https://github.com/sipeed/picoclaw/pull/3047) | 恢复 `GET /api/sessions/{id}` 的完整 JSONL 历史，同时保持列表端性能 | **高** — 直接改善 Web UI 可用性 |
| **Launcher 安全策略重构** ⚠️ | Issue [#3069](https://github.com/sipeed/picoclaw/issues/3069) + PR #3126（关闭） | 需要从根本上修复反向代理场景下的 IP 信任问题（可能需引入 `X-Forwarded-For` 支持） | **必要** — 安全漏洞必须修复 |
| **goroutine 稳定性体系化** | PR [#3132](https://github.com/sipeed/picoclaw/pull/3132) | 为全链路核心 goroutine 添加 defer-recover | **高** — 属稳定性基建，优先级高 |

结合当前 PR 活跃度的判断，下一版本（预计 v0.2.9-stable）大概率会包含：goroutine panic recovery、Telegram 回复即提及、Web 会话历史完整读取、以及大量错误处理规范化合并。

---

## 7. 用户反馈摘要

从 Issue 评论和描述中提炼的真实场景与痛点：

**痛点 1 — 平台兼容性覆盖不足**
- 用户尝试在 **RISC-V + Debian** 上使用 PicoClaw（嵌入式/开发者场景），但 `.deb` 包无法正常运行。这表明 PicoClaw 在多架构社区的渗透力正在增长，但构建流水线的跨架构测试需要加强。

**痛点 2 — Windows 渠道支持不完善**
- QQ 频道是该项目的重要渠道之一，但 Windows 用户在 token 获取环节遇到超时。可能涉及环境差异（CA 证书、代理行为、超时默认值），没有给出 Windows 环境下的明确排查路径。

**痛点 3 — 安全意识领先于实现**
- 安全研究者发现了 launcher 访问控制的设计缺陷，说明实际用户已将 PicoClaw 部署在反向代理和公网场景中。项目在安全加固（CIDR 策略、header 信任链）方面需要系统性提升。

**满意点**
- Telegram `mention_only` 模式的用户交互体验持续优化（PR #2975），体现了对实际 IM 场景的精细打磨。
- Web UI 端持续收到细节打磨（#3097 换行提示），社区开发者体验在改善。

---

## 8. 待处理积压

以下 Issue/PR 处于**长期未活跃或被 stale 标记**状态，提醒维护者关注：

| # | 类型 | 标题 | 创建日期 | 风险提示 |
|---|------|------|----------|----------|
| [#2975](https://github.com/sipeed/picoclaw/pull/2975) | PR | Telegram: reply-as-mention | 2026-05-30 | 已存在近 3 周，低风险但需 Review |
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) | Issue | RISC-V .deb + OpenAI 不工作 | 2026-05-17 | stale 关闭后如有新用户复现可能被重新触发 |
| [#3015](https://github.com/sipeed/picoclaw/issues/3015) | Issue | Windows QQ 频道连接失败 | 2026-06-06 | stale 状态但无解决，Windows 用户体验受影响 |
| PR群 #3054, #3059 等 | PR | 多个错误处理/类型安全修复 | 2026-06-07~08 | 10 个 PR 积压，建议分批 Review 合并，避免贡献者失去动力 |
| [#3069](https://github.com/sipeed/picoclaw/issues/3069) | Issue | Launcher CIDR 绕过安全漏洞 | 2026-06-09 | ❌ **安全议题不应长期挂起**，需明确修复计划 |

---

**总结**: PicoClaw 正处于快速迭代期，代码质量和安全性修复并行推进。当前最大的**风险窗口**是 Issue #3069 的安全悬案和 PR 积压可能导致的贡献者流失。建议优先处理安全修复、合并成熟 PR，并为 RISC-V 和 Windows 场景建立 CI 覆盖。

---
*日报生成时间: 2026-06-16 | 数据来源: GitHub API*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-06-16 | 数据来源：github.com/qwibitai/nanoclaw**

---

## 1. 今日速览

NanoClaw 今日活跃度较高，共产生 **12 条 PR 更新**（9 条待合并，3 条已合并/关闭），而 Issue 系统保持清零状态，无新 Issue 报告。今日 PR 呈现两条清晰主线：**MCP 远程服务器支持与 Strava 集成功能扩张**（作者 clementdecoligny），以及 **跨通道消息路由与稳定性修复**（多位贡献者并行推进）。项目整体处于功能扩展与存量 Bug 修复并行推进的健康节奏中，未发布新版本。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展：今日合并/关闭 PR

今日共 3 条 PR 完成关闭/合并，以下是重要条目：

| PR | 作者 | 说明 |
|---|---|---|
| [#2774](https://github.com/qwibitai/nanoclaw/pull/2774) — `feat(update-nanoclaw)` | Koshkoshinsk | **OneCLI 网关自动升级**：当 `versions.json` 中的 `onecli-gateway` / `onecli-cli` pin 发生变动时，`update-nanoclaw` 现在会自动检测到版本漂移并触发网关升级，`update` 流程新增 `--gateway-only` 标志及版本比对逻辑。修复了"新代码对旧网关运行失败"的隐患。 |
| [#2772](https://github.com/qwibitai/nanoclaw/pull/2772) — `fix(codex)` — CDX-004 | Koshkoshinsk | **Codex 会话归档修复**：修复 Codex 组件按每轮 exchange 写一个文件导致同一会话碎片化的问题。改为按 thread/continuation id 聚合归档，确保长对话场景下日志结构清晰可查。 |
| [#2773](https://github.com/qwibitai/nanoclaw/pull/2773) — `docs(add-codex)` | Koshkoshinsk | 移除 `.claude/skills/add-codex/SKILL.md` 中重复的 TTY 警告语句，降低文档噪音，不影响功能。 |

**小结：** 3 条关闭 PR 中 2 条为实质性修复（OneCLI 升级遗漏、Codex 归档碎片化），1 条为文档清理。项目在运维自动化和对话日志可靠性两个维度均向前迈出一步。

---

## 4. 社区热点

今日无 Issue 产生，社区互动集中在 PR 层面。以下几个 PR 代表当前社区关注方向：

### 🔥 高关注：WhatsApp 入站媒体路由修复
**[#2778](https://github.com/qwibitai/nanoclaw/pull/2778)** — `fix(whatsapp): route inbound media through shared session inbox`
- **问题：** WhatsApp 接收的图片、视频、音频、文档从未送达 Agent。`downloadInboundMedia` 将文件写入宿主机的 `data/attachments/` 并标记 `localPath`，但 Agent 容器仅挂载了 per-session 目录到 `/workspace`，路径不匹配导致媒体丢失。
- **诉求：** WhatsApp 用户的核心痛点——无法让 Agent 处理通过聊天发送的多媒体内容，直接影响 Agent 实用价值。

### 🔥 MCP 远程服务器支持
**[#2776](https://github.com/qwibitai/nanoclaw/pull/2776)** — `feat: support remote HTTP/SSE MCP servers`
- **要点：** 将 `McpServerConfig` 扩展为支持 stdio（已有）和远程 HTTP/SSE MCP 服务器的 union 类型，新增 `McpServerRemoteConfig` 支持 `type`、`url`、`headers`、`instructions` 字段，CLI 新增 `--type`、`--url`、`--header` 参数。
- **意义：** 这一 PR 是 MCP 生态从本地 stdio 走向远程标准化协议的关键一步，极大扩展了 NanoClaw 的 MCP 集成范围。

### 🔥 社区贡献：Strava 官方 MCP 集成
**[#2777](https://github.com/qwibitai/nanoclaw/pull/2777)** — `feat: add /add-strava skill for official Strava MCP`
- 紧随 PR #2776 的远程 MCP 能力，贡献者第一时间添加了 Strava 运动的官方集成技能。反映社区对新 MCP 能力的即时采纳热情。

---

## 5. Bug 与稳定性

按严重程度排列今日涉及的问题：

| 严重度 | 问题 | PR | 状态 |
|---|---|---|---|
| 🔴 高 | WhatsApp 入路媒体文件送达 Agent，消息流程断裂 | [#2778](https://github.com/qwibitai/nanoclaw/pull/2778) | Open — 有 PR |
| 🟠 中 | Codex 会话归档碎片化（每轮 exchange 写一个文件） | [#2772](https://github.com/qwibitai/nanoclaw/pull/2772) | ✅ 已修复（Closed） |
| 🟠 中 | Agent 预算/token 耗尽的 LLM 回合被静默丢弃，不返回给用户 | [#2759](https://github.com/qwibitai/nanoclaw/pull/2759) | Open — 有 PR |
| 🟡 低 | OneCLI 升级不触发网关版本更新 | [#2774](https://github.com/qwibitai/nanoclaw/pull/2774) | ✅ 已修复（Closed） |
| 🟡 低 | Changelog 中 OneCLI 升级说明误导性描述 | [#2775](https://github.com/qwibitai/nanoclaw/pull/2775) | Open |
| 🟡 低 | `ncl groups create --id` 参数被 `randomUUID()` 静默覆盖 | [#2628](https://github.com/qwibitai/nanoclaw/pull/2628) | Open — 有 PR |
| 🟡 低 | MCP `add_reaction` 在各通道（WhatsApp/Discord/Telegram 等）因 emoji 编码不一致导致 reaction 静默失败 | [#2627](https://github.com/qwibitai/nanoclaw/pull/2627) | Open — 有 PR |
| 🟡 低 | Signal 通道在特定前置状态下 `restartService()` 静默无操作 | [#2626](https://github.com/qwibitai/nanoclaw/pull/2626) | Open — 有 PR |

**总结：** 高严重度问题（WhatsApp 媒体路由）已有修复 PR 待合并；中严重度问题中 Codex 归档已修复，预算错误传递问题有 PR 待审。低严重度问题积压较多但均有对应 PR，整体修复覆盖率良好。

---

## 6. 功能请求与路线图信号

结合今日 PR 动态，以下方向可能纳入近期版本：

1. **远程 MCP 服务器支持（高概率）** — PR #2776 是基础设施级变更，配套 Strava 集成（#2777）已紧随其后，表明远程 MCP 是明确的路线图方向。预计后续会有更多远程 MCP 技能跟进。

2. **Agent 容器性能优化** — PR [#2771](https://github.com/qwibitai/nanoclaw/pull/2771) 为 Agent 容器添加 `--shm-size=1g` 和 `--init` 参数，解决 headless Chromium 在默认 64MB `/dev/shm` 下的渲染瓶颈。这是容器运行时层面的稳定性提升，合并概率高。

3. **跨通道 Reaction 统一** — PR [#2627](https://github.com/qwibitai/nanoclaw/pull/2627) 修复 MCP `add_reaction` 在多数通道的静默失败，属于多通道一致性问题，是长期路线图中的通道对齐工作。

4. **CLI `--id` 参数尊重用户输入** — PR [#2628](https://github.com/qwibitai/nanoclaw/pull/2628) 修复 `ncl groups create --id` 被静默忽略的问题，属于 CLI 体验修复，合并阻力小。

---

## 7. 用户反馈摘要

今日无新 Issue，从 PR 摘要中提炼用户反馈信号：

- **WhatsApp 多媒体体验断裂** — 用户通过 WhatsApp 发送图片/视频给 Agent 后完全无法获得响应，这是最直接的体验断裂点（PR #2778）。
- **预算耗尽时 Agent 无反馈** — 当 LLM token 预算耗尽时，用户看不到任何错误提示，Agent 静默停止（PR #2759）。用户需要明确的"预算已用尽"提示。
- **CLI 参数被静默忽略** — `ncl groups create --id` 的 `--id` 参数在文档中标注为可选但实际被 `randomUUID()` 覆盖，用户指定的 ID 被丢弃（PR #2628）。反映 CLI 参数一致性问题。
- **跨通道 Reaction 不可靠** — 多数通道的 emoji reaction 因编码格式不匹配而静默失败（PR #2627），影响用户与 Agent 的交互确认体验。
- **积极信号** — 社区贡献者（clementdecoligny）在远程 MCP 基础设施 PR 提交后立即跟进 Strava 集成，显示社区对新能力的快速采纳和正向反馈。

---

## 8. 待处理积压

以下 PR 创建时间较早，尚未合并，建议维护者关注：

| PR | 创建日期 | 作者 | 内容摘要 | 建议 |
|---|---|---|---|---|
| [#2626](https://github.com/qwibitai/nanoclaw/pull/2626) | 2026-05-27 | eldar702 | Signal `restartService()` 静默失败 → 显式报错 | 已超 20 天，建议优先审查合并 |
| [#2627](https://github.com/qwibitai/nanoclaw/pull/2627) | 2026-05-27 | eldar702 | MCP `add_reaction` 跨通道 emoji 编码修复 | 已超 20 天，涉及多通道一致性 |
| [#2628](https://github.com/qwibitai/nanoclaw/pull/2628) | 2026-05-27 | eldar702 | CLI `--id` 参数被静默忽略 | 已超 20 天，修复简单、影响用户体验 |
| [#2759](https://github.com/qwibitai/nanoclaw/pull/2759) | 2026-06-14 | assapin | 预算/token 耗尽回合被静默丢弃 | 已超 2 天，中严重度，建议尽快审查 |
| [#2778](https://github.com/qwibitai/nanoclaw/pull/2778) | 2026-06-16 | IamAdamJowett | WhatsApp 入站媒体路由修复 | 今日提交，高严重度，建议优先合并 |

**特别提醒：** eldar702 的三条 PR（#2626、#2627、#2628）均创建于 5 月 27 日，距今已超过 20 天且均有明确的修复方案和关联 Issue，建议维护者集中处理这批积压。

---

*日报由 OWL 自动生成 | 数据截至 2026-06-16*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

## NullClaw 项目动态日报 — 2026-06-16

---

### 1. 今日速览

NullClaw 今日整体活跃度偏低，处于常规维护节奏。过去 24 小时内新增 3 条 Issue、1 条 PR，无新版本发布，无 PR 合并。Issue 集中在配置文档缺失（rate limit 阈值不透明）、本地模型集成质量（Ollama 输出截断）以及 Azure 身份认证扩展三个方向，反映出用户在多 LLM 提供商接入和自托管场景下的真实痛点。唯一的 PR 为 Dependabot 自动发起的 Alpine 基础镜像升级，属常规依赖维护，无功能推进。项目当前无破坏性变更，整体健康度稳定但社区响应速度有待提升。

---

### 2. 版本发布

无新版本发布，本节省略。

---

### 3. 项目进展

今日无 PR 合并或关闭，项目功能层面无实质性推进。

唯一活跃的 PR：

| PR | 状态 | 说明 |
|---|---|---|
| **#956** `ci(deps): bump alpine from 3.23 to 3.24` | 🟡 OPEN | Dependabot 自动升级 Docker 基础镜像 Alpine 3.23 → 3.24，属常规依赖维护，无功能变更。尚未合并。 |

**链接**: [nullclaw/nullclaw#956](https://github.com/nullclaw/nullclaw/pull/956)

---

### 4. 社区热点

今日讨论最活跃的 Issue 为 **#957（Rate limit issue）**，已有 1 条评论，用户反馈在使用 NullClaw 作为无记忆 Agent Runtime 并设置 JSON 输出格式时，持续遭遇 `"The config reader hit a rate limit."` 错误。用户的核心诉求是：**文档缺失**——rate limit 的具体含义、触发阈值、以及如何在配置中调整该值均不透明。

另一条值得关注的 Issue 是 **#955（Azure OpenAI 身份认证增强）**，虽暂无评论，但提出了使用 `DefaultTokenCredential` 支持 Azure CLI 开发者凭证的需求，指向企业级安全合规场景。

| Issue | 评论数 | 👍 | 热点分析 |
|---|---|---|---|
| **#957** Rate limit issue | 1 | 0 | 配置文档不透明，用户无法自助排查 |
| **#955** Azure 身份认证 | 0 | 0 | 企业安全合规需求，有路线图信号价值 |

**链接**: [nullclaw/nullclaw#957](https://github.com/nullclaw/nullclaw/issues/957) | [nullclaw/nullclaw#955](https://github.com/nullclaw/nullclaw/issues/955)

---

### 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 **中** | **#952** `[bug] Local model using ollama returns incomplete answers` | 通过 Ollama 拉取 Gemma 模型后，Agent 输出不完整句子，影响本地模型可用性 | ❌ 无 |
| 🟡 **低** | **#957** Rate limit issue | 配置读取触发 rate limit，用户无法调整阈值 | ❌ 无 |

**Bug 详情**:

- **#952**（创建于 2026-06-11，最后更新 2026-06-15）：用户报告 Ollama + Gemma 组合下 Agent 回答被截断。该 Issue 已存在 5 天，仅有 1 条评论，尚无维护者响应或修复 PR。此问题直接影响本地 LLM 集成场景的稳定性，建议优先排查。

**链接**: [nullclaw/nullclaw#952](https://github.com/nullclaw/nullclaw/issues/952)

---

### 6. 功能请求与路线图信号

| 请求 | Issue | 方向 | 实现可能性评估 |
|---|---|---|---|
| Azure OpenAI 身份认证支持 | **#955** | 多 LLM 提供商认证扩展 | 🟡 中等 — 无关联 PR，但需求明确且符合企业用户场景 |
| Rate limit 配置文档/可调参数 | **#957** | 配置透明化 | 🟢 高 — 属文档/配置项暴露，实现成本低 |

**分析**: #955 提出的 `DefaultTokenCredential` 集成是 Azure 生态中的标准做法，若 NullClaw 计划扩展企业用户群，此功能有较高纳入下一版本的可能性。#957 更偏向文档和配置项暴露，实现难度低，可作为快速响应项。

**链接**: [nullclaw/nullclaw#955](https://github.com/nullclaw/nullclaw/issues/955) | [nullclaw/nullclaw#957](https://github.com/nullclaw/nullclaw/issues/957)

---

### 7. 用户反馈摘要

从今日 Issues 中提炼的真实用户痛点与使用场景：

| 维度 | 反馈 |
|---|---|
| **使用场景** | ① 将 NullClaw 作为无记忆 Agent Runtime，输出 JSON 格式（#957）；② 本地 Ollama + Gemma 自托管部署（#952）；③ Azure OpenAI 企业订阅环境（#955） |
| **痛点** | ① Rate limit 错误信息不透明，无文档说明阈值调整方式；② 本地模型输出截断，影响可用性；③ Azure 安全策略禁止 API Key，需身份认证替代方案 |
| **满意点** | 暂无正面反馈记录 |
| **不满意** | 配置文档覆盖不足，本地模型集成体验不稳定 |

---

### 8. 待处理积压

以下 Issue 长期未获维护者实质性响应，建议关注：

| Issue | 创建日期 | 最后更新 | 等待天数 | 优先级 |
|---|---|---|---|---|
| **#952** `[bug] Ollama 本地模型输出不完整` | 2026-06-11 | 2026-06-15 | **5 天** | 🔴 高 — 影响核心功能可用性 |
| **#957** Rate limit 配置问题 | 2026-06-15 | 2026-06-15 | **1 天** | 🟡 中 — 文档/配置项暴露 |
| **#955** Azure 身份认证 | 2026-06-15 | 2026-06-15 | **1 天** | 🟡 中 — 功能增强 |

**特别提醒**: Issue #952 已存在 5 天且涉及本地模型核心功能，建议维护者尽快确认复现步骤并给出临时解决方案或修复计划。

**链接**: [nullclaw/nullclaw#952](https://github.com/nullclaw/nullclaw/issues/952) | [nullclaw/nullclaw#957](https://github.com/nullclaw/nullclaw/issues/957) | [nullclaw/nullclaw#955](https://github.com/nullclaw/nullclaw/issues/955)

---

> **日报生成时间**: 2026-06-16 | **数据来源**: GitHub API (nullclaw/nullclaw) | **分析引擎**: OWL

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-06-16

---

## 1. 今日速览

IronClaw 今日处于**高活跃开发期**，过去 24 小时内 Issues 更新 47 条（新开/活跃 34 条，关闭 13 条），PR 更新 50 条（待合并 27 条，已合并/关闭 23 条），无新版本发布。项目核心工作集中在 **Reborn WebUI 的 OAuth/凭证授权体系重构**、**附件/多模态视觉管线完善**以及**学习系统（Learning System）的初步搭建**三大方向。多个长期存在的 UX 痛点（授权跨线程失效、审批拒绝后无反馈、扩展安装流程碎片化）正在被系统性修复。整体项目健康度良好，社区贡献者活跃，但积压的待合并 PR 数量偏高（27 条），存在一定的 review 瓶颈。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 状态 | 说明 |
|---|---|---|
| [#4871](https://github.com/nearai/ironclaw/pull/4871) | ✅ 已合并 | **feat(attachments): 视觉模型图片附件支持** — 附件中的图片现在作为真正的多模态内容发送给支持视觉的模型，而非仅文本指针。这是 #4644 附件史诗的关键一步。 |
| [#4559](https://github.com/nearai/ironclaw/pull/4559) | ✅ 已合并 | **feat(traces): 通过邀请链接实现 Trace Commons 代理驱动入驻** — 用户粘贴单个邀请链接即可完成 Trace Commons 注册，替代了之前需要 ~15 个环境变量的繁琐流程。 |
| [#4780](https://github.com/nearai/ironclaw/pull/4780) | ✅ 已合并 | **Steer routine delivery through outbound targets** — 为 builtin.trigger_create 添加模型可见的投递目标选择指导，改进本地开发系统提示。 |
| [#4936](https://github.com/nearai/ironclaw/pull/4936) | ✅ 已合并 | **ci(bench): /benchmark 支持 --framework ironclaw-reborn** — CI 基准测试框架新增 reborn 运行时选择能力。 |

### 当前开放的关键 PR（待合并）

| PR | 说明 |
|---|---|
| [#4944](https://github.com/nearai/ironclaw/pull/4944) | **fix: 授权门拒绝后向模型反馈而非无限重试循环** — 修复 Reborn 中拒绝 OAuth/凭证授权后 run 静默取消、模型永远不被通知的严重 UX 问题。 |
| [#4939](https://github.com/nearai/ironclaw/pull/4939) | **fix: 凭证是所有者作用域而非线程作用域 (A+B+C)** — 修复凭证身份比较中 thread_id 泄漏问题，与 #4935 配套。 |
| [#4933](https://github.com/nearai/ironclaw/pull/4933) | **feat: WebChat v2 可下载项目文件** — 通用基于路径的项目文件系统读取 API，支持用户下载 Agent 生成的文件。 |
| [#4902](https://github.com/nearai/ironclaw/pull/4902) | **feat: OpenAI-compat 内联图片视觉支持** — /v1/chat/completions 上的 base64 image_url 内容部分现在可到达视觉模型。 |
| [#4941](https://github.com/nearai/ironclaw/pull/4941) | **feat: Slack 个人用户令牌工具** — 新增 slack_user_tool WASM 工具，使用 xoxp- 用户令牌，支持 search_messages 等 bot 令牌无法提供的能力。 |
| [#4937](https://github.com/nearai/ironclaw/pull/4937) + [#4938](https://github.com/nearai/ironclaw/pull/4938) | **reborn(learning): WS-1 + WS-2** — 学习系统第一、二阶段：记忆学习语义 + A/B 门控、学习 persona 和 /learn 表面。 |
| [#4841](https://github.com/nearai/ironclaw/pull/4841) | **fix: 消除 run-borking 终端错误** — 每个 run-终端错误现在要么被恢复，要么向用户解释，不再以不透明代码死亡。 |

**项目整体向前迈进：** 附件/多模态管线（#4644 史诗）已进入第 4 步（OpenAI-compat 视觉支持），凭证授权体系正在经历系统性重构（所有者作用域修复 + 跨线程持久化），学习系统从 0 到 1 启动。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论数 | 核心诉求 |
|---|---|---|
| [#4825](https://github.com/nearai/ironclaw/issues/4825) [CLOSED] | 3 | **"always allow" 审批跨线程持久化** — 用户在一个线程中批准的能力应在所有新线程中保持有效。已关闭，相关修复 PR #4939 和 #4935 正在推进。 |
| [#4908](https://github.com/nearai/ironclaw/issues/4908) | 3 | **Google Calendar 扩展显示 "Activate" 但已处于 ACTIVE 状态** — UI 状态不一致导致用户困惑。 |
| [#4907](https://github.com/nearai/ironclaw/issues/4907) | 2 | **Google OAuth 成功后 run 失败而非恢复执行** — OAuth 流程完成后原始 run 应自动恢复。 |
| [#4880](https://github.com/nearai/ironclaw/issues/4880) | 2 | **自动化代码审查与审查意见解决** — 定义 AI 审查员应检查什么 vs 人类审查员必须拥有什么。 |
| [#4764](https://github.com/nearai/ironclaw/issues/4764) | 2 | **拒绝 shell 审批后工具调用挂起且无用户反馈** — 用户点击 Deny 后应得到明确反馈。 |
| [#4761](https://github.com/nearai/ironclaw/issues/4761) | 2 | **Agent 在重复工具失败后停止而非恢复** — 需要更好的错误恢复机制。 |

### 分析

今日社区热点高度集中在 **Reborn 的授权/审批体验** 上。用户的核心诉求可以归纳为三点：
1. **持久性** — 授权和审批决策应跨线程、跨会话持久化（#4825、#4913、#4935）
2. **反馈透明性** — 拒绝或失败时应向用户和模型提供明确反馈，而非静默取消或无限循环（#4764、#4944）
3. **状态一致性** — UI 显示的状态应与实际授权状态一致（#4908、#4857、#4925）

---

## 5. Bug 与稳定性

### 🔴 严重（影响核心功能）

| Issue | 描述 | 已有 Fix PR |
|---|---|---|
| [#4907](https://github.com/nearai/ironclaw/issues/4907) | Google OAuth 成功后 run 失败而非恢复执行 | 无直接 PR，但 #4944 修复相关授权门拒绝循环问题 |
| [#4921](https://github.com/nearai/ironclaw/issues/4921) | Gmail 扩展授权成功后 run 立即失败，不产生任何回复 | 无 |
| [#4887](https://github.com/nearai/ironclaw/issues/4887) | Provider-backed MCP 工具审批恢复可能因 stale input_ref 失败 | 无 |
| [#4761](https://github.com/nearai/ironclaw/issues/4761) | Agent 在重复工具失败后停止而非恢复 | 无直接 PR，但 #4841 改进终端错误处理 |

### 🟡 中等（影响用户体验）

| Issue | 描述 | 已有 Fix PR |
|---|---|---|
| [#4942](https://github.com/nearai/ironclaw/issues/4942) | 工具调用失败在重新获取/重新加载前不显示 | 无 |
| [#4913](https://github.com/nearai/ironclaw/issues/4913) | Google Calendar 授权未跨对话复用 | 相关：[#4939](https://github.com/nearai/ironclaw/pull/4939)、[#4935](https://github.com/nearai/ironclaw/issues/4935) |
| [#4908](https://github.com/nearai/ironclaw/issues/4908) | Google Calendar 扩展状态显示不一致 | 无 |
| [#4857](https://github.com/nearai/ironclaw/issues/4857) | 干净状态下 NEAR AI provider 错误显示为 Active | 无 |
| [#4764](https://github.com/nearai/ironclaw/issues/4764) | 拒绝 shell 审批后工具调用挂起无反馈 | 相关：[#4944](https://github.com/nearai/ironclaw/pull/4944) |

### 🟢 低（UI/布局问题）

| Issue | 描述 |
|---|---|
| [#4926](https://github.com/nearai/ironclaw/issues/4926) | 展开 capabilities 会拉伸同一行所有卡片 |
| [#4923](https://github.com/nearai/ironclaw/issues/4923) | Logs/Docs 图标应替换为文本标签 |
| [#4915](https://github.com/nearai/ironclaw/issues/4915) | Automations 面板摘要卡片布局问题 — 已关闭 |
| [#4917](https://github.com/nearai/ironclaw/issues/4917) | 定时自动化从不运行 — 已关闭 |

---

## 6. 功能请求与路线图信号

| 方向 | Issue/PR | 信号强度 | 判断 |
|---|---|---|---|
| **附件/多模态管线** | [#4644](https://github.com/nearai/ironclaw/issues/4644) + [#4871](https://github.com/nearai/ironclaw/pull/4871) + [#4902](https://github.com/nearai/ironclaw/pull/4902) | 🟢🟢🟢 强 | 正在积极执行中，#4644 史诗已进入第 4 步（OpenAI-compat 视觉），下一步可能是通用附件跨渠道支持 |
| **凭证/授权体系重构** | [#4935](https://github.com/nearai/ironclaw/issues/4935) + [#4939](https://github.com/nearai/ironclaw/pull/4939) + [#4944](https://github.com/nearai/ironclaw/pull/4944) | 🟢🟢🟢 强 | 多个 PR 正在推进，所有者作用域修复 + 跨线程持久化 + 拒绝反馈，预计近期合并 |
| **学习系统** | [#4937](https://github.com/nearai/ironclaw/pull/4937) + [#4938](https://github.com/nearai/ironclaw/pull/4938) | 🟢🟢 中 | 刚启动，WS-1 + WS-2 已提交，设计文档已存在，路线图明确 |
| **Slack 用户令牌工具** | [#4941](https://github.com/nearai/ironclaw/pull/4941) | 🟢 中 | 新贡献者提交，功能明确，审查中 |
| **可下载项目文件** | [#4933](https://github.com/nearai/ironclaw/pull/4933) | 🟢 中 | 核心贡献者提交，作为未来文件系统导航的基础 |
| **自动化代码审查** | [#4880](https://github.com/nearai/ironclaw/issues/4880) | 🟡 探索 | 讨论阶段，尚未有 PR |
| **Automations 面板修复** | [#4915](https://github.com/nearai/ironclaw/issues/4915) [CLOSED] | ✅ 已解决 | 布局问题已修复 |

---

## 7. 用户反馈摘要

### 痛点

1. **授权体验碎片化且不可靠** — 多个用户报告扩展安装后不清楚下一步该做什么（[#4886](https://github.com/nearai/ironclaw/issues/4886)、[#4890](https://github.com/nearai/ironclaw/issues/4890)），Registry → Installed → Configure → Chat auth 的流程断裂。授权跨线程不持久（[#4825](https://github.com/nearai/ironclaw/issues/4825)、[#4913](https://github.com/nearai/ironclaw/issues/4913)）是最常被提及的痛点。

2. **静默失败** — 用户点击 Deny 后工具调用挂起且无任何反馈（[#4764](https://github.com/nearai/ironclaw/issues/4764)），run 被取消但模型永远不被通知（[#4944](https://github.com/nearai/ironclaw/pull/4944)），工具调用失败直到刷新才显示（[#4942](https://github.com/nearai/ironclaw/issues/4942)）。用户普遍期望**明确的反馈和恢复路径**。

3. **UI 状态误导** — 扩展显示 ACTIVE 但配置对话框仍显示 Activate（[#4908](https://github.com/nearai/ironclaw/issues/4908)），干净环境错误地将 NEAR AI 标记为 Active（[#4857](https://github.com/nearai/ironclaw/issues/4857)），NEAR AI MCP 显示 "SETUP NEEDED" 尽管已就绪（[#4925](https://github.com/nearai/ironclaw/issues/4925)）。

4. **审批疲劳** — 简单的只读 GitHub 请求需要多次审批提示（[#4854](https://github.com/nearai/ironclaw/issues/4854)），用户期望更智能的审批聚合或更细粒度的控制。

### 满意点

- 附件/多模态视觉支持的快速推进（#4871 已合并）表明核心功能迭代速度快
- Trace Commons 入驻流程从 ~15 个环境变量简化为单个邀请链接（#4559 已合并），用户体验显著改善

### 典型使用场景

- 用户通过 Google Calendar/Gmail 扩展管理日程和邮件（高频场景，多个相关 bug）
- 用户通过 GitHub 扩展分析仓库状态
- 用户通过 Slack 工具进行团队沟通
- 用户期望 Agent 能跨对话保持学习和记忆（学习系统需求）

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue

| Issue | 创建日期 | 状态 | 说明 |
|---|---|---|---|
| [#4644](https://github.com/nearai/ironclaw/issues/4644) | 2026-06-09 | OPEN (P1) | **通用附件跨渠道支持** — 标记为 suggested_P1，虽然子 PR 在推进，但父 issue 本身尚未关闭，需要整体跟踪 |
| [#4761](https://github.com/nearai/ironclaw/issues/4761) | 2026-06-11 | OPEN | **Agent 工具失败后停止** — 影响稳定性，无直接 fix PR |
| [#4764](https://github.com/nearai/ironclaw/issues/4764) | 2026-06-11 | OPEN | **拒绝审批后无反馈** — 虽然 #4944 部分相关，但此 issue 本身尚未关闭 |

### ⚠️ 长期未合并的 PR

| PR | 创建日期 | 状态 | 说明 |
|---|---|---|---|
| [#4876](https://github.com/nearai/ironclaw/pull/4876) | 2026-06-14 | OPEN | **dependabot: 43 个依赖更新** — 包括 agent-client-protocol 0.10.4→0.14.0 等重大版本跳跃，需要仔细审查 |
| [#4841](https://github.com/nearai/ironclaw/pull/4841) | 2026-06-13 | OPEN | **消除 run-borking 失败** — XL 大小，核心稳定性改进 |
| [#4787](https://github.com/nearai/ironclaw/pull/4787) | 2026-06-12 | OPEN | **Barcelona Hackathon fork** — 标记 NO MERGE，但包含 nova-submit 扩展等可能有价值的贡献 |
| [#3705](https://github.com/nearai/ironclaw/pull/3705) | 2026-05-16 | OPEN | **dependabot: rand 0.8.5→0.8.6** — 超过一个月未合并的依赖更新 |
| [#3707](https://github.com/nearai/ironclaw/pull/3707) | 2026-05-16 | OPEN | **dependabot: jsonwebtoken 9.3.1→10.3.0** — 超过一个月，涉及安全相关依赖 |
| [#3708](https://github.com/nearai/ironclaw/pull/3708) | 2026-05-16 | OPEN | **chore: release** — 超过一个月，包含 ironclaw_common 0.4.2→0.5.0 API 破坏性变更 |

### 建议

1. **优先审查 #4944 和 #4939** — 这两个 PR 直接修复今日最热门的授权体验问题，合并后可关闭多个相关 issue
2. **清理 dependabot 积压** — #3705、#3707、#3708 已超过一个月，建议批量处理或关闭
3. **关注 #4876 依赖更新** — agent-client-protocol 的大版本跳跃（0.10.4→0.14.0）可能引入破坏性变更，需要专项审查
4. **考虑关闭或合并 #4761 和 #4764** — 如果 #4944 和 #4841 已覆盖其场景，可关闭以清理 backlog

---

*日报生成时间：2026-06-16 | 数据来源：GitHub nearai/ironclaw | 分析：OWL*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-06-16

---

## 1. 今日速览

LobsterAI 今日活跃度**中等偏高**，共产生 2 条 Issue 更新和 11 条 PR 更新，无新版本发布。项目当前处于**密集迭代期**，核心工作集中在语音输入（voice-input）子系统的重构与稳定化——多个 PR 在同一天内完成合并，涉及实时 ASR 流程精简、取消守卫修复和 UI 打磨。同时，Artifacts 模块的文档分享与预览能力也在快速推进。依赖维护方面，dependabot 批量提交了 5 个 CI/GitHub Actions 工具链升级 PR，均处于待合并状态。整体来看，项目工程节奏健康，但存在少量积压的用户体验 Issue 长期未响应。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日共有 **5 个 PR 合并/关闭**，推进了以下关键方向：

### 🔊 语音输入子系统重构（核心主线）

| PR | 作者 | 摘要 |
|---|---|---|
| [#2160](https://github.com/netease-youdao/LobsterAI/pull/2160) | btc69m979y-dotcom | **fix(voice-input): keep only realtime ASR** — 移除短音频上传 ASR 流程和 `asr:recognize` IPC 接口，Cowork 语音输入统一走实时 ASR；删除设置中的模式切换开关和遗留的 `voiceInput.recognitionMode` 配置项。这是一次**破坏性简化**，彻底收束了语音识别的技术路径。 |
| [#2162](https://github.com/netease-youdao/LobsterAI/pull/2162) | liuzhq1986 | **fix(cowork): preserve voice input cancel guard after merge** — 解决上述重构合并冲突，保留 release 分支的实时 ASR 流，同时恢复草稿所有权、过期回调守卫、会话切换取消和诊断日志。 |
| [#2163](https://github.com/netease-youdao/LobsterAI/pull/2163) | btc69m979y-dotcom | **feat(voice-input): refine dictation recording UI** — 优化 Cowork 听写录音体验和 ASR 配额处理，新增内存级 ASR 配额切片和共享常量，支持跨渲染进程的每日配额记忆与懒重置。面向 2026.6.11 release 分支。 |

**小结：** 语音输入模块在一天内完成了"架构精简 → 合并冲突修复 → UI/配额打磨"的完整闭环，是该版本分支最重要的功能推进。

### 📄 Artifacts 文档分享与预览

| PR | 作者 | 摘要 |
|---|---|---|
| [#2159](https://github.com/netease-youdao/LobsterAI/pull/2159) | liugang519 | **feat(artifacts): 支持文档 Artifact 分享与预览优化** — 新增 `document_file` 分享来源，支持 DOCX、PPTX、XLSX、PDF、CSV、TSV 六种文档的打包、类型校验和大小限制；优化 DOCX 分页、PDF 原生预览兜底、表格自动列宽渲染；补齐 pdfjs 字体与 cMap 静态资源构建配置和 CSP 调整。 |

**小结：** Artifacts 面板的文档能力从代码/图片扩展到了办公文档，显著拓宽了使用场景。

### 🔧 其他

| PR | 作者 | 摘要 |
|---|---|---|
| [#2161](https://github.com/netease-youdao/LobsterAI/pull/2161) | fisherdaddy | **chore: update about** — 更新关于页面信息。 |

---

## 4. 社区热点

今日 Issue 和 PR 的评论数均较低（每条仅 0-1 条评论），无显著热点讨论。以下为**值得关注**的条目：

### 🔥 语音输入功能重构主线（PR #2160 + #2162 + #2163）

- **链接：** [#2160](https://github.com/netease-youdao/LobsterAI/pull/2160) · [#2162](https://github.com/netease-youdao/LobsterAI/pull/2162) · [#2163](https://github.com/netease-youdao/LobsterAI/pull/2163)
- **分析：** 三个 PR 在同一天内密集合并，说明团队正在为 **2026.6.11 release 分支**做最后的语音输入功能收束。从"双模式并存"到"仅保留实时 ASR"的决策，反映出团队在**降低维护复杂度**和**统一用户体验**上的取舍。ASR 配额管理的内存化改造也暗示该功能即将面向更广泛的用户群体开放。

### 📌 系统通知功能请求（PR #1428）

- **链接：** [#1428](https://github.com/netease-youdao/LobsterAI/pull/1428)
- **分析：** 该 PR 提议在会话完成/报错时推送系统通知（窗口未聚焦时），对标 Claude Code、Cursor 等竞品的体验。PR 自 2026-04-03 创建以来长期处于 OPEN 状态，说明该需求已被社区提出但尚未进入核心排期。

---

## 5. Bug 与稳定性

### 🐛 Bug 报告（共 2 条，均为 stale 状态）

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 **中** | [#1426](https://github.com/netease-youdao/LobsterAI/issues/1426) | 上传本地技能后无成功提示，技能列表未刷新 | OPEN, stale | 无 |
| 🔴 **中** | [#1427](https://github.com/netease-youdao/LobsterAI/issues/1427) | 可重复添加同名技能，导致技能列表出现重复项 | OPEN, stale | 无 |

**分析：** 两个 Bug 均由同一用户（devilszy）于 2026-04-03 报告，最后一次更新在 2026-06-15（被 stale 机器人标记），说明**超过两个月无人响应**。问题涉及技能管理模块的前端反馈逻辑和后端去重校验，属于用户体验层面的中等优先级缺陷。目前均无关联的修复 PR。

---

## 6. 功能请求与路线图信号

| 方向 | 来源 | 描述 | 信号强度 |
|---|---|---|---|
| **语音输入统一为实时 ASR** | PR #2160（已合并） | 移除短音频上传模式，仅保留实时 ASR | ✅ 已落地 |
| **ASR 配额管理** | PR #2163（已合并） | 内存级每日配额追踪与懒重置 | ✅ 已落地 |
| **Artifacts 文档分享** | PR #2159（已合并） | 支持 DOCX/PPTX/XLSX/PDF/CSV/TSV | ✅ 已落地 |
| **会话完成系统通知** | PR #1428（OPEN, stale） | 窗口未聚焦时推送完成/错误通知 | ⏳ 待排期 |
| **技能管理去重与反馈** | Issue #1426, #1427 | 上传成功提示 + 重复添加拦截 | ❌ 未启动 |

**路线图判断：** 下一版本（预计 2026.6.11 分支）的核心卖点将是**语音输入体验升级**和**Artifacts 文档能力扩展**。系统通知功能虽已提交 PR 但长期未合并，可能需要在 API 设计或权限模型上进一步对齐。

---

## 7. 用户反馈摘要

从今日更新的 Issue 和 PR 中，可提炼以下用户痛点：

### 😤 不满意 / 痛点

1. **技能管理体验粗糙** — 用户上传本地技能后没有任何成功反馈，技能列表也不会自动刷新（[#1426](https://github.com/netease-youdao/LobsterAI/issues/1426)）。这是一个典型的**缺少前端状态反馈**问题，导致用户不确定操作是否生效。
2. **技能重复添加** — 同名技能可以被反复添加，列表中产生多个重复项（[#1427](https://github.com/netease-youdao/LobsterAI/issues/1427)）。说明后端缺少唯一性校验，前端也缺少添加前的存在性检查。
3. **后台会话状态不可见** — 用户在后台运行会话时必须手动切回窗口才能知道是否完成或出错，与 Claude Code、Cursor 等竞品存在体验差距（[#1428](https://github.com/netease-youdao/LobsterAI/pull/1428)）。

### ✅ 满意 / 正向信号

- 语音输入模块的快速迭代（一天内 3 个 PR 合并）表明开发团队在积极响应用户对语音交互体验的期待。
- Artifacts 扩展到办公文档格式，说明产品在向**更广泛的生产力场景**延伸。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者关注：

| 类型 | 链接 | 创建时间 | 最后更新 | 状态 | 建议 |
|---|---|---|---|---|---|
| Issue | [#1426](https://github.com/netease-youdao/LobsterAI/issues/1426) — 技能上传无反馈 | 2026-04-03 | 2026-06-15 | OPEN, stale | 超过 2 个月未响应，建议确认是否可复现并排入修复计划 |
| Issue | [#1427](https://github.com/netease-youdao/LobsterAI/issues/1427) — 技能重复添加 | 2026-04-03 | 2026-06-15 | OPEN, stale | 同上，建议与 #1426 合并处理（同属技能管理模块） |
| PR | [#1428](https://github.com/netease-youdao/LobsterAI/pull/1428) — 会话完成系统通知 | 2026-04-03 | 2026-06-15 | OPEN, stale | 功能设计合理，建议 review 后决定是否合并或请求作者更新 |
| PR | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Electron 依赖升级 (40→42) | 2026-04-02 | 2026-06-15 | OPEN | 大版本跨越升级，建议尽快 review 兼容性后合并或关闭 |

---

> **项目健康度评估：** 🟡 **良好，需关注积压**
> - 核心功能迭代活跃，语音输入和 Artifacts 模块进展显著
> - 依赖维护（dependabot）PR 积压 5 个，建议定期批量处理
> - 用户体验类 Bug 长期 stale，建议设置 SLA 响应机制

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-06-16

---

## 1. 今日速览

Moltis 今日整体活跃度较低：过去 24 小时内无新 Issue 提交，无新版本发布，社区反馈近乎静止。今日共有 **2 个 Pull Request** 处于开放状态，均来自同一贡献者 `gptme-thomas`，聚焦于外部 Agent 模型选择与聊天上下文注入两类功能扩展。项目目前处于**功能迭代期**，但尚未看到合并动作，维护者可能需要时间审查。Issue 侧接近零增量，说明用户端暂未暴露新的稳定性问题。

---

## 2. 版本发布

> 今日无新版本发布，本节省略。

---

## 3. 项目进展

今日没有合并或关闭的 PR，但有 **2 个开放中的 PR** 值得关注：

| PR | 核心方向 | 状态 |
|---|---|---|
| **#1125** [Support model and effort selection for external agents](https://github.com/moltis-org/moltis/pull/1125) | 为外部 Agent Provider 增加 `/command model` 级别的模型与 `effort`（推理力度）选择能力，支持在 `external-agent/<kind>` 配置中声明 `models = [...]` 和 `efforts = [...]`，并持久化元数据 | Open |
| **#1124** [Add context command support for chat turns](https://github.com/moltis-org/moltis/pull/1124) | 新增可选项 `chat.context_command`，在每一轮对话前自动运行子命令并将其 stdout 自动注入 prompt context，降低用户手动粘贴运行时上下文的操作成本 | Open |

这两个 PR 均指向**提升用户对对话模型的细粒度控制能力**，属于 Moltis 作为个人 AI 助手场景体验的重要改进，但当前均未进入合并阶段。

---

## 4. 社区热点

由于今日 Issue 为零，且 PR 评论数为 `undefined`（暂无公开讨论数据），暂无法依据评论量或 👍 反应判定热点议题。PR #1125 与 #1124 均为新功能贡献，但尚未形成社区讨论。建议持续观察未来 48 小时内是否出现评论与评审意见。

---

## 5. Bug 与稳定性

今日无新 Bug 报告、崩溃或回归问题。积压中的开放 Issue 为零，项目当前在可见范围内**稳定性表现正常**。

---

## 6. 功能请求与路线图信号

从今日 PR 的功能方向可提炼出以下**路线图信号**：

| 信号 | 来源 |
|---|---|
| 允许用户为**外部 Agent Provider 选择与指定推理力度（effort）** | PR #1125 |
| **聊天上下文自动化注入**，减少手动复制粘贴 | PR #1124 |

这两条信号说明社区与贡献者正将 Moltis 向**更完整的"可编排 AI 工作环境"** 演进，模型选择与上下文可组合性是下一阶段的关键能力建设。

---

## 7. 用户反馈摘要

今日无用户 Issue 或评论可提炼，暂无法提供具体痛点与使用场景分析。建议关注下一轮 Issue 或 Discussion 更新后再行补充。

---

## 8. 待处理积压

当前可见 Issue/PR 均为**当日新增并停留在 Open 状态**，尚无长期未响应的重要积压。建议维护者后续安排时间进行 Code Review，避免 PR 久悬造成贡献者体验下降。

---

**总结**：Moltis 6 月 16 日处于低活跃区间，无 Bug 暴露，有 2 个功能型 PR 开放等待审查。若能在 48 小时内完成评审与合并，将显著增强外部 Agent 的模型可控性与聊天上下文自动化能力。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 项目动态日报

**日期：2026-06-16**

---

## 1. 今日速览

CoPaw 今日社区活跃度维持高水位：过去24小时内 Issues 与 PR 各更新 50 条，开/活跃 Issue 31 条、关闭 19 条，待合并 PR 15 条、已合并/关闭 35 条。今日无新版本发布，项目仍处于 v1.1.11.post2 的迭代消化阶段。值得关注的是，多个方向并行推进：上下文管理可视化（token 用量显示）、桌面端稳定性、用户输入队列、模型页面重构等功能均有 PR 落地或处于活跃审查中。社区反馈集中在附件下载、上下文压缩准确性、插件依赖安装崩溃等问题，反映出当前阶段稳定性与体验打磨仍是用户核心诉求。Project Health Score: **7.5/10** —— 活跃度高但 Bug 积压明显，需警惕。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日共有 **35 个 PR 被合并或关闭**，以下为按重要性筛选的关键进展：

| # | PR | 状态 | 说明 |
|---|-----|------|------|
| 1 | [#5130](https://github.com/agentscope-ai/CoPaw/pull/5130) feat(chat): add per-turn token and context usage popover | ✅ 已合并 | 控制台聊天界面新增每轮 Token 和上下文用量悬浮提示。`TokenRecordingModelWrapper` 累积会话级 prompt/completion token，后端通过 SSE 事件输出，前端 ResponseCard 新增环形进度条 + popover。这是 token 可视化链路的关键中间层，为后续状态栏总览打基础。 |
| 2 | [#4310](https://github.com/agentscope-ai/CoPaw/pull/4310) feat(console): show context usage | ✅ 已合并 | 在聊天头部渲染紧凑的上下文用量指示器，带正常/警告/危险三级颜色分级。记录每次回复后的最新上下文窗口用量并暴露到已完成 SSE 事件。Fixes #4284。 |
| 3 | [#4433](https://github.com/agentscope-ai/CoPaw/pull/4433) Add token usage info output in each conversation | ✅ 已合并 | 每轮对话末尾添加悬浮 TokenUsageBadge（右下角浮层），支持流式/停止/会话重载三场景下数字同步更新。 |
| 4 | [#5192](https://github.com/agentscope-ai/CoPaw/pull/5192) fix(desktop): guard against Windows console crash and self-kill commands | ✅ 已合并 | 修复 Windows 终端下 Rich console.print() 抛出 OSError Errno 22 导致崩溃的问题，同时防护自我终止命令。 |
| 5 | [#5146](https://github.com/agentscope-ai/CoPaw/pull/5146) fix(skill): Improve skill-slash-inject and display | ✅ 已合并 | 技能斜杠调用时使用 `<skill>`/`</skill>` 块注入而非全文展开，Console 界面不再显示 skill.md 全文。Fixes #5031。 |
| 6 | [#5123](https://github.com/agentscope-ai/CoPaw/pull/5123) feat(skill): Update skill-market, include qwenpaw platform, improve UI | ✅ 已合并 | Skill 市场新增 QwenPaw 平台端点，加入分类与技能预览功能，UI 改进。 |
| 7 | [#5150](https://github.com/agentscope-ai/CoPaw/pull/5150) feat(yuanbao): add bot message filtering and environment variable support | ✅ 已合并 | 元宝渠道新增 `accept_bot_messages` 配置和 bot 消息检测逻辑，同时支持环境变量注入。 |
| 8 | [#4495](https://github.com/agentscope-ai/CoPaw/pull/4495) fix(cron): return 422 for cron validation | ✅ 已合并 | Cron 定时任务校验由返回 500 改为 422，并支持本地化操作提示。 |
| 9 | [#5067](https://github.com/agentscope-ai/CoPaw/pull/5067) feat(driver): introduce Agent OS Driver — unified abstraction | 🔒 已关闭 | 引入 Agent OS Driver 统一抽象层以适配 MCP/A2A/ACP 等外部能力调用协议。（已关闭，可能另开 PR 推进） |

**里程碑判断：** Token 用量可视化已形成完整数据链路（后端追踪 → SSE 事件 → 前端浮层 + 状态栏），标志着用户长期诉求的"上下文透明度"问题在架构层面基本解决。桌面端 Windows 稳定性也取得了明确修复。

---

## 4. 社区热点

### Issue 热度排行（按评论数）

**🥇 [#1911](https://github.com/agentscope-ai/CoPaw/issues/1911) [channel] 小艺 — 22 条评论**
作者在华为小艺开放平台成功配置了 CoPaw 频道，手机端使用时频繁返回"开小差/网络拥堵"，且手机端对话未出现在 CoPaw 对话列表中（仅开放平台测试端可见）。这暴露了一个跨平台的 session 同步问题：CoPaw 的对话列表可能未将手机端 session 与开放平台 session 统一关联。22 条评论的高讨论度说明此问题影响范围广，涉及华为生态集成这一新兴渠道。用户诉求：搞清楚是 CoPaw 的 session 路由问题还是小艺平台侧的消息投递问题。

**🥈 [#5140](https://github.com/agentscope-ai/CoPaw/issues/5140) v1.1.11.post2 附件下载仍报 404 — 6 条评论**
纯文本（txt/md/py）下载已修复，但 docx/pdf 等二进制文件下载报 404。说明后端文件服务对 MIME 类型或 Content-Disposition 的处理仍有缺陷。6 条持续评论表明影响用户日常工作流。

**🥉 [#5181](https://github.com/agentscope-ai/CoPaw/issues/5181) 插件依赖安装导致 cmd 窗口持续弹窗 — 5 条评论**
v1.1.11.post2 插件系统 pip install 时未隐藏 cmd 窗口，网络不稳定时陷入死循环。这是典型的 Windows 桌面体验问题，建议采用 subprocess.CREATE_NO_WINDOW 标志或类似方案。

**[#5171](https://github.com/agentscope-ai/CoPaw/issues/5171) 上下文压缩保留缺少按条数保留 — 4 条评论**
人设文件 token 大于压缩阈值时，上下文被完全压缩为 0，模型无法继续任务。这是上下文压缩策略的安全缺失：缺少"至少保留 N 条/保留 system prompt"的硬约束。

### PR 热度排行

**[#5212](https://github.com/agentscope-ai/CoPaw/pull/5212) feat(chat): add wide mode toggle** — 今日新开，响应 [#5211](https://github.com/agentscope-ai/CoPaw/issues/5211) 用户反馈的桌面版布局比例不合理问题。

**[#5203](https://github.com/agentscope-ai/CoPaw/pull/5203) Models Page Overhaul — Provider Aggregation & Layout Redesign** — 模型配置页全面重构，包含 Unified Card UI、选项卡布局、新增阿里云国际版 Token Plan Provider。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 Critical / 影响核心功能

| Issue | 问题 | 版本 | Fix PR |
|-------|------|------|--------|
| [#5171](https://github.com/agentscope-ai/CoPaw/issues/5171) | 上下文压缩将上下文清零，任务完全中断 | v1.1.11 | ❌ 无 |
| [#5211](https://github.com/agentscope-ai/CoPaw/issues/5211) | 桌面版 UI 布局比例不合理，顶部导航占用过多空间 | v1.1.11.post2 | ✅ [#5212](https://github.com/agentscope-ai/CoPaw/pull/5212)（今日新开） |

### 🟠 Major / 影响工作流

| Issue | 问题 | 版本 | Fix PR |
|-------|------|------|--------|
| [#5140](https://github.com/agentscope-ai/CoPaw/issues/5140) | docx/pdf 二进制附件下载报 404 | v1.1.11.post2 | ❌ 无（已有 PR [#5199](https://github.com/agentscope-ai/CoPaw/issues/5199) 关联但似乎未形成修复） |
| [#5181](https://github.com/agentscope-ai/CoPaw/issues/5181) | 插件 pip install 死循环 + cmd 窗口持续弹窗 | v1.1.11.post2 | ❌ 无 |
| [#5162](https://github.com/agentscope-ai/CoPaw/issues/5162) | 对话思考逻辑进入死循环 | 未标注 | ❌ 无 |

### 🟡 Moderate / 功能异常但有 workaround

| Issue | 问题 | 版本 | Fix PR |
|-------|------|------|--------|
| [#5199](https://github.com/agentscope-ai/CoPaw/issues/5199) | 1.1.11post2 对话中发送附件有时正常有时异常 | v1.1.11.post2 | 🔒 Closed（@renzhong424 提交，自身关闭，可能已复现后确认未修复） |
| [#5137](https://github.com/agentscope-ai/CoPaw/issues/5137) | 向量模型记忆搜索配置丢失（未展开卡片时保存） | v1.1.11 | ✅ 已关闭（已有修复 PR） |
| [#5122](https://github.com/agentscope-ai/CoPaw/issues/5122) | 上下文压缩统计值与实际 API 输入不符（技能/MCP 引入额外膨胀） | v1.1.11 | ❌ 无 |

### 🟢 Minor / 体验问题

| Issue | 问题 |
|-------|------|
| [#5183](https://github.com/agentscope-ai/CoPaw/issues/5183) | 宠物功能在 Wayland 桌面上无法使用 |
| [#5166](https://github.com/agentscope-ai/CoPaw/issues/5166) | Python 3.13 安装 TeamChat 插件失败（`imghdr` 模块已在 3.13 移除） |
| [#5184](https://github.com/agentscope-ai/CoPaw/issues/5184) | v1.1.11.post2 本地模型 Provider 不显示 |
| [#5161](https://github.com/agentscope-ai/CoPaw/issues/5161) | 长对话后 QwenPaw 无响应 |

---

## 6. 功能请求与路线图信号

### 高优先级功能请求（已有 PR 跟进或获强社区支持）

| Issue | 功能需求 | 状态 | 信号强度 |
|-------|----------|------|----------|
| [#4284](https://github.com/agentscope-ai/CoPaw/issues/4284) | 对话窗口实时上下文用量显示 | ✅ 已实现 | PR [#5130](https://github.com/agentscope-ai/CoPaw/pull/5130) + [#4310](https://github.com/agentscope-ai/CoPaw/pull/4310) + [#4433](https://github.com/agentscope-ai/CoPaw/pull/4433) 今日全部合并 |
| [#5158](https://github.com/agentscope-ai/CoPaw/pull/5158) | 对话输入队列（不等上一轮完成即可输入下一条） | 🔄 开发中 | 对标 openclaw 体验，PR 标题 `[Not Ready]`，尚未可审查 |
| [#5063](https://github.com/agentscope-ai/CoPaw/issues/5063) | 集成 Headroom 作为可选上下文压缩层（减少 60–95% token） | 📋 无 PR | 需求明确但实现复杂度高，可能需要数周调研 |
| [#5025](https://github.com/agentscope-ai/CoPaw/issues/5025) | submit_to_agent 会话文件路径 Bug | 📋 无 PR | 有明确的根因（session file path 中 session_id 未 await），修复难度低 |

### 中等优先级

| Issue | 功能需求 |
|-------|----------|
| [#3366](https://github.com/agentscope-ai/CoPaw/issues/3366) | Token 消耗实时显示 + 预算警告（已合并，功能完整） |
| [#4647](https://github.com/agentscope-ai/CoPaw/issues/4647) | 每条回复底部显示 token speed/usage（已合并） |
| [#5167](https://github.com/agentscope-ai/CoPaw/issues/5167) | 飞书 CardKit 流式卡片长回复体验优化（从逐字吐到段落级更新） |
| [#5164](https://github.com/agentscope-ai/CoPaw/issues/5164) | 完善桌面版系统托盘/开机自启/后台常驻 |

### 路线图信号解读

下一版本的主题方向可归纳为：**① 上下文管理从"被动压缩"走向"主动可视可控"**（token 用量显示链路的完善标志着这一转型），**② 桌面端体验系统性补强**（Windows 稳定性、UI 布局、托盘常驻、启动速度），**③ 用户交互模型向异步化/队列化演进**（输入队列对标 openclaw）。

---

## 7. 用户反馈摘要

### 痛点（按提及频率）

1. **附件传输不稳定**（[#5140](https://github.com/agentscope-ai/CoPaw/issues/5140)、[#5199](https://github.com/agentscope-ai/CoPaw/issues/5199)）：跨版本的持续回归问题。最早 v1.1.11 纯文本无法下载 → post1 修复纯文本 → post2 二进制仍然 404 → 时好时坏。核心用户对文件传输的可靠性需求强烈。

2. **上下文"黑盒"感正在缓解**（[#4284](https://github.com/agentscope-ai/CoPaw/issues/4284)、[#5122](https://github.com/agentscope-ai/CoPaw/issues/5122)、[#5171](https://github.com/agentscope-ai/CoPaw/issues/5171)）：用户对 token 用量的可见性需求极高，尤其在挂载技能和 MCP 的服务型 Agent 中，上下文膨胀难以预期。今天 PR 集中合并意味着这一痛点正在被系统性解决，但压缩准确性和统计值可信度仍有疑问。

3. **Windows 桌面体验是短板**（[#5181](https://github.com/agentscope-ai/CoPaw/issues/5181)、[#5211](https://github.com/agentscope-ai/CoPaw/issues/5211)、[#5192](https://github.com/agentscope-ai/CoPaw/pull/5192)）：cmd 弹窗、UI 布局浪费空间、终端兼容性崩溃——Windows 用户群的体验打磨需求迫切。

4. **渠道集成深度不足**（[#1911](https://github.com/agentscope-ai/CoPaw/issues/1911)、[#5190](https://github.com/agentscope-ai/CoPaw/issues/5190)）：华为小艺、企业微信等渠道的 session 管理、访问控制审批流程存在产品化缺口。

### 满意信号

- Token 用量可视化被用户与 openclaw、HerMES Agent 对标，正面反馈显示 CoPaw 正追齐业界体验基准。
- Skill 市场平台整合（[#5123](https://github.com/agentscope-ai/CoPaw/pull/5123)）获用户对插件生态建设的认可。

### 关键使用场景

从 issues 内容推断：**开发者调试型 Agent**（需要精准感知 token 开销和上下文状态）和**工作流生产型 Agent**（插件多、技能多、渠道多、需稳定运行）是高频使用场景。

---

## 8. 待处理积压

以下长期未响应或处于阻塞状态的重要事项，建议维护者关注：

| # | Issue/PR | 等待时间 | 风险 |
|---|---------|----------|------|
| 1 | [#5171](https://github.com/agentscope-ai/CoPaw/issues/5171) 上下文压缩清零问题 | 3 天无响应 | 🔴 **阻塞型 Bug**：任何使用人设文件且触发压缩的用户都会受影响。需紧急添加 "minimum_keep" 约束。 |
| 2 | [#5140](https://github.com/agentscope-ai/CoPaw/issues/5140) 附件 404 | 4 天无 fix | 🟠 跨平台文件传输基础能力缺陷，多版本迭代未根治。 |
| 3 | [#5181](https://github.com/agentscope-ai/CoPaw/issues/5181) cmd 死循环 | 2 天无响应 | 🟠 Windows 用户体验灾难级问题。修复方案明确（`CREATE_NO_WINDOW`），成本低。 |
| 4 | [#5025](https://github.com/agentscope-ai/CoPaw/issues/5025) submit_to_agent 路径 Bug | 7 天无响应 | 🟡 根因明确（session_id 未 await），修复难度低，但影响后台任务提交可靠性。 |
| 5 | [#4900](https://github.com/agentscope-ai/CoPaw/pull/4900) Decouple plugin loader from agent startup | 14 天 Open | 🟡 frozen 环境下插件系统完全不可用，影响 PyInstaller/Tauri 打包用户。 |
| 6 | [#1911](https://github.com/agentscope-ai/CoPaw/issues/1911) 小艺频道 | 88 天 Open | 🔴 华为生态集成的标志性 Issue，22 条评论社区关注度高，至今未定位根因，存在流失华为用户群风险。 |
| 7 | [#5063](https://github.com/agentscope-ai/CoPaw/issues/5063) Headroom 集成 | 6 天无响应 | 📋 上下文压缩 60–95% token 的潜力方案，适合作为中远期技术预研方向。 |

---

*日报由 OWL 自动生成 | 数据来源：GitHub agentscope-ai/CoPaw | 生成时间：2026-06-16*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-16

> 📊 数据来源：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) · 覆盖时段：2026-06-15 ~ 2026-06-16

---

## 一、今日速览

ZeroClaw 过去 24 小时共处理 **50 条 Issue 更新**（新开/活跃 46 条，已关闭 4 条）和 **50 条 PR 更新**（待合并 47 条，已合并/关闭 3 条），无新版本发布。活跃度处于**高位运行**：Issue 与 PR 的吞吐量均维持在 50 条/天级别，且大量 RFC、架构级 Issue 与 CI 安全加固提案同时推进，表明项目正处于 **v0.8.x 收尾 → v0.9.0 冲刺**的关键窗口期。关闭的 4 条 Issue 中有 2 条为高优先级安全/权限类问题（[#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683)、[#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542)），已有对应修复 PR 跟进，整体健康度良好。待合并 PR 队列积压 47 条，需关注审查带宽。

---

## 二、版本发布

**无新版本发布。**

---

## 三、项目进展

### 1. 多智能体路由架构（Multi-Agent Routing）

Issue [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767)（6 评论，9 👍，多标签：agent/config/gateway/memory/runtime/security）是今日讨论最热的需求，诉求为"一个 Gateway 内运行多个隔离 Agent（独立 workspace + agentDir + sessions），配合多通道账户绑定入站路由"。配套的 RFC [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) 进一步定义了 A2A Agent Discovery（`/.well-known/agent-card.json`）协议，处于 `status:accepted`。这是 ZeroClaw 从单智能体向**多智能体编排平台**演进的核心路线图信号。

### 2. 安全加固三连提案（同一天 2026-06-15 提交）

| Issue | 标签 | 摘要 |
|---|---|---|
| [#7675](https://github.com/zeroclaw-labs/zeroclaw/issues/7675) | RFC, security, CI | 供应链扫描 + provenance + SBOM 生成的加固 CI 流水线 |
| [#7674](https://github.com/zeroclaw-labs/zeroclaw/issues/7674) | RFC, security, wasm | WebAssembly 优先，彻底消除 Node.js 构建/运行时依赖 |
| [#7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673) | RFC, runtime, provider | 原生上下文压缩作为 Provider 管道装饰器 |

三项提案均由 ConYel 于同日在 v0.9.0 窗口期内提交，指向**供应链安全与运行时瘦身**两大主题，已进入 `needs-maintainer-review`。

### 3. v0.8.1 / v0.9.0 路线图 Tracker 活跃

- [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)：v0.8.1 集成/通道/Provider/工具队列追踪器
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)：v0.9.0 认证、安全加固、破坏性变更追踪器

两者互相配合，形成从 v0.8.x 缺陷收尾到 v0.9.0 架构升级的双轨推进。

### 4. 驱动层修复进展明显

今日合并/关闭的 PR 与 Issue 涉及多个高优先级修复：

- **skill_manage patch 冷却绕过** [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683)（已关闭）— `SkillImprover` 存在单元测试但生产代码未调用，已修复
- **Gateway WebSocket ask_user 崩溃** [#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542)（已关闭）— WebSocket 会话中 `ask_user` 工具即刻报 "Channel closed"，已修复
- **Quickstart 裸字符串** [#7005](https://github.com/zeroclaw-labs/zeroclaw/issues/7005)（已关闭）— 向导文本未走国际化

---

## 四、社区热点

### 🔥 最热 Issue

**[#2767 — Multi-Agent Routing](https://github.com/zeroclaw-labs/zeroclaw/issues/2767)**
6 条评论 · 9 👍 · 标签: agent/config/gateway/memory/runtime/security/priority:p2
这是当前社区互动量最高的功能请求，用户希望 ZeroClaw 支持类似 OpenClaw 的多智能体路由——在单个 Gateway 中运行多个隔离 Agent，并绑定不同通道账户。9 个 👍 说明需求强烈。

### 🔥 最具争议

**[#7674 — RFC: WebAssembly-first, eliminate Node.js](https://github.com/zeroclaw-labs/zeroclaw/issues/7674)**
彻底移除 Node.js 依赖（web UI 构建时 + npm 生态），风险标签为 `high`，涉及架构层面变更。Rust 社区对此方向通常高度支持，但实操复杂度极高（需替代 Vite/webpack 构建链）。

### 📌 高信号 RFC 提案

- **[#7673 — 原生上下文压缩装饰器](https://github.com/zeroclaw-labs/zeroclaw/issues/7673)**：解决 LLM 每次请求携带完整系统提示 + 聊天历史的 token 浪费问题，3 条评论，正在寻求维护者评审
- **[#7733 — mcp_bundles 运行时未生效](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)**：配置解析正常但运行时静默忽略 Per-Agent MCP 作用域，属**安全相关**的 "silent no-op"，S2 级别，尽管仅 1 条评论但影响面可能很广

---

## 五、Bug 与稳定性

按严重程度降序排列：

| # | Issue | 严重级别 | 状态 | 已有 Fix PR |
|---|---|---|---|---|
| 1 | **[#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) mcp_bundles 运行时静默忽略** | S2（安全相关 silent no-op） | OPEN | ⚠️ 无 |
| 2 | **[#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542) ask_user WebSocket 崩溃** | S1（工作流阻断） | ✅ CLOSED | ✅ 已修复 |
| 3 | **[#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) skill_manage patch 冷却绕过** | S2（行为降级） | ✅ CLOSED | ✅ 已修复 |
| 4 | **[#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551) 自签名证书无法连接** | S0（安全风险） | OPEN | ⚠️ 有 Issue #1458 讨论，无合并 PR |
| 5 | **[#7742](https://github.com/zeroclaw-labs/zeroclaw/issues/7742) 工具调度器切换后系统提示未刷新** | S2 | OPEN | ⚠️ 无 |
| 6 | **[#7740](https://github.com/zeroclaw-labs/zeroclaw/issues/7740) 缺失 skill 建议基于原始而非有效工具集** | S2 | OPEN | ⚠️ 无 |
| 7 | **[#7741](https://github.com/zeroclaw-labs/zeroclaw/issues/7741) 多模态标记命中响应缓存** | S2 | OPEN | ⚠️ 无 |
| 8 | **[#7738](https://github.com/zeroclaw-labs/zeroclaw/issues/7738) Email 缺少 Message-ID 时使用随机 UUID** | S2 | OPEN | ⚠️ 无 |
| 9 | **[#7739](https://github.com/zeroclaw-labs/zeroclaw/issues/7739) Email OAuth 瞬态刷新失败无重试** | S2 | OPEN | ✅ [#7745](https://github.com/zeroclaw-labs/zeroclaw/pull/7745) |
| 10 | **[#7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038) WebSocket 401 认证失败** | S2 | OPEN（需复现） | ⚠️ 无 |
| 11 | **[#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) Fluent 本地化文件滞后** | S2 | OPEN | ⚠️ 无 |

**关键发现**：[#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) 是唯一标记为"安全相关"且处于 silent no-op 状态的 Bug——配置界面显示 MCP 作用域已生效，但运行时完全忽略。建议优先处理。

---

## 六、功能请求与路线图信号

结合 Issue 状态、标签与已有 PR，以下功能**最有可能纳入下一版本（v0.8.1 或 v0.9.0）**：

| 功能 | Issue | 信号强度 | 预计归属 |
|---|---|---|---|
| **多智能体路由** | [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) + [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) | ⭐⭐⭐⭐⭐（9👍，多标签，RFC 跟进） | v0.9.0 |
| **上下文压缩装饰器** | [#7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673) | ⭐⭐⭐⭐（RFC，维护者评审中） | v0.9.0 |
| **CI 供应链安全加固** | [#7675](https://github.com/zeroclaw-labs/zeroclaw/issues/7675) | ⭐⭐⭐⭐（RFC，与 v0.9.0 安全主题一致） | v0.9.0 |
| **通道回复意图预检可配置** | [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) | ⭐⭐⭐（5 评论，accepted） | v0.8.1 |
| **Slack 线程上下文回填** | [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | ⭐⭐⭐（3 评论，accepted） | v0.8.1 |
| **Per-Agent prompt_injection_mode** | [#7749](https://github.com/zeroclaw-labs/zeroclaw/issues/7749) | ⭐⭐（新提，但需求明确） | v0.9.0 |
| **Delegate handoff 显式目标权限** | [#7743](https://github.com/zeroclaw-labs/zeroclaw/issues/7743) | ⭐⭐（accepted，安全相关） | v0.9.0 |

---

## 七、用户反馈摘要

### 👍 满意点
- **多通道支持持续完善**：今日 PR 涉及 Telegram、Slack、WhatsApp、Lark/Feishu、Email、IRC 共 6 个通道的修复/增强，社区对通道层的快速迭代表示认可
- **安全响应及时**：skill_manage 冷却绕过（[#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683)）和 ask_user WebSocket 崩溃（[#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542)）均在报告当天关闭

### 👎 痛点
1. **自签名证书支持缺失**（[#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551)，创建于 2026-02-17）：用户无法连接使用自签名证书的 OpenAI 兼容端点，被标记为 S0 安全风险，但至今未合并修复，已积压近 4 个月
2. **mcp_bundles 静默忽略**（[#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)）：配置界面显示正常但运行时无效，用户可能在不知情的情况下暴露了本应隔离的 MCP 工具——这是**信任度问题**
3. **WebSocket 认证问题**（[#7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038)）：`zeroclaw check` 11/11 失败但手动连接正常，标记为 `needs-repro`，长期未解决
4. **批量回滚遗留问题**（[#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)）：2026-03-28 的一次 bulk revert 丢失了 153 个 commit 的修复，审计追踪仍在进行中

### 📋 使用场景画像
从 Issue 内容推断，ZeroClaw 的典型用户画像为：
- **自托管 AI 运维者**：关注本地 CA 证书、自签名端点、多 Provider 兼容
- **多通道消息平台管理员**：需要同时管理 Telegram/Slack/WhatsApp/Lark 等多个 IM 通道
- **多智能体编排进阶用户**：已开始尝试在同一实例运行多个 Agent，期待原生路由支持

---

## 八、待处理积压

以下 Issue/PR 长期未响应或处于阻塞状态，建议维护者关注：

| Issue | 创建日期 | 状态 | 积压天数 | 建议动作 |
|---|---|---|---|---|
| **[#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551) 自签名证书支持** | 2026-02-17 | OPEN | ~120 天 | 🔴 S0 安全风险，需排期或关闭决策 |
| **[#7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038) WebSocket 401** | 2026-05-31 | OPEN（需复现） | 16 天 | 🟡 请求复现或关闭 |
| **[#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153 commits 回滚恢复审计** | 2026-04-24 | OPEN | 53 天 | 🟡 长期审计项，需明确是否继续追踪 |
| **[#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) Fluent 本地化滞后** | 2026-05-16 | OPEN | 31 天 | 🟡 影响中文用户体验 |
| **[#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) mcp_bundles 运行时静默忽略** | 2026-06-15 | OPEN | 1 天 | 🔴 安全相关 silent no-op，建议 48h 内响应 |
| **待合并 PR 积压 47 条** | — | OPEN | — | 🟡 审查带宽瓶颈，建议分批次合并 |

---

*日报由 OWL 自动生成 · 数据截至 2026-06-16 00:00 UTC*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*