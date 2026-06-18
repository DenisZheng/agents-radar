# AI CLI Tools Community Digest 2026-06-18

> Generated: 2026-06-18 00:44 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Date: 2026-06-18**

---

## 1. Ecosystem Overview

The AI CLI tool landscape in mid-2026 is characterized by rapid, parallel iteration across at least eight actively maintained projects, all converging on a similar core loop: terminal-native interface, tool-use agent, MCP integration, and multi-model provider support. The competitive pressure is intense — Claude Code and OpenAI Codex lead in community volume, while Gemini CLI, Qwen Code, and OpenCode are closing gaps with aggressive release cadences. GitHub Copilot CLI occupies a unique position as the only tool deeply integrated with an existing IDE/platform ecosystem. Meanwhile, Pi and Kimi Code CLI serve more niche audiences but reveal important long-tail needs (SDK composability, enterprise network compatibility). The overall trajectory is clear: the CLI is becoming a first-class agent runtime, not just a chat wrapper.

---

## 2. Activity Comparison

| Tool | Issues (Active/Hot) | PRs (Updated Today) | Release Today | Version |
|------|---------------------|---------------------|---------------|---------|
| **Claude Code** | 10 hot issues tracked | 5 updated (0 merged) | ✅ Yes | v2.1.181 |
| **OpenAI Codex** | 10 hot issues tracked | 10 updated | ✅ Yes (alpha) | rust-v0.141.0-alpha.6 |
| **Gemini CLI** | 10 hot issues tracked | 10 updated | ✅ Yes (preview) | v0.48.0-preview.0 |
| **GitHub Copilot CLI** | 10 hot issues tracked | 0 updated | ✅ Yes | v1.0.64-0 |
| **Kimi Code CLI** | 2 new issues | 0 updated | ❌ No | — |
| **OpenCode** | 10 hot issues tracked | 10 updated | ✅ Yes | v1.17.8 |
| **Pi** | 10 hot issues tracked | 10 updated (4 merged) | ❌ No | — |
| **Qwen Code** | 10 hot issues tracked | 10 updated (1 merged) | ✅ Yes | v0.18.3 |
| **DeepSeek TUI** | N/A | N/A | N/A | Data unavailable |

**Key takeaway:** Claude Code, OpenCode, and Pi have the highest raw issue engagement (10+ hot issues with deep community discussion). OpenAI Codex, Gemini CLI, and Qwen Code show the most PR throughput, indicating heavy internal engineering investment. Kimi Code CLI is the quietest today.

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, signaling ecosystem-wide convergence:

### 3.1 Multi-Agent Orchestration
**Tools:** Claude Code, OpenAI Codex, OpenCode, Pi, Qwen Code

This is the single most consistent cross-tool theme. Specific needs include:
- **Inter-session communication** (Claude Code #24798, 35 comments) — agents coordinating across sessions
- **Cross-machine A2A protocols** (Claude Code #28300) — distributed agent architectures
- **Per-agent config isolation** (Claude Code #23669) — teammates with independent working directories and CLAUDE.md
- **Per-turn delegation controls** (Codex #28685, #28792) — flexible multi-agent mode selection
- **Multi-agent in isolated workspaces** (OpenCode #17994) — team-of-agents pattern
- **Self-paced loop wakeups** (Qwen Code PR #5182, #5197) — autonomous agent scheduling

### 3.2 MCP Ecosystem Maturity
**Tools:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi

MCP has become a universal integration layer, but pain is consistent:
- **Multi-workspace/account support** — Claude Code's Slack connector (#44243) only handles one workspace; users want multi-account patterns everywhere
- **Subagent MCP tool invisibility** — Copilot CLI (#3812) and others report MCP tools not propagating to spawned subagents
- **OAuth/credential attachment failures** — Copilot CLI (#3838), Claude Code (#69205)
- **Schema fragmentation** — Copilot CLI (#3835) has `mcpServers` vs `servers` key divergence with VS Code
- **Registry/discovery** — Copilot CLI shipped MCP registry browsing; OpenCode has LAN provider discovery (PR #27554); Gemini CLI fixed MCP header encoding for non-ASCII (#27771)

### 3.3 Agent Sandboxing & Security Boundaries
**Tools:** Claude Code, Gemini CLI, OpenCode, Qwen Code

- **OS-level sandboxing** — OpenCode (#2242, 54 👍, 72 comments) has the loudest demand for seatbelt-style restrictions; Gemini CLI has sub-agents running without permission (#22093)
- **Permission model consistency** — Claude Code users want `--dangerously-skip-permissions` to propagate to Remote Control (#29214); Copilot CLI users want tool whitelists bridging per-call approval and `/allow-all` (#1973, 20 👍)
- **Security review as first-class** — Copilot CLI unlocked `/security-review` from experimental in v1.0.64-0

### 3.4 Session Durability & Crash Recovery
**Tools:** Claude Code, OpenAI Codex, Qwen Code, Pi

- **Hanging/freezing** — Claude Code (#26224, 143 👍, 118 comments) is the most impactful open bug across the entire ecosystem; Gemini CLI has analogous generalist agent hangs (#21409) and shell execution hangs (#25166)
- **Crash recovery without synthetic messages** — Qwen Code PR #5030
- **Fork/resume optimization** — Codex PR #28806 (checkpoint-backed resume, copy-on-write fork)
- **Compaction reliability** — Pi PR #5833 (tool-call replay after compaction)

### 3.5 Model Management & Provider Ecosystem
**Tools:** OpenCode, Qwen Code, Pi, Codex, Gemini CLI

- **Auto-discovery of models** — OpenCode PR #32731 (OpenAI-compatible `/models` endpoint); Qwen Code has provider disambiguation failures (#5173)
- **Provider expansion** — OpenCode adding Kiro (PR #20491), Microsoft Foundry (PR #28073); Pi adding Azure AI Foundry (PR #5849, merged)
- **Vision/multimodal bridging** — Qwen Code PR #5126 (transcribes images for text-only models); Gemini CLI PR #27859 (native drag-and-drop, clipboard paste)
- **Context window configurability** — Copilot CLI (#3355) users want 1M vs 200K for Claude Opus 4.6

---

## 4. Differentiation Analysis

### Claude Code — The Community Standard-Bearer
**Position:** Largest community, most upvoted issues, broadest feature surface. The de facto reference for what an AI CLI tool should be.
**Differentiator:** Deepest multi-agent vision (Agent Teams, inter-session communication, A2A protocol), Remote Control mobile app, the `/config key=value` inline settings innovation.
**Weakness:** Windows is second-class (multiple Windows-specific bugs), the freezing bug (#26224) has been open with massive engagement but no resolution, and the stalebot is auto-closing legitimate issues.

### OpenAI Codex — The Infrastructure Play
**Position:** Rapid Rust CLI alpha iteration (v0.141.0-alpha.6), heavy investment in plugin/skill architecture and multi-agent foundations.
**Differentiator:** Most advanced plugin system (plural install tooling, extension executors, skill warmup tracing), per-turn multi-agent controls, checkpoint-backed session forking. The Desktop app is a differentiator but also a source of macOS-specific pain.
**Weakness:** macOS is a minefield (websocket reconnect loops, Gatekeeper blocking `rg`, `syspolicyd` exhaustion, Crashpad dump accumulation). Authentication is broken for some users (#25670). The Desktop and CLI experience feel somewhat disconnected.

### Gemini CLI — The Security-First Contender
**Position:** Google-backed, strong on security hardening (artifact poisoning prevention, MCP output wrapping, dependency cooldowns).
**Differentiator:** 14-day dependency cooldown for supply-chain security (PR #27948), `FatalConfigError` refactoring for testability, ACP protocol support with cached/thought token reporting. The component-level evaluation EPIC (#24353) signals investment in quality infrastructure.
**Weakness:** Agent reliability is the top pain point — generalist agent hangs (#21409), false subagent success reports (#22323), shell execution hangs (#25166). The Auto Memory feature has security concerns (#26525) and retry bugs (#26522).

### GitHub Copilot CLI — The Platform Integrator
**Position:** Tightly coupled with GitHub/GitHub Actions/VS Code ecosystem. The only tool where config unification with an IDE is a primary concern.
**Differentiator:** `/diagnose` command for session log analysis, MCP registry browsing, `/security-review` unlocked for all users, plugin-discovered MCP servers. The CSV output for MCP tools signals enterprise/automation use cases.
**Weakness:** MCP reliability is fragmented (subagent invisibility, OAuth failures, schema incompatibility with VS Code). The June 16 outage (#3832) exposed infrastructure fragility. Session trust boundaries are under-specified.

### OpenCode — The Community Darling
**Position:** Highest-liked feature request (VS Code extension, 110 👍), strong community engagement, rapid release cadence.
**Differentiator:** Fastest session timeline loading (v1.17.8), native per-session goals with `/goal` command (PR #32743), LAN provider discovery via mDNS, OpenRouter variant support. The most active PR pipeline of any tool today.
**Weakness:** GPT model latency is the dominant pain point (#29079, 117 comments, 49 👍). No agent sandboxing (#2242, 54 👍). Alpine Linux broken by regression (#27589). CPU waste during rate-limit retries (#19466).

### Qwen Code — The Accessibility Challenger
**Position:** Free tier is a key differentiator but under threat (policy debate #3203, 151 comments). Strong in non-English developer communities.
**Differentiator:** Vision bridge for text-only models (PR #5126), mid-turn message injection for web shell (PR #5175, merged), second-resolution wakeup engine for `/loop` (PR #5182), i18n-localized tool display names (PR #5220). The self-paced loop scheduling is architecturally sophisticated.
**Weakness:** Authentication fragility is the top support burden. Free tier uncertainty drives evaluation churn. Local LLM setup friction (#3384). Tool-call infinite loops (#5234).

### Pi — The SDK/Composability Layer
**Position:** Not just a CLI — a composable SDK (`pi-ai` + `pi-coding-agent`). Targets developers who want to embed agent capabilities.
**Differentiator:** Azure AI Foundry provider (PR #5849, merged), `max` thinking level for adaptive reasoning models (PR #5829, merged), Nix flake support (PR #5801, merged), RPC surface for external tooling. The compaction fixes (PR #5833) are particularly relevant for local LLM users.
**Weakness:** Dependency duplication from Shrinkwrap (#5653) is a silent, hard-to-debug issue for SDK consumers. Streaming UX disruption from scroll-to-bottom (#5825). Opaque error reporting (#5763). Linux config not respecting XDG (#534, 20 👍).

### Kimi Code CLI — The Enterprise Aspirant
**Position:** Smallest community today, but the SSL bypass request (#2458) and mid-session mode switching (#2459) reveal enterprise-oriented needs.
**Differentiator:** Cluster execution mode (unique among these tools), Agent ↔ Cluster switching concept.
**Weakness:** Very low community activity. No releases or PR movement today. Needs critical mass.

---

## 5. Community Momentum & Maturity

### Tier 1: Highest Momentum (Large Community + Rapid Iteration)
| Tool | Community Signal | Iteration Speed |
|------|-----------------|-----------------|
| **Claude Code** | 143 👍 on top issue, 118 comments on freezing bug, 10 hot issues with deep discussion | Steady (v2.1.181 today) |
| **OpenCode** | 110 👍 on VS Code extension request, 117 comments on GPT latency, 10 active PRs | Very fast (v1.17.8 today, 10 PRs) |
| **OpenAI Codex** | 53 👍 on macOS `rg` Gatekeeper issue, 44 comments on websocket loops, 10 active PRs | Very fast (alpha.6 today, 10 PRs) |

### Tier 2: Strong Investment (Active Engineering, Growing Community)
| Tool | Community Signal | Iteration Speed |
|------|-----------------|-----------------|
| **Gemini CLI** | 10 hot issues, security-focused PRs, dependency cooldown infrastructure | Fast (v0.48.0-preview.0, 10 PRs) |
| **Qwen Code** | 151 comments on free tier policy, 10 active PRs, vision bridge innovation | Fast (v0.18.3, 10 PRs) |
| **Pi** | 20 👍 on XDG config issue, 10 PRs (4 merged), strong SDK-level activity | Moderate (no release, but 4 merges) |

### Tier 3: Platform-Integrated / Niche
| Tool | Community Signal | Iteration Speed |
|------|-----------------|-----------------|
| **GitHub Copilot CLI** | 20 👍 on tool whitelist request, MCP reliability complaints, outage impact | Moderate (v1.0.64-0, 0 PRs today) |
| **Kimi Code CLI** | 2 new issues, no community engagement yet | Slow (no releases, no PRs) |

---

## 6. Trend Signals

### Trend 1: The Multi-Agent Inflection Point
Every major tool is investing in multi-agent orchestration, but the approaches diverge. Claude Code is building toward a formal A2A protocol and per-teammate config isolation. Codex is building per-turn delegation controls and thread-level multi-agent mode. OpenCode is building per-session goals and isolated workspaces. Qwen Code is building self-paced loop wakeups. **The signal:** multi-agent is no longer experimental — it's the next baseline. Developers evaluating tools should assess the multi-agent story as a primary criterion.

### Trend 2: MCP Is the New Extension API — But It's Not Ready
MCP has achieved universal adoption as the integration layer, but the implementation quality varies wildly. OAuth failures, subagent invisibility, schema fragmentation between tools, and startup hangs from credential backoff are consistent pain points. **The signal:** MCP 1.0 is the HTTP 1.0 moment — the protocol is right, the implementations need maturation. Expect consolidation around a smaller set of MCP server patterns and better client-side resilience.

### Trend 3: The Permission Model Is the New Battleground
As agents become more autonomous, the permission model becomes the critical UX and safety surface. Users across Claude Code, Copilot CLI, Gemini CLI, and OpenCode are demanding: (a) consistency across surfaces (CLI → mobile, CLI → subagent), (b) granularity between per-call approval and blanket allow-all, and (c) OS-level sandboxing. **The signal:** the tool that gets permissions right — predictable, granular, safe — will win the trust of enterprise and security-conscious developers.

### Trend 4: macOS Is the Most Painful Platform
OpenAI Codex has four distinct macOS-specific bugs dominating its issue list. Claude Code added `sandbox.allowAppleEvents` as an opt-in specifically because macOS sandbox restrictions were blocking workflows. Pi doesn't detect Warp terminal for image protocol. Qwen Code has trackpad scroll issues in tmux on macOS. **The signal:** macOS security architecture (Gatekeeper, seatbelt, TCC, notarization) is increasingly in tension with agent tooling that needs deep system access. Tools that solve macOS integration well will have a significant advantage.

### Trend 5: Free Tier as Competitive Weapon (and Liability)
Qwen Code's free tier policy debate (151 comments) is the most politically charged discussion in today's ecosystem. The tension between sustainability and accessibility is unresolved. Meanwhile, OpenCode's GPT latency issues disproportionately affect free-tier users on ChatGPT accounts. **The signal:** free tiers are driving adoption but creating support burden and community friction. The next 12 months will likely see consolidation of free tier policies across the industry.

### Trend 6: The IDE Integration Gap
OpenCode's VS Code extension request (110 👍) is the single most-liked feature request across all tools today. Copilot CLI's config schema divergence with VS Code is a persistent pain point. Codex has VS Code extension context-length issues. **The signal:** the CLI-first paradigm is hitting a ceiling. Developers want agent capabilities inside their IDE, not alongside it. The tool that delivers the best IDE-integrated agent experience — without sacrificing CLI power — will capture the next wave of adoption.

### Trend 7: Observability and Debugging Are Underserved
Copilot CLI shipped `/diagnose`. OpenCode users want TPS display (55 👍). Qwen Code users want token consumption statistics (16 comments). Pi users want `excludeFromContext` for observability messages. **The signal:** as agent workflows become more complex and autonomous, developers need better visibility into what agents are doing, why they're doing it, and how much it costs. Built-in observability will shift from nice-to-have to table stakes.

---

*Report generated by OWL · Data sources: GitHub repositories for each tool · 2026-06-18*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

## Claude Code Skills Community Highlights Report  
*Data as of 2026-06-18 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

### 1. **Top Skills Ranking**  
*(Based on community engagement via Issues and PRs)*

| Rank | Skill / Issue | Functionality | Status & Highlights |
|------|---------------|---------------|---------------------|
| 1 | **run_eval.py reliability** ([Issue #556](https://github.com/anthropics/skills/issues/556)) | Critical bug: `run_eval.py` fails to trigger any skill during evaluation (0% recall), breaking the description-optimization loop. | **Open**, 12 comments, 👍7. Confirmed by multiple users; blocks effective skill tuning. |
| 2 | **Org-wide skill sharing** ([Issue #228](https://github.com/anthropics/skills/issues/228)) | Request for native organizational skill distribution in Claude.ai (vs. manual file sharing). | **Open**, 14 comments, 👍7. High demand from enterprise teams. |
| 3 | **Document typography control** ([PR #514](https://github.com/anthropics/skills/pull/514)) | Prevents orphan words, widow headers, and numbering misalignment in AI-generated docs. | **Open**, addresses universal pain point in document quality. |
| 4 | **Windows compatibility fixes** ([PR #1050](https://github.com/anthropics/skills/pull/1050), [PR #1099](https://github.com/anthropics/skills/pull/1099)) | Fixes subprocess and encoding issues preventing `skill-creator` tools from working on Windows. | **Open**, critical for cross-platform adoption. |
| 5 | **Skill quality & security analysis** ([PR #83](https://github.com/anthropics/skills/pull/83)) | Meta-skills to evaluate other skills across structure, security, and best practices. | **Open**, fills a governance gap in the ecosystem. |
| 6 | **YAML parsing safety** ([PR #361](https://github.com/anthropics/skills/pull/361), [PR #539](https://github.com/anthropics/skills/pull/539)) | Prevents silent failures from unquoted YAML special characters in skill descriptions. | **Open**, improves robustness of skill validation. |
| 7 | **Multi-file skill preloading** ([Issue #1220](https://github.com/anthropics/skills/issues/1220)) | Requests ability to bundle multiple reference files into a single skill context load. | **Open**, addresses modularity vs. context efficiency trade-off. |
| 8 | **Trust boundary security** ([Issue #492](https://github.com/anthropics/skills/issues/492)) | Warns against community skills impersonating official `anthropic/` namespace. | **Open**, highlights need for skill provenance verification. |

---

### 2. **Community Demand Trends**  
*(Synthesized from top Issues)*

- **Enterprise Collaboration**: Strong demand for **org-native skill sharing** (#228), indicating teams want seamless internal distribution without manual file handling.
- **Platform Parity**: Persistent **Windows compatibility** issues (#1050, #1099, #1061) reveal friction in non-Unix environments—key for broader developer adoption.
- **Skill Reliability & Debugging**: The `run_eval.py` bug (#556) underscores need for **trustworthy skill evaluation tooling**—foundational for iterative skill improvement.
- **Security & Governance**: Concerns about **namespace spoofing** (#492) and lack of **agent governance patterns** (#412) signal maturing expectations around skill trust and safety.
- **Document Quality**: Typography control (#514) reflects user focus on **professional-grade output**, not just content correctness.

---

### 3. **High-Potential Pending Skills**  
*(Active PRs with clear utility and community relevance)*

- **[PR #514: document-typography](https://github.com/anthropics/skills/pull/514)**  
  Solves ubiquitous formatting flaws in AI-generated documents. Low-risk, high-impact enhancement.
  
- **[PR #83: skill-quality-analyzer](https://github.com/anthropics/skills/pull/83)**  
  Enables self-assessment of skill quality—critical as the ecosystem scales.

- **[PR #361 + #539: YAML safety checks](https://github.com/anthropics/skills/pull/361)**  
  Prevents silent misparsing during skill creation; improves developer experience.

- **[PR #1050 + #1099: Windows fixes](https://github.com/anthropics/skills/pull/1050)**  
  Unblocks Windows users from core skill-authoring workflows.

> **Note**: All listed PRs remain **unmerged** as of 2026-06-18 but address validated pain points with minimal implementation risk.

---

### 4. **Skills Ecosystem Insight**  
> The community’s most concentrated demand is for **reliable, secure, and platform-inclusive skill authoring and distribution infrastructure**—not just new skill content, but trustworthy tooling to create, evaluate, share, and govern skills at scale.

---

# Claude Code Community Digest — 2026-06-18

---

## 1. Today's Highlights

Claude Code shipped **v2.1.181**, bringing a convenient `/config key=value` inline settings syntax, a new `sandbox.allowAppleEvents` opt-in for macOS, and a partial changelog entry suggesting broader client-side improvements. On the issue tracker, the most urgent discussion remains the long-standing **hanging/freezing bug** (#26224) with 118 comments and 143 thumbs-up, while a fresh regression (#68721) reports that native team-management tools disappeared in 2.1.178. The community continues to push hard on **multi-agent collaboration**, **inter-session communication**, and **multi-workspace MCP** support.

---

## 2. Releases

### v2.1.181 — 2026-06-18
- **`/config key=value` prompt syntax** — Set any Claude Code setting directly from the prompt (e.g. `/config thinking=false`). Works in interactive mode, `-p` (print) mode, and Remote Control sessions. This eliminates the need to drop out of a session to edit settings files.
- **`sandbox.allowAppleEvents` opt-in** — Allows sandboxed commands to send Apple Events on macOS, unblocking automation workflows that drive other apps via AppleScript/Events within the sandbox.
- **`CLAUDE_CLIENT_P…`** — Changelog appears truncated in the data feed; full release notes are on the [GitHub releases page](https://github.com/anthropics/claude-code/releases).

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|--------------------|
| [#26224](https://github.com/anthropics/claude-code/issues/26224) | **[BUG] Claude Code hanging / freezing for 5–20+ minutes** | The single most impactful open bug — users report the TUI becoming completely unresponsive for extended periods, blocking all work. Affects all platforms. | 118 comments, 👍143. Massive engagement; users sharing repro steps, workarounds, and environment details. No confirmed root cause or fix yet. |
| [#29214](https://github.com/anthropics/claude-code/issues/29214) | **Remote Control: mobile app ignores `--dangerously-skip-permissions`** | Users who explicitly bypass permissions on the CLI still get bombarded with approval prompts on the mobile Remote Control app, defeating the purpose of the flag. | 30 comments, 👍76. High demand for the mobile client to inherit the host session's permission mode. |
| [#44243](https://github.com/anthropics/claude-code/issues/44243) | **Multi-workspace Slack MCP connector** | The built-in Slack MCP connector only supports one workspace. Consultants, contractors, and anyone juggling multiple orgs are locked out. | 27 comments, 👍57. Frequently requested; users want a UI/config path to add additional workspace tokens. |
| [#24798](https://github.com/anthropics/claude-code/issues/24798) | **Inter-session communication for multi-Claude workflows** | Users running parallel Claude sessions on different modules have no way to coordinate or sequence work across sessions. | 35 comments, 👍16. Seen as critical for large-project workflows; some users building fragile workarounds with shared files. |
| [#28300](https://github.com/anthropics/claude-code/issues/28300) | **Multi-agent collaboration across machines (Agent-to-Agent protocol)** | Requests a formal A2A protocol so agents on different machines can coordinate — a step toward distributed agent architectures. | 26 comments. Forward-looking; aligns with broader industry interest in agent interoperability. |
| [#23669](https://github.com/anthropics/claude-code/issues/23669) | **Agent Teams: per-teammate working directory, CLAUDE.md, and MCP configs** | Currently all teammates inherit the lead's directory and config, making multi-repo agent teams impractical. | 24 comments, 👍28. Important for monorepo and multi-service architectures. |
| [#61993](https://github.com/anthropics/claude-code/issues/61993) | **Sub-agents cannot spawn other sub-agents on Windows** | The `Task`/`Agent` primitive is not exposed in nested contexts on Windows, breaking hierarchical agent workflows. | 18 comments. Blocks advanced multi-level delegation patterns on Windows specifically. |
| [#68721](https://github.com/anthropics/claude-code/issues/68721) | **Regression: TeamCreate / TeamDelete tools no longer surfaced (2.1.178)** | Native team-management tools vanished after the 2.1.177 → 2.1.178 upgrade, breaking agent team workflows. | 6 comments, 👍4. Fresh regression with repro; likely to be prioritized. |
| [#69205](https://github.com/anthropics/claude-code/issues/69205) | **Remote HTTP MCP OAuth broken for plugin-installed MCP servers on SSH machines** | Google OAuth redirect constraints make remote MCP OAuth non-viable when plugins install MCP servers on remote/SSH hosts. | 3 comments. Niche but critical for remote-development setups with MCP-heavy workflows. |
| [#69062](https://github.com/anthropics/claude-code/issues/69062) | **Agent view: dispatched task intermittently never starts** | In the interactive agent view, pressing Enter sometimes creates a task row that stays in "working" state but never actually executes — a spare worker is never promoted. | 2 comments. Newly filed with repro; could affect reliability of the agent fleet UI. |

---

## 4. Key PR Progress

Only **5 pull requests** were updated in the last 24 hours, and none have merged recently. Highlights:

| # | PR | Description |
|---|----|-------------|
| [#69226](https://github.com/anthropics/claude-code/pull/69226) | **Update frontend-design skill** | Improves the `frontend-design` skill and bumps the plugin version to 1.1.0 so installed copies auto-pick up the update. |
| [#19867](https://github.com/anthropics/claude-code/pull/19867) | **fix(code-review): allow re-reviews on new commits** | Fixes the code-review plugin skipping reviews after new commits are pushed. Adds smarter skip logic and documents a `--force` flag. Open since January. |
| [#33443](https://github.com/anthropics/claude-code/pull/33443) | **fix: Dockerfile uses native installer** | Updates `.devcontainer/Dockerfile` to Node 24.14 and installs Claude Code via the native installer instead of the deprecated npm path. |
| [#60427](https://github.com/anthropics/claude-code/pull/60427) | **docs: standard GitHub capitalization in README** | Minor docs polish. ✅ Merged. |
| [#60732](https://github.com/anthropics/claude-code/pull/60732) | **docs: polish plugins README wording** | Tiny wording improvement in the plugins README. ✅ Merged. |

> **Note:** PR activity is light today. The two merged PRs are documentation-only. The code-review fix PR (#19867) has been open for ~5 months and addresses a real workflow gap — it could use maintainer attention.

---

## 5. Feature Request Trends

Synthesizing all open issues and PRs, the most-requested feature directions are:

1. **Multi-agent orchestration** — Inter-session communication (#24798), cross-machine A2A protocols (#28300), per-teammate config isolation (#23669), and nested sub-agent spawning (#61993) all point to demand for first-class multi-agent workflow primitives.

2. **Multi-workspace / multi-account MCP** — The Slack connector limitation (#44243) is emblematic of a broader need: MCP connectors that can handle multiple accounts or workspaces simultaneously.

3. **Permission model consistency** — Users want `--dangerously-skip-permissions` to propagate to Remote Control (#29214), and they want A/B experiment flags to not silently override their explicit `defaultMode` settings (#62205). Trust and predictability of the permission model is a recurring theme.

4. **Session context switching** — Requests to switch project context (working directory, `.claude/` config) mid-session (#50302, now closed/stale) suggest users want more fluid session management.

5. **Agent visibility and UX** — Users want better visibility into background subagent activity (#67485), animated status indicators (#62387), and non-interruptive `AskUserQuestion` flows (#59336, closed).

6. **Persistent project memory beyond CLI** — A request for `CLAUDE.md`-like persistent memory on claude.ai (#67671, marked invalid) shows demand for cross-platform project context.

---

## 6. Developer Pain Points

- **Freezing / hanging** (#26224) — The most painful and widespread issue. Sessions becoming unresponsive for minutes at a time destroys trust in the tool for production work. 143 users have 👍-upped this.

- **Permission model fragmentation** — Between `--dangerously-skip-permissions` not propagating to mobile Remote Control (#29214), A/B flags silently overriding `defaultMode` (#62205), and sandbox restrictions blocking Apple Events (now partially addressed in v2.1.181), developers are frustrated by inconsistent and opaque permission behavior.

- **Windows second-class citizenship** — Multiple Windows-specific bugs (sub-agent nesting #61993, terminal scrollback #51393, Bun hook crashes #60363, environment pollution #69227) suggest the Windows experience lags behind macOS/Linux.

- **Agent Teams regressions** — The disappearance of `TeamCreate`/`TeamDelete` tools in 2.1.178 (#68721) and the "replay storm" bug in task assignment delivery (#68336) undermine confidence in the Agent Teams feature, which is still relatively new.

- **Remote/SSH development friction** — OAuth redirect issues for remote MCP servers (#69205) and WSL-specific permission prompts (#29214) make remote development setups harder than they should be.

- **Stalebot frustration** — Several closed issues were marked `stale` before resolution (#46724, #49184, #50302, #59336, #60363, #60375), suggesting the community feels legitimate bugs and requests are being auto-closed prematurely.

---

*Data source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) · Digest generated 2026-06-18*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-18

---

## 1. Today's Highlights

The Codex repository saw a burst of internal engineering activity today, with a concentrated wave of PRs around **plugin install infrastructure** (plural install tooling, extension executors, and backend refactoring) and **multi-agent mode** (per-turn delegation controls and thread-level exposure). On the community side, the most heated discussions center on **authentication breakage**, **macOS-specific bugs** (websocket reconnect loops, `rg` blocked by Gatekeeper, Crashpad dump accumulation), and **rate-limit reset behavior** that may have bypassed the promised banking mechanism.

---

## 2. Releases

Two new Rust CLI alpha releases landed in the last 24 hours:

- **[rust-v0.141.0-alpha.6](https://github.com/openai/codex/releases)** — Latest alpha; no detailed changelog provided in this data slice.
- **[rust-v0.141.0-alpha.5](https://github.com/openai/codex/releases)** — Preceding alpha.

These are rapid-fire alpha iterations, suggesting active development toward a stable 0.141.0 release. Developers tracking the CLI should test against `.alpha.6` and watch for the issues below (particularly the `image_gen` regression introduced in 0.140.0).

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| **[#25670](https://github.com/openai/codex/issues/25670)** | **Authentication for Codex has literally broken** | Multi-factor auth (passkey + phone + TOTP) still loops back to phone verification, locking users out entirely. A critical auth regression. | 33 comments, 19 👍 — high frustration; users report being completely blocked. |
| **[#18960](https://github.com/openai/codex/issues/18960)** | **Frequent reconnect loop: websocket closed by server before response.completed** | Streaming failures in the Codex App on macOS cause repeated disconnect/reconnect cycles, breaking long-running sessions. | 44 comments, 34 👍 — the most-commented and most-upvoted issue; clearly a widespread pain point. |
| **[#28190](https://github.com/openai/codex/issues/28190)** | **`rg` (ripgrep) blocked by macOS** | macOS Gatekeeper/seatbelt blocks `rg` invocations from Codex CLI, breaking file search workflows for a huge portion of developers. | 31 comments, 53 👍 — highest upvote count; affects anyone on macOS using the CLI. |
| **[#28015](https://github.com/openai/codex/issues/28015)** | **False positive cybersecurity safety check blocks normal repo maintenance** | Ordinary DevOps hygiene tasks (local repo maintenance) trigger safety-check prompts, interrupting paid interactive sessions. | 20 comments, 0 👍 — no upvotes but significant comment volume; signals a trust/UX problem with the safety layer. |
| **[#28422](https://github.com/openai/codex/issues/28422)** | **`image_gen` regression in 0.140.0: valid image not saved when status remains `generating`** | A regression in the latest CLI means generated images are silently dropped. Directly impacts users relying on image generation. | 9 comments, 2 👍 — early-stage but critical for affected users; likely to grow. |
| **[#28071](https://github.com/openai/codex/issues/28071)** | **Codex Desktop exhausts `syspolicyd`, cannot relaunch until reboot** | A macOS-specific resource exhaustion bug renders the app unusable without a full system reboot. | 8 comments, 2 👍 — severe severity, though lower visibility so far. |
| **[#25921](https://github.com/openai/codex/issues/25921)** | **Crashpad pending dumps grow without limit: +5GB/day** | Unbounded crash dump accumulation wastes disk space and is a sign of underlying instability. | 8 comments, 1 👍 — concerning for long-running Desktop installations. |
| **[#28811](https://github.com/openai/codex/issues/28811)** | **Public Codex rate-limit reset applied immediately instead of banked** | Contradicts OpenAI's communicated reset-banking policy; users lose control over when to spend their reset. | 4 comments, 3 👍 — fresh issue (created today); could escalate quickly given billing sensitivity. |
| **[#28262](https://github.com/openai/codex/issues/28262)** | **Windows Store App crashes on launch with Korean characters in user profile** | Path encoding issue blocks Korean Windows users entirely. An i18n/localization gap. | 3 comments, 0 👍 — low engagement but high severity for affected users. |
| **[#28816](https://github.com/openai/codex/issues/28816)** | **VS Code follow-up turn fails with `context_length_exceeded` after `needs_follow_up=true`** | The VS Code extension hits context limits on follow-up turns, breaking multi-turn workflows in the IDE. | 2 comments, 0 👍 — newly filed today; relevant to the growing VS Code extension user base. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| **[#28813](https://github.com/openai/codex/pull/28813)** | **Pause active goals before Esc interrupts** | Fixes a state inconsistency where pressing `Esc` to interrupt a turn could leave a `/goal` in an active state instead of pausing it. Aligns `Esc` behavior with `Ctrl+C`. |
| **[#28792](https://github.com/openai/codex/pull/28792)** | **Expose thread-level multi-agent mode** | Allows clients to select multi-agent mode when creating a new thread and observe that selection through lifecycle/settings APIs. A foundational piece for the multi-agent UX. |
| **[#28685](https://github.com/openai/codex/pull/28685)** | **Add per-turn multi-agent mode** | Enables proactive delegation selection on a per-turn basis without rewriting static model context. Moves multi-agent from explicit-request-only to a flexible per-turn control. |
| **[#28806](https://github.com/openai/codex/pull/28806)** | **Optimize resume and fork history** | Applies checkpoint-backed resume and copy-on-write fork optimizations to reduce cold-start history work for `thread/resume` and `thread/fork`. Meaningful perf improvement for session-heavy workflows. |
| **[#27190](https://github.com/openai/codex/pull/27190)** | **Add streaming file APIs** | Introduces pull-based chunked `fs/readFile`/`fs/writeFile` to handle large files with bounded memory, backpressure, and cancellation. Critical for remote app-server clients. |
| **[#28815](https://github.com/openai/codex/pull/28815)** | **Send stable IDs with managed auth requests** | Carries `oaicom_stable_id` and `source_surface_stable_id` through the full auth flow (login, token refresh, device-code exchange). Improves device identity tracking for managed auth clients. |
| **[#28817](https://github.com/openai/codex/pull/28817)** | **Add plugin install extension executor** | Creates an extension boundary so core can provide host behavior for plugin installs without owning tool schema/validation. Part of a larger refactor to support plural plugin installs. |
| **[#28819](https://github.com/openai/codex/pull/28819)** | **Use plural plugin install extension in core** | Wires up the `request_plugin_installs` plural tool through the extension executor, with single-entry mode for TUI and plural mode for Desktop. |
| **[#28608](https://github.com/openai/codex/pull/28608)** | **Pass plugin namespace into skill loading** | Retains the parsed plugin manifest namespace on loaded plugins and uses it to qualify plugin skill names and cache keys. Fixes skill resolution ambiguity when multiple plugins define similarly-named skills. |
| **[#28605](https://github.com/openai/codex/pull/28605)** | **Split plugin and skill warmup tracing** | Separates the combined `session_init.plugin_skill_warmup` span into distinct `plugins_for_config` and `skills_for_config` info-level spans with stable OpenTelemetry names. Improves observability for session startup performance. |

---

## 5. Feature Request Trends

Distilled from enhancement-labeled issues and highly-upvoted requests:

1. **Projects in Codex Desktop** ([#13836](https://github.com/openai/codex/issues/13836), 13 👍) — Users want ChatGPT Projects-style containers: named project folders, movable chats, shared memory/context, and shared uploaded files within a project. The most-upvoted feature request.

2. **Better session/chat surfacing in Desktop** ([#20817](https://github.com/openai/codex/issues/20817)) — Surface chats awaiting permission or recently completed at the top of the sidebar, so users don't lose track of active work.

3. **Repo-local skills as slash commands in remote/phone composer** ([#28754](https://github.com/openai/codex/issues/28754)) — Skills defined in `.agents/skills` should appear in the `/` picker when using Codex from a phone or remote context.

4. **TUI: avoid interrupting active typing** ([#28551](https://github.com/openai/codex/issues/28551)) — When the model asks a question mid-type, keystrokes get swallowed and accidental `y`/`n`/`p` inputs trigger unintended actions. Request for a "typing lock" or buffered input mode.

5. **Adjust `/goal` mode quota / reduce its token cost** ([#28688](https://github.com/openai/codex/issues/28688)) — Even 20x Pro users report burning through weekly limits quickly in `/goal` mode. Requests for tier-adjusted quotas or more efficient token usage.

---

## 6. Developer Pain Points

**macOS is the primary source of friction.** Four distinct macOS-specific bugs dominate the issue list: websocket reconnect loops ([#18960](https://github.com/openai/codex/issues/18960)), `rg` blocked by Gatekeeper ([#28190](https://github.com/openai/codex/issues/28190)), `syspolicyd` exhaustion ([#28071](https://github.com/openai/codex/issues/28071)), and unbounded Crashpad dumps ([#25921](https://github.com/openai/codex/issues/25921)). Together, they paint a picture of the Codex Desktop app struggling with macOS platform integration — security policy, process lifecycle, and crash reporting.

**Authentication is a recurring nightmare.** Issue [#25670](https://github.com/openai/codex/issues/25670) (33 comments) shows users trapped in MFA loops despite having fully configured auth. Combined with the new rate-limit reset complaint ([#28811](https://github.com/openai/codex/issues/28818)), there's a growing trust gap around account access and billing fairness.

**Safety checks are over-triggering.** The false-positive cybersecurity flag ([#28015](https://github.com/openai/codex/issues/28015)) interrupting ordinary DevOps work suggests the safety model's precision needs tuning — especially for paid Pro users who expect fewer interruptions.

**i18n gaps are blocking users entirely.** The Korean Windows username crash ([#28262](https://github.com/openai/codex/issues/28262)) and the non-English filename search issue in the TUI ([#28527](https://github.com/openai/codex/issues/28527)) indicate that Unicode handling is not yet robust across all surfaces.

**Plugin/skill ecosystem is maturing but still rough.** Multiple PRs today are refactoring plugin install and skill loading internals, and issues like [#17066](https://github.com/openai/codex/issues/17066) (marketplace local plugin path) and [#28754](https://github.com/openai/codex/issues/28754) (skills not surfacing in remote composer) show the developer experience around extensibility is still being ironed out.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the generated digest for 2026-06-18.

---

## **Gemini CLI Community Digest: 2026-06-18**

### **1. Today's Highlights**

Today's developments focus on significant stability and dependency management updates, including a major release (`v0.48.0-preview.0`) and a massive PR (#27948) strictly pinning all direct dependencies to exact versions with a 14-day cooldown for automated updates. The community is also navigating critical security discussions, particularly around E2E test artifact poisoning and data sanitization in the Auto Memory feature.

---

### **2. Releases**

*   **v0.48.0-preview.0**: This release contains foundational work for the new version cycle, including infrastructure updates like enabling cooldowns for npm packages and general project maintenance. 
    *   [View Release](https://github.com/google-gemini/gemini-cli/pull/27999)

---

### **3. Hot Issues**

1.  **#21409: [P1] Generalist agent hangs**: A critical bug where the main agent defers to a generalist agent, causing the entire CLI to hang indefinitely until manually cancelled.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/21409)
2.  **#22323: [P1] Subagent false "GOAL success"**: Subagents report `status: "success"` even when interrupted by a `MAX_TURNS` limit, effectively hiding execution errors from the parent agent.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/22323)
3.  **#24353: [P1] Robust component level evaluations**: A major EPIC tracking the migration from behavioral evals to granular, component-level testing for core agent logic.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/24353)
4.  **#22745: [P2] AST-aware file reads**: Exploring the value of Abstract Syntax Tree (AST) awareness to allow agents to read method bounds precisely, reducing noise in context windows.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/22745)
5.  **#26522: [P2] Auto Memory retry issues**: The Auto Memory re-extracts the same low-signal sessions indefinitely because skipped sessions aren't marked as processed. 
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/26522)
6.  **#26525: [P2] Security: Auto Memory logging**: Flagged as a security concern because transcript content hits model context *before* redaction occurs, potentially exposing secrets.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/26525)
7.  **#21983: [P1] Browser subagent in Wayland**: Compatibility issue where the browser subagent fails specifically within Wayland display server environments.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/21983)
8.  **#25166: [P1] Shell execution hangs**: UI misrepresents completed shell commands as "Waiting input", blocking the developer's workflow.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/25166)
9.  **#21924: [P2] Terminal resize flicker**: Performance concerns regarding high CPU usage and flicker during terminal resizing due to inefficient rendering re-hashing.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/21924)
10. **#22093: [P2] Sub-agents running without permission**: Configuration regression since v0.33.0 where sub-agents are invoked despite being explicitly disabled in settings.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/22093)

---

### **4. Key PR Progress**

1.  **#27948**: **feat(build): 14-day dependency cooldown**: A massive change to lock down the project's dependency tree, preventing potential supply-chain issues via a 14-day enforced cooldown.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/27948)
2.  **#27996**: **fix(core): decode response body using charset**: Fixes `web-fetch` to respect `Content-Type` headers (e.g., `gbk`, `iso-8859-1`), preventing garbled text on non-UTF-8 sites.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/27996)
3.  **#27987**: **fix(cli): throw FatalConfigError instead of process.exit**: Refactors argument parsing to use exceptions instead of `process.exit`, fixing E2E test hangs for `--help` and `--version`.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/27987)
4.  **#27994**: **fix(core): literal system prompt substitutions**: Prevents special characters in skill/agent content from being misinterpreted as regex patterns during system prompt injection.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/27994)
5.  **#27859**: **feat(cli): native drag-and-drop and Cmd+V**: Adds visual multimodal parity by supporting native terminal drag-and-drop and clipboard image pasting.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/27859)
6.  **#27986**: **feat(acp): report cached and thought tokens**: Updates the ACP server to include `cached` and `thought` token counts in usage reports, fixing cost overestimation for clients.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/27986)
7.  **#27753**: **ci: validate workflow_run origin**: Security fix to prevent "artifact poisoning" from fork PRs by validating the origin of E2E artifacts.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/27753)
8.  **#27771**: **fix: MCP header encoding for non-ASCII**: Fixes MCP discovery failures when headers contain Unicode characters (e.g., `mąka`).
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/27771)
9.  **#27979**: **fix(security): wrap read_mcp_resource output**: Ensures MCP resource text is consistently wrapped with `wrapUntrusted()` to match the behavior of other MCP tools.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/27979)
10. **#27643**: **fix(build): resolve parallel compilation race**: Splits the build process into sequential topological stages to resolve race conditions in parallel workspace builds.
    *   [View PR](https://github.com/google-gemini/gemini-cli/pull/27643)

---

### **5. Feature Request Trends**

*   **Multimodal Terminal Input**: Strong demand for native image handling (drag-and-drop, clipboard paste) to bring the CLI in line with modern IDE capabilities.
*   **AST-Aware Tooling**: Developers are pushing for smarter file interaction tools that understand code structure (AST) to reduce token waste and improve agent precision.
*   **Agent Self-Awareness**: Requests for the agent to better understand its own CLI flags, hotkeys, and internal mechanics to act as a more effective guide for users.
*   **Advanced Browser Agent Resilience**: Feature requests for automatic session takeover and lock recovery in the `browser_agent` to handle persistent mode failures gracefully.

---

### **6. Developer Pain Points**

*   **Agent Reliability**: Frequent reports of agents hanging (generalist/shell) or reporting false successes (subagent `MAX_TURNS`), leading to a lack of trust in autonomous execution.
*   **Configuration Drift**: Issues where settings (like `maxTurns` or agent enablement) are ignored by sub-agents or specific environments (Wayland).
*   **Memory System Quality**: Multiple issues regarding the "Auto Memory" feature, including security concerns (secret logging), infinite retries on low-signal data, and silent failures on invalid patches.
*   **Terminal Experience**: Frustration with UI "stuck" states (shell execution) and performance degradation (flicker) during terminal resizing.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI — Community Digest

**2026-06-18**

---

## 1. Today's Highlights

Copilot CLI shipped **v1.0.64-0**, bringing a `/diagnose` command, MCP server registry browsing, expanded `/security-review` access, and CSV output for MCP tools. Meanwhile, the community is grappling with post-outage model availability issues, silent command-rewrite behavior in plugins, and a wave of MCP-related bugs. No new pull requests landed.

---

## 2. Releases

**[v1.0.64-0](https://github.com/github/copilot-cli)** — A notable feature release:

- **`/diagnose` command** — Analyze session logs directly from the CLI, streamlining debugging workflows
- **MCP registry** — Browse and install MCP servers without manual configuration
- **`/security-review` unlocked** — No longer requires `--experimental` flag, available to all users
- **Plugin-discovered MCP servers** — Installed plugins can now advertise MCP servers automatically
- **CSV output for MCP tools** — Machine-readable output for MCP tool results

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| [#3832](https://github.com/github/copilot-cli/issues/3832) | **All models show as Blocked after June 16 outage** | A widespread outage left users unable to start sessions. Closed but high-impact (13 👍), signals infrastructure fragility. |
| [#2643](https://github.com/github/copilot-cli/issues/2643) | **Silent command rewrite via preToolUse hook still shows confirmation dialog** | Plugin authors cannot bypass interactive prompts even with `permissionDecision: allow`. Breaks automation patterns. |
| [#1973](https://github.com/github/copilot-cli/issues/1973) | **Feature Request: Tool whitelist for Interactive Mode** | High-demand request (20 👍). Users want granular control — allow safe reads without `/allow-all` for destructive ops. |
| [#3812](https://github.com/github/copilot-cli/issues/3812) | **Subagents can no longer access MCP tools** | Breaks agentic workflows. MCP tools work at top-level but are invisible to spawned subagents. |
| [#3838](https://github.com/github/copilot-cli/issues/3838) | **Drive MCP OAuth not attaching despite successful auth** | Reauth flow completes but tool calls fail with missing credentials — a broken trust chain. |
| [#3835](https://github.com/github/copilot-cli/issues/3835) | **Incompatible mcp.json schema with VSCode** | `mcpServers` vs `servers` key difference forces config duplication and symlinks between `.github` and `.vscode`. |
| [#3839](https://github.com/github/copilot-cli/issues/3839) | **Ollama Cloud doesn't support `custom_tool_call` payload** | BYOK users on Ollama Cloud hit 400 errors in Fleet Mode, blocking multi-model workflows. |
| [#3355](https://github.com/github/copilot-cli/issues/3355) | **Configurable context window for Claude Opus 4.6 (200K vs 1M)** | Capping at 200K ignores 80% of model capacity, causing unnecessary compaction during deep sessions. |
| [#3560](https://github.com/github/copilot-cli/issues/3560) | **Duplicate function call ID error on tool-call turns** | Intermittent 400 error on post-tool-call turns, suggesting server-side dedup logic issues. |
| [#254](https://github.com/github/copilot-cli/issues/254) | **Persistent re-login prompts** | Long-standing auth token issue — sessions don't persist across Ctrl-C for GitHub Business accounts. |

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

---

## 5. Feature Request Trends

Based on issue activity, the community is pushing in these directions:

1. **MCP ecosystem tooling** — Registry browsing, plugin-declared MCP servers, CSV output, and preload into agent tool lists all point to MCP becoming a first-class primitive
2. **Granular permissioning** — Tool whitelists bridging the gap between per-call approval and `/allow-all`; silent command pre-approval in hooks
3. **Context window management** — Configurable limits to leverage full model capabilities instead of conservative defaults
4. **Multi-model & BYOK support** — Enterprise custom models, Ollama Cloud compatibility, and local model routing
5. **Session persistence & ergonomics** — Resumable sessions with persistent folder context, persistent `/instructions` opt-out, and effort-level switching
6. **Diagnostics** — Built-in `/diagnose` signals demand for first-party debugging and observability tooling
7. **Config unification** — Shared schema between CLI and VS Code (especially for MCP and hooks configuration)

---

## 6. Developer Pain Points

**MCP reliability** dominates user frustration. Between subagent tool invisibility (#3812), OAuth credential attachment failures (#3838), cross-client schema incompatibilities (#3835), and deferred loading causing empty tool lists (#3787), the MCP experience feels fragmented across the agent lifecycle.

**Session trust boundaries** remain under-specified. Plugin hooks that rewrite commands (#2643) can't bypass prompts, and the binary between per-command approval and blanket `/allow-all` (#1973) forces developers into clumsy workflows. The subagent model divergence (#3824) adds opacity — users don't know which model is actually executing their tasks.

**Authentication resilience** continues to surface. The June 16 outage model blockage (#3832), persistent re-login (#254), and OAuth completing without credential propagation (#3838) collectively suggest the auth layer needs hardening.

**Configuration fragmentation** is creating real friction. Separate files in `.github` and `.vscode`, divergent schema keys, and no single command to update all plugins (#3830) compound into daily overhead for power users.

---

*Data source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli) | Generated by OWL for 2026-06-18*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-18

---

## 1. Today's Highlights

A quiet day on the release front with no new versions published in the last 24 hours. The community submitted two new issues: one requesting mid-session execution mode switching (Agent ↔ Cluster), and another asking for an SSL certificate bypass option to accommodate corporate antivirus environments. No pull requests were opened or updated today.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

Only two issues were filed in the last 24 hours; both are newly opened with no community comments or reactions yet.

- **#2459 — [Feature Request] Support switching execution mode during session running (Agent ↔ Cluster)**
  Author: PresentXoX | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2459)
  This request asks for the ability to toggle between Agent and Cluster execution modes on the fly within an active session, rather than requiring a restart. This would be a significant UX improvement for developers who need to adapt their workflow mid-task — for example, switching from exploratory agentic reasoning to a more deterministic cluster-based execution without losing context. No comments or 👍 reactions yet.

- **#2458 — [Enhancement] Add option to ignore SSL certificate**
  Author: dmorsin | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2458)
  A developer in a corporate environment reports that their organization's antivirus performs SSL/TLS interception (MiMtm), replacing the expected certificate with the antivirus's own. This causes authentication failures when trying to log in. The request is for a CLI flag (e.g., `--insecure-skip-tls-verify`) to bypass certificate validation. This is a common pain point for enterprise users and, if addressed, could unblock adoption in managed corporate environments. No comments or 👍 reactions yet.

---

## 4. Key PR Progress

No pull requests were opened or updated in the last 24 hours.

---

## 5. Feature Request Trends

Based on today's issues, two emerging feature directions are visible:

1. **Runtime flexibility** — Users want more dynamic control over execution behavior (e.g., switching modes mid-session) without restarting or reconfiguring.
2. **Enterprise/network compatibility** — Developers in managed corporate environments need options to work around SSL interception, proxy configurations, and other network-level constraints imposed by IT policies.

---

## 6. Developer Pain Points

- **SSL/TLS certificate validation in corporate environments** (#2458): Strict certificate validation blocks users behind corporate antivirus or proxy infrastructure that performs TLS interception. A `--insecure` or `--skip-tls-verify` flag is a standard expectation in modern CLI tools (cf. `kubectl`, `curl -k`, `npm --strict-ssl=false`).
- **Rigid session configuration** (#2459): The inability to switch execution modes without restarting a session disrupts workflow continuity and forces developers to choose a mode upfront, reducing the tool's adaptability.

---

*Data source: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | Digest generated by OWL*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-18

---

## 1. Today's Highlights

OpenCode shipped **v1.17.8** with faster session timeline loading and critical fixes for OpenAI-compatible MCP tool schema validation and Cloudflare AI Gateway API key handling. Community activity remains intense: the GPT latency issue continues to dominate discussion with 117 comments, while feature requests around agent sandboxing, multi-agent orchestration, and a native VS Code extension are gaining serious traction. On the PR front, auto-discovery of models from OpenAI-compatible providers and native per-session goals are notable feature additions in progress.

---

## 2. Releases

### v1.17.8

**Core — Improvements**
- Session timelines now load significantly faster, eliminating flicker and scroll jumps during navigation.

**Core — Bug Fixes**
- OpenAI-compatible providers now accept MCP tool schemas that previously failed validation. ([@jquense](https://github.com/anomalyco/opencode/pull/32052))
- Cloudflare AI Gateway now correctly receives the configured API key. ([@keefetang](https://github.com/anomalyco/opencode/pull/32052))

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| [#29079](https://github.com/anomalyco/opencode/issues/29079) | **GPT Models takes too long to respond** (117 comments, 49 👍) | The most active issue by far. Users report wildly inconsistent response times with GPT models — from seconds to several minutes — even for simple prompts. This directly impacts daily usability and trust in the tool. |
| [#2242](https://github.com/anomalyco/opencode/issues/2242) | **Is there a way to sandbox the agent?** (72 comments, 54 👍) | Users want OS-level seatbelt-style restrictions (à la gemini-cli / codex-cli) to prevent agents from accessing or editing files outside the project directory. A long-standing security concern. |
| [#11176](https://github.com/anomalyco/opencode/issues/11176) | **Official OpenCode VS Code extension** (23 comments, 110 👍) | The highest-liked feature request. Users want OpenCode as a native VS Code extension rather than a standalone TUI, lowering the barrier to adoption significantly. |
| [#27589](https://github.com/anomalyco/opencode/issues/27589) | **TUI fails on Alpine Linux (musl) — getcontext symbol not found** (33 comments, 12 👍) | A regression from v1.14.48 → v1.14.50 that breaks OpenCode on Alpine Linux. Important for the Docker/container-native developer crowd. |
| [#6096](https://github.com/anomalyco/opencode/issues/6096) | **Add experimental tokens-per-second display** (18 comments, 55 👍) | Developers want real-time TPS metrics per response message to evaluate model performance and cost efficiency. |
| [#17994](https://github.com/anomalyco/opencode/issues/17994) | **Multi-agent orchestration in isolated workspaces** (21 comments) | Requests built-in support for running a "team" of coding agents in isolated workspaces, similar to emerging patterns in other agentic tools. |
| [#8456](https://github.com/anomalyco/opencode/issues/8456) | **Auto model selection based on task type** (7 comments, 36 👍) | Users want OpenCode to intelligently route tasks to appropriate models (e.g., fast model for simple edits, powerful model for complex reasoning) without manual switching. |
| [#20902](https://github.com/anomalyco/opencode/issues/20902) | **Bash tool hangs on background child processes** (9 comments, 9 👍) | Commands like `npm run build &` or `nohup cmd &` cause the bash tool to hang until timeout, completely blocking the session. A real workflow blocker. |
| [#19466](https://github.com/anomalyco/opencode/issues/19466) | **OpenCode uses ~50% CPU while idle waiting for rate limits** (9 comments, 8 👍) | While retrying after hitting API rate limits, OpenCode consumes significant CPU doing nothing — a battery and resource concern for laptop users. |
| [#24817](https://github.com/anomalyco/opencode/issues/24817) | **Ctrl+Z closes/suspends OpenCode instead of undoing text on Linux** (5 comments) | A UX regression where the terminal's SIGTSTP behavior overrides the expected undo-in-text-input behavior, frustrating Linux users. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| [#32731](https://github.com/anomalyco/opencode/pull/32731) | **Auto-discover models from OpenAI-compatible providers** | Automatically calls `GET /models` on configured OpenAI-compatible `baseURL` endpoints, eliminating the need to manually list every model in `opencode.json`. Closes [#6231](https://github.com/anomalyco/opencode/issues/6231). |
| [#27554](https://github.com/anomalyco/opencode/pull/27554) | **Local LAN provider discovery + auto-discover models** | Adds a "Local (LAN)" discovery option in `/connect` using mDNS to find local OpenAI-compatible servers. Closes [#6231](https://github.com/anomalyco/opencode/issues/6231) and [#27553](https://github.com/anomalyco/opencode/issues/27553). |
| [#32743](https://github.com/anomalyco/opencode/pull/32743) | **Native per-session goals with `/goal` command** | Introduces persisted per-session goals with status tracking (active/paused/completed) and autonomous pursuit. Closes [#27167](https://github.com/anomalyco/opencode/issues/27167) and [#29445](https://github.com/anomalyco/opencode/issues/29445). |
| [#27163](https://github.com/anomalyco/opencode/pull/27163) | **Add native session goals** | Companion PR to #32743, implementing the server-side persistence and HTTP API exposure for session goals. |
| [#32612](https://github.com/anomalyco/opencode/pull/32612) | **Exclude `-pro` models from ChatGPT-account model list** | Fixes an issue where `gpt-5.5-pro` appeared as selectable on ChatGPT OAuth accounts but every request failed. Closes [#26115](https://github.com/anomalyco/opencode/issues/26115) and [#32435](https://github.com/anomalyco/opencode/issues/32435). |
| [#28592](https://github.com/anomalyco/opencode/pull/28592) | **Fix OSC52 clipboard passthrough under GNU screen** | Previously all mux clients received tmux-specific DCS wrapping, breaking clipboard in GNU screen. Now properly distinguishes screen vs. tmux. Closes [#28590](https://github.com/anomalyco/opencode/issues/28590). |
| [#20491](https://github.com/anomalyco/opencode/pull/20491) | **Add Kiro provider (AWS)** | Adds Kiro as a provider via a bundled plugin, expanding the provider ecosystem. Closes [#9165](https://github.com/anomalyco/opencode/issues/9165) and [#26680](https://github.com/anomalyco/opencode/issues/26680). |
| [#28936](https://github.com/anomalyco/opencode/pull/28936) | **Fix TUI question taking over open dialog** | Prevents a question prompt from hijacking an already-open dialog in the TUI, improving modal interaction reliability. Closes [#28935](https://github.com/anomalyco/opencode/issues/28935). |
| [#32734](https://github.com/anomalyco/opencode/pull/32734) | **Support OpenRouter model variants** | Resolves variant-suffixed model IDs (`:free`, `:thinking`, `:nitro`, etc.) to their base catalog entries while passing the full ID to the API. |
| [#28073](https://github.com/anomalyco/opencode/pull/28073) | **Add Microsoft Foundry as built-in auth provider** | Adds Foundry to `/login` with a `chat.params` hook so Foundry's GPT-5.x deployments work correctly. Closes [#14879](https://github.com/anomalyco/opencode/issues/14879). |

---

## 5. Feature Request Trends

Based on issue volume, community engagement (👍 and comments), and PR activity, the most-requested feature directions are:

1. **Model Management & Intelligence** — Auto-discovery of models from providers ([#32731](https://github.com/anomalyco/opencode/pull/32731), [#27554](https://github.com/anomalyco/opencode/pull/27554)), TPS display ([#6096](https://github.com/anomalyco/opencode/issues/6096)), and task-based auto model selection ([#8456](https://github.com/anomalyco/opencode/issues/8456)). The community wants less manual configuration and smarter model routing.

2. **IDE Integration** — The VS Code extension request ([#11176](https://github.com/anomalyco/opencode/issues/11176), 110 👍) is the single most-liked feature request, reflecting demand for OpenCode to meet developers where they already work.

3. **Agent Sandboxing & Security** — Seatbelt-style OS sandboxing ([#2242](https://github.com/anomalyco/opencode/issues/2242), 54 👍) and concerns about privilege escalation ([#32729](https://github.com/anomalyco/opencode/issues/32729)) signal growing demand for safer agent execution boundaries.

4. **Multi-Agent & Session Orchestration** — Multi-agent workspaces ([#17994](https://github.com/anomalyco/opencode/issues/17994)), per-session goals ([#32743](https://github.com/anomalyco/opencode/pull/32743)), and session lifecycle management ([#16101](https://github.com/anomalyco/opencode/issues/16101)) point toward users wanting more structured, goal-driven agent workflows.

5. **Provider Ecosystem Expansion** — Active PRs adding Kiro ([#20491](https://github.com/anomalyco/opencode/pull/20491)), Microsoft Foundry ([#28073](https://github.com/anomalyco/opencode/pull/28073)), and GLM-5.2 support ([#32172](https://github.com/anomalyco/opencode/issues/32172), [#32620](https://github.com/anomalyco/opencode/issues/32620)) show the community pushing for broader provider coverage.

---

## 6. Developer Pain Points

- **Unpredictable latency with GPT models** ([#29079](https://github.com/anomalyco/opencode/issues/29079)) — The top-discussed issue. Inconsistent response times erode trust and disrupt flow state.
- **No agent sandboxing** ([#2242](https://github.com/anomalyco/opencode/issues/2242)) — Fear of destructive or out-of-scope agent actions remains a barrier to confident adoption, especially on shared or production-adjacent machines.
- **Background process handling** ([#20902](https://github.com/anomalyco/opencode/issues/20902)) — The bash tool hanging on `&` / `nohup` commands blocks the entire session, breaking common dev workflows like running dev servers.
- **CPU waste during rate-limit retries** ([#19466](https://github.com/anomalyco/opencode/issues/19466)) — Polling loops during backoff periods burn CPU unnecessarily, impacting battery life and system performance.
- **Session storage bloat** ([#32630](https://github.com/anomalyco/opencode/issues/32630), [#16101](https://github.com/anomalyco/opencode/issues/16101)) — SQLite databases growing to 700MB+ with no TTL, auto-cleanup, or storage caps. Users are manually inspecting and pruning database files.
- **Missing undo on Linux** ([#24817](https://github.com/anomalyco/opencode/issues/24817)) — Ctrl+Z suspending the process instead of undoing text input breaks a deeply ingrained muscle memory for Linux users.
- **Alpine/musl breakage** ([#27589](https://github.com/anomalyco/opencode/issues/27589)) — Container-native developers on Alpine Linux are blocked by a regression, highlighting gaps in cross-platform testing.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest — 2026-06-18**

---

### 1. Today's Highlights

No new releases in the past 24 hours, but the repository saw significant activity on both the issue and PR fronts. The most-discussed issue is **#5825**, where streaming markdown output forcibly scrolls the viewport to the bottom, disrupting users who try to read ahead — a pain point compounded by the `clear on shrink` setting. On the PR side, two notable merges landed: **#5849** adds a first-class **Azure AI Foundry** provider for Anthropic Claude, and **#5829** extends Pi's thinking levels to include **`max`** for adaptive reasoning models like `claude-opus-4.8`. A new open PR **#5846** directly targets the scroll-jump bug from #5825.

---

### 2. Releases

None in the last 24 hours.

---

### 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#5825](https://github.com/earendil-works/pi/issues/5825) | Streaming markdown forces scroll to bottom | Actively degrades UX during long agent responses; users can't read ahead without being yanked back. Only occurs with `clear on shrink` enabled. | 12 comments — the most active discussion today. Multiple users confirming the behavior. |
| [#5653](https://github.com/earendil-works/pi/issues/5653) | Move off Shrinkwrap | Installing both `pi-ai` and `pi-coding-agent` as direct deps creates duplicate copies of `pi-ai` on disk, causing the module-level provider registry to split into two isolated instances. | 11 comments. A real dependency-management footgun for SDK consumers. |
| [#3715](https://github.com/earendil-works/pi/issues/3715) | `local-llm` streams terminate at 5 min (undici `bodyTimeout`) | Long-running tool calls against local OpenAI-compatible backends (e.g., vLLM + Qwen3) die after exactly 5 minutes. The `retry.provider.timeoutMs` config doesn't override the undici socket-level cap. | 11 comments, 👍4. Affects anyone running long local inference workloads. |
| [#534](https://github.com/earendil-works/pi/issues/534) | Config folder is out of place on Linux | Pi places its config directly in `$HOME` instead of respecting XDG Base Directory spec (`~/.config/pi`). | 9 comments, 👍20 — the highest upvoted issue in this batch. A long-standing Linux etiquette issue. |
| [#5763](https://github.com/earendil-works/pi/issues/5763) | Providers swallow the HTTP error body | Behind a proxy/gateway, non-2xx responses with bodies that don't match the SDK schema get dropped. The same 403 surfaces differently per provider (Bedrock → `UnknownError`, OpenAI → `403 status code (no body)`), making debugging nearly impossible. | 5 comments. PR #5832 is already open to fix this. |
| [#5700](https://github.com/earendil-works/pi/issues/5700) | Support multiple live agent sessions with TUI switching | Users want to juggle concurrent agent sessions and switch between them in the TUI. Currently `switchSession` tears down the current session, so background agents can't persist. | 5 comments. A frequently-requested workflow improvement. |
| [#5654](https://github.com/earendil-works/pi/issues/5654) | Add `excludeFromContext` to custom messages sent via `sendMessage()` | Would allow custom messages (e.g., `/status` output) to be visible in the TUI without polluting the LLM context window. Mirrors the flag bash-execution messages already have. | 7 comments, 👍1. Useful for status/observability extensions. |
| [#5827](https://github.com/earendil-works/pi/issues/5827) | Warp terminal not detected for Kitty image protocol | Pi's TUI doesn't recognize Warp as image-capable, so pasted/displayed images fall back to text. | 3 comments. PR #5841 is already open to fix it. |
| [#5810](https://github.com/earendil-works/pi/issues/5810) | RPC: expose session entries and tree (`get_entries`, `get_tree`) | Would let external tools drive Pi programmatically by reading the full session entry list and tree structure via RPC, with cursor-based pagination. | 3 comments. Important for IDE integrations and external orchestrators. |
| [#5570](https://github.com/earendil-works/pi/issues/5570) | Support `--no-skills` / `--skill` behavior in project settings | Pi already supports `--no-skills` and `--skill <path>` CLI flags, but there's no way to configure this in `.pi/settings.json` for project-level defaults. | 3 comments. A natural extension of existing CLI functionality. |

---

### 4. Key PR Progress

| # | Title | Description | Status |
|---|-------|-------------|--------|
| [#5849](https://github.com/earendil-works/pi/pull/5849) | Add Azure AI Foundry provider for Anthropic Claude | New first-class `azure-foundry` provider with full Python `AnthropicFoundry` SDK parity (base URL, headers, Entra ID auth). Enables Azure infrastructure users to run Claude models natively. | ✅ Merged |
| [#5829](https://github.com/earendil-works/pi/pull/5829) | Add "max" thinking level for adaptive reasoning models | Extends `ThinkingLevel` to include `max` for `claude-opus-4.8`, `claude-opus-4.7`, `claude-opus-4.6`, and `claude-sonnet-4.6`. | ✅ Merged |
| [#5859](https://github.com/earendil-works/pi/pull/5859) | Send responses prompts as instructions | Fixes OpenAI Responses API integration by sending `context.systemPrompt` through the top-level `instructions` field instead of replaying it as `input` messages. Affects OpenAI, Azure OpenAI, and Codex Responses providers. | 🟡 Open |
| [#5846](https://github.com/earendil-works/pi/pull/5846) | Stabilize streaming code fence rendering | Directly addresses #5825 — fixes the scroll-to-bottom behavior during streaming markdown output. | 🟡 Open |
| [#5832](https://github.com/earendil-works/pi/pull/5832) | Surface provider HTTP error body instead of opaque SDK message | Fixes #5763. Routes OpenAI, Azure OpenAI, Codex, Google, Vertex, Bedrock, and Mistral error handling through a shared formatter that falls back to raw HTTP response bodies. | 🟡 Open |
| [#5841](https://github.com/earendil-works/pi/pull/5841) | Detect Warp terminal and enable Kitty image protocol | Matches `TERM_PROGRAM=WarpTerminal`, `WARP_SESSION_ID`, or `WARP_TERMINAL_SESSION_UUID` to enable Kitty graphics and OSC 8 hyperlinks. Fixes #5827. | 🟡 Open |
| [#5850](https://github.com/earendil-works/pi/pull/5850) | Bump vitest to 3.2.6, override esbuild to 0.28.1 | Mechanical dependency bump that closes 5 of 6 `npm audit` advisories (dev-only transitives). No runtime changes. | ✅ Merged |
| [#5801](https://github.com/earendil-works/pi/pull/5801) | Nixify pi | Adds a Nix flake for building and running Pi, enabling `nix build` / `nix run` / `nix profile install` workflows. | ✅ Merged |
| [#5833](https://github.com/earendil-works/pi/pull/5833) | Compaction-related fixes | Three small fixes to the compaction mechanism: reordering summary messages, fixing tool-call replay after compaction, and correcting token-count estimation. Particularly relevant for local LLM users. | ✅ Merged |
| [#5828](https://github.com/earendil-works/pi/pull/5828) | Include raw provider error bodies | Adds a shared provider error formatter that preserves raw HTTP response bodies for opaque SDK status errors, with regression tests. | ✅ Merged |

---

### 5. Feature Request Trends

- **Multi-session TUI**: Users want to run and switch between multiple concurrent agent sessions without teardown ([#5700](https://github.com/earendil-works/pi/issues/5700)).
- **Multimodal prompts**: Extending the `prompt` RPC to support video/audio content alongside images for multimodal models like Gemma 4 and GPT-4o ([#3200](https://github.com/earendil-works/pi/issues/3200)).
- **Project-level skill configuration**: Moving `--no-skills` / `--skill` into `.pi/settings.json` for per-project defaults ([#5570](https://github.com/earendil-works/pi/issues/5570)).
- **Context hygiene controls**: `excludeFromContext` flag for `sendMessage()` to prevent custom messages from bloating the LLM context ([#5654](https://github.com/earendil-works/pi/issues/5654)).
- **Extended thinking levels**: Adding `max` reasoning effort for newer Anthropic models ([#5829](https://github.com/earendil-works/pi/pull/5829) — already merged).
- **Richer RPC surface**: Exposing session entries and tree structure via `get_entries` / `get_tree` for external tooling and IDE integrations ([#5810](https://github.com/earendil-works/pi/issues/5810)).

---

### 6. Developer Pain Points

- **Streaming UX disruption**: The forced scroll-to-bottom during markdown streaming ([#5825](https://github.com/earendil-works/pi/issues/5825)) is the most active complaint today — it makes reading long agent outputs nearly impossible.
- **Opaque error reporting**: Providers silently swallowing HTTP error bodies ([#5763](https://github.com/earendil-works/pi/issues/5763)) means developers behind proxies or gateways get unhelpful messages like `Unknown: UnknownError` instead of the actual server response.
- **Dependency duplication**: The Shrinkwrap-based install creates duplicate `pi-ai` module instances, splitting the provider registry ([#5653](https://github.com/earendil-works/pi/issues/5653)). This is a silent, hard-to-debug issue for SDK consumers.
- **Local LLM timeouts**: The undici default `bodyTimeout` of 5 minutes kills long-running local inference streams, and the config knob that should override it doesn't ([#3715](https://github.com/earendil-works/pi/issues/3715)).
- **Linux config placement**: Pi ignoring XDG Base Directory spec on Linux ([#534](https://github.com/earendil-works/pi/issues/534)) remains the highest-upvoted issue in this batch (👍20) — a long-standing friction point for Linux users.
- **Encoding corruption**: File edits silently converting CP-1252 files to UTF-8 ([#5797](https://github.com/earendil-works/pi/issues/5797)), breaking older Windows C++ projects.
- **MCP startup hangs**: MCP HTTP servers returning 401/403 trigger full exponential backoff retries (~49s total), blocking startup when credentials are stale ([#5857](https://github.com/earendil-works/pi/issues/5857)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-18

---

## 1. Today's Highlights

Qwen Code shipped **v0.18.3** with a CLI fix for cancelled `ask_user_question` flows, continuing the rapid 0.18.x stabilization cycle. The community is heavily engaged around **authentication and quota pain points** — the free-tier policy discussion (#3203) remains the most-commented issue by far (151 comments). On the PR side, significant infrastructure work is underway: a **second-resolution wakeup engine** for `/loop` (PR #5182), **mid-turn message injection** for the web shell (PR #5175, now merged), and a **vision bridge** that transcribes images for text-only models (PR #5126).

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v0.18.3** | `fix(cli)`: Stop execution after a cancelled `ask_user_question` prompt — prevents the agent from continuing when the user aborts an interactive question. ([PR #5243](https://github.com/QwenLM/qwen-code/pull/5243)) |
| **v0.18.3-preview.0** | Preview track for the above fix. |
| **v0.18.2** | `fix`: Warn on oversized context instructions to avoid silent truncation. `docs`: Fix stale defaults, CLI syntax, and tool naming drift in documentation. ([PR #5073](https://github.com/QwenLM/qwen-code/pull/5073)) |
| **v0.18.1-preview.1** | Same oversized-context warning fix on the preview track. |

**Takeaway**: The 0.18.x series is focused on **context management hygiene** and **CLI edge-case hardening**. No breaking changes.

---

## 3. Hot Issues

### 🔴 #3203 — Qwen OAuth Free Tier Policy Adjustment
**151 comments** | [Link](https://github.com/QwenLM/qwen-code/issues/3203)

The community's most active discussion. A proposal to slash the free tier from 1,000 → 100 requests/day and eventually eliminate it entirely. The thread reveals deep frustration: users who depend on the free tier for evaluation and light development feel blindsided, while others acknowledge the sustainability argument. **Why it matters**: This directly affects Qwen Code's accessibility as a free developer tool and shapes its competitive positioning against Claude Code and Cursor.

### 🟡 #4479 — Token Consumption Statistics
**16 comments** | [Link](https://github.com/QwenLM/qwen-code/issues/4479)

Users want a built-in way to track daily token usage. One reporter burned 30M tokens in a single session without realizing it. **Why it matters**: Without visibility into token spend, users on paid plans can't manage costs, and free-tier users can't understand why they hit limits.

### 🟡 #3384 — Unable to Add OpenAI-Compatible Local LLM
**15 comments** | [Link](https://github.com/QwenLM/qwen-code/issues/3384)

A user running Qwen3.6-35B-A3B via vLLM at `localhost:8000/v1` cannot get Qwen Code to connect despite following the model-provider docs. **Why it matters**: Local LLM support is a key differentiator for privacy-conscious and cost-sensitive developers. Configuration friction here undermines that value proposition.

### 🟡 #5234 — Tool Call Infinite Loop
**4 comments** | [Link](https://github.com/QwenLM/qwen-code/issues/5234)

The agent gets stuck in an endless tool-call loop and never terminates. **Why it matters**: This is a reliability-critical bug — an agent that never finishes wastes tokens, blocks the session, and requires manual intervention. A fix PR (#5242) is already open.

### 🟡 #5173 — Model Provider Disambiguation Fails for Shared Model IDs
**3 comments** | [Link](https://github.com/QwenLM/qwen-code/issues/5173)

When multiple OpenAI-compatible providers register the same model ID (e.g., `qwen3.7-max`) under different base URLs, the model picker doesn't persist the correct provider across sessions. **Why it matters**: As Qwen Code supports more third-party providers, model identity collisions will become more common.

### 🟡 #5252 — DeepSeek V4 Preset Incorrectly Sets Image/Video Modalities
**2 comments** | [Link](https://github.com/QwenLM/qwen-code/issues/5252)

The built-in DeepSeek provider preset hardcodes `modalities: { image: true, video: true }` for `deepseek-v4-pro`, which is a text-only model. **Why it matters**: Incorrect capability metadata can cause the agent to attempt image sending to a model that doesn't support it, producing confusing errors. Fix PR #5268 is open.

### 🟡 #5270 — Settings Schema Rejects Documented `tools.sandbox` Values
**2 comments** | [Link](https://github.com/QwenLM/qwen-code/issues/5270)

The generated JSON Schema types `tools.sandbox` as an object, but the documentation says it should accept a boolean or string. **Why it matters**: VS Code and other editors using the schema will flag valid configurations as errors, creating unnecessary confusion.

### 🟡 #5147 — OOM After `/quit` with Large History
**3 comments** | [Link](https://github.com/QwenLM/qwen-code/issues/5147)

Short sessions can still OOM on exit when managed auto-memory builds a transcript from large text-only history. **Why it matters**: Memory pressure on exit is a sharp edge — users lose their session summary and get a crash instead of a clean shutdown.

### 🟡 #5159 — Trackpad Scroll Triggers Prompt History in tmux
**3 comments** | [Link](https://github.com/QwenLM/qwen-code/issues/5159)

On macOS inside tmux, trackpad scrolling cycles through previous prompts instead of scrolling the viewport. **Why it matters**: This is a daily-workflow blocker for macOS + tmux users, a significant segment of the developer audience.

### 🟡 #5263 — Auto-Generated Skills Should Prompt Before Persisting
**2 comments** | [Link](https://github.com/QwenLM/qwen-code/issues/5263)

When the agent auto-generates a skill (e.g., during a one-off refactor), it's saved to disk without user confirmation. **Why it matters**: Cluttering the skills directory with single-use artifacts degrades the quality of the skill system over time.

---

## 4. Key PR Progress

### ✅ Merged: PR #5175 — Web-Shell Mid-Turn Message Injection
Lets users type a message while a turn is still running and have it injected into the current turn instead of queued for the next one. A meaningful UX improvement for interactive debugging sessions. [Link](https://github.com/QwenLM/qwen-code/pull/5175)

### 🔧 PR #5182 — Second-Resolution Session Wakeup Engine
Step 1 of aligning `/loop` with Claude Code's `ScheduleWakeup`. Introduces `CronScheduler`, an independent wakeup channel separate from cron jobs — non-durable, second-resolution. Foundation for self-paced loops. [Link](https://github.com/QwenLM/qwen-code/pull/5182)

### 🔧 PR #5197 — Wire `/loop` to Self-Paced Wakeups
Step 2: makes `/loop <prompt>` (no interval) a self-paced loop that schedules at most one future continuation via `loop_wakeup`. Depends on #5182. [Link](https://github.com/QwenLM/qwen-code/pull/5197)

### 🔧 PR #5126 — Vision Bridge: Transcribe Images for Text-Only Models
Opt-in feature: when a text-only primary model receives an image, Qwen Code sends it to a configured multimodal model, converts it to text, and hands that to the primary model. Disabled by default. This dramatically expands the usable model range. [Link](https://github.com/QwenLM/qwen-code/pull/5126)

### 🔧 PR #5030 — Resume Interrupted Turns Without Synthetic "Continue" Message
Adds a first-class way to continue an unfinished assistant turn after a resume or crash without injecting a fake "continue" user message into the transcript. Classifies continuation shape from persisted history. [Link](https://github.com/QwenLM/qwen-code/pull/5030)

### 🔧 PR #5220 — Localize Tool Display Names in TUI
Routes tool-call badge labels (TodoWrite, Shell, ReadFile, etc.) through the i18n system so they render in the user's language instead of always in Chinese/English. [Link](https://github.com/QwenLM/qwen-code/pull/5220)

### 🔧 PR #5266 — Centralize Mid-Turn Event Constant + Recover Timed-Out Drains
Follow-up to #5175: deduplicates the `mid_turn_message_injected` SSE event type across three packages and fixes a narrow window where timed-out drains could leave the daemon in a bad state. [Link](https://github.com/QwenLM/qwen-code/pull/5266)

### 🔧 PR #5268 — Keep DeepSeek Presets Text-Only
Removes incorrect `modalities: { image: true, video: true }` from DeepSeek V4 defaults. Tightens provider setup flows to prevent capability metadata drift. [Link](https://github.com/QwenLM/qwen-code/pull/5268)

### 🔧 PR #5145 — Show Follow-Up Suggestion in Input Placeholder
Displays the model's suggested next prompt directly in the input placeholder area after a response, using the fast model for generation. Reduces friction for multi-step workflows. [Link](https://github.com/QwenLM/qwen-code/pull/5145)

### 🔧 PR #5260 — Configurable ACP Permission Timeout
Adds `--permission-response-timeout-ms` to `qwen serve` so operators can control how long the daemon waits for human permission responses before cancelling. Critical for CI/automation scenarios. [Link](https://github.com/QwenLM/qwen-code/pull/5260)

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **Token usage visibility** | #4479, #3267 | Users want real-time token counters, daily summaries, and per-session breakdowns. This is the most consistent operational ask. |
| **Session management** | #4825, #5030, #5182, #5197 | Demand for `sessions list`, crash recovery without synthetic messages, and self-paced loop scheduling. Users want Qwen Code sessions to feel as durable and scriptable as Claude Code's. |
| **Custom provider/model UX** | #4814, #5090, #5173 | Users want easier model addition for custom providers, decoupled provider identity from SDK protocol, and disambiguation when multiple providers share model IDs. |
| **Agent loop reliability** | #5234, #5242, #5180 | Tool-call infinite loops and subagent crashes mid-task are recurring themes. The community wants circuit breakers and better multi-agent supervision. |
| **Channel expansion** | #5201, #5202 | QQ Bot channel adapter PR is ready. Demand for broader messaging platform integration continues. |
| **Skill lifecycle management** | #5263 | Users want confirmation dialogs before auto-generated skills are persisted, and better curation tools. |

---

## 6. Developer Pain Points

1. **Authentication fragility** — OAuth sessions persisting after switching to API keys (#1855), 401 errors with valid tokens (#3335), and free-tier quota confusion (#3281) remain the top support burden. The auth surface is too complex for the number of edge cases it produces.

2. **Free tier uncertainty** — Between the policy debate (#3203), daily quota complaints (#3267), and Coding Plan availability issues (#3307, #3272), developers can't rely on a stable free offering. This drives evaluation churn.

3. **Local/self-hosted LLM setup friction** — Issue #3384 and the broader pattern of OpenAI-compatible provider configuration problems suggest the model-provider setup flow needs better validation, error messages, and onboarding.

4. **Context and memory management** — Oversized context warnings (#5073), OOM on exit (#5147), and subagent crashes from long sessions (#5180) all point to memory pressure as a systemic issue that worsens with session length.

5. **Tool-call reliability** — Infinite loops (#5234), repetitive tool-call errors (#5237), and mid-task subagent failures (#5180) erode trust in autonomous agent execution. The community needs better guardrails.

6. **Settings/schema drift** — Multiple issues (#5267, #5270) where the documented settings shape doesn't match the runtime schema or actual behavior. This creates a poor editor/IDE integration experience.

---

*Data source: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) — Digest generated 2026-06-18.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*