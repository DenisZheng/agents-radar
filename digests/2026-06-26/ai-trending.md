# AI 开源趋势日报 2026-06-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-26 00:40 UTC

---

# 🤖 AI 开源趋势日报 · 2026-06-26

---

## 📌 今日速览

今日 Trending 榜单 AI 相关项目占比超过 70%，**AI 智能体（Agent）生态全面爆发**成为主旋律。Google Labs 发布 DESIGN.md 规范、阿里开源 Page Agent、Calesthio 推出首个开源视频制作 Agent 系统，标志 AI Agent 正从开发者工具渗透到内容创作、Web交互、金融分析等垂直场景。AWS Agent Toolkit、Anthropic Cybersecurity Skills 等巨头入局表明**企业级 Agent 基础设施正在快速成型**。RAG/知识库赛道同样火热，claude-context、PageIndex 等项目显示"让 Agent 理解上下文"成为新的工程挑战。

---

## 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具）

| 项目 | Stars | 说明 |
|------|-------|------|
| [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | +1,475 today | Google Labs 提出的 AI Agent 设计系统规范文件，让 Agent 持久化理解项目视觉与交互设计体系 |
| [apple/container](https://github.com/apple/container) ⭐ | +1,351 today | Apple 官方 Swift 容器方案，用轻量 VM 在 Mac 上运行 Linux 容器，为本地 AI 开发环境提供底层支撑 |
| [garrytan/gstack](https://github.com/garrytan/gstack) | +767 today | 复刻 Garry Tan 的 Claude Code 全栈工具集——23 个 AI 工具分别扮演 CEO、设计师、工程经理等角色 |
| [aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws) | +47 today | AWS 官方 Agent 工具包，包含 MCP Servers、Skills 和插件，直接在 AWS 云上构建 Agent |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | +1,024 today | 一条命令克隆任意网站，利用 AI Coding Agent 自动重构前端代码 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | +571 today | 817 个结构化网络安全 Agent Skills，映射 MITRE ATT&CK 等 6 大框架，兼容 Claude Code / Codex / Cursor |
| [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | +644 today | 将 PDF、Office 等复杂文档转为 LLM 友好的 Markdown/JSON，直接面向 Agentic 工作流 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 84,327 | 高吞吐 LLM 推理引擎，已成为开源模型部署的事实标准 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,923 | 🤗 Transformers 多模态模型定义框架，持续领跑开源模型生态 |

---

## 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|------|-------|------|
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | +3,434 today 🔥 | **全球首个开源 Agentic 视频生产系统**——12 条管线、52 工具、500+ Agent Skills，将 AI 编程助手变为完整视频制作室 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 221,751 | Agent Harness 性能优化系统，提供 Skills、记忆、安全机制，支持 Claude Code / Codex / Cursor 等 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 203,062 | "与你一起成长的 Agent"——Nous Research 开源的自适应智能体 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,154 | AutoGPT 愿景：让每个人都能使用和构建 AI |
| [langgenius/dify](https://github.com/langgenius/dify) | 146,575 | 生产级 Agentic 工作流开发平台 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 100,684 | 让 AI Agent 轻松操作网页、自动化在线任务 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 88,548 | 多 Agent LLM 金融交易框架 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 78,336 | AI 驱动的开发助手 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 74,712 | 字节跳动开源的长期任务 SuperAgent Harness，支持沙箱、记忆、子 Agent |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 68,417 | 从零构建一个迷你 Claude Code 类 Agent Harness |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,606 | 开源超级 AI 助手与 Agent Harness，支持多模型多渠道 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 44,741 | 轻量级开源 AI Agent，面向工具、聊天与工作流 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 41,200 | 给 Agent 装上"眼睛"——一键读取 Twitter/Reddit/YouTube/B站/小红书 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 35,514 | Agent 前端栈与 AG-UI 协议，支持 React/Angular/Mobile |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 28,865 | 免费本地 24/7 Cowork 应用，集成 Claude Code / Codex / Gemini CLI 等 20+ Agent |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | +163 today | 阿里开源的网页内 GUI Agent，用自然语言控制 Web 界面 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | +287 today | 从 Vibe Coding 到 Agentic Engineering 的 Claude Code 最佳实践 |

---

## 📦 AI 应用（具体产品、垂直场景）

| 项目 | Stars | 说明 |
|------|-------|------|
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | +309 today | AI 时代伯克希尔：基于 Claude Code 的价值投资研究框架，融合巴菲特/芒格/段永平/李录方法论 + 多 Agent 对抗分析 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 55,732 | AI 求职系统，14 种技能模式 + Go 仪表盘 + PDF 批量处理 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 49,493 | LLM 驱动的多市场股票智能分析系统，支持零成本定时运行 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 47,798 | AI 生产力工作室，集成智能聊天、自主 Agent 与 300+ 助手 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 31,355 | AI 从任意文档生成可编辑 PPT，含原生动画与语音旁白 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 69,678 | 面向分析师、量化交易员和 AI Agent 的金融数据平台 |

---

## 🧠 大模型/训练（模型权重、训练框架、微调）

| 项目 | Stars | 说明 |
|------|-------|------|
| [ollama/ollama](https://github.com/ollama/ollama) | 174,910 | 本地运行 Kimi-K2.6、GLM-5.1、DeepSeek、Qwen 等模型的首选工具 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 195,910 | 开源 ML 框架王者，持续演进 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 101,024 | 动态神经网络 + GPU 加速的标杆框架 |
| [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) | 66,454 | Python 机器学习经典库 |
| [keras-team/keras](https://github.com/keras-team/keras) | 64,105 | 以人为本的深度学习 API |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 58,821 | YOLO 系列目标检测官方仓库 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | +267 today | 可靠、最小化、可扩展的基础模型与世界模型预训练库 |

---

## 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|------|-------|------|
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 84,295 | Agent 跨会话持久化上下文——自动捕获、AI 压缩、注入未来会话 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | 83,823 | 将 PDF/图像转为 AI 可理解的结构化数据，支持 100+ 语言 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 83,634 | 领先的开源 RAG 引擎，融合 Agent 能力构建 LLM 上下文层 |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | 72,112 | 将代码库/数据库/文档/视频等任何文件夹转为可查询知识图谱 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 62,110 | 本地优先的全功能 Agent 体验——Own your intelligence |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 59,461 | AI Agent 的通用记忆层 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 54,012 | 可视化构建 AI Agent |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 51,007 | 在工具输出/日志/RAG 块到达 LLM 前压缩 60-95% token |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 50,396 | 领先的文档 Agent 与 OCR 平台 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,957 | 高性能云原生向量数据库 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | 58,298 | 极速搜索引擎 API，带来 AI 混合搜索能力 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 33,420 | 📑 基于推理的无向量 RAG 文档索引——无需 embedding 即可检索 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 32,651 | 下一代大规模向量搜索引擎 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 22,449 | 开源 Agent AI 记忆平台，跨会话持久化长期记忆 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | 11,962 | Claude Code 代码搜索 MCP——让整个代码库成为 Agent 上下文 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | 10,716 | 面向多模态 AI 的嵌入式检索库 |

---

## 📊 趋势信号分析

今日榜单最强烈的信号是 **AI Agent 从"概念验证"走向"生产级工具链"**。三个关键趋势值得关注：

**1. Agent Harness 成为新战场。** Google Labs 的 DESIGN.md 规范、ECC 的性能优化、learn-claude-code 的从零教学、gstack 的 23 角色工具集——社区正在围绕"如何更好地编排 Agent"形成标准化共识。这与 Anthropic 持续迭代 Claude Code、OpenAI 推进 Codex CLI 形成呼应，表明 **Agent Harness 正成为 AI 开源的"新操作系统"**。

**2. 垂直场景 Agent 爆发。** OpenMontage（视频生产）、ai-berkshire（价值投资）、career-ops（求职）、daily_stock_analysis（股票分析）、TradingAgents（金融交易）等项目密集涌现，显示开发者正将 Agent 框架快速复制到各行业。**"X + Agent" 模式正在取代传统的"AI 平台"叙事**。

**3. RAG 基础设施向"Agent 记忆"演进。** claude-mem、mem0、cognee、graphify 等项目不再满足于静态检索，而是追求跨会话、跨模态的持久化记忆。PageIndex 的"无向量 RAG"和 headroom 的"token 压缩"则指向成本控制这一生产落地关键问题。

---

## ⭐ 社区关注热点

- 🔥 **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** — 日增 3,434 stars，首个开源 Agentic 视频生产系统，标志着 AI Agent 正式进军创意内容生产领域，值得持续关注其生态扩展。

- 🔥 **[google-labs-code/design.md](https://github.com/google-labs-code/design.md)** — Google 官方为 AI Agent 定义的设计规范文件，可能成为 Agent 理解设计系统的行业标准参考。

- 📈 **[alibaba/page-agent](https://github.com/alibaba/page-agent)** — 阿里开源的 Web GUI Agent，用自然语言控制网页界面，与 browser-use 形成中外对标，值得对比评估。

- 📈 **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** — 817 个结构化安全 Agent Skills，映射 6 大安全框架，企业级 Agent 安全合规的标杆实践。

- 💡 **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — "无向量 RAG"思路新颖，不依赖 embedding 模型即可做推理式检索，对成本敏感场景有重大价值。

---

*数据来源：GitHub Trending · GitHub Search API · 2026-06-26*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*