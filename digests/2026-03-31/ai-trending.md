# AI 开源趋势日报 2026-03-31

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-31 00:21 UTC

---

**AI 开源趋势日报（2026-03-31）**

---

### 今日速览

微软发布 **VibeVoice**，作为开源前沿语音 AI 模型引发关注；Claude Code 相关教程与最佳实践项目热度飙升，反映开发者对 AI 编码代理的实际落地兴趣激增。同时，RAG、向量数据库及 AI Agent 工具链持续活跃，显示社区正加速构建端到端的智能应用基础设施。

---

### 各维度热门项目

#### 🔧 AI 基础工具
- **[microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)** ⭐0 (+2492 today)  
  微软推出的开源前沿语音 AI 模型，支持高保真语音生成，今日上线即获爆发式关注。
- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐166,508 [topic:llm]  
  本地 LLM 推理引擎，支持 Kimi-K2.5、GLM-5、DeepSeek 等主流模型快速部署，是轻量化 AI 开发的核心工具。
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐74,751 [topic:llm]  
  高性能 LLM 推理与服务框架，专为高吞吐和内存效率优化，广泛用于生产环境部署。

#### 🤖 AI 智能体/工作流
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐18,569 (+1851 today)  
  成长型 AI Agent 框架，支持长期记忆与自适应演进，今日因 Claude Code 生态联动再度走红。
- **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** ⭐43,846 [topic:ai-agent]  
  从零构建类 Claude Code 的“Agent  harness”，提供完整教学路径，助力开发者掌握自主编码 Agent。
- **[trycua/cua](https://github.com/trycua/cua)** ⭐13,331 [topic:ai-agent]  
  开源计算机使用 Agent 基础设施，支持跨平台桌面控制，为具身 AI 应用提供底层支撑。

#### 📦 AI 应用
- **[hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam)** ⭐0 (+1136 today)  
  基于单图实现实时人脸替换与深度伪造的视频工具，技术突破引发伦理与安全讨论。
- **[OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB)** ⭐64,522 (+502 today)  
  面向金融分析师与量化交易者的 AI 数据平台，集成多源数据与自动化研究能力。
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** ⭐101,342 [topic:llm]  
  Web 数据 API，将整个网站转换为 LLM 可用的结构化内容，极大简化 RAG 数据准备流程。

#### 🧠 大模型/训练
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** ⭐44,789 [topic:llm-model]  
  2小时内从零训练 64M 参数 GPT 模型，极低成本验证自研架构可行性，适合教学与小规模实验。
- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** ⭐69,271 [topic:llm]  
  统一高效微调框架，支持千余种 LLMs & VLMs，显著降低多模态模型训练门槛。
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** ⭐6,811 [topic:llm-model]  
  开源大模型评测平台，覆盖 Llama3、Qwen、GLM、Claude 等主流模型与百级数据集。

#### 🔍 RAG/知识库
- **[langgenius/dify](https://github.com/langgenius/dify)** ⭐135,048 [topic:rag]  
  企业级可生产的 Agentic 工作流开发平台，集成 RAG、工具调用与可视化编排。
- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** ⭐29,930 [topic:vector-db]  
  高性能向量数据库，支持混合搜索与大规模部署，是新一代 AI 应用的事实标准存储层。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐51,507 [topic:rag]  
  通用记忆层 for AI Agents，让模型具备长期上下文理解能力，解决 Agent 遗忘难题。

---

### 趋势信号分析

今日热榜呈现三大趋势：其一，**Claude Code 生态迅速扩张**，多个围绕其展开的最佳实践、插件与教程项目集中涌现，反映 AI 编程代理正从概念走向工程化落地；其二，**具身智能基础设施兴起**，如 `cua` 提供跨平台桌面操作能力，预示 AI Agent 将从纯逻辑决策向物理世界交互延伸；其三，**RAG 与向量数据库持续深化**，`qdrant`、`milvus` 等后端成熟，前端工具如 `firecrawl` 则聚焦数据供给，形成“检索-生成”闭环。此外，微软发布 `VibeVoice` 标志语音 AI 进入开源竞争新阶段，而 Deep-Live-Cam 的爆火也凸显生成式内容工具在消费端的高关注度，但需警惕伦理风险。

---

### 社区关注热点

- **Claude Code 生态建设**：多个教程与优化项目涌现，表明开发者亟需标准化 Agent 开发范式。
- **具身 AI Agent 基础设施**：如 `cua` 提供跨平台桌面控制能力，是未来 AI 助理迈向真实世界的关键跳板。
- **轻量级大模型训练**：`minimind` 等低参数量项目推动“人人可训模型”趋势，降低科研与创业门槛。
- **RAG 全链路工具链整合**：`dify` + `firecrawl` + `qdrant` 构成完整 RAG 应用栈，适合快速构建垂直场景 AI。
- **语音 AI 开源突破**：微软 `VibeVoice` 展示前沿语音生成技术开源潜力，可能重塑 TTS 领域格局。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*