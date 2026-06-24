# AI 开源趋势日报 2026-06-24

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-24 00:34 UTC

---

# 🔍 AI 开源趋势日报 — 2026-06-24

> 数据来源：GitHub Trending + GitHub Search API（topic 标签，7天活跃）
> 分析时间：2026-06-24

---

## 一、今日速览

今日 AI 开源社区的最大主题是 **"Agent 基础设施的全面爆发"**——从字节跳动开源的 SuperAgent 框架 DeerFlow，到 NousResearch 的 Hermes Agent、Anthropic 官方插件仓库，再到多个 Agent 性能优化和记忆管理项目同时登榜，标志着 AI Agent 赛道正从"概念验证"快速进入"工程落地"阶段。**Claude Code 生态**成为今日最大赢家，至少 5 个热榜项目直接围绕其插件、记忆、最佳实践和性能优化展开。与此同时，**RAG/知识库**方向持续高热，向量数据库和知识图谱类项目在主题搜索中占据最大份额，显示企业级 AI 应用对"长期记忆"和"私有知识检索"的需求仍在快速增长。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具）

| 项目 | Stars | 今日 | 说明 |
|------|-------|------|------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐174,807 | — | 本地 LLM 推理的事实标准，持续集成 Kimi-K2.6、GLM-5.1、DeepSeek 等最新模型，社区活跃度极高 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐83,657 | — | 高吞吐 LLM 推理引擎，已成为生产部署的核心基础设施 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐140,007 | — | Agent 工程平台标杆，定义了 LLM 应用开发的标准范式 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐146,323 | — | 生产级 Agentic 工作流开发平台，企业级 LLM 应用的首选框架之一 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | — | +77 | Anthropic 官方 Claude Code 插件目录，标志着 Claude Code 插件生态正式标准化 |
| [garrytan/gstack](https://github.com/garrytan/gstack) | — | +1,011 | Garry Tan 的 Claude Code 完整配置方案，23 个工具分别扮演 CEO/设计师/工程经理等角色，今日热榜第二 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | — | +344 | 从 vibe coding 到 agentic engineering的 Claude Code 最佳实践指南 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | — | +1,300 | 高性能代码知识图谱 MCP 服务器，毫秒级索引、亚毫秒查询、99% token 压缩，今日热榜第三 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 今日 | 说明 |
|------|-------|------|------|
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐73,897 | +739 | 字节跳动开源的 SuperAgent 框架，集成沙箱/记忆/工具/子代理/消息网关，可处理从分钟到小时级的复杂长程任务，今日最热 AI Agent 项目 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐200,929 | +936 | NousResearch 推出的"与你共同成长的 Agent"，总量已超 20 万星，持续吸引社区贡献 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐220,524 | +593 | Agent 性能优化系统，为 Claude Code/Codex/Cursor 等提供 Skills/Instincts/Memory/Security 等能力层 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | — | +1,041 | 817 个结构化网络安全技能，映射 6 大安全框架，覆盖 29 个安全领域，为 AI Agent 注入企业级安全能力 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | — | +3,592 | 全球首个开源 Agentic 视频制作系统，12 条流水线、52 个工具、500+ Agent 技能，将 AI 编程助手变为完整视频制作工作室，今日全榜第一 |
| [revfactory/harness](https://github.com/revfactory/harness) | — | +128 | 元技能框架：自动设计领域专用 Agent 团队、定义专业 Agent 并生成其技能 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | — | +1,045 | 开源 AI 语音工作室，支持声音克隆、听写和语音创作 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | — | +294 | AI 驱动的全球实时情报仪表盘，聚合新闻、地缘政治和基础设施监控 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 今日 | 说明 |
|------|-------|------|------|
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐47,023 | +1,119 | LLM 驱动的多市场股票智能分析系统，集成多源行情、实时新闻、决策看板和自动推送 |
| [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | — | +1,630 | 为 AI 而生的 macOS 视频编辑器 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | — | +826 | 一条命令用 AI 编码 Agent 克隆任意网站 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐47,719 | — | AI 生产力工作室，集成智能聊天、自主 Agent 和 300+ 助手 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐30,732 | — | AI 从任意文档生成可编辑 PPT，支持原生形状、动画和语音旁白 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐88,182 | — | 多 Agent LLM 金融交易框架 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | ⭐69,589 | — | 面向分析师和量化交易员及 AI Agent 的金融数据平台 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐100,341 | — | 让 AI Agent 自动操作网页，持续获得大量关注 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 今日 | 说明 |
|------|-------|------|------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,846 | — | 最主流的模型定义框架，覆盖文本/视觉/音频和多模态 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐101,034 | — | 深度学习基础框架，AI 研究的基石 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐195,919 | — | 老牌 ML 框架，仍在工业部署中广泛使用 |
| [keras-team/keras](https://github.com/keras-team/keras) | ⭐64,100 | — | 面向人类的深度学习 API |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐58,734 | — | YOLO 系列目标检测，工业视觉 AI 的标杆 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | ⭐266 | — | 可靠、最小化、可扩展的基础模型预训练库 |
| [zjunlp/LightThinker](https://github.com/zjunlp/LightThinker) | ⭐164 | — | EMNLP 2025 论文，思维链逐步压缩技术 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 今日 | 说明 |
|------|-------|------|------|
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐59,252 | — | AI Agent 通用记忆层，跨会话持久化记忆 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐83,931 | — | 跨会话持久化上下文，AI 压缩后注入未来会话，兼容 10+ Agent 平台 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐83,463 | — | 领先的开源 RAG 引擎，融合 Agent 能力 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐33,340 | — | 无向量、基于推理的 RAG 文档索引新范式 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐20,222 | — | 开源 AI 记忆平台，为 Agent 提供知识图谱引擎 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12,545 | — | MLsys2026 论文，97% 存储节省的个人设备 RAG 方案 |
| [safishhami/graphify](https://github.com/safishhami/graphify) | ⭐71,196 | — | 将代码/SQL/文档/视频等任意文件夹转化为可查询知识图谱 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐48,516 | — | 压缩工具输出/日志/RAG 片段后再送入 LLM，60-95% token 节省 |

---

## 三、趋势信号分析

今日数据揭示三个核心趋势信号：

**1. Claude Code 生态全面爆发。** 今日 Trending 至少 5 个项目直接围绕 Claude Code 展开——官方插件仓库、最佳实践指南、Garry Tan 的完整配置方案、Agent 性能优化系统（ECC）、代码记忆 MCP 服务器。这标志着 Claude Code 已从"一个 AI 编程工具"进化为"一个完整的 Agent 开发平台"，社区正在为其构建插件、记忆、安全、性能优化的完整工具链。

**2. Agent 安全成为新焦点。** Anthropic-Cybersecurity-Skills 项目（+1,041 stars）一次性发布 817 个结构化安全技能，映射 MITRE ATT&CK、NIST CSF 2.0 等 6 大框架，覆盖 29 个安全领域。这是 AI Agent 安全领域最大规模的开源技能集之一，反映出随着 Agent 从实验室走向生产，社区对 Agent 安全能力的迫切需求。

**3. "Agent 即创作者"赛道崛起。** OpenMontage（+3,592 stars，今日全榜第一）将 AI Agent 引入视频制作领域，500+ Agent 技能覆盖 12 条制作流水线；VoiceBox（+1,045）聚焦 AI 语音创作；Palmier Pro（+1,630）打造 AI 原生视频编辑器。这些项目共同指向一个方向：AI Agent 正从"辅助编码"扩展到"全栈创意生产"。

此外，字节跳动开源的 DeerFlow（+739）代表了"长程任务 SuperAgent"方向——能处理从分钟到小时级的复杂任务，集成沙箱、记忆、子代理和消息网关，与 OpenAI 的 Codex 和 DeepSeek 的 Agent 方案形成竞争。

---

## 四、社区关注热点

- 🔥 **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** — 今日全榜第一（+3,592 stars），首个开源 Agentic 视频制作系统。Agent 从"写代码"到"做视频"的跨越，可能催生新一波垂直场景 Agent 创业潮。

- 🔥 **[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)** — 代码知识图谱 MCP 服务器，毫秒级索引、99% token 压缩、零依赖单二进制。解决了 AI 编码 Agent 的"代码库理解"痛点，有望成为 Agent 基础设施标配。

- 🔥 **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** — 字节跳动开源 SuperAgent 框架，支持小时级长程任务。国内大厂正式入局开源 Agent 框架竞争，与 OpenAI Codex、Google Gemini CLI 形成三足鼎立。

- 🔥 **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** — 817 个 Agent 安全技能，覆盖 6 大框架。随着 Agent 获得更多系统权限，安全能力将从"可选"变为"必选"，该项目可能成为 Agent 安全领域的参考标准。

- 🔥 **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — Agent 性能优化系统，总量已超 22 万星。为 Claude Code/Codex/Cursor 等提供 Skills/Instincts/Memory/Security 分层架构，代表了 Agent 工程化从"能用"走向"好用"的关键一步。

---

*报告由 OWL 自动生成，数据截至 2026-06-24。项目筛选标准：与 AI/ML 有直接关联，排除纯前端框架、通用开发工具、游戏等非 AI 项目。*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*