# AI 开源趋势日报 2026-04-07

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-04-07 00:22 UTC

---

**AI 开源趋势日报（2026-04-07）**

---

### **今日速览**  
今日 GitHub AI 生态呈现“边缘计算+智能体”双轮驱动态势：Google AI Edge 团队发布 LiteRT-LM 与 Gallery，推动端侧大模型部署进入实用阶段；NousResearch 的 Hermes-Agent 以 1,574 日增星跃居热榜第一，标志开源 Agent 框架正从研究走向工程化。同时，本地 RAG 工具链持续升温，Ollama 与 llama.cpp 合计获超 460 星，反映开发者对私有化、低延迟推理场景的深度需求。

---

### **各维度热门项目**

#### **🔧 AI 基础工具**
- **[Ollama](https://github.com/ollama/ollama)** ⭐167,676 (+196 today)  
  一键运行 Kimi-K2.5、DeepSeek、Qwen 等前沿模型的开源本地推理平台，支持 macOS/Linux/Windows，极大降低端侧部署门槛。
- **[ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)** ⭐0 (+267 today)  
  基于 C/C++ 的高性能 LLM 推理引擎，适配 CPU/GPU/ARM 异构硬件，今日新增星暴增显示其对轻量化部署的强吸引力。
- **[google-ai-edge/LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)** ⭐0 (+483 today)  
  Google 推出的轻量级端侧大模型推理库，专为移动设备优化，配合 Gallery 展示实现真正“离线可用”的 GenAI 体验。

#### **🤖 AI 智能体/工作流**
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐28,060 (+1,574 today)  
  首个声明“可成长”的智能体框架，提供记忆增强、任务分解与自主迭代能力，代表开源 Agent 架构从玩具向生产级演进。
- **[KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon)** ⭐0 (+733 today)  
  白盒自动化渗透测试 AI，通过源码分析生成真实漏洞利用链，填补安全领域 Agent 应用空白。
- **[kepano/obsidian-skills](https://github.com/kepano/obsidian-skills)** ⭐0 (+429 today)  
  为 Obsidian 知识库注入 Agent 能力的插件集，支持 Markdown/Bases 结构化操作，推动个人知识管理智能化。

#### **📦 AI 应用**
- **[immich-app/immich](https://github.com/immich-app/immich)** ⭐0 (+152 today)  
  自托管照片/视频管理平台，集成 AI 标签生成、人脸识别与隐私保护，满足家庭用户去中心化数字资产管理需求。
- **[siddharthvaddem/openscreen](https://github.com/siddharthvaddem/openscreen)** ⭐0 (+1,838 today)  
  免费商用无水印录屏工具，替代 Screen Studio，体现开源社区对创作者经济基础设施的支持。
- **[NVIDIA/personaplex](https://github.com/NVIDIA/personaplex)** ⭐0 (+295 today)  
  NVIDIA 发布的角色化 AI 代理系统原型，探索多智能体协同交互在虚拟助手中的应用潜力。

#### **🧠 大模型/训练**
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** ⭐45,796 [topic:llm-model]  
  2 小时从零训练 64M 参数 GPT 的极简教程与代码，极低成本验证 LLM 训练可行性，适合教育与小规模实验。
- **[huggingface/transformers](https://github.com/huggingface/transformers)** ⭐158,896 [topic:llm]  
  支持 1000+ 模型的统一接口框架，涵盖文本、视觉、音频多模态，仍是工业界与学术界首选开发底座。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** ⭐90,152 [topic:llm]  
  手把手 PyTorch 实现 ChatGPT 原理的教学项目，持续吸引初学者理解 Transformer 底层机制。

#### **🔍 RAG/知识库**
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐77,249 [topic:rag]  
  融合检索与 Agent 的下一代 RAG 引擎，支持多模态文档处理与企业级权限控制，解决传统 RAG 上下文碎片化问题。
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** ⭐43,621 [topic:rag]  
  高性能向量数据库，支撑千万级向量实时检索，是构建大规模 RAG 系统的核心基础设施。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐52,101 [topic:rag]  
  为 AI Agents 提供持久化记忆层，实现跨会话状态保持与经验复用，提升 Agent 长期交互能力。

---

### **趋势信号分析**

今日热榜凸显三大趋势：  
1. **端侧 AI 加速落地**：Google 连续发布 LiteRT-LM 与 Gallery，结合 llama.cpp 的生态强化，表明移动端与嵌入式设备上的实时推理正成为新战场；  
2. **Agent 工程化突破**：Hermes-Agent 单日暴涨 1.5k 星，Shannon 白盒攻防实战化，反映社区从概念验证转向可落地的智能体架构设计；  
3. **RAG 与 Agent 深度耦合**：LightRAG、ragflow 等强调“动态知识更新”与“主动推理”，预示下一代 RAG 将从被动检索进化为主动认知代理。  
值得注意的是，**零服务器代码智能体（如 GitNexus）** 首次登榜，标志浏览器内全链路 AI 代码理解成为可能，可能开启 IDE 新范式。

---

### **社区关注热点**

- **LiteRT-LM + Ollama 组合**：端到端本地模型部署闭环初现，适合隐私敏感场景快速搭建私有 AI 服务；  
- **Hermes-Agent 的成长型架构**：若其记忆与规划模块开源，或重塑开源 Agent 开发范式；  
- **shannon 白盒渗透测试**：将 AI 安全从被动防御推向主动发现，填补 DevSecOps 自动化缺口；  
- **minimind 极速训练方案**：极低资源门槛推动 LLM 民主化，激发个人研究者创新活力；  
- **GitNexus 客户端知识图谱**：无需后端即可实现代码智能导航，挑战传统 LSP 工具链。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*