# AI Open Source Trends 2026-06-16

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-16 00:49 UTC

---

# AI Open-Source Trends Report — 2026-06-16

---

## 1. Today's Highlights

Today's GitHub trending landscape reveals a sharp acceleration in **AI agent infrastructure and security**. NVIDIA's **SkillSpector** (+1,099 stars today) — a security scanner for AI agent skills — signals that the community is rapidly maturing beyond "can we build agents?" to "can we secure them?" Meanwhile, **Agent-Reach** (+1,100 stars) gives agents eyes across the entire internet (Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu) with zero API fees, reflecting demand for agent web-access tooling. **Kronos** (+396 stars), a foundation model specifically for financial market language, shows vertical LLM specialization gaining traction. The broader topic-search data confirms that **agent harnesses, persistent memory, and RAG** remain the dominant architectural patterns, with projects like `claude-mem`, `mem0`, and `cognee` all pulling massive star counts. Notably, **trycua/cua** (+70 stars) — open-source infrastructure for Computer-Use Agents with sandboxes and benchmarks — points to the next frontier: agents that control full desktops.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)

| Project | Stars | Description |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐174,259 | The go-to tool for running LLMs locally — now supporting Kimi-K2.6, GLM-5.1, DeepSeek, Qwen, Gemma and more. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐82,972 | High-throughput, memory-efficient LLM inference and serving engine — the backbone of production LLM deployments. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,611 | The definitive model-definition framework for state-of-the-art ML across text, vision, audio, and multimodal. |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | ⭐1,079 (+1,079 today) | **Today's breakout.** Security scanner for AI agent skills — detects vulnerabilities, malicious patterns, and security risks in agent tool definitions. |
| [trycua/cua](https://github.com/trycua/cua) | ⭐70 (+70 today) | Open-source infrastructure for Computer-Use Agents: sandboxes, SDKs, and benchmarks for agents controlling full desktops (macOS, Linux, Windows). |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | ⭐562 (+562 today) | A hands-on curriculum for learning, building, and shipping AI engineering projects end-to-end. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐7,626 | Build modular and scalable LLM applications in Rust — a rising stack for performance-critical AI infra. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐12,338 | Idiomatic Java library for LLM-powered apps with unified API over providers, vector stores, tool calling, MCP, agents, and RAG. |

### 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)

| Project | Stars | Description |
|---|---|---|
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐184,960 | The pioneering autonomous AI agent project — accessible AI for everyone to use and build on. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐216,159 | Agent harness performance optimization system — skills, instincts, memory, security for Claude Code, Codex, Cursor and beyond. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐194,451 | "The agent that grows with you" — adaptive agent framework from Nous Research. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐30,145 (+1,100 today) | **Today's top trending AI project.** Gives AI agents eyes to read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees. |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐66,677 | "Bash is all you need" — a nano Claude Code-like agent harness built from 0 to 1. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐45,324 | Open-source super AI assistant & agent harness: plans tasks, runs tools, self-evolves with memory and knowledge. |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐77,233 | AI-driven development platform — full autonomous coding agent. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐98,984 | Make websites accessible for AI agents — automate tasks online with ease. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐86,445 | Multi-agent LLM financial trading framework — specialized agents for market analysis and execution. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐35,158 | The frontend stack for agents & generative UI — makers of the AG-UI Protocol. |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | ⭐27,080 | Google Workspace CLI with AI agent skills — Drive, Gmail, Calendar, Sheets, Docs in one tool. |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | ⭐24,449 | Turn any website into a CLI and let AI agents use your logged-in browser. |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | ⭐73,031 | Claude Code skill that cuts 65% of tokens by "talking like caveman" — a clever cost-optimization hack. |

### 📦 AI Applications (specific apps, vertical solutions)

| Project | Stars | Description |
|---|---|---|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐145,351 | Production-ready platform for agentic workflow development — the all-in-one LLM app builder. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐141,666 | User-friendly AI interface supporting Ollama, OpenAI API, and more. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐47,379 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants with unified LLM access. |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | ⭐396 (+396 today) | **Today's breakout vertical LLM.** A foundation model for the language of financial markets. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐42,648 | LLM-driven A/H/US stock analysis: multi-source data + real-time news + LLM decision dashboard, zero-cost scheduled runs. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐27,853 | AI generates real, editable PowerPoint from any document — native shapes, animations, audio narration. |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | ⭐69,221 | Financial data platform for analysts, quants, and AI agents. |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | ⭐28,312 | Free, local, open-source 24/7 cowork app for OpenClaw, Hermes Agent, Claude Code, Codex, and 20+ more CLIs. |
| [acon96/home-llm](https://github.com/acon96/home-llm) | ⭐1,359 | Home Assistant integration to control your smart home using a local LLM. |

### 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)

| Project | Stars | Description |
|---|---|---|
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | ⭐396 (+396 today) | Foundation model purpose-built for financial market language — a new vertical LLM entrant. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,087 | LLM evaluation platform supporting 100+ datasets across Llama, Mistral, Qwen, GPT-4, Claude, etc. |
| [starpig1129/DATAGEN](https://github.com/starpig1129/DATAGEN) | ⭐1,751 | AI-driven multi-agent research assistant automating hypothesis generation, data analysis, and report writing. |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | ⭐312 | On-device LLM inference powered by X-bit quantization — pushing LLMs to edge devices. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,280 | Course on LLM inference serving on Apple Silicon — build a tiny vLLM + Qwen from scratch. |
| [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) | ⭐598 | Resource repository for machine unlearning in large language models — an emerging research area. |
| [testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io) | ⭐105 | Survey on test-time scaling in LLMs — "what, how, where, and how well?" |

### 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)

| Project | Stars | Description |
|---|---|---|
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐61,639 | All-in-one local-first agent experience — stop renting your intelligence. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐58,635 | Universal memory layer for AI agents — persistent context across sessions. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐82,551 | Persistent context across sessions for every agent — captures, compresses, and injects relevant context back. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐82,830 | Leading open-source RAG engine fusing cutting-edge RAG with agent capabilities. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐50,152 | Leading document agent and OCR platform — the data framework for LLM applications. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐44,794 | High-performance, cloud-native vector database for scalable vector ANN search. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐17,839 | Open-source AI memory platform — gives agents persistent long-term memory via self-hosted knowledge graph engine. |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | ⭐27,968 | Showcases advanced RAG techniques with detailed notebook tutorials. |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | ⭐67,696 | Turn any folder of code, SQL, docs, images, or videos into a queryable knowledge graph for AI coding assistants. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐11,955 | [MLsys2026] RAG on everything with 97% storage savings — fast, accurate, 100% private RAG on personal devices. |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | ⭐53,616 | Build AI agents visually — drag-and-drop RAG and agent pipeline builder. |
| [pathwaycom/llm-app](https://github.com/pathwaycom/llm-app) | ⭐59,348 | Ready-to-run cloud templates for RAG, AI pipelines, and enterprise search with live data. |

---

## 3. Trend Signal Analysis

**The agent era has entered its "plumbing and security" phase.** The explosive growth of projects like NVIDIA's SkillSpector (+1,099 stars today) and Agent-Reach (+1,100 stars today) reveals that the open-source community is moving past the initial excitement of "what can agents do?" into the harder questions of **how to secure them and how to give them reliable, cost-effective access to the real world**. SkillSpector's debut at the top of today's trending is particularly telling — it's a security-first tool for scanning AI agent skills, suggesting that as agents gain more autonomy and tool access, the attack surface is becoming a first-class concern.

**Persistent memory and context management** remain the hottest architectural pattern. Projects like `claude-mem` (82K+ stars), `mem0` (58K+ stars), and `cognee` (17K+ stars) all address the same fundamental problem: agents are stateless by default, and the community is converging on memory layers as the critical infrastructure gap. The fact that `caveman` — a token-reduction skill — has 73K stars shows that **cost optimization at the prompt level** is also a massive pain point.

**Vertical foundation models** are emerging as a new category. Kronos (financial markets) and the broader ecosystem around TradingAgents and daily_stock_analysis suggest that domain-specific LLMs — trained or fine-tuned on specialized corpora — are gaining ground against general-purpose models for high-value niches.

**Rust is making inroads in AI infrastructure.** Projects like `rig` (7.6K stars), `meilisearch` (58K stars), and `qdrant` (32K stars) show that performance-critical AI infrastructure is increasingly being built in Rust, challenging Python's dominance in the ML stack.

**Computer-Use Agents (CUA)** represent the next frontier. The appearance of `trycua/cua` on today's trending — providing sandboxes, SDKs, and benchmarks for agents controlling full desktops — signals that the community is building the evaluation and safety infrastructure for the next generation of agents that interact with operating systems directly.

---

## 4. Community Hot Spots

- **🔒 AI Agent Security (SkillSpector)** — [github.com/NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) — As agents gain more tool access and autonomy, security scanning for agent skills becomes critical. NVIDIA's entry into this space with a dedicated open-source tool validates this as a major concern. **Watch this space closely.**

- **🌐 Agent Web Access (Agent-Reach)** — [github.com/Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) — Zero-cost, API-free internet access for agents across Twitter, Reddit, YouTube, GitHub, and Chinese platforms. Solves a real pain point for agent builders tired of API rate limits and fees.

- **🧠 Persistent Agent Memory (claude-mem, mem0, cognee)** — [github.com/thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | [github.com/mem0ai/mem0](https://github.com/mem0ai/mem0) | [github.com/topoteretes/cognee](https://github.com/topoteretes/cognee) — The "memory layer" for agents is crystallizing as essential infrastructure. Multiple competing approaches (compression-based, vector-based, knowledge graph-based) are all gaining traction simultaneously.

- **🖥️ Computer-Use Agent Infrastructure (cua)** — [github.com/trycua/cua](https://github.com/trycua/cua) — Open-source sandboxes, SDKs, and benchmarks for agents that control full desktops. This is the evaluation and safety layer for the next wave of autonomous agents.

- **📈 Vertical LLMs for Finance (Kronos, TradingAgents)** — [github.com/shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | [github.com/TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) — Domain-specific foundation models for financial markets are emerging as a high-value niche, combining specialized training data with multi-agent architectures for trading and analysis.

---

*Report generated by OWL — ZOO Company | Data: GitHub Trending & Topic Search, 2026-06-16*

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*