# AI 开源趋势日报 2026-06-28

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-28 00:38 UTC

---

# AI 开源趋势日报 | 2026-06-28

---

## 1. 今日速览

今日 GitHub AI 开源热榜呈现三大核心信号：**（1）AI Agent 生态全面爆发**——从 Agent 框架（Hermes Agent）、Agent 记忆层（Cognee、Claude Mem）、到 Agent 开发范式教程（learn-claude-code），围绕"让 Agent 更聪明、更持久、更可用"的基础设施正在快速成熟；**（2）coding Agent 从概念走向生产力工具**——Claude Code Setup、OpenCode、OpenCLI、Spec-driven Development 等项目集中登榜，标志着 AI 辅助编码正从独立工具演变为围绕编码 Agent 的生态系统；**（3）垂直 Agent 应用加速涌现**——量化交易（Vibe-Trading、AI Berkshire）、办公文档生成（PPT Master）、求职自动化（Career-Ops）等场景化 Agent 密集出现，AI Agent 正从"技术可行"走向"产品可用"。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 说明 |
|------|-------|------|
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐84,580 | 高性能 LLM 推理引擎，已成为本地/云端部署主流选择，持续主导 serving 层 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐174,999 | 本地模型运行的事实标准，新增 Kimi-K2.6、GLM-5.1 等模型支持，中国模型生态持续扩展 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐100,975 | 让 AI Agent 自动操作浏览器，Agent 关键基础设施，stars 突破 10 万里程碑式项目 |
| [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | 今日 +1,541 | Google Labs 发布的设计规范格式，让 coding agent 获得持久化、结构化的设计系统理解能力 |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | ⭐392（+今日） | 开源 coding agent CLI，轻量化本地运行的 Agent 终端 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | ⭐177（+今日） | 面向 AI 编码助手的规范驱动开发（SDD）框架，用结构化 spec 约束 Agent 行为 |
| [Garringtan/gstack](https://github.com/garrytan/gstack) | ⭐674（+今日） | 复刻 Garry Tan 的 Claude Code 全套配置，23 个工具覆盖 CEO/设计师/工程经理/QA 等多角色 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|------|-------|------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐204,359 | 开源 Agent 旗舰项目，20 万+ stars，定位为"与你共同成长的 Agent" |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐185,187 | 最早期 Agent 平台，持续迭代保持社区热度 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐45,644 | 开源超级 AI 助手框架，支持多模型、多通道、自进化记忆和知识库 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐44,797 | 轻量级开源 AI Agent，面向工具、聊天和日常工作流场景 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | ⭐92（+今日） | 个人量化交易 Agent，自动生成交易策略并执行 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | ⭐685（+今日） | 基于 Claude Code 的价值投资多 Agent 研究框架，巴菲特/芒格/段永平/李录方法论的 Agent 化实现 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐75,052 | 字节跳动开源的长时域 SuperAgent 框架，集成沙箱、记忆、工具、子 Agent，面向分钟到小时级复杂任务 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐35,572 | Agent 前端 UI 栈，推动 AG-UI 协议标准化 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 说明 |
|------|-------|------|
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐47,890 | AI 生产力工作室，集成智能聊天、自主 Agent 和 300+ 助手，统一接入主流 LLM |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐33,069（今日 +589） | 从任意文档生成可编辑的 PPT，原生支持形状/动画/语音旁白，实用型 AI 办公工具爆发中 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | ⭐28,958 | 本地免费的 AI 协作应用，统一接入 20+ CLI 编码助手 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | ⭐25,465 | 将任意网站转为 CLI，供 AI Agent 使用，消除 Web 到 Agent 的接口鸿沟 |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | ⭐750（+今日） | 一条命令用 AI coding agent 克隆任意网站 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐56,185 | 基于 Claude Code 的 AI 求职系统，14 种技能模式 + Go 仪表盘 + PDF 生成 |
| [ZhuLenssen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐50,536 | LLM 驱动的多市场股票智能分析系统，支持零成本定时运行 |
| [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) | ⭐255（+今日） | 开源 AI 视频生成替代方案，200+ 模型（Flux、Midjourney、Kling、Sora、Veo），自托管无内容过滤 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 说明 |
|------|-------|------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,974 | 模型定义框架标杆，覆盖文本/视觉/音频/多模态，持续主导模型工程生态 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐195,964 | 经典 ML 框架，19.5 万 stars 仍是 ML 基础设施核心 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐101,066 | 深度学习研究首选框架，10 万里程碑已达成 |
| [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) | ⭐66,488 | 经典 ML 库，仍是数据科学和传统 ML 任务的基石 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐58,886 | YOLO 系列目标检测，工业视觉部署的事实标准 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,126 | LLM 评测平台，支持 100+ 数据集和主流模型，模型评估基础设施持续完善 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|------|-------|------|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐146,773 | 生产级 Agentic 工作流开发平台，RAG + Agent 融合趋势的代表 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐143,244 | 用户友好的 AI 界面，支持 Ollama/OpenAI API 等，本地部署首选前端 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐140,347 | Agent 工程平台标杆，14 万 stars 持续引领 RAG+Agent 融合方向 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐83,743 | 领先的开源 RAG 引擎，深度融合 Agent 能力构建 LLM 上下文层 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐59,595 | AI Agent 通用记忆层，跨会话持久化记忆的事实标准 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐44,983 | 高性能云原生向量数据库，向量检索基础设施核心 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐24,001（今日 +780） | 开源 AI Agent 记忆平台，基于知识图谱引擎提供跨会话长期记忆，今日热度飙升 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐84,748 | 跨会话持久化上下文，AI 压缩后注入未来会话，兼容 Claude Code/Codex/Gemini 等 |

---

## 3. 趋势信号分析

今日热榜最突出的信号是 **AI Agent 生态的基础设施层正在经历爆发式增长**。具体表现为三个层面：

**第一，Agent 记忆层成为新战场。** Cognee（+780⭐/日）、Claude Mem（84,748⭐）、Mem0（59,595⭐）等项目集中发力，说明社区已意识到"Agent 的长期记忆"是制约 Agent 实用化的核心瓶颈。知识图谱、向量存储、上下文压缩三条技术路线并行竞争。

**第二，Coding Agent 生态从"单点工具"走向"系统级平台"。** 今日 Trending 中出现了 Google Labs 的 DESIGN.md 规范、OpenSpec 的 SDD 框架、Garry Tan 的 23 工具 Claude Code 配置、learn-claude-code 的从零构建教程——这标志着围绕 coding Agent 的"方法论 + 工具链 + 教育"三位一体生态正在形成。AI 辅助编码不再是"一个工具"，而是一套需要学习的工程实践。

**第三，垂直场景 Agent 加速产品化。** AI Berkshire（投资研究）、Vibe-Trading（量化交易）、Career-Ops（求职）、PPT Master（办公文档）等项目表明，Agent 正从技术 demo 转向可交付的产品体验。这与近期 Claude Code 等 Agent 能力升级直接相关——更强的 Agent 基座催生了上层应用层的爆发。

---

## 4. 社区关注热点

- **Agent 记忆基础设施**：Cognee、Claude Mem、Mem0 三足鼎立，"Agent 如何跨会话保持记忆"正成为 2026 下半年最热门的技术方向。关注 [topoteretes/cognee](https://github.com/topoteretes/cognee) 的知识图谱路线与 [mem0ai/mem0](https://github.com/mem0ai/mem0) 的向量路线之间的技术竞争。

- **Coding Agent 生态标准化**：Google Labs 发布 [design.md](https://github.com/google-labs-code/design.md) 规范（今日 +1,541⭐），Fission-AI 推出 [OpenSpec](https://github.com/Fission-AI/OpenSpec) 的 SDD 框架——行业巨头和创业公司同时在推动 Agent 开发的"工程化"和"规范化"，值得持续跟踪。

- **多 Agent 协作框架**：字节的 [deer-flow](https://github.com/bytedance/deer-flow) 和 NousResearch 的 [hermes-agent](https://github.com/NousResearch/hermes-agent) 代表了"多 Agent 协作"这一前沿方向，子 Agent 分工、消息传递、长时域任务调度是核心看点。

- **本地 AI 部署持续火热**：Ollama（174,999⭐）持续增加中国模型支持（Kimi-K2.6、GLM-5.1），结合 Open-WebUI 和 RAGFlow，本地全栈 AI 部署方案已高度成熟，企业和个人隐私优先场景的采用正在加速。

- **AI 生成内容工具实用化**：[Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) 集成 200+ 模型（含 Sora、Veo），[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) 生成可编辑 PPT——AI 生成正从"新奇体验"转向"生产力工具"，输出质量和可用性成为竞争关键。

---

*数据来源：GitHub Trending (2026-06-28) + GitHub Topic Search API | 分析时间：2026-06-28*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*