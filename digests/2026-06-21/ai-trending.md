# AI 开源趋势日报 2026-06-21

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-21 00:43 UTC

---

# AI 开源趋势日报 · 2026-06-21

---

## 第一步：AI 相关性过滤

**Trending 榜单中排除的非 AI 项目：**
- `penpot/penpot` — 通用设计工具，非 AI
- `tursodatabase/turso` — SQLite 兼容数据库，非 AI
- `Kong/insomnia` — API 客户端，非 AI
- `tw93/Pake` — 网页转桌面工具，非 AI
- `pppscn/SmsForwarder` — 短信转发器，非 AI

**Trending 保留的 AI 相关项目（12 个）：**
palmier-pro、OpenMontage、codebase-memory-mcp、timesfm、twenty、headroom、voicebox、kilocode、skills、flue、awesome-artificial-intelligence、jcode

**主题搜索中排除的非 AI 项目：**
- `Developer-Y/cs-video-courses` — CS 课程列表
- `thedaviddias/Front-End-Checklist` — 前端检查清单
- `tesseract-ocr/tesseract` — 传统 OCR 引擎（非 AI 驱动）
- `JuliaLang/julia` — 编程语言
- `apache/airflow` — 工作流调度
- `streamlit/streamlit` — 数据应用框架
- `oceanbase/oceanbase` — 通用数据库

---

## 第二步 & 第三步：分类报告

---

### 1. 今日速览

今日 AI 开源社区的最大信号是 **Agent 基础设施的全面爆发**——从代码智能 MCP 服务器（codebase-memory-mcp +1271⭐）、Agent 技能系统（skills +1395⭐）到 Agent 沙箱框架（flue），开发者工具链正在围绕"让 Agent 真正可用"快速补齐。**上下文压缩与效率优化**成为新热点，headroom（+3795⭐，今日全榜最高）以 60-95% 的 token 压缩率直击 Agent 成本痛点。**垂直 AI 应用**持续涌现，视频制作（OpenMontage、palmier-pro）、语音合成（voicebox）等场景加速 Agent 化。与此同时，Google Research 的时间序列基础模型 TimesFM 登榜，标志着 **Foundation Model 正在向非文本领域快速扩张**。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 说明 |
|------|-------|------|
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | +1271 today | 高性能代码智能 MCP 服务器，将代码库索引为持久知识图谱，支持 158 语言、亚毫秒查询、99% token 压缩，今日 Trending 最强 AI 基础工具 |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | +3795 today | 今日全榜最高！在数据到达 LLM 前压缩工具输出/日志/RAG 块，实现 60-95% token 节省，提供库/代理/MCP 三种形态 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | +1395 today | 从真实 .claude 目录提炼的 Agent Skills 集合，定义了 Agent 技能系统的工程化实践标准 |
| [withastro/flue](https://github.com/withastro/flue) | +316 today | Astro 团队出品的沙箱 Agent 框架，为 Agent 提供安全隔离的执行环境 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | +87 today | 轻量级 Coding Agent Harness，Rust 实现，面向 Agent 编排层 |
| [Kilo-Org/kilocode](https://github.com/Kilo-Org/kilocode) | +513 today | 全栈 Agentic 工程平台，整合编码 Agent 的完整开发-部署-迭代链路 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 218,853⭐ [llm] | Agent 性能优化系统，覆盖 Skills/Instincts/Memory/Security，兼容 Claude Code/Codex/Cursor 等主流 Agent |
| [ollama/ollama](https://github.com/ollama/ollama) | 174,613⭐ [llm] | 本地 LLM 推理标杆，已支持 Kimi-K2.6/GLM-5.1/DeepSeek/Qwen 等最新模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 83,432⭐ [llm] | 高吞吐 LLM 推理引擎，生产部署首选 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 72,010⭐ [llm] | 字节开源的长期任务 SuperAgent 框架，集成沙箱/记忆/工具/子 Agent |

#### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|------|-------|------|
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | +677 today | 全球首个开源 Agentic 视频制作系统，12 条管线、52 个工具、500+ Agent 技能，将 AI 编程助手变为完整视频工作室 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 67,578⭐ [ai-agent] | "Bash is all you need"——从零构建类 Claude Code 的 Agent Harness，Agent 架构教学范本 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 47,591⭐ [ai-agent] | AI 生产力工作室，集成智能聊天、自主 Agent、300+ 助手，统一接入主流 LLM |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,494⭐ [ai-agent] | 开源超级 AI 助手与 Agent Harness，支持任务规划/工具调用/记忆自进化，多模型多渠道 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 44,487⭐ [ai-agent] | 轻量级开源 AI Agent，面向工具/聊天/工作流场景 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 35,339⭐ [ai-agent] | Agent 前端栈与生成式 UI 框架，制定 AG-UI 协议标准 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | 44,529⭐ [ai-agent] | 隐私优先的个人知识管理软件，深度集成 Agent 能力 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 77,847⭐ [llm] | AI 驱动开发平台，Agent 编码实践标杆 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,048⭐ [llm] | 经典自主 Agent 框架，持续迭代中 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 198,310⭐ [llm] | "与你一起成长的 Agent"，Nous Research 出品 |

#### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 说明 |
|------|-------|------|
| [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | +902 today | 为 AI 打造的 macOS 视频编辑器，Swift 原生，今日 Trending 前列 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | +145 today | 开源 AI 语音工作室，支持声音克隆/听写/创作 |
| [twentyhq/twenty](https://github.com/twentyhq/twenty) | +140 today | 开源 Salesforce 替代方案，为 AI 场景重新设计 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 29,629⭐ [ai-agent] | AI 从任意文档生成可编辑 PPT，原生形状/动画/语音旁白 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 35,891⭐ [ai-agent] | 赋予 Agent 互联网视觉，零 API 费用读取 Twitter/Reddit/YouTube/GitHub 等 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 43,532⭐ [ai-agent] | LLM 驱动的多市场股票智能分析系统，零成本定时运行 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 54,991⭐ [ai-agent] | 基于 Claude Code 的 AI 求职系统，14 种技能模式 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 99,744⭐ [llm] | 让网站对 AI Agent 可访问，自动化在线任务 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 135,799⭐ [llm] | 大规模网页搜索/抓取/交互 API，Agent 数据采集基础设施 |

#### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 说明 |
|------|-------|------|
| [google-research/timesfm](https://github.com/google-research/timesfm) | +433 today | Google Research 的时间序列基础模型，Foundation Model 向非文本领域扩张的标志 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,754⭐ [llm] | 🤗 Transformers：文本/视觉/音频/多模态模型定义框架，行业标准 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 72,312⭐ [llm] | 100+ LLM/VLM 统一高效微调框架，ACL 2024 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 139,773⭐ [llm] | Agent 工程平台，LLM 应用开发事实标准 |
| [langgenius/dify](https://github.com/langgenius/dify) | 145,969⭐ [llm] | 生产级 Agentic 工作流开发平台 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,108⭐ [llm-model] | LLM 评测平台，支持 100+ 数据集、覆盖主流模型 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 195,783⭐ [ml] | 开源机器学习框架基石 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 100,911⭐ [ml] | 动态神经网络与 GPU 加速，深度学习训练首选 |

#### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|------|-------|------|
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 83,398⭐ [rag] | Agent 跨会话持久上下文，AI 压缩注入，兼容 Claude Code/Codex/Gemini 等 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 83,247⭐ [rag] | 领先的开源 RAG 引擎，融合 Agent 能力 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 58,993⭐ [rag] | AI Agent 通用记忆层，跨会话持久化 |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | 69,915⭐ [rag] | 将任意代码/文档/图像/视频转为可查询知识图谱，多 Agent 兼容 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,858⭐ [rag] | 高性能云原生向量数据库，大规模 ANN 搜索 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 32,496⭐ [vector-db] | 下一代高性能向量搜索引擎 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 33,247⭐ [vector-db] | 无向量的推理型 RAG 文档索引，新范式探索 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 18,296⭐ [vector-db] | Agent 长期记忆平台，自托管知识图谱引擎 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 12,450⭐ [vector-db] | MLsys2026 收录，个人设备上 97% 存储节省的 RAG 方案 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 61,860⭐ [rag] | 本地优先的全功能 Agent 体验平台 |

---

### 3. 趋势信号分析

今日最突出的趋势是 **Agent 基础设施的"最后一公里"竞赛**。headroom（+3795⭐）和 codebase-memory-mcp（+1271⭐）同日大热，分别解决 Agent 运行中的 **成本效率** 和 **代码理解** 两大核心痛点——前者将 token 消耗压缩 60-95%，后者将代码库查询降至亚毫秒级。这标志着社区关注点已从"能不能跑"转向"能不能高效、经济地跑"。

**Agent Skills 生态正在成型**。mattpocock/skills（+1395⭐）从真实工程实践提炼技能集合，OpenMontage 内置 500+ Agent 技能，affaan-m/ECC 将 Skills 列为 Agent 性能优化的核心模块——Skills 正成为 Agent 开发的新抽象层，类比微服务时代的 API 规范。

**Foundation Model 边界持续外扩**。Google Research 的 TimesFM 登榜，将预训练基础模型范式从 NLP/CV 延伸至时间序列预测，预示着金融、物联网、运维等领域的"基础模型化"即将加速。

**垂直场景 Agent 化进入爆发期**。视频制作（OpenMontage、palmier-pro）、语音合成（voicebox）、求职（career-ops）、股票分析（daily_stock_analysis）……Agent 正从通用助手快速渗透到具体工作流，"Agent + 垂直场景"成为开源创业新热点。

---

### 4. 社区关注热点

- **🔥 [chopratejas/headroom](https://github.com/chopratejas/headroom)** — 今日全榜最高 +3795⭐，token 压缩是 Agent 规模化部署的核心瓶颈，该项目以极简方案直击痛点，值得立即评估集成
- **🧩 [mattpocock/skills](https://github.com/mattpocock/skills)** — Agent Skills 正在成为新的工程化标准，这个从真实 .claude 目录提炼的技能集合是理解 Agent 能力扩展的最佳实践参考
- **📊 [google-research/timesfm](https://github.com/google-research/timesfm)** — Google Research 的时间序列基础模型，标志着 Foundation Model 向非文本领域扩张，对量化金融、运维预测等方向影响深远
- **🎬 [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** — 首个开源 Agentic 视频制作系统，500+ Agent 技能 + 12 条管线，展示了 Agent 在创意生产领域的完整落地路径
- **🧠 [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)** — MCP 协议 + 代码知识图谱 + 99% token 压缩，代表了 Coding Agent 记忆层的最前沿工程实践

---

*数据来源：GitHub Trending (2026-06-21) + GitHub Search API 主题标签 | 分析：OWL*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*