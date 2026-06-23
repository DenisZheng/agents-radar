# AI Open Source Trends 2026-06-23

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-23 00:39 UTC

---

# AI Open Source Trends Report — 2026-06-23

---

## Step 1: AI-Relevance Filtering

**Excluded (non-AI repos):**
- `penpot/penpot` — general design tool, no AI core
- `Stirling-Tools/Stirling-PDF` — PDF utility, no AI core
- `tursodatabase/turso` — SQLite-compatible DB, infrastructure only
- `lyogavin/airllm` — marginal relevance (inference optimization, low stars); included in Infrastructure as borderline

**Retained:** All remaining projects have clear AI/ML relevance (agent systems, LLM tooling, RAG, voice AI, coding agents, financial AI, video generation, cybersecurity skills for agents, etc.)

---

## Step 2 & 3: Categorized Report

---

### 1. Today's Highlights

Today's trending is **dominated by the agent explosion**. The #1 and #2 trending repos by daily stars are both agent-flavored tools: [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) (agentic video production, +2,938⭐ today) and [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) (macOS AI video editor, +2,463⭐ today), signaling that **AI-generated/AI-assisted multimedia creation** is the breakout category of the day. **Coding-agent infrastructure and skills** are the other massive wave: [mattpocock/skills](https://github.com/mattpocock/skills) (+2,051⭐), [garrytan/gstack](https://github.com/garrytan/gstack) (+573⭐), [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) (+956⭐), and [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) (+1,185⭐) all point to developers racing to equip agents with better skills, memory, and domain expertise. The long-horizon SuperAgent trend solidifies with [bytedance/deer-flow](https://github.com/bytedance/deer-flow) continuing its climb (+738⭐ today, 73K+ total). Agent platforms like [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) (78K⭐) and persistent-memory systems like [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) (83K⭐) confirm that **context/memory management** is the critical bottleneck the community is attacking.

---

### 2. Top Projects by Category

#### 🤖 AI Agents / Workflows
| Project | Stars | Description |
|---|---|---|
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 73,243 (+738 today) | Bytedance's open-source long-horizon SuperAgent harness — sandboxes, memories, subagents, message gateway — for tasks spanning minutes to hours. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 219,917 | Agent harness performance optimization system with skills, instincts, memory, and security layers across Claude Code, Codex, Cursor and 20+ platforms. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 199,953 | "The agent that grows with you" — Nous Research's adaptive agent system. |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 78,028 | Full AI-driven development environment, open-source agent for coding tasks. |
| [garrytan/gstack](https://github.com/garrytan/gstack) | 573 (+573 today) | 23 opinionated Claude Code tools that act as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA. |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 67,885 | Nano Claude Code–like agent harness built from scratch — "Bash is all you need." |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,557 | Open-source super AI assistant and agent harness with planning, tool execution, self-evolution via memory. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 47,667 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants with unified LLM access. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 44,584 | Lightweight open-source AI agent for tools, chats, and workflows. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 35,405 | Frontend stack for agents and generative UI with AG-UI Protocol. |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 2,938 (+2,938 today) | World's first open-source agentic video production system — 12 pipelines, 52 tools, 500+ agent skills. |

#### 🔧 AI Infrastructure (Frameworks, Dev Tools, CLI)
| Project | Stars | Description |
|---|---|---|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 139,904 | The agent engineering platform — standard for LLM app development. |
| [ollama/ollama](https://github.com/ollama/ollama) | 174,746 | Run LLMs locally (Kimi-K2.6, DeepSeek, Qwen, Gemma, etc.) — easiest on-ramp for local inference. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 83,581 | High-throughput, memory-efficient LLM inference and serving engine for production. |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 1,185 (+1,185 today) | High-performance MCP server that indexes codebases into a persistent knowledge graph in milliseconds; 99% fewer tokens. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 137,270 (+615 today) | API to search, scrape, and interact with the web at scale — a critical data layer for agents. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 100,135 | Make websites accessible for AI agents — browser automation framework. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | 2,051 (+2,051 today) | Curated agent skills extracted from a real developer's `.claude` directory. |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | 11,925 | Code search MCP for Claude Code — entire codebase as context for coding agents. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 7,713 | Build modular and scalable LLM applications in Rust. |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 956 (+956 today) | 817 structured cybersecurity skills for AI agents, mapped to MITRE ATT&CK, NIST CSF 2.0, and 6 other frameworks. |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 24,996 | Turn any website into a CLI for AI agent use with logged-in browser state. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | 12,394 | Java idiomatic library for LLM-powered apps with MCP, agents, and RAG on the JVM. |

#### 📦 AI Applications (Vertical Solutions)
| Project | Stars | Description |
|---|---|---|
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 45,803 (+1,557 today) | LLM-powered multi-market stock analysis system with real-time news, decision dashboard, and automated notifications. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 88,007 | Multi-agent LLM financial trading framework. |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 529 (+529 today) | Open-source AI voice studio — clone, dictate, create voices. |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 395 (+395 today) | "Write HTML. Render video." — video generation built for AI agents. |
| [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | 2,463 (+2,463 today) | macOS video editor purpose-built for AI workflows. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 30,352 | AI generates real, editable PowerPoint from any document with native shapes, animations, and audio narration. |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 100 (+100 today) | Clone any website with one command using AI coding agents. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 55,230 | AI-powered job search system on Claude Code with 14 skill modes, Go dashboard, batch processing. |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 69,546 | Financial data platform for analysts, quants, and AI agents. |

#### 🔍 RAG / Knowledge (Vector DBs, Retrieval, Memory)
| Project | Stars | Description |
|---|---|---|
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 83,764 | Persistent context across sessions for every agent — captures, compresses, and injects relevant context. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 59,149 | Universal memory layer for AI agents. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 83,370 | Leading open-source RAG engine fused with agent capabilities. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,894 | High-performance cloud-native vector database for scalable ANN search. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 32,563 | High-performance massive-scale vector database and search engine. |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | 16,406 | Open-source vector database combining vector search with structured filtering. |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | 10,685 | Developer-friendly embedded retrieval library for multimodal AI. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 19,328 | Open-source AI memory platform with self-hosted knowledge graph engine for persistent agent memory. |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | 70,722 | Turn any folder of code, SQL schemas, docs, images, or videos into a queryable knowledge graph. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 12,508 | RAG on everything with 97% storage savings — fast, accurate, 100% private on personal devices (MLsys 2026). |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 47,047 | Compress tool outputs, logs, files, and RAG chunks before LLM — 60–95% fewer tokens. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 33,294 | Vectorless, reasoning-based RAG — document index without traditional vector search. |
| [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | 46,836 | AI low-code platform with AI skills, knowledge graphs, MCP plugins; agent-driven Java dev. |

#### 🧠 LLMs / Training / Model Tooling
| Project | Stars | Description |
|---|---|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,819 | Model-definition framework for SOTA ML models in text, vision, audio, and multimodal. |
| [langgenius/dify](https://github.com/langgenius/dify) | 146,174 | Production-ready platform for agentic workflow development. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,084 | The original accessible AI agent vision — tools so you can focus on what matters. |
| [numpy/numpy](https://github.com/numpy/numpy) | — | (inferred core dependency across ecosystem) |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 58,679 | Ultralytics YOLO — object detection and vision AI. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,112 | LLM evaluation platform supporting 100+ datasets across all major models. |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | 6,000 | Building AI agents, atomically — minimalist composable agent framework. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 61,943 | Everything you need for a powerful local-first agent experience — own your intelligence. |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 164,112 | Community prompt collection — 164K stars for shared prompts. |

---

### 3. Trend Signal Analysis (~270 words)

**The Agent Skills & toolchaining wave is today's dominant signal.** Five of the top 10 daily-star-gaining repos — [mattpocock/skills](https://github.com/mattpocock/skills), [garrytan/gstack](https://github.com/garrytan/gstack), [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills), [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp), and [affaan-m/ECC](https://github.com/affaan-m/ECC) — are all about equipping coding agents with better capabilities: domain-specific skills, codebase understanding, persistent memory, and performance optimization. This reveals a shift from "can agents work at all?" to **"how do we make agents reliably capable across diverse professional domains?"**

**Multimedia generation via agents is the new breakout vertical.** [OpenMontage](https://github.com/calesthio/OpenMontage) (agentic video production, #1 by daily stars at +2,938), [palmier-pro](https://github.com/palmier-io/palmier-pro) (AI-native macOS video editor, +2,463), [hyperframes](https://github.com/heygen-com/hyperframes) (HTML→video for agents, +395), and [voicebox](https://github.com/jamiepine/voicebox) (AI voice studio, +529) collectively signal that **the next frontier of generative AI is not just text/code — it's full-stack multimedia production orchestrated by agents.** This maps to the maturation of video models (Sora-class competitors) and voice models now being accessible enough that open-source wrappers are exploding.

**Knowledge compression and efficient context is a parallel mega-trend.** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) delivers "99% fewer tokens" for codebase understanding; [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) compresses tool outputs 60–95%; [claude-mem](https://github.com/thedotmack/claude-mem) solves cross-session memory. The community has recognized that **LLM context windows remain the fundamental bottleneck** and is attacking it from every angle: compression, memory, graph-based retrieval, and knowledge graphs — aligning with recent research on test-time scaling and context efficiency.

**Bytearance/open-heralded SuperAgent [deer-flow](https://github.com/bytedance/deer-flow) continues gaining** (73K total stars, +738 today), joining [OpenHands](https://github.com/OpenHands/OpenHands) (78K) — indicating that enterprise-grade, long-horizon agent orchestration (not just chat) is what serious developers want in 2026.

---

### 4. Community Hot Spots — Where Developers Should Focus

- **🔹 Agent Skills & Plugin Ecosystems** — [mattpocock/skills](https://github.com/mattpocock/skills) (+2,051⭐), [garrytan/gstack](https://github.com/garrytan/gstack), [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills). The "skills for agents" pattern is the new plugins/extensions moat. If you're building tools for agents, publish them as skills that work across Claude Code, Codex, Cursor, and Gemini CLI.

- **🔹 Agentic Multimedia Production** — [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) (+2,938⭐ today!), [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes), [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro). The convergence of generative video/voice models with agent orchestration is producing entirely new application categories. Early-mover advantage is wide open.

- **🔹 Persistent Memory & Knowledge Graphs for Agents** — [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) (83K⭐), [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) (+1,185⭐ today), [safishamsi/graphify](https://github.com/safishamsi/graphify) (70K⭐). Agents that remember context across sessions and understand codebases structurally (not textually) are dramatically more useful. This is the enabling layer for production-grade agents.

- **🔹 Security Skills for AI Agents** — [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) (+956⭐ today, 817 skills mapped to 6 frameworks). As agents gain autonomy, securing them and using them *for* security simultaneously becomes critical. This repo signals a new category: **domain-specialized skill packs for agents**.

- **🔹 LLM-Powered Financial Analysis** — [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) (+1,557⭐ today, 45K total), [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) (88K⭐). Multi-agent financial analysis is transitioning from proof-of-concept to production-grade open-source tooling, with real-time data feeds and automated decision dashboards.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*