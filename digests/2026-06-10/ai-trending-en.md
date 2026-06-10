# AI Open Source Trends 2026-06-10

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-10 00:42 UTC

---



# AI Open Source Trends Report — 2026-06-10

---

## Step 1: Filtering — AI-Relevant Projects

### From Trending List (16 → 13 AI-relevant retained, 3 excluded)

**Excluded:** `TapXWorld/ChinaTextbook` (textbook PDF collection), `refactoringhq/tolaria` (markdown knowledge base manager — general productivity), `francescopace/espectre` (Wi-Fi motion detection — IoT/security, not AI-core).

### From Topic Search Results (81 → 55 AI-relevant retained)

General dev tools, frontend frameworks, and non-AI infrastructure items filtered out. All RAG, LLM, AI-agent, ML, and vector-DB tagged projects retained as directly AI-relevant.

---

## Step 2: Categorization & Step 3: Full Report

---

### 1. Today's Highlights

Today's GitHub landscape reveals a clear inflection point: **AI agent skills and harness ecosystems** are dominating new-star momentum. The #1 trending repo `last30days-skill` (+3,191 stars) is an *agent skill* — not a model, not a framework — but a plug-in that gives any AI agent the ability to research across Reddit, X, YouTube, and HN. This signals the community is shifting focus from building agents to **equipping agents with capabilities**. Simultaneously, Rust is re-emerging as a serious language for AI infrastructure (`turbovec` +1,801, `goose` +489, `rig` 7,571 total), and local-LLM evaluation (`whichllm` +633) is getting its first mainstream developer tooling. Finally, the sheer concentration of RAG-focused topic repos confirms that **production-grade retrieval pipelines** have become the most active battleground in open-source AI.

---

### 2. Top Projects by Category

#### 🔧 AI Infrastructure (Frameworks, SDKs, Inference Engines, Dev Tools, CLI)

| Project | Stars | Description |
|---|---|---|
| [turbovec](https://github.com/RyanCodrai/turbovec) | 0 (+1,801 today) | High-performance vector index built on TurboQuant in Rust with Python bindings — the highest-gaining infrastructure project today, signaling demand for native-speed vector search outside of dedicated databases. |
| [opencv/opencv](https://github.com/opencv/opencv) | — (+102 today) | The foundational Open Source Computer Vision Library, still actively trending as it becomes an increasingly critical pre-processing layer in multimodal AI pipelines. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 82,359 | Industry-standard high-throughput LLM inference and serving engine, continuing to grow as the default choice for production LLM deployment. |
| [ollama/ollama](https://github.com/ollama/ollama) | 173,713 | The go-to tool for running LLMs locally (including Kimi-K2.6, DeepSeek, Qwen, Gemma), anchoring the local-first AI movement. |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 70,829 | An open-source long-horizon SuperAgent harness from ByteDance with sandboxes, memories, tools, and subagent orchestration for complex multi-step tasks. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,459 | The definitive model-definition framework for state-of-the-art ML across text, vision, audio, and multimodal domains. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 100,623 | The universal deep learning framework — the foundation on which most open-source AI is built. |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 72,032 | Unified efficient fine-tuning for 100+ LLMs and VLMs, standardizing the model adaptation workflow. |

#### 🤖 AI Agents / Workflows (Agent Frameworks, Automation, Multi-Agent Systems)

| Project | Stars | Description |
|---|---|---|
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 0 (+3,191 today) | The #1 trending repo — an AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web, synthesizing grounded summaries. This project embodies the new "skill/plugin-first" agent paradigm. |
| [aaif-goose/goose](https://github.com/aaif-goose/goose) | 0 (+489 today) | An open-source, extensible AI agent in Rust that goes beyond code suggestions — install, execute, edit, and test with any LLM. One of the first serious Rust-native agent frameworks to trend. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 0 (+443 today) | Production-grade engineering skills for AI coding agents from Google's Addy Osmani — directly fueling the agent-skill arms race. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 211,891 | "Agent Harness Performance Optimization System" — skills, instincts, memory, security, and research-first development for Claude Code, Codex, Cursor and beyond. One of the most-starred agent infrastructure projects on GitHub. |
| [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | 0 (+806 today) | PM Skills Marketplace with 100+ agentic skills covering discovery, strategy, execution, launch, and growth — extending the agent-skill paradigm into product management. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 0 (+1,107 / 51,653 total) | AI-powered job search system built on Claude Code with 14 skill modes — a practical vertical agent application showing how agent harnesses are being productized. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 45,180 | Open-source super AI assistant & Agent Harness — plans tasks, runs tools and skills, self-evolves with memory and knowledge, multi-model, multi-channel. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 43,956 | Lightweight, open-source AI agent for tools, chats, and workflows from HKU — a minimalist alternative to heavier agent frameworks. |

#### 📦 AI Applications (Specific Apps, Vertical Solutions)

| Project | Stars | Description |
|---|---|---|
| [roboflow/supervision](https://github.com/roboflow/supervision) | 0 (+733 today) | Reusable computer vision tools — a practical CV utilities library that simplifies common detection, tracking, and annotation tasks for production AI systems. |
| [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) | 0 (+191 today) | Open-source healthcare AI — part of the growing wave of domain-specific AI applications targeting regulated verticals. |
| [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | 0 (+402 today) | "Use AI to Earn" — a TypeScript project focused on building monetizable AI products, reflecting the community's intense interest in commercializable AI. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 41,529 | LLM-driven A/H/US stock analysis system with multi-source data, real-time news, decision dashboards, and automated alerts. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 25,580 | AI generates real, editable PowerPoints from any document with native shapes, animations, and audio narration. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 47,130 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants — a unified desktop AI application. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 97,980 | Makes websites accessible for AI agents — a critical infrastructure layer for agent-driven web automation. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 130,745 | API to search, scrape, and interact with the web at scale — the de facto web data layer feeding AI agents and RAG pipelines. |

#### 🧠 LLMs / Training (Model Weights, Training Frameworks, Fine-Tuning Tools)

| Project | Stars | Description |
|---|---|---|
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 0 (+633 today) | Finds the local LLM that actually runs and performs best on your specific hardware, ranked by real benchmarks, not parameter count. Fills a major gap in the local LLM ecosystem. |
| [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | 0 (+79 today) | Comprehensive collection of system prompts and internal models from Claude Code, Cursor, Devin, Perplexity, and 20+ AI tools — invaluable for understanding how production agents are engineered. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 188,819 | The agent that grows with you from NousResearch — one of the most-starred agent projects, emphasizing adaptive, evolving AI behavior. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 7,571 | Build modular and scalable LLM applications in Rust — part of the Rust-for-AI push offering memory-safe, high-performance alternatives to Python agents. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,075 | LLM evaluation platform supporting 100+ datasets and all major models — the community's shared benchmarking infrastructure. |
| [openai/plugins](https://github.com/openai/plugins) | 0 (+284 today) | OpenAI Plugins repository — seeing renewed interest likely driven by the agent-skill paradigm reviving the plugin/extension architecture. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,860 | The original autonomous AI agent — still growing as the symbolic flagship of the open-source agent movement. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 58,198 | Ultralytics YOLO — the most popular real-time object detection framework, essential for vision AI pipelines. |

#### 🔍 RAG / Knowledge (Vector Databases, Retrieval, Knowledge Management)

| Project | Stars | Description |
|---|---|---|
| [langgenius/dify](https://github.com/langgenius/dify) | 144,587 | Production-ready platform for agentic workflow development — now one of the most-starred RAG/agent platforms globally. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 140,859 | User-friendly AI interface supporting Ollama, OpenAI API, and more — the default self-hosted ChatGPT alternative. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 138,901 | The agent engineering platform — foundational orchestration layer connecting LLMs, tools, and data sources. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 82,312 | RAG engine fusing cutting-edge RAG with agent capabilities — a purpose-built context layer for LLMs. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 58,201 | Universal memory layer for AI agents — solving the persistent context problem across sessions. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 81,485 | Persistent context across sessions for every agent — compresses agent activity with AI and injects relevant context back into future sessions. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,703 | High-performance, cloud-native vector database built for scalable vector ANN search — the most adopted open-source vector DB. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 31,983 | High-performance vector search engine — the Rust-based alternative gaining rapid adoption for production RAG. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 17,745 | Open-source AI memory platform giving agents persistent long-term memory via self-hosted knowledge graphs. |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | 16,303 | Vector database combining vector search with structured filtering — cloud-native and production-proven. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 11,897 | [MLSys 2026] RAG on everything with 97% storage savings — fast, accurate, 100% private personal-device RAG (appearing in top-tier academic venues). |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 32,812 | Document index for vectorless, reasoning-based RAG — an emergent alternative to vector-embedding retrieval, questioning whether embeddings are always necessary. |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | 11,808 | Code search MCP for Claude Code — makes entire codebases available as context for any coding agent. |

---

### 3. Trend Signal Analysis (~270 words)

**The agent-skill economy is today's dominant trend.** Three of the top six trending repos by new stars are explicitly "skill" or "harness" packages (`last30days-skill` +3,191, `pm-skills` +806, `agent-skills` +443), and topic search confirms `ECC` (211,891 total stars) and `hermes-agent` (188,819) as massive agent-harness projects. GitHub is witnessing a structural shift: the community has largely moved past *building agents* to *equipping agents with domain-specific capabilities*. Skills have become the new unit of open-source AI contribution.

**Rust is staging a credible comeback in AI tooling.** Today features a Rust-native agent (`goose` +489) and a Rust vector index (`turbovec` +1,801) both trending. In topic search, `rig` (7,571) provides a Rust LLM application framework, and production vector databases `qdrant` and `weaviate` are both Rust/Go-native. This reflects a community prioritizing deployment performance over prototyping convenience — Python remains dominant for training, but the inference/serving/agent layer is diversifying.

**Local LLM evaluation gets its first killer app.** `whichllm` (+633) lets developers instantly benchmark local LLMs on their specific hardware rather than trusting parameter counts. This connects directly to the proliferation of new model releases (Kimi-K2.6, DeepSeek, GLM-5.1 appearing in `ollama`'s description), which has created real confusion about what actually runs well on consumer hardware. Expect this category to grow rapidly.

**Vectorless RAG is emerging as a challenger paradigm.** `PageIndex` (32,812 stars) explicitly promises "vectorless, reasoning-based RAG," and `LEANN`'s MLSys 2026 publication shows academic investment in storage-efficient retrieval. This signals the community is questioning the assumption that dense vector embeddings are the only path to effective retrieval, potentially disrupting the vector-database-centric stack.

**Connections to industry events:** The timing coincides with peak agent-building activity driven by Claude Code, Cursor, and Codex ecosystem expansions. System prompt repositories trending (+79) suggest reverse-engineering of production AI tools is now mainstream. The `OpenAI Plugins` repo resurging (+284) likely reflects renewed interest in extensible agent architectures as "skills" reinvent the plugin concept.

---

### 4. Community Hot Spots

- **🔌 The Agent Skills Marketplace** — `last30days-skill`, `pm-skills`, `addyosmani/agent-skills` — Skills are becoming the primary contribution format for open-source AI. Developers should treat skills as the "packages" of the agent era and start publishing domain-specific capabilities.

- **🦀 Rust for AI Infrastructure** — `turbovec`, `goose`, `rig`, `qdrant` — The performance-critical layer of AI (vector search, agent runtimes, model serving) is increasingly Rust-first. Developers building production AI systems should evaluate Rust tooling rather than defaulting to Python.

- **🔬 Local LLM Benchmarking** — `whichllm` — With model releases accelerating, the gap between "runs on paper" and "runs well in practice" is widening. Expect more hardware-aware evaluation tools to emerge as a key developer infrastructure category.

- **🧠 Persistent Agent Memory** — `mem0` (58K), `claude-mem` (81K), `cognee` (17K) — Solving the cross-session memory problem is arguably the most active development area outside of agents themselves. Projects that give agents reliable long-term context are seeing explosive growth.

- **📐 Vectorless & Efficient RAG** — `PageIndex` (32K), `LEANN` (11K, MLSys 2026) — The assumption that RAG requires vector embeddings is being challenged. Storage-efficient, reasoning-based retrieval methods could reshape the entire RAG architecture stack and disrupt the vector database market.

---

*Report generated by OWL — ZOO | 2026-06-10*

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*