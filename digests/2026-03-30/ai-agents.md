# OpenClaw 生态日报 2026-03-30

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-30 02:15 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

**OpenClaw 项目动态日报（2026-03-30）**

---

### 1. **今日速览**
过去24小时，OpenClaw 社区活跃度极高，共处理 Issue 更新 500 条、PR 更新 500 条，表明开发者和用户高度参与。项目整体运行平稳，无新版本发布，但修复类 PR 和回归问题集中出现，反映近期版本（如 2026.3.x）存在较多稳定性挑战。社区对跨平台支持（Linux/Windows）和内存管理（QMD）的关注度显著上升。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
今日合并或关闭的重要 PR 包括：
- **#57400**：修复 `openclaw status` 中缓存命中率显示异常（因 legacy session 的 totalTokens 过小导致 >100%），提升 CLI 工具可靠性。
- **#57217**：新增“孤儿会话键迁移”功能，在网关启动时自动清理无效会话别名，改善升级兼容性。
- **#54856**：序列化共享 OAuth 令牌刷新逻辑，解决多并发请求下的 race condition 问题（相关 Issue #26322）。
- **#57359**：修复 exec 异步审批在纯 webchat 会话中的交付失败问题，增强 exec 工具在复杂部署场景下的可用性。

这些改进主要集中在网关稳定性、CLI 体验和认证流程优化上，体现了项目向生产就绪方向稳步演进。

---

### 4. **社区热点**
最活跃的 Issue 集中于以下方面：
- **#75 Linux/Windows Clawdbot Apps**（60 评论，66 赞）：用户强烈呼吁推出原生 Linux 和 Windows 应用，以匹配现有 macOS/iOS/Android 生态。此需求长期存在，预计将成为未来平台扩展路线图的核心议题。
- **#53353 Matrix E2EE 失效**（14 评论）：v2026.3.23 后 WASM 文件缺失导致加密通信中断，影响企业级安全部署。已有初步排查但未闭环，需紧急修复。
- **#49191 Google Vertex ADC 认证失败**（13 评论）：ADC 模式被错误识别为 API key，引发 401 错误。此问题阻碍云原生集成，亟需身份验证层重构。

此外，**#52951 tools.fs.roots**（新 PR，XL 级）提出 per-agent 文件系统根目录控制机制，获得广泛期待，预示下一版本将强化细粒度权限管理。

---

### 5. **Bug 与稳定性**
按严重程度排序的关键 Bug：
1. **高优先级**：
   - **#53353**：Matrix E2EE 因缺失 WASM 文件完全失效（v2026.3.23 引入）。✅ 有潜在修复方向（WASM 打包检查），尚无 PR。
   - **#49191**：Google Vertex ADC 认证被误判为 API key → 401。✅ 已定位问题在凭证解析逻辑，暂无 PR。
   - **#57011**：2026.3.28 更新后内置 memory multimodal 校验失败 + memory-tool 资源缺失。⚠️ 影响本地安装，已有用户报告，需热修复。

2. **中优先级**：
   - **#52585**：插件 tarball 解压路径安全限制触发 SafeOpenError（回归问题）。✅ 已有 PR 讨论中。
   - **#53959**：openai-codex 无法执行任何工具（v2026.3.23-2 回归）。⚠️ 严重影响核心能力，需优先排查。

3. **低优先级**：
   - **#51022**：长会话下工具调用静默 hang（疑似资源泄漏）。
   - **#28222**：diagnostics-otel 插件因依赖缺失无法加载。

> 注：多个问题标记为“regression”，表明近期迭代引入稳定性风险，建议加强测试覆盖。

---

### 6. **功能请求与路线图信号**
- **跨平台桌面支持**（Issue #75）：用户明确要求 Linux/Windows GUI 应用，与 macOS/iOS 对齐。虽无 immediate plan，但可作为长期产品愿景。
- **分层引导文件加载**（Issue #22438）：提议按使用频率分级加载 bootstrap 文件以节省上下文 token，符合高效推理趋势，可能纳入 v2026.4。
- **Anthropic speed: "fast" 参数透传**（Issue #12176）：支持 Claude Opus 4.6 的加速模式，瞄准高性能场景，已有配置框架准备。
- **per-agent 文件系统隔离**（PR #52951）：通过 `tools.fs.roots` 实现细粒度访问控制，是安全架构升级关键一步，已进入开发阶段。

---

### 7. **用户反馈摘要**
- **正面反馈**：用户对 exec 工具审批流程改进（#57359）表示认可；OAuth 刷新序列化（#54856）缓解了多实例部署痛点。
- **负面痛点**：
  - 升级后频繁出现“会话丢失”“工具不响应”（#52875, #53959），暴露版本间兼容性问题。
  - Docker/Linux 环境依赖管理混乱（brew not installed, #14593；Nix PATH 未捕获，#44402），凸显跨平台一致性不足。
  - QMD 内存索引在更新后失效（#53955），影响知识检索核心能力，用户抱怨“回滚是唯一解决方案”。

---

### 8. **待处理积压**
- **#75 Linux/Windows App**：超期 89 天，获 66 赞，属战略级需求，需 roadmap 明确响应。
- **#26322 OAuth 令牌刷新竞态条件**：超期 32 天，影响多代理共享认证，已有 PR #54856 跟进，应加速合并。
- **#11202 模型 catalog 泄露 API key**：安全漏洞超期 82 天，需优先处理（虽评论仅 5 条，但性质高危）。

> 建议维护者优先审查上述 Issue，尤其是安全与稳定性相关项。

--- 

*数据来源：[openclaw/openclaw GitHub](https://github.com/openclaw/openclaw)*

---

## 横向生态对比

好的，作为专注于 AI 智能体开源生态的技术分析师，我将基于您提供的数据生成一份横向对比分析报告。

---

### **个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-03-30)**

**1. 生态全景**
当前个人 AI 助手/自主智能体开源生态正处于高速发展期，呈现“百家争鸣、多点突破”的态势。项目普遍聚焦于提升生产就绪度、强化多模态与跨平台集成能力，以及探索更安全的执行模型。OpenClaw 作为核心参照，其庞大的社区和丰富的功能为整个生态设定了基准。与此同时，NanoBot、PicoClaw 等项目则在特定领域（如轻量级代理、嵌入式场景）开辟了新赛道。整体上，生态正从早期的概念验证阶段，稳步迈向企业级应用和多样化部署场景。

**2. 各项目活跃度对比**

| 项目名称 | Issues 数 | PR 数 | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 无新版本发布 | **极高** (活跃度高，修复类PR集中) |
| **NanoBot** | 18 | 99 | 无新版本发布 | **高** (社区开发势头强劲) |
| **PicoClaw** | 23 | 51 | Nightly Build v0.2.4-nightly.20260330 | **高** (开发节奏快，新功能推进) |
| **NanoClaw** | 17 | 50 | 无新版本发布 | **高** (安全加固与可观测性增强) |
| **NullClaw** | 2 | 2 | 无新版本发布 | **中** (中等活跃度，有战略需求待响应) |
| **IronClaw** | 9 | 50 | 无新版本发布 | **高** (架构升级，CI/CD成熟) |
| **LobsterAI** | 7 | 8 | 无新版本发布 | **中** (稳定迭代，用户反馈响应积极) |
| **TinyClaw** | 0 | 0 | 无活动 | **低** (暂无动态) |
| **Moltis** | 6 | 3 | 无新版本发布 | **中** (稳定贡献，解决特定痛点) |
| **CoPaw** | 36 | 35 | 无新版本发布 | **高** (社区协作密集，问题响应快) |
| **ZeptoClaw** | 2 | 6 | 无新版本发布 | **高** (维护者响应迅速，技术债清理有效) |
| **EasyClaw** | 1 | 0 | v1.7.8 (macOS 指引优化) | **中** (平稳运维，兼容性优化) |

**3. OpenClaw 在生态中的定位**
OpenClaw 是当之无愧的 **核心参照与生态基石**。
*   **优势**：拥有无可比拟的社区规模（500 Issues/PRs/日）、最全面的平台支持（Linux/Windows/MacOS/iOS/Android）、最复杂的生态系统（插件、技能）和最深入的企业级功能（E2EE、ADC认证）。
*   **技术路线差异**：OpenClaw 采用单体/模块化混合架构，强调“全栈一体”，提供从底层网关到上层CLI、WebUI的全方位工具链。相比之下，其他项目更多聚焦于特定层面：IronClaw 专注后端执行引擎解耦，NanoBot/PicoClaw 侧重轻量级代理与特定通信协议，CoPaw 强调 ACP/MCP等开放协议支持。
*   **社区规模对比**：OpenClaw 的社区活跃度远超其他项目（Issues/PRs数量级差异），其 Issue #75 呼吁跨平台GUI应用，获66赞，足见其影响力。NanoBot、CoPaw、IronClaw 等也拥有活跃的社区，但规模和广度不及 OpenClaw。

**4. 共同关注的技术方向**
多个项目共同涌现出以下关键需求：
*   **跨平台 GUI 应用支持 (Issue #75 - OpenClaw)**：Linux/Windows 用户对原生桌面应用的需求，是生态扩展的关键一步。
*   **细粒度权限与安全控制**：
    *   `tools.fs.roots` per-agent 文件系统隔离 (OpenClaw PR #52951)
    *   容器化运行以降低供应链风险 (NanoClaw Issue #1485)
    *   Vault 密封期间的会话访问策略 (Moltis PR #518)
*   **多模态与通信协议集成**：
    *   WhatsApp/Telegram/X 社交机器人支持 (NanoClaw PR #1542, ZeptoClaw PR #459)
    *   Matrix E2EE (OpenClaw Issue #53353, CoPaw PR #2509)
    *   Slack Markdown 转换 (PicoClaw PR #2165)
*   **会话管理与内存效率**：
    *   心跳 token 爆炸问题 (NanoBot Issue #2375)
    *   长会话下工具调用静默 hang /资源泄漏 (OpenClaw Issue #51022)
    *   语义记忆索引系统 (NanoBot PR #2618/19/20)

**5. 差异化定位分析**

| 项目名称 | 功能侧重 | 目标用户 | 技术架构 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全栈一体化、生产级部署、复杂工作流 | 企业开发者、系统集成商、高级用户 | 单体/模块化混合，复杂网关 |
| **NanoBot** | 轻量级、Telegram/邮件集成、语义记忆 | 个人开发者、小型团队、特定通信场景 | 简洁高效，专注通信 |
| **PicoClaw** | 多智能体协作、配置持久化、国际化 | 嵌入式/IoT 开发者、多语言用户 | 轻量、可扩展、注重 UX |
| **NanoClaw** | 容器化部署、可观测性、社区技能 | DevOps、企业用户、垂直场景专家 | 插件化、云原生友好 |
| **IronClaw** | 可信执行、金融级操作、前端解耦 | 金融科技、安全敏感型应用 | Rust 后端，前端独立 crate |
| **CoPaw** | 开放协议 (ACP/MCP)、i18n、协作 | 开源贡献者、协议标准推动者 | 模块化、协议驱动 |
| **ZeptoClaw** | CLI 工具链、浏览器自动化、沙箱安全 | CLI 重度用户、DevOps | 工具链导向，强 CLI |
| **EasyClaw** | 跨平台兼容性、用户引导 | 普通用户、非技术背景者 | 简化部署，注重易用性 |

**6. 社区热度与成熟度**
*   **快速迭代阶段**：OpenClaw、NanoBot、PicoClaw、NanoClaw、IronClaw、CoPaw、ZeptoClaw 均处于高度活跃状态，持续发布新功能、修复Bug，社区互动频繁。特别是 OpenClaw，其每日数千次的更新表明其处于“持续演进”的核心地位。
*   **质量巩固阶段**：LobsterAI、Moltis 表现出稳定的迭代节奏，更注重功能的完善和特定问题的解决。EasyClaw 则处于相对平稳的维护期，侧重于兼容性说明和用户引导。

**7. 值得关注的趋势信号**
*   **从“可用”到“可信”**：安全、权限、审计和可观测性成为所有项目的共同焦点（如 Vault 策略、容器化、成本追踪），预示未来AI智能体的首要考量将从功能完备转向安全可靠。
*   **开放协议与互操作性**：ACP (CoPaw)、MCP (CoPaw, IronClaw) 等协议的推进，以及 ZeptoClaw 对 `agent-browser` 的支持，表明生态正在向开放、互联的方向发展，降低厂商锁定风险。
*   **深度集成主流平台**：X/Twitter、Telegram Forum Topics、WhatsApp 等社交平台的集成，以及钉钉、Feishu 等国内办公软件的适配，显示AI智能体正试图嵌入用户日常工作的核心沟通渠道。
*   **CLI 与工具链的强化**：ZeptoClaw、OpenClaw 对 CLI 工具的重视，以及 CoPaw 对 MCP 工具的支持，反映出开发者更倾向于将AI智能体作为强大的自动化工具集成到现有工作流中。这对AI智能体开发者而言，意味着需要提供更强大、更易用的命令行接口和API。

**总结与建议**
对于技术决策者和开发者而言，应密切关注 OpenClaw 作为生态基石的动向，同时根据自身需求选择合适的项目或架构进行探索。优先投资于安全、可观测性和开放协议相关的技术，将是构建下一代可靠AI智能体的关键。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报 - 2026年3月30日**

---

### 1. **今日速览**
NanoBot 项目在过去24小时内保持高度活跃，共处理了99条 PR 更新（94条待合并）和18条 Issue 动态（14条活跃/新开），显示出强劲的社区开发势头。核心维护团队在内存管理、Telegram 集成及多模型支持方面持续推进，同时多个长期积压的功能请求（如语义记忆索引）迎来实质性进展。整体项目健康度良好，但需关注一个关键安全警报和若干高优先级 Bug 的修复进度。

---

### 2. **版本发布**
**无新版本发布**。当前最新稳定版仍为 `v0.1.4.post6`，该版本于3月24日发布后未再更新。

---

### 3. **项目进展**
今日合并的重要 PR：
- **#2624**（已关闭）：实现了 Telegram 论坛主题线程（Forum Topics）的完整支持，解决了 #2627 提出的路由问题，允许消息正确返回原始话题线程。
- **#2563**（已关闭）：按计划完成了夜间分支刷新流程，确保 nightly 构建处于最新状态。

其他高影响力开放 PR 包括：
- **#2618 / #2619 / #2620**：联合推进了可选的语义记忆索引系统，引入 BM25+向量混合检索与 QMD 重排序机制，显著增强长上下文任务中的信息召回能力（相关 Issue: #80, #135）。
- **#2617**：正式添加 Ollama 提供商支持，覆盖 #193、#1590、#2293 等多个历史需求，扩展了本地模型部署兼容性。

这些进展表明项目正从基础通信框架向具备高级推理与自适应能力的智能体平台演进。

---

### 4. **社区热点**
最活跃的议题集中在 **内存效率** 与 **架构一致性** 两大方向：

- **[#2375]**（Heartbeat token 爆炸问题）：用户报告每30分钟心跳任务导致 `heartbeat.jsonl` 累积超56万 tokens，严重影响性能。此问题已引发10条评论，反映生产环境中的严重瓶颈。
- **[#2463]**（Prompt 前缀不一致性）：指出当前会话持久化格式与实际发送给 LLM 的 prompt 不匹配，破坏 OpenAI Pro 等高级功能的兼容性。虽仅8条评论，但涉及底层架构缺陷，被标记为“架构级问题”。
- **[#2439]**（安全漏洞）：PyPI 包 v0.1.4.post5 中嵌入恶意 `litellm_init.pth` 文件，已被4人点赞，属高危事件。建议立即回滚并发布补丁。

此外，**#2627**（Telegram Forum Topics）和 **#2613**（Agent 中途崩溃）分别获得广泛关注，体现用户对精细化交互与稳定性的强烈诉求。

---

### 5. **Bug 与稳定性**
按严重程度排序的关键 Bug：

| 问题 | 描述 | 状态 |
|------|------|------|
| **#2439** | PyPI 包包含恶意执行代码（Critical） | ⚠️ 需紧急修复，尚未有官方回应 |
| **#2375** | 心跳机制导致指数级 token 消耗（High） | ✅ 已有 PR #2631 提出防御性检查 |
| **#2613** | Agent 循环中出现 NoneType 错误中断命令（Medium） | ✅ PR #2631 针对性修复 |
| **#87** | Windows Docker 构建卡在 npm install（Medium） | 🟡 持续2个月，影响跨平台体验 |

其中，**#2631** 针对 #2613 提交了初步修复方案，通过增加空值检查和异常兜底逻辑提升鲁棒性。

---

### 6. **功能请求与路线图信号**
用户明确提出的新功能需求预示下一版本重点方向：

- **HTTP 流式通道**（#2602）：适用于多租户网关架构，支持实时响应分发 → 已有实现草案。
- **Telegram 作者上下文标签**（#2605）：在回复中显示原消息作者 → 正在编码中。
- **异步内存整理**（#2604）：避免同步调用阻塞主流程 → 已有性能优化 PR #2609 提供替代方案。
- **DashScope Coding Plan 支持**（#2629）：区分标准与专用模式 → 已完成注册与文档。

结合现有 PR 密度与 Issue 热度，预计未来版本中 **多模态支持（微信）、语义记忆、Telegram 增强** 将成为核心模块。

---

### 7. **用户反馈摘要**
真实使用场景揭示的关键痛点：

- **邮件监控高频触发**：部分用户在30分钟内多次运行 heartbeat 任务，导致日志膨胀与 token 耗尽，暴露默认配置缺乏节流机制。
- **Home Assistant 工具调用失败**：用户尝试通过 URL/TOKEN 控制智能家居时，nanobot 无法识别工具调用，而 OpenClaw 可成功，说明工具接口标准化不足。
- **CLI 重复输出干扰**：终端在思考结束后仍持续显示动画帧，造成视觉混乱（#2591），影响用户体验。
- **配置限制不合理**：`channels.sendMaxRetries` 硬编码为 ≤10（#2612），缺乏灵活性，阻碍重试策略定制。

正面反馈集中于 **Ollama 支持** 和 **Telegram 论坛线程** 的实现，认可其解决实际运维问题的价值。

---

### 8. **待处理积压**
以下长期未决项需维护者优先关注：

- **[#87] Docker Windows 构建挂起**（Open since Feb 4）— 阻碍新手上手，影响跨平台推广。
- **[#2375] 心跳 token 爆炸**（Open since Mar 23）— 高关注度生产环境问题，尚无根本解决方案。
- **[#2439] 安全漏洞**（Open since Mar 24）— 虽非传统 bug，但涉及供应链安全，必须尽快澄清并修复。
- **[#80] 语义记忆检索缺失**（关联 #135, #97）— 虽已有 #2618-2620 推进，但仍需测试验证与文档完善。

建议召开一次专项会议，协调资源处理上述积压事项。

--- 

*数据来源：GitHub.com/HKUDS/nanobot | 报告时间：2026-03-30*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报 - 2026-03-30**

---

### 1. **今日速览**
过去24小时，PicoClaw 项目保持高度活跃，共产生23条Issues更新与51条PR动态，显示出强劲的开发节奏。新版本 nightly build v0.2.4-nightly.20260330 发布，集成多项关键修复与增强功能。社区对多智能体协作、配置持久化及国际化支持表现出持续关注，整体项目健康度处于良好上升期。

---

### 2. **版本发布**

**nightly: Nightly Build**  
- **版本**: v0.2.4-nightly.20260330.93f4c4a8  
- **说明**: 此为自动化构建的夜间版本，可能包含不稳定特性，建议用于测试或开发环境。  
- **完整变更日志**: [查看差异](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)

> 注：当前无正式稳定版发布，仅夜间构建更新。

---

### 3. **项目进展**

#### 已合并/关闭的重要 PR
| PR # | 类型 | 描述 | 影响 |
|------|------|------|------|
| [#2040](https://github.com/sipeed/picoclaw/pull/2040) | Bug Fix | 修复 `/reload` 命令导致媒体文件引用丢失问题 | 提升配置热重载稳定性 |
| [#2123](https://github.com/sipeed/picoclaw/pull/2123) | Bug Fix | 确保频道配置中敏感字段（如 token）在保存时不被丢弃 | 解决 Discord/Telegram 配置失效问题 |
| [#2147](https://github.com/sipeed/picoclaw/pull/2147) | Refactor | 统一 cron 任务执行路径，移除冗余参数 | 简化 cron 系统架构 |
| [#2166](https://github.com/sipeed/picoclaw/pull/2166) | Bug Fix | 修复 Web UI 技能页面深色模式下的文字可读性问题 | 改善用户体验一致性 |

#### 重大新功能推进
- **多智能体协作框架进入 Phase 2 实施阶段**：通过 PR [#2158](https://github.com/sipeed/picoclaw/pull/2158) 注入轻量级代理注册表至系统提示中，实现初步 Agent Discovery 能力，支撑 #1934 目标。
- **新增 Chatmail (Delta Chat) 通道支持**：PR [#2167](https://github.com/sipeed/picoclaw/pull/2167) 引入新通道类型，扩展 E2EE 邮件通信场景。
- **Slack Markdown 转换增强**：PR [#2165](https://github.com/sipeed/picoclaw/pull/2165) 实现对齐 Telegram 的同等 mrkdwn 格式转换能力。

---

### 4. **社区热点**

#### 高活跃度 Issue 分析
- **[#1919] Seahorse 生物启发式记忆系统提案**  
  作者 liuy 提出为 AI 代理设计类海马体记忆机制，支持短期/长期记忆分离管理。该 Idea 获 8 条评论，反映社区对“具身智能”底层架构的探索兴趣。[链接](https://github.com/sipeed/picoclaw/issues/1919)

- **[#1934] Meta: Agent Refactor Phase 2 - 单 Pico 内多代理协作**  
  核心路线图 Issue，Phase 2 聚焦多代理协同与 Delegation 机制。PR [#2158](https://github.com/sipeed/picoclaw/pull/2158) 已开始落地 L1 发现逻辑，标志技术路线明确化。[链接](https://github.com/sipeed/picoclaw/issues/1934)

- **[#571] 工具执行过程缺乏进度反馈**  
  用户 rahul-hudle 指出长时工具调用（如搜索、文件操作）无实时状态展示，造成体验割裂。此需求已被标记为 roadmap-aligned，预计纳入 Q2 优化周期。[链接](https://github.com/sipeed/picoclaw/issues/571)

---

### 5. **Bug 与稳定性**

按严重程度排序的关键问题：

| Issue # | 问题描述 | 严重性 | 是否已有 Fix PR |
|--------|----------|--------|------------------|
| [#2027] Unable to save Telegram config | v0.2.4 升级后无法保存 Bot Token，提示必填 | 高 | ✅ 已由 #2123 修复 |
| [#2072] Discord 配置保存失败 | 填写 Token 仍报 "This field is required" | 高 | ✅ 同由 #2123 覆盖 |
| [#2105] Gateway 启动报错 | 首次安装 gateway 显示无法启动，无 PID | 中 | ⚠️ 待排查（Issue 刚开） |
| [#2140] model_fallbacks 跨 provider 配置错误 | fallback 模型继承主模型 API Base/Key，导致失效 | 高 | ✅ 由 #2143 修复 |
| [#1582] 多代理下模型未找到 | 非默认代理无法识别相同模型名称 | 中 | 暂无直接 PR，但 #2143 间接缓解 |

> ✅ 表示已有合并修复；⚠️ 表示尚未闭环；❌ 表示无响应

---

### 6. **功能请求与路线图信号**

- **/stop 命令支持中断任务** (#2009)：用户强烈希望取消长时间运行的操作，目前尚无实现，但属于“Nice-to-Have”范畴，可能随交互体验优化逐步上线。
- **Web Chat 流式输出** (#1950)：对标主流聊天应用体验，已有开发者提交方案，预计纳入下一版本增强。
- **模型切换便捷化** (#2145)：Telegram 频道需支持一键列出可用模型并切换，体现“降低使用门槛”的产品方向。
- **OpenAI Responses API 迁移计划** (#2171)：主动跟进 OpenAI 官方推荐实践，提升兼容性与性能，属前瞻性技术投入。

---

### 7. **用户反馈摘要**

- **正面反馈**：  
  - 多语言支持进展受认可，葡萄牙语(巴西)本地化完成（#2037）；  
  - 配置文件热重载稳定性显著改善（#2040 / #2168）。

- **负面痛点**：  
  - 配置界面存在“幽灵字段”问题：编辑后某些 secret 字段（如 QQ app_secret、Discord token）自动清空；  
  - 跨 provider 回退机制 buggy，用户不得不手动指定单一 provider；  
  - Web UI 历史记录仅显示 pico 会话，其他渠道消息不可见（#1996），严重影响多平台用户使用体验；  
  - 自建模型若需双头认证（Authorization + X-API-Key），当前接口不支持（#2169）。

---

### 8. **待处理积压**

- **[#93] Gateway 服务不读取 config.json**  
  systemd 服务模式下 gateway 忽略配置，持续超 40 天未更新，影响生产部署。  
  [链接](https://github.com/sipeed/picoclaw/issues/93)

- **[#1830] 文档不足与国际化缺失**  
  虽已添加 PT-BR 翻译，但整体文档引导仍薄弱，呼吁更多社区贡献者参与 UX/UI 改进。  
  [链接](https://github.com/sipeed/picoclaw/issues/1830)

- **[#1757] Cron + Channel 组合异常**  
  定时任务触发时报 channel error，可能与资源竞争或初始化顺序有关，需进一步诊断。  
  [链接](https://github.com/sipeed/picoclaw/issues/1757)

---

**总结**：PicoClaw 在 v0.2.x 阶段正稳步推进架构重构与生态扩展，尤其在多代理协作、配置健壮性和国际化方面取得实质进展。建议优先处理遗留配置 bug 与 gateway 服务兼容性，以巩固用户信任。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报（2026-03-30）**

---

### 1. **今日速览**

过去24小时内，NanoClaw 社区活跃度显著提升，共处理 17 条 Issue 更新与 50 条 Pull Request，其中 2 个 PR 已合并、2 个 Issue 关闭，显示开发节奏稳健推进。核心功能迭代聚焦于安全加固（如容器内运行支持、OAuth 代理）、多模态集成（WhatsApp/Telegram/X）及可观测性增强（成本追踪、Web 仪表盘）。项目整体处于高活跃开发阶段，社区贡献者参与度高，技术方向清晰向企业级安全与扩展能力演进。

---

### 2. **版本发布**

无新版本发布。

---

### 3. **项目进展**

本周期共 **2 个 PR 被合并**：

- **[PR #1540] Emoji 状态追踪器支持多群组**  
  引入 `StatusTracker` 类，为消息流添加可视化生命周期反馈（👀→💭→🔄→✅/❌），并扩展至非主群组，提升远程协作体验。  
  🔗 [qwibitai/nanoclaw#1540](https://github.com/qwibitai/nanoclaw/pull/1540)

- **[PR #1542] X/Twitter 集成升级至官方 XDK SDK**  
  替换 Playwright 实现，采用 `@xdevplatform/xdk` v0.5.0，支持自主时间线监控与 Claude 驱动的互动决策机制，奠定社交机器人基础架构。  
  🔗 [qwibitai/nanoclaw#1542](https://github.com/qwibitai/nanoclaw/pull/1542)

此外，多个社区技能（Community Skill）PR 持续集成，涵盖 Instacart、Changedetection.io、Tirith 安全扫描等垂直场景工具链，体现“插件化生态”战略落地。

---

### 4. **社区热点**

最活跃的议题集中在 **安全合规** 与 **第三方集成**：

- **[Issue #1503]** `nanoclaw.dev` SSL 证书失效（评论数 5）  
  用户报告域名证书异常，虽影响小但暴露运维盲点，需尽快修复以维持信任。  
  🔗 [qwibitai/nanoclaw#1503](https://github.com/qwibitai/nanoclaw/issues/1503)

- **[PR #1541]** 对话式审批流程（Conversational Approval Flow）  
  针对远程渠道（Telegram/WhatsApp）缺乏交互终端的问题，提出 IPC 等待用户确认机制，获高度关注，被视为关键 UX 突破。  
  🔗 [qwibitai/nanoclaw#1541](https://github.com/qwibitai/nanoclaw/pull/1541)

- **[Issue #1485]** 建议 NanoClaw 自身容器化运行以降低供应链风险  
  开发者指出当前安装脚本直接执行 curl 命令存在安全风险，呼吁容器化封装，反映对工程健壮性的深层关切。  
  🔗 [qwibitai/nanoclaw#1485](https://github.com/qwibitai/nanoclaw/issues/1485)

---

### 5. **Bug 与稳定性**

发现 **2 个潜在稳定性问题**，均已提交修复 PR：

| Issue | 描述 | 严重程度 | 是否已有 Fix PR |
|------|------|--------|----------------|
| [#1531] 失败容器会话 ID 导致无限重试循环 | 崩溃后仍重用旧 session ID，触发死循环 | 中 | ✅ 已提 PR（#1531 本身为 fix） |
| [#1487] 容器内运行 NanoClaw 时自毁崩溃 | 在 Docker 内运行会连带杀死 Claude Code 与 shell | 高 | ⚠️ 尚无 PR |

> 🔗 [qwibitai/nanoclaw#1531](https://github.com/qwibitai/nanoclaw/issues/1531)  
> 🔗 [qwibitai/nanoclaw#1487](https://github.com/qwibitai/nanoclaw/issues/1487)

另 Issue #1454 揭示 `WATCH_CONTAINER` 未设置会导致 sidecar 提前退出，影响配置热加载，建议纳入近期修复队列。

---

### 6. **功能请求与路线图信号**

以下需求频繁出现，预示未来版本重点方向：

- **AWS Bedrock 支持**（[#1492]）  
  企业用户对 Anthropic 原生 API 依赖有限，Bedrock 集成将极大拓展部署灵活性。

- **知识图谱记忆系统**（[#1458] Graphiti 提案）  
  替代当前线性文件记忆，实现语义搜索与上下文压缩，契合长期上下文管理痛点。

- **Web 仪表盘与成本追踪**（[#1514], [#1528]）  
  实时监控服务状态、token 消耗、消息分布，标志项目向生产级可观测性演进。

- **多 AI 后端支持**（GitHub Copilot, 未来可能支持 OpenAI）已在 PR #1351 启动，显示开放模型生态意图。

---

### 7. **用户反馈摘要**

- **正面反馈**：  
  - “社区技能模式极大加速了垂直场景落地”（来自 AstrBot / Instacart 贡献者）  
  - Web 仪表盘“解决了多组监控难题”，尤其适合团队协作部署。

- **负面痛点**：  
  - 安装过程“过于侵入宿主系统”，缺乏纯容器化路径，引发安全顾虑（[#1485], [#1424]）  
  - WhatsApp 媒体内容无法访问（仅收到 media_id），“使 agent 形同虚设”（[#1522]）  
  - 远程渠道缺少交互式授权机制，被迫使用 `--dangerously-skip-permissions`，违背安全设计初衷（[#1537]）

---

### 8. **待处理积压**

- **[Issue #1356] Agent Swarm 内存共享机制**（创建超30天，无维护者回复）  
  涉及跨容器上下文同步，属高级功能瓶颈，需明确优先级。  
  🔗 [qwibitai/nanoclaw#1356](https://github.com/qwibitai/nanoclaw/issues/1356)

- **[PR #1387] 插件系统类比 Channel 架构**（停滞超1周）  
  提议引入类似 VS Code 的插件加载机制，可能重塑扩展模型，建议评估可行性。  
  🔗 [qwibitai/nanoclaw#1387](https://github.com/qwibitai/nanoclaw/pull/1387)

- **[Issue #1490] Host 层安全策略硬编码 vs 技能化**（高价值但复杂）  
  要求重构权限模型，区分核心强制规则与可选技能，需架构级讨论。  
  🔗 [qwibitai/nanoclaw#1490](https://github.com/qwibitai/nanoclaw/issues/1490)

---

**总结**：NanoClaw 正从早期实验性框架向生产就绪的多智能体平台转型，本周亮点在于安全增强、社交集成与可观测性建设。建议优先处理容器内运行崩溃（#1487）与 WhatsApp 媒体支持（#1522），同时规划 AWS Bedrock 与 Graphiti 记忆的下一阶段交付。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目动态日报 - 2026-03-30**

---

### 1. **今日速览**
过去24小时，NullClaw 项目保持中等活跃度，共新增2个 Issue 和2个 PR。社区对集成微信插件的功能表现出强烈兴趣，同时一名用户在配置正确的情况下报告了调度器工具访问异常。两名开发者提交了关于工具链重构和 Ollama 适配器修复的代码变更。

*   **活跃度评估：** 中等
*   **GitHub 链接：** [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
今日无已合并或关闭的 Pull Request。当前有2个待合并的 PR，均与内部工具和适配器的优化相关。

---

### 4. **社区热点**
**Issue #714: Support WeChat Plugin Integration**
*   **热度：** 高（8条评论）
*   **诉求分析：** 用户强烈希望 NullClaw 集成官方微信插件，以覆盖中国大陆及东南亚地区的庞大用户群体。该需求已被多个 OpenClaw 分支实现，表明这是一个具有战略意义的市场机会和社区呼声。

*   **GitHub 链接：** [nullclaw/nullclaw Issue #714](https://github.com/nullclaw/nullclaw/issues/714)

**PR #745: refactor(tools): share file and web search helpers**
*   **热度：** 中（评论未定义）
*   **诉求分析：** 开发者 `manelsen` 提交此 PR 旨在通过提取共享的文件和网页搜索辅助函数来重构 `tools` 模块，提升代码复用性和可维护性。这反映了项目在架构层面持续优化的趋势。

*   **GitHub 链接：** [nullclaw/nullclaw PR #745](https://github.com/pulls/745)

---

### 5. **Bug 与稳定性**
**Issue #743: bug: no access to scheduler_tool although config is correct**
*   **严重程度：** 高
*   **问题描述：** 用户在配置正确的情况下无法访问 `scheduler_tool`，错误信息表明其被识别为 `schedule_tool`。
*   **修复状态：** 暂无 fix PR。
*   **影响：** 直接影响用户使用调度功能，可能导致工作流中断。

*   **GitHub 链接：** [nullclaw/nullclaw Issue #743](https://github.com/nullclaw/nullclaw/issues/743)

**PR #744: fix(ollama): normalize scheduler tool aliases**
*   **修复内容：** 此 PR 旨在修复 Issue #743 中描述的 `scheduler_tool` 别名规范化问题，将其统一为 `schedule` 工具名。

*   **GitHub 链接：** [nullclaw/nullclaw PR #744](https://github.com/pulls/744)

---

### 6. **功能请求与路线图信号**
**功能请求：WeChat Plugin Integration (Issue #714)**
*   **可能性评估：** 高
*   **判断依据：** 该功能请求已获得大量关注（8条评论），且其他 OpenClaw 分支已实现。结合项目国际化/本地化的战略方向，此功能很可能被纳入近期开发路线图。

---

### 7. **用户反馈摘要**
*   **用户痛点（Issue #714）：** 缺乏对微信生态的集成是 NullClaw 在特定市场（中国大陆、东南亚）推广的主要障碍之一。
*   **使用场景（Issue #743）：** 用户在配置调度工具后，期望能正常调用其功能，但遇到了别名解析失败的问题。
*   **满意/不满意：** 目前尚无直接的用户满意度反馈，但从 Issue 的创建和评论数量可以看出，用户对微信集成的期待很高，对现有工具别名问题则表现出困扰。

---

### 8. **待处理积压**
*   **Issue #714: Support WeChat Plugin Integration**
    *   **状态：** 长期未响应
    *   **提醒：** 该 Issue 已存在4天，且拥有大量评论，表明社区对此功能的迫切需求。建议项目维护者优先评估其实现可行性。

*   **Issue #743: bug: no access to scheduler_tool although config is correct**
    *   **状态：** 长期未响应
    *   **提醒：** 这是一个高严重性的 Bug，且已有对应的 Fix PR (#744) 提出。建议维护者尽快审查并合并该 PR 以解决用户问题。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报 - 2026年3月30日**

---

### 1. **今日速览**
IronClaw 在 2026-03-30 保持高度活跃的开发节奏，过去 24 小时内处理了 50 个 PR 更新（含 7 个合并项）和 9 个 Issue 更新（4 个关闭），整体贡献强度显著。核心团队持续推动架构升级与功能落地，包括前端解耦、安全执行层设计及异步交易审批系统探索。社区反馈集中于 Feishu/Lark 集成故障与 MiniMax API 认证问题，需优先关注稳定性。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
- **PR #1745**：自动化发布 `ironclaw` 从 v0.23.0 至 v0.23.1，主要修复 MCP 工具注解反序列化兼容性问题（[链接](https://github.com/nearai/ironclaw/pull/1745)）。
- **PR #1740**（新）：新增 `/api/extensions/tools/{name}/invoke` 端点，支持直接调用 WASM 工具同步执行，解决 Tauri 集成缺失执行路径的问题（[链接](https://github.com/nearai/ironclaw/pull/1740)）。
- **PR #1557**：持续推进统一执行引擎（v2 架构）开发，已完成 43 个文件、7,275 行 Rust 代码实现，采用并行开发模式以降低风险（[链接](https://github.com/nearai/ironclaw/pull/1557)）。
- **多轮 staging 自动推广**：共完成 10 次 staging 分支到主分支的自动化合并（如 PR #1724–#1744），涵盖 agent、LLM、worker、数据库等模块迭代，标志 CI/CD 流程成熟度提升。

> 项目正向模块化、可插拔架构演进，前端已拆分为独立 crate，后端执行模型重构稳步推进。

---

### 4. **社区热点**
- **Issue #1673**（Feishu/Lark 配对卡死）：用户报告配置后频道持续显示 “Awaiting Pairing”，缺乏配对码提示机制，已有 2 条评论及 2 个点赞，反映集成体验断裂（[链接](https://github.com/nearai/ironclaw/issues/1673)）。
- **Issue #1742**（MiniMax API 鉴权失败）：日志显示 401 Unauthorized，疑似密钥配置或请求签名错误，开发者 erkinalp 提交初步排查信息（[链接](https://github.com/nearai/ironclaw/issues/1742)）。
- **Issue #1739**（异步交易审批系统）：提出基于 WalletConnect 的双阶段高价值操作批准流程构想，获 4 条评论讨论，强调安全通道隔离必要性（[链接](https://github.com/nearai/ironclaw/issues/1739)）。

> 热点集中于第三方服务集成可靠性与金融级操作安全设计，体现用户对生产环境稳定性的强诉求。

---

### 5. **Bug 与稳定性**
| 严重等级 | Issue/PR | 描述 | 状态 |
|--------|--------|------|------|
| **高** | #1673 | Feishu/Lark 集成后无法完成配对 | 开放，无修复 PR |
| **中** | #1742 | MiniMax API 返回 401 Unauthorized | 开放，待定位根因 |
| **低** | #1611 | Docker Sandbox Worker 迭代超限崩溃 | **已关闭**（关联 502 fix） |

> 当前无活跃崩溃类 Bug，但外部依赖（如 Feishu、MiniMax）集成问题需纳入监控清单。

---

### 6. **功能请求与路线图信号**
- **Issue #1712**：提议构建专用金融执行层，涵盖托管、签名、策略管控等能力，属高风险高价值方向（[链接](https://github.com/nearai/ironclaw/issues/1712)）。
- **Issue #1739** + **PR #1740**：异步交易审批与工具调用端点形成闭环，暗示下一阶段将聚焦“安全代理行动链”（Agent Action Chain）。
- **PR #1736**：引入个人 AI 助手承诺追踪系统（Commitments System），通过 YAML 元数据管理任务状态，可能扩展至工作流自动化场景。

> 路线图清晰向“可信 AI 代理”演进，尤其强化对高 stakes 操作的安全控制能力。

---

### 7. **用户反馈摘要**
- **痛点**：Feishu/Lark 配置流程不透明，缺少明确引导；MiniMax 密钥轮换机制未文档化。
- **使用场景**：企业用户希望 IronClaw 作为内部智能助手底座，支持跨应用协作（如邮件、IM、日历）；开发者期待更灵活的 WASM 工具调用接口。
- **满意度**：对 staging 自动部署表示认可，认为提升开发效率；对前端解耦与 widget 系统持积极态度。

---

### 8. **待处理积压**
- **Issue #1712**（Architect secure financial execution layer）：创建于 2026-03-27，尚无实质性推进，涉及核心架构变更，建议核心成员评估优先级。
- **Issue #1673**（Feishu/Lark pairing stuck）：超 3 天未响应，影响部分用户接入，建议指派专人跟进或与 Feishu API 团队协调。
- **PR #1557**（Unified Engine v2）：虽在 staging 中持续合并，但尚未正式切换至 main，需最终验收测试通过后释放。

--- 

*数据来源：GitHub Repository [nearai/ironclaw](https://github.com/nearai/ironclaw)*  
*生成时间：2026-03-30 UTC+8*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026-03-30）**

---

### 1. **今日速览**
LobsterAI 在过去 24 小时内保持中等活跃度，共产生 7 条 Issue 更新（6 新/活跃，1 关闭）和 8 个待合并 PR，无新版本发布。社区对引擎切换、登录问题及 Windows 自启故障持续关注，同时多个高质量功能增强提案进入开发阶段。整体发展节奏稳定，技术迭代与用户反馈响应同步推进。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
截至今日，**无已合并或关闭的 Pull Requests**，所有 8 个新增 PR 仍处于 `OPEN` 状态，表明当前开发周期以功能预研与初步实现为主，尚未进入集成测试阶段。重点贡献方向包括：
- Qwen OAuth 支持（PR #644）：提升多厂商认证灵活性；
- 临时会话隐私优化（PR #958）：增强轻量交互体验；
- 技能输入快捷操作（PR #1013）：引入类 slash-command 交互；
- 可复用 Prompt 模板库（PR #1009）：沉淀高频使用场景。

---

### 4. **社区热点**
最活跃的 Issue 为 **#418**（关于是否转向 OpenClaw 引擎），用户质疑 Claude Agent SDK 的不可控性，并询问 Cowork 后续维护计划。该问题反映核心用户对底层架构稳定性的关切，但尚无官方回应。  
其次，**#1016**（网易员工登录态未下发）因涉及企业内网单点登录流程，成为当日唯一新增 Issue，具较高关注度。  
此外，**#595**（Windows 开机自启失败）持续更新中，用户期待日志调试支持。

---

### 5. **Bug 与稳定性**
按严重程度排序：
1. **[高]** **#1016**：网易员工登录后客户端未接收 auth token，导致功能不可用。影响企业用户正常使用，**无对应 fix PR**。
2. **[中]** **#595**：Windows 开机自启进程 3 秒内退出且无日志，疑似权限或服务注册异常。**无 fix PR**，需进一步诊断。
3. **[低]** **#1015**：内部 NPM registry（npm.nie.netease.com）不可达引发构建失败，属环境依赖问题，非代码缺陷。**无 fix PR**。
4. **[中]** **#1007**：Agent Engine 无限重启，可能与配置或资源竞争相关。**无 fix PR**，用户请求配置调整方案。

---

### 6. **功能请求与路线图信号**
- **Prompt 模板库**（PR #1009）：显著降低重复 Prompt 输入成本，预示未来将加强“知识沉淀”能力；
- **Slash-triggered 技能选择器**（PR #1013）：提升技能调用效率，契合 AI 工具链深度集成趋势；
- **临时会话隔离机制**（PR #958）：强化隐私与数据治理，符合企业用户对临时协作场景的需求；
- **Qwen OAuth 支持**（PR #644）：扩展多模型供应商兼容性，反映对国产大模型的生态适配策略。

以上功能均具备明确用户需求支撑，极可能纳入近期发布计划。

---

### 7. **用户反馈摘要**
- **痛点集中点**：登录态同步失败（#1016）、Windows 自启异常（#595）、Agent 不稳定（#1007）暴露客户端与系统环境兼容性问题；
- **满意点**：临时会话设计获认可，用户赞赏其“随用随清”理念；技能发现机制改进（#1014）获 Dispatch 平台主动引用，体现外部生态认可；
- **隐性诉求**：多数用户希望获得更清晰的**技术路线说明**（如 #418 中对引擎迁移的疑问），反映出对长期维护承诺的不确定性焦虑。

---

### 8. **待处理积压**
- **Issue #418**（创建于 2026-03-15，距今 15 天未闭环）：涉及核心架构方向澄清，若长期未回应可能影响社区信心，建议官方尽快发布声明或路线图文档。
- **PR #958**（临时会话功能）：虽已完成实现，但未获 review，存在延迟风险，需维护者及时介入评估。
- **Issue #595**（Windows 自启）：超过 9 天未获响应，影响 Windows 用户体验，建议分配开发者跟进日志收集机制。

--- 

*数据来源：[netease-youdao/LobsterAI GitHub Repository](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报（2026-03-30）**

---

### 1. **今日速览**

过去24小时内，Moltis 项目活跃度保持稳定：共处理了6条 Issues 和3条 Pull Requests。核心贡献者持续推动安全、会话管理及多平台集成相关功能迭代。尽管无新版本发布，但已有两个重要 PR 被合并，表明开发节奏正常。社区对 Z.AI 集成、Matrix 支持等新功能表现出持续关注。

---

### 2. **版本发布**

无新版本发布。

---

### 3. **项目进展**

今日共关闭并合并了以下关键 PR：

- **[PR #517](https://github.com/moltis-org/moltis/pull/517)**（已合并）：  
  新增 `zai-code` 提供商，专门对接 Z.AI 的 Coding Plan API，解决现有 `zai` 端点因余额不足导致的“insufficient balance”错误。此变更直接响应 Issue #414，显著提升了 Z.AI 用户在特定订阅模式下的可用性。

- **[PR #503](https://github.com/moltis-org/moltis/pull/503)**（待合并）：  
  引入跨会话历史回溯、托管 SSH 运行时 UX 优化及技能包可移植性功能。该 PR 包含多项长期路线图目标，如 Cursor 兼容性增强与自动检查点机制，标志着用户体验与工程健壮性同步提升。

此外，[PR #518](https://github.com/moltis-org/moltis/pull/518) 正在完善密封 vault 期间会话访问策略，修复 UI 误导提示问题，进一步强化安全边界设计。

---

### 4. **社区热点**

最活跃议题为 **[Issue #185: Add Z.AI Coding Plan](https://github.com/moltis-org/moltis/issues/185)**，获5个点赞且近期仍更新，反映出用户对官方支持 Z.AI Coding Plan 的强烈需求。紧随其后的是 **[Issue #233: Matrix Support](https://github.com/moltis-org/moltis/issues/233)**（3条评论，2个赞），显示去中心化通信协议接入成为新兴趋势。两者均属增强型通道/提供商集成类请求，与当前 PR 方向高度一致，预示下一阶段重点将聚焦于扩展主流 AI 服务商覆盖范围。

---

### 5. **Bug 与稳定性**

- **[Issue #485: Built-in tools generate invalid JSON Schema for strict providers](https://github.com/moltis-org/moltis/issues/485)**（已关闭）：  
  此严重 bug 涉及内置工具在严格模式下生成无效 JSON Schema，可能导致推理失败或数据不一致。虽仅1条评论，但因快速闭环（创建至关闭仅5天），说明维护团队响应高效。推测已在相关 PR 中修复，需验证后续是否引入回归测试。

- **[Issue #414: z.ai does not work out of the box and manual gives network errors](https://github.com/moltis-org/moltis/issues/414)**（已关闭）：  
  用户报告 Z.AI 默认端点不可用且出现网络错误。该问题由 [PR #517] 针对性解决，通过拆分出专用 `zai-code` 提供程序实现精准适配，体现“按需细化服务”的设计哲学。

---

### 6. **功能请求与路线图信号**

- **Z.AI Coding Plan 支持**：已通过 [PR #517] 实现，印证此前 Issue #185 与 #414 的需求优先级最高。
- **Matrix 通道集成**：Issue #233 持续获得关注，暂无对应 PR，可能列入未来 Q2 路线图中。
- **本地思考能力（Local thinking）**：Issue #490 提出新特性，但目前仅有2条评论，热度较低，短期内优先级不高。
- **会话历史加密策略调整**：Issue #176（添加系统提示时间戳）虽已关闭，但可能影响未来审计或上下文管理功能设计。

整体来看，项目正沿着“增强提供商兼容性”与“改善会话持久化体验”两条主线演进。

---

### 7. **用户反馈摘要**

- 用户对 Z.AI 服务割裂问题深感困扰，尤其 Coding Plan 订阅者无法使用通用端点，凸显统一抽象层不足。
- Issue #485 反映严格模式下的 schema 校验缺失，暴露工具链在边缘场景的鲁棒性短板。
- PR #503 提及的“suspicious context files”警告机制获得正面反馈，显示开发者重视代码安全性与透明度。
- UI 方面，“Vault is sealed”提示误导性问题引发不满，[PR #518] 及时修正，体现对交互细节的关注。

---

### 8. **待处理积压**

- **[Issue #233: Matrix Support](https://github.com/moltis-org/moltis/issues/233)**：自2月25日提出至今未获实质回应，建议评估可行性并制定初步技术方案。
- **[Issue #185: Add Z.AI Coding Plan](https://github.com/moltis-org/moltis/issues/185)**：虽已有解决方案上线，但仍建议补充文档说明，避免用户混淆不同 Z.AI 端点的用途。

--- 

*数据来源：GitHub API / moltis-org/moltis，统计周期：2026-03-29T00:00:00Z 至 2026-03-30T00:00:00Z*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目动态日报（2026-03-30）**

---

### 1. **今日速览**
CoPaw 在 2026-03-30 保持较高社区活跃度，过去 24 小时内新增 Issue 36 条、PR 35 条，其中 11 个 Issue 和 14 个 PR 被关闭，表明问题响应速度与代码迭代效率良好。项目整体处于功能完善与稳定性优化阶段，无新版本发布，但多个长期痛点正通过社区协作逐步解决。

---

### 2. **版本发布**
**无新版本发布**。当前稳定版本仍为 `v0.2.0.post1`，未检测到破坏性变更或重大架构调整。

---

### 3. **项目进展**
今日共 **14 个 PR 被合并/关闭**，主要进展包括：

- **i18n 导航栏多语言支持**（#2508）：前端国际化增强，修复语言切换后菜单未同步更新的问题，关联 Issue #2269、#2431、#2442。
- **MCP ConfigWatcher 空值检查修复**（#2462）：CLI 工具因配置缺失导致崩溃的问题已闭环，提升 CLI 稳定性。
- **Windows 安装脚本 PATH 修复**（#2488）：`install.ps1` 中 `SetItemProperty` 拼写错误导致环境变量更新失败，现已修正。
- **子进程代理支持**（#2505）：为 WSL 和企业网络用户提供自动代理注入，改善国内开发者使用体验。
- **requires 字段列表格式兼容**（#2504）：Skill 元数据解析增强，支持 YAML 列表格式，避免技能加载崩溃。

此外，Matrix 通道 E2EE 支持（#2509）和 ACP 外部 Agent 协议（#2507）进入待合并队列，标志跨平台协作能力持续拓展。

> ✅ 关键指标：今日 PR 合并率约 40%，高于平均水平，显示开发节奏稳健。

---

### 4. **社区热点**
最活跃的 Issue 为 **#2291 [Help Wanted: Open Tasks]**（36 条评论），作为“开源任务认领”看板，持续吸引贡献者参与。其次为 **#2218 CPU 占用过高**（17 评论），反映 busy-polling epoll loop 设计缺陷，需核心架构优化。

另一热点是 **#2482**（10 评论），来自重度用户提出的三项实用需求：
1. 对话物理删除功能；
2. AI 驱动的上下文压缩；
3. 大文件一次性读取支持。

这些需求虽简单却直击高频使用场景，预示下一版本可能强化本地交互体验。

> 🔗 链接：[#2291](https://github.com/agentscope-ai/CoPaw/issues/2291) | [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) | [#2482](https://github.com/agentscope-ai/CoPaw/issues/2482)

---

### 5. **Bug 与稳定性**
高优先级 Bug 如下：

| Issue | 严重程度 | 描述 | 状态 |
|------|--------|------|------|
| #2218 | ⚠️ High | 主进程空闲时 CPU 100% 占用，epoll 忙轮询 | 活跃中，无 fix PR |
| #2445 | ⚠️ High | 网关重启后 Agent 永久卡死（100% 复现） | **已关闭**，推测由资源泄漏引起 |
| #2439 | 🟡 Medium | 语音消息转录失败 | 活跃中，需排查音频处理链路 |
| #2303 | 🟡 Medium | MiniMax 调用 `/models` 端点返回 404 | 活跃中，建议改用健康检查替代 |

已有部分修复 PR 提交（如 #2462、#2488），但核心性能问题（如 #2218）仍待深入优化。

---

### 6. **功能请求与路线图信号**
用户明确提出的功能需求正逐步转化为开发行动：

- **对话管理增强**（#2482）：物理删除 + AI 压缩 → 对应 Issue #2291 中的 Task 12/13，已有知识库导入（#2484）等并行推进。
- **MCP 工具可视化**（#2495）：希望配置 MCP 后能查看可用工具，属 UX 优化类轻量需求。
- **钉钉文档操作支持**（#2451）：扩展 DingTalk 技能至 AI 表格/文档，符合生态集成战略。
- **静默执行 Cron 任务**（#2452）：允许脚本运行不输出 Agent 回复，适合自动化场景。

结合 PR 趋势，**下一版本（v0.3.0）预计聚焦：多模态输入鲁棒性、MCP/ACP 协议支持、i18n 完善及对话生命周期管理**。

---

### 7. **用户反馈摘要**
从 Issue 中提取的真实用户痛点：

- **语言设置不持久化**（#2269、#2431）：反复切换中英文令人困扰，影响非英文母语用户体验。
- **大文件读取截断**（#2500、#2377）：数千行代码无法一次性处理，需分批且易出错，暴露 token 管理机制不足。
- **乱码导致对话失效**（#2482）：调试信息混入上下文引发模型误解，亟需智能过滤机制。
- **企业网络限制**（#2505）：WSL 用户普遍依赖代理，原生支持可降低部署门槛。

正面反馈集中于 **ACP 协议支持**（#2507）和 **Matrix E2EE**（#2509），体现对开放生态的期待。

---

### 8. **待处理积压**
以下 Issue/PR 超过 14 天未活跃，需维护者优先关注：

- **#1456**：空名 Tool Call 静默失败，影响工具调用可靠性，超 2 周无进展。
- **#2218**：CPU 占用问题自 3-24 提出至今仍在讨论，缺乏根本解决方案。
- **#406**：GitHub Copilot 模型支持请求，属早期愿景，暂无排期。

建议分配专项时间处理 #2218 与 #1456，以提升系统健壮性。

--- 

**总结**：CoPaw 今日展现活跃的开源生命力，社区驱动修复密集，新功能方向明确。核心挑战在于优化运行时稳定性（CPU 占用、进程卡死）并深化对话管理能力。建议后续版本优先解决高优先级 Bug，同时推进 i18n 与多模态体验升级。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报（2026-03-30）**

---

### 1. **今日速览**  
过去24小时内，ZeptoClaw 社区活跃度保持稳定：新增2个活跃 Issue 和6个 PR 更新（含1个已关闭），无新版本发布。核心维护者 stuartbowness 主导了多项关键改进，涵盖 CLI 工具注册、浏览器自动化支持及运行时安全增强。项目整体处于积极迭代状态，重点聚焦于提升自定义工具兼容性与系统安全性。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  
- **PR #464（已合并）**：修复了 `zeptoclaw tools list` 仅显示22/33内置工具的严重问题，现完整列出所有可用工具（如 `git`, `pdf_read`, `stripe` 等），显著提升用户发现能力。[链接](https://github.com/qhkm/zeptoclaw/pull/464)  
- **PR #467（待合并）**：为自定义工具引入 `raw_string` 参数类型，解决 `{{args}}` 在 shell 中被错误转义的问题，直接关联 Issue #466。[链接](https://github.com/qhkm/zeptoclaw/pull/467)  
- **PR #459（待合并）**：集成 `agent-browser` 实现全功能浏览器自动化，支持 Lightpanda 与 Chrome 回退机制，扩展 AI 代理的交互边界。[链接](https://github.com/qhkm/zeptoclaw/pull/459)

项目正向更健壮的工具链与更强的生产就绪性迈进。

---

### 4. **社区热点**  
- **Issue #466 & PR #467**：围绕“CLI 包装器中 `{{args}}` 参数被错误 shell 转义”展开深度讨论，暴露出当前参数插值机制的局限性，推动引入 `raw_string` 类型作为临时解决方案。[Issue](https://github.com/qhkm/zeptoclaw/issues/466) | [PR](https://github.com/qhkm/zeptoclaw/pull/467)  
- **Issue #465**：提出将 `tools list` 硬编码数组替换为动态注册机制，反映用户对可扩展工具生态的核心诉求。该 Issue 虽无评论，但 PR #464 已部分回应此需求（修复可见性），后续需进一步解耦设计。[Issue](https://github.com/qhkm/zeptoclaw/issues/465)

---

### 5. **Bug 与稳定性**  
| 严重等级 | Issue/PR | 描述 | 状态 |
|--------|--------|------|------|
| 高 | #466 | 自定义工具 CLI 参数被单引号包裹导致命令失效 | ✅ 有修复 PR (#467) |
| 中 | #463 | Landlock 模式下工作区目录不可访问 | ⚠️ 待合并 PR 提供修复 |
| 低 | #468 | 厂商前缀模型路由至 OpenRouter 失败 | ✅ PR 已提交 |

主要风险集中在参数解析与沙箱权限控制，均已进入修复流程。

---

### 6. **功能请求与路线图信号**  
- **动态工具注册机制（Issue #465）**：明确要求将静态工具列表替换为基于 `ToolRegistry` 的动态发现，预示未来版本将强化插件化架构。  
- **浏览器自动化能力（PR #459）**：集成 `agent-browser` 表明 ZeptoClaw 正拓展至复杂网页交互场景，可能成为下一阶段重点功能方向。  
- **多语言上下文压缩（PR #460）**：虽未在本日活跃，但其“分层压缩策略”解决了 token 溢出崩溃，暗示长期稳定性优化将持续投入。

---

### 7. **用户反馈摘要**  
- **痛点**：  
  - “`gws {{args}}` 无法传递带空格的参数，报错说找不到 `+triage`。”（Issue #466）  
  - “`tools list` 看不到我安装的 `transcribe` 工具，不知道是否需要额外配置。”（隐含于 PR #464 用户故事）  
- **满意度**：对 Landlock 沙箱支持表示认可，但期望默认启用时自动配置正确路径。  
- **使用场景**：企业级 AI 代理需调用带复杂参数的外部 CLI 工具（如邮件处理、支付接口）；开发者在沙箱环境中运行敏感操作。

---

### 8. **待处理积压**  
- **Issue #465（RFC）**：建议重构工具发现机制。目前无后续行动，建议维护者评估其与 PR #467 的技术耦合度。[链接](https://github.com/qhkm/zeptoclaw/issues/465)  
- **PR #460（多层上下文压缩）**：创建超2天未合并，涉及核心逻辑变更，需关注进度以避免阻塞其他任务。[链接](https://github.com/qhkm/zeptoclaw/pull/460)

---

**数据结论**：ZeptoClaw 当前处于高质量持续交付阶段，维护者响应迅速，技术债清理有效。建议优先合并 #467 以闭环 #466 问题，并规划 Issue #465 的架构演进路径。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目日报（2026-03-30）**

---

### 1. **今日速览**  
EasyClaw 今日整体活跃度较低，仅产生 1 条新 Issue 和 1 个版本发布，无 PR 更新。项目处于相对稳定维护期，重点聚焦于 macOS 平台兼容性说明更新与用户反馈响应。社区讨论集中于多客户端共存问题，暂无紧急技术风险。

---

### 2. **版本发布**  
**v1.7.8 发布（RivonClaw v1.7.8）**  
本次更新主要面向 **macOS 用户** 提供安装指引优化，新增对 Gatekeeper 安全机制导致“应用已损坏”提示的官方说明及解决方案（通过 Terminal 执行 `xattr -rd com.apple.quarantine /Applications/RivonClaw.app`）。该更新属非功能性增强，旨在降低新用户上手门槛，未引入破坏性变更或 API 变动。建议所有 macOS 用户参考官方安装指南完成环境适配。  
👉 [Release v1.7.8](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.8)

---

### 3. **项目进展**  
无合并或关闭的 Pull Request，当前无代码层面的功能迭代或重大修复推进。项目整体处于平稳运维状态。

---

### 4. **社区热点**  
**#30: rivonclaw 和 QClaw 能否同时使用？**  
用户报告在先后启动 RivonClaw 与腾讯 QClaw 后出现网络连接冲突：RivonClaw 连接中断，QClaw 亦无法联网，需退出 RivonClaw 才能恢复 QClaw 功能。此问题反映多客户端资源争用（如代理端口、网络栈绑定）的典型痛点，可能涉及底层网络代理实现差异。虽无即时解决方案，但暴露出跨平台工具生态兼容性的关键挑战。  
📌 [Issue #30](https://github.com/gaoyangz77/rivonclaw/issues/30)

---

### 5. **Bug 与稳定性**  
- **Issue #30**: RivonClaw 与 QClaw 互斥运行导致网络中断（**中高风险**）  
  - 表现：双客户端共存引发系统级网络异常  
  - 现状：暂未提交 fix PR，需进一步诊断网络代理层交互逻辑  

当前无崩溃日志或严重稳定性问题上报，整体运行状态可控。

---

### 6. **功能请求与路线图信号**  
用户隐含需求为 **多客户端协同支持** 或 **网络隔离模式**，以避免与其他同类工具（如 QClaw）冲突。尽管尚无明确功能提案或 PR，但该 Issue 持续存在表明用户对生态兼容性有强期待。若未来版本计划扩展多实例管理能力，可考虑纳入 roadmap。

---

### 7. **用户反馈摘要**  
- **痛点**：macOS 用户对 Gatekeeper 拦截敏感，缺乏清晰引导；  
- **场景**：企业环境中需交替使用 RivonClaw 与腾讯 QClaw 进行不同业务链路管理；  
- **满意度**：基础功能稳定，但对跨平台兼容性和多工具共存支持存疑；  
- **不满点**：错误提示信息不友好，未提供一键绕过方案。

---

### 8. **待处理积压**  
- **Issue #30（2026-03-29）**: “rivonclaw 和 QClaw 冲突”已存在超 24 小时，影响用户体验但未获技术响应，建议维护者评估是否需介入调研或标注为“已知限制”。  
- 其他 Issue 均较活跃或已闭环，无明显长期积压项。

---  
*数据依据：GitHub API 抓取（2026-03-30），来源：[gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*