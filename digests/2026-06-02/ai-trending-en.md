# AI Open Source Trends 2026-06-02

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-02 00:43 UTC

---

# AI Open-Source Trends Report — 2026-06-02

---

## 1. Today's Highlights

Today's GitHub AI trending landscape is dominated by **AI agent infrastructure and tooling**, with `microsoft/markitdown` topping the daily star surge at +3,034 — a deceptively simple signal that data preparation for LLMs (converting office documents to Markdown) remains a massive unmet need. We also see explosive growth in AI-native applications like `harry0703/MoneyPrinterTurbo` (+3,375) which packages LLMs into a one-click short-video generator, and `supermemoryai/supermemory` (+647), a blazing-fast "memory API for the AI era." The second tier of trending repos reveals a broader narrative: developers are converging on **agent harnesses**, **terminal-based coding agents**, **tool-optimized file search**, and **automated content pipelines**. Interestingly, traditional ML frameworks (TensorFlow, PyTorch) appear only in long-tail topic searches, confirming that the community's center of gravity has fully shifted from model training to agent orchestration and application-layer tooling.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Stars | Description |
|---|---|---|
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | ⭐ +3,034 today | A Python tool converting files and office documents to Markdown — powerful data prep for LLMs, showing that "last-mile" ETL for AI pipelines is now mainstream. |
| [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | ⭐ +1,486 today | An adaptive web-scraping framework scaling from a single request to full crawl — essential infrastructure for AI agents that need to ingest live web data. |
| [dmtrKovalenko/fff](https://github.com/dmtrKovalenko/fff) | ⭐ +135 today | The fastest and most accurate file-search toolkit for AI agents, Neovim, Rust, C, and NodeJS — a core retrieval primitive for agentic coding workflows. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐ 138,242 | The agent engineering platform — continues as the backbone framework for building LLM-powered applications and tool chains. |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐ 172,857 | Run LLMs locally with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, Qwen and others — the go-to local inference infrastructure for developers. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐ 81,626 | High-throughput, memory-efficient inference and serving engine — the production-grade serving stack for LLMs at scale. |

### 🤖 AI Agents / Workflows

| Project | Stars | Description |
|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐ 175,973 [topic:ai-agent] | "The agent that grows with you" — Nous Research's flagship agent framework now tops the ai-agent leaderboard. |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | ⭐ +945 today | Web/mobile UI for Hermes Agent — making powerful agent capabilities accessible to non-developer users. |
| [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | ⭐ +417 today | Official Compound Engineering plugin for Claude Code, Codex, Cursor and more — bringing structured AI coding workflows to mainstream IDEs. |
| [revfactory/harness](https://github.com/revfactory/harness) | ⭐ +524 today | A meta-skill that auto-designs domain-specific agent teams, defines specialized agents, and generates the skills they use — meta-agent infrastructure. |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐ 64,082 [topic:ai-agent] | "Bash is all you need" — a nano Claude Code–like agent harness built from scratch, now widely adopted as an educational reference. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐ 45,008 [topic:ai-agent] | Open-source super AI assistant & agent harness with planning, tool execution, memory, and knowledge growth — one-line install. |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | ⭐ +249 today | Fully automatic censorship removal for language models — a controversial but technically significant project in model freedom tooling. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐ 81,762 [topic:llm] / +299 today | Multi-agent LLM financial trading framework — AI agents applied to quantitative finance at scale. |

### 📦 AI Applications

| Project | Stars | Description |
|---|---|---|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐ +3,375 today | One-click HD short video generation using AI LLMs — today's highest daily star surge, revealing massive demand for AI-powered content creation. |
| [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | ⭐ +647 today | Memory engine and app — "The Memory API for the AI era," extremely fast and scalable. |
| [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | ⭐ +888 today | VoxCPM2: Tokenizer-free TTS for multilingual speech generation, creative voice design, and true-to-life cloning. |
| [ZhuLensen/daily_stock_analysis](https://github.com/ZhuLensen/daily_stock_analysis) | ⭐ 39,778 [topic:ai-agent] | LLM-driven A/H/US stock analysis with multi-source data, real-time news, and LLM decision dashboards — zero-cost automated finance. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐ 23,318 [topic:ai-agent] | AI generates real, editable PowerPoint from any document with native shapes and animations — a practical AI application for office productivity. |

### 🧠 LLMs / Training

| Project | Stars | Description |
|---|---|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐ 50,967 [topic:llm-model] | Train a 64M-parameter LLM from scratch in just 2 hours — the definitive "train your own LLM" hands-on project. |
| [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) | ⭐ +861 today | A straightforward method for training an LLM from downloading data to generating text — today's leading education/hobbyist LLM training tutorial. |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐ 71,769 [topic:llm] | Unified efficient fine-tuning of 100+ LLMs & VLMs — the standard open-source fine-tuning toolkit. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐ 127,306 [topic:llm] | The API to search, scrape, and interact with the web at scale — foundational data infrastructure for LLM training and retrieval. |

### 🔍 RAG / Knowledge

| Project | Stars | Description |
|---|---|---|
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐ 57,326 [topic:rag] | Universal memory layer for AI Agents — one of the most-adopted memory/RAG solutions in production. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐ 80,101 [topic:rag] | Persistent context across sessions for every agent — captures, compresses, and injects memory across Claude Code, OpenClaw, Codex, Gemini and more. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐ 44,580 [topic:rag] | High-performance, cloud-native vector database for scalable ANN search — a core RAG infrastructure component. |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | ⭐ 36,045 [topic:rag] | "Simple and Fast Retrieval-Augmented Generation" (EMNLP 2025) — a lightweight, academic-to-practical RAG approach gaining rapid adoption. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐ 17,624 [topic:vector-db] | Memory platform for AI agents in 6 lines of code — minimalistic RAG integration. |
| [memvid/memvid](https://github.com/memvid/memvid) | ⭐ 15,602 [topic:vector-db] | Serverless, single-file memory layer for AI agents — replaces complex RAG pipelines with instant retrieval and long-term memory. |

---

## 3. Trend Signal Analysis

The dominant signal today is the **rapid proliferation of agent-adjacent tooling**. While pure LLM repositories (ollama, transformers, vllm) remain in long-tail topic lists due to their massive existing star bases, they are no longer producing *daily* surge activity. Instead, the attention gradient has shifted sharply toward **tools that make agents more capable**: file search for coders (`fff`), compound engineering plugins (`compound-engineering-plugin`), meta-agent orchestration (`harness`), and persistent memory layers (`claude-mem`, `supermemory`).

A second clear signal is the rise of **"AI application templates"** — projects like `MoneyPrinterTurbo`, `daily_stock_analysis`, and `ppt-master` wrap a LLM or agent into an immediately usable vertical product. These are not research frameworks; they are deployable applications attracting non-traditional developers (content creators, retail traders, office workers) who want zero-friction AI workflows. This suggests the AI ecosystem is moving from "build your own agent" to "use this agent that works."

A third noteworthy trend is **cross-agent memory and portability**. Multiple projects today (`claude-mem`, `supermemory`, `mem0`, `cognee`, `memvid`) are competing to become the universal memory layer — persistent, compression-aware, and agent-agnostic. This is driven by the proliferation of coding agents (Claude Code, Codex, Cursor, Gemini CLI, Hermes) and the acute pain point of context loss between sessions.

Finally, the appearance of `can1357/oh-my-pi` (terminal AI coding agent with hash-anchored edits + LSP + browser + subagents) signals that **terminal-native AI coding** is becoming a distinct paradigm — not a plugin to an IDE, but a standalone shell replacement. This connects to the broader "agent-as-OS" narrative emerging in 2026.

*Notable absence*: No new model-weight or training-code releases broke into today's trending, confirming that raw model development has concentrated into well-resourced labs, while the open-source community's energy is in the application and orchestration layer.

---

## 4. Community Hot Spots

- **[microsoft/markitdown](https://github.com/microsoft/markitdown)** — +3,034 daily stars shows that reliable document-to-Markdown conversion is a critical unmet need as more teams pipe office documents into LLM chains; a "boring" tool with massive practical impact.

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) + [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui)** — The Hermes ecosystem (agent + web UI) is emerging as the community's preferred open alternative to proprietary agent platforms; its 176K stars suggest it may become the "agent framework to watch" in 2026.

- **[moneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** — Today's highest daily star surge (+3,375) for an application-level AI project; signals explosive demand for AI-generated short-form video content and suggests that consumer-facing AI apps now attract as much open-source enthusiasm as infrastructure.

- **[revfactory/harness](https://github.com/revfactory/harness)** — A meta-layer that designs agent teams and auto-generates their skills; this "agent of agents" concept is still nascent but represents a plausible next stage of agent abstraction.

- **[memvid/memvid](https://github.com/memvid/memvid) + [topoteretes/cognee](https://github.com/topoteretes/cognee)/six-liners)** — Lightweight, serverless memory/RAG layers are proliferating fast; developers should watch this space as the "agent memory problem" is solved by standardization, not scaling.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*