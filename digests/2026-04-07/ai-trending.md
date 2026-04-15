# AI 开源趋势日报 2026-04-07

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-04-07 00:12 UTC

---

# AI 开源趋势日报 | 2026-04-07

---

## 第一步：AI 相关性筛选

**Trending 榜单筛选结果**（14→11个，排除3个非AI项目）：
| 排除项目 | 排除原因 |
|---------|---------|
| TelegramMessenger/Telegram-iOS | 即时通讯客户端，非AI |
| immich-app/immich | 照片管理工具，AI功能非核心 |
| siddharthvaddem/openscreen | 屏幕录制工具，非AI |

**主题搜索**：80个仓库全部保留，均为AI相关。

---

## 第二步：项目分类

| 项目 | 主要分类 | 次要分类 |
|-----|---------|---------|
| block/goose | 🔧 AI基础工具 | 🤖 AI智能体 |
| google-ai-edge/gallery | 📦 AI应用 | 🔧 AI基础工具 |
| google-ai-edge/LiteRT-LM | 🔧 AI基础工具 | 🧠 大模型/训练 |
| abhigyanpatwari/GitNexus | 🔧 AI基础工具 | 🔍 RAG/知识库 |
| KeygraphHQ/shannon | 🤖 AI智能体 | 📦 AI应用 |
| NousResearch/hermes-agent | 🤖 AI智能体 | |
| tobi/qmd | 🔧 AI基础工具 | 🔍 RAG/知识库 |
| kepano/obsidian-skills | 🤖 AI智能体 | 🔧 AI基础工具 |
| ollama/ollama | 🔧 AI基础工具 | 🧠 大模型/训练 |
| ggml-org/llama.cpp | 🔧 AI基础工具 | 🧠 大模型/训练 |
| NVIDIA/personaplex | 🧠 大模型/训练 | |
| langgenius/dify | 🤖 AI智能体 | 🔧 AI基础工具 |
| langchain-ai/langchain | 🔧 AI基础工具 | 🤖 AI智能体 |
| open-webui/open-webui | 📦 AI应用 | 🔧 AI基础工具 |
| infiniflow/ragflow | 🔍 RAG/知识库 | 🤖 AI智能体 |
| mem0ai/mem0 | 🔍 RAG/知识库 | 🤖 AI智能体 |
| FlowiseAI/Flowise | 🤖 AI智能体 | 🔧 AI基础工具 |
| run-llama/llama_index | 🔍 RAG/知识库 | 🤖 AI智能体 |
| thedotmack/claude-mem | 🔧 AI基础工具 | 🔍 RAG/知识库 |
| milvus-io/milvus | 🔍 RAG/知识库 | |
| HKUDS/LightRAG | 🔍 RAG/知识库 | |
| Significant-Gravitas/AutoGPT | 🤖 AI智能体 | |
| browser-use/browser-use | 🤖 AI智能体 | |
| OpenHands/OpenHands | 🤖 AI智能体 | 🔧 AI基础工具 |
| CherryHQ/cherry-studio | 📦 AI应用 | 🤖 AI智能体 |
| CopilotKit/CopilotKit | 🔧 AI基础工具 | 🤖 AI智能体 |
| trycua/cua | 🔧 AI基础工具 | 🤖 AI智能体 |
| e2b-dev/E2B | 🔧 AI基础工具 | 🤖 AI智能体 |
| jingyaogong/minimind | 🧠 大模型/训练 | |
| 0xPlaygrounds/rig | 🔧 AI基础工具 | 🧠 大模型/训练 |

---

## 第三步：输出报告

### 1. 今日速览

今日AI开源领域呈现**端侧AI与智能体基础设施**双轮驱动态势。Google AI Edge连推LiteRT-LM和Gallery两大端侧项目，显示边缘推理正成为大厂战略焦点；Block的Goose以1523星登顶Trending，标志着"AI工程师"类工具进入爆发期。值得关注的是，NousResearch的Hermes Agent与多个Claude Code生态项目（obsidian-skills、claude-mem）同步升温，反映开发者对**可成长型智能体**和**记忆增强系统**的迫切需求。安全领域出现新变量——Shannon作为白盒AI渗透测试工具获得733星，AI安全正在从防御走向主动攻防。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 一句话说明 |
|-----|-------|-----------|
| [block/goose](https://github.com/block/goose) | +1523 today | Square/Block开源的"超越代码建议"的AI工程师，支持安装、执行、编辑、测试全流程，Rust构建的LLM通用Agent运行时 |
| [google-ai-edge/LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) | +483 today | Google官方端侧大模型推理运行时，C++核心，专为移动/嵌入式设备优化 |
| [ollama/ollama](https://github.com/ollama/ollama) | 167,674 ⭐ (+196 today) | 本地大模型运行的事实标准，今日新增Kimi-K2.5、GLM-5、MiniMax、gpt-oss等模型支持 |
| [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | 267 today | 边缘推理的底层基础设施，持续领跑LLM C/C++推理性能优化 |
| [tobi/qmd](https://github.com/tobi/qmd) | +394 today | 本地优先的文档/知识库语义搜索CLI，追踪SOTA RAG方法但完全离线运行 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 45,837 ⭐ | Claude Code的自动记忆捕获插件，用Claude的agent-sdk压缩历史会话并注入未来上下文 |
| [trycua/cua](https://github.com/trycua/cua) | 13,403 ⭐ | 计算机使用Agent（Computer-Use Agent）的开源基础设施，提供沙箱、SDK和评测基准 |

#### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 一句话说明 |
|-----|-------|-----------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 28,046 ⭐ (+1574 today) | NousResearch官方Agent框架，强调"The agent that grows with you"的可成长架构，今日增速仅次于Goose |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | +429 today | Obsidian笔记的Agent技能系统，教AI使用Markdown、JSON Canvas和CLI，个人知识库Agent化的关键基础设施 |
| [langgenius/dify](https://github.com/langgenius/dify) | 136,423 ⭐ | 生产级Agent工作流开发平台，"LLM应用开发"类别长期头部项目 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 70,688 ⭐ | AI驱动的软件开发平台，前身为OpenDevin，专注端到端代码生成与调试 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 86,262 ⭐ | 让网站对AI Agent可访问，浏览器自动化领域的核心基础设施 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21,594 ⭐ | 支持~400个MCP服务器的AI工作流自动化平台，MCP生态集成度领先 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 30,018 ⭐ | React/Angular前端Agent栈，AG-UI协议制定者，推动生成式UI标准化 |

#### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 一句话说明 |
|-----|-------|-----------|
| [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) | +1107 today | Google官方端侧ML/GenAI用例展示应用，Kotlin构建，支持本地模型试用，端侧AI落地的标杆产品 |
| [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | +733 today | 白盒AI渗透测试工具，分析源码、识别攻击向量并执行真实漏洞利用，AI安全领域的突破性工具 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 130,346 ⭐ | 用户友好的AI界面，Ollama/OpenAI API的统一入口，自托管LLM应用的首选前端 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 43,034 ⭐ | 聚合300+助手的AI生产力工作室，统一访问前沿LLM的国产优秀产品 |
| [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) | 42,797 ⭐ | 多平台接入的AI助理（微信/飞书/钉钉等），CowAgent架构强调主动思考与任务规划 |

#### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 一句话说明 |
|-----|-------|-----------|
| [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | +857 today | 零服务器代码智能引擎，浏览器内构建知识图谱+内置Graph RAG Agent，代码探索场景的创新形态 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 77,249 ⭐ | 融合前沿RAG与Agent能力的检索引擎，构建LLM优质上下文层的开源方案 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 52,101 ⭐ | AI Agent的通用记忆层，解决多轮对话和长期上下文的关键基础设施 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 48,349 ⭐ | 领先的文档Agent和OCR平台，从RAG框架演进为完整的数据Agent解决方案 |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 32,429 ⭐ | EMNLP 2025收录，"简单快速"的RAG实现，图结构检索的代表性工作 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 43,621 ⭐ | 云原生高性能向量数据库，可扩展ANN搜索的行业标准 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 14,979 ⭐ | 6行代码构建AI Agent记忆的知识引擎，轻量化记忆架构的新选择 |

#### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 一句话说明 |
|-----|-------|-----------|
| [NVIDIA/personaplex](https://github.com/NVIDIA/personaplex) | +295 today | NVIDIA官方项目，推测为角色/个性化大模型相关，需关注后续发布 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 45,796 ⭐ | 2小时从0训练64M参数GPT的极简教程，大模型教育的标杆项目 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 69,620 ⭐ | 统一高效微调100+ LLM/VLM，ACL 2024收录，微调工具的事实标准 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 75,493 ⭐ | 高吞吐、内存高效的LLM推理服务引擎，生产部署的核心基础设施 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 6,809 ⭐ | Rust生态的模块化LLM应用框架，Rust+AI的新兴技术栈代表 |

---

### 3. 趋势信号分析

**端侧AI基础设施化**是今日最显著的爆发信号。Google AI Edge同日发布LiteRT-LM（推理运行时）和Gallery（应用展示），形成"底层引擎+上层应用"的完整闭环，呼应了Apple Intelligence带动的端侧AI竞赛。这一趋势与近期Gemini Nano、Phi-4等轻量模型发布直接相关，开发者正积极寻找不依赖云端的隐私优先方案。

**"AI工程师"工具进入产品化阶段**。Block的Goose（1523星）和NousResearch的Hermes Agent（1574星）双双爆发，标志着Agent从演示走向工程实践——前者强调"超越代码建议"的全栈操作能力，后者突出"随用户成长"的自适应架构。这与Claude 3.7 Sonnet、o3等具备工具调用能力的模型发布形成共振。

**记忆系统成为Agent竞赛焦点**。mem0（通用记忆层）、claude-mem（Claude Code记忆捕获）、obsidian-skills（个人知识库Agent化）同时升温，反映社区共识：没有持久记忆的Agent只是高级聊天机器人。值得关注的是，记忆架构正从简单向量检索向"知识图谱+压缩+情境注入"的复合形态演进。

**安全领域出现AI原生攻防工具**。Shannon作为白盒AI渗透测试工具获得高关注，标志着AI安全从"用AI检测漏洞"演进为"AI自主发现并利用漏洞"，这一方向可能随AI系统复杂度提升而持续升温。

---

### 4. 社区关注热点

- **[block/goose](https://github.com/block/goose)** — 今日增速冠军（1523星），Rust构建的"AI工程师"代表，Block的背书使其成为Cursor/Codex开源替代的有力竞争者，关注其MCP生态扩展能力

- **[google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)** — 端侧AI的"样板间"应用，Kotlin+本地模型运行，是观察Google端侧战略落地的最佳窗口，对Android开发者有直接参考价值

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — 与Goose增速相当的可成长型Agent，NousResearch在开源模型社区的声誉使其Agent框架具有独特号召力，关注其与Hermes模型系列的协同

- **[KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon)** — 首个登榜的AI原生安全攻防工具，"白盒AI渗透测试"定位精准，可能开启AI安全工具的新品类，红队和安全研究员应重点关注

- **[kepano/obsidian-skills](https://github.com/kepano/obsidian-skills)** — 个人知识库Agent化的基础设施，Obsidian生态+Claude Code技能的组合，代表"第二大脑"向"主动助手"的演进方向

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*