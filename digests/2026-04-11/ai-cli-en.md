# AI CLI Tools Community Digest 2026-04-11

> Generated: 2026-04-11 01:50 UTC | Tools covered: 8

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

# AI CLI Tools Cross-Comparison Report — April 11, 2026

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured into a competitive, feature-rich environment with seven actively developed tools spanning proprietary (Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI, Kimi CLI) and open-source (OpenCode, Pi, Qwen Code) offerings. All tools now converge on agentic execution with sandboxed tool use, MCP ecosystem integration, and persistent session management as table stakes. The dominant tension across communities is **cost transparency**—users demand granular visibility into token consumption and request metering as these tools transition from experiments to production infrastructure. Enterprise readiness (TLS proxy support, SSO, audit trails) and cross-platform stability have emerged as key differentiators for organizational adoption.

---

## 2. Activity Comparison

| Tool | Issues Activity | PR Activity | Release Status | Notable Velocity Signal |
|:---|:---|:---|:---|:---|
| **Claude Code** | 10 hot issues, 1,213👍 on #42796 | 9 open PRs | v2.1.101 shipped | Phantom token crisis driving exceptional engagement |
| **OpenAI Codex** | 10 hot issues, 510 comments on #14593 | 12 PRs in digest | v0.119.0 + alpha.3 | 4-PR agent identity stack in review |
| **Gemini CLI** | 10 hot issues | 10 open PRs | v0.39.0-nightly | Major Context Manager refactor in flight |
| **GitHub Copilot CLI** | 10 hot issues | *No PRs in 24h* | v1.0.23–v1.0.24 (3 releases) | Rapid release cadence, PR velocity lagging |
| **Kimi CLI** | 10 issues (2 closed) | 10 PRs (4 merged) | v1.31.0 | Strong merge ratio; auth hardening focus |
| **OpenCode** | 10 hot issues | 10 PRs | *No release* | Effect architecture migration active |
| **Pi** | 10 issues (9 closed) | 8 PRs (6 merged) | *No release* | Exceptional close rate (90% in 24h) |
| **Qwen Code** | 10 hot issues | 10 PRs | v0.14.3 + nightly | TUI stability patches shipped |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Community Needs |
|:---|:---|:---|
| **Cost/Usage Transparency** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Kimi CLI | Real-time token burn visibility (#14593, #38239), per-prompt cost breakdown, hard budget caps, correct quota math (#17345, #2591) |
| **Session Lifecycle Management** | Claude Code, Kimi CLI, Qwen Code, OpenCode | Named sessions (#3025, #1814), query/restore from CLI, path-independent history (#39148), persistent workbench |
| **MCP Ecosystem Maturity** | GitHub Copilot CLI, OpenAI Codex, Gemini CLI | Registry reliability (#2498), per-folder config (#1291), tool parameter integrity (#2636), lazy loading |
| **Sandbox Security Granularity** | OpenAI Codex, Gemini CLI, Claude Code | `.codexignore`/`.claudeignore` patterns (#2847), persistent per-project policies, file exclusion from context |
| **Cross-Platform Parity** | OpenAI Codex, Kimi CLI, OpenCode, Qwen Code | Intel Mac support (#10410), Windows PowerShell detection (#1790), WSL backend (#5635), SSH rendering (#24202) |
| **Async/Background Operation** | Qwen Code, OpenAI Codex, Claude Code | Completion notifications (#2922, #45621), remote control (#9224), scheduled execution (#1833) |

---

## 4. Differentiation Analysis

| Dimension | Tool Positioning | Technical Approach |
|:---|:---|:---|
| **Enterprise Integration** | **GitHub Copilot CLI** leads with GHE policy hooks; **Claude Code** strong on TLS proxy/SSO | Copilot: Microsoft ecosystem native; Claude: standalone enterprise features |
| **Local-First/Open Source** | **OpenCode** (Effect-based, extensible), **Pi** (provider-agnostic), **Qwen Code** (Alibaba-backed) | OpenCode: functional programming architecture; Pi: rapid provider adapter model |
| **Voice/Multimodal** | **OpenAI Codex** v0.119.0 advances realtime voice; **Kimi CLI** adds Mermaid rendering | Codex: WebRTC-native; Kimi: visualization-focused |
| **Agent Orchestration** | **Gemini CLI** (subagent unification), **OpenCode** (multi-agent workspaces #17994) | Gemini: hierarchical policy engine; OpenCode: isolated workspace model |
| **Reasoning Control** | **Pi** explicitly grappling with cross-model reasoning semantics (#3016) | Unified abstraction over incompatible provider APIs |
| **Cost Optimization** | **OpenCode** `--model free` resolution (#21907), **Pi** prompt cache affinity (#3018) | Free tier exploitation, cache-aware routing |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|:---|:---|:---|
| **High Velocity, High Maturity** | **Pi**, **Kimi CLI** | Pi: 90% issue closure rate, production-hardening focus; Kimi: systematic auth improvements, strong merge ratio |
| **High Engagement, Tension Points** | **Claude Code**, **OpenAI Codex** | Exceptional issue engagement (1,213👍, 510 comments) but cost transparency crises indicate product-market fit stress |
| **Rapid Iteration, Finding Fit** | **Qwen Code**, **OpenCode** | Active TUI stabilization (Qwen), architectural migration (OpenCode); building toward enterprise readiness |
| **Enterprise-First, Community-Lag** | **GitHub Copilot CLI** | 3 releases in 24h but zero PR activity; Microsoft-controlled roadmap, less open contribution |
| **Steady, Infrastructure-Focused** | **Gemini CLI** | Context Manager refactor signals architectural investment; lower visible community engagement |

---

## 6. Trend Signals

| Industry Trend | Community Evidence | Developer Implication |
|:---|:---|:---|
| **Token economics as critical infrastructure** | Phantom consumption crises across Claude, Codex, Copilot | Budget-aware architecture required; demand for usage APIs will drive vendor differentiation |
| **MCP as emergent standard, implementation immature** | Registry failures, parameter corruption, schema handling gaps | Early adopters should expect 6–12 months of integration friction; abstraction layers valuable |
| **Agent-to-agent authentication emerging** | Codex agent identity stack (#17385–#17388), Gemini ACP hardening (#25154) | Multi-agent workflows require identity/provenance infrastructure; prepare for delegated authorization models |
| **Terminal UX as competitive moat** | TUI instability dominates Qwen, OpenCode, Gemini issues; Pi's rapid fix velocity | Rust/Effect-based architectures showing resilience; Electron/Tauri desktop apps adding complexity |
| **Remote development normalization** | SSH rendering fixes, cloudtop detection, background operation requests | CLI tools must operate reliably in headless/containerized/SSH contexts, not just local interactive |
| **Reasoning as first-class capability with heterogeneous semantics** | Pi #3016, Claude extended thinking, OpenAI budget tokens | Abstraction layers must handle provider-specific reasoning models; "one setting" UX is insufficient |

---

*Report compiled from community digests dated 2026-04-11. Data reflects 24-hour activity windows where specified.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

 # Claude Code Skills Community Highlights Report
**Data as of 2026-04-11 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking (by Community Attention)

| Rank | Skill | PR | Status | Core Functionality | Discussion Highlights |
|:---|:---|:---|:---|:---|:---|
| 1 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphan word wrap, widow paragraphs, and numbering misalignment | Addresses universal pain point affecting "every document Claude generates"; zero thumbs but high implicit demand via problem scope |
| 2 | **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for marketplace quality: 5-dimension skill evaluation (structure, docs, examples, resources, security posture) | Long-running PR (Nov 2025–Jan 2026); positions itself as gatekeeper infrastructure for skill trust |
| 3 | **frontend-design** (improved) | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised guidance ensuring "every instruction is something Claude can actually follow within a single conversation" | Focus on actionability over abstraction—reflects community feedback that existing skills are too verbose |
| 4 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Native `.odt` creation, template filling, and ODT→HTML parsing for LibreOffice/OpenOffice workflows | Fills ISO 26300 standard gap; enterprise document pipeline use case |
| 5 | **DOCX tracked changes fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Fixes document corruption when DOCX skill adds tracked changes to documents with existing bookmarks (OOXML `w:id` collision) | Critical bugfix for production document workflows; root cause analysis included |
| 6 | **system documentation** | [#95](https://github.com/anthropics/skills/pull/95) | 🟡 Open | Comprehensive evidence management system docs: architecture, flowcharts, lifecycle workflows | Infrastructure PR for maintainability; addresses documentation debt |
| 7 | **SAP-RPT-1-OSS predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP integration; Apache 2.0 model released at SAP TechEd 2025 |
| 8 | **skill-creator YAML validation** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 Open | Pre-parse validation to detect unquoted `description` fields with YAML special characters (`:`) | Prevents silent parsing failures; developer experience improvement |

---

## 2. Community Demand Trends (from Issues)

| Theme | Evidence | Specific Pain Points |
|:---|:---|:---|
| **Skill Reliability & Data Loss** | [#62](https://github.com/anthropics/skills/issues/62) (10 comments, 👍1), [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) | Skills disappearing after file renames; 500 errors on upload/delete; no recovery path |
| **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (4 comments, 👍2) | Community skills impersonating `anthropic/` namespace; need verified publisher model |
| **Enterprise/SSO Integration** | [#532](https://github.com/anthropics/skills/issues/532) (closed), [#29](https://github.com/anthropics/skills/issues/29), [#228](https://github.com/anthropics/skills/issues/228) (3 comments, 👍4) | API keys unavailable for SSO users; org-wide skill sharing missing; Bedrock compatibility unclear |
| **Skill Quality Standards** | [#202](https://github.com/anthropics/skills/issues/202) (8 comments, 👍1), [#556](https://github.com/anthropics/skills/issues/556) (5 comments, 👍6) | `skill-creator` too verbose/educational; `run_eval.py` 0% trigger rate—skills fail silently |
| **MCP Protocol Exposure** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | Demand to expose Skills as Model Context Protocol endpoints for API composability |

**Emerging Directions:**
- **Agent governance/safety patterns** ([#412](https://github.com/anthropics/skills/issues/412)—closed but noted)
- **Persistent memory across sessions** ([#154](https://github.com/anthropics/skills/pull/154): `shodh-memory`)
- **Testing patterns & quality assurance** ([#723](https://github.com/anthropics/skills/pull/723))

---

## 3. High-Potential Pending Skills

| Skill | PR | Status | Why It May Land Soon |
|:---|:---|:---|:---|
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Comprehensive testing stack (Trophy model, AAA pattern, React Testing Library, MSW)—fills critical gap in Claude's code quality guidance; recent activity (Mar 22–30) |
| **masonry-generate-image-and-videos** | [#335](https://github.com/anthropics/skills/pull/335) | 🟡 Open | Imagen 3.0 + Veo 3.1 integration; media generation increasingly core to Claude workflows |
| **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/523) | 🟡 Open | Addresses #1 community pain point: "Claude Code loses all context between sessions"; persistence layer for team knowledge |
| **sensory (macOS automation)** | [#806](https://github.com/anthropics/skills/pull/806) | 🟡 Open | Native AppleScript automation—Tier 1/2 permission model shows security-conscious design; recent (Mar 29) |
| **x402 BSV micropayments** | [#374](https://github.com/anthropics/skills/pull/374) | 🟡 Open | Natural-language AI service payments; novel economic primitive for agent-to-agent commerce |
| **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | 🟡 Open | 10-step cleanup workflow for orphaned code; enterprise maintainability use case |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *reliability infrastructure*—skills that don't disappear, validate before failing, and persist context across sessions—while simultaneously pushing for *enterprise-grade trust boundaries* (verified namespaces, SSO compatibility, and audit trails) that would let organizations safely adopt community contributions at scale.**

The tension between rapid skill innovation (#514 typography, #335 media generation, #374 micropayments) and foundational stability (#62 data loss, #492 security boundaries, #532 SSO gaps) defines the 2026 Q1 ecosystem priorities.

---

 # Claude Code Community Digest — April 11, 2026

---

## Today's Highlights

Anthropic shipped **v2.1.101** with enterprise TLS proxy improvements and a new `/team-onboarding` command that generates teammate ramp-up guides from local usage patterns. Meanwhile, the community is actively debating token consumption anomalies—multiple high-engagement issues report **~20K phantom tokens per session** and rapid quota depletion, with one issue gathering 1,213 reactions. The tension between feature velocity and cost transparency dominates today's discourse.

---

## Releases

**[v2.1.101](https://github.com/anthropics/claude-code/releases/tag/v2.1.101)** — Latest
- Added `/team-onboarding` command for automated teammate onboarding guide generation
- OS CA certificate store trust by default (enterprise TLS proxies now work without `CLAUDE_CODE_CERT_STORE=bundled`)

**[v2.1.100](https://github.com/anthropics/claude-code/releases/tag/v2.1.100)** — Previous

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#42796](https://github.com/anthropics/claude-code/issues/42796) | **Model degradation for complex engineering tasks** — CLOSED | 262 comments, 1,213 👍. The February model updates broke Claude's ability to handle multi-file refactoring and architectural decisions. This was the community's top grievance; closure suggests either rollback or mitigation deployed. | Extremely high engagement; users reported task abandonment |
| [#38239](https://github.com/anthropics/claude-code/issues/38239) | **Extreme token consumption / quota miscalculation** | 63 comments, 56 👍. Users report sessions burning 66% of Max quota in 2 questions. Accusations of "silent" pricing changes without communication. | Active, frustrated; demands audit trail |
| [#36582](https://github.com/anthropics/claude-code/issues/36582) | **Terminal auto-scroll to top on long conversations** | 38 comments, 122 👍. Critical UX regression making long sessions unusable. macOS-specific TUI bug. | High 👍/comment ratio = widespread silent impact |
| [#10181](https://github.com/anthropics/claude-code/issues/10181) | **Bash tool extremely slow on Linux (v2.0.22)** | 36 comments, 34 👍. Performance regression in sandboxed execution; affects CI/CD integrations. | Long-running; memory/perf tagged |
| [#32870](https://github.com/anthropics/claude-code/issues/32870) | **Windows BSOD via Wof.sys during directory listing** | 24 comments. Critical stability issue—Claude Code triggers kernel panic through `NtQueryDirectoryFileEx`. | Zero 👍 but severe; security-adjacent |
| [#37917](https://github.com/anthropics/claude-code/issues/37917) | **Usage explosion (duplicate of #38239)** | 23 comments, 45 👍. Corroborates systemic token accounting problem. | Clustering around cost transparency |
| [#31537](https://github.com/anthropics/claude-code/issues/31537) | **Low credit balance after top-up** | 18 comments, 8 👍. Billing system distrust; payments not reflecting in quota. | Trust erosion in commercial layer |
| [#36485](https://github.com/anthropics/claude-code/issues/36485) | **Mac Desktop App blank screen / no response** | 17 comments, 9 👍. Complete failure of message rendering pipeline. | Desktop-specific; affects paid tier |
| [#42272](https://github.com/anthropics/claude-code/issues/42272) | **Excessive token consumption since 2.1.88** | 15 comments, 9 👍. Version-bisected regression; Opus 4.6 + Max 5x implicated. | Technical reproduction steps provided |
| [#2054](https://github.com/anthropics/claude-code/issues/2054) | **Enter key sends instead of newline (CJK input)** | 14 comments, 64 👍. Longstanding i18n issue; CJK users accidentally submit incomplete prompts. | High 👍, low comment = frustrated lurkers |

---

## Key PR Progress

| # | PR | Status | What It Does |
|---|-----|--------|--------------|
| [#28714](https://github.com/anthropics/claude-code/pull/28714) | Automated issue triage + weekly digest via Claude API | **OPEN** | Cost-efficient automation: Haiku 4.5 for per-issue triage (~$0.001/issue), Sonnet 4.6 for digests (~$0.05/week). Maintains human override. |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | Open source Claude Code | **OPEN** | Closes #59, #456, #2846, #22002, #41434. The community's most anticipated change—no implementation details visible yet. |
| [#46351](https://github.com/anthropics/claude-code/pull/46351) | Enable PowerShell tool on macOS/Linux | **OPEN** | Removes Windows-only gate for `pwsh` users. Unblocks PowerShell-native workflows on Unix systems. |
| [#46450](https://github.com/anthropics/claude-code/pull/46450) | Optimized duplicate comment finding | **OPEN** | Single backward loop for duplicate detection; reduces iteration overhead in large threads. |
| [#20448](https://github.com/anthropics/claude-code/pull/20448) | Web4 governance plugin (R6 workflow) | **OPEN** | "Trust-native internet infrastructure"—cryptographic provenance, entity witnessing, audit trails for AI governance. Niche but ambitious. |
| [#39148](https://github.com/anthropics/claude-code/pull/39148) | Preserve-session plugin | **OPEN** | Path-independent session history via UUID assignment. Survives directory renames/moves—solves a real workflow friction. |
| [#29461](https://github.com/anthropics/claude-code/pull/29461) | Constrain dedupe candidates to canonical open issues | **OPEN** | Reduces noisy duplicate suggestions by filtering candidates. Addresses #19267, #20282. |
| [#45621](https://github.com/anthropics/claude-code/pull/45621) | Notify-on-complete plugin | **OPEN** | Stop hook for completion notifications. Handles UTF-8, cross-platform script generation. |
| [#38105](https://github.com/anthropics/claude-code/pull/38105) | WhatsApp channel plugin | **OPEN** | Externalized to [Rich627/whatsapp-claude-plugin](https://github.com/Rich627/whatsapp-claude-plugin) after DMCA takedown. Community resilience. |
| [#32931](https://github.com/anthropics/claude-code/pull/32931) | Resolve hookify rules from project root | **OPEN** | Fixes `CLAUDE_PROJECT_DIR` handling for nested directory starts. Adds test coverage. |

---

## Feature Request Trends

**1. Cost Transparency & Control**
- Multiple requests for real-time token burn visibility, per-prompt cost breakdowns, and hard budget caps. The `/config` freezing issue (#46485) compounds frustration.

**2. Persistent Memory & Project Context**
- [#41918](https://github.com/anthropics/claude-code/issues/41918) (Memory Per Project) and [#46484](https://github.com/anthropics/claude-code/issues/46484) (Persistent Workbench Pane) show demand for state that survives session boundaries.

**3. Plugin Ecosystem Formalization**
- [#45612](https://github.com/anthropics/claude-code/issues/45612) demands `/buddy` become permanent; multiple plugin PRs in flight suggest community willing to extend core if APIs stabilize.

**4. Input Method & Accessibility**
- CJK newline behavior (#2054), Big5 encoding (#46486), and TUI scroll behavior (#36582) indicate non-English/assistive user experience gaps.

---

## Developer Pain Points

| Category | Symptoms | Root Cause Hypothesis |
|----------|----------|----------------------|
| **Token Economics** | Phantom ~20K tokens/session, 66% quota burn in 2 prompts, billing discrepancies | Quota calculation regression or model context window management change post-2.1.88 |
| **Cross-Platform Stability** | Windows BSODs, WSL2 phantom tokens, macOS TUI freezes, Linux sandbox slowness | Platform-specific sandbox/FS layer divergence; Windows file locking (`EBUSY` in #46482) |
| **Session State Fragility** | Lost history on rename, `/config` freezes, blank Desktop screens | Path-dependent state management; async TUI rendering race conditions |
| **Enterprise Integration** | TLS proxy friction (mitigated in 2.1.101), MCP auth failures (#46472), Chrome classification blocks (#46491) | Security/IT policy collision with aggressive defaults |
| **Observability Gap** | No effort/output_style in statusLine (#46490), opaque token attribution | Missing telemetry hooks for external tooling |

---

*Digest compiled from github.com/anthropics/claude-code — 2026-04-11*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

 # OpenAI Codex Community Digest — 2026-04-11

---

## 1. Today's Highlights

The Codex team shipped **v0.119.0** with a major upgrade to realtime voice sessions, defaulting to the v2 WebRTC path with native TUI media support and configurable transport. Meanwhile, a 4-PR stack introducing **agent identity support** (`use_agent_identity`) landed in review, signaling foundational work for authenticated agent-to-agent workflows. Community attention remains fixated on token consumption transparency and sandbox reliability across platforms.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[rust-v0.119.0](https://github.com/openai/codex/releases/tag/rust-v0.119.0)** | Realtime voice sessions now default to **v2 WebRTC** with configurable transport, voice selection, native TUI media support, and expanded app-server coverage. MCP Apps and custom MCP server support expanded. |
| rust-v0.120.0-alpha.3 | Pre-release; no detailed notes. |
| rust-v0.119.0-alpha.32–33 | Pre-release iterations. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Pulse |
|---|-------|--------------|-----------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Burning tokens very fast** | 510 comments, 194 👍 — the definitive thread on opaque token consumption. Users report rapid depletion without clear attribution to model calls, context window, or tool usage. | Frustrated; demands granular usage attribution and real-time burn rate visibility. |
| [#10410](https://github.com/openai/codex/issues/10410) | **macOS Intel (x86_64) support** | 262 👍, 174 comments. Apple Silicon exclusivity leaves enterprise Intel fleets behind. | Persistent + polite pressure; considered a parity gap for "Pro" tier users. |
| [#2847](https://github.com/openai/codex/issues/2847) | **Exclude sensitive files from sandbox** | 309 👍. Security-critical: `.env`, `node_modules`, credentials leaking into context. | Strong consensus; `.codexignore` pattern requested for repo + global scopes. |
| [#13041](https://github.com/openai/codex/issues/13041) | **WebSocket 1008 Policy closure → HTTPS fallback** | 114 👍. Arch Linux users hit server-side policy drops, forcing degraded transport. | Linux desktop stability concern; reproducible on strict network configs. |
| [#11325](https://github.com/openai/codex/issues/11325) | **Manual `/compact` in Codex app** | 133 👍. CLI has it; desktop app lacks explicit context compression, hitting window limits silently. | Feature parity request; power users blocked on long sessions. |
| [#14936](https://github.com/openai/codex/issues/14936) | **bwrap: Approval prompt spam** | 40 comments. Linux sandbox regression in 0.115.0 — "don't ask again" ignored. | Sandbox UX breakage; interrupts flow state. |
| [#9224](https://github.com/openai/codex/issues/9224) | **Codex Remote Control** | 260 👍. Request to drive CLI sessions from mobile ChatGPT app. | "Killer feature" enthusiasm; security model questions raised. |
| [#16335](https://github.com/openai/codex/issues/16335) | **TUI/CLI performance regression 116→117** | 11 comments. Windows Terminal latency spikes, rendering delays. | Windows-specific; regression tracking requested. |
| [#17345](https://github.com/openai/codex/issues/17345) | **"Out of usage" at 4%** | Fresh (Apr 10). UI/UX bug misreporting quota state. | Confusion + trust erosion; needs hotfix. |
| [#15151](https://github.com/openai/codex/issues/15151) | **OPENAI_API_KEY silently overrides OAuth** | 5 comments. Enterprise users misled by 401s when env var shadows OAuth token. | Auth DX papercut; silent precedence is dangerous. |

---

## 4. Key PR Progress

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#17385–#17388](https://github.com/openai/codex/pull/17385) | **Agent Identity Stack (4 PRs)** | Feature-gated `use_agent_identity`: flag plumbing → identity registration → task registration → `AgentAssertion` downstream auth. | Foundation for authenticated agent chains and delegated tool access. |
| [#17405](https://github.com/openai/codex/pull/17405) | **Usage nudge + account refresh dedupe** | Reapplies workspace-owner usage alerts with guard against `account/read`→`check`→`updated` loop that caused Apr 10 incident. | Reliability fix for billing UX. |
| [#17370](https://github.com/openai/codex/pull/17370) | **Unblock private DNS in macOS sandbox** | Removes hostname suffixes from `NO_PROXY`, allows wildcard local binds for DNS tools. | Fixes corporate VPN / split-DNS breakage. |
| [#17402](https://github.com/openai/codex/pull/17402) + [#17404](https://github.com/openai/codex/pull/17404) | **MCP tool registry unification** | Refactors `name`+`namespace` to single type; registers deferred MCP tools consistently with direct tools. | Eliminates dual lookup paths; MCP reliability. |
| [#17216](https://github.com/openai/codex/pull/17216) | **Remote exec env from exec-server policy** | Server-side env policy for remote starts; `env` becomes overlay not replacement. | Safer, more predictable remote sandbox environments. |
| [#17087](https://github.com/openai/codex/pull/17087) | **`codex marketplace add` command** | CLI plugin marketplace installer: local dirs, GitHub shorthand, git URLs with `--ref` and `--sparse`. | Ecosystem extensibility; custom tool distribution. |
| [#17380](https://github.com/openai/codex/pull/17380) | **Timer tools + external message injection** | `create_timer`, `delete_timer`, `list_timers`; mechanism for injecting messages into threads. | Scheduled execution primitives; agent autonomy. |
| [#17399](https://github.com/openai/codex/pull/17399) | **TUI: enforce core boundary** | Routes TUI core access through `codex-app-server-client::legacy_core`; CI enforcement. | Architecture hygiene; prevents circular deps. |
| [#17381](https://github.com/openai/codex/pull/17381) | **Guardian review timeout types** | Adds `TimedOut` variant to review decision/status types; schema regeneration. | Completeness for async safety review flows. |
| [#16870](https://github.com/openai/codex/pull/16870) + [#16706](https://github.com/openai/codex/pull/16706) + [#16641](https://github.com/openai/codex/pull/16641) | **Analytics: thread metadata + steering + token usage** | Denormalizes thread metadata onto turn events; adds steering and token usage fields. | Observability foundation for usage attribution debugging. |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Usage transparency & controls** | #14593, #17345, #11325, #11788, #16889 | 🔥 Critical — users need per-action burn rates, manual compaction, and correct quota math. |
| **Sandbox security granularity** | #2847 (`.codexignore`), #14936 (approval spam), #10431 (secure devcontainer) | 🔥 High — file exclusion and permission persistence are blockers for sensitive codebases. |
| **Cross-platform parity** | #10410 (Intel Mac), #13165 (Windows shell selection), #2951 (Android/Termux) | 📈 Steady — Windows and legacy Mac enterprise users underserved. |
| **Remote / mobile workflows** | #9224 (remote control), #13858 (background terminal visibility) | 📈 Growing — "agent on desktop, control from phone" pattern emerging. |
| **Auth & enterprise integration** | #15151 (env var vs OAuth), #12764 (401 errors), #17370 (private DNS) | 📈 Corporate adoption friction points. |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Symptoms | Needed Fix |
|------------|-----------|----------|------------|
| **Opaque token economics** | Daily | Rapid quota burn, misleading "out of usage" states, no per-tool attribution | Real-time usage stream + cost attribution API |
| **Sandbox permission fatigue** | High | Repeated approvals, "don't ask again" ignored, bwrap regressions | Persistent per-project policy cache + `.codexignore` |
| **Platform-specific breakage** | Moderate-High | Windows shell injection failures, macOS DNS sandbox blocks, Intel Mac exclusion | CI matrix expansion for non-ARM Linux/macOS/Windows |
| **Auth configuration confusion** | Moderate | `OPENAI_API_KEY` vs OAuth precedence, 401s with valid sessions | Explicit auth source logging + `codex auth status` diagnostics |
| **TUI/CLI performance on Windows** | Emerging | Lag between 0.116→0.117, terminal rendering stalls | Windows-specific profiling + regression benchmarks |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-04-10 to 2026-04-11.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-11

---

## 1. Today's Highlights

The v0.39.0 nightly build landed with Linux sandbox path resolution improvements and new keyboard shortcuts (`ctrl+shift+g`). Meanwhile, a major architectural simplification to the Context Manager landed in review, and the community continues to push hard on proxy/TLS connectivity fixes and memory leak mitigations.

---

## 2. Releases

**v0.39.0-nightly.20260410.96cc8a0da**
- Refactored core path resolution for Linux sandbox environments ([#24985](https://github.com/google-gemini/gemini-cli/pull/24985))
- Added `ctrl+shift+g` keyboard shortcut support ([#25035](https://github.com/google-gemini/gemini-cli/pull/25035))
- Ongoing subagent tool unification work (incomplete in release notes)

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST-aware file reads, search, and mapping | EPIC tracking whether tree-sitter-style AST tools can reduce token waste and misaligned reads. Could fundamentally improve agent precision. | 4 comments, maintainer-driven investigation |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) Repeated permission prompts on same file | Security UX friction—users report "allow for all future sessions" failing intermittently. High annoyance factor. | 3 comments, active triage |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent reports success after MAX_TURNS interruption | Silent failure mode hides incomplete work; corrupts trust in agent autonomy. P1 priority. | 2 upvotes, needs fix |
| [#25054](https://github.com/google-gemini/gemini-cli/issues/25054) `exit_plan_mode` hook regression | Broke documented GCS archiving workflow for plan files. Breaking change from #22737. | 1 upvote, docs/impl mismatch |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) Memory routing: global vs. project | Critical for multi-repo workflows—prevents cross-contamination of user preferences and codebase-specific rules. | 2 upvotes, design in progress |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) Subagents unaware of active Approval Modes | Policy Engine blocks calls but subagents don't know why, causing retry loops and poor UX. | 1 comment, architectural gap |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) SSH session text scrambling | Windows→gLinux SSH users completely blocked. Needs detection helper (#24546). | 1 comment, accessibility concern |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent destructive behavior (git reset --force) | Safety-critical: model uses dangerous defaults when safer alternatives exist. | 1 upvote, trust/safety priority |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) Model creates tmp scripts in random spots | Workspace hygiene issue—cleanup overhead before commits. | 1 comment, workflow friction |
| [#24917](https://github.com/google-gemini/gemini-cli/issues/24917) Minified React error #185 | UI crash in production build, multiple reports today. Stability concern. | Fresh, needs repro |

---

## 4. Key PR Progress

| PR | Feature/Fix | Status |
|----|-------------|--------|
| [#25158](https://github.com/google-gemini/gemini-cli/pull/25158) TLS socket disconnect in proxy/TUN environments | Critical fix for `ECONNRESET` behind Clash/strict corporate proxies. Community-requested. | Open |
| [#25157](https://github.com/google-gemini/gemini-cli/pull/25157) Context Manager architecture simplification | Flattens Orchestrator/ContextManager, replaces inbox with SnapshotCache. Major refactor. | Closed (draft superseded) |
| [#24752](https://github.com/google-gemini/gemini-cli/pull/24752) Decoupled ContextManager + Sidecar architecture | Foundation for fixing #24751; enables better separation of concerns. | Open |
| [#25089](https://github.com/google-gemini/gemini-cli/pull/25089) Memory fix for trace's streamWrapper | Fixes span leak when streamWrapper interrupted. Mitigates memory pressure. | Open |
| [#25136](https://github.com/google-gemini/gemini-cli/pull/25136) Bounded structural truncation for telemetry | Prevents JSON parsing errors and OOM in telemetry payloads; adds `telemetry.traces` config. | Open |
| [#25148](https://github.com/google-gemini/gemini-cli/pull/25148) Skill patching with /memory inbox | Enables extraction agent to update global/workspace skills via diff library, removes git dependency. | Open |
| [#25134](https://github.com/google-gemini/gemini-cli/pull/25134) Tool-controlled display protocol (Steps 2-3) | Structured visual metadata from tools to UI; replaces frontend ad-hoc logic. | Open |
| [#20406](https://github.com/google-gemini/gemini-cli/pull/20406) Memory management for large tool output | Disk-based truncation to prevent V8 OOM on massive shell outputs. Long-running perf fix. | Open |
| [#24664](https://github.com/google-gemini/gemini-cli/pull/24664) ACP host input requests | Opt-in path for ACP clients to handle `ask_user` and `exit_plan_mode` programmatically. | Open |
| [#25154](https://github.com/google-gemini/gemini-cli/pull/25154) Harden HTTP auth for a2a-server | Bearer token from env or random generation; applies auth middleware to custom endpoints. | Open |

---

## 5. Feature Request Trends

1. **AST-aware tooling** — Multiple issues (#22745, #22746) investigating tree-sitter integration for precise method bounds and codebase mapping. Direction: reduce token noise, improve navigation accuracy.

2. **Memory system maturation** — Global vs. project memory routing (#22819), proactive memory writes (#22809), and skill patching (#25148) show push toward persistent, hierarchical context.

3. **Safety and approval transparency** — Subagent awareness of approval modes (#23582), destructive behavior guards (#22672), and tool call rejection handling (#23897) indicate demand for safer autonomous operation.

4. **SSH and remote development** — Detection helpers (#24546) and terminal corruption fixes (#24202, #24935) reflect growing remote/cloudtop usage.

5. **Telemetry and observability** — Bounded truncation (#25136), trace decoupling, and component-level evaluations (#24353) signal enterprise readiness focus.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Proxy/TLS connectivity failures** | #25158, recurring `ECONNRESET` reports | Critical—blocks corporate/China users |
| **Permission fatigue** | #24916, repeated prompts despite "allow always" | High—daily friction |
| **Silent subagent failures** | #22323, MAX_TURNS → false success | High—corrupts workflow trust |
| **Memory leaks and OOM** | #25089, #20406, #24917 (React #185) | High—stability issues |
| **SSH/terminal rendering bugs** | #24202, #24935, #24546 | Medium—remote dev blocker |
| **Plan mode regressions** | #25054, broken hooks from #22737 | Medium—docs/impl drift |
| **Workspace pollution** | #23571, tmp scripts scattered | Low-Medium—cleanup overhead |

---

*Digest compiled from google-gemini/gemini-cli public activity. For corrections or additions, open a discussion in the repository.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

 # GitHub Copilot CLI Community Digest — 2026-04-11

---

## 1. Today's Highlights

Three rapid-fire releases (v1.0.23–v1.0.24) landed with critical agent mode improvements, including new `--mode`, `--autopilot`, and `--plan` flags for direct agent startup. The community is actively debating enterprise MCP policy handling and request metering transparency, with multiple high-engagement issues closing around model availability and hook functionality. MCP ecosystem maturity remains the dominant technical tension point.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.24** | 2026-04-10 | `preToolUse` hooks now respect `modifiedArgs`/`updatedInput` and `additionalContext`; custom agent model field accepts display names/vendor suffixes from VS Code (e.g., "Claude Sonnet 4.5"); terminal state restoration fixes |
| **v1.0.24-0** | 2026-04-10 | Redesigned exit screen with Copilot mascot; `--remote` flag now respected during first-run session sync prompts |
| **v1.0.23** | 2026-04-10 | New flags `--mode`, `--autopilot`, `--plan` for direct agent mode entry; fixed agent hang on memory backend unavailability; Bazel/Buck target labels no longer misidentified as paths; `Ctrl+L` screen clearing |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#223](https://github.com/github/copilot-cli/issues/223) | "Copilot Requests" permission invisible for org-owned tokens | **Enterprise governance blocker**: Organizations need service account authentication without individual PATs. 19 comments, 62 👍 indicate widespread corporate demand. | Strong consensus; waiting on GitHub policy response |
| [#2498](https://github.com/github/copilot-cli/issues/2498) | All MCP servers blocked when GHE returns 404 on `/copilot/mcp_registry` | **Closed** — Critical enterprise regression where MCP registry absence broke all non-default servers. 18 comments show rapid triage. | Resolved; exposes fragility in GHE/Copilot integration |
| [#1274](https://github.com/github/copilot-cli/issues/1274) | CLI getting 400 errors for invalid request bodies | **Reliability concern**: 95% failure rate on code review diffs suggests request crafting or validation pipeline issues. | Active debugging; needs repro clarity |
| [#2591](https://github.com/github/copilot-cli/issues/2591) | Single session consuming 80–100 premium requests | **Billing transparency crisis**: Tool invocations/thinking steps unexpectedly metered as separate premium requests. | High urgency; financial impact |
| [#2099](https://github.com/github/copilot-cli/issues/2099) | "Claude Sonnet 4.5" unavailable despite Pro+ subscription | **Closed** — Model availability mismatch between VS Code and CLI naming conventions. | Fixed via v1.0.24's display name support |
| [#1973](https://github.com/github/copilot-cli/issues/1973) | Tool whitelist for Interactive Mode | **UX gap**: Binary choice between per-tool approval and `/allow-all` is too coarse for safe read-only workflows. | 10 👍; clear feature gap |
| [#2484](https://github.com/github/copilot-cli/issues/2484) | Configurable command allowlist without `--allow-all` | **Security/UX trade-off**: Developers want persistent session permissions for trusted commands without full autopilot. | 5 comments; enterprise-relevant |
| [#1291](https://github.com/github/copilot-cli/issues/1291) | Repository-level MCP configuration | **Closed** — Parity with VS Code's per-folder MCP support; global-only config hinders team standardization. | 16 👍; resolved |
| [#853](https://github.com/github/copilot-cli/issues/853) | `Ctrl+L` clears conversation instead of screen | **Closed** — Violation of terminal conventions; now fixed in v1.0.23. | Long-standing papercut resolved |
| [#443](https://github.com/github/copilot-cli/issues/443) | Built-in PDF reading support | **Capability expansion**: 27 👍 show strong demand for native document ingestion without external tools. | Top feature request by votes |

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Granular permission models** | [#1973](https://github.com/github/copilot-cli/issues/1973), [#2484](https://github.com/github/copilot-cli/issues/2484), [#223](https://github.com/github/copilot-cli/issues/223) | Developers reject binary security/UX trade-offs; demand tiered trust systems |
| **MCP ecosystem maturity** | [#2498](https://github.com/github/copilot-cli/issues/2498), [#1291](https://github.com/github/copilot-cli/issues/1291), [#1938](https://github.com/github/copilot-cli/issues/1938), [#2636](https://github.com/github/copilot-cli/issues/2636), [#2634](https://github.com/github/copilot-cli/issues/2634), [#1876](https://github.com/github/copilot-cli/issues/1876) | MCP is strategic but implementation gaps (schema handling, lazy loading, HTML stripping) are friction points |
| **Model routing flexibility** | [#1354](https://github.com/github/copilot-cli/issues/1354), [#1824](https://github.com/github/copilot-cli/issues/1824), [#2099](https://github.com/github/copilot-cli/issues/2099) | Per-agent model selection and global defaults now partially addressed; routing logic still requested |
| **Document/media ingestion** | [#443](https://github.com/github/copilot-cli/issues/443), [#1452](https://github.com/github/copilot-cli/issues/1452) | CLI lagging behind IDE expectations for multimodal input |
| **Configuration portability** | [#2197](https://github.com/github/copilot-cli/issues/2197), [#2629](https://github.com/github/copilot-cli/issues/2629), [#1632](https://github.com/github/copilot-cli/issues/1632) | `--config-dir` behavior inconsistencies and skill organization need attention |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Opaque request metering/billing** | Multiple issues | 🔴 High | [#2591](https://github.com/github/copilot-cli/issues/2591), [#2619](https://github.com/github/copilot-cli/issues/2619), [#1568](https://github.com/github/copilot-cli/issues/1568) |
| **MCP tool parameter corruption** | Emerging | 🔴 High | [#2636](https://github.com/github/copilot-cli/issues/2636) (HTML stripping), [#2634](https://github.com/github/copilot-cli/issues/2634) (partial loading), [#1876](https://github.com/github/copilot-cli/issues/1876) (`$ref` schema failures) |
| **Agent task drift during steering** | Recurring | 🟡 Medium | [#2248](https://github.com/github/copilot-cli/issues/2248) |
| **Enterprise policy/permission gaps** | Persistent | 🟡 Medium | [#223](https://github.com/github/copilot-cli/issues/223), [#2498](https://github.com/github/copilot-cli/issues/2498) |
| **Configuration discovery and precedence** | Steady | 🟢 Low-Medium | [#2197](https://github.com/github/copilot-cli/issues/2197), [#2629](https://github.com/github/copilot-cli/issues/2629) |

---

*Digest compiled from github.com/github/copilot-cli activity 2026-04-10 to 2026-04-11.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

 # Kimi Code CLI Community Digest — 2026-04-11

## Today's Highlights

Kimi CLI v1.31.0 shipped with critical shell rendering fixes and enhanced file reading capabilities, while the community drove significant UX improvements around session management and authentication reliability. A surge of cross-platform fixes—particularly for Windows PowerShell detection and token refresh coordination—signals maturing production readiness.

---

## Releases

### [v1.31.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.31.0) (2026-04-10)

| Change | Author | Impact |
|--------|--------|--------|
| Fix Rich markdown background color leakage | [@RealKai42](https://github.com/RealKai42) | Resolves visual artifacts in terminal output |
| Add `totalLines` and `tail` mode to ReadFile tool | [@RealKai42](https://github.com/RealKai42) | Enables efficient large-file reading without loading entire contents |

---

## Hot Issues

| # | Title | Status | Why It Matters | Community Signal |
|---|-------|--------|--------------|----------------|
| [#778](https://github.com/MoonshotAI/kimi-cli/issues/778) | API Error 400: Invalid request Error | 🔴 Open | Persistent API compatibility issue affecting Claude Sonnet 4.5 users on Windows; 11 comments indicate widespread impact | High engagement, no resolution path |
| [#1814](https://github.com/MoonshotAI/kimi-cli/issues/1814) | Query and quick-restore sessions from CLI | 🔴 Open | Addresses core workflow friction—users lose track of session locations across directories | 3 comments, clear use case |
| [#1327](https://github.com/MoonshotAI/kimi-cli/issues/1327) | Increase default max steps per turn | 🔴 Open | Default 100-step limit interrupts long tasks despite low context utilization; config workaround exists but poor UX | Recurring theme |
| [#1786](https://github.com/MoonshotAI/kimi-cli/issues/1786) | UI lags minutes behind file writes for ~800 line files | 🔴 Open | Severe performance regression in v1.30 blocking large-file workflows | Critical for power users |
| [#1833](https://github.com/MoonshotAI/kimi-cli/issues/1833) | `/loop` command for scheduled execution | 🔴 Open | Feature parity request vs. Claude Code; enables automation workflows | New, zero engagement yet |
| [#1830](https://github.com/MoonshotAI/kimi-cli/issues/1830) | VSCode extension slash skills unavailable before typing | 🔴 Open | Extension UX bug breaking discovery of skills | Windows-specific |
| [#1794](https://github.com/MoonshotAI/kimi-cli/issues/1794) | `/sessions` shows pointless picker with single session | 🟢 Closed | UX polish—eliminated confusing single-item selection | Fixed via PR |
| [#1809](https://github.com/MoonshotAI/kimi-cli/issues/1809) | Empty context token limit exceeded | 🟢 Closed | Directory listing in large repos (node_modules) exceeded model context | Fixed via [#1827](https://github.com/MoonshotAI/kimi-cli/pull/1827) |
| [#1824](https://github.com/MoonshotAI/kimi-cli/issues/1824) | VS Code and Local Web authorization failures | 🟢 Closed | Cross-platform auth state sync issue | Closed, resolution unclear |

---

## Key PR Progress

| # | Title | Status | Technical Summary |
|---|-------|--------|-----------------|
| [#1767](https://github.com/MoonshotAI/kimi-cli/pull/1767) | YOLO mode for Web UI | 🟡 Open | Extends auto-approve functionality to web interface; backend API + frontend toggle |
| [#1832](https://github.com/MoonshotAI/kimi-cli/pull/1832) | Fix `UserPromptSubmit` hook empty prompt | 🟡 Open | Corrects `list[ContentPart]` handling to enable third-party hook integrations |
| [#1709](https://github.com/MoonshotAI/kimi-cli/pull/1709) | Align diff inline highlights with tab expansion | 🟡 Open | Fixes offset calculation when tabs are expanded to spaces |
| [#1790](https://github.com/MoonshotAI/kimi-cli/pull/1790) | Prefer `pwsh` over `powershell.exe` on Windows | 🟡 Open | PATH-aware PowerShell 7 detection with fallback chain; maintains `-command` compatibility |
| [#1789](https://github.com/MoonshotAI/kimi-cli/pull/1789) | Mermaid diagram rendering in Web | 🟡 Open | Adds client-side Mermaid.js integration for chat message visualization |
| [#1825](https://github.com/MoonshotAI/kimi-cli/pull/1825) | Allow shell slash commands during streaming | 🟡 Open | Removes blocking toast for `/task` etc. during model output; queues commands instead |
| [#1827](https://github.com/MoonshotAI/kimi-cli/pull/1827) | Cap `list_directory` to 500 entries | 🟢 Merged | Prevents token overflow from large directories; adds exploration hint |
| [#1826](https://github.com/MoonshotAI/kimi-cli/pull/1826) | Blocking update gate on startup | 🟢 Merged | Full-screen prompt for cached updates with `[Enter]` to upgrade, `[q]` to skip, `[d]` to dismiss |
| [#1822](https://github.com/MoonshotAI/kimi-cli/pull/1822) | Cross-process file lock for token refresh | 🟢 Merged | `filelock`-based coordination for multi-instance scenarios (terminal + VS Code + web) |
| [#1821](https://github.com/MoonshotAI/kimi-cli/pull/1821) | Hardened token lifecycle management | 🟢 Merged | Dynamic refresh threshold, atomic writes, revocation cleanup; builds on [#1819](https://github.com/MoonshotAI/kimi-cli/pull/1819) |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Session lifecycle management** | [#1814](https://github.com/MoonshotAI/kimi-cli/issues/1814) (CLI query/restore), [#1794](https://github.com/MoonshotAI/kimi-cli/issues/1794) (UX polish) | High—core workflow gap |
| **Automation/scheduling primitives** | [#1833](https://github.com/MoonshotAI/kimi-cli/issues/1833) (`/loop` command), [#1327](https://github.com/MoonshotAI/kimi-cli/issues/1327) (step limits) | Emerging—parity with Claude Code |
| **Web UI feature parity** | [#1767](https://github.com/MoonshotAI/kimi-cli/pull/1767) (YOLO mode), [#1789](https://github.com/MoonshotAI/kimi-cli/pull/1789) (Mermaid) | Active development |
| **Large-file/scale handling** | [#1786](https://github.com/MoonshotAI/kimi-cli/issues/1786) (UI lag), [#1827](https://github.com/MoonshotAI/kimi-cli/pull/1827) (directory capping) | Critical for enterprise adoption |

---

## Developer Pain Points

| Category | Symptoms | Root Cause | Mitigation Status |
|----------|----------|------------|-----------------|
| **Authentication fragility** | Forced re-logins 3-4× daily, cross-instance token conflicts | 15-minute token expiry without reactive recovery; race conditions in multi-process environments | Addressed in [#1819](https://github.com/MoonshotAI/kimi-cli/pull/1819) → [#1821](https://github.com/MoonshotAI/kimi-cli/pull/1821) → [#1822](https://github.com/MoonshotAI/kimi-cli/pull/1822) |
| **Context window management** | Silent failures in large repos, misleading "empty context" errors | Unbounded directory listings, aggressive system prompt injection | [#1827](https://github.com/MoonshotAI/kimi-cli/pull/1827) implements 500-entry cap |
| **Streaming UX blocking** | Lost commands during model output, inability to inspect task state | Synchronous command validation | [#1825](https://github.com/MoonshotAI/kimi-cli/pull/1825) proposes command queuing |
| **Windows shell environment** | PowerShell version detection inconsistencies, authorization state drift | Legacy `powershell.exe` prioritization, credential storage isolation | [#1790](https://github.com/MoonshotAI/kimi-cli/pull/1790) adds `pwsh` preference chain |

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-11

## Today's Highlights

The OpenCode team is aggressively refactoring toward an Effect-based architecture, with kitlangton merging multiple facade destruction PRs and converting core tool definitions from Promise-based to Effect.Effect patterns. Meanwhile, the community is actively stress-testing Gemma 4 integration, surfacing tool-calling and reasoning issues that are getting rapid attention.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#13984](https://github.com/anomalyco/opencode/issues/13984) | Copy-paste broken in CLI | Fundamental UX blocker affecting daily workflow; "copied to clipboard" notification is false positive | 21 comments, 8 👍 — active troubleshooting |
| [#6209](https://github.com/anomalyco/opencode/issues/6209) | iTerm scrolling broken | Terminal compatibility issue where scroll affects input box instead of output history | 20 comments, 17 👍 — high visibility |
| [#21100](https://github.com/anomalyco/opencode/issues/21100) | `e.diffs.map is not a function` in v1.3.15 | Hard crash in web session rendering; blocks IDE usage | 15 comments, 3 👍 — regression in recent release |
| [#4754](https://github.com/anomalyco/opencode/issues/4754) | Linux dual-clipboard paste behavior | Deep platform-specific TUI behavior quirk; affects power users | 14 comments, 10 👍 — technical deep-dive |
| [#2047](https://github.com/anomalyco/opencode/issues/2047) | LM Studio model refresh fails | Provider integration staleness; logout/login cycle doesn't help | 14 comments, 3 👍 — workflow friction |
| [#17994](https://github.com/anomalyco/opencode/issues/17994) | Multi-agent orchestration in isolated workspaces | Strategic feature request for team-based agent workflows | 13 comments, 2 👍 — architectural discussion |
| [#11176](https://github.com/anomalyco/opencode/issues/11176) | Official VS Code extension request | Most upvoted feature (37 👍); users want native IDE integration vs. current workarounds | 12 comments — sustained demand |
| [#20995](https://github.com/anomalyco/opencode/issues/20995) | Gemma 4 tool calling fails via Ollama | Critical local model support gap; streaming `tool_calls` not recognized | 10 comments, 27 👍 — urgent for local-first users |
| [#5635](https://github.com/anomalyco/opencode/issues/5635) | WSL backend support for Desktop | Windows/WSL interoperability gap; 33 👍 shows strong demand | 9 comments — implementation discussion |
| [#14167](https://github.com/anomalyco/opencode/issues/14167) | Ubuntu startup lag/blank screen | Performance regression worsening across 1.1x→1.3x releases | 8 comments, 5 👍 — degradation pattern |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#21961](https://github.com/anomalyco/opencode/pull/21961) | `Tool.Def.execute` returns Effect, rename `defineEffect` → `define` | Core architectural shift: all 18 tools migrated from Promise to Effect.Effect; removes `Effect.runPromise` boilerplate | Open — foundational |
| [#21946](https://github.com/anomalyco/opencode/pull/21946) | Extract LSP diagnostics reporting utility | DRY refactor: consolidates duplicated error reporting across tool files | Closed |
| [#21962](https://github.com/anomalyco/opencode/pull/21962) | Destroy Todo facade | Second facade destruction using AppRuntime pattern; validates migration approach | Closed |
| [#21956](https://github.com/anomalyco/opencode/pull/21956) | Destroy Storage facades | First facade destruction: Session.diff migrated, Storage facades + `makeRuntime` deleted | Closed |
| [#21963](https://github.com/anomalyco/opencode/pull/21963) | Disable default Effect console logger | Observability fix: prevents duplicate stdout logs, preserves OTLP export | Closed |
| [#21907](https://github.com/anomalyco/opencode/pull/21907) | Add free model resolution | New feature: `--model free` resolves to random zero-cost opencode model; supports `--variant any` | Open |
| [#21882](https://github.com/anomalyco/opencode/pull/21882) | Pass instance context to `containsPath` | Fixes Electron-embedded server crash where `Instance` access fails | Open |
| [#21955](https://github.com/anomalyco/opencode/pull/21955) | Split ProviderTransform by family | Refactor: monolithic `transform.ts` → structured `transform/` module per model family | Open |
| [#15038](https://github.com/anomalyco/opencode/pull/15038) | OpenAI WebSocket transport | Experimental Responses API streaming with incremental follow-up handling | Open — long-running |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | Mobile touch optimization | Responsive UI for touch devices while preserving desktop experience | Open — UX expansion |

---

## Feature Request Trends

1. **IDE Integration**: VS Code extension request (#11176) dominates with 37 👍; users want native editor experience rather than parallel TUI/Desktop workflows
2. **Multi-Agent Workflows**: Growing interest in orchestrated agent teams with isolated workspaces (#17994) — signals enterprise/team use case maturation
3. **Windows/WSL Polish**: Strong demand for first-class WSL support (#5635, 33 👍) and resolution of Windows-specific issues (trojan false positives, VM failures)
4. **Model Provider Flexibility**: Free model resolution (#21907) and better local model integration (LM Studio refresh, Ollama/Gemma 4 fixes) indicate users want cost-optimized, local-first options

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **TUI/Terminal Compatibility** | Copy-paste (#13984, #4754), scrolling (#6209), startup lag (#14167) | Very high — daily friction |
| **Model Integration Reliability** | Gemma 4 tool calling (#20995), LM Studio staleness (#2047), reasoning failure (#21746) | High — blocks local AI adoption |
| **Configuration/Permissions** | Granular permissions unclear (#20307), skill pattern rules not enforced (#21793), formatter conflicts (#21864) | Medium — config complexity |
| **Cross-Platform Stability** | Windows trojan flags (#7655), WSL attachments (#1202), Electron embedding issues (#21882) | Medium — platform parity gaps |
| **SDK/Process Management** | `server.close()` orphan processes (#21628), skill reference staleness (#19050) | Lower — advanced use cases |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-11

## Today's Highlights

The Pi project saw intense activity with **19 issues closed in 24 hours**, including critical fixes for streaming hangs, session management bugs, and Windows Terminal compatibility. A major reliability improvement landed with a **stream idle timeout watchdog** to detect hung LLM connections, while the only open issue highlights growing UX concerns around reasoning capability controls across heterogeneous model providers.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Status |
|---|-------|--------------|--------|
| [#3020](https://github.com/badlogic/pi-mono/issues/3020) | **Stream idle timeout watchdog for streaming providers** | Gemini and other providers were hanging for 385+ seconds with zero feedback; this adds critical production reliability for long-running agents. | ✅ Closed |
| [#3021](https://github.com/badlogic/pi-mono/issues/3021) | **`pi.*` calls target disposed session after `ctx.newSession()`** | Breaking bug causing silent data loss in extensions—command handlers couldn't reliably start fresh sessions. | ✅ Closed |
| [#3017](https://github.com/badlogic/pi-mono/issues/3017) | **"No tool call found for function call output" after errored Codex turn** | OpenAI Codex subscription users hit cascading failures when tool calls errored; broke agent recovery workflows. | ✅ Closed |
| [#3015](https://github.com/badlogic/pi-mono/issues/3015) | **FD leak in print mode: cli.ts does not await main()** | Shell scripts invoking `pi -p` leaked file descriptors, breaking automation pipelines. | ✅ Closed |
| [#3012](https://github.com/badlogic/pi-mono/issues/3012) | **Claude Max subscription: "Third-party apps now draw from your extra usage"** | Anthropic policy change broke existing Claude integrations; requires provider-level adaptation. | ✅ Closed |
| [#3011](https://github.com/badlogic/pi-mono/issues/3011) | **`-p` non-interactive mode not exiting** | `pi -p` hung after output, forcing `^C`—critical for CI/CD and scripting use cases. | ✅ Closed |
| [#3004](https://github.com/badlogic/pi-mono/issues/3004) | **Regular crash: Rendered line exceeds terminal width** | TUI rendering panic affecting daily usability; terminal width edge cases unhandled. | ✅ Closed |
| [#2999](https://github.com/badlogic/pi-mono/issues/2999) | **Expose SYSTEM PROMPT variables to custom SYSTEM.md** | Custom system prompts couldn't access template variables like `{{cwd}}`, limiting customization. | ✅ Closed |
| [#2990](https://github.com/badlogic/pi-mono/issues/2990) | **Multiple `--append-system-prompt` should not override** | CLI flag behavior violated POSIX conventions; users expected concatenation, got replacement. | ✅ Closed |
| [#3016](https://github.com/badlogic/pi-mono/issues/3016) | **Reasoning capabilities not represented explicitly enough, UX misleading** | *Only open issue* — Core architectural tension: "reasoning" is model-specific (on/off vs. budget vs. none), but Pi exposes it as unified setting. | 🔴 Open |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#3019](https://github.com/badlogic/pi-mono/pull/3019) | **Stream idle timeout watchdog for all providers** | Adds `withStreamIdleTimeout()` generator; aborts hung connections when no chunks received within timeout. Production-critical reliability fix. | ✅ Merged |
| [#3018](https://github.com/badlogic/pi-mono/pull/3018) | **[codex] Improve OpenAI prompt cache affinity** | Aligns cache keys with Codex patterns using UUIDv7 session IDs; reduces token costs for repeated prompts. | 🔴 Open |
| [#3014](https://github.com/badlogic/pi-mono/pull/3014) | **Deliver extension followUp messages queued during agent_end** | Fixes silent message drop when extensions send follow-ups as agent shuts down; critical for extension reliability. | ✅ Merged |
| [#3002](https://github.com/badlogic/pi-mono/pull/3002) | **Do not inject bunfs script path into subagent prompts** | Prevents `/$bunfs/root/pi` virtual path from leaking into subagent contexts when using Bun-compiled binaries. | 🔴 Open |
| [#3008](https://github.com/badlogic/pi-mono/pull/3008) / [#3006](https://github.com/badlogic/pi-mono/pull/3006) | **Fix typo: GML → GLM** | Documentation fix for GLM-4.5 model naming. | ✅ Merged |
| [#2854](https://github.com/badlogic/pi-mono/issues/2854) | **Fix Z.AI endpoint and add GLM-5.1 model** | Corrected model catalog source mismatch; added new Z.AI model support. | ✅ Closed |
| [#3009](https://github.com/badlogic/pi-mono/issues/3009) | **Omit devDependencies when installing package via git** | `pi install git:` now uses `--omit=dev`, reducing install bloat for runtime dependencies. | ✅ Closed |
| [#3005](https://github.com/badlogic/pi-mono/issues/3005) | **Make "UPDATE AVAILABLE" message toggleable** | Adds setting to suppress yellow update banner; addresses NixOS and managed-environment workflows. | ✅ Closed |
| [#3000](https://github.com/badlogic/pi-mono/issues/3000) | **pi update reinstalls npm packages every time** | Fixed redundant npm reinstalls when packages already current; significant speedup for update workflows. | ✅ Closed |
| [#3003](https://github.com/badlogic/pi-mono/issues/3003) | **Z.AI coding endpoint resolves to /v4/v1/messages (404)** | Regression fix for OpenClaw 2026.4.5 URL construction bug in Z.AI provider. | ✅ Closed |

---

## Feature Request Trends

1. **Reasoning Control Unification** — Growing demand to rationalize how Pi exposes "reasoning" across models with incompatible semantics (Z.AI on/off, OpenAI budget tokens, Claude extended thinking, none at all). The open [#3016](https://github.com/badlogic/pi-mono/issues/3016) signals this needs architectural attention.

2. **Provider-Specific Model Registry Maintenance** — Multiple issues around Z.AI, Azure OpenAI, and Ollama model definitions suggest the current registry update process is reactive; community wants faster turnaround for new model availability.

3. **Extension Developer Experience** — Requests for better session lifecycle control, reliable message delivery, and TypeScript tooling support indicate the extension API is maturing and hitting real-world complexity.

4. **Operational Hardening** — Timeout handling, FD leaks, and non-interactive mode reliability show Pi is being deployed in production pipelines, not just interactive use.

---

## Developer Pain Points

| Category | Symptoms | Root Cause |
|----------|----------|------------|
| **Streaming Reliability** | Hung connections, 385s+ waits for first token | No timeout on idle streams; now addressed by [#3019](https://github.com/badlogic/pi-mono/pull/3019) |
| **Session Lifecycle Bugs** | Silent data loss, disposed session targeting | `ctx.newSession()` didn't rebind `pi.*` proxy; [#3021](https://github.com/badlogic/pi-mono/issues/3021) fixed |
| **CLI Scripting Friction** | `-p` hangs, FD leaks, update noise | Async cleanup missing; [#3015](https://github.com/badlogic/pi-mono/issues/3015), [#3011](https://github.com/badlogic/pi-mono/issues/3011), [#3005](https://github.com/badlogic/pi-mono/issues/3005) addressed |
| **Provider Policy Whack-a-Mole** | Claude Max usage changes, Codex error handling | Third-party API drift requires rapid provider adapter updates |
| **Model Capability Mismatch** | Multimodal models "can't see" images, reasoning UX confusion | Registry metadata vs. actual model behavior gaps; [#3022](https://github.com/badlogic/pi-mono/issues/3022), [#3016](https://github.com/badlogic/pi-mono/issues/3016) |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

 # Qwen Code Community Digest — 2026-04-11

---

## 1. Today's Highlights

Qwen Code shipped **v0.14.3** with critical UI stability fixes, including resolved race conditions in tool call handling and dead state cleanup in input prompts. The community is actively driving toward better session management with a new `/chat` command PR in review, while TUI performance and terminal compatibility remain the dominant themes in open issues.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.14.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.3)** | Stable | Fix: Remove dead `dirs` state and unused hook parameter from `InputPrompt` ([#2891](https://github.com/QwenLM/qwen-code/pull/2891)); Fix: Prevent tool call UI leak and Enter/accept buffer race condition ([#2872](https://github.com/QwenLM/qwen-code/pull/2872)) |
| **[v0.14.3-nightly.20260411.55bcec70d](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.3-nightly.20260411.55bcec70d)** | Nightly | Same patchset as v0.14.3 base |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|------------------|
| [#3025](https://github.com/QwenLM/qwen-code/issues/3025) | Port `/chat` command from iflow CLI for session save/browse/delete | Addresses a core UX gap: auto-generated session names are unreadable, manual naming is essential for workflow management | 4 comments, actively referenced in PR #3105 |
| [#241](https://github.com/QwenLM/qwen-code/issues/241) | Shift+Enter sends message instead of inserting newline | Breaks muscle memory from Claude Code and standard coding environments; impacts multi-line prompt composition | 4 comments, 5 👍, long-standing |
| [#3019](https://github.com/QwenLM/qwen-code/issues/3019) | Subagent skill triggering unreliable in v0.14.1 | Critical for agent orchestration workflows; "sometimes works" bugs are hardest to debug | 4 comments, needs triage |
| [#2950](https://github.com/QwenLM/qwen-code/issues/2950) | Long sessions cause infinite scroll flickering | Severe UX degradation at scale; blocks productive use for complex, multi-turn tasks | 3 comments, video evidence attached |
| [#2928](https://github.com/QwenLM/qwen-code/issues/2928) | TUI flickers during parallel subagent execution | Rendering instability under concurrency; suggests architectural TUI issue | 3 comments, Windows 11 repro |
| [#3073](https://github.com/QwenLM/qwen-code/issues/3073) | `run_shell_command` intermittently denied by permission rules | Flaky security policy enforcement breaks trust in automation | 2 comments, "unpredictably" emphasized |
| [#2922](https://github.com/QwenLM/qwen-code/issues/2922) | Notification hooks for task completion/approval requests | Essential for async workflows; users context-switch during long runs | 2 comments, well-scoped feature request |
| [#2748](https://github.com/QwenLM/qwen-code/issues/2748) | TUI performance and UX improvements (startup, flicker, verbosity) | Meta-issue capturing systemic TUI debt; 3-5s startup with MCP is blocker | 2 comments, 2 👍, detailed breakdown |
| [#2723](https://github.com/QwenLM/qwen-code/issues/2723) | "Always Allow" permissions not persisted | Closed but representative of trust/UX friction in permission system | 2 comments, 2 👍 |
| [#2787](https://github.com/QwenLM/qwen-code/issues/2787) | API Error: Connection error (fetch failed) | Infrastructure reliability concern; vague error hinders self-service debugging | 2 comments, needs better error taxonomy |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#3126](https://github.com/QwenLM/qwen-code/pull/3126) | French (fr-FR) i18n support | Complete translation file + language registration; expands accessibility to Francophone developers | Open |
| [#3109](https://github.com/QwenLM/qwen-code/pull/3109) | Fix stale context usage after `/compress` resume | One-line fix for token count desync; critical for accurate context window management | Open |
| [#3115](https://github.com/QwenLM/qwen-code/pull/3115) | AI contribution tracking in git commits | Per-file attribution for compliance/auditing; addresses emerging OSS governance needs | Open |
| [#3105](https://github.com/QwenLM/qwen-code/pull/3105) | `/chat` command for named session management | `save`/`list`/`resume`/`delete` subcommands; directly implements #3025 request | Open |
| [#3006](https://github.com/QwenLM/qwen-code/pull/3006) | Microcompaction for idle context cleanup | Lightweight pre-pass clearing stale tool results after 60min idle; optimizes token usage | Open |
| [#3013](https://github.com/QwenLM/qwen-code/pull/3013) | `SlicingMaxSizedBox` to prevent terminal flicker on large outputs | Architectural fix for #2950/#2928 class of rendering issues | Open |
| [#3123](https://github.com/QwenLM/qwen-code/pull/3123) | Handle empty OAuth refresh response | Prevents crash on stale token; improves auth resilience | Open |
| [#3120](https://github.com/QwenLM/qwen-code/pull/3120) | Model picker for Fast Model in `/settings` | Replaces manual text input with browseable selection; reduces configuration errors | Open |
| [#3103](https://github.com/QwenLM/qwen-code/pull/3103) | Shift+Enter newline support across terminals | Three-mechanism fallback approach for #241; maximizes terminal compatibility | Open |
| [#3101](https://github.com/QwenLM/qwen-code/pull/3101) | Current folder + branch name in CLI footer | Context awareness for multi-project workflows; addresses #3102 | Open |

---

## 5. Feature Request Trends

| Theme | Evidence | Implication |
|-------|----------|-------------|
| **Session lifecycle management** | #3025, #3105, #3117 (custom rules per session), #3059 (prompt enhancement) | Users want fine-grained control over conversation state, not just auto-save |
| **Multi-modal input** | #3110 (voice input `/voice`) | CLI fatigue driving demand for alternative input methods |
| **Async/background operation awareness** | #2922, #3106 (completion sounds), #3114 (WebFetch performance) | Users treat Qwen Code as long-running agent, need interruption-friendly UX |
| **Context transparency** | #3102/#3101 (folder/branch display), #3107 (context usage accuracy), #3006 (compaction) | Growing sophistication in token budget management |
| **IDE companion parity** | #3108, #3111, #2593, #2590 | VS Code extension needs feature parity with core CLI |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **TUI instability** | Flickering, scroll jumping, startup latency, WSL scrollback failure (#2950, #2928, #2748, #3097, #3118) | *Critical mass* — dominates issue volume |
| **Permission system unpredictability** | Intermittent denials, "Always Allow" not sticky (#3073, #2723) | Recurring trust erosion |
| **Terminal compatibility gaps** | Shift+Enter, proxy handling, Windows/WSL edge cases (#241, #3122, #3097) | Cross-platform friction |
| **Context management opacity** | Wrong token counts, compression surprises, no visibility into what's loaded (#3107, #2950, #3006 motivation) | Power-user blocker |
| **Installation/Auth reliability** | Email verification failures, certificate errors, OAuth edge cases (#3121, #3039, #3123) | Onboarding friction |

---

*Digest compiled from github.com/QwenLM/qwen-code activity on 2026-04-11.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*