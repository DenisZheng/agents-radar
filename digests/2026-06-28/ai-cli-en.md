# AI CLI Tools Community Digest 2026-06-28

> Generated: 2026-06-28 00:38 UTC | Tools covered: 9

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

**Date: 2026-06-28 | Sources: GitHub community digests for 10 AI CLI projects**

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem in late June 2026 is characterized by intense competition, rapid release cadences, and convergent feature roadmaps. Six major tools — Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, and Qwen Code — are actively shipping, with DeepSeek TUI maintaining a high-velocity PR pipeline. Kimi Code CLI is dormant with no activity in the reporting window. Three dominant themes define the current cycle: (1) Windows platform stability is a universal pain point across nearly every tool; (2) agent guardrails — scope control, session integrity, memory safety — are the primary architectural battleground; and (3) token cost efficiency and billing transparency have become first-class user experience concerns as these tools move from developer-only early adoption to broader enterprise deployment.

---

## 2. Activity Comparison

| Tool | Active Issues | Active PRs | Releases (24h) | PR Velocity |
|------|:-----------:|:---------:|:--------------:|:-----------:|
| **Claude Code** | 10 hot + cluster | 2 (minimal) | 0 | Low — quiet period |
| **OpenAI Codex** | 10 hot | 10+ (incl. OAuth stack) | 3 alphas | High — rapid Rust iteration |
| **Gemini CLI** | 10 hot | 10 active | 0 | High — security/agent focus |
| **GitHub Copilot CLI** | 10 hot | 3 (thin pipeline) | 0 | Low — regressions unaddressed |
| **OpenCode** | 10 hot | 10+ (V2 infra) | 0 | High — V2 session system landing |
| **Pi** | 10 hot | 10+ (extension API) | 0 | High — 23 merged PRs |
| **Qwen Code** | 10 hot | 10 active | 1 nightly | High — daemon/streaming focus |
| **DeepSeek TUI** | 10 hot | 23 merged | 0 (queued) | Very High — busiest day on record |
| **Kimi Code CLI** | — | — | — | **No activity** |

**Key observation:** DeepSeek TUI and Pi shipped the most PRs in the reporting window (23 each), while Copilot CLI and Claude Code have the thinnest PR pipelines relative to issue volume — suggesting either internal development happening out of public view or slower response cycles.

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities simultaneously:

| Direction | Tools | Specific Needs |
|-----------|-------|----------------|
| **Windows platform parity** | Claude Code, Codex, Copilot CLI, OpenCode, Qwen Code | Broken MCP servers, clipboard failures, env var propagation, path mapping (WSL), rendering bugs, startup deadlocks |
| **Agent scope control & guardrails** | Gemini CLI, OpenCode, DeepSeek TUI, Claude Code | Silent scope expansion, subagent permission bypass, destructive ops without confirmation, self-questioning loops |
| **Session persistence & recovery** | OpenCode, Qwen Code, Codex, Pi | Undo/redo, session rename, resumable streams, cross-device sync, `/rewind` integrity |
| **Token/cost efficiency** | DeepSeek TUI, Qwen Code, Codex, Claude Code | Cache hit rate transparency, prompt slimming, output cap removal, billing visibility, rate-limit predictability |
| **Browser / Computer Use** | Gemini CLI, Qwen Code, Claude Code | Semantic+visual browser control, web testing, screenshot fallback, Chrome extension revival |
| **Extension & plugin SDK maturation** | Pi, DeepSeek TUI, Codex, Claude Code | Safe reload lifecycle, `excludeFromContext`, `reportUsage` API, marketplace source policy |
| **File exclusion / ignore mechanisms** | Codex, Gemini CLI, Qwen Code | `.codexignore`, `.qwenignore`, pre-prompt context filtering, sensitive file guards |
| **Authentication hardening** | Codex, Claude Code, Copilot CLI | OAuth token lifecycle, credential storage, 401 recovery, keychain/secret-tool integration |
| **TUI customization & opt-out** | Copilot CLI, OpenCode, Pi, DeepSeek TUI | Alt-screen mode toggle, keyboard shortcut remapping, chat padding, scroll behavior |

---

## 4. Differentiation Analysis

### Feature Focus

| Tool | Primary Differentiator | Secondary Strengths |
|------|----------------------|---------------------|
| **Claude Code** | Deep MCP integration, repo-graph RAG injection, static-analysis context pruning | Strongest enterprise/agent narrative; worktree support |
| **OpenAI Codex** | Rust CLI performance, multi-PR OAuth hardening stack, Apps MCP guidance | Fastest release cadence (3 alphas/day); Linux desktop demand |
| **Gemini CLI** | Auto Memory system, AST-aware code intelligence, browser control proposal | Security-first posture; semantic tooling (method-level reads) |
| **GitHub Copilot CLI** | Tightest GitHub ecosystem integration, alt-screen TUI | Weakest PR throughput; most platform regressions unaddressed |
| **OpenCode** | V2 session infrastructure (undo/redo/revert), Bun-native runtime, Stripe billing | Most ambitious session model; crypto payment demand signal |
| **Pi** | Extension SDK depth (`reportUsage`, `excludeFromContext`, safe reload), RPC/headless mode | Most mature extension API; programmatic adoption (RPC) |
| **Qwen Code** | Daemon architecture (HTTP+SSE), Chrome extension revival, multiplayer channel agent | Cross-device sync vision; resumable `/acp` streams |
| **DeepSeek TUI** | Fleet multi-model orchestration, cache-maximal context mode, plugin system, ACP editor backend | Highest PR velocity; token/cost scorecard as release gate |
| **Kimi Code CLI** | — | No active development observed |

### Target Users

- **Enterprise / production teams:** Claude Code (MCP, billing maturity), Codex (Rust stability, OAuth hardening)
- **Security-conscious developers:** Gemini CLI (Auto Memory redaction, AST-aware scoping), DeepSeek TUI (scorecard-gated releases)
- **Extensibility / platform builders:** Pi (extension SDK, RPC mode), DeepSeek TUI (plugin system, ACP editor backend)
- **Cost-sensitive / multi-model users:** OpenCode (OpenRouter, crypto payments), DeepSeek TUI (Fleet model routing, cache-maximal mode)
- **Cross-device / team workflows:** Qwen Code (daemon sync, multiplayer channels)

### Technical Approach

- **Rust-native:** Codex (performance, safety), DeepSeek TUI (proposed Rust runtime per #3541)
- **TypeScript/Bun:** OpenCode (Bun JIT issues on ARM64), DeepSeek TUI (current Node.js, Rust migration discussed)
- **Go:** Gemini CLI
- **Python-adjacent / polyglot:** Claude Code, Pi, Qwen Code, Copilot CLI

---

## 5. Community Momentum & Maturity

### High Momentum (Rapid Iteration)

| Tool | Evidence |
|------|----------|
| **DeepSeek TUI** | 23 merged PRs in 24h; 10 active hot issues; EPIC-driven development with scorecard gates; cache-maximal mode represents genuine architectural innovation |
| **Pi** | 23 merged PRs; extension API advancing rapidly (`reportUsage`, `excludeFromContext`, safe reload); 10+ active PRs; strong programmatic/RPC adoption signals |
| **OpenAI Codex** | 3 alpha releases in 24h; coordinated 6-PR OAuth stack; highest-impact billing issue (186 comments) actively investigated |
| **OpenCode** | V2 session infrastructure landing end-to-end (rename, undo/redo, revert); 10+ active PRs; Stripe billing integration signals commercial traction |

### Moderate Momentum

| Tool | Evidence |
|------|----------|
| **Gemini CLI** | 10 active PRs focused on agent security and guardrails; no releases but heavy PR activity; browser control proposal generating excitement |
| **Qwen Code** | 1 nightly release; daemon architecture and resumable streams in progress; Chrome extension revival; strong cross-device sync demand |

### Low Momentum / Concerning Signals

| Tool | Evidence |
|------|----------|
| **Claude Code** | 0 releases, 2 minor PRs, stale-label fatigue on high-value issues; critical SSL regression unaddressed; safety-filter false positives alienating a developer community |
| **GitHub Copilot CLI** | 0 releases, 3 thin PRs (one spam), multiple v1.0.65/1.0.66 regressions with no visible fix PRs; alt-screen mode backlash (7 👍, 10 comments) |
| **Kimi Code CLI** | No activity in the reporting window — effectively dormant |

---

## 6. Trend Signals

### 1. Windows Is the New Linux (of Complaints)
Every active tool except Pi and DeepSeek TUI reports Windows-specific regressions. This reflects Windows' growing importance as a developer platform for AI CLI tools. **Implication:** Tools that invest in Windows CI/CD and platform-specific QA will gain a competitive edge. The WSL↔Windows path corruption issue (OpenCode, 4+ issues over 3 months) is a particularly persistent architectural challenge.

### 2. Agent Guardrails Are the New Feature Battleground
The era of "move fast and break things" for AI agents is ending. Gemini CLI's scope-expansion fixes, OpenCode's V2 session revert system, DeepSeek TUI's fallback hints for tool errors, and Claude Code's safety-filter false positives all point to a market that demands **predictable, bounded agent behavior**. Tools that ship robust guardrails will win enterprise trust.

### 3. Token Economics as UX
Cache hit rates (DeepSeek TUI #1177), rate-limit opacity (Codex #28879), prompt-cache misses (Qwen Code #5942), and billing surprises (Claude Code #62898) are generating user engagement on par with feature requests. **Implication:** Cost transparency dashboards, session-level token breakdowns, and predictable pricing are no longer nice-to-have — they are retention-critical features.

### 4. Extension/Plugin Ecosystems Are Maturing
Pi's `reportUsage` API and `excludeFromContext` flag, DeepSeek TUI's plugin discovery and lifecycle system, Codex's marketplace source policy, and Qwen Code's channel-resident agents all signal a shift from monolithic tools to **platforms**. The winning tool in 12 months may be the one with the richest third-party ecosystem, not the best model integration.

### 5. Session Persistence Is Table Stakes
Undo/redo (OpenCode, Codex), resumable streams (Qwen Code), cross-device sync (Qwen Code), and session rename (OpenCode) are all actively being built. Users expect IDE-like reliability from CLI agents. Tools that rely solely on git for recovery will fall behind.

### 6. Multi-Model Orchestration Is Emerging
DeepSeek TUI's Fleet model classes (#3205), OpenCode's model-specific edge cases (GLM, NVIDIA NIM, Gemini schema errors), and Qwen Code's vision fallback model request (#5597) all indicate that **no single model dominates all use cases**. Tools that abstract model selection and routing will appeal to cost-optimizing teams.

---

### Summary for Decision-Makers

| If you prioritize… | Consider |
|---|---|
| Enterprise agent reliability | **Claude Code** (despite current quiet period) or **Gemini CLI** (security-first) |
| Release velocity & iteration speed | **DeepSeek TUI** or **OpenAI Codex** |
| Extensibility & platform play | **Pi** (extension SDK) or **DeepSeek TUI** (plugin system + ACP) |
| Cost control & multi-model | **OpenCode** or **DeepSeek TUI** |
| Cross-device / team workflows | **Qwen Code** (daemon sync architecture) |
| Fastest path to stability fixes | **OpenAI Codex** (3 alphas/day) or **Pi** (23 PRs/day) |

**Watch closely:** Kimi Code CLI's dormancy may signal strategic withdrawal or private development. GitHub Copilot CLI's thin PR pipeline relative to regression volume is a risk indicator for near-term stability.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

**Data: anthropics/skills (Official Skills Repository) | As of 2026-06-28**

---

## 1. Top Skills Ranking

The most-discussed PRs cluster heavily around **skill infrastructure reliability** rather than new domain capabilities. The dominant theme is broken CI/eval tooling and cross-platform fixes.

| # | PR | Topic | Status |
|---|-----|-------|--------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) <br>*(fix: run_eval.py 0% recall)* | Fixes a critical bug where `run_eval.py` and the entire description-optimization loop report `recall=0%` for every skill description, meaning Skill optimization has been running on **noise**. Proposes installing the eval artifact as a real Skill and fixes Windows stream reading, trigger detection, and parallel workers. | Open |
| 2 | [#1323](https://github.com/anthropics/skills/pull/1323) <br>*(fix: run_eval trigger detection)* | Follow-up to #1298 — `run_single_query` misses real Skill-name triggers and bails on the first non-Skill tool call, causing the same 0% recall symptom. Polished and recently updated (Jun 25). | Open |
| 3 | [#1099](https://github.com/anthropics/skills/pull/1099) <br>*(fix: Windows WinError 10038)* | Makes `run_eval.py` usable on Windows by fixing subprocess pipe reading that caused every query to be loggednot triggered." | Open |
| 4 | [#1050](https://github.com/anthropics/skills/pull/1050) <br>*(fix: Windows subprocess + encoding)* | Two 1-line fixes: `claude` → `claude.cmd` for WinError 2, and cp1252 encoding fallback. Couples pipeline corruption makes `run_loop.py` datasets unusable on Windows. | Open |
| 5 | [#362](https://github.com/anthropics/skills/pull/362) <br>*(fix: UTF-8 byte-length validation)* | Replaces character-count with byte-length in `quick_validate.py` to prevent Rust panics on multi-byte description fields. Adds `_utf8_byte_len()` / `_truncate_utf8_safe()` helpers. | Open |
| 6 | [#361](https://github.com/anthropics/skills/pull/361) <br>*(fix: unquoted YAML pre-parse check)* | Pre-parse validation for unquoted `description` / `compatibility` with YAML special chars (`: # { } [ ]`) that cause silent mispars. Complements #539. | Open |
| 7 | [#210](https://github.com/anthropics/skills/pull/210) <br>*(improve: frontend-design skill clarity)* | Community-driven revision of the existing frontend-design skill — more actionable instructions, tighter scope per conversation turn. | Open |
| 8 | [#514](https://github.com/anthropics/skills/pull/514) <br>*(new: document-typography skill)* | Proposes a typographic-quality control skill that catches orphan word-wrap, widow paragraphs, and numbering misalignment in AI-generated documents. | Open |

> **Key takeaway:** The top PRs are dominated by `skill-creator` / `run_eval.py` infrastructure fixes — the community's primary pain point is **Skill evaluation reliability**, not a shortage of domain skills. Every one of the top PRs is still Open.

---

## 2. Community Demand Trends (From Issues)

| Direction | Representing Issues | Community Signal |
|-----------|-------------------|------------------|
| **Trust & Security for third-party Skills** | [#492](https://github.com/anthropics/skills/issues/492) (23 comments, 👍2) — Community skills using the `anthropic/` namespace enable trust boundary abuse | **Highest-engagement issue.** Demand for namespace verification, signing, or skill-provenance metadata. |
| **Org-wide Skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (14 comments, 👍7) — Enterprise users want direct org library / share links, not manual download-and-reupload | Enterprise distribution is the top workflow blocker. |
| **Persistent memory / cross-session context** | [#1329](https://github.com/anthropics/skills/issues/1329) (6 comments) — `compact-memory` using symbolic notation; plus [#154](https://github.com/anthropics/skills/pull/154) `shodh-memory` PR (open) | Multiple independent requests for agent memory — a clear gap. |
| **Agent governance & safety** | [#412](https://github.com/anthropics/skills/issues/412) (6 comments, now closed) — Policy enforcement, threat detection, trust scoring, audit trails | Niche but repeated; no merged solution. |
| **Skills as MCP servers** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) — Expose Skill capabilities via MCP so other tools discover them | Architectural request; would unlock composability. |
| **Broader platform support** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) — Bedrock integration; [#61](https://github.com/anthropics/skills/issues/61) — Team plan 404s | Signals that the Skills ecosystem is still Claude-only and sometimes broken for paying tiers. |
| **Avoiding duplicate / conflicting Skills** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 👍9) — `document-skills` and `example-skills` plugins distribute identical content | Package-level deduplication needed. |

---

## 3. High-Potential Pending Skills (Active PRs Not Yet Merged)

These PRs have recent activity and represent capabilities the community is likely to gain soon:

| PR | Skill | Why It Matters |
|----|-------|----------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` eval fix | Unblocks the entire description-optimization pipeline. Critical infrastructure. |
| [#1323](https://github.com/anthropics/skills/pull/1323) | `run_eval` trigger detection fix | Tightly related to #1298; likely to merge in the same sweep. |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | New domain Skill — fills a real gap in AI-generated document quality. |
| [#486](https://github.com/anthropics/skills/pull/486) | `odt` (OpenDocument) | Complements existing `docx` / `pdf` skills; open-source format support. |
| [#210](https://github.com/anthropics/skills/pull/210) | `frontend-design` improvement | High-star existing Skill getting a quality refresh; likely low merge friction. |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | Comprehensive testing philosophy + React Testing Library guidance. |
| [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` / `skill-security-analyzer` | Meta-Skills that audit other Skills — directly relevant to the trust issues raised in #492. |
| [#360](https://github.com/anthropics/skills/pull/360) | `appdeploy` | Deploy full-stack web apps from Claude — high automation ambition. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand at the Skills level is not for new domain Skills, but for trustworthy infrastructure: reliable evaluation (skill-creator pipeline fixes dominate the top PRs), namespace provenance to prevent impersonation (#492), and enterprise distribution paths (#228).** Until the foundation is secure and debuggable, new Skill proposals (`odt`, `typography`, `testing-patterns`) will continue to queue without merge.

---

# Claude Code Community Digest — 2026-06-28

## 1. Today's Highlights

The most significant signal today is a **cluster of 7 cybersecurity safety-filter false positives** targeting drone/UAV development workflows, all filed within the last 24 hours by the same reporter (`sworrl`). This points to a real or perceived regression in the content-safety classifier, potentially affecting legitimate open-source hardware developers. Separately, an **expired SSL certificate on macOS** (regression in v2.1.190+) and a spate of Windows-specific auth and environment-variable bugs are generating friction. No new releases shipped today.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| 1 | [#69706](https://github.com/anthropics/claude-code/issues/69706) — API 401 Invalid authentication credentials (Windows) | Auth failures on Windows after configuration issues; top-discussed open issue | 21 comments, 👍10 — users sharing credential-reset and config-deletion recovery steps |
| 2 | [#57200](https://github.com/anthropics/claude-code/issues/57200) — Claude ignores instructions and violates rules consistently (Linux) | Agent reliability: model should follow system prompt and user rules | 9 comments, 👍5 — persistent frustration since May, no acknowledged fix |
| 3 | [#57692](https://github.com/anthropics/claude-code/issues/57692) — Opus 4.7 xHigh performance degradation post-Colossus-1 rollout | Perceived model quality regression across all power users | 4 comments, 👍3 — stall/slowness reports correlate with infrastructure changes |
| 4 | [#62898](https://github.com/anthropics/claude-code/issues/62898) — Silent entitlement regression: 200k cap on Max plan, excess charges | Financial impact: 20× token burn rate, no pricing surge notice | 4 comments — billing transparency demanded; labeled stale despite user impact |
| 5 | [#23808](https://github.com/anthropics/claude-code/issues/23808) — MCP server instructions from `initialize` response not passed to model (Windows) | Core MCP integration bug: system-prompt instructions go missing | 9 comments — closed today; partial fix but community wants regression test |
| 6 | [#71663](https://github.com/anthropics/claude-code/issues/71663) — SSL certificate expired, broken since v2.1.190 on macOS | **Regression**: TLS handshakes fail, CLI unusable for HTTPS/API calls | 2 comments — recent regression is critical; upgrade path blocked |
| 7 | [#71924](https://github.com/anthropics/claude-code/issues/71924) — `CLAUDE_PROJECT_DIR` not set in subprocess on Windows/Claude Desktop | Documented MCP environment variable missing on Windows | 2 comments — closed same day; workaround via manual export |
| 8 | [#71922](https://github.com/anthropics/claude-code/issues/71922) — `claude-in-chrome` permission-mode storm wedges CLI on Windows at startup | Startup deadlock when Chrome is not running | 1 comment — reproducible, blocks all Windows users with Chrome MCP enabled |
| 9 | [#67220](https://github.com/anthropics/claude-code/issues/67220) — Native Windows toast notifications | Feature parity: macOS/Linux have OS notifications, Windows does not | 3 comments — straightforward UX gap, community wants `windows_toast` channel |
| 10 | [#53224](https://github.com/anthropics/claude-code/issues/53224) — Static-analysis RAG primitive: pre-prompt repo graph injection cuts first-turn tokens 40.9% | Architectural innovation: repo-aware context injection reduces token spend | 5 comments — stale label applied; community sees high value if implemented |

## 4. Key PR Progress

Only 2 PRs updated in the last 24 hours — neither is feature-significant:

| PR | Status | Description |
|----|--------|-------------|
| [#71798](https://github.com/anthropics/claude-code/pull/71798) | Closed | Minor contribution by ShivaanjayNarula; no description provided |
| [#68787](https://github.com/anthropics/claude-code/pull/68787) | Open | `fix(scripts)`: Add error message to `edit-issue-labels.sh` when called with no label arguments — small CI hygiene fix |

No major feature or bug-fix PRs landed today. The repo appears to be in a quiet period or changes are landing through internal merges rather than public PRs.

## 5. Feature Request Trends

Based on all open issues, the most-requested directions are:

1. **Windows parity** — Toast notifications ([#67220](https://github.com/anthropics/claude-code/issues/67220)), `CLAUDE_PROJECT_DIR` env var ([#71924](https://github.com/anthropics/claude-code/issues/71924)), Chrome MCP startup fix ([#71922](https://github.com/anthropics/claude-code/issues/71922)). Windows users consistently report second-class-citizen gaps.

2. **VS Code extension UX polish** — Collapsible sticky prompt block ([#71928](https://github.com/anthropics/claude-code/issues/71928)), `AskUserQuestion` panel context loss ([#62390](https://github.com/anthropics/claude-code/issues/62390)), save-event propagation ([#62900](https://github.com/anthropics/claude-code/issues/62900)). The VS Code panel is a frequent source of friction.

3. **TUI/CLI interaction improvements** — Mouse capture clipboard conflict in fullscreen mode ([#71926](https://github.com/anthropics/claude-code/issues/71926)), clickable-option accidental selection ([#71921](https://github.com/anthropics/claude-code/issues/71921)). The new no-flashing TUI is generating UX complaints.

4. **Worktree support** — `.worktreeinclude` for non-gitignored files ([#71913](https://github.com/anthropics/claude-code/issues/71913)). Monorepo and multi-worktree workflows need better integration.

5. **Token efficiency / RAG** — Pre-prompt repo graph injection ([#53224](https://github.com/anthropics/claude-code/issues/53224)). Developers want smarter context loading to reduce first-turn costs.

## 6. Developer Pain Points

- **Safety-filter false positives on legitimate development work**: The cluster of 7 drone/UAV-related reports ([#71910](https://github.com/anthropics/claude-code/issues/71910), [#71901](https://github.com/anthropics/claude-code/issues/71901), [#71912](https://github.com/anthropics/claude-code/issues/71912), [#71915](https://github.com/anthropics/claude-code/issues/71915)–[#71920](https://github.com/anthropics/claude-code/issues/71920)) suggests the cybersecurity classifier is over-triggering on drone firmware, protocol analysis, and hardware SDK content. This is a **session-halting** severity for affected users and risks alienating the open-source hardware community.

- **Authentication fragility**: Multiple 401 errors ([#69706](https://github.com/anthropics/claude-code/issues/69706), [#70002](https://github.com/anthropics/claude-code/issues/70002)) coupled with corrupted `claude.json` suggest credential storage and error recovery need hardening. Users are resorting to manual config deletion.

- **macOS SSL regression** ([#71663](https://github.com/anthropics/claude-code/issues/71663)): An expired certificate in v2.1.190+ breaks all HTTPS connectivity. This is a critical infrastructure issue that needs an urgent patch release.

- **Model instruction adherence** ([#57200](https://github.com/anthropics/claude-code/issues/57200)): Users report Claude consistently ignoring system instructions and user-defined rules. This undermines trust in agent reliability for production use.

- **Billing transparency** ([#62898](https://github.com/anthropics/claude-code/issues/62898)): Silent entitlement changes and 20× token burn rates without user notification erode trust in the pricing model.

- **Stale-label fatigue**: Several high-value issues ([#53224](https://github.com/anthropics/claude-code/issues/53224), [#62898](https://github.com/anthropics/claude-code/issues/62898), [#57200](https://github.com/anthropics/claude-code/issues/57200), [#23808](https://github.com/anthropics/claude-code/issues/23808)) have been marked stale despite ongoing community engagement, suggesting the bot's inactivity threshold may be too aggressive.

---

*Generated from `github.com/anthropics/claude-code` data as of 2026-06-28.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-28

---

## 1. Today's Highlights

The Codex project is in the middle of a rapid Rust CLI release cadence with three new alphas in the last 24 hours. The most-discussed community issue is a **10–20× rate-limit cost increase on `gpt-5.5` for Plus-plan users** that surfaced on June 16, draining the 5-hour budget in just 2–3 prompts. On the PR front, a **multi-PR stack to serialize and harden MCP OAuth credential handling** is advancing through review, addressing a class of authentication failures that have plagued desktop and extension users.

---

## 2. Releases

Three Rust CLI alpha releases shipped in the last 24 hours:

| Version | Tag |
|---|---|
| `rust-v0.143.0-alpha.29` | [Release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.29) |
| `rust-v0.143.0-alpha.28` | [Release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.28) |
| `rust-v0.143.0-alpha.27` | [Release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.27) |

Release notes are minimal at this stage; the focus appears to be internal stabilization ahead of a stable cut. Notable recent stable-adjacent fixes include the SQLite log volume fix (landed in 0.142.0, [Issue #28224](https://github.com/openai/codex/issues/28224)).

---

## 3. Hot Issues

### 🔴 Critical / High-Impact

1. **[#28879](https://github.com/openai/codex/issues/28879) — Rate-limit cost per token jumped ~10–20× on `gpt-5.5` (Plus plan)**
   - **Why it matters:** Users report the 5-hour budget now lasts only 2–3 prompts instead of 20+. Session logs confirm the limit-% consumed per token increased dramatically with no plan or model change.
   - **Reaction:** 186 comments, 333 👍 — the highest-engagement issue in the dataset. Started 2026-06-18, still unresolved.

2. **[#29955](https://github.com/openai/codex/issues/29955) — Quota drained instantly: 100 credits gone after 1 message**
   - **Why it matters:** Pro-plan user on macOS sees the entire 5-hour quota reset to 0% after a single message. Potentially related to #28879 but on a different plan tier.
   - **Reaction:** 29 comments, 7 👍. Recent (2026-06-25) and under active investigation.

3. **[#28224](https://github.com/openai/codex/issues/28224) — SQLite feedback logs could write ~640 TB/year, consuming SSD endurance**
   - **Why it matters:** A logging pathology threatened hardware longevity. Three PRs merged in 0.142.0 claim an 85% log reduction.
   - **Reaction:** 93 comments, 398 👍. Closed by the reporter after fixes landed.

### 🟡 Platform-Specific Bugs

4. **[#29072](https://github.com/openai/codex/issues/29072) — Windows: `apply_patch` fails because sandbox setup exe can't launch from package path**
   - Breaks the core patching tool on Windows. 22 comments, 19 👍.

5. **[#29422](https://github.com/openai/codex/issues/29422) — Intel Mac: Computer Use / appshot fails (missing x64 service)**
   - macOS 15.7.7 x86_64 users can't use the "Attach App Snapshot" feature. 4 comments.

6. **[#29408](https://github.com/openai/codex/issues/29408) — Windows: stuck `git.exe` polling processes in multi-repo workspaces**
   - Resource leak affecting multi-repo Windows users. 6 comments.

7. **[#29787](https://github.com/openai/codex/issues/29787) — Codex app doesn't restart after update (Windows 11)**
   - Update flow leaves the app in a dead state. 3 comments.

8. **[#28672](https://github.com/openai/codex/issues/28672) — Business plan: repeated 401 "invalidated OAuth token" in Ubuntu dev containers**
   - Both seats in a Business org affected; forced phone verification loops. 6 comments.

### 🟢 Enhancement Requests

9. **[#11023](https://github.com/openai/codex/issues/11023) — Codex desktop app for Linux**
   - 130 comments, 648 👍 — the highest-👍 issue in the dataset. Users want a native Linux desktop client.

10. **[#2847](https://github.com/openai/codex/issues/2847) — Exclude sensitive files (`.codexignore`)**
    - 79 comments, 414 👍. Requests repo-local and global ignore mechanisms for the agent.

---

## 4. Key PR Progress

### MCP OAuth Credential Stack (Multi-PR Series)

A coordinated stack by `@stevenlee-oai` to fix OAuth token handling across desktop and extension surfaces:

| PR | Purpose | Status |
|---|---|---|
| [#30292](https://github.com/openai/codex/pull/30292) | Serialize shared MCP OAuth credential stores | Open |
| [#30293](https://github.com/openai/codex/pull/30293) | Serialize MCP OAuth refresh transactions | Open |
| [#30294](https://github.com/openai/codex/pull/30294) | Route MCP OAuth recovery through Codex | Open |
| [#30295](https://github.com/openai/codex/pull/30295) | Serialize MCP OAuth login and logout | Open |
| [#30296](https://github.com/openai/codex/pull/30296) | Report MCP OAuth auto-store drift | Open |
| [#30089](https://github.com/openai/codex/pull/30089) | Test MCP OAuth concurrency and recovery | Open |

> **Why it matters:** This stack supersedes earlier PRs ([#30091](https://github.com/openai/codex/pull/30091), [#30090](https://github.com/openai/codex/pull/30090), [#29020](https://github.com/openai/codex/pull/29020)) and addresses the root cause behind issues like [#27165](https://github.com/openai/codex/issues/27165) (expired bearer tokens from Keychain) and [#28672](https://github.com/openai/codex/issues/28672) (repeated 401s). Each PR is independently reviewable with documented safe stopping points.

### Other Notable PRs

6. **[#30334](https://github.com/openai/codex/pull/30334) — Telemetry: log structured tool timing events**
   - Adds granular dispatch/queue vs. handler latency breakdowns to app-server JSON logs. Open, by `@bolinfest`.

7. **[#30269](https://github.com/openai/codex/pull/30269) — Disable Nagle on Rendezvous WebSockets**
   - Latency improvement for exec-server WebSocket connections. No feature flag — unconditional rollout.

8. **[#30327](https://github.com/openai/codex/pull/30327) — Stabilize synthesized call output IDs**
   - Fixes conversation identity stability when `ContextManager` repairs unmatched calls. Closed/merged.

9. **[#30226](https://github.com/openai/codex/pull/30226) — Make Apps guidance react to MCP availability**
   - Ensures the model receives Apps MCP tool guidance even if the MCP server recovers mid-turn rather than at initial context build.

10. **[#29691](https://github.com/openai/codex/pull/29691) — Enforce marketplace source policy at runtime**
    - Enterprise plugin hardening: blocked installed plugins now become inactive. Closed/merged.

---

## 5. Feature Request Trends

Distilled from enhancement issues and high-👍 requests:

| Direction | Key Issues | Signal |
|---|---|---|
| **Linux desktop app** | [#11023](https://github.com/openai/codex/issues/11023) | 648 👍, 130 comments |
| **File exclusion / `.codexignore`** | [#2847](https://github.com/openai/codex/issues/2847), [#24993](https://github.com/openai/codex/issues/24993) | 414 👍 + 8 👍 |
| **Undo capability (`/undo`)** | [#9203](https://github.com/openai/codex/issues/9203) | 300 👍, 50 comments |
| **Per-edit confirmation mode** | [#24325](https://github.com/openai/codex/issues/24325) | 5 👍 |
| **Clickable subagent/thread chips** | [#26200](https://github.com/openai/codex/issues/26200) | 4 👍 (closed) |
| **Configurable ignore paths in `config.toml`** | [#24993](https://github.com/openai/codex/issues/24993) | 8 👍 |

**Takeaway:** The top three requests — Linux support, file exclusion, and undo — all relate to **user control and agency**. Developers want Codex to be more predictable and less destructive, especially in large or sensitive repos.

---

## 6. Developer Pain Points

### 🔥 Rate-Limiting & Billing Opacity
The dominant complaint. Users can't predict or understand why their quota vanishes. Issues [#28879](https://github.com/openai/codex/issues/28879) and [#29955](https://github.com/openai/codex/issues/29955) suggest the rate-limit accounting changed without transparent communication. The community is asking for better cost-per-token visibility in session logs.

### 🪟 Windows Platform Instability
Windows users face a disproportionate share of bugs: sandbox launch failures ([#29072](https://github.com/openai/codex/issues/29072), [#24259](https://github.com/openai/codex/issues/24259), [#20570](https://github.com/openai/codex/issues/20570)), stuck `git.exe` processes ([#29408](https://github.com/openai/codex/issues/29408)), app-server crashes ([#30378](https://github.com/openai/codex/issues/30378)), update-restart failures ([#29787](https://github.com/openai/codex/issues/29787)), and UI glitches ([#26478](https://github.com/openai/codex/issues/26478)). Windows is clearly the least stable surface.

### 🔐 Authentication & Token Management
A recurring pattern: OAuth tokens expire or get invalidated silently, causing 401s that are hard to diagnose. Issues [#28672](https://github.com/openai/codex/issues/28672), [#27165](https://github.com/openai/codex/issues/27165), [#30254](https://github.com/openai/codex/issues/30254), and [#29389](https://github.com/openai/codex/issues/29389) all trace to auth lifecycle problems. The MCP OAuth stack (above) is the most concerted effort to fix this.

### 📦 Resource Excess
The [#28224](https://github.com/openai/codex/issues/28224) SQLite logging issue (640 TB/year) and the `git.exe` process leak ([#29408](https://github.com/openai/codex/issues/29408)) point to insufficient resource guards in long-running sessions.

### ↩️ Lack of Recoverability
The `/undo` request ([#9203](https://github.com/openai/codex/issues/9203), 300 👍) and the per-edit confirmation request ([#24325](https://github.com/openai/codex/issues/24325)) reflect a structural gap: once Codex modifies files, recovery is manual (git-dependent). For non-git-tracked or uncommitted work, there's no safety net.

---

*Generated from `github.com/openai/codex` data as of 2026-06-28. Links reference the live GitHub repository.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-28

## Today's Highlights

No new releases landed in the past 24 hours, but the repo saw heavy activity on the agent and security fronts. Three separate security-related issues around **Auto Memory** (secret redaction, retry loops, invalid patch quarantine) and two hard-hitting agent bug fixes targeting **silent scope expansion** dominated the open-PR queue, signaling a push to tighten subagent guardrails before the next publish. A long-awaited browser control feature proposal also resurfaced after months of silence.

## O: section marker for anchor links
## O: indicates omitted section (no releases / section intentionally left empty)
## Releases
*No new release tags in the last 24 hours.*

---

## Hot Issues (10)

1. **#15956 — Browser Control Feature Proposal** [14 💬]
   Proposes a hybrid *semantic + visual* agent that drives a real browser via the accessibility tree (fast/cheap path) and falls back to screenshot-based Computer Use. If implemented, this would let Gemini CLI test UIs, scrape docs, and drive legacy web apps without leaving the terminal — a long-requested capability gap vs. Claude Code and Cursor.
   → [Issue #15956](https://github.com/google-gemini/gemini-cli/issues/15956)

2. **#22323 — Subagent false-success on MAX_TURN limit** [8 💬]
   The `codebase_investigator` reports `status: "success"` / `Termination Reason: "GOAL"` even when it hit the turn cap before doing any work. This masks interruptions and can hide broken behavior in evaluation pipelines — dangerous for CI.
   → [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

3. **#21409 — Generalist agent hangs indefinitely** [7 💬 · 👍8]
   Deferring to the generalist subagent hangs on trivial ops (e.g. `mkdir`). Users report ~1 h waits. Highest-engagement P1 in the list; likely affecting many默认 workflows.
   → [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

4. **#26525 — Auto Memory secret redaction is non-deterministic** [5 💬]
   Secrets enter model context *before* the extraction prompt asks the model to redact them. Proposes deterministic redaction + lower logging footprint. Security reviewers are watching.
   → [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

5. **#26522 — Auto Memory retries low-signal sessions forever** [5 💬]
   If the extraction agent decides a session isn’t worth reading, the index never marks it processed → infinite re-queueing. Wastes tokens and can starve useful extractions.
   → [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

6. **#22745 — AST-aware file read / search evaluation** [7 💬]
   Explores whether giving Claude (or Gemini) syntactic boundaries (method-level reads, AST grep) reduces misaligned file reads and token noise. Follows a related AST-mapping issue (#22746). Could be a step-change in large-codebase accuracy.
   → [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

7. **#25166 — Shell execution hangs on "Awaiting input" post-completion** [4 💬 · 👍3]
   PTY state machine doesn’t detect EOF for trivial non-interactive commands; users have to Ctrl-C. High annoyance, medium effort.
   → [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

8. **#21968 — Gemini ignores custom skills & sub-agents** [6 💬]
   Anecdotal but common: the model won’t autonomously dispatch on the very skills/subagents users wire up, defeating a core extensibility mechanism. Triggers thoughts about prompt-level priming vs. tool-description visibility.
   → [Issue #21968](https://github.com/google/gemini-cli/issues/21968)

9. **#24246 — 400 error with >128 tools** [3 💬]
   Gemini’s API rejects massive tool registries; the CLI doesn't pre-filter by enabled scope. Server-heavy MCP users are hitting this.
   → [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

10. **#22093 — Subagents run without permission after v0.33.0** [2 💬]
    A config-regression bug re-enabled subagents even when `agents: { mode: "disabled" }` was set. Maintenance-only label, but user trust impact is outsized.
    → [Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)

---

## Key PR Progress (10)

| # | Title & Link | Type | Why it matters |
|---|---|---|---|
| 28172 | [Prevent silent scope expansion on task failure](https://github.com/google-gemini/gemini-cli/pull/28172) | fix(agent) | Stops subagents from re-reading entire files or running scripts when a scoped review fails — tightens `mandateConfirm`. |
| 28171 | [Prevent silent scope expansion when initial approach fails](https://github.com/google-gemini/gemini-cli/pull/28171) | fix(agent) | Companion to 28171, larger patch covering more snippet paths. |
| 28178 | [Require approved bot patch artifacts](https://github.com/google-gemini/gemini-cli/pull/28178) | fix(security) | Makes the publish pipeline fail-closed; rejected critique runs now delete stale artifacts. |
| 28175 | [Require confirmation for shell parameter expansion](https://github.com/google-gemini/gemini-cli/pull/28175) | fix(policy) | Downgrades allowlisted commands with `$var`/`${...}` from auto-allow to confirm; blocks them in YOLO mode. |
| 28169 | [Add `eval:coverage` command](https://github.com/google-gemini/gemini-cli/pull/28169) | feat(evals) | Surfaces which built-in tools lack behavioral-eval coverage — direct response to EPIC #24353. |
| 28068 | [Guard message inspectors against empty parts arrays](https://github.com/google-gemini/gemini-cli/pull/28068) | fix(core) | Fixes `[].every() === true` bug that misclassified empty model messages as function calls/responses. |
| 28094 | [Deep-merge user & workspace settings in a2a-server](https://github.com/google-gemini/gemini-cli/pull/28094) | fix(core) | Nested sections (`tools`, `telemetry`, …) now merge correctly — unblocks multi-env server configs. |
| 28093 | [Buffer chat-compression telemetry until SDK init](https://github.com/google-gemini/gemini-cli/pull/28093) | fix(enterprise) | Prevents lost/ordering-violated OTel records during cold start. |
| 27870 | [Cap pending tool responses](https://github.com/google-gemini/gemini-cli/pull/27870) *(closed, fix merged upstream)* | fix(core) | Avoids OOM / stalls when a huge tool result is held as pending `functionResponse`. |
| 28167 | [Caretaker egress Cloud Run service](https://github.com/google-gemini/gemini-cli/pull/28167) | feat(caretaker) | Adds the automated-action executor behind a Pub/Sub topic for maintainer bot ops. |

---

## Feature Request Trends

1. **Browser / Computer-Use integration** — Issue #15956 has 14 comments and resurfaces repeatedly; users want CLI-native web testing and scraping.  
2. **AST-aware code intelligence** — #22745 + #22746 plus #24353 indicate a roadmap toward syntactic tooling (method-bounds reads, AST grep) rather than line-based heuristics.  
3. **Richer subagent observability** — #22598 (via `/chat share`) and #21763 (bug reports) request first-class visibility into subagent trajectories for review and eval.  
4. **Visual multimodal input** — Closed PR #27859 added drag-and-drop + `Cmd+V` image pasting to the terminal, a clear nod toward parity with GUI IDE agents.  
5. **Deterministic memory / secret handling** — Three Auto Memory issues (#26525, #26522, #26523) converge on "treat user transcripts as tainted until proven otherwise."

---

## Developer Pain Points

- **Agent hangs & silent misbehavior**: #21409, #25166, #22093, #22465 — the model/PTY/subagent lifecycle fails opaquely; users can’t tell whether to wait or kill.  
- **Scope creep without consent**: #22672 (destructive `git reset`/`--force`), #28155 family (silent file/script expansion) — safety nudges aren't propagating to subagents consistently.  
- **Subagent / skills discoverability**: #21968 and #21968 show that custom dispatch is under-used because Gemini won’t pick skills autonomously.  
- **Tool-overload API errors**: When many MCP servers are enabled, the registry exceeds Gemini’s tool cap → hard 400s (#24246), with no CLI-side paging heuristics yet.  
- **Config & permissions drift**: Both #22093 (subagents re-enabled post-upgrade) and #22267 (browser agent ignores `settings.json`) undermine declarative config.  

*TL;DR: The community’s biggest bets are on browser control and AST-aware tools, while the most urgent fixes revolve around subagent determinism, secure memory handling, and config reliability.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-28

---

## 1. Today's Highlights

No new releases landed in the last 24 hours, but the issue tracker saw a surge of activity around **v1.0.65/1.0.66 regressions on Windows and macOS**, including broken stdio MCP servers for `.bat`/`.cmd` commands, clipboard failures on Windows 11, and a drag-and-drop file-attach regression on macOS. A long-standing request to **disable the new alt-screen TUI mode** also resurfaced with strong community backing (7 👍, 10 comments).

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| 1 | **[#3958](https://github.com/github/copilot-cli/issues/3958)** — v1.0.66 fails to start stdio MCP servers with `.bat`/`.cmd` + args (Windows) | Regression from 1.0.65 breaks MCP tooling for Windows developers; child process dies immediately with a cmd.exe syntax error. | 0 👍 (new, needs triage) |
| 2 | **[#3949](https://github.com/github/copilot-cli/issues/3949)** — Copy on Windows 11 does not work; nothing on clipboard | Core UX broken on Windows — Copilot claims text is copied but the clipboard is empty. | 0 👍, 2 comments; duplicate already filed ([#3961](https://github.com/github/copilot-cli/issues/3961)) |
| 3 | **[#3955](https://github.com/github/copilot-cli/issues/3955)** — Drag-and-drop file attach no longer works (macOS regression) | File attachment via Finder drag-and-drop silently fails — no chip, no path inserted. Regression frustrates macOS power users. | 0 👍 (new) |
| 4 | **[#3959](https://github.com/github/copilot-cli/issues/3959)** — Visual "ghost" characters remain after deleting text in TUI | Terminal rendering bug leaves stale characters on screen, degrading readability and trust in the UI. | 0 👍 (new) |
| 5 | **[#3957](https://github.com/github/copilot-cli/issues/3957)** — Trackpad scroll selects previous prompts instead of scrolling window (MBP) | Input handling conflict on macOS makes history navigation frustrating. | 0 👍 (new) |
| 6 | **[#3962](https://github.com/github/copilot-cli/issues/3962)** — v1.0.65 not working (startup/display issues) | User reports garbled/broken UI on launch; unclear root cause but signals possible regression. | 0 👍, 1 comment |
| 7 | **[#1799](https://github.com/github/copilot-cli/issues/1799)** — How to turn off alt-screen views? | The recently shipped alt-screen mode causes issues for many users; no documented opt-out exists. | **7 👍, 10 comments** — highest engagement in the batch |
| 8 | **[#2165](https://github.com/github/copilot-cli/issues/2165)** — Ubuntu keychain support is broken | Auth flow on Linux is broken and documentation is wrong; `secret-tool` dependency not handled gracefully. | **20 👍, 2 comments** — most upvoted issue in the set |
| 9 | **[#3960](https://github.com/github/copilot-cli/issues/3960)** — Custom model provider still consuming AI quota (CLOSED) | Users expect custom providers to use their own quota, not GitHub's. Closed without visible resolution — may need follow-up. | 0 👍, closed same day |
| 10 | **[#3963](https://github.com/github/copilot-cli/issues/3963)** — Show session retention/expiration date | Users are surprised when sessions disappear; transparency into session lifecycle is missing from the status line. | 0 👍 (new feature request) |

---

## 4. Key PR Progress

Only 3 PRs were updated in the last 24 hours, and none represent substantive feature or fix work:

| PR | Status | Notes |
|----|--------|-------|
| **[#3928](https://github.com/github/copilot-cli/pull/3928)** — Add `.gitignore` and settings configuration | OPEN | Adds project-level `.gitignore` and settings files. Awaiting review. |
| **[#570](https://github.com/github/copilot-cli/pull/570)** — Add macOS installation instructions to README.md | **CLOSED** | Originally opened Nov 2025 as a Copilot coding agent task. Closed June 27 without merge — likely superseded or abandoned. |
| **[#3737](https://github.com/github/copilot-cli/pull/3737)** — "Jigg empire ai" | OPEN | Vague description ("Let's try this new method"), no clear scope. Likely low-quality/spam contribution. |

> ⚠️ **Note:** The PR pipeline is thin — no active bug-fix or feature PRs landed in the last 24 hours, which is notable given the volume of regression reports.

---

## 5. Feature Request Trends

Distilled from issue labels and content:

1. **Session & Context Management** — Users want better visibility into session lifecycle ([#3963](https://github.com/github/copilot-cli/issues/3963)) and the ability to query accumulated context without corrupting it ([#2778](https://github.com/github/copilot-cli/issues/2778), referencing Claude Code's `/btw` command).

2. **TUI/UX Customization** — Strong demand to **disable alt-screen mode** ([#1799](https://github.com/github/copilot-cli/issues/1799)) and **customize keyboard shortcuts** (e.g., `/voice` toggle, [#3672](https://github.com/github/copilot-cli/issues/3672)).

3. **Cross-Platform Parity** — Requests for mobile/iOS app generation ([#2824](https://github.com/github/copilot-cli/issues/2824)) and consistent behavior across Windows, macOS, and Linux.

4. **Quota & Provider Flexibility** — Custom model providers should not consume GitHub AI quota ([#3960](https://github.com/github/copilot-cli/issues/3960)).

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Windows regressions in v1.0.65/1.0.66** | Clipboard broken ([#3949](https://github.com/github/copilot-cli/issues/3949)), MCP `.bat`/`.cmd` servers crash ([#3958](https://github.com/github/copilot-cli/issues/3958)), general startup failure ([#3962](https://github.com/github/copilot-cli/issues/3962)) |
| **macOS input/rendering regressions** | Drag-and-drop file attach broken ([#3955](https://github.com/github/copilot-cli/issues/3955)), trackpad scroll conflict ([#3957](https://github.com/github/copilot-cli/issues/3957)), ghost characters in TUI ([#3959](https://github.com/github/copilot-cli/issues/3959)) |
| **Linux auth is fragile and under-documented** | Ubuntu keychain broken, docs wrong ([#2165](https://github.com/github/copilot-cli/issues/2165) — 20 👍) |
| **No escape hatch for alt-screen TUI** | Users forced into alt-screen mode with no config toggle ([#1799](https://github.com/github/copilot-cli/issues/1799) — 7 👍, 10 comments) |
| **Slow PR throughput vs. issue volume** | Only 3 stale/low-quality PRs active; no visible fix PRs addressing the above regressions |

---

*Generated 2026-06-28 from [github.com/github/copilot-cli](https://github.com/github/copilot-cli). For real-time updates, watch the repository or subscribe to issue notifications.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-28

## 1. Today's Highlights

No new releases in the last 24 hours, but the community is highly active with 50 issues and 50 PRs in flight. The most significant movement is on the **V2 session infrastructure** — three PRs landed today wiring up undo/redo/revert and session renaming end-to-end. Meanwhile, **WSL path-handling** continues to generate friction, with multiple issues and a new PR attempting to reject foreign directory hints before instance lookup.

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues

### [#23153](https://github.com/anomalyco/opencode/issues/23153) — Feature: Pay Go with Crypto
- **Why it matters:** 👍24, the most-upvoted active issue. Users want to pay for OpenCode Go with cryptocurrency. Signals demand for alternative billing.
- **Reaction:** Strong community interest; no official response yet.

### [#13877](https://github.com/anomalyco/opencode/issues/13877) — TUI `/sessions` Picker Only Shows Recent Sessions
- **Why it matters:** Users with many sessions can't find older ones. The picker appears to cap at a small recency window.
- **Reaction:** 9 comments, 6 👍 — a long-standing UX papercut.

### [#25848](https://github.com/anomalyco/opencode/issues/25848) — Feature: Session Renaming
- **Why it matters:** Directly addressed by PR #34264 (merged today). Users want `/rename` or a desktop equivalent.
- **Reaction:** 8 comments; likely to be closed soon.

### [#19473](https://github.com/anomalyco/opencode/issues/19473) — Desktop App Sends UNC Paths to WSL-Hosted Server
- **Why it matters:** Windows ↔ WSL interop is a recurring pain point. UNC paths (`\\wsl.localhost\...`) break bash tool calls.
- **Reaction:** Workaround exists but the root cause persists across multiple issues (#30895, #34255).

### [#12219](https://github.com/anomalyco/opencode/issues/12219) — OpenRouter Credit Limit Error with Kimi 2.5 Free
- **Why it matters:** Users hitting confusing "0 credits" errors when the real issue is `max_tokens` exceeding the model's free tier.
- **Reaction:** 7 comments, 6 👍 — poor error messaging frustrates users.

### [#19130](https://github.com/anomalyco/opencode/issues/19130) — Windows ARM64: OpenTUI Fails to Initialize (bun:ffi dlopen TinyCC)
- **Why it matters:** Native ARM64 builds work for CLI but crash on TUI startup. Blocks Windows-on-ARM users.
- **Reaction:** 6 comments, 5 👍 — niche but blocking for affected users.

### [#33890](https://github.com/anomalyco/opencode/issues/33890) — Bun 1.3.14 Segfault (SIGILL) on Linux x86_64
- **Why it matters:** TUI crashes after short uptime on Ubuntu 22.04 + AMD EPYC (Zen4/AVX-512). Points to a Bun JIT issue.
- **Reaction:** 6 comments, 5 👍 — production-impacting.

### [#33213](https://github.com/anomalyco/opencode/issues/33213) — Server Mode Memory Leak: 26.8 GiB cgroup Peak
- **Why it matters:** Long-running `opencode serve` accumulates anonymous JS heap/swap. A serious concern for production deployments.
- **Reaction:** 5 comments; no fix yet.

### [#34228](https://github.com/anomalyco/opencode/issues/34228) — Unstable/Incomplete Project Skills Exposed to Model
- **Why it matters:** With 35 skills configured, the model sees an inconsistent subset across sessions. Hurts reliability for skill-heavy workflows.
- **Reaction:** 5 comments, fresh report.

### [#34207](https://github.com/anomalyco/opencode/issues/34207) — Model Selection Silently Reverts After Answering a Question
- **Why it matters:** User switches model mid-session, agent asks a question, answer triggers a silent revert to the original model. Unexpected and hard to debug.
- **Reaction:** 4 comments; UX confusion.

---

## 4. Key PR Progress

### [#34264](https://github.com/anomalyco/opencode/pull/34264) — feat(tui): Add Session Rename ✅ Merged
- End-to-end session renaming: new `session.next.renamed` event, `SessionV2.rename` interface, `POST /api/session/:sessionID/rename` endpoint, and TUI wiring. Closes [#25848](https://github.com/anomalyco/opencode/issues/25848).

### [#34263](https://github.com/anomalyco/opencode/pull/34263) — feat(tui): Wire Up Undo/Redo/Revert for V2 Sessions ✅ Merged
- Replaces `not implemented` stubs with the V2 staged-revert API. Adds `BusyError` guard to reject revert operations while the session is active.

### [#34267](https://github.com/anomalyco/opencode/pull/34267) — fix(llm): Collapse System Messages When Plugin Appends Single Entry
- Fixes post-hook collapse logic in `request.ts` — the `system.length > 2` check was too aggressive. Closes [#34243](https://github.com/anomalyco/opencode/issues/34243) (infinite retry loop on subagent fallback).

### [#34261](https://github.com/anomalyco/opencode/pull/34261) — fix(core): Guard Non-Reducing Compaction
- Stops overflow recovery when compaction makes no progress, preventing infinite loops during context overflow. Fixes [#27924](https://github.com/anomalyco/opencode/issues/27924).

### [#34256](https://github.com/anomalyco/opencode/pull/34256) — fix(server): Reject Foreign Directory Hints Before Instance Lookup
- Addresses the WSL path corruption bug at the server level. Closes [#34255](https://github.com/anomalyco/opencode/issues/34255), related to #30895 and #19473.

### [#34242](https://github.com/anomalyco/opencode/pull/34242) — fix(tui): Prevent Piped Stdin from Breaking UI and Keyboard Input
- Closes 4 old issues (#28538, #24195, #3871, #6220). Replaces a previously auto-closed PR. Long-standing fix for a common TUI footgun.

### [#34234](https://github.com/anomalyco/opencode/pull/34234) — fix: Preserve Attachment File Paths
- Pasted/dragged files now retain their filesystem path instead of only embedded data. Closes #23801 and #17488.

### [#34220](https://github.com/anomalyco/opencode/pull/34220) — feat(app): Sticky Session List Header
- UX polish: "New Session" button stays visible while scrolling the session list.

### [#34246](https://github.com/anomalyco/opencode/pull/34246) — feat(tui): Add `tool_output_expanded_default` Option
- New `tui.json` config to default tool output to expanded state. Small but useful for debugging-heavy workflows.

### [#34227](https://github.com/anomalyco/opencode/pull/34227) — fix(console): Account for Partial Zen Refunds
- Fixes Stripe webhook to deduct actual refunded amounts and guard against double-deduction on retries.

---

## 5. Feature Request Trends

| Direction | Evidence |
|---|---|
| **Crypto payments** | #23153 (👍24) — highest-engagement issue |
| **Session management** | #25848 (rename), #13877 (full list), #31125 (empty picker) — all about finding/organizing sessions |
| **WSL + Windows Desktop interop** | #19473, #30895, #34255, #34233 — persistent path-mapping bugs |
| **Model provider expansion** | #34030 (Copilot enterprise models), #34177 (NVIDIA NIM model updates) |
| **TUI UX polish** | #34246 (tool output default), #34220 (sticky header), #34224 (hover loader) |

---

## 6. Developer Pain Points

1. **WSL ↔ Windows path corruption** — The most persistent cross-platform issue. UNC paths, `/mnt/c` remapping, and foreign directory hints break tool calls and session lists. PR #34256 is the latest attempt at a server-side fix, but the problem spans 4+ issues over 3 months.

2. **Memory and stability in long-running server mode** — #33213 (26.8 GiB leak) and #34226 (110% CPU after 3 hours) suggest resource management isn't production-hardened yet.

3. **Bun runtime crashes** — #33890 (SIGILL segfault) and #34054 (SIGTRAP on ARM64) point to Bun JIT/WASM issues on specific hardware. #19130 (Windows ARM64 FFI failure) is another Bun-level blocker.

4. **Model-specific quirks** — GLM-5.1 cache drops (#31348), GLM-5.2 image-input crashes (#34113), Gemini schema errors with nullable unions (#34130), NVIDIA NIM hangs (#34046), MiniMax-M3 CoT leakage (#34247). Each new model integration surfaces edge cases.

5. **Poor error messaging** — #12219 (OpenRouter credit error is misleading), #33766 ("unexpected server error" with no detail), #34214 (silent freeze). Users frequently can't diagnose what went wrong.

6. **Session/compaction reliability** — #34228 (inconsistent skill exposure), #34207 (silent model revert), #34261 (non-reducing compaction loop). The V2 session system is still maturing.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-28

## 1. Today's Highlights

No new releases in the last 24 hours, but the issue and PR activity remains intense. The most-discussed topic is the **streaming markdown scroll-to-bottom bug** (#5825, 34 comments) that forces users to the bottom of a response while reading. On the PR front, two significant contributions from **mitsuhiko** — safe extension reload deferral (#5735) and `excludeFromContext` for custom messages (#5678) — are open for discussion, while several quality-of-life fixes (external editor setting, `reportUsage` API, dependency cache preservation) were merged.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| [#5825](https://github.com/earendil-works/pi/issues/5825) | Streaming markdown forces scroll to bottom | Core UX regression — users cannot read ahead while the agent is streaming. Only triggers with `clear on shrink` enabled. | 34 comments; highly active thread, clearly a pain point for many users. |
| [#5763](https://github.com/earendil-works/pi/issues/5763) | Providers swallow HTTP error body | Behind proxies/gateways, non-2xx responses lose their body, making debugging impossible. Bedrock, OpenAI, Gemini all surface different opaque errors. | 5 comments; PR #5832 is open to fix this. |
| [#4106](https://github.com/earendil-works/pi/issues/4106) | Qwen3.5/3.6 Plus, MiniMax M2.7 return 404 | Pi's built-in model definitions have wrong API endpoints for these models. Pi's self-investigation identified the root cause. | Closed after investigation; follow-up from earlier #3828. |
| [#6105](https://github.com/earendil-works/pi/issues/6105) | User messages get incorrectly escaped | Typing `\"` gets escaped to `""` — a data corruption bug in message handling. Reproducible with `--no-extensions`. | Closed same day; likely to be addressed quickly given severity. |
| [#6124](https://github.com/earendil-works/pi/issues/6124) | Devanagari breaks the harness UI | Non-Latin scripts (e.g., `नेटवर्क`) crash the TUI. Internationalization gap. | Closed same day; signals need for better Unicode handling in the renderer. |
| [#6112](https://github.com/earendil-works/pi/issues/6112) | `pi install` silently fails without write permission | Exit code 0 with "Installed" message even when `settings.json` is read-only. Misleading UX. | Fixed by PR #6111. |
| [#6108](https://github.com/earendil-works/pi/issues/6108) | Release binary re-evaluates extension deps on `/reload` | Module side effects (e.g., theme registration) re-run on every reload, causing duplicate registrations. | Fixed by PR #6109. |
| [#6127](https://github.com/earendil-works/pi/issues/6127) | `--append-system-prompt` can't override default identity | Users building custom agents via `--mode rpc` cannot replace Pi's built-in coding-agent persona. | Closed same day; relevant for programmatic/RPC integrations. |
| [#6128](https://github.com/earendil-works/pi/issues/6128) | diffusiongemma thinking block rendered as normal output | Novel model architecture (diffusion + thinking) not handled — thinking tokens leak into the response. | Closed same day; edge case for emerging model types. |
| [#6129](https://github.com/earendil-works/pi/issues/6129) | Package Report: `@hypabolic/pi-hypa` | Community-flagged package gaming install counts for self-promotion. | Closed; highlights need for package vetting. |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#5735](https://github.com/earendil-works/pi/pull/5735) | Defer extension reload requests safely | **Open** (to-discuss) | Makes `ctx.reload()` available on base `ExtensionContext`, coordinated by `AgentSession` with deferral to safe boundaries. Significant extension API improvement. |
| [#5678](https://github.com/earendil-works/pi/pull/5678) | Add `excludeFromContext` for custom messages | **Open** (to-discuss) | Custom messages can now be persisted and rendered without entering model context. Also teaches compaction and branch summarization to respect the flag. |
| [#5832](https://github.com/earendil-works/pi/pull/5832) | Surface provider HTTP error body | **Open** | Fixes #5763 — ensures non-2xx response bodies from proxies/gateways are surfaced instead of dropped. |
| [#6115](https://github.com/earendil-works/pi/pull/6115) | Configurable chat padding | **Open** (to-discuss) | Addresses frequent Discord complaints about TUI padding. Author notes this is a significant structural change to the TUI. |
| [#6123](https://github.com/earendil-works/pi/pull/6123) | Add `externalEditor` setting for Ctrl+G | **Merged** | Allows configuring the external editor via `settings.json` instead of relying solely on `$VISUAL`/`$EDITOR`. Solves Windows + Git Bash pain. |
| [#6119](https://github.com/earendil-works/pi/pull/6119) | Add `reportUsage` API for extensions | **Merged** | Extensions can now feed subagent token/cost data back into the main session footer. Unblocks subagent cost tracking. |
| [#6099](https://github.com/earendil-works/pi/pull/6099) | Rename `gpt-5.2-chat-latest` → `gpt-5.2-chat` | **Merged** | Corrects model key — `chat-latest` doesn't exist in Azure OpenAI. |
| [#6111](https://github.com/earendil-works/pi/pull/6111) | Report settings write failures in install/remove | **Merged** | Fixes silent `pi install` failure when `settings.json` is read-only. Now reports the actual error. |
| [#6109](https://github.com/earendil-works/pi/pull/6109) | Preserve dependency cache on extension reload | **Merged** | Fixes `/reload` re-evaluating dependency modules, preventing duplicate side-effect execution. |
| [#6125](https://github.com/earendil-works/pi/pull/6125) | Extra package manager args for install/update | **Closed** | Proposes `npmInstallArgs`/`npmUpdateArgs` settings (e.g., `--min-release-age`). Closed in favor of further discussion. |

---

## 5. Feature Request Trends

Based on issue content, the most-requested feature directions are:

1. **Extension API Expansion** — `reportUsage()` (merged), tool execution from extensions (#6121), safe reload context (#5735), and `excludeFromContext` (#5678) all point to a maturing extension SDK. Developers want extensions to be first-class participants in sessions.

2. **Programmatic / RPC Usage** — Issues around `--append-system-prompt` identity override (#6127), audio pass-through over RPC (#6118), and SDK import path stability (#6117) signal growing adoption of Pi as a backend engine, not just a CLI tool.

3. **Package Manager Control** — Requests for extra npm args (#6125, #6126) and silent install failures (#6112) reflect a desire for more granular control over extension installation and updates.

4. **TUI Customization** — Chat padding (#6115), external editor configuration (#6122, merged), and Devanagari rendering (#6124) all point to demand for a more flexible, accessible interface.

5. **Model Compatibility** — New model architectures (diffusiongemma, #6128), provider-specific quirks (Azure OpenAI model keys, #6114; opencode-go thinking, #6116), and provider error transparency (#5763) remain a constant theme as the model landscape fragments.

---

## 6. Developer Pain Points

- **Silent failures** — `pi install` reporting success without write permission (#6112) and providers silently dropping HTTP error bodies (#5763) are recurring patterns where Pi hides errors instead of surfacing them.

- **Extension lifecycle bugs** — `session_start` firing before `initTheme` (#6110), dependency re-evaluation on `/reload` (#6108), and the need for safe reload deferral (#5735) all indicate the extension loading lifecycle is still being stabilized.

- **Internationalization gaps** — Devanagari script crashing the harness (#6124) is a stark example of the TUI's Unicode handling limitations.

- **Identity/personalization for headless use** — Users building on top of Pi via RPC cannot cleanly override the default system prompt identity (#6127), limiting custom agent frameworks.

- **Streaming UX** — The scroll-to-bottom bug (#5825) is the highest-engagement issue in the last 24h, indicating that real-time streaming interaction quality is a top priority for active users.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-28

---

## 1. Today's Highlights

The `v0.19.2-nightly` release shipped with a critical fix for `web_fetch` JSON fallback handling. On the feature side, two major architectural efforts advanced: the **Chrome extension revival** (daemon-direct) and a **resumable `/acp` session stream** with Last-Event-ID support. Meanwhile, the community continues to push hard on **session persistence and cross-device sync** — todos, memories, and plans remain siloed per-machine, a recurring theme across multiple issues.

---

## 2. Releases

**v0.19.2-nightly.20260627.d93bec905** ([release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260627.d93bec905))

- **fix(core):** Allow `web_fetch` JSON fallback — ensures web content retrieval degrades gracefully when strict JSON parsing fails ([@tt-a1i](https://github.com/QwenLM/qwen-code/pull/5660)).

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| [#5836](https://github.com/QwenLM/qwen-code/issues/5836) | **Todos/plans/memories should persist to project dir for cross-device sync** | Currently all task state lives in `~/.qwen/` outside Git. Multi-device or team workflows are impossible. 4 comments, strong community resonance. |
| [#5823](https://github.com/QwenLM/qwen-code/issues/5823) | **`/loop` cron tasks fire silently — model can't list or stop its own scheduled tasks** | Background automation runs invisibly; users lose control. Highlights need for observability into cron state. |
| [#5756](https://github.com/QwenLM/qwen-code/issues/5756) | **8K default output cap truncates large `write_file` calls, causing retry loops** | Directly impacts code-generation reliability. Closed after PR [#5934](https://github.com/QwenLM/qwen-code/pull/5934) fixed it. |
| [#5838](https://github.com/QwenLM/qwen-code/issues/5838) | **Allow user to adjust agent-initiated command timeout** | Agent-spawned processes with long execution times get killed prematurely. 6 comments requesting configurability. |
| [#5875](https://github.com/QwenLM/qwen-code/issues/5875) | **Improve skill command name auto-complete (substring match)** | Currently requires exact prefix match. `/store` won't find `front-end-store-rules`. UX friction for skill-heavy workflows. |
| [#5889](https://github.com/QwenLM/qwen-code/issues/5889) | **Add `.qwen/loop.md` task file injected at fire time for `/loop`** | Long-running loops have no durable, editable instruction store. Model must re-state tasks every tick. |
| [#5867](https://github.com/QwenLM/qwen-code/issues/5867) | **Add a Git-shared "team" tier to auto-memory** | Auto-memory is private per-user. Teams can't share project context across members. |
| [#5942](https://github.com/QwenLM/qwen-code/issues/5942) | **Anthropic provider: avoidable prompt-cache misses inflate cost** | Two independent cache-miss bugs vs. Claude Code on the same backend. Direct cost impact for users on Anthropic-protocol providers. |
| [#5920](https://github.com/QwenLM/qwen-code/issues/5920) | **`/rewind` records have `parentUuid: null`, breaking conversation history on resume** | Session resume is fundamentally broken — history bar loses all but the latest turn. Closed after fix. |
| [#5941](https://github.com/QwenLM/qwen-code/issues/5941) | **Scrolling up during model output jumps to top (Windows)** | Rendering bug on Windows makes reading streaming output impossible. 2 comments, Windows-specific. |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#5934](https://github.com/QwenLM/qwen-code/pull/5934) | **fix(core): stop truncated write_file/edit retry loops** | ✅ Closed | Replaces the 8K `CAPPED_DEFAULT_MAX_TOKENS` with the model's declared output limit. Fixes [#5756](https://github.com/QwenLM/qwen-code/issues/5756). Follow-up [#5939](https://github.com/QwenLM/qwen-code/pull/5939) refines no-op escalation for high-output models. |
| [#5852](https://github.com/QwenLM/qwen-code/pull/5852) | **feat(daemon,sdk): resumable `/acp` session stream (Last-Event-ID)** | 🔵 Open | Wires SSE `id:` lines into the daemon event-replay engine so reconnecting clients resume from where they dropped. Also exports opt-in SDK transports. |
| [#5777](https://github.com/QwenLM/qwen-code/pull/5777) | **feat(browser-ext): revive Chrome extension via daemon-direct architecture** | 🔵 Open | Replaces the old Native Messaging host with a thin `qwen serve` HTTP+SSE client. Side panel chat connects directly to the local daemon. |
| [#5911](https://github.com/QwenLM/qwen-code/pull/5911) | **fix(desktop): normalize source slug validation errors** | 🔵 Open | Defense-in-depth follow-up to [#5829](https://github.com/QwenLM/qwen-code/issues/5829). Normalizes invalid/legacy slug paths so callers get structured validation results. |
| [#5945](https://github.com/QwenLM/qwen-code/pull/5945) | **fix(serve): reject non-positive sessionRecapAwayThresholdMinutes** | 🔵 Open | Adds `minimum: 1` to the setting schema. Fixes [#5680](https://github.com/QwenLM/qwen-code/issues/5680). |
| [#5927](https://github.com/QwenLM/qwen-code/pull/5927) | **fix(core): improve cron tool search intents** | ✅ Closed | "How do I stop this cron?" now correctly surfaces `cron_delete` over creation tools. |
| [#5921](https://github.com/QwenLM/qwen-code/pull/5921) | **feat(cli): show scheduled task count in footer** | ✅ Closed | Adds `◎ N scheduled tasks` pill to the footer when cron jobs are pending. Addresses [#5823](https://github.com/QwenLM/qwen-code/issues/5823) visibility. |
| [#5888](https://github.com/QwenLM/qwen-code/pull/5888) | **feat(channels): qwen tag — multiplayer channel-resident agent (RFC + Phase 0)** | 🔵 Open | Introduces a DingTalk-first group agent living in chat, built on `qwen serve` daemon. Multiplayer agent architecture. |
| [#5030](https://github.com/QwenLM/qwen-code/pull/5030) | **feat(core,cli,sdk): resume interrupted turn without synthetic "continue"** | 🔵 Open | SDK/stream-json callers can continue unfinished assistant turns after crashes without polluting transcripts. |
| [#5944](https://github.com/QwenLM/qwen-code/pull/5944) | **fix(core): halt repeated shell inspection variants** | 🔵 Open | Loop guard for semantically similar `git status`/`git diff`/`git ls-files` calls that waste context budget. |

---

## 5. Feature Request Trends

Based on issue labels, community votes, and comment volume, the most-requested directions are:

1. **Cross-device & team synchronization** — Todos, plans, memories, and session state are trapped on single machines. Multiple issues ([#5836](https://github.com/QwenLM/qwen-code/issues/5836), [#5867](https://github.com/QwenLM/qwen-code/issues/5867)) call for Git-backed or project-local persistence tiers.

2. **Background automation observability** — `/loop` and cron tasks need dashboards, mid-run editing, and explicit stop/list controls ([#5823](https://github.com/QwenLM/qwen-code/issues/5823), [#5889](https://github.com/QwenLM/qwen-code/issues/5889)).

3. **Browser extension / external integrations** — The Chrome extension revival ([#5777](https://github.com/QwenLM/qwen-code/pull/5777), [#5626](https://github.com/QwenLM/qwen-code/issues/5626)) and Telegram bot completion ([#5907](https://github.com/QwenLM/qwen-code/issues/5907)) show strong demand for non-IDE surfaces.

4. **Output & token management** — The 8K cap removal ([#5934](https://github.com/QwenLM/qwen-code/pull/5934)) and Anthropic cache optimization ([#5942](https://github.com/QwenLM/qwen-code/issues/5942)) reflect cost-consciousness at scale.

5. **Multi-model & vision fallback** — `/model --vision` ([#5597](https://github.com/QwenLM/qwen-code/issues/5597)) requests a dedicated vision fallback model for text-only primaries.

---

## 6. Developer Pain Points

- **Silent cron execution** — Background tasks fire with no UI visibility or model-accessible introspection API. Developers are discovering scheduled tasks by accident sessions later. ([[#5823](https://github.com/QwenLM/qwen-code/issues/5823)])

- **Session state fragility** — `parentUuid: null` in `/rewind` records ([[#5920](https://github.com/QwenLM/qwen-code/issues/5920)]) and edit-tool result summaries persisting across all subsequent turns ([[#5894](https://github.com/QwenLM/qwen-code/issues/5894)) erode trust in conversation continuity.

- **Output truncation retry loops** — The 8K cap silently truncated large `write_file` outputs, causing the model to retry the same oversized call indefinitely ([[#5756](https://github.com/QwenLM/qwen-code/issues/5756)). Now fixed, but the no-op escalation path for Gemini models still needs work ([[#5939](https://github.com/QwenLM/qwen-code/pull/5939)).

- **Prompt cache cost leaks** — Anthropic-protocol users are paying 2–3× more than necessary due to two independent cache-miss bugs that Claude Code doesn't have ([[#5942](https://github.com/QwenLM/qwen-code/issues/5942)).

- **Windows rendering bugs** — Scroll-during-streaming jumps to top ([[#5941](https://github.com/QwenLM/qwen-code/issues/5941)) and `cua-driver.exe` consuming CPU at idle ([[#5922](https://github.com/QwenLM/qwen-code/issues/5922)) degrade the Windows experience.

- **Shell tool loops** — The model repeatedly calls `git status`/`git diff`/`git ls-files` within a single turn, wasting context and API budget. A loop guard is in progress ([[#5944](https://github.com/QwenLM/qwen-code/pull/5944)).

---

*Data source: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) — Snapshot at 2026-06-28*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-28

---

## 1. Today's Highlights

No new release in the last 24 hours, but the community shipped an impressive **23 merged PRs** — one of the busiest days on record. This was heavily a **token/cache discipline day**: the first release-gate scorecard landed, cache-maximal context mode was implemented, prompt slimming continued, and UI tooling (plugins, ACP streaming, hotbar) advanced in parallel. The biggest debate on the forum threads is still **prompt caching hit rates** vs. DeepSeek-Reasonix, with a strong appetite for transparency on the root cause.

---

## 2. Releases

None in the last 24 hours. Multiple merged PRs (scorecard, prompt slimming, shell-only benchmark, cache-maximal mode) appear to be queued behind a **v0.8.66 release ledger** ([PR #3707](https://github.com/Hmbown/CodeWhale/pull/3707)) rather than cut as an independent tag.

---

## 3. Hot Issues (10)

| # | Issue | Why it matters | Community pulse |
|---|-------|---------------|-----------------|
| 1 | **#1177** — [Input cache hit rate is far too low](https://github.com/Hmbown/CodeWhale/issues/1177) | Top-commented issue (24 💬). Integration reports ~95 %+ hit rate with DeepSeek-Reasonix vs. significantly worse in the TUI — a direct cost/performance regression for power users. | Frustration; multiple users have independently reproduced. Team has not yet published root-cause analysis. |
| 2 | **#1120** — [Cache hit problems persist](https://github.com/Hmbown/CodeWhale/issues/1120) | 21 comments. Tracks whether the `input_cache_miss` regression was actually fixed in 0.8.17 or if it is a false positive. | Open debate on whether the metric itself is correct. |
| 3 | **#743** — [Token consumption is orders-of-magnitude too high](https://github.com/Hmbown/CodeWhale/issues/743) | 13 comments. Concrete case: ~400M tokens burned in half a day, suspected conversation-payload bloat per request. | Reinforces the urgency of #3388 (token/cache release gate). |
| 4 | **#3275** — [CodeWhale over-extends and deviates from user intent](https://github.com/Hmbown/CodeWhale/issues/3275) | 12 comments. Regression from #3061 — agent enters a self-questioning/self-answering loop without user confirmation. | High-stakes UX issue; affects trust in autonomous mode. |
| 5 | **#3568** — [Plan and Agent modes still mixed up](https://github.com/Hmbown/CodeWhale/issues/3568) | 6 comments + 1 👍. Includes full chat export proving the model failed to recognise a mode switch and continued executing. | Recurring problem; evidence-driven report keeps it alive. |
| 6 | **#3192** — [Register on agentclientprotocol/registry](https://github.com/Hmbown/CodeWhale/issues/3192) | 12 comments. Would make CodeWhale one-click-installable in Zed and other ACP-native editors. | Cross-tool community enthusiasm; enabled by PRs #3698 and #3702 landing today. |
| 7 | **#3205** — [Fleet model classes, loadout auto, semantic route roles](https://github.com/Hmbown/CodeWhale/issues/3205) | 10 comments. Core architecture issue for multi-model Fleet orchestration. | Maintainer-led; defines the v0.8.65 Fleet auto-mode contract. |
| 8 | **#3480** — [EPIC: TUI information architecture & visual UX overhaul](https://github.com/Hmbown/CodeWhale/issues/3480) | 2 comments. Describes the TUI as "cramped and low-signal" when sub-agents, tasks, approvals, streaming, and sidebars are all visible. | Long-felt need; now tracked as a formal epic. |
| 9 | **#3541** — [Rust-based native runtime / desktop client](https://github.com/Hmbown/CodeWhale/issues/3541) | 3 comments. Proposes moving off the Node.js TUI to reduce cold-start latency, memory footprint, and event-loop stalls. | Recurring theme; today's plugin-system PRs (#3692, #3699) are a partial step. |
| 10 | **#528** — [Cache-maximal context mode: re-read active files](https://github.com/Hmbown/CodeWhale/issues/528) | 3 comments. Thesis: DeepSeek V4 makes cached input cheap enough to keep the full working set resident instead of summarising. | Largely implemented by PR #3697 today — issue may soon be closable. |

---

## 4. Key PR Progress (10)

| PR | Title | What landed |
|----|-------|-------------|
| [#3693](https://github.com/Hmbown/CodeWhale/pull/3693) | **Token/cache/cost release-gate scorecard** | First concrete slice of EPIC #3388. Adds a committed baseline with regression detection so future PRs can't silently inflate token usage. |
| [#3697](https://github.com/Hmbown/CodeWhale/pull/3697) | **Cache-maximal context mode — materialise active file contents** | Implements #528. Opt-in mode injects full file contents for the top-N active files each turn instead of a path list, reducing redundant tool calls. |
| [#3696](https://github.com/Hmbown/CodeWhale/pull/3696) | **Override base prompt from config dir** | Closes core of #3638. Users can now swap the system prompt for non-coding use cases (writing, review) without rebuilding. |
| [#3699](https://github.com/Hmbown/CodeWhale/pull/3699) / [#3692](https://github.com/Hmbown/CodeWhale/pull/3692) | **Lightweight plugin system** | Two complementary PRs adding discovery, registry, lifecycle, and system-prompt injection for external skills/MCP servers bundled as filesystem plugins. |
| [#3702](https://github.com/Hmbown/CodeWhale/pull/3702) | **ACP: stream session/prompt deltas as session/update chunks** | Follow-up to #3698. Editors like Zed can now render agent output incrementally instead of waiting for the full turn. |
| [#3698](https://github.com/Hmbown/CodeWhale/pull/3698) | **ACP: cancel in-flight session/prompt on session/cancel** | Fixes serial-read-loop bug so cancellation is observed immediately, enabling reliable multi-turn editing. |
| [#3703](https://github.com/Hmbown/CodeWhale/pull/3703) / [#3701](https://github.com/Hmbown/CodeWhale/pull/3701) | **Fallback hints for repeated tool errors** | Closes #1641. After repeated recoverable tool failures, the model now receives structured guidance to switch tools or narrow scope instead of retrying identically. |
| [#3700](https://github.com/Hmbown/CodeWhale/pull/3700) | **Verifier: emit hunt verdict mapping** | Closes #2093. Maps pass/partial/fail → hunted/wounded/escaped in structured output. |
| [#3690](https://github.com/Hmbown/CodeWhale/pull/3690) | **Locale-aware skill descriptions** | Closes #3354. Non-English sessions now get translated skill metadata, saving tokens previously wasted on English-only descriptions. |
| [#3706](https://github.com/Hmbown/CodeWhale/pull/3706) | **Layer 4.2: Registry cleanup, docs, full validation (FEAT-008)** | Completes the staged command-boundary refactor started in EPIC #2870. |

---

## 5. Feature Request Trends

1. **Token & cost efficiency** — The dominant theme. Cache-maximal mode, prompt slimming (#2953), output discipline (#2957), and the release-gate scorecard (#3388) all aim to close the gap with Codex CLI on input-token consumption. Cache-hit rate (#1177, #1120) is the most emotionally charged sub-topic.

2. **ACP / editor integration** — Streaming (#3702), cancellation (#3698), and registry listing (#3192) show a push to make CodeWhale a first-class agent backend for Zed and similar editors.

3. **Plugin & extensibility** — Two plugin-system PRs landed in one day. The community wants third-party skills and MCP servers to be first-class citizens with discovery and lifecycle management.

4. **Non-coding use cases** — Prompt override (#3638/#3696) and Chinese-language skills (#3354) signal demand beyond software engineering: writing, document review, and locale-native workflows.

5. **Rust-native runtime** — Issue #3541 explicitly requests moving off Node.js. While not yet committed to, it reflects growing pain around cold-start latency and memory in long agent sessions.

6. **Fleet / multi-model orchestration** — Issues #3205 and #2300 track the architecture for automatic model/loadout selection across roles, a differentiator for CodeWhale in multi-agent setups.

---

## 6. Developer Pain Points

- **Cache opacity** — Multiple users report they cannot reconcile reported hit rates with their actual billing. The lack of a public root-cause analysis for #1177 is the single biggest trust gap.
- **Runaway token consumption** — Issues #743, #1818, and #1177 all describe scenarios where token usage is 10× expected. The scorecard PR (#3693) is the first structural response.
- **Agent autonomy vs. control** — #3275 documents a regression where the agent acts on self-generated plans without confirmation. This is a recurring tension in agentic tools and directly impacts production trust.
- **Plan/Agent mode confusion** — #3568 is the latest in a long line of reports that the model does not correctly distinguish or persist mode switches.
- **TUI readability** — #3480 and #1747 both describe the interface as hard to parse during real work, especially with multiple surfaces visible simultaneously.
- **Cold-start latency** — #3541 frames the Node.js runtime as a bottleneck; this is a structural complaint that will grow with session length.
- **Tool retry loops** — #1641 (now addressed by #3703/#3701) was a long-standing frustration: the agent would retry failing external-service calls indefinitely instead of degrading gracefully.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*