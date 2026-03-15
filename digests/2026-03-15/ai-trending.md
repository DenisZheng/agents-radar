# AI 开源趋势日报 2026-03-15

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-15 00:21 UTC

---

**AI 开源趋势日报（2026-03-15）**

---

### **今日速览**  
今日 GitHub AI 生态呈现“工具链深化”与“Agent 实战化”双主线趋势。OpenViking、dimos、superpowers 等强调 Agent 上下文管理与技能框架的项目集中爆发，反映多智能体协作成为新焦点；同时，browser-use、lightpanda 等浏览器自动化工具获极高关注，显示“环境交互能力”成为 Agent 落地的关键瓶颈。RAG 与向量数据库持续活跃，但增长趋于平稳。

---

### **各维度热门项目**

#### 🔧 AI 基础工具
- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐165,063 (+1439 today)  
  轻量级本地 LLM 运行引擎，支持 Kimi-K2.5、GLM-5、DeepSeek 等前沿模型一键部署，极大降低推理门槛。
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐73,097 (+2069 today)  
  高性能 LLM 推理与部署框架，专为高吞吐场景优化，今日因 Lightpanda 集成引发社区热议。
- **[unslothai/unsloth](https://github.com/unslothai/unsloth)** ⭐53,981 (+381 today)  
  极致显存效率的 LLM 微调框架，2x 训练速度 + 70% VRAM 节省，适配 gpt-oss、DeepSeek、Qwen 等新模型。

#### 🤖 AI 智能体/工作流
- **[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)** ⭐0 (+4280 today)  
  首个全栈 AI 代理机构平台，提供从前端到社交媒体的全域执行单元，标志“AI 团队”概念走向工程化。
- **[obra/superpowers](https://github.com/obra/superpowers)** ⭐0 (+1439 today)  
  新型 Agentic 技能框架，结合软件开发方法论，实现可复用、自演进的技能组合，推动 Agent 工业化。
- **[dimensionalOS/dimos](https://github.com/dimensionalOS/dimos)** ⭐0 (+72 today)  
  Dimensional Framework 聚焦多模态 Agent 的上下文分层管理，为复杂任务提供结构化记忆机制。

#### 📦 AI 应用
- **[fishaudio/fish-speech](https://github.com/fishaudio/fish-speech)** ⭐0 (+381 today)  
  SOTA 开源语音合成系统，采用扩散模型实现高保真 TTS，填补国产高质量语音生成空白。
- **[InsForge/InsForge](https://github.com/InsForge/InsForge)** ⭐0 (+482 today)  
  面向 Agent 的全栈开发后端平台，自动构建 API、数据库与部署流水线，加速 Agent 产品落地。
- **[langflow-ai/openrag](https://github.com/langflow-ai/openrag)** ⭐0 (+564 today)  
  Langflow 驱动的 RAG 平台，整合 Docling 与 Opensearch，提供可视化文档增强问答流程。

#### 🧠 大模型/训练
- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** ⭐68,401 (+1439 today)  
  统一高效微调框架，支持 100+ LLMs/VLMs，今日因 Llama 4 发布引发大规模更新与讨论。
- **[The-Pocket/PocketFlow](https://github.com/The-Pocket/PocketFlow)** ⭐10,203 (+564 today)  
  极简 LLM 框架（<100 行代码），探索“Agent 自构建”范式，体现轻量化架构创新。
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** ⭐6,755 (+694 today)  
  多模型评测平台，覆盖 GPT-4、Claude、GLM 等，今日新增 Llama 4 评估模块上线。

#### 🔍 RAG/知识库
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐74,999 (+564 today)  
  RAG+Agent 融合引擎，支持多模态检索与企业级权限控制，成为 RAG 领域标杆项目。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐49,831 (+2069 today)  
  通用 Agent 记忆层，提供长期、语义化记忆存储，今日获 Lightpanda 集成报道。
- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** ⭐13,487 (+1439 today)  
  六行代码嵌入的知识图谱引擎，主打极简 Agent 记忆接入，获开发者广泛测试反馈。

---

### **趋势信号分析**  

今日热榜揭示两大结构性变化：其一，**Agent 基础设施正从“单一工具”向“体系化平台”跃迁**。OpenViking（上下文数据库）、superpowers（技能框架）、dimos（Dimensional OS）共同构建 Agent 的“操作系统”层，表明社区已从“能否做 Agent”转向“如何规模化生产 Agent”。其二，**浏览器自动化迎来技术突破**——lightpanda 以 Zig 重写 headless browser，实现毫秒级响应与内存优化，直接集成于 vLLM 生态，预示“实时环境交互”将成为下一代 Agent 的核心竞争力。此外，Anthropic 官方维护 claude-plugins-official 榜单，反映厂商正通过标准化插件生态引导 Agent 开发方向。整体来看，AI 开源重心正从模型本身向后端能力（推理、部署、交互）迁移。

---

### **社区关注热点**  
- **msitarzewski/agency-agents**：首个工业级多智能体协作平台，提供完整人格、任务流水线与交付物标准，代表 Agent 从实验走向商业应用。  
- **lightpanda-io/browser**：Zig 编写的轻量浏览器内核，专为 AI Agent 设计，性能超越 Playwright/Puppeteer，开启浏览器自动化新范式。  
- **OpenViking**：开创“文件系统式上下文管理”，解决 Agent 长程依赖与资源调度难题，为 Agent 自进化奠定基础。  
- **superpowers**：提出“技能即服务”（Skill-as-a-Service）方法论，将 Agent 开发从编码回归到流程编排，降低工程门槛。  
- **OpenRAG**：Langflow + Docling 整合方案，实现零配置企业级 RAG 搭建，显著提升文档处理效率。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*