# AI 开源趋势日报 2026-08-25

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-25 00:54 UTC

---

#  📈 AI 开源趋势日报 | 2026-08-25

---

## 1. 今日速览
- **终端原生编码 Agent 爆发**：OpenAI Codex、OpenClaw、DeepSeek-Reasonix 等工具将 AI 编程能力下沉至 CLI，Rust 成系统级 Agent 首选语言。
- **“技能即配置”成新范式**：Andrej Karpathy 的 Claude Code 技能文件、VoltAgent 的 1000+ Agent Skills 集合，标志着 Agent 能力从 Prompt Engineering 向结构化、可版本化的 Skill 定义演进。
- **本地优先/隐私优先成主流共识**：Hermes Agent、OpenHuman、Ollama、OpenClaw 强调数据本地化、无账号、无遥测，回应开发者对数据主权的强诉求。
- **LLM 网关/聚合层刚需显现**：FreeLLMAPI 聚合 34 家免费提供商、74 亿 Token/月，解决成本与访问限制痛点。
- **RAG 向 GraphRAG 与记忆层进化**：Graphify、LightRAG、Mem0、Cognee 将知识图谱、长期记忆与向量检索融合，解决长上下文幻觉与碎片化知识问题。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI、网关）
| 项目 | Stars 数据 | 一句话解读 |
| :--- | :--- | :--- |
| **[openai/codex](https://github.com/openai/codex)** | 今日新增 **+1,994** ⭐ | OpenAI 官方出品的轻量级终端编码 Agent，Rust 编写，零配置即用，标志着顶级模型厂商正式下场抢占 CLI 编程入口。 |
| **[apache/maka](https://github.com/apache/maka)** | 今日新增 **+411** ⭐ | Apache 孵化项目，本地优先的 AI Agent 工作区，采用追加-only 日志记录所有交互，为 Agent 运行提供可审计、可复现的基础设施。 |
| **[tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi)** | 今日新增 **+174** ⭐ | 聚合 34 个免费 LLM 提供商、635 个模型端点的统一 `/v1` 网关，智能路由与自动降级，极大降低个人开发者调用成本与可用性焦虑。 |
| **[ollama/ollama](https://github.com/ollama/ollama)** | 总计 **179.3k** ⭐ | 本地大模型运行事实标准，新增支持 Kimi-K2.6、GLM-5.2 等最新模型，是本地优先生态的核心基础设施。 |
| **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** | 总计 **171.8k** ⭐ | 面向 LLM 的网页抓取/搜索 API，解决 Agent 联网获取实时知识的“最后一公里”工程化难题。 |
| **[huggingface/transformers](https://github.com/huggingface/transformers)** | 总计 **164.4k** ⭐ | 模型定义与推理的通用框架，持续适配最新架构（如 Mamba、MoE），是开源模型落地的必经之路。 |
| **[langchain4j/langchain4j](https://github.com/langchain4j/langchain4j)** | 总计 **12.9k** ⭐ | JVM 生态最完善的 LLM 应用开发框架，原生支持 Spring/Quarkus，填补企业级 Java 技术栈接入 AI 的空白。 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体、技能体系）
| 项目 | Stars 数据 | 一句话解读 |
| :--- | :--- | :--- |
| **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** | 今日新增 **+896** / 总计 **235.8k** ⭐ | “与你共同成长”的自进化 Agent，强调长期记忆、工具自造与自我优化，代表了 Agent 从“执行任务”向“持久化伙伴”跃迁的方向。 |
| **[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)** | 今日新增 **+515** ⭐ | 本地优先的个人超级智能，融合生活记忆图谱、Agent 舰队编排与深度研究能力，探索消费级 AIOS 的终极形态。 |
| **[VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)** | 今日新增 **+602** ⭐ | 汇聚 1000+ 官方与社区 Agent Skills，兼容 Claude Code、Codex、Gemini CLI 等主流客户端，确立了“技能即插件”的生态标准。 |
| **[multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)** | 今日新增 **+588** ⭐ | 将 Karpathy 实战经验提炼为单一 `CLAUDE.md` 配置文件，展示“最佳实践即代码/配置”的高杠杆复用价值。 |
| **[langchain-ai/langgraph](https://github.com/langchain-ai/langgraph)** | 总计 **40.3k** ⭐ | 基于状态图构建弹性、可控的多 Agent 工作流，已成为复杂业务编排（如 ReAct、Plan-and-Execute）的工程标准。 |
| **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** | 总计 **37.0k** ⭐ | 面向前端的 Agent 集成栈（React/Next.js），提供 AG-UI 协议，让网页应用零成本拥有原生级 AI 交互能力。 |
| **[browser-use/browser-use](https://github.com/browser-use/browser-use)** | 总计 **110.3k** ⭐ | 让 Agent 像人一样操控浏览器完成任务，是 Web 自动化、数据采集、端到端测试的核心基础设施。 |

---

### 📦 AI 应用（垂直场景、生产力工具、二脑/知识管理）
| 项目 | Stars 数据 | 一句话解读 |
| :--- | :--- | :--- |
| **[freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2)** | 今日新增 **+2,449** ⭐ | GPT-Image-2 提示词工程工业化标杆：530+ 逆向案例、20+ 套模板、提炼 Skills，将“玄学调词”变为可复用工程资产。 |
| **[MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search)** | 今日新增 **+434** ⭐ | 基于 Claude Code 的全自动求职 Agent：岗位评分、简历定制、面试模拟，跑在本机、数据不出本地，垂直场景落地教科书。 |
| **[AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian)** | 今日新增 **+310** ⭐ | Obsidian + Claude Code 打造的自组织“第二大脑”，自动读取、链接、归档 Markdown，实现个人知识管理（PKM）的 AI 原生化。 |
| **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** | 总计 **51.0k** ⭐ | 统一接入前沿模型的桌面级 AI 生产力工作室，内置 300+ Assistants、自主 Agent 与 MCP 支持，个人/团队开箱即用。 |
| **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** | 总计 **49.0k** ⭐ | 文档/主题一键生成原生 PPTX（含动画、图表、母版、语音备注），解决“LLM 不会做 PPT” 的工程化难题。 |
| **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** | 总计 **115.9k** ⭐ | 一键从关键词生成高清短视频（脚本、素材、剪辑、字幕、配音全自动），内容创作流水线的自动化标杆。 |
| **[siyuan-note/siyuan](https://github.com/siyuan-note/siyuan)** | 总计 **45.9k** ⭐ | 隐私优先的自托管知识工作空间，原生支持块级引用、反链、AI 协作，是 Notion 替代方案中的技术最强派。 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调、从零构建）
| 项目 | Stars 数据 | 一句话解读 |
| :--- | :--- | :--- |
| **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** | 今日新增 **+349** / 总计 **48.2k** ⭐ | 从零手写 Transformer、RLHF、推理引擎到部署的完整教学代码库，“Learn, Build, Ship” 降低 AI 工程师入门门槛。 |
| **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** | 总计 **54.9k** ⭐ | 2 小时在单张消费级 GPU 训练 64M 参数 LLM，极简代码复现完整预训练/微调流程，极致的教学与实验平台。 |
| **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** | 总计 **103.6k** ⭐ | PyTorch 从零实现 ChatGPT 风格 LLM 的权威教程代码库，配套书籍持续更新，是理解模型内核机制的首选资料。 |
| **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** | 总计 **8.3k** ⭐ | Rust 原生的模块化 LLM 应用框架，类型安全、无反射、高性能，适合构建生产级、可组合的 Agent 系统。 |
| **[Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents)** | 总计 **6.1k** ⭐ | 主张“原子化”构建 Agent：最小化、可测试、可组合的单元，对抗单体 Prompt 臃肿与不可维护的工程化尝试。 |

---

### 🔍 RAG/知识库（向量数据库、检索增强、记忆层、GraphRAG）
| 项目 | Stars 数据 | 一句话解读 |
| :--- | :--- | :--- |
| **[open-webui/open-webui](https://github.com/open-webui/open-webui)** | 总计 **149.8k** ⭐ | 功能最全的自托管 Web UI，原生支持 RAG、工具调用、多模型管理、Ollama/OpenAI 兼容，个人/团队私有化部署首选。 |
| **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** | 总计 **144.9k** ⭐ | Agent 工程化平台的事实标准，LCEL、LangGraph、LangSmith 构建完整“开发-调试-部署-观测”闭环。 |
| **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** | 总计 **110.1k** ⭐ | 代码库/文档/Schema 全量转知识图谱，确定性 AST 解析+ 图检索，彻底告别向量检索的“语义模糊”与幻觉。 |
| **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** | 总计 **89.1k** ⭐ | 企业级 RAG 引擎：深度文档解析（表格/公式/版面）、Agentic RAG、多路召回重排，解决复杂非结

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*