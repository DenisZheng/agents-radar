# OpenClaw 生态日报 2026-04-10

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-04-10 00:13 UTC

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

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-04-10

---

## 1. 今日速览

OpenClaw 今日呈现**高活跃度、高压力**态势：24小时内产生 **500 条 Issues 更新**（403 活跃/新建，97 关闭）与 **500 条 PR 更新**（347 待合并，153 已合并/关闭），社区讨论密度达到近期峰值。核心版本 v2026.4.9 及 beta 版本同日发布，聚焦记忆/梦境系统的 REM 回填能力升级。然而，**安装回归问题集中爆发**——`@buape/carbon` 模块缺失导致大量用户首次安装/升级失败，成为当日最紧迫的稳定性威胁。与此同时，网关架构重构、浏览器工具统一化等大型 PR 持续推进，显示项目在技术债务清理与核心能力扩展上并行发力。

---

## 2. 版本发布

### [v2026.4.9](https://github.com/openclaw/openclaw/releases/tag/v2026.4.9) & [v2026.4.9-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.4.9-beta.1)

| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-04-09 |
| **版本类型** | 稳定版 + 预发布版（内容一致） |
| **核心变更** | Memory/dreaming 系统重大升级 |

#### 主要更新内容

**REM 回填通道（Grounded REM Backfill Lane）**
- 新增历史 `rem-harness --path` 工具，支持对旧日记笔记进行结构化回放
- 引入 diary commit/reset 流程，实现记忆状态的可控持久化
- 优化 durable-fact 提取逻辑，减少记忆噪声
- **实时短期记忆晋升集成**：旧日笔记可直接重播至 Dreams 与 durable memory，无需维护独立的记忆栈

#### 迁移注意事项

| 风险点 | 说明 |
|:---|:---|
| **qa/scenarios/index.md 缺失崩溃** | 新版本的 completion cache 生成依赖该文件，但 npm 全局安装时未包含，导致 `openclaw update` 崩溃（见 [#63510](https://github.com/openclaw/openclaw/issues/63510)、[#63541](https://github.com/openclaw/openclaw/issues/63541)） |
| **缓解措施** | 已提交修复 PR [#63679](https://github.com/openclaw/openclaw/pull/63679)，将异常抛出改为返回 null |

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（153 中的代表性进展）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#46049](https://github.com/openclaw/openclaw/issues/46049) 关闭 | filipgrzalja | LLM 请求超时配置修复 | 解决长期存在的超时配置被忽略问题，提升大模型调用可靠性 |
| [#61899](https://github.com/openclaw/openclaw/issues/61899) 关闭 | behroozbc | Windows ESM URL 方案修复 | 消除 Windows 绝对路径协议错误，改善跨平台兼容性 |
| [#25215](https://github.com/openclaw/openclaw/issues/25215) 关闭 | fatoncn | SSRF 检查与 Clash fake-ip 范围冲突修复 | 恢复代理环境下的 web_fetch 功能，解决 2026.2.22-2 回归 |
| [#29203](https://github.com/openclaw/openclaw/issues/29203) 关闭 | dotberrnix | 自动回复路径 sessionKey 修复 | 完善 hooks 系统的事件覆盖，插件生态更健壮 |
| [#25322](https://github.com/openclaw/openclaw/issues/25322) 关闭 | chancheuklap | web_fetch SSRF 策略配置支持 | 与 browser 工具实现功能对等，提升网络工具灵活性 |

### 待合并的大型架构 PR（347 中的关键项）

| PR | 规模 | 核心变更 | 技术债务影响 |
|:---|:---|:---|:---|
| [#63975](https://github.com/openclaw/openclaw/pull/63975) | XL | 网关启动与运行时策略分离 | 将 `server.impl.ts` 拆分为专注的 seam 模块，移除冗余构建层，为后续网关插件化奠定基础 |
| [#63957](https://github.com/openclaw/openclaw/pull/63957) | XL | Browser 重复辅助面统一 | 通过 facade 委托消除 doctor/config/auth 的代码重复，降低维护成本 |
| [#41158](https://github.com/openclaw/openclaw/pull/41158) | XL | 全局速率限制重试边界优化 | 在故障转移前增加本地重试，减少不必要的模型降级，提升用户体验 |
| [#63891](https://github.com/openclaw/openclaw/pull/63891) | XL | axios 固定版本与安全拒绝清单 | 供应链安全加固，防止恶意依赖注入 |

**整体评估**：项目正经历"**稳定性修复密集期 + 架构重构深水区**"的双重阶段。短期聚焦用户安装/运行阻塞问题，中长期通过网关解耦和工具统一化降低复杂度。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 社区信号 |
|:---|:---|:---:|:---|:---|
| 1 | [#49971](https://github.com/openclaw/openclaw/issues/49971) Native Agent Identity & Trust Verification | **77** | 原生代理身份与信任验证机制 | **战略性需求**：MolTrust 提出的 ERC-8004/DID/VC 集成方案，反映企业级部署对可验证身份的迫切需求，可能塑造 OpenClaw 的 B2B 能力边界 |
| 2 | [#62994](https://github.com/openclaw/openclaw/issues/62994) v4.8 安装失败：@buape/carbon 模块缺失 | **29** | 首次安装阻塞 | **紧急回归**：影响新用户获取，需立即响应 |
| 3 | [#45064](https://github.com/openclaw/openclaw/issues/45064) 2026.3.12 内存泄漏 - 基础命令 OOM | **28** | 长期稳定性 | 持续性内存管理问题，影响 CLI 可用性 |
| 4 | [#46049](https://github.com/openclaw/openclaw/issues/46049) LLM 超时配置被忽略（已关闭） | **25** | 配置系统一致性 | 配置与运行时行为不一致的经典痛点 |
| 5 | [#61899](https://github.com/openclaw/openclaw/issues/61899) Windows ESM URL 方案错误（已关闭） | **22** | 跨平台兼容性 | Windows 用户占比上升的信号 |

### 高反应 Issues（👍 数）

| Issue | 👍 | 诉求 |
|:---|:---:|:---|
| [#14593](https://github.com/openclaw/openclaw/issues/14593) Docker 中 brew 技能安装失败 | 16 | 容器化部署的技能管理标准化 |
| [#54844](https://github.com/openclaw/openclaw/issues/54844) github-copilot/gpt-5-mini 回归 | 9 | 新模型适配及时性 |
| [#63510](https://github.com/openclaw/openclaw/issues/63510) v2026.4.9 completion cache 崩溃 | 7 | 版本发布质量管控 |
| [#62272](https://github.com/openclaw/openclaw/issues/62272) v2026.4.5 更新失败 | 7 | 升级路径可靠性 |

---

## 5. Bug 与稳定性

### 严重级别：P0（阻塞安装/升级）

| Issue | 症状 | 影响范围 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| [#62994](https://github.com/openclaw/openclaw/issues/62994) | `Cannot find module '@buape/carbon'` | v4.8 首次安装 | 待定位 | 🔴 无 fix |
| [#62272](https://github.com/openclaw/openclaw/issues/62272) | 同上，更新场景 | 2026.3.28 → 2026.4.5 | 待定位 | 🔴 无 fix |
| [#63127](https://github.com/openclaw/openclaw/issues/63127) | Windows npm 全局安装运行时模块缺失 | 2026.4.7/2026.4.8 | 待定位 | 🔴 无 fix |
| [#63510](https://github.com/openclaw/openclaw/issues/63510) | completion cache 生成崩溃 | 2026.4.9 | [#63679](https://github.com/openclaw/openclaw/pull/63679) | 🟡 有 PR |
| [#63541](https://github.com/openclaw/openclaw/issues/63541) | 同上，全局 npm 安装场景 | 2026.4.9 | [#63679](https://github.com/openclaw/openclaw/pull/63679) | 🟡 有 PR |

### 严重级别：P1（功能回归/核心路径损坏）

| Issue | 症状 | 影响范围 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding Agent 无法完成任何任务 | 2026.4.3+ 回归 | 待定位 | 🔴 无 fix |
| [#61726](https://github.com/openclaw/openclaw/issues/61726) | WhatsApp 媒体发送虚假成功 | 2026.4.5 | 待定位 | 🔴 无 fix |
| [#61847](https://github.com/openclaw/openclaw/issues/61847) | `gateway install --force` 破坏 AWS 凭证发现 | EC2 实例角色场景 | 待定位 | 🔴 无 fix |
| [#53857](https://github.com/openclaw/openclaw/issues/53857) | web_search 始终报告 API key 未配置 | 2026.3.23, tools.profile=full | 待定位 | 🔴 无 fix |

### 严重级别：P2（性能/体验降级）

| Issue | 症状 | 备注 |
|:---|:---|:---|
| [#45064](https://github.com/openclaw/openclaw/issues/45064) | 基础命令 OOM | 长期存在，需内存分析 |
| [#60390](https://github.com/openclaw/openclaw/issues/60390) | LosslessClaw 压缩失败 | 多模型/多提供商 auth 处理冲突 |

---

## 6. 功能请求与路线图信号

### 高潜力功能请求（已有 PR 或明确路线图信号）

| 需求 | Issue/PR | 可行性评估 | 预计版本 |
|:---|:---|:---|:---|
| **原生代理身份验证（DID/VC）** | [#49971](https://github.com/openclaw/openclaw/issues/49971) | 战略性，需架构设计 | 2026.Q3+ |
| **Serper Google Search API 支持** | [#56511](https://github.com/openclaw/openclaw/pull/56511) | PR 已提交，待 review | 2026.4.x |
| **分离式子代理原生支持** | [#62801](https://github.com/openclaw/openclaw/pull/62801) | PR 已提交，API 设计清晰 | 2026.4.x |
| **web_fetch SSRF 策略配置** | [#25322](https://github.com/openclaw/openclaw/issues/25322) | 已合并 | ✅ 2026.4.9 |
| **Teams SSO 支持** | [#63964](https://github.com/openclaw/openclaw/pull/63964) | PR 因 too-many-prs 关闭，需求明确 | 需重新提交 |

### 新兴需求模式

- **记忆系统可观测性**：多个 issue 围绕 dreaming cron 未自动注册 ([#62327](https://github.com/openclaw/openclaw/issues/62327))、memory slot 启动时未加载 ([#63962](https://github.com/openclaw/openclaw/pull/63962))，显示用户对记忆系统可靠性的关注
- **模型生态扩展**：gpt-5.4、MiniMax-M2.7 等新模型适配请求密集，反映用户追逐最新 LLM 能力的趋势

---

## 7. 用户反馈摘要

### 真实痛点（直接引用语境）

| 场景 | 用户原声 | 深层需求 |
|:---|:---|:---|
| **安装挫败** | *"During Installation the configuration wizard crashes, since it can't find '@buape/carbon'"* ([#62446](https://github.com/openclaw/openclaw/issues/62446)) | 零配置开箱体验，依赖管理透明化 |
| **升级恐惧** | *"Update from 2026.3.28 to 2026.4.5 fails at the openclaw doctor step"* ([#62272](https://github.com/openclaw/openclaw/issues/62272)) | 可回滚、可诊断的平滑升级路径 |
| **模型适配焦虑** | *"openai-codex/gpt-5.4 can be added to config and appears in models list, but it is still treated as missing"* ([#37623](https://github.com/openclaw/openclaw/issues/37623)) | 配置即生效的模型支持，减少"虚假可用"状态 |
| **容器化部署困境** | *"The Docker image does not ship brew"* ([#14593](https://github.com/openclaw/openclaw/issues/14593)) | 云原生场景的技能管理标准化 |
| **多代理隔离疑虑** | *"Multi-agent deployments send same X-Mnemo-Agent-Id header, causing memory namespace collision"* ([#63563](https://github.com/openclaw/openclaw/issues/63563)) | 企业级多租户隔离保障 |

### 满意度信号

- **记忆系统升级获认可**：v2026.4.9 的 REM 回填功能设计获技术用户期待，但发布执行问题（qa 文件缺失）抵消了正面感知
- **社区响应速度分化**：LLM 超时问题 ([#46049](https://github.com/openclaw/openclaw/issues/46049)) 快速关闭获好评，安装问题堆积引发焦虑

---

## 8. 待处理积压

### 长期未响应的高价值 Issue（>30 天，仍有现实意义）

| Issue | 创建时间 | 最后更新 | 积压风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) Agent Identity RFC | 2026-03-18 | 2026-04-09 | 战略级需求无官方回应 | 维护者确认路线图立场 |
| [#37623](https://github.com/openclaw/openclaw/issues/37623) gpt-5.4 配置可用但运行失败 | 2026-03-06 | 2026-04-09 | 模型生态承诺与实际支持脱节 | 明确模型适配流程文档 |
| [#32892](https://github.com/openclaw/openclaw/issues/32892) openai-codex 登录无提供商插件 | 2026-03-03 | 2026-04-09 | 认证系统扩展性设计缺陷 | 评估 providers 插件架构 |
| [#31486](https://github.com/openclaw/openclaw/issues/31486) image tool 不支持自定义提供商 | 2026-03-02 | 2026-04-09 | 工具配置一致性缺口 | 统一工具-模型配置语义 |
| [#26422](https://github.com/openclaw/openclaw/issues/26422) message_sending hook 永不触发 | 2026-02-25 | 2026-04-09 | 插件系统核心功能失效 | 代码审查确认死代码状态 |

### 需要维护者介入的 PR

| PR | 状态 | 阻塞原因 | 建议 |
|:---|:---|:---|:---|
| [#63964](https://github.com/openclaw/openclaw/pull/63964) Teams SSO | 关闭 | too-many-prs | 协调 review 带宽，重新打开 |
| [#63963](https://github.com/openclaw/openclaw/pull/63963) Teams 长工具链保活 | 关闭 | too-many-prs | 同上，关键用户体验改进 |

---

## 附录：数据健康度指标

| 指标 | 数值 | 评估 |
|:---|:---:|:---|
| 日 Issues 处理率 | 19.4% (97/500) | ⚠️ 偏低，积压风险 |
| 日 PR 合并率 | 30.6% (153/500) | ✅ 健康，吞吐能力强 |
| 平均 Issue 评论数（Top 50） | 11.4 | 🔥 讨论深度高，社区参与活跃 |
| 阻塞安装类 Issue 占比 | 12% (6/50) | 🚨 严重，需立即响应 |
| 架构/重构类 PR 占比 | 23% (7/30) | 📈 技术投资积极，需平衡稳定性 |

---

*本日报基于 GitHub 公开数据生成，反映 2026-04-09 至 2026-04-10 期间的项目动态。*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**：2026-04-10 | **分析范围**：12 个活跃开源项目

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"从功能竞赛向可靠性攻坚"的关键转折期**。头部项目（OpenClaw、CoPaw、Moltis）日均处理 50+ Issues/PR，显示极高迭代强度；核心战场从"多模型支持"转向**记忆系统可观测性、企业级多租户隔离、终端体验现代化**三大方向。社区痛点高度趋同——安装/升级稳定性成为用户流失的首要风险，而 Docker/PaaS 部署体验、WebUI 可视化配置正成为差异化竞争的新门槛。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PR (待合并/已处理) | 今日 Release | 健康度评估 |
|:---|:---|:---|:---:|:---|
| **OpenClaw** | 500 (403/97) | 500 (347/153) | v2026.4.9 + beta | ⚠️ **高压运转** — 安装回归问题集中爆发，架构重构与稳定性修复并行 |
| **NanoBot** | 26 (16/10) | 45 (23/22) | 无 | ✅ **稳健演进** — 内存管理与多模态为主轴，v0.1.5 兼容性瑕疵待修复 |
| **Hermes Agent** | 50 (39/11) | 50 (36/14) | 无 | ✅ **质量巩固** — 流式工具调用截断漏洞快速封堵，TUI 重构进入深水区 |
| **PicoClaw** | 16 (13/3) | 24 (17/7) | 无 | ⚠️ **追赶期** — 多通道竞态条件暴露架构债务，Codex 集成稳定性待验证 |
| **NanoClaw** | 4 (2/2) | 24 (10/14) | 无 | ✅ **企业就绪冲刺** — jbaruch 单日 5 PR 修复生产环境痛点，Slack/Matrix 企业功能密集落地 |
| **NullClaw** | 2 (2/0) | 16 (5/11) | 无 | ✅ **精益迭代** — 渠道可靠性三部曲收尾，.well-known 技能标准确立生态协议 |
| **IronClaw** | 10 (新增)/14 关闭 | 39 (待合并)/11 处理 | 无 | ⚠️ **架构迁移阵痛** — V2 引擎接管中，Google OAuth 危机集中爆发 |
| **LobsterAI** | 3 (新开) | 37 (24/13) | 无 | ⚠️ **稳定性承压** — macOS Intel 集中崩溃，Cowork 引擎并发修复待合并 |
| **Moltis** | 0 新开/14 关闭 | 24 (1/23) | 20260409.01 | ✅ **发布节奏优秀** — 零待处理 Issue，模型生态扩展与稳定性修复并重 |
| **CoPaw** | 50 (29/21) | 50 (18/32) | **v1.0.2** | ✅ **成熟稳定期** — 版本发布日问题当日清，LLM 路由功能端到端闭环 |
| **TinyClaw** | 无活动 | 无活动 | 无 | ⚠️ **停滞观察** |
| **ZeptoClaw** | 无活动 | 无活动 | 无 | ⚠️ **停滞观察** |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 500 Issues/PR 日活，绝对领先 | 约为第二名 CoPaw 的 10 倍，但处理率仅 19.4%，积压风险显著 |
| **技术路线** | **"全栈自主"** — 自建记忆/梦境系统、网关架构、工具生态 | 对比 NanoClaw/IronClaw 的 MCP 兼容策略，OpenClaw 选择深度自建，可控性高但集成成本大 |
| **核心优势** | REM 回填通道、多通道原生支持、插件生态成熟度 | 记忆系统的"时间旅行"能力（历史笔记重播）暂无直接竞品 |
| **关键短板** | 安装/升级回归问题（@buape/carbon 缺失、qa 文件缺失） | Moltis/CoPaw 的发布质量控制更优；NanoClaw 的企业功能响应更快 |
| **差异化标签** | **"个人 AI 的完整操作系统"** — 从记忆到梦境到工具链全覆盖 | 对比 CoPaw 的"多智能体协作平台"、IronClaw 的"WASM 沙箱安全"，OpenClaw 更偏向**个人长期记忆 companion** |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|:---|:---|:---|
| **记忆系统可观测性** | OpenClaw、NanoBot、Hermes Agent | OpenClaw #62327 梦境 cron 未注册、NanoBot #2957 MEMORY.md 数据丢失、Hermes #5237 Hindsight 最佳实践 — 用户要求"记忆在做什么"可见可控 |
| **企业级多租户/隔离** | NanoClaw、IronClaw、OpenClaw | NanoClaw #1720 多租户会话委派、IronClaw #2078 工具创建权限控制、OpenClaw #63563 多 Agent 内存命名空间冲突 — 从个人工具向团队平台演进 |
| **终端体验现代化** | Hermes Agent、CoPaw、NanoBot | Hermes #4518 IDE 级 diff/语法高亮、CoPaw #3124 会话内图表渲染、NanoBot #2949 WebUI 内置 — CLI 向 GUI/Web 迁移压力显著 |
| **安装/部署零摩擦** | OpenClaw、PicoClaw、NanoClaw、LobsterAI | OpenClaw 安装崩溃、PicoClaw Docker ReadonlyRootfs、NanoClaw Unraid 一键部署、LobsterAI macOS 崩溃 — **生态共性痛点，直接影响用户获取** |
| **模型生态极速适配** | Moltis、OpenClaw、CoPaw、NanoBot | GPT-5.x、Gemini 3.x、阿里巴巴 Coding Plan 同日入库 — "配置即生效"成为基准线，虚假可用状态（OpenClaw #37623）遭强烈批评 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 长期记忆、梦境系统、多通道个人助手 | 技术极客、个人知识管理者 | Node.js 全栈，自建 REM/durable-fact 记忆层，插件化工具 |
| **CoPaw** | 多智能体协作、LLM 路由、企业微信集成 | 中国企业用户、多 Agent 工作流 | Python 为主，AgentScope 框架底座，强调"人-AI 协作" |
| **Moltis** | 极速模型适配、本地优先、资源效率 | 本地模型爱好者、边缘部署 | Rust 核心，ModelCapabilities 架构，Podman 容器检测 |
| **NanoClaw** | 企业 Slack/Teams、多租户、端到端加密 | 企业 IT 部门、合规敏感场景 | TypeScript，"路由器"架构模式，组级隔离 |
| **IronClaw** | WASM 沙箱安全、NEAR AI 生态、去中心化 | Web3 开发者、安全极客 | Rust + WASMtime，V2 引擎零硬依赖，WASM 扩展市场 |
| **Hermes Agent** | 终端原生体验、自改进循环（Phoenix Protocol） | 开发者、CLI 重度用户 | Python，Ink/React TUI 重构，Hindsight 记忆集成 |
| **NanoBot** | 大上下文窗口优化、音视频多模态、技能自发现 | 长文档处理用户、多模态探索者 | Python，SelfTool v2 自我进化，1M token 归档策略 |
| **NullClaw** | 极致轻量、Zig 运行时、协议标准化 | 系统编程爱好者、边缘设备 | Zig 全栈，.well-known 技能协议，Cron 子 Agent 引擎 |
| **PicoClaw** | 硬件协同（Sipeed）、中文场景优化 | 中文用户、嵌入式开发者 | Go，MCP 生态对接，GitHub-backed skill discovery |
| **LobsterAI** | 企业数据治理、会话合规、Cowork 协作 | 中国企业、合规审计需求 | TypeScript，SQLite 外键约束强化，跨时区任务调度 |

---

## 6. 社区热度与成熟度分层

| 层级 | 项目 | 特征 |
|:---|:---|:---|
| **🔥 快速迭代期** | OpenClaw、CoPaw、Moltis、NanoClaw | 日均 50+ 事件，功能与稳定性并行，发布节奏紧凑（Moltis 日更版本），社区讨论深度高（OpenClaw #49971 77 评论） |
| **🛠️ 质量巩固期** | Hermes Agent、NanoBot、IronClaw | 架构重构（TUI/V2 引擎）或稳定性修复为主，Issue 处理率提升，测试覆盖强化 |
| **🌱 追赶建设期** | PicoClaw、LobsterAI、NullClaw | 核心功能补齐（多通道、WebUI、企业功能），Bug 响应快但架构债务显现 |
| **⚠️ 停滞观察期** | TinyClaw、ZeptoClaw | 24 小时零活动，需关注维护者 commit 频率 |

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"安装即流失"成为核心指标** | OpenClaw #62994、PicoClaw #2429、LobsterAI #1587/1589 | 依赖管理（@buape/carbon）、跨平台路径（Windows ESM URL）、容器权限（ReadonlyRootfs）需纳入 CI 必测项 |
| **记忆系统从"黑盒"到"可审计"** | OpenClaw REM 回填、NanoBot MEMORY.md 丢失、Hermes Hindsight | 用户要求记忆操作的可观测性（何时/为何提取/遗忘），需设计日志与回滚机制 |
| **CLI → WebUI 迁移压力** | NanoBot #2949（8 评论）、CoPaw 图表渲染请求、Hermes TUI 重构 | 终端原生项目需加速可视化配置界面，降低非技术用户门槛 |
| **MCP 作为事实标准，但沙箱化不足** | IronClaw #2180 MCP 工具不可用、PicoClaw MCP 空参数问题 | MCP 服务器的外围安全（OAuth 凭证隔离、网络沙箱）成为新战场 |
| **"模型即配置"期望 vs 现实落差** | OpenClaw #37623、Moltis 同日 3 家提供商入库 | 用户假设"添加模型 URL 即可用"，实际需处理能力检测、流式格式、工具调用方言，需设计"配置即生效"的抽象层 |
| **企业功能从"加分项"到"门槛"** | NanoClaw 多租户、CoPaw 企微附件、IronClaw 权限控制 | 个人工具向团队平台演进时，隔离性、审计、合规成为硬需求，架构需预留多租户钩子 |

---

*报告基于 2026-04-10 各项目 GitHub 公开活动数据生成*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-10

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内产生 **26 条 Issues 更新**（16 活跃/新开，10 关闭）与 **45 条 PR 更新**（23 待合并，22 已合并/关闭），无新版本发布。核心开发聚焦于**内存管理优化**（大上下文窗口下的会话归档策略）、**多模态能力扩展**（音视频统一处理）及**交互体验改进**（WebUI 探索、消息去重、流式响应优化）。社区对**内置 WebUI** 的讨论热度显著上升，同时 v0.1.5 升级引发的兼容性问题（Python 路径、飞书 SDK 依赖）成为用户关注焦点。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR（22 条中的核心项）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2973](https://github.com/HKUDS/nanobot/pull/2973) | flobo3 | **修复 Gemma 4 `<thought>` 标签泄漏** | 解决推理内容污染用户消息的问题，提升多模型兼容性 |
| [#2971](https://github.com/HKUDS/nanobot/pull/2971) | franciscomaestre | **大上下文窗口下的消息数量触发归档** | 解决 1M token 窗口模型（Claude Sonnet 4.6/Gemini 2.5 Pro）永不归档、会话膨胀至 700+ 消息的架构缺陷 |
| [#2963](https://github.com/HKUDS/nanobot/pull/2963) | yanghan-cyber | **修复流式通道错误静默丢弃** | 解决飞书/Discord/Telegram 在 LLM 错误（429/超时）时无反馈的严重 UX 问题 |
| [#2962](https://github.com/HKUDS/nanobot/pull/2962) | chenyahui | **支持 `allowed_env_keys` 环境变量透传** | 提升沙箱执行灵活性，满足企业级部署需求 |
| [#2960](https://github.com/HKUDS/nanobot/pull/2960) | JonasGao | **Discord 通道代理支持** | 完善网络受限环境下的通道可用性 |
| [#2953](https://github.com/HKUDS/nanobot/pull/2953) | unrayed | **完整 `<thought>` 块提取与调试支持** | 为 Gemma 4 等模型提供可观测性基础设施 |

**整体推进评估**：今日合并 PR 集中在**稳定性修复**（3 项）与**企业/高级用户场景**（代理、环境变量、大模型优化），核心架构（内存管理、多模态管道）持续演进，但 WebUI 等用户-facing 功能仍处于 PR 阶段。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 | 分析 |
|:---|:---|:---:|:---|:---|
| 1 | [#2949](https://github.com/HKUDS/nanobot/issues/2949) Should nanobot have its own WebUI? | **8** | 内置浏览器管理界面 | **战略性讨论**：用户厌倦 CLI 配置，希望有可视化配置、聊天界面、频道管理。与同期 PR [#2972](https://github.com/HKUDS/nanobot/pull/2972)（WebUI 实现）形成呼应，社区共识正在凝聚 |
| 2 | [#2892](https://github.com/HKUDS/nanobot/issues/2892) 定时任务机制设计疑问 | **6** | 动态定时任务无需重启 gateway | 架构设计争议：当前 `agent` 创建任务但 `gateway` 执行的设计违反直觉，用户期望热加载能力 |
| 3 | [#2798](https://github.com/HKUDS/nanobot/issues/2798) Unified Session（已关闭） | **6** | 跨频道会话连续性 | 已关闭但反映强烈需求：用户希望 Telegram/Discord/飞书间无缝切换对话，当前按频道隔离的设计被质疑 |
| 4 | [#2927](https://github.com/HKUDS/nanobot/issues/2927) Automatic Skill Discovery | **5** | 智能体自主发现重复模式并生成技能 | **前沿功能请求**：从被动技能系统向主动学习演进，与 [#2521](https://github.com/HKUDS/nanobot/pull/2521) SelfTool v2 的自我进化方向一致 |

### 热点背后信号
- **用户体验层**：CLI → WebUI 的迁移压力显著
- **智能体能力层**：从"工具执行"向"自我进化"（Skill Discovery + SelfTool）演进
- **架构层**：定时任务、会话管理的设计债务开始显现

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#2957](https://github.com/HKUDS/nanobot/issues/2957) | **MEMORY.md 被完全覆盖为空**，无 git 备份，用户数据丢失 | 开放，1 评论 | 无 |
| 🔴 **高** | [#2980](https://github.com/HKUDS/nanobot/issues/2980) | Dream git store 在工作区初始化嵌套 repo，覆盖 `.gitignore` | 开放，1 评论 | 无 |
| 🟡 **中** | [#2947](https://github.com/HKUDS/nanobot/issues/2947) | Runtime Context 元数据泄漏到用户通道（WeChat 等） | 开放，4 评论 | 无 |
| 🟡 **中** | [#2970](https://github.com/HKUDS/nanobot/issues/2970) | v0.1.5 + lark-oapi 1.5.3 飞书通道启动失败（模块缺失） | 开放，1 评论 | 无 |
| 🟡 **中** | [#2917](https://github.com/HKUDS/nanobot/issues/2917) | v0.1.5 升级后 Python 路径解析失败，技能执行中断 | 开放，4 评论 | 无 |
| 🟡 **中** | [#2977](https://github.com/HKUDS/nanobot/issues/2977) | QQ/微信自然语言输入失败，仅斜杠命令可用 | 开放，0 评论 | 无 |
| 🟢 **低** | [#2974](https://github.com/HKUDS/nanobot/issues/2974) | Gemini 3 Flash Preview 配置在 v0.1.4.post6 失效 | **已关闭** | [#2973](https://github.com/HKUDS/nanobot/pull/2973) 相关 |

**风险评估**：**#2957 数据丢失 bug 为今日最高优先级**，涉及核心记忆系统可靠性；v0.1.5 升级引发的多起兼容性问题（#2917, #2970）表明版本发布 QA 流程存在缺口。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 实现状态 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| **内置 WebUI** | [#2949](https://github.com/HKUDS/nanobot/issues/2949) + [#2972](https://github.com/HKUDS/nanobot/pull/2972) | PR 已提交，待 review | **高** |
| **对话中模型切换** (`/model`) | [#2975](https://github.com/HKUDS/nanobot/issues/2975) | 仅 Issue，参考 OpenClaw 实现 | 中 |
| **自动上下文压缩** | [#2984](https://github.com/HKUDS/nanobot/issues/2984) | Issue 开放，与 [#2971](https://github.com/HKUDS/nanobot/pull/2971) 思路互补 | 中 |
| **自动技能发现** | [#2927](https://github.com/HKUDS/nanobot/issues/2927) | 仅 Issue，架构复杂 | 低-中 |
| **多模态音视频统一** | [#2908](https://github.com/HKUDS/nanobot/pull/2908) | PR 开放，开发中 | **高** |
| **用户级内存隔离** | [#2968](https://github.com/HKUDS/nanobot/pull/2968) | PR 开放 | 中 |
| **飞书语音消息增强** | [#2955](https://github.com/HKUDS/nanobot/issues/2955) | 仅 Issue | 中 |
| **消息去重机制** | [#2981](https://github.com/HKUDS/nanobot/pull/2981) | PR 开放 | 中 |

**路线图信号**：WebUI 与多模态为近期确定方向；内存管理（压缩、隔离、归档）成为大模型时代的核心基础设施；自我进化（SelfTool + Skill Discovery）是长期差异化竞争点。

---

## 7. 用户反馈摘要

### 真实痛点
> *"创建了

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-04-10

---

## 1. 今日速览

Hermes Agent 今日保持**高活跃开发状态**：24小时内50条Issue更新（39条活跃/新开，11条关闭）与50条PR更新（36条待合并，14条已合并/关闭），无新版本发布。核心工作围绕**终端渲染引擎重构**、**多模型端点支持**、**安全加固**及**平台适配修复**展开。社区讨论热度集中在富文本终端体验、凭证代理安全架构与AWS Bedrock原生支持三大方向。值得注意的是，今日出现多个关于**流式工具调用截断**的紧急修复，显示项目正在处理关键稳定性问题。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#6847](https://github.com/NousResearch/hermes-agent/pull/6847) | teknium1 | **流式工具调用截断检测**：修复关键Bug #6638，当流式响应在工具调用中途被截断时，将`finish_reason`从默认`"stop"`升级为`"length"`，拒绝执行截断的工具调用并返回错误，防止空/损坏参数执行 | ✅ 已合并 |
| [#6776](https://github.com/NousResearch/hermes-agent/pull/6776) | AIandI0x1 | 同上功能的原始实现 | ❌ 已关闭（被#6847替代） |
| [#6857](https://github.com/NousResearch/hermes-agent/pull/6857) | teknium1 | API服务器模型名派生：多用户场景下（如OpenWebUI），各profile的API服务器在`/v1/models`返回独立模型ID（如`lucas`、`admin`），替代硬编码`hermes-agent` | ❌ 已关闭 |
| [#6855](https://github.com/NousResearch/hermes-agent/pull/6855) | nazirulhafiy | Phoenix Protocol文档：主动自改进循环的行为规范，确保Memory/Skill/SOUL在重大变更后保持同步 | ❌ 已关闭（被#6858替代） |
| [#6848](https://github.com/NousResearch/hermes-agent/pull/6848) | fxfitz | Matrix平台反应清理：处理完成后移除👀反应 | ❌ 已关闭（被#6852替代） |
| [#6794](https://github.com/NousResearch/hermes-agent/pull/6794) | konsisumer | 修复main分支5个失败测试：CLI状态栏mock缺失、vision工具provider检测、辅助vision调用等 | 🔄 待合并 |

**整体推进评估**：今日核心进展是**堵住了一个高危稳定性漏洞**（流式工具调用截断执行），并持续推进**TUI重构**（#4692 Ink/React方案）与**多平台适配**。测试修复PR显示项目正在强化CI可靠性。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 分析 |
|:---|:---|:---|:---|:---|
| 🥇 | [#4518](https://github.com/NousResearch/hermes-agent/issues/4518) 行内Diff视图+语法高亮+Markdown渲染 | 13 | 终端体验现代化 | **长期技术债**：用户要求IDE级终端渲染，涉及5个堆叠PR重构`agent/rich_output.py`。反映CLI工具与GUI编辑器体验差距的普遍焦虑 |
| 🥈 | [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) 凭证代理守护进程 | 8 | 零知识凭证安全 | **企业级需求**：在#3628环境作用域和#4432 PID隔离基础上，要求HTTP/HTTPS代理层实现"凭证对子进程不可见"。作者引用原PR作者的自认局限，推动纵深防御 |
| 🥉 | [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) AWS Bedrock原生支持 | 5 / 👍11 | 绕过OpenRouter降本 | **成本与合规驱动**：11个点赞显示广泛需求。核心痛点：延迟、5-20%成本加成、无法使用企业VPC/CloudTrail/议价 |

### 高热度待合并 PR

| PR | 亮点 | 状态 |
|:---|:---|:---|
| [#4692](https://github.com/NousResearch/hermes-agent/pull/4692) Ink/React TUI重构：替换prompt_toolkit，JSON-RPC通信，流式Markdown渲染 | 架构级变革，7天持续更新 | 🔄 待合并 |
| [#6863](https://github.com/NousResearch/hermes-agent/pull/6863) 多模型自定义端点选择修复：解决`hermes model`锁定首个模型问题 | 用户体验关键修复 | 🔄 待合并 |

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#6638](https://github.com/NousResearch/hermes-agent/issues/6638) | 流式工具调用截断被静默执行，导致空/损坏参数运行 | [#6847](https://github.com/NousResearch/hermes-agent/pull/6847) | ✅ **已修复** |
| 🔴 **Critical** | [#6841](https://github.com/NousResearch/hermes-agent/issues/6841) | 工具调用管道损坏工具名和JSON参数，通用工具调用失败 | 无 | ⏳ 待处理 |
| 🟡 **High** | [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) | Claude订阅认证返回"额度用完"错误，重启/重登录无效 | [#6854](https://github.com/NousResearch/hermes-agent/pull/6854) | 🔄 **Fix待合并** |
| 🟡 **High** | [#6718](https://github.com/NousResearch/hermes-agent/issues/6718) | 后台进程自动通知无法送达Agent | 无 | ⏳ 待处理 |
| 🟡 **High** | [#6797](https://github.com/NousResearch/hermes-agent/issues/6797) | Docker中Cron任务在某时刻后无法修改 | 无 | ⏳ 待处理 |
| 🟡 **High** | [#6843](https://github.com/NousResearch/hermes-agent/issues/6843) | UnicodeEncodeError导致API调用失败 | 无 | ⏳ 待处理 |
| 🟡 **High** | [#6677](https://github.com/NousResearch/hermes-agent/issues/6677) | `vision_analyze`对有效本地图片路径返回400错误 | 无 | ⏳ 待处理 |
| 🟢 **Medium** | [#6729](https://github.com/NousResearch/hermes-agent/issues/6729) | Systemd安装不识别非标准HERMES_HOME | 无 | ⏳ 待处理 |
| 🟢 **Medium** | [#6673](https://github.com/NousResearch/hermes-agent/issues/6673) | Cron调度器未传递fallback_model | 无 | ⏳ 待处理 |
| 🟢 **Medium** | [#6709](https://github.com/NousResearch/hermes-agent/issues/6709) | Cron Create带model参数时TypeError | 无 | ⏳ 待处理 |
| 🟢 **Medium** | [#6862](https://github.com/NousResearch/hermes-agent/issues/6862) | 多模型自定义端点锁定首个模型 | [#6863](https://github.com/NousResearch/hermes-agent/pull/6863) | 🔄 **Fix待合并** |

### 今日关闭的Bug

- [#4934](https://github.com/NousResearch/hermes-agent/issues/4934) Nix macOS aarch64安装失败（onnxruntime wheel）
- [#6227](https://github.com/NousResearch/hermes-agent/issues/6227) Nix评估失败（缺失setupSecrets脚本）
- [#6649](https://github.com/NousResearch/hermes-agent/issues/6649) Discord网关SOCKS代理支持缺失
- [#5796](https://github.com/NousResearch/hermes-agent/issues/5796) Kimi vision调用403（缺失User-Agent）
- [#6075](https://github.com/NousResearch/hermes-agent/issues/6075) fallback后丢失provider特定header
- [#6398](https://github.com/NousResearch/hermes-agent/issues/6398) TUI状态栏fallback后显示旧模型名
- [#6598](https://github.com/NousResearch/hermes-agent/issues/6598) Azure OpenAI 404配置问题
- [#6671](https://github.com/NousResearch/hermes-agent/issues/6671) Telegram频道在Codex额度用尽后失效

---

## 6. 功能请求与路线图信号

| 功能方向 | Issue/PR | 成熟度 | 纳入可能性 |
|:---|:---|:---|:---|
| **终端渲染引擎** | [#4518](https://github.com/NousResearch/hermes-agent/issues/4518) + 5堆叠PR | 实现中 | ⭐⭐⭐⭐⭐ **高** - 已有活跃PR，技术债务明确 |
| **凭证代理守护进程** | [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) | 设计阶段 | ⭐⭐⭐⭐☆ **中高** - 安全架构演进需求，引用现有PR作者共识 |
| **AWS Bedrock原生支持** | [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) | 需求明确 | ⭐⭐⭐⭐☆ **中高** - 11点赞，企业合规刚需 |
| **多记忆提供者并行** | [#5688](https://github.com/NousResearch/hermes-agent/pull/5688) | PR待合并 | ⭐⭐⭐⭐⭐ **高** - 技术实现已完成，架构解耦 |
| **Slate Agent Hub平台** | [#5957](https://github.com/NousResearch/hermes-agent/pull/5957) | PR待合并 | ⭐⭐⭐⭐☆ **中高** - 多智能体通信基础设施 |
| **Zeroshot多智能体验证** | [#488](https://github.com/NousResearch/hermes-agent/issues/488) | 提案阶段 | ⭐⭐⭐☆☆ **中** - 外部项目集成，需评估维护成本 |
| **多智能体委员会Skill** | [#5876](https://github.com/NousResearch/hermes-agent/issues/5876) | 提案阶段 | ⭐⭐⭐☆☆ **中** - 轻量级实现，但价值验证待观察 |
| **Phoenix Protocol自改进** | [#6858](https://github.com/NousResearch/hermes-agent/pull/6858) | 文档PR | ⭐⭐⭐⭐☆ **中高** - 行为规范化，低实现成本 |

---

## 7. 用户反馈摘要

### 核心痛点

| 场景 | 反馈来源 | 情绪 |
|:---|:---|:---|
| **终端体验落差** | [#4518](https://github.com/NousResearch/hermes-agent/issues/4518) 评论 | 😤 "需要IDE级的diff和语法高亮，现在的输出难以阅读大型变更" |
| **企业安全合规** | [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) | 😰 "子进程仍能看到凭证是Phase 2的公认局限，需要零知识代理" |
| **云厂商锁定成本** | [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) | 💸 "OpenRouter加价+延迟，丢失AWS企业功能不可接受" |
| **认证状态混乱** | [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) | 🤯 "明明有额度却提示用完，重启重登都无效" |
| **Docker环境Cron失效** | [#6797](https://github.com/NousResearch/hermes-agent/issues/6797) | 😤 "任务显示成功但jobs.json未变更，session级bug" |
| **视觉工作流阻断** | [#6677](https://github.com/NousResearch/hermes-agent/issues/6677) | 😫 "剪贴板图片和本地文件视觉分析完全不可用" |

### 满意点

- **Hindsight记忆集成** 有用户主动提出最佳实践改进 ([#5237](https://github.com/NousResearch/hermes-agent/issues/5237))
- **多平台网关** 社区积极贡献Matrix、Feishu、Slate等平台适配

---

## 8. 待处理积压

### 需要维护者关注的高价值Issue

| Issue | 创建时间 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|
| [#488](https://github.com/NousResearch/hermes-agent/issues/488) Zeroshot多智能体验证 | 2026-03-06 (35天) | 架构评估 | 决策：是否官方支持外部编排器集成 |
| [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) AWS Bedrock原生支持 | 2026-03-30 (11天) | 实现资源 | 11点赞，建议分配cloud provider专项 |
| [#5237](https://github.com/NousResearch/hermes-agent/issues/5237) Hindsight记忆最佳实践 | 2026-04-05 (5天) | 设计确认 | 与#6654、#6672记忆系统变更协同 |
| [#6209](https://github.com/NousResearch/hermes-agent/issues/6209) 自定义端点API协议选择 | 2026-04-08 (2天) | 产品决策 | 影响多代理/网关场景，需UX设计 |
| [#6841](https://github.com/NousResearch/hermes-agent/issues/6841) 工具调用管道损坏 | 2026-04-09 (1天) | 待诊断 | **Critical新Bug**，需紧急分配 |

### 长期Pending PR

| PR | 等待时间 | 阻塞原因 |
|:---|:---|:---|
| [#4692](https://github.com/NousResearch/hermes-agent/pull/4692) Ink TUI重构 | 7天 | 架构评审，Python-React边界设计 |
| [#5688](https://github.com/NousResearch/hermes-agent/pull/5688) 多记忆提供者 | 3天 | 与现有内存管理器兼容性测试 |
| [#5957](https://github.com/NousResearch/hermes-agent/pull/5957) Slate Agent Hub | 3天 | 新平台维护责任确认 |

---

*日报生成时间：2026-04-10*  
*数据来源：NousResearch/hermes-agent GitHub*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-10

---

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，24小时内产生 **16 条 Issues 更新**（13 条新开/活跃，3 条关闭）和 **24 条 PR 更新**（17 条待合并，7 条已合并/关闭）。社区焦点集中在**多通道消息处理缺陷**、**Codex/OpenAI OAuth 集成稳定性**以及**Docker/配置文档的透明度问题**。值得注意的是，同一用户（zuozhehao）连续提交 3 个关联 Bug，暴露多通道架构下的竞态条件；同时社区对 Discord 官方支持不足的抱怨获得 2 个 👍，反映国际化运营的结构性短板。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#2420](https://github.com/sipeed/picoclaw/pull/2420) | lahuman | 文档修复：工具 JSON 转义语义改为 Provider 无关描述 | 消除 CLI 假设对其他 Provider 的误导，提升多模型兼容性 |
| [#2418](https://github.com/sipeed/picoclaw/pull/2418) | lahuman | 新增韩语 README 翻译 | 国际化文档覆盖扩展至韩语市场 |
| [#2457](https://github.com/sipeed/picoclaw/pull/2457) | dependabot[bot] | 升级 modernc.org/sqlite 1.48.0→1.48.2 | 依赖安全维护 |
| [#2454](https://github.com/sipeed/picoclaw/pull/2454) | dependabot[bot] | 升级 Telego 1.7.0→1.8.0（Telegram Bot API v9.6） | Telegram 通道能力同步上游 |
| [#2453](https://github.com/sipeed/picoclaw/pull/2453) | dependabot[bot] | 升级 AWS SDK v2 config | 云基础设施依赖维护 |

**整体评估**：今日合并以**文档完善**和**依赖维护**为主，核心功能修复 PR（如 Codex 流式输出、MCP 空参数处理）仍处于待审状态，关键稳定性问题尚未进入主干。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 核心诉求 | 深层分析 |
|:---|:---:|:---|:---|
| [#2319](https://github.com/sipeed/picoclaw/issues/2319) WebSocket 连接失败 | 4 | v0.2.5 WebSocket 连接失败 | 基础设施稳定性问题，影响实时通信场景，5天未获修复 |
| [#2426](https://github.com/sipeed/picoclaw/issues/2426) 工作区外文件访问被拒 | 3 ✅ | 安全限制与文件访问冲突 | **已关闭**——安全策略与用户体验的平衡问题 |
| [#795](https://github.com/sipeed/picoclaw/issues/795) GLM Coding Plan API 500 错误 | 3 ✅ | 长对话后 API 报错 | **已关闭**——Provider 侧稳定性问题，社区协作定位 |

### 反应最多的 Issue

| Issue | 👍 | 核心诉求 |
|:---|:---:|:---|
| [#2433](https://github.com/sipeed/picoclaw/issues/2433) Discord 官方支持缺失 | 2 | 要求官方派驻人员维护 Discord 社区，批评"Discord 像无人区" |

**关键洞察**：Discord 支持问题获得社区共鸣，反映 Sipeed 作为硬件厂商运营 AI 软件社区的**资源分配矛盾**——微信优先策略与国际化社区需求的冲突。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---:|
| 🔴 **高** | [#2447](https://github.com/sipeed/picoclaw/issues/2447) | 多任务连续发送时仅处理最后一条消息 | ❌ 无 |
| 🔴 **高** | [#2446](https://github.com/sipeed/picoclaw/issues/2446) | 多通道场景下消息回显/竞态条件 | ❌ 无 |
| 🔴 **高** | [#2448](https://github.com/sipeed/picoclaw/issues/2448) | WebUI 暴露 Agent 内部推理链（安全/体验双重问题） | [#2449](https://github.com/sipeed/picoclaw/pull/2449) 🔄 待审 |
| 🟡 **中** | [#2319](https://github.com/sipeed/picoclaw/issues/2319) | v0.2.5 WebSocket 连接失败 | ❌ 无 |
| 🟡 **中** | [#2429](https://github.com/sipeed/picoclaw/issues/2429) | 模型添加后无法使用 + 控制台双字符输入 | ❌ 无（用户情绪激烈）|
| 🟡 **中** | [#2438](https://github.com/sipeed/picoclaw/issues/2438) [#2439](https://github.com/sipeed/picoclaw/issues/2439) | Gateway Token 机制文档缺失/误导 | ❌ 无 |
| 🟡 **中** | [#2440](https://github.com/sipeed/picoclaw/issues/2440) | Docker ReadonlyRootfs 不兼容 | ❌ 无 |
| 🟢 **低** | [#2367](https://github.com/sipeed/picoclaw/issues/2367) | 设置页最后一屏标题未国际化（中文残留） | ❌ 无 |
| 🟢 **低** | [#2377](https://github.com/sipeed/picoclaw/issues/2377) | exec/logs 输出不安全终端控制字符 | ❌ 无 |

### 关键修复 PR（待审）

| PR | 修复目标 | 关联 Issue |
|:---|:---|:---|
| [#2462](https://github.com/sipeed/picoclaw/pull/2462) | Codex 流式输出修复 + Telegram 重复重试 | 多场景稳定性 |
| [#2460](https://github.com/sipeed/picoclaw/pull/2460) | MCP 空参数传递 `null`→`{}` 兼容 TypeScript SDK | Zod 验证失败 |
| [#2449](https://github.com/sipeed/picoclaw/pull/2449) | WebUI 工具调用摘要与助手输出同步 | [#2448](https://github.com/sipeed/picoclaw/issues/2448) |
| [#2443](https://github.com/sipeed/picoclaw/pull/2443) | Codex OAuth gpt-5.4 空响应修复 | 流式输出问题 |
| [#2437](https://github.com/sipeed/picoclaw/pull/2437) | Codex 流事件输出项累积 | 空响应根因 |
| [#2436](https://github.com/sipeed/picoclaw/pull/2436) | FTS5 MATCH 查询注入防护 | 搜索安全 |

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 内容 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) | 体验优化 | 禁用 Enter 发送消息（移动端多行输入） | ⭐⭐⭐ 高——Android 用户痛点明确 |
| [#2444](https://github.com/sipeed/picoclaw/issues/2444) | 安全增强 | MCP 服务器密钥支持 `.security.yml` | ⭐⭐⭐ 高——与现有安全体系一致 |
| [#2442](https://github.com/sipeed/picoclaw/pull/2442) | 架构升级 | Skills 注册表重构 + GitHub 后端发现 | ⭐⭐⭐ 高——PR 已提交，生态扩展关键 |
| [#2414](https://github.com/sipeed/picoclaw/pull/2414) | 可观测性 | Gateway 启动错误日志记录 | ⭐⭐⭐ 高——基础运维能力 |

**路线图信号**：GitHub-backed skill discovery（[#2442](https://github.com/sipeed/picoclaw/pull/2442)）标志着 PicoClaw 正从**封闭技能生态**向**开放插件市场**演进，与 MCP 生态形成互补。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **Android TV/Termux 边缘场景** | [#2462](https://github.com/sipeed/picoclaw/pull/2462) | "Android 7 + Termux + Telegram + OpenAI OAuth" 组合下 Codex 流式输出断裂，Telegram 重复重试 |
| **多通道生产部署** | [#2447](https://github.com/sipeed/picoclaw/issues/2447) [#2446](https://github.com/sipeed/picoclaw/issues/2446) | 消息丢失、竞

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-10

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃度开发状态**：24 个 PR 更新（14 个已合并/关闭，10 个待审），4 个 Issue 变动。核心特征是**企业级功能快速迭代**——Slack Socket Mode、多租户会话委派、Matrix E2EE 加密通道等重磅功能密集提交；同时**稳定性修复密集落地**，jbaruch 单日贡献 5 个修复 PR，覆盖触发器匹配、心跳隔离、容器权限等生产环境问题。社区对 OAuth 计费变更有显著关切，SSL 证书问题持续未解。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（14 个）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#1713](https://github.com/qwibitai/nanoclaw/pull/1713) | jbaruch | 修复容器用户无法写入 `.claude` 目录的权限问题 | **解决多用户部署 blocker**，Unraid/Docker 场景可用性提升 |
| [#1712](https://github.com/qwibitai/nanoclaw/pull/1712) | jbaruch | 回复/引用机器人消息时触发响应（`requiresTrigger` 组） | 完善交互自然度，减少用户学习成本 |
| [#1711](https://github.com/qwibitai/nanoclaw/pull/1711) | jbaruch | 触发词匹配从行首扩展到消息任意位置 | **重大 UX 改进**，支持 `@someone @Andy what about...` 类自然对话 |
| [#1714](https://github.com/qwibitai/nanoclaw/pull/1714) | jbaruch | 为 `requiresTrigger` 组自动创建独立心跳 | **修复跨组消息误响应**的严重 bug，隔离性增强 |
| [#1710](https://github.com/qwibitai/nanoclaw/pull/1710) | BorisBozic | ICS 日历解析支持 `LOCATION` 字段 | 日历集成完整度提升 |
| [#1709](https://github.com/qwibitai/nanoclaw/pull/1709) | gorillahub | Token Usage 表记录模型名称 + 强制允许列表 | 成本追踪与治理合规能力 |
| [#1698](https://github.com/qwibitai/nanoclaw/pull/1698) | bitcryptic-gw | 新组自动继承 `ANTHROPIC_API_KEY` | **消除首次部署手动配置痛点** |
| [#1572](https://github.com/qwibitai/nanoclaw/pull/1572) | IYENTeam | SDK 查询挂起时 AbortController 超时终止 | **防止容器无限挂起**，稳定性关键修复 |
| [#1550](https://github.com/qwibitai/nanoclaw/pull/1550) | BorisBozic | `EADDRINUSE` 端口占用时自动重试监听 | 崩溃后快速恢复能力 |
| [#1708](https://github.com/qwibitai/nanoclaw/pull/1708) | dwalthour | 恢复 channels barrel import | 热修复，防止构建失败 |

**整体评估**：今日合并内容覆盖**权限模型、交互范式、故障恢复、部署体验**四大维度，项目向生产就绪迈出实质性步伐。

---

## 4. 社区热点

### 讨论最活跃的 Issue

| 排名 | Issue | 评论数 | 核心诉求 |
|:---|:---|:---:|:---|
| 🥇 | [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) nanoclaw.dev SSL 证书无效 | **15** | **基础设施信任危机**：官方文档站点证书过期 13 天未修复，严重影响新用户第一印象与 HTTPS 依赖功能（如 OAuth 回调） |
| 🥈 | [#1620](https://github.com/qwibitai/nanoclaw/issues/1620) OAuth token 计费方式变更 | **6** | **成本焦虑**：Anthropic 政策变更导致第三方 harness 消耗"额外用量"而非订阅额度，用户要求文档明确推荐 API Key 方案 |

**深度分析**：
- **#1503** 的高评论数反映社区对项目"官方门面"维护状态的担忧，15 条评论中多为用户确认问题持续存在，无维护者响应，存在**声誉风险**。
- **#1620** 触及商业模式敏感性：用户意识到 NanoClaw 的配置选择直接影响 Claude 账单，文档的推荐策略具有**财务影响权重**。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#1718](https://github.com/qwibitai/nanoclaw/issues/1718) | `outputChain` 缺少 `.catch()` 导致 `runContainerAgent` 永不 resolve，触发调度器失控重派发 | **待修复**（无 PR） |
| 🟡 **High** | [#1719](https://github.com/qwibitai/nanoclaw/issues/1719) | `session-cleanup.ts` 硬编码 `/bin/bash`，Windows 环境崩溃 | ✅ **已关闭**（修复 PR 已合并） |
| 🟡 **High** | [#1714](https://github.com/qwibitai/nanoclaw/pull/1714) | `requiresTrigger` 组心跳跨组查询导致消息误响应 | ✅ **已修复** |
| 🟢 **Medium** | [#1702](https://github.com/qwibitai/nanoclaw/pull/1702) | `for-await` 循环未正确 break 导致 IPC 消息丢失 | **待合并** |

**关键风险**：[#1718](https://github.com/qwibitai/nanoclaw/issues/1718) 是今日新增的严重缺陷——Promise 链断裂引发调度器级联故障，可能导致任务重复执行、资源耗尽，**建议优先处理**。

---

## 6. 功能请求与路线图信号

### 待审重磅功能 PR（10 个待合并中的核心项）

| PR | 功能 | 路线图信号 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [#1721](https://github.com/qwibitai/nanoclaw/pull/1721) | **Slack Socket Mode + 多工作区** | 企业 Slack 部署的痛点方案（无需公网 URL） | ⭐⭐⭐⭐⭐ 高优先级，解决规模化部署瓶颈 |
| [#1720](https://github.com/qwibitai/nanoclaw/pull/1720) | **多租户会话委派** | "路由器"架构模式，轻量分类器 → 专业 Agent | ⭐⭐⭐⭐⭐ 架构级能力，支撑复杂工作流 |
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) | **Matrix 通道 + E2EE** | 隐私优先用户/去中心化社区需求 | ⭐⭐⭐⭐☆ 差异化竞争力，技术债务可控 |
| [#1515](https://github.com/qwibitai/nanoclaw/pull/1515) | 组级 MCP 服务器配置 | 生态扩展性（Home Assistant 等集成） | ⭐⭐⭐⭐☆ 社区呼声高，需安全审计 |
| [#1716](https://github.com/qwibitai/nanoclaw/pull/1716) | `/check-contribution` 运营技能 | 降低贡献门槛，自动化 PR 预检 | ⭐⭐⭐☆☆ 开发者体验改进 |
| [#1717](https://github.com/qwibitai/nanoclaw/pull/1717) | OneCLI 代理集成 | 凭证管理统一化 | ⭐⭐⭐☆☆ 基础设施现代化 |

**趋势判断**：今日 PR 集中体现 **"企业就绪"** 主题——多租户、多工作区、端到端加密、标准化凭证管理，表明项目正从个人工具向团队/企业平台演进。

---

## 7. 用户反馈摘要

### 真实痛点提炼

| 来源 | 痛点 | 场景 | 情绪 |
|:---|:---|:---|:---|
| [#1620](https://github.com/qwibitai/nanoclaw/issues/1620) 评论 | "OAuth 配置导致意外账单" | 按教程配置后 Claude 账户被额外扣费 | 😤 **愤怒/焦虑** |
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) 评论 | "官方站点证书无效，无法信任" | 首次访问文档即遇安全警告 | 😕 **失望/质疑** |
| [#1698](https://github.com/qwibitai/nanoclaw/issues/1698) 背景 | "每次新建组都要手动改 settings.json" | Unraid CA 一键部署后首次使用失败 | 😤 **挫败** |
| [#1719](https://github.com/qwibitai/nanoclaw/issues/1719) | "Windows 上清理脚本直接崩溃" | 跨平台开发环境 | 😐 **无奈** |

### 满意点

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-10

---

## 1. 今日速览

NullClaw 今日保持**高活跃度**，24小时内完成 **11 个 PR 的合并/关闭**，仅 **5 个 PR 待合并**，Issue 清理效率显著（关闭 4 条，新开 2 条）。核心贡献者 **manelsen** 主导了本轮迭代，集中交付了 Telegram/QQ 渠道稳定性、配置解析修复、技能安装扩展等关键改进。项目当前无阻塞性发布需求，但 **2 个新报 Bug（Linux Shell 执行、系统提示词污染）** 需关注。整体健康度：**良好**，渠道可靠性工程进入收尾阶段。

---

## 2. 版本发布

**无新版本发布**（v2026.3.21 仍为最新）

---

## 3. 项目进展

### 已合并/关闭的关键 PR（11 条）

| PR | 贡献者 | 核心改进 | 影响面 |
|:---|:---|:---|:---|
| [#728](https://github.com/nullclaw/nullclaw/pull/728) | manelsen | **修复自定义 Provider 主模型解析**——解决 Cloudflare 等长 API 路径端点的 `primary` 模型识别失败问题 | 配置系统 |
| [#732](https://github.com/nullclaw/nullclaw/pull/732) | manelsen | **QQ 渠道延迟回复容错**——`msg_id` 失效后自动降级为普通发送，根治耗时任务导致的断连问题 | 渠道稳定性 |
| [#735](https://github.com/nullclaw/nullclaw/pull/735) | manelsen | **技能 Web 发现安装**——支持 `.well-known/nullclaw-skill.json` 标准，可从任意 HTTPS URL 安装技能 | 生态扩展 |
| [#726](https://github.com/nullclaw/nullclaw/pull/726) | manelsen | **Telegram 交互式模型选择**——分页按钮驱动的 `/model` 选择器，支持 Markdown→HTML 优化渲染 | 用户体验 |
| [#724](https://github.com/nullclaw/nullclaw/pull/724) | manelsen | **OpenRouter 推理轨迹保留**——流式响应中分离 reasoning 与可见内容，支持思维链展示 | 模型能力 |
| [#745](https://github.com/nullclaw/nullclaw/pull/745) | manelsen | **文件工具代码重构**——提取 `file_common.zig` 共享模块，统一 6 个文件操作的前置检查逻辑 | 代码质量 |
| [#744](https://github.com/nullclaw/nullclaw/pull/744) | manelsen | **Ollama 工具别名规范化**——`scheduler_tool`/`schedule_tool` 统一映射为 `schedule` | 本地模型兼容 |
| [#731](https://github.com/nullclaw/nullclaw/pull/731) | manelsen | **出站消息瞬时失败重试**——区分瞬态/永久错误，避免无效重试 | 消息可靠性 |
| [#725](https://github.com/nullclaw/nullclaw/pull/725) | manelsen | **引导流程优化**——移除模型获取 20 条限制，`:free` 模型优先排序 |  onboarding 体验 |
| [#794](https://github.com/nullclaw/nullclaw/pull/794) | kunalk16 | **修复交互式配置 JSON 格式化**——深度≥2 的嵌套对齐问题 | 修复 #765 |
| [#792](https://github.com/nullclaw/nullclaw/pull/792) | jonathanhfmills | **更新依赖锁文件**——wasm3/websocket 的 Nix hash 修复 | 构建稳定性 |

**里程碑意义**：本轮迭代完成了 **"渠道可靠性三部曲"**（#731 重试机制 → #730 持久化 outbox 待合并 → #732 QQ 容错），标志着 NullClaw 从功能交付转向**生产级稳定性**建设。同时 #735 的 `.well-known` 技能标准支持，为生态扩展奠定协议基础。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求 |
|:---|:---|:---:|:---|
| 🥇 | [#791](https://github.com/nullclaw/nullclaw/issues/791) Linux Shell 无法运行 | 2 | **物理机 Linux 原生运行时权限/环境隔离问题**，用户已允许全部命令仍失败 |
| 🥈 | [#793](https://github.com/nullclaw/nullclaw/issues/793) 系统提示词继承污染 | 1 | **多 Agent 架构设计缺陷**——默认 Agent 错误注入首个子 Agent 的系统提示词 |
| 🥉 | [#721](https://github.com/nullclaw/nullclaw/issues/721) 配置解析错误 | 1 | （已关闭）Cloudflare 端点配置工作流验证 |

**深层分析**：
- **#791** 暴露 Shell 工具在**非容器化 Linux 环境**的适配盲区，可能与 seccomp/cgroups 或 Zig 运行时检测有关
- **#793** 揭示 Agent 编排层的**作用域泄漏**问题，影响多 Agent 工作流的提示词隔离性，需架构级修复

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---:|
| 🔴 **高** | [#791](https://github.com/nullclaw/nullclaw/issues/791) | 物理机 Linux Shell 执行完全失效（native runtime） | 开放，待复现 | ❌ 无 |
| 🟡 **中** | [#793](https://github.com/nullclaw/nullclaw/issues/793) | 系统提示词被首个子 Agent 污染，破坏多 Agent 隔离 | 开放，已确认 | ❌ 无 |
| 🟢 **低** | [#765](https://github.com/nullclaw/nullclaw/issues/765) | 交互式 onboarding 生成 minified JSON | **已修复** | ✅ [#794](https://github.com/nullclaw/nullclaw/pull/794) |
| 🟢 **低** | [#721](https://github.com/nullclaw/nullclaw/issues/721) | 自定义 Provider URL 解析错误 | **已修复** | ✅ [#728](https://github.com/nullclaw/nullclaw/pull/728) |
| 🟢 **低** | [#722](https://github.com/nullclaw/nullclaw/issues/722) | QQ 耗时任务断连 | **已修复** | ✅ [#732](https://github.com/nullclaw/nullclaw/pull/732) |

**风险评估**：#791 和 #793 构成**双轨稳定性风险**——前者阻断 Linux 服务器部署场景，后者侵蚀多 Agent 核心架构的可靠性。建议优先分配维护者资源。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 技术可行性 | 纳入下一版本概率 |
|:---|:---|:---:|:---:|
| [#734](https://github.com/nullclaw/nullclaw/issues/734)（已关闭） | `.well-known` URI 技能安装标准 | ✅ 已实现于 #735 | **100%**（已交付） |
| [#783](https://github.com/nullclaw/nullclaw/pull/783)（开放） | **Cron 子 Agent 引擎**——DB 调度、运行历史、JSON CLI 输出 | 高 | **85%**——功能完整，待代码审查 |
| [#730](https://github.com/nullclaw/nullclaw/pull/730)（开放） | **持久化出站 Outbox**——消息投递 survive 重启 | 高 | **80%**——可靠性核心组件 |
| [#727](https://github.com/nullclaw/nullclaw/pull/727)（开放） | **多 Provider 交互式选择**——Telegram/Discord/Slack/Lark 统一体验 | 高 | **75%**——依赖 #726 已合并的基础 |
| [#789](https://github.com/nullclaw/nullclaw/pull/789)（开放） | **网关安全加固**——公网绑定防护、按客户端限流 | 中 | **60%**——需安全审计 |
| [#790](https://github.com/nullclaw/nullclaw/pull/790)（开放） | **Responses API 工具模式修复**——schema 格式与 null 处理 | 高 | **70%**——OpenAI 兼容性问题 |

**路线图信号**：Cron 调度（#783）与持久化 Outbox（#730）的组合，暗示 NullClaw 正向 **"可编程 Agent 基础设施"** 演进——支持定时任务、故障恢复、运行审计的企业级需求。

---

## 7. 用户反馈摘要

### 痛点
- **部署环境碎片化**："Shell cannot running on the Linux system, even I allow the shell tools to permit all command"（#791）——权限模型与物理机环境存在预期差
- **多 Agent 调试困难**：系统提示词"corrupting"且难以追踪来源（#793）
- **配置即代码体验**：JSON 格式化问题虽修复，但反映配置生成层的健壮性不足

### 满意点
- **渠道稳定性改善**：QQ 断连问题快速响应（#722 → #732，14 天闭环）
- **生态标准化**：`.well-known

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-04-10

## 1. 今日速览

IronClaw 今日保持**高活跃度**，24小时内处理 **14 个 Issue 关闭**与 **11 个 PR 合并/关闭**，同时新增 **10 个活跃 Issue** 和 **39 个待合并 PR**。项目正处于 **v2 架构迁移关键期**：核心团队密集推进引擎重构（V1 代码删除、V2 全面接管）、部署体验优化（Railway/Docker 单端口部署）及安全加固（Wasmtime 升级、URL scheme 校验）。社区侧，Google OAuth 相关问题集中爆发，文档迁移与多租户权限管理成为近期焦点。

---

## 2. 版本发布

**无新版本发布**

> 注：项目当前版本为 v0.19.0，但今日无新 tag。v0.19.0 存在 PostgreSQL 迁移校验失败问题（[#1328](https://github.com/nearai/ironclaw/issues/1328)），已于今日关闭，建议用户关注修复状态。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心进展 |
|:---|:---|:---|
| [#2220](https://github.com/nearai/ironclaw/pull/2220) `Demo/abound staging` | zetyquickly | **Abound 演示部署落地**：合并 staging 至 demo/abound 分支，工具从 SKILL.md 迁移至 WASM 二进制，标志 v2 架构生产就绪 |
| [#2210](https://github.com/nearai/ironclaw/pull/2210) `feat(docker): pre-bundle WASM extensions` | henrypark133 | **Docker 构建优化**：新增 `wasm-builder` 阶段，staging 镜像预构建所有 WASM 扩展，解决 PaaS 部署工具缺失问题 |
| [#2195](https://github.com/nearai/ironclaw/pull/2195) `feat(tui): ship TUI in default binary` | serrrfirat | **TUI 默认集成**：Ratatui 终端界面纳入默认构建，运行时按需激活，降低新用户上手门槛 |
| [#2153](https://github.com/nearai/ironclaw/pull/2153) | dependabot[bot] | 依赖批量更新（30 项），合并后由 [#2217](https://github.com/nearai/ironclaw/pull/2217) 接替（31 项更新） |

### 架构演进里程碑

- **V2 引擎全面接管**：[#2193](https://github.com/nearai/ironclaw/issues/2193) 提出删除 **~35,000 行 V1 代码**，V2 已通过 281 单元测试 + 2457 行 E2E 测试，零硬依赖
- **核心抽象简化**：[#2192](https://github.com/nearai/ironclaw/issues/2192) 规划将 7 个顶层概念（Tools/Channels/Skills/Signals 等）压缩为 3 个，降低认知负担

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---|:---|
| [#902](https://github.com/nearai/ironclaw/issues/902) Google OAuth 被 Google Suite 工具拦截 | 5 | **企业集成刚需**：用户需要 Google Workspace 工具（Gmail/Calendar/Docs）的 OAuth 支持，但 Google 安全策略阻断；诉求增加 GWS 回退 Provider | ✅ 已关闭 |
| [#1328](https://github.com/nearai/ironclaw/issues/1328) v0.19.0 升级失败：迁移校验不匹配 | 4 | **数据迁移可靠性**：PR #1151 原地修改已应用的 V6__routines.sql，导致现有数据库无法升级 | ✅ 已关闭 |
| [#1754](https://github.com/nearai/ironclaw/issues/1754) 私有网络模型无法使用 | 4 | **企业内网部署**：自托管模型（如 litellm-proxy）因 HTTP 非 TLS 被拦截，需放宽 localhost 限制或允许配置白名单 | ✅ 已关闭 |
| [#2204](https://github.com/nearai/ironclaw/issues/2204) /metrics Prometheus 端点（自动化测试） | 3 | **可观测性基础设施**：E2E 测试自动创建，验证开发者工作流技能闭环 | ✅ 已关闭 |
| [#2185](https://github.com/nearai/ironclaw/issues/2185) /metrics Prometheus 端点（同上） | 3 | 同上，不同测试批次 | ✅ 已关闭 |

### 热点分析

> **Google OAuth 危机集中爆发**：今日关闭 4 个相关 Issue（#902, #1992, #1829, #2001），反映企业用户对 Google Workspace 集成的强需求与 Google 安全策略收紧的冲突。项目需评估是否引入替代认证方案（如服务账号、GWS 专用 Provider）。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **High** | [#2206](https://github.com/nearai/ironclaw/issues/2206) | **V2 引擎 auth_url 未校验 scheme**：恶意/故障工具可返回 `javascript:`/`file://` 等危险 URL，导致 XSS/信息泄露 | 🔄 待修复 |
| 🔴 **High** | [#2180](https://github.com/nearai/ironclaw/issues/2180) | **MCP 工具在沙箱作业中不可用**：PR #1243 生成的 `mcp-servers.json` 未在容器内被消费，OAuth 认证 MCP 服务器无法工作 | 🔄 [#2214](https://github.com/nearai/ironclaw/pull/2214) 开发中 |
| 🟡 **Medium** | [#2221](https://github.com/nearai/ironclaw/issues/2221) | **空注册表误识别**：`~/.cargo/registry` 被误认为 IronClaw 扩展注册表，导致 `registry list` 失效 | 🔄 [#2222](https://github.com/nearai/ironclaw/pull/2222) 已提交 |
| 🟡 **Medium** | [#2087](https://github.com/nearai/ironclaw/issues/2087) | **Notion 设置后无响应**：配置流程导致 Agent 卡死 | ⏳ 待响应 |
| 🟡 **Medium** | [#1998](https://github.com/nearai/ironclaw/issues/1998) | **Slack 连接流程损坏**：Token 配置后 Bot 无响应，状态消息冲突 | ⏳ 待响应 |
| 🟡 **Medium** | [#1997](https://github.com/nearai/ironclaw/issues/1997) | **Slack App 不可用**：用户需自行创建 App，体验断裂 | ⏳ 待响应 |
| 🟡 **Medium** | [#2201](https://github.com/nearai/ironclaw/issues/2201) | **Response API 路径缺失 `/api`**：`/v1/responses` 应为 `/api/v1/responses`，需保证向后兼容 | ⏳ 待响应 |

### 今日已修复

- [#1328](https://github.com/nearai/ironclaw/issues/1328) 数据库迁移校验失败 → 已关闭
- [#1754](https://github.com/nearai/ironclaw/issues/1754) 私有网络 HTTP 限制 → 已关闭（可能通过配置放宽或文档说明）

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入可能性 | 说明 |
|:---|:---|:---|:---|
| [#2193](https://github.com/nearai/ironclaw/issues/2193) 删除 V1 代码 | 技术债 | ⭐⭐⭐⭐⭐ **确定** | 核心团队主导，V2 已就绪，~35k 行代码删除 |
| [#2192](https://github.com/nearai/ironclaw/issues/2192) 7→3 概念简化 | 架构设计 | ⭐⭐⭐⭐⭐ **高** | 与 V2 迁移协同，降低开发者门槛 |
| [#2223](https://github.com/nearai/ironclaw/issues/2223) Whisper 语音转录 | 功能 | ⭐⭐⭐⭐ **中高** | Telegram 语音笔记场景明确，NEAR AI 基础设施可复用 |
| [#2203](https://github.com/nearai/ironclaw/pull/2203) IRONCLAW_PROFILE 部署配置 | 体验优化 | ⭐⭐⭐⭐⭐ **确定** | 已提交 PR，4 种内置配置覆盖主流场景 |
| [#2184](https://github.com/nearai/ironclaw/issues/2184) /metrics Prometheus 端点 | 可观测性 | ⭐⭐⭐⭐⭐ **确定** | 多次自动化测试验证，生产就绪 |
| [#2214](https://github.com/nearai/ironclaw/pull/2214) MCP 客户端沙箱支持 | 基础设施 | ⭐⭐⭐⭐⭐ **进行中** | 解决 #2180，关键路径 |
| [#2224](https://github.com/nearai/ironclaw/pull/2224) Wasmtime 升级至 43.0.1 | 安全 | ⭐⭐⭐⭐⭐ **紧急** | 漏洞修复，CI 解锁，今日新建 PR |

---

## 7. 用户反馈摘要

### 😫 痛点
- **OAuth 配置地狱**：Google/Slack/Gmail 的 OAuth 流程反复失败，错误信息不明确（"Access blocked" / "Activation failed" 状态冲突）
- **部署文档分散**：文档仓库独立（ironclaw-docs），今日才启动迁移（[#2188](https://github.com/nearai/ironclaw/issues/2188)），新手找不到配置说明（[#1174](https://github.com/nearai/ironclaw/issues/1174)）
- **私有网络受限**：自托管模型因 TLS 强制要求无法在内网使用（[#1754](https://github.com/nearai/ironclaw/issues/1754)）

### 😊 满意
- **V2 引擎稳定性**：281 单元测试 + 2457 E2E 测试覆盖，贡献者信心充足
- **WASM 扩展生态**：工具/频道 WASM 化进展明确，预构建镜像减少部署摩擦

### 💡 场景洞察
- **企业多租户**：Admin 需限制普通用户的工具创建权限（[#2078](https://github.com/nearai/ironclaw/issues/2078) 已关闭）
- **PaaS 一键部署**：Railway/Heroku 用户强烈需要单端口部署（[#2159](https://github.com/nearai/ironclaw/pull/2159) 解决中）

---

## 8. 待处理积压

> 以下 Issue/PR 超过 7 天无更新或需维护者决策，建议优先响应：

| 条目 | 创建时间 | 状态 | 提醒 |
|:---|:---|:---|:---|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) Aliyun 灵码计划支持 | 2026-03-20 | 🔄 Open, XL size | 国内开发者接入需求，20天未合并，需架构评审 |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) 按频道过滤 MCP/内置工具 | 2026-03-18 | 🔄 Open, XL size | 多频道部署核心能力，22天未合并，与 V2 路由冲突需协调 |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) Abound 演示完整功能 | 2026-03-30 | 🔄 Open, XL size | 被 #2220 部分替代，需确认是否继续推进或拆分 |
| [#1997](https://github.com/nearai/ironclaw/issues/1997) Slack App 不可用 | 2026-04-03 | ⏳ Open, 1 comment | 企业用户阻塞，7天无响应，需产品决策（官方 App vs 用户自建）|
| [#2087](https://github.com/nearai/ironclaw/issues/2087) Notion 设置后无响应 | 2026-04-06 | ⏳ Open, 2 comments | 具体复现步骤待补充，需开发者跟进 |

---

*日报生成时间：2026-04-10 | 数据来源：nearai/ironclaw GitHub 活动*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-10

> **网易有道 LobsterAI** —— 开源 AI 智能体与个人助手平台  
> 数据来源: github.com/netease-youdao/LobsterAI

---

## 1. 今日速览

LobsterAI 今日开发活跃度**极高**，24小时内产生 **37 个 PR**（24 个待合并）和 **3 个新 Issue**，但无新版本发布。核心团队正集中火力修复 **OpenClaw 网关稳定性**与 **Cowork 协作引擎**的并发/数据一致性问题，同时处理 macOS 平台的启动崩溃等用户侧紧急 Bug。PR 合并率达 35%（13/37），显示代码审查节奏紧凑。值得注意的是，今日所有 Issue 均为 Bug 报告且零评论，社区反馈渠道有待加强。

---

## 2. 版本发布

**无新版本发布**

> 最新版本仍为历史版本，建议关注 #1610、#1611 等关键修复的合并进度，可能为 patch 版本发布铺路。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（13 个）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#1608](https://github.com/netease-youdao/LobsterAI/pull/1608) | kayo5994 | 修复 `getConfig()` 硬编码 `executionMode` 为 `'local'` 的问题 | **配置系统可靠性** — 用户自定义的执行模式（auto/local/sandbox）现在能正确持久化和读取 |
| [#1609](https://github.com/netease-youdao/LobsterAI/pull/1609) | kayo5994 | SQLite 内存迁移标记仅在成功时写入 | **数据安全** — 防止失败迁移被误标记为完成，避免数据丢失 |
| [#1605](https://github.com/netease-youdao/LobsterAI/pull/1605) | liuzhq1986 | MCP 列表命令文本过长时 key 标签换行修复 | **UI 细节打磨** |
| [#1604](https://github.com/netease-youdao/LobsterAI/pull/1604) | liuzhq1986 | 深色模式预制 prompt 卡片与 toggle 开关视觉修复 | **主题一致性** |
| [#1596](https://github.com/netease-youdao/LobsterAI/pull/1596) | liuzhq1986 | 移除 OpenClaw channel 配置中的 `_agentBinding` 哨兵字段，限制附件列表最大高度 | **网关稳定性** — 解决 schema 校验失败导致的重启循环 |

**整体进展评估**：今日合并聚焦**配置正确性**与**视觉细节**，但核心架构修复（OpenClaw 网关、Cowork 并发控制）仍在待合并队列，预计明日迎来更大规模的功能稳定性提升。

---

## 4. 社区热点

> 今日所有 PR/Issue 评论数均为 0 或未定义，社区讨论活跃度**偏低**，以下为按技术影响力排序的关注点：

### 🔥 技术热点（高影响力，待合并）

| 条目 | 作者 | 核心诉求/技术价值 | 链接 |
|:---|:---|:---|:---|
| **#1611** — 修复网关配置 schema 兼容导致的重启循环 | wulei05 | **生产环境稳定性**：解决 OpenClaw 网关因 `_agentBinding` 字段与 schema 不兼容而无限重启的致命问题 | [PR #1611](https://github.com/netease-youdao/LobsterAI/pull/1611) |
| **#1610** — 添加会话保持时长配置 | wulei05 | **企业级功能**：支持配置会话保留策略（默认30天），修复跨时区提醒任务时间漂移 | [PR #1610](https://github.com/netease-youdao/LobsterAI/pull/1610) |
| **#1597** — 启用 SQLite 外键约束，修复级联删除失效 | kayo5994 | **数据完整性**：解决删除 session/memory 后孤儿数据残留的长期隐患 | [PR #1597](https://github.com/netease-youdao/LobsterAI/pull/1597) |

**背后诉求分析**：团队正从"功能交付"转向"企业级可靠性"，外键约束、配置校验、事务原子性等基础架构加固成为重点，暗示项目可能进入 B 端商业化关键阶段。

---

## 5. Bug 与稳定性

### 🚨 高优先级（用户侧崩溃/功能阻断）

| Issue | 严重程度 | 状态 | 描述 | 修复 PR |
|:---|:---|:---|:---|:---|
| [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) | **P0-崩溃** | 🆕 新报告 | macOS Intel 版 2026.04.08 会话功能、定时任务均无法执行 | 待关联 |
| [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) | **P0-崩溃** | 🆕 新报告 | 更新最新版本后首次启动崩溃（macOS） | 待关联 |
| [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) | P2-体验 | 🆕 新报告 | 中/English 切换后，"条款"和"工具风格"未国际化 | 待关联 |

### 🔧 架构层 Bug 修复（待合并，影响稳定性）

| PR | 问题域 | 修复内容 | 风险等级 |
|:---|:---|:---|:---|
| [#1607](https://github.com/netease-youdao/LobsterAI/pull/1607) | LLM 流式输出 | Anthropic/Gemini SSE 行缓冲修复，防止 JSON 分块解析失败导致内容丢失 | 高 — 影响 AI 回复完整性 |
| [#1603](https://github.com/netease-youdao/LobsterAI/pull/1603) | Cowork 引擎 | 修复 `continueSession` 重复错误消息与异常静默吞没 | 高 — 影响协作会话可靠性 |
| [#1602](https://github.com/netease-youdao/LobsterAI/pull/1602) | 消息序列号 | `addMessage` 并发竞争导致序列号重复 | 中 — 影响消息顺序 |
| [#1601](https://github.com/netease-youdao/LobsterAI/pull/1601) | 网关状态 | 重连后 session 停止冷却丢失，导致已停止 session 被 IM 消息复活 | 高 — 影响用户控制预期 |
| [#1599](https://github.com/netease-youdao/LobsterAI/pull/1599) | 权限路由 | 权限响应被广播到两个引擎，可能导致非预期行为 | 中 — 影响多引擎隔离性 |

**稳定性评估**：macOS 平台出现集中崩溃报告，需紧急响应；架构层 5 个高/中风险修复待合并，建议优先审查 #1611、#1603、#1601。

---

## 6. 功能请求与路线图信号

> 今日无明确功能请求 Issue，但从 PR 内容可推断产品方向：

| 信号来源 | 功能方向 | 纳入下一版本可能性 |
|:---|:---|:---|
| [#1610](https://github.com/netease-youdao/LobsterAI/pull/1610) 会话保持时长配置 | **企业数据治理**：会话生命周期管理、合规留存策略 | ⭐⭐⭐⭐⭐ 高 — 已实现，待合并 |
| [#1584](https://github.com/netease-youdao/LobsterAI/pull/1584) Agent ID 生成策略 | **数据隔离安全**：短 UUID 替代名称生成，防止数据复活 | ⭐⭐⭐⭐⭐ 高 — 安全加固 |
| [#1594](https://github.com/netease-youdao/LobsterAI/pull/1594) 搜索功能增强 | **用户体验**：跨 Agent 搜索 + 消息内容匹配 | ⭐⭐⭐⭐☆ 中高 — 体验优化 |
| [#1606](https://github.com/netease-youdao/LobsterAI/pull/1606) NetEase Bee 密钥环境变量化 | **安全合规**：统一 IM 频道凭据管理 | ⭐⭐⭐⭐⭐ 高 — 安全基线 |

**路线图判断**：下一版本（预计 2026.04.x patch）将以**稳定性加固 + 企业安全合规**为主题，而非新功能交付。

---

## 7. 用户反馈摘要

### 💬 真实痛点（来自今日 Issues）

> **macOS Intel 用户 @gongfen0121** — 连续报告两个 P0 崩溃：
> - "会话功能、定时任务功能均无法正常进行" — 核心功能完全阻断
> - "更新最新版本首次启动崩溃" — 升级体验断裂，附详细日志 [更新后启动闪退.txt](https://github.com/netease-youdao/LobsterAI/files/26596297/default.txt)

> **国际化用户 @QinGang746** — 细节体验瑕疵：
> - 语言切换后"条款"和"工具风格"仍为中文，推测为硬编码字符串遗漏

### 📊 满意度信号

| 维度 | 评估 | 依据 |
|:---|:---|:---|
| 功能完整性 | ⚠️ 承压 | 核心功能（会话、定时任务）在特定

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-04-10

---

## 1. 今日速览

Moltis 今日展现**极高开发活跃度**，24小时内完成 **23个PR合并/关闭** 和 **14个Issue关闭**，零新增待处理Issue。核心团队推进了**模型生态扩展**（GPT-5.x、Gemini 3.x、阿里巴巴Coding Plan）、**关键稳定性修复**（MiniMax系统提示、Ollama 404、Exec工具配置失效）及**基础设施改进**（文档、测试覆盖、依赖更新）。唯一待合并项为Dependabot的常规依赖升级。项目健康度：**优秀**，发布节奏紧凑，问题响应迅速。

---

## 2. 版本发布

### `20260409.01` 已发布
> 链接: [moltis-org/moltis/releases/tag/20260409.01](https://github.com/moltis-org/moltis/releases/tag/20260409.01)

**更新内容**（基于当日合并PR推断）：
| 类别 | 内容 |
|:---|:---|
| **模型支持** | GPT-5.x系列推理能力识别、Gemini 3.x三型号入库、阿里巴巴Coding Plan新提供商 |
| **稳定性修复** | MiniMax系统提示兼容、Ollama模型选择404、Exec工具配置生效、BOOT.md加载修复 |
| **可观测性** | 工作区文件截断警告、Cron任务状态持久化 |
| **基础设施** | Podman容器检测、文档安装脚本修正 |

**迁移注意事项**：  
- 使用 `[tools.exec] default_timeout_secs` 的用户需验证配置是否生效（此前被忽略）  
- Ollama用户若依赖 `127.0.0.1` 显式绑定，需确认 `localhost` 解析行为

---

## 3. 项目进展

### 核心功能推进

| PR | 作者 | 关键进展 |
|:---|:---|:---|
| [#621](https://github.com/moltis-org/moltis/pull/621) | Cstewart-HC | **阿里巴巴Coding Plan提供商上线** — 9款Qwen3模型、128K上下文检测、OpenAI兼容端点 |
| [#605](https://github.com/moltis-org/moltis/pull/605) | penso | **Gemini 3.x生态补齐** — 3款预览模型入库，推理能力标记同步更新 |
| [#613](https://github.com/moltis-org/moltis/pull/613) | penso | **模型能力架构升级** — `ModelCapabilities`结构替代字符串推断，查询性能优化 |
| [#624](https://github.com/moltis-org/moltis/pull/624) / [#623](https://github.com/moltis-org/moltis/pull/623) | Cstewart-HC | **Projects功能导航入口** — 设置侧边栏新增Projects入口（Web层） |

### 关键稳定性修复

| PR | 关联Issue | 修复问题 |
|:---|:---|:---|
| [#611](https://github.com/moltis-org/moltis/pull/611) / [#622](https://github.com/moltis-org/moltis/pull/622) | [#578](https://github.com/moltis-org/moltis/issues/578), [#592](https://github.com/moltis-org/moltis/issues/592) | **MiniMax系统提示丢失** — 顶级`system`字段兼容，错误码2013彻底解决 |
| [#618](https://github.com/moltis-org/moltis/pull/618) | [#615](https://github.com/moltis-org/moltis/issues/615) | **Ollama 404错误** — 默认URL对齐`localhost`，新增`/api/show`降级探测 |
| [#617](https://github.com/moltis-org/moltis/pull/617) | [#616](https://github.com/moltis-org/moltis/issues/616) | **Exec工具配置失效** — `default_timeout_secs`/`max_output_bytes`正确透传 |
| [#614](https://github.com/moltis-org/moltis/pull/614) / [#612](https://github.com/moltis-org/moltis/pull/612) | [#593](https://github.com/moltis-org/moltis/issues/593), [#594](https://github.com/moltis-org/moltis/issues/594) | **BOOT.md/AGENTS.md处理修复** — 硬编码6K截断→50K默认可配置，截断可见性警告 |
| [#608](https://github.com/moltis-org/moltis/pull/608) | [#596](https://github.com/moltis-org/moltis/issues/596) | **inotify资源耗尽** — 技能监视器范围收紧，禁用技能不再注册watch |

### 测试与质量基础设施

| PR | 说明 |
|:---|:---|
| [#620](https://github.com/moltis-org/moltis/pull/620) / [#607](https://github.com/moltis-org/moltis/pull/607) | LM Studio `reasoning_content`流式回归测试 — 锁定SSE格式解析行为 |
| [#622](https://github.com/moltis-org/moltis/pull/622) | 11家提供商实时集成测试 — MiniMax/GPT-5探测等场景覆盖 |

---

## 4. 社区热点

> 今日所有Issue/PR评论数均≤2，无显著讨论热点。以下按技术影响力排序：

| 条目 | 评论 | 核心诉求分析 |
|:---|:---:|:---|
| [#597](https://github.com/moltis-org/moltis/issues/597) | 2 | **LM Studio推理流可见性** — 用户需要实时看到模型思考过程，而非等待最终结果；反映本地模型用户对"可解释AI"的强烈需求 |
| [#579](https://github.com/moltis-org/moltis/issues/579) | 2 | **长会话Token管理** — 频道DM场景下自动轮换会话，企业级部署的规模化诉求 |
| [#596](https://github.com/moltis-org/moltis/issues/596) | 1 | **系统资源管控** — Linux inotify限制成为多技能场景的瓶颈，反映边缘部署的约束条件 |

**趋势洞察**：用户群体从"功能可用"向"生产就绪"迁移，关注可观测性、资源效率、企业级治理。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 根因 | Fix PR |
|:---|:---|:---:|:---|:---|
| 🔴 **高** | [#616](https://github.com/moltis-org/moltis/issues/616) Exec工具超时配置被忽略 | ✅ 已修复 | 配置解析后未注入工具实例 | [#617](https://github.com/moltis-org/moltis/pull/617) |
| 🔴 **高** | [#594](https://github.com/moltis-org/moltis/issues/594) BOOT.md加载完全失效 | ✅ 已修复 | Hook事件只读，返回值被丢弃 | [#614](https://github.com/moltis-org/moltis/pull/614) |
| 🟡 **中** | [#597](https://github.com/moltis-org/moltis/issues/597) LM Studio reasoning_content不流式 | ✅ 已修复 | 提供商特定SSE格式未处理 | [#620](https://github.com/moltis-org/moltis/pull/620) 测试锁定 |
| 🟡 **中** | [#592](https://github.com/moltis-org/moltis/issues/592) MiniMax系统角色拒绝 | ✅ 已修复 | #586回退导致提取逻辑丢失 | [#611](https://github.com/moltis-org/moltis/pull/611), [#622](https://github.com/moltis-org/moltis/pull/622) |
| 🟡 **中** | [#615](https://github.com/moltis-org/moltis/issues/615) Ollama模型选择404 | ✅ 已修复 | IPv4/IPv6解析差异 + 端点探测缺失 | [#618](https://github.com/moltis-org/moltis/pull/618) |
| 🟡 **中** | [#593](https://github.com/moltis-org/moltis/issues/593) AGENTS.md静默截断 | ✅ 已修复 | 硬编码6K限制无用户可见警告 | [#610](https://github.com/moltis-org/moltis/pull/610), [#612](https://github.com/moltis-org/moltis/pull/612) |
| 🟢 **低** | [#588](https://github.com/moltis-org/moltis/issues/588) Podman容器检测缺失 | ✅ 已修复 | 仅检测Docker/Apple Container | [#609](https://github.com/moltis-org/moltis/pull/609) |
| 🟢 **低** | [#596](https://github.com/moltis-org/moltis/issues/596) 禁用技能仍占用inotify | ✅ 已修复 | 技能监视器未过滤启用状态 | [#608](https://github.com/moltis-org/moltis/pull/608) |

**回归风险**：MiniMax修复涉及两次PR（#611, #622），需关注后续集成测试稳定性。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 实现状态 | 纳入可能性 |
|:---|:---|:---:|:---:|
| [#601](https://github.com/moltis-org/moltis/issues/601

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-10

## 1. 今日速览

CoPaw 项目今日呈现**高活跃度发布冲刺状态**：24小时内50条Issues更新（29活跃/21关闭）、50条PR更新（18待合并/32已处理），并正式发布 **v1.0.2 稳定版**及一个beta版本。社区讨论热度集中在插件系统、多智能体协作体验优化及企业级部署场景。项目维护团队响应迅速，当日关闭的21个Issues中多个为当日新建当日解决，显示版本发布前的集中问题清理。

---

## 2. 版本发布

### v1.0.2（稳定版）| [Release](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.0.2)

**核心更新：**

| 模块 | 变更内容 | 相关PR |
|:---|:---|:---|
| **插件系统** | 支持从工作区 `plugins/` 文件夹本地安装扩展 | #3101, #3131, #3132 |
| **CLI工具** | 新增 `copaw task` 命令（摘要截断，完整功能待文档） | - |

**迁移注意事项：** 本地插件开发需将扩展文件置于工作区根目录的 `plugins/` 文件夹下，系统会自动识别加载。

### v1.0.2-beta.2（预发布）| [Release](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.0.2-beta.2)

**变更：** 网站热修复的多次回滚操作（#3112 → #3115 → #3116），显示前端部署存在稳定性波动，已在稳定版中整合最终修复。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#1209](https://github.com/agentscope-ai/CoPaw/pull/1209) | vvv214 | 聊天路由选择器：支持显式模型切换、启用"Lowest Cost"等路由策略 | **LLM路由功能端到端可用**，完成从配置到UI的闭环 |
| [#1089](https://github.com/agentscope-ai/CoPaw/pull/1089) | vvv214 | LLM路由配置：Web端设置页 + CLI命令 `copaw models routing show\|config\|disable` | 建立路由功能的完整配置界面 |
| [#3141](https://github.com/agentscope-ai/CoPaw/pull/3141) | zhaozhuang521 | 前端性能优化：Vite配置 `manualChunks` 分6个vendor包 | **首屏加载与缓存利用率提升** |
| [#3158](https://github.com/agentscope-ai/CoPaw/pull/3158) | zhaozhuang521 | 卡片组件hover状态优化：CSS :hover替代JS状态 + React.memo | 消除列表重渲染，交互性能优化 |
| [#3150](https://github.com/agentscope-ai/CoPaw/pull/3150) | Leirunlin | 技能命令系统：`/skills` 列表 + `/<skill_name>` 调用 | **技能系统CLI化**，提升高级用户效率 |
| [#3149](https://github.com/agentscope-ai/CoPaw/pull/3149) | qbc2016 | MCP工具列表支持 | 扩展MCP协议兼容性 |
| [#3079](https://github.com/agentscope-ai/CoPaw/pull/3079) | linhuang0405 | 企业微信附件访问修复（服务器部署场景） | **企业级部署稳定性** |
| [#3167](https://github.com/agentscope-ai/CoPaw/pull/3167) | rayrayraykk | HTTP MCP修复 | 协议层稳定性 |

**整体进展评估：** 今日合并PR覆盖**核心功能闭环**（LLM路由）、**性能基建**（前端分包）、**企业场景**（企微附件）三大维度，配合v1.0.2发布标志项目进入成熟稳定期。

---

## 4. 社区热点

### 高讨论 Issues

| Issue | 评论数 | 核心诉求 | 分析 |
|:---|:---|:---|:---|
| [#2291](https://github.com/agentscope-ai/CoPaw/issues/2291) 🐾 Help Wanted: Open Tasks | **54** | 官方任务认领看板 | **社区贡献入口**，P0-P2优先级分级，显示项目主动引导外部贡献的健康治理模式 |
| [#1911](https://github.com/agentscope-ai/CoPaw/issues/1911) 小艺频道异常 | **21** | 华为小艺开放平台与手机端表现不一致 | **生态兼容性痛点**，涉及渠道适配的深层问题，需官方与华为侧联合排查 |
| [#3063](https://github.com/agentscope-ai/CoPaw/issues/3063) 飞书长连接异步锁问题 | **10** | `asyncio.locks.Lock` 跨event loop绑定错误 | **高并发稳定性关键问题**，"串场"现象描述精准，已关闭但需关注是否彻底修复 |
| [#3045](https://github.com/agentscope-ai/CoPaw/issues/3045) 自动获取模型不可用 | **8** | Windows桌面版v1.0.1模型发现功能失效 | **新用户上手障碍**，影响开箱体验 |
| [#2831](https://github.com/agentscope-ai/CoPaw/issues/2831) Web端无法停止write_file失败循环 | **7** | AI编码时参数缺失导致无限重试，且停止按钮无效 | **交互控制缺陷**，用户失控感强 |

### 高价值功能请求

| Issue | 诉求 | 与现有PR关联 |
|:---|:---|:---|
| [#3124](https://github.com/agentscope-ai/CoPaw/issues/3124) 会话内直接渲染图表 | 折线图/饼图/柱状图即时可视化，对标豆包/ChatGPT | 尚无PR，属**体验竞争力缺口** |
| [#2314](https://github.com/agentscope-ai/CoPaw/issues/2314) 跨提供商对话历史兼容 | OpenAI/MiniMax/Anthropic/Gemini/Ollama自由切换 | 与今日合并的#1209/#1089路由功能**方向一致**，可能纳入后续迭代 |
| [#2936](https://github.com/agentscope-ai/CoPaw/issues/2936) 会话"置顶"功能 | 多智能体协作时同一会话窗口管理 | 与#2937（会话合并请求）共同反映**多智能体UX复杂度**问题 |

---

## 5. Bug 与稳定性

### 按严重程度排列

| 级别 | Issue | 现象 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-核心功能** | [#3063](https://github.com/agentscope-ai/CoPaw/issues/3063) | 飞书长连接异步锁"串场"，对话无响应 | **已关闭** | 需验证修复彻底性 |
| 🔴 **P0-核心功能** | [#2987](https://github.com/agentscope-ai/CoPaw/pull/2987) | Console取消按钮竞态条件：旧响应覆盖新消息 | **PR开放中** | #2987（待合并） |
| 🟡 **P1-体验** | [#2831](https://github.com/agentscope-ai/CoPaw/issues/2831) | write_file失败循环无法停止 | **开放中** | 待认领 |
| 🟡 **P1-兼容性** | [#1911](https://github.com/agentscope-ai/CoPaw/issues/1911) | 小艺频道手机端返回"开小差" | **开放中** | 需渠道方协作 |
| 🟡 **P1-安装** | [#3005](https://github.com/agentscope-ai/CoPaw/issues/3005) | 升级后无法启动（pip/脚本安装均失败） | **开放中** | 需诊断 |
| 🟡 **P1-模型** | [#3045](https://github.com/agentscope-ai/CoPaw/issues/3045) | 自动获取模型功能不可用 | **开放中** | 待认领 |
| 🟢 **P2-稳定性** | [#2911](https://github.com/agentscope-ai/CoPaw/issues/2911) | Windows客户端数小时后自动关闭 | **开放中** | 待诊断 |
| 🟢 **P2-企业** | [#3165](https://github.com/agentscope-ai/CoPaw/issues/3165) | MCP带headers时streamable_http_client报错 | **已关闭** | #3167 |
| 🟢 **P2-模型** | [#3162](https://github.com/agentscope-ai/CoPaw/issues/3162) | aliyun-codingplan模型切换报422 scope字段缺失 | **已关闭** | 当日修复 |

### 当日快速修复（当日建当日关）

- [#3139](https://github.com/agentscope-ai/CoPaw/issues/3139) 自定义模型供应商无法拉取模型
- [#

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*