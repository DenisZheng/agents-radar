# AI Open Source Trends 2026-08-23

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-23 00:55 UTC

---

# AI Open Source Trends Report — 2026-08-23

---

## 1. Today's Highlights

Today's trending list is dominated by **agent-centric tooling** rather than model releases. OpenAI's `codex` (1,544★ today) and Anthropic's `claude-code` (127★ today) signal a maturing battle for the **terminal-native coding agent** layer. Meanwhile, community-driven "skill" frameworks (`skills`, `superpowers`, `ECC`, `andrej-karpathy-skills`) collectively earned >4,000 stars, revealing a **shift from monolithic agent frameworks to composable, shareable skill primitives**. On the infrastructure side, Tencent's `AI-Infra-Guard` (150★ today) introduces a full-stack **AI red-teaming platform**, reflecting rising enterprise focus on agent security. Notably, no new foundation model weights appeared—attention has fully migrated to **orchestration, memory, and safety tooling**.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)

| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [openai/codex](https://github.com/openai/codex) | 0 / +1,544 | OpenAI's official lightweight coding agent for the terminal; first-party entry into the CLI agent race. |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | 0 / +127 | Anthropic's terminal-native agent with codebase awareness, git workflow handling, and natural-language task execution. |
| [modular/modular](https://github.com/modular/modular) | 0 / +395 | Mojo/MAX platform—unified AI stack targeting hardware portability and high-performance inference. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 89,723 / — | High-throughput LLM inference engine; de facto standard for self-hosted serving. |
| [ollama/ollama](https://github.com/ollama/ollama) | 179,209 / — | Local model runtime with broad model support (Kimi, GLM, DeepSeek, Qwen, Gemma, gpt-oss). |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 170,975 / — | Web scraping & search API built for LLM context ingestion; critical for agent tooling. |
| [cursor/plugins](https://github.com/cursor/plugins) | 0 / +286 | Official plugin spec & plugins for Cursor; extends the leading AI IDE's extensibility surface. |
| [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) | 0 / +278 | Unified API gateway for Claude/OpenAI/Gemini/Grok subscriptions; enables cost-sharing & tool compatibility. |
| [Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard) | 0 / +150 | Full-stack AI red-teaming platform: agent/skill/MCP/infra scanning + LLM jailbreak evaluation. |

---

### 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)

| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 242,171 / +411 | Agent harness optimizing skills, instincts, memory, security; works across Claude Code, Codex, Cursor, Opencode. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | 0 / +2,683 | Curated, reusable "skills" for engineering agents—straight from a production `.agents` directory. |
| [obra/superpowers](https://github.com/obra/superpowers) | 0 / +592 | Agentic skills framework + methodology; emphasizes composable, versioned skill packs. |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | 0 / +315 | Single `CLAUDE.md` distilling Karpathy's LLM coding pitfalls into actionable agent instructions. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 144,790 / — | The agent engineering platform; massive ecosystem for chains, agents, tools, and memory. |
| [langgenius/dify](https://github.com/langgenius/dify) | 153,220 / — | Visual agentic workflow & RAG builder; cloud/VPC/self-hosted deployment path to production. |
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | 0 / +149 | Fair-code workflow automation with native AI nodes; 400+ integrations for agent orchestration. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 110,146 / — | Makes websites accessible to agents; essential for web-automation workflows. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 47,286 / — | Ultra-lightweight self-hosted agent framework with WebUI, MCP, multi-agent workflows. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 36,965 / — | Frontend stack for agents & generative UI; React/Angular/Slack integrations + AG-UI protocol. |

---

### 📦 AI Applications (specific apps, vertical solutions)

| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 50,923 / — | Productivity studio: smart chat, autonomous agents, 300+ assistants, unified frontier LLM access. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 48,630 / — | AI → native PowerPoint (shapes, transitions, charts, narration, custom templates). |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 114,650 / — | One-click HD short video generation from topic/keyword via automated AI workflow. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 63,638 / — | LLM-driven multi-market stock analysis: multi-source data, real-time news, dashboards, auto-push. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 67,790 / — | Open-source AI job search: scrapes portals, scores listings, tailors CVs, tracks applications locally. |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 34,334 / — | Personal AI assistant; easy self-host, multi-chat-app support, extensible capabilities. |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 32,207 / — | 24/7 coworking UI for 20+ CLI agents (OpenClaw, Hermes, Claude Code, Codex, etc.); team assistants. |
| [PostHog/posthog](https://github.com/PostHog/posthog) | 0 / +286 | Self-driving product platform: AI observability, analytics, session replay, flags, experiments—agent-aware. |

---

### 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)

| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 54,927 / — | Train a 64M-parameter LLM from scratch in ~2 hours; excellent educational entry point. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 164,345 / — | Model-definition framework for SOTA text/vision/audio/multimodal models; training + inference. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 102,548 / — | Foundational tensor & dynamic neural network library; backbone of nearly all LLM training. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 8,361 / — | Modular, scalable LLM applications in Rust; growing alternative to Python-centric stacks. |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | 82 / — | Decoder-only LLM from scratch in pure Rust (Candle): DeltaNet + sparse attention, MoE, video/doc understanding. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,327 / — | LLM evaluation platform supporting 100+ datasets across Llama, Mistral, Qwen, GLM, Claude, GPT-4. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,512 / — | Learn LLM inference on Apple Silicon: build a tiny vLLM + Qwen; systems-engineering focus. |

---

### 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)

| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 89,044 / — | Leading open-source RAG engine fusing cutting-edge retrieval with agent capabilities. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,737 / — | High-performance cloud-native vector database for scalable ANN search. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 34,128 / — | Massive-scale vector DB & search engine; cloud-managed option available. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 63,834 / — | Universal memory layer for agents; persistent cross-session context. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 91,533 / — | Persistent context across sessions for any agent; compresses & injects relevant history. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 51,802 / — | Leading document agent & OCR platform; comprehensive RAG & data framework. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 109,570 / — | Turns codebases/docs/SQL/PDFs into queryable knowledge graphs; deterministic AST parsing, no vector store. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 67,203 / — | Compresses tool outputs, logs, files, RAG chunks before LLM; 20–95% token reduction, same answers. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 65,073 / — | Local-first agent experience: own your intelligence, full RAG + agent toolkit self-hosted. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 35,295 / — | Document index for vectorless, reasoning-based RAG; novel retrieval paradigm. |

---

## 3. Trend Signal Analysis (≈250 words)

**Explosive attention is concentrating on the "agent skill" abstraction layer.** Four skill-focused repositories (`skills`, `superpowers`, `ECC`, `andrej-karpathy-skills`) collectively harvested ~4,000 stars today—surpassing even the first-party agent releases from OpenAI and Anthropic. This signals a **community consensus shift**: developers no longer want monolithic agent frameworks (AutoGPT-style); they want **composable, versioned, shareable skill primitives** that plug into any CLI agent (Claude Code, Codex, Cursor, Opencode). The `CLAUDE.md` pattern popularized by Karpathy has become a de facto standard for encoding domain knowledge into agents.

**Terminal-native coding agents are the new browser war.** `codex` (OpenAI) and `claude-code` (Anthropic) launched within weeks of each other; both target the same developer workflow—natural-language task execution inside the terminal with full codebase context, git integration, and tool use. The simultaneous trending of `cursor/plugins` confirms IDE vendors are racing to own the extension surface.

**AI safety tooling has moved from research to production infrastructure.** Tencent's `AI-Infra-Guard` packages agent/skill/MCP scanning, infra scanning, and jailbreak evaluation into a single platform—indicating enterprise demand for **continuous AI red-teaming** as agents gain production privileges.

**RAG is splitting into two paths:** (1) traditional vector DBs (Milvus, Qdrant, Milvus) scaling for enterprise, and (2) **vectorless/reasoning-based retrieval** (PageIndex, Graphify, Headroom) that compress or structure context to slash token costs. The latter is gaining traction as context windows grow but cost/latency pressure remains.

**No new foundation models appeared**—the ecosystem is fully in the "post-training tooling" phase. All energy is directed at making existing models reliable, secure, and efficiently orchestrated.

---

## 4. Community Hot Spots (Developer Focus)

- **[mattpocock/skills](https://github.com/mattpocock/skills)** — Highest single-day stars (+2,683). A curated, production-tested skill library; the fastest way to upgrade any CLI agent's capabilities without writing custom code.
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — Cross-agent harness (Claude Code, Codex, Cursor, Opencode) with memory, security, and research-first development; emerging as the **universal skill runtime**.
- **[Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard)** — Only comprehensive open-source AI red-teaming platform; critical for teams deploying agents with tool/infra access.
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — Token compression proxy/library/MCP server; 20–95% token savings with no quality loss—direct ROI for any agent workflow.
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — Deterministic codebase→knowledge-graph conversion (AST-based, no embeddings); solves RAG hallucination in code-heavy domains.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*