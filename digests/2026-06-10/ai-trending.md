# AI 开源趋势日报 2026-06-10

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-10 00:42 UTC

---



# 🤖 AI 开源趋势日报 | 2026-06-10

---

## 📋 今日速览

1. **AI Agent Skills/Plugins 生态全面爆发**：今日 Trending 榜单几乎被 Agent 技能相关项目统治，`last30days-skill`、`pm-skills`、`agent-skills`、`career-ops` 等聚焦于 Agent 能力扩展的技能市场密集登榜，标志着 AI Agent 正在从"能不能用"走向"怎么用好"的精细化阶段。
2. **本地 LLM 工具化加速**：`whichllm`（一键查找适合本机的最优 LLM）和 `turbovec`（高性能向量索引）反映出开发者对"本地优先"AI 工程日益强烈的需求。
3. **Agent 持久记忆与上下文管理成核心热点**：`claude-mem`、`mem0`、`graphify` 等聚焦跨会话记忆、知识图谱化的 RAG 工具持续高热，表明社区正在攻克 Agent 长期记忆与上下文连贯性这一关键瓶颈。

---

## 🔍 各维度热门项目

> **说明**：Trending 榜单中非 AI 项目（`ChinaTextbook`、`system-prompts-and-models-of-ai-tools`、`espectre`、`tolaria`、`openai/plugins`）已过滤。主题搜索结果仅选取 Trending 上榜或具有标志性意义的项目。

---

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 说明 |
|------|-------|------|
| [aaif-goose/goose](https://github.com/aaif-goose/goose) | +489 today | 开源可扩展 AI Agent，支持安装、执行、编辑和测试任意 LLM，直接以 Rust 编写，代表 Agent 框架向性能敏感方向演进 |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | +633 today | 一键查找能在你的硬件上实际运行且表现最好的本地 LLM，按真实时效敏感基准排名而非参数量，本地部署从"能不能跑"进入"怎么选最优"阶段 |
| [roboflow/supervision](https://github.com/roboflow/supervision) | +733 today | 可复用计算机视觉工具库，为 AI Agent 和自动化流水线提供即插即用的 CV 能力层 |
| [Tesseract-OCR/tesseract](https://github.com/tesseract-ocr/tesseract) | ⭐74,558 | GPU 加速的开源 OCR 引擎，作为 LLM 多模态输入的关键前置工具持续保持基础地位 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐58,198 | YOLO 系列目标检测一站式框架，持续作为视觉 AI 应用落地的核心基础工具 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|------|-------|------|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐211,891 | Agent 性能优化系统，覆盖技能、直觉、内存、安全与研发范式，是 Agent Harness 领域的标杆级项目 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐51,653 / +1110 today | 基于 Claude Code 构建的 AI 求职系统，14 种技能模式，是 Agent 商业化工作流的典型落地案例 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | +3191 today 🔥 | AI Agent 技能：跨 Reddit/X/YouTube/HN 等多平台自动调研并生成综合摘要，单日最高新增，是 Agent Skill 生态爆发的旗手性项目 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐81,485 | Agent 跨会话持久记忆系统，AI 自动压缩上下文并注入未来会话，支持 Claude Code/Codex/Gemini 等 10+ Agent 平台 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐70,829 | 字节跳动开源的长期任务 Agent Harness，集成沙箱、记忆、工具、技能和子 Agent，代表大厂 Agent 架构开源化的趋势 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐65,673 | "Bash is all you need"—从零构建 Claude Code 级别的 Agent Harness，成为 Agent 教育和开发者入门的热门入口 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | +443 today | 面向生产环境的工程级 Agent 技能集，Google Chrome 团队核心成员出品，推动 Agent Skills 从玩具走向工程化 |
| [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | +806 today | PM 技能市场：100+ Agentic 技能、命令与插件，覆盖从发现到战略、执行、发布、增长全链路 |
| [significant-gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐184,860 | Agent 领域先驱项目，持续迭代中仍然保持高关注度，代表自主 Agent 的长期愿景 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐47,130 | AI 生产力工作室，集成智能对话、自主 Agent 和 300+ 助手，统一接入前沿 LLM |

---

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 说明 |
|------|-------|------|
| [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | +402 today | "用 AI 赚钱"——聚焦 AI 变现的实用型应用，代表开发者将 AI 能力转化为生产力和收入来源的强烈诉求 |
| [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) | +191 today | 开源医疗 AI 平台，垂直场景 AI 应用的代表，医疗健康领域开源 AI 关注度持续攀升 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐25,580 | AI 将任意文档转换为可编辑的 PowerPoint，支持原生形状与动画，Office 自动化是 AI 应用最直接的落地场景之一 |
| [ZhuLINSEN/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐41,529 | LLM 驱动的 A 股/港股/美股智能分析仪表盘，零成本定时运行，金融领域 AI 应用的典型开源实践 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 说明 |
|------|-------|------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐173,713 | 支持 Kimi-K2.6、GLM-5.1、DeepSeek、Qwen 等主流模型一键运行，最新上线对 GLM-5.1 等新模型的支持，是本地 LLM 部署的事实标准 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,459 | 文本/视觉/音频/多模态模型的定义与推理训练框架，作为模型生态的地基持续高热 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐82,359 | 高吞吐、低内存的 LLM 推理服务引擎，模型规模化部署的关键基础设施 |
| [hiyouga/LlamaFactory](https://github.com/hiegga/LlamaFactory) | ⭐72,032 | 统一高效微调 100+ LLM 和 VLM，ACL 2024 论文支持，是 LLM 微调领域最流行的开源工具 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐188,819 | 自适应成长 Agent 框架，融合了 Nous Research 在模型训练和 Agent 研究的积累，Agent + LLM 一体化方向的前沿实践 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐100,623 | 深度学习训练框架基石，作为 ML 基础设施持续作为核心基础工具 |

---

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|------|-------|------|
| [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) | +1801 today 🔥 | 基于 TurboQuant 的向量索引库（Rust 编写 + Python 绑定），今日 Trending 第二大增长，高性能向量索引的新进入者 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐144,587 | 生产级 Agentic 工作流开发平台，RAG + Agent 双引擎，国内最热开源 AI 工程平台之一 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐58,201 | AI Agent 通用记忆层，为跨会话持久化记忆提供标准接口，Agent 记忆基础设施的核心项目 |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | ⭐64,227 | 将任意代码库/SQL/R 脚本/图像/视频自动转为可查询知识图谱的 Agent 技能，多模态知识图谱 RAG 的创新实践 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐44,703 | 高性能云原生向量数据库，支撑大规模向量 ANN 搜索，是生产级 RAG 系统的标配基础设施 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐32,812 | "无向量化"推理式 RAG 文档索引，挑战传统 Embedding+RAG 范式，代表了 RAG 技术路线的创新探索 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐17,745 | Agent 持久长期记忆的知识图谱引擎，自托管，为 Agent 提供跨会话的结构化知识记忆 |
| [oceanbase/oceanbase](https://github.com/oceanbase/oceanbase) | ⭐10,146 | 同时支持事务、分析和 AI 工作负载的分布式数据库，AI 原生数据库方向的重要探索 |

---

## 📈 趋势信号分析

今日数据最突出的信号是 **Agent Skills/插件生态的全面爆发**。Trending 榜单一日内出现 `last30days-skill`（+3191）、`pm-skills`（+806）、`agent-skills`（+443）、`career-ops`（+1110）等多个 Agent 技能相关项目密集登榜，这标志着 AI Agent 生态正在从"框架之争"转向"技能/插件生态之争"——开发者不再只关心 Agent 能不能跑，而是更关心 Agent 能完成什么具体任务、能否方便地集成专业技能。这与近期 Claude Code、Codex、Gemini CLI 等主流 Agent 平台纷纷开放 Skills/Plugin 接口直接相关。

第二大信号是 **本地优先（Local-First）AI 工程化加速**。`whichllm` 和 `turbovec` 的同时上榜，围绕本地 LLM 部署形成了"选型→索引→推理"的完整工具链，反映出开发者在数据隐私、成本和延迟方面的持续诉求。`PageIndex` 提出的"无向量 RAG"路线也是对此类需求的另一种回应。

第三，**Agent 持久记忆**成为技术攻坚焦点。`claude-mem`（⭐81,485）、`mem0`（⭐58,201）、`graphify`（⭐64,227）、`cognee`（⭐17,745）等项目从不同角度攻克同一问题：如何让 Agent 在多次会话间保持连贯记忆。这预示着 Agent 将从"一次性调试工具"走向"长期智能伙伴"。

---

## 🎯 社区关注热点

- **🏆 [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** — 单日 +3191 stars，Agent Skill 生态的"现象级"项目。它定义了一个清晰的范式：让 AI Agent 跨平台调研并综合信息。关注这个项目的开发者可以快速理解 Agent Skills 的设计标准与集成模式。趋势型关注。

- **🧠 [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)（⭐81,485）** — Agent 跨会话持久记忆的工程化解决方案，支持 10+ 主流 Agent 平台。随着 Claude Code、Codex 等 Agent 进入生产力阶段，持久记忆正在成为关键瓶颈，该项目是目前最成熟的社区方案。**值得深度使用和研究。**

- **🚀 [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec)（+1801 today）** — Rust 编写的高性能向量索引库，是今日 Trending 第二大增长项目。Rust 在 AI 基础设施层的渗透日益显著（`ollama` 亦用 Go/Rust），高性能本地向量检索成为新热点。**技术选型时值得评估。**

- **🔧 [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)（+443 today）** — Google Chrome 团队核心维护者出品的生产级 Agent 技能集。它的上榜意味着 Agent Skills 正在从社区玩具走向工程化标准。**是学习如何编写高质量 Agent 技能的范本。**

- **🔍 [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)（⭐32,812）** — 挑战传统 Embedding + 向量检索的 RAG 范式，提出"无向量化、推理式 RAG"路线。在 Embedding 成本和效果争议持续升温的背景下，这是一个值得关注的技术创新方向。

---

> 📊 数据源：GitHub Trending（2026-06-10）+ GitHub Search API topic 标签 | 共分析 97 个原始项目，经 AI 相关性筛选后保留约 35 个核心项目
> 
> 🤖 本日报由 **OWL** 自动分析生成

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*