# AI 开源趋势日报 2026-06-09

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-09 00:36 UTC

---

# AI 开源趋势日报 · 2026-06-09

---

## 第一轮：AI 相关性过滤

**略去的非 AI 项目（Trending）：**
- `refactoringhq/tolaria` — 桌面 Markdown 知识库管理工具，与 AI 无关
- `TapXWorld/ChinaTextbook` — PDF 教材数据集，非 AI 项目

**其余项目均保留，进入分类。**

---

## 今日速览

1. **AI Agent 技能生态全面爆发**：今日 Trending 前四中三个项目围绕"Agent Skill"展开——从跨平台信息聚合（last30days-skill）到 Google 官方 Agent Skills、再到 Agent-Reach 让 Agent 浏览全网，"给 Agent 装技能"正在成为开发者最热主题。
2. **本地 LLM 工具链持续升温**：whichllm 以"一键测试本地 LLM 性能"迅速登榜，反映出开发者对本地模型选型效率的强烈需求，与近期 Kimi-K2.6、GLM-5.1 等模型的密集发布相呼应。
3. **AI 记忆与 Knowledge Graph 成为新焦点**：MemPalace（记忆系统）、Cognee（知识图谱记忆）、claude-mem（跨会话持久上下文）同时出现在热门列表，标志着 Agent 的"长期记忆"问题正从研究走向工程化落地。
4. **向量数据库赛道竞争白热化**：TurboVec 以 Rust 实现高性能向量索引登榜，而 VectifyAI/PageIndex 提出"无向量推理型 RAG"新范式，显示 RAG 技术正在超越传统向量检索，向推理增强方向演进。
5. **全栈 Agent 工具链加速整合**：从前端（CopilotKit/AG-UI）到后端（goose 多 LLM Agent）、从 CLI 教程（claude-howto）到 Job Search 垂直应用（career-ops），2026 年上半年的 AI 开源生态已从"模型竞争"全面进入"Agent 基础设施建设"阶段。

---

## 各维度热门项目

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|------|-------|------|
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | +3,558 今日 ⬆️ | 跨平台 Agent 技能插件：自动检索 Reddit、X、YouTube、HN、Polymarket 等多源信息并生成综合摘要，今日 Trending 冠军，代表"Agent 技能化"趋势的爆发高峰。 |
| [aaif-goose/goose](https://github.com/aaif-goose/goose) | +699 今日 | 用 Rust 构建的开源可扩展 AI Agent，支持安装、执行、编辑和测试任意 LLM，是"本地优先+多模型"Agent 框架的代表，今日登榜体现开发者对高性能原生 Agent 运行时的好奇。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 34,130 ⭐ (+378 今日) | "Agent 前端栈"与 AG-UI 协议制定者，提供 React/Angular/Mobile 等端到端的生成式 UI 框架，AG-UI 协议的生态影响力持续扩大。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 50,508 ⭐ (+308 今日) | 基于 Claude Code 构建的 AI 求职系统，14 种技能模式、Go 看板、PDF 生成、批量处理——是 Agent 垂直场景落地的典型样本。 |
| [danielmiessler/Personal_AI_Infrastructure](https://github.com/danielmiessler/Personal_AI_Infrastructure) | +62 今日 | 面向个人用户的 Agentic AI 基础设施，核心理念是"放大人类能力"，由安全领域知名研究者 Daniel Miessler 发起，代表个人 AI 配置文件的兴起。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | +679 今日 | 让 AI Agent"看见整个互联网"：一行 CLI 即可读取和搜索 Twitter、Reddit、YouTube、GitHub、Bilibili、小红书，零 API 费用，解决了 Agent 外部数据获取的核心痛点。 |
| [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | +164 今日 | PM 技能市场：100+ Agentic 技能、命令和插件，覆盖产品发现、战略、执行、发布和增长全生命周期，说明 Agent 技能正在向专业化、行业化发展。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 43,880 ⭐ | 轻量级开源 AI Agent，面向工具、聊天和工作流场景，由 HKUDS 团队推出，是轻量化 Agent 路线的代表。 |

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 说明 |
|------|-------|------|
| [google/skills](https://github.com/google/skills) | +461 今日 | Google 官方 Agent Skills 仓库，为 Google 产品和技术提供标准化 Agent 技能包，巨头入场规范 Agent 技能生态的信号意义重大。 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | +143 今日 | 一键测试本地 LLM 在自身硬件上的实际性能，基于时效感知的 benchmark 而非参数量排名，直击本地部署选型的核心痛点。 |
| [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | +312 今日 | Claude Code 可视化教程，从基础概念到高级 Agent、含即用模板，反映开发者对 Claude Code Agent 开发范式的学习需求旺盛。 |
| [ollama/ollama](https://github.com/ollama/ollama) | 173,621 ⭐ | 本地 LLM 运行的事实标准，支持 Kimi-K2.6、GLM-5.1、DeepSeek、Qwen 等主流模型，今日仍在持续获得关注。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 82,251 ⭐ | 高吞吐、内存高效的 LLM 推理与服务引擎，生产级部署的首选方案。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 97,788 ⭐ | 让网站对 AI Agent 可访问，自动化在线任务，Agent+浏览器自动化的标杆项目。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 130,319 ⭐ | 大规模网页搜索、抓取和交互 API，为 Agent 提供结构化网络数据输入。 |
| [nocobase/nocobase](https://github.com/nocobase/nocobase) | 22,676 ⭐ | 开源 AI + 无代码平台，AI 驱动业务系统快速构建，低代码与 AI 融合的代表性框架。 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|------|-------|------|
| [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) | +1,729 今日 | 基于 TurboQuant 构建的向量索引，Rust 实现含 Python 绑定，今日 Trending 亚军，代表高性能向量检索的工程化新尝试。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 32,774 ⭐ | "无向量、基于推理的 RAG"新范式——PageIndex 用推理替代传统向量检索实现文档索引，挑战 RAG 的传统技术路线。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 11,894 ⭐ | MLsys'26 收录：在个人设备上运行快速、精确、100% 私有的 RAG，节省 97% 存储，代表端侧 RAG 的前沿方向。 |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | +170 今日 | 开源 AI 记忆系统，benchmark 排名第一且免费，将 Agent 的长期记忆问题从研究推向实用。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 81,297 ⭐ | 跨会话持久上下文系统，捕获 Agent 行为、AI 压缩后注入未来会话，兼容 Claude Code/OpenClaw/Codex 等主流 Agent。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 58,077 ⭐ | AI Agent 通用记忆层，为多模型 Agent 提供统一的长期记忆接口。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 17,729 ⭐ | 开源 AI 记忆平台，基于自托管知识图谱引擎，为 Agent 提供跨会话的持久长期记忆。 |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | 27,780 ⭐ | RAG 高级技术合集，每种技术含详细 Notebook 教程，是 RAG 技术学习的一站式资源。 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 说明 |
|------|-------|------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 187,381 ⭐ | "与你一起成长的 Agent"，Nous Research 推出的自适应 Agent 框架，长期占据热门榜单。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,419 ⭐ | 🤗 Transformers：文本、视觉、音频、多模态模型的定义和训练框架，生态基石级项目。 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 72,001 ⭐ | 100+ LLM & VLM 统一高效微调工具，ACL 2024 收录，微调领域的事实标准之一。 |
| [bytedance/deer-flow](https://github.com/bytedance/bytedance/deer-flow) | 70,749 ⭐ | 字节开源的长时域 SuperAgent 框架，集成沙箱、记忆、工具、技能和子 Agent，代表大厂 Agent 全栈能力的开源输出。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,068 ⭐ | LLM 评测平台，支持 100+ 数据集上的多模型横向对比，模型选型的重要参考。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,258 ⭐ | 面向系统工程师的 LLM 推理服务课程：在 Apple Silicon 上构建迷你 vLLM + Qwen，代表 LLM 系统工程的学术教育方向。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 195,609 ⭐ | 机器学习开源框架的奠基者，持续维护并整合最新 AI 能力。 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 说明 |
|------|-------|------|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 210,835 ⭐ | Agent 性能优化系统：集成 Skills、Instincts、Memory、Security 和研发优先开发，支持 Claude Code/Codex/Cursor 等主流 Agent，stars 总量最高（21万+），是 Agent 工程实践的标杆项目。 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 65,455 ⭐ | "Bash is all you need"——从零构建类 Claude Code 的 Agent Harness，是 Agent 开发入门的经典教程级项目。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 47,073 ⭐ | AI 生产力工作室：智能聊天、自主 Agent、300+ 助手、统一接入主流前沿 LLM，多模态桌面 AI 应用的代表。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,158 ⭐ | 开源超级 AI 助手 & Agent Harness，规划任务、运行工具和技能、自主成长，前身为 chatgpt-on-wechat，是中文社区最活跃的 Agent 项目之一。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 41,382 ⭐ | LLM 驱动的 A 股/港股/美股智能分析系统，零成本定时运行，纯白嫖方案，AI+金融垂直场景的热门实践。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 25,287 ⭐ | AI 从任意文档生成可编辑 PPT：原生形状和动画、语音讲解旁白、支持自定义模板，AI 办公自动化的具体落地产品。 |
| [openai/plugins](https://github.com/openai/plugins) | +296 今日 | OpenAI 官方插件仓库今日重新进入 Trending，可能与近期 OpenAI 产品更新或 Agent 生态扩展有关，值得观察。 |
| [langgenius/dify](https://github.com/langgenius/dify) | 144,442 ⭐ | 生产级 Agentic 工作流开发平台，持续保持高关注度，是企业级 AI 应用构建的主流选择。 |

---

## 趋势信号分析

**今日最核心的信号是"Agent 基础设施的纵向深化"**。如果说 2025 年是 Agent 框架的"百框大战"，那么 2026 年 6 月的热榜清晰显示战场已转移——开发者不再争论"用哪个 Agent 框架"，而是聚焦于 Agent 的具体能力组件：**信息获取**（Agent-Reach、last30days-skill）、**长期记忆**（MemPalace、claude-mem、cognee）、**前端交互**（CopilotKit/AG-UI）、**技能市场**（pm-skills、google/skills）和**本地推理**（whichllm、goose）。这种从"框架竞争"到"组件生态"的转变，标志着 AI Agent 正在经历类似 Web 开发从"框架之争"到"微服务组件化"的演化路径。

值得关注的新方向：一是**无向量 RAG**（PageIndex）挑战传统向量检索范式，用推理替代嵌入可能带来 RAG 架构的根本性变化；二是**端侧 RAG**（LEANN）以 97% 存储压缩率实现设备端私有化 RAG，与近期端侧模型的成熟直接相关。此外，OpenAI 官方 plugins 仓库突然登榜（+296 stars），结合近期 GPT-5/GPT-5.5 的传闻，可能预示 OpenAI 即将强化其 Agent 插件生态。

---

## 社区关注热点

- **🔑 Agent 技能生态标准化**：`google/skills` 和 `pm-skills` 同日登榜，说明"Agent 技能"正在从个人 hack 走向平台级生态。建议关注 OpenAI plugins 仓库的动态，两大巨头同时布局 Agent 技能标准化，可能催生类似"App Store for Agents"的新生态赛道。
- **🧠 Agent 记忆进入工程化阶段**：`MemPalace`、`claude-mem`、`cognee`、`LEANN` 四个记忆/知识项目同日上榜，长期记忆正在成为 Agent 开发的核心瓶颈和竞争焦点。持久化、高效压缩、跨会话上下文注入是三大技术关键词。
- **⚡ 本地 LLM 工具链爆发**：`whichllm` 一键性能测评 + `goose` Rust Agent + `skyzh/tiny-llm` 系统工程课程，本地 AI 开发者工具链正在补全"最后一公里"，与 Kimi-K2.6、GLM-5.1 等近期密集发布的国产模型形成供需共振。
- **🌐 "Let Agent Browse the Web"成为刚需**：`Agent-Reach` 和 `firecrawl`、`browser-use` 的同时高热，说明为 Agent 提供可靠的外部信息获取能力是当前最具实际需求的基础设施缺口，任何能让 Agent 稳定访问多源数据的工具都值得关注。
- **🏭 大厂开源策略转向 Agent 基础设施**：字节（deer-flow）、Google（skills）、百度（PaddleOCR for RAG）同日出现在热榜，显示 AI 大厂开源策略已从"秀模型肌肉"转向"构建 Agent 时代的开发者粘性"，这一趋势将在下半年持续加速。

---

*数据来源：GitHub Trending (2026-06-09) + GitHub Topic Search API | 分析工具：OWL Daily Trend Report*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*