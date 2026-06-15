# AI 开源趋势日报 2026-06-15

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-15 00:44 UTC

---

# AI 开源趋势日报 — 2026-06-15

---

## 一、今日速览

今日 AI 开源社区的最大焦点是 **AI Agent 安全**——NVIDIA 发布的 SkillSpector（+964⭐）成为 Trending 榜 AI 相关项目日新增最高，反映出随着 Agent 生态快速扩张，安全扫描与漏洞检测正成为刚需。**金融垂类大模型** 和 **Agent 性能优化** 同样热度不减：Kronos（金融基础模型，+244⭐）和 ECC（Agent 性能优化系统，215,506⭐）双双上榜，显示社区对"让 Agent 更聪明、更省钱"的持续追求。RAG 基础设施持续活跃，向量数据库赛道新老玩家齐头并进。整体来看，2026 年中的开源 AI 正从"模型能力竞赛"全面转向"Agent 工程化落地"。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具）

| 项目 | Stars | 说明 |
|------|-------|------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐174,168 | 本地 LLM 运行工具标杆，持续集成 Kimi-K2.6、GLM-5.1、DeepSeek 等最新模型，是本地 AI 开发者的首选基础设施 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐82,853 | 高吞吐 LLM 推理引擎，已成为生产级部署的事实标准，持续优化内存效率与并发性能 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,587 | 模型定义与推理框架王者，覆盖文本/视觉/音频/多模态，是几乎所有上层 AI 工具的基础依赖 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐139,281 | Agent 工程平台，从链式调用演进为完整的 Agent 编排框架，社区生态最为庞大 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐98,823 | 让 AI Agent 自动操作网页，今日 Trending 级热度，代表了 Agent 从"对话"走向"操作"的关键工具层 |
| [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | ⭐0 (+291 today) | Andrew Ng 出品的统一多模型接口库，极简 API 切换多家 LLM Provider，今日新上榜即获 291⭐，极简主义工具哲学受追捧 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐132,768 | 大规模网页抓取与结构化提取 API，已成为 Agent 和 RAG 管道的数据入口标配 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|------|-------|------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐193,525 | Nous Research 出品的自成长 Agent，社区讨论最热，设计理念是"与用户共同进化" |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐184,940 | 经典自主 Agent 框架持续迭代，代表了"AI 自主完成复杂任务"的终极愿景 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐215,506 | Agent 性能优化系统——Skills、Instincts、Memory、Security 四大支柱，覆盖 Claude Code、Codex、Cursor 等主流 Agent，是今日社区讨论焦点 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | ⭐0 (+964 today) | NVIDIA 官方 Agent 安全扫描器，检测漏洞与恶意模式，今日 Trending AI 项目日新增第一，Agent 安全赛道正式进入主流视野 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐44,198 | 轻量级开源 AI Agent，面向工具/聊天/工作流场景，"小而美"的 Agent 路线 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐35,081 | Agent 前端栈与 AG-UI 协议制定者，正在定义 Agent 与 UI 交互的标准协议 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐28,738 | 一个 CLI 让 Agent 读取 Twitter/Reddit/YouTube/B站/小红书，零 API 费用，极大拓展 Agent 的信息触达范围 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐45,298 | 开源超级 AI 助手，支持任务规划、工具执行、自我进化记忆，多模型多渠道，国内社区活跃 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 说明 |
|------|-------|------|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐145,204 | 生产级 Agentic 工作流平台，RAG + Agent 一体化，企业级 LLM 应用首选开源方案 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐141,519 | 最友好的本地 AI 界面，支持 Ollama/OpenAI API，是本地部署大模型的标配前端 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐47,325 | AI 生产力工作室，集成智能聊天、自主 Agent、300+ 助手，面向终端用户的 AI 工作台 |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | ⭐0 (+244 today) | 金融市场语言基础模型，今日新上榜，代表金融垂类大模型正从概念走向开源实践 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐42,529 | LLM 驱动的美/A/H 股智能分析系统，多数据源 + 实时新闻 + LLM 决策 + 多渠道推送，零成本运行 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐86,150 | 多 Agent LLM 金融交易框架，学术研究与实践结合的标杆项目 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐27,519 | AI 从任意文档生成可编辑 PPT，含原生动画和语音旁白，办公场景 Agent 化落地范例 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐53,730 | AI 求职系统，基于 Claude Code 构建 14 种技能模式，展示了 Agent 在垂直场景的深度应用 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 说明 |
|------|-------|------|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐195,659 | 最老牌 ML 框架，持续更新，仍是工业级训练与部署的核心选择 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐100,756 | 研究界与训练侧绝对主流，动态图 + GPU 加速，生态无可替代 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐58,384 | YOLO 系列目标检测/分割/姿态估计一站式框架，工业视觉 AI 的标杆 |
| [keras-team/keras](https://github.com/keras-team/keras) | ⭐64,088 | 高层深度学习 API，入门友好，快速原型开发首选 |
| [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) | ⭐66,330 | 经典机器学习库，传统 ML 任务（分类/聚类/回归）的可靠基石 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐7,616 | Rust 构建模块化 LLM 应用框架，代表 Rust 生态在 AI 基础设施中的崛起 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,278 | Apple Silicon 上从零构建 vLLM + Qwen 的工程师教程，系统级 LLM 推理教学标杆 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|------|-------|------|
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐58,555 | AI Agent 通用记忆层，跨会话持续记忆，已成为 Agent 开发标配组件 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐82,721 | 领先的开源 RAG 引擎，融合 Agent 能力，打造 LLM 的超级上下文层 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐61,586 | 本地优先的全功能 Agent 体验，"拥有自己的智能"理念的实践者 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | ⭐58,097 | 极速搜索引擎 API，支持 AI 混合搜索，轻量级 RAG 场景首选 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐44,774 | 云原生高性能向量数据库，大规模向量检索的工业级方案 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐32,269 | Rust 向量数据库，大规模 AI 应用的高性能检索引擎 |
| [topoteretes/cognee](https://github.comtopoteretes/cognee) | ⭐17,827 | Agent 记忆平台，基于自托管知识图谱引擎，为 AI 提供持久长期记忆 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐11,923 | MLsys2026 论文成果，个人设备上 100% 私密 RAG，存储节省 97%，端侧 RAG 新范式 |

---

## 三、趋势信号分析

今日数据揭示三个关键趋势信号：

**1. Agent 安全成为新焦点。** NVIDIA SkillSpector 以 +964 的日新增登顶 AI 相关 Trending 项目，这不是偶然。随着 AI Agent 从实验室走向生产环境——操作网页、调用 API、管理数据——Agent 的"技能包"（Skills）成为新的攻击面。SkillSpector 的出现标志着社区开始认真对待 Agent 安全，预计这将催生一个全新的工具链生态。

**2. Agent 性能优化（Token 经济学）成为刚需。** ECC（215,506⭐）和 caveman（72,508⭐）两个项目都聚焦于减少 Agent 的 Token 消耗——前者从 Skills/Memory/Security 维度系统优化，后者用"原始人话"策略直接砍掉 65% Token。这反映出开发者已经从"能不能做"转向"值不值得做"，Agent 的运营成本正成为核心工程问题。

**3. 垂直行业大模型开源化加速。** Kronos（金融市场基础模型）和 TradingAgents（金融交易框架）双双上榜，加上 OpenBB（金融数据平台，69,144⭐），金融 AI 已形成从数据→模型→Agent→应用的完整开源闭环。这与近期多家商业大模型发布金融垂类版本的时间线高度吻合，开源社区正在快速跟进。

此外，RAG 基础设施持续活跃但竞争格局趋于稳定——mem0、RAGFlow、AnythingLLM 三足鼎立，新兴项目如 LEANN 试图从"端侧私密"角度突围。向量数据库赛道则新老交替，Meilisearch、Milvus、Qdrant 稳定增长，Alibaba zvec（9,989⭐）作为轻量级嵌入式方案值得关注。

---

## 四、社区关注热点

- 🔒 **[NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector)** — Agent 安全扫描赛道刚刚打开，NVIDIA 入局意味着这是生产级刚需。建议所有 Agent 开发者关注，未来可能成为 CI/CD 流程的标准环节。

- 💰 **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — 21 万星且仍在增长的 Agent 性能优化系统，覆盖 Claude Code、Codex、Cursor 等主流 Agent。在 Token 成本日益高昂的当下，这类"省钱工具"具有极高的实用价值。

- 🧠 **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Agent 记忆层正成为独立赛道。mem0 的"通用记忆层"定位让 Agent 真正拥有长期记忆能力，是 Agent 从"工具"进化为"助手"的关键基础设施。

- 📊 **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** — 金融垂类基础模型开源化是行业趋势信号。对于关注量化交易、金融分析的开发者，这是一个值得深入研究的方向。

- 🦀 **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** — Rust 在 AI 应用层的渗透正在加速。Rig 定位为 Rust 的 LLM 应用框架，结合 Rust 的性能优势与 AI 的灵活性，代表了 AI 基础设施多元化的重要方向。

---

*数据来源：GitHub Trending、GitHub Search API | 分析时间：2026-06-15 | 由 OWL 生成*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*