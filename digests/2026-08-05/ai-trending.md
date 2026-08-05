# AI 开源趋势日报 2026-08-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-05 01:54 UTC

---

# 📈 AI 开源趋势日报 | 2026-08-05

---

## 1. 今日速览
- **Agent 基建全面爆发**：Trending 榜单被 AI Agent 核心基础设施霸屏，覆盖**记忆管理**（腾讯 Agent Memory）、**安全可观测**（Uber ADR）、**语音交互**（LiveKit Agents）、**编码专用 Agent**（DeepSeek-Reasonix）及**技能框架**（Superpowers），标志着 Agent 从“原型演示”进入“工程化落地”关键期。
- **极致推理与边缘部署成焦点**：AirLLM 以单张 4GB 显存跑通 70B 模型登顶热榜，配合 Ollama、vLLM、Rust 原生推理引擎（Rig、Aarambh）热度，显示社区正大力攻克**大模型低成本、本地化、隐私优先**部署难题。
- **RAG 进入“后向量时代”**：Graphify（代码知识图谱）、PageIndex（无向量推理 RAG）、RAGFlow（Agentic RAG）等项目高星领跑，技术路线从单纯向量检索转向**图谱增强、推理式检索、长文本理解**，解决复杂知识场景幻觉与召回率痛点。
- **数据预处理成隐形赢家**：Firecrawl PDF Inspector 单日狂揽 2.5k+ Star，揭示**非结构化数据清洗、分类、智能路由**已成为 RAG/Agent 管线能否生产可用的关键瓶颈。
- **AI 原生工具链重塑开发体验**：Browser-use、Video-use、Compound Engineering Plugin 等项目将“Agent 操作浏览器/视频/IDE”标准化，预示**以 Agent 为中心的软件工程新范式**正在成型。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
| 项目 | Stars (总量/今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[ollama/ollama](https://github.com/ollama/ollama)** | ⭐177,797 | 本地大模型运行事实标准，今日依然是开发者入门和边缘部署首选，生态兼容性最强。 |
| **[vllm-project/vllm](https://github.com/vllm-project/vllm)** | ⭐88,195 | 高吞吐推理引擎霸主，生产环境 LLM Serving 必选，持续优化 PagedAttention 与分布式推理。 |
| **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** | ⭐161,073 | **AI 专用爬虫/抓取 API**，为 Agent/RAG 提供高质量网页/文档数据源，解决“数据最后一公里”。 |
| **[firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector)** | ⭐0 (+2,540 today) | **今日涨幅王**。Rust 编写的 PDF 智能分类/文本提取库，自动识别扫描件与文本版，为 RAG 入库做智能路由。 |
| **[lyogavin/airllm](https://github.com/lyogavin/airllm)** | ⭐0 (+1,711 today) | **极致显存优化**：单张 4GB 消费级 GPU 推理 70B 模型，打破硬件门槛，推动大模型真正普惠。 |
| **[browser-use/browser-use](https://github.com/browser-use/browser-use)** | ⭐107,885 | 让 Agent 像人一样操作浏览器，Web 自动化与 Agent 结合的标杆，支持多模态交互。 |
| **[huggingface/transformers](https://github.com/huggingface/transformers)** | ⭐163,338 | 模型定义与加载基石，配合 `accelerate`/`peft` 覆盖训练推理全链路，生态地位不可撼动。 |
| **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** | ⭐8,170 | Rust 原生 LLM 应用框架，类型安全、模块化强，适合构建高性能、可维护的生产级 Agent 系统。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
| 项目 | Stars (总量/今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[langgenius/dify](https://github.com/langgenius/dify)** | ⭐151,351 | **低代码 Agentic 工作流平台**，可视化编排 RAG/Agent/Tools，支持云/私有化部署，企业落地首选。 |
| **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** | ⭐143,431 | Agent 编程框架鼻祖，LCEL 表达式语言统一链式调用，生态最全，适合深度定制开发。 |
| **[livekit/agents](https://github.com/livekit/agents)** | ⭐0 (+432 today) | **实时语音/视频 Agent 框架**，基于 WebRTC 实现超低延迟多模态交互，语音助手/数字人核心基建。 |
| **[esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)** | ⭐30,824 (+922 today) | **DeepSeek 原生编码 Agent**，主打 Prefix Cache 稳定性，终端常驻运行，专为代码生成/重构设计。 |
| **[TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)** | ⭐0 (+1,111 today) | **团队级 Agent 记忆中枢**，将对话/文档/代码抽象为四大资产（Chat/Skill/Wiki/Code-Graph），跨框架共享。 |
| **[obra/superpowers](https://github.com/obra/superpowers)** | ⭐0 (+653 today) | **Agentic 技能框架**，定义标准化 Skill 协议，支持版本管理、依赖解析，让 Agent 能力可复用、可组合。 |
| **[uber/ADR](https://github.com/uber/ADR)** | ⭐0 (+148 today) | **企业级 Agent 安全/可观测平台**，Uber 生产实践沉淀，提供基准测试、威胁检测、审计日志，填补 AgentSec 空白。 |
| **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** | ⭐36,458 | **Agent 前端栈**，React 组件级集成 Agent，推行 AG-UI 协议，解决“Agent 怎么嵌入现有应用”难题。 |

### 📦 AI 应用（具体产品、垂直场景）
| 项目 | Stars (总量/今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[open-webui/open-webui](https://github.com/open-webui/open-webui)** | ⭐147,865 | **最强自托管 AI 界面**，支持 Ollama/OpenAI 等后端，功能对标 ChatGPT，隐私优先，社区插件生态繁荣。 |
| **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** | ⭐49,411 | **桌面级 AI 生产力工作室**，内置 300+ Assistant，多模型切换、知识库、MCP 支持，体验极致流畅。 |
| **[browser-use/video-use](https://github.com/browser-use/video-use)** | ⭐0 (+320 today) | **代码驱动视频剪辑**，Agent 理解时间轴/转场/特效，将视频制作纳入自动化流水线。 |
| **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** | ⭐101,620 | **一键生成高清短视频**，从脚本、素材、配音、字幕全流程自动化，内容创作者变现神器。 |
| **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** | ⭐43,020 | **文档/主题转原生 PPT**，输出可编辑 `.pptx`，支持动画/图表/母版复用，职场刚需刚被 AI 彻底解决。 |
| **[microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners)** | ⭐0 (+783 today) | **官方权威入门教程**，21 课覆盖 Prompt Engineering、RAG、Agent、安全，配套代码可直接跑通。 |
| **[santifer/career-ops](https://github.com/santifer/career-ops)** | ⭐62,800 | **AI 求职自动化**：爬招聘网、结构化打分、定制简历、跟踪投递，全流程本地 CLI 运行，数据不出本机。 |
| **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** | ⭐66,506 | **赋予 Agent “全网眼”**，零 API 费用聚合 Twitter/Reddit/YouTube/B 站/小红书等实时信息源。 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
| 项目 | Stars (总量/今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[pytorch/pytorch](https://github.com/pytorch/pytorch)** | ⭐102,183 | 动态图深度学习框架霸主，`torch.compile`、`FSDP`、`DTensor` 持续引领大规模训练工程化。 |
| **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** | ⭐196,804 | 静态图/生产部署老牌强者，TFX/Keras 生态完善，服务端推理（TF Serving）仍占据大量企业份额。 |
| **[huggingface/transformers](https://github.com/huggingface/transformers)** | ⭐163,338 | **模型 Hub + 统一 API**，`Trainer`/`PEFT`/`Accelerate` 覆盖全参/LoRA/QLoRA 微调全流程。 |
| **[ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)** | ⭐60,210 | **YOLO 系列官方库**，从 v8 到 v11/26 持续迭代，目标检测/分割/姿态/追踪一站式解决，工业级易用性。 |
| **[AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio)** | ⭐62 | **纯 Rust 从零构建 Decoder-only LLM**，无 Python/PyTorch 依赖，含 Gated DeltaNet、稀疏注意力、原生多模态，极客探索典范。 |
| **[genieincodebottle/generative-ai](https://github.com/genieincodebottle/generative-ai)** | ⭐2,584 | 系统性 Generative AI 学习库，含路线图、项目实战、面试准备，适合工程师快速补齐理论与工程鸿沟。 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
| 项目 | Stars (总量/今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** | ⭐86,831 | **Agentic RAG 引擎**，深度文档理解（表格/公式/版面）+ 图谱增强 + Agent 规划，企业级知识库首选。 |
| **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** | ⭐102,536 | **代码库知识图谱化**，AST 确定性解析构建图谱，边可解释，无向量存储，Claude Code/Cursor 技能首选。 |
| **[milvus-io/milvus](https://github.com/milvus-io/milvus)** | ⭐45,510 | 云原生向量数据库标杆，十亿级 ANN 检索，支持混合检索、多租户、GPU 加速，生产级可靠性最高。 |
| **[qdrant/qdrant](https://github.com/qdrant/qdrant)** | ⭐33,782 | Rust 写

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*