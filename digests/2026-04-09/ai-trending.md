# AI 开源趋势日报 2026-04-09

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-04-09 00:10 UTC

---

# AI 开源趋势日报 | 2026-04-09

---

## 第一步：AI 相关性筛选

**Trending 榜单筛选结果**（11 → 9 个 AI 相关）：
| 项目 | 判定 | 说明 |
|:---|:---|:---|
| forrestchang/andrej-karpathy-skills | ✅ AI | Andrej Karpathy 技能库，AI 教育/开发方法论 |
| TheCraigHewitt/seomachine | ✅ AI | Claude Code 驱动的 SEO 内容生成系统 |
| google-ai-edge/gallery | ✅ AI | Google 端侧 ML/GenAI 用例展示与本地模型运行 |
| NVIDIA/personaplex | ✅ AI | NVIDIA 角色/人格化 AI 项目 |
| google-ai-edge/LiteRT-LM | ✅ AI | Google 端侧 LLM 推理运行时 |
| elebumm/RedditVideoMakerBot | ✅ AI | AI 驱动的 Reddit 内容视频化工具 |
| obra/superpowers | ✅ AI | Agentic 技能框架与软件开发方法论 |
| newton-physics/newton | ✅ AI | GPU 加速物理仿真引擎（机器人/仿真研究） |
| abhigyanpatwari/GitNexus | ✅ AI | 浏览器端代码知识图谱 + Graph RAG Agent |
| virattt/ai-hedge-fund | ✅ AI | AI 对冲基金团队（低今日增速，保留） |
| goharbor/harbor | ❌ 排除 | 云原生容器镜像仓库，与 AI 无直接关联 |

**主题搜索**：80 个项目全部保留（已按 topic 筛选）

---

## 第二步：分类结果

| 类别 | 项目数量 | 主要项目 |
|:---|:---|:---|
| 🔧 AI 基础工具 | 18 | Ollama, vLLM, LiteRT-LM, OpenCLI, E2B, Cua 等 |
| 🤖 AI 智能体/工作流 | 22 | Claude Code 生态、Dify、AutoGPT、OpenHands、Activepieces 等 |
| 📦 AI 应用 | 12 | SEO 工具、对冲基金、影视生产、代码智能等垂直应用 |
| 🧠 大模型/训练 | 16 | Transformers、LlamaFactory、MiniMind、LLMs-from-scratch 等 |
| 🔍 RAG/知识库 | 14 | LangChain、RAGFlow、Milvus、GraphRAG、GitNexus 等 |

---

## 第三步：AI 开源趋势日报

---

### 1. 今日速览

**端侧 AI 与 Claude Code 生态成为今日双引擎。** Google 连推 `gallery` 和 `LiteRT-LM` 两大端侧项目，获 1354 今日 stars，显示巨头正加速布局设备端 GenAI。同时 `obra/superpowers` 以 **+2028 stars** 登顶，其"Agentic 技能框架"方法论引发开发者强烈共鸣。值得关注的是，**Claude Code 衍生生态**（seomachine、ralph-claude-code、everything-claude-code 等）已形成明显的工具链集群效应，AI 编程助手正从"对话工具"演进为"可编排的技能系统"。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [obra/superpowers](https://github.com/obra/superpowers) | 新上榜 | **+2028** | **今日增速冠军**——提出"Agentic 技能框架"的软件开发方法论，试图定义 AI 时代的工程协作范式 |
| [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) | 新上榜 | +853 | Google 官方端侧 ML/GenAI 展示平台，支持本地模型下载与运行，降低设备 AI 落地门槛 |
| [google-ai-edge/LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) | 新上榜 | +501 | Google 端侧 LLM 推理运行时，与 gallery 形成"展示+引擎"组合拳 |
| [ollama/ollama](https://github.com/ollama/ollama) | 168,202 | - | 本地大模型运行的事实标准，今日被 Google 端侧战略间接挑战 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 75,751 | - | 高吞吐 LLM 推理引擎，生产级部署首选 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 14,397 | - | 将任意网站/Electron 应用转为标准化 CLI，为 AI Agent 统一工具调用接口 |
| [e2b-dev/E2B](https://github.com/e2b-dev/E2B) | 11,627 | - | 企业级 Agent 安全沙箱环境，支持真实工具链 |
| [trycua/cua](https://github.com/trycua/cua) | 13,427 | - | 开源 Computer-Use Agent 基础设施，支持多桌面环境训练与评测 |

#### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 50,272 | - | "Bash is all you need"——从零构建类 Claude Code 的极简 Agent  harness，教育意义显著 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 43,160 | - | 统一接入 300+ AI 助手的生产力中枢，支持自主 Agent 与多模型调度 |
| [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) | 42,873 | - | 国产多平台 AI 助理框架，CowAgent 支持主动思考、任务规划与长期记忆 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 37,323 | - | Nous Research 的"与你共成长"Agent，强调持续学习与个性化 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 30,082 | - | 前端 Agent 技术栈，AG-UI 协议制定者，推动生成式 UI 标准化 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21,627 | - | 集成 ~400 MCP 服务器的 AI 工作流自动化平台，MCP 生态关键节点 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | 8,545 | - | Claude Code 的自主开发循环，智能退出检测优化人机协作边界 |

#### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [TheCraigHewitt/seomachine](https://github.com/TheCraigHewitt/seomachine) | 新上榜 | +649 | Claude Code 驱动的 SEO 内容工厂，14 种技能模式实现研究-写作-优化全流程 |
| [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | 新上榜 | +980 | **浏览器端零服务器代码智能引擎**，Graph RAG Agent 实现代码库可视化探索 |
| [saturndec/waoowaoo](https://github.com/saturndec/waoowaoo) | 11,033 | - | 首家工业级 AI 影视生产平台，从短剧到真人电影的好莱坞标准工作流 |
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | 低基数 | +151 | AI 对冲基金团队，多 Agent 协作的投资决策系统 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 24,385 | - | Claude Code 驱动的 AI 求职系统，14 技能模式 + Go 仪表板 + PDF 生成 |
| [elebumm/RedditVideoMakerBot](https://github.com/elebumm/RedditVideoMakerBot) | 新上榜 | +555 | 一键将 Reddit 内容转为视频，AI 驱动的内容再生产工具 |
| [NVIDIA/personaplex](https://github.com/NVIDIA/personaplex) | 新上榜 | +586 | NVIDIA 角色/人格化 AI 项目，可能涉及数字人、NPC 或个性化助手 |

#### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 159,045 | - | 模型定义框架的事实标准，覆盖文本/视觉/音频/多模态 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 90,314 | - | 从零实现 ChatGPT 级 LLM，PyTorch 教学标杆 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 69,761 | - | 100+ LLM/VLM 统一高效微调框架（ACL 2024） |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 46,061 | - | 2 小时从零训练 64M 参数 GPT，大模型教育最小可行实现 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 6,837 | - | Rust 生态的模块化 LLM 应用框架，性能与类型安全优先 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 146,833 | - | Claude Code 性能优化系统，涵盖技能、本能、记忆、安全与研究优先开发 |
| [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | 新上榜 | +702 | Andrej Karpathy 技能库整理，AI 教育权威资源聚合 |

#### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [langgenius/dify](https://github.com/langgenius/dify) | 136,777 | - | 生产级 Agentic 工作流开发平台，RAG 与 Agent 能力融合 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 132,819 | - | Agent 工程平台，RAG 与工具调用的基础设施 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 77,474 | - | 融合前沿 RAG 与 Agent 能力的开源引擎 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 52,333 | - | AI Agent 的通用记忆层，解决长期上下文与个性化 |
| [microsoft/graphrag](https://github.com/microsoft/graphrag) | 32,067 | - | 模块化图检索增强生成系统，知识图谱驱动的 RAG |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 32,686 | - | EMNLP 2025 简单快速 RAG，存储效率与检索速度优化 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 46,401 | - | Claude Code 会话记忆插件，AI 压缩与上下文注入 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 43,678 | - | 云原生高性能向量数据库，可扩展 ANN 搜索 |

---

### 3. 趋势信号分析

**端侧 AI 爆发前夜**：Google 同日释放 `gallery` 与 `LiteRT-LM`，形成"应用展示+推理引擎"的完整端侧栈，直接对标 Ollama 生态。这与 Gemini Nano 的设备端部署战略一脉相承，预示 2026 年端侧大模型竞争白热化。

**Claude Code 生态形成正反馈**：从 `learn-claude-code`（教你怎么造）到 `everything-claude-code`（性能优化）、`ralph-claude-code`（自主循环）、`seomachine`（垂直应用），Claude Code 已从单一工具演化为**可编程的 Agent 操作系统**。`obra/superpowers` 的爆发（+2028 stars）更将"技能框架"方法论推向通用开发范式，AI 编程助手正经历从"对话"到"编排"的质变。

**Graph RAG 进入工程化阶段**：`GitNexus` 以浏览器端零服务器架构实现代码知识图谱，结合 `microsoft/graphrag` 的模块化设计，知识图谱增强检索正从研究概念落地为开发者可触及的工具。

**MCP 协议成为 Agent 互联标准**：`activepieces` 集成 ~400 MCP 服务器，`langchain4j` 明确支持 MCP，Model Context Protocol 正快速成为 Agent 与工具、数据源之间的"USB-C 接口"。

---

### 4. 社区关注热点

- **🔥 `obra/superpowers`** — 今日增速冠军（+2028），其"Agentic 技能框架"可能定义下一代 AI 辅助开发范式，值得深入研究其软件工程方法论

- **🔥 `abhigyanpatwari/GitNexus`** — 浏览器端 Graph RAG + 零服务器架构，代码智能的隐私与可访问性突破，适合代码库探索场景

- **🔥 Google 端侧双雄 (`gallery` + `LiteRT-LM`)** — 巨头正式入场端侧 AI，关注其与 Android 生态的整合路径，以及对 Ollama 的差异化竞争

- **🔥 `trycua/cua`** — Computer-Use Agent 基础设施，支持多桌面环境（macOS/Linux/Windows），AI 操作系统的底层能力值得关注

- **🔥 MCP 生态扩张** — 从 `activepieces` 到 `langchain4j`，MCP 协议快速成为 Agent 工具集成的事实标准，建议开发者提前布局 MCP 服务器开发能力

---

*报告生成时间：2026-04-09*  
*数据来源：GitHub Trending & Search API*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*