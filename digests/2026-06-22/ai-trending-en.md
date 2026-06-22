# AI Open Source Trends 2026-06-22

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-22 00:43 UTC

---



# AI Open Source Trends Report — 2026-06-22

---

## Step 1: AI-Relevance Filtering

**Excluded (non-AI trending repos):**
- `tursodatabase/turso` — general-purpose SQLite-compatible database
- `penpot/penpot` — open-source design tool (no AI core)
- `tw93/Pake` — webpage-to-desktop-app wrapper
- `mikumifa/biliTickerBuy` — Bilibili ticket purchasing tool
- `byoungd/English-level-up-tips` — English learning guide
- `asgeirtj/system_prompts_leaks` — system prompts collection (meta/community artifact, not a tool)
- `mattpocock/skills` — personal Claude skills directory (content, not infrastructure)

**Retained: 58 AI-relevant projects** from both Trending and Topic Search sources.

---

## Step 2 & 3: Categorized Analysis & Report

---

### 1. Today's Highlights

**Agent infrastructure is the undisputed center of gravity.** Two of today's top-5 trending spots — [bytedance/deer-flow](https://github.com/bytedance/deer-flow) (SuperAgent harness) and [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) (codebase MCP server) — represent a surge in the "plumbing layer" that makes agents reliable: memory, tool orchestration, and context compression. The debut of [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage), the first open-source *agentic* video production system with 500+ agent skills, signals that agent capabilities are bleeding into creative-media verticals. ByteDance's continued investment in Deer-Flow's SuperAgent architecture reflects the industry's shift from single-shot prompting to **long-horizon task execution** spanning minutes to hours. Meanwhile, a wave of MCP-native tooling — [chopratejas/headroom](https://github.com/chopratejas/headroom), [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) — reveals the ecosystem is rapidly maturing around the Model Context Protocol as the de facto interop standard.

---

### 2. Top Projects by Category

#### 🔧 AI Infrastructure (Frameworks, SDKs, Inference Engines, Dev Tools, CLI)

| Project | Stars | Description |
|---|---|---|
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐83,488 | High-throughput, memory-efficient LLM inference and serving engine — the production backbone for most open-source model deployments. |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐174,676 | The easiest way to run LLMs locally (Kimi-K2.6, DeepSeek, Qwen, Gemma, etc.) — a gateway drug for on-prem and edge AI experimentation. |
| [microsoft/synthetic-rag-index](https://github.com/microsoft/synthetic-rag-index) | ⭐38 | Microsoft's serverless Azure service to import, index, and shrink data by 90%+ for RAG scenarios — signals enterprise cloud providers tightening RAG pipelines. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,776 | The definitive model-definition framework for state-of-the-art ML across text, vision, audio, and multimodal domains. |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐72,567 (+442 today) | ByteDance's open-source SuperAgent harness with sandboxes, memories, sub-agents, and a message gateway for long-horizon tasks lasting minutes to hours. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐136,329 | The web-scraping backbone for agents — search, scrape, and interact with the web at scale via API. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐139,822 | The agent engineering platform — still the most widely adopted orchestration layer for LLM-powered applications. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐219,324 | Agent harness performance optimization system covering skills, instincts, memory, and security for Claude Code, Codex, Cursor and beyond — the highest-starred AI infrastructure repo this week. |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | ⭐1032 (+1032 today) | High-performance code-intelligence MCP server that indexes any repo into a persistent knowledge graph in milliseconds across 158 languages — today's breakout star. |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | ⭐44,351 (+2624 today) | Context compression proxy that reduces tool output, logs, files, and RAG chunk tokens by 60-95% before they hit the LLM — pure infrastructure efficiency. |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | ⭐509 | Universal LLM gateway with OpenAI/Anthropic-compatible endpoints and multi-provider translation + load-balancing. |

---

#### 🤖 AI Agents / Workflows (Frameworks, Automation, Multi-Agent)

| Project | Stars | Description |
|---|---|---|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐219,324 | The highest-starred agent performance system — skills, instincts, memory, security, and research-first dev for Claude Code, Codex, Opencode, Cursor. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐199,001 | "The agent that grows with you" — Nous Research's adaptive agent framework gaining massive traction. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐185,062 | The original autonomous AI agent — still the most-starred agent project, a benchmark for accessible AI for everyone. |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐72,567 (+442 today) | SuperAgent harness for long-horizon tasks; ByteDance's second major open-source agent architecture this year. |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐146,065 | Production-ready agentic workflow builder — bridging the gap between prototype and enterprise deployment. |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐77,935 | AI-driven development agent — full software engineering automation from task description to pull request. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐99,936 | Make websites accessible for AI agents — browser automation as an agent tool primitive. |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | ⭐987 (+987 today) | The world's first open-source *agentic* video production system with 12 pipelines, 52 tools, and 500+ agent skills — a landmark for creative AI agents. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐45,518 | Open-source super AI assistant / agent harness that plans tasks, runs tools, self-evolves with memory, multi-model support. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐44,515 | Lightweight, open-source AI agent for tools, chats, and workflows — minimalism as a design philosophy. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐36,842 | Give your AI agent "eyes" across the entire internet — Twitter, Reddit, YouTube, Bilibili, XiaoHongShu in one CLI with zero API fees. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐47,625 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants across frontier LLMs. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐35,367 | The frontend stack for agents and generative UI — makers of the AG-UI Protocol, bridging agents and user interfaces. |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐67,669 | "Bash is all you need" — a nano Claude Code-like agent harness built from 0 to 1, the most educational agent repo. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐55,058 | AI-powered job search system on Claude Code with 14 skill modes, PDF generation, and batch processing. |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | ⭐361 (+361 today) | 754 structured cybersecurity skills for AI agents mapped to 5 frameworks (MITRE ATT&CK, NIST CSF 2.0, ATLAS, D3FEND, RFMF) — agents meet infosec. |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | ⭐70,304 | Turn any folder of code, schemas, docs, or media into a queryable knowledge graph for your coding agent. |
| [streamlit/streamlit](https://github.com/streamlit/streamlit) | ⭐45,026 | Rapid AI/ML app development and sharing — the de facto prototyping canvas for agent demos and dashboards. |

---

#### 📦 AI Applications (Specific Apps, Vertical Solutions)

| Project | Stars | Description |
|---|---|---|
| [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | ⭐1,834 (+1,834 today) | macOS video editor purpose-built for AI workflows — today's #1 trending repo, highest single-day star burst. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐44,425 (+568 today) | LLM-powered multi-market stock analysis with real-time news, decision dashboard, and automated notifications — AI meets fintech. |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | ⭐163 (+163 today) | Real-time global intelligence dashboard — AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking. |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | ⭐987 (+987 today) | Agentic video production — a full creative studio summoned by your AI coding assistant. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐87,822 | Multi-agent LLM financial trading framework — autonomous trading desks built on LLMs. |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | ⭐69,517 | Financial data platform for analysts, quants, and AI agents — the Bloomberg Terminal alternative. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐58,633 | YOLO's unified vision framework — object detection, segmentation, classification in one package. |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | ⭐361 (+361 today) | Cybersecurity skill library for AI agents — a new vertical at the intersection of agents and infosec. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐29,889 | Generates real, editable PowerPoint files from any document with native shapes, animations, and audio narration. |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐83,190 | Turn any PDF or image into structured data for LLMs — 100+ languages, bridging the document-to-agent gap. |

---

#### 🧠 LLMs / Training (Models, Training Frameworks, Fine-Tuning)

| Project | Stars | Description |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐174,676 | Supports Kimi-K2.6, GLM-5.1, DeepSeek, Qwen, Gemma, and more — on-ramp for the latest open-weight models. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,776 | The universal model-definition framework for training and inference across all modalities. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐100,929 | The foundation of modern deep learning — tensors, dynamic graphs, and GPU acceleration. |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐195,787 | Google's end-to-end ML framework — still the most-starred ML framework overall. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐83,488 | Inference engine optimized for the latest open-weight model architectures. |
| [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) | ⭐66,383 | Classical ML in Python — the workhorse beneath the deep learning hype. |
| [keras-team/keras](https://github.com/keras-team/keras) | ⭐64,091 | Deep learning for humans — high-level API democratizing neural network design. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,109 | LLM evaluation platform supporting 100+ datasets across Llama, Mistral, GPT-4, Qwen, GLM, Claude. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐7,704 | Build modular, scalable LLM applications in Rust — performance-first agent infrastructure. |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | ⭐5,998 | Building AI agents atomically — composable primitives for agent construction. |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | ⭐266 | Reliable, minimal library for pretraining foundation and world models. |
| [thinkwee/AgentsMeetRL](https://github.com/thinkwee/AgentsMeetRL) | ⭐1,623 | Awesome list for agentic reinforcement learning — the convergence of RL and agent autonomy. |

---

#### 🔍 RAG / Knowledge (Vector Databases, Retrieval, Knowledge Management)

| Project | Stars | Description |
|---|---|---|
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐83,567 | Persistent context across sessions for every agent — captures, compresses, and re-injects relevant context. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐83,292 | Leading open-source RAG engine fusing cutting-edge retrieval with agent capabilities. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐59,048 | Universal memory layer for AI agents — the "RAM" for long-lived agent systems. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐18,634 (+347 today) | Open-source AI memory platform with a self-hosted knowledge graph engine for persistent cross-session memory. |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | ⭐44,351 (+2624 today) | Compresses RAG chunks and tool outputs by 60-95% before they reach the LLM — RAG efficiency redefined. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐44,866 | High-performance, cloud-native vector database for scalable ANN search. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐32,522 | Rust-based high-performance vector database and search engine for next-gen AI. |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | ⭐16,389 | Open-source vector database combining vector search with structured filtering. |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | ⭐10,671 | Developer-friendly embedded retrieval library for multimodal AI — search more, manage less. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12,473 | RAG on everything with 97% storage savings — fast, accurate, 100% private RAG on personal devices (MLsys 2026). |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐33,273 | Vectorless, reasoning-based RAG — a paradigm shift away from pure vector similarity. |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | ⭐28,095 | Showcase of advanced RAG techniques with detailed notebook tutorials — the community's RAG textbook. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐61,892 | Local-first agent experience — stop renting your intelligence, own it. |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | ⭐53,875 | Build AI agents and RAG pipelines visually — no-code meets enterprise RAG. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐50,257 | The leading document agent and OCR platform — data ingestion for RAG at scale. |
| [alibaba/zvec](https://github.com/alibaba/zvec) | ⭐11,963 | Alibaba's lightweight, lightning-fast in-process vector database — embedded vector search from a major cloud provider. |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | ⭐70,304 | Turn any folder of code, schemas, or media into a queryable knowledge graph — graph-based RAG for codebases. |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | ⭐1,032 (+1,032 today) | MCP server that indexes codebases into a persistent knowledge graph in milliseconds — RAG meets developer tools. |

---

### 3. Trend Signal Analysis

**The MCP explosion is the defining story of this cycle.** Three of today's top trending repos — [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp), [chopratejas/headroom](https://github.com/chopratejas/headroom), and [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) — are MCP-native or MCP-compatible, confirming that Anthropic's Model Context Protocol has become the *lingua franca* for agent tool integration. The community is no longer debating whether MCP wins — it's building on top of it.

**Context compression and memory efficiency are the new battleground.** With [chopratejas/headroom](https://github.com/chopratejas/headroom) (+2,624 stars today) and [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) (83K+ stars), the community is converging on a hard truth: the bottleneck is no longer model capability — it's *context economics*. As agents run longer tasks across more tools, the cost and latency of context windows become the binding constraint. Projects that compress, cache, and selectively re-inject context are seeing explosive growth.

**ByteDance's Deer-Flow** (+442 today, 72K+ total) represents the "SuperAgent" thesis: agents that handle tasks lasting minutes to hours, not seconds. Combined with [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) (199K stars) and [affaan-m/ECC](https://github.com/affaan-m/ECC) (219K stars), the trend is clear — the community is investing in *agent harnesses* (the scaffolding around models) rather than models themselves.

**Creative AI agents are arriving.** [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) and [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) (today's #1 trending repo at +1,834 stars) both target video production — a domain previously dominated by proprietary tools. This mirrors the broader pattern: wherever there's a creative workflow, open-source agents are close behind.

**RAG is evolving beyond vectors.** [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) (vectorless, reasoning-based RAG) and [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) (97% storage savings, on-device RAG, accepted at MLsys 2026) signal that the community is pushing past naive vector similarity toward more efficient, private, and reasoning-aware retrieval.

---

### 4. Community Hot Spots

- **🔌 MCP-native tooling** — [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) and [chopratejas/headroom](https://github.com/chopratejas/headroom) prove that MCP servers for specific domains (codebases, context compression) are the fastest path to adoption. *Watch for: domain-specific MCP servers for every vertical.*

- **🧠 Agent memory & context efficiency** — [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), [mem0ai/mem0](https://github.com/mem0ai/mem0), [topoteretes/cognee](https://github.com/topoteretes/cognee), and [chopratejas/headroom](https://github.com/chopratejas/headroom) form a cluster around the thesis that *memory is the missing layer* in agent architectures. *Watch for: memory-as-a-service platforms and context compression becoming a standard pipeline stage.*

- **🎬 Agentic creative tools** — [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) and [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) are the first wave of open-source, agent-native creative tools. *Watch for: agentic audio, 3D, and design tools following the same pattern.*

- **🔒 Domain-specific agent skills** — [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) (754 skills mapped to MITRE ATT&CK, NIST CSF) shows that agent capabilities are being packaged as structured, standards-mapped skill libraries. *Watch for: healthcare, legal, and compliance skill libraries emerging next.*

- **📊 Financial AI agents** — [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents), [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis), and [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) form a cluster of LLM-powered fintech tools. *Watch for: regulatory scrutiny and the emergence of agent-auditable trading frameworks.*

---

*Report generated by OWL — ZOO Company | Data: GitHub Trending & Topic Search API | 2026-06-22*

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*