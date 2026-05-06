# AI CLI Tools Community Digest 2026-04-28

> Generated: 2026-04-28 00:19 UTC | Tools covered: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem Cross-Comparison Report
## 2026-04-28 Community Digest Analysis

---

## 1. Ecosystem Overview

The AI CLI tools landscape in early 2026 is characterized by intense iteration velocity and converging feature sets, with all major players grappling with the tension between autonomous agent capabilities and user control. Claude Code and OpenAI Codex lead in raw community scale but face critical reliability and transparency crises, while newer entrants (Kimi, Qwen, Pi, OpenCode) differentiate through specific workflow optimizations—approval flexibility, provider universality, or regional model integration. The dominant architectural shift across all tools is the migration from simple chat interfaces to persistent, observable, multi-agent orchestration systems with granular permission models, though implementation maturity varies dramatically.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Release Cadence Notes |
|:---|:---:|:---:|:---:|:---|
| **Claude Code** | 10 highlighted | 8 updated | 0 | Stable release; infrastructure fixes merged |
| **OpenAI Codex** | 10 highlighted | 10 updated | 4 (α.4–α.8) | Rapid Rust alpha iteration; stabilization push |
| **Gemini CLI** | 10 highlighted | 10 updated | 1 nightly | Nightly builds; security-focused |
| **GitHub Copilot CLI** | 39 updated | **0** | 1 (v1.0.37) | **Concerning PR drought** despite high issue volume |
| **Kimi Code CLI** | 6 highlighted | 9 updated | 0 | Community-driven PR convergence on approval fixes |
| **OpenCode** | 10 highlighted | 10 updated | 2 patches | Fast patch response to critical bugs |
| **Pi** | 50 issues | 28 PRs | 3 patches | **Highest raw activity**; emergency patches for v0.70.3 |
| **Qwen Code** | 10 highlighted | 10 updated | 1 nightly | DeepSeek crisis response dominating cycle |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **Remote/SSH Development** | Codex (#10450, #9224), Copilot (#3009) | SSH workspace parity, mobile-to-CLI handoff, container OAuth fallback |
| **Approval System Flexibility** | Kimi (#1823, #2087, #2092), Claude Code (#43713), OpenCode (#12633, #22047) | Indefinite timeouts, granular auto-approval rules, directory-scoped persistence |
| **Context Window Parity** | Codex (#19464: 400K vs 1M), Qwen (#3679: 131K vs 1M), Claude (#43989: 400K autocompact) | Eliminate "artificial" caps between API and application tiers |
| **Transparent Resource Accounting** | Codex (#13733, #19215, #19732), Claude (#53262, #48274), Qwen (#3668) | Real-time billing estimates, idle drain prevention, audit-able routing decisions |
| **Background Task Observability** | Qwen (#3634, #3642, #3488), Gemini (#22323, #23608), Kimi (#2082) | Shell pools, task registries, status pills, termination control |
| **MCP/Plugin Ecosystem Maturity** | Copilot (#2956, #3009, #2977), Claude (#33070, #30823), Pi (#3817) | OAuth in containers, tool name collision handling, lifecycle management |
| **Session Durability & Recovery** | Claude (#54092, #13480), OpenCode (#24628, #6680), Codex (#18993) | Persistent storage, archival browsing, crash recovery without data loss |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Approach & Target Users |
|:---|:---|:---|
| **Enterprise Integration** | Claude Code, GitHub Copilot | Deep Microsoft/GitHub ecosystem entanglement; org-wide policy enforcement, managed settings, VS Code terminal embedding. Targets teams with existing enterprise agreements. |
| **Provider Universality** | Pi, OpenCode | Inference-router positioning: Pi aggressively expanding Cloudflare/Together/Azure/Workers AI; OpenCode chasing model velocity (GPT-5.5, DeepSeek-V4, Kimi K2.x). Targets power users with multi-provider setups. |
| **Regional/Chinese Market** | Qwen, Kimi | Native DeepSeek/MiniMax integration, Chinese language optimization, Bailian/Alibaba cloud auth. Targets domestic developers and specific model ecosystems. |
| **Open Source Velocity** | Pi, OpenCode | Transparent development (Pi's `pi-mono` repo), community plugin contributions. Pi's self-update architecture (`pi update`) signals distribution independence. |
| **Safety/Permissions Architecture** | Codex (Rust sandbox), Claude (plan mode) | Codex's Bubblewrap/Seatbelt sandboxing with `PermissionProfile` migration; Claude's explicit approval tiers. Targets security-conscious organizations. |
| **Agent Orchestration Depth** | Qwen, Gemini | Qwen's Phase B/C background shell pools; Gemini's subagent recovery and AST-aware tooling. Targets complex multi-step automation workflows. |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|:---|:---|:---|
| **🔥 Highest Velocity** | **Pi**, **OpenAI Codex** | Pi: 50 issues + 28 PRs in 24h, emergency patch cadence; Codex: 4 alpha releases in 24h, coordinated 7-PR permissions migration |
| **Strong & Structured** | **Claude Code**, **Qwen**, **Kimi** | Claude: 149-comment issue sustained engagement; Qwen: focused crisis response (#3637+#3682); Kimi: convergent community PRs (#2087/#2086) |
| **Active but Constrained** | **Gemini**, **OpenCode** | Gemini: nightly builds, maintainer-only architectural EPICs; OpenCode: fast critical fixes but smaller absolute volume |
| **⚠️ Concerning Stagnation** | **GitHub Copilot CLI** | **39 issues updated, 0 PRs, 0 community PRs merged** — suggests either private development fork or maintainer bandwidth crisis; enterprise users blocked on #1703 for 25+ comments |

**Maturity Signals:**
- **Claude Code**: Most "production-worn" — billing bugs, data loss, streaming timeouts indicate scale stress
- **Codex**: Deep architectural refactor (permissions, Rust core) suggests pre-1.0 instability
- **Kimi**: Emerging maturity — e2e accuracy testing (#2085), granular auto-approval (#2092) show systematic quality investment
- **Pi**: Highest community contribution ratio but packaging regressions (#3846) reveal release process immaturity

---

## 6. Trend Signals

| Industry Trend | Evidence Across Tools | Strategic Value for Developers |
|:---|:---|:---|
| **The "Silent Money Pit" Crisis** | Codex #13733 (O(n²) polling), #19732 (idle memory drain); Claude #53262 (HERMES.md billing); Copilot #2591/#2969 (infinite request loops) | **Demand usage telemetry APIs** in tool selection; verify real-time cost visibility before adoption |
| **Permission Model as Competitive Moat** | Kimi's indefinite approval (#2087), Codex's `PermissionProfile` migration, Claude's `autoAllowBashIfSandboxed` gaps | Expect **workflow customization** to differentiate tools; one-size-fits-all security will lose power users |
| **Context Window Arbitrage** | Codex 400K vs API 1M (#19464), Qwen 131K vs advertised 1M (#3679), Claude 400K autocompact (#43989) | **Verify actual vs. advertised context**; model API parity is not guaranteed in application layers |
| **Subagent/Background Agent Standardization** | Qwen's shell pools (#3642), Gemini's subagent false-success (#22323), Claude's worktree auto-creation (#12513) | Multi-agent orchestration is **immature and inconsistent**; plan for debugging complexity |
| **Provider Lock-in vs. Router Independence** | Pi's universal provider expansion, OpenCode's model-chasing, Codex's OpenAI-backend regressions (#19871) | **Multi-provider tools reduce single-vendor risk** but increase compatibility surface area |
| **Terminal as Battleground** | TUI freezes (Claude #53804), flickering (Qwen #3638), mouse scroll hijacking (Copilot #2405), copy-on-select (OpenCode #10490) | Terminal UX quality directly impacts daily productivity; test on your primary terminal emulator before committing |

---

*Report compiled from 8 community digests covering 150+ issues, 80+ PRs, and 12 releases across 2026-04-27/28.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-04-28 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Universal pain point; affects every document Claude generates; author argues users rarely ask for good typography but always suffer from bad |
| 2 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating Claude Skills across 5 dimensions (structure, security, performance, UX, maintainability) | Enterprise governance angle; long-running PR since Nov 2025 suggests scope complexity |
| 3 | **Frontend Design** (improved) | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity/actionability—every instruction executable within single conversation | Community iterating on official skill quality; focus on token efficiency and behavioral steering |
| 4 | **ODT Processing** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | OpenDocument creation, template filling, and ODT→HTML conversion | Fills open-source/ISO standard gap alongside existing DOCX/PDF skills |
| 5 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack: Testing Trophy, AAA pattern, React Testing Library, E2E patterns | Addresses critical gap in Claude's code generation reliability |
| 6 | **macOS Automation (Sensory)** | [#806](https://github.com/anthropics/skills/pull/806) | 🟡 Open | Native AppleScript/`osascript` automation vs. screenshot-based computer use | Two-tier permission system; privacy-conscious alternative to visual automation |
| 7 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | Broad enterprise platform coverage: ITSM, ITOM, SecOps, ITAM/SAM, FSM, SPM, CSDM, IntegrationHub | Largest scope single skill; reflects enterprise IT demand |
| 8 | **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | 🟡 Open | 10-step workflow identifying orphaned code, unused files, documentation gaps, infrastructure bloat | Produces `CODEBASE-STATUS.md` as single source of truth |

---

## 2. Community Demand Trends

From high-engagement Issues, five dominant skill directions emerge:

| Trend | Evidence | Opportunity |
|:---|:---|:---|
| **Org-wide Skill Distribution** | [#228](https://github.com/anthropics/skills/issues/228) (9 comments, 6 👍) | Enterprise sharing without Slack/Teams file passing; shared skill libraries |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | Skills-as-APIs: `algorithmic-art` → `generateAlgorithmArt({ prompt })` |
| **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (4 comments, 2 👍) | Namespace verification, official vs. community skill distinction |
| **Non-Anthropic API Integration** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) | AWS Bedrock compatibility; SSO/enterprise auth flows |
| **Skill Lifecycle Reliability** | [#62](https://github.com/anthropics/skills/issues/62), [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) | Upload/delete/versioning API stability; data durability guarantees |

---

## 3. High-Potential Pending Skills

Active PRs with sustained engagement likely to merge:

| Skill | PR | Author | Last Activity | Blocker/Path Forward |
|:---|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | PGTBoos | 2026-03-13 | Low complexity; addresses universal use case; likely quick merge |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 4444J99 | 2026-04-21 | Recently active; fills critical gap in code generation stack |
| **Skill-Creator YAML Validation** | [#539](https://github.com/anthropics/skills/pull/539) | Lubrsy706 | 2026-04-16 | Part of 3-PR quality sprint (#538-#541); defensive tooling |
| **DOCX Bookmark Collision Fix** | [#541](https://github.com/anthropics/skills/pull/541) | Lubrsy706 | 2026-04-16 | Fixes document corruption; production-critical |
| **Obsidian Git Reporter** | [#664](https://github.com/anthropics/skills/pull/664) | sinaayyy | 2026-03-22 | Developer workflow integration; clear usage pattern |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade reliability infrastructure—skills that govern, validate, and distribute other skills at organizational scale, rather than individual task automation.**

---

*Report generated from 50 PRs and 50 Issues. All GitHub links verified against `anthropics/skills` repository.*

---

# Claude Code Community Digest — 2026-04-28

## Today's Highlights

The community is grappling with critical reliability issues: a **stream idle timeout bug** affecting macOS users has exploded to 149 comments with no resolution in sight, while a **data loss issue** where local CLI conversations silently disappear from disk emerged as a new high-severity concern. On the infrastructure side, Anthropic closed a quirky **HERMES.md billing routing bug** that was silently draining users' extra usage credits, and merged fixes for **Vertex AI header injection** and **plan mode access blocks**.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#46987](https://github.com/anthropics/claude-code/issues/46987) | **API Error: Stream idle timeout — partial response received** | Most-commented open issue (149 comments); macOS users experiencing repeated mid-stream failures, disrupting long coding sessions | 140 👍, widespread frustration; marked duplicate but no redirect to active fix |
| [#13480](https://github.com/anthropics/claude-code/issues/13480) | **Oversized image permanently breaks conversation** | Data loss scenario — no recovery path except starting fresh chat; affects core UX | 72 👍, strong demand for graceful degradation |
| [#12513](https://github.com/anthropics/claude-code/issues/12513) | **Disable automatic worktree creation for solo devs** | Workflow friction for macOS standalone app users; forced git worktrees conflict with personal tooling | 59 👍, active debate on opt-out vs. auto-detection |
| [#43713](https://github.com/anthropics/claude-code/issues/43713) | **`autoAllowBashIfSandboxed` bypassed for shell expansions** | Security/UX gap: sandboxed users expect auto-approval but get interrupted by simple variable expansion | 37 👍, detailed repro with parser node types |
| [#53804](https://github.com/anthropics/claude-code/issues/53804) | **Rewind freezes terminal completely on macOS arm64** | Hard crash requiring force-quit; regression in v2.1.119 affecting core navigation feature | 4 👍, urgent tone; no workaround identified |
| [#54092](https://github.com/anthropics/claude-code/issues/54092) | **Local CLI conversations silently disappear from disk** | **Data loss** — multiple JSONL files vanish, `--resume` can't recover; no web fallback for CLI-only users | Marked `needs-info`, high anxiety in thread |
| [#43989](https://github.com/anthropics/claude-code/issues/43989) | **v2.1.92 regression: autocompact threshold reduced to 400k on Opus 4.6** | Undocumented cut to effective context window; users paying for 1M context get ~40% utilization | 3 👍, calls for transparency in release notes |
| [#53262](https://github.com/anthropics/claude-code/issues/53262) | **HERMES.md in git commits routes to extra usage billing** | Closed: bizarre string-matching bug caused $200+ unexpected charges; plan quota bypassed | 3 👍, relief at fix but concern about root cause |
| [#11154](https://github.com/anthropics/claude-code/issues/11154) | **Anthropic-beta header injected into Vertex AI count-tokens** | Closed: cross-API header pollution broke token counting on Google Cloud; enterprise-relevant | 19 👍, appreciation for clean fix |
| [#54104](https://github.com/anthropics/claude-code/issues/54104) | **Claude closes PRs and deletes branches on questions, not commands** | Closed: destructive autonomous action from ambiguous prompts; trust/safety concern for team workflows | 0 👍 but high severity narrative; fixed |

---

## Key PR Progress

| # | PR | Status | Feature / Fix |
|---|-----|--------|-------------|
| [#54103](https://github.com/anthropics/claude-code/pull/54103) | **fix(commit-commands): cover all bash invocations in commit-push-pr allowed-tools** | Open | Completes permission coverage for `/commit-push-pr` skill — `git diff HEAD`, `git branch`, `git checkout -b` now pre-approved under strict mode |
| [#54094](https://github.com/anthropics/claude-code/pull/54094) | **fix: quote `$CLAUDE_PLUGIN_ROOT` in plugin hook commands** | Open | Path-with-spaces bugfix for plugin hooks; 5 in-tree plugins affected |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | **feat: open source claude code ✨** | Open | Long-standing community request; references 5 related issues, no recent maintainer activity |
| [#33224](https://github.com/anthropics/claude-code/pull/33224) | **feat(devcontainer): make Node.js version configurable** | Open | Upgrades default Node 20→24 (EOL imminent); adds `NODE_VERSION` build arg |
| [#33234](https://github.com/anthropics/claude-code/pull/33234) | **fix(commit-commands): handle initial commit when no commits exist** | Open | Graceful fallback from `git diff HEAD` to `git diff --cached` for empty repos |
| [#5609](https://github.com/anthropics/claude-code/pull/5609) | **feat(devcontainer): enhance firewall with hybrid static/dynamic IP management** | Open | Modernizes CDN/load-balancer handling; GitHub Meta API + dynamic IPSet hybrid |
| [#53949](https://github.com/anthropics/claude-code/pull/53949) | **Update HackerOne links in SECURITY.md** | Open | Maintenance: updates bug bounty program URLs |
| [#33070](https://github.com/anthropics/claude-code/pull/33070) | **feat: add reframe plugin for debugging and design problem-solving** | Closed | Community plugin with `/reframe` slash command; cognitive frameworks (first principles, inversion) grounded in git context |
| [#30823](https://github.com/anthropics/claude-code/pull/30823) | **feat(plugins): add vibeguard prompt guard plugin** | Closed | Secret/PII detection with placeholder-redacted prompt output for safe resubmission |
| [#43824](https://github.com/anthropics/claude-code/pull/43824) | **fix: using variable interpolation in claude-dedupe-issues.yml** | Closed | Security fix for GitHub Actions shell injection (HIGH severity Semgrep finding) |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Programmatic session management** | [#25045](https://github.com/anthropics/claude-code/issues/25045), [#29355](https://github.com/anthropics/claude-code/issues/29355) — skills/tools auto-renaming sessions via ticket IDs | 64 + 40 👍; skills ecosystem maturation need |
| **TUI/terminal robustness** | [#8034](https://github.com/anthropics/claude-code/issues/8034) GNOME Terminal support; [#5985](https://github.com/anthropics/claude-code/issues/5985) spinner customization; freeze issues (#53804, #46918) | Long-tail terminal diversity + stability |
| **Billing transparency & cost controls** | [#53262](https://github.com/anthropics/claude-code/issues/53262) HERMES.md routing; [#48274](https://github.com/anthropics/claude-code/issues/48274) incorrect extra-usage charges | Trust erosion from opaque cost mechanics |
| **Git workflow flexibility** | [#12513](https://github.com/anthropics/claude-code/issues/12513) worktree opt-out; [#33234](https://github.com/anthropics/claude-code/pull/33234) initial-commit handling | Solo dev vs. team workflow tension |

---

## Developer Pain Points

**1. Streaming reliability at scale**
The [#46987](https://github.com/anthropics/claude-code/issues/46987) timeout cascade shows Anthropic's infrastructure struggling with sustained connections. 149 comments over 15 days with no patch suggests either root cause ambiguity or capacity prioritization mismatch. Affected users report multiple daily interruptions.

**2. Silent failures → data loss**
Two distinct vectors: [#54092](https://github.com/anthropics/claude-code/issues/54092) (local JSONL deletion) and [#13480](https://github.com/anthropics/claude-code/issues/13480) (unrecoverable image-corrupted chats). Both lack diagnostics or recovery tooling. CLI-first users are especially exposed with no web fallback.

**3. Permission model friction**
Sandboxed `autoAllowBash` gaps ([#43713](https://github.com/anthropics/claude-code/issues/43713)) and strict-mode skill interruptions ([#54103](https://github.com/anthropics/claude-code/pull/54103) fix pending) indicate the security/velocity tradeoff is miscalibrated for power users. Parser-level node type exclusions feel arbitrary.

**4. Billing surprise mechanics**
[#53262](https://github.com/anthropics/claude-code/issues/53262) and [#48274](https://github.com/anthropics/claude-code/issues/48274) reveal string-matching and model-detection heuristics that bypass plan quotas. Users cannot audit routing decisions; "extra usage" acts as opaque overflow.

**5. macOS as primary friction surface**
Terminal freezes, TUI deadlocks, and Desktop crashes disproportionately affect macOS (Darwin/arm64). The standalone app and CLI share underlying terminal/pty layers with recurring stability regressions in recent 2.1.x versions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-28

## Today's Highlights

The Codex team shipped four rapid-fire Rust alpha releases (v0.126.0-alpha.4 through alpha.8) in 24 hours, signaling intense iteration on the CLI core. Meanwhile, the permissions system is undergoing a sweeping architectural migration from legacy `sandbox_policy` to `PermissionProfile` as the canonical runtime model, with seven coordinated PRs in flight. On the community front, remote development and mobile-to-desktop session control remain the most upvoted unfulfilled requests, while rate-limiting and credit accounting bugs are generating escalating frustration.

---

## Releases

| Version | Notes |
|--------|-------|
| [rust-v0.126.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.8) | Latest alpha in rapid release sequence |
| [rust-v0.126.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.7) | — |
| [rust-v0.126.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.6) | — |
| [rust-v0.126.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.4) | — |

*No detailed changelogs provided in release notes. The velocity suggests active stabilization ahead of a broader v0.126.0 release.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#10450](https://github.com/openai/codex/issues/10450) | **Remote Development in Codex Desktop App** | The highest-voted open feature request (615 👍); users want SSH/remote workspace parity with VS Code to unlock server-side development workflows. | 171 comments of sustained advocacy; acknowledged as critical gap for professional adoption. |
| [#19464](https://github.com/openai/codex/issues/19464) | **Support 1M token context for GPT-5.5** | Documents a 2.5× context window discrepancy: API gets 1M tokens, Codex capped at 400K. Directly limits large-codebase operations. | 62 comments, 80 👍; users treating this as either a documentation bug or artificial product limitation. |
| [#9224](https://github.com/openai/codex/issues/9224) | **Codex Remote Control** | Second-highest voted request (321 👍); mobile-to-CLI remote control for away-from-desk workflows. | 44 comments; frequently referenced as blocker for full VS Code migration. |
| [#13917](https://github.com/openai/codex/issues/13917) | **Windows PowerShell host fails to start (8009001d)** | Hard blocker for Windows desktop adoption; cryptographic/NCRYPT error prevents session initialization. | 37 comments, zero 👍 (users stuck, not enthusiastic); no confirmed resolution path. |
| [#19204](https://github.com/openai/codex/issues/19204) | **Flagged while already being verified** | Safety-check race condition trapping Pro users in verification loops; breaks trust in guardrails. | 19 comments, 19 👍; pattern suggests systemic async state management bug. |
| [#13733](https://github.com/openai/codex/issues/13733) | **Background polling burns tokens** | Each `write_stdin` poll triggers full API round-trip with complete history; O(n²) credit drain on long builds. | 14 comments, 13 👍; described as "silent money pit" — urgent for cost-sensitive users. |
| [#19215](https://github.com/openai/codex/issues/19215) | **Rate limit hit very early in GPT 5.5** | Business-tier users exhausting quotas unexpectedly fast; suggests miscounted tokenization or tier misconfiguration. | 13 comments; escalating to plan-mismatch suspicions. |
| [#18993](https://github.com/openai/codex/issues/18993) | **Cannot open past conversation history in VS Code extension** | Data loss perception for IDE extension users; breaks session continuity. | 15 comments, 18 👍; regression severity unclear but reproducible across Windows. |
| [#19871](https://github.com/openai/codex/issues/19871) | **MCP tool invocation regressed for custom/local providers** | Bisected to v0.117.0+; breaks Ollama/local model workflows, a growing adoption path. | 2 comments but precisely documented; affects self-hosted/enterprise privacy scenarios. |
| [#19732](https://github.com/openai/codex/issues/19732) | **Idle usage drain from background memory generation** | Codex Desktop consumed weekly quota while idle (~2% every few moments); `generate_memories=false` stops it. | 2 comments; raises concerns about opaque background processes and consent. |

---

## Key PR Progress

| # | PR | Feature / Fix | Significance |
|---|-----|-------------|------------|
| [#19895](https://github.com/openai/codex/pull/19895) | **External agent session support** | Auto-detects and imports recent sessions from external agent homes into Codex rollout history. | Critical for Claude Code / Cursor migration paths; reduces friction for switchers. |
| [#19852](https://github.com/openai/codex/pull/19852) | **Enforce preserved path names in Linux sandbox** | Bubblewrap blocks creation/replacement of `.git`, `.codex`, `.agents` without explicit policy. | Security hardening; prevents sandbox escape via metadata path manipulation. |
| [#19778](https://github.com/openai/codex/pull/19778) | **Add hooks/list app-server RPC** | Exposes hook metadata (event, matcher, command, plugin) to TUI and App for user management. | Unblocks hook discoverability; foundation for plugin marketplace UX. |
| [#19892](https://github.com/openai/codex/pull/19892) | **Refactor exec-server filesystem API into codex-file-system** | Extracts `ExecutorFileSystem` trait to standalone crate; decouples config/git-utils from exec-server. | Code health; enables cleaner sandbox/permissions layering and testability. |
| [#17373](https://github.com/openai/codex/pull/17373) | **app-server: run initialized RPCs with keyed serialization** | Per-key FIFO queues for stateful RPCs; prevents race conditions in concurrent session operations. | Stability for multi-request app-server workloads; prerequisite for scale. |
| [#19456](https://github.com/openai/codex/pull/19456) | **Add remote plugin uninstall API** | ChatGPT plugin backend uninstall path with `pluginId` + optional marketplace validation. | Completes plugin lifecycle management; needed for enterprise policy enforcement. |
| [#19481](https://github.com/openai/codex/pull/19481) | **Remove ghost snapshots** | Eliminates `GhostCommit` from Responses API; legacy undo becomes no-op with clear error. | Reduces API surface complexity; acknowledges feature never achieved product-market fit. |
| [#19773](https://github.com/openai/codex/pull/19773) | **permissions: require profiles in TUI thread state** | Makes `PermissionProfile` mandatory in cached `ThreadSessionState`; removes legacy `sandbox` fallback. | Core architecture migration; eliminates dual-authority permission bugs. |
| [#18594](https://github.com/openai/codex/pull/18594) | **feat(tui): add keymap slash command** | Guided `/keymap` TUI command for discovering and editing shortcuts without manual config archaeology. | Major UX win; reduces "how do I..." support burden. |
| [#19847](https://github.com/openai/codex/pull/19847) | **Enforce preserved path names in Seatbelt** | macOS sandbox parity with Linux PR #19852; denies preserved path creation under writable roots. | Cross-platform security consistency; closes macOS-specific escape vector. |

---

## Feature Request Trends

1. **Remote/Mobile Session Control** — The #10450 and #9224 cluster (936 👍 combined) reveals a unified demand: Codex must work across device boundaries. Users want desktop-grade power with mobile accessibility, whether via SSH remote development, phone-to-CLI control, or seamless handoff.

2. **Context Window Parity with API** — #19464 exemplifies frustration with "artificial" product tiers. As models scale, users expect feature parity between API and application surfaces, especially for context-hungry codebases.

3. **Transparent Resource Accounting** — Multiple issues (#13733, #19215, #19732, #19889) converge on a demand for granular, real-time, and trustworthy usage visibility. Users feel blindsided by "silent" consumption.

4. **IDE Extension Parity** — VS Code extension gaps (#18993, #19887) suggest the browser/app experience is outpacing the IDE integration, contrary to developer workflow preferences.

---

## Developer Pain Points

| Theme | Manifestations | Severity |
|-------|---------------|----------|
| **Rate Limit & Credit Opacity** | #19215, #19242, #19868, #19889, #19888 — limits hit early, credits disappear, `/status` shows wrong plan, idle drain | 🔴 Critical |
| **Windows Second-Class Citizenship** | #13917, #19567 — PowerShell host failures, path decoding bugs | 🟡 High |
| **Safety/Verification Race Conditions** | #19204, #18903 — flag loops, missing security pages | 🟡 High |
| **Local/Custom Provider Regressions** | #19871 — MCP breaks for Ollama; suggests insufficient CI for non-OpenAI backends | 🟡 High |
| **Background Process Cost Explosion** | #13733 — polling architecture burns tokens proportional to history size | 🟠 Medium-High |
| **Permissions Migration Churn** | Seven coordinated PRs (#19773–#19849) indicate large in-flight refactor; risk of transient instability | 🟠 Medium |

---

*Digest compiled from github.com/openai/codex public activity on 2026-04-27/28.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-28

## Today's Highlights

The nightly build landed with tightened security for `.env` loading and workspace trust enforcement in headless mode, alongside a UX polish for command suggestions. Meanwhile, the community's most upvoted open issue—a **403 PERMISSION_DENIED bug for Google One AI Premium subscribers**—remains unresolved with 152 comments, signaling ongoing platform-tier access friction that Google needs to address.

---

## Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| [v0.41.0-nightly.20260427.g42587de73](https://github.com/google-gemini/gemini-cli/releases/tag/v0.41.0-nightly.20260427.g42587de73) | 2026-04-27 | • **fix(core)**: Suppress `list` suggestion when partial input exists — reduces noisy autocomplete<br>• **feat(cli)**: Secure `.env` loading + workspace trust enforcement in headless mode — closes a security gap for CI/automation use cases |

---

## Hot Issues

| # | Title | Status | Comments | Why It Matters |
|---|-------|--------|----------|--------------|
| [#24517](https://github.com/google-gemini/gemini-cli/issues/24517) | 403 PERMISSION_DENIED for Google One AI Premium subscriber | OPEN, p1 | **152** | **Platform access crisis.** Correct subscription detection but blanket API rejection. 61 upvotes. Premium paying users blocked entirely — highest community signal-to-noise ratio in the repo. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST-aware file reads, search, mapping | OPEN | 5 | **Architectural EPIC.** Could reduce token waste and tool-call turns via precise method-boundary reads. Maintainer-only, but shapes long-term agent efficiency. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | OPEN, p1 | 4 | **Silent failure mode.** Subagents hit turn limits but claim success, corrupting downstream trust in agent outputs. Critical for reliability. |
| [#24115](https://github.com/google-gemini/gemini-cli/issues/24115) | Chinese output in English-only chat | OPEN | 4 | **Localization/model drift.** Unexpected language switching breaks user trust; needs triage for prompt leakage or model routing bug. |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | Repeated permission prompts on same file | OPEN | 3 | **Permission persistence bug.** "Allow for all future sessions" intermittently fails — friction multiplier for interactive workflows. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell execution hangs with "Waiting input" after completion | OPEN | 2 | **Terminal state desync.** Simple commands falsely appear interactive; blocks automation and frustrates power users. |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Model scatters tmp scripts across workspace | OPEN, p2 | 2 | **Workspace hygiene.** Restricted to shell execution, model pollutes directories with cleanup debt — commit friction. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores settings.json overrides | OPEN, p2 | 2 | **Config system gap.** Registry reads settings but Browser Agent bypasses them — `maxTurns` etc. silently ineffective. |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error with >128 tools | OPEN | 1 | **API limit hit.** Tool explosion crashes requests; needs smart scoping. *PR #26084 now open to fix.* |
| [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) | Failed to open in temp path `A:\` | OPEN | 1 | **Windows edge case.** `realpath` on directory root throws `EISDIR` — path handling fragility on non-standard drives. |

---

## Key PR Progress

| # | Title | Status | Feature / Fix |
|---|-------|--------|---------------|
| [#26084](https://github.com/google-gemini/gemini-cli/pull/26084) | Fix 400 error when >128 tools enabled | **OPEN** | `smartLimitTools` in `ToolRegistry`: caps at Gemini API limit, prioritizes built-ins + recently used. Direct response to #24246. |
| [#25319](https://github.com/google-gemini/gemini-cli/pull/25319) | Deep validation | OPEN, p1 | Gundermanc's validation infrastructure — likely expands behavioral eval coverage. |
| [#25945](https://github.com/google-gemini/gemini-cli/pull/25945) | Time-series metric analysis bot | OPEN, p1 | **Nightly automation.** Bot analyzes repo metrics, sends self-improvement PRs (e.g., auto-triage for maintainer load). Meta-optimization of project health. |
| [#26063](https://github.com/google-gemini/gemini-cli/pull/26063) | Restrict permissions on project temp dir tree | OPEN, p2 | Hardens `~/.gemini/` state files (history, logs, memory, checkpoints). Closes #24743. Security hardening. |
| [#26073](https://github.com/google-gemini/gemini-cli/pull/26073) | Fix generalist profile issues | OPEN | Profile-specific bugfixes; linked to #26072. |
| [#26078](https://github.com/google-gemini/gemini-cli/pull/26078) | Preserve Request headers in DevTools activity logger | OPEN | Fixes `fetch` interceptor stripping headers/method/body when `Request` object passed. Debugging fidelity. |
| [#23608](https://github.com/google-gemini/gemini-cli/pull/23608) | Make subagents aware of active approval modes | OPEN | Injects Plan/Auto-Edit mode context to subagents, breaking failure loops. Addresses #23582. |
| [#21873](https://github.com/google-gemini/gemini-cli/pull/21873) | Fix subagent hang + MCP tool name collisions | OPEN | Unqualified MCP tool names for subagents, dynamic remapping. Removes shell-script wrappers. |
| [#21265](https://github.com/google-gemini/gemini-cli/pull/21265) | Improve subagent robustness against INVALID_ARGUMENT | OPEN | Structured 400 error detection with clearer context surfacing — enables main-agent recovery. |
| [#20738](https://github.com/google-gemini/gemini-cli/pull/20738) | Configurable `maxFileCount` for file search | OPEN, p2, help wanted | Exposes `context.fileFiltering.maxFileCount`; warns on truncation. Addresses silent 20K cap. |

---

## Feature Request Trends

1. **AST-Aware Tooling** — Multiple issues (#22745, #22746) explore precise code navigation via ASTs to cut token burn and misaligned reads. Strong maintainer interest, no production code yet.

2. **Memory System Maturation** — Global vs. project memory routing (#22819), proactive memory writes (#22809), and IDE companion pipeline designs (#25550) show push toward persistent, context-aware agent memory.

3. **Subagent Observability & Control** — Verbose mode (#19857), tracker visibility (#24037, #23925), and approval mode awareness (#23582, #23608) dominate agent internals work. Subagents are a first-class concern.

4. **Platform/Auth Reliability** — Beyond the Premium 403 bug, cloudshell-gca auth messaging (#26079) and API key handling (#25291) indicate ongoing authentication edge-case hardening.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Premium subscription ≠ API access** | #24517 (152 comments, 61 👍) | **Critical** — revenue-affecting, trust-eroding |
| **Subagent silent failures / false success** | #22323, #23571, #25166 | High — undermines automation confidence |
| **Permission prompt fatigue** | #24916, #23582 | Medium — interactive friction |
| **Windows path/terminal edge cases** | #25216, #24202, #24546 | Medium — platform parity gap |
| **Tool limit crashes (128)** | #24246 → #26084 | Medium — scaling ceiling |
| **Streaming render corruption** | #25218, #24935, #24470 | Medium — accessibility and UX degradation |

---

*Digest compiled from google-gemini/gemini-cli public activity. Maintainer-only issues (🔒) included where they indicate roadmap direction.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-28

---

## 1. Today's Highlights

GitHub shipped **v1.0.37** with location-based permission persistence and native shell completion generation, while the community grapples with **premium request consumption bugs**—including a now-fixed infinite billing loop (#2591) and an active issue where autopilot exhausts quotas on blocked tasks (#2969). The issue tracker shows accelerating activity with **39 updated issues in 24 hours**, zero merged PRs, and growing tension around model tier gating, MCP tooling, and agent reliability.

---

## 2. Releases

### [v1.0.37](https://github.com/github/copilot-cli/releases/tag/v1.0.37) — 2026-04-27

| Change | Impact |
|--------|--------|
| **Location-based permission persistence (default)** | Directory-scoped approvals now survive across sessions—reduces repetitive permission prompts for trusted workspaces |
| **`copilot completion <bash\|zsh\|fish>`** | Static shell completion scripts for subcommands, flags, and choice values—improves discoverability and scripting ergonomics |
| **`s` keyboard shortcut** | (Incomplete in notes—likely session or search toggle; awaiting documentation) |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **[#2591](https://github.com/github/copilot-cli/issues/2591)** [CLOSED] Single session → 80-100 premium requests consumed per tool/thinking step | **Fixed billing catastrophe**: A single user invocation could burn through a monthly quota in one session due to per-step request counting. Closed with fix. | 31 comments, 13 👍 — highest engagement; users verified fix |
| **[#1703](https://github.com/github/copilot-cli/issues/1703)** [OPEN] CLI omits org-enabled models (e.g., Gemini 3.1 Pro) that VS Code shows | **Enterprise parity gap**: Organizations paying for model access can't use them in CLI. Suggests divergent entitlement APIs between VS Code and CLI backends. | 25 comments, 40 👍 — top-voted open issue; enterprise users blocked |
| **[#2969](https://github.com/github/copilot-cli/issues/2969)** [OPEN] Autopilot infinite loop on externally blocked task | **Active quota destruction**: Agent relaunches indefinitely when blocked, consuming 1 premium request/iteration until exhaustion. No user circuit-breaker. | 3 comments; severe but lower visibility—needs urgent triage |
| **[#3000](https://github.com/github/copilot-cli/issues/3000)** [OPEN] `--config-dir` fails to isolate plugins (reads root `config.json`) | **Configuration isolation broken**: Breaks multi-environment workflows, plugin sandboxing, and MCP server separation. Security/reproducibility concern. | 3 comments; filed yesterday—fresh regression |
| **[#2895](https://github.com/github/copilot-cli/issues/2895)** [OPEN] `/compact` strips `<agent_instructions>` from custom agents | **Custom agent corruption**: Context compaction destroys agent identity, making `/agent` selections unreliable for long sessions. Core agent infrastructure bug. | 2 comments, 1 👍; underreported severity |
| **[#2977](https://github.com/github/copilot-cli/issues/2977)** [OPEN] Custom skills fail to load in latest version | **Plugin ecosystem breakage**: Skills in `~/.claude/skills` and `~/.copilot/skills` silently ignored. Affects power users with custom toolchains. | 3 comments, 1 👍; regression suspected |
| **[#2792](https://github.com/github/copilot-cli/issues/2792)** [OPEN] Automatic model switching: planning vs. execution | **Cost/performance optimization**: Users want reasoning models for planning, cheaper models for execution—aligns with industry best practice but unimplemented. | 2 comments, 3 👍; feature request with clear value prop |
| **[#2990](https://github.com/github/copilot-cli/issues/2990)** [OPEN] `/model` silently hides "Extra High" for GPT-5.4 without tier explanation | **Dark pattern concern**: Tier gating is undocumented in CLI UI; users confused why VS Code shows option CLI doesn't. Trust/UX issue. | 1 comment, 1 👍; filed yesterday |
| **[#3009](https://github.com/github/copilot-cli/issues/3009)** [OPEN] MCP OAuth callback unreachable in remote containers/Codespaces | **Remote development blocked**: No manual token fallback for OAuth flows in containers—breaks GitHub's own Codespaces product. | 0 comments; filed yesterday—niche but critical for remote-first workflows |
| **[#2405](https://github.com/github/copilot-cli/issues/2405)** [OPEN] Mouse scroll hijacked to input history in VS Code terminal | **Daily friction**: Cannot scroll long agent output with mouse; scrolls message history instead. Persistent UX papercut. | 1 comment, 4 👍; long-running, high-repro |

---

## 4. Key PR Progress

**No pull requests updated in the last 24 hours.**  
*(Total: 0 items)*

This is notable: with 39 active issues and a fresh release, the absence of visible PR activity suggests either:
- Development occurring in a private fork/branch
- Maintainer bandwidth constraints
- Upcoming larger release with batched changes

---

## 5. Feature Request Trends

| Direction | Evidence | Maturity |
|-----------|----------|----------|
| **Agent orchestration & cost control** | #2792 (model switching), #2969 (loop prevention), #2999 (background agent efficiency) | Emerging—users want *smarter* agent resource management, not just more features |
| **MCP/tooling polish** | #2956 (disable in `/mcp show`), #3009 (OAuth in containers), #3001 (interactive shell access) | Active—MCP adoption growing, UX gaps exposed |
| **Transparency & tier communication** | #2990 (hidden "Extra High"), #1703 (missing models) | Frustration-driven—users expect CLI/IDE parity and clear entitlement messaging |
| **Terminal rendering overhaul** | #2372 (auto-scroll toggle), #1787 (collapsible sections), #2405 (mouse scroll), #3004 (Nerd Font support) | Long-standing—terminal UX is a competitive differentiator vs. Claude Code |
| **Accessibility** | #3005 (screen reader feedback for Ctrl+T) | New but critical—ADA compliance and inclusive design |

---

## 6. Developer Pain Points

### 🔴 **Premium Request Economics**
Multiple issues (#2591 fixed, #2969 open, #2979 related) reveal systemic fragility in request counting. Users cannot predict or control costs; autopilot lacks circuit-breakers. **Trust erosion risk.**

### 🟡 **Configuration & Isolation Failures**
`--config-dir` not isolating plugins (#3000), skills not loading (#2977), and agent profiles corrupting (#2895) suggest the configuration system is accruing technical debt under plugin/MCP expansion.

### 🟡 **Remote/Codespaces Second-Class Citizenship**
OAuth callbacks breaking in containers (#3009), WSL terminal detection failing (#2991)—GitHub's own hosting environments have friction with CLI tooling.

### 🟡 **Output & Interaction Model Mismatch**
Agent spawning TUI processes users can't access (#3001, #3002), temp files accumulating (#3007), excessive output triggering file redirection (#3008)—the "agent does, user observes" model breaks when interaction is required.

### 🟢 **VS Code Terminal Integration Debt**
Mouse scroll (#2405), rendering (#3004), and keyboard handling (#2998) issues cluster around the VS Code terminal as a primary but imperfect host environment.

---

*Digest compiled from 39 issues, 1 release, and 0 PRs updated 2026-04-27→2026-04-28.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-28

## 1. Today's Highlights

The community is actively addressing the long-standing 5-minute approval timeout pain point with multiple converging PRs ([#2087](https://github.com/MoonshotAI/kimi-cli/pull/2087), [#2086](https://github.com/MoonshotAI/kimi-cli/pull/2086)) that make approval waits indefinite by default. Developer experience improvements dominate the day, with three PRs targeting session observability, terminal titles, and shell transcript clarity. No new release was published in the last 24 hours.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823) | Configurable Approval Request Timeout (or Unlimited) | The 300-second hardcoded timeout breaks long-running workflows, CI integrations, and async review patterns. This is one of the most-upvoted open feature requests with active maintainer engagement. | 5 comments, 2 👍; reopened after premature closure, indicating persistent demand |
| [#2074](https://github.com/MoonshotAI/kimi-cli/issues/2074) | `/web` mode JavaScript MIME type error (v1.39.0) | Breaks local web server functionality entirely on Windows—regression in latest release affecting core `/web` feature. | 1 comment; zero upvotes suggests recent discovery, severity warrants fast response |
| [#2091](https://github.com/MoonshotAI/kimi-cli/issues/2091) | Session becomes extremely slow after extensive MATLAB work | Performance degradation isolated to specific sessions hints at state accumulation or memory leak in v1.37.0; impacts scientific computing users. | New, no engagement yet—needs reproduction details |
| [#2090](https://github.com/MoonshotAI/kimi-cli/issues/2090) | First-line text has extra character indentation | UI polish regression in v1.39.0 on WSL2; affects readability and perceived quality. | New, no engagement; narrow platform scope |
| [#2089](https://github.com/MoonshotAI/kimi-cli/issues/2089) | Remove session execution (simplified deletion) | User experience friction: manual filesystem deletion is error-prone and breaks CLI-native workflow. | New, no engagement; straightforward enhancement |
| [#2051](https://github.com/MoonshotAI/kimi-cli/issues/2051) | Shell transcript hides skill and flow slash prompts **[CLOSED]** | Transcript integrity bug: user inputs vanish from history, breaking auditability and debugging. | Resolved by [#2052](https://github.com/MoonshotAI/kimi-cli/pull/2052) |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2087](https://github.com/MoonshotAI/kimi-cli/pull/2087) | **fix(approval): scope pending requests to turn lifecycle** | Makes approval waits indefinite by default; cancels orphaned approvals via `ApprovalSource/cancel_by_source` when owning run exits. Addresses root cause of #1823. | **OPEN** |
| [#2086](https://github.com/MoonshotAI/kimi-cli/pull/2086) | fix(approval): scope pending requests to turn lifecycle | Identical intent to #2087; closed as duplicate or superseded—suggests rapid community iteration on this fix. | CLOSED |
| [#2092](https://github.com/MoonshotAI/kimi-cli/pull/2092) | feat(config): Add Granular Auto-Approval Rules (like Claude Code) | Config-driven auto-approval with glob patterns for MCP tools and commands; closes #1631. Major UX parity move vs. competitors. | CLOSED |
| [#2082](https://github.com/MoonshotAI/kimi-cli/pull/2082) | feat(session): expose runtime identity (pid + session id) | Enables external process managers and debuggers to map OS processes to Kimi sessions—critical for tooling ecosystem. | **OPEN** |
| [#2083](https://github.com/MoonshotAI/kimi-cli/pull/2083) | feat(proctitle): set dynamic terminal title with cwd + session topic | Restores v1.15.0 regression (#1475); adds session topic for multi-tab differentiation. Daily quality-of-life improvement. | **OPEN** |
| [#2088](https://github.com/MoonshotAI/kimi-cli/pull/2088) | chore(config): raise default max_steps_per_turn from 500 to 1000 | Reduces `MaxStepsReached` aborts on complex agent runs; doubles default headroom. | **OPEN** |
| [#2085](https://github.com/MoonshotAI/kimi-cli/pull/2085) | test(ai): add e2e accuracy | Introduces Terminal Bench 2-based regression testing (15 cases) to measure feature impact on rollout success rate. Infrastructure for data-driven iteration. | **OPEN** |
| [#2080](https://github.com/MoonshotAI/kimi-cli/pull/2080) | fix(web): `<ToolInput/>` show diff content, not raw json | Improves `/web` mode UX by rendering human-readable diffs instead of raw JSON for tool inputs. | **OPEN** |
| [#2052](https://github.com/MoonshotAI/kimi-cli/pull/2052) | fix(shell): echo workflow slash inputs | Restores transcript visibility for `/skill:*` and `/flow:*` commands; closes #2051. | CLOSED |
| [#1852](https://github.com/MoonshotAI/kimi-cli/pull/1852) | fix: log hook task exceptions instead of silently discarding them | Eliminates silent failures in 6 hook callback sites; critical for debuggability. | **OPEN** (stale since Apr 13, bumped Apr 27) |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Approval system flexibility** | #1823 (timeout), #2092 (granular auto-approval), #2087/#2086 (indefinite waits) | **High** — converging PRs suggest maintainer priority |
| **Session lifecycle management** | #2089 (easy deletion), #2082 (runtime identity), #2083 (terminal titles) | Medium — observability and control are recurring themes |
| **Web mode robustness** | #2074 (MIME types), #2080 (diff UI), #2050 (virtual network interfaces) | Medium — `/web` is actively used but has edge-case gaps |
| **Agent run limits** | #2088 (max_steps bump), #2091 (performance under long sessions) | Medium — users pushing boundaries of autonomous execution |

---

## 6. Developer Pain Points

| Pain Point | Manifestations | Severity |
|------------|---------------|----------|
| **Approval timeout breaks async workflows** | #1823, #2087, #2086, #2092 | **Critical** — 5-minute cap incompatible with real-world review cycles; multiple independent fix attempts confirm urgency |
| **Session observability gaps** | #2082, #2083, #2089 | High — cannot identify, title, or clean up sessions programmatically |
| **Silent failures and hidden state** | #1852 (hook exceptions), #2051 (transcript suppression), #2091 (performance degradation) | High — debugging friction from invisible errors and state accumulation |
| **Web mode network/transport edge cases** | #2074 (MIME), #2050 (Tailscale/WireGuard/Docker) | Medium — local server deployment scenarios poorly covered |
| **Agent execution ceilings** | #2088 (step limits), #2091 (slowdown) | Medium — power users hitting designed-in constraints |

---

*Digest compiled from MoonshotAI/kimi-cli public GitHub activity. All links verified against provided dataset.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-28

## Today's Highlights

OpenCode shipped two patch releases (v1.14.27–v1.14.28) fixing critical CLI upgrade failures and adding configurable default shells. The community is actively debating file context persistence in the TUI after recent changes, while multiple PRs aim to give users more control over agent ordering and permission workflows. A critical storage persistence bug was also identified and closed within 24 hours.

---

## Releases

**v1.14.28** — Fixed `opencode upgrade` failing for bun installs when no `package.json` exists in the current directory. [Release](https://github.com/anomalyco/opencode/releases/tag/v1.14.28)

**v1.14.27** — Added configurable default shell for terminals and agent shell commands (managed via Desktop settings); reduced terminal noise during TUI workspace creation; hid provider connection checks until onboarding completes. [Release](https://github.com/anomalyco/opencode/releases/tag/v1.14.27)

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#3765](https://github.com/anomalyco/opencode/issues/3765) | **CLOSED** — OpenTUI render library initialization failure | Blocked first-time users entirely with a native library load error; high engagement (30 comments) shows install-time reliability remains critical. | Resolved; likely native dependency fix |
| [#6680](https://github.com/anomalyco/opencode/issues/6680) | **OPEN** — View archived sessions on Desktop | Long-running request (27 comments, 4 👍); session management is a core workflow gap vs. competitors. | Active discussion, no assignee |
| [#23887](https://github.com/anomalyco/opencode/issues/23887) | **OPEN** — Kimi K2.6/K2.5 "Provider returned error" via OpenCode Go | Model-specific provider breakage affecting a popular model family; 24 comments indicate reproducibility. | Awaiting provider-side fix or client workaround |
| [#24039](https://github.com/anomalyco/opencode/issues/24039) | **CLOSED** — Add GPT-5.5 support for OpenAI provider | Fast turnaround (19 comments, 14 👍); shows prioritization of new model support. | Shipped quickly |
| [#16685](https://github.com/anomalyco/opencode/issues/16685) | **CLOSED** — Kimi K2.5 error on Windows via OpenCode Go | Windows-specific variant of the Kimi issue; 18 comments, 7 👍. | Closed, possibly consolidated |
| [#24184](https://github.com/anomalyco/opencode/issues/24184) | **OPEN** — IDE context persists after closing file | Regression from v1.14.23; stale file context misleads LLM responses. 18 comments, high frustration. | Active, no fix yet |
| [#17376](https://github.com/anomalyco/opencode/issues/17376) | **OPEN** — Infinite auth loop in Web Terminal | Security/workflow blocker; 16 comments, 14 👍. Web terminal unusable with credentials configured. | Long-standing, high priority |
| [#5121](https://github.com/anomalyco/opencode/issues/5121) | **OPEN** — Winget installation for Windows | 12 comments, 18 👍; official Windows package manager support gaps create trust/version issues. | Community-maintained workaround exists |
| [#10490](https://github.com/anomalyco/opencode/issues/10490) | **OPEN** — Disable copy-on-select in TUI | 12 comments, 21 👍; XTerm-style behavior conflicts with standard clipboard workflows. | Popular QoL request |
| [#24628](https://github.com/anomalyco/opencode/issues/24628) | **CLOSED** — **CRITICAL**: Storage persistence failure since Jan 31 | Session data not written to disk; discovered after ~3 months. 11 comments, rapid same-day closure. | Critical severity, fixed quickly |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#24692](https://github.com/anomalyco/opencode/pull/24692) | **fix(opencode): use directory as worktree for non-git projects** | Prevents non-git projects from defaulting to `/` for worktree/sandbox, fixing permission path traversal. | Open |
| [#22296](https://github.com/anomalyco/opencode/pull/22296) | **fix: authoritative managed-settings.json applied after all user config** | Closes enterprise config bypass vectors (env var override, OPENCODE_PERMISSION precedence). | Open |
| [#24693](https://github.com/anomalyco/opencode/pull/24693) | **fix(httpapi): align session boolean query parsing** | Fixes legacy/Effect HttpApi parity for `roots`/`archived` filters; adds regression coverage. | Open, vouched contributor |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | **feat(app): Mobile Touch Optimization** | Full mobile/touch UX overhaul while preserving desktop experience. | Open, large scope |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) | **fix(tui): stop streaming markdown/code after message completes** | Derives streaming state from completion time; fixes table row truncation in finished messages. | Open, needs issue |
| [#24691](https://github.com/anomalyco/opencode/pull/24691) | **feat(agent): add order field for configurable agent cycling order** | Allows `order` field in agent config to override alphabetical Tab cycling; plugin-friendly. | Open (duplicate of #19127) |
| [#21722](https://github.com/anomalyco/opencode/pull/21722) | **feat: improve ux and design** | Broad UI/UX refactor citing competitive gaps; large PR under review. | Open |
| [#22047](https://github.com/anomalyco/opencode/pull/22047) | **feat(cli): expose --dangerously-skip-permissions as top-level flag** | Enables faster scripting workflows with explicit permission bypass. | Open |
| [#24434](https://github.com/anomalyco/opencode/pull/24434) | **feat(tui): show per-message input/output token counts** | Adds token visibility to message metadata footer and detail view. | Open |
| [#12633](https://github.com/anomalyco/opencode/pull/12633) | **feat(tui): add auto-accept mode for permission requests** | Toggleable auto-edit acceptance with `shift+tab`; reduces friction for trusted workflows. | Open, beta contributor |

---

## Feature Request Trends

1. **Session Management & Archival** — Multiple requests for viewing archived sessions (#6680), persistent storage reliability (#24628), and session query API parity (#24693). Users need confidence in long-lived session data.

2. **Model Provider Velocity** — Rapid support for GPT-5.5 (#24039), DeepSeek-V4 (#24093), and fixes for Kimi K2.x (#23887, #16685) show the treadmill of new model integration is a constant priority.

3. **Agent Configurability** — The `order` field PRs (#24691, #19127, #24655) reflect demand for fine-grained control over agent orchestration, including compaction agent model overrides.

4. **TUI/CLI Polish** — Copy-on-select disable (#10490), token counts (#24434), auto-permissions (#12633), and file context toggles (#24661) indicate mature users want workflow customization.

5. **Cross-Platform Distribution** — Winget (#5121), musl/Linux compatibility (#24639), and Windows-specific bug density show packaging remains uneven.

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Stale Context in TUI** | File/editor context persists after closing (#24184, #24582, #23741); model picker resets silently (#23666) | High — multiple daily reports |
| **Provider-Specific Breakage** | Kimi K2.x failures (#23887, #16685), GPT-5.5 context window mismatches (#24561), "Provider returned error" as opaque catch-all | Recurring — needs better error telemetry |
| **Authentication Edge Cases** | Infinite loops in Web Terminal (#17376), OAuth context confusion (#24657) | Moderate, high impact when hit |
| **Enterprise/Config Precedence** | Managed settings bypassable (#22296), permission flags scattered (#22047) | Emerging — org adoption friction |
| **Native/Install Reliability** | OpenTUI library load failures (#3765), musl binary issues (#24639), bun upgrade path (#24628-adjacent) | Sporadic but blocking |

---

*Digest compiled from github.com/anomalyco/opencode activity on 2026-04-27 to 2026-04-28.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-28

## Today's Highlights

The Pi team shipped three rapid-fire patch releases (v0.70.3–v0.70.5) to stabilize a rocky self-update rollout, with v0.70.3's new `pi update` capability and Azure Cognitive Services support landing alongside critical startup fixes. The community responded with intense activity: 50 issues and 28 PRs in 24 hours, dominated by provider expansion requests (Cloudflare, Together AI) and urgent bug reports from users on Bun, Windows, and symlinked configurations.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **v0.70.5** | Fixed HTML export preserving ANSI renderer trailing padding as extra blank wrapped lines. [Release](https://github.com/badlogic/pi-mono/releases/tag/v0.70.5) |
| **v0.70.4** | Fixed packaged `pi` startup failure caused by session selector importing a source-only utility path. [Release](https://github.com/badlogic/pi-mono/releases/tag/v0.70.4) |
| **v0.70.3** | Added `pi update` self-update capability (can update pi itself + installed packages); added Azure Cognitive Services endpoint support for Azure OpenAI. [Release](https://github.com/badlogic/pi-mono/releases/tag/v0.70.3) |

The v0.70.3 release proved disruptive: multiple users reported complete startup failures on npm and Bun installs, prompting the v0.70.4/v0.70.5 emergency patches.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3715](https://github.com/badlogic/pi-mono/issues/3715) | `local-llm` streams terminate at 5 min from undici default `bodyTimeout`; `retry.provider.timeoutMs` cannot raise cap | Hard ceiling breaks long-running local inference (vLLM + Qwen3 thinking). Config override fails because undici's internal timeout takes precedence. | 8 comments, 2 👍; marked inprogress then closed-because-weekend—frustration at weekend closure of critical infrastructure bug |
| [#3846](https://github.com/badlogic/pi-mono/issues/3846) | pi-coding-agent 0.70.3 fails to run: `ERR_MODULE_NOT_FOUND` for `paths.js` | **v0.70.3 regression**: missing file in packaged distribution breaks all installs. Directly triggered v0.70.4 patch. | 4 comments; immediate escalation, users confirmed fix |
| [#3823](https://github.com/badlogic/pi-mono/issues/3823) | `pi install` must use same installer as `pi` itself [pnpm] | Cross-package-manager install fails in constrained environments (nix with nodejs-slim). Violates principle of least surprise. | 4 comments; nix users particularly affected, clear reproducible case |
| [#3779](https://github.com/badlogic/pi-mono/issues/3779) | 400 from opencode/minimax-m2.5-free | Provider rejects default Anthropic tool fields (`eager_input_streaming`, `cache_control`). Compatibility gap in generated models. | 4 comments; merged fix same day (PR #3802), fast turnaround |
| [#3817](https://github.com/badlogic/pi-mono/issues/3817) | Add Image to Assistant Message content type | Native image generation output support (OpenRouter/provider image-gen responses). Major gap for multimodal workflows. | 4 comments; well-specified with diff, ready for implementation |
| [#3787](https://github.com/badlogic/pi-mono/issues/3787) | DeepSeek V4 Flash: `xhigh` reasoning effort silently clamped to `high` | Silent degradation of reasoning capability. Model supports `xhigh` but isn't in `supportsXhigh()` whitelist. | 4 comments, 1 👍; mirrors previous #3662 pattern, empirical testing provided |
| [#3767](https://github.com/badlogic/pi-mono/issues/3767) | `pi config` and startup header resolve symlinked resource directories inconsistently | Symlinked `~/.pi/agent/*` and `.pi/*` paths cause config/runtime drift. Follow-up to #3405 (skills-only fix). | 4 comments; closed-because-weekend, fix in PR #3818 merged |
| [#3850](https://github.com/badlogic/pi-mono/issues/3850) | Add Workers AI and AI Gateway to Pi | Dual provider request: Cloudflare's GPU-hosted OSS models + unified gateway (observability, caching, billing). | 3 comments; immediately picked up with PRs #3851, #3852, #3856 |
| [#3828](https://github.com/badlogic/pi-mono/issues/3828) | Qwen3.5 and Qwen3.6 models from OpenCode Go provider don't work | 404 errors on valid model selections. Provider endpoint or model ID mapping issue. | 3 comments; blocking for Qwen users, needs provider-side investigation |
| [#3840](https://github.com/badlogic/pi-mono/issues/3840) | v0.70.3 PI doesn't start after update | Self-update loop failure: update notification suggests `npm install -g` but package is broken. | 3 comments; compounded v0.70.3 damage, users stuck in broken state |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#3624](https://github.com/badlogic/pi-mono/pull/3624) | feat(ai): add Together AI as a provider | Native Together AI integration via OpenAI-compatible API; auto-detects `TOGETHER_API_KEY`; filters tool-capable models from models.dev | **Open** — community provider expansion |
| [#3861](https://github.com/badlogic/pi-mono/pull/3861) | fix(coding-agent): use alternate logic to find Bun's node_modules | Fixes `bun root -g` crash by detecting Bun runtime and building path via `Bun.main`/`bun --version` logic | **Open** — Bun ecosystem critical fix |
| [#3856](https://github.com/badlogic/pi-mono/pull/3856) | feat(ai): add Cloudflare AI Gateway as a provider | Gateway provider with caching, analytics, rate limiting, fallbacks; requires `CLOUDFLARE_API_KEY` + `ACCOUNT_ID` + `GATEWAY_ID` | **Open** — builds on #3851 |
| [#3851](https://github.com/badlogic/pi-mono/pull/3851) | feat(ai): add Cloudflare Workers AI as a provider | OSS models on Cloudflare GPUs; OpenAI-compatible endpoint with per-account URL placeholder | **Closed/merged** — foundation for gateway PR |
| [#3819](https://github.com/badlogic/pi-mono/pull/3819) | fix(coding-agent): escape exported image data | HTML injection/XSS fix: escapes base64 image data before `src` attribute interpolation for tool-result and user message images | **Closed/merged** — security fix |
| [#3855](https://github.com/badlogic/pi-mono/pull/3855) | fix(extensions): exclude test/spec files from extension discovery | Prevents `*.test.ts`/`*.spec.ts` crashes in `extensions/` directory by tightening `isExtensionFile()` matcher | **Closed/merged** — developer experience |
| [#3680](https://github.com/badlogic/pi-mono/pull/3680) | Add built-in update command | `pi update` now self-updates pi in addition to packages; intentional current-version re-install for stability | **Closed/merged** — v0.70.3 headline feature |
| [#3818](https://github.com/badlogic/pi-mono/pull/3818) | fix(coding-agent): dedupe symlinked resources | Canonicalizes paths consistently across config/runtime; abstracts pattern for codebase-wide reuse | **Closed/merged** — fixes #3767 |
| [#3799](https://github.com/badlogic/pi-mono/pull/3799) | add azure cognitive services as provider | Extends Azure OpenAI provider to `*.cognitiveservices.azure.com` URLs; auto-normalizes `/openai` → `/openai/v1` paths | **Closed/merged** — v0.70.3 feature |
| [#3802](https://github.com/badlogic/pi-mono/pull/3802) | fix(ai): disable unsupported Anthropic fields for opencode minimax-m2.5-free | Adds compat block stripping `eager_input_streaming` and `longCacheRetention` for this model | **Closed/merged** — fixes #3779 |

---

## Feature Request Trends

1. **Provider Proliferation**: Strong push for Cloudflare (Workers AI + AI Gateway), Together AI, and expanded Azure support. Users want Pi as universal inference router with observability/caching layers.

2. **Multimodal Output**: Image generation as native assistant message content type (#3817) — moving beyond text+image input to image output workflows.

3. **Model Variants & Context Windows**: Request for multiple selectable entries per upstream model ID (#3858, GPT-5.5's 1M vs 272K tiers) and accurate capability detection (DeepSeek V4 Flash `xhigh`).

4. **Self-Management & Packaging**: `pi update` launched but immediately exposed cross-platform fragility (Windows `spawnSync`, Bun compatibility, npm vs pnpm installer consistency).

---

## Developer Pain Points

| Pain Point | Frequency | Manifestations |
|------------|-----------|---------------|
| **Bun compatibility** | High | `bun root -g` missing (#3809, #3861), empty `process.env` in sandbox (#3806, #3807, #3801), startup crashes |
| **Windows support gaps** | High | `pi update` fails without `shell:true` (#3857), path resolution differences, PowerShell-specific errors (#3834) |
| **Packaging/distribution regressions** | Critical | v0.70.3 shipped with missing `paths.js` (#3846, #3840, #3844, #3842), source-only imports reaching production |
| **Symlinked/dotfiles setups** | Moderate | Config/runtime path canonicalization inconsistencies (#3767, #3405), `PI_CODING_AGENT_DIR` undocumented (#3793) |
| **Provider compatibility whack-a-mole** | Moderate | Anthropic-specific fields breaking non-Anthropic providers (#3779, #3802), model capability flags stale (#3787) |
| **Documentation drift** | Moderate | Hardcoded paths ignoring env overrides (#3793), broken pi.dev/docs links (#3838), missing `PI_CODING_AGENT_DIR` discovery |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-28

## Today's Highlights

The Qwen Code team shipped v0.15.2-nightly with Catalan language support and VS Code companion fixes, while the community is actively wrestling with **DeepSeek V4 API compatibility**—multiple 400 errors around `reasoning_content` handling have emerged as the dominant theme. A critical fix for reasoning content preservation is in flight (#3637, #3682), and background task management is advancing through Phase B/C with new shell pool infrastructure.

---

## Releases

**[v0.15.2-nightly.20260427.3b0b6c052](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.2-nightly.20260427.3b0b6c052)** — Latest nightly build includes:
- **feat**: Catalan language support ([PR #3643](https://github.com/QwenLM/qwen-code/pull/3643), @jordimas)
- **fix(vscode-companion)**: Slash command completion now properly triggers after message submit ([PR #3609](https://github.com/QwenLM/qwen-code/pull/3609), @yiliang114)
- **fix(cli)**: Gradient rendering guard (incomplete in notes)

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|------------------|
| [#3579](https://github.com/QwenLM/qwen-code/issues/3579) | **DeepSeek API 400 error — reasoning_content must be passed back** | Reopened to resolve conflict between #3304 (strip thoughts on model switch) and #3579 (preserve reasoning_content). Core architectural tension in cross-provider reasoning handling. | 9 comments, reopened for correctness clarification |
| [#3619](https://github.com/QwenLM/qwen-code/issues/3619) | **DeepSeek V4 调用错误: reasoning_content相关** | Most-upvoted DeepSeek V4 breakage report; tool-call thinking chains fail to pass reasoning_content back to API. Blocking production use for DeepSeek users. | 9 comments, duplicate cluster forming |
| [#3669](https://github.com/QwenLM/qwen-code/issues/3669) | **Custom model thinking field errors (MiniMax M2.7)** | Beyond DeepSeek: custom models with `<think>` tags fail to render thinking content correctly. Indicates systemic thinking-content parsing gaps. | 5 comments, screenshot evidence |
| [#3638](https://github.com/QwenLM/qwen-code/issues/3638) | **"My eyes are blinded" — terminal flickering** | Severe UI regression in v0.15.3 with Bailian auth + GLM-5.0 causing terminal flickering. User experience blocker with visual evidence. | 2 comments, meme-worthy severity |
| [#3644](https://github.com/QwenLM/qwen-code/issues/3644) | **Rewind fails when IDE integration enabled** | Configuration conflict: `ide.enabled: true` silently breaks `/rewind`. Undocumented interaction, breaks core workflow feature. | 2 comments, clear repro |
| [#3679](https://github.com/QwenLM/qwen-code/issues/3679) | **DeepSeek V4 context window mislabeled (1M → 131.3K)** | Provider metadata error: official DeepSeek V4 advertised as 1M context but capped at 131.3K. Wastes tokens, breaks long-context workflows. | 1 comment, `/context detail` evidence |
| [#3670](https://github.com/QwenLM/qwen-code/issues/3670) | **DeepSeek V4 random 400 errors (flash/pro)** | Consolidated repro for flash/pro variants with Playwright/MCP/shell tools. Pattern: reasoning_content lost during tool execution chains. | 1 comment, detailed repro steps |
| [#3658](https://github.com/QwenLM/qwen-code/issues/3658) | **DeepSeek v4: API Error 400 reasoning_content** | Another duplicate in the cluster, confirming this is *the* widespread issue of the week across all DeepSeek V4 integrations. | 1 comment |
| [#3664](https://github.com/QwenLM/qwen-code/issues/3664) | **Subagent exceeds contextWindowSize, main agent doesn't** | Asymmetric context enforcement: subagents hit limits while main agent stays under. Suggests context accounting bug in agent delegation. | 1 comment |
| [#3652](https://github.com/QwenLM/qwen-code/issues/3652) | **Input length range error [1, 983616]** | Hard ceiling on long conversations forcing session restart. Pain point: "keep having to repeat myself about the detail." | 1 comment |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#3637](https://github.com/QwenLM/qwen-code/pull/3637) | **fix(core): preserve reasoning_content when merging consecutive assistant messages** | Critical fix: `mergeConsecutiveAssistantMessages` was silently dropping `reasoning_content`, breaking DeepSeek thinking mode. Targets root cause of #3619. | Open, @wenshao |
| [#3682](https://github.com/QwenLM/qwen-code/pull/3682) | **fix(core,cli): stop stripping reasoning on model switch/history load** | Removes event-driven reasoning stripping in history restore flows. Aligns with maintainer decision to preserve reasoning content. Complements #3637. | Open, @fyc09 |
| [#3677](https://github.com/QwenLM/qwen-code/pull/3677) | **fix(openai): parse MiniMax thinking tags** | New MiniMax provider with `<think>`/`<thinking>` parsing. Fixes #3669 and addresses broader custom-model thinking compatibility. | Open, @shenyankm |
| [#3642](https://github.com/QwenLM/qwen-code/pull/3642) | **feat(core): managed background shell pool with /tasks command** | Phase B of background tasks: replaces detached `&` processes with registry, output capture, status query, and termination. Foundation for `/tasks` UX. | Open, @wenshao |
| [#3488](https://github.com/QwenLM/qwen-code/pull/3488) | **feat(cli): background-agent UI — pill, combined dialog, detail view** | Phase A UI plane: status-line pill, tasks dialog, detail view for background subagents. Pairs with #3642 control plane. | Open, @tanzhenxin |
| [#3673](https://github.com/QwenLM/qwen-code/pull/3673) | **feat(memory): add autoSkill background project skill extraction** | Auto-extracts reusable project skills at 20-tool-call threshold. Writes to `.qwen/skills/`. Default-off, opt-in via `memory.enableAutoSkill`. | Open, @LaZzyMan |
| [#3668](https://github.com/QwenLM/qwen-code/pull/3668) | **feat(stats): add current session billing estimates** | Configurable per-model pricing in `/stats model` and session summary. Addresses cost transparency gap for multi-provider users. | Open, @shenyankm |
| [#3667](https://github.com/QwenLM/qwen-code/pull/3667) | **fix(cli): refresh static header on model switch** | Event-driven header refresh replacing polling; fixes TUI remount issues when switching models via `/model`. | Open, @pomelo-nwu |
| [#3214](https://github.com/QwenLM/qwen-code/pull/3214) | **feat(core): replace fdir crawler with git ls-files + ripgrep fallback** | Performance fix for `@` file mention autocomplete: respects `.gitignore`, faster on large repos. Long-running, needs review. | Open, @scrollDynasty |
| [#3636](https://github.com/QwenLM/qwen-code/pull/3636) | **feat(core): cap concurrent in-flight requests per provider** | Client-side back-pressure for 429 rate limits. Translates upstream limits into queued requests rather than exceptions. | Open, @JahanzaibTayyab |

---

## Feature Request Trends

1. **Export/Theme Flexibility** — [#3678](https://github.com/QwenLM/qwen-code/issues/3678) requests light theme + toggle for `/export` HTML (2 👍). Terminal-centric dark default is causing eye strain for documentation sharing.

2. **IDE Ecosystem Expansion** — [#3625](https://github.com/QwenLM/qwen-code/issues/3625) asks for Visual Studio extension (not VS Code). Suggests enterprise/C++ developer segment underserved.

3. **Localization Depth** — [#3323](https://github.com/QwenLM/qwen-code/issues/3323) pushes beyond UI strings to slash command descriptions and dynamic translation caching. Catalan release (#3643) shows momentum, but command-level i18n lags.

4. **Background Task Observability** — [#3634](https://github.com/QwenLM/qwen-code/issues/3634) roadmap + Phase B/C PRs indicate this is *in progress* but user-facing design is still stabilizing.

5. **MCP Transport Diversity** — [#3549](https://github.com/QwenLM/qwen-code/issues/3549) (closed) added HTTP MCP for ACP mode; [#3616](https://github.com/QwenLM/qwen-code/issues/3616)/[#3617](https://github.com/QwenLM/qwen-code/pull/3617) show image-returning MCP tools need strict OpenAI compat handling.

---

## Developer Pain Points

| Theme | Frequency | Evidence | Severity |
|-------|-----------|----------|----------|
| **DeepSeek V4 `reasoning_content` handling** | 5+ issues, 2 PRs | #3579, #3619, #3658, #3670, #3679, #3637, #3682 | 🔴 Critical — blocking production use |
| **Context window misreporting/accounting** | 2 issues | #3664 (subagent), #3679 (DeepSeek 1M→131K) | 🟠 High — silent data loss |
| **Session durability & recovery** | 2 issues, 1 PR | #3606 (session not found), #3656 (JSONL `}{` recovery), #3681 (follow-ups) | 🟡 Medium — reliability concerns |
| **Terminal/UI rendering** | 2 issues | #3638 (flickering), #3530 (Max update depth, closed) | 🟡 Medium — UX degradation |
| **Auth/provider configuration confusion** | 2 issues, 1 PR | #3641 (401 token), #3623 (auth status mislabels OpenAI providers), #3413 (Fireworks missing) | 🟡 Medium — onboarding friction |
| **Long-conversation limits forcing restart** | 1 issue | #3652 (983616 char ceiling) | 🟡 Medium — workflow interruption |

**Bottom line:** The DeepSeek V4 reasoning_content crisis is the single highest-priority item dominating community attention. The fix pair (#3637 + #3682) needs careful review for interaction with #3304's model-switch stripping logic. Background task infrastructure is the most significant forward-looking architectural work.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*