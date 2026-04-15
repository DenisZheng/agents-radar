# AI Open Source Trends 2026-04-04

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-04-04 00:10 UTC

---

# AI Open Source Trends Report — April 4, 2026

## Step 1: Filter Applied

Excluded from trending: `openscreen` (demo creation tool, non-AI core), `fff.nvim` (general file search), `sherlock` (OSINT tool). Retained 5 AI-relevant trending repos + 80 topic-search results.

---

## 1. Today's Highlights

**Oh My codeX** explodes with 3,047 stars—developers are racing to extend GitHub's Codex CLI with hooks, agent teams, and HUDs, signaling massive appetite for "agent harness" customization. Google's **TimesFM** time-series foundation model gains 916 stars, showing enterprise demand for specialized non-NLP foundation models. **Onyx** (1,852 stars) and **prompts.chat** (375 stars) highlight dual momentum: enterprise-ready AI platforms and grassroots prompt engineering communities. The Rust-powered **fff.nvim**—though general-purpose—reflects infrastructure performance obsession for AI agent tooling. Together, these reveal a market bifurcated between polished enterprise suites and hacker-friendly agent extensibility layers.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Stars | Why It Matters Today |
|--------|-------|----------------------|
| [ollama/ollama](https://github.com/ollama/ollama) | 167,021 | Local LLM runtime now supporting Kimi-K2.5, GLM-5, MiniMax—expanding beyond Western models for global deployment |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 75,180 | High-throughput inference engine; critical infrastructure as model serving costs dominate AI budgets |
| [dmtrKovalenko/fff.nvim](https://github.com/dmtrKovalenko/fff.nvim) | 0 (+750 today) | Rust-powered file search optimized for AI agents—sub-millisecond latency for agent context retrieval |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 132,260 | "Agent engineering platform" rebrand signals pivot from chains to autonomous agent orchestration |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 6,772 | Modular Rust LLM framework—Rust's memory safety meets AI infrastructure demands |

### 🤖 AI Agents / Workflows
| Project | Stars | Why It Matters Today |
|--------|-------|----------------------|
| [Yeachan-Heo/oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) | 0 (+3,047 today) | **Top gainer**: Codex CLI supercharger with hooks, teams, HUDs—"Oh My Zsh for AI coding" |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 183,120 | Reborn as accessible AI platform; 183K stars show sustained autonomous agent interest |
| [langgenius/dify](https://github.com/langgenius/dify) | 135,664 | "Production-ready agentic workflow"—enterprise visual builder competing with proprietary platforms |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 85,893 | Web automation for agents; critical primitive as agents need real-world tool access |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 47,864 | Educational "nano claude code" implementation—democratizing agent harness internals |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21,543 | ~400 MCP servers for AI agents—MCP (Model Context Protocol) ecosystem acceleration |
| [trycua/cua](https://github.com/trycua/cua) | 13,374 | Computer-Use Agent infrastructure: sandboxes, SDKs, benchmarks for desktop-controlling agents |

### 📦 AI Applications
| Project | Stars | Why It Matters Today |
|--------|-------|----------------------|
| [onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx) | 0 (+1,852 today) | **Enterprise AI platform**—"works with every LLM" positioning captures multi-model enterprise strategy |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 129,906 | User-friendly AI interface; 129K stars prove UX layer critical for LLM adoption |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 42,865 | 300+ assistants, unified frontier LLM access—personal AI productivity consolidation |
| [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) | 42,739 | CowAgent: "lighter than OpenClaw"—Chinese market's preferred agent deployment |
| [saturndec/waoowaoo](https://github.com/saturndec/waoowaoo) | 10,795 | Industrial AI film/video production—Hollywood-grade agent workflows for creative vertical |

### 🧠 LLMs / Training
| Project | Stars | Why It Matters Today |
|--------|-------|----------------------|
| [google-research/timesfm](https://github.com/google-research/timesfm) | 0 (+916 today) | **Google's time-series foundation model**—expanding foundation model scope beyond language |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 158,762 | Definitive model framework; multimodal expansion (vision, audio) keeps it central |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 89,916 | Educational PyTorch implementation—educational depth as competitive moat |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 45,531 | 2-hour 64M-parameter GPT training—democratizing LLM training for experimentation |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 69,468 | 100+ LLMs/VLMs unified fine-tuning—efficiency essential as model diversity explodes |

### 🔍 RAG / Knowledge
| Project | Stars | Why It Matters Today |
|--------|-------|----------------------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 77,053 | "RAG + Agent capabilities"—knowledge retrieval evolving into active agent context |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 51,888 | Universal memory layer—solving agent state persistence across sessions |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 48,273 | "Document agent and OCR platform"—RAG vendor pivot to agent-centric positioning |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 43,590 | Cloud-native vector DB; scalability as enterprise RAG default |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 44,946 | Claude Code memory plugin—agent session continuity via AI-compressed context |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 23,893 | "Vectorless, reasoning-based RAG"—challenging embedding-heavy paradigms |

---

## 3. Trend Signal Analysis

**Explosive Category: "Agent Harness" Extensibility**

Today's 3,047-star surge for [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) reveals a critical inflection: developers don't want black-box AI coding tools—they want **composable, hackable agent infrastructure**. This mirrors the 2010s DevOps transformation where "infrastructure as code" replaced proprietary tooling. The pattern repeats across [learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) (47,864 stars, educational agent harness), [everything-claude-code](https://github.com/affaan-m/everything-claude-code) (136,058 stars, performance optimization system), and [claude-mem](https://github.com/thedotmack/claude-mem) (44,946 stars, memory persistence).

**New Tech Stack Emergence: MCP (Model Context Protocol)**

[activepieces/activepieces](https://github.com/activepieces/activepieces) explicitly markets "~400 MCP servers for AI agents"—MCP, Anthropic's open protocol for model-tool integration, is becoming the "USB-C for AI agents." This standardization wave enables the [jackwener/opencli](https://github.com/jackwener/opencli) vision: "Make Any Website & Tool Your CLI" via unified AGENT.md integration.

**Industry Event Connection: GitHub Codex CLI Launch Fallout**

The timing aligns with GitHub's recent Codex CLI release. Rather than accepting GitHub's defaults, the community immediately built extension ecosystems—[oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) for customization, [ralph-claude-code](https://github.com/frankbria/ralph-claude-code) for autonomous loops, [AionUi](https://github.com/iOfficeAI/AionUi) as unified Cowork app. This mirrors VS Code's extension economy genesis.

**Vertical Specialization Signal**

[google-research/timesfm](https://github.com/google-research/timesfm) (time-series) and [waoowaoo](https://github.com/saturndec/waoowaoo) (film production) demonstrate foundation models and agent workflows penetrating **domain-specific verticals** beyond general chat—enterprise and creative industries respectively.

---

## 4. Community Hot Spots

- **[oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex)** — Highest velocity today (3,047 stars). The "Oh My Zsh for Codex" positioning suggests a new category: **shell ecosystem for AI agents**. Watch for plugin marketplace emergence.

- **[onyx](https://github.com/onyx-dot-app/onyx)** — Enterprise "works with every LLM" strategy captures multi-model procurement reality. 1,852 stars indicate strong product-market fit for vendor-agnostic AI platforms.

- **[timesfm](https://github.com/google-research/timesfm)** — Google's time-series foundation model signals **enterprise AI moving beyond chatbots** to operational forecasting. Critical for supply chain, finance, IoT applications.

- **[PageIndex](https://github.com/VectifyAI/PageIndex)** — "Vectorless, reasoning-based RAG" challenges the embedding-heavy status quo. If proven at scale, could disrupt $B vector database market with pure reasoning approaches.

- **[cua](https://github.com/trycua/cua)** + **[OpenSandbox](https://github.com/alibaba/OpenSandbox)** — Computer-Use Agent infrastructure race intensifies. Sandboxed desktop environments for agents becoming critical primitive; Alibaba's entry signals Chinese market acceleration.

---

*Report generated from GitHub trending data, April 4, 2026. Star counts reflect snapshot timing; velocity indicators prioritize today's new stars where available.*

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*