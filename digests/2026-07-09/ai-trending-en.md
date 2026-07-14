# AI Open Source Trends 2026-07-09

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-09 01:50 UTC

---

# AI Open Source Trends Report — 2026-07-09

## 1. Today's Highlights

The open-source AI ecosystem is experiencing an explosive shift toward **agent-centric infrastructure**, with multiple projects gaining 1,000+ stars in a single day. The standout theme is **"skills for agents"** — repositories like `addyosmani/agent-skills`, `obra/superpowers`, and `mvanhorn/last30days-skill` are turning AI coding assistants into extensible platforms with reusable capabilities. Meanwhile, the surge of `asgeirtj/system_prompts_leaks` (+1,218 today) signals intense community interest in reverse-engineering the system prompts of frontier models (Claude Opus 4.8, GPT-5.5, Gemini 3.5 Pro). Tencent Cloud's simultaneous launch of two infrastructure projects — `TencentDB-Agent-Memory` (long-term memory) and `CubeSandbox` (secure sandboxing) — points to enterprise-grade agent infrastructure maturing rapidly. The appetite for **in-process vector databases** (Alibaba's `zvec`) and **multimodal agent capabilities** (Claude video watching, WiFi-based spatial sensing) rounds out a day where the community is clearly building the scaffolding for autonomous AI systems.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)

- **[TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox)** — ⭐0 (+564 today) | Rust  
  Instant, concurrent, secure & lightweight sandbox container for AI agents — addresses the critical runtime isolation need.

- **[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)** — ⭐0 (+1,717 today) | C#  
  First Office suite purpose-built for AI agents: read, edit, and automate Word/Excel/PowerPoint natively with a single binary, no Office installation required.

- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** — ⭐85,737 | Python  
  High-throughput LLM inference engine — remains the backbone for production serving of open-weight models.

- **[ollama/ollama](https://github.com/ollama/ollama)** — ⭐175,756 | Go  
  Run frontier open models locally (Kimi-K2.6, GLM-5.1, DeepSeek, Qwen) — the de facto local LLM runtime.

- **[alibaba/zvec](https://github.com/alibaba/zvec)** — ⭐0 (+395 today), total ⭐14,430 | C++  
  Lightweight, lightning-fast in-process vector database — designed for embedded AI applications needing low-latency similarity search.

- **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** — ⭐0 (+1,218 today), total ⭐54,241 | JavaScript  
  Curated, regularly updated collection of extracted system prompts from Claude, GPT-5.5, Gemini, Grok, Cursor, and more — essential reference for prompt engineering.

---

### 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — ⭐0 (+1,297 today) | JavaScript  
  Production-grade engineering skills (code review, debugging, refactoring) for AI coding agents — a standardized skill pack by a Chrome engineering leader.

- **[obra/superpowers](https://github.com/obra/superpowers)** — ⭐0 (+1,116 today) | Shell  
  Agentic skills framework with an accompanying software development methodology — operationalizes how agents should be guided through complex engineering tasks.

- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** — ⭐0 (+352 today) | Python  
  AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket — then synthesizes a grounded summary grounded in recency.

- **[wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP)** — ⭐0 (+28 today) | TypeScript  
  MCP server giving Claude terminal control, file system search, and diff-aware file editing — bridges the gap between IDE agents and full machine access.

- **[bradautomates/claude-video](https://github.com/bradautomates/claude-video)** — ⭐0 (+951 today) | Python  
  Extends Claude with video understanding: downloads, extracts frames, transcribes audio, and feeds everything to the model — multimodal agent capability.

- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** — ⭐185,435 | Python  
  The foundational autonomous agent platform — continues evolving as the vision of accessible AI for everyone.

- **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** — ⭐80,050 | Python  
  AI-driven software development platform — lets agents plan and execute complex coding workflows autonomously.

- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** — ⭐91,883 | Python  
  Multi-agent LLM financial trading framework — specialized vertical for finance with agent collaboration patterns.

---

### 📦 AI Applications (specific apps, vertical solutions)

- **[ruvnet/RuView](https://github.com/ruvnet/RuView)** — ⭐0 (+799 today) | Rust  
  Transforms commodity WiFi signals into real-time spatial intelligence and vital sign monitoring — zero-video passive sensing for healthcare and smart spaces.

- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** — ⭐48,323 | TypeScript  
  AI productivity studio with smart chat, autonomous agents, and 300+ assistant presets — unified frontend for multiple LLMs.

- **[santifer/career-ops](https://github.com/santifer/career-ops)** — ⭐59,198 | JavaScript  
  Open-source AI job search assistant: scan portals, score listings A-F, tailor CV, track applications — runs locally in Claude Code/Gemini/Codex.

- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** — ⭐37,774 | Python  
  AI generates editable PowerPoint from any document with native shapes, animations, charts, and audio narration — eliminates manual slide building.

---

### 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — ⭐211,616 | Python  
  The agent that grows with you — a continuously improving personal AI companion built on open models.

- **[galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining)** — ⭐281 | Python  
  Reliable, minimal library for pretraining foundation and world models — addresses reproducibility in large-scale training.

- **[testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io)** — ⭐107 | HTML  
  Comprehensive survey on test-time scaling in LLMs — covers what, how, where, and how well test-time compute improves reasoning.

---

### 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)

- **[TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)** — ⭐0 (+318 today) | TypeScript  
  Fully local long-term memory for AI Agents via 4-tier progressive pipeline — zero external API dependencies for persistent agent memory.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — ⭐60,426 | Python  
  Universal memory layer for AI Agents — enables persistent context across sessions with compression and relevance injection.

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — ⭐84,623 | Go  
  Leading open-source RAG engine combining retrieval-augmented generation with agent capabilities for a superior context layer.

- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** — ⭐45,139 | Go  
  High-performance cloud-native vector database for scalable ANN search — standard infrastructure for production RAG systems.

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — ⭐80,496 | Python  
  AI coding assistant skill that turns code, schemas, docs, images, or videos into queryable knowledge graphs — multi-modal RAG.

- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — ⭐57,909 | Python  
  Compresses tool outputs, logs, files, and RAG chunks before they reach the LLM — achieves 60-95% fewer tokens while preserving answer quality.

- **[alibaba/zvec](https://github.com/alibaba/zvec)** — ⭐14,430 | C++  
  Lightweight in-process vector database with sub-millisecond query latency — ideal for embedded and edge RAG scenarios.

---

## 3. Trend Signal Analysis

### Explosive Community Attention: "Agent Skills" as a New Software Category

The most powerful signal today is the emergence of **agent skills as a distinct open-source category**. `addyosmani/agent-skills` (+1,297 stars), `obra/superpowers` (+1,116), and `mvanhorn/last30days-skill` (+352) represent a paradigm shift: instead of building monolithic agents, the community is creating **composable, reusable capability modules** that plug into existing coding agent CLIs (Claude Code, Codex, Gemini CLI, OpenCode). This mirrors the Unix philosophy of small, focused tools — but for AI agents.

### First-Time Directions Appearing

1. **WiFi-based spatial intelligence** — `ruvnet/RuView` uses commodity WiFi signals for passive sensing (presence detection, vital signs) with zero cameras. This brings AI into physical space sensing without privacy-invasive video.

2. **Agent-native office automation** — `iOfficeAI/OfficeCLI` (1,717 stars today) creates a purpose-built office suite for agents rather than wrapping existing tools. This is a "build for AI, not retrofit" approach.

3. **System prompt archaeology** — `asgeirtj/system_prompts_leaks` with 54,241 total stars has become an essential reference, indicating the community is reverse-engineering prompt engineering at the frontier model level.

### Connection to Industry Events

The simultaneous release of `TencentDB-Agent-Memory` and `CubeSandbox` by Tencent Cloud suggests enterprise cloud providers are now shipping **agent infrastructure as a product** — long-term memory, sandboxing, and secure execution environments. This aligns with the broader trend of moving agents from experimental prototypes to production-ready systems. The prevalence of "Sky" models in ollama's description (Kimi-K2.6, GLM-5.1, etc.) reflects the ongoing diversification beyond GPT and Claude in the open-weight ecosystem.

---

## 4. Community Hot Spots

- **🔧 `addyosmani/agent-skills`** — A Chrome engineering leader's standardized skill pack for coding agents signals the professionalization of agent tooling. Expect this pattern to become the npm/GitHub of agent capabilities.

- **📦 `iOfficeAI/OfficeCLI`** — 1,717 stars in one day for an agent-native office suite. The community recognizes that agents need purpose-built tools, not API wrappers around human-centric software.

- **🔍 `asgeirtj/system_prompts_leaks`** — 54,241 stars and growing. As frontier models guard their system prompts, this community-driven transparency effort is becoming the de facto reference for understanding model behavior and constraints.

- **🧠 `bradautomates/claude-video`** — +951 stars for giving Claude video understanding capabilities. Multimodal agents (video, audio, spatial) are the next frontier after text-only coding assistants.

- **🔧 `TencentCloud/CubeSandbox` + `TencentCloud/TencentDB-Agent-Memory`** — Enterprise cloud providers shipping agent infrastructure as open-source. The agent stack (runtime → memory → sandbox → skills) is being standardized by major players. Developers should watch for production-grade patterns here.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*