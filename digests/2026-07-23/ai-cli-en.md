# AI CLI Tools Community Digest 2026-07-23

> Generated: 2026-07-23 02:08 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-07-23)

---

## 1. Ecosystem Overview

The AI CLI landscape is in a **high-velocity stabilization phase** across all major tools. Every project shipped patches or alphas in the last 24 hours, but regressions dominate issue trackers: broken permissions, sandbox failures, auth loops, and platform-specific crashes. A clear bifurcation is emerging—**enterprise-grade tools (Claude Code, Copilot CLI, Gemini CLI)** prioritize Desktop↔CLI parity, audit trails, and model-tier governance, while **local-first/hacker tools (OpenCode, Pi, DeepSeek TUI, Kimi, Qwen)** race on multi-provider orchestration, skill/plugin ecosystems, and zero-config model discovery. Subscription reliability (OpenCode, Claude Code) and MCP/resource-leak debt (Codex, Kimi, Pi) are cross-cutting reliability risks.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Status | Critical Blockers |
|------|----------------------|-------------------|----------------|-------------------|
| **Claude Code** | ~50+ (top 10 listed) | 10+ | **v2.1.218 stable** | macOS Filesystem extension broken (#80002); `bypassPermissions` 9-month regression (#39523) |
| **OpenAI Codex** | ~40+ (top 10 listed) | 12+ merged (bot) | **4 alphas** (0.146.0-α.1–.4) | WSL agent mode broken; MCP zombie/FD leaks; 60s auto-resolve timeout (151 👍) |
| **Gemini CLI** | ~30+ (top 10 listed) | 10+ | **v0.52.0 stable**, v0.53.0-preview, nightly | Subagent hangs/false success; quota false 100%; Wayland browser fail |
| **GitHub Copilot CLI** | ~20+ (top 10 listed) | 1 | **v1.0.74-1/2/3 patches** | BYOK broken in `--acp`; Linux zombie procs; Windows render-loop freeze regression |
| **Kimi Code CLI** | 5 hot | 3 | **None** | MCP schema 400 errors; Windows Unicode crash; third-party API param leakage (fixed in PR #2535) |
| **OpenCode** | ~15+ (top 10 listed) | 10+ | **None** (PR verification only) | **Go subscription fully blocked** ("upstream provider"); desktop local-server drops; idle 50% CPU |
| **Pi** | **50** | **29** | **None** | Copilot Enterprise compaction 421; `httpIdleTimeoutMs` regression; GitHub logout recurrence |
| **Qwen Code** | ~15+ (top 10 listed) | 10+ | **None** (benchmark POC only) | CI/E2E red on `main`; nightly release pipeline broken; npm 12 compat; `enable_thinking` mismatch |
| **DeepSeek TUI** | ~15+ (top 10 listed) | 10+ | **v0.9.1 candidate** (12 blockers closed) | **macOS TUI immediate exit** (stop-ship); Windows PATH overwrite; Dependabot 17 alerts (7 high) |

> **Note:** Pi shows highest raw issue/PR churn; Codex shows highest automated merge velocity; OpenCode has the most severe revenue-impacting outage.

---

## 3. Shared Feature Directions (Cross-Tool Consensus)

| Direction | Tools Demanding | Specific Needs |
|-----------|-----------------|----------------|
| **Multi-provider model orchestration** | OpenCode (#6231, 185 👍), Pi (#6927, #6960), Kimi (#2533), Qwen (#7449), DeepSeek TUI (#4686, #4720) | Auto-discovery from `/v1/models` (LM Studio, Ollama, vLLM); per-agent model assignment; provider-neutral routing with transparent switching |
| **Skill / Plugin / Extension ecosystems** | Claude Code (plugins PRs #80326, #80008), DeepSeek TUI (unified `/skills` #4679, default pack #4695), Pi (#5954, #6967), Gemini (#21968), Kimi (#2531 MCP schema) | First-class skill managers; versioned packs; trust/audit; extension APIs for approval UI, session metadata, real-time bash streaming |
| **Remote / headless / server-first workflows** | Codex (#23200, 42 👍), Copilot CLI (#27597), OpenCode (#38391), Pi (#6971), Qwen (#7552) | Mobile without desktop online; ACP/stdin mode reliability; USB/air-gapped distribution; workspace-scoped generation via SSE |
| **Session / context portability** | Claude Code (#13843, 99 👍), Codex (#34840 pinning, #30385 missing threads), Copilot CLI (#3428 OSC 133), Pi (#6967 session metadata) | Cross-surface handoff (web ↔ CLI); pinned/persisted threads; shell integration for prompt navigation; session metadata injection |
| **Observability & cost transparency** | Copilot CLI (#4224 OTel, #4207 per-agent usage), Pi (#6881 provider-reported cost), Qwen (#7536 OTel/ARMS), OpenCode (#38356 null-byte corruption) | Subagent-level billing spans; provider-native cost fields; token/thinking-level telemetry; data integrity guarantees |
| **Windows / WSL / cross-platform parity** | Codex (6+ issues), Copilot CLI (#4165, #4222, #4219), Kimi (#2532), Qwen (#6577, #5958), DeepSeek TUI (#4685) | Path resolution, render-loop fixes, installer non-destructiveness, Unicode/encoding resilience, mobile Web Shell |

---

## 4. Differentiation Analysis

| Dimension | Enterprise / Polished CLI | Local-First / Hacker CLI |
|-----------|---------------------------|--------------------------|
| **Primary Tools** | Claude Code, GitHub Copilot CLI, Gemini CLI | OpenCode, Pi, DeepSeek TUI, Kimi Code, Qwen Code |
| **Target User** | Professional devs, teams, enterprises; need audit, SSO, model governance | Power users, researchers, OSS hackers; need flexibility, multi-provider, zero-config |
| **Architecture** | Managed backend, Desktop + CLI sync, proprietary extensions | Local-first, OpenAI-compatible provider abstraction, plugin/skill systems |
| **Model Access** | First-party (Anthropic, OpenAI, Google) + BYOK gated | Any OpenAI-compatible endpoint (Ollama, LM Studio, vLLM, NIM, OpenRouter) |
| **Session Model** | Cloud-backed, cross-device, conversation history as product | File-based (JSONL), portable, user-owned, compaction-controlled |
| **Release Cadence** | Weekly stable + alphas; gated rollouts (account/feature flags) | Nightly/preview heavy; rapid iteration; security gates block tags |
| **Key Differentiator** | **Product integration** (GitHub, Google Cloud, Anthropic Console) | **Provider neutrality** + **skill/command extensibility** as core UX |

**Outliers:**
- **Codex** straddles both: OpenAI-backed but exposes Responses API provider extensibility and local agent mode.
- **Qwen Code** invests heavily in **Web Shell as multi-tenant platform** (Shadow DOM, workspace generation, channel infra)—unique web-first angle.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / High Maturity** | **Claude Code**, **Gemini CLI** | Stable weekly releases; 99👍/151👍 top issues; dedicated plugin/skill architecture; accessibility investment; enterprise feature flags |
| **High Momentum / Stabilizing** | **OpenAI Codex** | 4 alphas in 24h; automated merge bot; but Windows/WSL/MCP debt high; mobile tethering architectural |
| **High Churn / Pre-1.0** | **Pi**, **Qwen Code**, **DeepSeek TUI** | Pi: 50 issues/29 PRs/day; Qwen: CI/CD red, stabilization sprint; DeepSeek: v0.9.1 stop-ship bugs, security gate |
| **Critical Reliability Risk** | **OpenCode**, **GitHub Copilot CLI** | OpenCode: paid subscription fully down; Copilot: render-loop regression, BYOK regression, Windows crash loop |
| **Niche / Specialized** | **Kimi Code** | Strong third-party provider focus (NIM, Moonshot); Windows/Unicode gaps; small but sharp community |

**Velocity Leaders:** Pi (raw activity), Codex (release frequency), DeepSeek TUI (blocker closure rate).  
**Maturity Leaders:** Claude Code, Gemini CLI (stable releases, accessibility, plugin systems, cross-surface vision).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Model-router abstraction is table stakes** | 6/9 tools building auto-discovery, per-agent model assignment, provider-neutral schemas | **Build or adopt a universal provider adapter layer**; hardcoding first-party APIs limits portability |
| **MCP standardization lagging** | Codex (zombie/FD leaks), Kimi (schema 400s), Pi (compaction 421), Claude (Chrome MCP silent deny) | **MCP is not production-ready**; invest in client-side validation, FD accounting, and approval UI before relying on it for automation |
| **Subscription = single point of failure** | OpenCode (total outage), Claude Code (Max phantom limits), Codex (Free-tier image gen gate) | **Design for BY

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-07-23)

---

## 1. Top Skills Ranking — Most-Discussed PRs by Community Attention

| Rank | PR / Skill | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** — `fix(skill-creator): run_eval.py 0% recall fix` | Fixes the evaluation pipeline (`run_eval.py`, `run_loop.py`, `improve_description.py`) that incorrectly reports 0% recall for all skill descriptions, breaking the description-optimization loop. Addresses Windows stream reading, trigger detection, and parallel workers. | Core blocker for skill creators; 10+ independent reproductions (Issue #556, 12 comments). Without this, skill descriptions cannot be reliably optimized. | **Open** (updated 2026-06-23) |
| 2 | **[#1323](https://github.com/anthropics/skills/pull/1323)** — `fix(skill-creator): run_eval trigger detection` | Fixes `run_single_query` failing to detect skill triggers, causing recall=0% even for literal slash-command queries. | Directly mirrors Issue #1169 (3 comments); critical for the optimization loop to function. | **Open** (updated 2026-06-25) |
| 3 | **[#1099](https://github.com/anthropics/skills/pull/1099)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** — Windows compatibility fixes | `#1099`: Fixes `claude.cmd` vs `claude` executable resolution and pipe reading (`WinError 10038`). `#1050`: Fixes `PATHEXT` subprocess issue and `cp1252` encoding. | Tracks Issue #1061 (3 comments, 2 👍); multiple contributors hit same blockers on Windows 11. | **Open** (updated 2026-05-24) |
| 4 | **[#1367](https://github.com/anthropics/skills/pull/1367)** — `feat: add self-audit` | Universal pre-delivery audit skill: mechanical file verification → four-dimension reasoning audit (correctness, completeness, safety, clarity) in damage-severity priority. | Novel "meta-skill" approach; works across any project/stack. Author also proposed quality-gate pipeline (Issue #1385). | **Open** (updated 2026-07-02) |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** — `feat: add testing-patterns` | Comprehensive testing skill: Testing Trophy philosophy, AAA pattern, React Testing Library, contract testing, property-based testing, mutation testing, E2E strategies. | Fills a gap in the skills catalog; no native testing-patterns skill existed. | **Open** (updated 2026-04-21) |
| 6 | **[#514](https://github.com/anthropics/skills/pull/514)** — `Add document-typography` | Prevents orphan/widow lines, header stranding, numbering misalignment in AI-generated documents (PDF, DOCX, HTML). | "Affects every document Claude generates"; quality-of-life skill for professional output. | **Open** (updated 2026-03-13) |
| 7 | **[#1302](https://github.com/anthropics/skills/pull/1302)** — `Add color-expert` | Self-contained color expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL, CSS), color spaces (OKLCH, OKLAB, CAM16), accessibility contrast, gamut mapping. | Niche but high-utility for design/frontend tasks; no existing color skill. | **Open** (updated 2026-07-21) |
| 8 | **[#83](https://github.com/anthropics/skills/pull/83)** — `Add skill-quality-analyzer & skill-security-analyzer` | Meta-skills for the marketplace: 5-dimension quality scoring (structure, examples, resources, triggers, maintainability) + security analysis (injection, permissions, supply chain). | Addresses skill discoverability and trust; enables automated skill review. | **Open** (updated 2026-01-07) |

> **Note**: PR comment counts are not exposed in the source data; ranking is inferred from linked Issue activity, recency of updates, and severity of problems addressed.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Description |
|-------|-------------------|-------------|
| **Skill distribution & trust security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) | Community skills published under `anthropic/` namespace impersonate official skills — trust boundary vulnerability. Highest-comment issue. |
| **Organizational skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (14 comments, 7 👍) | Need org-wide skill library / direct sharing links; current workflow requires manual file transfer + upload. |
| **Skill creator toolchain reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍), [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments), [#1061](https://github.com/anthropics/skills/issues/1061) (3 comments, 2 👍) | `run_eval.py` / `run_loop.py` fundamentally broken: 0% recall, Windows crashes, encoding bugs. Blocks skill authoring. |
| **Duplicate / conflicting skill packages** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) | `document-skills` and `example-skills` plugins install identical content → duplicate skills in context window. |
| **Bedrock / cloud provider support** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) | No documented path to use skills with AWS Bedrock. |
| **Skills as MCP endpoints** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | Request to expose skills via MCP protocol for programmatic invocation. |
| **Agent governance / safety patterns** | [#412](https://github.com/anthropics/skills/issues/412) (6 comments, closed) | Demand for policy enforcement, threat detection, trust scoring, audit trails for agent systems. |
| **Compact memory / context efficiency** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments) | Symbolic notation for persistent agent state to reduce context consumption. |
| **Quality gates for AI output** | [#1385](https://github.com/anthropics/skills/issues/1385) (3 comments), [#1367](https://github.com/anthropics/skills/pull/1367) | Three-gate pipeline: pre-task calibration → adversarial review → delivery verification. |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` evaluation pipeline fix | Blocks all skill description-everyone issue (#556, 12 comments); multiple related PRs (#1323, #1099, #1050) converge on same root cause. |
| **[#1323](https://github.com/anthropics/skills/pull/1323)** | Trigger detection fix | Complements #1298; without it, recall remains 0% even after #1298 merges. |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows compatibility | Two independent PRs fixing same class of bugs; Issue #1061 confirms broad impact. |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` meta-skill | Novel universal quality gate; author actively iterating (Issue #1385 proposal). |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Fills a clear catalog gap; comprehensive scope; no competing PR. |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal pain point (every generated document); low complexity, high utility. |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | `color-expert` | Complete, self-contained; recent updates (2026-07-21) indicate active maintenance. |
| **[#538](https://github.com/anthropics/skills/pull/538)** / **[#541](https://github.com/anthropics/skills/pull/541)** | PDF/DOCX case-sensitivity & corruption fixes | Targeted bug fixes for existing skills; low risk, high correctness value. |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is fixing the broken skill-authoring toolchain (`run_eval.py` / `run_loop.py`) so that skill descriptions can be reliably evaluated and optimized — without this, the entire skills marketplace cannot grow organically.**

---

# Claude Code Community Digest — 2026-07-23

---

## 1. Today's Highlights

- **v2.1.218 released**: `/code-review` now runs as a background subagent (no longer clutters conversation history), and screen-reader announcements added for word/line deletions.  
- **Critical macOS regression** (#80002, 56 comments): Claude Desktop fails to dispatch `tools/call` to the first-party Filesystem extension — `tools/list` succeeds but no tool calls ever fire.  
- **Long-standing permission bypass bug** (#39523, 33 comments, 9 months open): `bypassPermissions` mode still doesn't bypass permissions across 12+ duplicate reports.

---

## 2. Releases

### v2.1.218
| Change | Impact |
|--------|--------|
| `/code-review` → background subagent | Review work no longer fills conversation; stacked slash commands become review target |
| Screen-reader announcements for deletions | `Option+Delete`, `Ctrl+W`, `Cmd+Backspace` now announce deleted text for accessibility |

[Release link](https://github.com/anthropics/claude-code/releases/tag/v2.1.218)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#80002](https://github.com/anthropics/claude-code/issues/80002) | **macOS: Filesystem extension `tools/call` never dispatched** | Blocks all file operations in Desktop app on macOS; `tools/list` works but calls silently fail | 56 comments, 25 👍 — highest engagement today |
| [#39523](https://github.com/anthropics/claude-code/issues/39523) | **`bypassPermissions` fundamentally broken (9 months, 12+ dupes)** | Core permission model unreliable; users cannot opt out of approval prompts as documented | 33 comments, 18 👍 — meta-issue tracking systemic failure |
| [#13843](https://github.com/anthropics/claude-code/issues/13843) | **Share conversation context: Claude.ai → Claude Code** | Top-voted enhancement (99 👍); enables seamless handoff between web and CLI workflows | 25 comments, 99 👍 — strong product demand |
| [#50842](https://github.com/anthropics/claude-code/issues/50842) | **Chrome MCP `navigate` silently denies non-pre-approved domains** | No user-facing approval path; browser automation fails silently on new domains | 13 comments, 6 👍 — Windows/Chrome specific |
| [#71726](https://github.com/anthropics/claude-code/issues/71726) | **Desktop: inject queued messages mid-task (CLI steering parity)** | CLI supports "steering" mid-task; Desktop app queues messages until turn ends — UX inconsistency | 9 comments, 16 👍 — feature parity request |
| [#78933](https://github.com/anthropics/claude-code/issues/78933) | **Remote Control: "Cannot read session_url" on connect/disconnect** | Remote Control completely non-functional in Desktop app on Windows | 8 comments — blocking remote workflow |
| [#77966](https://github.com/anthropics/claude-code/issues/77966) | **OAuth loop: `state` param dropped after "sign in again" redirect** | Linux/IntelliJ users stuck in auth loop; cannot complete login | 7 comments, 6 👍 — platform-specific auth regression |
| [#80213](https://github.com/anthropics/claude-code/issues/80213) | **Structured Task tools missing in CLI despite `CLAUDE_CODE_ENABLE_TASKS=true`** | Same account/version works in Desktop but not CLI — account/environment gating suspected | 2 comments, 1 👍 — regression ~v2.1.206 |
| [#80210](https://github.com/anthropics/claude-code/issues/80210) | **Task/Todo tools unexposed despite `todoFeatureEnabled: true`** | Tools vanished ~2026-07-21 14:00 UTC; appears account-gated rollback | 1 comment, 3 👍 — recent regression |
| [#80404](https://github.com/anthropics/claude-code/issues/80404) | **Event-loop starvation: ~200% CPU after hibernate/resume (Windows)** | Idle session spins 2 cores; libuv `uv_backend_timeout() == 0`; self-terminates after minutes | 0 comments — new, severe Windows perf bug |

---

## 4. Key PR Progress (Top 10)

| # | PR | Type | Status | Summary |
|---|----|------|--------|---------|
| [#18217](https://github.com/anthropics/claude-code/pull/18217) | `feat(plugins): add /planwith command` | Feature | **Closed** | Inline plan-mode prompts: `/planwith <prompt>` avoids two-step `/plan` → prompt workflow |
| [#80326](https://github.com/anthropics/claude-code/pull/80326) | `Add account profiles plugin` | Feature | Open | Isolated `CLAUDE_CONFIG_DIR` environments for personal/work/client accounts on one machine |
| [#80008](https://github.com/anthropics/claude-code/pull/80008) | `Add twilight plugin` | Feature | Open | Spec-first design/implement skills with durable focus stack — architectural demo |
| [#80241](https://github.com/anthropics/claude-code/pull/80241) | `fix: Console scrolling to top on text append` | Bugfix | Open | Prevents history jump when Claude writes to console |
| [#80196](https://github.com/anthropics/claude-code/pull/80196) | `fix: Auto-compact never triggers at 100% context` | Bugfix | Open | Statusline shows 100% but compact doesn't fire (v2.1.153, Max sub, 200K mode) |
| [#80195](https://github.com/anthropics/claude-code/pull/80195) | `fix: Instantly hitting usage limits with Max subscription` | Bugfix | Open | Max subscribers incorrectly rate-limited |
| [#80112](https://github.com/anthropics/claude-code/pull/80112) | `Make devcontainer firewall init DNS-resilient` | Reliability | Open | Single domain resolution failure no longer aborts entire firewall setup |
| [#80353](https://github.com/anthropics/claude-code/pull/80353) | `docs(gcp): stop on checksum mismatch` | Security/Infra | Open | Gateway deployment halts if binary checksum fails |
| [#80294](https://github.com/anthropics/claude-code/pull/80294) / [#80229](https://github.com/anthropics/claude-code/pull/80229) | `docs: fix broken links via archive.org` | Docs | Open | Two PRs restoring dead npm package links via Wayback Machine |
| [#80398–#80395](https://github.com/anthropics/claude-code/issues/80398) | **4 docs PRs filed today** | Docs | Open | Covering: skill frontmatter booleans, `context: fork` background behavior, subagent colon restriction, fast-mode model-switch announcements |

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Cross-surface context sharing** | [#13843](https://github.com/anthropics/claude-code/issues/13843) (99 👍) | Highest-voted open enhancement — users want seamless Claude.ai ↔ Code handoff |
| **Permission model overhaul** | [#39523](https://github.com/anthropics/claude-code/issues/39523), [#50842](https://github.com/anthropics/claude-code/issues/50842) | 12+ dupes over 9 months; Chrome MCP lacks approval UI |
| **Agent/session lifecycle management** | [#66202](https://github.com/anthropics/claude-code/issues/66202) (9 👍), [#80401](https://github.com/anthropics/claude-code/issues/80401) | Dismiss completed agents; Task tools vanishing mid-session |
| **Plan-mode ergonomics** | [#18217](https://github.com/anthropics/claude-code/pull/18217) (merged), [#80359](https://github.com/anthropics/claude-code/issues/80359) | `/planwith` shipped; users now want `fableplan` token-efficient tier |
| **Desktop ↔ CLI parity** | [#71726](https://github.com/anthropics/claude-code/issues/71726) (16 👍), [#68859](https://github.com/anthropics/claude-code/issues/68859) | Steering, keybindings (Cmd+N), Remote Control reliability |
| **Model plan tiers** | [#80359](https://github.com/anthropics/claude-code/issues/80359), [#80382](https://github.com/anthropics/claude-code/issues/80382) | "If opusplan exists, so should fableplan"; Max users see contradictory availability |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Permission system unreliability** — `bypassPermissions` broken since July 2025 (#39523); Chrome MCP denies navigation without approval path (#50842); OAuth loops on Linux/IntelliJ (#77966).
2. **Desktop app regressions** — Filesystem extension non-functional on macOS (#80002); Remote Control broken on Windows (#78933, #80400); webview white-screens on 1.24012.1.0 (#80403); Cloudflare Turnstile 403 loops (#68674).
3. **Task/Todo tooling instability** — Tools disappear despite flags enabled (#80213, #80210, #80401); auto-compact fails at 100% context (#80196); Max subscribers hit phantom limits (#80195).
4. **Session/transcript fidelity** — Long assistant messages lost in `.jsonl` during plan-mode interrupts (#80405); focus mode hides substantive content (#50894).
5. **Documentation gaps** — 4 doc issues filed today alone covering undocumented frontmatter values, subagent naming rules, fast-mode announcements, and `context: fork` behavior.
6. **Performance on resume** — Windows event-loop starvation post-hibernate (#80404, mirrors closed macOS #62308); console scroll-jank on output (#80241).

---

*Generated from github.com/anthropics/claude-code data as of 2026-07-23. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-23

---

## 1. Today's Highlights

Four rapid-fire alpha releases (0.146.0-alpha.1 through .4) landed in the last 24 hours, signaling an active stabilization sprint for the next minor version. Meanwhile, the issue tracker is dominated by Windows/WSL sandbox regressions, MCP resource leaks, and a highly-upvoted request (151 👍) to disable the 60-second auto-resolve timeout for confirmation prompts. On the PR side, the `copyberry[bot]` automation merged over a dozen changes covering thread pinning, Guardian review limits, MCP UI support, and analytics flush-on-shutdown.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.146.0-alpha.4` | Alpha | Fourth alpha in the 0.146 series; no changelog published yet |
| `rust-v0.146.0-alpha.3` | Alpha | Third alpha |
| `rust-v0.146.0-alpha.2` | Alpha | Second alpha |
| `rust-v0.146.0-alpha.1` | Alpha | First alpha |

> **Note:** Four alphas in one day suggests rapid iteration on a specific regression or feature gate. Watch for a beta or stable tag soon.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#28969](https://github.com/openai/codex/issues/28969) | **Add setting to disable 60s auto-resolve for questions** | Users want control over confirmation prompt timeouts; blocks long-running interactive workflows. | **151 👍, 53 comments** — highest engagement in dataset |
| [#12491](https://github.com/openai/codex/issues/12491) | **MCP child processes not reaped — 1300+ zombies, 37GB leak** | Critical resource leak in Codex.app GUI; affects long-running sessions. | 5 👍, 27 comments — open since Feb, still active |
| [#21639](https://github.com/openai/codex/issues/21639) | **Hooks no longer run after Desktop update** | Regression breaking custom automation; impacts Pro users on macOS. | 6 👍, 23 comments |
| [#16815](https://github.com/openai/codex/issues/16815) | **WSL agent mode fails: `AbsolutePathBuf deserialized without a base path`** | Blocks Windows+WSL users from using agent mode; path serialization bug. | 13 👍, 22 comments |
| [#27597](https://github.com/openai/codex/issues/27597) | **IDE extension fails in VS Code Remote-SSH** | Remote development workflow broken; CLI works but extension doesn't. | 4 👍, 16 comments |
| [#10599](https://github.com/openai/codex/issues/10599) | **Configure worktree location** | Long-standing UX request; users want control over Git worktree placement. | **66 👍, 16 comments** — high demand, open since Feb |
| [#26984](https://github.com/openai/codex/issues/26984) | **MCP stdio servers leak pipe fds → EMFILE** | Cumulative FD exhaustion breaks long sessions; CLI impact. | 3 👍, 14 comments |
| [#23200](https://github.com/openai/codex/issues/23200) | **Headless remote Linux hosts for mobile without desktop online** | Architectural limitation: mobile requires desktop to stay online. | **42 👍, 13 comments** — strong demand for server-first workflows |
| [#27458](https://github.com/openai/codex/issues/27458) | **Timeout while waiting for user input (plan mode)** | Agent appears to hang on confirmation prompts in sandbox/plan mode. | **43 👍, 12 comments** |
| [#30385](https://github.com/openai/codex/issues/30385) | **Recent local threads missing from sidebar/search (Windows)** | Data exists on disk but UI doesn't surface it; indexing/sync bug. | 9 comments, 0 👍 |

---

## 4. Key PR Progress (Notable Merges)

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#34852](https://github.com/openai/codex/pull/34852) | **Wake sleeping threads for queued agent mail** | Idle threads with durable sleep now resume when agent work arrives. | Fixes missed background agent notifications |
| [#34851](https://github.com/openai/codex/pull/34851) | **Use batch metadata for plugin app summaries** | Loads plugin metadata via authenticated batch API (100/batch), caches on failure. | Improves plugin list reliability & perf |
| [#34850](https://github.com/openai/codex/pull/34850) | **Disable image generation for Free-plan accounts** | Skips `image_generation` tool registration for Free tier; preserves checks for paid. | Plan-gated feature enforcement |
| [#34849](https://github.com/openai/codex/pull/34849) | **Cache remote plugin catalogs by scope** | 3-hour TTL disk cache for global/user/workspace catalogs; background refresh. | Reduces API latency, improves offline resilience |
| [#34847](https://github.com/openai/codex/pull/34847) | **Use Guardian model limits for review sessions** | Clears parent context-window overrides when Guardian model differs. | Prevents context-limit mismatches in reviews |
| [#34846](https://github.com/openai/codex/pull/34846) | **Allow custom providers to opt into standalone web search** | Adds `supports_standalone_web_search` provider setting; enables `web.run` tool. | Extensibility for custom Responses providers |
| [#34845](https://github.com/openai/codex/pull/34845) | **Track multi-agent mode in world state** | Persists `multi_agent_mode` across history changes; survives compaction. | Durable multi-agent context |
| [#34840](https://github.com/openai/codex/pull/34840) | **Add persisted thread pinning to app server** | `isPinned` field on threads; filter + pagination in `thread/list`. | UX: pinned threads stay visible |
| [#34839](https://github.com/openai/codex/pull/34839) | **Preserve user input when MCP startup interrupted** | Retains submitted input in conversation history if MCP tools abort during startup. | Prevents lost user messages |
| [#34831](https://github.com/openai/codex/pull/34831) | **Flush analytics before in-process app server shutdown** | Bounded queue flush on shutdown; ensures completed-turn events deliver. | Observability reliability |

> **Pattern:** The `copyberry[bot]` author indicates automated/internal merges — these are likely part of a coordinated release train for 0.146.

---

## 5. Feature Request Trends

From the issue corpus, the most-requested directions are:

1. **Windows/WSL First-Class Support** — Path resolution (`AbsolutePathBuf`), sandbox setup, Store update regressions, WSL agent mode. 6+ open issues in 24h.
2. **MCP Reliability** — FD leaks, zombie processes, stdio server cleanup, UI resource URI validation. Core infrastructure pain.
3. **Remote/Headless Workflows** — Mobile without desktop online (#23200, 42 👍), Remote-SSH extension fixes, worktree location config (#10599, 66 👍).
4. **User Control Over Agent Behavior** — Disable auto-resolve timeout (#28969, 151 👍), persist side chats (#26227, 17 👍), plan-mode violation fixes (#32594).
5. **Thread/Session Management** — Pinning (now merged #34840), missing sidebar threads (#30385), iOS↔CLI sync (#34632).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Windows/WSL instability** | 5+ issues in 24h: sandbox failures, path deserialization, Store update breaks, cold-launch spawns 300+ processes (#34025), background updates kill tray app (#33321) |
| **MCP resource leaks** | Zombie processes (1300+), 37GB memory leak (#12491), FD exhaustion/EMFILE (#26984), pipe fd leaks — all upstream in stdio server management |
| **Silent regressions in auto-updates** | Store updates break WSL paths (#34782), migrate threads to new IDs losing history (#33774), hooks stop working (#21639) — no rollback/visibility |
| **Mobile tethered to desktop** | #23200 (42 👍): "desktop app is only a loose control layer" — users want server-first architecture |
| **Confirmation prompt UX** | 60s auto-resolve cannot be disabled (#28969, 151 👍); plan mode timeouts waiting for input (#27458, 43 👍) |
| **Extension ↔ CLI parity** | Remote-SSH works in CLI but not extension (#27597); new chat creation fails on Windows extension (#23209) |

---

*Generated from `github.com/openai/codex` data as of 2026-07-23. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-23

## 1. Today's Highlights
Three releases shipped in the last 24 hours: stable **v0.52.0**, preview **v0.53.0-preview.0**, and a nightly build. The preview introduces a critical fix for A2A cancelled tool responses that prevented 400 Bad Request errors, plus foundational work on an LLM-based triage orchestrator. A security patch (GHSA-wpqr-6v78-jr5g) blocking variable-expansion bypasses is under review.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.52.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0)** | Stable | • Excludes transient CI config files from workspace context ([#28216](https://github.com/google-gemini/gemini-cli/pull/28216))<br>• Adds caretaker-triage worker core modules ([#28472](https://github.com/google-gemini/gemini-cli/pull/28472)) |
| **[v0.53.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0-preview.0)** | Preview | • Groups cancelled tool responses & coalesces consecutive roles to prevent 400 errors ([#28407](https://github.com/google-gemini/gemini-cli/pull/28407))<br>• Implements LLM triage orchestrator & container build ([#28472](https://github.com/google-gemini/gemini-cli/pull/28472)) |
| **v0.52.0-nightly.20260723.g9681621c6** | Nightly | • Sequentially verifies cached credentials, restores `GOOGLE_APPLICATION_CREDENTIALS` fallback ([#28472](https://github.com/google-gemini/gemini-cli/pull/28472))<br>• Adds `eval:coverage` command for built-in tool coverage reporting ([#28169](https://github.com/google-gemini/gemini-cli/pull/28169)) |

## 3. Hot Issues (Top 10 by Community Engagement)
| Issue | Priority | Why It Matters | Community Signal |
|-------|----------|----------------|------------------|
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent recovery after `MAX_TURNS` reported as GOAL success | P1 | Masks true failures; subagents claim success despite hitting turn limits | 12 comments, 👍2, `status/need-retesting` |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent hangs indefinitely | P1 | Blocks core workflows; users must disable sub-agents to proceed | 8 comments, 👍8, `status/need-retesting` |
| **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** Robust component-level evaluations | P1 | Scaling eval infra (76 behavioral tests across 6 models) for reliability | 7 comments, `aiq/eval_infra` epic |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** Assess AST-aware file reads/search/mapping | P2 | Potential to reduce token noise & misaligned reads via precise method-boundary tooling | 7 comments, 👍1, investigation epic |
| **[#27191](https://github.com/google-gemini/gemini-cli/issues/27191)** Quota falsely shows 100% used, CLI stops | P2 | **Closed** — quota accounting bug causing false exhaustion | 6 comments, 👍2 |
| **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** Gemini under-utilizes custom skills/sub-agents | P2 | Agents require explicit invocation; autonomous delegation weak | 6 comments |
| **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** Auto Memory retries low-signal sessions indefinitely | P2 | Wastes cycles re-processing unreadable transcripts | 5 comments |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell execution stuck at "Waiting input" after completion | P1 | Frequent hang on simple commands; UX breakage | 4 comments, 👍3 |
| **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** Browser agent lacks session takeover/lock recovery | P3 | Fail-fast on locked profiles breaks persistent sessions | 4 comments |
| **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser subagent fails on Wayland | P1 | Platform-specific regression affecting Linux users | 4 comments, 👍1, `agent/browser` |

## 4. Key PR Progress (Top 10 by Impact/Activity)
| PR | Status | Description |
|----|--------|-------------|
| **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403)** | Open | **Security (P1)**: Blocks `$VAR`/`${VAR}` expansion bypass (GHSA-wpqr-6v78-jr5g); hardens deduplication workflow |
| **[#28446](https://github.com/google-gemini/gemini-cli/pull/28446)** | Open | **Auth (P1)**: Uses native `fetch` for OAuth token exchange to fix "Premature close" on headless VPSes ([#28440](https://github.com/google-gemini/gemini-cli/issues/28440)) |
| **[#28469](https://github.com/google-gemini/gemini-cli/pull/28469)** | Open | Rotates session ID on permanent model fallback to `gemini-2.5-flash`, preventing stateful API errors |
| **[#28485](https://github.com/google-gemini/gemini-cli/pull/28485)** | Open | Adds `gemini-3.5-flash` to model selector for all users (was missing from legacy `buildAvailableModels` path) |
| **[#28509](https://github.com/google-gemini/gemini-cli/pull/28509)** | Open | Filters `thought: true` parts from `getHistoryTurns` when context management disabled — prevents duplicate reasoning blocks |
| **[#28506](https://github.com/google-gemini/gemini-cli/pull/28506)** | **Closed** | Propagates `AbortSignal` in `/compress` command, enabling cancellation of background compression |
| **[#28431](https://github.com/google-gemini/gemini-cli/pull/28431)** | Open | **Infra**: Cloud Run Job, Workflows, Dockerfile for SSR Code Generation Pipeline (PR generator) |
| **[#28508](https://github.com/google-gemini/gemini-cli/pull/28508)** | Open | Auto-generated changelog for **v0.52.0** (review pending) |
| **[#28507](https://github.com/google-gemini/gemini-cli/pull/28507)** | Open | Auto-generated changelog for **v0.53.0-preview.0** (review pending) |
| **[#28447](https://github.com/google-gemini/gemini-cli/pull/28447)** | Open | **Docs**: Adds Windows PowerShell troubleshooting for `gemini` command post-install |

## 5. Feature Request Trends
1. **Agent Autonomy & Delegation** — Multiple issues (#21968, #22093, #20195) request smarter, automatic sub-agent/skill invocation without explicit user prompting.
2. **AST-Aware Tooling** — Epic #22745 + #22746 explore precise code navigation (method-level reads, symbol search) to cut token waste and turn count.
3. **Eval & Observability Scaling** — #24353 drives component-level evals; #22598 asks for sub-agent trajectory visibility in `/chat share`; new `eval:coverage` command shipped.
4. **Memory System Hardening** — Cluster of issues (#26516, #26522, #26523, #26525) target Auto Memory: deduplication, redaction-before-send, patch validation, logging reduction.
5. **Browser Agent Resilience** — Wayland support (#21983), lock recovery (#22232), settings override respect (#22267) indicate push for production-grade browser automation.

## 6. Developer Pain Points
- **Sub-agent Reliability**: Hangs (#21409), false success reporting (#22323), unwanted auto-invocation (#22093), missing context in bug reports (#21763).
- **Shell/Process Execution**: "Waiting input" ghost state (#25166), tmp script sprawl (#23571), destructive command usage (#22672).
- **Quota & Auth Flakiness**: False 100% quota (#27191), OAuth "Premature close" on headless boxes (#28440).
- **Platform Gaps**: Wayland browser failure (#21983), PowerShell install broken on Windows (#28447), symlink agent discovery (#20079).
- **Tool Limits**: 400 error >128 tools (#24246) forces manual tool-scoping workarounds.
- **UI/Terminal Flicker**: Resize performance (#21924), external editor corruption (#24935).

---

*Generated from `google-gemini/gemini-cli` GitHub data (releases, issues, PRs updated 2026-07-23).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-23

## Today's Highlights
Three patch releases (v1.0.74-1 through v1.0.74-3) shipped in the last 24 hours, adding a first-run sandbox opt-in splash, Gemini 3.6 Flash support, and fixes for session multiplexing dialog leaks and the `$` interactive shell shortcut. Meanwhile, the issue tracker shows a surge of regressions: BYOK authentication broken in `--acp` mode, zombie process accumulation on Linux, a React/Ink render-loop freeze regression on Windows, and multiple tmux-related terminal integration failures.

## Releases
| Version | Key Changes |
|---------|-------------|
| **v1.0.74-3** | Fixes and changes (details not expanded in feed) |
| **v1.0.74-2** | Fixes and changes (details not expanded in feed) |
| **v1.0.74-1** | • First-run splash to opt into default sandbox<br>• Added support for **gemini-3.6-flash**<br>• Fixed session multiplexing: open dialogs no longer leak across sessions; pickers reopen on switch-back<br>• Improved `$` interactive shell shortcut behavior |

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Title | Area | Signal | Why It Matters |
|---|-------|------|--------|----------------|
| [#443](https://github.com/github/copilot-cli/issues/443) | Built-in PDF Reading Support | tools | 👍 33 · 6 comments | Highest-voted open request; users need native PDF ingestion for docs/papers without external tooling. |
| [#4016](https://github.com/github/copilot-cli/issues/4016) | BYOK rejected in `--acp` mode (regression) | auth, non-interactive, models | 👍 4 · 5 comments | Blocks custom-provider workflows in ACP/stdin mode; same class as previously fixed #3048/#3902. |
| [#4163](https://github.com/github/copilot-cli/issues/4163) | Child-process zombies accumulate on Linux | platform-linux, tools | 👍 2 · 3 comments | ~2 zombies/min per session; leaks PID table, degrades long-running agents. |
| [#1688](https://github.com/github/copilot-cli/issues/1688) | Configurable auto-compaction threshold | context-memory, config | 👍 5 · 2 comments | Critical for large-context models (Opus 4.6); current trigger too late, latency spikes at 45–60% usage. |
| [#4161](https://github.com/github/copilot-cli/issues/4161) | `task_complete` unavailable after switching to autopilot | agents, tools | 👍 1 · 2 comments | Regression of #1523; breaks agent handoff workflows. |
| [#4165](https://github.com/github/copilot-cli/issues/4165) | `--resume` hangs at cold start on Windows | sessions, platform-windows | 👍 1 · 2 comments | Blocks session persistence on Windows; workaround requires extra step. |
| [#4222](https://github.com/github/copilot-cli/issues/4222) | React/Ink render-loop freeze **regression** (v1.0.72+) | terminal-rendering, platform-windows | 👍 0 · 0 comments | Reopens closed #2802; main pane freezes, output swallowed, requires `/resume` to recover. |
| [#4223](https://github.com/github/copilot-cli/issues/4223) | Shell completion never detected inside tmux | terminal-rendering, tmux | 👍 0 · 0 comments | Commands run & output appears, but CLI hangs “still running” forever. |
| [#4219](https://github.com/github/copilot-cli/issues/4219) | Hard crash on Windows when `notifications` enabled | platform-windows, crash | 👍 0 · 0 comments | Native access violation (`0xc0000409`) on toast path; makes notifications unusable. |
| [#4218](https://github.com/github/copilot-cli/issues/4218) | Allow configuring Auto mode model pool | agents, config | 👍 6 · 0 comments | Cost/behavior predictability; users want allow-list for Auto model selection. |

## Key PR Progress
Only one PR updated in the last 24h:

| # | Title | Status | Notes |
|---|-------|--------|-------|
| [#3163](https://github.com/github/copilot-cli/pull/3163) | ViewSonic monitor | OPEN | Appears to be a test/misc PR referencing other issues (#2591, #3561, #3559); no functional changes visible. |

## Feature Request Trends
1. **Model & Cost Control** — Configurable Auto model pool (#4218), per-subagent usage breakdown (#4207), adjustable compaction threshold (#1688).
2. **Agent Ergonomics** — Inline custom-agent invocation & chaining (#4208), `skill` tool alias for agents (#4209), `task_complete` reliability (#4161).
3. **Context & Memory** — Accurate MCP tool footprint reporting (#4189), PDF ingestion (#443), OSC 133 shell integration for prompt navigation (#3428).
4. **Enterprise/ACP** — BYOK in ACP mode (#4016), MCP policy handshake stall (#4206), BigInt serialization in MCP responses (#4211).
5. **Observability** — OTel billing attributes for subagents (#4224), configurable retry count (#4210).

## Developer Pain Points (Recurring Themes)
- **Terminal Integration Fragility** — tmux breaks shell-completion detection (#4223), prompt/menu rendering (#4212), and OSC 133 support (#3428); Windows render-loop regression (#4222) and `--resume` hang (#4165).
- **Process Management** — Zombie accumulation on Linux (#4163), exit-time crashes on Windows (#4217), notification-path crashes (#4219).
- **Authentication & ACP** — BYOK regression in `--acp --stdio` (#4016) blocks headless/custom-provider workflows.
- **Subagent Observability** — Spammed server errors (#4226), coordinator “Working” stuck state (#4225), missing billing spans (#4224), no per-agent usage breakdown (#4207).
- **Permission Model False Positives** — Plan mode blocks read-only `gh api`/GraphQL (#4220), git `-L` args misclassified as paths (#4221).

---
*Digest generated from GitHub data as of 2026-07-23. Links point to live issues/PRs on github.com/github/copilot-cli.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-23

---

## 1. Today's Highlights
- **Critical API compatibility fix landed**: PR #2535 scopes `prompt_cache_key` to official Moonshot endpoints, unblocking third-party providers (NVIDIA NIM, etc.) that rejected the parameter with HTTP 400.
- **MCP tool schema validation tightened**: Issue #2531 reveals Moonshot API now rejects non-compliant JSON schemas (e.g., `anyOf` without explicit `type`), requiring client-side sanitization before send.
- **Windows Unicode regression**: `kimi web` crashes on Chinese-locale Windows when stdout is redirected due to `gbk` encoding failure on the `➜` banner character (#2532).

---

## 2. Releases
*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2318](https://github.com/MoonshotAI/kimi-cli/issues/2318) | **TPD rate limit miscalculation (1.5M tokens reported)** | Users hit false rate limits; suggests token accounting bug in usage tracking. | 👍 2 · 1 comment · Open since 2026-05-18 |
| [#2531](https://github.com/MoonshotAI/kimi-cli/issues/2531) | **MCP tool schemas rejected by Moonshot API (HTTP 400)** | Breaks all MCP integrations; schema must conform to Moonshot-flavored JSON Schema (strict `anyOf` rules). | New · 1 comment |
| [#2534](https://github.com/MoonshotAI/kimi-cli/issues/2534) | **Unsupported `prompt_cache_key` on 3rd-party APIs** | Blocks NVIDIA NIM and other Kimi-compatible endpoints; fixed by PR #2535. | New |
| [#2533](https://github.com/MoonshotAI/kimi-cli/issues/2533) | **Per-agent model selection for sub-agents** | High-value feature request: enable cost-tiered multi-agent workflows (cheap models for simple tasks). | New |
| [#2532](https://github.com/MoonshotAI/kimi-cli/issues/2532) | **`kimi web` crashes on Windows with redirected stdout (UnicodeEncodeError gbk)** | Blocks CI/automation on Chinese Windows; banner character `➜` (U+279C) not encodable in `gbk`. | New |

---

## 4. Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#2535](https://github.com/MoonshotAI/kimi-cli/pull/2535) | **fix(llm): scope prompt cache keys to Moonshot APIs** | Open | **Critical fix** — restores compatibility with third-party Kimi endpoints (NVIDIA NIM, etc.) by only sending `prompt_cache_key` to official Moonshot APIs. Resolves #2534. |
| [#2524](https://github.com/MoonshotAI/kimi-cli/pull/2524) | **fix(tools): count StrReplaceFile replacements against running content** | Open | Fixes undercounted replacements when chained edits depend on prior edits; improves accuracy of edit reporting. Resolves #2526. |
| [#2530](https://github.com/MoonshotAI/kimi-cli/pull/2530) | **fix(shell): stop blocking until timeout when detached child holds pipes** | Open | Prevents hang in foreground shell when backgrounded process (`cmd &`) keeps stdout/stderr open; checks exit code before waiting for EOF. Resolves #2468. |

---

## 5. Feature Request Trends
1. **Multi-model agent orchestration** (#2533) — Top ask: assign distinct models per sub-agent to optimize cost/latency.
2. **MCP schema compliance tooling** (#2531) — Implicit demand for client-side schema validation/sanitization before API send.
3. **Windows-first reliability** (#2532) — Encoding/redirection issues signal need for CI on non-UTF8 locales.
4. **Rate-limit transparency** (#2318) — Developers want accurate token accounting and clearer quota surfaces.

---

## 6. Developer Pain Points
- **Third-party API breakage**: Moonshot-specific parameters (`prompt_cache_key`) leaked to compatible endpoints, causing 400 errors — now fixed in #2535.
- **MCP integration fragility**: Schema validation tightened server-side without client-side guards; tool calls fail silently until schema sanitized.
- **Windows locale/encoding gaps**: Banner printing crashes on redirected stdout in Chinese locales; no fallback or encoding detection.
- **Shell command hangs**: Backgrounded processes holding pipes caused indefinite waits; timeout-only behavior was unexpected.
- **Edit tracking inaccuracy**: `StrReplaceFile` reported wrong replacement counts for chained edits, confusing automation consumers.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-23

## Today's Highlights
A critical subscription outage dominates discussion: **all Go-tier models return "Request blocked by upstream provider"**, affecting paying users across multiple reports (#38218, #38293, #38368). Simultaneously, the top-voted feature request (#6231, 185 👍) pushes for auto-discovery of models from OpenAI-compatible local providers (LM Studio, Ollama, llama.cpp). A cluster of desktop stability regressions—local-server drops, Plan/Build mode loss, and CPU spin while idle—signals v1.18.x quality concerns.

---

## Releases
**pr-38252-videos** — Verification recordings for PR #38252 (before/after). No new version tag published in the last 24 h.

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6231](https://github.com/anomalyco/opencode/issues/6231) | **Auto-discover models from OpenAI-compatible provider endpoints** | Eliminates manual `opencode.json` model lists for LM Studio, Ollama, llama.cpp; models change frequently locally. | **185 👍, 28 comments** — highest engagement in dataset |
| [#38218](https://github.com/anomalyco/opencode/issues/38218) | **All subscription models return "Request blocked by upstream provider"** | Paid Go tier completely unusable; every model call fails. | 22 comments, 5 👍 — urgent, revenue-impacting |
| [#38293](https://github.com/anomalyco/opencode/issues/38293) | **Go subscription not working (Russian)** | Duplicate of #38218; confirms global scope. | 15 comments |
| [#19466](https://github.com/anomalyco/opencode/issues/19466) | **OpenCode uses ~50% CPU while idle/waiting on rate limits** | Drains laptop battery, indicates busy-loop in rate-limit backoff. | 15 comments, 11 👍 |
| [#27018](https://github.com/anomalyco/opencode/issues/27018) | **Desktop v1.14.48: localserver disconnects after send** | Breaks core desktop workflow; regression from prior version. | 12 comments, 2 👍 |
| [#37970](https://github.com/anomalyco/opencode/issues/37970) | **Plan/Build mode toggle removed in latest version** | Loss of intentional planning workflow; unpredictable agent behavior. | 10 comments, 1 👍 |
| [#18011](https://github.com/anomalyco/opencode/issues/18011) | **LM Studio shows only 3/9 models despite full `/v1/models`** | Incomplete auto-discovery; undermines local-provider UX. | 6 comments, 4 👍 |
| [#26220](https://github.com/anomalyco/opencode/issues/26220) | **Infinite loop after tool calls complete (Zen/big-pickle)** | Agent hangs post-tool-use; process stays alive but unresponsive. | 6 comments, 3 👍 |
| [#13817](https://github.com/anomalyco/opencode/issues/13817) | **Limit FPS target rate for remote/RDP work** | High CPU on remote sessions; accessibility/performance need. | 5 comments, 4 👍 — **CLOSED** |
| [#34407](https://github.com/anomalyco/opencode/issues/34407) | **CLI renders LaTeX math as raw source** | Degrades technical/academic workflow; no terminal math rendering. | 4 comments |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#38424](https://github.com/anomalyco/opencode/pull/38424) | **fix(provider): select prompt cache keys by SDK** | Bug fix | Routes `promptCacheKey`/`prompt_cache_key` per provider SDK (OpenAI, Azure, xAI, Mistral vs DeepInfra, Cerebras); avoids sending cache keys for generic OpenAI-compatible/OpenRouter. |
| [#35050](https://github.com/anomalyco/opencode/pull/35050) | **fix(core): skip ahead by counting newlines at high offset** | Perf fix | Speeds up `ReadTool.read` at large line offsets (closes #35044). |
| [#38423](https://github.com/anomalyco/opencode/pull/38423) | **feat(ai): preserve raw finish reasons** | Feature | Adds `rawFinishReason` to `step-finish`/`finish` events; surfaces provider-native reasons (OpenAI Responses, Anthropic, Gemini, Bedrock). |
| [#38067](https://github.com/anomalyco/opencode/pull/38067) | **fix(session): edge-trigger build-switch reminder** | Bug fix | Replaces full-history scan with edge-triggered detection for Plan→Build mode change (closes #38066). |
| [#37732](https://github.com/anomalyco/opencode/pull/37732) | **fix(opencode): surface empty model responses** | Bug fix | Records assistant messages when provider returns `stop` + usage but no text/tool-call (closes #37735). |
| [#38374](https://github.com/anomalyco/opencode/pull/38374) | **fix(ai): handle incomplete responses without reasons** | Bug fix | Accepts OpenAI `incomplete_details` when optional `reason` omitted; distinguishes from normal completion. |
| [#38420](https://github.com/anomalyco/opencode/pull/38420) | **feat(opencode): add `--no-project-instructions` switch** | Feature | CLI flag + `OPENCODE_DISABLE_PROJECT_INSTRUCTIONS` env for automation treating repo instructions as untrusted. |
| [#38418](https://github.com/anomalyco/opencode/pull/38418) | **fix(web): client time < server time breaks model replies** | Bug fix | Unifies timestamp ordering on `created` field; fixes silent failure when client clock lags (fixes #38268). |
| [#38397](https://github.com/anomalyco/opencode/pull/38397) | **refactor(tui): generate syntax from V2 theme** | Refactor | Derives full `SyntaxStyle` from V2 tokens; removes parallel V1 syntax theme; preserves 101+ scopes. |
| [#38414](https://github.com/anomalyco/opencode/pull/38414) | **fix(core): migrate named agent colors** | Bug fix | Preserves named colors in V1 schema; migrates legacy names to `#aaaaaa` before V2 validation. |

---

## Feature Request Trends
1. **Zero-config local model discovery** — #6231 (185 👍) + #18011 show strong demand for automatic `/v1/models` polling from LM Studio, Ollama, llama.cpp, etc.
2. **Plan/Build mode restoration** — #37970, #38364, #38421 indicate the toggle was removed or broken in v1.18.x; users want explicit planning vs. execution separation.
3. **Subscription reliability & self-serve diagnostics** — Multiple Go-tier outages (#38218, #38293, #38368) with no status page or CLI health check.
4. **Portable/air-gapped distribution** — #38391 requests USB creator for corporate, conference, and privacy contexts.
5. **Terminal richness** — LaTeX math rendering (#34407), FPS limiting for remote (#13817), tooltip standardization (#38403).
6. **Tab/session safety** — #38350: accidental tab close loses context; users want confirmation or undo.

---

## Developer Pain Points (Recurring Frustrations)
- **Go subscription broken** — “Request blocked by upstream provider” on every model; no workaround, no ETA.
- **Desktop instability** — Local server flips red/disconnects after a few turns (v1.18.4, #38419); localserver regressed in v1.14.48 (#27018).
- **Idle CPU burn** — ~50% core while rate-limited (#19466); busy-loop in backoff logic.
- **Agent runaway loops** — Infinite loop post-tool-use (#26220); process never yields.
- **Time-sync fragility** — Client clock < server clock silently kills model replies (#38418, #38268).
- **Incomplete provider integration** — LM Studio shows 3/9 models (#18011); OpenAI-compatible endpoints require manual config (#6231).
- **UI regressions** — Plan/Build toggle gone (#37970, #38364, #38421); tabs close too easily (#38350); new UI called “anti-human” (#38416).
- **Data corruption risk** — Subagent wrote null bytes instead of content (#38356).

---

*Generated from anomalyco/opencode GitHub data (issues & PRs updated 2026-07-22 → 2026-07-23).*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-23

## Today's Highlights
No new releases shipped in the last 24 hours, but the repository saw intense maintenance activity: **50 issues** and **29 PRs** were updated. The dominant themes are provider reliability (timeouts, retries, OAuth), Windows compatibility, session/auth persistence, and TUI rendering fixes. Several long-standing regressions (GitHub logout, `httpIdleTimeoutMs`, external editor performance) received fixes, while new provider support (StepFun, OpenRouter OAuth, Bedrock Mantle) expands the ecosystem.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6476](https://github.com/earendil-works/pi/issues/6476) | **Regression: `httpIdleTimeoutMs` ignored for self-hosted OpenAI-compatible providers** (v0.80.6) | Breaks self-hosted/vLLM workflows; requests time out after minutes despite config. Fixed in v0.80.3 → regression in v0.80.6. | 12 comments, **CLOSED** |
| [#6686](https://github.com/earendil-works/pi/issues/6686) | **Pi automatically logs out of GitHub** (recurring since #2725) | Persistent auth instability across macOS/Linux; blocks CI and long-running sessions. | 10 comments, **CLOSED** (no-action) |
| [#6768](https://github.com/earendil-works/pi/issues/6768) | **Compaction fails with Copilot Enterprise** (421 Misdirected Request) | Enterprise users cannot compact context; blocks cost-saving workflows. | 8 comments, **8 👍**, **OPEN** |
| [#6210](https://github.com/earendil-works/pi/issues/6210) | **`/scoped-models` cannot select model IDs containing brackets** | Regex parsing breaks valid custom model names (e.g., `custom/model[1m]`). | 8 comments, **OPEN** (inprogress) |
| [#6459](https://github.com/earendil-works/pi/issues/6459) | **Custom keybindings require `/reload` on initial session start** | Affects extension authors (e.g., `pi-powerline-footer`); UX friction for power users. | 7 comments, **CLOSED** |
| [#6774](https://github.com/earendil-works/pi/issues/6774) | **Ctrl+G external editor slow when `os.tmpdir()` is crowded** | Temp-file creation in shared `/tmp` causes latency; fix: use private `mkdtemp` subdir. | 7 comments, **CLOSED** |
| [#6621](https://github.com/earendil-works/pi/issues/6621) | **Dynamic system prompt causes accidental cache invalidation** | Critical for local inference (slow prefill); cache breakage wastes compute. | 6 comments, **1 👍**, **CLOSED** |
| [#6619](https://github.com/earendil-works/pi/issues/6619) | **Windows: dependent extensions show absolute paths in banner** | Misleading UI; breaks extension discoverability on Windows. | 5 comments, **CLOSED** |
| [#6911](https://github.com/earendil-works/pi/issues/6911) | **OpenAI/Anthropic SDK retries sleep full `Retry-After` (days), `Escape` cannot abort** | Uninterruptible long sleeps on 429; blocks user cancellation. | 5 comments, **CLOSED** |
| [#6652](https://github.com/earendil-works/pi/issues/6652) | **TUI crash log hardcodes `~/.pi/agent/pi-crash.log`, ignores `PI_CODING_AGENT_DIR`** | Crash logs create spurious `.pi` dirs; breaks custom agent dir setups. | 4 comments, **CLOSED** |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#6987](https://github.com/earendil-works/pi/pull/6987) | **fix(tui): align grapheme widths with terminal cells** | Addresses fundamental Unicode rendering issues (emoji, CJK, combining chars). | **OPEN** |
| [#6341](https://github.com/earendil-works/pi/pull/6341) | **feat(ai): support constrained sampling** | Adds `constrainedSampling` config for provider-side JSON-schema/grammar-constrained tool args (OpenAI `strict`, guided JSON/CFG). | **OPEN** (to-discuss) |
| [#6980](https://github.com/earendil-works/pi/pull/6980) | **fix(ai): make provider retries abortable** | Replaces SDK retries with common helper: enforces `maxRetryDelayMs`, respects `AbortSignal`. Fixes #6911. | **OPEN** |
| [#6967](https://github.com/earendil-works/pi/pull/6967) | **feat(coding-agent): expose session metadata to bash tools** | Injects `PI_SESSION_ID`, `PI_SESSION_FILE`, `PI_PROVIDER`, `PI_MODEL`, `PI_REASONING` into bash env for subprocess awareness. | **CLOSED** |
| [#6971](https://github.com/earendil-works/pi/pull/6971) | **feat(coding-agent): emit `bash_execution_update` events** | Enables real-time streaming of bash output to clients (e.g., Emacs integration). Fixes #6703. | **OPEN** |
| [#6965](https://github.com/earendil-works/pi/pull/6965) | **fix: isolate test environment** | Runs suite from explicit allowlist; isolates `HOME`, `TMP`, Git, npm, XDG state; guards cleanup. | **OPEN** (inprogress) |
| [#6881](https://github.com/earendil-works/pi/pull/6881) | **feat(ai): use provider-reported cost when available** | Reads `usage.cost` / `cost_details.upstream_inference_cost` from responses; falls back to catalog rates. | **OPEN** (inprogress) |
| [#6903](https://github.com/earendil-works/pi/pull/6903) | **fix(coding-agent): speed up external editor launch** | Moves temp file to private subdir (`mkdtemp`); shared impl for main/extension editors. Fixes #6774. | **CLOSED** |
| [#6927](https://github.com/earendil-works/pi/pull/6927) | **Add native OpenRouter OAuth support** | Browser auth + PKCE S256 + ephemeral localhost callback; returns user-controlled API key for text/image. | **CLOSED** |
| [#6958](https://github.com/earendil-works/pi/pull/6958) | **write TUI debug/crash logs into configured agent dir** | Respects `PI_CODING_AGENT_DIR`; fixes #6652. | **CLOSED** |

*Notable merges:* [#6984](https://github.com/earendil-works/pi/pull/6984) (Bedrock `forceAdaptiveThinking`), [#6960](https://github.com/earendil-works/pi/pull/6960) (StepFun providers), [#6916](https://github.com/earendil-works/pi/pull/6916) (AgentHarness execution tools), [#6955](https://github.com/earendil-works/pi/pull/6955) (OpenAI websocket `previous_response_not_found` handling).

---

## Feature Request Trends
1. **Model-switching UX** — MRU (most-recently-used) cycling requested (#6982) over alphabetic `Ctrl+P`/`Ctrl+Shift+P`.
2. **OAuth & auth flexibility** — Native OpenRouter OAuth (#6927), Anthropic Pro/Max session billing via OAuth (#6979), GitHub logout fix (#6686).
3. **Extension API depth** — Structured approval requests (#5954), per-block hidden-thinking labels (#6988), session metadata exposure (#6967).
4. **Thinking/token transparency** — `get_available_thinking_levels` RPC (#6865), provider-reported cost adoption (#6881), adaptive thinking compat (#6986).
5. **Session hygiene** — `--no-session` temp dir cleanup (#6924), crash log dir respect (#6652), keybinding load order (#6459).
6. **Provider diversity** — StepFun (CN/global) (#6960), Bedrock Mantle OpenAI Responses (#6216), Bedrock profile fixes (#6957).

---

## Developer Pain Points (Recurring Frustrations)
| Area | Symptoms | Representative Issues |
|------|----------|----------------------|
| **Provider reliability** | Timeouts ignored (#6476), unabortable retries (#6911), compaction failures (#6768), websocket errors (#6955) | #6476, #6911, #6768, #6955 |
| **Auth/session persistence** | GitHub logout (#6686), OAuth billed as API not Pro (#6979), keybindings need reload (#6459), temp session dirs leak (#6924) | #6686, #6979, #6459, #6924 |
| **Windows compatibility** | Dependent extension paths (#6619), Bedrock env var precedence (#6957), temp dir perf (#6774) | #6619, #6957, #6774 |
| **Cache/cost observability** | Dynamic prompt invalidates cache (#6621), OpenRouter cache breakpoint stalls (#6940), cost fallback inaccuracy (#6881) | #6621, #6940, #6881 |
| **TUI rendering fundamentals** | Grapheme width miscalculation (#6987), code blocks show raw backticks (#5566), startup benchmark broken (#6975) | #6987, #5566, #6975 |
| **Extension ecosystem trust** | Malicious package report (#6972), gallery visibility (#6991), concurrent dialog hangs (#6978) | #6972, #6991, #6978 |

---

*Digested from `earendil-works/pi` GitHub activity (2026-07-22 → 2026-07-23). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-23

## Today's Highlights
The project is in a heavy stabilization phase: a critical P1 bug forcing `enable_thinking=false` on side-queries (breaking `web_fetch` and TokenPlan endpoints) was closed, while multiple CI/CD regressions (E2E test failures, release pipeline breaks, autofix starvation) surfaced simultaneously. Core engineering effort is concentrated on cold-start performance (lazy-loading GenAI SDK), npm 12 compatibility for update checks, and hardening the Web Shell's mobile/Windows experience.

---

## Releases
**No product release.** Only a benchmark POC prerelease (`v0.0.0-benchmark-poc.20260722.1`) was published to validate the GitHub Actions → ECS benchmark worker → GitHub result publication path.

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7284](https://github.com/QwenLM/qwen-code/issues/7284) | **P1 Bug: `runSideQuery` forces `enable_thinking=false`, breaking TokenPlan endpoints** | Closed. Root cause of `web_fetch` 400 errors; affected all side-query consumers (classifiers, summarizers). | 5 comments, P1 priority, blocked core tooling |
| [#7516](https://github.com/QwenLM/qwen-code/issues/7516) | **Main CI failed: E2E Tests on `d064bd7`** | Open. Red CI on `main` blocks every PR; indicates flaky or environment-sensitive E2E suite. | 3 comments, `status/ready-for-agent`, `autofix/skip` |
| [#7549](https://github.com/QwenLM/qwen-code/issues/7549) | **Release failed for `v0.20.1-nightly.20260723`** | Open. Nightly release pipeline broken at `quality` job; signals release automation instability. | 1 comment, `github-actions[bot]` authored |
| [#7515](https://github.com/QwenLM/qwen-code/issues/7515) | **Update check fails with "registry error" (npm 12 compat)** | Open. `npm view` returns array in npm 12 (Node 26), breaking version parsing. Affects all users on latest Node. | 2 comments, P3, `welcome-pr` |
| [#7543](https://github.com/QwenLM/qwen-code/issues/7543) | **`getNpmCliPath` returns mise bash wrapper instead of `npm-cli.js`** | Open. Update check broken for mise/asdf users; wrapper resolution logic flawed. | 1 comment, P2, `welcome-pr` |
| [#7306](https://github.com/QwenLM/qwen-code/issues/7306) | **Harden tool-output budgeting, observability, artifact lifecycle** | Open. Phase 1 complete; tracking Phase 2 for production-grade tool output controls. | 4 comments, P2, `need-discussion` |
| [#7264](https://github.com/QwenLM/qwen-code/issues/7264) | **Cold-start follow-ups: lazy-load remaining ACP eager imports (17 MB / 2420 modules)** | Open. Directly impacts startup latency; follow-up to #4748 audit. | 3 comments, P2, `performance` |
| [#6577](https://github.com/QwenLM/qwen-code/issues/6577) | **Windows PowerShell/Terminal: `Alt+V` cannot paste clipboard screenshots** | Open. Regression in v0.19.8; blocks image paste workflow on Windows. | 3 comments, P2, `welcome-pr` |
| [#5958](https://github.com/QwenLM/qwen-code/issues/5958) | **Web Shell CodeMirror editor non-functional on mobile browsers (iOS Safari / Android Chrome)** | Open. Blocks mobile Web Shell usage; input editor completely broken. | 3 comments, P2, `welcome-pr` |
| [#7489](https://github.com/QwenLM/qwen-code/issues/7489) | **VS Code Companion: file picker inserts `@filename` but image not attached to model** | Open. Image attachments silently dropped; model never receives content. | 3 comments, `status/need-information` |

---

## Key PR Progress (Top 10 by Engineering Impact)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#7512](https://github.com/QwenLM/qwen-code/pull/7512) | **perf(startup): lazy-load Google GenAI SDK on first use** | Removes `@google/genai` from ACP bootstrap closure; uses local SDK-parity shim. Major cold-start win. | **Closed** |
| [#7534](https://github.com/QwenLM/qwen-code/pull/7534) | **fix(core): retry requests when providers require thinking** | Auto-retries with `enable_thinking: true` on 400 from OpenAI-compatible providers. Mitigates #7284 class of errors. | Open |
| [#7544](https://github.com/QwenLM/qwen-code/pull/7544) | **fix(cli): resolve npm wrappers to `npm-cli.js`** | Fixes update check for mise/asdf users by skipping non-JS `npm` symlinks. Addresses #7543. | Open |
| [#7528](https://github.com/QwenLM/qwen-code/pull/7528) | **fix(cli): use `npm view` for update check instead of `update-notifier`** | Bypasses `update-notifier` npm 12 incompatibility; direct registry query. Addresses #7515. | Open |
| [#7501](https://github.com/QwenLM/qwen-code/pull/7501) | **fix(cli): open the actual serve fallback port** | Ensures `--open` launches the *actual* bound port after `EADDRINUSE` retry, not the requested one. Fixes #7500. | Open |
| [#7541](https://github.com/QwenLM/qwen-code/pull/7541) | **fix(core): preserve disabled reasoning effort** | Keeps `reasoning_effort: "none"` when side-query disables thinking; avoids unintended reasoning activation. | Open |
| [#7551](https://github.com/QwenLM/qwen-code/pull/7551) | **feat(web-shell): add selective Shadow DOM isolation** | Opt-in isolation for plugin manager body & portal tree; styles installed synchronously into shadow roots. | Open |
| [#7552](https://github.com/QwenLM/qwen-code/pull/7552) | **feat(serve): add workspace-level generation** | Stateless, tool-free model generation scoped to workspace runtime via SSE + ACP child with cancellation. | Open |
| [#7490](https://github.com/QwenLM/qwen-code/pull/7490) | **fix(autofix): retry skipped-Prepare instead of stranding PR** | Prevents infra failures before agent run from terminally stranding autofix PRs (was hitting round 100 limit). | Open |
| [#7514](https://github.com/QwenLM/qwen-code/pull/7514) | **feat(serve): persist workspace channel configuration** | Serializable channel metadata (DingTalk, WeCom, Feishu) + workspace-scoped settings store for `qwen serve`. Part of #7209. | Open |

---

## Feature Request Trends
1. **Enterprise Integration Profiles** — #7449 proposes a provider-neutral external-memory integration profile (documentation-first, incremental compat tests).
2. **Web Shell as a Platform** — Shadow DOM isolation (#7551), workspace-level generation (#7552), git mode selector (#7471), and start-in context selector (#6701) signal a push to make Web Shell a first-class multi-tenant environment.
3. **Plan/Task Observability** — #7525 requests DAG visualization of Todo plans linked to live subagent executions; aligns with #7306's artifact lifecycle hardening.
4. **Channel/Notification Infrastructure** — #7388 (explicit channel delivery for daemon/agent/scheduled tasks) and #7514 (persisted channel config) show investment in enterprise notification routing.
5. **Telemetry Standardization** — #7536 aligns GenAI span attributes with OpenTelemetry + ARMS conventions for unified observability.

---

## Developer Pain Points (Recurring Frustrations)
| Area | Symptoms | Representative Issues |
|------|----------|----------------------|
| **Update/Install Breakage** | `npm 12` returns array from `npm view`; `mise`/`asdf` wrappers confuse `getNpmCliPath`; registry errors on healthy networks | #7515, #7520, #7543 |
| **CI/CD Instability** | E2E tests flaky on `main`; autofix starved by label concurrency; nightly release fails at `quality` job | #7516, #7480, #7549 |
| **`enable_thinking` Mismatch** | Side-queries force `false`; providers require `true`; `web_fetch` completely broken until retry logic merged | #7284, #7440, #7298, #7534 |
| **Cold-Start Performance** | 17 MB / 2420 modules eagerly loaded in ACP child before `initialize`; lazy-loading effort ongoing | #7264, #7512 |
| **Platform-Specific UX Gaps** | Windows: `Alt+V` paste broken; Mobile: CodeMirror non-functional; Linux: flickering, WASM OOB | #6577, #5958, #6137, #6820 |
| **Silent Data Loss** | VS Code Companion drops image attachments; TUI shows large blank area on resume; insight report uses mixed UTC/local dates | #7489, #7485, #6835 |

---

*Digest generated from GitHub data as of 2026-07-23. Links point to live issues/PRs on `QwenLM/qwen-code`.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-23

## 1. Today's Highlights
The project is in final v0.9.1 release stabilization: 12 release-blocker issues were closed yesterday, delivering the unified `/skills` manager, default skill pack (v5), staged `uwu` theme, Kimi K3 model-ID guards, and Work-surface UX fixes. A critical stop-ship bug (#4716) surfaced today where the TUI exits immediately on macOS launch. Security gate #4713 tracks 17 open Dependabot alerts (7 high) before tagging.

## 2. Releases
**No new releases in the last 24 hours.** The v0.9.1 candidate (`0.9.1 (0dfe9170a10e)`) is undergoing final validation; several release-blocker PRs merged yesterday (#4675, #4679, #4693–#4696, #4694, #4711).

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4716](https://github.com/Hmbown/CodeWhale/issues/4716) | **TUI exits immediately on launch (`[Process completed]`)** — stop-ship | Blocks all macOS users on v0.9.1 candidate; fresh Terminal.app tab fails to start TUI | 0 comments, created today by maintainer Hmbown — highest urgency |
| [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) | **EPIC: staged command-boundary refactor** | Core architecture cleanup for command routing; tracked across 17 comments since June | 17 comments, long-running epic refactor |
| [#4227](https://github.com/Hmbown/CodeWhale/issues/4227) | **Dev-environment skill for contributors** | Onboards contributors to 10+ PRs/day velocity; automates `main` sync, build, test | 12 comments, workflow-runtime focus |
| [#4085](https://github.com/Hmbown/CodeWhale/issues/4085) | **Cannot access `~/Library/CloudStorage/Dropbox/` on macOS** | File Provider framework breaks read/write/grep/delete; not a sandbox issue | 4 comments, macOS-specific reliability blocker |
| [#4684](https://github.com/Hmbown/CodeWhale/issues/4684) | **`danger-full-access` doesn’t disable tools-layer boundary check** | Global skills broken even with full-access flag; affects Windows (no OS sandbox) | 2 comments, tools-layer security model gap |
| [#4685](https://github.com/Hmbown/CodeWhale/issues/4685) | **Windows installer overwrites user PATH** | Destructive PATH replacement breaks other tools; Windows 10 specific | 1 comment, installer regression |
| [#4717](https://github.com/Hmbown/CodeWhale/issues/4717) | **Legacy "DeepSeek fallback model" shown on non-DeepSeek providers** | Settings UI leaks deprecated DeepSeek assumption; observed with `zai`/`GLM-5.2` | Created today, UX polish for multi-provider |
| [#4719](https://github.com/Hmbown/CodeWhale/issues/4719) | **Composer: large pasted prompts byte-corrupted** | Paths truncated, lines mangled, chars dropped; agent receives corrupted input | Created today, stop-ship class for paste-heavy workflows |
| [#4718](https://github.com/Hmbown/CodeWhale/issues/4718) | **Transcript information density too high** | Repeated "Option+V" hints, stacked reasoning states hurt readability | Created today, UX refinement |
| [#4720](https://github.com/Hmbown/CodeWhale/issues/4720) | **Provider/model auto-switching feels under-baked** | Runtime silently switched `deepseek → zai`; no clear surfacing or intent | Created today, model-routing transparency |

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#4679](https://github.com/Hmbown/CodeWhale/pull/4679) | **feat(skills): unified `/skills` manager** | **Closed** | Single skill manager for inventory, audit, install/import, update, remove, trust across project/global/compatible roots; delivers #4650 |
| [#4675](https://github.com/Hmbown/CodeWhale/pull/4675) | **Integrate v0.9.1 runtime & release surface** | **Closed** | Runtime simplification, empty-Work fix, public release surface, final TUI color grammar (cool composer edge, warm permission echo) |
| [#4695](https://github.com/Hmbown/CodeWhale/pull/4695) | **feat(skills): default CodeWhale skill pack (v5)** | **Closed** | Bundles 12 end-user skills (interview, plan, implement, debug, test, review, security-review, simplify, verify, research, …) for v0.9.1 |
| [#4694](https://github.com/Hmbown/CodeWhale/pull/4694) | **fix(kimi): fail closed on K3 model-ID cross-pairings** | **Closed** | Treats base URL + model ID as single route identity; blocks two documented mis-pairings (api.kimi.com + `kimi-k3`, api.moonshot.ai + bare `k3`) |
| [#4711](https://github.com/Hmbown/CodeWhale/pull/4711) | **fix(tui): focus v0.9.1 chrome on todos & agents** | **Closed** | Top bar shows only active To-dos + Sub-agents; draggable dividers with persisted dimensions; theme-native composer rails |
| [#4696](https://github.com/Hmbown/CodeWhale/pull/4696) | **feat(tui): ship staged `/uwu` theme** | **Closed** | Adds `uwu` theme (aliases `owo`, `kawaii`); soft-classic idle whale mark; color shimmer only |
| [#4693](https://github.com/Hmbown/CodeWhale/pull/4693) | **fix(tui): Work summary lifecycle & hierarchy** | **Closed** | Recent-only Work expires after 4s/next turn; durable rows stay; actionable titles; top-area hierarchy |
| [#4714](https://github.com/Hmbown/CodeWhale/pull/4714) | **chore(deps): patch npm lockfiles for Dependabot** | **Open** | `npm audit fix --package-lock-only` across workspaces; resolves 17 alerts (7 high, 10 moderate) for v0.9.1 security gate #4713 |
| [#4087](https://github.com/Hmbown/CodeWhale/pull/4087) | **refactor(hooks): split config & executor modules** | **Open** | Moves hook config to `hooks/config.rs`, executor to `hooks/executor.rs`; improves reviewability for v0.9.3 |
| [#4686](https://github.com/Hmbown/CodeWhale/pull/4686) | **feat(minimax): add China/Token Plan provider routes** | **Open** | Adds `minimax-cn`, `minimax-anthropic-cn` targeting `api.minimaxi.com` (Chinese sibling of `api.minimax.io`) |

## 5. Feature Request Trends
From the issue corpus, three clear directions dominate:

1. **Skills as first-class product surface** — Unified `/skills` manager (#4651, #4679), default skill pack (#4691, #4695), dev-environment skill (#4227), and skill discovery UX are converging to match bundled workflows in Kimi Code, Devin CLI, Claude Code.
2. **Multi-provider model routing with transparency** — Kimi K3 guards (#4687, #4694), custom provider launch fixes (#4682), auto-switching audit (#4720), and Minimax CN routes (#4686) show demand for deliberate, visible provider/model selection.
3. **TUI information architecture refinement** — Work surface redesign (#4700, #4693, #4711), transcript density reduction (#4701, #4718), theme-native chrome (#4699, #4696), and screenshot refresh (#4508, #4670) indicate a polish phase for v0.9.1.

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **macOS File Provider incompatibility** | Dropbox/iCloud paths under `~/Library/CloudStorage/` fail for all file ops (#4085) | Persistent since macOS 12+; not sandbox-related |
| **Windows installer destructiveness** | `CodeWhaleSetup.exe` overwrites user PATH instead of appending (#4685) | New in v0.9.1 candidate; breaks entire toolchain |
| **Session restore corruption** | `<turn_meta>` blocks displayed on reopen (#4718); large paste byte-corruption (#4719) | Two distinct data-integrity bugs surfaced today |
| **Settings UI legacy leakage** | "DeepSeek fallback model" row shown on non-DeepSeek providers (#4717); audit tracking remaining issues (#4721) | Multi-provider support outpaced settings cleanup |
| **Security debt blocking release** | 17 Dependabot alerts (7 high) on npm deps (axios, brace-expansion, etc.) (#4713, #4714, #4715) | Must be dispositioned before v0.9.1 tag |
| **TUI launch failure on macOS** | Immediate exit to `[Process completed]` in fresh Terminal (#4716) | Stop-ship; affects installed v0.9.1 candidate |

---

*Data sourced from `github.com/Hmbown/DeepSeek-TUI` (CodeWhale) — issues/PRs updated 2026-07-22 to 2026-07-23.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*