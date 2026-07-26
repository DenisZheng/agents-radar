# AI 开源趋势日报 2026-07-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-26 02:08 UTC

---

---

# 📊 AI 开源趋势日报 | 2026-07-26

> 数据来源：GitHub Trending 实时榜（18 项）+ GitHub Topic 搜索（80 项，含 rag/ai-agent/ml/llm/vector-db/llm-model）  
> 统计口径：Trending 榜以「今日新增 Stars」衡量爆发力；Topic 榜以「累计 Stars」衡量成熟度与社区认可度。

---

## 1️⃣ 今日速览

- **Agent 基建全面爆发**：从技能框架、浏览器环境、代码审查到记忆优化，围绕 “让 Agent 落地生产” 的工程化工具集今日集中登榜，标志着 Agent 开发从 “Prompt 工程” 转向 “系统工程”。
- **本地化/隐私优先成主流共识**：Ollama、Open WebUI、Dify、AnythingLLM 等本地全栈方案长期霸榜 Topic 前列，今日 Trending 中 `citrolabs/ego-lite`（共享登录态浏览器）、`Automattic/harper`（离线语法检查）再次印证 “数据不出设备” 的强需求。
- **垂直领域 Foundation Model 现身**：`Kronos`（金融时序基模）以 +319 日增冲入 Trending，配合 Topic 榜的 `OpenBB`、`Vibe-Trading`、`qlib`，金融量化成继代码生成后第二个出现 **领域基模+Agent 闭环** 的赛道。
- **RAG 进化至 Knowledge Graph + Vectorless**：Graphify、PageIndex、LEANN、Cognee 等项目推动检索从 “向量召回” 向 “确定性图谱/推理索引” 迁移，大幅降低存储与幻觉。
- **中文社区原创贡献显性化**：`Kronos`、`dive-into-llms`、`minimind`、`MoneyPrinterTurbo`、`daily_stock_analysis` 等中文项目同时出现在 Trending 与 Topic 高星榜单，生态自给能力增强。

---

## 2️⃣ 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）
| 项目 | Stars (总/今日) | 核心看点 |
|------|----------------|----------|
| [ollama/ollama](https://github.com/ollama/ollama) | 176,892 / — | 本地跑大模型事实标准，今日新增 Kimi-K2.6/GLM-5.2 支持，零配置体验持续降低门槛。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 87,153 / — | 高吞吐推理引擎，生产环境首选；PagedAttention 架构成 LLM Serving 基础设施。 |
| [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | 0 / **+77** | 统一 10+ 家厂商 API 接口的轻量 SDK，解决多模型路由切换痛点，Trending 新入榜。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 156,008 / — | 面向 Agent 的网页抓取/搜索 API，支持 JS 渲染与结构化输出，Agent 联网刚需。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 106,771 / — | 让 LLM 像人一样操控浏览器完成任务，Web Agent 基础设施。 |
| [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) | 0 / **+86** | 基于 TurboQuant 的向量索引，Rust 核心+Python 绑定，主打极致写入/查询延迟。 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,006 / — | Google Workspace 全套 CLI，动态生成自 Discovery Service，内置 Agent Skills。 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 27,777 / — | DeepSeek 原生编码 Agent CLI，围绕 Prefix Cache 稳定性设计，适合长时驻留。 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
| 项目 | Stars (总/今日) | 核心看点 |
|------|----------------|----------|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 233,332 / **+377** | Agent Harness 性能优化系统：Skills/Instincts/Memory/Security 一体化，兼容 Claude Code/Codex/Cursor，Trending 与 Topic 双榜第一。 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 0 / **+431** | 阿里巴巴实战验证的混合代码审查系统：确定性流水线 + LLM Agent，精准行级评论，内置 NPE/线程安全/XSS/SQLi 规则集。 |
| [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) | 0 / **+986** | 专为 AI Agent 设计的浏览器：复用用户已登录态，零成本零配置，解决 “Agent 无法登录/被风控” 核心痛点。 |
| [obra/superpowers](https://github.com/obra/superpowers) | 0 / **+479** | Agentic Skills 框架 + 软件开发方法论，主张 “技能即代码、可组合、可版本化”。 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | 0 / **+1,740** | 真实工程师的 `.agents` 目录技能集合，实战导向的 Agent 技能库。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 220,488 / — | “与你共同成长的 Agent”，强调长期记忆与个性化演化。 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 82,079 / — | AI-Driven Development 代表作，SWE-Bench 验证的代码生成/修复 Agent 平台。 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 38,139 / — | 有向循环图构建有状态、可容错的多 Agent 工作流，企业级 Agent 编排标杆。 |

---

### 📦 AI 应用（具体产品、垂直场景）
| 项目 | Stars (总/今日) | 核心看点 |
|------|----------------|----------|
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | 0 / **+319** | **金融市场语言基座模型**：针对多市场行情/新闻/因子联合预训练，直接输出交易信号，垂直 Foundation Model 罕见开源。 |
| [OtterMind/Chat2DB](https://github.com/OtterMind/Chat2DB) | 0 / **+360** | AI 驱动的通用 SQL 客户端，支持 10+ 数据库，自然语言生成/优化/解释 SQL，DBA/开发者效率倍增器。 |
| [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | 0 / **+412** | 面向 AI 时代的 macOS 视频编辑器：原生时间轴 + AI 剪辑/字幕/生成一体化。 |
| [CoreBunch/Instatic](https://github.com/CoreBunch/Instatic) | 0 / **+426** | Agentic 可视化 CMS：自托管、输出纯静态页、内置用户/角色/插件/数据库，Webflow/Framer 开源替代。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 48,985 / — | AI 生产力工作室：统一 300+ Assistant、自主 Agent、多模型接入，桌面端体验标杆。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 41,091 / — | 文档/主题 → 原生 PPTX（形状/动画/图表/备注音频），支持自定义模板，办公自动化落地佳作。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 99,290 / — | 一键主题→高清短视频全自动流水线（脚本/语音/字幕/剪辑/发布），内容创作变现工具。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 58,809 / — | 多市场股票智能分析：行情+新闻+决策看板+自动推送，零成本定时运行，量化研报自动化。 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调、评测）
| 项目 | Stars (总/今日) | 核心看点 |
|------|----------------|----------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 162,976 / — | 模型定义/训练/推理事实标准库，覆盖文本/视觉/音频/多模态全谱系。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 101,953 / — | 动态图深度学习框架基石，GPU 加速生态核心。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 53,841 / — | **2 小时从 0 训练 64M 参数 LLM** 完整教学代码，入门大模型训练最佳实践。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,236 / — | 大模型评测平台，支持 100+ 数据集、主流闭源/开源模型横评，选型必备。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,408 / — | Apple Silicon 上从零构建 tiny vLLM + Qwen 推理服务课程，系统工程视角学 LLM Serving。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 59,875 / — | YOLO 系列最新实现（YOLO26/11/8），目标检测/分割/姿态/跟踪一体化，工业级部署友好。 |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | 6,086 / — | 原子化 Agent 构建范式：最小可复用单元组合复杂行为，工程化程度高。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | 315 / — | 端侧 LLM 推理引擎，X-Bit 量化实现极低内存占用，移动/嵌入式落地参考。 |

---

### 🔍 RAG/知识库（向量库、检索增强、知识管理）
| 项目 | Stars (总/今日) | 核心看点 |
|------|----------------|----------|
| [langgenius/dify](https://github.com/langgenius/dify) | 150,246 / — | Agentic Workflow + RAG 一站式平台，云/私有化/协作三合一，从原型到生产零重构。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 146,733 /

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*