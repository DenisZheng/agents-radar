# AI 开源趋势日报 2026-07-28

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-28 01:57 UTC

---

# 📊 AI 开源趋势日报 | 2026-07-28

---

## 1. 今日速览
- **企业级 Agent 基建落地加速**：阿里巴巴开源 `open-code-review` 单日斩获 979 颗星，其“确定性流水线 + LLM Agent”混合架构成为大厂代码审查落地的标杆范式，标志着 AI 代码审查从 Demo 走向生产级工程化。
- **垂直领域基座模型崛起**：金融时序基座模型 `Kronos` 登上 Trending 榜，印证“小而精”的垂直 Foundation Model 正成为比通用大模型更具商业落地价值的方向。
- **多模态 Agent 外设爆发**：`airi`（语音/游戏具身）、`claude-video`（视频理解技能）单日涨星均超 400，Agent 正从纯文本交互向「听、看、玩」全模态具身化延伸。
- **极简主义反潮流**：`PocketFlow`（100 行框架）、`minimind`（2 小时训练 64M 模型）高热度显示，开发者对「降低门槛、回归本质」的极简工具/教学资源有强烈刚需。
- **RAG 向 Knowledge Graph 进化**：`Graphify` 用确定性 AST 解析构建代码知识图谱，挑战向量检索范式，精准、可解释、无幻觉成为代码类 RAG 新标准。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
| 项目 | Stars (总计 / 今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** | 0 / **+979** | 阿里生产级代码审查工具，**确定性静态分析 + LLM Agent 混合架构**，精准到行级评论，内置 NPE/线程安全/XSS/SQLi 规则集，OpenAI/Anthropic 兼容，企业级落地标杆。 |
| **[ollama/ollama](https://github.com/ollama/ollama)** | 177,032 / - | 本地大模型推理**事实标准**，原生支持 Kimi-K2.6、GLM-5.2、DeepSeek 等最新模型，一键跑通量化/推理/服务，离不开它的 AI 应用层开发几乎为零。 |
| **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** | 157,059 / - | Agent 专用的**网页抓取/搜索/交互 API**，解决 LLM 联网获取结构化数据的痛点，RAG/Deep Research 工作流的核心数据入口。 |
| **[browser-use/browser-use](https://github.com/browser-use/browser-use)** | 107,033 / - | 让 AI Agent **像人一样操作浏览器**完成复杂任务（登录、点击、填表），Web 自动化 Agent 的基础设施层核心组件。 |
| **[pbakaus/impeccable](https://github.com/pbakaus/impeccable)** | 0 / **+847** | 面向 AI Harness 的**设计语言系统**，通过约束设计 Token 让 AI 生成的 UI 符合规范，解决「AI 写前端丑/不统一」的工程化方案。 |
| **[huggingface/transformers](https://github.com/huggingface/transformers)** | 163,047 / - | 多模态模型定义/训练/推理的**万金油框架**，覆盖文本/视觉/音频，任何新模型发布首选集成平台。 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体、技能）
| 项目 | Stars (总计 / 今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[langgenius/dify](https://github.com/langgenius/dify)** | 150,463 / - | **低代码 Agentic 工作流平台**，可视化编排 RAG/Agent/Tool，支持云/私有化部署，团队从原型到生产的首选协作工作台。 |
| **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** | 221,445 / - | 「与你共同成长的 Agent」，强调长期记忆、个性化适配与持续进化，探索 Agent 个性化陪伴的新范式。 |
| **[bradautomates/claude-video](https://github.com/bradautomates/claude-video)** | 0 / **+434** | **视频理解技能插件**：自动下载/抽帧/转录/汇总喂给 Claude，一键赋能 Agent「看视频」能力，多模态技能标准化典范。 |
| **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** | 0 / **+240** | **深度研究技能**：跨 Reddit/X/YouTube/HN/Polymarket/网页多源检索并合成带引用报告，Agentic Deep Research 的开箱即用实现。 |
| **[copilotkit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** | 36,321 / - | **Agent 前端栈**，定义 AG-UI 协议，提供 React 组件让任意后端 Agent 秒接聊天/生成式 UI/人工介入，解决「Agent 无前端」痛点。 |
| **[HKUDS/nanobot](https://github.com/HKUDS/nanobot)** | 46,308 / - | **超轻量自托管 Agent 框架**（Python），内置 WebUI/工具/记忆/MCP/多 Agent 工作流，单文件安装，适合个人开发者快速构建专属助手。 |
| **[vudovn/ag-kit](https://github.com/vudovn/ag-kit)** | 0 / **+14** | 新晋 Agent 工具包（TypeScript），关注极简开发体验，值得持续跟踪其生态扩展能力。 |

---

### 📦 AI 应用（垂直场景、具体产品）
| 项目 | Stars (总计 / 今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[moeru-ai/airi](https://github.com/moeru-ai/airi)** | 0 / **+572** | **自托管全模态 AI 伴侣**：实时语音对话 + Minecraft/Factorio 游戏具身 + 多平台客户端，展示「有灵魂、会玩游戏、能部署」的消费级 Agent 终极形态。 |
| **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** | 0 / **+441** | **金融时序基座模型**，将 K 线/财务/新闻统一为 Token 序列预测，在量化选股/风控/研报生成上超越 GPT-4o，垂直领域 Foundation Model 成功案例。 |
| **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** | 99,572 / - | **AI 一键生成高清短视频**（脚本/配音/字幕/剪辑/背景音乐全自动），内容创作变现赛道的现象级应用，Star 数印证巨大市场需求。 |
| **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** | 41,432 / - | **文档/主题 → 原生 PPTX**（带图表/动画/母版/备注音频），而非生成 Markdown，解决商务汇报「最后一公里」交付难题。 |
| **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** | 59,260 / - | **LLM 驱动多市场股票智能分析系统**：多源行情/实时新闻/决策看板/自动推送，零成本定时运行，量化投研 Agent 的最佳实践模板。 |
| **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** | 49,053 / - | **AI 生产力工作室**：智能对话 + 自主 Agent + 300+ 预设助手，统一接入前沿模型，主打本地优先与隐私保护的桌面级超级入口。 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调、评测）
| 项目 | Stars (总计 / 今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** | 53,907 / - | **2 小时从 0 训练 64M 参数 LLM**，极简代码复现完整预训练/SFT/RLHF 流程，入门大模型训练内核的最佳教学项目。 |
| **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** | 99,984 / - | **手把手用 PyTorch 从零实现 ChatGPT**，配套同名畅销书，大模型原理教育领域的「圣经」级仓库。 |
| **[pytorch/pytorch](https://github.com/pytorch/pytorch)** | 102,023 / - | 动态图深度学习框架**绝对霸主**，所有前沿模型训练/推理的底层依赖，生态护城河最深。 |
| **[ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)** | 59,953 / - | **YOLO 系列官方库**（v8/v11/v26），目标检测/分割/姿态/追踪一站式解决，计算机视觉落地首选，工程化程度极高。 |
| **[open-compass/opencompass](https://github.com/open-compass/opencompass)** | 7,240 / - | **大模型评测平台**，支持 100+ 数据集/主流模型，提供标准化榜单与可复现评测流程，模型选型/迭代验证的权威工具。 |
| **[The-Pocket/PocketFlow](https://github.com/The-Pocket/PocketFlow)** | 11,049 / - | **100 行代码的 LLM 框架**，用嵌套 DAG 实现 Agent 造 Agent，极简主义反思复杂框架臃肿，适合理解 Agent 编排核心逻辑。 |

---

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理、记忆层）
| 项目 | Stars (总计 / 今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** | 86,175 / - | **领先的开源 RAG 引擎**，深度融合 Agent 能力（复杂推理/工具调用），提供企业级文档解析/混合检索/生成全链路，RAG 落地首选。 |
| **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** | 97,185 / - | **代码库转知识图谱**：确定性 AST 解析 + 边解释 + 无向量库，为 Claude Code/Cursor/Gemini CLI 提供精准代码上下文，代码类 RAG 的**范式革新者**。 |
| **[milvus-io/milvus](https://github.com/milvus-io/milvus)** | 45,391 / - | **云原生高性能向量数据库**，十亿级向量毫秒级检索，支持多租户/混合检索/GPU 加速，生产环境规模化 RAG 基建首选。 |
| **[mem0ai/mem0](https://github.com/mem0ai/mem0)** | 61,864 / - | **Agent 通用记忆层**，自动提取/压缩/更新长期记忆，跨会话/跨 Agent 共享，解决「健忘」痛点，Agent 个性化长尾应用关键。 |
| **[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)** | 86,365 / - | **工业级 OCR 工具包**（100+ 语言），PDF/图片 → 结构化数据，RAG 文档入库的**核心预处理引擎**，轻量高精度。 |
| **[qdrant/qdrant](https://github.com/qdrant/qdrant)** | 33,613 / - | **Rust 写的高性能向量数据库**，支持过滤/负采样/量化/云

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*