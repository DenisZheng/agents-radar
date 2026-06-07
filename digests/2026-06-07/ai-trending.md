# AI 开源趋势日报 2026-06-07

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-07 00:40 UTC

---



# 🤖 AI 开源趋势日报 · 2026-06-07

---

## 1. 今日速览

今日 GitHub AI 开源生态呈现明显的 **Agent 基础设施爆发** 态势。以 Agent 技能框架、多平台信息检索、前端 Agent 交互协议为代表的项目集中登榜，标志着 AI 应用开发正从"模型调用"快速迈向"Agent 工程化"阶段。**记忆系统**（Memory）成为独立赛道受到热捧，多个专注 Agent 记忆管理的项目同时出现在趋势榜中。与此同时，**NotebookLM 开源替代方案**和 **OCR-to-LLM 数据管道**的活跃，反映出开发者对 Google 生态闭源产品的开源替代需求持续旺盛。微软也在今日同时推送了语音 AI 和系统级隔离两个方向的开源项目，布局全栈 AI 基础设施。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 说明 |
|------|-------|------|
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 33,206 (+631 今日) | Agent 前端交互栈与 AG-UI 协议制定者，今日热榜第一，正在定义 Agent 与用户界面之间的标准通信协议 |
| [obra/superpowers](https://github.com/obra/superpowers) | — (+700 今日) | 爆火的 Agentic Skills 框架与软件开发方法论，今日新增 700 stars，将"技能"概念系统化注入 AI Agent 开发流程 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | — (+683 今日) | 给 AI Agent 装上"眼睛"——一个 CLI 工具即可零费用读取 Twitter、Reddit、YouTube、Bilibili 等全网平台内容 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | — (+439 today) | AI Agent 技能插件，自动跨 Reddit、X、YouTube、HN、Polymarket 研究任意主题并生成综合摘要 |
| [danielmiessler/Personal_AI_Infrastructure](https://github.com/danielmiessler/Personal_AI_Infrastructure) | — (+70 today) | 面向个人用户的 Agentic AI 基础设施框架，核心理念是"放大人类能力"而非替代 |
| [openai/plugins](https://github.com/openai/plugins) | — (+213 today) | OpenAI 官方插件仓库重新活跃，可能与近期 Agent 工具生态扩展有关 |
| [microsoft/mxc](https://github.com/microsoft/mxc) | — (+64 today) | 微软开源的策略驱动分层隔离与容器技术，为 AI Agent 提供安全沙箱运行环境 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|------|-------|------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 184,764 | "与你一起成长的 Agent"，NousResearch 出品的高星 Agent 框架，强调自适应与持续进化能力 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 65,052 | "Bash is all you need"——从零构建类 Claude Code 的 Agent 极简脚手架，教学与实践兼备 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,098 | 开源超级 AI 助手与 Agent 框架，支持任务规划、工具调用、记忆与知识自主增长，多模型多渠道 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 43,792 | 轻量级开源 AI Agent，面向工具、聊天与工作流场景，香港大学 DS 实验室出品 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 33,206 (+631 今日) | 同时归入此类——AG-UI 协议正在成为 Agent-前端交互的行业标准 |
| [nocobase/nocobase](https://github.com/nocobase/nocobase) | 22,667 | 开源 AI + 无代码平台，AI 叠加在成熟基础设施之上而非从零生成，兼顾速度与可靠性 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 49,346 (+193 今日) | 基于 Claude Code 的 AI 求职系统，14 种技能模式 + Go 仪表盘 + PDF 生成 + 批处理，Agent 垂直应用典范 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 24,809 | AI 从任意文档生成真正可编辑的 PPT，支持原生形状动画、语音旁白和自定义模板 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 23,667 | 将任意网站转化为 CLI 工具供 AI Agent 调用，利用已登录浏览器状态，打通 Agent 与 Web 的最后一公里 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 26,892 | Google Workspace 统一 CLI 工具，内置 AI Agent 技能，覆盖 Drive、Gmail、Calendar 等全套办公场景 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 说明 |
|------|-------|------|
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | — (+794 今日) | Google NotebookLM 的开源实现，功能更灵活更丰富，今日热榜新增最高之一，开源替代闭源产品的典型 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 46,984 | AI 生产力工作室，集成智能聊天、自主 Agent 与 300+ 助手，统一接入主流前沿 LLM |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 41,063 | LLM 驱动的 A 股/港股/美股智能分析系统，零成本定时运行，多数据源 + 实时新闻 + LLM 决策仪表盘 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 27,718 | 免费本地开源的 24/7 AI 协作桌面端，统一接入 OpenClaw、Hermes Agent、Claude Code 等 20+ CLI 助手 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | 80,962 (+433 今日) | 将 PDF/图像转为 AI 可理解的结构化数据，支持 100+ 语言，是图像到 LLM 的关键桥梁 |
| [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | — (+216 今日) | 微软开源的前沿语音 AI 模型，今日新上榜，布局语音交互入口 |
| [openai/whisper](https://github.com/openai/whisper) | — (+150 今日) | OpenAI 的鲁棒语音识别模型持续活跃，作为基础设施级工具保持稳定关注度 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 说明 |
|------|-------|------|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 209,157 | Agent 性能优化系统，覆盖 Skills、Instincts、Memory、Security，面向 Claude Code/Codex/Cursor 等主流编码 Agent |
| [ollama/ollama](https://github.com/ollama/ollama) | 173,395 | 本地 LLM 运行工具，已支持 Kimi-K2.6、GLM-5.1、DeepSeek、Qwen 等最新模型 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,362 | 🤗 Transformers 持续作为模型定义与训练的核心框架，覆盖文本、视觉、音频与多模态 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 82,077 | 高吞吐、内存高效的 LLM 推理与服务引擎，生产部署标配 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 96,774 | 从零用 PyTorch 实现类 ChatGPT 大模型，最佳 LLM 入门教程之一 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 51,235 | 2 小时从零训练 64M 参数 LLM，极简实现让大模型训练不再神秘 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,062 | 支持 100+ 数据集、覆盖 Llama/Mistral/GPT-4/GLM/Claude 等主流模型的 LLM 评测平台 |
| [BrainBlend-AI/atomic-agents](https://github.com/BrainBlend-AI/atomic-agents) | 5,965 | "原子化"构建 AI Agent 的框架，强调模块化与可组合性 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|------|-------|------|
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | — (+446 今日) | 基准测试成绩最佳的开源 AI 记忆系统，今日新上榜即获 446 stars，Agent 记忆赛道强力新玩家 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 80,985 | 跨会话持久化 Agent 上下文，AI 压缩后注入未来会话，兼容 Claude Code/OpenClaw/Codex 等主流 Agent |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 57,897 | AI Agent 通用记忆层，已成为 Agent 记忆基础设施的事实标准之一 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 61,157 | 本地优先的全功能 Agent 体验平台，"停止租用你的智能"——强调数据自主权 |
| [pathwaycom/llm-app](https://github.com/pathwaycom/llm-app) | 59,424 | 即开即用的 RAG 与 AI 流水线云模板，实时同步 SharePoint/Google Drive/S3/Kafka 等数据源 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,661 | 高性能云原生向量数据库，大规模向量 ANN 搜索的行业标准 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 31,862 | 高性能大规模向量搜索引擎，Rust 实现，提供云托管版本 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 32,661 | 无向量的推理型 RAG 文档索引方案，探索不依赖传统向量嵌入的检索新路径 |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | 27,746 | 汇集各种高级 RAG 技术的教程仓库，每个技术配有详细 Notebook 教程 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 17,702 | 6 行代码为 AI Agent 添加记忆平台，极简 API 设计 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 11,882 | MLsys'26 收录：全场景 RAG，节省 97% 存储，在个人设备上运行快速、精确、100% 私密的 RAG 应用 |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | 60,618 | 将代码库、SQL 架构、文档、图像、视频转化为可查询知识图谱的 AI 编码助手技能 |

---

## 3. 趋势信号分析

今日热榜最突出的信号是 **Agent 工程化基础设施的全面爆发**。具体来看：

**Agent Skills 框架成为新热点。** `obra/superpowers`（+700 stars）和 `mvanhorn/last30days-skill`（+439 stars）同日登榜，表明社区正在将"技能"（Skills）作为 Agent 能力扩展的核心抽象单元。这与 Anthropic 近期推动的 Agent 工具生态方向高度吻合——开发者不再满足于简单的 function calling，而是追求可复用、可组合、可共享的 Skill 模块体系。

**Agent 记忆（Memory）独立成赛道。** `MemPalace/mempalace`（+446 stars）和 `thedotmack/claude-mem`（80,985 总星）的同时高热，说明 Agent 的长期记忆与上下文持久化已从附属功能演变为独立的基础设施需求。`MemPalace` 自称"基准测试最佳"，预示着记忆系统将进入性能竞赛阶段。

**前端 Agent 交互协议标准化。** `CopilotKit/CopilotKit` 作为 AG-UI 协议的制定者登上今日热榜第一（+631 stars），意味着 Agent 与用户界面之间的通信协议正在走向标准化，这将深刻影响未来 Agent 应用的前端架构设计。

**开源替代闭源 AI 产品趋势加速。** `open-notebook`（+794 今日，热榜新增最高）作为 Google NotebookLM 的开源替代方案，反映出开发者社区对 Google 闭源 AI 产品的强烈替代需求。

**安全与隔离配套跟进。** 微软 `mxc` 项目（策略驱动的分层隔离）的上榜，表明随着 Agent 能力增强，安全沙箱与运行时隔离正在成为配套刚需。

---

## 4. 社区关注热点

- **🔥 [obra/superpowers](https://github.com/obra/superpowers)** — Agentic Skills 框架与软件开发方法论，今日 +700 stars，可能定义下一代 Agent 开发范式，值得立即关注其技能系统设计理念

- **🧠 [MemPalace/mempalace](https://github.com/MemPalace/mempalace)** — 新上榜即获 446 stars 的开源 AI 记忆系统，自称基准测试最佳，Agent 记忆赛道可能迎来新一轮竞争，建议对比评估其与 mem0、claude-mem 的差异

- **📓 [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook)** — NotebookLM 开源替代方案，今日热榜新增最高（+794），对 Google 闭源 AI 产品的开源替代浪潮正在加速

- **🌐 [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** — 零费用让 Agent 读取全网多平台内容，解决了 Agent 获取实时信息的关键痛点，可能成为 Agent 工具链标配

- **🔗 [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** — AG-UI 协议正在成为 Agent-前端交互的行业标准，今日热榜第一，建议前端开发者提前了解其协议设计

---

*数据来源：GitHub Trending（2026-06-07）& GitHub Topic Search API | 分析时间：2026-06-07*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*