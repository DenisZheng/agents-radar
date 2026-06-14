# AI Open Source Trends 2026-06-14

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-14 00:42 UTC

---

# AI Open Source Trends Report — June 14, 2026

---

## 1. Today's Highlights

Today's trending repos reveal a sharp focus on **AI agent infrastructure and safety**. Addy Osmani's [agent-skills](https://github.com/addyosmani/agent-skills) — a collection of production-grade engineering skills for AI coding agents — dominated daily stars with +1,514, signaling that developers are clamoring for battle-tested, production-ready agent toolchains rather than experimental demos. Making its debut, NVIDIA's [SkillSpector](https://github.com/NVIDIA/SkillSpector) brings long-overdue security auditing to the AI agent skills ecosystem, scanning for vulnerabilities and malicious patterns — a critical need as agent plugins proliferate. Apple's [container](https://github.com/apple/container) leverages Swift on Apple silicon to create lightweight Linux containers, converging Apple's hardware advantage with AI workload isolation. Meanwhile, the intelligence-gathering repo [system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) exposes internal prompts from over 30 major coding agents, fueling community debate on reproducibility and competitive transparency.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Stars | Description |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐174,072 (+20 today) | Local model runner supporting DeepSeek, Qwen, Gemma, and more — the de facto standard for running LLMs on consumer hardware. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐82,776 | High-throughput, memory-efficient LLM inference and serving engine critical for production deployments. |
| [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | ⭐100k+ (+370 today) | Windows productivity suite (general tool, trending due to AI community overlap); not core AI infra but widely adopted by dev workflows. |
| [apple/container](https://github.com/apple/container) | 🆕 (+1,487 today) | New Swift-native tool for creating lightweight Linux VMs/containers on Mac, optimized for Apple silicon — a potential new runtime for local AI workloads. |
| [swc-project/swc](https://github.com/swc-project/swc) | ⭐31k (+20 today) | Rust-based web platform (general infra); rising alongside Rust-based AI toolchains. |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 🆕 (+804 today) | **New today** — Security scanner for AI agent skills; detects vulnerabilities, malicious patterns, and security risks in agent plugins. |
| [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | ⭐127 (+109 today) | Unified Python interface to multiple generative AI providers — simplifies multi-model routing for developers. |

### 🤖 AI Agents / Workflows

| Project | Stars | Description |
|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐192,762 | Nous Research's adaptive agent designed to "grow with you" — persistent, evolving workflows. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐184,930 | Accessible AI agent platform for everyone; continues to be a benchmark for autonomous agent ambition. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐214,908 | Agent harness optimization system covering skills, instincts, memory, and security for Claude Code, Codex, Cursor, and others. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 🆕 (+1,514 today) | Production-grade engineering skills library for AI coding agents from Chrome's engineering lead. |
| [obra/superpowers](https://github.com/obra/superpowers) | 🆕 (+924 today) | Agentic skills framework and software development methodology designed for practical deployment. |
| [kenn-io/agentsview](https://github.com/kenn-io/agentsview) | 🆕 (+190 today) | Local-first session intelligence and analytics for coding agents, a 100× faster replacement for ccusage. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐58,492 | Universal memory layer for AI agents — persistent context across sessions. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐35,006 | Frontend stack for agents and generative UI; makers of the AG-UI Protocol. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐44,162 | Lightweight, open-source AI agent for tools, chats, and workflows. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐47,279 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐27,415 | Gives AI agents eyes to read the entire internet — Twitter, Reddit, YouTube, GitHub — one CLI, zero API fees. |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | ⭐27,041 | Google Workspace CLI with built-in AI agent skills for Drive, Gmail, Calendar, and more. |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | ⭐24,267 | Turns any website into a CLI for AI agents using logged-in browser sessions. |

### 📦 AI Applications

| Project | Stars | Description |
|---|---|---|
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐98,687 | Makes websites accessible for AI agents — automate tasks online with ease. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐85,824 | Multi-agent LLM financial trading framework. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐27,235 | AI generates real, editable PowerPoint files from any document with native shapes and animations. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐42,413 | LLM-powered A/H/US stock analysis with multi-data sources, real-time news, and push notifications. |
| [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | 🆕 (+109 today) | Aggregates system prompts and internal tools from 30+ major AI coding tools — transparency goldmine. |
| [LMCache/LMCache](https://github.com/LMCache/LMCache) | 🆕 (+238 today) | Fastest KV cache layer to supercharge LLM inference performance. |

### 🧠 LLMs / Training

| Project | Stars | Description |
|---|---|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,567 | The definitive model-definition framework for state-of-the-art ML models across text, vision, audio, and multimodal. |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐195,644 | Open-source ML framework for everyone — still the backbone of enterprise ML. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐100,732 | Tensors and dynamic neural networks with strong GPU acceleration — the research standard. |
| [keras-team/keras](https://github.com/keras-team/keras) | ⭐64,088 | Deep learning for humans — high-level API for rapid prototyping. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐58,355 | YOLOv8 and beyond — real-time object detection and computer vision. |
| [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) | ⭐66,322 | Classic machine learning library in Python — still essential. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐7,610 | Build modular, scalable LLM applications in Rust — a new systems-language entrant. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,082 | LLM evaluation platform supporting 100+ datasets across all major models. |

### 🔍 RAG / Knowledge

| Project | Stars | Description |
|---|---|---|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐145,087 | Production-ready platform for agentic workflow development with RAG at its core. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐141,396 | User-friendly AI interface supporting Ollama, OpenAI API, and more. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐139,213 | The agent engineering platform — the most widely adopted LLM application framework. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐82,657 | Leading open-source RAG engine fusing cutting-edge retrieval with agent capabilities. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐58,492 | Universal memory layer for AI agents — persistent context across sessions. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐61,541 | Local-first agent experience — stop renting your intelligence. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐44,762 | High-performance, cloud-native vector database for scalable ANN search. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐32,172 | High-performance vector database and search engine for next-gen AI. |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | ⭐58,081 | Lightning-fast search engine API with AI-powered hybrid search. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐17,815 | Open-source AI memory platform — persistent long-term memory via self-hosted knowledge graphs. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐11,918 | RAG on everything with 97% storage savings — fast, accurate, 100% private RAG on personal devices. |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | ⭐10,595 | Developer-friendly embedded retrieval library for multimodal AI. |

---

## 3. Trend Signal Analysis

**The "Agent Skills" era has arrived.** Today's single most explosive signal is the convergence around **production-grade AI agent skills and toolchains**. Addy Osmani's [agent-skills](https://github.com/addyosmani/agent-skills) (+1,514 stars) and obra's [superpowers](https://github.com/obra/superpowers) (+924 stars) both launched or surged today, targeting the same pain point: developers have AI coding agents (Claude Code, Codex, Cursor, etc.) but lack standardized, production-hardened skill libraries. This mirrors the early days of npm packages for Node.js — the community is building the "package ecosystem" for agent capabilities.

**Agent security is the next frontier.** NVIDIA's debut of [SkillSpector](https://github.com/NVIDIA/SkillSpector) (+804 stars) is a landmark moment. As agent plugins proliferate — each with filesystem, network, and API access — the attack surface expands dramatically. No major security tooling existed for this layer until today. This signals the industry's recognition that agent ecosystems need the same security auditing infrastructure that web and cloud-native tools have had for years.

**Local-first and Apple silicon are converging with AI.** Apple's [container](https://github.com/apple/container) (+1,487 stars) and the broader trend of local LLM tools (Ollama, LMCache, LEANN) point to a growing demand for running AI workloads on consumer hardware with strong isolation. Apple's Swift-native container runtime could become the default sandbox for local AI agents on Mac.

**Transparency as a community force.** The [system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) repo (+109 stars) aggregates internal prompts from 30+ coding tools. This reflects growing community pressure on AI tool vendors to open their system architectures — a trend that could reshape competitive dynamics.

**Rust is entering the AI agent stack.** Projects like [rig](https://github.com/0xPlaygrounds/rig) and [agentsview](https://github.com/kenn-io/agentsview) (Go) show the community gravitating toward systems languages for performance-critical agent infrastructure, moving beyond Python-first tooling.

---

## 4. Community Hot Spots

- **[NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector)** — First-mover in agent skill security scanning. As agent marketplaces grow, security auditing will become mandatory. Early adopters of this tooling will set the standard for safe agent deployment.

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — Production-grade skill library from a Chrome engineering lead. This could become the de facto standard for AI coding agent skills, much like ESLint became for JavaScript linting. Developers should contribute and align with this ecosystem early.

- **[LMCache/LMCache](https://github.com/LMCache/LMCache)** — KV cache optimization layer for LLM inference. As inference costs dominate AI budgets, caching layers like this directly impact the economics of running LLMs at scale.

- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — 97% storage savings for personal RAG. The "RAG on everything" vision with near-zero storage overhead could democratize private knowledge management, making enterprise-grade RAG accessible to individuals.

- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** — Zero-API-fee internet access for AI agents. If this project matures, it could become the default "eyes" layer for any agent needing to read the web — a critical infrastructure piece for the open agent web.

---

*Report generated by OWL — AI Open Source Ecosystem Analyst*
*Data source: GitHub Trending & Topic Search, June 14, 2026*

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*