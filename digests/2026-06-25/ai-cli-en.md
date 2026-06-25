# AI CLI Tools Community Digest 2026-06-25

> Generated: 2026-06-25 00:39 UTC | Tools covered: 9

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

# AI CLI Tools Cross-Comparison Report — 2026-06-25

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem in mid-2026 is in a phase of rapid convergence and differentiation. Seven major tools — Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI (CodeWhale) — are competing on a remarkably similar feature surface: MCP integration, sub-agent orchestration, session persistence, extensibility hooks, and multi-provider support. The past 24 hours show **patch-level iteration** on stability and security across most tools, with **major architectural bets** in MCP client parity (OpenCode, Codex), multi-agent systems (DeepSeek TUI Fleet, Codex Ultra), and context management (Claude Code `/rewind`, Codex WorldState). Token cost predictability has emerged as a **cross-cutting user pain point**, with at least four communities (Codex, Kimi, Qwen, Copilot) fielding complaints about unexpected budget drain. Security hardening — path traversal, thought leakage, subprocess sanitization — is an active theme, with Claude Code and Qwen Code both receiving critical security PRs in this window.

---

## 2. Activity Comparison

| Tool | New Releases (24h) | Open Issues (notable) | PRs Merged (24h) | PRs Open (notable) | Security PRs |
|---|---|---|---|---|---|
| **Claude Code** | 2 (v2.1.191, v2.1.190) | 372 👍 (multi-account mobile) | — | 5 (2 critical security) | ✅ 2 |
| **OpenAI Codex** | 1 patch (rust-v0.142.1) | 620 💬 (token burn, VS Code) | — | 10+ (WorldState stack, Ultra) | — |
| **Gemini CLI** | 0 | 8 👍 (agent hangs) | 3 merged | 7 open | 1 |
| **GitHub Copilot CLI** | 1 (v1.0.65) | 21 👍 (skill subfolders) | 1 merged | — | — |
| **Kimi Code CLI** | 0 | 7 👍 (usage calculation) | 2 merged | — | — |
| **OpenCode** | 1 (v1.17.10) | 39 👍 (privacy, session naming) | 1 merged | 10+ (MCP parity push) | 1 |
| **Pi** | 0 | 30 👍 (openai-codex hangs) | 8 merged | 1 open | — |
| **Qwen Code** | 1 (v0.19.2) | Path traversal vulnerability | 5 merged | 4 open | 1 |
| **DeepSeek TUI** | 0 | 12 👍 (agent over-reach) | 7 merged | 2 open | — |

**Key takeaway:** Pi and DeepSeek TUI show the highest PR merge velocity (8 and 7 respectively), indicating active maintenance despite no new releases. Claude Code leads in community engagement (372 👍 top issue). OpenCode has the most coordinated multi-PR feature push (MCP parity).

---

## 3. Shared Feature Directions

### 3.1 MCP Client Parity
**Tools:** OpenCode, OpenAI Codex, Claude Code, DeepSeek TUI, Pi
- OpenCode has a **coordinated 5-PR push** for resource subscriptions, templates, completion, and progress tracking.
- Codex community is pushing for **29+ hook parity** with Claude Code (#21753).
- DeepSeek TUI merged MCP tool discovery + custom provider rows (#3562) and reported orphan process issues.
- Pi added Bedrock Mantle and Microsoft Foundry as new provider adapters.

**Specific need:** Full MCP spec compliance (resources, templates, subscriptions, OAuth) is no longer optional — users expect it as baseline.

### 3.2 Session Persistence & Resume
**Tools:** All seven
- Codex shipped a **3-PR WorldState stack** (snapshot → persist → replay) for reliable resume/fork/rollback.
- Claude Code shipped `/rewind` to resume from pre-`clear` state.
- OpenCode shipped **session snapshot and revert** (#33226).
- Copilot CLI shipped **`/cd` session-resume directory persistence** (v1.0.65).
- Qwen Code is tackling **cross-device state sync** (#5836).

**Specific need:** Users expect git-like session management — resume, fork, rollback, and now cross-device sync.

### 3.3 Token Cost Transparency & Control
**Tools:** OpenAI Codex, Kimi Code CLI, Qwen Code, GitHub Copilot CLI
- Codex: 269 👍 on GPT-5.5 rate-limit cost spike; 620 💬 on VS Code token burn.
- Kimi: 7 👍 on quota exhaustion in 2 queries due to long reasoning chains.
- Qwen: Silent model switching from flash to pro drained prepaid balance (#5819).
- Copilot: Quota miscalculation with 6x multiplier model (#3881).

**Specific need:** Real-time usage dashboards, per-request cost estimates, and guardrails against silent model escalation.

### 3.4 Agent Orchestration & Safety
**Tools:** Gemini CLI, DeepSeek TUI, OpenAI Codex, Qwen Code
- Gemini: Subagent hangs, permission bypass, thought leakage.
- DeepSeek TUI: Agent self-directing without confirmation (#3275, 12 💬).
- Codex: Ultra mode implies multi-agent delegation; subagent lifecycle bugs.
- Qwen: Silent cron-loop re-triggering (#5823), loop abort failures.

**Specific need:** Configurable autonomy levels, confirmation gates, and observability into agent decision chains.

### 3.5 Extensibility (Hooks, Skills, Plugins)
**Tools:** Claude Code, GitHub Copilot CLI, OpenCode, Pi
- Claude Code: 159 👍 for subdirectory skills organization.
- Copilot: 21 👍 for skill subfolders (#1632); plugin hook UX blocking automation (#2643).
- OpenCode: MCP connection lost after compaction (#23556).
- Pi: Inline slash-command skill selector requested (#6059).

**Specific need:** Nested organization, silent hook execution, and config auto-reload without session restart.

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|---|---|---|---|
| **Claude Code** | Polished general-purpose coding agent | Professional developers, Anthropic ecosystem | Tight integration with Anthropic models; `/rewind`, background agents; VSCode/JetBrains parity |
| **OpenAI Codex** | Rust-based performance + multi-modal reasoning | OpenAI power users, cost-conscious teams | Rust CLI; WorldState persistence; Ultra reasoning mode; `clock.sleep` for long-running tasks |
| **Gemini CLI** | Google ecosystem integration + multi-model | Google Cloud users, multi-model workflows | ADK agent sessions; Cloud Run webhook ingestion; AST-aware codebase tools (in progress) |
| **GitHub Copilot CLI** | GitHub-native workflow integration | GitHub Enterprise, Codespaces users | Tight GitHub issue/PR integration; org-managed config; automated issue classification |
| **Kimi Code CLI** | Long-reasoning chain optimization | Chinese-language users, Moonshot subscribers | K2.6/K2.7 reasoning models; `kimi web` mode; MCP subagent propagation |
| **OpenCode** | MCP-first extensibility + privacy | Self-hosted users, MCP enthusiasts | Full MCP client parity push; local-first privacy controls; session snapshot/revert |
| **Pi** | Multi-provider compatibility + mobile | Polyglot developers, mobile/Termux users | Bedrock Mantle, Microsoft Foundry adapters; `runParallelAgentTasks`; hardware cursor TUI |
| **Qwen Code** | Voice input + cross-device workflows | Chinese developers, voice-first users | Voice dictation with custom keyterms; remote LSP status for daemons; auto-generated skills |
| **DeepSeek TUI** | Multi-model Fleet architecture | Chinese-language users, multi-provider setups | Fleet multi-agent with role/slot/loadout; i18n (zh-Hans); provider-scoped routing |

---

## 5. Community Momentum & Maturity

### High Momentum (Rapid Iteration)
- **OpenCode**: 10+ active PRs in a coordinated MCP parity push; 25 👍 on full MCP client capabilities; 39 👍 on privacy issue. Strong contributor base driving spec-level features.
- **Pi**: 8 PRs merged in 24h covering stream reliability, new providers, parallel agents, and TUI fixes. High throughput despite no release.
- **DeepSeek TUI**: 7 PRs merged in 24h; v0.8.65 milestone with Fleet architecture and i18n refactor. Active Chinese-speaking community.
- **Claude Code**: 2 releases in 24h; highest single-issue engagement (372 👍). Mature, well-resourced, but Windows instability remains a gap.

### Moderate Momentum
- **OpenAI Codex**: 1 release + WorldState stack; 620 💬 on token cost indicates high user engagement but unresolved pain. Ultra reasoning mode is a differentiating bet.
- **Qwen Code**: 1 release + 5 merged PRs; path traversal vulnerability and silent model switching are concerning but being addressed. Voice dictation is a unique frontier.
- **Gemini CLI**: No releases; 3 merged PRs focused on security and infrastructure. Lower visible activity but ADK integration signals platform play.

### Lower Momentum
- **GitHub Copilot CLI**: 1 release + 1 merged PR. Lowest PR throughput relative to issue volume. Enterprise features (org-managed config, Kerberos proxy) remain unaddressed.
- **Kimi Code CLI**: No releases; 2 merged PRs. Smallest community of the group; infinite loop bug (#640) open for 5+ months signals resource constraints.

---

## 6. Trend Signals

### 🔴 Token Cost Is the New Battleground
Four of nine tools faced cost-related backlash in 24 hours. Users are hitting quota limits unpredictably due to background polling, long reasoning chains, and silent model switching. **Tools that provide real-time cost visibility and spending guardrails will have a competitive advantage.**

### 🟡 MCP Is Table Stakes
The gap between tools with full MCP client support (OpenCode pushing for parity, DeepSeek TUI merged discovery) and those without is becoming a selection criterion. **MCP resource subscriptions, templates, and OAuth flows are expected baseline capabilities, not premium features.**

### 🟡 Agent Autonomy Needs Guardrails
DeepSeek TUI's agent over-reach regression (#3275) and Qwen's silent cron-loop (#5823) highlight a pattern: as agents become more autonomous, users demand **configurable autonomy levels and explicit confirmation gates**. The industry is moving toward "autonomy sliders" rather than binary autonomous/manual modes.

### 🟢 Security Hardening Is Accelerating
Claude Code received 2 critical security PRs (SSRF, command injection); Qwen Code patched a path traversal vulnerability; Gemini CLI is fixing thought leakage and path blocklist bypasses. **The attack surface of AI CLI tools — subprocess execution, file operations, MCP connections — is under active scrutiny.**

### 🟢 Context Management Is the Next Differentiator
Claude Code's `/rewind`, Codex's WorldState stack, OpenCode's session snapshot/revert, and Copilot's `/cd` persistence all address the same underlying problem: **long sessions are fragile, and users want git-like state management.** Tools that solve this well will win power-user loyalty.

### 🟢 Mobile & Cross-Device Is an Emerging Frontier
Claude Code's 372 👍 mobile multi-account issue, Copilot's mobile-remote-session gap, and Pi's Termux-specific bugs all point to **growing mobile usage of AI CLI tools** — a surface most tools haven't prioritized.

---

*Report generated from community digest data across 9 AI CLI tool repositories, 2026-06-25. For real-time data, monitor individual repositories directly.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-06-25 | Source: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

| Rank | Skill / PR | Type | Status | 👍 | Focus |
|------|-----------|------|--------|-----|-------|
| 1 | [skill-creator (run_eval)](https://github.com/anthropics/skills/pull/1298) | Skill-creator fix | Open | 0 | Core infrastructure |
| 2 | [run_eval Bug](https://github.com/anthropics/skills/issues/556) | Issue (12 comments) | Open | 7 | Trigger detection |
| 3 | [system docs & flowcharts](https://github.com/anthropics/skills/pull/95) | Documentation | Open | 0 | Architecture docs |
| 4 | [CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509) | Documentation | Open | 0 | Community health |
| 5 | [document-typography](https://github.com/anthropics/skills/pull/514) | New skill | Open | 0 | Document quality |
| 6 | [shodh-memory](https://github.com/anthropics/skills/pull/154) | New skill | Open | 0 | Agent memory |
| 7 | [AppDeploy](https://github.com/anthropics/skills/pull/360) | New skill | Open | 0 | Deployment |
| 8 | [testing-patterns](https://github.com/anthropics/skills/pull/723) | New skill | Open | 0 | Testing methodology |

**Key observation:** The most commented issues are not about end-user skills, but about **breakage in the skill-creator toolchain itself** — specifically `run_eval.py` reporting 0% recall. This is a cross-cutting bug affecting all skill description optimization. Multiple independent PRs (#1298, #1099, #1050, #1323) are converging on fixes for this single issue, making it the de facto top community priority.

Notable new skill proposals drawing attention:
- **document-typography** (#514): Auto-fixes orphans, widows, and numbering in AI-generated docs — addresses a universal document-quality gap.
- **shodh-memory** (#154): Persistent cross-conversation context system for agents.
- **AppDeploy** (#360): One-command full-stack webapp deployment.
- **testing-patterns** (#723): Comprehensive testing methodology (Testing Trophy, AAA, React Testing Library).

---

## 2. Community Demand Trends

From the top Issues, five clear demand vectors emerge:

### 🔴 Security & Trust (#492 — 16 comments, 2 👍)
The single most-discussed issue. Community skills distributed under the `anthropic/` namespace create a **trust boundary vulnerability** — users grant elevated permissions believing skills are official. This demands namespace verification, signing, or provenance metadata.

### 🟠 Enterprise & Org Collaboration (#228 — 14 comments, 7 👍)
Strong demand for **org-wide skill sharing** inside claude.ai. The current manual upload流程 via Slack/Teams is cited as a major friction point. This is the most upvoted feature request in the dataset.

### 🟡 Toolchain Reliability (#556, #1061 — 15+ comments combined)
The `run_eval.py` 0% recall bug is arguably the highest-priority technical debt. Without a working optimizer, all skill description improvements are flying blind. Windows compatibility gaps (#1061: PATHEXT, cp1252, select) compound this.

### 🟢 Agent Governance & Safety (#412 — 6 comments)
Proposal for a dedicated **agent-governance** skill covering policy enforcement, threat detection, trust scoring, and audit trails — reflecting demand for production-safe agent patterns.

### 🔵 Platform Expansion
- **MCP bridge** (#16): Expose skills as MCPs to enable API-level interoperability.
- **Bedrock support** (#29): Gap for AWS Bedrock users wanting to leverage the skill ecosystem.
- **SharePoint/SPO** (#1175): Enterprise RAG with permission-aware skill logic.

---

## 3. High-Potential Pending Skills

These PRs show active development signals (recent updates) and community engagement, suggesting they are closest to merge or have high impact:

| PR | Author | Last Updated | Signal |
|----|--------|-------------|--------|
| [#1298](https://github.com/antropics/skills/pull/1298) fix(skill-creator): run_eval recall | MartinCajiao | 2026-06-23 | Addresses #556; active 2 weeks ago; MartinCajiao also active on #1298 and #556 |
| [#1323](https://github.com/antropics/skills/pull/1323) fix: trigger detection misses | Polluelo978 | 2026-06-23 | Another take on the recall bug; updated 2 days ago |
| [#362](https://github.com/anthropics/skills/pull/362) Fix UTF-8 panic on multi-byte | Mr-Neutr0n | 2026-06-10 | Prevents Rust panics in CLI; dependency-level impact |
| [#361](https://github.com/anthropics/skills/pull/361) YAML special character detection | Mr-Neutr0n | 2026-06-10 | Addresses silent parsing failures; complementary to #362 |
| [#1050](https://github.com/anthropics/skills/pull/1050) Windows subprocess + encoding | gstreet-ops | 2026-05-24 | Windows 11 compatibility; removes platform exclusion |
| [#541](https://github.com/anthropics/skills/pull/541) DOCX w:id collision fix | Lubrsy706 | 2026-04-16 | Prevents document corruption with bookmarks |

**Convergence insight:** Mr-Neutr0n (#361, #362) is tackling the skill-creator's YAML parsing robustness from two angles (validation + encoding). Combined with Lubrsy706's DOCX fixes (#538, #541), there is a clear quality bar being raised for the document-generation skill family.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is to fix the `run_eval` description-optimizer toolchain (10+ independent bug reports, multiple competing PRs), because a trustworthy skill-triggering metric is the foundational prerequisite for every other skill quality improvement in the ecosystem.**

---

*Report generated by OWL. Data frozen at 2026-06-25; all links reference the live state of [anthropics/skills](https://github.com/anthropics/skills).*

---

# Claude Code Community Digest — 2026-06-25

## 1. Today's Highlights

Claude Code shipped two patch releases (v2.1.191, v2.1.190) headlined by a `/rewind` command that lets you resume a conversation from before `/clear`, plus a fix for background agents incorrectly resurrecting after being stopped. On the issues front, the community is heavily rallying around two long-standing feature requests — **mobile multi-account switching** (372 👍) and **subdirectory support in skills** (159 👍) — while a wave of Windows-specific bugs (install failures, rendering stutter, model selector greyed-out) continues to generate friction.

---

## 2. Releases

| Version | Highlights |
|---------|-----------|
| **v2.1.191** | • **`/rewind` support** — resume a conversation from the state before `/clear` was run<br>• Fixed scroll position jumping to the bottom while reading earlier output during streaming<br>• Fixed background agents resurrecting after being stopped from the tasks panel |
| **v2.1.190** | • Bug fixes and reliability improvements (no detailed changelog) |

---

## 3. Hot Issues

### #36151 — Multi-account switching in Claude Mobile app without shared email
- **Status:** OPEN · 👍 372 · 💬 106 comments
- **Why it matters:** The highest-engagement issue on the board. Mobile users who manage multiple Anthropic accounts (e.g., personal + work) are forced to share an email or repeatedly sign in/out. The 372 upvotes signal this is a top-tier UX blocker for anyone juggling accounts on mobile.
- **Link:** https://github.com/anthropics/claude-code/issues/36151

### #10238 — Add support for subdirectories in skills
- **Status:** OPEN · 👍 159 · 💬 45 comments
- **Why it matters:** Skills are a core extensibility mechanism, but the flat-directory limitation makes organizing complex skill libraries painful. Teams with many skills want nested folders (e.g., `skills/testing/unit`, `skills/testing/e2e`). Strong, sustained community demand.
- **Link:** https://github.com/anthropics/claude-code/issues/10238

### #12346 — GitLab Integration (Repository Connection, MRs, Mobile Access)
- **Status:** OPEN · 👍 108 · 💬 44 comments
- **Why it matters:** Claude Code's Git integration is GitHub-only today. A significant segment of the developer community lives on GitLab and wants first-class MR, repo, and mobile access parity. This is the most-requested SCM expansion.
- **Link:** https://github.com/anthropics/claude-code/issues/12346

### #2254 — Disable the welcome banner
- **Status:** OPEN · 👍 91 · 💬 28 comments
- **Why it matters:** Power users find the startup welcome screen and tips wasteful after the first few runs. A simple config flag or `:set`-style toggle is all that's requested. High upvotes vs. relatively low comments = broad, quiet agreement.
- **Link:** https://github.com/anthropics/claude-code/issues/2254

### #42249 — Extreme token consumption — quota depleted in minutes
- **Status:** OPEN · 👍 17 · 💬 25 comments
- **Why it matters:** Multiple users report abnormal token burn during routine tasks (file reads, edits, git commands). One user exhausted a daily limit in ~1 hour. If reproducible, this is a billing-critical issue.
- **Link:** https://github.com/anthropics/claude-code/issues/42249

### #69238 — No response from API error when Advisor is triggered
- **Status:** OPEN · 👍 34 · 💬 24 comments
- **Why it matters:** Users on Sonnet base model see "No response from API" when the Advisor (Opus) is triggered, followed by a long retry countdown. This effectively breaks the Advisor escalation path for a subset of users.
- **Link:** https://github.com/anthropics/claude-code/issues/69238

### #24057 — MCP servers, hooks, and plugins should auto-reload when config changes
- **Status:** OPEN · 👍 13 · 💬 28 comments
- **Why it matters:** Every config tweak to MCP servers, hooks, or plugins currently requires a full session restart — losing context. The issue author describes needing three restarts in a single session. Auto-reload would be a major workflow win.
- **Link:** https://github.com/anthropics/claude-code/issues/24057

### #52151 — Opus 4.7 1M via Bedrock: VSCode extension stream ends with 0 events
- **Status:** CLOSED · 👍 34 · 💬 48 comments
- **Why it matters:** The VSCode extension silently fails on Opus 4.7 1M context through AWS Bedrock, rendering an "Unhandled case" error. CLI works fine on the same account. High comment count suggests this affected many Bedrock users before being addressed.
- **Link:** https://github.com/anthropics/claude-code/issues/52151

### #65512 — opusplan downgrades plan mode to Sonnet past 200k (regression)
- **Status:** CLOSED · 👍 1 · 💬 4 comments
- **Why it matters:** Previously, opusplan would auto-compact at 200K and retain Opus for plan mode. A regression now forces a downgrade to Sonnet, degrading planning quality on long sessions. Recently closed, suggesting a fix is in progress.
- **Link:** https://github.com/anthropics/claude-code/issues/65512

### #67406 — Win11: agent view daemon causes rendering stutter, invisible cursor, orphan processes
- **Status:** CLOSED · 👍 0 · 💬 3 comments
- **Why it matters:** A Windows-specific rendering regression in v2.1.169+ that made the terminal nearly unusable (stutter, invisible cursor, orphan `claude.exe` processes). Recently closed — likely patched in the latest releases.
- **Link:** https://github.com/anthropics/claude-code/issues/67406

---

## 4. Key PR Progress

| # | Title | Author | Status | Why it matters |
|---|-------|--------|--------|----------------|
| **#70634** | fix: handle server rate limiting during normal usage | Siliconlive | OPEN | Addresses unexpected rate-limit errors during regular (non-burst) usage; closes #70631. Could improve reliability for users hitting intermittent 429s. |
| **#70633** | fix: Handle rate limiting headers for Anthropic API | Siliconlive | OPEN | Companion PR to #70634; specifically targets parsing of Anthropic API rate-limiting headers. Together these could reduce false rate-limit retries. |
| **#70582** | fix: the application accepts user-controlled URLs in llm.py | orbisai0security | OPEN | **Security fix (CRITICAL).** Patches a vulnerability in `plugins/security-guidance/hooks/llm.py` where user-controlled URLs could be passed to the LLM without validation — potential SSRF vector. |
| **#70538** | fix: sanitize subprocess call in gitutil.py | orbisai0security | OPEN | **Security fix (CRITICAL).** Sanitizes a subprocess invocation in `plugins/security-guidance/hooks/gitutil.py` to prevent command injection. Part of the same security audit as #70582. |
| **#66854** | toekn | apaimabong-design | OPEN | Appears to be a token-handling fix (title is a typo for "token"). Details are sparse; may relate to token counting or context window management. |

> **Note:** Only 5 PRs were updated in the last 24 hours. Two of the five are critical security patches from the same researcher — worth watching closely.

---

## 5. Feature Request Trends

Based on issue labels, upvote counts, and comment volume, the most-requested feature directions are:

1. **Multi-account / multi-tenant support** (#36151, 372 👍) — Mobile and desktop users want seamless account switching, especially across personal and enterprise tenants.

2. **Skills extensibility** (#10238, 159 👍) — Subdirectory organization, better discovery, and richer skill authoring are recurring themes.

3. **GitLab / non-GitHub SCM integration** (#12346, 108 👍) — GitLab MR creation, repo browsing, and mobile parity with GitHub features.

4. **Reduced session friction** — Auto-reload MCP/hooks/plugins (#24057), disable welcome banner (#2254), and `/rewind` (shipped today) all point to a community that values uninterrupted flow.

5. **IDE parity** — Requests for a real JetBrains plugin (#47166) and continued VSCode improvements (#52151) show demand for consistent cross-IDE experiences.

6. **Remote Control bidirectional attach** (#70699, new) — Users want to attach a local terminal to a phone-started `remote-control` session, completing the bidirectional loop.

7. **Model preset flexibility** (#53987) — `opusplan[1m]` preset for Sonnet 4.6 with 1M context, indicating users want finer-grained control over model/context combinations.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Impact |
|-----------|----------|--------|
| **Windows instability** | #67406 (rendering stutter), #67595 (EBUSY Defender race), #66407 (model selector greyed out), #68792 (error 0x80073CF6), #70700 (MSIX registration broken by Windows Update) | Windows users face a disproportionate share of bugs — from install failures caused by OS updates to runtime rendering issues. This is the single most visible platform gap. |
| **Token cost opacity / spikes** | #42249 (quota drained in ~1 hr), #69238 (Advisor API errors) | Users can't predict or control token spend, especially when background processes or model escalations trigger unexpectedly. |
| **Config reload requires restart** | #24057 (MCP/hooks/plugins) | Every config change destroys session context. Power users who iterate on MCP server configs feel this acutely. |
| **macOS process naming** | #12433 (Activity Monitor shows version number) | Minor but persistent — makes it hard to identify or kill Claude processes on macOS. |
| **Scrollback / navigation ergonomics** | #70309 (no fast scroll/jump in long output), #70705 (Vim mode docs gap) | Terminal-heavy users want native-feeling scroll and search; the loss of terminal scrollbar is a regression for some. |
| **Auth / subscription recognition** | #69786 (Pro subscription not recognized on Windows), #70697 (Keychain isolation) | Authentication failures block paid users from using what they've bought — a trust and retention risk. |

---

*Digest generated from data on anthropics/claude-code as of 2026-06-25. For real-time updates, watch the [repository](https://github.com/anthropics/claude-code) directly.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-25

## 1. Today's Highlights

The Codex team shipped a patch release (`rust-v0.142.1`) adding Windows system proxy support, while the broader community conversation is dominated by rate-limit cost complaints — two issues about GPT-5.5 token budget drain have collectively drawn ~400 comments and 540 👍 reactions. On the development side, a major **WorldState persistence** stack (3 PRs) landed to enable reliable resume/fork/rollback, and the **Ultra reasoning effort** feature advanced through multiple coordinated PRs.

---

## 2. Releases

### `rust-v0.142.1` (stable)
- **New Feature:** Opt-in Windows system proxy support for authentication — PAC, WPAD, static proxies, and bypass rules. ([#26708](https://github.com/openai/codex/pull/26708))

### `rust-v0.143.0-alpha.15` (pre-release)
- Latest in the 0.143 alpha train; no detailed changelog published yet.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|---------------|------------------|
| [#14593](https://github.com/openai/codex/issues/14593) | Burning tokens very fast (VS Code, Business plan) | Long-running complaint about excessive token consumption in the IDE extension; no resolution after 3+ months. | 620 comments, 271 👍 |
| [#28879](https://github.com/openai/codex/issues/28879) | GPT-5.5 rate-limit cost jumped ~10–20× since June 16 | Budget drain on Plus plan — 2–3 prompts exhaust a 5-hour budget window. Highly active discussion. | 133 comments, 269 👍 |
| [#13733](https://github.com/openai/codex/issues/13733) | Background process polling wastes tokens | Each `write_stdin` poll triggers a full API turn with entire conversation history — expensive for long builds. | 29 comments, 23 👍 |
| [#21753](https://github.com/openai/codex/issues/21753) | Full Claude Code Hook Parity (29+) | Umbrella tracker to match Claude Code's automation surface; high community demand for extensibility. | 18 comments, 17 👍 |
| [#29072](https://github.com/openai/codex/issues/29072) | Windows: `apply_patch` fails (sandbox exe path) | Blocks core editing functionality on Windows — `codex-windows-sandbox-setup.exe` can't launch from package path. | 17 comments, 16 👍 |
| [#2916](https://github.com/openai/codex/issues/2916) | OpenAI service tier support | Users want cost/latency control via `service_tier` config; relevant for enterprise and cost-sensitive users. | 17 comments, 50 👍 |
| [#15299](https://github.com/openai/codex/issues/15299) | Inbound MCP notifications into active CLI session | Would let external channels push events into a running Codex session — key for CI/CD integrations. | 14 comments, 7 👍 |
| [#29356](https://github.com/openai/codex/issues/29356) | Context compaction loses operational continuity | Auto-compaction drops critical steps in long tasks; proposal to preserve last 5 operational steps verbatim. | 13 comments |
| [#29197](https://github.com/openai/codex/issues/29197) | WebSearch returns Cloudflare 403 challenge | Windows Codex app can't reach search endpoint due to Cloudflare managed challenge. | 13 comments |
| [#25667](https://github.com/openai/codex/issues/25667) | macOS app leaves ~965MB `code_sign_clone` dirs | Disk space leak on every app launch; affects macOS users. | 12 comments, 18 👍 |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [#29833](https://github.com/openai/codex/pull/29833) | **WorldState: make snapshots serializable** | First of 3 — converts in-memory diff baseline to serializable form so it can be persisted to rollouts. |
| [#29835](https://github.com/openai/codex/pull/29835) | **WorldState: persist in rollouts** | Second of 3 — writes serialized WorldState to rollout files for durable resume/fork/rollback. |
| [#29837](https://github.com/openai/codex/pull/29837) | **WorldState: replay persisted state** | Third of 3 — restores exact comparison baseline on resume/fork instead of approximating from TurnContextItem. |
| [#29899](https://github.com/openai/codex/pull/29899) | **Add Ultra reasoning effort** | Introduces "Ultra" as a single user-facing reasoning tier that implies maximum reasoning + multi-agent delegation. |
| [#29709](https://github.com/openai/codex/pull/29709) | **Gated Ultra reasoning effort** | Gates Ultra behind both active model catalog and `multi_agent_mode` feature opt-in. |
| [#29710](https://github.com/openai/codex/pull/29710) | **Derive multi-agent mode from Ultra effort** | Eliminates competing config sources by deriving effective multi-agent mode from the Ultra turn setting. |
| [#29683](https://github.com/openai/codex/pull/29683) | **Managed new-thread model settings** | Admins can set persistent default model, reasoning effort, and service tier for new App threads. |
| [#29923](https://github.com/openai/codex/pull/29923) | **Support external clock sleeps** | Routes `clock.sleep` through configurable current-time provider; raises max duration to 12 hours; adds experimental sleep/wake notifications. |
| [#29907](https://github.com/openai/codex/pull/29907) | **Namespace sleep under clock** | Renames top-level `sleep` to `clock.sleep` for consistent model-visible namespace with `clock.curr_time`. |
| [#29754](https://github.com/openai/codex/pull/29754) | **Preserve live turn history across reconnects** | App Server now reconstructs one cumulative, authoritative turn history across disconnects. |

---

## 5. Feature Request Trends

1. **Hook & Automation Parity** — The community is pushing for Claude Code-level hook coverage (29+ hooks) to enable richer automation workflows ([#21753](https://github.com/openai/codex/issues/21753)).

2. **Background Process & Long-Running Task Support** — Multiple requests for monitoring background services, injecting completion output, and avoiding blocking during long builds ([#2062](https://github.com/openai/codex/issues/2062), [#22003](https://github.com/openai/codex/issues/22003), [#13733](https://github.com/openai/codex/issues/13733)).

3. **MCP Inbound & Session Integration** — Demand for pushing external notifications into active CLI sessions, enabling MCP servers to act as event sources ([#15299](https://github.com/openai/codex/issues/15299)).

4. **Session Sync (CLI ↔ App Server)** — Users want `codex resume` to provide real-time bidirectional sync between CLI and desktop app ([#14722](https://github.com/openai/codex/issues/14722)).

5. **Service Tier & Cost Controls** — Enterprise users want `service_tier` configuration for cost/latency trade-offs ([#2916](https://github.com/openai/codex/issues/2916)).

6. **Ultra / Multi-Agent Mode** — Community interest in a unified "Ultra" mode that combines max reasoning with proactive delegation ([#29899](https://github.com/openai/codex/pull/29899)).

---

## 6. Developer Pain Points

- **Token cost unpredictability** — The dominant complaint. Users report 10–20× cost increases with no explanation, and background polling amplifies the problem ([#28879](https://github.com/openai/codex/issues/28879), [#14593](https://github.com/openai/codex/issues/14593), [#13733](https://github.com/openai/codex/issues/13733)).
- **Windows reliability** — Multiple Windows-specific failures: sandbox exe path issues, blank VS Code panels, Cloudflare 403s on WebSearch, and crash-unsafe local state ([#29072](https://github.com/openai/codex/issues/29072), [#21863](https://github.com/openai/codex/issues/21863), [#29197](https://github.com/openai/codex/issues/29197), [#26990](https://github.com/openai/codex/issues/26990)).
- **Context compaction data loss** — Auto-compaction drops operational context, breaking continuity in long tasks ([#29356](https://github.com/openai/codex/issues/29356), [#28495](https://github.com/openai/codex/issues/28495)).
- **Subagent lifecycle bugs** — Orphaned subagents, missing lifecycle controls, and `close_agent` hanging for hours ([#24389](https://github.com/openai/codex/issues/24389), [#19197](https://github.com/openai/codex/issues/19197)).
- **MCP regression for local providers** — Custom/local model MCP tool invocation broke in v0.117.0 and remains unreliable ([#19871](https://github.com/openai/codex/issues/19871)).
- **macOS disk leak** — ~965MB left per launch from `code_sign_clone` directories ([#25667](https://github.com/openai/codex/issues/25667)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-25

---

## 1. Today's Highlights

No new releases in the last 24 hours. The community's activity is heavily concentrated around **agent reliability** (sub-agent hangs, crashes, and permission issues) and **security hardening** (path blocklists, thought leakage, memory safety). Several large infrastructure PRs landed including an ADK agent session implementation and a Caretaker webhook service.

---

## 2. Releases

No new releases in the last 24-hour window.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|---------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports `GOAL` success when it actually hit `MAX_TURNS` | Masks interruptions; users can't trust status codes | 8 comments, 👍2 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely on simple tasks | Core UX blocker; waits up to an hour | 7 comments, 👍8 (highest engagement) |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution stuck showing "Waiting input" after completion | Frequent blocker after running CLI commands | 4 comments, 👍3 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory sends secrets to model before redaction | Security concern — secrets enter model context before scrubbing | 5 comments |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | Resource waste and potential loop behavior | 5 comments |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent uses destructive commands (`git reset --force`) without safer alternatives | Safety/risk concern for production use | 3 comments, 👍1 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error when tool count exceeds 128/400 | Scalability issue for users with many MCP tools registered | 3 comments |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | Sub-agents run without permission since v0.33.0 even when disabled | Regression — config bypass broke user trust | 2 comments |
| [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) | Bug reports lack subagent context | Hinders debugging of agent pipelines | 2 comments |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations epic | Tracks 76 behavioral evals across 6 models — signals push toward systematic quality assurance | 7 comments |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#27971](https://github.com/google-gemini/gemini-cli/pull/27971) | **fix(core): strip thoughts from scrubbed history turns** | Resolves "thought leakage" where model internal monologue leaks into plain-text history, causing infinite-loop reasoning in subsequent turns. | OPEN |
| [#27966](https://github.com/google-gemini/gemini-cli/pull/27966) | **fix(security): enforce case-insensitive sensitive path blocklist** | Production-grade security fix for case-insensitivity bypass and prompt injection targeting `.git`, `.env`, `node_modules`. | OPEN |
| [#28053](https://github.com/google-gemini/gemini-cli/pull/28053) | **fix(core-tools): resolve defensive path resolution for @-reference files** | Fixes `File not found` errors when model passes `@`-prefixed paths to filesystem tools. Also fixes macOS test regressions. | OPEN |
| [#27636](https://github.com/google-gemini/gemini-cli/pull/27636) | **perf: optimize VirtualizedList and fix click handling** | Rendering performance for large datasets; improves scroll and click handling for static items. | OPEN |
| [#28015](https://github.com/google-gemini/gemini-cli/pull/28015) | **feat(caretaker): implement Cloud Run webhook ingestion service** | Entry point for GitHub webhooks — verifies signatures, stores issues in Firestore, publishes to Pub/Sub. | OPEN |
| [#26680](https://github.com/google-gemini/gemini-cli/pull/26680) | **feat: implement ADK agent session** | Adds Agent Development Kit session support — a significant new agent runtime capability. | CLOSED (merged) |
| [#26303](https://github.com/google-gemini/gemini-cli/pull/26303) | **feat(bot): enforce evaluation role, multi-iteration feedback loop** | Improves bot system prompts, restricts critique agent to evaluation-only role, adds feedback loop. | CLOSED (merged) |
| [#25354](https://github.com/google-gemini/gemini-cli/pull/25354) | **feat(core): shell inference for file operations under sandboxing** | When sandboxing is enabled, swaps lower-fidelity tools for `run_shell_command` equivalents. | CLOSED (merged) |
| [#27964](https://github.com/google-gemini/gemini-cli/pull/27964) | **fix(mcp): scope resource resolution to prevent cross-server URI confusion** | Prevents a second MCP server from silently shadowing a trusted server's resources on URI collision. | CLOSED (merged) |
| [#28054](https://github.com/google-gemini/gemini-cli/pull/28054) | **fix(auth): strip URL punctuation in sign-in errors** | Removes trailing periods from URLs in error messages so they remain clickable in terminals. | OPEN (help wanted) |

---

## 5. Feature Request Trends

1. **AST-Aware Codebase Tools** — Issues [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) and [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) track investigations into AST-aware file reads, search, and codebase mapping to reduce token noise and tool-call turns.

2. **Sub-Agent Observability** — [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) requests making subagent trajectories visible via `/chat share`; [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) wants subagent context in bug reports.

3. **Agent Self-Awareness** — [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) asks the CLI to accurately report its own flags, hotkeys, and execution model to users.

4. **Browser Agent Resilience** — [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) proposes automatic session takeover and lock recovery for persistent browser profiles.

5. **Terminal Performance** — [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) requests flicker-free terminal resize via `RenderStatic` migration; [#24935](https://github.com/google-gemini/gemini-cli/issues/24935) fixes corruption after exiting external editors.

6. **Safety Guardrails** — [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) pushes for discouraging destructive git operations; [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) addresses secret handling in Auto Memory.

---

## 6. Developer Pain Points

- **Agent Hangs & Unresponsive Sessions** — The most upvoted and commented issue ([ #21409](https://github.com/google-gemini/gemini-cli/issues/21409), 👍8) describes the generalist agent hanging forever on trivial tasks. Related reports include shell commands stuck in "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) and the CLI freezing at interactive prompts during `vite` app creation ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).

- **Sub-Agent Trust & Permissions** — Users report sub-agents running even when agent mode is explicitly disabled ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), and the `get-shit-done` output hook crashing the CLI at summary time ([#22186](https://github.com/google-gemini/gemini-cli/issues/22186)).

- **Security & Data Leakage** — Thought leakage into history ([#27971](https://github.com/google-gemini/gemini-cli/pull/27971)), Auto Memory sending secrets to the model before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and case-insensitive path blocklist bypasses ([#27966](https://github.com/google-gemini/gemini-cli/pull/27966)) are active, high-stakes concerns.

- **Tool Sprawl & Scalability** — Users hitting 400 errors with >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/22466)) and the model creating temp scripts in random directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) point to insufficient tool scope management and workspace hygiene.

- **Memory System Reliability** — A cluster of issues ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)) track Auto Memory bugs including infinite retry loops, silent patch skipping, and invalid memory handling.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-25

---

## 1. Today's Highlights

Copilot CLI shipped **v1.0.65** with session-resume directory persistence, custom agent discovery, and a fix for spurious filesystem permission prompts on slash-prefixed string arguments. Issue activity remains heavy around **plugin hook UX**, **session/model resumption bugs**, and a wave of **terminal-rendering and mobile-remote-session** reports from newer contributors. Several long-running feature requests — configurable keybindings, skill subfolders, and enterprise org-managed config — continue to climb in engagement.

---

## 2. Releases

### v1.0.65 (2026-06-24)

- **`/cd` persists working directory** across sessions and discovers custom agents in the newly resumed directory.
- **Slash-prefixed string arguments** (e.g. `--body "/azp run"`) no longer trigger spurious filesystem permission prompts.
- **Fullscreen timeline** rendering improvements (truncated in release notes).

---

## 3. Hot Issues

1. **[#2643](https://github.com/github/copilot-cli/issues/2643) — preToolUse silent command rewrite still shows confirmation dialog** (11 comments, 👍2)
   Plugin authors want `preToolUse` hooks to silently rewrite commands via `updatedInput` with `permissionDecision: allow`, but the interactive confirmation dialog still fires on every rewritten command. This is a critical blocker for plugin-driven automation workflows.

2. **[#1632](https://github.com/github/copilot-cli/issues/1632) — Support subfolders for skills** (9 comments, 👍21)
   One of the most upvoted open issues. Users with large skill libraries need subfolder organization; the flat structure becomes unmanageable at scale. The high 👍 count signals broad community demand.

3. **[#3832](https://github.com/github/copilot-cli/issues/3832) — All models show as 'Blocked/Disabled' after June 16 outage** (6 comments, 👍13)
   Post-outage bug where the model selection UI showed every model as blocked. Closed after resolution, but the 👍 count reflects how many users were impacted.

4. **[#3881](https://github.com/github/copilot-cli/issues/3881) — Quota miscalculation: 5% subtracted instead of 2% with 6x multiplier model** (3 comments)
   A user on the $10/mo plan reported that selecting Claude Sonnet 4.5 (6x multiplier) deducted 5% of quota instead of the expected 2%. Billing accuracy is a high-sensitivity topic.

5. **[#3913](https://github.com/github/copilot-cli/issues/3913) — Model selection empty when resuming a session** (3 comments, 👍1)
   Companion to #3832 — resuming a previous session shows all models in the block list. New sessions work fine. Closed, but indicates session-state/model-state coupling fragility.

6. **[#2419](https://github.com/github/copilot-cli/issues/2419) — Configurable key bindings for fast model switching** (2 comments, 👍5)
   Users want F-key bindings to slash commands, primarily for faster model switching without typing `/model` + memorized IDs.

7. **[#3909](https://github.com/github/copilot-cli/issues/3909) — Enterprise/org server-managed settings for local Copilot CLI** (1 comment)
   Org admins have no way to centrally push configuration (especially env vars) to local CLI installs. Currently only cloud-hosted Codespaces secrets are manageable. Significant enterprise gap.

8. **[#3925](https://github.com/github/copilot-cli/issues/3925) — Linux AppImage leaks LD_LIBRARY_PATH to spawned git, breaking HTTPS** (0 comments, new)
   The AppImage exports its bundled-library `LD_LIBRARY_PATH` into child processes, causing `libnghttp2` symbol lookup failures in `git-remote-https`. Blocks session creation on affected Linux systems.

9. **[#3926](https://github.com/github/copilot-cli/issues/3926) — Previous prompts lost after editing** (0 comments, new)
   In v1.0.65, navigating to a previous prompt with the up arrow, editing it, and pressing Enter causes the original prompt to be lost. Regression in prompt history handling.

10. **[#3922](https://github.com/github/copilot-cli/issues/3922) — GitHub mobile app can't send /slash commands to remote CLI session** (1 comment)
    Part of a trio of mobile-remote-session gaps (also #3923 file upload, #3924 shell commands). The mobile app's remote session input is limited to plain text — no slash commands, file attachments, or `!` shell access.

---

## 4. Key PR Progress

1. **[#2587](https://github.com/github/copilot-cli/pull/2587) — Add automated issue classification with GitHub Agentic Workflows** (Closed)
   Introduces an AI-powered workflow using `gh-aw` to automatically apply `area:` labels and the `triage` label when issues are opened or reopened. This is now merged and operational, explaining the consistent labeling seen across recent issues.

*Note: Only one PR was updated in the last 24-hour window. The project's PR throughput appears low relative to issue volume, suggesting most active work is in branches or private forks.*

---

## 5. Feature Request Trends

Based on issue content and engagement signals, the most-requested feature directions are:

| Trend | Representative Issues | Signal |
|---|---|---|
| **Configurable keybindings** | #2419, #1729 | 👍10 combined; recurring since Feb 2026 |
| **Skill organization (subfolders)** | #1632 | 👍21 — highest upvoted open issue |
| **Enterprise/org-managed local config** | #3909, #3895 | New but high strategic value |
| **Mobile remote session parity** | #3922, #3923, #3924 | 3 issues filed same day — coordinated demand |
| **Programmatic /compact (agent-initiated)** | #3916 | Agent autonomy in context management |
| **Kerberos proxy support** | #523 | Long-running (Nov 2025), niche but blocking for enterprise users |
| **Shell command history for `!` prefix** | #2680 | Terminal UX expectation gap |

---

## 6. Developer Pain Points

- **Session resumption fragility** — Multiple bugs (#3832, #3913, #3926) around resuming sessions: broken model selection, lost prompt history. Session state management is a recurring weak spot.
- **Terminal rendering inconsistencies** — Em-dash strikethrough false positives (#3920), multi-line answer truncation (#3921), and `/cd` autocomplete keybinding confusion (#3918) all point to TUI polish gaps.
- **Plugin hook UX limitations** — The inability to silently rewrite commands (#2643) limits what plugin authors can build. Interactive confirmation on every rewritten command makes automation plugins impractical.
- **Quota/billing opacity** — The miscalculation in #3881, even if quickly resolved, erodes trust. Users want transparent per-request quota accounting.
- **Mobile experience is second-class** — The mobile app's remote session lacks `!` shell, `/` commands, and file upload. As mobile becomes a primary interaction surface, this gap will widen.
- **Linux packaging issues** — The AppImage `LD_LIBRARY_PATH` leak (#3925) is a packaging regression that breaks git HTTPS, a core dependency for session initialization.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-25

## 1. Today's Highlights

No new releases shipped in the past 24 hours. The community's attention is split between a long-standing file-looping bug (#640) that resurfaced after months, a heated debate about token-based usage calculation for Kimi Code subscriptions (#1994), and two freshly closed bugs around the `kimi web` command's MCP server handling (#2469, #2473). On the PR side, a significant MCP subagent fix landed (#1942) and vim-style navigation for approval prompts was merged (#1377).

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters | Community Reaction |
|---|-------|--------|----------------|--------------------|
| [#640](https://github.com/MoonshotAI/kimi-cli/issues/640) | CLI stuck reading one file in an infinite loop | OPEN (14 💬, 👍1) | A recurring reliability blocker — users on custom Anthropic endpoints with `mimo-v2-flash` report the agent loops on a single file read, effectively freezing the session. | Frustration; the issue has been open since January with no resolution, suggesting it may be edge-case-specific or low-priority for maintainers. |
| [#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994) | Usage calculation seems wrong — 2-hour quota exhausted in 2 queries | OPEN (7 💬, 👍7) | The highest-engagement issue today. Users argue that K2.6's long reasoning chains consume tokens far faster than the advertised "300–1200 requests per 5 hours" implies, making the subscription feel misleading. | Strong community alignment (7 upvotes); users want clarity on whether billing is per-token or per-request. |
| [#2472](https://github.com/MoonshotAI/kimi-cli/issues/2472) | Context compaction reloads system prompt & project instructions, wasting ~20k tokens | OPEN (new) | Freshly filed today. After compaction, the full system prompt and `AGENTS.md` are reloaded from scratch, inflating token costs unnecessarily. | No comments yet, but this directly impacts cost-sensitive users and is likely to gain traction. |
| [#2469](https://github.com/MoonshotAI/kimi-cli/issues/2469) | `kimi web` starts MCP servers from CLI install dir, breaking workspace-relative MCP tools | CLOSED | Workspace-relative MCP tool paths resolved incorrectly when launched via `kimi web`, breaking project-specific tooling. | Closed quickly after filing — likely addressed by a hotfix or acknowledged by maintainers. |
| [#2473](https://github.com/MoonshotAI/kimi-cli/issues/2473) | `/web` command throws an error in v0.19.2 | CLOSED | Users on `kimi-for-coding` / `k2.7` reported the `/web` slash command errors out immediately. | Closed same day as filing; appears to be a duplicate or rapidly triaged bug. |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#1942](https://github.com/MoonshotAI/kimi-cli/pull/1942) | fix(mcp): propagate MCP configs to subagents and resume immediately | **MERGED** | Fixes two issues: (1) `SubagentBuilder.build_builtin_instance` hard-coded `mcp_configs=[]`, meaning subagents (explore, coder, plan) never received MCP tool configurations; (2) MCP configs were not restored when resuming sessions. This is a meaningful reliability fix for anyone using MCP servers with subagent workflows. |
| [#1377](https://github.com/MoonshotAI/kimi-cli/pull/1377) | feat: add vim-style j/k keyboard navigation for approval and question prompts | **MERGED** | Adds `j`/`k` vim-style keybindings for navigating approval and question prompts in the TUI. A quality-of-life improvement that keyboard-driven developers will appreciate, especially those coming from `vim`/`neovim` backgrounds. |

---

## 5. Feature Request Trends

Based on the issues surfaced today and recent community activity, the most-requested feature directions are:

1. **Smarter context management** — The new #2472 issue highlights demand for incremental or cached system-prompt loading after compaction, rather than full re-reading. Developers want compaction to be token-efficient.
2. **Transparent usage/billing metrics** — Issue #1994 signals strong demand for clearer token accounting, real-time usage dashboards, or per-request vs. per-token pricing clarity.
3. **Improved `kimi web` / web mode stability** — Two web-mode bugs (#2469, #2473) were filed and closed within 48 hours, suggesting active but fragile web-mode tooling that needs hardening.
4. **MCP ecosystem robustness** — The merged PR #1942 and the related web-mode MCP bug (#2469) indicate that MCP integration is a high-traffic surface area where users expect reliable behavior across subagents, sessions, and web mode.

---

## 6. Developer Pain Points

- **Token cost unpredictability** — The single biggest pain point. Long reasoning chains (especially on K2.6/K2.7) can exhaust subscription quotas in just a handful of queries, and the current documentation around "300–1200 requests per 5 hours" does not align with real-world experience. Developers want either better token budgets, streaming cost estimates, or a request-based billing model.
- **Infinite loop / stuck-state bugs** — Issue #640 has been open for over five months. When the CLI freezes mid-task, there's no graceful recovery — users must kill the process. This erodes trust in production use.
- **Context compaction overhead** — Compaction is supposed to *save* tokens, but reloading ~20k tokens of system prompt and project instructions defeats the purpose for long sessions. This is a structural inefficiency that compounds with every compaction cycle.
- **MCP tool fragility across modes** — MCP tools break differently depending on whether you're in a subagent, a resumed session, or web mode. The fixes are landing (#1942), but the pattern suggests the MCP config propagation needs a more holistic architectural solution rather than per-mode patches.

---

*Data sourced from [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) — Digest generated 2026-06-25.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-25

## 1. Today's Highlights

The v1.17.10 release landed with significant MCP client enhancements — server instructions in session context, a new `--mini` CLI mode, and OpenCode-managed provider integration. Meanwhile, MCP continues to dominate community discussion: a multi-PR push is advancing full MCP resource/template/subscription support, and OAuth pain points remain a recurring theme. Session management also got a major architectural lift with the new v2 session flow and snapshot/revert system.

---

## 2. Releases

**v1.17.10** — [anomalyco/opencode](https://github.com/anomalyco/opencode)

**Core Improvements:**
- Added MCP server instructions to session context ([@Arcadi4](https://github.com/anomalyco/opencode/pull/Arcadi4)). MCP servers can now inject instructions that persist in the session's system prompt.
- Added OpenCode-managed provider integration support — the groundwork for first-party model provider hosting.
- Added MCP resource template listing, resource read tools — expanding the MCP client surface.
- Added a `--mini` CLI mode for lightweight invocation.

**Bugfixes:**
- Hid MCP resource template tools when templates aren't advertised by the server.

---

## 3. Hot Issues

### 1. Private-by-default session naming [#10416](https://github.com/anomalyco/opencode/issues/10416)
**Status:** CLOSED | 💬 59 comments | 👍 39

The session title computation triggers outbound network calls even when all LLMs are self-hosted. Users with strict firewall rules reported broken local workflows. Closed after discussion but highlights a privacy/local-first gap that resonates with self-hosted users.

### 2. Full MCP client capabilities [#28567](https://github.com/anomalyco/opencode/issues/28567)
**Status:** OPEN | 💬 18 comments | 👍 25

The canonical feature request tracking MCP client parity with the latest MCP specification (resource subscriptions, templates, completion, progress reporting, etc.). This issue serves as the umbrella for a flurry of related PRs.

### 3. Windows TUI crash on v1.17.x [#32706](https://github.com/anomalyco/opencode/issues/32706) & [#31607](https://github.com/anomalyco/opencode/issues/31607) & [#28121](https://github.com/anomalyco/opencode/issues/28121)
**Status:** OPEN | Multiple reporters

Across Windows versions and Bun versions (v1.3.10 through v1.3.14), the TUI crashes with `Effect.tryPromise` errors, segfaults (addresses like `0x2179F1BEAA2`, `0x2370C0A6A62`), and standalone executable failures. A Windows-specific stability pattern that needs systematic attention.

### 4. Ctrl+Z suspends the app instead of undoing [#24817](https://github.com/anomalyco/opencode/issues/24817) & [#19256](https://github.com/anomalyco/opencode/issues/19256)
**Status:** OPEN | 💬 7 + 6 comments

On Linux (and Windows per #19256), Ctrl+Z sends SIGTSTP, closing the app instead of performing undo. A long-standing TUI ergonomics issue with multiple contributors proposing fixes (PR #33734 and #33554 are adjacent efforts).

### 5. MCP connection lost after context compaction [#23556](https://github.com/anomalyco/opencode/issues/23556)
**Status:** CLOSED | 💬 2 comments

After context compaction events, MCP server tools become permanently unavailable until a new session starts. Confirmed as an OpenCode-level issue by CodeNomad maintainers. Directly impacts long sessions with MCP servers.

### 6. qwen3.7-max/plus instability on OpenCode Go [#33721](https://github.com/anomalyco/opencode/issues/33721) & [#33726](https://github.com/anomalyco/opencode/issues/33726)
**Status:** CLOSED / OPEN | Cloudflare timeout root cause

Paid Zen API subscribers report ~60-70% success rates with qwen3.7 models. Root cause: Cloudflare's 120s proxy read timeout kills long-thinking requests. Expected to reach the broader user base (8k subscribers reported).

### 7. Interactive code analysis fails — "tries to call unavailable tool" [#21090](https://github.com/anomalyco/opencode/issues/21090)
**Status:** OPEN | 💬 11 comments | 👍 7

A fundamental UX issue: OpenCode fails to interact with the user's codebase directly and falls back to asking users to copy-paste code manually. Points to tool availability / permission configuration complexity.

### 8. Support `opencode.local.json` for project-local config overrides [#17232](https://github.com/anomalyco/opencode/issues/17232)
**Status:** OPEN | 💬 4 comments | 👍 8

Request for dotfile-style local config merging (like `.gitignore` or `prettierconfig`) that can be excluded from version control. Important for teams needing per-developer overrides.

### 9. SSE event subscription ignores custom fetch / Basic Auth broken [#28180](https://github.com/anomalyco/opencode/issues/28180)
**Status:** CLOSED

When users pass a custom `fetch` implementation for authentication, SSE endpoints silently bypass it. This affects any remote MCP or streamable HTTP server behind Basic Auth.

### 10. Database migration error: "no such column: name" [#31119](https://github.com/anomalyco/opencode/issues/31119)
**Status:** OPEN | 💬 8 comments | 👍 5

Users updating from older versions encounter SQLite schema errors — the migration path doesn't add the `name` column that newer code expects. A first-run failure for anyone upgrading.

---

## 4. Key PR Progress

### MCP Multi-PR Feature Push

A stacked PR series ([28567](https://github.com/anomalyco/opencode/issues/28567) umbrella) is systematically building full MCP client capability:

| PR | Description | Author |
|---|---|---|
| [#32478](https://github.com/anomalyco/opencode/pull/32478) | Publish resource list change events | Nomadcxx |
| [#32936](https://github.com/anomalyco/opencode/pull/32936) | Resource subscriptions | Nomadcxx |
| [#32943](https://github.com/anomalyco/opencode/pull/32943) | Resource templates + completion | Nomadcxx |
| [#32480](https://github.com/anomalyco/opencode/pull/32480) | Surface tool progress notifications | Nomadcxx |
| [#33738](https://github.com/anomalyco/opencode/pull/33738) | Experimental MCP search tools (`mcp_search`, `mcp_describe`, `mcp_call`) | rekram1-node |

This is a coordinated ~3-week effort to bring OpenCode's MCP client to spec parity.

### Other Notable PRs

| PR | Description | Impact |
|---|---|---|
| [#33281](https://github.com/anomalyco/opencode/pull/33281) | Standalone v2 session flow with authenticated private server | Foundation for new UI architectures; session persistence as a service |
| [#33226](https://github.com/anomalyco/opencode/pull/33226) | Session snapshot and revert system (merged) | Git-like undo for sessions; enables safe experimentation |
| [#33737](https://github.com/anomalyco/opencode/pull/33737) | Remove directory filter from SSE stream | Fixes invisible TUI messages when project dir ≠ server startup dir |
| [#33733](https://github.com/anomalyco/opencode/pull/33733) | Cap retry backoff when response headers lack `retry-after` | Prevents absurd retry delays on API responses missing standard headers |
| [#33722](https://github.com/anomalyco/opencode/pull/33722) | Isolate OAuth request headers for MCP | Prevents credential leakage to cross-origin endpoints |
| [#32676](https://github.com/anomalyco/opencode/pull/32676) | Configure Figma OAuth client as built-in plugin | Out-of-box Figma MCP support |
| [#33734](https://github.com/anomalyco/opencode/pull/33734) | Publish `tui.session.select` event | Enables plugins to react to in-TUI session navigation |
| [#33463](https://github.com/anomalyco/opencode/pull/33463) | Overeager scope-discipline rule for system prompt | Prevents unintended file deletions during broad cleanup tasks |

---

## 5. Feature Request Trends

The most-requested feature directions, distilled from all open and recently closed issues:

| Trend | Key Issues | Signal |
|---|---|---|
| **Full MCP client parity** | [#28567](https://github.com/anomalyco/opencode/issues/28567), [#26862](https://github.com/anomalyco/opencode/issues/26862) (mTLS), [#32936](https://github.com/anomalyco/opencode/pull/32936) | 👍 25+; multi-PR coordinated push |
| **Session management & persistence** | [#33281](https://github.com/anomalyco/opencode/pull/33281), [#33226](https://github.com/anomalyco/opencode/pull/33226), [#23556](https://github.com/anomalyco/opencode/issues/23556) | Snapshot/revert shipped; v2 sessions in progress |
| **Local-first / privacy controls** | [#10416](https://github.com/anomalyco/opencode/issues/10416), [#17232](https://github.com/anomalyco/opencode/issues/17232) | 👍 39 on privacy issue; growing self-hosted user base |
| **TUI ergonomics & cross-platform stability** | [#24817](https://github.com/anomalyco/opencode/issues/24817), [#32706](https://github.com/anomalyco/opencode/issues/32706), [#33554](https://github.com/anomalyco/opencode/pull/33554) | Windows crashes; keyboard handling; mouse support |
| **OAuth & auth flow hardening** | [#12308](https://github.com/anomalyco/opencode/issues/12308), [#5444](https://github.com/anomalyco/opencode/issues/5444), [#26301](https://github.com/anomalyco/opencode/issues/26301), [#16893](https://github.com/anomalyco/opencode/issues/16893), [#28895](https://github.com/anomalyco/opencode/issues/28895) | 5+ separate OAuth issues; recurring auth flow bugs |

---

## 6. Developer Pain Points

**1. MCP OAuth is a minefield.** At least 5 distinct OAuth-related issues are open or recently closed — scope config ignored, browser never re-opens for re-auth, headers leaking cross-origin, Entra integration broken. The MCP OAuth implementation needs a holistic audit rather than incremental patches.

**2. Windows is a second-class platform.** Segfaults, PATH recognition failures, PowerShell execution errors, and TUI crashes are repeatedly reported with no clear resolution path. The Bun standalone executable on Windows appears particularly fragile.

**3. Context compaction silently breaks MCP.** After compaction, tools from MCP servers vanish for the session's remainder (#23556). This is a silent failure mode — users lose tool access without knowing why or how to recover.

**4. Upgrade migrations can brick the app.** The SQLite "no such column: name" error (#31119) means a version upgrade leaves the app unbootable. Users need documented rollback procedures or robust migration paths.

**5. Tool availability is opaque.** Users report OpenCode "tries to call unavailable tools" (#21090) when it should interact with codebases directly. The gap between advertised capability and actual out-of-box behavior creates confusion for new users.

**6. Cloudflare timeouts affect paid users.** The qwen3.7 instability (#33726) is an infrastructure-level issue — Cloudflare's 120s timeout is hitting thinking-mode generations. This affects the commercial OpenCode Go product and requires either infrastructure changes or model-side streaming adjustments.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-25

---

## 1. Today's Highlights

The past 24 hours saw a surge of **connection reliability fixes** (idle stream timeouts, Bedrock retry logic, mid-stream retry for OpenAI Responses) and two new **provider additions** (Amazon Bedrock Mantle, Microsoft Foundry normalization) advancing Pi's multi-provider compatibility. On the TUI side, fixes for session-restore rendering order and termux crashes landed, while new feature requests for inline skill selectors and parallel agent loops signal active community interest in workflow efficiency upgrades.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

### [#4945](https://github.com/earendil-works/pi/issues/4945) — `openai-codex` Connection Reliability Issues 👍30 · 💬69
The top-discussed open issue. Users report that `openai-codex` / `gpt-5.5` interactive TUI sessions freeze on `Working...` with no streamed output—the only recovery is Escape. High engagement signals this is a blocking regression for users on these providers.

### [#3357](https://github.com/earendil-works/pi/issues/3357) — Official Local LLM Provider Extension 👍37 · 💬28
Requests dynamic model fetching from `{baseUrl}/models` to support llama.cpp, Ollama, LM Studio, and similar runtimes as first-class providers. Strong community backing reflects demand for seamless local model integration.

### [#5653](https://github.com/earendil-works/pi/issues/5653) — Move off Shrinkwrap 💬16
Installing both `@earendil-works/pi-ai` and `@earendil-works/pi-coding-agent` duplicates `pi-ai` on disk, causing two separate module-level provider registries. A dependency-hoisting/packaging issue requiring architectural attention.

### [#5363](https://github.com/earendil-works/pi/issues/5363) — Add `amazon-bedrock-mantle` Provider 👍4 · 💬14
Bedrock Mantle models expose an OpenAI-incompatible Responses API at a distinct endpoint (`bedrock-mantle.{region}.api.aws/openai/v1/responses`). A PR is already open (#5509).

### [#5291](https://github.com/earendil-works/pi/issues/5291) [CLOSED] — Sessions Hang with Anthropic Subscription 7
Intermittent `Working...` hangs correlated with Anthropic Enterprise subscription. Closed recently; fix is in PR #6051 (idle timeout + retry logic).

### [#6019](https://github.com/earendil-works/pi/issues/6019) [CLOSED] — OpenAI Responses Mid-Stream Retry Not Attempted 💬4
When OpenAI returned a retryable error mid-stream, Pi set `stopReason: "error"` and gave up. Identifies a gap in the retry circuit.

### [#6038](https://github.com/earendil-works/pi/issues/6038) [CLOSED] — TUI Hangs on Termux Screen Rotation 💬4
Flipping portrait/landscape in Termux causes `/model` and other TUI commands to hang. A mobile-environment rendering bug affecting Android users.

### [#5992](https://github.com/earendil-works/pi/issues/5992) [CLOSED] — Crash: `value.startsWith is not a function` 💬3
Long sessions that are reloaded crash during autocomplete. Likely a stale serialization or state issue in `CustomEditor`.

### [#6009](https://github.com/earendil-works/pi/issues/6009) — OpenAI Responses Drops Reasoning State on Out-of-Order Streaming
When providers stream output items that complete out of order, reasoning blocks (including `encrypted_content`) are dropped, causing loss of chain-of-thought continuity across turns.

### [#6002](https://github.com/earendil-works/pi/issues/6002) — `SessionManager.open()` Silently Truncates Non-Session Files
Pointing `--session <path>` at a non-session file (e.g., an NDJSON log) is silently overwritten to a 133-byte session header with no warning. A destructive UX footgun.

---

## 4. Key PR Progress

### [#6051](https://github.com/earendil-works/pi/pull/6051) [MERGED] — `fix(ai): recover from hung streams and retry unmodeled Bedrock errors`
Introduces `streamIdleTimeoutMs` (default 240s) and `connectTimeoutMs` to prevent streams from blocking forever on half-open sockets. Also adds retry logic for unmodeled Bedrock errors. Closes #5291.

### [#5509](https://github.com/earendil-works/pi/pull/5509) [OPEN] — `feat: Add Amazon Bedrock Mantle OpenAI Responses provider`
Adds a new provider adapter for Bedrock Mantle's Responses API, supporting GPT 5.5 and 5.4 models. Mirrors the Azure OpenAI Responses adapter pattern. Addresses #5363.

### [#6054](https://github.com/earendil-works/pi/pull/6054) [MERGED] — `feat(agent,coding-agent): add runParallelAgentTasks`
New `runParallelAgentTasks` utility in `@earendil-works/pi-agent-core` plus a system prompt guideline encouraging the model to batch independent tool calls. Closes #6053's feature request.

### [#6032](https://github.com/earendil-works/pi/pull/6032) [MERGED] — `fix(ai): pass custom fetch to OpenAI clients`
Previously the `openai-completions` and `openai-responses` adapters ignored user-supplied `fetch`. This PR threads the option through to the SDK constructor, enabling proxy and custom-network environments.

### [#6004](https://github.com/earendil-works/pi/pull/6004) [MERGED] — `feat: Normalize modern Microsoft Foundry Responses API endpoints`
Normalizes Azure Foundry base URLs (including modern `*.ai.azure.com/openai/v1/responses` forms) so they route correctly. Closes #6005.

### [#6048](https://github.com/earendil-works/pi/pull/6048) [MERGED] — `fix(coding-agent): show resources before messages when resuming session`
After a refactor, loaded Context/Skills/Prompts/Extensions appeared below restored messages. This PR ensures they render at the top of the chat on resume/reload.

### [#6018](https://github.com/earendil-works/pi/pull/6018) [MERGED] — `feature(coding-agent): show context estimates in session tree`
Session tree entries now display context usage estimates (%), allowing users to quickly identify sessions where significant token consumption occurred.

### [#6058](https://github.com/earendil-works/pi/issues/6058) [CLOSED] — TUI Crashes on Lines Exceeding Terminal Width
A reproduction of the crash `Error: Rendered line 3205 exceeds terminal width (152 > 89)`. Custom TUI components need graceful truncation instead of fatal throws.

### [#5268](https://github.com/earendil-works/pi/pull/5268) [MERGED] — `fix(tui): render the hardware cursor by default`
Unfocused Pi terminals now show the OS hardware cursor instead of a fake reverse-video block, so inactive windows no longer appear active (#3896).

### [#6030](https://github.com/earendil-works/pi/pull/6030) [MERGED] — `fix(coding-agent): print benchmark timings after TUI stop`
Ensures benchmark timing output is still printed after the TUI exits (#6029).

---

## 5. Feature Request Trends

| Trend | Representative Issues |
|---|---|
| **Multi-provider parity** | Bedrock Mantle (#5363), Microsoft Foundry (#6005), Charm Hyper (#6042), local LLM discovery (#3357) |
| **Multi-agent / parallel execution** | `runParallelAgentTasks` (#6053), subagent simplification (#6055, #6056) |
| **Inline slash-command UX** | Typing `/` should open a fuzzy-filtered skill selector (#6059) |
| **Token visibility & cost awareness** | Reasoning token counts in Usage (#6057), context estimates in session tree (#6018, merged) |
| **File-format support expansion** | BMP reading from disk (#6047), MiniMax image-01 generation extension (#6024) |
| **Workspace/session management UX** | Named sessions from inside a session (#6046), session file safety (#6002) |

---

## 6. Developer Pain Points

1. **Stream reliability across providers** — Multiple overlapping reports of sessions hanging on `Working...` from OpenAI Codex, Bedrock, and Anthropic (#4945, #5291, #6019). The root causes span idle-socket detection, mid-stream retry, and connection timeouts. PR #6051 addresses the most severe cases, but #4945 remains open with high engagement.

2. **Android/Termux environment** — Recurring rendering issues including scroll-pinning (#4690), screen-rotation hangs (#6038), and stale rendering on resize. The Termux surface appears under-tested relative to its user base.

3. **TUI rendering crashes** — Overflow errors on wide lines (#6058) and full-redraw scrollback jumps (#6050) suggest the TUI truncation and viewport logic needs hardening against edge cases.

4. **Module duplication in monorepo** — The shrinkwrap/hoisting issue (#5653) creates two copies of `pi-ai` with separate provider registries—a class of bug that produces silent, hard-to-diagnose behavioral differences.

5. **Destructive session import** — `SessionManager.open()` silently destroying non-session files (#6002) is a high-severity UX issue that could cause data loss with no warning.

6. **Mobile terminal hostname leakage** — A closed report (#6037) noted internal hostnames leaking through system prompts, raising concerns for users running LLM agents on shared or mobile devices.

---

*All links reference `github.com/earendil-works/pi` unless otherwise noted.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-25

---

## 1. Today's Highlights

Qwen Code shipped **v0.19.2** with a new remote LSP status route for daemon workspace observability, while the community zeroed in on a **critical path-traversal vulnerability** in source deletion (PR #5829) and a wave of UX regressions — including agent reply truncation (#5837), scroll snap-back during multi-agent runs (#5799), and silent cron-loop re-triggering (#5823). On the infrastructure side, multiple contributors pushed to make CI integration tests run on PRs (#5219) and cut the critical path (#5027), reflecting growing pain around regressions surfacing only at release time.

---

## 2. Releases

| Version | Highlights |
|---------|-----------|
| **v0.19.2** ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2)) | `feat(serve)`: Added remote LSP status route for daemon workspaces ([@doudouOUC](https://github.com/QwenLM/qwen-code/pull/5762)) |
| **v0.19.2-preview.0** | Preview release, same changes as above |
| **v0.19.1-nightly.20260624.a234860a4** | Nightly snapshot |
| **v0.18.5-preview.0** | Back-port preview release |

> ⚠️ Note: [Issue #5831](https://github.com/QwenLM/qwen-code/issues/5831) reports that the v0.19.2 release workflow's `publish` job failed on 2026-06-24.

---

## 3. Hot Issues

### 🔴 Security: Source deletion path traversal
**[#5834](https://github.com/QwenLM/qwen-code/issues/5834)** — *P1, security, file-operations*
A crafted `sourceSlug` with path-traversal segments can escape the workspace `sources` directory during deletion. Community flagged this as a serious vulnerability. **Fix already open** in PR [#5829](https://github.com/QwenLM/qwen-code/pull/5829).

### 🔴 Agent reply truncation
**[#5837](https://github.com/QwenLM/qwen-code/issues/5837)** — *P2, ui, rendering*
The last response from the agent gets cut off mid-sentence (stops at "Dependencies added:"). Debug logs confirm the full response exists in the raw JSONL but is truncated in the TUI. 4 comments and rising.

### 🟡 Excessive full prompt reprocessing
**[#5736](https://github.com/QwenLM/qwen-code/issues/5736)** — *performance, caching*
After the recent update, local LLM backends (e.g., llama.cpp) are forcing full prompt reprocessing more frequently when continuing conversations. 5 comments from users noticing the regression.

### 🟡 Silent cron-loop tasks with no visibility
**[#5823](https://github.com/QwenLM/qwen-code/issues/5823)** — *cli, session-management, background-automation*
`/loop` cron tasks fire silently in new chat sessions without the user knowing they were scheduled. The model cannot list or stop its own scheduled tasks — a "foot-gun" that surprised the reporter when every fresh session auto-started work.

### 🟡 CI doesn't run integration tests on PRs
**[#5219](https://github.com/QwenLM/qwen-code/issues/5219)** — *ci-cd, testing*
End-to-end integration tests only run on the nightly release pipeline. PRs that break integration tests pass CI, merge green, and breakage stays hidden until release. 4 comments, recurring theme.

### 🟡 AI-assisted PRs miss integration test updates
**[#5665](https://github.com/QwenLM/qwen-code/issues/5665)** — *ci-cd, testing*
Closely related to #5219 — AI-generated PRs update product code and unit tests but frequently skip integration-test updates, with failures only surfacing at release time.

### 🟡 Model auto-switching after upgrade
**[#5819](https://github.com/QwenLM/qwen-code/issues/5819)** — *configuration, model-switching*
After upgrading from v0.18.3 to v0.19, `settings.json` was silently changed from a low-cost model (DeepSeek-4 flash) to DeepSeek-4 pro, draining the user's prepaid balance. Also reports simplified-to-traditional Chinese output issues.

### 🟡 Configurable agent command timeout
**[#5838](https://github.com/QwenLM/qwen-code/issues/5838)** — *feature-request, shell, settings*
Users want the ability to adjust the timeout for processes spawned by the AI agent, as the current default is too short for long-running commands.

### 🟡 Todo/plans/memories persistence — cross-device sync
**[#5836](https://github.com/QwenLM/qwen-code/issues/5836)** — *feature-request, session-management*
Todos, plans, and memories are saved to `~/.qwen/` (outside Git), making them invisible across devices or team members. Request: allow persisting to `.qwen/todos` or `docs/todos` within the project.

### 🟡 TUI scroll snap-back during multi-agent runs
**[#5798](https://github.com/QwenLM/qwen-code/issues/5798)** — *ui, rendering* (Closed)
In non-VP mode, scroll-up snaps back to the bottom and the screen flickers when background agents are running. **Fixed** by PR [#5799](https://github.com/QwenLM/qwen-code/pull/5799).

---

## 4. Key PR Progress

### Security fix: Reject unsafe source slugs
**[#5829](https://github.com/QwenLM/qwen-code/pull/5829)** — *fix(desktop)*
Validates source identifiers before resolving the delete path, preventing path traversal. Direct fix for issue #5834.

### Cancel pending loop wakeups on user abort
**[#5808](https://github.com/QwenLM/qwen-code/pull/5808)** — *fix(cli)*
Fixes [#5806](https://github.com/QwenLM/qwen-code/issues/5806) — pressing Esc during a self-paced `/loop` tick now cancels the pending wakeup, preventing silent loop resumption.

### Voice dictation: user-configurable keyterms file
**[#5817](https://github.com/QwenLM/qwen-code/pull/5817)** — *feat(cli)*
Adds `general.voice.keytermsFile` setting so users can extend the hardcoded ASR bias list with project-specific terms. Fixes [#5816](https://github.com/QwenLM/qwen-code/issues/5816).

### Preserve selected model on provider re-install
**[#5835](https://github.com/QwenLM/qwen-code/pull/5835)** — *fix(core)*
Re-running provider setup (re-auth, ACP reconnect, token refresh) no longer resets the active model. Addresses [#5819](https://github.com/QwenLM/qwen-code/issues/5819).

### Fix scroll snap-back in non-VP mode
**[#5799](https://github.com/QwenLM/qwen-code/pull/5799)** — *fix(cli)* ✅ Merged
Keeps footer height reservation in sync with the LiveAgentPanel during multi-agent runs, preventing overflow and scroll snap-back. Fixes [#5798](https://github.com/QwenLM/qwen-code/issues/5798).

### Streaming inactivity timeout for OpenAI pipeline
**[#5827](https://github.com/QwenLM/qwen-code/pull/5827)** — *fix(core)* ✅ Merged
The OpenAI client timeout only bounded connect + first response; inter-chunk inactivity during streaming was unbounded. Now adds a streaming inactivity timeout.

### Stop duplicate provider responses
**[#5657](https://github.com/QwenLM/qwen-code/pull/5657)** — *fix(cli)*
Prevents repeated duplicate provider tool-call responses from keeping Qwen Code in a tool-result loop.

### Partition tool display by type in TUI
**[#5661](https://github.com/QwenLM/qwen-code/pull/5661)** — *feat(tui)*
Replaces binary compact/full rendering with type-based partitioning: read/search/list tools collapse into a summary line, mutation tools show individually.

### Release flow merge-queue safety
**[#5832](https://github.com/QwenLM/qwen-code/pull/5832)** — *ci(release)*
Makes the release auto-merge compatible with `main`'s merge queue and excludes automated release PRs from release notes.

### Auto-generated skills: confirm before persisting
**[#5616](https://github.com/QwenLM/qwen-code/pull/5616)** — *feat(memory)*
Skills auto-created by the background skill-review agent now require user review before entering the skill library, preventing one-off refactors from polluting the library.

---

## 5. Feature Request Trends

| Direction | Representative Issues | Signal |
|-----------|----------------------|--------|
| **Cross-device state sync** | [#5836](https://github.com/QwenLM/qwen-code/issues/5836) (todos/plans/memories in project) | Growing demand for team/multi-device workflows |
| **Voice dictation expansion** | [#5816](https://github.com/QwenLM/qwen-code/issues/5816) (custom keyterms), [#5796](https://github.com/QwenLM/qwen-code/issues/5796) (web/desktop voice), [#5770](https://github.com/QwenLM/qwen-code/issues/5770) (LLM refinement of transcripts) | Voice input is an active frontier — 3+ PRs/issues converging |
| **TUI/UX polish** | [#5789](https://github.com/QwenLM/qwen-code/issues/5789) (default status line), [#5759](https://github.com/QwenLM/qwen-code/issues/5759) (collapse preview count), [#5661](https://github.com/QwenLM/qwen-code/pull/5661) (tool partitioning) | Terminal UX is a high-engagement area |
| **CI/CD hardening** | [#5219](https://github.com/QwenLM/qwen-code/issues/5219), [#5665](https://github.com/QwenLM/qwen-code/issues/5665), [#5027](https://github.com/QwenLM/qwen-code/issues/5027), [#4805](https://github.com/QwenLM/qwen-code/issues/4805) | Recurring theme: prevent regressions from reaching release |
| **Session/loop observability** | [#5823](https://github.com/QwenLM/qwen-code/issues/5823) (cron visibility), [#5806](https://github.com/QwenLM/qwen-code/issues/5806) (loop abort) | Background automation needs better guardrails |
| **Safe mode / troubleshooting** | [#4943](https://github.com/QwenLM/qwen-code/pull/4943) (`--safe-mode` flag) | Long-standing request for clean-baseline debugging |

---

## 6. Developer Pain Points

1. **Regressions hidden until release** — The most persistent structural complaint. Integration tests don't run on PRs (#5219), AI-assisted PRs skip test updates (#5665), and the merge queue isn't enforced (#4805). Multiple contributors are actively pushing fixes, but the problem spans process and tooling.

2. **Silent model switching drains budgets** — Issue [#5819](https://github.com/QwenLM/qwen-code/issues/5819) is alarming: an upgrade silently changed the model from flash to pro, consuming significant tokens before the user was notified by their provider. This erodes trust in auto-updates.

3. **Background automation lacks guardrails** — Cron tasks fire silently (#5823), loop wakeups survive user abort (#5806), and there's no way to list or stop scheduled tasks. As Qwen Code adds more background capabilities, observability and control mechanisms are lagging.

4. **State is locked to a single machine** — Todos, plans, and memories live in `~/.qwen/` outside Git (#5836). For developers switching machines or collaborating, this is a hard blocker on team workflows.

5. **TUI rendering edge cases** — Multiple reports of reply truncation (#5837), scroll snap-back (#5798), and line-overwrite on completion (#5800) suggest the terminal rendering layer needs dedicated hardening as output complexity grows (multi-agent, long responses).

6. **CI critical path still too long** — At ~25 minutes (#5027), PR feedback loops are slow. The community has data-backed proposals (shard tests, gate Windows/macOS to merge queue, move CodeQL off PRs) but implementation is still open.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-25

---

## 1. Today's Highlights

The project is deep in the **v0.8.65 milestone grind**, with a massive push on provider-scoped routing, Fleet multi-agent architecture, and a long-overdue i18n refactor. Two fresh PRs opened in the last hours address UTF-8 boundary panics in the engine event loop and polish condensed tool transcript rows. Meanwhile, the community is actively debating agent autonomy vs. user control after a regression where CodeWhale began self-directing multi-step work without confirmation.

---

## 2. Releases

**No new releases in the last 24 hours.** The v0.8.65 milestone remains in active development with multiple trackers and PRs still open.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#3275](https://github.com/Hmbown/CodeWhale/issues/3275) | CodeWhale over-extends scope, self-questions and self-answers, deviating from user intent | Regression from #3061; agent autonomy vs. user control is a flashpoint | 12 comments — highest engagement; users want a confirmation gate |
| [#3222](https://github.com/Hmbown/CodeWhale/issues/3222) | Selected-route reasoning stream style overrides for inline `<think>` blocks | Enables correct reasoning display for OpenAI-compatible gateways | 11 comments; patch direction already contributed by @buko |
| [#3063](https://github.com/Hmbown/CodeWhale/issues/3063) | v0.8.59 release tracker — mouse-report leak, runtime safety, issue/PR queue | Stabilization release; fixes a real macOS input leak | 11 comments; maintainer-driven triage |
| [#3205](https://github.com/Hmbown/CodeWhale/issues/3205) | Fleet model classes, loadout auto, and semantic route roles | Core architecture for multi-model, multi-agent Fleet system | 10 comments; foundational for v0.8.65 |
| [#3461](https://github.com/Hmbown/CodeWhale/issues/3461) | MCP duplicate server instance — orphan process wastes ~4MB RAM | Real reliability bug; shared stdio pipe means killing one kills both | 8 comments; fix already merged via PR #3562 |
| [#2608](https://github.com/Hmbown/CodeWhale/issues/2608) | EPIC: Separate provider facts, model facts, offerings, and route resolution | Architectural invariant: "A model string alone is never enough to select a route" | 8 comments; underpins dozens of other issues |
| [#3192](https://github.com/Hmbown/CodeWhale/issues/3192) | List CodeWhale on agentclientprotocol/registry for Zed integration | Ecosystem visibility; lowers adoption friction for Zed users | 7 comments; community advocacy |
| [#3466](https://github.com/Hmbown/CodeWhale/issues/3466) | Approval modal cancellation and review-required semantics regression | v0.8.64 introduced destructive approval every time — users find it burdensome | 4 comments; UX regression pain point |
| [#2934](https://github.com/Hmbown/CodeWhale/issues/2934) | Sidebar sessions panel with auto-resume and history browsing | Currently only `Ctrl+R` popup or `--continue` flag — major UX gap | 3 comments; frequently requested UX improvement |
| [#3439](https://github.com/Hmbown/CodeWhale/issues/3439) | Integrate 智谱 GLM-5.2 as provider route fixture | Chinese-language use cases (long docs, creative writing) benefit from GLM | 6 comments; API details already provided |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#3565](https://github.com/Hmbown/CodeWhale/pull/3565) | `catch_unwind` in engine event loop to survive UTF-8 byte-boundary panics | Fixes UI freeze when model/tool output contains multi-byte UTF-8 (Cyrillic, CJK) | **OPEN** — fresh, needs review |
| [#3566](https://github.com/Hmbown/CodeWhale/pull/3566) | Clarify condensed tool transcript rows | Keeps exact tool identity visible; suppresses control-only arg summaries | **OPEN** — same-day |
| [#3563](https://github.com/Hmbown/CodeWhale/pull/3563) | Factual model reference database + `/modeldb` browse | Narrowed v0.8.65 slice: context window, price, modality, provider per model | **CLOSED** — merged |
| [#3562](https://github.com/Hmbown/CodeWhale/pull/3562) | Passive MCP tool discovery + configured custom provider rows | Fixes #3461 orphan process; implements #1519 custom provider rows | **CLOSED** — merged |
| [#3559](https://github.com/Hmbown/CodeWhale/pull/3559) | Harvest zh-Hans locale bundle | Moves 408 Chinese translation entries from hardcoded Rust into `zh-Hans.json` | **CLOSED** — merged |
| [#3555](https://github.com/Hmbown/CodeWhale/pull/3555) | `/provider` readiness dashboard — capability/metadata badges | Closes #3083; surfaces reasoning readiness, auth status, route validation | **CLOSED** — merged |
| [#3554](https://github.com/Hmbown/CodeWhale/pull/3554) | Fallback acceptance coverage + local/private guardrail | Closes #2574; adds test coverage for capability-aware provider fallback chain | **CLOSED** — merged |
| [#3553](https://github.com/Hmbown/CodeWhale/pull/3553) | Suppress typed ask-rule prompts in YOLO mode | Fixes #3386; YOLO mode should mean zero approval modals | **CLOSED** — merged |
| [#3547](https://github.com/Hmbown/CodeWhale/pull/3547) | Save exact file ask rules from write approvals | Extends "save ask rule" from `exec_shell` to `write_file`/`edit_file` | **CLOSED** — merged |
| [#3561](https://github.com/Hmbown/CodeWhale/pull/3561) | Extract shared bridge core helpers | Consolidates duplicated logic from Telegram, Feishu, WeCom, Weixin integrations | **CLOSED** — merged |

---

## 5. Feature Request Trends

1. **Multi-Provider Routing & Model Selection** — The dominant theme. Issues #2608, #3205, #3384, #3385, #3083, and #3075 all push toward a world where provider identity, model identity, and wire protocol are cleanly separated. The community wants atomic, unambiguous model/provider switching with live catalog data.

2. **Fleet Multi-Agent Architecture** — #3167, #3205, #3154, #3166, and #3367 define "Fleet" as the user-facing concept for profiled, multi-model agent teams with role/slot/loadout semantics. This is the project's biggest architectural bet.

3. **Internationalization (i18n)** — PR #3549 and #3559 mark the beginning of extracting hardcoded locale strings. The Chinese-speaking user base is vocal (GLM-5.2 integration request, zh-Hans locale bundle).

4. **Agent Autonomy Controls** — #3275 and #3466 both reflect tension between powerful autonomous agents and user desire for confirmation gates. The community is pushing for configurable autonomy levels.

5. **IDE/Ecosystem Integration** — #3192 (agentclientprotocol/registry for Zed) and #2934 (sidebar sessions panel) show demand for better editor integration and session management UX.

---

## 6. Developer Pain Points

- **Agent Over-Reach** ([#3275](https://github.com/Hmbown/CodeWhale/issues/3275)): The most-discussed issue right now. CodeWhale entering self-driven loops of proposing, answering, and executing without user confirmation is a real regression. Developers want explicit confirmation gates restored.

- **Approval Modal Fatigue** ([#3466](https://github.com/Hmbown/CodeWhale/issues/3466)): v0.8.64 introduced destructive approval prompts for every operation. Users who preferred the original no-confirmation flow feel the change was regressive.

- **MCP Orphan Processes** ([#3461](https://github.com/Hmbown/CodeWhale/issues/3461)): Duplicate server instances from a single `mcp.json` entry waste resources and create fragile stdio pipe dependencies. Fix is merged (#3562) but the issue highlights broader MCP lifecycle management concerns.

- **UTF-8 Boundary Panics** ([#3565](https://github.com/Hmbown/CodeWhale/pull/3565)): Multi-byte characters in model output can crash the engine event loop, freezing the entire TUI. This is a correctness issue in the text processing pipeline that needs immediate attention.

- **Session Management Friction** ([#2934](https://github.com/Hmbown/CodeWhale/issues/2934)): No persistent session sidebar — users must remember `Ctrl+R` or `--continue` flags. This is a daily-use UX gap that affects all users.

- **Hardcoded Locale Strings**: The 5,385-line `localization.rs` was a maintenance burden. The extraction to JSON (#3549/#3559) is a welcome but overdue refactor.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*