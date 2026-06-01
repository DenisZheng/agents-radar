# AI Open Source Trends 2026-06-01

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-01 02:21 UTC

---



# AI Open Source Trends Report — 2026-06-01

---

## Step 1: Filtered AI-Relevant Projects

**Excluded from Today's Trending (non-AI):**
- `github/docs`, `emmabostian/developer-portfolios`, `codecrafters-io/build-your-own-x`

**Excluded from Topic Search (not AI-core):**
- `thedaviddias/Front-End-Checklist`, `tensorflow/tensorflow`, `pytorch/pytorch`, `microsoft/ML-For-Beginners`, `netdata/netdata`, `tesseract-ocr/tesseract`, `scikit-learn/scikit-learn`, `keras-team/keras`, `deepfakes/faceswap`, `JuliaLang/julia`, `apache/airflow`, `streamlit/streamlit`, `samchon/nestia`, `ollama/ollama` (noted but covered under infra), `meilisearch/meilisearch`, `oceanbase/oceanbase`

**Retained: 60+ projects across both sources** — analyzed below.

---

## 1. Today's Highlights

Today's GitHub trending reveals a dramatic surge in **agentic AI tooling**. The single most-starred project `anthropics/claude-code` (+489 today) underscores that terminal-native AI coding agents have crossed into mainstream open-source adoption. Video generation continues its momentum with `harry0703/MoneyPrinterTurbo` leading today at +1,937 stars — a stark signal that AI-powered content creation is accelerating among indie makers and small teams. On the infrastructure side, `microsoft/markitdown` (+2,798) hitting top spot suggests the ecosystem is rushing to build better data-ingestion pipelines to feed RAG and agent systems. Meanwhile, `NousResearch/hermes-agent` (174K+ stars, topic:ai-agent) and `thedotmack/claude-mem` (80K stars, topic:rag) reveal that **cross-session memory and persistent context** for AI agents is becoming a dominant architectural pattern, as developers no longer accept stateless AI interactions. Finally, the quiet emergence of `OpenBMB/VoxCPM` tokenizer-free TTS and `pi-subagents` async delegation signals that multimodal and agent-parallelism capabilities are the new frontiers.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure (Frameworks, SDKs, Inference, Dev Tools, CLI)

| Project | Stars | Description |
|---------|-------|-------------|
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | ⭐0 (+2,798 today) | Python tool converting files and office documents to Markdown — critical data-ingestion infrastructure for RAG and AI agent pipelines, and today's single most-starred repo. |
| [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | ⭐0 (+606 today) | Adaptive web scraping framework for AI-era data collection, handling everything from single requests to full-scale crawls. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐96,442 | Making websites accessible for AI agents — browser automation infrastructure for agentic workflows. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐81,510 | High-throughput, memory-efficient LLM inference and serving engine — the de facto standard for production LLM deployment. |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐172,758 | Run LLMs locally (Kimi, DeepSeek, Qwen, Gemma, etc.) — key infrastructure democratizing local model access. |
| [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | ⭐0 (+251 today) | Official Compound Engineering plugin for Claude Code, Codex, Cursor — extends agentic IDE tools into a coordinated engineering workflow. |
| [pi-subagents](https://github.com/nicobailon/pi-subagents) | ⭐0 (+69 today) | Pi extension for async subagent delegation with truncation, artifacts, and session sharing — infrastructure for parallel agent execution. |
| [revfactory/harness](https://github.com/revfactory/harness) | ⭐0 (+323 today) | Meta-skill that designs domain-specific agent teams, defines specialized agents, and generates the skills they use — an "agent factory" framework. |

### 🤖 AI Agents / Workflows

| Project | Stars | Description |
|---------|-------|-------------|
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | ⭐0 (+489 today) | Agentic coding tool living in the terminal — understands your codebase and executes routine tasks, explains code, and handles git via natural language. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐174,792 | The agent that grows with you — one of the largest open-source AI agent projects, focused on adaptive, user-aligned agents. |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐143,315 | Production-ready platform for agentic workflow development with visual orchestration and multi-model support. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐79,911 | Persistent context across sessions for every agent — captures, compresses, and re-injects relevant context into future sessions; supports 10+ agent platforms. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐44,994 | Open-source super AI assistant & agent harness with task planning, tool execution, memory, and autonomous growth. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐46,669 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants with unified frontier LLM access. |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐63,885 | Nano Claude Code–like agent harness built from scratch — educational gateway into understanding agent inner workings. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐200,711 | Agent harness performance optimization system — skills, instincts, memory, security, and research-first development across Claude Code, Codex, Cursor, OpenCode. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐31,875 | Frontend stack for agents & generative UI — makers of the AG-UI Protocol for embedding AI agents into React/Angular apps. |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | ⭐22,496 | AI agents, MCPs, and workflow automation with ~400 MCP server integrations. |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐63,885 | Nano Claude Code-like agent harness — from-scratch educational build teaching how AI agents work at the code level. |

### 📦 AI Applications (Vertical Solutions & Specific Apps)

| Project | Stars | Description |
|---------|-------|-------------|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐0 (+1,937 today) | AI-powered one-click short video generation — today's second most-starred repo, reflecting massive demand for automated content creation. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐139,414 | User-friendly AI interface supporting Ollama, OpenAI API, and 20+ backends — the go-to self-hosted chat UI. |
| [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | ⭐0 (+264 today) | Fast, scalable memory engine and app — the "Memory API for the AI era," giving any application persistent recall. |
| [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | ⭐0 (+374 today) | Offline survival computer packed with tools, knowledge, and AI — edge AI applied to disaster preparedness. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐60,853 | All-in-one AI productivity accelerator — privacy-first, on-device RAG and agent workspace. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐22,966 | AI that generates real, editable PowerPoints from any document with native shapes, animations, and audio narration. |
| [nocobase/nocobase](https://github.com/nocobase/nocobase) | ⭐22,598 | Open-source AI + no-code platform — AI works on top of production-proven infrastructure for rapid business system building. |
| [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | ⭐0 (+635 today) | Tokenizer-free TTS for multilingual speech generation, creative voice design, and true-to-life voice cloning. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐81,292 | Multi-agent LLM financial trading framework — autonomous agents collaborating on market analysis and trading decisions. |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | ⭐0 (+357 today) | Web/mobile UI for Hermes Agent — lowering the barrier to agent access beyond the terminal. |
| [Project N.O.M.A.D](https://github.com/Crosstalk-Solutions/project-nomad) | ⭐0 (+374 today) | Self-contained offline survival computer with embedded AI — edge intelligence for disconnected environments. |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | ⭐68,351 | Financial data platform for analysts, quants, and AI agents — bridging finance data and agent-driven analysis. |

### 🧠 LLMs / Training (Models, Fine-Tuning, Pre-Training, Inference)

| Project | Stars | Description |
|---------|-------|-------------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,129 | The model-definition framework for SOTA ML across text, vision, audio, and multimodal — the foundation of modern open ML. |
| [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) | ⭐0 (+626 today) | Straightforward method for training your own LLM from data download to text generation — democratizing LLM training for hobbyists. |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐71,741 | Unified efficient fine-tuning of 100+ LLMs & VLMs — the standard toolkit for LLM adaptation. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐50,902 | Train a 64M-parameter LLM from scratch in just 2 hours — minimalist educational framework for understanding transformer training. |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐75,506 | AI-driven full development platform — autonomous AI agents performing end-to-end software engineering tasks. |
| [f/prompts.chat](https://github.com/f/prompts.chat) | ⭐163,125 | The community hub for sharing, discovering, and collecting LLM prompts — formerly Awesome ChatGPT Prompts. |
| [The-Pocket/PocketFlow-Tutorial-Codebase-Knowledge](https://github.com/The-Pocket/PocketFlow-Tutorial-Codebase-Knowledge) | ⭐12,358 | Transforms any codebase into a step-by-step generative tutorial using LLMs — LLM-assisted developer education automation. |
| [BrainBlend-AI/atomic-agents](https://github.com/BrainBlend-AI/atomic-agents) | ⭐5,951 | Building AI agents atomically — composable primitive-based agent construction for clean, modular design. |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | ⭐501 | Universal LLM gateway — one API endpoint for every LLM provider with intelligent load-balancing and OpenAI/Anthropic-compatible translation. |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | ⭐239 | Reliable, minimal library for pretraining foundation and world models — next-generation pretraining infrastructure. |

### 🔍 RAG / Knowledge (Vector DBs, Retrieval, Knowledge Management)

| Project | Stars | Description |
|---------|-------|-------------|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐138,140 | The agent engineering platform — the most widely-used orchestration framework for LLM-powered applications and RAG pipelines. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐81,606 | Leading open-source RAG engine fusing cutting-edge RAG with agent capabilities for a superior LLM context layer. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐57,222 | Universal memory layer for AI agents — intelligent memory that learns from and adapts to user interactions. |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | ⭐57,399 | AI coding assistant skill that turns codebases, schemas, and docs into queryable knowledge graphs — RAG through graph relationships. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐44,561 | High-performance cloud-native vector database for scalable ANN search — backbone infrastructure for production RAG systems. |
| [MindsDB/minds-platform](https://github.com/mindsdb/minds-platform) | ⭐39,228 | Applied AI platform with built-in data + AI fusion — database-native AI enabling natural language queries over structured data. |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | ⭐36,011 | Simple and fast RAG (EMNLP 2025) — lightweight alternative to heavyweight vector-RAG pipelines. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐32,375 | Document index for vectorless, reasoning-based RAG — eliminates vector databases entirely with a novel retrieval approach. |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | ⭐27,647 | Repository of advanced RAG techniques with detailed notebook tutorials — the most comprehensive RAG technique collection. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐17,609 | Memory control plane for AI agents in 6 lines of code — plug-in knowledge management for agent systems. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐11,844 | RAG on everything — 97% storage savings with fast, accurate, 100% private RAG on personal devices (MLsys 2026). |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐126,914 | API to search, scrape, and interact with the web at scale — the data acquisition layer feeding RAG systems. |
| [memvid/memvid](https://github.com/memvid/memvid) | ⭐15,598 | Serverless, single-file memory layer replacing complex RAG pipelines — instant retrieval and long-term agent memory. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐12,156 | Java-native LangChain — JVM-compatible RAG, tool calling, MCP, and agent construction for enterprise Java. |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐79,154 | Powerful lightweight OCR bridging images/PDFs and LLMs — essential preprocessing layer for document-RAG pipelines. |

---

## 3. Trend Signal Analysis (~250 words)

**Three dominant signals emerge from today's data.**

**① The "Agent Harness" meta-layer is exploding.** The convergence of `anthropics/claude-code` (489 stars/day), `ECC` (200K+ total stars), `compound-engineering-plugin`, `revfactory/harness`, and `pi-subagents` reveals that developers are building *layers on top of agents*. The raw LLM is no longer the product — the harness (memory, skills, delegation, session management) is. This mirrors the shift in web development from raw servers to frameworks: we're now in the "Rails moment" for AI agents. Projects like `claude-mem` and `supermemory` solving persistent context confirm that **memory is the single biggest agent bottleneck** and the community is attacking it from every angle.

**② Inference + RAG infrastructure is maturing into a commodity layer.** `vllm`, `ollama`, `milvus`, `ragflow`, and `langchain` have all crossed critical mass (80K-170K stars). They're no longer experimental — they're plumbing. The new innovation frontier has shifted upward to *application-level* intelligence: knowledge graphs (`graphify`), reasoning-based retrieval without vectors (`PageIndex`), and device-local RAG (`LEANN`).

**③ Multimodal AI apps are the new growth frontier.** `MoneyPrinterTurbo` (video), `VoxCPM` (voice), `ppt-master` (presentations) — all trending today — show that the community is racing to build end-user products on top of frontier models rather than competing at the model layer. Meanwhile, `OpenBB-finance` and `TradingAgents` demonstrate that AI agents in **vertical domains** (finance, content creation, education) are where open-source adoption is accelerating fastest.

The broader context: as frontier APIs improve in reasoning and tool-use, open-source energy is flowing into the *orchestration and wrapping layers* — the picks-and-shovels ecosystem around ever-capable base models.

---

## 4. Community Hot Spots — Where Developers Should Focus

- **[`ECC`](https://github.com/affaan-m/ECC)** — 200K+ star agent harness optimization system. At this scale and momentum, it's becoming the de facto standard for extending Claude Code/Codex with skills, instincts, and memory. If you build with agents, understanding this project is essential.

- **[`PageIndex`](https://github.com/VectifyAI/PageIndex) & [`LEANN`](https://github.com/StarTrail-org/LEANN)** — "Vectorless RAG" and "97% storage savings" point to a paradigm shift: the community is actively seeking alternatives to heavyweight vector-database RAG pipelines. Developers who understand these approaches early will architect more efficient systems.

- **[`MoneyPrinterTurbo`](https://github.com/harry0703/MoneyPrinterTurbo)** — 1,937 stars in a single day signals massive maker interest in AI-generated short video. This is the leading edge of a wave: AI-powered multimedia content automation (video, voice, slides) will be a major OSS growth area through 2026.

- **[`pi-subagents`](https://github.com/nicobailon/pi-subagents)** — Async subagent delegation is the quiet technical story of the moment. As compound AI systems require parallel tool calls and tool chains, understanding subagent orchestration patterns will become a core competency for AI engineers.

- **[`claude-mem`](https://github.com/thedotmack/claude-mem) & [`supermemory`](https://github.com/supermemoryai/supermemory)** — Persistent, cross-session memory for agents is arguably the most critical unsolved problem in practical AI adoption. Two different approaches (context compression vs. dedicated memory API) are attracting rapid attention. Watch both closely for architectural inspiration.

---

*Report compiled from GitHub Trending (2026-06-01) and GitHub Topic Search API. Star counts reflect data available at time of analysis; "today" refers to June 1, 2026.*

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*