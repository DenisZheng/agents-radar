# AI 开源趋势日报 2026-03-12

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-12 05:50 UTC

---

**AI 开源趋势日报（2026-03-12）**

---

### **今日速览**

2026 年 3 月 12 日的 GitHub AI 生态呈现爆发式增长，尤其在**智能体框架**与**RAG 增强工具**领域表现突出。多个新项目单日获数千 stars，反映出社区对“端到端 AI 工作流”和“自主 Agent 能力”的高度兴趣。同时，向量数据库、大模型推理优化等基础设施持续领跑，而像 MiroFish 这样的群体智能预测引擎则展示了 AI 应用边界的拓展。

---

### **各维度热门项目**

#### 🔧 AI 基础工具
- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐164,884 (+1,200 today)  
  轻量级本地 LLM 运行平台，支持 Kimi-K2.5、DeepSeek、Qwen 等前沿模型一键部署，极大降低非 GPU 用户接入门槛。
- **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** ⭐29,295 (+89 today)  
  React 原生前端库，专为构建嵌入式的生成式 UI 设计，已集成 300+ 助手模板，成为企业级 Agent 界面开发首选。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** ⭐80,439 (+1,100 today)  
  开源浏览器自动化 SDK，让 AI 代理能直接操控网页交互，是计算机使用（Computer Use）类 Agent 的事实标准实现。

#### 🤖 AI 智能体/工作流
- **[promptfoo/promptfoo](https://github.com/promptfoo/promptfoo)** ⭐0 (+718 today)  
  Prompt 测试与红队工具，支持多模型对比、漏洞扫描与 CI/CD 集成，帮助开发者系统化保障 Agent 输出质量。
- **[alibaba/page-agent](https://github.com/alibaba/page-agent)** ⭐0 (+1,215 today)  
  网页内嵌 GUI Agent，允许自然语言控制页面元素，适用于 SaaS 自动化与无代码操作场景。
- **[activepieces/activepieces](https://github.com/activepieces/activepieces)** ⭐21,180 (+342 today)  
  提供 400+ MCP 服务器的可视化 AI 工作流编排平台，打通 Agent 与真实世界工具链。

#### 📦 AI 应用
- **[MiroFish](https://github.com/666ghj/MiroFish)** ⭐0 (+2,907 today)  
  简洁通用的群体智能预测引擎，宣称可“预测万物”，代表一类新兴的元启发式 AI 应用范式。
- **[virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund)** ⭐0 (+636 today)  
  完全由 AI 驱动的量化交易基金模拟系统，展示金融场景下多 Agent 协作的可行性。
- **[fishaudio/fish-speech](https://github.com/fishaudio/fish-speech)** ⭐0 (+313 today)  
  SOTA 开源语音合成模型，推动 TTS 技术民主化，尤其在高保真中文语音生成方面取得突破。

#### 🧠 大模型/训练
- **[huggingface/transformers](https://github.com/huggingface/transformers)** ⭐157,763 (+980 today)  
  最广泛使用的多模态模型推理框架，持续支持新架构与量化方案，仍是工业界首选。
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐72,889 (+1,500 today)  
  高吞吐 LLM 推理引擎，结合 PagedAttention 技术显著提升长上下文处理能力，近期因国产大模型上线而热度攀升。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** ⭐87,752 (+650 today)  
  从零实现 ChatGPT 的教程项目，持续吸引教育者与研究者关注，体现底层理解的重要性回归。

#### 🔍 RAG/知识库
- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** ⭐29,503 (+2,100 today)  
  高性能向量搜索引擎，近期新增混合检索与语义缓存功能，巩固其在 RAG 流水线中的核心地位。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐49,488 (+1,800 today)  
  面向 AI Agent 的记忆层解决方案，支持长期记忆存储与上下文注入，解决 Agent 遗忘关键信息痛点。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐74,806 (+1,300 today)  
  融合 RAG 与 Agent 能力的下一代文档处理引擎，强调“智能上下文融合”，适合企业级知识管理。

---

### **趋势信号分析**

今日热榜显示，**Agent 开发与评测基础设施**正迎来爆发期：多个项目聚焦于“如何构建真正可用的智能体”——从 prompt 测试（promptfoo）、GUI 控制（page-agent）到沙箱环境（OpenSandbox）、记忆机制（mem0）均有覆盖。这反映出行业从“大模型即服务”向“**可执行的智能体生态**”演进的关键转折。

此外，**群体智能与预测建模**（如 MiroFish）首次进入 Trending 前十，暗示传统机器学习之外的新研究方向正在获得社区关注。同时，国产 LLM 快速迭代（如 DeepSeek、Kimi-K2.5）带动推理优化工具（vllm、ollama）流量激增，表明本地化部署与高效推理成为落地刚需。

---

### **社区关注热点**

- **promptfoo**：首个专为 AI 安全测试设计的开源工具，填补了 Agent 红队评估空白，适合安全敏感场景。
- **MiroFish**：以极简代码实现复杂群体行为模拟，可能开启新的通用智能研究路径。
- **page-agent**：阿里巴巴推出的 Web GUI Agent，为 SaaS 自动化提供标准化接口，极具商业化潜力。
- **mem0**：解决 AI Agent 记忆断裂问题，是迈向真正“持续学习”智能体的关键技术。
- **vllm + Ollama 组合**：低成本实现高性能推理部署，成为中小团队快速验证 LLM 应用的黄金搭档。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*