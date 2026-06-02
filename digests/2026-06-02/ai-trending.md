# AI 开源趋势日报 2026-06-02

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-02 00:43 UTC

---

# AI 开源趋势日报 — 2026-06-02

---

## 一、今日速览

1. 📝 **内容结构化工具爆发**：微软开源的文档转换神器 `markitdown` 单日狂揽 3034 stars，成为今日最热项目，显示开发者对"让 AI 更好读取数据"的强烈需求。
2. 🤖 **Agent 生态持续膨胀**：Hermes Agent、Compound Engineering、TradingAgents 等十余个项目集中登榜/活跃，AI Agent 正从概念走向工程化落地。
3. 🎙️ **语音生成赛道有新突破**：OpenBMB 的无 tokenizer TTS 模型 VoxCPM2 获 888 stars 日增，多语音克隆与创意语音设计能力受关注。
4. 💻 **开发者"从零造轮子"文化流行**：`train-llm-from-scratch` 和 `build-your-own-x` 同时高热，说明社区对底层原理教育的需求旺盛。
5. 🌟 **长尾项目分散而活跃**：今日 Trending 与主题搜索涵盖前端 AI 化、金融交易、PPT 生成、数据爬取等细分场景，AI 开源生态呈现百花齐放之势。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 说明 |
|------|-------|------|
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | +3034 today | 微软官方 Python 工具，将 Office 文档/PDF 等统一转为 Markdown，为 AI 提供干净的结构化输入，瞬间爆热。 |
| [dmtrKovalenko/fff](https://github.com/dmtrKovalenko/fff) | +135 today | Rust 编写的高速文件搜索工具包，专为 AI Agent 设计，在准确率和速度上有明显优势。 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | +335 today | 终端专属 AI 编程 Agent，支持 hash 锚定编辑、LSP、子 Agent 等能力，面向深度终端用户。 |
| [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | +1486 today | 自适应 Web 爬虫框架，从单次请求到全量爬取均可处理，是 Agent 获取网页数据的基础设施。 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | +945 today | 为 Hermes Agent 提供 Web 和手机端入口，降低交互式 Agent 的使用门槛。 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | +485 today | 面向 AI 的设计语言规范，让 AI 在设计任务中输出更一致、更专业的视觉结果。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐81,626 | 业界主流 LLM 推理与 serving 引擎，高吞吐、省显存，近期持续更新对新模型的支持。 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐172,857 | 本地一键启动 LLM 的标杆工具，覆盖 DeepSeek、Qwen、Gemma 等热门模型。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|------|-------|------|
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐81,762 / +299 today | 多 Agent LLM 金融交易框架，模拟买方/卖方分析师、基金经理等角色协作决策。 |
| [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | +417 today | 官方出品的 Compound Engineering 插件，兼容 Claude Code、Codex、Cursor，关注 AI 辅助工程效率。 |
| [revfactory/harness](https://github.com/revfactory/harness) | +524 today | 元技能系统：自动设计领域专属 Agent 团队、定义专业技能并生成对应 Skill，Agent 编排的新范式。 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | +249 today | 自动移除语言模型内置审查限制的工具，在安全与开放的讨论中引起关注。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐175,973 | "与你一起成长"的 Agent，NousResearch 生态核心产品，强调持续学习与自适应。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐46,716 | AI 生产力工作室，集成智能对话、自主 Agent 与 300+ 助手，统一访问前沿 LLM。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐31,887 | 面向生成式 UI 的前端 Agent 框架，推动 AG-UI 协议，统一 React/Angular 下的 Agent 交互体验。 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐75,602 | AI 驱动的全栈开发平台，支持从需求拆解到代码实现的全流程自动化。 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 说明 |
|------|-------|------|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | +3375 today | 一键生成高清短视频的 AI 工具，调用大模型自动文案、配音、剪辑，短视频创作者刚需。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐39,778 | LLM 驱动的 A/H/美股智能分析系统，实时行情 + 新闻 + 决策仪表盘 + 多渠道推送，零成本定时运行。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐23,318 | 把任意文档生成真正的可编辑 PowerPoint（原生形状、动画、音频旁白），非截图替代方案。 |
| [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | +888 today | 无 tokenizer TTS 模型，支持多语种语音生成、创意语音设计与高保真声音克隆。 |
| [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | +647 today | 高速、可扩展的记忆引擎和 App，为 AI 时代提供"长期记忆 API"。 |
| [nocobase/nocobase](https://github.com/nocobase/nocobase) | ⭐22,610 | AI + 无代码平台，在成熟基础设施上层叠加 AI 能力，兼顾开发速度与系统可靠性。 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | ⭐27,390 | 免费开源的 24/7 本地 Cowork 应用，统一接入 OpenClaw、Hermes、Claude Code 等 20+ CLI Agent。 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | ⭐68,391 | 面向分析师、量化交易者和 AI Agent 的金融数据平台，接口覆盖广泛。 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 说明 |
|------|-------|------|
| [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) | +861 today | 从零训练 LLM 的完整教程，涵盖数据下载到文本生成全流程，极简实现，适合入门和教学。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐50,967 | 2 小时从 0 训练 64M 参数小 LLM，大幅降低 LLM 训练体验门槛。 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐71,769 | 统一高效微调 100+ LLM 和 VLM，ACL 2024 论文支撑，工业界广泛使用。 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐64,082 | 从零构建一个类 Claude Code 的 Agent Harness，"Bash is all you need"理念，手把手理解 Agent 原理。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,175 | 🤗 Transformers 框架，支持文本/视觉/音频/多模态模型的定义、推理与训练，行业标准。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | ⭐311 | 端侧 LLM 推理引擎，基于 X-bit 量化，面向隐私和离线场景。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,052 | 多模型评测平台，覆盖 Llama、Mistral、GLM、Claude、GPT 等主流模型，超 100 个数据集。 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|------|-------|------|
| [safishishamsi/graphify](https://github.com/safishamsi/graphify) | ⭐57,936 | 将代码库、SQL schema、文档等转为可查询知识图谱的 Agent 技能，Claude Code/Codex/Cursor 均可用。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐80,101 | 跨会话持久上下文系统，自动压缩并注入 Agent 历史记忆，覆盖 Claude、Codex、Gemini 等主流 Agent。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐57,326 | AI Agent 通用记忆层，提供统一的记忆读写接口，简化 Agent 长期记忆实现。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐81,672 | 融合 RAG 与 Agent 能力的检索增强生成引擎，定位企业级私有知识库方案。 |
| [Milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐44,580 | 云原生向量数据库，高可扩展，支持亿级向量近邻检索。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐32,416 | 基于推理、无需向量的 RAG 文档索引方案，提供替代传统向量检索的新思路。 |
| [HKUDS/LightRAG](httpshttps://github.com/HKUDS/LightRAG) | ⭐36,045 | EMNLP 2025 论文项目，"简单且快速"的 RAG 方案，注重轻量化实现。 |
| [memvid/memvid](https://github.com/memvid/memvid) | ⭐15,602 | 单文件无服务器记忆层，替代复杂 RAG 管道，适合轻量级 Agent 场景。 |

---

## 三、趋势信号分析

**Agent 基础设施正在取代 LLM 本身成为社区核心关注点。** 今日 Trending 前 17 名中，超过半数以 Agent 为核心关键词——从 `hermes-webui` 到 `compound-engineering-plugin`，从 `revfactory/harness`（元 Agent 编排）到 `TradingAgents`（多角色协作），再到 `oh-my-pi`（终端原生 Agent）。这表明开源社区的注意力正从"用什么模型"转向"如何搭建 Agent 系统"。

**数据→AI 的"最后一公里"工具持续爆发。** `markitdown`（文档→Markdown）、`Scrapling`（网页→结构化数据）、`graphify`（代码库→知识图谱）三个项目同日高热，说明 AI 落地的瓶颈已不在模型能力，而在数据的清洗、转换和结构化输入环节。微软亲自下场开源 markitdown，也验证了这一需求是行业级痛点。

**新型技术方向首次引起广泛关注：** `PageIndex` 提出的"无向量 RAG"思路挑战了传统 embedding + ANN 的检索范式，以推理替代搜索；`memvid` 用单文件内存替代复杂管道；`heretic` 尝试系统性解除模型审查。这些方向虽处于早期，但在社区中引发了相当讨论，值得持续追踪。

**行业事件关联：** Hermes Agent 近期密集迭代（WebUI、AionUi 持续上榜），NousResearch 生态快速扩张；金融 AI 持续火热（`daily_stock_analysis` 和 `TradingAgents` 同时活跃），与 A 股/美股关注度上升高度相关；VoxCPM 的无 tokenizer 路线与当前行业对 TTS 端到端化的探索方向一致。

---

## 四、社区关注热点

- 🔥 **[microsoft/markitdown](https://github.com/microsoft/markitdown)** — 单日 3034 stars，微软官方出品，解决 AI 读数据的核心痛点，有潜力成为文档→AI 的标准预处理工具。
- 🚀 **[revfactory/harness](https://github.com/revfactory/harness)** — "Agent 元编排"概念新颖，能自动生成领域专家 Agent 团队，可能成为下一代 Agent 开发平台的基础范式。
- 💰 **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** ⭐40K — 零成本 LLM 炒股工具，A/H/美股全覆盖，AI 在金融数据领域最落地的开源方案之一，值得实战参考。
- 🎵 **[OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM)** — 无 tokenizer TTS 路线的代表，支持克隆、多语种和创意语音设计，开源语音生成赛道近期最值得关注的模型之一。
- 🧠 **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** ⭐80K — Agent 的"跨会话记忆"问题一直是工程痛点，该项目已支持十余个主流 Agent，是构建有记忆 Agent 的优先选择。

---

*本日报数据来源于 GitHub Trending（2026-06-02）及 GitHub Search API 7天活跃主题仓库，AI 相关性由 OWL 技术分析师人工筛选评定。*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*