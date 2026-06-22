# AI 开源趋势日报 2026-06-22

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-22 00:43 UTC

---

# AI 开源趋势日报 · 2026-06-22

---

## 第一步：AI 相关性过滤

**Trending 榜单中排除的非 AI 项目：**
- `tursodatabase/turso` — 通用 SQLite 兼容数据库
- `penpot/penpot` — 通用设计工具
- `tw93/Pake` — 网页转桌面应用工具
- `mikumifa/biliTickerBuy` — 票务抢购工具
- `byoungd/English-level-up-tips` — 英语学习指南

**保留的 AI 相关 Trending 项目：** 12 个（见下方分类）

**主题搜索结果中排除的非 AI 项目：**
- `Developer-Y/cs-video-courses` — CS 课程列表
- `netdata/netdata` — 监控运维平台
- `apache/airflow` — 通用工作流调度
- `streamlit/streamlit` — 通用数据应用框架
- `thedaviddias/Front-End-Checklist` — 前端开发清单
- `LancerLab/croqtile` — 内核编程 DSL
- `R-D-BioTech-Alaska/Qelm` — 量子增强语言模型（概念性项目，stars 极低）
- `AmirMotefaker/Create-your-own-ChatGPT` — 教程类，stars 极低
- `testtimescaling/testtimescaling.github.io` — 论文仓库，stars 极低
- `microsoft/synthetic-rag-index` — Azure 托管服务配套工具，stars 极低
- `galilai-group/stable-pretraining` — 预训练库，stars 极低

---

## 第二步 & 第三步：分类报告

---

### 1. 今日速览

今日 AI 开源社区的核心叙事围绕 **Agent 基础设施的成熟化** 展开：从 Agent 的记忆层（cognee、claude-mem）、上下文压缩（headroom）、代码库索引（codebase-memory-mcp），到 Agent 技能标准化（Anthropic-Cybersecurity-Skills、mattpocock/skills），一条完整的 Agent 工具链正在快速成形。**视频生成/编辑的 AI 化** 成为新热点，两个视频相关项目同时登榜。与此同时，**RAG 的工程化落地** 持续深化，向量数据库和无向量检索方案并行推进。字节跳动开源的 SuperAgent 框架 deer-flow 持续获得社区关注，标志着大厂在 Agent 框架层的投入进入收获期。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 说明 |
|------|-------|------|
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 44,351 (+2,624 today) | **LLM 上下文压缩中间件**，在工具输出、日志、RAG 块送入 LLM 前自动压缩，减少 60-95% token 消耗同时保持答案质量。提供库、代理和 MCP 三种形态，今日 Trending 榜第一。 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | +1,032 today | **高性能代码智能 MCP 服务器**，将代码库索引为持久化知识图谱，平均仓库索引耗时毫秒级，支持 158 种语言，查询亚毫秒响应，token 消耗降低 99%。单静态二进制、零依赖。 |
| [ollama/ollama](https://github.com/ollama/ollama) | 174,676 | 本地 LLM 推理部署工具，支持 Kimi-K2.6、GLM-5.1、DeepSeek、Qwen 等主流模型，持续保持高热度。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 83,488 | 高吞吐、内存高效的 LLM 推理与服务引擎，生产部署首选。 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | +1,443 today | **面向真实工程师的 Agent Skills 集合**，直接来自作者 .claude 目录的实战技能包，涵盖开发工作流中的实用场景。 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | +361 today | **754 个结构化网络安全技能**，映射到 MITRE ATT&CK、NIST CSF 2.0 等 5 大框架，兼容 Claude Code、GitHub Copilot、Cursor 等 20+ 平台。 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | +282 today | **主流 AI 产品系统提示词合集**，涵盖 Anthropic、OpenAI、Google、xAI 等产品的已提取 System Prompt，持续更新。 |

#### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|------|-------|------|
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 72,567 (+442 today) | **字节跳动开源的 SuperAgent 框架**，支持研究、编码和创作，集成沙箱、记忆、工具、技能、子 Agent 和消息网关，处理从分钟到小时级别的复杂任务。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 219,324 | **Agent Harness 性能优化系统**，提供 Skills、Instincts、Memory、Security 和研究优先开发范式，兼容 Claude Code、Codex、Cursor 等。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 199,001 | **自适应成长型 Agent**，由 Nous Research 开发，强调与用户共同进化的 Agent 体验。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,062 | 经典自主 AI Agent 项目，致力于让每个人都能使用和构建 AI。 |
| [langgenius/dify](https://github.com/langgenius/dify) | 146,065 | **生产级 Agentic 工作流开发平台**，支持可视化编排和 API 部署。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 139,822 | Agent 工程平台标准，提供从 LLM 调用到复杂 Agent 编排的完整工具链。 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 77,935 | AI 驱动的软件开发 Agent，自动化编码任务。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,518 | 开源超级 AI 助手与 Agent Harness，支持任务规划、工具执行、自我进化，多模型多渠道。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 47,625 | AI 生产力工作室，集成智能聊天、自主 Agent 和 300+ 助手，统一访问前沿 LLM。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 44,515 | 轻量级开源 AI Agent，面向工具、聊天和工作流场景。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 35,367 | **Agent 前端栈与生成式 UI 框架**，支持 React、Angular、Mobile、Slack，制定 AG-UI 协议。 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 29,241 | 跨平台 Claude Code 替代方案，强调"随处运行、使用任何工具"。 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 28,598 | 免费本地开源 24/7 协作应用，支持 OpenClaw、Hermes Agent、Claude Code 等 20+ CLI 工具。 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 67,669 | 从零构建 Claude Code 类 Agent Harness 的教程项目，"Bash is all you need"。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 55,058 | 基于 Claude Code 的 AI 求职系统，14 种技能模式、Go 仪表盘、PDF 生成和批处理。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 36,842 | 赋予 AI Agent 浏览全网的能力，支持 Twitter、Reddit、YouTube、GitHub 等平台，零 API 费用。 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 24,915 | 将任意网站转化为 CLI 工具，让 AI Agent 使用已登录浏览器。 |

#### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 说明 |
|------|-------|------|
| [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | +1,834 today | **macOS AI 原生视频编辑器**，为 AI 工作流构建的视频编辑工具，今日 Trending 榜第二。 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | +987 today | **开源 Agentic 视频制作系统**，12 条管线、52 个工具、500+ Agent 技能，将 AI 编程助手变为完整视频制作工作室。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 44,425 (+568 today) | **LLM 驱动的多市场股票智能分析系统**，集成多源行情、实时新闻、决策看板和自动推送，支持零成本定时运行。 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | +163 today | **实时全球情报仪表盘**，AI 驱动的新闻聚合、地缘政治监控和基础设施追踪。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 87,822 | **多 Agent LLM 金融交易框架**，模拟专业交易团队协作进行金融决策。 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 69,517 | 面向分析师、量化交易员和 AI Agent 的金融数据平台。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 29,889 | **AI 生成可编辑 PowerPoint**，从任意文档生成原生形状和动画的 PPT，支持音频旁白和自定义模板。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 99,936 | 让网站对 AI Agent 可访问，轻松自动化在线任务。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 136,329 | 大规模网页搜索、抓取和交互的 API，为 Agent 提供网络数据基础设施。 |

#### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 说明 |
|------|-------|------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,776 | 🤗 Transformers：文本、视觉、音频和多模态模型的定义框架，支持推理和训练。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 195,787 | 开源机器学习框架，社区基石项目。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 100,929 | 动态神经网络与 GPU 加速的深度学习框架。 |
| [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) | 66,383 | Python 机器学习标准库。 |
| [keras-team/keras](https://github.com/keras-team/keras) | 64,091 | 面向人类的深度学习框架。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 58,633 | Ultralytics YOLO 目标检测框架。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 7,704 | 用 Rust 构建模块化和可扩展的 LLM 应用。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,109 | LLM 评测平台，支持 100+ 数据集上的多模型评估。 |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | 5,998 | 原子化构建 AI Agent 的框架。 |

#### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|------|-------|------|
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 18,634 (+347 today) | **开源 AI Agent 记忆平台**，通过自托管知识图谱引擎为 Agent 提供跨会话的持久长期记忆。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 83,567 | **跨会话持久上下文系统**，捕获 Agent 在会话中的全部行为，用 AI 压缩后将相关上下文注入未来会话。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 83,292 | 领先的 RAG 引擎，融合 RAG 与 Agent 能力，为 LLM 创建优质上下文层。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 59,048 | AI Agent 的通用记忆层。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 61,892 | 本地优先的全功能 Agent 体验平台。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 50,257 | 领先的文档 Agent 和 OCR 平台。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,866 | 高性能云原生向量数据库，用于可扩展向量 ANN 搜索。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 32,522 | 大规模向量数据库与搜索引擎。 |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | 16,389 | 开源向量数据库，支持向量搜索与结构化过滤结合。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 33,273 | **无向量的推理型 RAG 文档索引**，不依赖向量嵌入的检索增强方案。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 12,473 | MLsys2026 收录：**万物 RAG**，97% 存储节省，在个人设备上运行快速、准确、100% 私密的 RAG 应用。 |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | 70,304 | 将代码、SQL、文档、图像、视频等任意文件夹转化为可查询知识图谱的 Agent 技能。 |
| [neuml/txtai](https://github.com/neuml/txtai) | 12,672 | 一体化 AI 框架，支持语义搜索、LLM 编排和语言模型工作流。 |
| [alibaba/zvec](https://github.com/alibaba/zvec) | 11,963 | 阿里开源的轻量级极速进程内向量数据库。 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | 10,671 | 面向开发者的开源嵌入式检索库，支持多模态 AI。 |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | 28,095 | RAG 系统高级技术合集，每种技术附带详细 Notebook 教程。 |
| [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | 46,820 | AI 低代码平台，集成 AI 聊天、知识库、流程编排和 MCP 插件。 |

---

### 3. 趋势信号分析

今日热榜最突出的信号是 **Agent 基础设施的"最后一公里"正在被快速补齐**。headroom（上下文压缩）、codebase-memory-mcp（代码库索引）和 cognee（Agent 记忆）三个项目同时登榜，分别解决了 Agent 运行中的三个核心痛点：token 成本爆炸、代码理解能力不足、跨会话记忆缺失。这标志着社区注意力正从"如何构建 Agent"转向"如何让 Agent 高效、持久、低成本地运行"。

第二个值得关注的趋势是 **AI 视频创作工具的开源化浪潮**。palmier-pro 和 OpenMontage 同日登榜，前者是 AI 原生视频编辑器，后者是 Agentic 视频制作系统，两者合计获得近 2,800 今日 stars。这与当前多模态模型（视频生成、理解）能力突破直接相关，社区正在快速将模型能力封装为可用的创作工具。

第三个信号是 **Agent Skills 生态的标准化进程加速**。Anthropic-Cybersecurity-Skills（754 个安全技能）、mattpocock/skills（工程师实战技能）和 ECC（Agent Harness 优化系统）共同指向一个趋势：Agent 的能力正从"模型驱动"转向"技能驱动"，可复用、可组合的 Skill 正在成为 Agent 生态的"应用商店"。

此外，PageIndex（无向量 RAG）和 LEANN（端侧 RAG）的出现表明社区正在探索**突破传统向量检索范式**的新路径，这对边缘部署和隐私敏感场景意义重大。

---

### 4. 社区关注热点

- **🔥 [chopratejas/headroom](https://github.com/chopratejas/headroom)** — LLM 上下文压缩是当前 Agent 降本增效的最直接手段，60-95% 的 token 节省意味着 Agent 可以处理更长、更复杂的任务链。今日 Trending 第一，值得立即评估集成。

- **🔥 [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)** — 代码库级别的 MCP 服务器正在成为 Agent 理解大型项目的关键基础设施。158 语言支持、亚毫秒查询、99% token 降低，这个指标组合目前无出其右。

- **🔥 [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** — Agentic 视频制作是一个全新赛道，500+ Agent 技能 + 12 条管线的组合展示了 Agent 在创意生产领域的潜力，可能催生新的开源视频创作生态。

- **📈 [topoteretes/cognee](https://github.com/topoteretes/cognee)** — Agent 记忆平台持续活跃，知识图谱引擎 + 自托管的组合解决了企业对数据主权的顾虑，是构建长期运行 Agent 的核心组件。

- **📈 [bytedance/deer-flow](https://github.com/bytedance/deer-flow)** — 字节持续投入 Agent 开源生态，deer-flow 的 SuperAgent 架构（沙箱 + 记忆 + 子 Agent + 消息网关）代表了工业级 Agent 框架的设计方向，值得架构师参考。

---

*数据来源：GitHub Trending (2026-06-22) + GitHub Search API | 分析时间：2026-06-22*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*