# AI Open Source Trends 2026-07-14

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-14 01:20 UTC

---

**AI Open Source Trends Report — 2026-07-14**

---

## 1. Today's Highlights

The AI open-source ecosystem today is dominated by a surge in **agent-centric infrastructure and skill-based tooling**, with projects like `Graphify-Labs/graphify` and `Shubhamsaboo/awesome-llm-apps` gaining over 1,000 stars each by enabling developers to build knowledge graphs and RAG apps directly within their existing AI coding CLIs. Notably, **two distinct trend lines** are converging: (1) a growing number of "AI Skills" repositories that augment tools like Claude Code and Cursor with domain-specific capabilities (CRO, SEO, marketing), and (2) a parallel explosion in **persistent memory and knowledge graph layers** for agents, exemplified by `mem0ai/mem0` and `Graphify-Labs/graphify`. Meanwhile, the `moeru-ai/airi` project (Grok companion with voice chat and game-playing) signals continued interest in **entertainment-focused, self-hosted AI agents**.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — ⭐84,740 total, +1,095 today  
  AI coding assistant skill that turns any code, docs, or media into a queryable knowledge graph — works with Claude Code, Cursor, and more. Today’s star surge reflects demand for **universal context injection** into coding agents.

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — ⭐150,436 total  
  The leading API for web search and scraping designed for AI agents. Continues to be the backbone for many RAG and agent pipelines.

- **[ollama/ollama](https://github.com/ollama/ollama)** — ⭐176,063 total  
  Local LLM runner now supports Kimi-K2.6, GLM-5.1, and others. The **go-to self-hosted inference engine** for developers.

- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** — ⭐48,521 total  
  AI productivity studio with 300+ assistants and unified access to frontier LLMs.

### 🤖 AI Agents / Workflows
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — ⭐214,281 total  
  *“The agent that grows with you”* — a personal AI agent framework gaining massive traction. Indicative of the **shift toward adaptive, memory-capable agents**.

- **[HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)** — +1,153 today (new)  
  Personal trading agent built on LLMs. Fresh entry today, reflecting **vertical agent applications in finance**.

- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** — ⭐55,788 total  
  Gives agents read/search access to Twitter, Reddit, YouTube, GitHub — zero API fees. **Key infrastructure for social-aware agents**.

- **[Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents)** — ⭐6,036 total  
  Building AI agents, atomically — modular agent construction gaining early community attention.

### 📦 AI Applications
- **[OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut)** — +1,229 today (new)  
  Open-source CapCut alternative. While not directly AI, its **explosive growth signals demand for AI-augmented video editing**.

- **[moeru-ai/airi](https://github.com/moeru-ai/airi)** — +78 today (new)  
  Self-hosted Grok companion with realtime voice chat, Minecraft & Factorio playing. **AI entertainment agent** gaining a cult following.

- **[github/spec-kit](https://github.com/github/spec-kit)** — +543 today (new)  
  GitHub’s toolkit for Spec-Driven Development — likely **integrating AI into API design workflows**.

- **[coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)** — +299 today (new)  
  Marketing skills (CRO, copywriting, SEO) for Claude Code and AI agents. **Niche vertical skill packs** are a new pattern.

### 🧠 LLMs / Training
- **[huggingface/transformers](https://github.com/huggingface/transformers)** — ⭐162,573 total  
  The foundational model framework, now supporting text/vision/audio/multimodal models.

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** — ⭐99,036 total  
  Step-by-step PyTorch implementation of ChatGPT. **Educational LLM training** remains evergreen.

- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** — ⭐86,165 total  
  High-throughput LLM inference engine. **Critical for production deployment** of open models.

- **[galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining)** — ⭐285 total (emergent)  
  New library for pretraining foundation and world models. **Early-stage but signals renewed interest in training stack**.

### 🔍 RAG / Knowledge
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — ⭐60,755 total  
  Universal memory layer for AI agents. **Persistent context across sessions** is the hottest RAG direction.

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — ⭐84,971 total  
  Leading open-source RAG engine with agent capabilities. **Production-grade document intelligence**.

- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** — ⭐27,778 total  
  AI memory platform with self-hosted knowledge graphs. **Alternative to mem0** with graph focus.

- **[HKUDS/LightRAG](https://github.com/HKUDS/LightRAG)** — ⭐37,637 total  
  Simple and fast RAG from the HKUDS group. **Academic-to-community bridge** for RAG research.

---

## 3. Trend Signal Analysis

### Explosive Growth in Agent Skill Ecosystems
The most striking signal today is the **emergence of "AI Skills" as a distinct category**, where developers package domain expertise (marketing, trading, design) as skill repositories that plug directly into agent CLIs like Claude Code, Cursor, and Codex. Projects like `coreyhaines31/marketingskills` and `Graphify-Labs/graphify` are not just frameworks — they are **curated skill packs** that lower the barrier for non-developers to use AI agents productively. This is a shift from building agents *from scratch* to **composing agents from pre-built skills**.

### Memory & Knowledge Graphs Go Mainstream
Today’s data shows **mem0 (⭐60k) and Graphify (⭐84k) as the two dominant memory-layer projects**, both gaining stars rapidly. The community is moving beyond simple RAG (top-k vector search) toward **knowledge graphs with reasoning and persistent state across sessions**. The rise of `thedotmack/claude-mem` (⭐87k) — a tool that captures and compresses agent session history — confirms that **long-term agent memory is now table stakes**.

### New Directions: AI Trading Agents and Anti-AI Design
`HKUDS/Vibe-Trading` (+1,153 today) and `Nutlope/hallmark` (+794 today) represent two opposing but equally notable trends. *Vibe-Trading* suggests **LLM-powered financial agents are entering the open-source mainstream**, while *Hallmark* (marketed as "Anti-AI-slop design skill") indicates a **counter-movement focused on human-quality output** — developers want agents that generate *good* code/design, not just *any* code.

### Connection to Recent LLM Releases
The ollama repo now mentions support for Kimi-K2.6 and GLM-5.1, and the `system_prompts_leaks` repo (⭐57k) extracts prompts from Claude Fable 5, GPT-5.6, and Gemini 3.5 — confirming that **frontier models (Claude 5, GPT-5.6) are actively being reverse-engineered** by the developer community. The surge in agent memory tools directly responds to these models' context window limitations.

---

## 4. Community Hot Spots

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — Convert anything into a queryable knowledge graph. **The top trending AI project today**; watch for integration with major IDEs.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Universal memory layer for agents. **Essential for any multi-session agent**; likely to be adopted by LangChain and Dify.
- **[moeru-ai/airi](https://github.com/moeru-ai/airi)** — Self-hosted AI companion with game-playing capability. **Signals a growing market for entertainment AI** that runs locally.
- **[coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)** — Packaged marketing expertise for agents. **First mover in the "Agent Skill Store" paradigm**.
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — Persistent context compression across sessions. **Addresses the #1 pain point of agent developers** — context loss.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*