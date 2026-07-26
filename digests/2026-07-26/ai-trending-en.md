# AI Open Source Trends 2026-07-26

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-26 02:08 UTC

---

The user wants me to analyze GitHub trending data for AI-related projects and produce a structured report. Let me go through the data carefully.

First, I need to filter the trending list (18 repos) for AI relevance, and also analyze the AI topic search results (80 repos, deduplicated).

Let me identify AI-related projects from the trending list:

1. **block/buzz** - "A hive mind communication platform" - unclear if AI, might be communication tool
2. **alibaba/open-code-review** - "Hybrid architecture code review tool: deterministic pipelines + LLM Agent" - YES, AI code review
3. **citrolabs/ego-lite** - "The fastest browser for AI agents to run web automation" - YES, AI agent browser
4. **ComposioHQ/awesome-claude-skills** - "curated list of awesome Claude Skills" - YES, AI agent skills
5. **anthropics/claude-cookbooks** - "notebooks/recipes showcasing... using Claude" - YES, AI/LLM
6. **Automattic/harper** - "Offline, privacy-first grammar checker" - maybe AI-powered but not explicitly
7. **shiyu-coder/Kronos** - "A Foundation Model for the Language of Financial Markets" - YES, AI/ML model
8. **obra/superpowers** - "An agentic skills framework & software development methodology" - YES, AI agents
9. **Pumpkin-MC/Pumpkin** - Minecraft server - NO
10. **permissionlesstech/bitchat** - Bluetooth mesh chat - NO
11. **mattpocock/skills** - "Skills for Real Engineers. Straight from my .agents directory" - YES, AI agent skills
12. **palmier-io/palmier-pro** - "macOS video editor built for AI" - YES, AI application
13. **CoreBunch/Instatic** - "Agentic self-hosted visual CMS" - YES, AI agent CMS
14. **Lordog/dive-into-llms** - "《动手学大模型Dive into LLMs》系列编程实践教程" - YES, LLM education
15. **RyanCodrai/turbovec** - "A vector index built on TurboQuant, written in Rust with Python bindings" - YES, vector DB/AI infra
16. **OtterMind/Chat2DB** - "AI-driven database tool and SQL client" - YES, AI application
17. **andrewyng/aisuite** - "Simple, unified interface to multiple Generative AI providers" - YES, AI infra
18. **affaan-m/ECC** - "The agent harness performance optimization system. Skills, instincts, memory, security..." - YES, AI agent framework

So from trending, AI-related: alibaba/open-code-review, citrolabs/ego-lite, ComposioHQ/awesome-claude-skills, anthropics/claude-cookbooks, shiyu-coder/Kronos, obra/superpowers, mattpocock/skills, palmier-io/palmier-pro, CoreBunch/Instatic, Lordog/dive-into-llms, RyanCodrai/turbovec, OtterMind/Chat2DB, andrewyng/aisuite, affaan-m/ECC. That's 14 out of 18.

Now the topic search results are all AI-related by design (they're tagged with AI topics). I need to categorize all of them.

Let me categorize the key projects from both sources.

Categories:
1. 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)
2. 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)
3. 📦 AI Applications (specific apps, vertical solutions)
4. 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)
5. 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)

Let me go through the topic search results and categorize:

**RAG topic (topic:rag):**
- langgenius/dify - RAG pipelines, agentic workflows - 🔍 RAG / Knowledge (also 🤖)
- open-webui/open-webui - AI interface - 🔧 AI Infrastructure
- langchain-ai/langchain - agent engineering platform - 🔧 AI Infrastructure / 🤖
- Shubhamsaboo/awesome-llm-apps - list of AI agents, RAG apps - 📦 AI Applications (curated list)
- Graphify-Labs/graphify - codebase to knowledge graph - 🔍 RAG / Knowledge
- thedotmack/claude-mem - persistent context for agents - 🤖 AI Agents / Workflows
- PaddlePaddle/PaddleOCR - OCR for AI - 🔧 AI Infrastructure
- infiniflow/ragflow - RAG engine with Agent capabilities - 🔍 RAG / Knowledge
- Mintplex-Labs/anything-llm - local-first agent experience - 🤖 AI Agents / Workflows
- headroomlabs-ai/headroom - compress tool outputs for LLMs - 🔧 AI Infrastructure
- mem0ai/mem0 - universal memory layer for AI agents - 🔍 RAG / Knowledge / 🤖
- FlowiseAI/Flowise - build AI agents visually - 🤖 AI Agents / Workflows
- run-llama/llama_index - document agent and OCR platform - 🔍 RAG / Knowledge
- milvus-io/milvus - vector database - 🔍 RAG / Knowledge
- langchain-ai/langgraph - build resilient agents - 🤖 AI Agents / Workflows

**AI Agent topic (topic:ai-agent):**
- NousResearch/hermes-agent - agent that grows with you - 🤖 AI Agents / Workflows
- santifer/career-ops - AI job search - 📦 AI Applications
- Panniantong/Agent-Reach - AI agent internet access - 🤖 AI Agents / Workflows
- ZhuLinsen/daily_stock_analysis - LLM-powered stock analysis - 📦 AI Applications
- CherryHQ/cherry-studio - AI productivity studio - 📦 AI Applications
- HKUDS/nanobot - lightweight AI agent - 🤖 AI Agents / Workflows
- zhayujie/CowAgent - open-source super AI assistant & Agent Harness - 🤖 AI Agents / Workflows
- siyuan-note/siyuan - personal knowledge management - 🔍 RAG / Knowledge
- hugohe3/ppt-master - AI turns documents to PowerPoint - 📦 AI Applications
- CopilotKit/CopilotKit - Frontend Stack for Agents - 🔧 AI Infrastructure
- iOfficeAI/AionUi - cowork app for AI agents - 🤖 AI Agents / Workflows
- Gitlawb/openclaude - runs anywhere, uses anything - 🤖 AI Agents / Workflows
- googleworkspace/cli - Google Workspace CLI with AI agent skills - 🔧 AI Infrastructure
- esengine/DeepSeek-Reasonix - DeepSeek-native AI coding agent - 🤖 AI Agents / Workflows
- HKUDS/Vibe-Trading - personal trading agent - 📦 AI Applications

**ML topic (topic:ml):**
- tensorflow/tensorflow - ML framework - 🔧 AI Infrastructure
- f/prompts.chat - prompts collection - 📦 AI Applications (or just resource)
- huggingface/transformers - model-definition framework - 🧠 LLMs / Training / 🔧
- pytorch/pytorch - tensors and dynamic neural networks - 🔧 AI Infrastructure / 🧠
- microsoft/ML-For-Beginners - ML education - 📦 AI Applications (educational)
- netdata/netdata - AI-powered observability - 📦 AI Applications
- tesseract-ocr/tesseract - OCR engine - 🔧 AI Infrastructure
- OpenBB-finance/OpenBB - open data platform for AI agents - 📦 AI Applications
- scikit-learn/scikit-learn - ML in Python - 🔧 AI Infrastructure
- keras-team/keras - deep learning - 🧠 LLMs / Training
- ultralytics/ultralytics - YOLO object detection - 🧠 LLMs / Training / 📦
- microsoft/AI-For-Beginners - AI education - 📦 AI Applications
- JuliaLang/julia - programming language - 🔧 AI Infrastructure
- roboflow/supervision - computer vision tools - 🔧 AI Infrastructure
- microsoft/qlib - AI-oriented quant investment platform - 📦 AI Applications

**LLM topic (topic:llm):**
- affaan-m/ECC - agent harness performance optimization - 🤖 AI Agents / Workflows
- Significant-Gravitas/AutoGPT - accessible AI - 🤖 AI Agents / Workflows
- ollama/ollama - run models locally - 🔧 AI Infrastructure
- firecrawl/firecrawl - API to search/scrape web - 🔧 AI Infrastructure
- browser-use/browser-use - make websites accessible for AI agents - 🤖 AI Agents / Workflows
- harry0703/MoneyPrinterTurbo - AI video generation - 📦 AI Applications
- vllm-project/vllm - high-throughput LLM inference engine - 🔧 AI Infrastructure
- OpenHands/OpenHands - AI-driven development - 🤖 AI Agents / Workflows
- meilisearch/meilisearch - search engine with AI-powered hybrid search - 🔍 RAG / Knowledge

**Vector DB topic (topic:vector-db):**
- meilisearch/meilisearch - already listed
- VectifyAI/PageIndex - document index for vectorless RAG - 🔍 RAG / Knowledge
- qdrant/qdrant - vector database - 🔍 RAG / Knowledge
- topoteretes/cognee - AI memory platform for agents - 🔍 RAG / Knowledge / 🤖
- NirDiamant/RAG_Techniques - RAG techniques tutorials - 🔍 RAG / Knowledge
- weaviate/weaviate - vector database - 🔍 RAG / Knowledge
- alibaba/zvec - in-process vector database - 🔍 RAG / Knowledge
- neuml/txtai - AI framework for semantic search - 🔍 RAG / Knowledge
- StarTrail-org/LEANN - RAG on everything - 🔍 RAG / Knowledge
- langchain4j/langchain4j - Java library for LLM apps - 🔧 AI Infrastructure
- lancedb/lancedb - embedded retrieval library - 🔍 RAG / Knowledge
- oramasearch/orama - search engine and RAG pipeline - 🔍 RAG / Knowledge

**LLM Model topic (topic:llm-model):**
- jingyaogong/minimind - train 64M LLM from scratch - 🧠 LLMs / Training
- ScrapeGraphAI/Scrapegraph-ai - Python scraper based on AI - 📦 AI Applications
- 0xPlaygrounds/rig - build LLM apps in Rust - 🔧 AI Infrastructure
- open-compass/opencompass - LLM evaluation platform - 🧠 LLMs / Training
- Eigenwise/atomic-agents - building AI agents atomically - 🤖 AI Agents / Workflows
- skyzh/tiny-llm - course on LLM inference serving - 🧠 LLMs / Training (educational)
- genieincodebottle/generative-ai - generative AI resources - 📦 AI Applications
- samchon/nestia - NestJS helper + AI chatbot - 🔧 AI Infrastructure
- thinkwee/AgentsMeetRL - agentic RL list - 🤖 AI Agents / Workflows
- llm-jp/awesome-japanese-llm - Japanese LLMs overview - 🧠 LLMs / Training
- thinkwee/AwesomeOPD - on-policy distillation - 🧠 LLMs / Training
- chrisliu298/awesome-llm-unlearning - machine unlearning - 🧠 LLMs / Training
- RiccardoBiosas/awesome-MLSecOps - MLSecOps tools - 🔧 AI Infrastructure
- Picovoice/picollm - on-device LLM inference - 🔧 AI Infrastructure
- Event-AHU/Medical_Image_Analysis - medical image analysis - 📦 AI Applications

Now from the trending list, I need to categorize those too:

Trending AI projects:
1. alibaba/open-code-review - code review with LLM Agent - 🔧 AI Infrastructure / 🤖
2. citrolabs/ego-lite - browser for AI agents - 🔧 AI Infrastructure / 🤖
3. ComposioHQ/awesome-claude-skills - curated list of Claude skills - 📦 AI Applications (resource)
4. anthropics/claude-cookbooks - Claude recipes - 📦 AI Applications (resource)
5. shiyu-coder/Kronos - foundation model for financial markets - 🧠 LLMs / Training
6. obra/superpowers - agentic skills framework - 🤖 AI Agents / Workflows
7. mattpocock/skills - skills for engineers from .agents - 🤖 AI Agents / Workflows
8. palmier-io/palmier-pro - macOS video editor built for AI - 📦 AI Applications
9. CoreBunch/Instatic - agentic self-hosted visual CMS - 🤖 AI Agents / Workflows / 📦
10. Lordog/dive-into-llms - LLM tutorial - 🧠 LLMs / Training (educational)
11. RyanCodrai/turbovec - vector index in Rust - 🔍 RAG / Knowledge / 🔧
12. OtterMind/Chat2DB - AI-driven database tool - 📦 AI Applications
13. andrewyng/aisuite - unified interface to GenAI providers - 🔧 AI Infrastructure
14. affaan-m/ECC - agent harness performance optimization - 🤖 AI Agents / Workflows

Now I need to create the report with:
1. Today's Highlights (3-5 sentences)
2. Top Projects by Category (3-8 per category with link, stars, one sentence)
3. Trend Signal Analysis (200-300 words)
4. Community Hot Spots (3-5 bullets with reasoning)

I'll focus on the most notable projects across both data sources, prioritizing those with high stars and/or high today's stars.

Let me select top projects for each category:

**🔧 AI Infrastructure:**
- ollama/ollama (176,892 stars) - run models locally
- vllm-project/vllm (87,153 stars) - high-throughput LLM inference
- huggingface/transformers (162,976 stars) - model-definition framework
- pytorch/pytorch (101,953 stars) - ML framework
- tensorflow/tensorflow (196,534 stars) - ML framework
- langchain-ai/langchain (142,587 stars) - agent engineering platform
- firecrawl/firecrawl (156,008 stars) - web scraping API for AI
- browser-use/browser-use (106,771 stars) - web automation for AI agents
- andrewyng/aisuite (trending +77 today) - unified GenAI interface
- alibaba/open-code-review (trending +431 today) - code review with LLM
- Citrolabs/ego-lite (trending +986 today) - browser for AI agents
- CopilotKit/CopilotKit (36,278 stars) - frontend stack for agents
- 0xPlaygrounds/rig (8,051 stars) - LLM apps in Rust
- googleworkspace/cli (30,006 stars) - Google Workspace CLI with AI skills
- langchain4j/langchain4j (12,691 stars) - Java LLM library

**🤖 AI Agents / Workflows:**
- langchain-ai/langgraph (38,139 stars) - build resilient agents
- NousResearch/hermes-agent (220,488 stars) - agent that grows with you
- Significant-Gravitas/AutoGPT (185,685 stars) - accessible AI agents
- OpenHands/OpenHands (82,079 stars) - AI-driven development
- browser-use/browser-use (106,771 stars) - web automation for agents
- Mintplex-Labs/anything-llm (63,838 stars) - local-first agent experience
- FlowiseAI/Flowise (54,924 stars) - build AI agents visually
- thedotmack/claude-mem (88,564 stars) - persistent context for agents
- mem0ai/mem0 (61,685 stars) - universal memory layer
- zhayujie/CowAgent (46,121 stars) - super AI assistant & agent harness
- HKUDS/nanobot (46,230 stars) - lightweight AI agent
- iOfficeAI/AionUi (30,855 stars) - cowork app for AI agents
- Gitlawb/openclaude (30,350 stars) - runs anywhere, uses anything
- esengine/DeepSeek-Reasonix (27,777 stars) - DeepSeek-native coding agent
- Panniantong/Agent-Reach (60,839 stars) - AI agent internet access
- Eigenwise/atomic-agents (6,086 stars) - building agents atomically
- obra/superpowers (trending +479 today) - agentic skills framework
- mattpocock/skills (trending +1740 today) - skills from .agents
- affaan-m/ECC (trending +377 today, 233,332 stars in topic search) - agent harness optimization
- CoreBunch/Instatic (trending +426 today) - agentic visual CMS

**📦 AI Applications:**
- open-webui/open-webui (146,733 stars) - user-friendly AI interface
- CherryHQ/cherry-studio (48,985 stars) - AI productivity studio
- OtterMind/Chat2DB (trending +360 today) - AI-driven database tool
- harry0703/MoneyPrinterTurbo (99,290 stars) - AI video generation
- hugohe3/ppt-master (41,091 stars) - AI to PowerPoint
- santifer/career-ops (61,552 stars) - AI job search
- ZhuLinsen/daily_stock_analysis (58,809 stars) - LLM stock analysis
- HKUDS/Vibe-Trading (27,579 stars) - personal trading agent
- palmier-io/palmier-pro (trending +412 today) - macOS video editor for AI
- ComposioHQ/awesome-claude-skills (trending +577 today) - curated Claude skills
- anthropics/claude-cookbooks (trending +132 today) - Claude recipes
- Shubhamsaboo/awesome-llm-apps (127,673 stars) - curated AI apps list
- microsoft/ML-For-Beginners (88,585 stars) - ML education
- microsoft/AI-For-Beginners (52,872 stars) - AI education
- OpenBB-finance/OpenBB (71,008 stars) - open data platform for AI agents
- netdata/netdata (79,847 stars) - AI-powered observability
- ultralytics/ultralytics (59,875 stars) - YOLO computer vision
- microsoft/qlib (46,647 stars) - AI quant investment
- ScrapeGraphAI/Scrapegraph-ai (28,634 stars) - AI scraper
- Event-AHU/Medical_Image_Analysis (237 stars) - medical image analysis

**🧠 LLMs / Training:**
- huggingface/transformers (162,976 stars) - model framework
- pytorch/pytorch (101,953 stars) - ML framework
- tensorflow/tensorflow (196,534 stars) - ML framework
- keras-team/keras (64,180 stars) - deep learning
- jingyaogong/minimind (53,841 stars) - train 64M LLM from scratch
- open-compass/opencompass (7,236 stars) - LLM evaluation platform
- vllm-project/vllm (87,153 stars) - LLM inference engine
- ollama/ollama (176,892 stars) - run models locally
- skyzh/tiny-llm (4,408 stars) - LLM inference serving course
- llm-jp/awesome-japanese-llm (1,421 stars) - Japanese LLMs
- thinkwee/AwesomeOPD (763 stars) - on-policy distillation
- chrisliu298/awesome-llm-unlearning (617 stars) - machine unlearning
- Picovoice/picollm (315 stars) - on-device LLM inference
- shiyu-coder/Kronos (trending +319 today) - foundation model for financial markets
- Lordog/dive-into-llms (trending +408 today) - LLM tutorial

**🔍 RAG / Knowledge:**
- langgenius/dify (150,246 stars) - RAG pipelines, agentic workflows
- infiniflow/ragflow (85,993 stars) - RAG engine with Agent capabilities
- run-llama/llama_index (51,093 stars) - document agent and OCR platform
- milvus-io/milvus (45,381 stars) - vector database
- mem0ai/mem0 (61,685 stars) - universal memory layer
- Graphify-Labs/graphify (95,886 stars) - codebase to knowledge graph
- meilisearch/meilisearch (58,728 stars) - AI-powered hybrid search
- qdrant/qdrant (33,585 stars) - vector database
- weaviate/weaviate (16,649 stars) - vector database
- VectifyAI/PageIndex (34,565 stars) - vectorless RAG document index
- topoteretes/cognee (29,331 stars) - AI memory platform for agents
- NirDiamant/RAG_Techniques (28,819 stars) - RAG techniques tutorials
- alibaba/zvec (15,271 stars) - in-process vector database
- neuml/txtai (12,751 stars) - semantic search framework
- StarTrail-org/LEANN (12,729 stars) - RAG on everything
- lancedb/lancedb (10,990 stars) - embedded retrieval library
- oramasearch/orama (10,502 stars) - search engine and RAG pipeline
- PaddlePaddle/PaddleOCR (86,250 stars) - OCR for AI
- siyuan-note/siyuan (45,419 stars) - personal knowledge management
- headroomlabs-ai/headroom (62,420 stars) - compress outputs for LLMs
- RyanCodrai/turbovec (trending +86 today) - vector index in Rust

Now I need to pick 3-8 representative projects per category. I'll prioritize:
- High total stars (established projects)
- High today's stars (trending now)
- Relevance to current trends

Let me select for each category:

**🔧 AI Infrastructure (5 projects):**
1. ollama/ollama (176,892 ⭐) - Local LLM runtime
2. vllm-project/vllm (87,153 ⭐) - High-throughput LLM inference engine
3. huggingface/transformers (162,976 ⭐) - Model definition framework
4. langchain-ai/langchain (142,587 ⭐) - Agent engineering platform
5. alibaba/open-code-review (+431 today) - LLM-powered code review tool
6. citrolabs/ego-lite (+986 today) - Browser for AI agents

**🤖 AI Agents / Workflows (6 projects):**
1. NousResearch/hermes-agent (220,488 ⭐) - Self-evolving agent
2. Significant-Gravitas/AutoGPT (185,685 ⭐) - Accessible AI agents
3. OpenHands/OpenHands (82,079 ⭐) - AI-driven development
4. langchain-ai/langgraph (38,139 ⭐) - Resilient agent framework
5. affaan-m/ECC (+377 today, 233,332 ⭐) - Agent harness optimization
6. mattpocock/skills (+1740 today) - Agent skills framework

**📦 AI Applications (5 projects):**
1. open-webui/open-webui (146,733 ⭐) - User-friendly AI interface
2. OtterMind/Chat2DB (+360 today) - AI-driven database client
3. CherryHQ/cherry-studio (48,985 ⭐) - AI productivity studio
4. harry0703/MoneyPrinterTurbo (99,290 ⭐) - AI video generation
5. palmier-io/palmier-pro (+412 today) - macOS video editor for AI
6. ComposioHQ/awesome-claude-skills (+577 today) - Curated Claude skills

**🧠 LLMs / Training (4 projects):**
1. huggingface/transformers (162,976 ⭐) - Model framework
2. jingyaogong/minimind (53,841 ⭐) - Train 64M LLM from scratch
3. shiyu-coder/Kronos (+319 today) - Financial foundation model
4. open-compass/opencompass (7,236 ⭐) - LLM evaluation platform
5. Lordog/dive-into-llms (+408 today) - LLM hands-on tutorial

**🔍 RAG / Knowledge (6 projects):**
1. langgenius/dify (150,246 ⭐) - RAG pipelines & agentic workflows
2. infiniflow/ragflow (85,993 ⭐)

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*