# AI Open Source Trends 2026-08-10

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-10 01:13 UTC

---

# AI Open Source Trends Report — 2026-08-10

---

## 1. Today's Highlights

The GitHub trending list is dominated by **agent-centric tooling**: PrimeIntellect’s self-improving coding agent (+2,356★ today), Addy Osmani’s production-grade *agent-skills* (+680★), and Google’s *skills* framework (+528★) signal a shift from raw LLM wrappers to **engineered, skill-based agent runtimes**. Simultaneously, **code-aware RAG** (vitali87/code-graph-rag) and **domain-specialized agents** (Harvey’s legal benchmark, ZhuLinsen’s stock-analysis system) are gaining traction. DeepMind’s *weathernext* release shows foundation-model labs open-sourcing downstream scientific applications. The ecosystem is converging on **modular, composable agent stacks** with explicit skill/memory/tooling layers.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [ollama/ollama](https://github.com/ollama/ollama) | 178,142 / — | De-facto local model runner; now supports Kimi-K2.6, GLM-5.2, gpt-oss — the “docker for LLMs.” |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 163,506 / — | Canonical model-definition framework; backbone of almost every open-weight LLM release. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 143,812 / — | Matured into a full *agent engineering platform* with LangGraph, LangSmith, and production templates. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 108,489 / — | Makes the open web a first-class tool for agents; critical for web-native automation. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 104,622 / — | Deterministic AST→knowledge-graph for codebases; plugs into Claude Code, Cursor, Gemini CLI. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 65,654 / — | Token-compression proxy (20–95% savings) — essential for cost-controlled agent loops. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 33,889 / — | High-performance Rust vector DB with hybrid search; cloud & self-hosted parity. |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | 11,107 / — | Embedded, zero-ops columnar vector store; ideal for local-first agent memory. |

### 🤖 AI Agents / Workflows
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | 0 / **+2,356** | Self-improving RLM agent for *long-running autonomous coding*; today’s breakout star. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 0 / **+680** | Production-grade, versioned *skill packs* for coding agents (refactoring, testing, docs, etc.). |
| [google/skills](https://github.com/google/skills) | 0 / **+528** | Google’s official skill registry for Gemini/Vertex; standardizes tool calling across products. |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | 0 / **+858** | “AI agency in a box” — persona-driven specialists (frontend, research, community, QA). |
| [langgenius/dify](https://github.com/langgenius/dify) | 151,873 / — | Visual *agentic workflow + RAG* builder; self-hostable, enterprise-ready, multi-model. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 69,739 / — | Gives agents *eyes on the entire internet* (Twitter, Reddit, YouTube, GitHub, Bilibili…) with zero API fees. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 46,794 / — | Ultra-light personal agent framework: WebUI, tools, memory, MCP, multi-agent — single file. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 36,656 / — | Frontend stack for *generative UI & agents* (React, Slack, mobile); authors of AG-UI protocol. |

### 📦 AI Applications
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | 0 / **+365** | Most powerful *modular diffusion GUI/graph*; backend for production image/video pipelines. |
| [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext) | 0 / **+86** | DeepMind’s open weather foundation model — scientific ML going open. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 61,200 / **+306** | LLM-driven multi-market stock analysis: real-time data, news, dashboard, zero-cost scheduling. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 102,336 / — | One-click HD short-video generation from topic/keyword; viral content automation. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 44,098 / — | Docs/topics → *native .pptx* with charts, animations, speaker-note audio, custom templates. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 60,415 / — | YOLO26/11/v8 — state-of-the-art object detection, segmentation, pose, tracking in one pip. |

### 🧠 LLMs / Training
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 239,028 / — | *Agent harness optimizer*: skills, instincts, memory, security for Claude Code, Codex, Cursor… |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 102,054 / — | Gold-standard tutorial: implement a GPT-like LLM in PyTorch step-by-step. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 54,498 / — | Train a 64M-parameter LLM from scratch in **2 hours** — education + rapid prototyping. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,456 / — | Systems-oriented: build a tiny vLLM + Qwen on Apple Silicon; great for inference internals. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 8,221 / — | **Rust-native** modular LLM application framework — performance + type safety. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,287 / — | Comprehensive LLM evaluation platform (100+ datasets, all major models). |

### 🔍 RAG / Knowledge
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) | 0 / **+96** | *Ultimate codebase RAG*: multi-language, knowledge-graph-backed, query + edit + understand. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 87,128 / — | Leading open-source **RAG engine** fusing retrieval + agent capabilities; enterprise-grade. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 62,880 / — | Universal *memory layer* for agents — persistent, cross-session, pluggable. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 51,509 / — | Document agent & OCR platform; LlamaParse + LlamaCloud = production RAG stack. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,573 / — | Cloud-native vector DB at massive scale; ANN search backbone for many RAG systems. |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 39,314 / — | Build *resilient, stateful multi-agent graphs*; first-class streaming, checkpointing, human-in-loop. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 35,103 / — | *Vectorless, reasoning-based RAG* — document index that skips embeddings for structured retrieval. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 29,892 / — | AI memory platform: persistent long-term memory via self-hosted knowledge graph engine. |

---

## 3. Trend Signal Analysis (≈250 words)

**Explosive attention: skill-based, composable agent runtimes.** Today’s top gainers — *prime-agent* (+2.3k), *agent-skills* (+680), *skills* (+528), *agency-agents* (+858) — share a common architecture: **small, versioned, auditable skill modules** that agents dynamically compose. This mirrors the “Unix philosophy” for AI: do one thing well, chain via standard interfaces. The community is rejecting monolithic prompt-chains in favor of **explicit tool/skill registries** (MCP, AG-UI, OpenAI Function Calling) with observability and rollback.

**New stack direction: code-graph RAG as default context engine.** *code-graph-rag* and *Graphify* signal a shift from vector-only retrieval to **deterministic AST/knowledge-graph hybrids** for code. These tools give agents *exact* symbol-level navigation — no hallucinated file paths, no embedding drift. Expect this to become standard in every coding agent (Cursor, Windsurf, Claude Code, Gemini CLI).

**Domain specialization is the next moat.** *harvey-labs* (legal), *daily_stock_analysis* (finance), *weathernext* (science), *ppt-master* (enterprise docs) show vertical agents eating horizontal chatbot share. The pattern: **specialized toolchains + eval benchmarks + proprietary data hooks** — open-source cores, commercial data layers.

**Connection to industry events:** The surge aligns with **gpt-oss / Kimi-K2.6 / GLM-5.2** releases (all now in Ollama), fueling local-first agent development. Google’s *skills* drop coincides with Gemini 2.5/Vertex Agent Builder GA. Developers are building **portable skill layers** that work across model backends — avoiding vendor lock-in.

---

## 4. Community Hot Spots (Watch List)

- **PrimeIntellect/prime-agent** — Self-improving RLM agent; if it delivers on autonomous long-horizon coding, it becomes the *Linux kernel* of AI software engineering.  
- **addyosmani/agent-skills** — Canonical skill library from a Chrome DevRel lead; likely to become the *standard library* for coding agents (like lodash for JS).  
- **vitali87/code-graph-rag** — Bridges the “agent understands my codebase” gap; watch for IDE integrations (VS Code, JetBrains, Zed).  
- **infiniflow/ragflow** — Enterprise RAG engine gaining production deployments; its agent+RAG fusion architecture is a blueprint for knowledge-intensive apps.  
- **CopilotKit/CopilotKit + AG-UI Protocol** — The *React for agents*; if AG-UI becomes the interop standard, CopilotKit owns the frontend layer.  

--- 

*Data sourced from GitHub Trending (2026-08-10) and GitHub Topic Search (last 7 days). Stars reflect total historical count; “today” column shows daily delta where available.*

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*