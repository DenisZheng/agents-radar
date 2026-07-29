# AI Open Source Trends 2026-07-29

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-29 02:00 UTC

---

# AI Open Source Trends Report — 2026-07-29

---

## 1. Today's Highlights

Today's GitHub trending list reveals a sharp pivot toward **agent-centric infrastructure**: three of the top-five AI repos by daily stars are tools that extend coding agents (Claude Code, Codex, Cursor) with new capabilities—video understanding, persistent memory, and harness optimization. Simultaneously, the topic-search data shows **vector databases and RAG engines** dominating total-star leaderboards (Milvus, Qdrant, LlamaIndex, RAGFlow all >30k ⭐), signaling that production-grade retrieval remains the backbone of every agent stack. Hugging Face's new `speech-to-speech` library (+227 ★ today) and the `moeru-ai/airi` companion agent (+797 ★) highlight surging interest in **local, multimodal voice agents** that run entirely on-device. Microsoft's `agent-governance-toolkit` entering trending (+46 ★) marks the first major enterprise-grade governance framework for autonomous agents to hit the daily hot list.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [ollama/ollama](https://github.com/ollama/ollama) | 177,139 / — | De facto standard for local LLM serving; today adds Kimi-K2.6, GLM-5.2, MiniMax support. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 163,073 / — | Foundational model hub & runtime; enables every downstream agent/app. |
| [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | — / +227 | New library for **fully local voice agents** (ASR + LLM + TTS) with zero cloud dependency. |
| [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | — / +62 | Unified Python SDK across 15+ GenAI providers; reduces vendor lock-in for agent tooling. |
| [microsoft/agent-governance-toolkit](https://github.com/microsoft/agent-governance-toolkit) | — / +46 | Covers 10/10 OWASP Agentic Top 10; policy enforcement, sandboxing, zero-trust identity. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 36,344 / — | React/Angular components + AG-UI protocol for embedding agents in any frontend. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 8,083 / — | Rust-native LLM framework emphasizing modularity & type safety for production pipelines. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | 12,716 / — | First-class Java/JVM integration for LLMs, tools, RAG, MCP—critical for enterprise adoption. |

### 🤖 AI Agents / Workflows
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 234,853 / +636 | **#1 trending AI repo today**; performance-optimized harness for Claude Code, Codex, Cursor—skills, memory, security baked in. |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | — / +988 | **Highest daily stars overall**; gives any coding agent video understanding (download → frames → transcript → context). |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 221,932 / — | Self-evolving agent with persistent memory; "grows with you" narrative resonates strongly. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 46,342 / — | Ultra-light (single-file) personal agent framework with WebUI, MCP, multi-agent workflows. |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 38,364 / — | Stategraph-based resilient agent orchestration; becoming the standard for complex multi-step flows. |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | — / +423 | Turns any technical PDF into a **Claude Code skill** instantly—knowledge-as-code for agents. |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,006 / — | No-code visual builder for agent/RAG pipelines; lowers barrier for non-ML engineers. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 61,954 / — | Universal memory layer (vector + graph + KV) with TTL, scoping, and agent-native APIs. |

### 📦 AI Applications
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | — / +797 | Self-hosted **AI companion** with realtime voice, Minecraft/Factorio play, cross-platform—consumer agent paradigm. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 49,094 / — | All-in-one productivity studio: 300+ assistants, multi-model routing, agent marketplace. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 99,796 / — | One-click HD short-video generation from topic/keyword; end-to-end AI content pipeline. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 97,817 / — | Deterministic AST-to-knowledge-graph for any codebase; skill for Claude Code, Cursor, Gemini CLI. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 147,125 / — | Most popular self-hosted ChatGPT-style UI; supports Ollama, OpenAI, custom pipelines. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 64,028 / — | Local-first "ChatGPT + RAG + Agents" desktop app; zero-config document chat. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 41,645 / — | AI → native `.pptx` with charts, animations, speaker-note audio, custom templates. |

### 🧠 LLMs / Training
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 53,958 / — | **Train a 64M LLM from scratch in 2 hours**—educational gold standard for model internals. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 100,064 / — | Step-by-step PyTorch implementation of GPT-like LLM; most-starred educational LLM repo. |
| [The-Pocket/PocketFlow](https://github.com/The-Pocket/PocketFlow) | 11,057 / — | 100-line LLM framework where **agents build agents**; minimal core, maximal composability. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,241 / — | Comprehensive LLM eval platform (100+ datasets, 20+ models); de facto benchmark runner in China. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,421 / — | Hands-on course: build tiny vLLM + Qwen on Apple Silicon; systems-engineer focus. |
| [Event-AHU/Medical_Image_Analysis](https://github.com/Event-AHU/Medical_Image_Analysis) | 237 / — | Foundation-model-based medical imaging; emerging vertical for domain-specific LLMs. |
| [kennethleungty/Finance-LLMs](https://github.com/kennethleungty/Finance-LLMs) | 131 / — | Curated real-world LLM/agent use cases in financial services; bridge between research & prod. |

### 🔍 RAG / Knowledge
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 51,177 / — | Leading document agent + OCR platform; agentic RAG with tool-use loops. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 86,271 / — | **Top-starred RAG engine**; fuses deep retrieval with agent reasoning for production context layers. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,404 / — | Cloud-native vector DB at scale; ANN search backbone for enterprise RAG. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 33,631 / — | Rust-built vector DB with hybrid search, payload filtering, and managed cloud. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 34,874 / — | **Vectorless, reasoning-based RAG**; document index that skips embeddings entirely. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 29,520 / — | AI memory platform: persistent knowledge graphs + long-term agent memory across sessions. |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | 28,857 / — | Tutorial repo: 20+ advanced RAG patterns (HyDE, CRAG, GraphRAG, etc.) with runnable notebooks. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 12,738 / — | **97% storage savings** for on-device RAG; enables private retrieval on mobile/edge. |

---

## 3. Trend Signal Analysis (≈250 words)

**Agent tooling is the new bottleneck.** Three of the five highest-climbing AI repos today—`affaan-m/ECC` (+636), `bradautomates/claude-video` (+988), `virgiliojr94/book-to-skill` (+423)—are **meta-tools for coding agents** (Claude Code, Codex, Cursor). The pattern is clear: developers have adopted agentic coding workflows en masse, and the next wave of innovation targets the *harness*—memory, skill loading, context compression (`headroomlabs-ai/headroom` +62,966 total), and multimodal input (video, voice). This mirrors the 2024–25 "IDE plugin" phase but at a higher abstraction layer: the agent *is* the IDE now.

**Local-first multimodal agents are crossing the chasm.** `moeru-ai/airi` (+797) and `huggingface/speech-to-speech` (+227) both enable **fully offline voice agents** with tool use (Minecraft, Factorio, file ops). Combined with `ollama`'s expanding model zoo (Kimi-K2.6, GLM-5.2) and `LEANN`'s 97% storage reduction, the stack for a private, on-device "Jarvis" is production-ready—no API keys, no cloud egress.

**Governance enters the conversation.** Microsoft's `agent-governance-toolkit` hitting trending (+46) signals enterprise readiness: OWASP Agentic Top 10 coverage, sandboxing, policy-as-code. Expect compliance tooling to become a standard checklist item in agent frameworks by Q4 2026.

**Vector DBs consolidate; "vectorless" RAG emerges.** Milvus, Qdrant, Weaviate, LanceDB all hold >10k stars, but `VectifyAI/PageIndex` (34.8k) and `LEANN` (12.7k) prove a counter-trend: **reasoning-over-embeddings** architectures that skip vector stores entirely, cutting cost and latency for on-prem deployments.

**Training literacy goes mainstream.** `minimind` (54k) and `LLMs-from-scratch` (100k) show that "build your own LLM" is no longer niche—it's a rite of passage for AI engineers, fueled by cheap GPU hours and better educational tooling.

---

## 4. Community Hot Spots — Developer Focus List

- **🔥 `affaan-m/ECC`** — The *de facto* performance harness for Claude Code/Cursor/Codex. If you ship agent skills, integrate here first; 234k stars + today's #1 climber proves ecosystem gravity.
- **🔥 `bradautomates/claude-video`** — Unlocks video-as-context for any agent. Immediate use cases: tutorial ingestion, meeting recording analysis, UI bug reproduction. 988 ★ today = highest velocity signal.
- **🔥 `huggingface/speech-to-speech`** — Only maintained, batteries-included library for **local voice agents** (Whisper + LLM + XTTS). Zero cloud, streaming, extensible—start here for voice interfaces.
- **🔥 `VectifyAI/PageIndex`** — Vectorless RAG that *reasons* over documents instead of embedding them. Cuts infra cost 10x; ideal for on-prem/air-gapped deployments where GPU RAM is scarce.
- **🔥 `microsoft/agent-governance-toolkit`** — First enterprise-grade governance framework to trend. Adopt early if you ship agents in regulated environments; policy-as-code + sandboxing will be audit requirements by 2027.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*