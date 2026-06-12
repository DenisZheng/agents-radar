# AI 开源趋势日报 2026-06-12

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-12 00:44 UTC

---

# 🤖 AI 开源趋势日报 — 2026-06-12

---

## 📌 第一步：过滤结果

**Trending 中保留（AI 相关）**：addyosmani/agent-skills、maziyarpanahi/openmed、phuryn/pm-skills、NVIDIA/SkillSpector、x1xhlol/system-prompts-and-models-of-ai-tools、obra/superpowers、msitarzewski/agency-agents、kenn-io/agentsview、alchaincyf/zhangxuefeng-skill、hexo-ai/sia

**Trending 中排除**：apple/container（容器基础设施）、soxoj/maigret（OSINT 工具）、refactoringhq/tolaria（知识库桌面应用，非 AI 核心）、restic/restic（备份工具）、masterking32/MasterDnsVPN（VPN）、chatwoot/chatwoot（客服平台，非 AI 核心）、TapXWorld/ChinaTextbook（数据集）、mattermost/mattermost（协作平台）、bannedbook/fanqiang（翻墙工具）

**主题搜索中保留全部 79 项**均为 AI/ML 相关。

---

## 📌 第二步：分类汇总

---

## 1. 今日速览

今日 AI 开源社区最大的热点是 **"Agent Skills"（智能体技能）** 从概念走向基础设施化——从个人开发者到 NVIDIA、Apple，围绕 AI 编码智能体的技能定义、分发、安全扫描已形成完整链路。**Agent 框架生态持续爆发**，Claude Code、Codex、Cursor 等编码智能体的周边工具（记忆、分析、技能市场）密集登榜，标志着 AI 辅助开发正从"点工具"走向"平台化"。**RAG 与向量数据库**仍是长期强劲的主题，mem0、LlamaIndex、weaviate 等持续活跃。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 说明 |
|------|-------|------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐173,899 | 本地 LLM 推理部署的事实标准，支持 DeepSeek、Qwen、Gemma 等主流模型，入门友好度无出其右 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,513 | 最权威的模型定义与推理框架，覆盖文本/视觉/音频/多模态，学术与工业双轨并进 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐82,590 | 高吞吐 LLM 推理服务引擎，PagedAttention 技术标杆，企业级部署首选 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐98,338 | 让 AI Agent 操控浏览器的标杆工具，打通 Agent 与现实网页的最后一公里 |
| [kenn-io/agentsview](https://github.com/kenn-io/agentsview) | ⭐114 (+114 today) | 本地优先的 Coding Agent 会话分析与智能监控工具，支持 20+ 主流 Agent，号称 ccusage 的 100 倍提速替代 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | ⭐319 (+319 today) | NVIDIA 官方为 AI Agent Skills 生态推出的安全扫描器，检测恶意模式与安全风险 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|------|-------|------|
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐184,888 | 开源 Agent 运动的先驱，长期保持在 AI 开源第一梯队 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐70,992 | 字节跳动开源的"长视野"SuperAgent 框架，整合沙箱/记忆/工具/子 Agent，面向分钟到小时级复杂任务 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐144,884 | 生产级 Agent 工作流开发平台，是构建 AI 应用最接近"开箱即用"的方案 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ⭐3,278 (+3,278 today) | Google Chrome 前工程总监出品，面向 AI 编码 Agent 的工程级技能集合，今日 Trending **最热** |
| [obra/superpowers](https://github.com/obra/superpowers) | ⭐1,322 (+1,322 today) | Agent 技能框架与软件开发方法论合二为一，强调可落地的开发实践 |
| [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | ⭐1,978 (+1,978 today) | PM Skills Marketplace，100+ Agent 技能/命令/插件，覆盖产品从发现到交付的完整链路 |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | ⭐1,599 (+1,599 today) | 一个"AI 团队"完整 staffing：前端向导、社区运营、质量管控，每个 Agent 有鲜明角色与交付物 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐213,523 | Agent 性能优化指挥中枢，集技能/直觉/内存/安全/研究式开发于一体，面向 Claude Code/Codex/Cursor |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐76,492 | 开源 AI 驱动开发平台，强调 Agent 自主完成软件工程任务 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐44,071 | 轻量级开源 AI Agent，面向工具/聊天/工作流的一站式接入 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐34,728 | Agent 前端栈与生成式 UI 方案，AG-UI 协议的制定者 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐191,001 | "与你一起成长的 Agent"，Nous Research 出品，强调自适应与持续进化 |
| [hexo-ai/sia](https://github.com/hexo-ai/sia) | ⭐199 (+199 today) | 自进化 AI 框架，可自主提升任意 AI 系统（模型或 Agent）在基准任务上的性能 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 说明 |
|------|-------|------|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐139,064 | Agent 工程生态平台的事实标准，链式调用/工具集成/记忆一站式解决 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐141,122 | 最友好的本地 AI 界面，支持 Ollama + OpenAI API，零代码上手 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐47,221 | AI 生产力工作室：智能聊天 + 自主 Agent + 300+ 助手，统一接入前沿 LLM |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐131,562 | 面向 Agent 的大规模网页搜索、抓取与交互 API，"给 Agent 一双看世界的眼睛" |
| [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) | ⭐426 (+426 today) | 开源医疗 AI 平台，切入 healthcare 垂直场景 |
| [alchaincyf/zhangxuefeng-skill](https://github.com/alchaincyf/zhangxuefeng-skill) | ⭐89 (+89 today) | 张雪峰的认知操作系统 Skill，高考/考研/职业规划的实战 AI 思维框架，由 AI Agent 自动生成 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐26,645 | AI 生成可编辑 PPT，支持原生形状动画 + 语音讲稿 + 自定义模板，PPT 生产效率革命 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 说明 |
|------|-------|------|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐195,606 | ML 开源界最深基石，生产部署最为广泛 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐100,659 | 研究与实验的首选框架，动态图 + 强 GPU 加速 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐72,089 | 100+ LLM/VLM 统一高效微调平台，ACL 2024，开箱即用 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | ⭐163,588 | 社区提示词共享与发现平台，沉淀了海量工程经验 |
| [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | ⭐368 (+368 today) | Cursor、Devin、Manus、Windsurf 等 25+ AI 工具的 System Prompts 与内部模型全收录，对 AI 安全研究者和提示词工程师极具参考价值 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,270 | 面向系统工程师的 Apple Silicon LLM 推理实战课，从零搭建 tiny-vLLM + Qwen |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | ⭐312 | 端侧 LLM 推理，X-Bit 量化驱动，面向 IoT 与移动端部署场景 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,080 | 开源 LLM 评测平台，覆盖 100+ 数据集，支持国内外主流模型横向对比 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|------|-------|------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐82,482 | 顶尖开源 RAG 引擎，融合 Agent 能力，构建 LLM 的高质量上下文层 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐58,362 | AI Agent 通用记忆层，跨会话持久化记忆，已成为 Agent 标配基础设施 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐81,837 | 跨会话持久上下文管理，捕获 → AI 压缩 → 注入，兼容 Claude Code/OpenClaw/Gemini 等 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐50,084 | 领先的文档 Agent 与 OCR 平台，RAG 管道搭建首选 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐44,730 | 高性能云原生向量数据库，十亿级 ANN 检索，企业级向量化搜索 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | ⭐58,059 | 极速搜索引擎 API，集成 AI 混合检索能力 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐32,041 | 高性能大规模向量数据库，云原生友好，下一代 AI 搜索底座 |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | ⭐16,313 | 开源向量数据库，向量搜索 + 结构化过滤并行，高可用云原生 |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | ⭐27,872 | RAG 高级技术全景收录：分步教程覆盖 HyDE、RAPTOR、自我反思检索等前沿方法 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐61,456 | "停止出租你的智能"——本地化一站式 Agent 体验，私有部署首选 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐17,791 | 开源 AI 内存平台，基于知识图谱引擎，给 Agent 提供跨会话持久化长期记忆 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐11,908 | MLsys2026 论文项目，RAG on Everything，存储节省 97%，设备端 100% 隐私运行 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | ⭐11,820 | Claude Code 的代码搜索 MCP，让整个代码库成为 Agent 上下文，重构代码搜索体验 |

---

## 3. 趋势信号分析（约 260 字）

**今日最强烈的信号是"Agent Skills 基础设施化"。** 单个项目看可能不起眼，但把 Trending 中的 addyosmani/agent-skills（+3,278 stars，今日第一）、obra/superpowers（+1,322）、phuryn/pm-skills（+1,978）、msitarzewski/agency-agents（+1,599）、NVIDIA/SkillSpector（今日新项目）放在一起，可以清晰看到一个**完整的 Agent 技能生态正在成形**：技能定义 → 市场分发 → 安全审计。这与 Claude Code、OpenHands、Codex 等编码智能体的爆发直接相关——当 Agent 成为开发者的"结对编程伙伴"，围绕 Agent 的工具链自然会像当年 IDE 插件生态一样快速扩张。

**第二个信号是"自进化 AI"**初现端倪。hexo-ai/sia（自主提升 AI 系统性能的框架）和 NousResearch/hermes-agent（"与你一起成长的 Agent"）代表了社区对 Agent 从静态工具向自适应系统演进的期待。

**第三个信号是安全与合规压力跟进**。NVIDIA 专门推出 SkillSpector 对 Agent Skills 进行安全扫描，意味着 Agent 技能的广泛分发已经引发了实际的安全顾虑，这在 2-3 个月前几乎是空白话题。安全与能力的赛跑正式开始。

---

## 4. 社区关注热点

- **🏆 Agent Skills 生态全面起势**
  [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) + [obra/superpowers](https://github.com/obra/superpowers) + [phuryn/pm-skills](https://github.com/phuryn/pm-skills) 三家同日大热，Agent 技能正在成为新的标准接口层。开发者应尽早熟悉这套范式。

- **🛡️ AI Agent 安全成为刚需**
  [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) 首次进入聚光灯，Agent 技能的恶意代码注入、权限滥用风险已从理论走向实践。安全工具将进入 Agent 开发标准流程。

- **🧠 记忆与上下文管理持续是 Agent 最大瓶颈**
  [mem0ai/mem0](https://github.com/mem0ai/mem0)（⭐58k）、[claude-mem](https://github.com/thedotmack/claude-mem)（⭐81k）、[cognee](https://github.com/topoteretes/cognee)（⭐17k）三个不同路径的 Agent 记忆项目同时活跃，说明"Agent 如何跨会话记忆"仍是未解决的核心工程挑战。

- **🔍 代码库感知 Agent 快速普及**
  [zilliztech/claude-context](https://github.com/zilliztech/claude-context) 让 Agent 对整个代码库建立向量索引，[kenn-io/agentsview](https://github.com/kenn-io/agentsview) 对 Agent 行为做分析与监控——围绕编码 Agent 的"可观测性 + 上下文深度"正在成为新战场。

- **🌐 字节 deer-flow 代表 SuperAgent 方向持续高热**
  [bytedance/deer-flow](https://github.com/bytedance/deer-flow)（⭐71k）以"长视野 SuperAgent"定位，整合子 Agent 调度、sandbox 隔离、记忆管理，代表了 Agent 从"回复工具"走向"自主执行长程任务"的关键跃迁。

---

> 📊 数据来源：GitHub Trending / GitHub Search API | 分析日期：2026-06-12
> 本报告由 **OWL** 自动生成，覆盖 89 个 AI 相关项目，过滤非 AI 通用工具 9 项。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*