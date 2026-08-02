# AI Open Source Trends 2026-08-02

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-02 02:07 UTC

---

# AI Open Source Trends Report — 2026-08-02

---

## 1. Today's Highlights

- **Agent memory infrastructure** is surging: Tencent's `TencentDB-Agent-Memory` (+227★) and `mem0` (62k★) signal a shift from stateless chat to persistent, shareable agent memory layers.
- **Voice-first AI** dominates today's trending: Hugging Face's `speech-to-speech` (+442★) and `voice-pro` (+58★) show local, open voice agents gaining traction over cloud APIs.
- **Microsoft doubles down on AI education** — both `AI-For-Beginners` (+949★) and `generative-ai-for-beginners` (+108★) trend simultaneously, reflecting enterprise onboarding demand.
- **Long-horizon autonomous agents** emerge as a distinct category: ByteDance's `deer-flow` (+209★) and `HKUDS/nanobot` (46k★) combine sandboxes, memory, and multi-agent orchestration for hour-scale tasks.
- **3D generation goes native**: Microsoft's `TRELLIS.2` (+107★) introduces structured latents for compact 3D assets, extending GenAI beyond 2D.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [github/copilot-sdk](https://github.com/github/copilot-sdk) | 0 / +142 | Multi-platform SDK to embed GitHub Copilot Agent into any app — first-party agent integration layer. |
| [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | 0 / +442 | Local voice agent stack (ASR + LLM + TTS) using open models; runs fully offline. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 87,883 / — | High-throughput LLM inference engine; de facto standard for self-hosted serving. |
| [ollama/ollama](https://github.com/ollama/ollama) | 177,527 / — | One-command local model runtime; now supports Kimi-K2.6, GLM-5.2, gpt-oss. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 143,185 / — | Agent engineering platform; core framework for composable LLM apps. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 159,121 / — | Web scraping API built for agents; handles JS rendering, auth, scale. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 107,525 / — | Browser automation for agents; makes any website an API. |

### 🤖 AI Agents / Workflows
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 0 / +209 | Long-horizon SuperAgent: sandboxes, memory, sub-agents, message gateway for hour-scale tasks. |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 0 / +227 | Team-level memory hub: Chat Memory, Skills, LLM-Wiki, Code-Graph — governed & shared across agents. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 62,279 / — | Universal memory layer for agents; persistent, cross-session, framework-agnostic. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 46,502 / — | Ultra-light self-hosted agent framework: WebUI, tools, MCP, multi-agent workflows in pure Python. |
| [langgenius/dify](https://github.com/langgenius/dify) | 151,015 / — | Visual agentic workflow builder + RAG + collaborative workspace; cloud/VPC/self-hosted. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 223,857 / — | "Agent that grows with you" — persistent learning agent with evolving personality. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 36,400 / — | Frontend stack for agents & generative UI; React/Angular/Mobile/Slack; AG-UI protocol. |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,091 / — | Visual drag-and-drop agent builder; low-code for LLM flows. |

### 📦 AI Applications
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [abus-aikorea/voice-pro](https://github.com/abus-aikorea/voice-pro) | 0 / +58 | Gradio WebUI: Edge-TTS, kokoro, zero-shot voice cloning (F5-TTS, CosyVoice), Whisper, Demucs, translation. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 42,398 / — | AI → native .pptx: shapes, animations, charts, speaker-note audio, custom templates. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 101,019 / — | Topic → HD short video via automated AI workflow; viral content pipeline. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 59,785 / — | LLM-driven multi-market stock analysis: real-time data, news, dashboard, auto-push, zero-cost scheduling. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 62,479 / — | Local AI job search: scrapes portals, scores listings, tailors CV, tracks apps — runs in your CLI. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 49,252 / — | Productivity studio: smart chat, autonomous agents, 300+ assistants, unified frontier LLM access. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 147,550 / — | User-friendly local-first AI interface; Ollama, OpenAI API, RAG, tools. |

### 🧠 LLMs / Training
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [microsoft/TRELLIS.2](https://github.com/microsoft/TRELLIS.2) | 0 / +107 | Native structured latents for compact 3D generation; extends GenAI to 3D assets. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 100,316 / — | Step-by-step PyTorch implementation of a ChatGPT-like LLM; definitive educational resource. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 163,230 / — | Model-definition framework for SOTA text/vision/audio/multimodal models. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 102,113 / — | Core tensor + autograd engine; foundation for nearly all LLM training. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 60,112 / — | YOLO26/11/v8: unified object detection, segmentation, pose, tracking, classification. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 87,883 / — | High-throughput inference/serving; PagedAttention, continuous batching, quantization. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 8,127 / — | Modular, scalable LLM apps in Rust; type-safe, actor-based, WASM-friendly. |

### 🔍 RAG / Knowledge
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 86,575 / — | Leading open-source RAG engine: fuses cutting-edge retrieval with agent capabilities. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,457 / — | Cloud-native vector DB for scalable ANN search; enterprise-grade, distributed. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 33,712 / — | High-performance vector DB + search engine; Rust core, cloud-managed option. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 100,299 / — | Codebase → queryable knowledge graph via deterministic AST parsing; no vector store needed. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 51,282 / — | Document agent + OCR platform; leading framework for RAG over unstructured data. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 29,678 / — | AI memory platform: self-hosted knowledge graph for persistent agent memory. |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | 58,819 / — | Lightning-fast hybrid search (vector + keyword); AI-powered relevance tuning. |

---

## 3. Trend Signal Analysis

**Explosive attention: Agent memory & persistence.** Three distinct memory-layer projects trend today — `TencentDB-Agent-Memory` (+227★), `mem0` (62k★), `cognee` (29k★) — plus `thedotmack/claude-mem` (89k★). The pattern is clear: developers are moving beyond stateless chat to **governed, shareable, cross-agent memory** (chat history, skills, wikis, code graphs). This mirrors the enterprise shift from "prompt engineering" to "context engineering."

**Voice agents go local-first.** `speech-to-speech` (+442★) and `voice-pro` (+58★) both emphasize **fully offline, open-model voice stacks** (ASR → LLM → TTS). This aligns with recent open-weight audio model releases (Kyutai Moshi, OpenAI gpt-4o-audio-preview distillation) and privacy-sensitive enterprise demand. The Gradio WebUI pattern (`voice-pro`) lowers the barrier to "voice agent in a box."

**Long-horizon autonomous agents differentiate from chat agents.** `deer-flow` (+209★), `nanobot` (46k★), `hermes-agent` (223k★) share a new architecture: **sandbox execution + persistent memory + sub-agent delegation + tool/skill registry**. These target tasks taking minutes to hours (research, coding, data analysis), not seconds. ByteDance's entry signals big-tech investment in this paradigm.

**3D generation matures.** `TRELLIS.2` introduces **structured latents** — a technical leap over NeRF/GSplat — enabling compact, editable 3D assets. This follows the 2D→video→3D progression and positions Microsoft for spatial computing pipelines.

**Education at scale.** Two Microsoft beginner courses trending simultaneously (+949★, +108★) reveals a **workforce upskilling wave**: enterprises need thousands of engineers fluent in GenAI basics, not just researchers.

---

## 4. Community Hot Spots

- **`TencentDB-Agent-Memory`** — First major-cloud-vendor open-source **agent memory hub** with four asset types (Chat, Skill, Wiki, Code-Graph) and governance. Watch for framework integrations (LangChain, AutoGen, CrewAI).
- **`huggingface/speech-to-speech`** — Reference implementation for **local voice agents**; will become the default stack for privacy-first voice apps. Expect model swaps (Whisper → Distil-Whisper, Llama → SmolLM) soon.
- **`bytedance/deer-flow`** — **SuperAgent architecture** with sandbox + memory gateway; the most complete open implementation of "agent that works for hours." Track sub-agent delegation patterns.
- **`Graphify-Labs/graphify`** — **Vectorless RAG via AST knowledge graphs**; 100k★ proves developers want deterministic, explainable code retrieval over opaque embeddings. Could redefine code-aware agents.
- **`microsoft/TRELLIS.2`** — **Structured 3D latents**; if adoption follows 2D diffusion trajectory, this becomes the Stable Diffusion moment for 3D. Watch for ComfyUI nodes, ControlNet ports, and asset pipeline integrations.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*