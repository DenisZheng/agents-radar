# AI Open Source Trends 2026-06-12

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-12 00:44 UTC

---



# AI Open Source Trends Report — 2026-06-12

---

## Step 1: Filtered AI-Relevant Projects

From the raw data, I excluded clearly non-AI projects: `apple/container` (container tooling), `soxoj/maigret` (OSINT), `restic/restic` (backup), `masterking32/MasterDnsVPN` (VPN), `chatwoot/chatwoot` (customer support), `mattermost/mattermost` (collaboration), `bannedbook/fanqiang` (censorship bypass), `TapXWorld/ChinaTextbook` (textbook archive), `refactoringhq/tolaria` (markdown KB manager), `alchaincyf/zhangxuefeng-skill` (niche skill plugin), and `thedaviddias/Front-End-Checklist` (frontend checklist).

All remaining projects have clear AI/ML relevance and are included below.

---

## Step 2 & 3: Report

---

### 1. Today's Highlights

Today's GitHub trending landscape is **dominated by the AI agent skills ecosystem** — a clear signal that the community's focus has shifted from building models to *equipping agents with reusable capabilities*. Five of the top 10 trending repos are skill/plugin marketplaces or frameworks for AI coding agents, with `addyosmani/agent-skills` (+3,278⭐ today) and `phuryn/pm-skills` (+1,978⭐ today) leading the charge. NVIDIA's entry into this space with `SkillSpector` — a security scanner for agent skills — signals that the ecosystem is maturing fast enough to require dedicated security tooling. Meanwhile, `hexo-ai/sia` introduces a self-improving AI framework, and `kenn-io/agentsview` provides analytics for coding agents, both reflecting a growing need for observability and autonomous optimization in agent workflows. The sheer volume of agent-centric tooling suggests we've entered the **"agent application layer"** phase of the AI stack.

---

### 2. Top Projects by Category

#### 🔧 AI Infrastructure (Frameworks, SDKs, Inference Engines, Dev Tools)

| Project | Stars | Description |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐173,899 | The go-to tool for running LLMs locally — now supporting Kimi-K2.6, GLM-5.1, DeepSeek, Qwen, Gemma and more. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,513 | The definitive model-definition framework for state-of-the-art ML across text, vision, audio, and multimodal. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐82,590 | High-throughput, memory-efficient LLM inference and serving engine powering production deployments. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐139,064 | The agent engineering platform — the most widely adopted framework for building LLM-powered applications. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐98,338 | Makes websites accessible for AI agents, enabling automated web task execution at scale. |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | ⭐0 (+319 today) | **NEW**: Security scanner for AI agent skills — detects vulnerabilities, malicious patterns, and risks in skill plugins. |
| [kenn-io/agentsview](https://github.com/kenn-io/agentsview) | ⭐0 (+114 today) | Local-first session intelligence and analytics for coding agents (Claude Code, Codex, 20+ others); 100x faster ccusage replacement. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐7,590 | Build modular, scalable LLM applications in Rust — gaining traction for performance-critical agent backends. |

#### 🤖 AI Agents / Workflows (Agent Frameworks, Automation, Multi-Agent Systems)

| Project | Stars | Description |
|---|---|---|
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ⭐0 (+3,278 today) | **HOT**: Production-grade engineering skills for AI coding agents — the single most-starred new repo today. |
| [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | ⭐0 (+1,978 today) | PM Skills Marketplace with 100+ agentic skills, commands, and plugins covering discovery through growth. |
| [obra/superpowers](https://github.com/obra/superpowers) | ⭐0 (+1,322 today) | An agentic skills framework and software development methodology that actually works in practice. |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | ⭐0 (+1,599 today) | A complete AI agency in a repo — specialized agents for frontend, community management, QA, and more. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐213,523 | Agent harness performance optimization system with skills, instincts, memory, and security for Claude Code, Codex, Cursor, etc. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐191,001 | "The agent that grows with you" — Nous Research's adaptive agent framework. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐184,889 | The pioneering accessible AI agent platform, still one of the most-starred AI repos on GitHub. |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐70,992 | ByteDance's open-source long-horizon SuperAgent harness with sandboxes, memories, tools, and subagents. |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐76,492 | AI-driven development platform for autonomous coding agents. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐45,232 | Open-source super AI assistant & agent harness with self-evolution, memory, and multi-model support. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐47,221 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐34,728 | The frontend stack for agents & generative UI — makers of the AG-UI Protocol. |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | ⭐28,075 | Free, local, open-source 24/7 cowork app supporting 20+ CLI agents. |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | ⭐27,001 | Google Workspace CLI with built-in AI agent skills for Drive, Gmail, Calendar, Sheets, Docs. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐26,366 | Gives AI agents eyes on the entire internet — read Twitter, Reddit, YouTube, GitHub, Bilibili, zero API fees. |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐66,107 | "Bash is all you need" — a nano Claude Code-like agent harness built from scratch. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐52,812 | AI-powered job search system on Claude Code with 14 skill modes and batch processing. |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | ⭐28,096 | Agent that "runs anywhere, uses anything" — maximally portable Claude harness. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐44,071 | Lightweight, open-source AI agent for tools, chats, and workflows. |

#### 📦 AI Applications (Specific Apps, Vertical Solutions)

| Project | Stars | Description |
|---|---|---|
| [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) | ⭐0 (+426 today) | **NEW**: Open-source healthcare AI — a vertical AI application gaining rapid traction. |
| [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | ⭐0 (+368 today) | Comprehensive collection of system prompts and internal models from 30+ AI tools (Cursor, Claude Code, Devin, etc.). |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐26,645 | AI generates real, editable PowerPoint from any document with native shapes, animations, and audio narration. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐42,189 | LLM-driven A/H/US stock analysis with real-time data, news, and decision dashboards. |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐144,884 | Production-ready platform for agentic workflow development — one of the most popular AI app platforms. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐141,122 | User-friendly AI interface supporting Ollama, OpenAI API, and more. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐61,456 | Local-first agent experience — "stop renting your intelligence, own it." |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | ⭐53,490 | Build AI agents visually — no-code/low-code agent builder. |
| [mindsdb/minds](https://github.com/mindsdb/minds) | ⭐39,290 | General-purpose AI for knowledge workers with full deployment flexibility. |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | ⭐44,396 | Privacy-first, self-hosted personal knowledge management with AI integration. |

#### 🧠 LLMs / Training (Model Weights, Training Frameworks, Fine-Tuning)

| Project | Stars | Description |
|---|---|---|
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐72,089 | Unified efficient fine-tuning for 100+ LLMs & VLMs — the standard fine-tuning toolkit. |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐195,606 | The foundational open-source ML framework, still the most-starred ML project on GitHub. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐100,659 | Dynamic neural networks with GPU acceleration — the backbone of modern LLM training. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐58,297 | Ultralytics YOLO — the most popular object detection framework, now expanding into segmentation and pose. |
| [hexo-ai/sia](https://github.com/hexo-ai/sia) | ⭐0 (+199 today) | **NEW**: Self-Improving AI framework that autonomously improves any AI system's performance on benchmark tasks. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,080 | LLM evaluation platform supporting 100+ datasets across Llama, Mistral, Qwen, Claude, etc. |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | ⭐5,974 | Building AI agents atomically — composable, minimal agent primitives. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,270 | Learn LLM inference serving on Apple Silicon — build a tiny vLLM + Qwen from scratch. |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | ⭐312 | On-device LLM inference powered by X-bit quantization for edge deployment. |

#### 🔍 RAG / Knowledge (Vector Databases, Retrieval, Knowledge Management)

| Project | Stars | Description |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐82,482 | Leading open-source RAG engine fusing cutting-edge retrieval with agent capabilities. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐81,837 | Persistent context across sessions for every agent — captures, compresses, and reinjects relevant context. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐58,362 | Universal memory layer for AI agents — one of the most adopted agent memory solutions. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐50,084 | Leading document agent and OCR platform for building RAG pipelines. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐44,730 | High-performance, cloud-native vector database for scalable ANN search. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐32,041 | High-performance vector database and search engine for next-gen AI. |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | ⭐27,872 | Showcases advanced RAG techniques with detailed notebook tutorials — the definitive RAG learning resource. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐17,791 | Open-source AI memory platform with self-hosted knowledge graph engine for persistent agent memory. |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | ⭐16,313 | Vector database combining vector search with structured filtering and cloud-native scalability. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐11,908 | [MLsys2026] RAG on everything with 97% storage savings — fast, accurate, 100% private on-device RAG. |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | ⭐11,820 | Code search MCP for Claude Code — makes entire codebase the context for any coding agent. |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | ⭐65,680 | Turn any folder of code, SQL, docs, or media into a queryable knowledge graph for AI coding assistants. |
| [neuml/txtai](https://github.com/neuml/txtai) | ⭐12,650 | All-in-one AI framework for semantic search, LLM orchestration, and language model workflows. |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | ⭐10,580 | Developer-friendly OSS embedded retrieval library for multimodal AI. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐12,292 | Idiomatic Java library for building LLM-powered apps with MCP support, RAG, and agent tooling. |
| [pathwaycom/llm-app](https://github.com/pathwaycom/llm-app) | ⭐59,352 | Ready-to-run cloud templates for RAG, AI pipelines, and enterprise search with live data. |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐81,868 | Powerful OCR toolkit bridging images/PDFs and LLMs — supports 100+ languages. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐131,562 | The API to search, scrape, and interact with the web at scale — critical data source for RAG pipelines. |

---

### 3. Trend Signal Analysis

**The AI agent skills ecosystem is today's explosive growth vector.** Five of the top trending repos by daily stars are directly related to agent skills, plugins, or agent frameworks — `addyosmani/agent-skills` (+3,278), `phuryn/pm-skills` (+1,978), `msitarzewski/agency-agents` (+1,599), `obra/superpowers` (+1,322), and `NVIDIA/SkillSpector` (+319). This is not a coincidence; it reflects a structural shift in the AI open-source community. The foundational model layer (training, fine-tuning) and the infrastructure layer (inference, vector DBs) have matured significantly, and developer attention is now concentrating on the **agent application layer** — the reusable skills, tools, and workflows that make AI agents actually useful in production.

NVIDIA's `SkillSpector` is particularly telling. The fact that a major GPU/infrastructure company is releasing a security scanner for agent skills signals that the skills ecosystem has reached a scale and complexity that introduces real supply-chain risk. This mirrors the trajectory of npm and browser extensions — once a plugin ecosystem reaches critical mass, security becomes a first-order concern.

Another notable signal is the emergence of **agent observability and analytics** (`kenn-io/agentsview`) and **self-improving AI** (`hexo-ai/sia`). These projects address the next-order problems that arise once agents are deployed: How do you measure agent performance? How do you make agents autonomously improve? These are questions that didn't exist at scale six months ago.

The continued dominance of RAG-related projects (17 of 79 topic search results) confirms that retrieval-augmented generation remains the primary pattern for grounding LLMs in private, domain-specific data. However, the newer entrants like `LEANN` (97% storage savings) and `claude-context` (MCP-based code search) show the field is evolving toward more efficient, more tightly integrated retrieval mechanisms.

Finally, the presence of `googleworkspace/cli` with built-in AI agent skills suggests that major platform vendors are beginning to treat agent skills as a first-class integration surface — a trend that will likely accelerate as Google, Microsoft, and others compete for agent ecosystem mindshare.

---

### 4. Community Hot Spots

- **🔌 Agent Skills Marketplaces** — `addyosmani/agent-skills`, `phuryn/pm-skills`, and `obra/superpowers` collectively represent the hottest trend on GitHub today. Developers should pay attention: reusable, composable skills are becoming the standard unit of agent capability, analogous to npm packages for JavaScript. Building or curating high-quality skills is a high-leverage activity.

- **🛡️ Agent Security** — `NVIDIA/SkillSpector` is the first major open-source tool for scanning agent skills for vulnerabilities and malicious patterns. As the skills ecosystem grows, security auditing will become mandatory. Early movers in agent security tooling will capture significant value.

- **🧠 Agent Memory & Context Persistence** — `mem0ai/mem0`, `thedotmack/claude-mem`, `topoteretes/cognee`, and `StarTrail-org/LEANN` all address the fundamental challenge of giving agents persistent, efficient memory. This is widely considered one of the key unsolved problems in making agents reliable for long-horizon tasks.

- **📊 Agent Observability** — `kenn-io/agentsview` provides session intelligence and analytics for coding agents. As agents move from demos to production, the ability to measure, debug, and optimize agent behavior becomes critical. This category is nascent but essential.

- **🏥 Vertical AI Applications** — `maziyarpanahi/openmed` (healthcare AI) and `ZhuLinsen/daily_stock_analysis` (stock analysis) show that domain-specific AI applications continue to attract strong community interest. The combination of general-purpose LLMs with domain expertise and data is proving to be a winning formula for open-source AI projects.

---

*Report generated by OWL — ZOO Company | Data: GitHub Trending & Topic Search API | 2026-06-12*

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*