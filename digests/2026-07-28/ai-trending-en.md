# AI Open Source Trends 2026-07-28

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-28 01:57 UTC

---

# AI Open Source Trends Report — 2026-07-28

---

## 1. Today's Highlights

Today's trending list reveals a sharp pivot toward **AI agents that operate in real-world environments** — video understanding, desktop automation, financial reasoning, and persistent memory. Three of the top six AI-trending repos are agent skills (video watching, multi-source research, code review) rather than core frameworks, signaling that developers are now building *on top* of stabilized LLM infrastructure. Alibaba's open-code-review (+979★) demonstrates enterprise-grade LLM tooling reaching maturity, while Kronos (+441★) and airi (+572★) show domain-specific foundation models and companion agents gaining traction simultaneously. The common thread: **agents with sensory input (video, voice, market data) and persistent context**.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [ollama/ollama](https://github.com/ollama/ollama) | 177,032 / — | De facto standard for local LLM inference; today adds Kimi-K2.6, GLM-5.2, gpt-oss support. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 163,047 / — | Universal model hub & runtime; backbone of every other project here. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 142,720 / — | Agent engineering platform; LangGraph (+38k★) now splits orchestration from core. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 157,059 / — | Web scraping API purpose-built for RAG/agent pipelines; 2.7k★/week sustained. |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | — / +979 | Hybrid deterministic + LLM code review at Alibaba scale; OpenAI/Anthropic compatible. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 62,799 / — | Token compression proxy (20–95% savings) for coding agents; MCP server mode. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 36,321 / — | React/Angular/Slack frontend stack for agents; AG-UI protocol origin. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 27,906 / — | Terminal coding agent optimized for DeepSeek prefix-cache stability. |

### 🤖 AI Agents / Workflows
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [langgenius/dify](https://github.com/langgenius/dify) | 150,463 / — | Visual agentic workflows + RAG + model zoo; cloud/VPC/self-hosted parity. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 146,983 / — | Leading self-hosted ChatGPT-style UI; Ollama/OpenAI/API pluggable. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 234,207 / — | Agent harness optimizer (skills, instincts, memory, security) for Claude Code, Cursor, Codex. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 221,445 / — | Self-evolving agent with persistent memory; growing ecosystem of skills. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 46,308 / — | Ultra-light Python agent framework with WebUI, MCP, multi-agent workflows. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | — / +240 | Research agent skill across Reddit, X, YouTube, HN, Polymarket, web → grounded summary. |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | — / +434 | Downloads, extracts frames, transcribes, feeds to Claude — video as context. |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | — / +572 | Self-hosted Grok companion: realtime voice, Minecraft/Factorio play, multi-platform. |

### 📦 AI Applications
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 99,572 / — | One-click HD short video generation from topic/keyword; automated AI workflow. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 49,053 / — | Unified productivity studio: smart chat, 300+ assistants, autonomous agents. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 41,432 / — | Documents/topics → native .pptx with shapes, charts, animations, narration. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 59,260 / — | LLM-driven multi-market stock analysis: real-time news, dashboards, auto-push. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 61,871 / — | Local AI job search: scans portals, scores listings A-F, tailors CV, tracks apps. |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 28,098 / — | Personal trading agent with strategy backtesting and live execution hooks. |
| [Event-AHU/Medical_Image_Analysis](https://github.com/Event-AHU/Medical_Image_Analysis) | 237 / — | Foundation-model-based medical imaging pipeline; early but clinically directed. |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 71,094 / — | Open data platform for quants & AI agents; unified API for alt data, fundamentals. |

### 🧠 LLMs / Training
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 53,907 / — | Train a 64M-parameter LLM from scratch in 2 hours; educational + practical. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 99,984 / — | Step-by-step PyTorch implementation of ChatGPT-like LLM; gold-standard tutorial. |
| [The-Pocket/PocketFlow](https://github.com/The-Pocket/PocketFlow) | 11,049 / — | 100-line LLM framework where agents build agents; extreme minimalism. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,416 / — | Course: build tiny vLLM + Qwen on Apple Silicon; systems-engineer focus. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,240 / — | LLM evaluation platform: 100+ datasets, Llama3/Mistral/InternLM2/GPT-4/Qwen/GLM/Claude. |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 196,577 / — | Foundational ML framework; still core for production training pipelines. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 102,023 / — | Dominant research & production framework; dynamic graphs, strong GPU accel. |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | 316 / — | On-device LLM inference via X-bit quantization; edge deployment focus. |

### 🔍 RAG / Knowledge
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 86,175 / — | Leading open-source RAG engine fusing cutting-edge retrieval with agent capabilities. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 51,146 / — | Document agent & OCR platform; de facto standard for structured data ingestion. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,391 / — | Cloud-native vector DB for scalable ANN search; graduated LF AI project. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 33,613 / — | High-performance vector DB with hybrid filtering; Rust core, cloud managed. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 61,864 / — | Universal memory layer for agents; persistent cross-session context. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 88,762 / — | Compresses agent sessions, injects relevant context into future sessions; multi-CLI. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 97,185 / — | Codebase → queryable knowledge graph via deterministic AST parsing; no vector store. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 12,737 / — | RAG with 97% storage savings; 100% private on-device; MLsys2026 paper. |

---

## 3. Trend Signal Analysis (≈250 words)

**Explosive category: Agent skills & sensory extensions.** Today's trending list is dominated by *capabilities that give agents eyes, ears, and memory* — video understanding (claude-video), multi-source research (last30days-skill), code review (open-code-review), and persistent cross-session memory (claude-mem, mem0). These are not frameworks but **composable skills** that plug into Claude Code, Cursor, Codex, Gemini CLI. The ecosystem has standardized on a "skill" abstraction, and developers are racing to publish the highest-leverage ones.

**New stack direction: Local-first, self-hosted agent runtimes.** airi (Grok companion), nanobot, Cherry Studio, and AnythingLLM all emphasize *zero cloud dependency*, multi-platform (Web/macOS/Windows/Linux), and model-agnostic design. This aligns with Ollama's continued dominance (177k★) and the rise of on-device inference (picollm, tiny-llm, LEANN). Enterprise adoption (Alibaba's open-code-review, 979★ today) validates production readiness.

**RAG is bifurcating:** Heavy infrastructure (Milvus, Qdrant, Weaviate, pgvector) vs. **vectorless/lightweight** (LEANN 97% storage savings, PageIndex reasoning-based, Graphify AST-driven knowledge graphs). The latter targets edge/desktop where storage and latency matter.

**Financial AI specialization accelerating.** Kronos (foundation model for market language), Vibe-Trading, daily_stock_analysis, and OpenBB form a vertical stack: data → model → agent → execution. This mirrors the coding-agent vertical (Cursor → Claude Code → ECC → open-code-review) but in fintech.

**Connection to industry events:** Recent releases of Kimi-K2.6, GLM-5.2, gpt-oss, DeepSeek-V3.1 are immediately reflected in Ollama and agent runtimes. The "skill" abstraction mirrors Anthropic's MCP and OpenAI's Agents SDK — open source is implementing the same primitives faster.

---

## 4. Community Hot Spots (Developer Focus)

- **🔥 Agent skill development (ECC, claude-mem, last30days-skill, claude-video)** — Highest leverage: one skill works across Claude Code, Cursor, Codex, Gemini CLI. Low barrier, immediate distribution.
- **🔥 Local-first agent runtimes (nanobot, Cherry Studio, AnythingLLM, airi)** — Self-hosted, multi-model, persistent memory, MCP-native. Enterprise privacy requirements drive adoption.
- **🔥 Vectorless/lightweight RAG (LEANN, PageIndex, Graphify, zvec)** — 97% storage savings, on-device, no external DB. Critical

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*