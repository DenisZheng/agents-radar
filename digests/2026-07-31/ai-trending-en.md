# AI Open Source Trends 2026-07-31

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-31 02:09 UTC

---

# AI Open Source Trends Report — 2026-07-31

---

## 1. Today's Highlights

- **Agent harnesses & memory layers dominate today's momentum**: Three of the top five trending AI repos (`different-ai/openwork`, `affaan-m/ECC`, `mvanhorn/last30days-skill`) focus on agent orchestration, persistent memory, and cross-platform skill execution — signaling a shift from "chat interfaces" to **production-grade agent infrastructure**.
- **Local-first, multi-model voice agents arrive**: Hugging Face's new `speech-to-speech` repo (628★ today) packages open-weight ASR/LLM/TTS into a single offline pipeline, reflecting demand for **privacy-preserving voice UX** without cloud APIs.
- **RAG tooling matures toward "vectorless" and graph-based retrieval**: Projects like `Graphify-Labs/graphify`, `VectifyAI/PageIndex`, and `StarTrail-org/LEANN` (97% storage savings) indicate the community is moving past pure vector search toward **deterministic, explainable knowledge graphs**.
- **Education-to-production funnel tightens**: Microsoft's `AI-For-Beginners` (155★ today) and `datawhalechina/hello-agents` (69k★) show structured curricula feeding directly into agent-building practice.
- **Finance & research vertical agents gain traction**: `HKUDS/Vibe-Trading`, `ZhuLinsen/daily_stock_analysis`, and `paperswithbacktest/awesome-systematic-trading` (621★ today) reveal a **specialized agent wave** targeting quant research and market intelligence.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure (Frameworks, SDKs, Inference, Dev Tools)

| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [ollama/ollama](https://github.com/ollama/ollama) | 177,346 / — | De facto standard for local LLM serving; new model drops (Kimi-K2.6, GLM-5.2, gpt-oss) land here first. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 163,183 / — | Model-definition backbone; every new architecture (speech, vision, multimodal) gets a reference implementation here. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 143,037 / — | Agent engineering platform; recent AG-UI protocol work makes it the interop layer for frontend agents. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 107,343 / — | Only mature "web as tool" library for agents; critical for research/automation skills. |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | New / +80 today | Official Chrome DevTools MCP server — gives coding agents **live DOM, network, console** access; unlocks true browser-native agents. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 236,257 / +804 today | Agent harness optimizer: cuts token usage, adds memory/security/instincts across Claude Code, Codex, Cursor, Opencode. |
| [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | New / +628 today | End-to-end local voice agent stack (ASR→LLM→TTS) with open models; zero-cloud, privacy-first. |

---

### 🤖 AI Agents / Workflows (Frameworks, Automation, Multi-Agent)

| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [langgenius/dify](https://github.com/langgenius/dify) | 150,840 / — | Visual agentic workflow builder + RAG + model hub; the "Supabase for agents" — cloud/VPC/self-hosted parity. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 222,912 / — | "Agent that grows with you" — persistent memory, self-evolution, multi-model routing; research-grade autonomy. |
| [different-ai/openwork](https://github.com/different-ai/openwork) | New / +915 today | Open-source Claude Cowork alternative; multi-agent collaboration UI powered by opencode. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 62,153 / — | Universal memory layer for agents; plugs into any LLM/app; solves cross-session context. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 46,442 / — | Ultra-light Python agent framework with WebUI, MCP, multi-agent workflows — **single-file deploy**. |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 72,764 / — | Minimal "agent harness" in Bash — teaching reference for building custom CLI agents from scratch. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 89,090 / — | Persistent context across sessions for *every* agent (Claude Code, Codex, Gemini, Copilot, etc.). |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | New / +378 today | Agent skill that researches across Reddit, X, YouTube, HN, Polymarket, web → grounded synthesis. |

---

### 📦 AI Applications (Vertical Solutions, End-User Apps)

| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 147,393 / — | Most polished local-first ChatGPT alternative; Ollama/OpenAI compatible, extensible tools. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 64,141 / — | "Own your intelligence" — local-first agent workspace with document chat, agents, tools. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 49,173 / — | Productivity studio: 300+ assistants, smart chat, autonomous agents, unified LLM access. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 42,036 / — | AI → native .pptx (shapes, charts, animations, narration, templates) — **not markdown slides**. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 100,674 / — | Topic/keyword → HD short video (AI workflow: script, assets, voice, edit) — creator economy automation. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 59,620 / — | Multi-market LLM stock analysis: real-time data, news, dashboard, auto-push, zero-cost scheduling. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 62,323 / — | AI job search: scans portals, scores listings (A-F rubric), tailors CV, tracks apps — runs in your CLI. |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 28,790 / — | Personal trading agent; strategy research, backtest, execution — "vibe-coded" quant. |

---

### 🧠 LLMs / Training (Models, Fine-Tuning, Evaluation)

| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 102,080 / — | Foundation of nearly all LLM training/inference; 2.6+ adds native FP8, compile improvements. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 100,184 / — | Gold-standard educational impl: GPT-2 → Llama-3 from scratch in PyTorch; step-by-step. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 60,057 / — | YOLO26/11/8 — fastest path to SOTA vision models; CLI + Python + export (ONNX, CoreML, TFLite). |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,248 / — | LLM eval platform: 100+ datasets, broad model support (Llama, Mistral, Qwen, GLM, GPT-4, Claude). |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | 51 / — | **Decoder-only LLM from scratch in pure Rust (Candle)** — no Python/PyTorch; MoE, video/doc native. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,427 / — | Course: build tiny vLLM + Qwen on Apple Silicon — systems-engineer path to inference serving. |

---

### 🔍 RAG / Knowledge (Vector DBs, Retrieval, Knowledge Graphs)

| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 86,454 / — | Leading open-source RAG engine: fuses cutting-edge RAG + agent capabilities; superior context layer. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,435 / — | Cloud-native vector DB for billion-scale ANN search; K8s-native, GPU-accelerated. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 99,163 / — | Codebase/docs/SQL/PDFs → **queryable knowledge graph** (AST parsing, deterministic, no vector store). |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 34,922 / — | **Vectorless, reasoning-based RAG** — document index that retrieves via logical reasoning, not embeddings. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 12,749 / — | RAG on everything with **97% storage savings**; fast, accurate, 100% private on personal devices. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 29,608 / — | AI memory platform: persistent long-term memory via self-hosted knowledge graph engine. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 63,431 / — | Compresses tool outputs, logs, RAG chunks → **20% fewer tokens (coding), 60-95% fewer (JSON)**. |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | 58,804 / — | Lightning-fast hybrid search (full-text + vector) — embeddings built-in, <50ms latency. |

---

## 3. Trend Signal Analysis (≈250 words)

**Agent infrastructure is the new bottleneck.** Today's trending list is dominated not by model releases but by *harnesses, memory layers, and skill ecosystems* — `openwork` (+915★), `ECC` (+804★), `last30days-skill` (+378★), `chrome-devtools-mcp` (+80★). Developers are converging on a stack: **local-first LLM (Ollama) → agent harness (ECC/openwork) → persistent memory (mem0/claude-mem/cognee) → browser/tools (browser-use/chrome-devtools-mcp) → specialized skills (last30days-skill, career-ops, vibe-trading)**. This mirrors the "unix philosophy" for agents: small, composable, CLI-native skills over monolithic apps.

**RAG is splitting into two paradigms.** Traditional vector databases (Milvus, Qdrant, Weaviate) continue scaling for enterprise, but a **vectorless/graph-native wave** is rising: `graphify` (AST→knowledge graph), `PageIndex` (reasoning-based retrieval), `LEANN` (97% compression), `cognee` (graph memory). These target *determinism, explainability, and local deployability* — critical for coding agents and regulated domains.

**Voice goes local.** Hugging Face's `speech-to-speech` (628★ day-one) packages Whisper + LLM + TTS into an offline loop. Combined with `ppt-master` (native PPTX) and `MoneyPrinterTurbo` (video), we see a **modal expansion**: agents now produce *speech, slides, video* — not just text/code.

**Finance vertical agents are a leading indicator.** Three high-star finance agents (`daily_stock_analysis`, `Vibe-Trading`, `awesome-systematic-trading` +621★ today) suggest quant research is the first domain where *autonomous multi-source synthesis + scheduled execution* delivers measurable ROI — a template for legal, medical, and market-research verticals.

**Education feeds production.** `AI-For-Beginners` (+155★), `hello-agents` (69k★), `LLMs-from-scratch` (100k★) show a tight loop: structured curricula → hands-on agent building → open-source contributions. The talent pipeline is self-reinforcing.

---

## 4. Community Hot Spots (Developer Focus)

- 🔥 **[different-ai/openwork](https://github.com/different-ai/openwork)** — Open-source "Claude Cowork" with multi-agent UI. *Why*: First credible team-collaboration interface for agents; +915★ today proves pent-up demand.
- 🔥 **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — Universal agent harness optimizer (skills, memory, security, token reduction). *Why*: Works across Claude Code, Codex, Cursor, Opencode — **the interop layer** every CLI agent user needs.
- 🔥 **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — Codebase → queryable knowledge graph via deterministic AST parsing. *Why*: Solves "RAG hallucination on code" without vectors; 99k★ validates the approach.
- 🔥 **[huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech)** — Local voice agent stack (ASR→LLM→TTS). *Why*: Privacy-first voice UX is the next frontier; HF backing ensures model freshness.
- 🔥 **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** — Official MCP server for Chrome DevTools. *Why*: Gives agents *live browser introspection* (DOM, network, console) — unlocks true web-native automation.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*