# AI 开源趋势日报 2026-06-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-11 00:42 UTC

---



# 🤖 AI 开源趋势日报 · 2026-06-11

---

## 1. 今日速览

今日 GitHub AI 开源生态的最大信号是 **"Agent Skills" 范式的全面爆发**——从 Google、Addy Osmani 到独立开发者，多个 agent-skill 相关仓库同时登上今日热榜，合计单日新增 stars 超过 5,000，标志着 AI 编码智能体正从"能不能用"走向"如何标准化、工程化"的新阶段。**Claude Code 生态持续扩张**，围绕它的教程、记忆增强、上下文搜索工具形成了一条完整的周边产业链。与此同时，**RAG 与 Agent 的融合**进入深水区，mem0、cognee 等项目将"记忆"和"知识图谱"提升为 Agent 基础设施的核心组件。端侧推理（Picovoice picollm）和 LLM 训练入门（train-llm-from-scratch）也获得了可观的关注，说明社区对"自主可控"和"去中心化 AI"的兴趣持续升温。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 说明 |
|------|-------|------|
| [obra/superpowers](https://github.com/obra/superpowers) | ⭐0 (+1,104 today) | 一套完整的 Agentic Skills 框架与软件开发方法论，今日热榜中增速第二，主打"让 AI agent 像超能力一样工作"的工程化理念。 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ⭐0 (+821 today) | Google 资深工程师 Addy Osmani 出品，面向 AI 编码 Agent 的生产级工程技能集，定义了 Agent Skills 的标准化实践。 |
| [google/skills](https://github.com/google/skills) | ⭐0 (+211 today) | Google 官方 Agent Skills 仓库，覆盖 Google 产品与技术的 Agent 技能，与 addyosmani/agent-skills 同日登榜，形成"民间+官方"共振。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐82,458 | 业界最主流的 LLM 推理与服务引擎，持续高 star 量证明其在生产部署中的核心地位。 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐173,788 | 本地 LLM 运行的事实标准，支持 Kimi-K2.6、DeepSeek、Qwen 等最新模型，降低大模型使用门槛。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐98,147 | 让 AI Agent 能自动操作网页的浏览器自动化工具，是 Agent 从"对话"走向"行动"的关键基础设施。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐131,147 | 面向 Agent 的网络规模搜索与爬取 API，为 Agent 提供结构化的互联网数据接入能力。 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | ⭐26,975 | Google Workspace 命令行工具，内置 AI Agent Skills，将 Drive、Gmail、Calendar 等办公工具 Agent 化。 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|------|-------|------|
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | ⭐0 (+2,535 today) | 今日热榜 **新增 stars 最高** 的项目。一个 AI Agent 技能，能跨 Reddit、X、YouTube、HN、Polymarket 和全网研究任意主题并生成综合摘要，代表了"Agent 即研究员"的新范式。 |
| [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | ⭐0 (+804 today) | PM Skills Marketplace，提供 100+ 个 Agentic 技能、命令和插件，覆盖从产品发现到增长的全流程，将 Agent 能力产品化为"技能市场"。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐189,953 | "与你一起成长的 Agent"，Nous Research 出品的高星 Agent 框架，强调自适应与持续进化能力。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐45,206 | 开源超级 AI 助手与 Agent 框架，支持任务规划、工具调用、自我进化、记忆与知识管理，多模型多渠道，一行安装。 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐70,904 | 字节跳动开源的长时域 SuperAgent 框架，集成沙箱、记忆、工具、技能、子 Agent 和消息网关，处理从分钟到小时级别的复杂任务。 |
| [activeloopai/hivemind](https://github.com/activeloopai/hivemind) | ⭐64 (+64 today) | "所有 Agent 共享一个大脑"，多 Agent 协作与知识共享平台，今日新上榜。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐34,609 | Agent 与生成式 UI 的前端栈，制定 AG-UI 协议，让 Agent 能力无缝嵌入 React、Angular、移动端等前端应用。 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐65,891 | "Bash is all you need"——从零构建类 Claude Code 的 Agent Harness，是理解 Agent 底层原理的最佳教学项目。 |

---

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 说明 |
|------|-------|------|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐0 (+1,389 today) | 利用 AI 大模型一键生成高清短视频，今日热榜增速第三，代表了 AI 内容生成在短视频领域的落地爆发。 |
| [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) | ⭐0 (+527 today) | 开源医疗健康 AI 项目，将 AI 能力引入医疗垂直场景，今日新上榜。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐47,173 | AI 生产力工作室，集成智能聊天、自主 Agent 和 300+ 助手，统一接入主流前沿 LLM。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐41,831 | LLM 驱动的 A 股/港股/美股智能分析系统，零成本定时运行，多数据源行情 + 实时新闻 + LLM 决策仪表盘。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐26,103 | AI 从任意文档生成可编辑的 PPT，支持原生形状动画、语音旁白和自定义模板，办公自动化标杆项目。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐26,051 | 给 AI Agent 一双"眼睛"看遍互联网——零 API 费用读取 Twitter、Reddit、YouTube、Bilibili 等平台。 |
| [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | ⭐0 (+211 today) | Claude Code 可视化实战指南，从基础概念到高级 Agent，附带即用模板，降低 Claude Code 的上手门槛。 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | ⭐0 (+420 today) | 将普通 WiFi 信号转化为实时空间智能、生命体征监测和存在感知，无需摄像头，AI + 无线感知的跨界创新。 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 说明 |
|------|-------|------|
| [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) | ⭐0 (+247 today) | 从零训练 LLM 的简明教程，涵盖数据下载到文本生成全流程，今日新上榜，反映社区对"理解底层"的持续热情。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,485 | 🤗 Transformers：文本、视觉、音频、多模态模型的定义框架，AI 开源生态的基石项目。 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐72,055 | 统一高效的 100+ LLM & VLM 微调工具（ACL 2024），大幅降低大模型微调门槛。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐212,719 | Agent Harness 性能优化系统，覆盖 Skills、直觉、内存、安全和研究优先开发，是今日搜索中 star 总量最高的 AI 项目之一。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | ⭐311 | 端侧 LLM 推理，基于 X-Bit 量化技术，代表"AI 本地化"方向的重要探索。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,267 | 面向系统工程师的 LLM 推理服务课程，在 Apple Silicon 上构建微型 vLLM + Qwen。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,077 | LLM 评测平台，支持 100+ 数据集上的多模型评估，为模型选型提供客观基准。 |

---

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|------|-------|------|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐144,744 | 生产级 Agentic 工作流开发平台，今日搜索中 RAG 类别 star 总量最高，持续领跑 AI 应用开发赛道。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐141,006 | 用户友好的 AI 界面，支持 Ollama、OpenAI API 等，是本地部署 LLM 交互的事实标准前端。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐138,986 | Agent 工程平台，定义了 LLM 应用开发的基础范式，生态最完整的 Agent 开发框架。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐58,284 | AI Agent 的通用记忆层，为 Agent 提供跨会话的持久化记忆能力，是 Agent 从"无状态"走向"有记忆"的关键组件。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐81,641 | 跨会话持久化上下文工具，捕获 Agent 行为、AI 压缩后注入未来会话，兼容 Claude Code、Codex、Gemini 等主流 Agent。 |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | ⭐64,975 | 将代码库、SQL 架构、文档等转化为可查询知识图谱的 AI 编码助手技能，RAG 的结构化升级方向。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐44,722 | 高性能云原生向量数据库，大规模向量 ANN 搜索的基础设施首选。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐17,766 | 开源 AI 记忆平台，通过自托管知识图谱引擎为 Agent 提供持久化长期记忆，RAG 与知识图谱融合的代表。 |

---

## 3. 趋势信号分析

**Agent Skills 标准化是今日最核心的趋势信号。** 今日热榜中，agent-skills、pm-skills、superpowers、google/skills、last30days-skill 五个项目均围绕"Agent 技能"展开，合计单日新增超过 5,500 stars。这标志着 AI Agent 生态正经历从"框架竞争"到"技能标准化"的范式转移——开发者不再只关注 Agent 能做什么，更关注如何以可复用、可组合、可交易的方式定义 Agent 的能力单元。Google 官方 google/skills 与社区 addyosmani/agent-skills 同日登榜，说明这一方向已形成自上而下的共识。

**Claude Code 生态链持续完善。** 围绕 Claude Code，今日出现了教程型项目（claude-howto）、记忆增强（claude-mem）、上下文搜索（claude-context）和性能优化（ECC），形成了一条从"入门→增强→优化"的完整工具链。这与 Anthropic 近期持续迭代 Claude Code 的行业背景高度吻合。

**RAG 向"记忆化"和"图谱化"演进。** mem0、cognee、graphify 等项目不再满足于传统的"检索-增强-生成"管道，而是将 Agent 记忆、知识图谱和持久化上下文作为核心能力，预示着下一代 RAG 将从"单次检索"走向"持续认知"。

**端侧 AI 与训练民主化并行。** picollm（端侧推理）和 train-llm-from-scratch（训练入门）的同时受关注，反映出社区对"不依赖云端的自主 AI能力"的长期追求。

---

## 4. 社区关注热点

- 🔥 **Agent Skills 标准化运动** — [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) + [google/skills](https://github.com/google/skills) + [obra/superpowers](https://github.com/obra/superpowers) 三项目同日登榜，标志着 Agent 能力定义正在走向标准化和工程化，值得所有 AI 开发者关注这一生态位的机会。

- 🧠 **Agent 记忆基础设施** — [mem0ai/mem0](https://github.com/mem0ai/mem0)、[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)、[topoteretes/cognee](https://github.com/topoteretes/cognee) 分别从通用记忆层、会话持久化和知识图谱三个方向解决 Agent "失忆"问题，这是 Agent 从 Demo 走向生产的关键瓶颈。

- 🎬 **AI 内容生成落地加速** — [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) 单日 +1,389 stars，AI 短视频生成已从概念验证进入实际产品阶段，内容创作者和营销技术从业者值得重点关注。

- 🔬 **Agent 即研究员** — [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) 今日新增 2,535 stars 登顶热榜，跨多平台信息聚合与综合摘要的 Agent 技能正在成为新的杀手级应用场景。

- 📊 **LLM 评测与微调工具链成熟** — [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)（微调）和 [open-compass/opencompass](https://github.com/open-compass/opencompass)（评测）的持续高 star 量，说明企业级 LLM 定制化的需求正在从"能不能做"转向"如何高效做"。

---

> 📌 数据来源：GitHub Trending（2026-06-11）+ GitHub Search API（topic 标签，7日活跃）
> 📌 过滤说明：已排除 MasterDnsVPN（网络工具）、soxoj/maigret（OSINT）、apple/container（容器运行时）、refactoringhq/tolaria（知识管理桌面端）等非 AI 核心项目。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*