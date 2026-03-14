# OpenClaw 生态日报 2026-03-14

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-14 00:20 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

**OpenClaw 项目动态日报 - 2026-03-14**

---

### 1. **今日速览**
OpenClaw 在 2026-03-14 展现出高度活跃的开发态势，过去 24 小时内共处理了 500 条 Issues 和 500 条 PRs，表明社区与开发者群体持续投入。新版本 v2026.3.12 已于昨日发布，带来重大 UI 重构与功能增强，但也触发了一系列回归问题。整体活跃度极高，但需警惕因更新引发的稳定性风险。

---

### 2. **版本发布：v2026.3.12**
- **发布时间**：2026-03-12
- **核心变更**：
  - Control UI/dashboard-v2 全面升级，采用模块化设计，新增聊天、配置、代理、会话视图，集成命令面板、移动端底部标签栏及富文本聊天工具（斜杠命令、搜索、导出、置顶消息等）。
  - 支持 OpenAI/GPT-5.4 模型接入。
- **破坏性变更**：无明确声明，但大量用户反馈升级后出现 WebSocket 连接失败、内存泄漏等问题，推测底层通信机制或插件加载逻辑存在变动。
- **迁移建议**：
  - 若使用 Raspberry Pi 4 等低配设备，建议暂缓升级或监控内存使用；
  - 检查第三方插件兼容性，尤其是自定义插件可能受路径重构影响；
  - CLI 工具如 `openclaw logs --follow` 出现握手超时，建议等待后续补丁。

> 📌 [Release v2026.3.12](https://github.com/openclaw/openclaw/releases/tag/v2026.3.12)

---

### 3. **项目进展**
尽管今日未合并或关闭高优先级 PR，但多个关键修复正在推进中：

- **#45541**（已关闭）：由 @BunsDev 提交，修复了 dashboard v2 在工具结果频繁更新时导致的聊天历史重复加载风暴，显著提升 UI 响应流畅度。
- **#45512**（进行中）：恢复 Control UI 的认证绕过机制，并优化连接失败分类诊断，解决跨设备 LAN 访问时的 “device identity required” 错误。
- **#45539 / #45531**：将 iMessage 与 Signal 实现迁移至扩展系统（extensions），统一架构模式，提升可维护性与模块化水平。

> 🚀 这些改动体现了团队对用户体验一致性与系统架构长期健康的重视。

---

### 4. **社区热点**
当前最受关注的议题集中于 **多语言支持** 与 **平台兼容性缺失**：

- **#75**（Linux/Windows Clawdbot Apps）获 60 个点赞，作者 @steipete 呼吁补充 Linux/Windows 原生应用，已有 macOS/iOS/Android 版本，社区强烈期待跨平台覆盖。
- **#3460**（国际化和本地化支持）评论达 101 条，用户多次提交 PR 请求 i18n 支持，但官方暂未分配资源，反映出全球化扩展的迫切需求。
- **#6872**（xAI 支持）持续发酵，用户对 xAI Grok-4.1 Fast 的受限访问表达不满，认为其功能被人为削弱。

> 💬 用户普遍希望 OpenClaw 从“开发者友好型 AI 框架”向“企业级全栈平台”演进，尤其在部署灵活性与国际化方面亟待突破。

---

### 5. **Bug 与稳定性**
自 v2026.3.12 发布以来，集中爆发以下严重问题（按影响面排序）：

| Issue | 类型 | 影响范围 | 是否已有 Fix PR |
|-------|------|--------|----------------|
| #45440 | 内存泄漏导致 OOM（树莓派） | 嵌入式/边缘设备 | ❌ 暂无 |
| #45064 | CLI 基本命令崩溃 | 所有使用 openclaw-message 的用户 | ❌ 暂无 |
| #45471 / #45474 / #45171 | WhatsApp 通道失联/重连循环 | 主要通讯渠道 | ⚠️ 部分关联 PR 待审 |
| #39611 | Control UI 页面切换后断连 | Web 控制端 | ✅ #45512 已提交修复 |
| #44835 | 配置验证误报 “models.0.id undefined” | 模型配置流程 | ❌ 暂无 |

> 🔧 特别提醒：Raspberry Pi 4（2GB RAM）用户在升级后极易遭遇 OOM，建议回滚至 v2026.3.7 或等待热修复。

---

### 6. **功能请求与路线图信号**
- **xAI 支持**（#6872）虽曾被驳回，但持续获得关注，结合 GPT-5.4 已上线，推测未来将逐步开放主流大模型厂商集成。
- **CLI 多目标发送支持**（#44537）正通过映射 `--target` 参数至内部字段，强化命令行灵活性，预示 CLI 工具链将持续强化。
- **Chrome DevTools MCP 内置预设**（#45373）表明 OpenClaw 正积极拥抱现代浏览器自动化生态，Agent 能力边界持续拓展。

> 📈 路线图可见：强化多模态交互（TTS 持久化、文件处理）、深化与外部服务集成（Slack MUX、LINE webhook）、提升 CLI 与运维体验。

---

### 7. **用户反馈摘要**
- **正面反馈**：新版 Control UI 界面现代化，命令面板与移动端适配获好评；iMessage 与 Signal 迁移至扩展架构被视为良好工程实践。
- **负面痛点**：
  - “升级后 WhatsApp 发不出去消息，只有单勾，太影响工作流”（@juvenalmakoszay）；
  - “CLI 日志监听突然失效，而网页端却正常，调试困难”（@anyech）；
  - “Docker 容器内技能安装因缺少 brew 报错，缺乏文档说明”（@pavelkudrna83）。

> 📊 用户最关心 **稳定性 > 新功能**，尤其在生产环境中，任何中断都引发强烈反应。

---

### 8. **待处理积压**
- **#5813**（agentToAgent.enabled 导致子代理无法启动）：自 2026-02-01 提出，近 1 个月未获响应，属核心调度逻辑缺陷，需优先排查。
- **#14593**（Docker 内技能安装失败）：长期未解，阻碍容器化部署普及。
- **#25145**（消息发送前人工审批门控）：安全关键功能缺失，多次提及仍未纳入计划。

> ⏳ 建议维护者设立专项 SLA 处理此类高影响力 Issue，避免社区信任流失。

--- 

*数据来源：GitHub API @ 2026-03-14 00:00 UTC | 分析师：AI 智能体与个人 AI 助手领域开源项目分析师*

---

## 横向生态对比

好的，作为专注于 AI 智能体生态的技术分析师，我将基于您提供的详细社区动态，为您生成一份横向对比分析报告。

---

## **个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-03-14)**

### **1. 生态全景**

当前，个人 AI 助手与自主智能体开源生态正处于**爆发式增长的“战国时代”**。项目数量激增，围绕核心框架、特定场景工具链和垂直领域解决方案展开激烈竞争。开发者普遍聚焦于**多模态交互、跨平台部署、企业级集成及本地模型支持**，以提升智能体的实用性与鲁棒性。然而，生态碎片化严重，不同项目在架构理念（单体 vs. 插件化）、通信协议（MCP, ACP）和部署模式上存在显著差异。整体而言，这是一个充满活力但也充满挑战的领域，稳定性和用户体验成为决定项目成败的关键因素。

### **2. 各项目活跃度对比**

| 项目名称     | Issues 数 | PR 数 | Release 情况       | 健康度评估                     |
| :----------- | :-------- | :---- | :----------------- | :----------------------------- |
| **OpenClaw** | 500       | 500   | v2026.3.12 (重大)    | ⭐⭐⭐⭐☆ (极高活跃，但稳定性风险高) |
| NanoBot      | 16        | 155   | 无                 | ⭐⭐⭐⭐⭐ (极高活跃，快速迭代)       |
| Zeroclaw     | 37        | 50    | v0.1.9-beta.140/136 | ⭐⭐⭐⭐☆ (高活跃，Beta阶段)         |
| PicoClaw     | 35        | 109   | nightly构建          | ⭐⭐⭐⭐☆ (高活跃，Nightly阶段)      |
| NanoClaw     | 18        | 37    | 无                 | ⭐⭐⭐⭐ (高活跃)                    |
| IronClaw     | 18        | 42    | 无                 | ⭐⭐⭐⭐ (高活跃)                    |
| LobsterAI    | 12        | 9     | 无                 | ⭐⭐⭐⭐ (稳定迭代)                  |
| TinyClaw     | 2         | 6     | v0.0.13            | ⭐⭐⭐⭐ (稳定迭代)                  |
| Moltis       | 11        | 11    | 无                 | ⭐⭐⭐⭐ (稳定迭代)                  |
| CoPaw        | 50        | 44    | 无                 | ⭐⭐⭐⭐☆ (极高活跃，社区响应强)      |
| ZeptoClaw    | 8         | 6     | 无                 | ⭐⭐⭐⭐ (稳定迭代)                  |
| EasyClaw     | 0         | 0     | 无                 | ⭐ (不活跃)                       |

### **3. OpenClaw 在生态中的定位**

*   **优势**：
    *   **绝对领导者地位**：Issue 和 PR 数量远超其他项目，是无可争议的核心参照。其 UI 重构和功能增强为整个生态提供了标杆。
    *   **企业级全栈平台愿景**：从社区反馈可见，OpenClaw 正积极向“企业级全栈平台”演进，尤其在部署灵活性和国际化方面。
    *   **深度集成主流大模型**：已支持 OpenAI/GPT-5.4，并持续关注 xAI 等新兴厂商的动态。
*   **技术路线差异**：
    *   OpenClaw 采用**单体应用 + 模块化设计**，强调一体化体验和深度定制，适合需要强大控制台的复杂场景。
    *   相比之下，NanoBot 和 Zeroclaw 更侧重于**插件化和可扩展性**，允许第三方轻松添加自定义通道和技能，更适合生态构建和特定场景扩展。
*   **社区规模对比**：
    *   OpenClaw 拥有最庞大的社区基础，但其高活跃度也带来了更高的维护压力，尤其是在新版本发布后需要快速响应大量反馈和问题。

### **4. 共同关注的技术方向**

多个项目共同涌现出以下关键需求：

*   **多通道交付与平台集成**：
    *   **诉求**：支持更多企业级通信渠道（如企业微信、钉钉、Matrix、Slack Socket Mode、Lark/Feishu、Nextcloud Talk）。
    *   **涉及项目**：Zeroclaw (#383), CoPaw (#1085, #1460), IronClaw (#1155), TinyClaw (#57), Moltis (#383)。
*   **本地 LLM 与推理模型支持**：
    *   **诉求**：更好地支持 Ollama、MiniMax、Kimi For Coding 等本地或特定推理模型，解决 API 兼容性、参数映射和连接问题。
    *   **涉及项目**：IronClaw (#728), PicoClaw (#1161, #1514), LobsterAI (#112, #405), CoPaw (#1458)。
*   **MCP (Model Context Protocol) 深度集成与优化**：
    *   **诉求**：提升 MCP 工具的加载效率、按需加载机制、配置稳定性以及与 Agent 的交互体验。
    *   **涉及项目**：Zeroclaw (#3446), LobsterAI (#408, #401), IronClaw (CI/CD 检测), TinyClaw (#1372)。
*   **Agent 架构现代化与透明化**：
    *   **诉求**：实现子 Agent 执行过程可视化、工作目录隔离、事件驱动循环以支持中断与钩子机制。
    *   **涉及项目**：PicoClaw (#1218, #1316), NanoBot (#1955), TinyClaw (#191 品牌更名暗示架构升级)。
*   **安全性加固与默认值优化**：
    *   **诉求**：强化默认安全策略、凭证验证前置、内容过滤（WebFetch/WebSearch）以及防止权限泄露。
    *   **涉及项目**：ZeptoClaw (#347, #354), NanoClaw (#1035), Moltis (#428)。

### **5. 差异化定位分析**

| 项目名称     | 功能侧重                         | 目标用户                           | 技术架构关键差异                   |
| :----------- | :------------------------------- | :--------------------------------- | :--------------------------------- |
| **OpenClaw** | 企业级全栈平台，UI/UX，多模型支持 | 企业开发者，寻求一体化解决方案     | 单体应用 + 模块化设计              |
| **NanoBot**  | 轻量高效，插件化，通道扩展       | 开发者，希望快速集成自定义通道     | 高度模块化，entry_points 插件系统  |
| **Zeroclaw** | 多平台兼容，UI/UX，MCP生态       | 多平台用户，注重现代化界面         | Rust 后端，Web 前端                |
| **PicoClaw** | 嵌入式/边缘设备，Agent架构重构    | IoT/边缘计算开发者，追求轻量级     | 事件驱动，强调低资源消耗           |
| **NanoClaw** | 消息处理鲁棒性，多通道，长期记忆 | 自动化客服，个人助理用户           | 专注消息队列与记忆系统             |
| **IronClaw** | 生产就绪，CLI，Rust生态          | 运维人员，DevOps，Rust开发者       | Rust 原生，CLI 工具链完善          |
| **LobsterAI**| OpenClaw生态整合，本地部署       | 希望结合 OpenClaw 能力的用户       | 深度依赖 OpenClaw 组件             |
| **TinyClaw**| Agent管理，分层记忆，协作空间    | 团队协作型项目，多Agent管理需求    | 符号链接技能管理，Live Office 工作空间 |
| **Moltis**   | 节点执行，模板渲染，Cron调度     | 流程自动化，模板驱动型任务         | 节点图执行引擎，Jinja2 模板        |
| **CoPaw**    | 多平台接入，定时任务，技能生态   | 企业集成，多IM渠道用户             | 时间上下文标准化，技能去重         |
| **ZeptoClaw**| CLI交互，安全性，ACP协议         | 命令行重度用户，安全敏感场景       | 交互式审批，ACP stdio/HTTP         |
| **EasyClaw** | 未活跃                           | 未明确                             | 未活跃                             |

### **6. 社区热度与成熟度**

*   **快速迭代阶段**：
    *   **OpenClaw**：尽管是核心参照，但新版本带来的稳定性问题使其仍需快速修复，处于“高活跃但需质量巩固”状态。
    *   **NanoBot** 和 **CoPaw**：Issue 和 PR 数量极高，社区响应迅速，功能持续快速推进，是生态中最活跃的参与者。
    *   **Zeroclaw** 和 **PicoClaw**：Beta/Nightly 版本持续更新，社区贡献度高，处于功能快速填充期。
*   **质量巩固阶段**：
    *   **NanoClaw**、**IronClaw**、**LobsterAI**、**Moltis**、**ZeptoClaw**：虽然活跃，但更注重修复和优化现有功能，Bug 修复和稳定性提升是其主要方向。
    *   **TinyClaw**：已完成一次重要版本发布，功能趋于稳定，社区反馈集中在功能扩展和文档完善。

### **7. 值得关注的趋势信号**

*   **从“单一代理”到“协作平台”**：TinyClaw 的品牌更名（TinyClaw → TinyAGI）和 CoPaw 的 ACP 协议支持，都表明项目正在从单机代理向可组合、可标准化的智能体基础设施演进，未来可能支持多智能体协同工作流。
*   **本地部署与隐私保护的崛起**：PicoClaw、NanoBot、LobsterAI 等项目对本地 Ollama 模型支持的重视，以及 ZeptoClaw 和 NanoClaw 对安全性的强化，反映了用户对数据主权和离线运行能力的日益增长的需求，预示着本地推理将成为标配。
*   **MCP 协议的生态级影响**：Zeroclaw、LobsterAI 等项目对 MCP 的深度集成，显示出 MCP 正从一个实验性协议，逐步演变为 AI 智能体与外部世界交互的事实标准，未来将极大简化工具链的构建和维护。
*   **企业级集成的迫切性**：CoPaw、Zeroclaw、IronClaw 等企业级功能的需求集中涌现，表明 AI 智能体正加速从消费级应用向企业级生产环境渗透，对稳定性、可观测性和合规性提出了更高要求。
*   **用户体验的精细化打磨**：从 OpenClaw 的 UI 重构、Moltis 的 Cron 文案优化，到 ZeptoClaw 的流式输出和元数据页脚，无一不体现出社区对终端用户体验的极致追求，这将是未来项目脱颖而出的关键。

**对 AI 智能体开发者的参考价值**：
*   **选择框架时**：若追求企业级全栈能力，OpenClaw 仍是首选；若偏好高度定制化与生态扩展，NanoBot 或 Zeroclaw 更具吸引力；若专注于 CLI 和本地部署，IronClaw 或 ZeptoClaw 是不错选项。
*   **关注技术趋势**：MCP 和 ACP 协议的发展将是未来生态融合的关键，提前布局相关集成能力将极具前瞻性。
*   **重视稳定性与安全性**：在快速迭代的同时，务必投入资源保障核心功能的稳定性和默认安全策略，避免因 Bug 频发或安全隐患导致用户流失。
*   **拥抱多模态与本地模型**：支持图片、音频等多模态输入输出，以及本地 LLM 推理，是提升产品竞争力不可或缺的方向。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报（2026-03-14）**

---

### 1. **今日速览**
过去24小时，NanoBot 社区活跃度显著提升：新增 Issue 16条、活跃 Issue 10条、PR 提交达155条，显示开发者与用户参与度高。项目整体处于快速迭代期，尤其在通道插件架构和 Provider 扩展方面进展突出。无新版本发布，但多个重要 Bug 修复和功能增强已通过 PR 合并。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
本周重点推进了**通道插件架构重构**与**Provider 兼容性增强**。以下为主要合并/关闭的 PR：

- **#1984 [CLOSED] feat: channel plugin architecture with decoupled configs**  
  将11个内置通道配置从 `schema.py` 解耦至独立模块，支持通过 `entry_points` 加载外部通道插件，显著提升可扩展性与维护性。  
  ✅ 已合并，为未来生态集成奠定基础。

- **#1909 [CLOSED] fix: force save_memory in consolidation**  
  强制在记忆 consolidation 阶段设置 `tool_choice="required"`，解决 LLM 跳过 `save_memory` 工具调用导致会话未清理的问题（对应 Issue #1931）。  
  ✅ 关键稳定性修复。

- **#1941 [CLOSED] [bug] fix(qq): restore plain text replies for legacy clients**  
  修复因 Markdown 输出格式变更导致的 QQ 旧版客户端兼容性问题（Issue #1936）。  
  ✅ 回归修复，提升跨平台体验。

此外，**Ollama 提供者兼容性恢复**（PR #1983）解决了本地模型部署中的 API Key 配置错误问题。

---

### 4. **社区热点**
最活跃的讨论集中在两个方向：

- **子 Agent 执行过程可视化需求**（[Issue #1955](https://github.com/HKUDS/nanobot/issues/1955)）：  
  用户反映当前主 Agent 可展示“思考中”状态，但子 Agent 完全黑盒。已有9条评论，涉及调试复杂任务流的需求。此诉求与近期 PR #1935（为 `spawn` 工具添加 `working_dir` 参数）形成呼应，可能指向下一代子 Agent 透明化路线图。

- **通道插件架构升级讨论**（[PR #1984](https://github.com/HKUDS/nanobot/pull/1984) & [PR #1982](https://github.com/HKUDS/nanobot/pull/1982)）：  
  两条并行 PR 推动插件化通道机制，允许第三方开发自定义通道（如 XMPP、A2A）。虽评论较少，但技术影响深远，获维护者积极反馈。

---

### 5. **Bug 与稳定性**
按严重程度排序的重要 Bug：

| Issue | 描述 | 严重性 | 是否有 Fix |
|------|------|--------|------------|
| [#1979](https://github.com/HKUDS/nanobot/issues/1979) | 长对话触发上下文窗口溢出 | 高 | ❌ |
| [#1947](https://github.com/HKUDS/nanobot/issues/1947) | Ollama 实例连接时 API Key 校验失败 | 中 | ✅（PR #1983） |
| [#1951](https://github.com/HKUDS/nanobot/issues/1951) | MCP服务启动顺序异常导致 Gateway 崩溃 | 中高 | ⚠️ 待验证（已关闭但无详细日志） |
| [#1956](https://github.com/HKUDS/nanobot/issues/1956) | CLI 输出中 "nanobot is thinking..." 未清除 | 低 | ❌ |

> **注**：上下文窗口溢出（#1979）为高频问题，建议纳入 v0.2.0 的记忆管理优化计划。

---

### 6. **功能请求与路线图信号**
用户明确提出的未来功能方向包括：

- **运行时 Provider 切换能力**（[Issue #1954](https://github.com/HKUDS/nanobot/issues/1954)）：  
  用户希望在对话中动态切换模型供应商（如从 OpenAI 切至 Qwen），目前仅支持静态配置。此需求若实现，将极大提升多平台部署灵活性。

- **WebSearch 后端多样化**（历史 Issue #927）：  
  虽已支持 SearXNG，但仍有用户期待更多搜索引擎选项（如 DuckDuckGo）。

- **子 Agent 工作目录隔离**（[PR #1935](https://github.com/HKUDS/nanobot/pull/1935)）：  
  允许指定子 Agent 运行目录，继承项目规范，体现向“项目级智能体”演进的意图。

这些信号表明 NanoBot 正从通用 AI 助手向**可定制、可组合的智能体框架**演进。

---

### 7. **用户反馈摘要**
- **正面反馈**：  
  用户赞赏模块化设计（尤其通道与技能系统），认为其“轻量高效”（Issue #1977）。部分用户成功集成 Ollama 本地模型，称“摆脱云端依赖”。

- **负面痛点**：  
  - 多平台适配不一致：QQ 旧客户端、Matrix 测试失败、WeCom 配置缺失等问题频发。  
  - 错误信息不友好：如 “function.arguments must be JSON format”（Issue #1487）缺乏上下文指引。  
  - 文档滞后：Pypi 未同步最新版本（Issue #1059）、Azure OpenAI Entra ID 支持需查阅外部博客。

---

### 8. **待处理积压**
以下 Issue/PR 需关注：

- **[长期开放] Issue #1955：子 Agent 执行过程可视化**  
  虽无直接修复，但关联多个子 Agent 相关 PR（如 #1935），建议纳入 v0.2.0 透明化特性规划。

- **[高优先级] Issue #1979：上下文窗口溢出**  
  影响长期使用体验，暂无解决方案。建议评估自动截断或动态分块策略。

- **[待评审] PR #1035：添加 NanoGPT 支持**  
  虽评论少，但代表新兴 Provider 接入模式，值得关注。

---

**总结**：NanoBot 今日展现强劲发展势头，社区协作紧密，架构持续演进。建议优先处理上下文窗口管理与多端兼容性，以巩固用户体验。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**Zeroclaw 项目动态日报 - 2026年3月14日**

---

### 1. **今日速览**

过去24小时，Zeroclaw 项目保持高度活跃状态，共处理 Issues 37条、PR 50条，发布两个 Beta 版本。社区贡献持续高涨，尤其在国际化支持、Windows平台适配和MCP工具生态扩展方面进展显著。整体项目健康度良好，核心功能迭代稳步推进，同时暴露出若干关键稳定性问题亟待修复。

---

### 2. **版本发布**

#### v0.1.9-beta.140  
**更新内容：**
- 新增文档国际化（i18n）支持，完成全部30种语言的文档翻译枢纽构建（[#3450](https://github.com/zeroclaw-labs/zeroclaw/pull/3450)）
- 完成中文（zh-CN）文档完整本地化迁移（[#3429](https://github.com/zeroclaw-labs/zeroclaw/pull/3429)）

> ✅ 此版本为纯文档与国际化增强，无破坏性变更，无需迁移操作。

#### v0.1.9-beta.136  
**更新内容：**
- 修复旧版浏览器中 `crypto.randomUUID` 兼容性问题（[#3407](https://github.com/zeroclaw-labs/zeroclaw/pull/3407)）
- 优化 Ollama 模型对 `reasoning_enabled` 参数的支持逻辑（[#3411](https://github.com/zeroclaw-labs/zeroclaw/pull/3411)）

> ⚠️ 涉及底层工具调用兼容性调整，建议用户测试 Ollama 集成场景。

---

### 3. **项目进展**

今日合并的关键 PR 包括：

- **#3442**: 实现 Windows 平台下 shell 工具的 `tool_call` 执行支持，使用 `cmd.exe /C` 替代 `sh -c`，提升跨平台一致性（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/3442)）
- **#3446**: 引入按需加载 MCP 工具机制（`tool_search`），减少大工具集带来的上下文浪费（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/3446)）
- **#3445**: 全面重设计 Web 仪表盘 UI，采用电光蓝主题 + 玻璃拟态效果 + 全局动画（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/3445)）
- **#3448**: 新增动态节点发现与能力广告功能，支持外部设备通过 WebSocket 注册运行时能力（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/3448)）
- **#3421**: 实现交互式 agent 会话状态持久化与恢复，支持断点续聊（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/3421)）

上述进展标志着项目在**多平台兼容性、用户体验优化、可扩展架构**三大方向取得实质性突破。

---

### 4. **社区热点**

- **Issue #2953**: 请求在官方构建中添加 `channel-matrix` 标志以启用 Matrix 通道支持（5条评论，2个点赞）→ [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/2953)  
  *诉求：Matrix 用户急需官方二进制包支持，避免自行编译*

- **Issue #3397**: 用户反馈切换至 `master` 分支后大量功能丢失（agent_ipc, mcp等）（S0级严重性）→ [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3397)  
  *暴露分支管理混乱问题，引发对默认分支权威性的质疑*

- **PR #3400**: 提议添加原生 LinkedIn 工具支持（OAuth2 + 多动作接口）→ [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/3400)  
  *反映用户对社交 API 集成工具链的强烈需求*

---

### 5. **Bug 与稳定性**

按严重程度排序：

| 等级 | Issue | 描述 | 状态 |
|------|-------|------|------|
| S0 | [#3397](https://github.com/zeroclaw-labs/zeroclaw/issues/3397) | 主分支切换导致功能大面积失效（含 MCP、IPC） | 已关闭，需排查历史提交影响 |
| S1 | [#3452](https://github.com/zeroclaw-labs/zeroclaw/issues/3452) | master 分支编译失败：未声明 `AtomicU32` | 开放中，同作者另提 PR #3430 提供修复 |
| S1 | [#3430](https://github.com/zeroclaw-labs/zeroclaw/issues/3430) | 32位构建因遗漏 `AtomicU64` 定义失败 | 已关闭，由 PR #3409 后续补丁覆盖 |
| S1 | [#3402](https://github.com/zeroclaw-labs/zeroclaw/issues/3402) | 心跳机制注入陈旧 tool_result 导致智能体幻觉 | 已关闭，疑似由会话清理逻辑缺陷引起 |

> ✅ 多数 S1 及以上问题已有对应修复 PR 或纳入近期发布计划。

---

### 6. **功能请求与路线图信号**

高频新功能提案显示以下趋势：

- **MCP 深度集成**：#3153（Agent 子命令支持 MCP）、#3095（按需加载）、#3379（配置丢失）均指向 MCP 生态已成为核心痛点
- **多通道交付扩展**：#3361（Matrix 作为 Cron 输出通道）、#3396（WeCom 企业微信）、#3093（OpenClaw式节点发现）反映用户对异构通信渠道整合的期待
- **开发者体验增强**：#3316（verbose 调试模式）、#3267（跳过配对对话框）、#3414（环境变量覆盖 API URL）体现容器化部署与可观测性需求上升

结合当前 PR 合并节奏，**v0.1.9 版本将重点强化 MCP 运行时支持与跨平台稳定性**。

---

### 7. **用户反馈摘要**

- **正面反馈**：
  - “Chinese docs are finally complete! Great work on i18n.” （#3429 评论）
  - “Dashboard redesign is gorgeous—finally feels modern!” （#3445 评论）

- **负面痛点**：
  - “Switching to master broke my entire MCP setup overnight.” （#3397）
  - “No shell in Docker image makes git operations impossible.” （#3359）
  - “Tool schemas from MCP are huge and unused—wastes context.” （#3095）

> 用户普遍赞赏国际化与 UI 改进，但对**分支稳定性、生产就绪度、资源效率**仍有较高不满。

---

### 8. **待处理积压**

- **Issue #2953**（Open 超过6天）：Matrix 通道缺失问题长期未解，影响非技术用户使用意愿
- **PR #3401**（Bridge WebSocket 通道）：虽提出但未合并，关联 Issue #2816 悬而未决
- **Issue #3131**（分支策略不明确）：多次被提及，需官方发布分支管理规范文档

建议维护团队优先响应上述高关注度积压项，以提升社区信任度。

--- 

*数据来源：GitHub API @ 2026-03-14 18:00 UTC*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报 - 2026年3月14日**

---

### 1. **今日速览**
过去24小时内，PicoClaw 项目活跃度显著提升，共处理 Issues 35条、PRs 109条，新增 nightly 构建版本。社区围绕 Agent 架构重构、安全加固及多通道集成展开密集讨论，技术演进方向明确。整体代码贡献积极，配置与文档完善持续推进，项目处于快速迭代阶段。

---

### 2. **版本发布**
- **新版本发布**：`nightly: v0.2.2-nightly.20260313.19835b2f`
  - 类型：自动化夜间构建（不稳定，建议谨慎使用）
  - 全量变更日志：[GitHub Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.2...main)
  - 本次更新主要包含多项功能增强与安全修复，无已知破坏性变更。用户可关注后续稳定版发布计划。

---

### 3. **项目进展**
本周重点推进以下合并/关闭的关键 PR：

- **#90**（合并）：引入向量搜索支持记忆上下文与生命周期钩子，增强长期对话能力。
- **#757**（合并）：修复定时任务触发后 Agent 响应未送达通道的问题，提升 cron 模块可靠性。
- **#1417**（合并）：将 `TOOLS.md` 纳入 Agent 上下文，使用户自定义工具说明生效。
- **#1050**（合并）：修正 OpenAI 兼容提供商下 MiniMax 模型 `<think>` 标签错误输出问题。

上述改进强化了核心代理流程的健壮性与用户体验一致性。

---

### 4. **社区热点**
当前最受关注的议题集中在 **Agent 架构现代化** 与 **多平台集成痛点**：

- **#1218**: [Agent refactor] What an Agent is — 提出通过 `SOUL.md` 和 `AGENT.md` 定义 Agent 人格与行为边界，获 24 条评论，反映社区对 Agent 语义统一性的强烈诉求。
- **#1161**: 如何正确配置本地 Ollama 模型？— 用户反馈即使启动成功也无响应，暴露配置流程模糊与调试信息不足。
- **#1316**: Event-driven agent loop with hooks, interrupts, and steering — 提案将循环改造为事件驱动以支持中断与钩子机制，获 9 条评论 + 1 赞，标志架构升级进入实施阶段。
- **#1506**: Feishu 文件路径暴露需求 — 希望让非图片媒体文件路径对 Agent 可见，以便调用文件工具，体现跨模态交互的实际落地需求。

> 链接汇总：  
> [#1218](https://github.com/sipeed/picoclaw/issues/1218) | [#1161](https://github.com/sipeed/picoclaw/issues/1161) | [#1316](https://github.com/sipeed/picoclaw/issues/1316) | [#1506](https://github.com/sipeed/picoclaw/issues/1506)

---

### 5. **Bug 与稳定性**
高优先级 Bug 主要集中在配置加载、模型切换与安全策略方面：

| Issue # | 问题描述 | 严重度 | 状态 | 关联 PR |
|--------|--------|------|------|--------|
| #1150 | 模型池工厂 panic 导致请求死锁 | 高 | OPEN | 暂无 |
| #1493 | 新增模型需重启 gateway 才生效 | 中 | OPEN | 暂无 |
| #1491 | 加载 config.json 时报 "no API key configured" | 中 | OPEN | 暂无 |
| #1502 | Mistral 集成报 "Extra inputs..." 错误 | 中 | OPEN | 暂无 |

此外，多个安全类 Issue 被同步提出（如 #1530、#1529），强调默认配置存在暴露风险，已引起维护者重视并推动修复。

---

### 6. **功能请求与路线图信号**
用户明确提出的功能需求正逐步转化为开发行动：

- **Azure OpenAI 支持**（#1424）：已有 PR 待审，预计纳入近期版本。
- **语音 I/O 插件化**（#1503）：支持 STT/TTS 多后端，符合扩展通信渠道的战略方向。
- **Kimi For Coding 模型适配**（#1514）：通过 User-Agent 伪装绕过限制，显示对新兴推理模型的支持意愿。
- **MCP 服务器集成**（#1372）：OpenIM 插件请求反映生态扩展需求。

这些动向表明项目正从单机代理向开放协作平台演进。

---

### 7. **用户反馈摘要**
- **正面反馈**：Docker 环境运行稳定，西班牙语 README（#1448）获社区感谢；cron 性能优化（#1518）受到小型设备用户欢迎。
- **负面痛点**：
  - 配置项文档不全（#1489），尤其高级参数缺失说明，影响新用户上手。
  - 飞书在移动热点环境下消息间歇丢失（#1437），暴露网络切换场景下的通道稳定性问题。
  - 模型热加载失效（#1493）、查询字符串 token 泄露风险（#1530）等安全问题引发专业用户担忧。

---

### 8. **待处理积压**
以下重要 Issue 长期未获闭环，需优先关注：

- **#1150**: 模型池死锁问题自 3 月 5 日提出，尚无解决方案，可能影响高并发部署。
- **#528**: 基于 cron 的聊天调度功能异常，已超 20 天未更新，涉及核心交互逻辑。
- **#1242**: QQ 通道无法按 bindings 区分 Agent，影响多租户场景，仍未关闭。

建议维护团队分配资源优先处理此类阻塞性问题，以提升整体可信度。

--- 

*数据来源：[PicoClaw GitHub Repository](https://github.com/sipeed/picoclaw)*  
*生成时间：2026-03-14*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报 - 2026年3月14日**

---

### 1. **今日速览**
NanoClaw 在过去24小时内保持高度活跃的开发节奏，共处理18个Issue更新和37个PR更新，显示出强劲的社区贡献与工程推进力。核心团队持续聚焦于稳定性修复（如WhatsApp崩溃、重复消息）、安全性加固（WebFetch/WebSearch内容过滤）以及新功能拓展（Signal/Nostr通道集成）。整体项目健康度良好，无重大版本发布但多个关键问题已进入修复阶段。

---

### 2. **版本发布**
无新版本发布（Releases为空），当前主干仍处于功能迭代期，未进入稳定发布流程。

---

### 3. **项目进展**
- **合并PR**：无
- **关闭PR**：
  - [#1040] `fix: drain all per-group messages to prevent LIMIT 200 drop` ✅  
    解决消息积压导致的200条截断问题，确保所有历史消息被完整消费。
  - [#1037] `feat: add typed Tanren API client module` ✅  
    新增对Tanren worker-manager API的类型化客户端支持，提升内部通信可靠性。
  - [#1034] `Feat/trivy integration` ✅  
    在CI/CD中集成Trivy扫描，强化容器镜像与依赖项安全检测能力。
  - [#1036] & [#1032] `fix(security): sanitize WebFetch/WebSearch output` ✅  
    合并为[#1035]，通过PostToolUse钩子实现工具输出净化，防御间接提示注入攻击。

这些合并表明项目正系统性提升消息处理鲁棒性、API交互规范性和安全防护机制。

---

### 4. **社区热点**
最活跃的议题集中在**多通道集成**与**凭证验证优化**：
- **#1047 WhatsApp服务崩溃**（高优先级）：非macOS平台首次连接时因`process.exit()`导致服务不可恢复，已有[#1050]修复PR提交。
- **#1045 无效Claude token无前置校验**：用户反馈仅在首次发消息时才暴露token错误，[#1044][#1048]已提供即时验证方案。
- **#1015 是否支持其他LLM提供商？** 用户尝试Deepinfra模型失败，反映当前仅深度绑定Anthropic/Claude生态。
- **#908 FTS5对话索引搜索**（高优先级）：提出基于SQLite全文检索实现跨会话记忆召回，是下一代智能代理的关键能力。

相关PR链接：[#1044](https://github.com/qwibitai/nanoclaw/pull/1044), [#1050](https://github.com/qwibitai/nanoclaw/pull/1050)

---

### 5. **Bug 与稳定性**
按严重程度排序的重要问题：

| 问题 | 描述 | 状态 | 修复PR |
|------|------|------|--------|
| #1047 | WhatsApp连接后session logout或服务初始化时QR扫码导致进程退出 | High | ✅ [#1050] |
| #1046 | 定时任务容器未获得MCP凭证挂载（Gmail等） | High | ✅ [#1049] |
| #1020 | SDK返回多条结果时发送重复消息 | High | 待提PR |
| #1045 | .env写入后未校验Claude token有效性 | Medium | ✅ [#1044] |
| #960 (已关) | MCP环境变量未传递至容器 | High | 已修复 |

此外，[#1035]针对**WebFetch/WebSearch可能被注入恶意内容**的安全漏洞进行防护，属于主动防御措施。

---

### 6. **功能请求与路线图信号**
- **多通道扩展**：Signal（[#1016][#1023]）、Nostr DM（[#1041]）、WhatsApp（[#1051]）等多渠道接入需求集中涌现，显示用户对去中心化通信场景的强烈兴趣。
- **长期记忆增强**：[#979][#1043]推动从基础向量检索升级为混合BM25+向量+LanceDB的先进记忆系统，标志“智能体持续学习”成为下一重点方向。
- **LLM多供应商支持**：[#1015]直接质疑单一Anthropic依赖，暗示未来可能引入OpenAI、Cohere等替代选项以降低供应商锁定风险。

以上趋势表明NanoClaw正从单一WhatsApp助手向通用多模态智能代理平台演进。

---

### 7. **用户反馈摘要**
- **正面反馈**：用户认可快速响应机制，如[#1044]立即解决token验证延迟问题；[#1034]的Trivy集成获积极评价，体现对安全性的重视。
- **痛点集中**：
  - 多平台部署兼容性差（尤其Linux下WhatsApp崩溃）；
  - 缺乏早期凭证校验，导致设置体验不佳；
  - 文档中部分路径权限说明不清（如CLAUDE.md写只读路径）；
  - 对非英语母语者不够友好（如电话号码格式引导错误）。
- **使用场景**：主要用于自动化客服、个人助理、跨设备消息同步及实验性MCP工具链集成。

---

### 8. **待处理积压**
- **#908 FTS5 conversation indexing and search**（Open >3天，High Priority）：虽已有[#909]后续任务规划，但主索引实现尚未启动，影响智能体记忆能力升级。
- **#835 Telegram去重逻辑**（Status: Blocked）：涉及并发控制复杂，需进一步设计评审。
- **#527 Main group CLAUDE.md write access misstatement**（Low Priority但易修复）：文档准确性问题长期存在，建议优先澄清。

建议维护者优先处理#908与#835，这两者分别关乎核心记忆架构与多实例稳定性，是当前技术债的关键节点。

--- 

*数据来源：GitHub qwibitai/nanoclaw (截至2026-03-14)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报 - 2026年3月14日**

---

### 1. **今日速览**
IronClaw 在2026-03-14展现出高活跃度，过去24小时内新增与活跃的 Issues 达18条、PRs 达42条待合并，表明社区与开发者持续贡献。项目整体处于快速迭代阶段，重点推进配置系统统一、多租户安全隔离及 Web 通道体验优化。未发布新版本，但多项高风险安全修复已纳入当前开发流。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
今日共 **8 个 PR 被合并或关闭**，主要集中在配置管理、CLI 工具增强与安全加固：

- **#1157**: 修复了 Telegram 热激活过程中 owner_id 未绑定导致的 `null` 状态问题，提升持久化状态一致性（[链接](https://github.com/nearai/ironclaw/pull/1157)）
- **#1154 / #1153 / #1152**: 针对事件触发器与 SSE 解析的性能瓶颈（Issue #1142）及类型错误（Issue #1141），实现了缓冲区内存优化与 AuthError 类型保留，显著降低 O(n²) 分配开销（[#1154](https://github.com/nearai/ironclaw/pull/1154), [#1153](https://github.com/nearai/ironclaw/pull/1153), [#1152](https://github.com/nearai/ironclaw/pull/1152)）
- **#1146**: 排除 `ironclaw_safety` crate 进入发布流程，避免自动化构建失败（[链接](https://github.com/nearai/ironclaw/pull/1146)）

这些进展强化了系统的稳定性、可维护性与安全性基础架构。

---

### 4. **社区热点**
最活跃议题为 **#728**（Kimii-k2.5 模型兼容性）：用户报告温度参数强制为 1 且缺失 `reasoning_content` 字段，引发 API 返回 400 错误。该 Issue 获 3 个 thumbs up，反映对主流 LLM 支持一致性的高度关注（[链接](https://github.com/nearai/ironclaw/issues/728)）。

其次，**#1155** 提出 Slack Socket Mode 支持请求，强调无需暴露公网端口的私有部署需求，体现边缘场景集成诉求（[链接](https://github.com/nearai/ironclaw/issues/1155)）。

此外，CI 自动检测的高风险问题如 SSRF（#1103）和 ReDoS（#825）虽已被标记，但仍引发开发者对配置验证机制的讨论。

---

### 5. **Bug 与稳定性**
按严重性排序的关键 Bug：

| Issue | 描述 | 状态 | 相关 PR |
|------|------|------|--------|
| **#728** | Kimi-k2.5 要求 temperature=1 且缺少 reasoning_content | OPEN | 暂无 |
| **#846** | onboard 初始化时数据库写入失败，但服务仍可启动 | OPEN | 暂无 |
| **#1002** | Google Sheets 写入操作静默失败，表格为空 | OPEN | 暂无 |
| **#1139** | Safari 中 CJK IME 输入时 Enter 键误发消息 | OPEN | 暂无 |
| **#1136** | Anthropic OAuth token 过期导致间歇性认证失败 | OPEN | 暂无 |

其中 **#1139** 和 **#1136** 已有初步修复思路，预计将在本周内提交 PR；其余需进一步排查。

---

### 6. **功能请求与路线图信号**
多个新功能请求指向下一版本优先级：

- **图像文件支持**（#1122/#1123）：用户强烈希望上传与分析 JPEG/PNG 等图片，当前系统拒绝处理，可能纳入 v0.19 特性集。
- **Cron 调度可读化**（#1131）：通过 PR #1154 实现，将原始 cron 表达式转换为自然语言描述（如 “工作日早上9点”），极大改善用户体验。
- **Socket Mode Slack 支持**（#1155）：已有社区成员开始调研实现路径，可能作为扩展通道加入路线图。

结合近期 PR 投入方向，可见项目正从核心能力向生产就绪体验演进。

---

### 7. **用户反馈摘要**
- **痛点集中点**：第三方 LLM 兼容性问题（如 Kimi）、OAuth 令牌生命周期管理、跨平台 UI 行为不一致（Safari IME）是高频抱怨。
- **满意之处**：CLI 命令体系逐步完善（models/hooks/logs/gateway 子命令）、配置热重载机制推进顺畅，获得开发者好评。
- **使用场景洞察**：企业用户依赖 BYOK（自带密钥）与多租户隔离（#1118），而个人用户更关注 Telegram/Slack 等消费级渠道的无缝接入。

---

### 8. **待处理积压**
- **#1151**（Refactor owner scope）虽已提交，但涉及跨模块所有权模型重构，需深入审查，建议优先安排核心团队评审。
- **#744**（OpenAI Codex 支持）仍处于开放状态超一周，OAuth 实现复杂度高，建议评估是否拆分或调整范围。
- **#1051**（事件触发器永不执行）：多个独立测试者报告相同现象，可能隐藏深层逻辑缺陷，需紧急排查 routine_engine 匹配逻辑。

--- 

*数据来源：GitHub API · nearai/ironclaw · 2026-03-14*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026-03-14）**

---

### 1. **今日速览**  
LobsterAI 在过去 24 小时内保持较高活跃度，共处理 **12 条 Issue**（含 11 条新开/活跃）和 **9 个 PR**（全部已合并或关闭），无新版本发布。社区反馈集中在本地模型技能调用失效、任务执行异常及第三方 API 兼容性问题。整体开发节奏稳定，重点推进 OpenClaw 集成优化与网关性能提升。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  
今日共合并/关闭 **9 个 PR**，主要围绕 OpenClaw 生态整合与系统稳定性优化：

- **#408 & #401**: 实现 MCP Bridge 支持，使 LobsterAI 的 MCP 服务器（如 Tavily、GitHub）可在 OpenClaw 嵌入式代理模式下通过 HTTP 回调调用，并支持热重载（无需重启生效）[PR #408](https://github.com/netease-youdao/LobsterAI/pull/408)、[#401](https://github.com/netease-youdao/LobsterAI/pull/401)。
- **#395**: 显著优化 OpenClaw Gateway 启动速度，从超 180s 降至首次 ~85s、后续 ~15s，采用 esbuild 单文件打包与插件预编译机制[PR #395](https://github.com/netease-youdao/LobsterAI/pull/395)。
- **#409 & #403**: 新增定时任务对 OpenClaw 的支持，并移除内置沙箱相关代码以简化架构[PR #409](https://github.com/netease-youdao/LobsterAI/pull/409)、[#403](https://github.com/netease-youdao/LobsterAI/pull/403)。
- **#412 & #411**: 修复老用户重装后 OpenClaw 因 Docker 缺失报错的问题，并迁移记忆模块至 OpenClaw MEMORY.md 存储[PR #412](https://github.com/netease-youdao/LobsterAI/pull/412)、[#411](https://github.com/netease-youdao/LobsterAI/pull/411)。

这些改进强化了 LobsterAI 与 OpenClaw 的深度集成，提升了本地部署可用性与运维体验。

---

### 4. **社区热点**  
最活跃的 Issue 为 **#112（本地模型无法调用技能）**，作者 @wxpop 报告使用 Ollama + Qwen3:14b 时自然语言触发技能失败，而 API 模型正常——此问题影响本地推理用户核心功能，引发开发者高度关注。其次为 **#370（输入“你好”即超 token 限制）**，涉及上下文长度误判，可能由 prompt 拼接逻辑缺陷导致。两者均无有效解决方案，反映本地部署场景下技能执行链路的脆弱性。

> [Issue #112](https://github.com/netease-youdao/LobsterAI/issues/112) | [Issue #370](https://github.com/netease-youdao/LobsterAI/issues/370)

---

### 5. **Bug 与稳定性**  
按严重程度排序的关键问题如下：

| Issue ID | 问题描述 | 严重度 | 是否已有 Fix PR |
|--------|----------|--------|----------------|
| #112   | 本地模型无法通过自然语言调用技能 | 高 | 否 |
| #370   | 简单输入即触发 token 超限错误 | 中 | 否 |
| #405   | 本地 Ollama 模型不执行命令（如 ls） | 中 | 否 |
| #402   | 沙箱启动崩溃，进程异常退出 | 高 | 否 |
| #406   | 百度千帆 CodingPlan API 连接失败 | 中 | 否 |

其中 **#402（沙箱崩溃）** 和 **#112（技能调用失效）** 直接影响基础可用性，需优先排查；其余多与特定厂商 API 或配置相关。

---

### 6. **功能请求与路线图信号**  
用户明确提出的功能需求包括：
- 支持自定义 Skill 在对话框直接选择（#404）
- 优化定时任务 Cron 生成准确性（#407）
- 提升本地模型命令执行能力（#405）

结合近期 PR 趋势，MCP Bridge 和 OpenClaw 深度集成已成为明确方向。预计下一版本将聚焦 **技能调用统一抽象层** 和 **本地代理可靠性增强**，以解决当前高频痛点。

---

### 7. **用户反馈摘要**  
- **正面反馈**：认可 OpenClaw 运行环境与速度优势（#353 评论肯定其“常驻”特性优于轻量 Agent）。
- **负面痛点**：
  - 本地模型技能调用完全失效（#112、#405），挫伤离线部署意愿；
  - 任务提前终止（#358）、钉钉通知自动失效（#285）暴露后台调度与消息通道稳定性不足；
  - 阿里云百炼 GLM 4.5 报错“Claude run failed”（#399），推测为模型路由或参数映射错误。

用户普遍期待更稳定的本地闭环体验与跨厂商 API 兼容性保障。

---

### 8. **待处理积压**  
以下 Issue 持续超一周未获响应，建议维护者优先介入：

- **#112（本地技能调用失效）**：创建 16 天，影响核心功能，尚无复现或调试进展。
- **#285（钉钉通知失效）**：创建 8 天，涉及第三方集成可靠性，需排查 webhook 生命周期管理。
- **#358（任务提前完成）**：创建 3 天但状态未更新，疑似存在阻塞性 bug。

> 链接汇总：[#112](https://github.com/netease-youdao/LobsterAI/issues/112) | [#285](https://github.com/netease-youdao/LobsterAI/issues/285) | [#358](https://github.com/netease-youdao/LobsterAI/issues/358)

--- 

*数据来源：LobsterAI GitHub 仓库（netease-youdao/LobsterAI），统计时间窗：2026-03-13T00:00–2026-03-14T23:59 UTC+8*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyClaw 项目动态日报 (2026-03-14)**

---

### 1. 今日速览
过去24小时，TinyClaw 保持中等活跃度，共发布 v0.0.13 版本并处理了6个 PR 和2个 Issue。项目核心功能持续迭代，重点推进了 Agent 配置界面、内存系统及工作区优化。社区反馈集中在模块重构与功能扩展需求上。整体状态稳定，无重大阻塞问题。

---

### 2. 版本发布：v0.0.13

**发布日期**: 2026-03-14  
**主要更新**:

- **Agent 配置 UI 增强**：新增带标签页的管理界面，支持技能（skills）、系统提示词（system prompt）、记忆（memory）和心跳监控（heartbeat）的配置（[PR #207](https://github.com/TinyAGI/tinyclaw/pull/207)）。
- **Agent 部署逻辑重构**：统一工作区创建流程，采用符号链接（symlinks）管理技能文件，减少磁盘冗余（[PR #211](https://github.com/TinyAGI/tinyclaw/pull/211)）。
- **分层记忆系统上线**：引入基于 YAML 元数据的持久化记忆机制，支持按层级组织知识（[PR #209](https://github.com/TinyAGI/tinyclaw/pull/209)）。
- **系统提示词动态注入**：`AGENTS.md` 模板改为运行时内存加载，避免文件读写延迟与数据不一致（[PR #208](https://github.com/TinyAGI/tinyclaw/pull/208)）。

> ⚠️ **迁移说明**：本次更新无破坏性变更，但建议用户检查本地 `.tinyclaw/` 目录下是否有旧版技能文件副本，新版将自动通过符号链接引用共享技能库。

---

### 3. 项目进展

过去24小时内，共 **6 个 PR 被合并/关闭**，显著推进了 Agent 管理与系统架构优化：

| PR | 类型 | 贡献者 | 关键内容 |
|----|------|--------|---------|
| [#207](https://github.com/TinyAGI/tinyclaw/pull/207) | `feat(agents)` | @jlia0 | 新增 Agent 配置页面，实现多维度设置管理 |
| [#208](https://github.com/TinyAGI/tinyclaw/pull/208) | `feat(core)` | @jlia0 | 系统提示词改为内存动态构建，提升响应效率 |
| [#209](https://github.com/TinyAGI/tinyclaw/pull/209) | `feat(core)` | @jlia0 | 实现分层记忆系统，支持结构化知识存储 |
| [#211](https://github.com/TinyAGI/tinyclaw/pull/211) | `refactor` | @jlia0 | 重构 Agent 部署逻辑，统一目录结构并使用 symlinks |
| [#212](https://github.com/TinyAGI/tinyclaw/pull/212) | `feat(office)` | @mczabca-boop | 重新设计 live office 工作空间交互体验 |
| [#191](https://github.com/TinyAGI/tinyclaw/pull/191) | `feat` | @jlia0 | **品牌更名：TinyClaw → TinyAGI**（全代码库重命名） |

> ✅ **项目里程碑**：此次合并标志着从“轻量级代理框架”向“通用 AI Agent 基础设施”转型的关键一步，尤其在可观测性（heartbeat）、持久化记忆和模块化部署方面取得实质性突破。

---

### 4. 社区热点

- **[#57: Add Google chat, API, and MCP comms](https://github.com/TinyAGI/tinyclaw/issues/57)**  
  自 2026-02-14 提出，昨日仍有更新，反映用户对多平台通信集成的高度期待。诉求明确：希望支持 Google Chat、Slack 和 Microsoft Teams 的消息通道，以增强协作场景下的 Agent 实用性。该 Issue 虽未关闭，但结合近期 PR 中对通信抽象层的改进（如 heartbeat 机制），表明此方向可能在下个版本中落地。

- **[#191: Rebrand to TinyAGI](https://github.com/TinyAGI/tinyclaw/pull/191)**  
  尽管尚未合并，但该 PR 已引发关注，体现社区对项目定位升级的共识。品牌变更涉及包名、CLI 命令、环境变量等全栈调整，需谨慎处理兼容性。目前处于待审状态，预计将在后续小版本中跟进合并。

---

### 5. Bug 与稳定性

- **[#210] [CLOSED] ReferenceError: exports is not defined in ES module scope**  
  严重程度：高 | 组件：Agent 执行 | 修复状态：✅ 已关闭  
  用户报告在使用 `tinyclaw pairing approve <id>` 时遭遇 ES 模块兼容性问题，影响 Node.js v20.18.2 和 v24.1.0 环境。该 Bug 由 #205 的修复引入，经排查为模块导出语法冲突。维护者已快速响应并关闭 Issue，推测相关 PR 已在 v0.0.13 中修复。

> 💡 **稳定性提示**：建议用户在升级后运行 `npm audit fix` 或检查 `package.json` 中的 `type: "module"` 配置一致性。

---

### 6. 功能请求与路线图信号

- **多模态通信支持**（Issue #57）：用户强烈呼吁集成主流企业 IM 工具，显示 TinyClaw 正从开发工具向生产级协作平台演进。
- **Live Office 工作空间重设计**（PR #212）：反映团队对可视化协作界面的重视，可能与未来多 Agent 协同任务流相关。
- **品牌统一（TinyAGI）**（PR #191）：表明项目正在强化其作为“通用 AI Agent 中间件”的战略定位，有助于生态扩展。

> 📌 **预测**：下一版本（v0.0.14）有望优先解决通信协议抽象层，并逐步合并品牌更名 PR。

---

### 7. 用户反馈摘要

- **正面反馈**：用户赞赏新记忆系统的灵活性和 Agent 配置页面的直观性，认为“终于可以精细控制每个智能体的行为边界”。
- **负面反馈**：部分用户指出 ES 模块错误导致安装失败，尤其在 Windows WSL 环境中更为明显；另有开发者抱怨 CLI 命令过长（如 `tinyclaw agent configure --id ...`），建议简化交互路径。
- **使用场景洞察**：多数反馈来自团队协作型项目，强调多 Agent 管理、日志追踪和跨平台消息同步的实际价值。

---

### 8. 待处理积压

- **[#191] Rebrand to TinyAGI**  
  创建时间：2026-03-11 | 状态：Open | 评论：0  
  此为战略级变更，影响范围广，建议尽快安排代码审查与依赖更新测试，避免长期悬而未决。

- **[#57] Add Google chat, API, and MCP comms**  
  创建时间：2026-02-14 | 状态：Open | 热度持续上升  
  虽非紧急 Bug，但作为核心功能缺口，建议纳入 Q2 路线图讨论。

---

**数据来源**: [TinyAGI/tinyclaw GitHub Repository](https://github.com/TinyAGI/tinyclaw)  
**生成时间**: 2026-03-14T10:00:00Z

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报（2026-03-14）**

---

### 1. **今日速览**

Moltis 在过去24小时内保持中等活跃度，共处理11个新 Issues 和11个 PRs，无新版本发布。社区持续关注系统稳定性与用户体验优化，多个关键 Bug 被修复并合并，同时有关于集成 Lark/Feishu 的功能请求引发讨论。项目整体运行平稳，开发节奏正常推进。

---

### 2. **版本发布**

**无新版本发布**。

---

### 3. **项目进展**

以下为主要合并或关闭的 Pull Requests：

- **PR #418**（已合并）：修复了聊天中断后历史记录丢失的问题，确保 `chat.abort` 时保留部分输出和工具调用帧，提升会话连续性体验。
- **PR #406**（已合并）：为密码输入字段添加了浏览器友好的 autofill 属性，解决了 #183 提出的问题，改善首次使用体验。
- **PR #415**（已合并）：允许在认证重置后继续完成 onboarding 流程，修复 #316 中“无法重置认证”导致的访问障碍。
- **PR #409**（已合并）：优化了 Cron 设置界面的文案清晰度，区分 `Run Once` 与定时任务选项，提升用户理解效率。
- **PR #402**（已合并）：修正了文档中 QMD 安装指引错误，明确其与 Moltis 的集成方式，避免混淆。

这些合集体现了对用户体验、文档准确性和核心流程稳定性的重点投入。

> 链接汇总：  
> [PR #418](https://github.com/moltis-org/moltis/pull/418) | [PR #406](https://github.com/moltis-org/moltis/pull/406) | [PR #415](https://github.com/moltis-org/moltis/pull/415) | [PR #409](https://github.com/moltis-org/moltis/pull/409) | [PR #402](https://github.com/moltis-org/moltis/pull/402)

---

### 4. **社区热点**

当前最活跃的话题是 **#383：Support Lark/Feishu**（👍2），由 @memwey 提出，呼吁支持国内主流协作平台集成，反映出用户希望扩展 Moltis 在多工作流环境下的适用性。该 Issue 虽尚未有对应 PR，但已有初步关注，可能成为未来功能扩展方向。

其次，**#426（wrong address in nodes）** 和 **#427–#428（节点执行混乱与 vault 密封状态下的上下文泄露）** 均涉及 Agent 对节点路径的理解错误及权限控制问题，显示底层执行逻辑仍需强化一致性。

> 相关链接：  
> [#383: Support Lark/Feishu](https://github.com/moltis-org/moltis/issues/383) | [#426: wrong address in nodes](https://github.com/moltis-org/moltis/issues/426)

---

### 5. **Bug 与稳定性**

按严重程度排序的关键 Bug 报告如下：

| Issue # | 类型 | 描述 | 是否已有 Fix PR |
|--------|------|------|----------------|
| #427 | 高 | Agent 反复误解节点路径，导致命令执行失败 | 否（但 #432 尝试修复 exec tool 参数暴露逻辑） |
| #426 | 中高 | 节点地址解析错误，影响工具调用准确性 | 否 |
| #430 | 中 | 代理无法使用 cron 相关工具 | 否 |
| #428 | 中 | Vault 密封状态下仍可查看完整聊天记录，存在安全风险 | 否 |
| #317 | 低 | Jinja 模板报错：系统消息顺序错误 | ✅ 已由 #431 修复 |

其中 **#431** 针对 Jinja 模板错误提交了补丁，合并后可缓解模型兼容性问题，尤其影响基于 llama.cpp 的 GGUF 部署场景。

> 相关 PR：[#431](https://github.com/moltis-org/moltis/pull/431)

---

### 6. **功能请求与路线图信号**

- **Lark/Feishu 支持**（#383）成为显性需求，尽管暂无直接实现计划，但其获得点赞表明国际化/本地化集成可能是下一阶段重点。
- **Cron 工具可用性增强**（#430）暗示现有调度机制可能存在配置或接口缺陷，需进一步验证。
- **自定义 GGUF 模型热加载**（PR #417 开放中）反映本地 LLM 部署场景正在深化，未来或将支持运行时模型更新。

目前尚无明确路线图公开，但上述需求已被纳入待办范畴，且已有技术方案探索（如 #417）。

---

### 7. **用户反馈摘要**

- **痛点集中点**：
  - 节点路径识别不稳定，尤其在复杂拓扑中易出错（#426, #427）；
  - 中断会话后历史丢失令人困扰（已在 #418 修复）；
  - 密码管理器不识别 onboarding 字段（#183，已通过 #406 解决）；
  - 文档误导（QMD 安装说明错误，#402 已修正）。

- **积极反馈**：
  - 用户对界面文案优化（如 Cron 设置）表示认可；
  - 安全相关改进（如认证重置流程）获得正面响应。

整体反馈偏向建设性，体现用户深度参与意愿。

---

### 8. **待处理积压**

- **#383（Support Lark/Feishu）**：自 3月10日提出，持续活跃，建议维护团队评估第三方 API 接入可行性。
- **#427 & #426（节点路径问题）**：同属高优先级，若短期内无进展，可能影响 Agent 可靠性口碑。
- **#430（Cron 工具失效）**：创建于 3月13日，尚未分配负责人，需确认是否为回归问题。

建议优先指派熟悉 Node 执行引擎的开发者介入排查节点相关问题。

---

**总结**：Moltis 今日表现稳健，核心流程稳定性获巩固，社区需求清晰可见。建议在保障基础体验的同时，逐步规划 Lark/Feishu 等生态扩展，以增强产品竞争力。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目动态日报（2026-03-14）**

---

### 1. **今日速览**  
过去24小时 CoPaw 社区活跃度显著提升，共处理 **94 条 Issues/PRs**（Issues: 50, PRs: 44），其中 **9 个 Issue 被关闭**，**23 个 PR 完成合并或关闭**。核心议题集中在 **飞书渠道消息去重、定时任务时区一致性、技能上下文管理** 等问题，同时新频道集成（如 Nextcloud Talk）和 CLI 升级功能持续推进。整体项目处于高维护状态，用户反馈集中指向稳定性和多模态支持需求。

---

### 2. **版本发布**  
无新版本发布（截至 2026-03-14）。

---

### 3. **项目进展**  

#### ✅ **已合并/关闭的重要 PR**
| PR # | 类型 | 贡献者 | 内容摘要 | 关联 Issue |
|------|------|--------|----------|------------|
| [#1432](https://github.com/agentscope-ai/CoPaw/pull/1432) | `feat(agents)` | @howyoungchen | 在 `env_context` 中固定注入 UTC 时间上下文，解决弱模型不主动调用 `get_current_time` 工具导致 cron 调度时区错误问题（Issue #1346、#1387） | #1346, #1387 |
| [#1433](https://github.com/agentscope-ai/CoPaw/pull/1433) | `doc(provider)` | @pan-x-c | 为 Ollama 和 LM Studio 添加上下文长度设置警告提示 | #1416, #1137, #1390 |
| [#1396](https://github.com/agentscope-ai/CoPaw/pull/1396) | `fix(skills)` | @Alexxigang | 修复内置技能与自定义技能重复显示问题 | #1370 |
| [#1440](https://github.com/agentscope-ai/CoPaw/pull/1440) | `fix(tests)` | @Leirunlin | 清理仅用于技能的测试文件 | — |

> **关键进展**：时间上下文统一机制落地，技能去重逻辑修复，Ollama 使用体验文档化增强。

---

### 4. **社区热点**  

#### 🔥 **高互动 Issue / PR**
- **[Issue #1346](https://github.com/agentscope-ai/CoPaw/issues/1346)**：关于“为何不在系统提示中固定嵌入本地时间”。该问题获 7 条评论，反映用户对弱模型忽略工具调用的普遍痛点，直接推动了 PR #1432 的合并，成为今日最大技术共识。
- **[PR #1451](https://github.com/agentscope-ai/CoPaw/pull/1451)**：将 cron 默认调度时区改为本地时区，回应 Issue #1387 诉求，预计将极大改善跨国用户使用体验。
- **[Issue #1059](https://github.com/agentscope-ai/CoPaw/issues/1059)**：提出 ACP（Agent Communication Protocol）支持需求，希望与 Codex、Claude Code 等 IDE 深度集成，被视为未来多智能体协作的关键信号。

> **深层诉求**：用户强烈希望降低模型行为不可控性（如不主动调用工具）、提升跨平台/多语言场景下的配置稳定性。

---

### 5. **Bug 与稳定性**  

#### ⚠️ **严重 Bug（按优先级排序）**
| Issue # | 问题描述 | 影响范围 | 是否已有 Fix PR |
|--------|--------|--------|----------------|
| [#1385](https://github.com/agentscope-ai/CoPaw/issues/1385) | CPU 占用飙升至 100% 且不回落（Ubuntu 25.10, v0.0.7） | Core / MCP 模块 | ✅ PR #1385 关联修改已提交（日志指向 `read_file` 函数） |
| [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | 飞书频道“延迟回复”：Bot 重复回答上一问 | Feishu Channel | ❓ 尚无公开 PR，但 Issue #1403（飞书消息去重）为同因不同表现 |
| [#1388](https://github.com/agentscope-ai/CoPaw/issues/1388) | GrsAI API 返回 "INVALID_ARGUMENT"，实际 token 未消耗 | Model Provider | — |
| [#1437](https://github.com/agentscope-ai/CoPaw/issues/1437) | Compactor 组件“幻觉压缩”：虚构未发送消息 | Memory System | — |

> **趋势分析**：飞书渠道的消息处理逻辑仍是高频故障点；Ollama 局域网连接问题（#1458）和 Windows 磁盘跨区移动失败（#1431）暴露路径兼容性问题。

---

### 6. **功能请求与路线图信号**  

#### 💡 **新兴需求与潜在功能方向**
| 请求来源 | 功能简述 | 相关 PR / 进展 |
|--------|--------|----------------|
| [Issue #1059](https://github.com/agentscope-ai/CoPaw/issues/1059) | ACP 协议支持，实现 IDE 双向通信 | 尚无实现，但被视为长期战略方向 |
| [Issue #1085](https://github.com/agentscope-ai/CoPaw/issues/1085) | 小艺开放平台频道接入 | — |
| [Issue #1045](https://github.com/agentscope-ai/CoPaw/issues/1045) | 网页 Console 支持图片上传与多模态调用 | 前端适配待优化 |
| [PR #1460](https://github.com/agentscope-ai/CoPaw/pull/1460) | Nextcloud Talk 频道集成 | 首个 Webhook 类渠道扩展 |

> **路线图洞察**：项目正从单一 AI Agent 向 **多模态交互 + 多平台接入 + 多智能体协同** 演进，企业集成（如企业微信、钉钉、Nextcloud）成为重点拓展领域。

---

### 7. **用户反馈摘要**  

#### 📌 **真实使用场景与情绪分析**
- **正面反馈**：
  - “PR #1432 解决了我们团队 cron 任务总是用错时间的问题！终于不用手动传参了。”（#1387 评论）
  - “技能去重后界面清爽多了。”（#1370）

- **负面痛点**：
  - “飞书群里 Bot 经常答非所问，重启也没用，严重影响工作效率。”（#1345）
  - “离线部署时千问模型连不上，但 DeepSeek 可以，怀疑是证书或代理策略差异。”（#1453）
  - “Ollama 局域网服务明明能访问，CoPaw 却说连不上，浪费我调试半天。”（#1458）

> **共性不满**：对复杂环境（如离线、局域网、多时区）下的健壮性信心不足，期待更完善的错误提示与自动适配。

---

### 8. **待处理积压**  

#### ⏳ **长期悬而未决的重要 Issue**
| Issue # | 问题描述 | 最后活跃 | 建议行动 |
|--------|--------|--------|--------|
| [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | 飞书延迟回复 | 2026-03-13 | 需排查消息队列去重机制，可能与 #1403 同源 |
| [#1059](https://github.com/agentscope-ai/CoPaw/issues/1059) | ACP 支持 | 2026-03-13 | 应评估 RFC 可行性，明确技术边界 |
| [#1385](https://github.com/agentscope-ai/CoPaw/issues/1385) | CPU 持续满载 | 2026-03-13 | 虽提交 PR，但未合并，需验证修复效果 |

> **提醒**：飞书渠道问题已出现多次（#1345、#1403），建议组建专项小组排查消息生命周期管理机制。

---

**总结**：CoPaw 在 2026-03-14 表现出强劲的社区响应力与技术迭代速度，尤其在时间上下文标准化和技能生态治理方面取得突破。下一步应聚焦 **飞书消息可靠性** 和 **Ollama 连接稳定性** 两大高频痛点，同时规划 ACP 等前瞻性架构升级。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报（2026-03-14）**

---

### 1. **今日速览**

过去24小时内，ZeptoClaw 保持了较高的开发活跃度：共处理8条 Issues（6条已关闭）和6条 Pull Requests（3条待合并），整体进展平稳。核心团队重点推进了安全性加固、CLI交互体验优化以及ACP协议支持等关键方向。无新版本发布，但多个重要功能已通过PR进入待合并队列。项目在稳定性和用户体验方面持续迭代，社区参与度保持稳定。

---

### 2. **版本发布**

*无新版本发布*

---

### 3. **项目进展**

本周关键进展集中于**安全默认值强化**与**CLI交互体验升级**两大方向：

- **PR #353**（已合并）：实现交互式CLI审批提示、流执行一致性修复及更安全的默认配置。该PR解决了Issue #347中提出的默认代理模式过于宽松的问题，引入了TTY检测机制和会话级信任覆盖，显著提升了非交互式环境下的安全性。
- **PR #349**（已合并）：确保AgentLoop构造函数正确响应配置文件中的`streaming`默认设置，修复了硬编码`false`导致配置失效的问题。
- **PR #342**（已合并）：将CLI输出改为默认流式传输，并新增响应元数据页脚（显示token数、工具调用耗时等），极大提升了实时反馈体验。
- **PR #356**（待合并）：引入ACP（Agent Client Protocol）的stdio与HTTP通道实现，为外部客户端（如acpx）提供标准化接入方式，标志着ZeptoClaw正逐步向模块化、协议化架构演进。

> 链接：[PR #353](https://github.com/qhkm/zeptoclaw/pull/353) | [PR #349](https://github.com/qhkm/zeptoclaw/pull/349) | [PR #342](https://github.com/qhkm/zeptoclaw/pull/342)

---

### 4. **社区热点**

当前最活跃的议题是 **Issue #347**（开放状态），作者@qhkm指出当前默认配置将ZeptoClaw置于自主模式且禁用审批策略，存在安全隐患。此问题直接关联到近期多个已关闭的Bug Issue（如#348、#354），反映出用户对**安全默认行为**的高度关注。尽管已有PR #353部分解决该问题，但用户仍期待更严格的默认策略落地。

另一活跃点为 **Issue #334**（由@ceeray提交），提议将ZeptoClaw加入Shelldex目录，体现社区对工具可见性与生态整合的需求。

> 链接：[Issue #347](https://github.com/qhkm/zeptoclaw/issues/347) | [Issue #334](https://github.com/qhkm/zeptoclaw/issues/334)

---

### 5. **Bug 与稳定性**

本周期共报告4个已关闭的严重Bug，均已完成修复：

| 优先级 | 问题描述 | 所属模块 | 是否已修复 |
|--------|--------|----------|------------|
| P1-critical | 文件写入/编辑内容扫描范围过宽，导致误报 | safety | ✅ PR #354 |
| P2-high | 默认代理模式为自主模式，审批策略未启用 | agent/core | ✅ PR #353 + Issue #347 |
| P2-high | 流模式下before_tool/after_tool钩子未执行 | agent/loop | ✅ PR #351 |
| P2-high | CLI信任会话未强制要求TTY检测 | cli/session | ✅ PR #352 |

此外，**PR #355** 正在修复Discord频道对纯图片消息的处理逻辑，防止因缺少文本内容导致异常中断。

> 链接：[PR #355](https://github.com/qhkm/zeptoclaw/pull/355) | [Issue #348](https://github.com/qhkm/zeptoclaw/issues/348)

---

### 6. **功能请求与路线图信号**

- **ACP协议支持**（PR #356）：表明项目正积极构建标准通信接口，未来可能支持插件化集成或与其他AI代理平台对接。
- **交互式审批流程**（Issue #350 / PR #353）：确认下一阶段将强化人机协作机制，尤其在本地CLI场景下提供更自然的授权方式。
- **Shelldex收录申请**（Issue #334）：反映用户希望提升工具在开发者社区的曝光度，暗示项目具备被纳入主流工具生态的潜力。

这些动向共同指向一个清晰的技术路线：**从单机工具向可组合、可标准化的智能体基础设施演进**。

---

### 7. **用户反馈摘要**

主要痛点集中在以下三点：

1. **默认安全性不足**：多位贡献者（包括维护者本人）强调“开箱即用即危险”的现状需立即改善；
2. **非交互式环境缺乏保护**：远程或自动化部署时无法有效拦截高风险操作；
3. **反馈延迟影响调试效率**：此前非流模式导致长响应阻塞终端，现虽已优化，但仍保留`--no-stream`选项供高级用户使用。

正面反馈则高度认可新元数据页脚的实用性，认为其显著提升了工具使用透明度。

---

### 8. **待处理积压**

暂无长期未响应的关键Issue。但建议关注以下两类任务：

- **PR #356（ACP通道）**：虽技术先进，但尚未进入代码审查阶段，需推动尽快完成评审与合并；
- **Issue #347**：尽管相关PR已合并，但其核心诉求（更保守的默认策略）仍需通过文档更新或配置迁移指南明确告知用户。

--- 

*数据来源：GitHub @qhkm/zeptoclaw（截至2026-03-14 00:00 UTC+8）*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*