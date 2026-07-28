# AI CLI Tools Community Digest 2026-07-28

> Generated: 2026-07-28 01:57 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-07-28)

---

## 1. Ecosystem Overview

The AI CLI tools landscape shows **high fragmentation with convergent pain points**. Seven active projects shipped updates or fixes in the last 24 hours, but only **Gemini CLI, GitHub Copilot CLI, and OpenCode released user-facing builds**. Core infrastructure issues—Windows ARM64 support, session continuity, billing integrity, and sub-agent reliability—dominate community attention across *all* tools. A clear bifurcation is emerging: **enterprise-grade extensibility** (Claude Code, Gemini CLI, Qwen Code, Pi) versus **autonomous workflow polish** (Copilot CLI, OpenCode, DeepSeek TUI). No tool has solved cross-device state sync or sub-agent observability end-to-end.

---

## 2. Activity Comparison

| Tool | Issues (Hot) | PRs (Key) | Release Status | Release Notes |
|------|--------------|-----------|----------------|---------------|
| **Claude Code** | 10 | 6 | ❌ None | Three critical regressions (Win ARM64, GitHub connector, billing) |
| **Gemini CLI** | 10 | 10 | ✅ Nightly v0.54.0 | CRLF normalization (Win diff), keychain tag validation |
| **GitHub Copilot CLI** | 10 | 10 | ✅ v1.0.76-0 | MCP snapshot caching, `stayInAutopilot=true` default |
| **Kimi Code CLI** | 4 | 4 | ❌ None | VS Code extension bugs, hook GC race, Windows encoding fixes in PR |
| **OpenCode** | 10 | 10 | ✅ v1.18.6 + v1.18.7 | macOS fullscreen, command palette, AutoScroller crash fix |
| **Pi** | 10 | 10 | ❌ None | 30+ issues closed, 20 PRs merged (provider auth, extension API, TUI perf) |
| **Qwen Code** | 10 | 10 | ⚠️ Benchmark prerelease | DSW POCs, SWE-bench 376/500 (QUARANTINED) |
| **DeepSeek TUI** | 10 | 10 | 🔄 v0.9.2 RC | Tool sandboxing, O(N²) markdown fix, billing overhaul, onboarding |

> **Note**: OpenAI Codex digest generation failed; excluded from comparison.

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Cross-device / cross-session state sync** | Claude Code (#22648, #11455), Pi (#5263), OpenCode (#29703), Qwen Code (#7810) | Settings, session history, read/unread markers, project identity independent of filesystem path |
| **Sub-agent reliability & observability** | Gemini CLI (#22323, #21409), Claude Code (#79366), Qwen Code (#7835), DeepSeek TUI (#4042, #3983) | Failure masking, hangs, context forwarding, tool sandboxing, parent-turn state visibility |
| **Multi-provider LLM support** | Gemini CLI (#28477), Pi (Bedrock, Copilot, Z.AI, Anthropic), OpenCode (#38865, #39201), Qwen Code (#7585) | OpenAI-compatible abstraction, local model routing, provider-neutral context profiles |
| **Billing / usage transparency** | Claude Code (#81703, #80705), OpenCode (#9281, #37790), Copilot CLI (#4183, #3886), Pi (#6881), DeepSeek TUI (#4797, #4939) | Real-time cost, quota enforcement, route/token-class breakdown, BYOK accuracy |
| **Windows / non-UTF-8 / ARM64 support** | Claude Code (#40198, #78946), Kimi Code (#2560, #2561), DeepSeek TUI (#4764), Copilot CLI (#4159) | Snapdragon VM, GBK/CP936 encoding, CRLF handling, Terminal rendering, login loops |
| **ACP / protocol parity** | Copilot CLI (#4233, #4174), DeepSeek TUI (#4929), Qwen Code (#7836) | `usage_update`, `contextTier`, numeric JSON-RPC IDs, token/cost exposure for editor integrations |
| **Extension / hook reliability** | Claude Code (#81670, #81672), Kimi Code (#2564), Pi (#7187, #7195), OpenCode (#39224) | Deterministic PostToolUse, path-space handling, marketplace installs, hot-reload, fault isolation |

---

## 4. Differentiation Analysis

| Dimension | Enterprise / Platform Focus | Autonomous / Developer-First Focus |
|-----------|----------------------------|-------------------------------------|
| **Primary Tools** | Claude Code, Gemini CLI, Qwen Code, Pi | Copilot CLI, OpenCode, DeepSeek TUI, Kimi Code |
| **Feature Focus** | Governance plugins (Claude #20448), AST-aware tooling (Gemini #22745), external memory profiles (Qwen #7585), SQLite session search (Pi #7163), skill-pack routing (DeepSeek #4698) | Persistent autopilot (Copilot v1.0.76), fleet management (DeepSeek #4924), web-shell git UX (Qwen #7731), TUI visual polish (DeepSeek #4923) |
| **Target Users** | Teams needing audit trails, compliance, multi-provider routing, admin-controlled context | Solo devs / small teams wanting hands-off coding, terminal-native UX, self-hosted runners |
| **Technical Approach** | Plugin/hook systems with schema validation, provider abstraction layers, eval infrastructures (Gemini #24353, Pi #7117) | TUI-first architectures, streaming incremental rendering, PTY-based session persistence, ACP protocol compliance |
| **Maturity Signals** | Long-standing enhancement backlogs (Claude #22648 open 2+ yrs), governance PRs stalled since Jan | Rapid patch cadence (OpenCode 2 releases/24h), RC integration PRs (DeepSeek #4911 82 commits) |

**Kimi Code** sits between: VS Code extension parity focus but with Windows encoding fixes signaling platform expansion. **Qwen Code** straddles both with enterprise context profiles *and* web-shell git UX.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **OpenCode**, **DeepSeek TUI**, **Pi**, **Gemini CLI** | OpenCode: 2 patch releases + 10 PRs (massive refactor) in 24h. DeepSeek: v0.9.2 RC with 10 merged PRs. Pi: 30+ issues closed, 20 PRs merged. Gemini: nightly + 10 PRs including security fixes. |
| **Active but Blocked on Regressions** | **Claude Code**, **GitHub Copilot CLI** | Claude: 3 critical regressions (Win ARM64, GitHub connector, billing) with high 👍 but no releases. Copilot: v1.0.76 shipped but plan-mode, Windows TUI, ACP parity regressions clustering. |
| **Early / Niche Adoption** | **Kimi Code**, **Qwen Code** | Kimi: 4 issues/PRs, VS Code extension bugs dominate. Qwen: Heavy CI flakiness (12+ E2E failures), benchmark prereleases only, enterprise features in design phase. |
| **Maturity Indicators** | | **Gemini CLI** leads on eval infra (76 tests × 6 models). **Claude Code** has deepest backlog (cross-device sync 43👍 unresolved). **DeepSeek TUI** investing in accessibility/theming audit. **Pi** building extension platform depth (scopedModels, markdown hooks). |

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|-----------------|-------------|
| **Session continuity is the next table-stakes feature** | 🔴 Critical (5/7 tools) | Tools without cross-device resume/sync will lose enterprise teams. Invest in portable session formats now. |
| **Sub-agent architectures need a**Sub-agent architectures need security boundaries** | 🔴 Critical (4/7 tools) | Tool sandboxing (DeepSeek #4042), context isolation (Qwen #7835), and fork-state fidelity (DeepSeek #3983) are converging requirements. |
| **Multi-provider routing is becoming mandatory** | 🟠 High (4/7 tools) | Single-vendor lock-in is a blocker. Provider abstraction layers (Pi, Gemini, OpenCode, Qwen) will differentiate. |
| **Windows ARM64 / non-UTF-8 is a qualification gate** | 🟠 High (4/7 tools) | Snapdragon X adoption rising. Tools without native ARM64 VM and encoding fixes will lose enterprise Windows fleets. |
| **ACP protocol compliance = editor ecosystem access** | 🟠 High (3/7 tools) | Zed, avante.nvim, and VS Code extensions demand `usage_update`, `contextTier`, numeric IDs. Non-compliant CLIs are excluded. |
| **Billing/usage observability drives trust** | 🟠 High (5/7 tools) | Silent quota retries (Qwen #7841), disputed charges (Claude #81703), opaque costs (Copilot #4183) erode adoption. Real-time, route-level cost APIs are expected. |
| **TUI performance requires incremental rendering** | 🟡 Medium (3/7 tools) | O(N²) markdown re-parse (DeepSeek #3897

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-28 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py 0% recall` | Core tooling fix: skill-creator's evaluation loop reports 0% recall for all skills, breaking description optimization | 10+ independent reproductions; blocks automated skill improvement; root cause: trigger detection fails on Windows & Unix | **Open** |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Prevents typographic defects in AI-generated docs: orphan/widow control, numbering alignment, word-wrap hygiene | "Affects every document Claude generates"; users rarely request good typography explicitly | **Open** |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` (v1.3.0) | Mechanical file verification → 4-dimension reasoning audit (correctness, completeness, safety, clarity) in damage-severity order | Universal, stack-agnostic quality gate; proposed as pre-delivery checkpoint | **Open** |
| 4 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Full testing stack: Trophy model, AAA pattern, React Testing Library, contract testing, property-based, mutation testing, CI integration | Comprehensive reference skill; addresses "what to test vs. what NOT to test" | **Open** |
| 5 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills evaluating structure (20%), behavior (25%), security (25%), maintainability (15%), usability (15%) | Adds automated skill review to marketplace; security analyzer catches injection, path traversal, secrets | **Open** |
| 6 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | Create/fill/read/convert OpenDocument (.odt, .ods); template filling, ODT→HTML parsing | Triggers on "ODT", "ODF", "LibreOffice", "ISO standard format" | **Open** |
| 7 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `plan-file-hygiene` | Lifecycle management for planning artifacts (addresses #1417): creation, update, archival, cleanup | Community-identified gap: "planning artifacts accumulate with no lifecycle" | **Open** |
| 8 | **[#525](https://github.com/anthropics/skills/pull/525)** `pyxel` | Retro/pixel-art/8-bit game development via pyxel-mcp; write → run_and_capture → inspect → iterate loop | Niche but active; author is Pyxel creator (@kitao) | **Open** |

> **Note**: PR comment counts show as "undefined" in source data; ranking follows repository's "sorted by comments" order. Fix PRs (#1298, #1099, #1050, #1323, #538, #541, #539, #362, #361) dominate top positions, reflecting acute tooling pain.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Community Signal |
|-------|----------|------------------|
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): Community skills distributed under `anthropic/` namespace impersonate official skills | **Critical** — highest engagement; enables privilege escalation via mistaken trust |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): No native org-wide skill library; manual .skill file sharing via Slack/Teams | **High** — workflow friction for teams; 8👍 indicates strong latent demand |
| **Skill Creator Tooling Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍), [#1169](https://github.com/anthropics/skills/issues/1169): `run_eval.py` 0% recall on all queries including literal slash-commands | **High** — blocks skill authoring; multiple PRs attempting fixes (#1298, #1099, #1050, #1323) |
| **Plugin Deduplication** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍): `document-skills` + `example-skills` install identical content → duplicate context | **Medium** — 9👍 shows pain; wastes context window |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` skill injects ~156k tokens in single call | **Emerging** — new bottleneck as skills grow richer |
| **MCP / Bedrock Integration** | [#16](https://github.com/anthropics/skills/issues/16) (Expose Skills as MCPs), [#29](https://github.com/anthropics/skills/issues/29) (Bedrock support) | **Strategic** — platform interoperability requests |
| **Agent Governance & Quality Gates** | [#412](https://github.com/anthropics/skills/issues/412) (agent-governance), [#1385](https://github.com/anthropics/skills/issues/1385) (3-gate reasoning pipeline) | **Forward-looking** — safety/quality infrastructure for agentic workflows |

---

## 3. High-Potential Pending Skills (Active Open PRs Likely to Land)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Recent (Jun 28), comprehensive quality gate, universal applicability, addresses core reliability concern |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Very recent (Jul 25), solves explicit community-identified gap (#1417), clear lifecycle model |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Broad utility, thorough coverage (unit → mutation testing), references established models (Trophy) |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal need (every generated doc), invisible but high-impact quality dimension |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | Meta-tool for ecosystem health; enables automated review at scale |
| **[#486](https://github.com/anthropics/skills/pull/486)** | `odt` | Open-standard format support; fills gap alongside existing docx/pdf skills |
| **[#525](https://github.com/anthropics/skills/pull/525)** | `pyxel` | Authoritative (Pyxel creator), demonstrates MCP + skill composition for creative coding |
| **[#181](https://github.com/anthropics/skills/pull/181)** | `sap-rpt-1-oss-predictor` | Enterprise SAP integration; leverages Apache 2.0 foundation model from SAP TechEd 2025 |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy skill execution infrastructure*: fixing the broken skill-creator toolchain (0% recall, Windows incompatibility, encoding bugs), establishing security boundaries against namespace spoofing, and adding meta-skills that audit skill quality and agent reasoning — because without reliable authoring, distribution, and verification, the skill ecosystem cannot scale.**

---

# Claude Code Community Digest — 2026-07-28

## 1. Today's Highlights

No new releases shipped today. Community attention is concentrated on **three critical regressions**: a Windows ARM64 Cowork VM startup failure (#40198, 66 comments), a GitHub connector regression blocking all repository access (#71542, 43 comments, 37 👍), and a July 17 mass billing incident where Max subscribers were charged despite plan allowances (#81703). Long-standing requests for **cross-device settings sync** (#22648, 43 👍) and **session continuity** (#11455, 24 👍) remain highly upvoted but unresolved.

## 2. Releases

*No releases published in the last 24 hours.*

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#40198](https://github.com/anthropics/claude-code/issues/40198) | **Cowork VM fails to start on Windows ARM64 (Snapdragon)** | Blocks collaborative coding on a growing hardware segment (Galaxy Book4 Edge, other Snapdragon X devices). Platform-specific blocker. | 66 comments, 13 👍 — active debugging thread with logs |
| [#71542](https://github.com/anthropics/claude-code/issues/71542) | **GitHub connector links but cannot access ANY repository content** | Account-wide regression; public & private repos both broken. Core integration failure for team workflows. | 43 comments, 37 👍 — recent regression, high urgency |
| [#22648](https://github.com/anthropics/claude-code/issues/22648) | **Account-level settings sync across devices** | Top-voted enhancement; users manually replicate `~/.claude` across Linux/Mac/Windows. Referenced in 4+ prior issues. | 24 comments, 43 👍 — persistent demand |
| [#11455](https://github.com/anthropics/claude-code/issues/11455) | **Session Handoff / Continuity Support** | CLI sessions cannot be resumed or handed off; breaks multi-device and team handoff workflows. | 23 comments, 24 👍 — systems-integrator use case |
| [#81703](https://github.com/anthropics/claude-code/issues/81703) | **July 17 mass billing incident: $704.71 disputed** | Max subscribers charged usage credits despite included allowance. Trust/billing integrity issue. | 7 comments — acknowledged incident, unreconciled charges |
| [#61172](https://github.com/anthropics/claude-code/issues/61172) | **`/clear` inherits previous session name → duplicate names in `/resume`** | Session management UX bug; confuses history/resume workflow on macOS. | 7 comments, 12 👍 — clear repro |
| [#79366](https://github.com/anthropics/claude-code/issues/79366) | **Worktree sessions reuse prior worktree directory** | Isolation breach: new tasks land in stale worktrees, risking cross-contamination. | 6 comments, 4 👍 — macOS desktop app |
| [#78946](https://github.com/anthropics/claude-code/issues/78946) | **Login loop on Windows** | Auth regression blocking all Windows users from signing in. | 6 comments, 3 👍 — platform blocker |
| [#81398](https://github.com/anthropics/claude-code/issues/81398) | **Windows MSIX: Browser pane crashes GPU process (exit 101457950); reinstall loop** | In-app browser unusable; requires full MSIX re-add to recover. | 3 comments — severe desktop app instability |
| [#81813](https://github.com/anthropics/claude-code/issues/81813) | **Auto-generated session name matches unrelated project file** | Session naming collision: identical names across sessions, derived from filesystem not conversation. | 2 comments — fresh report, core UX |

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#81673](https://github.com/anthropics/claude-code/pull/81673) | **fix(devcontainer): don't abort firewall setup on optional domain resolve failure** | `init-firewall.sh` now tolerates NXDOMAIN for `statsig.anthropic.com`; prevents half-populated ipset and default DROP policy. Fixes #55623. | Open |
| [#81672](https://github.com/anthropics/claude-code/pull/81672) | **fix(hookify): make package import independent of install directory name** | Removes hardcoded `hookify` directory name assumption; enables marketplace installs. Fixes #69665, #81448. | Open |
| [#81670](https://github.com/anthropics/claude-code/pull/81670) | **fix(plugins): quote `${CLAUDE_PLUGIN_ROOT}` in hook commands; prefix hookify examples** | Handles paths with spaces in `hooks.json`; adds prefix to avoid collisions. Fixes #78490, #79143. | Open |
| [#20448](https://github.com/anthropics/claude-code/pull/20448) | **Add web4-governance plugin (T3 trust tensors, R6 audit trails)** | New governance plugin for AI agent accountability; cryptographic provenance, verifiable audit trails. | Open (since Jan) |
| [#81576](https://github.com/anthropics/claude-code/pull/81576) | **docs: fix security-guidance plugin entry in plugins/README.md** | Corrects hook type (no PreToolUse), pattern count (25 not 9), and separates three distinct triggers. | Open |
| [#81540](https://github.com/anthropics/claude-code/pull/81540) | **Fix #80705: Usage leak** | Automated fix by Atlas 2 for reported usage leak; includes tests and repo validation. $200 bounty. | Open |

## 5. Feature Request Trends

1. **Cross-device synchronization** — Settings, session state, read/unread markers, and auto-memory keyed to follow the account, not the machine (#22648, #81568, #81391, #81392).
2. **Session continuity & handoff** — Resume, transfer, or fork sessions across devices/CLI/web; stable project identity independent of absolute path (#11455, #81391, #81813).
3. **Plan-approval parity on remote surfaces** — Mobile/remote-control should offer "accept, clear context, auto mode" like CLI (#81393).
4. **Localization (i18n)** — CLI/TUI translation support (Spanish, etc.) (#65963).
5. **Markdown rendering customization** — Distinguishable heading levels, user-adjustable styling (#70368).
6. **Working directory visibility in prompt** — Persistent cwd display to avoid `pwd` token spend (#70132).

## 6. Developer Pain Points

| Area | Recurring Frustrations |
|------|------------------------|
| **Windows ARM64** | Cowork VM non-functional on Snapdragon; child process console flashes (#40198, #70200). |
| **GitHub Integration** | Connector regression blocks all repo access; web repo picker shows nothing despite App install (#71542, #75233). |
| **Billing/Usage** | Mass billing incident (July 17); Max 20x limits not honored; usage leaks (#81703, #79773, #80705). |
| **Session Management** | `/clear` name inheritance; worktree reuse; auto-name collisions; per-device read state (#61172, #79366, #81813, #81568). |
| **Auth** | Windows login loop; MSIX reinstall loops after GPU crash (#78946, #81398). |
| **Plugin/Hook System** | Path-space breaks; directory-name coupling; marketplace install incompatibility (#81670, #81672). |
| **Mobile/Remote** | Android image attachments don't sync; no plan-approval parity; session read-state not synced (#57882, #81393, #81568). |
| **Accessibility** | White-on-white `AskUserQuestion` title on light themes (#77394). |
| **Configuration Hygiene** | `~/.claude` mixes portable config with machine-local cache; no recommended `.gitignore` (#81392). |
| **Token Efficiency** | Workflow tool eager-loads ~4k tokens despite opt-in trigger (#79504). |

---

*Data sourced from `anthropics/claude-code` GitHub issues & PRs updated 2026-07-27 → 2026-07-28.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-28

## 1. Today's Highlights
A new nightly release (v0.54.0-nightly) shipped two security hardening fixes: CRLF normalization for Windows diff rendering in the A2A server, and stricter authentication tag validation in the file-based keychain. Meanwhile, the issue tracker shows sustained focus on subagent reliability—recovery after turn limits, hanging generalist agents, and under-utilization of custom skills—alongside Auto Memory quality improvements and a growing request for multi-provider LLM support.

## 2. Releases
**v0.54.0-nightly.20260728.gbef611950**  
- **fix(a2a-server)**: Normalize CRLF → LF in `getProposedContent` to restore side-by-side diff highlighting on Windows ([#28531](https://github.com/google-gemini/gemini-cli/pull/28531))  
- **fix(core)**: Enforce explicit 128-bit tag length and validation in file keychain, preventing malformed credential storage across Node runtimes ([#28523](https://github.com/google-gemini/gemini-cli/pull/28523))

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent reports GOAL success after MAX_TURNS | Masks real failures; undermines trust in autonomous workflows | 12 comments, 2 👍 — P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs indefinitely | Blocks core “defer to subagent” path; workarounds require explicit disable | 8 comments, 8 👍 — P1, high user pain |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component-level evaluations | Scaling eval infra (76 tests × 6 models) is critical for regression prevention | 7 comments — P1, epic tracking |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST-aware file reads/search/mapping | Potential step-change in token efficiency & navigation precision | 7 comments, 1 👍 — P2, investigation epic |
| [#28477](https://github.com/google-gemini/gemini-cli/issues/28477) Support open-source LLM providers | Top community ask; unlocks local/private model usage | 6 comments — new, untriaged |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini under-uses skills/sub-agents | Reduces value of extensibility investments | 6 comments — P2, needs retest |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory retries low-signal sessions forever | Wastes compute & clutters inbox | 5 comments — P2 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell exec stuck at “Waiting input” post-completion | Frequent UX breakage on simple commands | 4 comments, 3 👍 — P1 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) Browser agent: session takeover & lock recovery | Persistent profile locking breaks CI/headless flows | 4 comments — P3, feature |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent fails on Wayland | Linux desktop adoption blocker | 4 comments, 1 👍 — P1 |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | Open | **Security**: Block `$VAR`/`${VAR}` expansion bypass (GHSA-wpqr-6v78-jr5g) — P1 |
| [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) | Open | **macOS**: Fall back to embedded Seatbelt profiles, fixing `-s` sandbox startup crash |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | Open | **Auth**: Refresh MCP OAuth tokens with stored client ID, stopping re-auth loops — P1 |
| [#28485](https://github.com/google-gemini/gemini-cli/pull/28485) | Open | **Model selector**: Surface `gemini-3.5-flash`/`3.6-flash` for all users — P2 |
| [#28531](https://github.com/google-gemini/gemini-cli/pull/28531) | **Merged** | CRLF→LF normalization for A2A diff view (in tonight’s nightly) |
| [#28523](https://github.com/google-gemini/gemini-cli/pull/28523) | **Merged** | File keychain tag-length enforcement (in tonight’s nightly) |
| [#28549](https://github.com/google-gemini/gemini-cli/pull/28549) | Open | **Plan Mode**: Disclose that read-only status is a server claim, not verified |
| [#28363](https://github.com/google-gemini/gemini-cli/pull/28363) | **Merged** | Prevent `AbortSignal` listener leak in `ShellExecutionService` |
| [#28364](https://github.com/google-gemini/gemini-cli/pull/28364) | **Merged** | Deep-merge user model config over defaults (fixes nested override loss) |
| [#28447](https://github.com/google-gemini/gemini-cli/pull/28447) | Open | **Docs**: Add Windows PowerShell troubleshooting for `gemini` command |

## 5. Feature Request Trends
1. **Multi-provider LLM support** — Issue [#28477](https://github.com/google-gemini/gemini-cli/issues/28477) reflects a clear push for OpenAI-compatible / local model abstractions.  
2. **Subagent observability & control** — Trajectory sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), self-awareness ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)), and config overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).  
3. **AST-aware tooling** — Investigation epics ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) signal intent to move beyond line-based file ops.  
4. **Auto Memory hardening** — Redaction, quarantine, and retry logic ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).  
5. **Destructive-action guardrails** — Explicit discouragement of `git reset --force`, DB mutations ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

## 6. Developer Pain Points
- **Subagent opacity**: Failures masked as success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), missing context in bug reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).  
- **Shell integration flakiness**: “Waiting input” ghost state ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), interactive prompt stalls ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)), tmp script litter ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).  
- **Config not respected**: Browser agent ignores `settings.json` ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), subagents auto-enable ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)).  
- **Platform gaps**: Wayland browser failure ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), Windows PowerShell install friction ([#28447](https://github.com/google-gemini/gemini-cli/pull/28447)), macOS sandbox crash ([#28551](https://github.com/google-gemini/gemini-cli/pull/28551)).  
- **Token/tool limits**: 400 errors beyond 128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), model selector stale ([#28485](https://github.com/google-gemini/gemini-cli/pull/28485)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-28

---

## 🎯 Today's Highlights

The v1.0.76-0 release delivers faster MCP tool loading via definition-scoped snapshots and makes Autopilot mode sticky by default—addressing a top community request for persistent autonomous workflows. Meanwhile, the issue tracker shows a cluster of regressions around plan-mode permissions, Windows terminal rendering, and ACP protocol parity, signaling growing friction as the CLI expands into non-interactive and cross-platform scenarios.

---

## 📦 Releases

### v1.0.76-0 (2026-07-27)
- **MCP performance**: Tools now load from definition-scoped snapshots with process-wide and per-server cache opt-outs—significant speedup for multi-server MCP setups.
- **Autopilot persistence**: `stayInAutopilot` defaults to `true`; the agent remains in autonomous mode after `task_complete` unless explicitly configured otherwise.
- **Bug fix**: Restored early warning for unhandled conditions (details truncated in release notes).

[View release](https://github.com/github/copilot-cli/releases/tag/v1.0.76-0)

---

## 🔥 Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4188](https://github.com/github/copilot-cli/issues/4188) | **Plan-mode regression: shell commands blocked** | Breaks workflows that used `gh` CLI during planning to enrich context (e.g., reading/creating issues). | 6 comments, 3 👍 — active regression report |
| [#1730](https://github.com/github/copilot-cli/issues/1730) | **`sessionStart` hooks not firing in `.github/hooks/`** | Hooks are a key extensibility point; silent failure undermines automation pipelines. | 6 comments, 3 👍 — open since Feb, still unresolved |
| [#4163](https://github.com/github/copilot-cli/issues/4163) | **Zombie child processes accumulate (~2/min)** | Resource leak on Linux; long sessions degrade system stability. | 5 comments, 3 👍 — **closed** but indicates recent regression |
| [#4183](https://github.com/github/copilot-cli/issues/4183) | **Auto-compaction doesn't prevent 5 MB CAPI body limit** | Sessions hit hard API limit despite token compaction, blocking further model calls. | 4 comments, 10 👍 — high upvote ratio signals widespread pain |
| [#1381](https://github.com/github/copilot-cli/issues/1381) | **Rewind requires git; no support for jj/vcs alternatives** | Excludes users of non-git VCS; VS Code Copilot supports this. | 3 comments, 9 👍 — long-standing (Feb), cross-platform gap |
| [#4233](https://github.com/github/copilot-cli/issues/4233) | **ACP mode missing `usage_update` emission** | ACP clients (Zed, etc.) can't show context/credit usage—parity gap with interactive CLI. | 2 comments, 2 👍 — protocol compliance issue |
| [#4161](https://github.com/github/copilot-cli/issues/4161) | **`task_complete` unavailable after switching back to Autopilot** | Regression of #1523; breaks autonomous loop continuity. | 2 comments, 3 👍 — regression confirmed by maintainer history |
| [#3977](https://github.com/github/copilot-cli/issues/3977) | **Persist Autopilot across interactive turns via flag/setting** | Directly addressed in v1.0.76-0 (`stayInAutopilot`); validates demand. | 2 comments, 1 👍 — feature now shipped |
| [#4159](https://github.com/github/copilot-cli/issues/4159) | **Windows Terminal: UI goes blank after prompt submit** | Critical usability blocker on Windows; `-p` mode works but interactive fails. | 1 comment, 3 👍 — platform-specific rendering bug |
| [#4118](https://github.com/github/copilot-cli/issues/4118) | **`/app` command doesn't default to CWD** | UX friction: manual directory selection every time. | 0 comments, **35 👍** — highest upvote count, silent majority pain point |

---

## 🔧 Key PR Progress (Top 10 by Relevance)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#1598](https://github.com/github/copilot-cli/pull/1598) | **fix: add trap to clean up temp directory on unexpected exit** | Open | Prevents `/tmp` leaks when `install.sh` fails mid-run (network errors, 404s). |
| [#1116](https://github.com/github/copilot-cli/pull/1116) | **Fix misleading doc: 0x models don't reduce quota** | Open | Corrects README implication that 0x models consume quota; aligns docs with observed behavior. |
| [#988](https://github.com/github/copilot-cli/pull/988) | **chore(docs): add missing prefix to brew command** | Open | Fixes `brew install copilot-cli` → correct formula is `github/copilot-cli/copilot-cli`. |
| [#1609](https://github.com/github/copilot-cli/pull/1609) | **Update PAT permissions instructions** | Open | Clarifies `Copilot Requests` permission lives under **Account** tab in PAT UI—easy to miss. |
| [#1333](https://github.com/github/copilot-cli/pull/1333) | **Fix minor grammar & Markdown formatting** | Open | Polish: adds missing "an", removes extra blank line. |
| [#2800](https://github.com/github/copilot-cli/pull/2800) | **Add initial devcontainer configuration** | Open | Enables consistent dev environment; signals investment in contributor onboarding. |
| [#3928](https://github.com/github/copilot-cli/pull/3928) | **Add .gitignore and settings configuration** | Open | Project hygiene; reduces noise in diffs. |
| [#4030](https://github.com/github/copilot-cli/pull/4030) | **Add GitHub Actions workflow for Jekyll deployment** | Open | Automates docs site deployment to GitHub Pages. |
| [#3473](https://github.com/github/copilot-cli/pull/3473) | **Update project name in README** | Open | Appears to be spam/low-quality (contains unrelated promotional text). |
| [#3873](https://github.com/github/copilot-cli/pull/3873) | **Add initial console log for greeting** | Open | Minor UX polish; unclear scope. |

> **Note**: Most PRs are documentation/hygiene fixes; few functional contributions in last 24h. Core fixes (zombie reaping, plan-mode, ACP parity) appear to land via internal commits.

---

## 📈 Feature Request Trends

1. **ACP Protocol Parity** — Multiple issues (#4233, #4174, #4275) demand full ACP compliance: `usage_update`, `contextTier` config, token/cost exposure. Critical for Zed/editor integrations.
2. **Persistent Autopilot / Mode Control** — #3977 (now shipped), #4161, #4188 show demand for *predictable, configurable* autonomous behavior across mode switches.
3. **Non-Git VCS Support** — #1381 (jj, others) + #3264 (symlinked `.copilot` configs) reflect need for VCS-agnostic session management.
4. **Model/Context Tier Flexibility** — #2792 (planning vs. execution model split), #4272 (org policy blocking new models), #4275 (ACP contextTier) — users want granular model routing.
5. **Windows/Terminal Rendering Reliability** — #4159, #4263, #4191 cluster around TUI breakage in Windows Terminal, WSL+tmux, split panes.

---

## 😣 Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Plan-mode regressions** | #4188 (shell blocked), #1272 (UI doesn't reflect mode switch), #4188 comments | High — multiple recent reports |
| **Windows TUI instability** | #4159 (blank UI), #4263 (content disappears on scroll), #4191 (clipboard in tmux/WSL) | High — 3+ distinct reports in 24h |
| **ACP second-class citizenship** | #4233 (no usage_update), #4174 (no token exposure), #4275 (no contextTier) | Medium — 3 protocol gaps |
| **Resource leaks** | #4163 (zombies), #1598 (temp dir leak) | Medium — systemic cleanup issues |
| **Hook/extensibility silence** | #1730 (sessionStart no-op), #3264 (symlink docs missing) | Medium — extensibility feels half-baked |
| **Credit/usage opacity** | #3886 (restart burns 174 credits), #4183 (5 MB limit), #4224 (subagent billing missing from OTel) | Medium — cost observability gaps |
| **Org policy model blocks** | #4272 (new models greyed out, no admin UI) | Emerging — confusing policy enforcement |

---

*Generated from github.com/github/copilot-cli data as of 2026-07-28 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-28

## Today's Highlights
No new releases shipped in the past 24 hours. The community is actively triaging **four critical issues** — two VS Code extension bugs (plan-mode file links not clickable, approval prompts failing to render), a hook GC race condition causing non-deterministic `PostToolUse` execution, and a resolved login connectivity failure. **Four PRs** target Windows Unicode encoding crashes, MCP tool normalization for Moonshot API, and a new opt-out for prompt cache keys.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues
| Issue | Type | Why It Matters | Community Signal |
|-------|------|----------------|------------------|
| [#2563](https://github.com/MoonshotAI/kimi-cli/issues/2563) | Bug (VS Code) | Approval prompts (`ExitPlanMode` / tool permissions) intermittently never render, stalling the agent indefinitely or hitting a silent 600s timeout. Blocks core agent loop in VS Code. | 👍 0 · 0 comments · Created & updated 2026-07-27 |
| [#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317) | Bug (VS Code) | Plan-mode file paths in chat webview are not clickable — breaks “jump to file” workflow developers expect from Copilot/Cursor. | 👍 0 · 3 comments · Open since 2026-05-17, updated 2026-07-27 |
| [#2564](https://github.com/MoonshotAI/kimi-cli/issues/2564) | Bug (Hooks) | `PostToolUse` / `PostToolUseFailure` hooks registered in `config.toml` are garbage-collected before completion — non-deterministic execution, sometimes never firing. Root cause identified in `kimi_cli/soul/tools/...`. | 👍 0 · 0 comments · Created & updated 2026-07-27 |
| [#1070](https://github.com/MoonshotAI/kimi-cli/issues/1070) | Bug (Network) | **Closed** — Login failed: `Cannot connect to host auth.kimi.com:443 ssl:default [Network is unreachable]`. Affected v1.9.0 users on `/login`. Resolved (likely infra-side). | 👍 0 · 8 comments · Closed 2026-07-27 |

## Key PR Progress
| PR | Title | Status | Impact |
|----|-------|--------|--------|
| [#2561](https://github.com/MoonshotAI/kimi-cli/pull/2561) | Fix UnicodeEncodeError on startup when stdio uses non-UTF-8 encoding (Windows Git Bash) | Open | Fixes crash on launch (`'gbk' codec can't encode character '▐'`). Welcomes Windows/Git Bash users. |
| [#2560](https://github.com/MoonshotAI/kimi-cli/pull/2560) | Fix UnicodeEncodeError in web banner when stdout is non-UTF-8 (Windows) | Open | Fixes `kimi web` crash on Chinese locale (codepage 936/GBK) before HTTP server binds. |
| [#2539](https://github.com/MoonshotAI/kimi-cli/pull/2539) | fix(mcp): normalize tools for Moonshot API | Open | Generates stable Moonshot-compatible aliases for MCP tool names; adds missing root `object` type; distributes exact `anyOf`/required schema shape. Unblocks MCP integration parity. |
| [#2562](https://github.com/MoonshotAI/kimi-cli/pull/2562) | fix(llm): allow disabling prompt cache key | Open | Adds `prompt_cache_key` boolean to `kimi` provider config; omits session-derived key when `false`. Gives users control over caching behavior (cost/latency trade-off). |

## Feature Request Trends
1. **VS Code Extension Parity** — Clickable file refs in plan mode (#2317), reliable approval rendering (#2563). Developers expect first-class IDE integration on par with Copilot/Cursor.
2. **Hook Reliability** — Deterministic `PostToolUse`/`PostToolUseFailure` execution (#2564). Hooks are becoming a primary extensibility surface; GC races undermine trust.
3. **Windows/Non-UTF-8 Support** — Two PRs (#2560, #2561) fixing GBK/CP936 crashes signal growing Windows adoption and demand for locale-agnostic CLI.
4. **MCP Schema Normalization** — PR #2539 shows active work to make MCP tools first-class citizens for Moonshot API, not just pass-through.

## Developer Pain Points
- **VS Code extension stability** — Two open bugs (#2317, #2563) directly break the inner loop: file navigation and approval flow. Zero comments on #2563 suggests it may be a recent regression affecting few but severely.
- **Hook non-determinism** — #2564’s GC race makes `config.toml` hooks unreliable; developers cannot trust automation (lint, test, notify) to run after tool calls.
- **Windows encoding friction** — Banner/logo Unicode chars (`▐`, `➜`) crash the process before any user code runs. Fixes are in PR but not yet merged.
- **Login/network opacity** — #1070’s “Network is unreachable” gave no actionable diagnostics; closed without root-cause explanation, leaving users uncertain if it’ll recur.

---
*Digest generated from GitHub data as of 2026-07-28 00:00 UTC. Links point to live issues/PRs on `MoonshotAI/kimi-cli`.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-28

---

## 1. Today's Highlights

Two patch releases (v1.18.6 and v1.18.7) shipped within 24 hours, focusing on desktop stability—macOS fullscreen titlebar, command palette regressions, project selector scrolling, and a critical AutoScroller/Scroller plugin dependency crash that surfaced in v1.18.7. Meanwhile, the community is actively reporting OpenCode Go subscription activation failures (HTTP 401 upstream errors) and DeepSeek V4 Flash regressions post-update. A major internal refactor is underway, splitting the app into granular controllers for sessions, settings, providers, and model selection.

---

## 2. Releases

### v1.18.7 (Desktop)
- **macOS**: Removed extra titlebar inset in fullscreen mode
- **Command Palette**: Fixed shadowed commands incorrectly reappearing
- **Project Selector**: Added scrolling for long project lists ([@david1gp](https://github.com/david1gp))
- **Critical Regression**: AutoScroller plugin dependency on Scroller plugin causes fatal renderer crashes when opening Settings or sortable lists ([#39162](https://github.com/anomalyco/opencode/issues/39162), [#38107](https://github.com/anomalyco/opencode/issues/38107), [#38830](https://github.com/anomalyco/opencode/issues/38830))

### v1.18.6 (Core + Desktop)
- **Core**: Fixed branch-specific repository cache corruption when refreshing references
- **Desktop**: Improved compatibility with newer client API across directory, project, session, and terminal flows
- **Bugfix**: Legacy MCP issues resolved

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#25270](https://github.com/anomalyco/opencode/issues/25270) Model generates identical response twice | Core model output duplication breaks trust in agent responses; 23 comments, 4 👍 | High engagement, long-standing (since May) |
| [#37790](https://github.com/anomalyco/opencode/issues/37790) OpenCode Go paid but shows "Insufficient balance" | Subscription billing/activation pipeline broken; blocks paid users entirely | 11 comments, urgent for revenue |
| [#39215](https://github.com/anomalyco/opencode/issues/39215) OpenCode Go — HTTP 401 "Request blocked by upstream provider" on all models | Wider auth failure affecting all Go subscribers; suggests upstream token propagation issue | New, critical for paying customers |
| [#9281](https://github.com/anomalyco/opencode/issues/9281) Unified usage tracking via `/usage` | High-demand observability feature (31 👍); users cannot monitor plan consumption | 11 comments, strong community pull |
| [#29703](https://github.com/anomalyco/opencode/issues/29703) Allow changing project folder path without losing session history | Workflow continuity; renaming/moving projects destroys chat history (13 👍) | 9 comments, UX pain point |
| [#28596](https://github.com/anomalyco/opencode/issues/28596) Repeated tool calls / exec loop | Agent gets stuck in infinite tool-call loops; requires manual interrupt | 5 comments, reliability issue |
| [#38598](https://github.com/anomalyco/opencode/issues/38598) DeepSeek V4 Flash not finishing tasks post-1.18.4 | Model-specific regression; "lazy" behavior ignoring simple requests | 2 comments, affects free tier users |
| [#39181](https://github.com/anomalyco/opencode/issues/39181) TUI cross-contamination with shared server | Multiple TUIs on one server leak branch/events across directories | 2 comments, multi-project workflow breakage |
| [#32181](https://github.com/anomalyco/opencode/issues/32181) New global skills not available to model | Skills registered but invisible to model/selector since v1.17.4 | 2 comments, extensibility regression |
| [#38384](https://github.com/anomalyco/opencode/issues/38384) Startup error: "Missing required parameter: 'input[8].arguments'" | Cryptic TUI error at launch; unclear origin or impact | 2 comments, diagnostic opacity |

---

## 4. Key PR Progress

| PR | Description | Impact |
|----|-------------|--------|
| [#39224](https://github.com/anomalyco/opencode/pull/39224) feat(core): reload configured plugins from source edits | Hot-reload for locally configured plugins (`./tools/my-plugin.ts`), matching auto-discovered `.opencode/plugin/` behavior | Developer loop velocity |
| [#39225](https://github.com/anomalyco/opencode/pull/39225) fix(core): bound ripgrep search with default wall-clock deadline | Prevents unbounded `rg` execution (21+ min observed) on low-result patterns via `Stream.take` deadline | Stability, resource safety |
| [#39230–#39234](https://github.com/anomalyco/opencode/pull/39230) Refactor: extract provider connection, server management, v2 settings, session controllers | Massive architectural split: thin composition, dedicated controllers for session timeline, side panel, keybinds, model selector | Maintainability, testability, V2 foundation |
| [#38760](https://github.com/anomalyco/opencode/pull/38760) feat(core): add pinned Code Mode tools | `pinned: true` metadata keeps tools visible in compact catalog; permissions filtered before render | Code Mode UX control |
| [#39084](https://github.com/anomalyco/opencode/pull/39084) refactor(app): separate model selector controller and view | Decouples model selection logic from DOM; shared menu dismissal, translation orchestration | Cleaner UI architecture |
| [#39220](https://github.com/anomalyco/opencode/pull/39220) fix(app): refresh global provider state | Reacts to provider connection events via server-scoped query client; syncs home settings with new-session connections | Provider state consistency |
| [#39217](https://github.com/anomalyco/opencode/pull/39217) fix(app): use blue for server status attention | Unified blue accent for MCP auth/client registration actions; preserves orange/red/green for errors/health | Visual consistency |
| [#39216](https://github.com/anomalyco/opencode/pull/39216) test(core): add native watcher command reload test | E2E test for config file write → watcher → Config → command registry chain (closes #37429 acceptance) | Regression safety |
| [#39045](https://github.com/anomalyco/opencode/pull/39045) fix(tui): prevent overlapping frames in update preflight animation | Resolves frame callback race causing renderer to proceed before SolidJS batch completes | TUI render stability |
| [#39201](https://github.com/anomalyco/opencode/pull/39201) docs(providers): add Rapid-MLX as local OpenAI-compatible provider | Documents Apple Silicon MLX inference server alongside llama.cpp, LM Studio, Ollama | Provider ecosystem coverage |

---

## 5. Feature Request Trends

1. **Usage & Billing Transparency** — `/usage` endpoint, subscription status visibility, balance tracking (#9281, #37790, #39215)
2. **Project/Session Portability** — Move/rename folders without history loss; change working directory mid-session (#29703, #39199)
3. **Model/Provider Management** — Unified model catalog updates (Nvidia Nim, Rapid-MLX), per-model parameter filtering (Kimi k3 temperature) (#38865, #39214, #39201)
4. **Extensibility & Skills** — Global skill discoverability, MCP config schema alignment (`env` vs `environment`), plugin hot-reload (#32181, #39135, #39224)
5. **Desktop Polish** — Theme persistence, scroll behavior, fullscreen macOS quirks (#39205, #24760, v1.18.7 fixes)

---

## 6. Developer Pain Points

- **Subscription Activation Failures**: Multiple reports of successful Stripe payments not reflected in workspace ("Insufficient balance", HTTP 401 upstream) — blocks paid feature access entirely.
- **Model Regressions Post-Update**: DeepSeek V4 Flash "lazy"/incomplete responses after v1.18.4; identical duplicate outputs (#25270) persisting for months.
- **AutoScroller Crash in v1.18.7**: Fatal renderer error on Settings/sortable views — regression introduced in latest release, multiple duplicate issues filed.
- **Cross-TUI Contamination**: Shared `opencode serve` leaks branch/events across directory-attached TUIs.
- **Opaque Startup Errors**: Cryptic "Missing required parameter" messages with no actionable context.
- **Infinite Tool Loops**: Agent enters unbounded exec/tool-call cycles requiring manual kill.
- **Config Watcher Gaps**: Changes inside config directories not triggering reloads (addressed in #37429/#39216 but recently fixed).

---

*Generated from github.com/anomalyco/opencode data as of 2026-07-28*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-28

## Today's Highlights
The Pi ecosystem saw intense bug-fix velocity over the last 24 hours, with 30+ issues closed and 20 PRs merged. Key themes: **provider/auth reliability** (Bedrock, Copilot, Z.AI, Anthropic headers), **extension API surface expansion** (scoped models, markdown rendering hooks), and **TUI performance/stability** (terminal scroll jumps, re-render thrashing, markdown crashes). The highest-engagement open issue (#5263) requests making in-session model changes ephemeral by default—reflecting growing demand for predictable session isolation.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5263](https://github.com/earendil-works/pi/issues/5263) | **Make in-session model/thinking changes ephemeral by default** | Highest-engagement open issue (10 👍, 10 comments). Proposes a `/settings` "Default model" entry as the single source of truth for global defaults, avoiding accidental cross-session pollution. | Strong consensus; design discussion ongoing |
| [#6747](https://github.com/earendil-works/pi/issues/6747) | **API for enhancing agent message markdown** | Enables extensions to mutate message *rendering* without touching LLM content—e.g., LaTeX formula rendering. Unlocks rich UX extensions. | 8 comments, 2 👍; marked `inprogress` |
| [#7157](https://github.com/earendil-works/pi/issues/7157) | **OpenCode Go provider displays as "OpenCode Zen Go"** | Cosmetic but confusing; `pi --list-models` shows wrong name. Fix merged in [#7173](https://github.com/earendil-works/pi/pull/7173). | 5 comments; quick fix deployed |
| [#6970](https://github.com/earendil-works/pi/issues/6970) | **GitHub Copilot Plugin vs OAuth token invalidation** | Pi’s use of the Copilot *Plugin* (vs OAuth) causes token clashes when running alongside `copilot-lsp`/Neovim. Root cause identified; mitigation tracked. | 4 comments, 1 👍; closed with analysis |
| [#7161](https://github.com/earendil-works/pi/issues/7161) | **anthropic-messages never sends `x-client-request-id`** | Breaks gateway session affinity for multi-account Claude proxies. Fix merged in [#7172](https://github.com/earendil-works/pi/pull/7172). | 4 comments; critical for proxy users |
| [#7143](https://github.com/earendil-works/pi/issues/7143) | **Z.AI providers send `max_completion_tokens` (ignored by Z.AI)** | Z.AI only honors `max_tokens`; Pi’s default 65k cap truncated long reasoning. Fix merged in [#7174](https://github.com/earendil-works/pi/pull/7174). | 4 comments; provider-specific bug |
| [#7132](https://github.com/earendil-works/pi/issues/7132) | **Set `AI_AGENT=pi` for child process attribution** | Aligns with emerging standard (Claude Code, etc.) so spawned tools know they’re launched by Pi. Simple, low-risk addition. | 4 comments; closed (no action yet) |
| [#7198](https://github.com/earendil-works/pi/issues/7198) | **Markdown renderer crashes on nested email quotes** | `RangeError: Maximum call stack size exceeded` in `Markdown.renderToken()`—crashes active sessions and blocks resume. High severity for email-heavy workflows. | 2 comments; closed (untriaged) |
| [#7194](https://github.com/earendil-works/pi/issues/7194) | **Full re-render every 1s when tool card scrolls outside viewport** | Major perf pain point for remote sandbox users (PTY forwarding). Root cause: viewport tracking triggers global repaint. | 1 comment; closed (untriaged) |
| [#7187](https://github.com/earendil-works/pi/issues/7187) | **Silent crash from inconsistent error handling/schema validation** | A single bad package manifest (typo) killed *all* chats/scheduled sessions for a user. Highlights lack of fault isolation in package resolution. | 1 comment; closed (untriaged) |

---

## Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#7163](https://github.com/earendil-works/pi/pull/7163) | **feat: search index sqlite** | Feature | Adds `SessionRepo.search()` with SQLite FTS5 virtual table for full-text session search. JSONL/memory backends fall back to in-memory scan. Foundation for future "search across history" UX. |
| [#7176](https://github.com/earendil-works/pi/pull/7176) | **fix: prefer configured Bedrock profile over ambient AWS keys** | Bug Fix | Bedrock profile set via Pi auth was ignored when `AWS_ACCESS_KEY_ID` env vars existed. SDK’s explicit credentials override profile; fix ensures profile wins. |
| [#6881](https://github.com/earendil-works/pi/pull/6881) | **feat: use provider-reported cost when responses include it** | Feature | Reads `usage.cost` / `cost_details.upstream_inference_cost` from OpenAI/Anthropic responses; falls back to catalog rates. Enables accurate BYOK cost tracking. |
| [#7191](https://github.com/earendil-works/pi/pull/7191) | **feat: expose `ctx.scopedModels` to extensions** | Feature | Extensions can now read the session’s resolved model set (from `--models`/`enabledModels`), not just `ctx.model`. Unlocks model pickers in companion apps. |
| [#7178](https://github.com/earendil-works/pi/pull/7178) | **feat: show status when toggling tool-output expansion (Ctrl+O)** | UX | Mirrors existing thinking-block toggle feedback (`Thinking blocks: hidden/visible`). Small but high-visibility polish. |
| [#7168](https://github.com/earendil-works/pi/pull/7168) | **feat: auth print** | Feature | Adds `pi auth print-api-key` and `print-bearer-token` (refreshes if expired) for scripting/debugging provider credentials. |
| [#7169](https://github.com/earendil-works/pi/pull/7169) | **fix: dedupe byte-identical context files** | Bug Fix | `loadProjectContextFiles` now deduplicates by *content hash*, not just path. Fixes double-loading when worktree and repo root share identical `AGENTS.md`. |
| [#7184](https://github.com/earendil-works/pi/pull/7184) | **fix: strip multimodal media markers from tool results** | Bug Fix | Removes stray `|image|`/`<|image|>` markers when no bitmap data exists—prevents tokenizer crashes (`mtmd_tokenize: error: media markers exceed bitmaps`). |
| [#7117](https://github.com/earendil-works/pi/pull/7117) | **feat: add extension creation eval** | Testing | Replaces generic eval with Coding Agent smoke test; adds `AgentSession` adapter for `vitest-evals`. Normalizes Pi messages/tool calls for future LLM-judged evals. |
| [#7022](https://github.com/earendil-works/pi/pull/7022) | **WIP: guard tree navigation during responses** | Bug Fix (PoC) | Blocks `/tree` navigation while agent streams to prevent state corruption. Maintainer feedback awaited; previous similar issues auto-closed. |

---

## Feature Request Trends
1. **Ephemeral session-scoped configuration** — #5263 (10 👍) leads a cluster asking for in-session model/thinking changes to *not* persist globally. Users want a clear "Default model" setting as the single source of truth.
2. **Extension API depth** — Requests for `pre_response`/`before_send_message` hooks (#7137), `ctx.scopedModels` (#7192), markdown render mutation (#6747), and terminal color-scheme events (#7197) show extensions evolving from "skills" to full co-pilots.
3. **Provider-agnostic auth/credential workflows** — `auth print` (#7168), read-only `auth check` (#7152), Bedrock `credential_process` support (#7170), and Copilot OAuth vs Plugin clarity (#6970) indicate friction in multi-provider, multi-device setups.
4. **Session search & history** — SQLite FTS5 index (#7163) is the first step; users will likely ask for semantic search, cross-session grep, and LLM-powered recall.
5. **Cost observability** — Provider-reported cost (#6881) + catalog fallback addresses BYOK/gateway users who need real-time spend visibility.

---

## Developer Pain Points
| Area | Recurring Frustrations |
|------|------------------------|
| **Terminal/TUI stability** | Random scroll-to-top jumps (#5023), 1 Hz full re-renders on tool-card scroll (#7194), markdown renderer stack overflow on nested quotes (#7198), `visibleWidth` cache thrashing on large buffers (#7196). |
| **Provider integration quirks** | Wrong display names (#7157), ignored token parameters (#7143), missing request IDs for session affinity (#7161), ambient AWS keys overriding explicit profiles (#7176), Copilot Plugin vs OAuth token clobbering (#6970). |
| **Extension loading/reliability** | Symlinked extension dirs ignored (#7195), failed git installs leave poisoned directories (#7189), peerDependencies installed for git but not npm (#7182), single bad manifest crashes *all* sessions (#7187). |
| **Session/model state leakage** | In-session model changes persisting globally (#5263), duplicate messages after startup session switch (#7110), fork selector crashes on `null`

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-28

## 1. Today's Highlights
The project is in a heavy CI stabilization phase with **12+ automated E2E failure issues** filed in the last 24 hours, while core contributors push fixes for quota-exhaustion handling, subagent hangs, and git-branch staleness. Two non-production DSW benchmark prereleases were published (SWE-bench Verified: **376/500 resolved**, status **QUARANTINED**). Feature work continues on enterprise external-memory profiles, GitLab channel adapter, and web-shell git UX.

## 2. Releases
| Release | Type | Key Notes |
|---------|------|-----------|
| `dsw-manual-poc-20260727-2` / `-1` | Benchmark prerelease | Non-production DSW manual POCs against `v0.20.0-nightly.20260722.b98306b7e`. SWE-bench Verified: **376 resolved, 116 unresolved, 1 exec** — **QUARANTINED** status. |

## 3. Hot Issues (10 Noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7585](https://github.com/QwenLM/qwen-code/issues/7585) | **Proposal: Direct External Context Provider Profile** | Enterprise-grade, provider-neutral extension point for shared context without core changes. | 9 comments, active design discussion |
| [#7449](https://github.com/QwenLM/qwen-code/issues/7449) | **Enterprise External-Memory Integration Profile** | Complementary to #7585; documentation-first, incremental compat tests. | 6 comments, triage feedback incorporated |
| [#7841](https://github.com/QwenLM/qwen-code/issues/7841) | **Quota-exhausted 429s retry silently** | Permanent quota errors misclassified as transient → silent retries, no user feedback. | 3 comments, P2, fix merged in [#7842](https://github.com/QwenLM/qwen-code/pull/7842) |
| [#7835](https://github.com/QwenLM/qwen-code/issues/7835) | **Subagent `ask_user_question` hangs forever** | Sub-agents can ask but main agent never forwards → deadlock. | 3 comments, P2, fix in [#7882](https://github.com/QwenLM/qwen-code/pull/7882) |
| [#7832](https://github.com/QwenLM/qwen-code/issues/7832) | **YOLO mode: mid-stream socket close not retried** | Large generations (>500 lines) fail after 3–5 min SSE; blocks headless automation. | 3 comments, P1, DashScope gateway timeout |
| [#7831](https://github.com/QwenLM/qwen-code/issues/7831) | **ECONNRESET at ~150k token context** | Long-context streaming breaks reliably; limits practical session length. | 3 comments, P2, `model/long-context` label |
| [#7828](https://github.com/QwenLM/qwen-code/issues/7828) | **Git branch display stale after switch** | `fs.watch` on `.git/logs/HEAD` drops events on NFS/FUSE/overlayfs. | 3 comments, fix in [#7830](https://github.com/QwenLM/qwen-code/pull/7830) |
| [#7819](https://github.com/QwenLM/qwen-code/issues/7819) | **`--safe-mode` drops ACP `mcpServers` unconditionally** | Breaks MCP for ACP-driven safe-mode sessions; over-broad filtering. | 3 comments, P2, scope/cli |
| [#6762](https://github.com/QwenLM/qwen-code/issues/6762) | **Skill Context Lifecycle Management** | SKILL.md bodies load forever — no unload/compress/swap → context bloat. | 5 comments, P2, roadmap/context-performance |
| [#7697](https://github.com/QwenLM/qwen-code/issues/7697) | **VS Code cannot connect to Unity MCP (Claude works)** | Recurring VS Code extension + MCP interop gap; blocks Unity workflows. | 5 comments, welcome-pr |

## 4. Key PR Progress (10 Important)

| # | Title | Type | Impact |
|---|-------|------|--------|
| [#7842](https://github.com/QwenLM/qwen-code/pull/7842) | **Fast-fail permanent quota-exhaustion 429s** | Bug fix | Stops silent retries; surfaces friendly error on first 429 with reset time. |
| [#7882](https://github.com/QwenLM/qwen-code/pull/7882) | **Exclude `ask_user_question` from subagent tools** | Bug fix | Resolves #7835; prevents subagent hangs by removing unanswerable tool. |
| [#7830](https://github.com/QwenLM/qwen-code/pull/7830) | **Polling fallback for git branch name** | Bug fix | Fixes #7828; adds 5s polling when `fs.watch` fails on exotic filesystems. |
| [#7484](https://github.com/QwenLM/qwen-code/pull/7484) | **Bridge tool-result images for text-only models** | Feature | Unified routing for images from built-in/MCP/extension tools → text-only models. |
| [#7877](https://github.com/QwenLM/qwen-code/pull/7877) | **External-context: submitted-prompt auto recall** | Feature | Opt-in `UserPromptSubmit` hook for deterministic admin-installed recall. |
| [#7826](https://github.com/QwenLM/qwen-code/pull/7826) | **Dispatch GitHub notifications by reason** | Feature | Routes mentions/reviews/assignments correctly; correlates with latest event. |
| [#7862](https://github.com/QwenLM/qwen-code/pull/7862) | **GitLab polling channel adapter** | Feature | New `@gitbeaker/rest`-based adapter; mirrors GitHub adapter architecture. |
| [#7731](https://github.com/QwenLM/qwen-code/pull/7731) | **Web-shell: git branch picker, commit dialog, create PR** | Feature | IntelliJ-style popover with search, checkout, new branch, commit, PR flow. |
| [#7836](https://github.com/QwenLM/qwen-code/pull/7836) | **Serve: caller-supplied `sessionId` in POST /session** | Bug fix | Fixes silent drop; threads `sessionId` through REST→bridge→agent chain. |
| [#7884](https://github.com/QwenLM/qwen-code/pull/7884) | **Triage: retry transient `npm ci` before blaming PR** | CI fix | Reduces flaky sandbox failures; one retry in both sandbox lanes. |

## 5. Feature Request Trends
1. **Enterprise External Memory/Context** — Two detailed proposals (#7585, #7449) for provider-neutral, admin-controlled context profiles with documentation-first rollout.
2. **Channel Ecosystem Expansion** — GitHub reason-based dispatch (#7807/#7826), new GitLab adapter (#7862), DingTalk image delivery (#7687).
3. **Web-Shell Git UX** — Branch picker, commit dialog, PR creation (#7731), native folder picker (#7849), history isolation (#7810).
4. **Context/Token Management** — Skill lifecycle (#6762), maxDepth for flat memory imports (#7851), long-context stability (#7831).
5. **Subagent/Orchestration Control** — Preventing unanswerable tool calls (#7835/#7882), Todo Stop Guard hardening (#7821).

## 6. Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **CI/E2E flakiness** | 12+ automated failure issues in 24h (`qwen-main-ci-failure` label) | Very High |
| **VS Code + MCP interop** | #6414, #7056, #7697 — connection failures, Unity MCP broken | High |
| **Long-session stability** | Socket closes (YOLO), ECONNRESET at 150k tokens, quota 429 misclassification | High |
| **Terminal state leaks** | Kitty flags left enabled (#7779), SIGTERM/SIGHUP leaves alt-screen active (#7781) | Medium |
| **Subagent deadlocks** | `ask_user_question` with no answer path (#7835), safe-mode over-filters MCP (#7819) | Medium |
| **Git UI staleness** | Branch name stuck after switch due to `fs.watch` gaps (#7828) | Medium |
| **Cost reporting** | `$0.00` shows as `N/A` instead of explicit zero (#7784) | Low |

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-28

## 1. Today's Highlights
The project is converging on **v0.9.2 release candidate** with a flurry of merged PRs covering onboarding, fleet management, session persistence, billing accuracy, and visual polish. Two critical runtime fixes landed: **tool sandboxing for sub-agents** (#4042) and **O(N²) markdown streaming re-parse elimination** (#3897). A new dead-code ratchet PR (#4938) begins addressing 464 `#[allow(dead_code)]` attributes that have been masking drift.

---

## 2. Releases
No new releases in the last 24h. The v0.9.2 release candidate integration is underway via umbrella PR **#4911** (82 commits ahead of `main`).

---

## 3. Hot Issues (10 Noteworthy)

| Issue | Status | Why It Matters | Community Signal |
|-------|--------|----------------|------------------|
| [#4042](https://github.com/Hmbown/CodeWhale/issues/4042) Tool sandboxing for sub-agents | CLOSED | Enforces `tool_restrictions` across sessions, sub-agents, Fleet workers, MCP servers — a security boundary for multi-agent workflows. | 20 comments, cross-cutting `security`, `sandbox`, `subagents`, `lane-fleet` labels |
| [#998](https://github.com/Hmbown/CodeWhale/issues/998) Incomplete text display — add hover tooltip | OPEN | UX gap: truncated copy lacks hover expansion; affects readability in tight terminal panes. | 10 comments, 1 👍, `enhancement` |
| [#4526](https://github.com/Hmbown/CodeWhale/issues/4526) StepFun Plan / OpenCode Go dedicated endpoints | CLOSED | Adds billing-route selection (PAYG vs Step Plan) before key entry; mirrors Kimi plan-tier pattern. | 6 comments, `documentation`, `enhancement`, `ux`, `v0.9.2` |
| [#3983](https://github.com/Hmbown/CodeWhale/issues/3983) Make Work state model-visible on parent turns | CLOSED | Exposes checklist + strategy context to parent model turns — critical for sub-agent fork-state fidelity. | 5 comments, `bug`, `documentation`, `agent-ready`, `v0.9.2` |
| [#4698](https://github.com/Hmbown/CodeWhale/issues/4698) Complete default skill-pack routing metadata | CLOSED | Finalizes v5 skill-pack routing docs and opt-in live smoke tests; closes v0.9.1 follow-ups. | 4 comments, `bug`, `documentation`, `agent-ready`, `tui`, `v0.9.2` |
| [#2342](https://github.com/Hmbown/CodeWhale/issues/2342) Click-to-preview files in output | OPEN | High-value UX: avoid context-switch to file tree; directly open referenced files from transcript. | 4 comments, `enhancement` |
| [#4785](https://github.com/Hmbown/CodeWhale/issues/4785) 464 `#[allow(dead_code)]` hiding drift | OPEN | Compiler structurally unable to report dead code; 143 files affected. Ratchet PR #4938 lands first slice. | 3 comments, `documentation` |
| [#4797](https://github.com/Hmbown/CodeWhale/issues/4797) Two pricing systems, unpriced cache writes, opaque `/cost` | CLOSED | 2k-line hand-maintained pricing.rs; cache writes unpriced; CNY accumulated not derived. Partially fixed on `main`. | 3 comments, `bug` |
| [#3897](https://github.com/Hmbown/CodeWhale/issues/3897) O(N²) markdown re-parse on every stream chunk | CLOSED | Full message re-parsed per chunk during streaming; fixed via incremental rendering. | 3 comments, `enhancement`, `agent-in-progress`, `performance`, `lane-perf` |
| [#4764](https://github.com/Hmbown/CodeWhale/issues/4764) `edit_file` fails on CRLF files (Windows) | OPEN | Exact-match search breaks when target uses `\r\n`; blocks Windows users on basic edits. | 2 comments, `bug` |

*New today:* **#4939** (/cost decomposition by route/token class, derive CNY), **#4936** (missing `/rc` runner-enrollment command), **#4934** (website theming critique).

---

## 4. Key PR Progress (10 Important)

| PR | Status | Summary |
|----|--------|---------|
| [#4938](https://github.com/Hmbown/CodeWhale/pull/4938) | OPEN | Lands bounded dead-code slice + CI ratchet for #4785; sweep proper stays in v0.9.3. |
| [#4937](https://github.com/Hmbown/CodeWhale/pull/4937) | OPEN | Finalizes stale shell transcript cells: static stale status, suppresses sidebar spinner for dead background jobs. |
| [#4935](https://github.com/Hmbown/CodeWhale/pull/4935) | OPEN | Ambient jellyfish silhouette fix: `(v_v)`/`(v.v)` read as a face; replaced with non-anthropomorphic frames. |
| [#4912](https://github.com/Hmbown/CodeWhale/pull/4912) | CLOSED | v0.9.2 docs: `/guide`, `/vocabulary` routes, homepage getting-started path, a11y landmarks, media manifest. |
| [#4913](https://github.com/Hmbown/CodeWhale/pull/4913) | CLOSED | Provider-free wire-matrix tests for 4 benchmark routes (GLM-5.2, GLM-5-Turbo, kimi-k2, StepFun) via wiremock. |
| [#4931](https://github.com/Hmbown/CodeWhale/pull/4931) | OPEN | Migrates QA PTY harness from `vt100` to `rio-vt` (Rio's terminal engine) for fidelity. |
| [#4904](https://github.com/Hmbown/CodeWhale/pull/4904) | CLOSED | Composer fixes: respects `mention_menu_limit=0`, resolves git mentions once (regression from #4899). |
| [#4929](https://github.com/Hmbown/CodeWhale/pull/4929) | CLOSED | ACP: preserves numeric JSON-RPC IDs (fixes avante.nvim Lua table key mismatch). |
| [#4928](https://github.com/Hmbown/CodeWhale/pull/4928) | CLOSED | Adds `thinking_default_expanded` setting — thinking blocks render expanded by default (helps SSH/tmux where Space is captured). |
| [#4927](https://github.com/Hmbown/CodeWhale/pull/4927) | CLOSED | Billing overhaul: dispatch-receipt classification, Moonshot/MiniMax product truth, honest ceilings, route-scoped env URLs. |

*Also merged today:* **#4926** (onboarding: remote mode matrix, offline explore, appearance step), **#4924** (fleet: saved exact Fleets + reasoning Router), **#4923** (TUI visual slices: luminance audit, selection vocab, focus texture, opt-in sound), **#4922** (sessions: persistent rail, opt-in auto-resume), **#4921** (StepFun billing-route setup).

---

## 5. Feature Request Trends
1. **Observability & Cost Transparency** — Decompose `/cost` by route, token class, cache write; derive CNY from USD rates (#4939, #4797).
2. **Sub-Agent & Fleet Governance** — Tool sandboxing per context (#4042), saved exact Fleets with reasoning Router (#4924), permission/shell ceilings.
3. **Onboarding & Visual Proof** — Real session recording for site/README (#4906), getting-started path, offline explore mode (#4926).
4. **TUI Ergonomics** — Hover tooltips for truncated text (#998), click-to-open file previews (#2342), thinking blocks expanded by default (#4925/#4928).
5. **Provider Extensibility** — Dedicated endpoints for StepFun Plan, OpenCode Go, Kimi tiers (#4526, #4921).
6. **Session Durability** — Persistent rail, opt-in auto-resume, archive/unarchive CLI (#4922).
7. **Accessibility & Theming** — Contrast audit (3:1 floor), selection vocabulary, focus texture, opt-in sound (#4923), website theming (#4934).

---

## 6. Developer Pain Points
- **SSH/tmux key capture** — Space key (expand thinking) often intercepted; `thinking_default_expanded` mitigates (#4925, #4928).
- **Windows CRLF handling** — `edit_file` exact-match fails on `\r\n` files; blocks basic editing (#4764).
- **Streaming markdown performance** — O(N²) full re-parse per chunk; fixed but historically painful (#3897).
- **Dead code masking drift** — 464 `#[allow(dead_code)]` across 143 files; compiler cannot signal rot (#4785).
- **Cost model fragmentation** — Two pricing systems (pricing.rs + OpenRouter), unpriced cache writes, CNY accumulated not derived (#4797, #4939).
- **CI flakiness** — Web workflow fails on `main` push due to deploy trigger conflict (#4907).
- **Missing documented command** — Product instructs `/rc` for runner enrollment; runtime lacks it (#4936).
- **Stale shell transcripts** — Restored running shell cells show live spinner after job death; now finalized (#4937).
- **No visual product demo** — Site/README describe motion-heavy TUI in prose only (#4906).
- **Incomplete text affordances** — Truncated copy lacks hover expansion; forces widen/copy workflow (#998).

---

*Data source: github.com/Hmbown/DeepSeek-TUI (issues/PRs tracked under Hmbown/CodeWhale). Digest covers activity updated 2026-07-27 → 2026-07-28.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*