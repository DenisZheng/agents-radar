# AI 开源趋势日报 2026-06-18

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-18 00:44 UTC

---

# AI 开源趋势日报 · 2026-06-18

---

## 第一步：AI 相关性过滤

**Trending 榜单中排除的非 AI 项目：**
- `n0-computer/iroh`（通用网络库）、`meshery/meshery`（云原生管理）、`RocketChat/Rocket.Chat`（即时通讯）、`penpot/penpot`（设计工具）、`krahets/hello-algo`（算法教程）、`Universal-Debloater-Alliance/...`（Android 工具）、`yairm210/Unciv`（游戏）、`freeCodeCamp/freeCodeCamp`（教育平台）、`nautechsystems/nautilus_trader`（交易引擎）、`chatwoot/chatwoot`（客服平台）、`makeplane/plane`（项目管理）

**Trending 中保留的 AI 相关项目（8 个）：**
`codebase-memory-mcp`、`Agent-Reach`、`superpowers`、`timesfm`、`continue`、`mattpocock/skills`、`UI-TARS-desktop`、`OpenMontage`、`rlm`

**主题搜索中排除的非 AI 项目（4 个）：**
`f/prompts.chat`（提示词社区）、`Developer-Y/cs-video-courses`（课程列表）、`thedaviddias/Front-End-Checklist`（前端清单）、`shareAI-lab/learn-claude-code`（教学项目）

---

## 第二步 & 第三步：分类报告

---

### 1. 今日速览

今日 AI 开源社区的核心叙事围绕 **"Agent 基础设施的成熟化"** 展开。MCP（Model Context Protocol）生态持续扩张，`codebase-memory-mcp` 以知识图谱索引代码库的方式将 MCP 推向生产级；Agent 技能框架（Skills）成为新热点，`superpowers` 和 `mattpocock/skills` 同日登榜且日增 stars 均破千，标志着 Agent 能力模块化正在形成共识。多模态 Agent 方向同样亮眼，字节 `UI-TARS-desktop` 和 `OpenMontage`（Agentic 视频生产系统）同日进入热榜。Google Research 的时间序列基础模型 `timesfm` 也获得显著关注，Foundation Model 的疆域正在从 NLP/CV 向更多垂直模态延伸。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 说明 |
|------|-------|------|
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐83,195 | 业界最主流的 LLM 推理与服务引擎，持续迭代高吞吐、内存高效推理能力，是部署开源模型的标配基础设施。 |
| [continuedev/continue](https://github.com/continuedev/continue) | ⭐— (+49 today) | 开源编码 Agent，今日登榜，提供 IDE 内嵌的 AI 编程辅助能力，是 Cursor 的开源替代方案之一。 |
| [alexzhang13/rlm](https://github.com/alexzhang13/rlm) | ⭐— (+43 today) | 递归语言模型（RLM）的通用即插即用推理库，支持多种沙盒环境，探索 LLM 自我推理的新范式。 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | ⭐— (+371 today) | 高性能代码智能 MCP 服务器，将代码库索引为持久化知识图谱，158 种语言支持、亚毫秒级查询、减少 99% token 消耗，是 MCP 生态中面向代码场景的重量级基础设施。 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐174,405 | 本地 LLM 运行的事实标准工具，持续集成最新开源模型（Kimi-K2.6、GLM-5.1、DeepSeek 等），降低本地部署门槛。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐7,660 | Rust 语言构建模块化、可扩展 LLM 应用的框架，代表了 Rust 生态在 AI 工程化方向的探索。 |

#### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|------|-------|------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐196,196 | 高星 Agent 框架，"与你一起成长的 Agent"，代表了社区对自适应、个性化 Agent 的追求。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐33,165 (+1161 today) | 🔥 今日 Trending 第 3 名。赋予 AI Agent 浏览全网的能力——Twitter、Reddit、YouTube、Bilibili 等平台一站式读取与搜索，零 API 费用，极大扩展 Agent 的信息获取边界。 |
| [obra/superpowers](https://github.com/obra/superpowers) | ⭐— (+1129 today) | Agentic 技能框架与软件开发方法论，今日热度飙升，提供一套可落地的 Agent 能力组合方案。 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | ⭐— (+1523 today) | 🔥 今日 Trending 第 1 名（日增最高）。源自真实 `.claude` 目录的 Agent Skills 合集，将工程师日常使用的 Agent 技能模块化、可复用化，标志着 Agent Skills 从个人实践走向社区共享。 |
| [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | ⭐— (+150 today) | 字节开源的多模态 Agent 栈，连接前沿 AI 模型与 Agent 基础设施，代表了国内大厂在 Agent 平台化方向的布局。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐217,296 | Agent Harness 性能优化系统，覆盖 Skills、Instincts、Memory、安全等多维度，是目前社区中系统最完整的 Agent 增强框架之一。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐45,383 | 开源超级 AI 助手与 Agent Harness，支持任务规划、工具调用、自我进化，多模型多渠道，轻量可扩展。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐47,483 | AI 生产力工作室，集成智能对话、自主 Agent 与 300+ 助手，统一接入主流大模型。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐35,253 | Agent 与生成式 UI 的前端栈，支持 React、Angular、移动端等，是 AG-UI 协议的主要推动者。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐185,002 | 经典自主 Agent 项目，持续迭代，代表了通用 Agent 的早期愿景仍在社区保持高关注度。 |

#### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 说明 |
|------|-------|------|
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | ⭐— (+98 today) | 全球首个开源 Agentic 视频生产系统，12 条流水线、52 个工具、500+ Agent 技能，将 AI 编程助手变为完整视频制作工作室。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐28,818 | AI 从任意文档生成可编辑的 PPT，支持原生形状动画、语音旁白，代表了 AI 办公自动化的实用方向。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐42,963 | LLM 驱动的 A 股/港股/美股智能分析系统，多数据源行情 + 实时新闻 + LLM 决策仪表盘，零成本定时运行。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐86,963 | 多 Agent LLM 金融交易框架，将 Agent 协作引入量化交易场景。 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | ⭐69,338 | 面向分析师、量化交易员和 AI Agent 的金融数据平台，正在成为金融 AI 应用的数据基础设施。 |
| [google-research/timesfm](https://github.com/google-research/timesfm) | ⭐— (+606 today) | Google Research 发布的时间序列基础模型，Foundation Model 从 NLP/CV 向时序预测模态扩展的标志性项目。 |

#### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 说明 |
|------|-------|------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,676 | 🤗 Transformers 仍是模型定义框架的事实标准，覆盖文本、视觉、音频、多模态，训练与推理一体。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐100,841 | 深度学习训练框架基石，动态神经网络 + GPU 加速，生态无可替代。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐195,715 | 老牌 ML 框架，仍保持最高总星数，在企业级部署和生产流水线中广泛使用。 |
| [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) | ⭐66,358 | Python 机器学习经典库，传统 ML 场景的首选工具。 |
| [keras-team/keras](https://github.com/keras-team/keras) | ⭐64,094 | 高层深度学习 API，以易用性著称，适合快速原型开发。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐58,519 | YOLO 系列目标检测模型，工业界部署最广泛的视觉模型之一。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,099 | 支持 100+ 数据集、覆盖国内外主流大模型的评测平台，是模型选型与能力评估的重要参考。 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | ⭐264 | 面向基础模型和世界模型的可靠、最小化、可扩展预训练库，代表了预训练工程化的新探索。 |

#### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|------|-------|------|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐145,631 | 生产级 Agentic 工作流开发平台，RAG + Agent 一体化，国内开源 AI 应用平台的标杆项目。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐139,576 | Agent 工程平台，RAG 链式编排的事实标准之一，生态最为丰富。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐58,803 | AI Agent 通用记忆层，为 Agent 提供跨会话的持久化记忆能力，是 Agent 长期记忆的核心基础设施。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐82,995 | 跨会话持久化上下文系统，捕获 Agent 行为、AI 压缩、注入未来会话，兼容 Claude Code、Codex、Gemini 等主流 Agent。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐44,821 | 高性能云原生向量数据库，大规模向量 ANN 搜索的首选方案之一。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐32,410 | Rust 实现的高性能向量搜索引擎，以性能和开发者体验著称。 |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | ⭐16,341 | 支持向量搜索 + 结构化过滤的开源向量数据库，云原生架构。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐17,885 | Agent 的开源 AI 记忆平台，基于自托管知识图谱引擎，为 Agent 提供跨会话的长期记忆。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12,202 | MLsys'2026 收录，在个人设备上实现 97% 存储节省的 RAG 方案，隐私优先的端侧 RAG 新思路。 |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | ⭐68,717 | 将代码库、SQL 架构、文档等转化为可查询知识图谱的 Agent 技能，兼容 Claude Code、Codex、Cursor 等主流工具。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐61,740 | 本地优先的全功能 Agent 体验平台，"停止租用你的智能"。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐83,036 | 融合 RAG 与 Agent 能力的开源 RAG 引擎，为 LLM 构建更优上下文层。 |

---

### 3. 趋势信号分析

今日热榜释放的最强信号是 **Agent Skills 的爆发**。`mattpocock/skills`（+1523）和 `superpowers`（+1129）同日登榜且日增 stars 均破千，说明社区正在从"如何构建 Agent"转向"如何为 Agent 装配可复用的能力模块"。这与 Anthropic 近期大力推广 MCP 和 Agent Skills 生态的方向高度吻合——Agent 的竞争力正从模型能力转向工具链和技能生态的丰富度。

第二个值得关注的趋势是 **MCP 生态向垂直场景深化**。`codebase-memory-mcp`（+371）将 MCP 协议应用于代码库知识图谱索引，`safishamsi/graphify` 也将知识图谱能力以技能形式提供给 Agent，MCP 正在从通用协议走向具体场景的基础设施。

第三个信号是 **多模态 Agent 进入实用阶段**。字节 `UI-TARS-desktop`（+150）和 `OpenMontage`（+98）同日登榜，前者聚焦多模态 Agent 基础设施，后者直接落地为视频生产系统，表明多模态 Agent 正从技术验证走向实际产品。此外，Google `timesfm`（+606）的登榜也表明 Foundation Model 的疆域正在向时间序列等传统数据科学领域扩展。

---

### 4. 社区关注热点

- **🔥 Agent Skills 生态** — [mattpocock/skills](https://github.com/mattpocock/skills) 和 [obra/superpowers](https://github.com/obra/superpowers) 同日爆发，Agent 能力模块化正在成为社区共识，值得开发者关注并参与贡献自己的 Skills。

- **🔥 Agent 信息获取能力扩展** — [Agent-Reach](https://github.com/Panniantong/Agent-Reach) 以零成本方式打通全网信息源，解决了 Agent 实时信息获取的痛点，可能成为 Agent 工具链的标准组件。

- **🧠 MCP 协议生态深化** — [codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) 展示了 MCP 在代码智能场景的生产级应用，MCP 生态正在快速扩展，是 Agent 基础设施投资的重要方向。

- **🎬 Agentic 内容生产** — [OpenMontage](https://github.com/calesthio/OpenMontage) 将 Agent 能力引入视频制作流水线，代表了 AI Agent 从"辅助编码"向"创意生产"场景的拓展，垂直行业 Agent 应用值得关注。

- **📊 Foundation Model 多模态扩展** — [timesfm](https://github.com/google-research/timesfm) 标志着基础模型向时间序列预测等传统数据科学领域的延伸，时序 AI 可能成为下一个 Foundation Model 竞争赛道。

---

*数据来源：GitHub Trending（2026-06-18）& GitHub Topic Search API | 分析：OWL*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*