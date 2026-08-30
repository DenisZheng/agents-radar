# AI 开源趋势日报 2026-08-30

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-30 02:59 UTC

---

# 📈 AI 开源趋势日报 | 2026-08-30

---

## 1. 今日速览

- **Agent Skills 标准化与生态爆发**：以 `scientific-agent-skills`（+1.5k⭐）、`archify`（+3.9k⭐）、`agent-skills` 为代表，**“技能即插件”**已成为 AI 编码代理的核心扩展范式，社区正从单一模型能力竞争转向**工程化技能库**的构建竞赛。
- **Agentic Application（智能体原生应用）加速落地**：视频生产 `OpenMontage`、代码生成 `screenshot-to-code`、空间情报 `gods-eye-view`、多智能体教学 `OpenMAIC` 等垂直场景项目冲榜，标志着“Agent + Workflow”模式从演示走向**生产级交付**。
- **模型路由与推理基建成刚需**：`workweave/router`（<50ms 路由、降本 40-70%）与 `Osmantic/ODS`（一键自建 AI 服务器）高热度揭示：企业级落地的关键瓶颈已从“模型智商”转移到**多模型编排、成本控制与私有化部署**。
- **RAG/向量库生态进入深水区**：Topic 榜单显示 `ragflow`、`milvus`、`qdrant`、`mem0`、 `LightRAG` 等头部项目星标极高且稳定，技术焦点从“向量检索”转向**知识图谱融合、长期记忆层、Token 压缩优化**（如 `headroom`、`cognee`、`LEANN`）。
- **大模型训练/评估工具链持续下沉**：`minimind`（2h 训练 64M 模型）、`opencompass`（评测平台）、`tiny-llm`（边缘推理）显示开发者对**模型可控性、边缘部署、低成本训练**的强烈需求。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars (Total / Today) | 一句话说明 |
| :--- | :--- | :--- |
| **[ollama/ollama](https://github.com/ollama/ollama)** | 179,746 / — | 本地大模型运行标杆，新增支持 Kimi-K2.6/GLM-5.2 等最新 SOTA 模型，是私有化部署首选。 |
| **[workweave/router](https://github.com/workweave/router)** | — / **+284** | **今日热榜新秀**：生产级模型路由器，<50ms 决策、自动降本 40-70%，解决多模型编排核心痛点。 |
| **[Osmantic/ODS](https://github.com/Osmantic/ODS)** | — / **+35** | 一键将 PC/Mac/Linux 变为全功能 AI 服务器（推理、RAG、Agent、语音、图像），极致简化私有化部署。 |
| **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** | 174,112 / — | 面向 LLM 的网页抓取/搜索 API，Agent 联网获取实时知识的标准基础设施。 |
| **[affaan-m/ECC](https://github.com/affaan-m/ECC)** | 244,298 / — | Agent Harness 性能优化系统，为 Claude Code/Cursor 等提供 Skills、Memory、Security 一体化增强。 |
| **[JetBrains/go-modern-guidelines](https://github.com/JetBrains/go-modern-guidelines)** | — / **+303** | 官方出品：指导 AI 编码助手编写现代化 Go 代码的规范与提示词工程实践。 |
| **[huggingface/transformers](https://github.com/huggingface/transformers)** | 164,618 / — | 模型定义与推理的行业标准库，支撑文本/视觉/音频/多模态全栈开发。 |
| **[langgenius/dify](https://github.com/langgenius/dify)** | 153,850 / — | 低代码构建 Agentic Workflow/RAG 的协作平台，支持云/私有化部署，原型转生产首选。 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体、Skills 生态）

| 项目 | Stars (Total / Today) | 一句话说明 |
| :--- | :--- | :--- |
| **[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)** | — / **+1,587** | **今日涨幅第 3**：面向科研的 Agent Skills 库，165+ 验证技能覆盖生物/化学/医药，兼容主流 Agent 标准。 |
| **[tt-a1i/archify](https://github.com/tt-a1i/archify)** | — / **+3,902** | **今日 Trending 冠军**：Agent 技能，自动生成可验证的架构/流程/时序/数据流图（自包含 HTML），文档即代码新范式。 |
| **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** | 238,169 / — | “与你共成长”的个性化 Agent，强调长期记忆、自我进化与用户对齐。 |
| **[THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC)** | — / **+907** | 清华团队出品：一键启动的多智能体交互式教室，展示教育场景多 Agent 协作新范式。 |
| **[browser-use/browser-use](https://github.com/browser-use/browser-use)** | 111,674 / — | 让网站对 Agent 可访问，Web 自动化任务执行的标准化工具层。 |
| **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** | 37,108 / — | Agent 前端技术栈（React/Angular/Mobile），AG-UI 协议制定者，解决“Agent 如何渲染交互 UI”难题。 |
| **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** | — / **+196** | Google Chrome 团队出品：面向生产环境的 AI 编码 Agent 工程化技能集。 |
| **[langchain-ai/langgraph](https://github.com/langchain-ai/langgraph)** | 40,685 / — | 构建有状态、多 Actor、可持久化的复杂 Agent 工作流的核心编排框架。 |

---

### 📦 AI 应用（垂直场景解决方案、生产级产品）

| 项目 | Stars (Total / Today) | 一句话说明 |
| :--- | :--- | :--- |
| **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** | — / **+806** | **全球首个开源 Agentic 视频制作系统**：12 条流水线、700+ 技能文件，将编码助手变身视频工作室。 |
| **[abi/screenshot-to-code](https://github.com/abi/screenshot-to-code)** | — / **+550** | 截图转干净代码，支持 HTML/Tailwind/React/Vue，前端重构与原型落地利器。 |
| **[bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view)** | — / **+1,855** | 浏览器端实时间谍卫星模拟器，融合真实开源空间情报的照级 3D 地球，地理空间 AI 应用标杆。 |
| **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** | 50,220 / — | 文档/主题一键生成原生 PPT（形状/动画/图表/备注音

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*