# AI 开源趋势日报 2026-09-02

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-02 02:22 UTC

---

---

# 📈 AI 开源趋势日报 | 2026-09-02

> 数据来源：GitHub Trending 实时榜（14 项）+ GitHub Topic 搜索（79 项 AI 相关仓库）  
> 统计口径：Trending 以「今日新增 Stars」衡量爆发力；Topic 榜以「累计 Stars」衡量成熟度与社区认可度

---

## 1️⃣ 今日速览

- **Agent Skills 生态爆发**：Trending 榜前 10 中 6 个为「技能/技能库」项目（科研、专利、学术、设计、通用优化），标志着 **Agent 从「框架竞争」转入「技能标准化与复用」新阶段**。
- **多智能体协作落地教育/科研**：`OpenMAIC`（+3.1k⭐）以「一键部署多智能体互动课堂」领跑，`scientific-agent-skills`（19 万科学家使用）验证了垂直领域多 Agent 协作的产品化可行性。
- **小模型/本地化训练持续升温**：`minimind`（+1k⭐）证明「2 小时从零训练 64M LLM」已成标准化教程，配合 `LEANN`（MLsys 最佳论文）等向量数据库创新，推动 **边缘侧/隐私优先 RAG** 走向实用。
- **Agent 基础设施下沉到 Rust/Go**：`firecrawl/pdf-inspector`（Rust，+541⭐）、`crawl4ai`（Python/Rust 混合）、`rig`/`ollama`/`qdrant` 等核心组件重写或原生支持高性能语言，解决 Token 成本与延迟瓶颈。
- **编码 Agent 进入「上下文压缩 + 设计系统」精细化阶段**：`ECC`（+623⭐）、`caveman`（65% Token 削减）、`awesome-design-md` 形成「少 Token、懂设计、强记忆」的工程化工具链。

---

## 2️⃣ 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars (总量 / 今日新增) | 一句话解读 |
|------|------------------------|------------|
| [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | 0 / **+541** | Rust 编写的高性能 PDF 检测/分类/抽取库，自动区分扫描件与文本版，为 RAG 入库做智能路由——**数据清洗基建的「隐形冠军」**。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | 0 / **+145** | 面向 LLM 的友好爬虫/抓取器，输出干净 Markdown，内置去噪、分块、结构化提取，**RAG 数据源头的标准化入口**。 |
| [ollama/ollama](https://github.com/ollama/ollama) | 179,923 / — | 本地大模型运行标杆，新增 Kimi-K2.6/GLM-5.2/MiniMax 等国产 SOTA 支持，**「下载即运行」重塑本地推理分发格局**。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 8,493 / — | Rust 原生 LLM 应用框架，模块化、类型安全，适合构建高并发、低延迟的生产级 Agent 服务。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 37,151 / — | 面向 Agent 的前端栈（React/Angular/Mobile/Slack），推出 AG-UI 协议，**让生成式 UI 成为标准能力**。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 111,985 / — | 让 AI 操作浏览器的事实标准，配合新发布 `video-use` 将能力延伸至视频编辑，**Agent 与 GUI 交互的通用基座**。 |
| [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 0 / **+323** | 收集主流设计系统 DESIGN.md，扔给编码 Agent 即可生成符合规范 UI，**解决「Agent 写前端不懂设计」痛点**。 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars (总量 / 今日新增) | 一句话解读 |
|------|------------------------|------------|
| [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | 0 / **+3,128** | 清华 MAIC 团队出品，**一键部署多智能体互动课堂**，教师/学生/助教皆为 Agent，验证了教育场景多 Agent 编排的产品化路径。 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 0 / **+912** | 全球 19 万科学家在用的 **Agent 技能库**：165 个验证技能 + 100+ 科学数据库，兼容 Cursor/Claude Code/Codex 等主流客户端。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 245,796 / **+623** | Agent 能力优化套件：技能、本能、记忆、安全、Research-First 开发，**为 Claude Code/Codex/Cursor 等提供统一性能增强层**。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 239,548 / — | 「会成长的 Agent」，强调长期记忆与自我进化，社区活跃度极高，代表「个性化长期陪伴型 Agent」方向。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 47,625 / — | 超轻量自托管 Agent 框架（Python），内置 WebUI、MCP、多 Agent 工作流，**适合个人/小团队快速落地私有化 Agent**。 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 32,490 / — | 24/7 协作前端，统一接入 OpenClaw/Hermes/Claude Code/Codex 等 20+ CLI Agent，**多 Agent 协作的「操作系统级」入口**。 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 40,879 / — | 有状态、可循环、可人工介入的 Agent 编排框架，已成复杂工作流工程化的事实标准。 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,322 / — | 基于 DeepSeek 原生的终端编码 Agent，核心攻克 Prefix-Cache 稳定性，**「常驻后台、随时唤起」的工程化范式**。 |

---

### 📦 AI 应用（具体产品、垂直场景解决方案）

| 项目 | Stars (总量 / 今日新增) | 一句话解读 |
|------|------------------------|------------|
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 0 / **+193** | 面向 Claude Code 的 **学术科研全流程技能包**：调研→写作→审稿→修改→定稿，将论文产出标准化为可复用 Skill。 |
| [browser-use/video-use](https://github.com/browser-use/video-use) | 0 / **+472** | **用代码 Agent 剪视频**：将视频编辑转为可编程任务，结合 browser-use 实现「从网页素材到成片」的端到端自动化。 |
| [handsomestWei/patent-disclosure-skill](https://github.com/handsomestWei/patent-disclosure-skill) | 0 / **+501** | **中国专利垂直 Agent**：挖掘专利点、写交底书（发明/实用/外观）、解读政策、辅助审查答复，LegalTech 落地典范。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 51,348 / — | 统一 300+ Assistant、多模型接入的生产力工作台，**「一个客户端管所有模型与 Agent」的聚合器**。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 51,179 / — | 文档/主题 → 原生 PPTX（形状/动画/图表/母版/语音备注），**解决「大模型只能生成 Markdown 不能生成真 PPT」难题**。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 119,465 / — | 一键从关键词生成高清短视频（脚本/配音/字幕/剪辑/发布），**内容营销自动化的现象级应用**。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 64,462 / — | 多市场股票智能分析：多源行情+实时新闻+决策看板+自动推送，**零成本定时运行的量化研报 Agent**。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 69,772 / — | 开源 AI 求职全流程：岗位抓取→结构化评分→简历定制→投递追踪，**在 CLI 中完成求职闭环**。 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调工具、评测）

| 项目 | Stars (总量 / 今日新增) | 一句话解读 |
|------|------------------------|------------|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 57,161 / **+1,005** | **2 小时从零训练 64

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*