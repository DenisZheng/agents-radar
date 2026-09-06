# AI CLI Tools Community Digest 2026-09-06

> Generated: 2026-09-06 02:22 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-09-06)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **two tiers**: a top tier of heavily resourced, enterprise-backed tools (Claude Code, Codex, Gemini CLI, Copilot CLI, OpenCode) shipping nightly/weekly with dedicated platform teams, and a second tier of smaller/community-driven projects (Kimi, Pi, Codewhale) iterating rapidly but with narrower contributor bases. Windows Desktop stability has emerged as the **single largest cross-cutting reliability crisis** — every tool with a desktop surface reports orphaned processes, sandbox mismatches, or TUI rendering regressions on Windows. Meanwhile, **extensibility architectures are converging** toward plugin/hook systems (Claude Code Function Hooks, OpenCode ACP v2, Pi skill mid-sentence invocation, Codewhale Fleet menu), and **session persistence / checkpointing** (/rewind, timeline history, Auto Memory) is the most demanded user-facing capability. Model-provider abstraction layers are thickening as tools race to support GPT-6 Astra, Gemini Flash, Bedrock, and custom OpenAI-compatible endpoints simultaneously.

---

## 2. Activity Comparison (2026-09-06)

| Tool | Repo | Issues Updated (24h) | PRs Updated (24h) | Release Today | Top Issue Engagement |
|------|------|---------------------|-------------------|---------------|---------------------|
| **Claude Code** | anthropics/claude-code | 10 (hot) + dozens more | 2 | ❌ | #27302: **369 👍, 242 comments** (multi-account connectors) |
| **OpenAI Codex** | openai/codex | 10 (hot) + more | 10+ (batch from `copyberry[bot]`) | ❌ | #11626: **212 👍, 41 comments** (`/rewind` checkpoint) |
| **Gemini CLI** | google-gemini/gemini-cli | 10 (hot, triaged P1/P2) | 10 | ✅ Nightly `v0.60.0-nightly.20260906` | #22323: 13 comments, 2 👍 (subagent misreporting) |
| **GitHub Copilot CLI** | github/copilot-cli | 10 (hot, several critical regressions) | 0 | ❌ | #1857: **28 👍, 11 comments** (cancel enqueued messages) |
| **Kimi Code CLI** | MoonshotAI/kimi-cli | 2 | 0 | ❌ | #2635: 0 👍 (VS Code char-drop, filed today) |
| **OpenCode** | anomalyco/opencode | 10 (hot) | 10 | ❌ | #35009: 10 comments, 2 👍 (post-update resource spike) |
| **Pi** | earendil-works/pi | 10 (hot) | 10 | ✅ `v0.85.1` (defective — missing deps) | #7547: **52 comments** (Windows support strategy) |
| **Codewhale** (fka DeepSeek TUI) | Hmbown/Codewhale | 10 (hot) | 10 | ✅ `v0.9.12` (rebrand release) | #5573: 24 comments (v0.9.12 milestone tracker) |
| **Qwen Code** | QwenLM/qwen-code | — | — | — | ⚠️ Digest generation failed |

**Observations**: Top-tier tools average 8–10 hot issues and 5–10 active PRs daily. Nightly releases are standard for Gemini CLI; Pi and Codewhale shipped versions today but both introduced regressions. Kimi CLI shows markedly lower community signal.

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Demanding It | Specific Needs |
|-------------|-------------------|----------------|
| **Atomic session checkpoint/restore** | Codex (`/rewind` #11626), Claude Code (auto-continue #92418), Gemini CLI (persistent task files #18836), OpenCode (timeline history #47552), Copilot CLI (session resilience #3498) | Restore **both** chat context **and** workspace edits from a single checkpoint; git-like semantics; survive upgrades/crashes |
| **Plugin / Hook extensibility** | Claude Code (Function Hooks #91870), OpenCode (ACP v2 #44524, session lifecycle hooks #28695), Pi (mid-sentence skill invoke #9214), Codewhale (Fleet menu #5888, computer-use plugins) | Middleware-style runtime modification; safe composition; plugin state survival across session fork/restore |
| **Multi-account / Multi-tenant auth** | Claude Code (Connectors #27302, 369 👍), Codex (WSL/Windows path mapping #29639), Copilot CLI (org policy opacity #4272), OpenCode (Copilot Enterprise models #34030), Pi (provider routing bugs) | Native switching between personal/org GitHub, AWS/GCP accounts, multiple API keys without re-auth; per-project provider config |
| **Windows-first Desktop parity** | **All desktop tools**: Claude Code (5+ critical Win bugs), Codex (5+ Win bugs), Copilot CLI (25H2 sandbox #4652), Pi (#7547, #6300), Codewhale (4 issues + 3 PRs in 24h) | Fix orphaned job objects, TUI input rendering, sandbox/file-mount semantics, IME support, line-ending preservation |
| **Structured output / tool-call reliability** | Gemini CLI (128-tool cap #24246), OpenCode (retryCount ignored #25430, Gemini plain-text tool calls #15315), Pi (edit truncation #9212), Copilot CLI (JSON-RPC corruption #4721) | Schema enforcement, retry honors, streaming parse resilience, provider-normalized tool calling |
| **Model transparency & policy visibility** | Copilot CLI (org policy greying models #4272, silent model switch #4732), Claude Code (Fable 5.1 defaulting to Bash #91477), OpenCode (custom reasoning paths #35732), Pi (gateway routing bugs) | Clear UI for which model is active, why, and what policy constraints apply; no silent fallbacks |
| **Resource / memory bounds** | OpenCode (1 GB RSS / 75 GB virtual #35009), Copilot CLI (Linux OOM #4725), Claude Code (12.4 GB RSS governor bug #92059), Codex (160% CPU rollout tracker #38611) | Configurable compaction thresholds, async stats aggregation, leak-free long-running sessions |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | OpenCode | Pi | Codewhale |
|-----------|-------------|--------------|------------|-------------------|----------|-----|-----------|
| **Primary Differentiator** | Anthropic model integration + Connector ecosystem | Voice/real-time primitives + `/rewind` UX | AST-aware tooling + Auto Memory security | GitHub-native (PRs, Actions, Enterprise) | ACP v2 protocol leadership + timeline history | Provider-agnostic gateway + Nix reproducibility | Crate modularity + computer-use / Fleet agents |
| **Target User** | Polyglot cloud-native devs; teams needing multi-account | Voice-first / mobile developers; session-history power users | Security-conscious teams; token-efficiency focus | GitHub Enterprise orgs; repo-centric workflows | Protocol implementers; enterprise/custom provider users | Power users wanting provider freedom + offline/reproducible | Agent-fleet orchestrators; Windows/Chinese localization needs |
| **Technical Approach** | TypeScript/Node; security-patterns.json; Connector OAuth | Rust + Bazel; WebRTC/Opus/CPAL; native voice SDK | Go + React TUI; Seatbelt sandbox; AST layer | TypeScript/Node; MSIX packaging; GitHub API deep link | Rust; ACP v2 spec; timeline CRDTs; Bedrock IMDS auth | TypeScript monorepo; Nix flakes; LLM Gateway router | Rust workspace (21 crates); HarmonyOS + Win32 backends |
| **Extensibility Model** | Function Hooks (middleware `$`/`next()`) — proposed | ACP (Agent Client Protocol) — implementing v2 | Skills + subagents; `excludeTools` policy | Local plugins + MCP servers | ACP v2 native; session lifecycle hooks | Skills + prompt templates; namespace isolation | Fleet agents + computer-use plugins; custom themes |
| **Release Cadence** | Irregular (no release 24h); high-impact PRs only | Irregular; infrastructure-heavy PR batches | **Daily automated nightlies** | Irregular; desktop/runtime coupled | Irregular; architectural epics drive schedule | Versioned (v0.85.1) but packaging regressions | Versioned (v0.9.12 rebrand); crate publish gates |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Mature** | **Claude Code**, **OpenAI Codex**, **Gemini CLI** | • Claude Code: 369 👍 on top issue; 242 comments = deepest engagement<br>• Codex: 212 👍 on `/rewind`; 20+ PRs in 24h (voice infra investment)<br>• Gemini CLI: Daily nightlies; P1 triage labels; 10 PRs/day; security hardening active |
| **High Momentum / Maturing** | **OpenCode**, **GitHub Copilot CLI** | • OpenCode: 10 PRs/day; ACP v2 leadership; enterprise provider focus<br>• Copilot CLI: Critical regression cluster post-2.98.0 shows wide deployment; 28 👍 on queue control |
| **Rapid Iteration / Niche** | **Pi**, **Codewhale** | • Pi: 10 PRs/day; Nix + provider gateway innovation; but packaging regressions 2 releases straight<br>• Codewhale: Rebrand + crate decomposition (21 crates); Windows parity push; Chinese I18n debt |
| **Low Signal / Early** | **Kimi Code CLI** | • Only 2 issues updated; 0 PRs; VS Code extension char-drop is sole fresh signal |

**Key Insight**: Momentum correlates with **dedicated platform teams** (Anthropic, OpenAI, Google, GitHub, Anomaly) vs. smaller orgs. Gemini CLI’s automated nightly + triage labels indicate the most mature *process*. Claude Code has the highest *community passion* (engagement volume). OpenCode leads on *protocol standardization* (ACP v2).

---

## 6. Trend Signals (Developer Decision Value)

| Trend | Signal Strength | Implication for Developers |
|-------|----------------|----------------------------|
| **Windows is the new Linux** | ★★★★★ (Every desktop tool has 3+ critical Win bugs) | **Do not assume Windows parity.** Test on Windows daily; expect sandbox, TUI, and process-lifecycle bugs. Favor tools with explicit Windows CI (Codex Bazel MSVC targets, Codewhale Win32 backend, Copilot CLI 25H2 tracking). |
| **Checkpoint/Restore → Table Stakes** | ★★★★★ (6/8 tools actively building) | **Design workflows around atomic snapshots.** Tools without `/rewind`-equivalent will feel broken within 6 months. Evaluate: Does the tool restore *both* chat + filesystem? Survive upgrade? |
| **Provider Abstraction > Model Loyalty** | ★★★★★ (All tools routing 4+ providers) | **Avoid lock-in to single model API.** Invest in provider-agnostic config (OpenCode ACP, Pi Gateway, Claude Connectors). Expect tools to silently swap models (Claude Code Fable→Opus, Copilot GPT-5 mini). |
| **Protocol Wars: ACP vs. MCP vs. Custom Hooks** | ★★★★☆ (OpenCode ACP v2, Claude Function Hooks, Pi skills, Codewhale Fleet) | **Standardize on ACP v2 for interop.** OpenCode is the reference implementation; Codex and others adopting. Custom hook systems (Claude, Pi) risk fragmentation. |
| **Security Hardening Moves Left** | ★★★★☆ (Gemini Auto Memory redaction, Claude security globs, Pi `PI_OFFLINE` bugs) | **Audit toolchain for secret leakage.** Gemini’s pre-redaction transcript bug (#26525) shows auto-memory is a new attack surface. Demand deterministic redaction, offline modes, audit logs. |
| **Resource Governance Becomes Configurable** | ★★★☆☆ (OpenCode stats async, Claude MEMORY.md threshold, Copilot auto-compact TTL) | **Expect knobs for compaction, context window, RSS limits.** Long-running agents will OOM without them. Tools exposing these (OpenCode, Claude) gain ops trust. |
| **Voice / Multimodal as Next Frontier** | ★★★☆☆ (Codex WebRTC/Opus batch, Pi async tools, Codewhale voice STT design) | **Experimental now; production in 12–18 months.** Codex’s

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-06 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator: fix run_eval.py 0% recall` | Critical bug fix: `run_eval.py` reports `recall=0%` for every skill description, breaking the description-optimization loop (`run_loop.py`, `improve_description.py`). Also fixes Windows stream reading, trigger detection, parallel workers. | 10+ independent reproductions; core tooling broken since #556. Without this, skill descriptions cannot be reliably optimized. | **Open** (Created 2026-06-10) |
| 2 | **[#1628](https://github.com/anthropics/skills/pull/1628)** `Hivemind: Zero-Cost Multi-Agent Orchestration` | Delegates mechanical work to headless **opencode** workers on free models; Claude Code remains sole planner/reviewer/merger. Preserves expensive model context. | Novel architecture: "expensive model's context is the scarce resource, not its intelligence." Zero-cost multi-agent pattern. | **Open** (2026-08-21) |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` (v1.3.0) | Mechanical verification → four-dimension reasoning audit (correctness, completeness, consistency, clarity) in damage-severity priority. Universal across stacks/models. | Two-phase gate: file existence check first, then reasoning quality. Addresses silent hallucination of outputs. | **Open** (2026-06-28) |
| 4 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing stack: Trophy model philosophy, AAA pattern, React Testing Library, contract testing, E2E (Playwright), mutation testing, flakiness detection, CI integration. | Fills a gap: no existing skill covers full testing philosophy → implementation → CI pipeline. | **Open** (2026-03-22) |
| 5 | **[#568](https://github.com/anthropics/skills/pull/568)** `servicenow` | Broad ServiceNow platform assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, Vulnerability Response, SecOps, IntegrationHub. Not just scripting—architecture & governance. | Enterprise-grade scope; 5-month iteration (Mar–Aug) suggests active refinement. | **Open** (2026-03-05) |
| 6 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Prevents orphan/widow lines, header stranding, numbering misalignment in AI-generated docs. Triggers on any document generation request. | "Users rarely ask for good typography but always notice bad." Universal quality uplift for all document output. | **Open** (2026-03-04) |
| 7 | **[#1627](https://github.com/anthropics/skills/pull/1627)** `buffer-api` Agent Skill | Portable GraphQL API skill for Buffer social scheduling: account/channel discovery, post create/schedule, analytics. Works with any agent (Claude, Cursor, Codex, n8n, etc.). | Cross-agent portability emphasis; "Agent Skill" pattern for SaaS integrations. | **Open** (2026-08-21) |
| 8 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | OpenDocument (.odt/.ods) create, fill, read, convert to HTML. Trigger: "ODT", "ODS", "ODF", "LibreOffice", "ISO standard format". | Open-format alternative to DOCX; template filling + parse-to-HTML round-trip. | **Open** (2026-03-01) |

> **Note**: All PRs show `Comments: undefined` in source data; ranking prioritizes critical-path fixes, architectural novelty, and scope breadth.

---

## 2. Community Demand Trends (From Issues)

| Trend | Representative Issues | Signal Strength |
|-------|----------------------|-----------------|
| **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2 👍): Community skills distributed under `anthropic/` namespace impersonate official skills—trust boundary abuse. | 🔴 **Critical** — Highest engagement; namespace governance gap. |
| **Organizational Sharing & Distribution** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍): Org-wide skill library / direct sharing links needed; current manual `.skill` file + Slack/Teams workflow is friction-heavy. [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍): `document-skills` & `example-skills` install identical content → duplicates. | 🟠 **High** — Workflow friction + duplication pain. |
| **Core Tooling Reliability (Windows + Evaluation)** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍): `run_eval.py` 0% trigger rate—skills never fire under `claude -p`. [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050): Windows subprocess/encoding bugs. [#1390](https://github.com/anthropics/skills/issues/1390): `mcp-builder` evaluation scores 0/N (TextContent not JSON-serializable). | 🟠 **High** — Broken feedback loop blocks skill quality iteration. |
| **Multi-Agent & Orchestration Patterns** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 💬, 1 👍): Three-gate pipeline (Calibration → Adversarial Review → Delivery Verification). [#1329](https://github.com/anthropics/skills/issues/1329) (9 💬): `compact-memory` symbolic notation for agent state compression. [#16](https://github.com/anthropics/skills/issues/16) (4 💬): Expose Skills as MCPs. | 🟡 **Emerging** — Architectural shift toward agent societies & context efficiency. |
| **Token/Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 💬): `claude-api` skill injects ~156k tokens in one call, exhausting context. | 🟡 **Emerging** — Bundled skills must be lazy-loaded or summarized. |
| **Enterprise/Platform Depth** | [#1175](https://github.com/anthropics/skills/issues/1175) (4 💬): SharePoint Online ACL/permission logic inside Skill.md—security & context concerns. [#29](https://github.com/anthropics/skills/issues/29) (4 💬): Bedrock/AWS deployment support. | 🟢 **Niche but persistent** — Regulated/enterprise environments need native integration. |

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

| PR | Skill | Why It May Land Soon |
|----|-------|----------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` evaluation fix | **Blocker for all skill authors**; 10+ reproductions; fixes Windows + core loop. Highest urgency. |
| [#1628](https://github.com/anthropics/skills/pull/1628) | `hivemind` (multi-agent) | Novel zero-cost pattern; aligns with "context is scarce" narrative; recent (Aug 2026). |
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` | Mechanical + reasoning gate; universal applicability; addresses silent failure mode. |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | Fills complete testing-lifecycle gap; well-structured; 1-month active iteration. |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | Universal quality uplift; low complexity, high visibility; 6-week gestation. |
| [#486](https://github.com/anthropics/skills/pull/486) | `odt` | Open-format parity with DOCX; template + parse round-trip; 6-month iteration. |
| [#1627](https://github.com/anthropics/skills/pull/1627) | `buffer-api` | "Agent Skill" cross-platform pattern; SaaS integration template. |
| [#568](https://github.com/anthropics/skills/pull/568) | `servicenow` | Enterprise platform breadth; 5-month refinement suggests maintainer commitment. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is fixing the broken skill-authoring feedback loop (evaluation tooling, Windows compatibility, namespace trust) while simultaneously advancing toward multi-agent orchestration and organizational skill governance—shifting from "individual skill creation" to "reliable, shareable, composable skill infrastructure."**

---

# Claude Code Community Digest — 2026-09-06

## 1. Today's Highlights
No new releases shipped in the last 24 hours. Community discussion is heavily focused on **multi-account Connector support** (369 👍, 242 comments) and a proposed **Function Hooks plugin architecture** (72 👍, 112 comments) that could dramatically extend Claude Code's extensibility. Meanwhile, Windows Desktop stability issues — orphaned job objects blocking launches, stray `priconfig.xml` breaking installs, and persistent `WS_EX_TOPMOST` window-glitch — continue to generate fresh reports.

## 2. Releases
*No releases published in the last 24 hours.*

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **#27302** | [FEATURE] Support multiple Connector accounts (same connector, different accounts) | Enables developers to switch between personal/org GitHub, multiple AWS/GCP accounts, etc. without re-authenticating — critical for polyglot/cloud-native workflows. | **369 👍, 242 comments** — highest engagement in repo history; users share workarounds (multiple profiles, browser containers) and demand native support. |
| **#91870** | Function Hooks — make plugins 10x more powerful | Proposes Express/Koa-style middleware (`$` object with side-effect tracking, `next()` continuation) for deep, safe runtime modification. Could unlock custom toolchains, policy enforcement, telemetry. | **72 👍, 112 comments** — intense technical debate on API surface, safety model, and composability; several plugin authors prototyping locally. |
| **#53247** | Windows Desktop: orphaned Silo/Job Object after crash blocks relaunch (HRESULT 0x80070020) | App becomes unlaunchable until logoff/reboot; affects all Windows users on crash recovery. | **29 👍, 66 comments** — multiple repros, ETW traces shared; users frustrated by "reboot to fix IDE" workflow. |
| **#87895** | Windows: Desktop window stays always-on-top (WS_EX_TOPMOST) | Breaks Alt+Tab, obscures other apps; regression since ~1.34. | **72 👍, 17 comments** — duplicate of #66516 (macOS) but Windows-specific; #92337 correlates with `LocalSessions.setFocusedSession`. |
| **#55206** | Cowork on Windows: bash sandbox allows create but denies unlink on mounted host folder — breaks git writes | Git operations (commit, checkout, reset) fail inside Cowork sessions on Windows; blocks collaborative editing. | **11 👍, 15 comments** — clear repro; sandbox policy mismatch between create/unlink syscalls. |
| **#88583** | OAuth tokens wiped from Keychain when concurrent Desktop sessions race single-use refresh token | Silent auth corruption; users randomly logged out, tokens blanked (`expiresAt:0`). | **3 👍, 6 comments** — root-cause identified: race on single-use refresh token; same pattern fixed for MCP creds in v2.1.136 but not claudeAiOauth. |
| **#85111** | Bash tool silently truncates commands > ~8 KB, reports as quoting error | Large generated scripts (e.g., schema migrations, seeded data) fail mysteriously; no length warning. | **5 comments** — affects CI/CD generation workflows; workaround is splitting into temp files. |
| **#86875** | HTTP-transport MCP: tools unreachable despite `/mcp` showing connected + listing tools | MCP server appears healthy but tool calls fail with "No such tool available"; survives full restart. | **4 comments** — suggests transport-layer desync or capability negotiation bug. |
| **#92059** | Windows: memory-pressure governor evicts "0 of 0" idle sessions while 15+ live — RSS hits 12.4 GB, stalls | Governor logic bug: miscounts live sessions, fails to evict, OOMs on 16 GB machines. | **1 comment, new** — severe perf regression; includes heap snapshot. |
| **#92418** | Auto-continue disabled after five_hour rate-limit reset with multiple sessions | Session stops at limit, never resumes automatically despite config enabled; requires manual keystroke. | **0 comments, filed today** — suggests session-state race on limit reset. |

## 4. Key PR Progress

| # | PR | Summary | Status |
|---|----|---------|--------|
| **#87079** | `fix(security-guidance): make ** glob patterns match zero-depth paths` | `**/*.ts` now matches top-level `foo.ts` (previously required a `/`); fixes silent exclusion in `security-patterns.json` rules. | Open, updated today |
| **#89404** | `validate-agent.sh: don't abort at first warning; stop false-flagging valid agents` | Fixes `set -euo pipefail` arithmetic-increment false positives; plugin-dev's own agents now pass validation. | Open, updated today |

*Only 2 PRs updated in the last 24h — both are targeted fixes (security glob semantics, plugin validation script).*

## 5. Feature Request Trends (Distilled from All Issues)

| Theme | Representative Issues | Signal Strength |
|-------|----------------------|-----------------|
| **Multi-account / Multi-tenant Connector support** | #27302, #66303 (sync `~/.claude` across machines) | ★★★★★ (369 👍) |
| **Plugin/extensibility overhaul** | #91870 (Function Hooks), #87066 (VS Code skill blocking) | ★★★★☆ (72 👍) |
| **Cross-machine settings sync** | #66303 (skills, plugins, MCP, statusline via Anthropic account) | ★★★☆☆ |
| **Mobile Remote Control parity** | #92416 (take over any local session like Codex mobile) | ★★★☆☆ (new) |
| **Configurable memory/auto-compaction** | #91188 (MEMORY.md threshold), #92418 (auto-continue after rate limit) | ★★☆☆☆ |
| **Windows-first Desktop polish** | #53247, #87895, #92337, #92345, #92059 | ★★★★☆ (volume + severity) |

## 6. Developer Pain Points (Recurring Frustrations)

1. **Windows Desktop reliability** — Orphaned job objects requiring reboot (#53247), always-on-top window (#87895, #92337), install-breaking `priconfig.xml` (#92345), memory governor OOM (#92059), MSIX file-association hijack (#91750). *Windows is clearly the least-stable platform.*

2. **Auth fragility under concurrency** — OAuth token clobbering on concurrent Desktop sessions (#88583), Pro/Max blocked by false "org disabled" error (#75944), MCP cred rotation race (previously fixed in v2.1.136 but not for claudeAiOauth).

3. **Sandbox/Cowork filesystem mismatches** — Create allowed, unlink denied on Windows host mounts (#55206) breaks git; Cowork reports zero connected folders while UI shows connected (#86647).

4. **Silent tool failures** — Bash truncation without warning (#85111), MCP tools "unreachable" despite healthy `/mcp` status (#86875), VS Code chat panel copy regression (#91860), skill invocation blocking output (#87066).

5. **Model/config surprises** — Fable 5.1 defaulting to Bash on Windows (#91477, #92407), `--model claude-fable-5` silently serving Opus 5 (#91747), Fable 5.1 burning tokens 5× faster (#91289).

6. **Observability gaps** — Misleading "server may be unresponsive" 4-min MCP timeout (#91898), application logging lost since ~1.34493, NO_COLOR ignored by spinner/permission indicator (#82432).

---

*Digest generated from `anthropics/claude-code` GitHub data as of 2026-09-06 00:00 UTC. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-06

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The issue tracker shows **Windows Desktop stability** and **session history integrity** as the dominant pain points, with three high-comment bugs (#35746, #41079, #41170) reporting paginated history stalls, 15-minute cold-start delays, and duplicate-ordinal corruption. Meanwhile, the community’s top feature request (#11626, 212 👍) remains a native `/rewind` that restores both chat context **and** workspace edits from a single checkpoint. On the engineering side, a batch of 20+ PRs from `copyberry[bot]` landed Bazel/voice-runtime infrastructure for Windows MSVC, WebRTC audio, and native SDK exports — groundwork for upcoming voice-enabled agents.

---

## 2. Releases

*None in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **#11626** | [CLI/TUI] Add `/rewind` checkpoint restore for chat + code edits | **Most-upvoted open issue (212 👍)**. Developers want atomic time-travel: revert conversation *and* applied patches together. Current `Esc` rewind only touches chat. | 41 comments, 212 👍 — strong consensus |
| **#35746** | Paginated history drops valid rollout records & reuses ordinals | Breaks session replay/debugging; `RolloutLine` decoding inconsistent across pagination boundaries. Affects CLI `0.146.x`. | 39 comments, 3 👍 — core reliability |
| **#41079** | [Windows Desktop] Thread history stalls on duplicate ordinal | Local UI shows stale snapshot while canonical JSONL is complete. Projection bug, not data loss. | 28 comments, 2 👍 — Windows UX blocker |
| **#34227** | Windows pet overlay hit region desyncs from visible mascot | Click/drag targets drift over time; affects all pets. Regression from `26.715.2305 → 26.715.4045`. | 27 comments, 3 👍 — visible polish issue |
| **#32297** | Built-in image generation fails with network error (post-Jul 9 update) | `imagen` tool broken for Desktop users; blocks agent workflows needing visual assets. | 26 comments, 9 👍 — feature regression |
| **#29639** | Browser Use / Node REPL fails in Windows Desktop with WSL workspace | `sandboxCwd` path mismatch: Windows `node_repl.exe` receives Linux/WSL paths. Blocks MCP tooling in WSL. | 20 comments, 7 👍 — cross-env integration |
| **#41790** | "Selected model at capacity" errors spamming ChatGPT Pro users | Quota/capacity errors interrupt active agent tasks despite Pro tier. Started 2026-08-31. | 15 comments, 9 👍 — paid-tier reliability |
| **#34309** | [Windows] Pets cannot be dragged (default + custom) | Drag-handling entirely broken in `26.715.4045`; restart/reset ineffective. | 13 comments, 10 👍 — UX regression |
| **#41170** | [Windows] First launch hangs ~15 min extracting `cua_node` runtime | No window appears; silent extraction blocks onboarding. Version `26.820.9563.0`. | 10 comments, 1 👍 — first-run disaster |
| **#42660** | Weekly quota reset/reconciliation broken — exhausted with no local activity | Plus user sees phantom quota drain; blocking Pro upgrade decision. | 6 comments, 0 👍 — billing trust issue |

---

## 4. Key PR Progress (Top 10 by Scope)

| # | PR | Description | Impact |
|---|----|-------------|--------|
| **#43144** | Add Windows MSVC Bazel targets for native voice libraries | x64/ARM64 targets for native build, runtime prep, linking. Requires native Windows execution. | Unblocks Windows voice stack |
| **#43126** | Expose native Windows build tools through Bazel targets | Patches `windows_support` to retain MSVC tools/SDK files otherwise discarded. | Fixes toolchain availability |
| **#43125** | Explicit Windows tool selection for native voice builds | Adds `--windows-build-inputs <json>` to avoid Cygwin vs MSVC `link.exe` conflicts. | Deterministic toolchain |
| **#43121** | Require prepared runtime when assembling voice helper packages | `--runtime` now mandatory; native bindings need shared libs at `main` entry. | Correct packaging invariant |
| **#43120** | Add managed worktree creation to TUI session commands | `/worktree`, `/new`, `/fork` now offer current-checkout vs new-worktree choices. | **Directly supports `/rewind` workflow** (#11626) |
| **#43117** | Link Unix Bazel bindings against prepared voice runtime | Exports `native_sdk`; configures GLib/GStreamer `pkg-config` from inspected build. | Linux/macOS voice parity |
| **#43114** | Add Bazel preparation for native voice runtimes | `//third_party/voice:native_runtime` target validates receipts, inspects libs. | Reproducible voice artifacts |
| **#43113** | Save subagent & memory opt-ins through app server | Persists TUI prompts for new threads via server config writes. | Cross-device preference sync |
| **#43100** | Bounded incoming Opus RTP handling in voice host | 64-packet / 2 MiB queue limits; 64 KiB/packet cap; preserves timestamps. | DoS-resistant audio pipeline |
| **#43097** | Helper-backed realtime WebRTC session API | `RealtimeWebrtcSession` with startup, negotiation, audio controls, level meters. | Foundation for voice agents |

---

## 5. Feature Request Trends

1. **Atomic session snapshots** — `/rewind` (#11626) and managed worktrees (#43120) point to demand for *git-like* checkpoint/restore across chat + filesystem.
2. **Quota flexibility** — #43135 asks for “weekly-pool mode” to consume quota continuously vs. 5-hour rolling cap; #42912 reports idle drain.
3. **History fidelity** — Multiple pagination/ordinal bugs (#35746, #41079, #43124, #43129) show developers rely on accurate local replay for debugging.
4. **Voice/real-time primitives** — PR batch reveals investment in WebRTC, Opus, CPAL, GStreamer — likely enabling voice-driven coding agents.
5. **Cross-environment seamlessness** — WSL/Windows path mapping (#29639), Android Remote thread sync (#43017), macOS history projection (#43124).

---

## 6. Developer Pain Points (Recurring Themes)

| Category | Representative Issues | Frequency |
|----------|----------------------|-----------|
| **Windows Desktop instability** | #41170 (15-min launch), #34309 (pet drag), #34227 (hit-region drift), #41079 (history stall), #42259 (plugin spinner) | 5+ high-comment bugs |
| **Session history corruption** | #35746 (ordinal reuse), #41079 (duplicate ordinal), #43124 (projection freeze), #43129 (stale lookup), #43017 (Android duplicate IDs) | 5 distinct reports |
| **Rate-limit / quota opacity** | #41790 (capacity errors), #42660 (phantom drain), #42912 (idle consumption), #41520 (gpt-reserve broken), #43045 (WS reconnect burns credits) | 5 billing/quota tickets |
| **MCP / WSL / sandbox integration** | #29639 (WSL path mismatch), #20503 (OAuth scopes missing), #29079 (orphan Node processes), #16759 (Full Access prompts) | 4 environment-friction bugs |
| **Performance / resource leaks** | #29079 (Node process leak), #38611 (160% CPU rollout tracker), #42790 (21-42s CDP latency), #43045 (WS reconnect loop) | 4 perf/leak reports |

---

*Generated from `openai/codex` GitHub data (issues updated 2026-09-05/06, PRs updated 2026-09-05/06). Links point to GitHub issues/PRs.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-06

## Today's Highlights
The project shipped **v0.60.0-nightly.20260906** with an automated version bump. Active development continues on stabilizing the agent subsystem—particularly subagent recovery, browser agent Wayland support, and Auto Memory security hardening—while a critical startup crash in Git repositories under macOS Seatbelt is being addressed. The backlog shows sustained investment in tool-call reliability, terminal rendering performance, and developer-experience polish.

---

## Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.60.0-nightly.20260906.g85aca163f** | Nightly | Automated nightly build; no manual changelog provided. [[Compare](https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20260905.g85aca163f...v0.60.0-nightly.20260906.g85aca163f)] |

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | Silent misreporting hides real failures; undermines trust in multi-agent workflows. | 13 comments, 2 👍, `priority/p1`, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks core workflows; users must disable subagents as workaround. | 8 comments, 8 👍, `priority/p1` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command stuck at "Waiting input" after completion** | Frequent false-positive hangs on trivial commands; degrades UX. | 4 comments, 3 👍, `priority/p1` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Blocks Linux/Wayland users from web automation; `priority/p1`. | 4 comments, 1 👍, `agent/browser` |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26526) | **Auto Memory: secrets sent to model before redaction** | Security risk—transcripts with secrets enter model context pre-redaction. | 5 comments, `priority/p2`, `area/security` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **EPIC: AST-aware file reads/search/mapping** | Strategic investigation to reduce token waste & improve precision. | 7 comments, 1 👍, `effort/large` |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini under-uses custom skills/sub-agents** | Discoverability gap; users must explicitly invoke tooling they installed. | 6 comments, `priority/p2` |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores `settings.json` overrides (e.g., maxTurns)** | Configuration drift; users cannot tune browser agent behavior. | 3 comments, `priority/p2` |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | **`get-shit-done` output hook crashes CLI near completion** | Crash at summary phase loses user-facing output; `priority/p1`. | 3 comments, `effort/medium` |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error when >128 tools available** | Hard tool-count limit breaks extensibility; needs smarter scoping. | 3 comments, `priority/p2` |

---

## Key PR Progress (Top 10 by Impact)

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#29163](https://github.com/google-gemini/gemini-cli/pull/29163) | **fix(cli): prevent crash during authentication in Git repos (macOS Seatbelt)** | Open | Fixes startup crash for macOS users in restricted Git directories; `priority/p1`, `area/security` |
| [#28967](https://github.com/google-gemini/gemini-cli/pull/28967) | **fix(cli): prevent clearing terminal scrollback on static refresh** | Closed | Restores scrollback history in standard terminal mode; fixes regression. |
| [#28968](https://github.com/google-gemini/gemini-cli/pull/28968) | **fix(core): dedupe symlinked/junctioned skills directories** | Closed | Resolves duplicate skill loading when `.gemini` ↔ `.agents` are linked (Windows/macOS). |
| [#28966](https://github.com/google-gemini/gemini-cli/pull/28966) | **docs(extensions): correct `excludeTools` examples** | Closed | Fixes documented patterns that never matched; aligns docs with policy engine. |
| [#29126](https://github.com/google-gemini/gemini-cli/pull/29126) | **fix(a2a-server): mount `express.json()` before A2A SDK routes** | Open | Unbreaks JSON-RPC parsing for A2A server; critical for API consumers. |
| [#29125](https://github.com/google-gemini/gemini-cli/pull/29125) | **fix(cli): convert hook timeout from seconds to milliseconds in migration** | Open | Corrects Claude Code → Gemini hook timeout unit mismatch (60s ≠ 60ms). |
| [#29124](https://github.com/google-gemini/gemini-cli/pull/29124) | **fix(cli): correct `SubagentStop` event key in hooks migration** | Open | Fixes silent drop of `SubagentStop` hooks during `gemini hooks migrate`. |
| [#29195](https://github.com/google-gemini/gemini-cli/pull/29195) | **fix(checkpoint): degrade non-array history instead of crashing resume** | Open | Hardens `/resume` against malformed checkpoint files; graceful degradation. |
| [#29217](https://github.com/google-gemini/gemini-cli/pull/29217) | **fix(config): don't rewrite explicit `gemini-2.5-flash` selection** | Open | Stops silent model upgrade that broke pinned-model workflows on Vertex AI. |
| [#29211](https://github.com/google-gemini/gemini-cli/pull/29211) | **fix(cli): stop scheduling state updates from inside a state updater** | Open | Fixes React anti-pattern causing unstable UI/input history behavior. |

---

## Feature Request Trends
1. **AST-Aware Tooling** — Strong push for semantic code navigation (grep→AST read→mapping) to cut token usage and improve precision ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)).
2. **Persistent, File-Based Task Tracking** — Replace in-context `WriteToDo` with CRUD task files to survive context rot and session boundaries ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)).
3. **Subagent Observability & Sharing** — Demand for trajectory inspection, `/chat share` support, and debug context propagation ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
4. **Browser Agent Hardening** — Session takeover, lock recovery, Wayland support, and config override compliance ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
5. **Auto Memory Security & Quality** — Deterministic redaction, invalid-patch quarantine, low-signal session backoff ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).

---

## Developer Pain Points (Recurring Frustrations)
- **Agent Reliability**: Subagents misreport success (#22323), generalist hangs (#21409), browser agent fails on Wayland (#21983), and destructive commands slip through (#22672).
- **Shell Integration**: Commands falsely show "awaiting input" after exit (#25166), interactive prompts stall Vite/app scaffolding (#22465), and tmp scripts litter workspace (#23571).
- **Configuration Drift**: `settings.json` ignored by browser agent (#22267), symlinked agent files not discovered (#20079), model pinning silently overridden (#29217).
- **Terminal UX**: Scrollback cleared on refresh (#28967), resize flicker/perf issues (#21924), `\n` escape bugs (#22466).
- **Extensibility Limits**: 128/400 tool cap triggers 400 errors (#24246), `excludeTools` docs misleading (#28966), skill discovery duplicates with symlinks (#28968).

---

*Generated from `google-gemini/gemini-cli` GitHub data as of 2026-09-06. Nightly releases are automated; issue/PR triage labels reflect maintainer-only workflows.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-06

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The issue tracker shows **20 actively updated issues**, with a cluster of fresh regressions reported after the **desktop 2.98.0 / runtime 1.1.15** upgrade (worktree loss, auto-update breaking the bundled CLI, OTel span corruption). A long-standing UX gap — **cancelling enqueued messages** (#1857, 28 👍) — remains the top community ask. Several new bugs affect **MCP tooling**, **model selection**, and **Windows sandboxing** on the latest 25H2 build.

---

## 2. Releases

*No releases published in the last 24 hours.*

---

## 3. Hot Issues (Top 10)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **#1857** | [Allow users to cancel or remove enqueued messages before they are executed](https://github.com/github/copilot-cli/issues/1857) | Users cannot abort `Ctrl+Q`/`Ctrl+Enter` queued commands while the agent is busy or compacting — a frequent source of wasted runs. | **28 👍, 11 comments** (open since Mar 2026) |
| **#4734** | [“Worktree missing” on all project sessions after upgrade to desktop 2.98.0 / runtime 1.1.15](https://github.com/github/copilot-cli/issues/4734) | Post-upgrade, **every** worktree-backed session fails to reconnect, blocking all existing projects. | Critical regression, 0 👍 (filed hours ago) |
| **#4728** | [Auto-update rewrites `copilot.exe` it was launched from, breaking the GitHub Copilot app’s bundled CLI](https://github.com/github/copilot-cli/issues/4728) | Running the CLI from a terminal silently corrupts the desktop app’s embedded binary, killing **all** sessions. | High-severity install/upgrade conflict |
| **#4725** | [Frequent JavaScript heap out of memory on Linux](https://github.com/github/copilot-cli/issues/4725) | CLI crashes every few minutes with V8 heap exhaustion (~4 GB), making long sessions unusable on Linux. | 1 comment, V8 logs attached |
| **#4735** | [Assistant text preceding a tool call reclassified as reasoning and hidden](https://github.com/github/copilot-cli/issues/4735) | Multi-paragraph user-facing responses are folded into “Thought for Ns” and never shown, breaking transparency. | New, affects reasoning display |
| **#4731** | [MCP `tools/list` refresh dispatched into a just-cancelled server times out and permanently strips tools](https://github.com/github/copilot-cli/issues/4731) | Cancelled tool call leaves stdio MCP server busy; immediate refresh times out and disables that server’s tools for the process lifetime. | Core MCP reliability bug |
| **#4729** | [Built-in research agent tells subagents to call unavailable `github/get_me` tool](https://github.com/github/copilot-cli/issues/4729) | Bundled prompt references a tool the GitHub MCP server doesn’t expose, causing visible reasoning leaks and failed runs. | Agent/prompt mismatch |
| **#4652** | [Sandboxing not supported on Windows 25H2 build](https://github.com/github/copilot-cli/issues/4652) | `--sandbox` flag emits warning on latest Windows Insider build; shell commands and sandboxed services fail. | 2 comments, blocks Windows adopters |
| **#4721** | [Canvas `open_canvas` arguments corrupted by CLI — JSON-RPC serialization bug](https://github.com/github/copilot-cli/issues/4721) | Model arguments concatenated with trailing `}{}`, producing malformed JSON and “Unexpected end of JSON input”. | Tool-call corruption, 0 👍 |
| **#4723** | [`--interactive` startup prompt silently dropped with local plugin custom agent](https://github.com/github/copilot-cli/issues/4723) | `-i <prompt>` works for built-in agents but is ignored when a custom agent from a local plugin is selected. | Plugin/agent integration gap |

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Queue & execution control** | #1857 (cancel enqueued), #4736 (Ctrl+E accept inline) | Users want finer-grained control over pending input and autocomplete acceptance. |
| **Model & policy transparency** | #4272 (org policy greying out models), #4732 (GPT-5 mini stopping mid-task) | Confusion over which models are available and why; desire for clearer policy surfaces. |
| **Session resilience & mobility** | #3498 (mobile UI render), #4734 (worktree loss), #4726 (OTel post-reload) | Demand for seamless session continuity across devices, reloads, and upgrades. |
| **MCP & tooling robustness** | #4731 (tools/list timeout), #4729 (missing tool in prompt), #4721 (JSON-RPC corruption) | MCP integration is expanding but fragile — timeouts, prompt/tool drift, serialization bugs. |
| **Resource & memory management** | #4725 (OOM on Linux), #4724 (auto-compact aligned to cache TTL) | Requests for smarter compaction and memory bounds, especially on long-running agents. |

---

## 6. Developer Pain Points

1. **Upgrade fragility** — The 2.98.0/1.1.15 release introduced *multiple* breaking regressions simultaneously: worktree loss (#4734), auto-update clobbering the desktop app’s CLI (#4728), and OTel span corruption (#4726). Developers report “every session broken” after auto-update.

2. **Uncontrollable command queue** — The inability to cancel enqueued messages (#1857, 28 👍) forces users to wait through unwanted executions or kill the process, wasting time and tokens.

3. **MCP ecosystem instability** — Tool refresh races (#4731), missing tools in bundled prompts (#4729), and argument serialization bugs (#4721) make custom tooling unreliable.

4. **Model opacity** — Org policies silently disable models (#4272) and the CLI switches models (e.g., to GPT-5 mini) without clear notice (#4732), leading to unexpected behavior changes.

5. **Platform-specific gaps** — Windows 25H2 sandboxing unsupported (#4652), Linux OOM crashes (#4725), macOS SSH clipboard sync broken (#4551), Android mobile UI non-functional (#3498).

6. **Reasoning/response visibility** — Assistant text being misclassified as reasoning and hidden (#4735) erodes trust in the agent’s output and debugging ability.

---

*Digest generated from github.com/github/copilot-cli data as of 2026-09-06 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-06

## Today's Highlights
- **VS Code extension rendering bug** reported: streamed assistant messages intermittently drop individual characters at the render/copy layer, despite intact wire logs.
- **Documentation gap closed** for third-party agent integration (Claude Code), with clarification on model switching via Tab and environment variable ergonomics.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|----------------|-------------------|
| [#2635](https://github.com/MoonshotAI/kimi-cli/issues/2635) | **VS Code extension: streamed chat text drops individual characters at render/copy layer** | OPEN | Critical UX regression in the flagship IDE integration; affects readability and copy-paste reliability for all VS Code users. | 0 comments, 0 👍 (filed 2026-09-05) |
| [#1210](https://github.com/MoonshotAI/kimi-cli/issues/1210) | **[Third-party Coding Agent] Improve documentation** | CLOSED | Addresses onboarding friction for developers embedding Kimi in Claude Code and similar agents; clarifies Tab-based model switching and env-var management. | 1 comment, 0 👍 (created 2026-02-23, updated 2026-09-05) |

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends
1. **Third-party agent ergonomics** — Developers want first-class docs and config patterns for embedding Kimi in Claude Code, Cursor, and similar tools (e.g., one-click model switching, persistent env management).
2. **VS Code extension polish** — Stability of the streaming render pipeline is a prerequisite for adoption; character-drop bugs undermine trust in the IDE integration.

---

## Developer Pain Points
- **Fragile streaming render** in the VS Code extension: missing characters in assistant output, confirmed not to be a backend issue.
- **Fragmented onboarding for agent integrations**: unclear instructions for model selection (Tab-switching in Claude Code) and repetitive `export` workflows; developers reference competitor docs (e.g., Z.ai) as better templates.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-06

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows a cluster of post-update regressions around v1.17.13–1.17.15 (session loss, high resource usage, TUI freezes, model inference stalls on Windows), while PR activity centers on ACP v2 support, web search integration, Bedrock credential discovery, and timeline-based session history sharing.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues (Top 10 by Community Engagement)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#35009](https://github.com/anomalyco/opencode/issues/35009) | **High resource usage after updating from 1.17.11 to 1.17.13** — ~1 GB RSS, 75 GB virtual, 22% CPU | Regression affecting all users on v1.17.13; signals possible memory leak or unbounded cache growth. | 10 comments, 2 👍 — active debugging, workarounds sought |
| [#34030](https://github.com/anomalyco/opencode/issues/34030) | **OpenCode unable to invoke third-party models added to GitHub Copilot Enterprise** | Blocks enterprise adoption; Copilot model discovery incomplete. | 9 comments, 2 👍 — plugin (`oh-my-opencode`) interaction suspected |
| [#15315](https://github.com/anomalyco/opencode/issues/15315) | **Copilot Gemini models fail structured tool calls** — emit plain-text `[tool_call: …]` | Long-standing provider transform bug (`sanitizeGemini`); breaks agent loops for Gemini Flash. | 8 comments, 1 👍 — root cause identified, fix pending |
| [#25430](https://github.com/anomalyco/opencode/issues/25430) | **`format.json_schema.retryCount` ignored** — structured output fails without retry | API contract broken; developers cannot rely on declared retry behavior. | 7 comments |
| [#28695](https://github.com/anomalyco/opencode/issues/28695) | **Session lifecycle context hooks for persistent plugin state** | High-demand extensibility; enables plugins to survive session fork/restore. | 6 comments, 2 👍 — builds on #5409, #27898 |
| [#35690](https://github.com/anomalyco/opencode/issues/35690) | **Session history disappears after updating to 1.17.14** | Data-loss perception; sessions exist in DB but not surfaced. | 6 comments — migration path issue |
| [#33102](https://github.com/anomalyco/opencode/issues/33102) | **Go workspace subscription orphaned/hidden in dashboard** | Billing + UX gap; users charged but cannot manage subscription. | 6 comments, 1 👍 — account-linking bug |
| [#31916](https://github.com/anomalyco/opencode/issues/31916) | **TUI hangs on "Preparing to write…" with large file content (≥150 lines)** | Unbounded diff rendering freezes UI; Windows + TUI specific. | 5 comments, 1 👍 |
| [#35741](https://github.com/anomalyco/opencode/issues/35741) | **WebChat: LLM hallucinates user response** — answers own question | Agent-mode trust issue; model fabricates user input and continues. | 5 comments, 1 👍 |
| [#35538](https://github.com/anomalyco/opencode/issues/35538) | **EmbeddedResource `text/markdown` from Jira MCP omitted as unsupported** | MCP attachment handling incomplete; markdown content dropped silently. | 4 comments |

---

## Key PR Progress (Top 10 by Activity)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#44524](https://github.com/anomalyco/opencode/pull/44524) | **feat(acp): add ACP v2 draft support/features** | Feature | Implements Agent Client Protocol v2 draft per migration guide; WIP. |
| [#47293](https://github.com/anomalyco/opencode/pull/47293) | **feat(core): add console web search** | Feature | Loads hosted web-search descriptor from Console v2 config; proxies searches with org credentials; validates endpoint ownership. |
| [#47555](https://github.com/anomalyco/opencode/pull/47555) | **fix(tui): stop fetching placeholder session id on `--continue`** | Bug Fix | Prevents 400 on `ses_` prefix validation when `OPENCODE_FAST_BOOT=1`. |
| [#47554](https://github.com/anomalyco/opencode/pull/47554) | **fix(core): allow reads of permitted skill resources** | Bug Fix | Resolves external-directory approval false positive for symlinked `~/.opencode/skill`. |
| [#47552](https://github.com/anomalyco/opencode/pull/47552) | **feat(core): share session history through timelines** | Feature + Refactor | Timeline-backed history; forks reference frozen prefix, undo selects new timeline. |
| [#47536](https://github.com/anomalyco/opencode/pull/47536) | **feat(core): support Astra async tools and live steering** | Feature | Adds Astra Responses async function calls + live plain-text steering to v2 session runner. |
| [#47549](https://github.com/anomalyco/opencode/pull/47549) | **fix(tui): use renderer frames for animations + expose fps config** | Bug Fix + Feature | Replaces independent 16ms interval with renderer callbacks; adds `targetFps`/`maxFps` in `cli.json`. |
| [#47548](https://github.com/anomalyco/opencode/pull/47548) | **feat(core): discover Bedrock credentials in provider plugin** | Feature | Wires AWS default credential chain (profile, SSO, IMDS) so Bedrock provider becomes usable without static keys. |
| [#47527](https://github.com/anomalyco/opencode/pull/47527) | **fix(core): make usage statistics fast and responsive** | Performance | `/stats` reduced from ~20s to sub-second by avoiding full message JSON reads; async aggregation. |
| [#47436](https://github.com/anomalyco/opencode/pull/47436) | **feat(ai): resolve Bedrock credentials through AWS default chain** | Feature | Native Bedrock routes now read `AWS_PROFILE`, `~/.aws`, SSO cache, web identity, IMDS. |

---

## Feature Request Trends (from Issues)

1. **Session persistence & portability** — Unified Desktop/TUI session directories (#35703), session lifecycle hooks (#28695), history survival across upgrades (#35690, #35750).
2. **Model provider completeness** — Copilot third-party models (#34030), Bedrock IMDS auth (#35798), GitLab reasoning variants (#47306), custom OpenAI-compatible reasoning paths (#35732).
3. **Structured output reliability** — `retryCount` honored (#25430), Anthropic root combinator sanitization (#47542), Gemini tool-call formatting (#15315).
4. **TUI/Renderer performance** — Large diff rendering (#31916, #32046), animation frame coupling (#47549), fast boot race conditions (#47555).
5. **Enterprise/Team affordances** — Subscription dashboard visibility (#33102), delayed prompt scheduling (#35653), background message injection (#35728), sidebar browser preview (#35751).

---

## Developer Pain Points (Recurring Frustrations)

| Area | Symptoms | Frequency |
|------|----------|-----------|
| **Post-upgrade breakage** | Sessions invisible, resource spikes, TUI black screen, model inference stalls (Windows) | High — multiple issues per release cycle (v1.17.13–1.17.15) |
| **Provider integration gaps** | Copilot enterprise models, Bedrock IMDS, GitLab reasoning, custom OpenAI-compat reasoning | High — blocks production use in regulated/enterprise envs |
| **Structured output fragility** | Retry ignored, root combinator rejection, Gemini plain-text tool calls | Medium — erodes trust in agent loops |
| **TUI/Renderer jank** | "Preparing to write…" hang, "app not responding" on large diffs, animation stutter | Medium — Windows-heavy, impacts daily workflow |
| **Plugin/skill friction** | Cache stale on `@latest` (#35742), external-dir approval on symlinked skills | Medium — slows extension adoption |
| **Billing/account opacity** | Orphaned Go subscriptions, no dashboard management | Low volume, high severity per user |

---

*Generated from GitHub data (issues/PRs updated 2026-09-06). All links point to anomalyco/opencode.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-06

## Today's Highlights
Pi v0.85.1 shipped with **GPT-6 Astra** support via OpenAI API keys and Codex subscriptions, but the release exposed a critical packaging defect: `@earendil-works/pi-server` and `@earendil-works/pi-client` were omitted as dependencies, breaking subagent child runs. The community is actively debating Windows support strategy (#7547, 52 comments) while multiple provider routing bugs (Copilot GPT-6 Astra, Vercel Gateway, Anthropic caching) surfaced in the last 24 hours.

---

## Releases
### v0.85.1 (2026-09-05)
- **GPT-6 Astra** now available through OpenAI API keys and OpenAI Codex subscriptions
- Documentation updated: [API Keys](https://github.com/earendil-works/pi/blob/v0.85.1/packages/coding-agent/docs/providers.md#api-keys) and [OpenAI Codex](https://github.com/earendil-works/pi/blob/v0.85.1/packages/coding-agent/docs/providers.md#openai-codex)
- **Critical regression**: Published `dist/cli.js` statically imports `@earendil-works/pi-server` which is not declared as a dependency ([#9132](https://github.com/earendil-works/pi/issues/9132), [#9218](https://github.com/earendil-works/pi/issues/9218))

---

## Hot Issues
| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) Windows support strategy | 52 comments debating how to prioritize Windows (WSL, cmd, Windows Terminal, native) — core architectural decision affecting massive user base | 👍 2, high engagement since Aug 3 |
| [#9132](https://github.com/earendil-works/pi/issues/9132) 0.85.0 missing `pi-server` dependency | Fresh installs cannot import package root; blocks all subagent child sessions | 👍 5, closed but critical for v0.85.1 users |
| [#9218](https://github.com/earendil-works/pi/issues/9218) v0.85.1 subagent child runs fail | Same packaging defect persists in v0.85.1; `pi-server`/`pi-client` still undeclared | New issue, 1 comment |
| [#5023](https://github.com/earendil-works/pi/issues/5023) Terminal randomly scrolls to beginning | Long-standing UX bug during model output; closed but 19 comments indicate widespread impact | 👍 3, closed |
| [#8896](https://github.com/earendil-works/pi/issues/8896) `/export HTML` drops `display:false` messages | Export silently loses context marked TUI-only; violates expectation of complete session export | 8 comments, open |
| [#6300](https://github.com/earendil-works/pi/issues/6300) Windows input line redraws per keystroke | Each character appears on new line in cmd/Windows Terminal; blocks Windows TUI usability | 8 comments, open |
| [#8684](https://github.com/earendil-works/pi/issues/8684) `PI_OFFLINE` disables model discovery | Undocumented behavior contradicts docs; breaks offline model selection | 5 comments, open |
| [#9212](https://github.com/earendil-works/pi/issues/9212) Sonnet-5 via gateway: 13% edit calls truncated | `edits:[{}]` schema failures on Anthropic Messages via Vercel Gateway; data loss in tool calls | 3 comments, closed |
| [#9209](https://github.com/earendil-works/pi/issues/9209) Copilot GPT-6 Astra routed to wrong endpoint | Pi sends to `/chat/completions` but Copilot requires Responses API; 400 error | 3 comments, closed |
| [#9210](https://github.com/earendil-works/pi/issues/9210) Anthropic via gateway: `cacheWrite1h` never set | 1h cache writes billed at 5m rate (1.25x cost); `cacheWrite1h: 0` despite gateway honoring TTL | 2 comments, closed |

---

## Key PR Progress
| PR | Description | Impact |
|----|-------------|--------|
| [#9170](https://github.com/earendil-works/pi/pull/9170) | Declare `pi-server` runtime dependency | Fixes v0.85.0 install breakage; enables package root import |
| [#9172](https://github.com/earendil-works/pi/pull/9172) | Prevent broken package root publication | CI guard against missing dependency regressions |
| [#9214](https://github.com/earendil-works/pi/pull/9214) | Invoke skills & prompt templates mid-sentence | Resolves [#8457](https://github.com/earendil-works/pi/issues/8457); `/skill:name args` and `/template args` now expand inline |
| [#9137](https://github.com/earendil-works/pi/pull/9137) | Add Nix flake (WIP) | Enables reproducible NixOS builds; community-requested |
| [#9163](https://github.com/earendil-works/pi/pull/9163) | Simplify clipboard handling | Removes Rust dependency; improves NixOS/cross-platform builds |
| [#7970](https://github.com/earendil-works/pi/pull/7970) | Show `↓` indicator when fullscreen transcript scrolled up | UX improvement for long sessions; implements [#7908](https://github.com/earendil-works/pi/issues/7908) |
| [#7610](https://github.com/earendil-works/pi/pull/7610) | Add LLM Gateway & LLM Gateway DevPass providers | OpenRouter-style router as built-in `openai-completions` providers |
| [#9096](https://github.com/earendil-works/pi/pull/9096) | Add Meta provider with Muse subscription OAuth | New provider with daily token re-minting; resolves [#7543](https://github.com/earendil-works/pi/issues/7543) |
| [#9117](https://github.com/earendil-works/pi/pull/9117) | Deliver prompt/tool changes as system message deltas | Architectural shift: avoids rewriting top-level prompt on loadout changes |
| [#8734](https://github.com/earendil-works/pi/pull/8734) | Support top-level `instructions` for OpenAI Responses | Moves dynamic system prompt to `instructions` param; closes [#8388](https://github.com/earendil-works/pi/issues/8388) |

---

## Feature Request Trends
1. **Windows-first experience** — Multiple issues (#7547, #6300, #9169, #5200) demand parity with Unix: input rendering, image display, IME support, keybinding consistency
2. **Provider ecosystem expansion** — Native support for Requesty (#5473), LLM Gateway (#7610), Meta/Muse (#9096), OpenAI Responses enhancements (#8734, #7317, #6676), async tool calling (#9113)
3. **Session context control** — Compaction improvements (#6451, #9051, #9179), server-side compaction for Responses API, mid-conversation system messages (#9116)
4. **Extension system maturity** — Namespace isolation (#8834), runtime exposure (#8791), concurrent dialog fixes (#6978), mid-sentence skill invocation (#9214)
5. **TUI polish** — Scroll indicators (#7970), Alt-wheel acceleration (#9166), keybinding unification (#9199), footer flexibility (#9215)

---

## Developer Pain Points
- **Packaging reliability**: Two consecutive releases (0.85.0, 0.85.1) shipped with missing runtime dependencies (`pi-server`, `pi-client`), breaking fresh installs and subagents
- **Provider routing bugs**: Models incorrectly routed to unsupported endpoints (Copilot GPT-6 Astra → Chat Completions), gateway adapters ignoring config (`vercelGatewayRouting` inert), cache metadata loss (Anthropic 1h writes billed at 5m rate)
- **Windows TUI fragility**: Input redraw per keystroke (#6300), image corruption in fullscreen (#9169), IME candidate window mispositioned (#5200), inconsistent keybindings (#9199)
- **Session/context integrity**: Export dropping `display:false` messages (#8896), compaction race conditions (#9179), stale scoped models after catalog refresh (#9180), OOM on Codex SSE parsing (#9036)
- **Undocumented behavior**: `PI_OFFLINE` disabling model discovery (#8684), `PI_CACHE_RETENTION=long` not honored via gateway (#9210)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (Codewhale) Community Digest — 2026-09-06

---

## 1. Today's Highlights

The project has officially rebranded to **Codewhale** (Shannon Labs), with v0.9.12 marking the first release under the new identity. The legacy `deepseek-tui` npm package is deprecated. Today's activity centers on stabilizing the v0.9.12 release: fixing Windows computer-use input handling, preserving CRLF line endings in `write_file`, surfacing custom themes in the `/theme` picker, and simplifying the Fleet menu from 14 verbs to 5. A crate-decomposition epic (EPIC-005) continues restructuring the TUI into publishable Cargo packages.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v0.9.12** | 2026-09-02 (published 2026-09-05) | First release as **Codewhale**; `codewhale` binary & npm package replace `deepseek-tui`. Includes Muse Spark 1.3 reasoning-effort support, Codex XHigh/Ultra picker rows, website/app rebrand (whale mark, wordmark), and HarmonyOS computer-use packaging fixes. [Release Notes](https://github.com/Hmbown/Codewhale/releases/tag/v0.9.12) |

> **Note**: The v0.9.12 publish exposed a release-gate gap — `codewhale-tui` crate failed verification because 16 embedded plugin files were outside the package root. Fixes merged in [#5890](https://github.com/Hmbown/Codewhale/pull/5890) and [#5893](https://github.com/Hmbown/Codewhale/pull/5893).

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5573](https://github.com/Hmbown/Codewhale/issues/5573) | **v0.9.12 Milestone Tracker** | Central coordination issue for the release; tracks operator handoff, slice table, gates, and self-test steps. 24 comments — active triage hub. | High (24 comments, updated daily) |
| [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | **EPIC-005: TUI Crate Decomposition** | Umbrella epic splitting the monolithic TUI into 21 publishable crates. Blocks clean releases and independent versioning. 22 comments, multiple sub-EPICs. | High (architectural priority) |
| [#5906](https://github.com/Hmbown/Codewhale/issues/5906) | **Fleet: Parked/Cancelled Agents Hold Write Claims Indefinitely** | Critical concurrency bug: parked child agents retain write-scope claims after parent cancellation, blocking all sibling work on overlapping paths. Zero comments but founder-reported. | Critical (data-loss risk) |
| [#5904](https://github.com/Hmbown/Codewhale/issues/5904) | **Web Fetch: JS-Shell 200s Fail Extraction, No Retry/Escalation** | Explore/scout agents intermittently fail on JS-heavy pages; cache-state dependent, no fallback to browser backend. Affects web research reliability. | High (agent workflow blocker) |
| [#5820](https://github.com/Hmbown/Codewhale/issues/5820) | **Ollama: Input Budget Collapses to 1024 Tokens on 32K Models** | Default 64K output reservation clamps context window on local models (qwen2.5:7b). Fixed in v0.9.12 but highlights provider config fragility. | Medium (5 comments, closed) |
| [#5887](https://github.com/Hmbown/Codewhale/issues/5887) | **MCP Startup Stuck at “20 Connecting”** | No per-server progress visibility; users can't distinguish progress from stall. Fix in [#5897](https://github.com/Hmbown/Codewhale/pull/5897). | Medium (founder dogfooding pain) |
| [#5901](https://github.com/Hmbown/Codewhale/issues/5901) | **Custom Themes Not Listed in `/theme` Picker** | User-authored overlays (`~/.codewhale/themes/*.json`) invisible in picker; only compiled themes shown. Fix in [#5907](https://github.com/Hmbown/Codewhale/pull/5907). | Medium (UX gap, 3 comments) |
| [#2323](https://github.com/Hmbown/Codewhale/issues/2323) | **Chinese IME Not Adapted** | Long-standing (since May): Pinyin input shows ghost text, leaks into model/command inputs in dialogs. 1 👍, 3 comments — affects CJK users daily. | Medium (i18n debt) |
| [#5846](https://github.com/Hmbown/Codewhale/issues/5846) | **Voice Input: On-Device STT Default, API Fallback, Keybinding** | Feature request aligning voice with reasoning-block interaction model (keyboard-first, inline). 1 comment, founder-authored. | Low-Medium (roadmap item) |
| [#5898](https://github.com/Hmbown/Codewhale/issues/5898) | **Windows Worker-Idle-Timeout Test Flaky** | Intermittent CI failure on release follow-up; blocks confident Windows releases. 0 comments but infra-critical. | Medium (CI reliability) |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#5911](https://github.com/Hmbown/Codewhale/pull/5911) | `fix(tools): write_file preserves CRLF` | **Open** | Fixes [#5909](https://github.com/Hmbown/Codewhale/issues/5909). `write_file` now detects & restores original line endings (CRLF/LF), matching `edit_file` behavior. Affects both `WriteFileTool` and `WriteFileTool::execute`. |
| [#5910](https://github.com/Hmbown/Codewhale/pull/5910) | `fix(computer-use): win32 input actions fail truthfully` | **Open** | Fixes [#5908](https://github.com/Hmbown/Codewhale/issues/5908)/[#5896](https://github.com/Hmbown/Codewhale/issues/5896). Loads User32 type in-process, checks PowerShell exit codes, adds targeted `left_mouse_down` press. |
| [#5907](https://github.com/Hmbown/Codewhale/pull/5907) | `feat(tui): list custom themes in picker` | **Open** | Implements [#5901](https://github.com/Hmbown/Codewhale/issues/5901). Scans `$CODEWHALE_HOME/themes/`, appends custom overlays after built-ins, preserves `custom:<name>` selector. |
| [#5905](https://github.com/Hmbown/Codewhale/pull/5905) | `feat(tui): prioritize Fleet menu surface` | **Open** | Closes [#5888](https://github.com/Hmbown/Codewhale/issues/5888). `/fleet` verbs reduced 14→5 (`members|setup|teams|workers|help`); others nested under `/fleet help` groups. |
| [#5897](https://github.com/Hmbown/Codewhale/pull/5897) | `fix(mcp): show startup progress per server` | **Open** | Fixes [#5887](https://github.com/Hmbown/Codewhale/issues/5887). Consumes connection tasks as completed; updates engine tool pool incrementally. |
| [#5903](https://github.com/Hmbown/Codewhale/pull/5903) | `fix(computer-use): win32 backend reports PS failures` | **Open** | Alternative fix for [#5896](https://github.com/Hmbown/Codewhale/issues/5896) by founder. Ensures User32 type registered per-action, validates PS success, fixes mouse-down. |
| [#5900](https://github.com/Hmbown/Codewhale/pull/5900) | `fix: align shell guidance with execution` | **Open** | Derives model-visible tool guidance from `ShellDispatcher` (PowerShell/cmd/Bash/zsh) instead of hardcoded Bash assumptions. |
| [#5899](https://github.com/Hmbown/Codewhale/pull/5899) | `fix(version): show published Cargo sources without (dev)` | **Open** | Fixes [#5891](https://github.com/Hmbown/Codewhale/issues/5891). Crates.io installs now report `codewhale 0.9.12` (not `0.9.12 (dev)`); dev checkouts retain marker. |
| [#5902](https://github.com/Hmbown/Codewhale/pull/5902) | `refactor(tui): adopt command shapes in session lifecycle` | **Open** | FEAT-023: Converts 9 session commands (`/branch`, `/compact`, `/fork`, `/load`, `/new`, `/purge`, `/save`, `/sessions`, `/tree`) to portable command shapes. |
| [#5890](https://github.com/Hmbown/Codewhale/pull/5890) | `fix(release): package built-in computer-use files inside TUI crate` | **Closed** | Moves 16 embedded computer-use runtime files into `codewhale-tui` crate root; updates source, test, CI, docs, `.gitignore`. Unblocked v0.9.12 publish. |

---

## 5. Feature Request Trends

| Trend | Evidence | Trajectory |
|-------|----------|------------|
| **Modular Crate Architecture** | EPIC-005 ([#5316](https://github.com/Hmbown/Codewhale/issues/5316)), FEAT-023 ([#5902](https://github.com/Hmbown/Codewhale/pull/5902)), release verification ([#5893](https://github.com/Hmbown/Codewhale/pull/5893)) | **Active** — core architectural investment |
| **Windows Parity for Computer-Use** | [#5908](https://github.com/Hmbown/Codewhale/issues/5908), [#5896](https://github.com/Hmbown/Codewhale/issues/5896), [#5910](https://github.com/Hmbown/Codewhale/pull/5910), [#5903](https://github.com/Hmbown/Codewhale/pull/5903), HarmonyOS cleanup ([#5895](https://github.com/Hmbown/Codewhale/pull/5895)) | **High Priority** — multiple concurrent fixes |
| **MCP/ACP Protocol Maturity** | ACP session/list/load ([#5864](https://github.com/Hmbown/Codewhale/issues/5864)), session config exposure ([#5863](https://github.com/Hmbown/Codewhale/issues/5863)), OpenCode header ([#5868](https://github.com/Hmbown/Codewhale/pull/5868)), MCP progress ([#5897](https://github.com/Hmbown/Codewhale/pull/5897)) | **Accelerating** — editor integration focus |
| **Customization & Theming** | Custom theme picker ([#5901](https://github.com/Hmbown/Codewhale/issues/5901)/[#5907](https://github.com/Hmbown/Codewhale/pull/5907)), config sections ([#5867](https://github.com/Hmbown/Codewhale/pull/5867)), Fleet menu simplification ([#5888](https://github.com/Hmbown/Codewhale/issues/5888)/[#5905](https://github.com/Hmbown/Codewhale/pull/5905)) | **Steady** — UX polish phase |
| **Chinese Localization** | Docs EPIC ([#5482](https://github.com/Hmbown/Codewhale/issues/5482)), IME support ([#2323](https://github.com/Hmbown/Codewhale/issues/2323)) | **Backlog** — acknowledged, under-resourced |
| **Voice & Multimodal Input** | Voice STT design ([#5846](https://github.com/Hmbown/Codewhale/issues/5846)), reasoning-block keyboard parity | **Exploratory** — founder-driven, not yet scheduled |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Windows Computer-Use Unreliability** | High (4 issues + 3 PRs in 24h) | False success reports, missing P/Invoke types, mouse-down drops, HarmonyOS cleanup overreach |
| **Release Process Gaps** | Medium (2 critical PRs post-v0.9.12) | Crate tarball verification skipped ([#5892](https://github.com/Hmbown/Codewhale/issues/5892)), embedded assets omitted ([#5890](https://github.com/Hmbown/Codewhale/pull/5890)), version marker misleading ([#5891](https://github.com/Hmbown/Codewhale/issues/5891)) |
| **MCP/ACP Opacity** | Medium | Startup progress invisible ([#5887](https://github.com/Hmbown/Codewhale/issues/5887)), ACP session management missing ([#5864](https://github.com/Hmbown/Codewhale/issues/5864)), config not exposed ([#5863](https://github.com/Hmbown/Codewhale/issues/5863)) |
| **Line-Ending Inconsistency** | Medium | `write_file` vs `edit_file` divergence ([#5909](https://github.com/Hmbown/Codewhale/issues/5909)) — Windows developers hit this daily |
| **Fleet/Menu Overload** | Medium | Founder dogfooding: "way too many things" ([#5888](https://github.com/Hmbown/Codewhale/issues/5888)) — 14 verbs → 5 |
| **Chinese IME Breakage** | Persistent (4 months open) | Ghost text, input leakage in dialogs ([#2323](https://github.com/Hmbown/Codewhale/issues/2323)) — blocks CJK adoption |
| **Web Fetch Fragility** | Emerging | JS-shell 200s fail silently, no retry/escalation ([#5904](https://github.com/Hmbown/Codewhale/issues/5904)) — agent research unreliable |
| **Write-Claim Leaks in Fleet** | Critical (new) | Parked agents hold claims indefinitely, block siblings ([#5906](https://github.com/Hmbown/Codewhale/issues/5906)) — concurrency deadlock |

---

**Digest compiled from GitHub data as of 2026-09-06 00:00 UTC.**  
Repository: [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) (formerly DeepSeek-TUI)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*