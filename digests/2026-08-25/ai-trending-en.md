# AI Open Source Trends 2026-08-25

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-25 00:54 UTC

---

# AI Open Source Trends Report — 2026-08-25

---

## 1. Today's Highlights

**OpenAI's `codex` dominates today's trending** with +1,994 stars, signaling strong developer appetite for lightweight, terminal-native coding agents. A cluster of **Claude Code ecosystem projects** surged simultaneously — `free-claude-code` (+891), `andrej-karpathy-skills` (+588), `claude-plugins-community` (+489), `claude-obsidian` (+310) — reflecting a maturing plugin/skill layer around Anthropic's CLI agent. **Apache Maka** entered incubation as a local-first AI agent workspace with append-only event logging, a novel architecture for auditability. **`freellmapi`** and **`awesome-gpt-image-2`** (+2,449) highlight demand for unified free-tier LLM access and industrial-grade prompt engineering for image models. **`openhuman`** (+515) and **`hermes-agent`** (+896) push the "personal AI with persistent memory" narrative forward.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [openai/codex](https://github.com/openai/codex) | 0 / +1,994 | OpenAI's official lightweight coding agent; Rust-based, terminal-first, zero-config — sets the bar for CLI-native dev agents. |
| [apache/maka](https://github.com/apache/maka) | 0 / +411 | Incubating local-first agent workspace; models every interaction as an append-only log (messages, tool calls, permissions) — novel for reproducibility & audit. |
| [ollama/ollama](https://github.com/ollama/ollama) | 179,352 / — | De facto standard for local LLM inference; today supports Kimi-K2.6, GLM-5.2, gpt-oss — critical infrastructure for air-gapped/privacy workloads. |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 40,373 / — | Stateful, cyclic agent orchestration; becoming the default runtime for multi-step agent workflows in production. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 37,019 / — | Frontend stack for agents (React, Slack, mobile); introduces AG-UI protocol for standardized agent↔UI communication. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 67,415 / — | Token compression proxy (20–95% savings) for coding agents — directly reduces inference cost/latency. |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | 542 / — | Universal LLM gateway: single OpenAI-compatible endpoint, multi-provider load balancing, key encryption. |

### 🤖 AI Agents / Workflows
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 235,804 / +896 | "Agent that grows with you" — persistent memory, self-evolution, multi-model; flagship of the local-first agent movement. |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 0 / +515 | Personal super-intelligence: local life memory, agent fleet orchestration, deep research — ambitious scope, Rust core. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 110,370 / — | Makes any website accessible to agents; foundational for web automation, scraping, and agentic browsing. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 47,353 / — | Ultra-light Python agent framework with WebUI, MCP, multi-agent workflows — great for self-hosted personal agents. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 242,934 / — | Agent harness optimizer: skills, instincts, memory, security for Claude Code, Codex, Cursor — meta-layer for agent performance. |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 100,699 / — | "Caveman" skill cuts 65% tokens for Claude Code — extreme prompt compression via terse communication. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 68,154 / — | End-to-end AI job search: portal scanning, structured evaluation, CV tailoring, application tracking — vertical agent workflow. |

### 📦 AI Applications
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | 0 / +2,449 | Industrial prompt engine for GPT-Image-2: 530+ reverse-engineered cases, 20+ templates, skill taxonomy — prompt engineering as code. |
| [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) | 0 / +174 | 7.4B tokens/mo across 34 providers, 635 endpoints, single `/v1` endpoint — solves "free tier fragmentation" for experimentation. |
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | 0 / +891 | Unified free access to Claude Code, Codex, Pi, OpenCode (1.3B+ tokens); voice-supported, ToS-friendly — democratizes agent access. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 49,038 / — | Generates native .pptx with shapes, animations, charts, narration — not just markdown slides; production-ready deck automation. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 115,964 / — | One-click HD short video generation from topic/keyword — full AI pipeline (script, voice, edit, render) for content creators. |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 0 / +310 | Self-organizing AI second brain: drops sources → Claude builds linked Markdown knowledge graph — open-source Notion alternative. |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 0 / +602 | 1,000+ curated agent skills compatible with Claude Code, Codex, Gemini CLI, Cursor — skill marketplace emerging. |

### 🧠 LLMs / Training
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 54,972 / — | Train a 64M-param LLM from scratch in 2h — educational gold standard for LLM internals. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 103,683 / — | Step-by-step PyTorch implementation of ChatGPT-like LLM — most starred from-scratch LLM tutorial. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 8,391 / — | Modular, scalable LLM apps in Rust — type-safe, composable, gaining traction for production LLM services. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,333 / — | Comprehensive LLM evaluation platform: 100+ datasets, supports Llama3, Mistral, Qwen, GPT-4, Claude — standardizing benchmarks. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,515 / — | Build a tiny vLLM + Qwen on Apple Silicon — systems-focused LLM inference for engineers. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 60,925 / — | YOLO26/11/v8 — dominant for real-time vision tasks (detection, segmentation, pose, tracking). |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 164,403 / — | Foundational model hub & framework; continues to define how models are loaded, fine-tuned, served. |

### 🔍 RAG / Knowledge
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 149,807 / — | Most polished self-hosted AI chat UI; supports Ollama, OpenAI API, RAG, tools — de facto frontend for local LLMs. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 89,166 / — | Leading open-source RAG engine fusing agent capabilities; enterprise-grade, supports complex document parsing. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 63,966 / — | Universal memory layer for agents — persistent, cross-session, model-agnostic; solves long-term context. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 34,168 / — | High-performance Rust vector DB; cloud-native, massive scale — production default for vector search. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 110,134 / — | Codebase → queryable knowledge graph via deterministic AST parsing (no vector store); `/graphify` skill for major CLIs. |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 39,146 / — | EMNLP 2025: simple, fast RAG — minimal dependencies, graph + vector hybrid, gaining academic adoption. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 91,726 / — | Persistent context across sessions for *any* agent (Claude Code, Codex, Gemini, etc.); compresses & injects relevant history. |

---

## 3. Trend Signal Analysis

**Terminal-native coding agents are the breakout category.** OpenAI's `codex` (+1,994★ today) and the Claude Code skill/plugin ecosystem (`free-claude-code`, `andrej-karpathy-skills`, `claude-plugins-community`, `awesome-agent-skills`) collectively signal a shift: developers want *local, CLI-first agents* that integrate into existing workflows (tmux, vim, IDE terminals) rather than web UIs. The **append-only event log architecture** (Apache Maka) introduces a new primitive for agent observability and replay — critical for enterprise adoption. **Unified free-tier LLM access** (`freellmapi`, `free-claude-code`) addresses token-cost anxiety, enabling mass experimentation. **Prompt engineering is industrializing**: `awesome-gpt-image-2`'s 530+ reverse-engineered cases and skill taxonomy treat prompts as versioned, testable code. **Persistent cross-agent memory** (`mem0`, `claude-mem`, `openhuman`, `hermes-agent`) is converging on a standard "memory layer" abstraction. Finally, **Rust is solidifying as the systems language for AI infra** (codex, qdrant, lancedb, databend, openhuman, rig, OpenLogi) — performance + safety for inference serving and agent runtimes.

---

## 4. Community Hot Spots

- **`openai/codex`** — Official OpenAI entry into terminal agents; watch for plugin API, multi-file edits, and enterprise features. Sets the competitive baseline.
- **`apache/maka`** — First Apache-incubated AI agent workspace; its event-sourced architecture could become the standard for auditable agent runtimes.
- **`mem0ai/mem0` + `thedotmack/claude-mem`** — Converging on a universal memory protocol; whichever wins developer mindshare becomes the "SQLite of agent memory."
- **`freestylefly/awesome-gpt-image-2`** — Prompt engineering as a disciplined, template-driven practice; expect similar repos for video (Sora, Veo) and audio models.
- **`graphify-labs/graphify`** — Vector-less, AST-based code knowledge graphs; if it delivers on "no hallucination" code QA, it disrupts the RAG-for-code niche.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*