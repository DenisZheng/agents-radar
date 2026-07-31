# AI 开源趋势日报 2026-07-31

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-31 02:09 UTC

---

# 📊 AI 开源趋势日报 · 2026-07-31

---

## 1. 今日速览
- **Agent Harness（智能体工装）成核心战场**：`different-ai/openwork`（+915⭐）与 `affaan-m/ECC`（+804⭐）双双登顶 Trending，标志着开发者关注点从“单一 Agent”转向“Agent 运行时、技能编排、上下文压缩、多 IDE 兼容”的基础设施层竞争。
- **语音交互本地化落地加速**：Hugging Face 官方推出 `speech-to-speech`（+628⭐），提供开箱即用的本地语音 Agent 参考实现，推动端侧多模态交互从 Demo 走向生产。
- **RAG 演进为“记忆与知识图谱”**：`Graphify-Labs/graphify`（代码知识图谱）、`mem0ai/mem0`（通用记忆层）、`topoteretes/cognee`（长期记忆平台）高星领跑，向量检索不再是终点，结构化知识与持久化记忆成新焦点。
- **极简/原生技术栈涌现**：`The-Pocket/PocketFlow`（100 行框架）、`0xPlaygrounds/rig`（Rust 原生）、`AarambhDevHub/aarambh-studio`（纯 Rust LLM）显示社区对 Python 重依赖的反思与轻量化部署需求。
- **浏览器原生成为 Agent 运行环境**：`ChromeDevTools/chrome-devtools-mcp` 登榜，MCP 协议将浏览器 DevTools 变为编码 Agent 的原生工具链，预示“浏览器即 OS”趋势。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
| 项目 | Stars (总量/今日新增) | 核心看点 |
| :--- | :--- | :--- |
| **[ollama/ollama](https://github.com/ollama/ollama)** | 177,346 / — | 本地大模型运行事实标准，今日虽无新增但生态基石地位不可动摇，支持最新 Kimi-K2/GLM-5.2 等模型。 |
| **[huggingface/transformers](https://github.com/huggingface/transformers)** | 163,183 / — | 模型定义与推理框架核心库，配合今日 Trending `speech-to-speech` 构建完整语音管线。 |
| **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** | 158,381 / — | Agent 专用网页抓取/搜索 API，解决“联网获取干净数据”痛点，Agent 工作流必备基建。 |
| **[browser-use/browser-use](https://github.com/browser-use/browser-use)** | 107,343 / — | 让网站对 AI 可访问，浏览器自动化标准库，配合 MCP 协议成为 Agent 交互物理世界的关键接口。 |
| **[affaan-m/ECC](https://github.com/affaan-m/ECC)** | 236,257 / **+804** | **今日 Trending 榜首级**。Agent Harness 性能优化系统：技能、本能、记忆、安全、研究优先开发，兼容 Claude Code/Codex/Cursor/OpenCode。 |
| **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** | — / **+80** | **Google 官方出品**。将 Chrome DevTools 封装为 MCP Server，让编码 Agent 原生操作浏览器调试、DOM、Network、Console。 |
| **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** | 36,376 / — | Agent 前端技术栈（React/Angular/Slack），制定 AG-UI 协议，解决“Agent 如何渲染交互式 UI”难题。 |
| **[The-Pocket/PocketFlow](https://github.com/The-Pocket/PocketFlow)** | 11,072 / — | **100 行极简 LLM 框架**，主打“让 Agent 构建 Agent”，零依赖、可嵌入，适合边缘/设备端部署。 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体、Harness）
| 项目 | Stars (总量/今日新增) | 核心看点 |
| :--- | :--- | :--- |
| **[different-ai/openwork](https://github.com/different-ai/openwork)** | — / **+915** | **今日 Trending 总榜首**。Claude Cowork 开源替代品，基于 `opencode` 构建，主打多 Agent 协作、人机共同编程的开源运行时。 |
| **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** | 222,912 / — | “与你共同成长的 Agent”，强调长期记忆、个性化适配与持续学习，Agent 个性化方向标杆。 |
| **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** | 72,764 / — | 从零手写“纳米级 Claude Code”，Bash 即 Agent Harness，极佳教学样本与轻量化参考实现。 |
| **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** | 62,971 / — | 给 Agent 装上“眼睛”：零 API 费用读取 Twitter/Reddit/YouTube/GitHub/B站/小红书，联网能力即插即用。 |
| **[HKUDS/nanobot](https://github.com/HKUDS/nanobot)** | 46,442 / — | 超轻量自托管个人 Agent 框架（Python），内置 WebUI、Tools、Memory、MCP、多 Agent 工作流，开箱即用。 |
| **[zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)** | 46,227 / — | 开源超级 AI 助手 & Harness：规划、工具、技能、记忆自进化，多模型/多渠道，一行命令安装。 |
| **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** | — / **+378** | **今日 Trending 新星**。单一技能：跨 Reddit/X/YouTube/HN/Polymarket/Web 深度调研并输出有据可查总结，展示“Skill 原子化”趋势。 |
| **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** | 94,666 / — | “原始人模式”省 Token 技能：用极简提示词减少 65% Token 消耗，Agent 成本优化的巧思范本。 |

---

### 📦 AI 应用（垂直场景、生产力产品、编码助手）
| 项目 | Stars (总量/今日新增) | 核心看点 |
| :--- | :--- | :--- |
| **[huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech)** | — / **+628** | **今日 Trending 重磅**。HF 官方本地语音 Agent 参考实现：ASR -> LLM -> TTS 全链路开源，推动语音交互从云端走向本地化隐私保护。 |
| **[open-webui/open-webui](https://github.com/open-webui/open-webui)** | 147,393 / — | 最受欢迎的本地优先 AI 界面，支持 Ollama/OpenAPI，RAG、工具调用、多模态一站式，个人/团队自部署首选。 |
| **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** | 64,141 / — | “停止租用智能”，本地优先全能 Agent 体验：文档对话、Agent 技能、工作区管理，企业私有化部署强选。 |
| **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** | 49,173 / — | AI 生产力工作室：智能对话、自主 Agent、300+ 助手预设，统一接入前沿 LLM，桌面端体验标杆。 |
| **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** | 42,036 / — | 文档/主题一键生成**原生 PPTX**（形状/动画/图表/备注音频/模板复用），解决“生成大纲还要手动排版”痛点。 |
| **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** | 100,674 / — | 一键生成高清短视频（脚本/素材/配音/字幕/剪辑全自动），内容创作变现工具链成熟度极高。 |
| **[santifer/career-ops](https://github.com/santifer/career-ops)** | 62,323 / — | 开源 AI 求职 Agent：扫描招聘网站、结构化评分、定制简历、跟踪投递，本地 CLI 运行保护隐私。 |
| **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** | 59,620 / — | 多市场股票智能分析系统：多源行情+实时新闻+决策看板+自动推送，零成本定时运行，金融 Agent 落地典范。 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调、模型定义）
| 项目 | Stars (总量/今日新增) | 核心看点 |
| :--- | :--- | :--- |
| **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** | 196,620 / — | 产业级 ML 框架基石，TFX/TPU 生态在大规模训练/服务仍具不可替代性。 |
| **[pytorch/pytorch](https://github.com/pytorch/pytorch)** | 102,080 / — | 研究与生产统一框架，动态图+编译器(Inductor)生态持续领跑 LLM 训

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*