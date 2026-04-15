# OpenClaw 生态日报 2026-04-07

> Issues: 500 | PRs: 500 | 覆盖项目: 11 个 | 生成时间: 2026-04-07 00:12 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-04-07

## 1. 今日速览

OpenClaw 项目今日呈现**极高活跃度**，24小时内产生 **500 条 Issues 更新**（417 活跃/新开，83 关闭）和 **500 条 PR 更新**（321 待合并，179 已合并/关闭），并发布 **v2026.4.5** 重要版本。社区讨论聚焦于**配置系统破坏性变更的迁移阵痛**、**Windows 平台兼容性回归**、以及**多平台客户端（Linux/Windows）的迫切需求**。项目处于快速迭代期，稳定性问题与功能扩展并行推进。

---

## 2. 版本发布

### [v2026.4.5](https://github.com/openclaw/openclaw/releases/tag/v2026.4.5) — 配置系统重大重构

| 类别 | 内容 |
|:---|:---|
| **发布日期** | 2026-04-05 |
| **核心变更** | 移除遗留公共配置别名，统一采用规范路径 |

#### ⚠️ 破坏性变更（Breaking Changes）

| 移除的遗留别名 | 新规范路径 |
|:---|:---|
| `talk.voiceId` / `talk.apiKey` | 使用标准 `voice` / `provider` 配置块 |
| `agents.*.sandbox.perSession` | 改用 `enabled` 布尔开关 |
| `browser.ssrfPolicy.allowPrivateNetwork` | 迁移至标准 SSRF 策略配置 |
| `hooks.internal.handlers` | 采用新的 hooks 注册机制 |
| channel/group/room `allow` toggles | 统一使用 `enabled` 控制开关 |

#### 迁移注意事项

- **自动迁移**：部分配置可能通过兼容层自动转换，但依赖旧别名的自定义脚本将失效
- **验证命令**：建议运行 `openclaw config validate` 检查配置有效性
- **Docker 用户**：需检查环境变量注入的配置键名是否受影响

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 类型 | 影响 |
|:---|:---|:---|:---|
| [#42825](https://github.com/openclaw/openclaw/pull/42825) | mraleko | 模型解析修复 | 解决未知模型静默回退问题，增强用户可见性 |
| [#58276](https://github.com/openclaw/openclaw/pull/58276) | praktika-engineer | Slack 线程提及控制 | 新增 `thread.requireExplicitMention`，解决 `requireMention` 被线程隐式提及绕过的问题 |
| [#62116](https://github.com/openclaw/openclaw/pull/62116) / [#62124](https://github.com/openclaw/openclaw/pull/62124) | Mariana-Codebase | 安全加固 | Gateway HTTP 阶段 runner 改为 **fail-closed**，关键认证阶段抛出异常时阻止后续阶段执行 |
| [#62180](https://github.com/openclaw/openclaw/pull/62180) | swseverance | 开发体验 | 修复 `pnpm check` 失败问题 |
| [#34389](https://github.com/openclaw/openclaw/pull/34389) | pulak-malhotra | Slack 线程行为 | 新增配置选项禁用隐式线程提及 |
| [#29982](https://github.com/openclaw/openclaw/pull/29982) | gwthm-in | 子代理控制 | 新增 `allowGeneric` 选项阻止泛型子代理生成 |
| [#61093](https://github.com/openclaw/openclaw/issues/61093) | — | 回归修复 | `claude-cli` 后端模型目录注册失败问题已解决 |
| [#31234](https://github.com/openclaw/openclaw/issues/31234) | — | 外部依赖 | z.ai 提供商 API 限制问题已关闭（外部服务恢复） |
| [#26108](https://github.com/openclaw/openclaw/issues/26108) | — | Discord 语音 | 语音连接无音频问题已关闭 |
| [#60772](https://github.com/openclaw/openclaw/issues/60772) | — | 执行路由 | `exec host=node` 回归问题已修复 |
| [#61793](https://github.com/openclaw/openclaw/issues/61793) | — | 提示缓存 | Claude Opus 4.5+ 思考块处理修复 |

**整体推进评估**：今日合并集中在**安全加固**（fail-closed 认证）、**平台稳定性**（Windows 路径处理、配置验证）和**用户体验**（Slack/Discord 通道行为优化），项目向生产就绪迈出关键一步。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 74 | 67 | **跨平台客户端缺口**：macOS/iOS/Android 已有应用，Linux/Windows 用户强烈呼吁功能对等的原生应用 |
| 2 | [#23538 Anthropic setup-token 401 错误](https://github.com/openclaw/openclaw/issues/23538) | 27 | 0 | **认证可靠性**：setup-token 存储成功但运行时失效，隔离环境可复现 |
| 3 | [#46049 LLM 请求超时忽略配置](https://github.com/openclaw/openclaw/issues/46049) | 22 | 7 | **超时控制失效**：配置 24 小时超时仍被内部硬限制截断，导致长任务崩溃 |
| 4 | [#14593 Docker 中 brew 技能安装失败](https://github.com/openclaw/openclaw/issues/14593) | 21 | 16 | **容器化体验**：官方镜像缺少 brew，Linux 容器无法安装依赖 brew 的技能 |
| 5 | [#52875 Session_send 会话未找到](https://github.com/openclaw/openclaw/issues/52875) | 17 | 0 | **代理间通信回归**：升级 2026-3-22 后主代理无法联系其他代理，`session_list` 显示异常 |

### 🔥 高价值 PR 预览

| PR | 亮点 | 状态 |
|:---|:---|:---|
| [#62160](https://github.com/openclaw/openclaw/pull/62160) | **Plugin SDK: 托管 MCP 服务器注册** — 原生支持 `api.registerMcpServer()`，插件可拥有 MCP 注册并确定性地合并到嵌入式运行时 | 待合并 (XL) |
| [#62134](https://github.com/openclaw/openclaw/pull/62134) | **远程 MCP 服务器 OAuth 认证** — 解决 OAuth 保护 MCP 服务器的认证缺口 | 待合并 (XL) |
| [#62203](https://github.com/openclaw/openclaw/pull/62203) | **房地产助手技能** — 垂直领域技能，含线索管道管理、每日跟进提醒、房源文案生成 | 待合并 (L) |
| [#62146](https://github.com/openclaw/openclaw/pull/62146) | **压缩检查点** — 长会话压缩后可恢复/检查，解决"压缩后会话丢失"痛点 | 待合并 (XL) |
| [#61718](https://github.com/openclaw/openclaw/pull/61718) | **GitHub Copilot 嵌入提供商** — 复用 Copilot 订阅进行记忆搜索，无需额外 API 密钥 | 待合并 (L) |

---

## 5. Bug 与稳定性

### 🚨 严重/高优先级

| Issue | 类型 | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| [#61911](https://github.com/openclaw/openclaw/issues/61911) | **回归/崩溃** | Windows 绝对路径触发 `ERR_UNSUPPORTED_ESM_URL_SCHEME` (`Received protocol 'c:'`)，2026.4.5 全新安装即崩溃 | [#62194](https://github.com/openclaw/openclaw/pull/62194) | 🟡 有 PR，待合并 |
| [#61686](https://github.com/openclaw/openclaw/issues/61686) | **安装失败** | 2026.4.5 npm 更新后 CLI 损坏，捆绑插件运行时依赖缺失 | — | 🔴 无 PR，需紧急关注 |
| [#61686](https://github.com/openclaw/openclaw/issues/61686) | **安装失败** | 2026.4.5 npm 更新后 CLI 损坏，捆绑插件运行时依赖缺失 | — | 🔴 无 PR，需紧急关注 |
| [#61759](https://github.com/openclaw/openclaw/issues/61759) | **插件崩溃** | nextcloud-talk 捆绑插件损坏：缺少 activate 导出、空配置 schema | — | 🔴 无 PR |
| [#61847](https://github.com/openclaw/openclaw/issues/61847) | **回归** | `gateway install --force` 破坏 AWS EC2 实例角色凭证发现 | — | 🔴 无 PR |

### ⚠️ 中等优先级

| Issue | 类型 | 描述 | Fix PR |
|:---|:---|:---|:---|
| [#53959](https://github.com/openclaw/openclaw/issues/53959) | 回归 | gpt-5.3-codex 升级后完全不执行工具 | — |
| [#45110](https://github.com/openclaw/openclaw/issues/45110) | 回归 | 提示前缀变化导致缓存失效，成本 x1000 | — |
| [#59257](https://github.com/openclaw/openclaw/issues/59257) | 回归 | 隔离 cron 会话模型覆盖被静默忽略 | — |
| [#47381](https://github.com/openclaw/openclaw/issues/47381) | 行为 | cron agentTurn 模型覆盖被忽略 | — |
| [#60213](https://github.com/openclaw/openclaw/issues/60213) | 数据丢失 | 压缩后会话静默放弃，对话记忆完全丢失 | [#62146](https://github.com/openclaw/openclaw/pull/62146) |
| [#59916](https://github.com/openclaw/openclaw/issues/59916) | 行为 | Ollama/gemma4:26b 启动卡住 "Wake up, my friend" | — |

---

## 6. 功能请求与路线图信号

### 高可行性（已有 PR 或明确路径）

| 需求 | Issue/PR | 纳入可能性 | 关键信号 |
|:---|:---|:---:|:---|
| **房地产垂直技能** | [#62203](https://github.com/openclaw/openclaw/pull/62203) | ⭐⭐⭐⭐⭐ | PR 已提交，功能完整 |
| **GitHub Copilot 嵌入复用** | [#61718](https://github.com/openclaw/openclaw/pull/61718) | ⭐⭐⭐⭐⭐ | 解决用户痛点（无需额外 API 密钥） |
| **压缩检查点/可恢复性** | [#62146](https://github.com/openclaw/openclaw/pull/62146) | ⭐⭐⭐⭐⭐ | 解决数据丢失投诉 |
| **Plugin SDK MCP 支持** | [#62160](https://github.com/openclaw/openclaw/pull/62160) | ⭐⭐⭐⭐⭐ | 架构级扩展，维护者主导 |
| **OAuth for MCP** | [#62134](https://github.com/openclaw/openclaw/pull/62134) | ⭐⭐⭐⭐☆ | 企业场景必需 |
| **cron preHook 前置检查** | [#62195](https://github.com/openclaw/openclaw/pull/62195) | ⭐⭐⭐⭐☆ | 资源敏感场景实用 |
| **视频生成增强** | [#61987](https://github.com/openclaw/openclaw/pull/61987), [#61988](https://github.com/openclaw/openclaw/pull/61988) | ⭐⭐⭐⭐☆ | 多提供商适配需求 |

### 中长期需求（讨论阶段）

| 需求 | Issue | 热度 | 阻碍 |
|:---|:---|:---:|:---|
| **Linux/Windows 原生应用** | [#75](https://github.com/openclaw/openclaw/issues/75) | 🔥 74 评论 | 资源投入大，需跨平台团队 |
| **加密 API 密钥/密钥管理** | [#7916](https://github.com/openclaw/openclaw/issues/7916) | 17 评论, 11 👍 | 架构设计待确定 |
| **代理间任务委托协议（Agent Economy）** | [#28106](https://github.com/openclaw/openclaw/issues/28106) | 6 评论 | 复杂度高，需 RFC 流程 |
| **预响应强制钩子（硬门控）** | [#13583](https://github.com/openclaw/openclaw/issues/13583) | 7 评论, 1 👍 | 金融/安全场景需求明确 |

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 场景 | 典型反馈 | 来源 Issue |
|:---|:---|:---|
| **配置迁移困惑** | "升级后配置失效，错误信息晦涩" | 多个 2026.4.5 相关 Issue |
| **Windows 二等公民** | "每次大版本 Windows 必出问题，路径/ESM/权限" | [#61911](https://github.com/openclaw/openclaw/issues/61911), [#51887](https://github.com/openclaw/openclaw/issues/51887) |
| **长任务稳定性** | "24小时配置的超时被忽略，任务中途失败" | [#46049](https://github.com/openclaw/openclaw/issues/46049) |
| **数据丢失恐惧** | "压缩后会话完全丢失，无法恢复" | [#60213](https://github.com/openclaw/openclaw/issues/60213) |
| **成本失控** | "提示缓存失效导致成本暴涨 1000 倍" | [#45110](https://github.com/openclaw/openclaw/issues/45110), [#31708](https://github.com/openclaw/openclaw/issues/31708) |

### 😊 满意点

- **多平台部署灵活性**：Docker、systemd、launchd 支持完善
- **通道丰富度**：Slack、Discord、Telegram、Matrix 等集成受好评
- **技能扩展性**：自定义技能机制灵活（但文档需加强）

### 🎯 使用场景洞察

| 场景 | 需求特征 |
|:---|:---|
| **企业自动化** | 需要 cron 可靠性、模型覆盖生效、预执行检查 |
| **本地 AI 实验** | Ollama 集成稳定性、视觉模型自动检测 |
| **跨团队协作** | 代理间通信（A2A）、会话持久化、权限隔离 |
| **成本敏感运营** | 提示缓存有效性、模型降级可控、透明计费 |

---

## 8. 待处理积压

### ⏰ 长期未响应的高价值 Issue

| Issue | 创建时间 | 最后更新 | 状态 | 提醒 |
|:---|:---|:---|:---|:---|
| [#75 Linux/Windows 应用](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | 2026-04-06 | 97 天开放 | **最高优先级功能请求**，需产品决策 |
| [#7916 加密 API 密钥](https://github.com/openclaw/openclaw/issues/7916) | 2026-02-03 | 2026-04-06 | 63 天开放 | 安全合规刚需，需架构设计 |
| [#22278 JSON Schema 发布](https://github.com/openclaw/openclaw/issues/22278) | 2026-02-21 | 2026-04-06 | 45 天开放 | 开发者体验，配置验证基础 |
| [#28191 端口冲突崩溃循环](https://github.com/openclaw/openclaw/issues/28191) | 2026-02-27 | 2026-04-06 | 39 天开放 | 运维可靠性，启动前端口检查 |
| [#10386 工作区技能发现](https://github.com/openclaw/openclaw/issues/10386) | 2026-02-06 | 2026-04-06 | 60 天开放 | 技能生态扩展瓶颈 |

### 🔧 需要维护者决策的 PR

| PR | 等待时长 | 阻塞点 |
|:---|:---|:---|
| [#55396 Kudosity SMS 通道](https://github.com/openclaw/openclaw/pull/55396) | ~12 天 | 通道插件审核流程 |
| [#56384 飞书群组 ID 规范化](https://github.com/openclaw/openclaw/pull/56384) | ~10 天 | 企业用户场景验证 |
| [#59477 沙箱代理 A2A 消息](https://github.com/openclaw/openclaw/pull/59477) | ~5 天 | 安全边界审查 |

---

## 附录：数据健康度指标

| 指标 | 数值 | 评估 |
|:---|:---:|:---|
| 日 Issues 处理率 | 16.6% (83/500) | ⚠️ 偏低，积压风险 |
| 日 PR 合并率 | 35.8% (179/500) | ✅ 健康，活跃开发 |
| 严重 Bug 响应 | 2/5 有 PR | ⚠️ 需加速 |
| 社区参与度 | 74 评论 Issue | ✅ 极高 |
| 版本发布频率 | 5 天内 2026.4.5 | ✅ 快速迭代 |

---

*日报生成时间：2026-04-07 | 数据来源：OpenClaw GitHub 公开 API*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
## 2026-04-07 动态报告

---

## 1. 生态全景

个人 AI 助手开源生态正处于**快速分化与专业化并行**的阶段：头部项目 OpenClaw 以极高迭代速度（500 Issues/500 PR 日活）引领配置系统重构与多平台扩展，而 NanoBot、PicoClaw 等新兴力量在垂直场景（房地产、终端安全）快速突破。MCP（Model Context Protocol）成为事实标准，超 60% 项目投入集成，但实现完整度差异显著。Windows 平台持续成为"二等公民"，跨平台原生应用缺口与容器化部署的摩擦构成共性痛点。整体呈现"功能扩张期"向"质量巩固期"过渡的分化态势。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PR (待审/已合并) | 版本发布 | 健康度评估 |
|:---|:---:|:---:|:---|:---|
| **OpenClaw** | 417 / 83 | 321 / 179 | v2026.4.5 (破坏性变更) | ⚡ **极高活跃**，快速迭代伴随稳定性债务 |
| **NanoBot** | 18 / 8 | 30 / 26 | v0.1.5 (官网里程碑) | 🚀 **高活跃爆发**，质量加固期，3个P0无修复 |
| **PicoClaw** | 8 / 0 | 4 / 2 | 无 | 🔧 **中高活跃**，安全响应快，功能待扩展 |
| **NanoClaw** | 8 / - | 12 / 14 | 无 | ⚖️ **中高活跃**，基础设施稳定，SSL运维缺口 |
| **NullClaw** | - | 5 / 2 | 无 | 🛠️ **中等活跃**，Admin API 架构级推进 |
| **IronClaw** | 28 / 5 | 45 / 5 | 无 (v0.24.1待发布) | ⚠️ **高活跃高压**，Ownership模型回归债务 |
| **LobsterAI** | 0 / 0 | 11 / 0 | 无 | 📦 **功能迭代期**，定时任务密集，0社区讨论 |
| **Moltis** | 11 / 4 | 9 / 6 | 20260406.04 | 🌐 **企业就绪推进**，Matrix需求40天未响应 |
| **CoPaw** | 24 / 4 | 12 / 3 | 无 | 🐛 **稳定性攻坚**，MCP生命周期成焦点 |
| **ZeptoClaw** | 4 / 0 | 6 / 2 | 无 | 🎯 **架构深水区**，并发设计与API兼容并进 |
| **TinyClaw** | 0 / 0 | 0 / 0 | 无 | 💤 **无活动** |

**关键指标**：OpenClaw 日处理量达次头部项目 10-20 倍；IronClaw 活跃/关闭比 5.6:1 显示消化能力瓶颈；LobsterAI/TinyClaw 形成活跃度两极。

---

## 3. OpenClaw 在生态中的定位

### 核心优势
| 维度 | 表现 | 对比参照 |
|:---|:---|:---|
| **规模效应** | 500 Issues/PR 日活，社区体量超其余项目总和 | NanoBot 56 PR、IronClaw 50 PR 为最接近者 |
| **生态完整性** | 20+ 渠道（Slack/Discord/Telegram/Matrix）、多引擎（Claude/Codex/Ollama）、Plugin SDK | Moltis 20+ Provider 但渠道层薄弱 |
| **企业功能深度** | cron 预执行检查、压缩检查点、SSRF 策略、fail-closed 认证 | CoPaw 刚进入 MCP 生命周期优化阶段 |
| **版本节奏** | 5 天内发布 v2026.4.5，破坏性变更主动管理 | NanoClaw SSL 证书 9 天未修暴露运维差距 |

### 技术路线差异
| 特征 | OpenClaw | 生态典型（如 NanoBot/Moltis） |
|:---|:---|:---|
| **配置范式** | 声明式 YAML + 严格 Schema 验证，主动清理遗留别名 | 环境变量混合，版本号硬编码（NanoBot #2857） |
| **扩展架构** | 原生 Plugin SDK + MCP 服务器注册（#62160） | 技能/工具硬编码为主，MCP 作为外部适配层 |
| **多租户** | 早期即引入 workspace/namespace 隔离 | 近期才开始关注（IronClaw Ownership 模型阵痛） |
| **客户端战略** | macOS/iOS/Android 原生应用已发布，Linux/Windows 缺口成焦点（#75, 74评论） | 以 Web/CLI 为主，移动端体验碎片化 |

### 社区规模对比
- **OpenClaw #75**（Linux/Windows 应用需求）：97 天开放，74 评论，67 👍 — 单 Issue 热度超多数项目全量日活
- **Moltis #233**（Matrix 支持）：40 天开放，5 👍 — 长期呼声但无官方时间线
- **IronClaw #70**（Feed 系统）：52 天开放，无 PR — 路线图漂移风险

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与进展 |
|:---|:---|:---|
| **MCP 完整生态支持** | OpenClaw (#62160), NanoBot (#2861), CoPaw (#2998, #2979), NanoClaw (#1674) | 从 Tools 扩展至 Resources+Prompts；OAuth 认证 (#62134)；生命周期管理（缓存/热重载/清理） |
| **Windows 平台修复** | OpenClaw (#61911 ESM URL 崩溃), NanoBot (#2846 Unicode 错误), IronClaw (#2081 localhost 解析), PicoClaw (Android 聚焦) | 路径处理、编码、网络绑定一致性；OpenClaw 2026.4.5 全新安装即崩溃为最严重案例 |
| **长任务/超时稳定性** | OpenClaw (#46049 24h 超时失效), NanoBot (#2638 会话无界增长), ZeptoClaw (#486 非阻塞架构) | 配置超时 vs 硬限制冲突；内存 OOM 防护；真正并发设计诉求涌现 |
| **多模型路由优化** | OpenClaw (关键词路由 #1679-1682), NanoClaw (#1680 零成本字符串匹配), ZeptoClaw (#468 厂商前缀路由) | 成本敏感场景下零成本路由；OpenRouter 等聚合层兼容 |
| **定时任务/自动化可靠性** | OpenClaw (cron preHook #62195), IronClaw (HEARTBEAT #757), LobsterAI (5 PR 密集迭代), Moltis (#564 自动清理) | 从"能运行"到"可观测、可调试、资源可回收"的企业级要求 |
| **数据持久化与恢复** | OpenClaw (#62146 压缩检查点), NanoBot (#60213 压缩丢失), IronClaw (#1566 层级摘要) | 长会话记忆不丢失；压缩后可恢复；上下文分层管理 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 企业级多租户平台、Plugin SDK 生态、原生客户端 | 中大型团队 SRE/平台工程师、多工作区管理者 | 声明式配置、严格 Schema、早期抽象隔离 |
| **NanoBot** | 快速部署体验、多语言文档、本地化模型优先 | 中文开发者、个人实验者、Ollama 用户 | Python 为主、环境变量配置、版本管理债务 |
| **PicoClaw** | 终端安全、移动端体验（Android）、轻量化 | Termux/受限环境用户、个人移动助手场景 | Go 实现、ANSI 过滤安全加固、Gateway 模式 |
| **NanoClaw** | 多引擎架构（Codex）、消息管道稳定性、审核代理 | 多模型实验者、合规敏感企业 | 容器生命周期精细管理、SigV4 等云原生认证 |
| **IronClaw** | 多租户所有权模型、WASM 沙箱、Near 生态整合 | Web3/区块链开发者、去中心化应用构建者 | Rust 实现、WASM 隔离、staging 分支驱动 |
| **LobsterAI** | 定时任务企业级 UI、Electron 桌面端、技能隔离 | 生产力工具用户、自动化工作流设计者 | Electron + Claude Agent SDK、会话级状态隔离 |
| **Moltis** | Webhook 驱动 Agent、外部 Agent 桥接、可观测性 | 事件驱动架构开发者、多 Agent 编排场景 | 通用 Webhook 入口、Langfuse 追踪、Copilot Enterprise |
| **CoPaw** | 本地模型（llama.cpp）易用性、Skills Hub 生态 | 隐私优先用户、离线场景、技能开发者 | Python 技能系统、MCP 适配层、热重载机制 |
| **ZeptoClaw** | 浏览器自动化、上下文压缩、OpenAI API 兼容 | 研究型任务用户、API 集成开发者 | 分层上下文管理、Lightpanda/Chrome 双引擎 |

**关键分化**：OpenClaw/IronClaw/Moltis 走向**平台化**（多租户、可观测、企业管控），NanoBot/CoPaw/PicoClaw 坚守**个人化**（快速启动、本地优先、隐私敏感），NanoClaw/ZeptoClaw 探索**多引擎/研究型**架构。

---

## 6. 社区热度与成熟度分层

### 🔥 快速迭代期（功能扩张 > 质量巩固）

| 项目 | 特征信号 | 风险 |
|:---|:---|:---|
| **OpenClaw** | 500 日活、破坏性变更发布、v2026.4.5 配置重构 | Windows 稳定性回归、配置迁移摩擦 |
| **NanoBot** | v0.1.5 里程碑、27 新贡献者、66 PR 合并 | 3 个 P0 Bug 无修复、版本号混乱 |
| **IronClaw** | Ownership 模型落地、45 PR 积压、多租户功能密集 | 回归债务累积（#2084, #2089, #2079）、响应延迟 5-10 秒 |

### ⚖️ 质量巩固期（稳定性 > 新功能）

| 项目 | 特征信号 | 关键战役 |
|:---|:---|:---|
| **CoPaw** | MCP 生命周期优化、热重载保活、WhatsApp 渠道修复 | CPU 100% 空闲占用 (#2888)、Windows 客户端失活 |
| **ZeptoClaw** | Telegram 静默失败根治、浏览器自动化 PR 11 天待审 | 并发架构 (#486)、OpenAI 工具调用 (#489) |
| **Moltis** | Cron 自动清理、Docker 构建修复、企业功能推进 | Matrix 40 天未响应、网络绑定 OAuth 失效 |

### 📦 功能填充期（垂直场景深耕）

| 项目 | 特征信号 | 瓶颈 |
|:---|:---|:---|
| **LobsterAI** | 定时任务 5 PR 闭环、零社区讨论 | 外部贡献者参与度、MCP 热度下降 |
| **PicoClaw** | 安全响应快（#2377 当日修复）、功能面窄 | OpenIM 企业集成、Provider 配置易用性 |

### 💤 停滞/观察期

| 项目 | 状态 |
|:---|:---|
| **TinyClaw** | 24 小时零活动 |
| **NullClaw** | Admin API 架构推进但合并量低，#779 回归 24 小时无响应 |

---

## 7. 值得关注的趋势信号

### 信号一：MCP 从"功能 checkbox"走向"架构核心"
> **证据**：OpenClaw Plugin SDK 原生 MCP 注册 (#62160)、CoPaw MCP 缓存与热重载双 PR、NanoBot MCP 完整支持 PR (#2861)
> **价值**：MCP 正从外部协议适配层，内化为智能体平台的扩展基础设施。开发者应关注 **MCP 服务器的生命周期管理**（注册→发现→清理），而非仅工具调用能力。

### 信号二："零成本"路由成为成本敏感场景刚需
> **证据**：NanoClaw 3 个重复 Issue 强调"zero-cost string matching" (#1679-1682)，ZeptoClaw 关键词路由 PR (#1680)
> **价值**：LLM 调用成本压力下，**前置过滤层**（关键词、规则、缓存）的架构地位上升，与语义路由形成分层设计。

### 信号三：Windows 平台债务暴露"开发者体验鸿沟"
> **证据**：OpenClaw ESM URL 崩溃、NanoBot Unicode 错误、IronClaw localhost 解析、CoPaw 客户端自动关闭
> **价值**：跨平台一致性仍是头部项目的未竟之战。**WSL2/容器化并非万能解**，原生 Windows 路径处理、编码、权限模型需专项投入。

### 信号四：会话/记忆管理的"可恢复性"成为信任基石
> **证据**：OpenClaw 压缩检查点 (#62146)、NanoBot 压缩丢失恐惧 (#60213)、IronClaw 层级摘要 (#1566)、ZeptoClaw 多层上下文压缩 (#460)
> **价值**：用户从"能对话"转向"敢托付长任务"，**检查点、分层压缩、优雅降级**是生产就绪的关键指标。

### 信号五：外部 Agent 桥接预示"Agent 互联网"雏形
> **证据**：Moltis 外部 Agent 桥接 PR (#566)、CoPaw GitHub Copilot Provider、IronClaw 多租户所有权模型
> **价值**：单一智能体平台边界模糊，**A2A（Agent-to-Agent）通信、凭证代理、跨平台委托**将成为下一代架构焦点。

---

**报告生成时间**：2026-04-07  
**数据来源**：各项目 GitHub 公开 API 动态摘要

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-07

## 1. 今日速览

NanoBot 项目今日呈现**高活跃度爆发期**：v0.1.5 正式版发布标志项目进入新阶段，官网与多语言文档上线；24小时内 56 个 PR 涌动（30 个待审），Issues 处理节奏加快（8 个关闭/18 个活跃）。社区焦点集中在**多平台渠道扩展**（Web/Discord/Matrix/飞书）、**MCP 生态完整支持**以及**稳定性加固**。值得关注的是，项目正经历快速迭代带来的配置兼容性债务与版本管理混乱，需警惕技术债累积。

---

## 2. 版本发布

### v0.1.5 正式发布 🎉
| 属性 | 详情 |
|:---|:---|
| **发布时间** | 2026-04-06 |
| **PR 合并数** | 66 个 |
| **新贡献者** | 27 位 |
| **里程碑** | 首个拥有独立官网的正式版本 |

**核心更新：**
- **官方文档站点** [nanobot.wiki](https://nanobot.wiki) 上线，支持英/中/日/韩/西多语言
- 项目治理基础设施成熟化

**⚠️ 已知问题（当日暴露）：**
- `__init__.py` 硬编码版本 `0.4.1` 与 `pyproject.toml` 的 `0.1.5` 不一致 → [PR #2860](https://github.com/HKUDS/nanobot/pull/2860) 已提交修复
- 版本号管理混乱可能影响下游依赖解析

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（8 个）

| PR | 作者 | 核心贡献 | 影响 |
|:---|:---|:---|:---|
| [#2525](https://github.com/HKUDS/nanobot/pull/2525) | LeoFYH | 修复"假阳性执行"问题，优化进度报告 | 减少用户对"虚假完成"的困惑 |
| [#2864](https://github.com/HKUDS/nanobot/pull/2864) → [#2865](https://github.com/HKUDS/nanobot/pull/2865) | LeoFYH | `WriteFileTool` 字节/字符计数修正 | 非 ASCII 内容（中文/emoji）报告准确 |
| [#2848](https://github.com/HKUDS/nanobot/pull/2848) | Psinary | 插件渠道配置兼容性修复 | 解决 `allow_from` 权限检查失效 |
| [#1341](https://github.com/HKUDS/nanobot/pull/1341) | dmagyar | [关闭重提] Web 聊天渠道 SSE 流式 | 架构验证后由 [#2871](https://github.com/HKUDS/nanobot/pull/2871) 替代 |
| [#2796](https://github.com/HKUDS/nanobot/issues/2796) 关联修复 | - | Exec 工具 SSRF 防护过度问题 | 恢复 localhost 服务集成能力 |

**整体推进评估：** 项目正从"功能扩张期"转向"质量加固期"，核心循环稳定性与跨平台兼容性成为优先级。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求 | 深度分析 |
|:---|:---|:---:|:---|:---|
| 1 | [#2638](https://github.com/HKUDS/nanobot/issues/2638) 会话历史无界增长 | 5 | **内存管理架构缺陷** | 记忆压缩系统故障时的兜底机制缺失，可能导致生产环境 OOM；需硬限制 + 降级策略 |
| 2 | [#2796](https://github.com/HKUDS/nanobot/issues/2796) Exec 工具阻断 localhost | 5 | **安全与便利的平衡** | SSRF 防护过度影响本地开发工作流（PinchTab 等浏览器自动化）；已关闭但需文档说明例外配置 |
| 3 | [#2795](https://github.com/HKUDS/nanobot/issues/2795) Telegram 显示思考过程 | 4 | **UX 回归** | v0.1.4→v0.1.5 升级后行为变更，用户期望"仅输出结果"模式可配置 |
| 4 | [#2871](https://github.com/HKUDS/nanobot/pull/2871) Web 聊天渠道（新方案） | 活跃 | **零侵入架构验证** | 利用现有 `_wants_stream` 机制避免核心修改，体现社区对"插件化优先"原则的共识 |

**信号：** 社区正从"能用"向"好用"演进，对可配置性、可观测性、开发体验提出更高要求。

---

## 5. Bug 与稳定性

### 按严重程度排序

| 严重度 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **P0-系统挂起** | [#2828](https://github.com/HKUDS/nanobot/issues/2828) | DuckDuckGo 搜索导致整个系统无响应（Proxmox 强制停止） | 🆘 **无 fix PR**，需紧急调查 |
| 🔴 **P0-工具失效** | [#2829](https://github.com/HKUDS/nanobot/issues/2829) | Ollama 工具调用完全损坏（gemma4:e4b） | 🆘 **无 fix PR**，格式转换层疑似故障 |
| 🟡 **P1-安全绕过** | [#2826](https://github.com/HKUDS/nanobot/issues/2826) | `restrictToWorkspace=true` 仍可删除任意文件 | 🆘 **无 fix PR**，沙箱机制存根本缺陷 |
| 🟡 **P1-崩溃** | [#2846](https://github.com/HKUDS/nanobot/issues/2846) | CLI UnicodeEncodeError（emoji/代理字符对） | ✅ [PR #2869](https://github.com/HKUDS/nanobot/pull/2869) 已提交 |
| 🟡 **P1-配置失效** | [#2839](https://github.com/HKUDS/nanobot/issues/2839) | `web.search.enable=false` 被忽略 | ✅ 已关闭 |
| 🟢 **P2-版本混乱** | [#2857](https://github.com/HKUDS/nanobot/issues/2857) | `__version__` 与 `pyproject.toml` 不一致 | ✅ [PR #2860](https://github.com/HKUDS/nanobot/pull/2860) 已提交 |
| 🟢 **P2-工具调用格式** | [#2858](https://github.com/HKUDS/nanobot/issues/2858) | 工具参数 JSON 序列化错误 | ✅ [PR #2859](https://github.com/HKUDS/nanobot/pull/2859) 已提交 |

**健康度警示：** 3 个 P0/P1 级 Bug 尚无修复方案，涉及核心搜索、本地模型支持、安全沙箱三大支柱功能。

---

## 6. 功能请求与路线图信号

### 高潜力纳入下一版本的需求

| Issue | 需求 | 已有 PR | 可行性评估 |
|:---|:---|:---|:---|
| [#2870](https://github.com/HKUDS/nanobot/issues/2870) | **消息反应回调**（👍/❤️ 作为记忆信号） | 无 | ⭐⭐⭐⭐⭐ 高价值低侵入，强化人机协作闭环 |
| [#2854](https://github.com/HKUDS/nanobot/issues/2854) | **MCP 完整支持**（Resources + Prompts，不仅 Tools） | [#2861](https://github.com/HKUDS/nanobot/pull/2861) | ⭐⭐⭐⭐⭐ PR 已就绪，生态兼容性关键 |
| [#2836](https://github.com/HKUDS/nanobot/issues/2836) | **WhatsApp 按 chat_id 隔离工作区** | 无 | ⭐⭐⭐⭐☆ 多租户刚需，隐私合规 |
| [#2845](https://github.com/HKUDS/nanobot/issues/2845) | **MPP 机器支付协议原生支持** | 无 | ⭐⭐⭐☆☆ 前沿但小众，需生态成熟 |
| [#2837](https://github.com/HKUDS/nanobot/issues/2837) | **真人回复后暂停 12h** | 无 | ⭐⭐⭐⭐☆ 运营场景实用，人机交接 |
| [#2820](https://github.com/HKUDS/nanobot/issues/2820) | `/status` 显示搜索配额消耗 | 无 | ⭐⭐⭐⭐☆ 可观测性增强，成本透明 |

**路线图信号：** MCP 生态整合与多租户隔离将成为 v0.2.x 的核心主题。

---

## 7. 用户反馈摘要

### 真实痛点提炼

| 场景 | 反馈来源 | 情绪 | 核心诉求 |
|:---|:---|:---:|:---|
| **升级体验** | [#2795](https://github.com/HKUDS/nanobot/issues/2795) | 😤 负面 | 版本升级不应改变可见行为（思考过程外露），需配置项兜底 |
| **本地开发** | [#2796](https://github.com/HKUDS/nanobot/issues/2796) | 😤→😌 缓解 | 安全策略需区分"生产环境"与"开发环境"，白名单机制要灵活 |
| **中文用户** | [#2849](https://github.com/HKUDS/nanobot/issues/2849) | 😕 困惑 | 环境变量语法 `${VAR}` 支持不一致，文档需明确 |
| **企业部署** | [#2836](https://github.com/HKUDS/nanobot/issues/2836) | 😰 担忧 | 多用户场景数据隔离缺失，隐私合规风险 |
| **Windows 用户** | [#2846](https://github.com/HKUDS/nanobot/issues/2846) [#2868](https://github.com/HKUDS/nanobot/issues/2868) | 😤 挫败 | Unicode/编码问题、bash 强制依赖，跨平台体验差距大 |
| **Gemini 用户** | [#2853](https://github.com/HKUDS/nanobot/issues/2853) | 😕 困惑 | 子代理输出不完整，角色标记逻辑需模型适配 |

### 满意度亮点
- 官网与多语言文档上线获积极反响
- 飞书/Lark 全球支持 [#2674](https://github.com/HKUDS/nanobot/pull/2674) 满足企业用户需求

---

## 8. 待处理积压

### 需维护者关注的长期议题

| Issue | 创建时间 | 最后更新 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| [#2638](https://github.com/HKUDS/nanobot/issues/2638) 会话历史无界增长 | 2026-03-30 | 今日 | 🔥 生产 OOM 风险 | 分配核心开发者，设计硬限制 + 优雅降级 |
| [#2757](https://github.com/HKUDS/nanobot/issues/2757) OpenAI `max_tokens` 废弃参数 | 2026-04-02 | 今日 | ⚠️ API 兼容性 | 跟进 OpenAI 迁移时间表 |
| [#1681](https://github.com/HKUDS/nanobot/issues/1681) Matrix 加密会话问题 | 2026-03-07 | 今日关闭 | ✅ 已解决 | 确认修复，归档 |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) `/stop` 丢失会话状态 | 2026-03-26 | 今日 | ⚠️ UX 完整性 | 评审合并，关键稳定性修复 |

### PR 积压警示
- **30 个待合并 PR** 中，[#2871](https://github.com/HKUDS/nanobot/pull/2871) Web 渠道、[#2861](https://github.com/HKUDS/nanobot/pull/2861) MCP 完整支持、[#2869](https://github.com/HKUDS/nanobot/pull/2869) Unicode 修复为高优先级，建议 48 小时内处理以避免社区贡献者流失。

---

*日报生成时间：2026-04-07 | 数据来源：HKUDS/nanobot GitHub 仓库*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-07

## 1. 今日速览

PicoClaw 今日呈现**高活跃度开发状态**：24小时内新增8条Issues（全部开放）、6条PR（4条待审、2条已关闭），无新版本发布。社区焦点集中在**终端安全加固**（CVE级风险）、**多模型提供商兼容性修复**（Gemini/OpenRouter配置问题）以及**移动端体验优化**（Android输入交互）。值得关注的是，一条关于ANSI控制字符注入的安全Issue（#2377）已同步提交修复PR，响应速度体现团队对安全问题的重视。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 作者 | 状态 | 贡献内容 |
|:---|:---|:---|:---|
| [#2379](https://github.com/sipeed/picoclaw/pull/2379) | Skezza | ❌ **CLOSED** | Telegram Codex Orchestrator 功能分支，未合并即关闭，可能因设计方向调整或功能拆分 |
| [#2353](https://github.com/sipeed/picoclaw/pull/2353) | liuy | ✅ **CLOSED/已合并** | 新增 `membench` LOCOMO 内存基准测试工具，为 #1919 长期路线图提供评估基础设施 |

**关键进展**：内存子系统获得可量化的检索质量评估能力，`make mem` 即可运行端到端测试，标志着 PicoClaw 在**长上下文记忆优化**方向进入数据驱动迭代阶段。

---

## 4. 社区热点

### 🔥 讨论最活跃 Issues

| 排名 | Issue | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#1372](https://github.com/sipeed/picoclaw/issues/1372) OpenIM 插件支持 | **5条** | 企业IM集成需求——用户希望接入 OpenIM 开源即时通讯框架，拓展 B2B 场景 |
| 2 | [#2354](https://github.com/sipeed/picoclaw/issues/2354) WebUI 输入框失效 | **2条** | **阻断性体验问题**——WebUI 输入字段和发送按钮被禁用，但多轮对话API正常，指向前端状态管理Bug |
| 3 | [#2371](https://github.com/sipeed/picoclaw/issues/2371) Agent 运行时崩溃 | **1条** | 配置解析异常导致 `loop.go:2171` 报错，影响 OpenRouter/Ollama 多提供商场景 |

**趋势洞察**：OpenIM 插件请求（3月11日创建，持续活跃）反映社区对**中国企业级通讯生态**的适配诉求，与现有 Telegram/Discord 覆盖形成互补。

---

## 5. Bug 与稳定性

### 🚨 按严重程度排序

| 优先级 | Issue | 领域 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **P0-安全** | [#2377](https://github.com/sipeed/picoclaw/issues/2377) | shell/exec | **终端控制字符注入**：`exec` 工具和日志输出未过滤 ANSI 转义序列、Unicode Bidi 字符，可导致终端欺骗攻击 | ✅ [#2378](https://github.com/sipeed/picoclaw/pull/2378) 已提交 |
| **P1-功能阻断** | [#2354](https://github.com/sipeed/picoclaw/issues/2354) | channel/WebUI | WebUI 输入框完全不可用，前端元素被错误禁用 | ⏳ 待修复 |
| **P1-配置失效** | [#2371](https://github.com/sipeed/picoclaw/issues/2371) | provider/agent | 多提供商配置下 Agent 循环崩溃，涉及 `api_key` 解析和模型查找逻辑 | ✅ [#2372](https://github.com/sipeed/picoclaw/pull/2372) 已提交 |
| **P2-国际化** | [#2367](https://github.com/sipeed/picoclaw/issues/2367) | config/Android | 英文设置下最后一屏标题仍为中文 | ⏳ 待修复 |
| **P2-提供商兼容** | [#2374](https://github.com/sipeed/picoclaw/issues/2374) | provider | Gemini 模型按文档配置失败，但 cURL 正常，指向请求构造差异 | ⏳ 待诊断 |
| **P2-网关命令** | [#2373](https://github.com/sipeed/picoclaw/issues/2373) | build/gateway | Gateway 模式不支持 `stop` 等控制命令 | ⏳ 待修复 |

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) Android Enter键发送消息可禁用 | UX增强 | **高** | 移动端刚需，改动范围小，社区反馈直接 |
| [#1372](https://github.com/sipeed/picoclaw/issues/1372) OpenIM 插件 | 生态扩展 | **中** | 企业场景明确，但需评估与现有插件架构的兼容性 |
| [#2229](https://github.com/sipeed/picoclaw/pull/2229) 结构化终端UI | CLI体验 | **中-高** | PR已存在，不影响原有逻辑，现代CLI趋势 |
| [#2209](https://github.com/sipeed/picoclaw/pull/2209) Telegram TLS 可配置 | 兼容性 | **高** | 解决 Termux 等受限环境的实际部署障碍 |

**下一版本信号**：Provider 配置层（#2372）和终端安全（#2378）的修复 PR 同时触及配置解析和输出过滤基础设施，暗示 **v0.2.6** 可能是以**稳定性与安全性**为主的补丁版本。

---

## 7. 用户反馈摘要

### 😤 痛点
- **"配置地狱"**：Gemini 按官方文档配置无效（#2374），`api_key` 单复数字段兼容性问题（#2371 修复中）
- **移动端体验割裂**：Android 上 Enter 键行为不符合即时通讯习惯（#2376），WebUI 在移动浏览器完全不可用（#2354）
- **企业部署障碍**：Termux 环境 CA 证书不可信导致 Telegram 通道失败（#2209 PR 待审）

### ✅ 认可
- 多轮对话 API 稳定性获确认（#2354 用户提及 "normal multi-turn interactions work"）

### 🎯 使用场景
- **个人助手**：Android 手机端日常交互（#2376）
- **开发运维**：Termux/受限 Linux 环境部署（#2209, #2373）
- **企业集成**：OpenIM 私有化 IM 对接（#1372）

---

## 8. 待处理积压

> 以下 Issue/PR 已超 **7天** 无维护者响应，建议优先审阅：

| 条目 | 创建日期 | 最后更新 | 风险 |
|:---|:---|:---|:---|
| [#1372](https://github.com/sipeed/picoclaw/issues/1372) OpenIM 插件 | 2026-03-11 | 2026-04-06 | 企业用户流失风险，同类竞品已实现 |
| [#2229](https://github.com/sipeed/picoclaw/pull/2229) 结构化终端UI | 2026-03-31 | 2026-04-06 | 体验改进 PR 悬而未决，作者持续维护 |
| [#2209](https://github.com/sipeed/picoclaw/pull/2209) Telegram TLS 配置 | 2026-03-31 | 2026-04-06 | 解决 #1936 长期问题，Termux 用户阻塞 |

---

**数据来源**：GitHub API / sipeed/picoclaw  
**报告生成**：2026-04-07

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-07

---

## 1. 今日速览

NanoClaw 今日保持**高活跃度**，24小时内产生 **26 个 PR 更新**（14 个已合并/关闭，12 个待审）和 **8 个 Issue 更新**。社区核心关注点集中在**模型路由优化**（同一功能出现 3 个重复 Issue）、**多平台渠道扩展**（Matrix、Discord 线程、飞书）以及**基础设施稳定性**（消息丢失修复、容器生命周期管理）。值得注意的是，OpenAI Codex 引擎支持正稳步推进，已有 3 个相关 PR 处于活跃状态。SSL 证书过期问题 (#1503) 持续 9 天未解决，影响官网访问体验。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR（14 个）

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#1660** | johnnyfish | Gmail 渠道新增 OneCLI 凭证模式检测，提升企业级部署兼容性 | [PR #1660](https://github.com/qwibitai/nanoclaw/pull/1660) |
| **#1677, #1676** | shin902 | Discord 线程自动注册为派生群组 + 会话隔离（日文团队，双 PR 迭代后合并） | [PR #1677](https://github.com/qwibitai/nanoclaw/pull/1677) |
| **#1623** | yaniv-golan | **关键修复**：解决消息管道导致的 30 分钟死锁问题 | [PR #1623](https://github.com/qwibitai/nanoclaw/pull/1623) |
| **#1675** | uniclawassistant | 自更新流水线干运行测试（基础设施验证） | [PR #1675](https://github.com/qwibitai/nanoclaw/pull/1675) |
| **#1674** | openclaw-shi | `register_group` MCP 工具新增 `group_type` 参数（main/chat/thread） | [PR #1674](https://github.com/qwibitai/nanoclaw/pull/1674) |
| **#1592** | mathiasz1 | 管道消息发送"处理中"确认，改善 UX 一致性 | [PR #1592](https://github.com/qwibitai/nanoclaw/pull/1592) |
| **#1673** | ufJmacca | Codex 分支新增 Telegram 渠道支持与测试覆盖 | [PR #1673](https://github.com/qwibitai/nanoclaw/pull/1673) |
| **#1508** | SimonKvalheim | 修复审核代理容器在草稿批准/拒绝后未关闭的内存泄漏（~240MB/容器） | [PR #1508](https://github.com/qwibitai/nanoclaw/pull/1508) |
| **#1664** | castours-dev | 新增 Castours Telegram 群组注册（社区运营） | [Issue #1664](https://github.com/qwibitai/nanoclaw/issues/1664) |
| **#1672** | jizusun | Kiro CLI SigV4 认证调研结论：**不支持**，关闭 | [Issue #1672](https://github.com/qwibitai/nanoclaw/issues/1672) |
| **#541** | k-fls | 改进队列 4 状态生命周期（ACTIVE→IDLE→EVICTABLE→STOPPING），因阻塞关闭 | [PR #541](https://github.com/qwibitai/nanoclaw/pull/541) |

**整体推进评估**：基础设施稳定性显著提升（死锁修复、内存泄漏修复、容器生命周期优化），多引擎架构（Codex）进入实质测试阶段，渠道生态持续扩展。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| **#1** | #1503 SSL 证书过期 | **8 评论** | 官网 `nanoclaw.dev` 证书失效 9 天，影响品牌信任与文档访问 | [Issue #1503](https://github.com/qwibitai/nanoclaw/issues/1503) |
| **#2** | #1664 Castours 群组注册 | **1 评论** | 社区运营：新团队入驻 NanoClaw 生态 | [Issue #1664](https://github.com/qwibitai/nanoclaw/issues/1664) |

**深层分析**：SSL 证书问题长期未解，反映运维响应机制存在缺口。建议建立自动化证书监控（如 Let's Encrypt + 告警）。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | 消息管道 30 分钟死锁 | **已修复** | #1623 | [PR #1623](https://github.com/qwibitai/nanoclaw/pull/1623) |
| 🔴 **高** | 审核代理容器内存泄漏（~240MB） | **已修复** | #1508 | [PR #1508](https://github.com/qwibitai/nanoclaw/pull/1508) |
| 🟡 **中** | 查询中途代理输出文本导致消息丢失 | **待审** | #1576 | [PR #1576](https://github.com/qwibitai/nanoclaw/pull/1576) |
| 🟡 **中** | SSL 证书过期 | **未修复** | 无 | [Issue #1503](https://github.com/qwibitai/nanoclaw/issues/1503) |
| 🟡 **中** | uv 缓存未持久化导致重复下载 | **待审** | #1671 | [PR #1671](https://github.com/qwibitai/nanoclaw/pull/1671) |

---

## 6. 功能请求与路线图信号

### 高优先级功能（已有 PR 实现）

| 功能 | 状态 | 信号强度 | 说明 |
|:---|:---|:---:|:---|
| **关键词预路由模型选择** | 3 个重复 Issue + 1 PR | ⭐⭐⭐⭐⭐ | scottgl9 连续提交 #1679/#1681/#1682，PR #1680 已实现零成本字符串匹配路由 |
| **Matrix 渠道（E2EE）** | PR 待审 #1624 | ⭐⭐⭐⭐⭐ | 完整 Rust 加密存储实现，代码质量高 |
| **OpenAI Codex 引擎** | 3 个活跃 PR | ⭐⭐⭐⭐⭐ | #963（核心引擎）、#1673（Telegram 适配）、#1593（管理控制） |

### 新兴需求（仅 Issue 阶段）

| 功能 | Issue | 纳入可能性评估 |
|:---|:---|:---|
| Claude Code 本地设置忽略 | #1665 | 高（一行配置，社区痛点明确） |
| 凭证代理合规风险评估 | #1669 | 中（需官方法律/安全团队回应） |

**路线图预测**：v0.x 下一版本大概率包含：**关键词路由**（成本优化）、**Matrix 渠道**（企业/隐私场景）、**Codex 引擎 GA**（多模型战略）。

---

## 7. 用户反馈摘要

### 真实痛点
- **运维体验**："SSL 证书 9 天未修，影响对项目专业度的信任" (#1503)
- **开发体验**：Claude Code 生成的本地设置文件被 git 追踪，需手动清理 (#1665)
- **成本敏感**：关键词路由需求反复强调"zero-cost"，反映用户对 LLM 调用成本的深度关注 (#1679-1682)

### 使用场景扩展
- **企业 CI/CD**：尝试将 Kiro CLI 集成到 AWS 环境（SigV4 调研，结论为不支持）(#1672)
- **多平台运营**：Telegram、Discord、Matrix、飞书、Gmail 渠道并行推进，显示用户群体多元化

### 合规担忧
- Anthropic 明确禁止 OAuth 反向代理，用户询问凭证代理实现是否触发风控 (#1669) — **需官方回应**

---

## 8. 待处理积压

| 类型 | 条目 | 创建时间 | 风险 | 行动建议 |
|:---|:---|:---:|:---|:---|
| **Issue** | #1503 SSL 证书过期 | 2026-03-28 (9天) | 🔴 品牌损害 | 立即修复，建立自动化监控 |
| **PR** | #963 Codex 引擎支持 | 2026-03-11 (27天) | 🟡 功能滞后 | 优先代码审查，协调 #1673/#1593 合并策略 |
| **PR** | #541 改进队列生命周期 | 2026-02-26 (40天) | 🟡 架构债务 | 明确阻塞原因，或拆分增量合并 |
| **PR** | #1576 消息丢失修复 | 2026-04-01 (6天) | 🟡 稳定性 | 加速审查，关联 #1623 验证 |

---

*日报生成时间：2026-04-07*  
*数据来源：qwibitai/nanoclaw GitHub 公开 API*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-07

## 1. 今日速览

NullClaw 今日保持**中高活跃度**，7 个 PR 中有 2 个完成合并/关闭，5 个处于待审阅状态。核心亮点是 **REST Admin API 的三层递进式开发**（#770 → #771 → #780），显示项目正系统性构建运维管理能力。同时出现一个**关键回归 Bug**（#779）：最新版本导致 shell 工具在非 Docker 环境下失效，已影响 brew 安装用户。无新版本发布，社区整体健康但需关注稳定性修复响应速度。

---

## 2. 版本发布

**无**

---

## 3. 项目进展

### ✅ 已合并/关闭 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#692](https://github.com/nullclaw/nullclaw/pull/692) | realrubberduckdev | **修复 `NULLCLAW_HOME` 环境变量在 cron 模块中被忽略的问题** | 解决 Docker 部署场景下的权限崩溃（uid 65534），提升容器化部署可靠性 |
| [#716](https://github.com/nullclaw/nullclaw/pull/716) | festoinc | **新增 Calculator 工具**（20 种数学运算） | 扩展内置工具集，覆盖基础数学场景，减少对外部工具的依赖 |

**整体评估**：今日合并聚焦"基础设施加固 + 工具生态扩展"，为后续企业级部署和开发者体验奠定基础。

---

## 4. 社区热点

| 热度指标 | PR/Issue | 分析 |
|:---|:---|:---|
| **架构深度** | [#780](https://github.com/nullclaw/nullclaw/pull/780) | REST Admin API 的"终章"PR，依赖链长达 3 层（#770→#771→#780），体现社区对**可观测性、远程管理**的强烈需求——目标用户已从个人开发者扩展到团队/企业运维场景 |
| **紧急回归** | [#779](https://github.com/nullclaw/nullclaw/issues/779) | shell 工具 Docker 错误虽仅 1 条评论，但涉及 **brew 安装渠道的核心用户路径**，影响面被严重低估 |
| **稳定性防御** | [#781](https://github.com/nullclaw/nullclaw/pull/781) | 针对 GLM-5 返回 `null` 值导致崩溃的防御性编程，反映**多模型适配的复杂性**正在上升 |

**核心诉求洞察**：社区正推动 NullClaw 从"个人 AI 助手"向"可运维、可观测的生产级平台"演进，但快速迭代中回归测试覆盖不足。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#779](https://github.com/nullclaw/nullclaw/issues/779) | **v2026.3.21 后 shell 工具在非 Docker 环境崩溃**；用户明确反馈"未使用 Docker"却遭遇 Docker 相关错误 | 🚨 **无 fix PR**，需立即响应 |
| 🟡 **中** | [#781](https://github.com/nullclaw/nullclaw/pull/781) | GLM-5 返回 `tool_calls: null` 导致 panic/SIGSEGV | ✅ **已有 fix PR 待合并** |

**风险评估**：#779 是典型的**条件编译/功能开关遗漏**——可能某次提交将 Docker 相关逻辑设为了默认路径。考虑到 brew 用户基数，建议 24 小时内发布热修复。

---

## 6. 功能请求与路线图信号

| 来源 | 信号 | 纳入可能性 |
|:---|:---|:---|
| [#770](https://github.com/nullclaw/nullclaw/pull/770) + [#771](https://github.com/nullclaw/nullclaw/pull/771) + [#780](https://github.com/nullclaw/nullclaw/pull/780) | **完整 REST Admin API**：运行时状态、配置读写、模型列表、cron 管理、通道状态、技能管理、MCP 服务器、会话/记忆/历史管理 | ⭐⭐⭐⭐⭐ **极高**——已形成完整 PR 链，预计合并后即发布 |
| [#757](https://github.com/nullclaw/nullclaw/pull/757) | **HEARTBEAT.md 任务自动调度**：修复"任务被解析但永不执行"的长期缺陷 | ⭐⭐⭐⭐☆ **高**——明确标注为 bugfix，解决核心功能失效问题 |
| [#716](https://github.com/nullclaw/nullclaw/pull/716)（已合并） | 内置 Calculator 工具 | ⭐⭐⭐☆☆ **中**——工具生态持续扩展的信号 |

**下一版本预测**：REST Admin API 完整落地后，NullClaw 将具备**远程管理、多实例监控、配置即代码**能力，版本号可能跃升至 v2026.4.x 或 v2026.5.0。

---

## 7. 用户反馈摘要

> **痛点提炼自 [#779](https://github.com/nullclaw/nullclaw/issues/779)**：

| 维度 | 具体内容 |
|:---|:---|
| **使用场景** | 个人开发者，brew 安装，"yolo mode"（推测为自动确认模式） |
| **核心不满** | "最新更新破坏了 shell 工具"——**升级即回退**的体验 |
| **关键线索** | v2026.3.21 正常，后续版本异常；明确排除 Docker 使用场景 |
| **隐含需求** | 更清晰的安装渠道隔离（brew 用户不应感知 Docker 逻辑）、版本回滚机制 |

> **满意度参考**：该用户主动 pinpoint 正常版本号，显示对项目有跟踪习惯，属于**高价值反馈者**，需重点维护。

---

## 8. 待处理积压

| PR/Issue | 创建时间 | 状态 | 提醒 |
|:---|:---|:---|:---|
| [#770](https://github.com/nullclaw/nullclaw/pull/770) | 2026-04-05 | 🔶 待合并（依赖基础） | **阻塞 2 个下游 PR**，建议优先审阅 |
| [#771](https://github.com/nullclaw/nullclaw/pull/771) | 2026-04-05 | 🔶 待合并（依赖 #770） | 构建于 #770 之上，需顺序处理 |
| [#780](https://github.com/nullclaw/nullclaw/pull/780) | 2026-04-06 | 🔶 待合并（依赖 #770, #771） | 完整 Admin API，合并后可显著降低运维门槛 |
| [#757](https://github.com/nullclaw/nullclaw/pull/757) | 2026-04-01 | 🔶 待合并 | HEARTBEAT 核心功能修复，积压 6 天 |
| [#779](https://github.com/nullclaw/nullclaw/issues/779) | 2026-04-06 | 🚨 **无响应** | **24 小时内需确认或分配** |

---

**日报生成时间**：2026-04-07  
**数据源**：github.com/nullclaw/nullclaw

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-07

> **数据周期**：2026-04-06 00:00 UTC 至 2026-04-07 00:00 UTC  
> **项目地址**：[nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 今日呈现**高活跃度、高压力**的双重特征。过去24小时内，Issues 激增 33 条（28条活跃/新开，仅5条关闭），PR 队列积压 50 条（45条待合并），**活跃/关闭比高达 5.6:1**，表明项目正处于密集迭代期但消化能力承压。核心矛盾集中在**多租户所有权模型（Ownership Model）的落地阵痛**：staging 分支合并后引发技能可见性、凭证隔离、WASM 通道命名等一系列回归问题，团队正紧急修复。与此同时，阿里云服务商支持、TUI 终端界面、层级化上下文摘要等大型功能 PR 持续推进，显示长期路线图未受短期稳定性问题影响。

---

## 2. 版本发布

**无新版本发布**

> 注：PR [#2075](https://github.com/nearai/ironclaw/pull/2075) 已提交 v0.24.1 版本发布流程（`0.24.0 → 0.24.1`），当前状态为待合并，预计近日发布。该版本为补丁更新，主要包含 CI 标签优化等内部改进，无 API 破坏性变更。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2051](https://github.com/nearai/ironclaw/pull/2051) | serrrfirat | **修复 Telegram WASM 通道命名回归**：解除 `telegram` 作为保留名的限制，统一保留名列表管理 | 解除 ownership 模型合并后的通道启动阻塞，恢复多租户消息通道能力 |
| [#2010](https://github.com/nearai/ironclaw/pull/2010) | zetyquickly | **修复 `AGENT_AUTO_APPROVE_TOOLS` 在 Engine V2 失效问题**：统一线程-能力-工具授权路径 | 恢复自动化工作流的关键配置能力，减少人工审批摩擦 |

### 待合并的关键进展

| PR | 规模 | 核心功能 | 状态 |
|:---|:---|:---|:---|
| [#2086](https://github.com/nearai/ironclaw/pull/2086) | M | **修复共享技能可见性**：为 `Store` trait 新增 `list_memory_docs_by_owner(user_id)`，使 admin 安装的技能对 gateway 用户可见 | 待合并，直接响应 [#2084](https://github.com/nearai/ironclaw/issues/2084) |
| [#2083](https://github.com/nearai/ironclaw/pull/2083) | XL | **修复 SSE 事件顺序 Bug**：将 "Done" 状态移至网关响应后发送，解决 Web UI 消息"卡住"问题 | 待合并，含回归测试 |
| [#2081](https://github.com/nearai/ironclaw/pull/2081) | S | **修复 Ollama 默认 URL**：Windows 环境下使用 `127.0.0.1` 替代 `localhost`，解决 502 错误 | 待合并 |
| [#2080](https://github.com/nearai/ironclaw/pull/2080) | M | **CI 修复**：非 NearAI 后端跳过 DNS 验证，解决 CI 环境构建失败 | 待合并 |

**整体评估**：今日合并量偏低（5/50），但待合并队列中包含 4 个直接修复生产回归的 PR，预计 24-48 小时内稳定性将显著改善。大型功能 PR（[#1446](https://github.com/nearai/ironclaw/pull/1446) 阿里云、[#1973](https://github.com/nearai/ironclaw/pull/1973) TUI、[#1566](https://github.com/nearai/ironclaw/pull/1566) 层级摘要）持续积累，技术债务与功能迭代并行。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 | 背后信号 |
|:---|:---|:---:|:---|:---|
| 1 | [#846](https://github.com/nearai/ironclaw/issues/846) `onboard` 数据库保存失败但主程序启动成功 | **4** | 初始化流程的容错性与错误处理一致性 | 用户困惑于"失败却可用"的矛盾状态，暴露 CLI 引导体验的技术债务 |
| 2 | [#2084](https://github.com/nearai/ironclaw/issues/2084) Gateway 用户技能不可见（`resolve_user_project` 引入） | **2** | **P0 生产阻塞**：多租户场景下技能隔离过度，admin 技能无法共享 | **Ownership 模型落地的核心设计冲突**：安全隔离 vs. 管理便利性 |
| 3 | [#1350](https://github.com/nearai/ironclaw/issues/1350) LLM 提供商热切换无需重启 | **2** | 运维体验优化，降低配置变更停机时间 | 企业用户对高可用性的期待，与当前架构的静态配置模式冲突 |
| 4 | [#1996](https://github.com/nearai/ironclaw/issues/1996) Routine 运行因工具禁用失败 | **1** | 自动化工作流的可靠性 | Engine V2 工具授权状态的上下文传递存在漏洞 |
| 5 | [#2069](https://github.com/nearai/ironclaw/issues/2069) WASM 工具执行移除 "default" 凭证回退 | **1** | **安全加固**：消除跨租户静默凭证降级风险 | 安全审计驱动的架构收紧，可能破坏部分现有集成 |

### 热点分析

**#2084 技能可见性冲突** 是今日最具代表性的社区张力点：
- **技术背景**：`resolve_user_project` 将线程绑定到用户专属项目，实现技能隔离
- **用户痛点**：Admin 在 `admin_project` 安装的技能，Gateway 用户因线程在 `user_project` 而无法见
- **方案分歧**：[#2086](https://github.com/nearai/ironclaw/pull/2086) 采用"按 owner 扩展查询"的妥协方案，[#2085](https://github.com/nearai/ironclaw/issues/2085) 则主张完整的"技能发布-订阅"模型

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 问题描述 | 影响范围 | Fix PR 状态 |
|:---|:---|:---|:---|:---|
| **P0** | [#2084](https://github.com/nearai/ironclaw/issues/2084) | Gateway 用户技能列表为空，无法使用任何技能 | 所有 Web/Telegram/API 多租户用户 | [#2086](https://github.com/nearai/ironclaw/pull/2086) 待合并 |
| **P0** | [#2089](https://github.com/nearai/ironclaw/issues/2089) | 多租户响应延迟 5-10 秒（简单问候） | 生产环境所有交互 | 无 PR，需性能分析 |
| **P1** | [#2069](https://github.com/nearai/ironclaw/issues/2069) | WASM 工具 "default" 凭证静默回退（跨租户风险） | 安全敏感部署 | 规划中，无 PR |
| **P1** | [#2068](https://github.com/nearai/ironclaw/issues/2068) | Sandbox 作业使用 owner 凭证而非创建者凭证 | 多租户作业隔离 | 规划中，无 PR |
| **P1** | [#1996](https://github.com/nearai/ironclaw/issues/1996) | Routine 运行时工具被禁用 | 自动化工作流用户 | 无 PR |
| **P2** | [#2079](https://github.com/nearai/ironclaw/issues/2079) | Web UI 消息"卡住"需刷新（SSE 顺序 Bug） | Web 用户体验 | [#2083](https://github.com/nearai/ironclaw/pull/2083) 待合并 |
| **P2** | [#2087](https://github.com/nearai/ironclaw/issues/2087) | Notion 设置后 IronClaw 停止响应 | 特定集成用户 | 无 PR，需复现 |
| **P2** | [#1999](https://github.com/nearai/ironclaw/issues/1999) | 技能名称含空格安装失败 | Skillhub 用户体验 | 无 PR |
| **P2** | [#1998](https://github.com/nearai/ironclaw/issues/1998) | Slack 连接流程中断 | Slack 集成用户 | 无 PR |
| **P2** | [#1992](https://github.com/nearai/ironclaw/issues/1992) | Google OAuth 400 错误 | Google Workspace 用户 | 无 PR |

### 回归问题专项

**Ownership 模型合并（~2026-04-06）引入的连锁反应**：
1. [#2048](https://github.com/nearai/ironclaw/issues/2048) → [#2051](https://github.com/nearai/ironclaw/pull/2051) ✅ 已修复（Telegram WASM 通道）
2. [#2084](https://github.com/nearai/ironclaw/issues/2084) → [#2086](https://github.com/nearai/ironclaw/pull/2086) ⏳ 待合并（技能可见性）
3. [#2079](https://github.com/nearai/ironclaw/issues/2079) → [#2083](https://github.com/nearai/ironclaw/pull/2083) ⏳ 待合并（SSE 顺序）

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 需求描述 | 与现有 PR 关联 | 纳入可能性 |
|:---|:---|:---|:---|:---:|
| [#1350](https://github.com/nearai/ironclaw/issues/1350) | 增强 | LLM 提供商热重载 | 无直接 PR，但配置系统重构中 | ⭐⭐⭐ 高 |
| [#70](https://github.com/nearai/ironclaw/issues/70) | 新功能 | Feed 系统（非侵入式信息流） | 无 PR，但 [#1566](https://github.com/nearai/ironclaw/pull/1566) 层级摘要可能共享基础设施 | ⭐⭐⭐ 高 |
| [#2082](https://github.com/nearai/ironclaw/issues/2082) | RFC | 追踪驱动的自我改进循环 | 无 PR，概念阶段 | ⭐⭐ 中 |
| [#2088](https://github.com/nearai/ironclaw/issues/2088) | 增强 | Admin 创建的系统提示全局可用 | 与 [#2085](https://github.com/nearai/ironclaw/issues/2085) 技能隔离方案相关 | ⭐⭐⭐ 高 |
| [#2078](https://github.com/nearai/ironclaw/issues/2078) | 增强 | 禁止普通用户创建工具技能（多租户管控） | 权限系统扩展，无 PR | ⭐⭐ 中 |
| [#2077](https://github.com/nearai/ironclaw/issues/2077) | 生态 | 发布 market.near.ai 合约源码 | 需业务决策，非技术 | ⭐ 低 |

**路线图信号解读**：
- **短期（1-2 周）**：多租户权限精细化（#2078、#2088）与热重载（#1350）是高频诉求，与 ownership 模型完善直接相关
- **中期（1-2 月）**：Feed 系统（#70）与层级摘要（[#1566](https://github.com/nearai/ironclaw/pull/1566)）结合，可能形成"智能体记忆-信息流转"的核心竞争力
- **长期**：自我改进循环（#2082）代表自主智能体的前沿探索，需基础设施成熟后启动

---

## 7. 用户反馈摘要

### 真实痛点（直接引用 Issues）

| 场景 | 用户原声 | 提炼问题 |
|:---|:---|:---|
| 初始化体验 | *"`onboard` fails with database error, but `ironclaw` starts successfully"* | 错误处理不一致，用户信任受损 |
| 多租户性能 | *"Even for simple questions, like 'hello,' it takes 5-10 seconds"* | 生产环境响应延迟，可能阻碍企业采用 |
| 技能管理 | *"Gateway users cannot see any skills... agent ignores user-installed skills entirely"* | 权限模型变更未充分考虑管理员-用户协作流程 |
| 集成稳定性 | *"after I asked to set up Notion and requested detailed instructions, IronClaw stopped responding"* | 特定工具链的鲁棒性不足，错误恢复机制缺失 |
| OAuth 体验 | *"The agent became confused about whether setup was already complete, showing conflicting status messages"* | 状态机设计缺陷，用户陷入配置迷宫 |

### 满意度信号

- **正面**：[#2054](https://github.com/nearai/ironclaw/issues/2054) 获得 Nerq Trust Score 78.1/100（B+）验证，外部认可项目质量
- **负面**：过去 7 天 "customer" 标签 Issue 激增，表明生产环境用户（非早期尝鲜者）正在大规模涌入，对稳定性预期更高

---

## 8. 待处理积压

### 长期未响应的重要事项

| Issue/PR | 创建时间 | 最后更新 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#846](https://github.com/nearai/ironclaw/issues/846) `onboard` 数据库错误 | 2026-03-10 | 2026-04-06 | 新用户流失 | 分配专人，1 周内闭环 |
| [#70](https://github.com/nearai/ironclaw/issues/70) Feed 系统 | 2026-02-14 | 2026-04-06 | 路线图漂移 | 确认与 [#1566](https://github.com/nearai/ironclaw/pull/1566) 的整合计划 |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) 阿里云支持 | 2026-03-20 | 2026-04-07 | 社区贡献冷却 | 核心维护者 review，避免贡献者流失 |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) Abound demo | 2026-03-30 | 2026-04-06 | 大型 PR 腐烂 | 拆分或优先合并，降低 rebase 成本 |
| [#1809](https://github.com/nearai/ironclaw/pull/1809) 及后续 6 个 staging promotion PR | 2026-03-31 起 | 持续更新 | 分支管理复杂化 | 加速合并或清理，减少 CI 队列压力 |

### 维护者关注提醒

> **Ownership 模型债务**：[#2068](https://github.com/nearai/ironclaw/issues/2068)-[#2074](https://github.com/nearai/ironclaw/issues/2074) 共 7 个关联 Issue 构成系统性安全加固需求，建议设立专项跟踪，避免碎片化修复引入新的不一致。

---

**日报生成时间**：2026-04-07 00:00 UTC  
**下次更新**：2026-04-08

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-07

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-04-07  
> **分析周期**: 过去24小时

---

## 1. 今日速览

LobsterAI 今日呈现**高活跃度开发状态**，11条待合并 PR 全部为新近提交或更新，无 Issues 活动表明当前阶段以功能迭代为主而非问题修复。核心开发力量集中在**定时任务（ScheduledTask）模块的全面升级**——4个相关 PR 覆盖 UI 重构、执行记录聚合、本地通知渠道及测试体验优化，显示该功能正从"可用"向"好用"快速演进。同时依赖更新密集（6条 Dependabot PR），CI 基础设施同步升级。整体健康度良好，但 PR 积压量较高，建议关注代码审查吞吐能力。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 功能推进（11 PR 待合并，0 已合并）

| 领域 | PR | 进展说明 |
|:---|:---|:---|
| **定时任务核心体验** | [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) | UI 全面升级：表格→卡片网格、新增搜索/日期筛选/历史分组，对标技能/MCP 页面设计标准 |
| | [#1449](https://github.com/netease-youdao/LobsterAI/pull/1449) | 解决定时任务历史记录侧栏堆积痛点：同一 job 多次执行折叠为可展开分组 |
| | [#1489](https://github.com/netease-youdao/LobsterAI/pull/1489) | 新增 macOS 本地通知渠道，修复"不通知"仍弹窗及配置显示异常问题 |
| | [#1486](https://github.com/netease-youdao/LobsterAI/pull/1486) | 创建表单新增"测试任务"按钮，缩短调试路径（createTask 返回类型同步调整） |
| | [#1490](https://github.com/netease-youdao/LobsterAI/pull/1490) | 修复编辑定时任务后通知渠道显示未更新的状态同步 bug |
| **协作会话体验** | [#1494](https://github.com/netease-youdao/LobsterAI/pull/1494) | 关键架构调整：技能选择状态从全局迁移至会话级隔离，解决跨会话状态污染问题 |
| **基础设施维护** | [#1493](https://github.com/netease-youdao/LobsterAI/pull/1493) [#1492](https://github.com/netease-youdao/LobsterAI/pull/1492) [#1491](https://github.com/netease-youdao/LobsterAI/pull/1491) | CI 工作流三件套升级：action-gh-release v1→2、setup-node v4→6、upload-artifact v4→7 |
| | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) [#1278](https://github.com/netease-youdao/LobsterAI/pull/1278) | Electron 41.1.1 及 Claude Agent SDK 0.2.90 安全/功能更新 |

**里程碑意义**：定时任务模块本周密集投入 5 个 PR，从底层通知机制到上层交互设计形成完整闭环，预计合并后将显著提升该功能的**生产环境可用性**。

---

## 4. 社区热点

> 今日所有 PR 评论数均为 0，👍 反应数为 0，社区讨论尚未形成热点。

**潜在热点预判**（基于 PR 内容影响力）：

| PR | 预判理由 | 链接 |
|:---|:---|:---|
| [#1494](https://github.com/netease-youdao/LobsterAI/pull/1494) 技能选择会话隔离 | 涉及全局状态架构变更，可能影响扩展开发者 | [查看](https://github.com/netease-youdao/LobsterAI/pull/1494) |
| [#1449](https://github.com/netease-youdao/LobsterAI/pull/1449) 定时任务记录折叠 | 直接解决高频使用场景的视觉噪音问题 | [查看](https://github.com/netease-youdao/LobsterAI/pull/1449) |

**诉求分析**：当前开发以内部需求驱动为主（网易有道团队），社区参与度指标偏低，建议后续 PR 描述增加"用户影响评估"章节以激发讨论。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **高** | 定时任务编辑后通知渠道显示未更新（旧值残留） | 待合并 | [#1490](https://github.com/netease-youdao/LobsterAI/pull/1490) |
| 🟡 **中** | "不通知"配置无效，仍触发 macOS 通知 | 待合并 | [#1489](https://github.com/netease-youdao/LobsterAI/pull/1489) |
| 🟡 **中** | 技能选择状态跨会话泄漏（全局状态设计缺陷） | 待合并 | [#1494](https://github.com/netease-youdao/LobsterAI/pull/1494) |

**风险评估**：3 个待修复 bug 均集中在定时任务与协作会话两大核心模块，建议优先合并 [#1490](https://github.com/netease-youdao/LobsterAI/pull/1490) 和 [#1489](https://github.com/netease-youdao/LobsterAI/pull/1489) 以阻断用户配置失效的负面体验。

---

## 6. 功能请求与路线图信号

**从 PR 反推的路线图信号**：

| 方向 | 证据 PR | 纳入下一版本概率 |
|:---|:---|:---:|
| 定时任务企业级增强 | #1488, #1449, #1489, #1486, #1490 | **90%** |
| 会话状态架构规范化 | #1494 | **85%** |
| Electron 框架现代化 | #1277 | **80%** |
| Claude 生态深度集成 | #1278 | **75%** |

**缺失信号**：今日无 MCP（Model Context Protocol）相关 PR，该领域近期热度下降；无多模态/语音交互新动向。

---

## 7. 用户反馈摘要

> 今日无 Issues 及 PR 评论数据，无法提取直接用户反馈。

**间接推断的用户场景**（基于 PR 修复的问题反推）：

| 痛点场景 | 来源 PR | 用户画像推断 |
|:---|:---|:---|
| 定时任务侧栏被历史记录淹没，难以定位普通对话 | [#1449](https://github.com/netease-youdao/LobsterAI/pull/1449) | 高频使用自动化任务的生产力用户 |
| 跨项目/话题时技能选择"记住"了不该记住的配置 | [#1494](https://github.com/netease-youdao/LobsterAI/pull/1494) | 多线程工作、频繁切换会话的高级用户 |
| 调试定时任务需"保存→返回→手动运行"三步 | [#1486](https://github.com/netease-youdao/LobsterAI/pull/1486) | 迭代配置的任务创建者 |
| 通知渠道显示"local"而非中文 | [#1489](https://github.com/netease-youdao/LobsterAI/pull/1489) | 中文母语用户为主的市场验证 |

---

## 8. 待处理积压

| 类型 | 详情 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| **依赖更新堆积** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 更新（4月2日创建，已5天） | 安全补丁延迟 | 优先合并或评估兼容性 |
| **CI 升级批次** | #1491, #1492, #1493 均为昨日创建 | 无即时风险，但批量合并可降低维护成本 | 安排集中审查 |
| **PR 审查瓶颈** | 11 PR 0 合并，平均等待时间上升 | 功能交付延迟、贡献者体验下降 | 公开审查排期或招募维护者 |

---

## 附录：数据完整性声明

- Issues 数据源：过去24小时 0 条活动（新开/活跃/关闭均为 0）
- PR 数据源：11 条待合并，最后更新时间跨度 2026-04-02 至 2026-04-06
- 反应数据：所有 PR 👍 数为 0，评论数为 undefined/0

> 本日报基于提供的 GitHub API 数据生成，未包含代码审查细节及分支冲突状态。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-04-07

---

## 1. 今日速览

Moltis 今日呈现**高频迭代态势**：24小时内 11 个 Issues 更新、9 个 PR 流转，核心贡献者 `penso` 主导了 6 个 PR，覆盖 Webhook 基础设施、Docker 构建修复、外部 Agent 桥接等关键领域。社区活跃度显著，Matrix 协议支持成为长期热门需求（#233 获 5 👍），同时企业级场景（Copilot Enterprise、Langfuse 追踪）持续获得工程投入。项目整体健康度良好，Bug 关闭率 57%（4/7），但网络绑定配置（#565）和 Provider LLM 列表获取（#568）两个新 Bug 需关注。

---

## 2. 版本发布

### [20260406.04](https://github.com/moltis-org/moltis/releases/tag/20260406.04)

| 属性 | 内容 |
|:---|:---|
| 发布日期 | 2026-04-06 |
| 版本类型 | 日常迭代版本（nightly/rolling） |

**注**：数据未提供详细 Release Notes。根据当日合并 PR 推断，本版本可能包含：
- Copilot Enterprise 代理端点路由修复（#355）
- Telegram 频道级代理支持（#550）
- 网站品牌更新与 Provider 展示优化（#567）

**迁移建议**：Docker 用户需确认已拉取最新镜像，此前版本存在默认特性缺失问题（见 #576 修复）。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（6 项）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#355](https://github.com/moltis-org/moltis/pull/355) | penso | **Copilot Enterprise 代理端点修复**：解析 `proxy-ep` 并强制流式传输，解决 421 错误 | 解锁企业 GitHub Copilot 集成，关闭关联 Issue #352 |
| [#550](https://github.com/moltis-org/moltis/pull/550) | BLumia | **Telegram 频道级代理支持**：可选配置代理 | 提升网络受限地区可用性，关联 Issue #548 |
| [#564](https://github.com/moltis-org/moltis/pull/564) | penso | **Cron 自动清理**：孤立会话 + 沙箱容器回收 | 解决资源泄漏，实现 #538 讨论需求 |
| [#567](https://github.com/moltis-org/moltis/pull/567) | penso | **网站品牌升级**：新增 "Works with your stack" 交互展示区 | 降低新用户认知门槛，突出 20+ Provider 生态 |
| [#573](https://github.com/moltis-org/moltis/pull/573) | c0bra | **Web 端 UX 优化**：会话侧边栏支持 Cmd/Ctrl+点击新标签页打开 | 提升多会话工作效率 |
| [#576](https://github.com/moltis-org/moltis/pull/576) | penso | **Docker 构建修复**：补全缺失的默认特性（matrix/firecrawl/ngrok/slack） | 消除 Docker 与源码构建的功能差异 |

**整体推进评估**：今日合并聚焦**企业就绪性**（Copilot Enterprise、资源治理）与**开发者体验**（Docker 一致性、Web 交互），为外部 Agent 生态扩展（#566）奠定基础设施。

---

## 4. 社区热点

### 高关注度议题

| 排名 | Issue/PR | 指标 | 诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#233 Matrix 支持](https://github.com/moltis-org/moltis/issues/233) | 5 👍, 4 评论, 创建 40 天 | **去中心化通信协议需求**：用户希望 Moltis 作为 Matrix 机器人运行，避免 vendor lock-in。今日 #569 显示用户尝试通过配置注入 Matrix 失败，说明文档/配置机制存在 gap |
| 2 | [#565 网络绑定登录失败](https://github.com/moltis-org/moltis/issues/565) | 1 👍, 1 评论 | **自托管场景阻塞**：用户将绑定地址从 `127.0.0.1` 改为 `0.0.0.0` 或局域网 IP 后 OAuth 登录系统失效，影响本地网络部署 |
| 3 | [#575 通用 Webhook 入口](https://github.com/moltis-org/moltis/pull/575) | 新提交 | **AI Agent 触发器基础设施**：支持 GitHub/GitLab/Stripe/Generic 源，9 种认证模式，预示 Moltis 向"Agent 编排中枢"演进 |

**社区信号**：Matrix 支持已形成长期呼声，建议维护者评估是否纳入 Q2 路线图或提供明确的社区贡献指引。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#565](https://github.com/moltis-org/moltis/issues/565) | OPEN | 绑定非 localhost 地址后 OAuth 登录系统失效 | 无 |
| 🟡 **中** | [#568](https://github.com/moltis-org/moltis/issues/568) | OPEN | 已注册 Provider 无法检索 LLM 列表 | 无 |
| 🟢 **低** | [#549](https://github.com/moltis-org/moltis/issues/549) | ✅ CLOSED | macOS 桌面版 Codex OAuth 流程失败 | #573 相关修复 |
| 🟢 **低** | [#569](https://github.com/moltis-org/moltis/issues/569) | ✅ CLOSED | Matrix 配置解析失败（配置注入方式不正确） | 文档/配置机制需改进 |
| 🟢 **低** | [#572](https://github.com/moltis-org/moltis/issues/572) | ✅ CLOSED | Telegram 频道账户未找到 | #550 修复 |

**风险评估**：#565 可能涉及 OAuth 回调 URL 生成逻辑对 `Host` 头的依赖，影响所有非标准端口/地址部署场景，建议优先响应。

---

## 6. 功能请求与路线图信号

### 今日新增 Feature Request（4 项）

| Issue | 作者 | 需求 | 与现有 PR 关联 | 纳入可能性评估 |
|:---|:---|:---|:---|:---|
| [#574](https://github.com/moltis-org/moltis/issues/574) | azharkov78 | **按主题路由模型**（Topic-based Model Routing） | 无 | ⭐⭐⭐ 高：与现有 channel/provider 抽象契合 |
| [#571](https://github.com/moltis-org/moltis/issues/571) | bsarkisov | **Prompt 缓存** | 无 | ⭐⭐⭐ 高：性能优化通用需求，技术可行 |
| [#570](https://github.com/moltis-org/moltis/issues/570) | bsarkisov | **本地 OpenAI Whisper 提供商引导流程** | 无 | ⭐⭐ 中：语音输入场景，需评估优先级 |
| [#563](https://github.com/moltis-org/moltis/issues/563) | omaralvarez | **PDF 文件接收与处理** | 无 | ⭐⭐ 中：RAG/文档场景，可能依赖外部解析服务 |

### 工程投入方向（基于活跃 PR）

| PR | 方向 | 信号解读 |
|:---|:---|:---|
| [#566](https://github.com/moltis-org/moltis/pull/566) | 外部 Agent 桥接（Claude Code/Codex CLI/opencode 等） | Moltis 定位从"聊天服务器"扩展为"Agent 会话中枢" |
| [#535](https://github.com/moltis-org/moltis/pull/535) | Langfuse 可观测性集成 | 企业级部署的可观测性需求 |
| [#575](https://github.com/moltis-org/moltis/pull/575) | 通用 Webhook 入口 | 事件驱动的 Agent 触发架构 |

---

## 7. 用户反馈摘要

### 痛点与阻塞

> *"Adding 'matrix' to 'proposed' channels section in config doesn't resolved properly"* — [#569](https://github.com/moltis-org/moltis/issues/569) bsarkisov

**解读**：配置系统的"proposed channels"机制存在认知鸿沟，用户期望通过配置声明启用实验性功能，但实际需要代码级支持。

> *"Login systematically fails when changing bind to 0.0.0.0"* — [#565](https://github.com/moltis-org/moltis/issues/565) cyrilmhansen

**解读**：自托管用户（家庭服务器/局域网部署）遭遇 OAuth 回调地址不匹配，需支持动态回调 URL 或配置覆盖。

### 积极反馈场景

- **企业 Copilot 修复**（#355）：解决 421 错误后，企业用户可正常使用流式响应
- **Telegram 代理**（#550）：网络受限地区用户获得连接稳定性提升

### 未满足期望

- Matrix 社区等待 40 天仍未获官方时间线回应
- PDF 处理、语音输入等多模态需求开始涌现，当前架构以文本聊天为核心

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 状态 | 提醒原因 |
|:---|:---|:---|:---|
| [#233](https://github.com/moltis-org/moltis/issues/233) Matrix 支持 | 2026-02-25 | OPEN, 5 👍 | **40 天无官方回应**，社区呼声最高的协议支持，建议维护者更新标签或发布贡献指南 |
| [#535](https://github.com/moltis-org/moltis/pull/535) Langfuse 追踪 | 2026-04-01 | OPEN | 6 天待审，可观测性基础设施，影响企业采用决策 |
| [#566](https://github.com/moltis-org/moltis/pull/566) 外部 Agent 桥接 | 2026-04-06 | OPEN | 架构级 PR，需设计评审确认与现有 session 系统的集成边界 |

---

*日报生成时间：2026-04-07 · 数据来源：GitHub API*  
*项目地址：https://github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-07

---

## 1. 今日速览

CoPaw 项目今日呈现**高活跃度**，24小时内产生28条Issue更新（24条活跃/新开，4条关闭）和15条PR更新（12条待合并，3条已合并/关闭）。社区聚焦**稳定性修复**与**渠道扩展**两大主线：MCP客户端生命周期管理、热重载机制、WhatsApp/Discord等渠道修复成为核心战场。值得注意的是，**3个首次贡献者PR**涌现，显示社区参与度提升。无新版本发布，当前最新版本仍为v1.0.1/v1.0.2b1。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的PR

| PR | 作者 | 核心贡献 | 关联Issue |
|:---|:---|:---|:---|
| [#2889](https://github.com/agentscope-ai/CoPaw/pull/2889) | pan-x-c | **CoPaw Local更新支持**：支持Llama.cpp在线更新，修复`MAX_REPETITION_THRESHOLD=20000`解析错误 | #2732, #2739, #2685 |
| [#2998](https://github.com/agentscope-ai/CoPaw/pull/2998) | mozovw | **[首次贡献] MCP客户端缓存机制**：避免每次请求重复注册MCP客户端，解决`list_tools()`引发的`CancelledError` | #2999 |
| [#2974](https://github.com/agentscope-ai/CoPaw/pull/2974) | shaojun | Logo相关更新（细节未公开） | - |

### 关键推进方向

- **本地模型生态**：Llama.cpp更新功能落地，降低本地模型维护门槛
- **MCP协议稳定性**：缓存机制解决高频请求场景下的连接抖动问题
- **新贡献者培养**：3个首次贡献者PR进入流程（#2998, #2366, #2976）

---

## 4. 社区热点

### 讨论最活跃的Issues

| 排名 | Issue | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **空闲时CPU占用100%（AnyIO取消忙循环）** | 9 | 生产环境部署的致命性能问题，用户追踪定位到AnyIO取消处理机制 | [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) |
| 2 | **llama.cpp无法安装（下载后界面无响应）** | 8 | 本地模型入门门槛，Windows/macOS元数据目录导致解压失败 | [#2955](https://github.com/agentscope-ai/CoPaw/issues/2955) |
| 3 | **Skills Hub管理页面需求** | 6 | 技能生态 discoverability 不足，用户呼吁官方技能市场 | [#2418](https://github.com/agentscope-ai/CoPaw/issues/2418) |
| 4 | **Agent Skill标签索引机制** | 4 | LLM依赖语义理解选择技能不可靠，需结构化标签检索 | [#2323](https://github.com/agentscope-ai/CoPaw/issues/2323) |

### 热点分析

- **性能焦虑**：#2888的CPU问题直接影响服务器部署成本，用户已提供详细诊断（AnyIO busy loop），但尚未见官方修复PR
- **本地化痛点**：#2955反映Windows/macOS打包元数据（`__MACOSX`, `._*`）导致llama.cpp解压失败，社区PR [#2989](https://github.com/agentscope-ai/CoPaw/pull/2989) 已针对性修复
- **生态建设**：Skills Hub呼声持续（#2418, #2361, #2323），用户明确对比OpenAI GPTs商店，期待官方策展降低技能发现成本

---

## 5. Bug 与稳定性

### 🔴 严重（影响核心功能/生产部署）

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|
| [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) | **空闲时单核CPU 100%** - AnyIO取消处理忙循环 | ✅ 已关闭 | 已修复（未标注PR） |
| [#2960](https://github.com/agentscope-ai/CoPaw/issues/2960) | **MCP热重载未清理导致CPU飙升** - 客户端初始化两次 | 🟡 开放 | [#2979](https://github.com/agentscope-ai/CoPaw/pull/2979) |
| [#2999](https://github.com/agentscope-ai/CoPaw/issues/2999) | **MCP重复注册引发任务取消** - 每次请求重建连接 | 🟡 开放 | ✅ [#2998](https://github.com/agentscope-ai/CoPaw/pull/2998) 已合并 |
| [#2967](https://github.com/agentscope-ai/CoPaw/issues/2967) | **execute_shell_command绕过文件守护** - 安全绕过 | 🟡 开放 | [#2978](https://github.com/agentscope-ai/CoPaw/pull/2978) |
| [#2911](https://github.com/agentscope-ai/CoPaw/issues/2911) | **Windows客户端数小时后自动关闭** | 🟡 开放 | 待修复 |

### 🟡 中等（功能受限/体验受损）

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|
| [#2955](https://github.com/agentscope-ai/CoPaw/issues/2955) | llama.cpp下载后界面无响应（元数据目录问题） | 🟡 开放 | [#2989](https://github.com/agentscope-ai/CoPaw/pull/2989) |
| [#2988](https://github.com/agentscope-ai/CoPaw/issues/2988) | Ollama本地模型无法调用工具（`stream_tool_parsing=False`） | 🟡 开放 | 待修复 |
| [#2965](https://github.com/agentscope-ai/CoPaw/issues/2965) | 图片读取内容与原文件不一致（Minimax多模态） | 🟡 开放 | 待修复 |
| [#2992](https://github.com/agentscope-ai/CoPaw/issues/2992) | 超长会话后输出乱码（多语言混合） | 🟡 开放 | 待修复 |
| [#2991](https://github.com/agentscope-ai/CoPaw/issues/2991) | 停止按钮无效 - 无法中断Agent响应 | 🟡 开放 | [#2987](https://github.com/agentscope-ai/CoPaw/pull/2987) |

### 🟢 轻微（UI/体验优化）

- [#2985](https://github.com/agentscope-ai/CoPaw/issues/2985) GPU加速文案与实际下载逻辑不符（已关闭）
- [#2970](https://github.com/agentscope-ai/CoPaw/issues/2970) Windows输入框中文红色波浪线（已关闭）
- [#2983](https://github.com/agentscope-ai/CoPaw/issues/2983) Markdown表格换行不生效
- [#2981](https://github.com/agentscope-ai/CoPaw/issues/2981) 语音设置默认未启用语音输入

---

## 6. 功能请求与路线图信号

### 高可行性（已有PR或明确路径）

| 需求 | Issue/PR | 信号强度 | 判断依据 |
|:---|:---|:---:|:---|
| **WhatsApp渠道支持** | [#2962](https://github.com/agentscope-ai/CoPaw/pull/2962) | ⭐⭐⭐⭐⭐ | PR已开，基于neonize直接连接，无Meta API依赖 |
| **MCP生命周期优化** | [#2979](https://github.com/agentscope-ai/CoPaw/pull/2979), [#2998](https://github.com/agentscope-ai/CoPaw/pull/2998) | ⭐⭐⭐⭐⭐ | 稳定性刚需，双PR覆盖缓存与热重载场景 |
| **热重载保活渠道** | [#2994](https://github.com/agentscope-ai/CoPaw/pull/2994) | ⭐⭐⭐⭐⭐ | 解决配置变更后WhatsApp/Signal/Telegram断连 |
| **媒体内容压缩** | [#2997](https://github.com/agentscope-ai/CoPaw/pull/2997) | ⭐⭐⭐⭐☆ | 防止大视频/图片导致API缓冲区溢出（50MB限制） |
| **GitHub Copilot Provider** | [#2366](https://github.com/agentscope-ai/CoPaw/pull/2366) | ⭐⭐⭐⭐☆ | 首次贡献者PR，OAuth设备流已完成 |

### 中长期需求（需产品决策）

| 需求 | Issue | 用户痛点 | 纳入可能性 |
|:---|:---|:---|:---:|
| **Skills Hub官方市场** | [#2418](https://github.com/agentscope-ai/CoPaw/issues/2418), [#2361](https://github.com/agentscope-ai/CoPaw/issues/2361) | 技能发现困难，随机调用不稳定 | ⭐⭐⭐☆☆ 需基础设施投入 |
| **Agent Skill标签索引** | [#2323](https://github.com/agentscope-ai/CoPaw/issues/2323) | 降低LLM语义理解依赖，提升确定性 | ⭐⭐⭐⭐☆ 技术方案明确 |
| **用户消息Markdown渲染** | [#2975](https://github.com/agentscope-ai/CoPaw/issues/2975) | 代码片段/结构化输入显示混乱 | ⭐⭐⭐⭐☆ 前端改动小 |
| **自定义网页标题** | [#3000](https://github.com/agentscope-ai/CoPaw/issues/3000) | 多Agent实例管理，避免配置混淆 | ⭐⭐⭐☆☆ 企业场景需求 |
| **技能调用显式选项** | [#2902](https://github.com/agentscope-ai/CoPaw/issues/2902) | 用户希望强制指定技能，减少随机性 | ⭐⭐⭐☆☆ 与自动Agent设计哲学冲突 |

---

## 7. 用户反馈摘要

### 😤 核心痛点

> *"技能调用很不稳定，同样的任务每次调用哪个技能随机性很大，有时还会出现任务失败的情况"* — [#2902](https://github.com/agentscope-ai/CoPaw/issues/2902)

> *"Claw要具备生产应用能力，需要有稳定的技能和快速的应用连接，否则只停留在玩具的水平"* — [#2902](https://github.com/agentscope-ai/CoPaw/issues/2902)

> *"UI文案和底层逻辑完全脱节...自动下载≠自动适配"* — [#2985](https://github.com/agentscope-ai/CoPaw/issues/2985) 批评GPU加速提示与实际CUDA包下载逻辑不符

### 🔧 使用场景

- **多实例管理**：用户通过内网穿透部署多个CoPaw实例，急需视觉区分（[#3000](https://github.com/agentscope-ai/CoPaw/issues/3000)）
- **长时运行**：Telegram/Windows客户端数小时后失活，影响自动化工作流（[#2956](https://github.com/agentscope-ai/CoPaw/issues/2956), [#2911](https://github.com/agentscope-ai/CoPaw/issues/2911)）
- **本地模型落地**：llama.cpp/Ollama配置门槛高，Windows用户频繁遇阻（[#2955](https://github.com/agentscope-ai/CoPaw/issues/2955), [#2988](https://github.com/agentscope-ai/CoPaw/issues/2988)）

### ✅ 积极反馈

- 社区对WhatsApp原生支持（[#2962](https://github.com/agentscope-ai/CoPaw/pull/2962)）和GitHub Copilot集成（[#2366](https://github.com/agentscope-ai/CoPaw/pull/2366)）反响积极
- 首次贡献者流程顺畅，3个新贡献者PR快速进入评审

---

## 8. 待处理积压

### ⚠️ 需维护者关注

| Issue/PR | 创建时间 | 状态 | 风险提示 |
|:---|:---|:---|:---|
| [#2323](https://github.com/agentscope-ai/CoPaw/issues/2323) Skill标签索引机制 | 2026-03-26 | 🟡 开放，4评论 | 技术方案明确，社区需求强烈，缺乏官方响应 |
| [#2418](https://github.com/agentscope-ai/CoPaw/issues/2418) Skills Hub管理页面 | 2026-03-27 | 🟡 开放，6评论 | 生态建设核心需求，用户多次催促 |
| [#2366](https://github.com/agentscope-ai/CoPaw/pull/2366) GitHub Copilot Provider | 2026-03-26 | 🟡 开放 | 首次贡献者PR，OAuth完整实现，需评审反馈 |
| [#2911](https://github.com/agentscope-ai/CoPaw/issues/2911) Windows客户端自动关闭 | 2026-04-03 | 🟡 开放，4评论 | 稳定性问题，无明确修复计划 |
| [#2032](https://github.com/agentscope-ai/CoPaw/issues/2032) 全局共享Skills目录 | 2026-03-21 | ✅ 已关闭 | 多Agent场景刚需，关闭原因待确认是否真正解决 |

---

**报告生成时间**：2026-04-07  
**数据来源**：agentscope-ai/CoPaw GitHub 公开数据

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-04-07

## 1. 今日速览

ZeptoClaw 今日呈现**高活跃开发状态**：8 条 PR 更新（6 条待审）与 4 条 Issue 变动显示核心团队正密集推进功能迭代。关键进展包括 Telegram 消息失败问题的最终修复（2 条相关 PR 已合并）、OpenAI 兼容 API 工具调用能力的重大升级，以及浏览器自动化与上下文压缩两大长期 PR 的持续打磨。社区开始关注**架构级议题**——真正的并发/非阻塞设计成为今日唯一获得用户主动关注的功能请求。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已合并/关闭 PR（2 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#462](https://github.com/qhkm/zeptoclaw/pull/462) | stuartbowness | Telegram 静默失败修复：消息分块 + 纯文本降级回退 | **终结了用户长期痛点**——研究类任务（>4 来源）不再沉默消失；与 #458 形成完整解决方案 |
| [#458](https://github.com/qhkm/zeptoclaw/pull/458) | qhkm | Telegram 消息分块基础设施（4096 UTF-16 限制处理） | 为 #462 奠定技术基础，确立分层分割策略（段落→行→硬截断）|

**整体进展评估**：Telegram 集成从"可用"迈向"可靠"，消除生产环境关键缺陷。

---

## 4. 社区热点

| 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#486](https://github.com/qhkm/zeptoclaw/issues/486) **true concurrent/non-blocking design** | 👍 0, 💬 1, 创建 4/3 今日更新 | **架构级诉求**：用户引用 Spacebot 项目，要求解决"长任务阻塞响应"的根本设计局限；标记为 Large scope 且作者无意自研，需核心团队评估 roadmap |
| [#489](https://github.com/qhkm/zeptoclaw/pull/489) **OpenAI-compatible tool calling** | 今日创建，待审 | **生态兼容战略**：补齐 `/v1/chat/completions` 工具调用能力，支持流式/非流式双模式；直接关联 #488 的 API 兼容性缺口 |

**信号解读**：社区从"功能补全"阶段进入"架构优化"与"生态兼容"深水区。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 状态 | 详情 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#488](https://github.com/qhkm/zeptoclaw/issues/488) | **OPEN** | OpenAI 流式响应中工具调用丢失：`chat_stream()` 默认实现仅 emit Done 事件 | [#489](https://github.com/qhkm/zeptoclaw/pull/489) **待审** |
| 🟡 **中** | [#466](https://github.com/qhkm/zeptoclaw/issues/466) | **CLOSED** | 自定义工具 shell 转义破坏 CLI 包装器（`gws {{args}}` 被转义为单引号包裹） | [#467](https://github.com/qhkm/zeptoclaw/pull/467) **待审** |
| 🟡 **中** | [#461](https://github.com/qhkm/zeptoclaw/issues/461) | **CLOSED** | Telegram 研究任务静默失败（HTML 渲染畸形标签 + 无回退） | [#462](https://github.com/qhkm/zeptoclaw/pull/462) ✅ **已合并** |

**稳定性态势**：生产级缺陷（Telegram 静默失败）已根治；API 兼容性缺口有明确修复路径。

---

## 6. 功能请求与路线图信号

| 功能方向 | 来源 | 实现状态 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **真正并发/非阻塞架构** | [#486](https://github.com/qhkm/zeptoclaw/issues/486) | 仅需求讨论 | ⚠️ **中低** — Large scope，需架构决策，无社区贡献意愿 |
| **浏览器自动化（agent-browser）** | [#459](https://github.com/qhkm/zeptoclaw/pull/459) | PR 待审（3/27 创建，4/6 更新） | 🔥 **高** — 完整实现，含 Lightpanda/Chrome 双引擎、SSRF 防护 |
| **多层上下文压缩** | [#460](https://github.com/qhkm/zeptoclaw/pull/460) | PR 待审（3/27 创建，4/6 更新） | 🔥 **高** — 解决 token 溢出崩溃，替换单遍词数策略 |
| **OpenAI 工具调用完整兼容** | [#489](https://github.com/qhkm/zeptoclaw/pull/489) | PR 待审（今日创建） | 🔥 **高** — 直接修复 #488，流式/非流式双支持 |

**路线图预测**：vNext 大概率包含浏览器自动化、上下文压缩重构、OpenAI API 完整兼容三大特性。

---

## 7. 用户反馈摘要

> 提炼自 Issues 描述与评论

| 痛点/场景 | 来源 | 用户原声/行为 |
|:---|:---|:---|
| **长任务无响应焦虑** | #486 | "If the agent is running a long job, it won't respond to users until it finishes" — 引用 Spacebot 作为期望方案 |
| **CLI 包装器失效** | #466 | 自定义工具 `gws {{args}}` 模式因 shell 转义被破坏，期望参数原样传递 |
| **Telegram 研究任务"黑洞"** | #461, #462 | 开放式研究（尤其含浏览器）完成处理但用户收不到任何反馈，"goes silent. No response, no error, nothing" |
| **模型路由不一致** | #468 | 带厂商前缀的模型（如 `google/gemini-3-flash-preview`）在配置 OpenRouter 时仍被错误路由 |

**满意度信号**：Telegram 修复获快速响应（3/28 报告 → 4/6 合并）；用户对架构级改进有明确期待。

---

## 8. 待处理积压

> 创建 >7 天且状态未决的重要 PR，提醒维护者关注

| PR | 创建日期 | 最后更新 | 风险/阻塞原因 |
|:---|:---|:---|:---|
| [#459](https://github.com/qhkm/zeptoclaw/pull/459) BrowserTool | 2026-03-27 | 2026-04-06 | **11 天待审** — 大型功能（从 #410 拆分），需最终 review；阻塞浏览器自动化能力发布 |
| [#460](https://github.com/qhkm/zeptoclaw/pull/460) 上下文压缩 | 2026-03-27 | 2026-04-06 | **11 天待审** — 核心架构重构，影响所有长对话场景；建议优先合并以获真实环境验证 |
| [#468](https://github.com/qhkm/zeptoclaw/pull/468) 模型路由修复 | 2026-03-29 | 2026-04-06 | **9 天待审** — 生产环境配置问题，影响 OpenRouter 用户 |
| [#467](https://github.com/qhkm/zeptoclaw/pull/467) raw_string 参数类型 | 2026-03-29 | 2026-04-06 | **9 天待审** — 已关联关闭 Issue #466，建议快速合并以清理积压 |

**维护建议**：4 条 PR 均来自核心贡献者 stuartbowness，建议集中 review 批次以降低上下文切换成本。

---

*日报生成时间：2026-04-07 | 数据来源：GitHub API 快照*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*