# AI 开源趋势日报 2026-06-13

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-13 00:43 UTC

---

# AI 开源趋势日报 · 2026-06-13

---

## 一、今日速览

1. **"Agent Skills" 成为今日最显著的趋势标签**：Trending 榜单前 13 名中有 4 个、总数值最高的 3 个仓库全部围绕"为 AI 编程智能体编写技能（skills）"，显示开发者正在从构建 Agent 框架转向为其编写**可复用、生产级的原子能力包**。
2. **x-cache 和推理基础设施持续获关注**：LMCache（KV Cache 层）登上今日热榜，结合主题搜索中 vllm 8 万+ stars，说明 **LLM 推理效率** 仍是最刚性的工程需求。
3. **苹果发布容器化工具**引发 3500+ 今日 stars，虽是通用设施，但强化了 macOS + Apple Silicon 作为 AI 开发主力机的生态叙事。
4. **医疗 AI 开源化提速**：openmed 单日获 515 stars，验证垂直医疗场景正成为开源 AI 模型的新增长极。
5. **向量数据库 + "记忆"概念成熟**：mem0（58K+ stars）、cognee（17K+ stars）等项目将"Agent 记忆"从学术论文推向可用产品。

---

## 二、各维度热门项目

> **注**：Trending 中已过滤以下非 AI 项目（music-assistant、mattermost、apple/container、iptv-org、refactoringhq/tolaria、microsoft/PowerToys）。

### 🔧 AI 基础工具

| 项目 | Stars | 一句话 |
|------|-------|--------|
| [LMCache/LMCache](https://github.com/LMCache/LMCache) — Python | Star 数待获取 (+28 today) | 专为 LLM 设计的 **KV Cache 高速层**，通过多级存储复用显著降低推理延迟与显存占用，活跃于 2026 sys-ml 会议方向。 |
| [Hiyouga/LlamaFactory](https://github.com/Hiyouga/LlamaFactory) — Python | ⭐72,117 | 统一微调 **100+ LLM/VLM** 的一站式框架，ACL 2024 论文开源实现，至今仍是微调领域的"事实标准"。 |
| [opencompass/opencompass](https://github.com/open-compass/opencompass) — Python | ⭐7,081 | 支持百余种主流模型 + 100+ 数据集的 **大模型评测平台**，逐渐成为国内模型发布时的基准对标工具。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) — Python | ⭐4,272 | 面向系统工程师的 Apple Silicon 上构建 **微型 vLLM+Qwen 推理服务** 的实践课程，填补端侧推理教学空白。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) — Python | ⭐312 | 基于 X-bit 量化的 **端侧 LLM 推理** 引擎，适合设备端隐私敏感场景。 |

---

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话 |
|------|-------|--------|
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Shell | ⭐待获取 (**+2,656 today** ⭐今日最热) | Google Chrome 工程总监出品的 **生产级 AI 编程 Agent 技能集**，代表了"skills as packages"范式的里程碑。 |
| [obra/superpowers](https://github.com/obra/superpowers) — Shell | ⭐待获取 (+1,275 today) | Agentic skills 框架 + 配套软件开发方法论，单日破千 stars 可见社区对 **可复制智能体工作流** 的渴求。 |
| [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | ⭐待获取 (+827 today) | 100+ 枚 Agentic 技能的市场化集合，覆盖从产品发现到增长全链路的 **PM 专用 Agent 能力包**。 |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) — Shell | ⭐待获取 (+1,026 today) | 一句话启动完整 AI 工作室：前端、Reddit 运营、现实核查——**每个 Agent 都是有个性的专业角色**。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — Python | ⭐191,985 |"与你共同进化的 Agent"，Nous Research 出品，超高 stars 验证其社区影响力，今日重新进入热门。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) — Python | ⭐45,260 | 国产开源超级 AI 助理 & Agent 框架（原 chatgpt-on-wechat），支持自进化记忆与多渠道接入，装机即用。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) — TypeScript | ⭐34,888 | **前端 Agent 基建栈**，主导 AG-UI 协议，为 React/Angular/Mobile/Slack 注入生成式 UI 能力。 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) — Python | ⭐66,300 | 从 0 到 1 复现 Claude Code 的极简 Agent 框架，Bash is all you need —— **帮助开发者真正理解 Agent 运行机制**。 |

---

### 📦 AI 应用

| 项目 | Stars | 一句话 |
|------|-------|--------|
| [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) — Python | ⭐待获取 (+515 today) | 开源医疗 AI 项目，**医疗垂直场景**今日进榜，标志开源 LLM 落地正从通用走向专科。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — Python | ⭐42,325 | 基于 LLM 的 **A 股/港股/美股智能分析** 仪表盘，零成本运行 + 多渠道推送，量化与 AI 的平权化代表。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — Python | ⭐26,993 | 从任意文档生成 **可编辑 PPTX**（含原生形状动画 + 语音旁白），Skill 可直接安装到 Claude Code 等 Agent 工具中。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) — Python | ⭐26,777 | 给 Agent 装上"眼睛"，一键读取 **Twitter/Reddit/YouTube/GitHub/B站/小红书**，零 API 费用，开源版 Social Listening 工具。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — TypeScript | ⭐47,251 | AI 生产力 Studio，支持智能对话、自主 Agent 与 300+ 助理，统一接入主流前沿 LLM，本地化体验。 |
| [hkuds/nanobot](https://github.com/hkuds/nanobot) — Python | ⭐44,119 | 轻量级开源 AI Agent，覆盖工具、聊天、工作流三大场景，强调 **本地可控**。 |

---

### 🧠 大模型 / 训练

| 项目 | Stars | 一句话 |
|------|-------|--------|
| [ollama/ollama](https://github.com/ollama/ollama) — Go | ⭐173,977 | 一键本地运行 Kimi-K2.6、GLM-5.1、DeepSeek、Qwen 等主流模型的 **LLM 运行器**，至今仍是普通人接触本地 AI 的入口。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) — Python | ⭐82,722 | 高吞吐、内存高效的 LLM 推理与 serving 引擎，**行业标准级推理后端**，持续活跃迭代。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — Python | ⭐139,145 | 老牌 Agent 工程平台，今日在榜巩固其 **LLM 应用开发"连接器"** 地位，生态长尾效应显著。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) — Python | ⭐98,516 | 让 Agent **操控任意网站** 完成任务，由 MCP 协议等驱动的第三代 Agent 基础设施核心。 |
| [eigenwise/atomic-agents](https://github.com/eigenwise/atomic-agents) — Python | ⭐5,978 | 模块化、原子化构建 AI Agent，与今日"skills"趋势高度呼应，工程化思想清晰。 |
| [Eigenwise/atomic-agents] / [testtimescaling (TTS Survey)](https://github.com/testtimescaling/testtimescaling.github.io) — HTML | ⭐105 | **Scaling Survey** 论文（LLM 测试时缩放）的资源库，指向 2026 年 next big thing：推理时计算能力。 |

---

### 🔍 RAG / 知识库

| 项目 | Stars | 一句话 |
|------|-------|--------|
| [mem0ai/mem0](https://github.com/mem0ai/mem0) — Python | ⭐58,453 | AI Agent **通用记忆层**，跨会话持久化上下文，让 Agent 越用越聪明，被视为 Agent 版数据库。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) — Python | ⭐17,802 | 开源的 Agent AI 记忆平台，用 **自托管知识图谱引擎** 为 Agent 实现长期记忆，填补图+向量空白。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — JavaScript | ⭐82,005 | **捕获 Agent 在会话中的一切行为**，AI 压缩后注入下次上下文；兼容 Claude Code、OpenClaw、Codex、Gemini 等，生态覆盖度最高。 |
| [Graphify](https://github.com/safishame/graphify) — Python | ⭐66,299 | 将任意代码库/SQL schema/脚本/论文/视频转化为 **可查询知识图谱**，为 Agent 提供理解整个项目的结构化上下文。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) — JavaScript | ⭐61,503 | 本地优先的一站式 Agent 体验平台，**拒绝租用你的智能**，支持私有部署全屋 RAG 方案。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — Python | ⭐82,578 | 融合 RAG + Agent 能力的「高级上下文引擎」，2026 年星数持续飙升，**企业级知识管理首选开源方案**。 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) — TypeScript | ⭐11,829 | 面向 Claude Code 的 **代码搜索 MCP**，让整个代码库成为 Agent 的理解上下文，专业场景价值极高。 |
| [Milvus (milvus)](https://github.com/milvus-io/milvus) — Go | ⭐44,748 | 高性能云原生向量数据库，专为 **大规模向量 ANN 搜索** 构建，2026年仍保持高活跃度与工程迭代速度。 |

---

## 三、趋势信号分析

**1. Agent Skills Economy 正在成型**

今日 Trending Top 13 中，addyyosmani/agent-skills（+2,656）、obra/superpowers（+1,275）、phuryn/pm-skills（+827）、msitarzewski/agency-agents（+1,026）——四者合计占今日热榜 AI 项目 stars 增量的绝大多数（约 5,784 / ~6,850），且全部是 **Agent 可复用能力包** 而非完整框架。这表明开发者已跨越"构建第一个 Agent"的早期阶段，进入"如何批量化部署 Agent 能力"的基础设施期。类比 App Store 的逻辑，社区正在期待"Skills 市场"的诞生。

**2. 推理效率与存储优化进入工程攻坚阶段**

主题搜索中 vllm 82K+ stars + 今日 LMCache 继续上榜，说明业界对长上下文 KV Cache 复用的关注度持续攀升。结合 testtimescaling 的测试时计算（Test-Time Scaling）论文资源库出现，当前行业正在从"单次前向推理的全量计算"演进为**分阶段、缓存化、测试时多维扩展**的新范式。

**3. 新兴技术栈信号：Rust 构建 LLM 工具链**

0xPlaygrounds/rig（Rust，7.6K stars）代表了一股新势力——用 Rust 开发模块化 LLM 应用，与 Go 驱动的 ollama、meilisearch，以及 TypeScript 的 CopilotKit 形成多语言竞争格局。Rust 在 LLM 基础设施层的话语权可能继续扩大。

**4. 与行业事件的关联**

- CowAgent / nanoBot / open-webui 持续热门，反映 **中国开发者对 Agent 本地部署与隐私可控**的强烈诉求（受国内 API 合规约束影响）。
- openmed 的垂直医疗趋势与全球 Med-LLM 开源浪潮同步（Med-PaLM、BiomedGPT 后的社区跟进效应）。
- browser-use 和 Agent-Reach 代表的 "Agent 获取真实世界信息"能力，与 Google Gemini 生态、MCP 协议的标准化进程密切相关。

---

## 四、社区关注热点

- 🔥 **addyosmani/agent-skills** · Google 工程总监首个面向 AI Agent 的生产技能集，定义了新的 Agent 能力交付范式，值得跟进其后续版本与生态扩展。

- 🔥 **obra/superpowers** · 单日 1,275 stars 的 Agentic skills 框架，方法论驱动（Skills + 软件工程管理），若形成标准将影响 AI 编程工具链格局。

- 🧠 **mem0ai/mem0 + thedotmack/claude-mem** · "Agent 记忆"赛道竞争白热化。mem0 主打通用记忆层，claude-mem 主打会话上下文压缩注入；两者 58K+ 与 82K+ stars 验证了这一方向的工程落地价值。

- 🔍 **Graphify (safishame/graphify)** · 将整个代码库、数据库 Schema、文档统一映射为知识图谱并供 Agent 查询，解决了 Agent **全局上下文理解**的关键痛点，2026 年上半年增速惊人。

- ⚡ **LMCache + vllm** · KV Cache 优化 + 高吞吐推理引擎，构成 2026 年 LLM serving 层的硬核工程栈；对于自建推理服务的团队，这是不可绕过的技术组合。

---

*数据来源：GitHub Trending（2026-06-13 实时）& GitHub Search API（topics: llm-model, ai-agent, ml, llm, vector-db, rag）。*
*报告由 OWL 自动分析生成，供开发者参考，不构成投资建议。*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*