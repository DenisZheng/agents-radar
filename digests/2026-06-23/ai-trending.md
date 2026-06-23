# AI 开源趋势日报 2026-06-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-23 00:39 UTC

---

# 🤖 AI 开源趋势日报 · 2026-06-23

---

## 一、今日速览

今日 GitHub AI 开源生态呈现 **Agent 工具链爆发** 的显著趋势——从视频制作、代码搜索到个人知识管理，AI Agent 正以前所未有的速度渗透每一个开发者工作流环节。字节跳动 [bytedance/deer-flow](https://github.com/bytedance/deer-flow) 以 ⭐+738 的热式增长上榜，SuperAgent 赛道持续升温；MCP（Model Context Protocol）生态加速成熟，[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) 以 ⭐+1185 成为今日 AI 项目涨星王。同时，**垂直场景 Agent**（视频制作、股票分析、语音克隆）集中涌现，标志着 Agent 技术正从概念验证走向产品化落地。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具）

| 项目 | Stars | 说明 |
|------|-------|------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐174,746 | 本地 LLM 推理标杆，持续集成 Kimi-K2.6、GLM-5.1、DeepSeek 等最新模型 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,819 | 🤗 多模态模型定义框架，文本/视觉/音频 SOTA 模型统一入口 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐83,581 | 高吞吐 LLM 推理引擎，生产环境部署首选 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | ⭐0 (+1185 today) | **今日涨星王**。高性能代码知识图谱 MCP Server，158 语言亚毫秒级查询，单二进制零依赖 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐137,270 (+615 today) | 大规模网页搜索/抓取/交互 API，Agent 的"眼睛" |
| [garrytan/gstack](https://github.com/garrytan/gstack) | ⭐0 (+573 today) | Garry Tan 的 Claude Code 完整配置：23 个工具扮演 CEO/设计师/工程经理等角色 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | ⭐0 (+2051 today) | **全场最高新增 Stars**。TypeScript 大佬的 Claude Skills 合集，来自真实 .claude 目录 |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | ⭐0 (+193 today) | 单块 4GB GPU 运行 70B 推理，持续降低本地部署门槛 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|------|-------|------|
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐73,243 (+738 today) | 字节开源的长期任务 SuperAgent 框架，支持沙箱/记忆/子 Agent/技能系统 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐219,917 | Agent 性能优化系统，集成技能/本能/记忆/安全，支持 Claude Code、Codex、Cursor 等 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐199,953 | "与你一起成长的 Agent"，Nous Research 出品 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐185,084 | AutoGPT 愿景：让每个人都能使用和构建 AI |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐146,174 | 生产级 Agent 工作流开发平台 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐139,904 | Agent 工程平台标杆 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐100,135 | 让网站对 AI Agent 可访问，轻松自动化网页任务 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐78,028 | AI 驱动开发 Agent（原 OpenDevin） |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐88,007 | 多 Agent LLM 金融交易框架 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | ⭐0 (+2938 today) | **今日最高新增**。全球首个开源 Agentic 视频制作系统，12 管线/52 工具/500+ Agent Skills |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | ⭐0 (+956 today) | 817 个结构化网络安全 Agent Skills，映射 MITRE ATT&CK 等 6 大框架 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐45,557 | 开源超级 AI 助手与 Agent Harness，多模型多渠道，一行安装 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐44,584 | 轻量级开源 AI Agent，面向工具/聊天/工作流 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐47,667 | AI 生产力工作室，智能聊天+自主 Agent+300+ 助手 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐35,405 | Agent 前端栈与生成式 UI 框架，AG-UI 协议缔造者 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | ⭐29,276 | 随处运行、万物可用的 AI 编码 Agent |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | ⭐28,650 | 免费本地 24/7 AI 协作应用，支持 20+ CLI Agent |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐23,850 | DeepSeek 原生终端 AI 编码 Agent，前缀缓存稳定性优化 |

### 📦 AI 应用（具体产品、垂直场景）

| 项目 | Stars | 说明 |
|------|-------|------|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐142,641 | 用户友好 AI 界面，支持 Ollama/OpenAI API 等 |
| [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | ⭐0 (+2463 today) | 为 AI 而生的 macOS 视频编辑器 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | ⭐0 (+529 today) | 开源 AI 语音工作室：克隆、听写、创作 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | ⭐0 (+395 today) | 写 HTML 渲染视频，为 Agent 构建 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐45,803 (+1557 today) | LLM 驱动多市场股票智能分析系统，零成本定时运行 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | ⭐0 (+100 today) | 一条命令用 AI 编码 Agent 克隆任意网站 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐30,352 | 从任意文档 AI 生成可编辑 PPT，含原生动画和语音旁白 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐55,230 | 基于 Claude Code 的 AI 求职系统，14 种技能模式 |

### 🧠 大模型/训练（模型权重、训练框架、微调）

| 项目 | Stars | 说明 |
|------|-------|------|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐195,827 | 开源机器学习框架王者 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐100,960 | 动态神经网络 + GPU 加速，研究/生产双栖 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐58,679 | YOLO 🚀 目标检测 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,112 | LLM 评测平台，支持 100+ 数据集、数十种模型 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐7,713 | 用 Rust 构建模块化可扩展 LLM 应用 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|------|-------|------|
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐83,764 | Agent 跨会话持久化上下文，AI 压缩后注入未来会话 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐83,370 | 领先的开源 RAG 引擎，融合 Agent 能力 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐59,149 | AI Agent 通用记忆层 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐50,293 | 领先的文档 Agent 与 OCR 平台 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐44,894 | 高性能云原生向量数据库 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | ⭐58,233 | 闪电般快速的 AI 混合搜索引擎 API |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐32,563 | 下一代大规模向量搜索引擎 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐19,328 | 开源 Agent AI 记忆平台，自托管知识图谱引擎 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | ⭐10,685 | 面向多模态 AI 的嵌入式检索库 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | ⭐11,925 | Claude Code 代码搜索 MCP，整个代码库即上下文 |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | ⭐70,722 | 将任意代码/Schema/文档/视频转化为可查询知识图谱 |

---

## 三、趋势信号分析

今日热榜最强烈的信号是 **AI Agent 工具链的全面爆发**。从底层的 [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)（代码知识图谱）到中层的 [bytedance/deer-flow](https://github.com/bytedance/deer-flow)（SuperAgent 框架），再到应用层的 [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)（视频制作 Agent），一条完整的 Agent 基础设施→框架→应用三层链路正在形成。

**MCP 协议生态加速成熟**是今日另一大亮点。[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)、[zilliztech/claude-context](https://github.com/zilliztech/claude-context) 等项目表明，MCP 正从概念走向生产级工具链，成为 Agent 与外部世界交互的标准协议。

**垂直场景 Agent 产品化**趋势显著。视频制作（OpenMontage +2938⭐）、股票分析（daily_stock_analysis +1557⭐）、语音克隆（voicebox +529⭐）、网络安全（Anthropic-Cybersecurity-Skills +956⭐）——这些项目不再是技术 Demo，而是具备完整功能的产品级工具，标志着 Agent 技术从"能不能做"进入"好不好用"的新阶段。

与近期行业事件的关联：字节跳动开源 deer-flow 延续了中国大厂在 Agent 赛道的密集布局；Anthropic 安全 Skills 的爆发式增长反映了 AI 安全合规需求的持续升温；而 MCP 生态的繁荣则印证了 Agent 互操作性正在成为社区共识。

---

## 四、社区关注热点

- 🔥 **[calesthio/OpenMontage](https://github.com/calesthio/openMontage)** — 今日涨星王（+2938⭐），将 AI 编码助手变为完整视频制作工作室，Agent 从"写代码"走向"做内容"的标志性项目

- 🔥 **[mattpocock/skills](https://github.com/mattpocock/skills)** — 全场最高新增（+2051⭐），顶级工程师的 Claude Skills 实战合集，代表了"Skills 即知识工程"的开发范式转变

- 🔥 **[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)** — AI 项目涨星王（+1185⭐），代码知识图谱 + MCP Server，亚毫秒级查询，Agent 理解大型代码库的关键基础设施

- 🔥 **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** — 字节跳动开源的 SuperAgent 框架持续爆发（+738⭐），长期任务自动化 + 子 Agent 协作，代表了 Agent 从单次对话向持续工作流的进化

- 🔥 **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** — 817 个结构化安全 Agent Skills，映射 6 大安全框架，AI Agent 安全合规从理论走向可执行工具

---

*报告生成时间：2026-06-23 | 数据来源：GitHub Trending + GitHub Search API*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*