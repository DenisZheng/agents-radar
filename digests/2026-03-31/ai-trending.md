# AI 开源趋势日报 2026-03-31

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-31 00:11 UTC

---

# AI 开源趋势日报 | 2026-03-31

---

## 第一步：AI 相关性筛选

**Trending 榜单筛选结果**（10→7）：
| 保留 | 项目 | 理由 |
|:---|:---|:---|
| ✅ | microsoft/VibeVoice | 语音 AI 开源项目 |
| ✅ | luongnv89/claude-howto | Claude Code 开发指南 |
| ✅ | shanraisshan/claude-code-best-practice | Claude Code 最佳实践 |
| ✅ | hacksider/Deep-Live-Cam | AI 实时换脸/深度伪造 |
| ✅ | OpenBB-finance/OpenBB | AI Agent 金融数据平台 |
| ✅ | NousResearch/hermes-agent | AI Agent 框架 |
| ❌ | freeCodeCamp/freeCodeCamp | 编程教育，非 AI 核心 |
| ❌ | sherlock-project/sherlock | 社交媒体侦查工具 |
| ❌ | apache/superset | 数据可视化平台 |
| ❌ | fastfetch-cli/fastfetch | 系统信息工具 |

**主题搜索**：80 个项目全部保留（已按 topic 筛选）

---

## 第二步：分类体系

| 类别 | 核心定义 | 典型项目 |
|:---|:---|:---|
| 🔧 AI 基础工具 | 框架、SDK、推理引擎、开发工具、CLI | Ollama, vLLM, LangChain |
| 🤖 AI 智能体/工作流 | Agent 框架、自动化、多智能体协作 | AutoGPT, Dify, OpenHands |
| 📦 AI 应用 | 具体产品、垂直场景解决方案 | Cherry Studio, Khoj, OpenBB |
| 🧠 大模型/训练 | 模型权重、训练框架、微调工具 | Transformers, LlamaFactory, MiniMind |
| 🔍 RAG/知识库 | 向量数据库、检索增强、知识管理 | Milvus, Qdrant, RAGFlow |

---

## 第三步：AI 开源趋势日报

---

## 1. 今日速览

**Claude Code 生态爆发**：今日 Trending 前三席中两席为 Claude Code 相关教程（`claude-howto` 单日 +4232 stars，`claude-code-best-practice` +1108 stars），反映开发者对 AI 编程助手实战技能的迫切需求。微软开源 `VibeVoice` 进军语音 AI 前沿领域，单日斩获 2492 stars。NousResearch 的 `hermes-agent` 作为"可成长型 Agent"新范式登榜，智能体赛道持续升温。整体看，**AI 编程工具链**与**多模态 Agent 基础设施**成为今日双主线。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 今日动态 | 一句话说明 |
|:---|:---|:---|:---|
| [ollama/ollama](https://github.com/ollama/ollama) | 166,508 | 持续活跃 | 本地大模型运行的事实标准，已支持 Kimi-K2.5、GLM-5、MiniMax、DeepSeek 等最新模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 74,750 | — | 高吞吐 LLM 推理引擎，生产环境部署首选 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 131,669 | — | Agent 工程平台，从编排框架进化为完整开发生态 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 129,325 | — | 最友好的本地 AI 界面，Ollama 最佳搭档 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 101,339 | — | 网站转 LLM-ready 数据的 Web Data API，RAG 基础设施关键组件 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 85,107 | — | 让网站对 AI Agent 可访问，浏览器自动化新标准 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 43,843 | — | 从零构建 Claude Code 类 Agent  harness，"Bash is all you need" 极简理念 |

---

### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日动态 | 一句话说明 |
|:---|:---|:---|:---|
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 182,954 | — | 通用 AI Agent 先驱，持续迭代降低使用门槛 |
| [langgenius/dify](https://github.com/langgenius/dify) | 135,047 | — | 生产级 Agentic 工作流开发平台，企业落地首选 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 70,223 | — | AI 驱动软件开发，从代码生成到完整项目构建 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 18,558 | **+1851 today** | **今日登榜**："The agent that grows with you"——支持持续学习的成长型 Agent 新范式 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21,490 | — | ~400 个 MCP 服务器的 AI 自动化平台，Agent 与工作流深度整合 |
| [trycua/cua](https://github.com/trycua/cua) | 13,331 | — | 计算机使用 Agent（Computer-Use Agent）开源基础设施，支持 macOS/Linux/Windows 全桌面控制 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 29,870 | — | 前端 Agent 与生成式 UI 技术栈，AG-UI 协议制定者 |

---

### 📦 AI 应用

| 项目 | Stars | 今日动态 | 一句话说明 |
|:---|:---|:---|:---|
| [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | 0 | **+2492 today** | **今日重磅**：微软开源语音 AI 前沿项目，Open-Source Frontier Voice AI |
| [hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam) | 0 | **+1136 today** | **今日登榜**：单图实时换脸与一键视频深度伪造，低门槛 AI 视觉应用 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 64,519 | **+502 today** | 分析师、量化研究员与 AI Agent 的金融数据平台，今日 Trending 持续获关注 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 42,609 | — | AI 生产力工作室，集成 300+ 助手与自主 Agent |
| [khoj-ai/khoj](https://github.com/khoj-ai/khoj) | 33,723 | — | 自托管 AI 第二大脑，支持深度研究与自定义 Agent |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 23,213 | — | Google Workspace 官方 CLI，内置 AI Agent skills，企业办公自动化入口 |

---

### 🧠 大模型/训练

| 项目 | Stars | 今日动态 | 一句话说明 |
|:---|:---|:---|:---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 158,564 | — | 模型定义框架标杆，覆盖文本/视觉/音频/多模态全场景 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 98,662 | — | 动态神经网络与 GPU 加速核心基础设施 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 89,563 | — | 从零实现 ChatGPT 类 LLM，最受欢迎的 LLM 原理教程 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 69,271 | — | 100+ LLM/VLM 统一高效微调框架（ACL 2024） |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 44,787 | — | 2 小时从零训练 64M 参数 GPT，大模型原理极简复现 |
| [The-Pocket/PocketFlow](https://github.com/The-Pocket/PocketFlow) | 10,303 | — | 100 行代码的 LLM 框架，"Let Agents build Agents" |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 6,717 | — | Rust 生态的模块化 LLM 应用框架 |

---

### 🔍 RAG/知识库

| 项目 | Stars | 今日动态 | 一句话说明 |
|:---|:---|:---|:---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 76,625 | — | 领先的开源 RAG 引擎，融合前沿 RAG 与 Agent 能力 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 43,511 | — | 云原生高性能向量数据库，可扩展 ANN 搜索 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 51,507 | — | AI Agent 通用记忆层，解决长期上下文难题 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 29,930 | — | 下一代 AI 高性能大规模向量搜索引擎 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 23,334 | — | 无向量、基于推理的 RAG 文档索引新范式 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 14,795 | — | 6 行代码构建 AI Agent 记忆的知识引擎 |
| [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | 10,375 | — | [MLsys2026] 97% 存储节省的端侧私有 RAG |

---

## 3. 趋势信号分析

**爆发性关注：AI 编程工具链平民化**

今日最显著信号是 **Claude Code 生态的教程爆发**——`claude-howto` 以 +4232 stars 登顶，远超技术项目本身的热度，表明开发者已从"试用 AI 编程助手"进入"系统性掌握工程实践"阶段。这与 Anthropic 近期持续迭代 Claude Code、以及 Cursor、Windsurf 等工具的竞争加剧直接相关。

**新兴方向：成长型 Agent 与语音 AI 前沿**

`NousResearch/hermes-agent` 提出的"grows with you"（随用户成长）概念，标志着 Agent 设计从"功能交付"向"持续进化"演进；微软 `VibeVoice` 则补足了开源语音 AI 的版图，与 OpenAI 的 Realtime API 形成开源替代方案。

**技术栈迁移：MCP 协议成为 Agent 互联标准**

`activepieces` 强调 ~400 个 MCP 服务器支持，`langchain4j` 明确标注 MCP 工具调用能力，Model Context Protocol 正快速成为 Agent 与外部工具集成的"通用语言"，类似 HTTP 之于 Web 的地位初现。

---

## 4. 社区关注热点

- **🔥 [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto)** — 视觉化、示例驱动的 Claude Code 完全指南，含可直接复制的模板，解决"有工具不会用"的痛点，今日增速验证其刚需价值

- **🔥 [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)** — 微软罕见以"Frontier"定位开源语音项目，暗示可能包含实时语音合成/理解的前沿能力，值得持续跟踪技术细节发布

- **🔥 [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — "可成长 Agent"新范式，区别于静态 Prompt 工程，探索用户交互数据驱动的 Agent 自我改进机制

- **📌 [trycua/cua](https://github.com/trycua/cua)** — 计算机使用 Agent 基础设施，支持全桌面环境控制，是 GPT-4V 类"看屏幕操作"能力的开源工程化尝试

- **📌 [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — "无向量 RAG"挑战传统架构，以推理替代嵌入检索，若效果验证通过可能重塑知识库技术选型

---

*报告生成时间：2026-03-31 | 数据来源：GitHub Trending & Search API*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*