# AI 开源趋势日报 2026-06-25

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-25 00:39 UTC

---

# 🤖 AI 开源趋势日报 | 2026-06-25

---

## 1. 今日速览

今日 GitHub AI 开源生态最突出的信号是 **AI Agent 的全面爆发**——从视频制作、招聘评估到网站克隆，Agent 正以前所未有的速度渗透到每一个可自动化的领域。NousResearch/hermes-agent 以 117,800+ stars 稳坐 Agent 赛道头把交椅，而 OpenMontage 凭借"将 AI 编程助手变成电影制片厂"的激进定位单日狂揽 3,719 stars。**多模态 Agent 协作**（如 Orca 的并行 Agent 舰队、TradingAgents 的多 Agent 金融交易框架）正在成为社区新宠。与此同时，RAG 基础设施持续成熟，向量数据库赛道新老玩家齐头并进，反映出企业级 AI 落地的底层需求依然旺盛。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具）

| 项目 | Stars | 说明 |
|------|-------|------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 202,045 ⭐ (+1,178 today) | 开源 Agent 框架标杆，"与你一起成长的智能体"，支持多模型、多工具、技能自进化 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 221,185 ⭐ | Agent Harness 性能优化系统，为 Claude Code、Codex、Cursor 等提供技能、记忆、安全层 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 84,072 ⭐ | 高吞吐 LLM 推理引擎，已成为开源模型部署的事实标准 |
| [ollama/ollama](https://github.com/ollama/ollama) | 174,866 ⭐ | 一键运行 Kimi-K2.6、GLM-5.1、DeepSeek、Qwen 等主流模型，本地推理生态王者 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,877 ⭐ | 🤗 覆盖文本/视觉/音频/多模态的模型定义框架，AI 开发基础设施核心 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 140,111 ⭐ | Agent 工程平台，链式调用与工具编排的标准范式 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 35,467 ⭐ | Agent 前端栈 & AG-UI 协议制定者，让 Agent 拥有原生 UI 交互能力 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 28,802 ⭐ | 免费本地 24/7 Cowork 应用，统一接入 OpenClaw、Hermes、Claude Code 等 20+ CLI Agent |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|------|-------|------|
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | +3,719 today 🔥 | 全球首个开源 Agentic 视频制片系统：12 条产线、52 工具、500+ Agent 技能 |
| [stablyai/orca](https://github.com/stablyai/orca) | +331 today | 并行 Agent 舰队集成开发环境（ADE），桌面+移动端，支持任意编码 Agent |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 88,364 ⭐ | 多 Agent LLM 金融交易框架，量化交易与 AI 融合的标杆 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 74,438 ⭐ | 字节跳动开源的长期任务 SuperAgent Harness，支持沙箱、记忆、子 Agent |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,596 ⭐ | 开源超级 AI 助手 & Agent Harness，自进化记忆与知识，一行命令安装 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 44,701 ⭐ | 轻量级开源 AI Agent，面向工具、聊天与工作流场景 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 55,562 ⭐ | 基于 Claude Code 的 AI 求职系统，14 种技能模式 + Go 仪表盘 |
| [revfactory/harness](https://github.com/revfactory/harness) | +277 today | 元技能框架：自动设计领域专用 Agent 团队并生成其技能集 |

### 📦 AI 应用（具体产品、垂直场景）

| 项目 | Stars | 说明 |
|------|-------|------|
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 48,481 ⭐ (+1,468 today) | LLM 驱动的多市场股票分析系统：多源行情、实时新闻、决策看板、零成本定时运行 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 47,756 ⭐ | AI 生产力工作室：智能聊天、自主 Agent、300+ 助手，统一接入前沿 LLM |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 31,073 ⭐ | 从任意文档生成可编辑 PPT，含原生动画与语音旁白 |
| [interviewstreet/hiring-agent](https://github.com/interviewstreet/hiring-agent) | +203 today | AI Agent 自动评估与评分简历，招聘流程自动化 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | +692 today | 一条命令用 AI 编码 Agent 克隆任意网站 |
| [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | +619 today | Google Labs 提出的视觉身份描述格式规范，让 Agent 持久理解设计系统 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 39,691 ⭐ | 给 Agent 装上"眼睛"：一键读取 Twitter、Reddit、YouTube、GitHub、B站、小红书 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 28,346 ⭐ | Google Workspace CLI 工具，集成 AI Agent 技能，覆盖 Drive/Gmail/Calendar 等 |

### 🧠 大模型/训练（模型权重、训练框架、微调）

| 项目 | Stars | 说明 |
|------|-------|------|
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,118 ⭐ | 支持 100+ 数据集的 LLM 评测平台，覆盖 Llama3、Claude、Qwen、GLM 等 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | 267 ⭐ | 可靠、最小化、可扩展的基础模型与世界模型预训练库 |
| [zjunlp/LightThinker](https://github.com/zjunlp/LightThinker) | 164 ⭐ | EMNLP 2025：思维链逐步压缩，降低推理 token 消耗 |
| [thinkwee/AgentsMeetRL](https://github.com/thinkwee/AgentsMeetRL) | 1,634 ⭐ | Agentic RL（强化学习）精选资源列表，Agent 训练前沿方向 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|------|-------|------|
| [langgenius/dify](https://github.com/langgenius/dify) | 146,470 ⭐ | 生产级 Agentic 工作流开发平台，RAG + Agent 双轮驱动 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 83,554 ⭐ | 融合前沿 RAG 与 Agent 能力的开源检索增强生成引擎 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 59,368 ⭐ | AI Agent 通用记忆层，跨会话持久化上下文 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,934 ⭐ | 高性能云原生向量数据库，大规模 ANN 搜索首选 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 32,620 ⭐ | 下一代大规模向量数据库与搜索引擎 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 33,382 ⭐ | 无向量、基于推理的 RAG 文档索引，RAG 技术新范式 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 21,618 ⭐ | 开源 Agent AI 记忆平台，自托管知识图谱引擎 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | 11,948 ⭐ | 面向 Claude Code 的代码搜索 MCP，整个代码库即上下文 |

---

## 3. 趋势信号分析

今日热榜释放了三个核心信号：

**① Agent 从"概念验证"走向"生产级工具链"。** OpenMontage（+3,719）将 Agent 能力延伸到专业视频制作领域，12 条产线 + 500+ 技能的架构表明 Agent 不再只是聊天机器人，而是能调度复杂多步骤工作流的生产系统。Orca 的"并行 Agent 舰队"概念和 revfactory/harness 的"元技能自动生成"进一步指向 Agent 的自我组装与协作能力。

**② 多 Agent 协作框架集中涌现。** TradingAgents（多 Agent 金融交易）、deer-flow（字节 SuperAgent）、Orca（并行舰队）三个项目同时指向一个趋势：单一 Agent 已无法胜任复杂任务，未来属于分工明确、互相校验的 Agent 团队。这与近期多模态大模型（如 GPT-5.6、Claude 系列）能力提升直接相关——更强的基座模型使 Agent 能处理更细粒度的子任务。

**③ RAG 基础设施向"无向量"和"Agent 记忆"两个方向分化。** PageIndex 提出"无向量、基于推理的 RAG"，挑战传统 embedding 检索范式；mem0 和 cognee 则专注 Agent 的长期记忆——这反映了社区对"如何让 AI 持续学习、跨会话保持一致性"的深层需求。向量数据库赛道 Milvus、Qdrant、Weaviate 三足鼎立，但新玩家（zvec、LEANN）仍在涌入，说明市场远未饱和。

---

## 4. 社区关注热点

- 🔥 **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** — 单日 +3,719 stars，将 AI Agent 与专业视频制片结合，是目前最激进的 Agent 应用场景探索，值得持续关注其工程落地细节。

- 🔥 **[stablyai/orca](https://github.com/stablyai/orca)** — "Agent 舰队"概念 + 桌面/移动端 IDE，代表了 Agent 开发工具从 CLI 向可视化演进的重要方向。

- 📈 **[TradingAgents](https://github.com/TauricResearch/TradingAgents)** — 88K+ stars 的多 Agent 金融框架，量化交易与 AI 的交叉点，机构关注度极高。

- 🧠 **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Agent 记忆层赛道的领跑者，随着 Agent 应用场景扩展，"AI 如何记住用户"将成为核心工程问题。

- 🔭 **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — "无向量 RAG"范式挑战者，如果推理检索在 benchmark 上超越 embedding 方案，将重塑整个 RAG 技术栈。

---

*报告生成时间：2026-06-25 | 数据来源：GitHub Trending + GitHub Search API*
*由 OWL 自动分析生成*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*