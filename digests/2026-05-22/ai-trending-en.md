# AI Open Source Trends 2026-05-22

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-22 00:36 UTC

---

**AI Open Source Trends Report – May 22, 2026**

---

### 1. **Today's Highlights**  
The AI agent ecosystem continues to accelerate, with a surge in tools enabling local, agent-native workflows and persistent memory for coding assistants. Notably, *codegraph* (+4,294 stars) and *academic-research-skills* (+2,579 stars) highlight demand for specialized agent skills that reduce token overhead and automate research pipelines. Meanwhile, frameworks like *superpowers* and *forge* are gaining traction as modular platforms for building self-hosted multi-step agentic systems. This signals a maturation phase where agents move beyond simple automation toward compound, context-aware teammates.

---

### 2. **Top Projects by Category**

#### 🔧 AI Infrastructure
- **[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)** ⭐0 (+682 today)  
  Anthropic’s official registry for high-quality Claude Code plugins, establishing governance and discoverability for the growing plugin ecosystem.
- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** ⭐0 (+151 today)  
  Integrates Chrome DevTools into AI coding agents via Model Context Protocol (MCP), enabling real-time browser debugging within agent workflows.
- **[oh-my-pi](https://github.com/can1357/oh-my-pi)** ⭐0 (+500 today)  
  An all-in-one terminal AI coding agent offering hash-anchored edits, LSP support, and subagent orchestration—ideal for local, privacy-first development.

#### 🤖 AI Agents / Workflows
- **[obra/superpowers](https://github.com/obra/superpowers)** ⭐0 (+1,576 today)  
  A novel agentic skills framework and software methodology emphasizing composable, reusable “skills” for autonomous agents.
- **[multica/multica](https://github.com/multica-ai/multica)** ⭐0 (+534 today)  
  Turns individual coding agents into managed, collaborative teammates with task assignment, progress tracking, and skill compounding.
- **[agency-agents](https://github.com/msitarzewski/agency-agents)** ⭐0 (+1,018 today)  
  Deploys a full AI agency of personality-driven specialists—from frontend wizards to Reddit community ninjas—for end-to-end automation.

#### 📦 AI Applications
- **[notebooklm-py](https://github.com/teng-lin/notebooklm-py)** ⭐0 (+186 today)  
  Unofficial Python API for Google NotebookLM, exposing programmatic access to its multimodal summarization and research features.
- **[Understand-Anything](https://github.com/Lum1104/Understand-Anything)** ⭐0 (+666 today)  
  Converts any codebase into an interactive knowledge graph queryable by agents like Claude Code, enhancing comprehension and navigation.
- **[CLI-Anything](https://github.com/HKUDS/CLI-Anything)** ⭐0 (+656 today)  
  Makes all existing CLI tools agent-native via centralized indexing (CLI-Hub), reducing tool call overhead for agents.

#### 🧠 LLMs / Training
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** ⭐50,344 [topic:llm-model]  
  Trains a 64M-parameter LLM from scratch in just 2 hours—democratizing small-model training for resource-constrained environments.
- **[ECC](https://github.com/affaan-m/ECC)** ⭐188,158 [topic:llm]  
  The Agent Harness Performance Optimization System, focusing on skills, memory, security, and research-first development across major agent frameworks.

#### 🔍 RAG / Knowledge
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** ⭐77,284 [topic:rag]  
  Provides persistent, AI-compressed session memory across agent runs, improving continuity and reducing redundant context.
- **[mem0](https://github.com/mem0ai/mem0)** ⭐56,377 [topic:rag]  
  Universal memory layer for AI agents, enabling long-term, cross-session recall and personalization.
- **[safishamsi/graphify](https://github.com/safishamsi/graphify)** ⭐50,767 [topic:rag]  
  Transforms heterogeneous data (code, schemas, docs) into queryable knowledge graphs for enhanced agent reasoning.

---

### 3. **Trend Signal Analysis**  
Today’s trending repos reveal three converging themes: **(1)** a strong push toward **local, agent-native toolchains**, exemplified by *codegraph*’s pre-indexed code knowledge graph and *oh-my-pi*’s terminal-first design—both prioritizing low-token usage and offline operation; **(2)** rapid maturation of the **agent skill economy**, with projects like *andrej-karpathy-skills* and *academic-research-skills* showing demand for curated, behavior-shaping “CLAUDE.md” files that guide agent decision-making; and **(3)** emergence of **composable agent frameworks** (*superpowers*, *forge*, *multica*) that treat agents not as monolithic bots but as teams with delegated tasks and shared memory. These trends align with recent industry shifts: Anthropic’s emphasis on plugin ecosystems, Meta’s release of Llama 3.1 prompting best practices, and the rising adoption of MCP (Model Context Protocol) for standardized tool integration. Notably, Go and Rust are appearing more prominently in infrastructure layers (e.g., *multica*, *ECC*), suggesting performance-critical agent backends are being rewritten in systems languages.

---

### 4. **Community Hot Spots**  
- **Local Agent Toolchains**: Projects like *codegraph* and *oh-my-pi* address the critical pain point of excessive token consumption—developers seek lightweight, context-efficient ways to make agents operate locally without cloud dependency.  
- **Persistent Agent Memory**: With *claude-mem* and *mem0* gaining momentum, the next frontier is long-term agent identity and cross-session continuity—key for enterprise-grade agent deployment.  
- **Specialized Agent Skills**: Curated skill sets (e.g., *academic-research-skills*, *karpathy-skills*) indicate that generic prompts are insufficient; the community is investing in battle-tested behavioral blueprints.  
- **MCP Integration**: Chrome DevTools MCP and broader MCP adoption signal standardization around tool interoperability—expect this protocol to become foundational for agent ecosystems.  
- **Small-Scale LLM Training**: *minimind* proves that ultra-low-resource training is feasible, opening doors for domain-specific tiny models tailored to agent constraints.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*