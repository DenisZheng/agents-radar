# AI CLI Tools Community Digest 2026-04-23

> Generated: 2026-04-23 00:18 UTC | Tools covered: 8

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

# Cross-Tool AI CLI Ecosystem Report — 2026-04-23

---

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured into a competitive seven-player market with distinct architectural philosophies: closed-source commercial tools (Claude Code, GitHub Copilot CLI, Codex) compete against open-source alternatives (OpenCode, Qwen Code, Pi, Kimi CLI) that prioritize local deployment and protocol interoperability. All tools now grapple with MCP (Model Context Protocol) adoption as both opportunity and operational burden—process leaks, startup storms, and lifecycle management dominate reliability concerns. Rust and TypeScript have emerged as the dominant implementation languages, reflecting performance and extensibility priorities respectively. Enterprise readiness (sandboxing, SSO, audit trails) increasingly separates production-viable tools from hobbyist projects, while token/quota transparency has become a universal trust fracture point across all pricing models.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Release Notes Quality |
|------|:-----------:|:---------:|:--------------:|:---------------------|
| **Claude Code** | 50 updated | 16 (2 legitimate, 14 spam) | 0 | N/A |
| **OpenAI Codex** | ~12 hot | ~12 active | 3 alphas (v0.123.0-alpha.8–10) | ⚠️ Minimal/empty |
| **Gemini CLI** | ~10 hot | ~10 active | 1 patch (v0.39.0-preview.2) | ✅ Cherry-pick documented |
| **GitHub Copilot CLI** | ~10 hot | 2 | 2 (v1.0.35-3, -4) | ✅ Detailed |
| **Kimi CLI** | ~10 hot | ~10 active | 1 (v1.38.0) | ✅ Detailed with PR links |
| **OpenCode** | ~10 hot | ~10 active | 0 | N/A |
| **Pi** | 27 closed + active | ~10 active | 1 (v0.69.0) | ✅ Architecture-focused |
| **Qwen Code** | ~10 hot | ~10 active | 4 (v0.15.0 + previews) | ✅ Detailed |

**Observations:** Claude Code shows highest issue volume but lowest PR legitimacy ratio (spam cluster). Codex leads release velocity with rapid alpha iteration but sacrifices documentation. Qwen Code uniquely ships both stable and LTS preview tracks.

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **MCP lifecycle & performance** | Codex, Gemini, Claude Code, Kimi, OpenCode | Process leak prevention, startup deduplication, hook observability, approval-per-interaction fatigue |
| **Cross-platform history sync** | Claude Code (#28791), Copilot CLI (named sessions), Gemini (#22819 memory routing) | Session resume reliability, CLI↔Desktop continuity, corruption recovery |
| **Token/quota transparency** | Claude Code (#45756), Kimi (#1994), Copilot CLI (#2591, #2797), Qwen (#3203) | Real-time usage display, accurate billing, configurable limits, marketing-actual parity |
| **Sandbox/security hardening** | Copilot CLI (#892), OpenCode (#22292, #14593, #22100), Codex (permission-profile refactor), Gemini (#25814) | Enterprise governance, workspace trust, deterministic automation guardrails |
| **Local/self-hosted model support** | Qwen (#3384, #1280), Kimi (#1997 Windows install), OpenCode (#21396 Ollama), Pi (#3567 llama.cpp) | First-class provider configs, auth bypass for local endpoints, discovery protocols |
| **Reasoning/thinking transparency** | Claude Code (#8477), Qwen (`</think>` pollution #2596), OpenCode (#21370 reasoning blocks) | Visibility into model reasoning chains, proper block handling across providers |
| **TUI/terminal robustness** | Claude Code (#52169, #52166), Gemini (#25166 hangs, #25216 input), Kimi (#1998 Neovim, #1985 TTY), OpenCode (#23877 Windows OSC) | Alt-screen compatibility, focus management, escape sequence handling, embedded terminal support |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi CLI | OpenCode | Pi | Qwen Code |
|-----------|:-----------:|:------------:|:----------:|:-----------:|:--------:|:--------:|:--:|:---------:|
| **Primary Users** | Individual developers, prosumers | Enterprise, IDE-integrated | Google Cloud ecosystem | GitHub-centric, Microsoft shops | China market, JetBrains users | Security-conscious, multi-provider | Extension builders, edge deploy | China local-first, self-hosted |
| **Architecture** | Closed, monolithic | Closed, Rust CLI + TS extension | Closed, Google-native | Closed, LSP-backed | Closed, Python-based | Open-source, plugin-heavy | Open-source, TypeBox extensions | Open-source, ACP/MCP-native |
| **Key Differentiator** | Deep Claude model integration, thinking quality | Permission system sophistication, sandbox innovation | Real-time voice, cloud Whisper | GitHub data integration, contribution graphs | K2.6 reasoning model, aggressive pricing | Multi-provider abstraction, team TUI | Extension API maturity, edge runtime | ACP hooks, domestic search alternatives |
| **Critical Weakness** | Quota unpredictability, cross-platform fragmentation | Sandbox approval fatigue, macOS resource leaks | Permission fatigue, shell hangs | Session corruption, premium request opacity | OAuth fragility, Windows instability | Provider abstraction leaks, security model | Edit tool fragility, Windows DX | Auth complexity, React CLI instability |
| **Enterprise Readiness** | 🟡 Bedrock gap | 🟢 Permission profiles | 🟡 Headless trust | 🟢 LSP integration | 🔴 OAuth mandate | 🟢 Sandboxing intent | 🟢 SDK focus | 🟡 ACP maturity |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **🔥 Rapid Iteration** | Codex, Pi, Qwen Code | 3 alphas/24h (Codex); 27 issues closed + TypeBox migration (Pi); v0.15.0 + ACP milestone (Qwen) |
| **🟡 Steady Progress** | Gemini CLI, Kimi CLI, Copilot CLI | Stacked PRs for shell streaming (Gemini); v1.38.0 with critical auth fix (Kimi); named sessions shipped (Copilot) |
| **🟠 Maintenance Mode / Strained** | Claude Code, OpenCode | No release, spam PR burden, "invalid" label misuse on enterprise requests (Claude); no release, security concerns (OpenCode) |

**Community Health Signals:**
- **Codex**: Highest engineering velocity but release note transparency deficit suggests internal pressure over external communication
- **Pi**: Most disciplined issue closure rate (27/24h) with security-responsive culture (XSS same-day fix)
- **Claude Code**: Largest absolute engagement (114 comments on timeout issue) but maintainer attention diluted by spam; "invalid" label on 225-👍 enterprise request risks community trust erosion
- **Qwen Code**: Most politically charged community (#3203 113 comments on free tier) indicating growth-to-commercialization tension

---

## 6. Trend Signals

| Signal | Evidence | Implication for Developers |
|--------|----------|---------------------------|
| **MCP as "success disaster"** | Codex process leaks (492 orphans), Gemini startup storms, Claude Code plugin schema gaps | Adopt MCP incrementally; implement circuit breakers and process reapers before scaling |
| **Permission UX as competitive battleground** | Codex's 8-PR permission-profile refactor, Gemini's permanent approval default, Copilot's sandbox demand (#892) | Expect granular, task-scoped permissions to become standard; plan for mid-task policy changes |
| **Token economics transparency crisis** | Kimi's "2 queries = 2 hours quota" (#1994), Claude's "1.5h Pro Max exhaustion" (#45756), Copilot's 80-100 premium request loops (#2591) | Demand auditable usage APIs before committing to paid tiers; model reasoning chains are cost multipliers |
| **Reasoning model integration fragility** | Anthropic API compliance fixes (Kimi #1978, Pi #3561), OpenCode reasoning block crashes (#20698), Qwen `</think>` pollution (#2596) | Abstract reasoning block handling early; provider formats diverging faster than standards can stabilize |
| **Terminal-as-IDE convergence** | Gemini voice mode, Kimi IDE integration demands (Trae, IDEA, Neovim), OpenCode mobile touch optimization | CLI tools becoming IDE backends; TUI assumptions breaking in embedded contexts |
| **China-market localization pressure** | Qwen domestic search APIs, Kimi China deployment, Gemini's limited China presence | Self-hosted and domestic-provider alternatives becoming mandatory for compliance-sensitive deployments |

---

*Report compiled from 2026-04-23 community digests. For methodology or corrections, contact the analysis team.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-23 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Universal pain point; affects every document Claude generates; author argues users rarely ask for good typography but always suffer without it |
| 2 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised skill for actionable, single-conversation frontend design guidance | Clarity and executability debate—ensuring instructions are concrete enough to steer behavior without being overly prescriptive |
| 3 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating Skill structure (20%), security (20%), performance, and maintainability | First systematic quality framework for the Skills marketplace itself; five-dimension scoring model |
| 4 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, convert ODT/ODS files; ISO standard open-source document format | Enterprise interoperability demand; LibreOffice ecosystem bridge |
| 5 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack: Testing Trophy philosophy, AAA pattern, React Testing Library, E2E patterns | Comprehensive scope; fills critical gap in software engineering Skills |
| 6 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP integration; Apache 2.0 model released at TechEd 2025 |
| 7 | **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | 🟡 Open | Native macOS automation via AppleScript/`osascript`—replaces screenshot-based computer use | Two-tier permission system; accessibility vs. security trade-offs |
| 8 | **Masonry Image/Video Generation** | [#335](https://github.com/anthropics/skills/pull/335) | 🟡 Open | AI-powered image (Imagen 3.0) and video (Veo 3.1) generation via Masonry CLI | Multimedia content creation pipeline; job management and history |

> **Note:** All top PRs show `Comments: undefined` in metadata, suggesting comment counts may not be fully captured; ranking incorporates update frequency, description depth, and ecosystem significance.

---

## 2. Community Demand Trends

Derived from highest-comment Issues, ranked by engagement:

| Trend | Issue | Votes | Demand Signal |
|:---|:---|:---|:---|
| **Org-wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) | 👍 5 | Enterprise teams need native skill distribution; current Slack/Teams + manual upload is friction-heavy |
| **Skill Marketplace Trust & Security** | [#492](https://github.com/anthropics/skills/issues/492) | 👍 2 | `anthropic/` namespace impersonation risk; demand for verified publisher boundaries |
| **MCP Protocol Exposure** | [#16](https://github.com/anthropics/skills/issues/16) | — | Skills-as-APIs: algorithmic-art → `generateAlgorithmArt({...})` structured interface |
| **AWS Bedrock Integration** | [#29](https://github.com/anthropics/skills/issues/29) | — | Multi-platform deployment; skills portability beyond Claude-native |
| **Skill Lifecycle Management** | [#62](https://github.com/anthropics/skills/issues/62), [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) | 👍 5+ | Backup, version control, deletion, and recovery—skills as critical user assets |

**Emerging thematic clusters:**
- **Enterprise governance**: sharing, audit, SSO compatibility (#532 closed)
- **Document format breadth**: ODT, DOCX fixes (#538, #541), PPTX (#868), HADS (#616, #622)
- **Meta-quality infrastructure**: skills that improve other skills (#83, #202 closed)

---

## 3. High-Potential Pending Skills

Active PRs with strong merge indicators (recent updates, focused scope, maintainer-responsive):

| Skill | PR | Last Update | Merge Probability | Why It Lands |
|:---|:---|:---|:---|:---|
| **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 2026-04-16 | 🔵 High | Critical bugfix—hardcoded `w:id` values corrupt documents with existing bookmarks; root cause clearly identified |
| **PDF Case-Sensitivity Fix** | [#538](https://github.com/anthropics/skills/pull/538) | 2026-04-16 | 🔵 High | 8 broken references on case-sensitive filesystems; trivial review surface |
| **YAML Validation (Unquoted Descriptions)** | [#539](https://github.com/anthropics/skills/pull/539), [#361](https://github.com/anthropics/skills/pull/361) | 2026-04-16 | 🔵 High | Duplicate PRs (#539 supersedes #361) indicate validated need; silent parsing failures are insidious |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | 2026-03-19 | 🟡 Medium | Community health gap (25% score); companion PR template (#512) ready; blocked on maintainer review bandwidth |
| **HADS Document Standard** | [#616](https://github.com/anthropics/skills/pull/616), [#622](https://github.com/anthropics/skills/pull/622) | 2026-03-31 | 🟡 Medium | "One-time token cost, every future read optimized"—elegant value prop; needs namespace clarification vs. converter |
| **Shodh-Memory** | [#154](https://github.com/anthropics/skills/pull/154) | 2026-03-03 | 🟡 Medium | Persistent cross-conversation context; addresses core Claude limitation; complexity may require architectural review |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade document production infrastructure**—format coverage (ODT, DOCX, PDF, HADS), typographic quality, and template filling—paired with organizational trust mechanisms (verified namespaces, SSO-compatible tooling, and org-wide skill distribution) that elevate Skills from personal productivity hacks to production-ready team assets.

---

---

# Claude Code Community Digest — 2026-04-23

---

## 1. Today's Highlights

No new releases dropped in the last 24 hours, but community activity remains intense with 50 updated issues. The dominant themes are **API reliability concerns** (stream idle timeouts affecting macOS users), **cost/quota management frustrations** (multiple reports of rapid quota exhaustion), and **cross-platform experience gaps** between CLI, Desktop, and VSCode variants. Several high-engagement feature requests around TUI state visibility and thinking transparency continue gaining traction.

---

## 2. Releases

*No releases published in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| **#46987** [BUG] API Error: Stream idle timeout — partial response received ([link](https://github.com/anthropics/claude-code/issues/46987)) | Critical reliability issue affecting production workflows; 114 comments indicate widespread, ongoing impact. Marked duplicate but remains primary discussion hub. | 104 👍, extremely active; users sharing workarounds, requesting urgent fix |
| **#8477** [FEATURE] Add Option to Always Show Claude's Thinking ([link](https://github.com/anthropics/claude-code/issues/8477)) | Long-standing transparency request; v2.0.0 changed thinking visibility behavior, frustrating developers who need to audit reasoning chains. | 232 👍, 71 comments; sustained demand since Sept 2025 |
| **#32668** [FEATURE] Support Amazon Bedrock as backend for Claude Desktop / Cowork ([link](https://github.com/anthropics/claude-code/issues/32668)) | Enterprise deployment blocker; CLI supports Bedrock but Desktop/Cowork don't, creating inconsistent enterprise access patterns. | 225 👍, 58 comments; marked invalid but clearly mislabeled—strong enterprise pushback |
| **#45756** [BUG] Pro Max 5x Quota Exhausted in 1.5 Hours Despite Moderate Usage ([link](https://github.com/anthropics/claude-code/issues/45756)) | Pricing/trust issue; suggests potential metering bug or unexpected cost explosion under WSL. | 140 👍, 47 comments; users comparing usage patterns, seeking refunds |
| **#34820** [BUG] claude.ai visualize feature broken — claudemcpcontent.com unreachable ([link](https://github.com/anthropics/claude-code/issues/34820)) | Service infrastructure failure; DNS resolution failure indicates potential CDN or domain configuration issue. | 16 👍, 45 comments; "PLEASE REVIEW" urgency, cross-reported |
| **#9354** [BUG] Fix `${CLAUDE_PLUGIN_ROOT}` in command markdown OR support local project plugin installation ([link](https://github.com/anthropics/claude-code/issues/9354)) | Plugin ecosystem friction; broken variable substitution blocks local plugin development workflows. | 49 👍, 25 comments; has repro, macOS-specific |
| **#45775** claude.ai Gmail MCP regression: create_draft missing threadId parameter ([link](https://github.com/anthropics/claude-code/issues/45775)) | Integration breakage; Gmail MCP server API drift breaking email thread workflows. | 16 👍, 18 comments; marked invalid—likely API versioning issue |
| **#9686** [BUG] JSON schema specified in the marketplace.json doesn't exist ([link](https://github.com/anthropics/claude-code/issues/9686)) | Plugin marketplace integrity; broken schema references break validation and discovery. | 33 👍, 15 comments; has repro, packaging area |
| **#28791** [FEATURE] Sync conversation history between CLI and Claude Code desktop app ([link](https://github.com/anthropics/claude-code/issues/28791)) | Cross-platform UX gap; developers switching contexts lose continuity, reducing tool stickiness. | 33 👍, 14 comments; CLI + Desktop area labels |
| **#51874** [BUG] [Error] Tool result could not be submitted ([link](https://github.com/anthropics/claude-code/issues/51874)) | Fresh, rapidly closed issue; indicates potential regression in tool execution pipeline. | 33 👍, 38 comments; closed as invalid—may need monitoring for recurrence |

---

## 4. Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| **#51948** WinGet publishing workflow ([link](https://github.com/anthropics/claude-code/pull/51948)) | Adds GitHub Action to auto-publish stable releases to Microsoft WinGet repository; resolves #17160. Awaiting maintainer steps for token setup. | 🟢 OPEN |
| **#51875** Sort unique IPs from DNS resolution before ipset(8) ([link](https://github.com/anthropics/claude-code/pull/51875)) | Fixes dev container startup failure caused by duplicate A records from CNAME chains; addresses prior incomplete fixes (#50293, #42701). | 🟢 OPEN |
| **#24509** Add marketplace.json entry example in create-plugin ([link](https://github.com/anthropics/claude-code/pull/24509)) | Prevents plugin devs from inferring wrong field name (`path` vs `source`); improves DX for Phase 8 plugin creation. | 🔴 CLOSED |
| **#50643–#50565** GoodshytGroup spam cluster ([link](https://github.com/anthropics/claude-code/pulls?q=is%3Apr+author%3AGoodshytGroup)) | 6 PRs introducing unrelated "Ethos Aegis"/"Mythos" configuration; all closed. Appears to be repo misuse/abuse pattern. | 🔴 CLOSED |
| **#47895/#47421** "Claude Mythos operating contract" duplicates ([link](https://github.com/anthropics/claude-code/pull/47895)) | Same spam pattern as above; identical content submitted twice. No relation to actual Claude Code codebase. | 🔴 CLOSED |
| **#46914/#46912** Mythos Runtime Tests/Workflow ([link](https://github.com/anthropics/claude-code/pull/46914)) | Additional spam from same actor; CI workflow and test files for non-existent "Mythos runtime." | 🔴 CLOSED |
| **#46153/#46151** CHANGELOG.md updates ([link](https://github.com/anthropics/claude-code/pull/46153)) | Routine maintenance PRs; likely automated or batch changelog syncs. | 🔴 CLOSED |
| **#46150** Mythos veriflow brandkit ([link](https://github.com/anthropics/claude-code/pull/46150)) | Final spam artifact from GoodshytGroup cluster; brand assets for unrelated project. | 🔴 CLOSED |
| **#50638** Claude/fix readme images eu sfj ([link](https://github.com/anthropics/claude-code/pull/50638)) | Empty/spam PR with no description; part of abuse pattern. | 🔴 CLOSED |
| **#50595** Copilot/fix duplicate imports and restore classes ([link](https://github.com/anthropics/claude-code/pull/50595)) | Empty description; title suggests Copilot-generated fix but no verifiable changes. | 🔴 CLOSED |

> **Note:** PR activity is dominated by a single spam actor (GoodshytGroup). Only #51948 and #51875 represent legitimate community contributions.

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Thinking/Reasoning Transparency** | #8477 (always show thinking), #21894 (visual state indicators), #52160 (strong visual cue for window state) | 🔥 High — 270+ combined 👍 |
| **Cross-Platform History Sync** | #28791 (CLI ↔ Desktop sync) | 🟡 Moderate — enterprise relevance |
| **Enterprise Backend Flexibility** | #32668 (Bedrock for Desktop/Cowork) | 🔥 High — 225 👍, blocked by "invalid" label |
| **TUI/Terminal Experience Polish** | #52160, #21894, #42107 (terminal tab icons), #52166 (focus behavior), #52169 (TUI repainting) | 🟡 Moderate — quality-of-life cluster |
| **Cost/Quota Control** | #51141 (100x plan request), #45756 (quota exhaustion bug) | 🔥 High — monetization pressure |
| **MCP/Plugin DevEx** | #39061 (MCP startup errors), #9354 (plugin root path), #9686 (schema validation) | 🟡 Moderate — ecosystem maturity |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **API streaming timeouts** | Very High | 🔴 Critical | #46987 — blocking daily use, no clear workaround |
| **Quota/cost unpredictability** | High | 🔴 Critical | #45756, #52163 — metering bugs, plan upgrade traps |
| **Fragmented cross-platform experience** | High | 🟡 High | #28791, #34820, #45775 — CLI/Desktop/web diverge |
| **TUI rendering/terminal integration** | Moderate | 🟡 High | #52169, #52164, #52166, #47625 — Ghostty, focus, paste issues |
| **Plugin/MCP tooling gaps** | Moderate | 🟡 Medium | #9354, #9686, #39061, #46448 — schema, paths, error visibility |
| **Cowork virtualization/auth reliability** | Moderate | 🟡 High | #44654, #51813 — Windows virtualization, OAuth hangs |
| **Model switching/session recovery** | Emerging | 🟡 High | #52152 — Opus→Sonnet switch bricks session |
| **Spam/noise in repo** | Low (but disruptive) | 🟢 Low | GoodshytGroup PR cluster — maintainer attention tax |

---

*Digest compiled from 50 issues and 16 PRs updated 2026-04-22/23.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-23

## 1. Today's Highlights

The Codex team is rapidly iterating on the Rust CLI with three alpha releases in 24 hours (v0.123.0-alpha.8–10), while a major permission-system refactor is underway across 8+ PRs to replace legacy sandbox policies with canonical `PermissionProfile` abstractions. Meanwhile, sandbox and MCP-related regressions dominate community pain points, with Linux users hit hardest by approval fatigue and macOS users reporting severe CPU/memory spikes in both CLI and VS Code extension.

---

## 2. Releases

| Version | Notes |
|--------|-------|
| [rust-v0.123.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.8) | Rapid alpha iteration cycle continues |
| [rust-v0.123.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.9) | No detailed changelog provided |
| [rust-v0.123.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.10) | Latest in 0.123.0 series |

*Note: All three releases lack substantive release notes—community feedback suggests requesting detailed changelogs for alpha channels.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#14936](https://github.com/openai/codex/issues/14936) | **bwrap: Approval prompt shown for almost every command** (CLOSED) | Linux sandbox regression made CLI nearly unusable; required skipping sandbox for basic edits | 56 comments, 21 👍 — resolved but sparked broader sandbox UX debate |
| [#16231](https://github.com/openai/codex/issues/16231) | **High CPU usage on macOS after VS Code extension update** (OPEN) | M5 Pro MacBooks thermal-throttling; affects productivity-critical IDE path | 42 comments, 58 👍 — highest-engagement open issue, no fix yet |
| [#9224](https://github.com/openai/codex/issues/9224) | **Codex Remote Control** (OPEN) | Top feature request: phone-to-desktop Codex control via ChatGPT app | 40 comments, 304 👍 — massive demand, stagnant since January |
| [#14860](https://github.com/openai/codex/issues/14860) | **Error running remote compact task** (OPEN) | Context compaction failures break long sessions; affects gpt-5.4 on Linux | 40 comments, 25 👍 — persistent across versions, no resolution |
| [#17525](https://github.com/openai/codex/issues/17525) | **On Ubuntu, every single normal edit requires skipping sandbox** (CLOSED) | Duplicate pattern of #14936; Ubuntu 24.04 specifically broken | 24 comments — closed as duplicate, but signals systemic Linux sandbox problem |
| [#15764](https://github.com/openai/codex/issues/15764) | **Code Helper (Renderer) exceeds 100% when Codex applies patch in VS Code** (CLOSED) | Extension renderer process CPU spike during patch application; regression post-26.313.41514 | 23 comments, 36 👍 — fixed in later build but validation ongoing |
| [#18333](https://github.com/openai/codex/issues/18333) | **Codex Desktop repeatedly starts full MCP stacks, causing severe slowdown** (OPEN) | Memory pressure from MCP subagent proliferation; architectural issue | 13 comments, 3 👍 — emerging critical path for desktop stability |
| [#19009](https://github.com/openai/codex/issues/19009) | **Compact fails in CLI and VS Code Extension (Azure Foundry)** (OPEN) | Azure-backed users completely blocked from context management | 7 comments — new, high-severity for enterprise/Azure segment |
| [#18881](https://github.com/openai/codex/issues/18881) | **MCP child processes leak when McpConnectionManager is replaced** (OPEN) | 492 orphaned MCP children over 15 hours; daemon reliability compromised | 6 comments — production stability concern |
| [#18918](https://github.com/openai/codex/issues/18918) | **Windows sandbox DENY ACLs break git commits in .git directories** (OPEN) | Windows developers blocked from version control within sandbox | 5 comments — fundamental sandbox-VC integration failure |

---

## 4. Key PR Progress

| # | PR | Description | Impact |
|---|-----|-------------|--------|
| [#19050](https://github.com/openai/codex/pull/19050) | **feat(request-permissions): approve with strict review** | Adds "approve with guardian review" option for permission requests | Granular security UX; balances automation with oversight |
| [#19053](https://github.com/openai/codex/pull/19053) | **Enable fast mode for enterprise** | Defaults enterprise sessions to fast tier; adds `/fast off` persistence | Performance for business users without backward-compatibility break |
| [#18283](https://github.com/openai/codex/pull/18283) | **app-server: accept command permission profiles** | `command/exec` entry point migrates from `SandboxPolicy` to `PermissionProfile` | Critical infrastructure for permission-system modernization |
| [#18385](https://github.com/openai/codex/pull/18385) | **Support MCP tools in hooks** | Extends lifecycle hooks (`PreToolUse`, `PostToolUse`) beyond Bash to MCP tools | Unblocks MCP observability and orchestration |
| [#18950](https://github.com/openai/codex/pull/18950) | **Use active provider model catalogs for Bedrock** | `ThreadManager` derives `ModelsManager` from active provider, not hardcoded `openai` | Fixes Bedrock/Azure model listing bugs |
| [#18584](https://github.com/openai/codex/pull/18584) | **[4/4] Wire remote streamable HTTP MCP** | Final PR enabling `experimental_environment = "remote"` for MCP | Completes remote MCP architecture; e2e tested |
| [#18583](https://github.com/openai/codex/pull/18583) | **[3/4] Add executor-backed RMCP HTTP client** | Streamable HTTP client reusable across `reqwest` and executor paths | Foundation for #18584 |
| [#19055](https://github.com/openai/codex/pull/19055) | **Add safety check notification and error handling** | App-server notification for safety-flagged accounts | Trust/safety infrastructure |
| [#19056](https://github.com/openai/codex/pull/19056) | **Rename approvals reviewer variant to auto-review** | Internal cleanup: `GuardianSubagent` → `auto_review` naming consistency | Code health; reduces confusion post-#18504 |
| [#19047](https://github.com/openai/codex/pull/19047) | **Add agent task identity primitives** | PR 1/4 of "HAI reintroduction": typed runtime/task IDs, `AgentAssertion` helpers | Foundation for hierarchical agent infrastructure |

*Permission-profile migration spans 8 PRs (#18281–18288) by `bolinfest` — a coordinated refactor touching protocol, TUI, MCP, shell escalation, and test isolation.*

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Remote/mobile Codex control** | [#9224](https://github.com/openai/codex/issues/9224) (304 👍, Jan 2026) | Stalled; massive pent-up demand |
| **In-task permission management** | [#19015](https://github.com/openai/codex/issues/19015) — `/permissions` mid-task invocation | New; UX friction point |
| **MCP lifecycle/performance optimization** | [#18333](https://github.com/openai/codex/issues/18333), [#18881](https://github.com/openai/codex/issues/18881), [#16171](https://github.com/openai/codex/issues/16171) | Accelerating; MCP at scale is brittle |
| **Legacy sandbox deprecation mitigation** | [#18800](https://github.com/openai/codex/issues/18800) — removing `use_legacy_landlock` breaks Docker workflows | Migration risk; needs graceful transition |

---

## 6. Developer Pain Points

### 🔴 Critical: Sandbox Approval Fatigue (Linux)
Ubuntu/Debian users report **every command triggers approval prompts** ([#14936](https://github.com/openai/codex/issues/14936), [#17525](https://github.com/openai/codex/issues/17525)). The `bwrap`/`landlock` transition is creating regression clusters. Workarounds (`--dangerously-bypass-approvals-and-sandbox`) are becoming default, undermining security intent.

### 🔴 Critical: macOS Resource Exhaustion
Both **VS Code extension** ([#16231](https://github.com/openai/codex/issues/16231), 58 👍) and **Desktop app** ([#14666](https://github.com/openai/codex/issues/14666), [#18589](https://github.com/openai/codex/issues/18589)) exhibit runaway CPU/RAM. "Code Helper (Renderer)" and container processes are primary suspects. Apple Silicon optimization appears regressed.

### 🟡 Persistent: Context Compaction Failures
Remote compact tasks fail with 503s ([#11954](https://github.com/openai/codex/issues/11954)), Azure-specific breaks ([#19009](https://github.com/openai/codex/issues/19009)), and hangs ([#14346](https://github.com/openai/codex/issues/14346), [#17508](https://github.com/openai/codex/issues/17508)). Long-session reliability is compromised across providers.

### 🟡 Growing: MCP Operational Complexity
- **Process leaks**: [#18881](https://github.com/openai/codex/issues/18881) (492 orphans)
- **Startup storms**: [#18333](https://github.com/openai/codex/issues/18333) (full stack per subagent)
- **Approval spam**: [#16171](https://github.com/openai/codex/issues/16171) (per-MCP-interaction prompts)
- **Hook gaps**: [#14115](https://github.com/openai/codex/issues/14115) (`codex exec` hangs on MCP tools)

MCP is becoming a "success disaster" — adopted faster than lifecycle management can support.

### 🟢 Windows: Path/Integration Edge Cases
UNC paths breaking terminals ([#18506](https://github.com/openai/codex/issues/18506)), ACLs blocking `.git` ([#18918](https://github.com/openai/codex/issues/18918)), and sandbox profile overreach ([#12343](https://github.com/openai/codex/issues/12343)) indicate Windows sandbox/FS layer needs dedicated polish pass.

---

*Digest compiled from github.com/openai/codex public activity 2026-04-22/23. For corrections or deeper analysis, open an issue or discussion.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-23

## Today's Highlights

The v0.39.0-preview.2 patch release landed with a critical cherry-pick fix, while the community pushed significant UX and security improvements including real-time shell output streaming and workspace trust hardening for headless environments. Two stacked PRs from `pmenic` close a long-standing "blind gap" where background processes ran without model visibility.

---

## Releases

**[v0.39.0-preview.2](https://github.com/google-gemini/gemini-cli/pull/25776)** — Patch release cherry-picking commit `d6f88f8` to fix issues in the v0.39.0-preview.1 release branch. No functional changes; stability-focused maintenance release.

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|-------------|------------------|
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** AST-aware file reads, search, and mapping | EPIC-level investigation into reducing token waste and misaligned reads via precise method-boundary extraction. Could dramatically improve agent efficiency on large codebases. | 5 comments, maintainer-only; high strategic priority |
| **[#24916](https://github.com/google-gemini/gemini-cli/issues/24916)** Permission prompts repeatedly appear for same file | Core trust/UX friction—users selecting "allow for all future sessions" still get nagged. Undermines headless and automated workflows. | 3 comments, active user pain |
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent reports GOAL success after MAX_TURNS interruption | Silent failures in `codebase_investigator`—agents appear successful when actually truncated. Critical for reliable autonomous operation. | 3 comments, P1 priority, 2 upvotes |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell commands hang with "Waiting input" after completion | Terminal state desync—simple commands block indefinitely. Breaks iterative development flow. | 2 comments, 3 upvotes, frequent reports |
| **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** Model scatters tmp scripts across directories | Workspace pollution complicates git hygiene. Agent tool restriction side-effect creating operational overhead. | 2 comments |
| **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** Browser Agent ignores settings.json overrides | Configuration system partially broken—`maxTurns` and other overrides silently dropped. Limits user control. | 2 comments |
| **[#22819](https://github.com/google-gemini/gemini-cli/issues/22819)** Memory routing: global vs. project | Foundation for persistent, context-aware agent behavior. Determines whether preferences travel across projects. | 1 comment, 2 upvotes |
| **[#25216](https://github.com/google-gemini/gemini-cli/issues/25216)** Crash on temp path `A:\` | Windows path handling edge case—`realpath` fails on drive roots. Blocks Windows users in specific environments. | 1 comment |
| **[#23582](https://github.com/google-gemini/gemini-cli/issues/23582)** Subagents unaware of active Approval Modes | Policy Engine blocks calls but subagent instructions conflict, causing retry loops and poor UX. | 1 comment, 1 upvote |
| **[#25835](https://github.com/google-gemini/gemini-cli/issues/25835)** Enter key unresponsive after `/` skill selection | Fresh regression—autocomplete dropdown breaks keyboard interaction. Already has closed fix PR. | New, needs triage |

---

## Key PR Progress

| PR | Feature / Fix | Significance |
|----|-------------|------------|
| **[#25546](https://github.com/google-gemini/gemini-cli/pull/25546)** Increase `pollCommand` timeout to 120s | Prevents premature failures during model "thinking" states. Addresses timeout brittleness in long reasoning chains. | P1, ready for review |
| **[#25409](https://github.com/google-gemini/gemini-cli/pull/25409)** Wire up ContextManager and AgentChatHistory | Core architecture—refactors how agents maintain and access conversation context. Enables more sophisticated memory and turn management. | Agent area, substantial refactor |
| **[#25825](https://github.com/google-gemini/gemini-cli/pull/25825)** + **[#25834](https://github.com/google-gemini/gemini-cli/pull/25834)** Shell output streaming for background commands | **Stacked PRs** introducing `stream_output: true`—closes critical visibility gap where background processes ran opaque to the model. Enables file-watcher and long-running task monitoring. | 2-part feature, closes #25803 |
| **[#25814](https://github.com/google-gemini/gemini-cli/pull/25814)** Secure `.env` loading + workspace trust in headless mode | Security hardening—prevents credential leakage in CI/automated environments. Enforces explicit trust before loading sensitive configs. | Headless-critical |
| **[#24174](https://github.com/google-gemini/gemini-cli/pull/24174)** Real-time voice mode (cloud + local Whisper) | Major UX expansion—dictation via Gemini Live API or local `whisper.cpp`. Offline-capable option respects privacy. | Long-running, feature-complete |
| **[#25823](https://github.com/google-gemini/gemini-cli/pull/25823)** Enable permanent tool approval by default | Surfaces "Allow for all future sessions" by default. Directly addresses #24916 friction. | Simple config change, high UX impact |
| **[#25773](https://github.com/google-gemini/gemini-cli/pull/25773)** Draft optimizer workflow | Early-stage but strategically important—likely automated prompt/response optimization pipeline. | P1, maintainer-authored |
| **[#25827](https://github.com/google-gemini/gemini-cli/pull/25827)** Prevent duplicate `SessionStart` systemMessage render | UI polish—removes redundant render causing visual noise in interactive mode. | Help wanted, good first issue |
| **[#25821](https://github.com/google-gemini/gemini-cli/pull/25821)** Fix slash command autocomplete filtering | Stops `list` suggestion appearing on non-matching input (`/chat x`). Polishes command discovery. | P2, clean fix |
| **[#25822](https://github.com/google-gemini/gemini-cli/pull/25822)** Add missing `response` key to custom theme schema | Closes validation gap where documented theme property was rejected. Completes theming API. | Help wanted, docs-code parity |

---

## Feature Request Trends

1. **Agent Memory & Persistence** — Multiple issues (#22819, #22809, #25816) converge on making memory global/project-scoped, reliably written, and recoverable across JSONL sessions. The memory subagent needs clearer activation triggers.

2. **Shell & Process Transparency** — Streaming output (#25825/#25834), SSH detection (#24546), and hang resolution (#25166) show demand for robust, observable command execution—especially in remote/headless contexts.

3. **AST-Aware Code Intelligence** — EPIC #22745 and #22746 signal investment in precise, token-efficient codebase navigation. Expected to replace fuzzy text search for method-level operations.

4. **Configuration Reliability** — Settings preservation (#23180), schema completeness (#25822), and override respect (#22267) indicate the config system is maturing under stress.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Permission fatigue** | #24916, #25823, #23582 | High — breaks flow in interactive and automated modes |
| **Shell command hangs / state corruption** | #25166, #25216, #24935, #24202 | High — terminal becomes unusable, SSH compounds issues |
| **Silent agent failures** | #22323, #23556 | Critical — success reported when actually blocked/truncated |
| **Windows path handling** | #25216 | Medium — edge cases in drive roots and temp paths |
| **Workspace pollution** | #23571 | Medium — git hygiene degraded by agent artifacts |
| **Scroll/rendering instability** | #24470, #25218, #24915 | Medium — accessibility and long-session UX degraded |

---

*Digest compiled from google-gemini/gemini-cli public activity. For full details, follow the linked GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-23

---

## 1. Today's Highlights

Two rapid-fire releases (v1.0.35-3 and v1.0.35-4) shipped in 24 hours, introducing named session persistence and a GitHub-style contribution graph for usage tracking—though a strict schema validation change in v1.0.35-3 is already breaking session resumes for users with legacy session files. Meanwhile, model availability issues dominate community discussion, with multiple reports of Opus models disappearing from the picker and premium request counting behaving erratically.

---

## 2. Releases

### [v1.0.35-4](https://github.com/github/copilot-cli/releases/tag/v1.0.35-4)
- **Named sessions**: `--name` flag to name sessions; resume by name via `--resume=<name>`
- **LSP server timeout configurability**: `spawn`, `initialization`, and `warmup` timeouts now configurable in `lsp.json`
- **UI polish**: Context window indicator hidden by default in statusline; MCP OAuth moved to shared run

### [v1.0.35-3](https://github.com/github/copilot-cli/releases/tag/v1.0.35-3)
- **Usage visualization**: GitHub-style contribution graph in `/usage`, with terminal color mode adaptation and glyph fallback for no-color terminals
- **Performance**: Improved timeline rendering for large text volumes
- **Sync behavior**: Sync task calls now block until completion

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#2725](https://github.com/github/copilot-cli/issues/2725) | GPT-5.4 model picker hides "Extra High" effort level | UI inconsistency masks actual capability; users can't access full model range through official interface | 31 comments, 21 👍 — resolved as closed but pattern of model picker bugs persists |
| [#2591](https://github.com/github/copilot-cli/issues/2591) | Single session consumes 80-100 premium requests via tool/thinking loops | Direct financial impact on users with request caps; suggests architectural flaw in request accounting | 28 comments, 12 👍 — open, no resolution |
| [#107](https://github.com/github/copilot-cli/issues/107) | Segmentation fault on Alpine Linux for all tool calls | Complete blocker for containerized/CI workflows; affects security-conscious deployments | 12 comments, 4 👍 — open since Sept 2025, "more-info-needed" label stale |
| [#1326](https://github.com/github/copilot-cli/issues/1326) | Option to disable all animations | Accessibility and remote/SSH performance issue; animations cause lag on slow terminals | 10 comments, 19 👍 — high vote count, no implementation |
| [#892](https://github.com/github/copilot-cli/issues/892) | Sandbox mode to restrict filesystem access | Security-critical for enterprise adoption; prevents agent from escaping workspace | 7 comments, 37 👍 — highest-voted open issue in this batch |
| [#2899](https://github.com/github/copilot-cli/issues/2899) | Session load fails after v1.0.35-3: schema validation rejects legacy `session.compaction_complete` events | **Breaking change in latest release**; users cannot resume existing sessions post-update | 1 comment, 3 👍 — filed by GitHub staff (ericsciple), likely fast-tracked |
| [#2900](https://github.com/github/copilot-cli/issues/2900) | Can't resume sessions after 4/22 update on Windows | Corroborates #2899 as widespread; session corruption reported across platforms | 1 comment, 0 👍 — fresh, expect rapid growth |
| [#2878](https://github.com/github/copilot-cli/issues/2878) | Opus 4.6 model unavailable | Follows pattern of model availability issues (#2661, #2725); erodes trust in model picker reliability | 6 comments, 0 👍 |
| [#2625](https://github.com/github/copilot-cli/issues/2625) | Poor rendering performance, hangs 30-45 seconds on long conversations | Degrades core UX; "clear conversation" workaround loses context | 4 comments, 3 👍 |
| [#2317](https://github.com/github/copilot-cli/issues/2317) | `~/.bash_history` truncated after bash command execution | Data loss in user environment; breaks shell history expectations | 1 comment, 6 👍 — regression of supposedly fixed issue #501 |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#2887](https://github.com/github/copilot-cli/pull/2887) | Safe cleanup of older direct-install copilot binaries | **Closed** | Automatic cleanup of stale binaries when reinstalling via `install.sh`, with opt-out flag. Addresses accumulation problem for users switching install prefixes. |
| [#1333](https://github.com/github/copilot-cli/pull/1333) | Fix minor grammar and Markdown formatting | Open | Trivial docs fix ("an" addition, blank line removal); stalled since February, illustrates PR backlog |

*Note: Only 2 PRs updated in last 24h. The project's PR velocity appears low relative to issue volume (~50 open issues).*

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Session lifecycle management** | Named sessions (shipped), `/session delete`, `/cleanup`, resume by ID, phone access | High — v1.0.35-4 addresses naming, but deletion and corruption recovery remain gaps |
| **Enterprise security / sandboxing** | Sandbox mode (#892), sequential approval (#879), Managed Identity (#2705) | Strong — 37 👍 on sandbox; enterprise readiness blocker |
| **Usage transparency & controls** | `/usage` graph (shipped), premium request accuracy (#2797, #2889), request limiting | Medium — shipped visualization, but counting accuracy bugs undermine trust |
| **LSP/IDE integration robustness** | Configurable timeouts (shipped), OmniSharp initialization (#1392), plugin MCP merge (#2709) | Medium — timeout configurability shows responsiveness |
| **Terminal environment hygiene** | Disable animations (#1326), disable title modification (#2676), `!` command history (#2680) | Moderate — accessibility and shell integration polish |

---

## 6. Developer Pain Points

**Session reliability is degrading.** The v1.0.35-3 schema validation change broke backward compatibility for session resumes (#2899, #2900), directly contradicting the new named-session feature's value proposition. Users fear updating.

**Premium request accounting is opaque and seemingly broken.** Three distinct issues (#2591, #2797, #2889) describe runaway consumption, random percentages, and post-limit display bugs. This creates billing anxiety for Pro users and undermines the new `/usage` graph's credibility.

**Model availability is unpredictable.** Opus models appear and disappear from the picker without communication (#2661, #2878, #2725). The "xhigh" effort level works but is hidden—suggesting either A/B testing gone wrong or backend contract issues.

**Alpine/container support is neglected.** A 7-month-old segfault (#107) with clear reproduction steps remains open, blocking Docker-based workflows and CI integration.

**Performance cliffs at scale.** Long conversations hang (#2625), large text volumes lag (addressed partially in v1.0.35-3), and animations can't be disabled (#1326)—forcing users to choose between losing context or tolerating degraded UX.

---

*Digest compiled from github.com/github/copilot-cli activity on 2026-04-22 to 2026-04-23.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-23

## Today's Highlights

Kimi CLI **v1.38.0** shipped today with telemetry integration and a critical Anthropic API compliance fix for parallel tool results. The release also closes a longstanding OAuth race-condition vulnerability where concurrent token refreshes could wipe valid credentials. Meanwhile, the issue tracker shows mounting pressure around token quota transparency and IDE integration stability.

---

## Releases

### [v1.38.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.38.0) — 2026-04-22

| Change | Author | PR |
|--------|--------|-----|
| Telemetry tracking across interactive and non-interactive sessions | @RealKai42 | [#1798](https://github.com/MoonshotAI/kimi-cli/pull/1798) |
| Fix: Merge parallel `tool_results` into single user message for Anthropic API spec compliance | @wbxl2000 | [#1978](https://github.com/MoonshotAI/kimi-cli/pull/1978) |

The Anthropic fix resolves [#1975](https://github.com/MoonshotAI/kimi-cli/issues/1975), where kosong's provider was splitting parallel tool results into multiple user messages—violating Anthropic's Messages API specification and causing provider-side rejections.

---

## Hot Issues

| # | Title | Status | Why It Matters | Reaction |
|---|-------|--------|---------------|----------|
| [#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994) | KimiCode usage calculation discrepancy — 2 tasks exhaust 2-hour quota | 🔴 OPEN | **Highest-engagement issue** (3 👍). User reports K2.6's reasoning chain consumes tokens so aggressively that a 2-hour subscription yields ~2 queries, contradicting marketing claims of "300-1200 API requests per 5 hours." Fundamental billing transparency crisis. | Strong frustration; demands clarification on whether limits are per-request or token-based |
| [#1990](https://github.com/MoonshotAI/kimi-cli/issues/1990) | IDEA terminal crashes immediately after sending message | 🔴 OPEN | JetBrains IDE integration is broken on Darwin/arm64 with v1.37.0. Terminal process dies silently—blocks enterprise adoption where IntelliJ dominates. | Awaiting repro; no maintainer response yet |
| [#2011](https://github.com/MoonshotAI/kimi-cli/issues/2011) | Context window shows <50% but hits 262k token limit (requested: 269k) | 🔴 OPEN | UI/UX bug: progress indicator misleads users about available context. Causes unexpected 400 errors mid-session on kimi-2.5. Breaks trust in context management. | Confusion; suggests poor token accounting |
| [#1997](https://github.com/MoonshotAI/kimi-cli/issues/1997) | Windows: `kimi` command hangs indefinitely — Python 3.13 asyncio incompatibility | 🔴 OPEN | **Installation pipeline failure.** Official install script defaults to Python 3.13, which breaks asyncio event loop initialization on Windows. Zero CPU, must kill via Task Manager. | Critical for Windows users; no workaround posted |
| [#1998](https://github.com/MoonshotAI/kimi-cli/issues/1998) | Opt-out of alt-screen/high-frequency redraws for Neovim `:terminal` | 🔴 OPEN | Terminal UI conflicts with Neovim's host buffer rendering. High-frequency redraws corrupt display or consume excessive resources in modal editors. | Niche but passionate vim/neovim demographic |
| [#2007](https://github.com/MoonshotAI/kimi-cli/issues/2007) | Support Trae IDE integration (third-party BaseURL) | 🔴 OPEN | ByteDance's Trae is gray-testing third-party BaseURL support. Kimi currently rejects Trae's Roo Code-style configuration. Strategic IDE ecosystem expansion blocked. | Market access issue; competitor opportunity |
| [#2010](https://github.com/MoonshotAI/kimi-cli/issues/2010) | Shift+Enter for newline in prompt input (standard UX) | 🔴 OPEN | Universal convention across ChatGPT, Claude, Discord, Slack. Current Ctrl-J/Alt-Enter violates muscle memory for new users. Low-effort, high-UX-impact fix. | Universal agreement; trivial to implement |
| [#1989](https://github.com/MoonshotAI/kimi-cli/issues/1989) | Skills cannot enforce workflow steps in yolo (non-interactive) mode | 🔴 OPEN | Architecture gap: yolo mode's "make your best judgment" system reminder overrides Skill-defined guardrails. Breaks automated CI/CD pipelines requiring deterministic behavior. | Design-level tension between autonomy and control |
| [#1986](https://github.com/MoonshotAI/kimi-cli/issues/1986) | Ubuntu 22.04 + OpenSSL 3.0 hardcoded compatibility issue | 🔴 OPEN | Binary-linked OpenSSL assumptions break on LTS Linux. Suggests over-specified native dependencies in build pipeline. | Enterprise Linux deployment risk |
| [#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823) | Configurable approval request timeout (or unlimited) — **CLOSED** | ✅ CLOSED | Hardcoded 300s timeout auto-cancelled long-running approvals. Closed without configurable fix; PR [#1979](https://github.com/MoonshotAI/kimi-cli/pull/1979) only improved error message ("Rejected by user" → timeout clarity). Actual configurability punted to [#1837](https://github.com/MoonshotAI/kimi-cli/issues/1837). | Partial satisfaction; core request unmet |

---

## Key PR Progress

| # | Title | Author | Status | Feature/Fix |
|---|-------|--------|--------|-------------|
| [#2009](https://github.com/MoonshotAI/kimi-cli/pull/2009) | chore(release): bump kimi-cli to 1.38.0 and kosong to 0.51.0 | @RealKai42 | ✅ **Merged** | Release orchestration; changelog sync |
| [#1996](https://github.com/MoonshotAI/kimi-cli/pull/1996) | fix(auth): do not delete credentials file on single refresh 401 | @wbxl2000 | ✅ **Merged** | **Critical reliability fix.** Stops OAuth `delete_tokens(ref)` from wiping concurrent instances' freshly-rotated tokens. Adds process-local rejection tombstone. Closes auth cascade failures plaguing [#1547](https://github.com/MoonshotAI/kimi-cli/issues/1547), [#1350](https://github.com/MoonshotAI/kimi-cli/issues/1350), [#1940](https://github.com/MoonshotAI/kimi-cli/issues/1940) |
| [#1978](https://github.com/MoonshotAI/kimi-cli/pull/1978) | fix(kosong/anthropic): merge parallel tool_results into one user msg | @wbxl2000 | ✅ **Merged** | API compliance: implements Anthropic's parallel-tool-use spec by coalescing consecutive `tool_result` blocks. Prevents provider 400s |
| [#1979](https://github.com/MoonshotAI/kimi-cli/pull/1979) | fix(soul): carry approval cancellation feedback to ApprovalResult | @wbxl2000 | ✅ **Merged** | UX improvement: distinguishes timeout vs. user rejection in approval flow. Partially addresses [#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823) |
| [#1993](https://github.com/MoonshotAI/kimi-cli/pull/1993) | fix(install): fix uv not found error on Windows | @kermanx | ✅ **Merged** | Installation pipeline fix for Windows `uv` resolver |
| [#2003](https://github.com/MoonshotAI/kimi-cli/pull/2003) | fix(soul): re-inject yolo reminder after context compaction | @ahyangyi | 🔄 Open | State management fix: YoloModeInjectionProvider's one-shot flag fails post-compaction. Reminder gets folded into summary, breaking non-interactive mode persistence |
| [#2004](https://github.com/MoonshotAI/kimi-cli/pull/2004) | fix(chat-provider): preserve refreshed OAuth token on connection recovery | @ayokaa | 🔄 Open | Race condition: `_apply_access_token()` updates `client.api_key` but not `self._api_key`; retryable errors rebuild client with stale revoked token |
| [#2000](https://github.com/MoonshotAI/kimi-cli/pull/2000) | fix(proxy): strip unsupported IPv6 CIDRs from NO_PROXY | @pi-dal | 🔄 Open | `httpx` crash on IPv6 CIDR in `NO_PROXY`. Adds regression test for proxy + IPv6 startup path (supersedes closed [#1999](https://github.com/MoonshotAI/kimi-cli/pull/1999)) |
| [#1985](https://github.com/MoonshotAI/kimi-cli/pull/1985) | fix(term, app): prevent TTY hang on exit and close MCP connections during shutdown | @thecannabisapp | 🔄 Open | Terminal state bug: `os.read()` blocks uninterruptibly on CPR response race. Non-blocking `os.set_blocking(fd, False)` fix; MCP lifecycle cleanup |
| [#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960) | feat(soul): RalphFlow architecture with ephemeral context and convergence detection | @ORDL-AMF | 🔄 Open | **Major architecture proposal.** Automated iteration framework preventing infinite loops via isolated temp context files, convergence detection, and main context preservation. Addresses agentic looping at design level |

---

## Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **IDE ecosystem expansion** | [#2007](https://github.com/MoonshotAI/kimi-cli/issues/2007) (Trae), [#1990](https://github.com/MoonshotAI/kimi-cli/issues/1990) (IDEA), [#1998](https://github.com/MoonshotAI/kimi-cli/issues/1998) (Neovim) | Kimi CLI is being evaluated as backend for multiple editors, not just terminal. Need robust LSP-like integration contracts, not just TTY assumptions |
| **Token/billing transparency** | [#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994) (quota math), [#2011](https://github.com/MoonshotAI/kimi-cli/issues/2011) (context indicator accuracy) | User trust eroding due to opaque token accounting. Need real-time usage telemetry exposed to user, not just internal tracking |
| **Input ergonomics standardization** | [#2010](https://github.com/MoonshotAI/kimi-cli/issues/2010) (Shift+Enter), shell UX polish | CLI must match web chat conventions to reduce onboarding friction |
| **Deterministic automation (Skills + yolo)** | [#1989](https://github.com/MoonshotAI/kimi-cli/issues/1989), [#2006](https://github.com/MoonshotAI/kimi-cli/issues/2006) (OAuth race follow-up) | Tension between "agentic autonomy" and "predictable automation." Users want configurable guardrails, not binary interactive/non-interactive split |
| **Context compression intelligence** | [#1991](https://github.com/MoonshotAI/kimi-cli/issues/1991) (new compression proposal), [#1362](https://github.com/MoonshotAI/kimi-cli/issues/1362) (shared task context) | Hierarchical prompt structures and subsession forking to preserve reasoning state. Community pushing beyond simple truncation |

---

## Developer Pain Points

| Pain Point | Frequency | Severity | Root Cause |
|------------|-----------|----------|------------|
| **OAuth token management fragility** | 🔥🔥🔥🔥🔥 | Critical | Race conditions in concurrent refresh, disk-state coupling, no distributed session awareness. Band-aid fixes accumulating; needs architectural redesign per [#2006](https://github.com/MoonshotAI/kimi-cli/issues/2006) |
| **Windows platform instability** | 🔥🔥🔥🔥 | High | Python 3.13 asyncio incompatibility in official installer ([#1997](https://github.com/MoonshotAI/kimi-cli/issues/1997)), `uv` path resolution ([#1993](https://github.com/MoonshotAI/kimi-cli/pull/1993)), TTY handling differences. Suggests insufficient CI coverage on Windows |
| **Token quota unpredictability** | 🔥🔥🔥🔥 | High | Discrepancy between marketed "API request" limits and actual token-consumption billing. K2.6's reasoning chain is invisible to users until quota exhausted. [#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994) is canary for broader backlash |
| **Terminal UI/TTY robustness** | 🔥🔥🔥 | Medium | Alt-screen conflicts with editors ([#1998](https://github.com/MoonshotAI/kimi-cli/issues/1998)), CPR response races causing hangs ([#1985](https://github.com/MoonshotAI/kimi-cli/pull/1985)), IDEA integration crashes ([#1990](https://github.com/MoonshotAI/kimi-cli/issues/1990)). `prompt_toolkit` assumptions breaking in embedded terminals |
| **Context window visibility** | 🔥🔥🔥 | Medium | [#2011](https://github.com/MoonshotAI/kimi-cli/issues/2011) shows UI indicator (50%) diverges from actual token count. Users cannot plan sessions or anticipate compaction triggers |
| **Installation script brittleness** | 🔥🔥 | Medium | Hardcoded Python version assumptions, missing `uv` handling, OpenSSL linkage issues ([#1986](https://github.com/MoonshotAI/kimi-cli/issues/1986)). Distribution engineering debt |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity on 2026-04-22.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-23

## Today's Highlights

The community is actively wrestling with model-provider integration fragility, as GPT 5.4 from Azure and Kimi K2.x models exhibit critical failures around reasoning block handling and tool call formatting. On the infrastructure side, a major LSP client improvement for pull diagnostics landed and was immediately battle-tested against Kotlin and C# (Roslyn) servers, revealing deep architectural debt in language server support. Meanwhile, permission bypass vulnerabilities and unauthorized pip execution are raising serious security concerns among enterprise users.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#2177](https://github.com/anomalyco/opencode/issues/2177) | Allow explicitly changing working directory | Core workflow blocker: users starting in child directories hit hard errors when tools reference parent paths. Competes directly with Claude Code's fluid directory navigation. | **87 👍, 39 comments** — highest engagement of the day; users sharing shell workarounds |
| [#20698](https://github.com/anomalyco/opencode/issues/20698) | GPT 5.4 from Azure fails with "reasoning" item error | Azure's GPT 5.4 xhigh is unusable due to malformed reasoning block sequences; breaks both Web UI and TUI. Suggests provider-specific response parsing is brittle. | 38 comments, only 3 👍 — indicates acute but narrow enterprise impact |
| [#6096](https://github.com/anomalyco/opencode/issues/6096) | Tokens-per-second display | Performance visibility is a competitive gap vs. Cursor, Claude Code. Users want real-time inference metrics for model comparison. | **44 👍**, 15 comments — long-running request with sustained interest |
| [#21079](https://github.com/anomalyco/opencode/issues/21079) | `.opencode/package-lock.json` ignores `~/.npmrc` registry | Breaks air-gapped/corporate environments with private registries. Package management inside `.opencode/` sandbox is leaky. | 16 👍, 13 comments — enterprise deployment friction |
| [#16218](https://github.com/anomalyco/opencode/issues/16218) | Model repeats responses in infinite loop | Core reliability failure; occurs post-generation without clear trigger. Suggests stop-sequence or turn-handoff bug. | 13 comments, 0 👍 — possibly under-reported due to severity |
| [#22788](https://github.com/anomalyco/opencode/issues/22788) | Copilot `max` effort unsupported for Claude Opus 4.6 | Silent Copilot API behavior change breaks existing configs. "It worked yesterday" captures the fragility of provider abstraction layers. | 16 👍, 12 comments — rapid provider churn frustration |
| [#22292](https://github.com/anomalyco/opencode/issues/22292) | Managed settings bypass via `OPENCODE_PERMISSION` env var | **Security**: Admin-enforced configs are not actually enforced. Two separate bypass vectors (env var + object merging) break enterprise governance. | 6 comments, 0 👍 — critical but niche audience |
| [#21155](https://github.com/anomalyco/opencode/issues/21155) | zod v3/v4 conflict crashes tool execution | Plugin ecosystem fragmentation: zod v4 plugins crash core due to `_zod.def` internal access. Version pinning across plugin boundary is unresolved. | 6 👍, 5 comments — plugin DX barrier |
| [#14593](https://github.com/anomalyco/opencode/issues/14593) | Kimi K2.5 bypasses "ask" permission, auto-commits | **Security guardrail failure**: Shell command permission level `ask` is ignored by specific model, enabling autonomous `git add -A && git commit`. | 5 comments, 3 👍 — trust erosion in model-specific behavior |
| [#22100](https://github.com/anomalyco/opencode/issues/22100) | Unauthorized `pip3` execution | OpenCode triggers pip installs on read-only configs without clear opt-in. Raises supply-chain and privilege-escalation concerns. | 7 comments, 0 👍 — inflammatory tone suggests user betrayal |

---

## Key PR Progress

| # | PR | Status | What It Does |
|---|-----|--------|-------------|
| [#23910](https://github.com/anomalyco/opencode/pull/23910) | docs: clarify agent variants and variant keybinds | **OPEN** | Documents existing `variant` config schema for pinning default model variants; follow-up to compliance-failed PR #23838 |
| [#23771](https://github.com/anomalyco/opencode/pull/23771) | feat: support pull diagnostics in LSP client | **CLOSED** | Critical fix for C# (Roslyn), Kotlin, and other pull-diagnostic servers. Reduces diagnostic latency from ~4s to ~200ms by requesting diagnostics instead of waiting for push |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | feat(app): Mobile Touch Optimization | **OPEN** | Adds touch targets, swipe gestures, and responsive layout for mobile/tablet use without degrading desktop TUI experience |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) | fix(tui): stop streaming markdown after message completes | **OPEN** | Fixes table rendering bug where `streaming={true}` on completed messages causes last row to be hidden |
| [#23612](https://github.com/anomalyco/opencode/pull/23612) | fix: LSP sync range for Roslyn, workspace symbol query | **OPEN** | Prevents Roslyn server crash on missing sync ranges; fixes empty workspace symbol results. C#/.NET IDE experience |
| [#23902](https://github.com/anomalyco/opencode/pull/23902) | feat(tui): add `opencode -c` to session exit message | **OPEN** | UX polish: reminds users of `-c` (continue session) flag on exit to reduce session friction |
| [#12732](https://github.com/anomalyco/opencode/pull/12732) | feat: team TUI integration — sidebar, header, sync, dialog | **OPEN** | Major feature: multi-agent team collaboration in TUI with real-time sync, teammate navigation, status badges. PR 3/3 dependency chain |
| [#23877](https://github.com/anomalyco/opencode/pull/23877) | fix(tui): Windows terminal input corruption from OSC escapes | **CLOSED** | Fixes raw ANSI sequences appearing on Windows; resolves keyboard input interference from malformed escape sequence handling |
| [#21370](https://github.com/anomalyco/opencode/pull/21370) | fix(provider): preserve assistant content with reasoning blocks | **OPEN** | Anthropic adaptive thinking (Opus/Sonnet 4.6+) emits empty text parts between thinking blocks; prevents content loss in tool calls |
| [#23886](https://github.com/anomalyco/opencode/pull/23886) | fix(provider): coerce numeric tool call IDs for OpenAI compat | **CLOSED** | NVIDIA NIM/kimik2.5 returns `123` instead of `"123"` for tool call IDs; strict OpenAI spec compliance fix |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Native Ollama integration** | [#21396](https://github.com/anomalyco/opencode/issues/21396) | Users want first-class local model support without manual endpoint configuration; currently "possible but not seamless" |
| **Performance metrics (TPS, token counting)** | [#6096](https://github.com/anomalyco/opencode/issues/6096), [#18969](https://github.com/anomalyco/opencode/issues/18969) | Persistent status display hooks requested; toast-based workarounds are disruptive. Plugin API gap |
| **Context transparency/debugging** | [#20631](https://github.com/anomalyco/opencode/issues/20631) | Users need source-level context breakdown, not coarse "User/Assistant/Other" buckets, to debug prompt construction |
| **Voice/dictation input** | [#17425](https://github.com/anomalyco/opencode/issues/17425) | Blocked by missing plugin extensibility for audio capture and input injection |
| **Project/worktree tabs** | [#23857](https://github.com/anomalyco/opencode/issues/23857) | Multi-repo and git worktree workflows need first-class workspace switching |
| **Mobile/tablet experience** | [#18767](https://github.com/anomalyco/opencode/pull/18767), [#11881](https://github.com/anomalyco/opencode/issues/11881) | Touch input and responsive layout becoming explicit priorities |

---

## Developer Pain Points

**Provider API fragility** dominates: GPT 5.4 reasoning blocks, Kimi K2.x tool call IDs, Copilot effort levels, and OpenRouter endpoint discovery all broke recently due to silent provider changes. The abstraction layer leaks constantly.

**Security model inconsistency** is eroding trust: permission bypasses (#22292), unauthorized package execution (#22100), and model-specific guardrail failures (#14593) suggest the security boundary is not systematically enforced.

**LSP ecosystem is second-class**: Kotlin (#3116, #23873) and C#/Roslyn (#23612, #23771) required community detective work to discover missing pull-diagnostics support. The "it works for TypeScript" bias leaves other languages with timeout loops and silent failures.

**Plugin versioning hazards**: zod v3/v4 incompatibility (#21155) crashes the core when plugins bundle their own dependencies. No isolation mechanism exists for plugin dependency graphs.

**Windows terminal reliability**: OSC escape sequence handling (#23877) and file path formatting (#3116) continue to produce platform-specific regressions, suggesting insufficient CI coverage on Windows terminals.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-23

## Today's Highlights

Pi v0.69.0 shipped with a major TypeBox 1.x migration enabling robust tool argument validation in edge environments like Cloudflare Workers, while the community closed 27 issues in 24 hours including critical fixes for XSS in SVG artifacts, EMFILE crashes in large repos, and Bedrock provider routing. Extension ecosystem momentum continues with new APIs for custom `@` mention providers and render-only tool decorators.

---

## Releases

**[v0.69.0](https://github.com/badlogic/pi-mono/releases/tag/v0.69.0)** — TypeBox 1.x migration for extensions and SDK integrations. Key improvement: TypeBox-native tool argument validation now functions in eval-restricted runtimes (Cloudflare Workers, etc.). See updated [extensions](https://github.com/badlogic/pi-mono/blob/main/docs/extensions.md) and [SDK](https://github.com/badlogic/pi-mono/blob/main/docs/sdk.md) documentation.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#3175](https://github.com/badlogic/pi-mono/issues/3175) | JSON parse error at position 3875 during edits | Chronic edit-tool failure with Anthropic models; blocks reliable code modification workflows | 18 comments, multiple reproductions — high urgency bug |
| [#3271](https://github.com/badlogic/pi-mono/issues/3271) | Custom session-IDs (prefixed type-IDs) | Enterprise SDK users need deterministic IDs for distributed tracing and compliance | 10 comments; konsti's harness use case resonated with OpenClaw-style builders |
| [#2943](https://github.com/badlogic/pi-mono/issues/2943) | Claude "out of extra usage" error | Max-plan users hitting API limits unexpectedly; provider billing transparency issue | 8 comments, 5 👍; sparked discussion on quota handling |
| [#3335](https://github.com/badlogic/pi-mono/issues/3335) | Bedrock Anthropic fails via ConverseStream | AWS provider routing inconsistency — works in Claude Code but not Pi | 7 comments; infrastructure-critical for AWS-deployed teams |
| [#2744](https://github.com/badlogic/pi-mono/issues/2744) | CRLF line endings break edit tool | Windows filesystem compatibility gap; exact-match edit tool fundamentally fragile | 7 comments; recurring Windows DX pain point |
| [#3521](https://github.com/badlogic/pi-mono/issues/3521) | Bash tool ignores settings.json shellPath | Configuration system regression in 0.68.1; breaks Windows Git Bash workflows | 6 comments; immediate workaround provided but root cause fixed |
| [#3541](https://github.com/badlogic/pi-mono/issues/3541) | Render-only tool override API | Extension composability — allows UI customization without full tool re-registration | 4 comments, 1 👍; follow-up to #3071, shows maturing extension architecture needs |
| [#3539](https://github.com/badlogic/pi-mono/issues/3539) | APPEND_SYSTEM.md not listed as context | Documentation/behavior mismatch for project-level system prompts | 5 comments; quick fix, but reveals context-loading edge cases |
| [#3552](https://github.com/badlogic/pi-mono/issues/3552) | XSS in SVG artifact preview | Security: unsanitized LLM-generated SVG executes in parent DOM via `unsafeHTML()` | 2 comments; samfoy reported + fixed same day — critical security hygiene |
| [#3564](https://github.com/badlogic/pi-mono/issues/3564) | EMFILE crash at startup in big repos | `fs.watch` missing error handler; same bug class as #2791, new location | 2 comments; scalability blocker for monorepo users |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#3572](https://github.com/badlogic/pi-mono/pull/3572) | Searchable auth provider login flow | Interactive `/login` command for API key entry with provider search — improves onboarding security | **OPEN** |
| [#3474](https://github.com/badlogic/pi-mono/pull/3474) | TypeBox v1 migration with extension compat | Replaces AJV with TypeBox 1.x; maintains legacy extension import paths, adds coercion for plain JSON schemas | CLOSED |
| [#3517](https://github.com/badlogic/pi-mono/pull/3517) | `registerMentionProvider` extension API | Custom `@` autocomplete sources — git mentions, semantic search, etc.; closes #2983 | CLOSED |
| [#3561](https://github.com/badlogic/pi-mono/pull/3561) | Convert `const` to `enum` in OpenAPI schema sanitization | Fixes Claude via Antigravity/Cloud Code Assist rejection of `const` keyword in tool schemas | CLOSED |
| [#3532](https://github.com/badlogic/pi-mono/pull/3532) | Sanitize markdown links in exported HTML | XSS prevention: blocks `javascript:`, `vbscript:`, `data:` protocols in shared session exports | CLOSED |
| [#3527](https://github.com/badlogic/pi-mono/pull/3527) | Bedrock model name detection via `model.name` | Fixes prompt caching and adaptive thinking for inference profile ARNs (opaque `model.id`) | CLOSED |
| [#3554](https://github.com/badlogic/pi-mono/pull/3554) | Fix fuzzy match normalization scope | Prevents character corruption outside edited regions when smart quotes/ASCII mismatch triggers fuzzy path | CLOSED |
| [#3555](https://github.com/badlogic/pi-mono/pull/3555) | Synthetic tool results for trailing orphaned calls | `transformMessages` now handles conversation-ending orphaned tool calls | CLOSED |
| [#3556](https://github.com/badlogic/pi-mono/pull/3556) | `emitToolCall` try/catch parity | Extension errors in tool calls no longer crash agent loop; matches all other emit methods | CLOSED |
| [#3569](https://github.com/badlogic/pi-mono/pull/3569) | Subagent provider routing via settings.json | Allows per-subagent provider/model configuration; author flagged as "rogue agent" test, closed | CLOSED |

---

## Feature Request Trends

1. **Extension API maturation** — Three converging requests: render-only tool decorators (#3541), custom working indicator colors (#3467), and `@` mention providers (#2983 → #3517). Pattern: extensions need finer-grained hooks without full tool reimplementation.

2. **Enterprise identity and routing** — Custom session IDs (#3271), subagent provider routing (#3569), and auth provider login flows (#3572) show demand for multi-tenant, compliance-aware deployments.

3. **Local/self-hosted model support** — Official llama.cpp provider request (#3567) joins ongoing community pressure for first-class local inference.

4. **Agent loop control** — Early termination hints (#3525) and sequential tool execution context propagation (#3558) reveal power users optimizing latency and tool-call choreography.

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|-----------|-----------|----------|
| **Windows path/line-ending friction** | High | CRLF edits (#2744), Git Bash detection (#3521), shell path resolution — recurring platform parity gaps |
| **Provider-specific schema/transport quirks** | High | Bedrock ARN handling (#3527, #3335), Fireworks `eager_input_streaming` (#3529), Claude `const`→`enum` (#3561), Antigravity sanitization — N×M provider-model matrix complexity |
| **File watcher scalability** | Medium | EMFILE crashes (#3564, #2791 class) in large repos; Node `fs.watch` limits hit routinely |
| **Edit tool exact-match fragility** | Medium-High | Fuzzy matching normalization bugs (#3554), JSON parse failures (#3175), smart-quote mismatches — core editing reliability still brittle |
| **Extension error isolation** | Medium | Missing try/catch in `emitToolCall` (#3556) crashed entire agent loops; pattern suggests need for systematic sandboxing review |
| **Security surface in LLM-generated content** | Emerging | SVG XSS (#3552), markdown link sanitization (#3532) — marked v15 removal of built-in sanitization caught downstream |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-23

---

## 1. Today's Highlights

Qwen Code **v0.15.0** shipped today with complete ACP hooks support and compact mode UX optimizations, marking a significant milestone for IDE integration stability. The release coincides with intense community debate over the proposed Qwen OAuth free tier reduction from 1,000 to 100 requests/day, with the policy discussion thread generating **113 comments**—the most active issue in the project's history. Meanwhile, maintainers merged critical fixes for subagent streaming failures and terminal theme detection after extended community pressure.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.15.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.0)** | Production release: Complete ACP hooks integration (`#3248`), compact mode UX overhaul with shortcuts/settings sync (`#3100`), HTTP hooks foundation |
| **[v0.15.0-preview.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.0-preview.2)** | Final preview cut with identical feature set |
| **[v0.14.5-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.5-preview.0)** | Backport preview for LTS users |
| **[v0.14.5-nightly.20260422](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.5-nightly.20260422.d1c8dff4d)** | Nightly build preceding stable |

**Notable:** v0.15.0 finalizes the ACP (Agent Communication Protocol) hooks architecture, enabling deeper IDE integrations like Zed and VS Code to intercept and customize tool execution flows.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| **[#3203](https://github.com/QwenLM/qwen-code/issues/3203)** | **Qwen OAuth Free Tier Policy Adjustment** — Proposed cut from 1,000→100 req/day, full phase-out by target date | Existential for hobbyists and evaluation users; affects core accessibility value proposition | **113 comments**, highly contentious; users requesting grandfathering, alternative auth paths, or clearer enterprise migration timelines |
| **[#3384](https://github.com/QwenLM/qwen-code/issues/3384)** | Unable to add OpenAI-compatible local LLM (VLLM/Qwen3.6-35B-A3B) | Local/self-hosted deployment is a primary differentiator vs. Claude Code; config UX gaps block adoption | 8 comments; documentation mismatch between `settings.json` schema and actual validation logic |
| **[#3530](https://github.com/QwenLM/qwen-code/issues/3530)** | `Maximum update depth exceeded` on `/model` switch | Critical React render loop crash in CLI; blocks core workflow | 4 comments; users confirming reproduction; fix in flight via `#3533` |
| **[#3496](https://github.com/QwenLM/qwen-code/issues/3496)** | webSearch broken after free tier removal; requests for domestic search APIs (Baichuan, ByteDance, GLM) | Search dependency on DashScope creates single point of failure; China-local alternatives demanded | 5 comments; closed as duplicate/resolved, but underlying MCP migration (`#3502`) addresses root cause |
| **[#1280](https://github.com/QwenLM/qwen-code/issues/1280)** | Cannot use local Ollama-deployed `qwen3-coder` | Long-standing local model support gap; affects privacy-sensitive and offline workflows | 3 comments; persistent since Dec 2025; needs better Ollama discovery protocol |
| **[#2596](https://github.com/QwenLM/qwen-code/issues/2596)** | CLI spuriously appends `</think>` tags | Model output pollution corrupts code generation and git operations | 2 comments; likely tokenizer/response parsing edge case with reasoning models |
| **[#3532](https://github.com/QwenLM/qwen-code/issues/3532)** | Local model config still prompts for auth despite documented setup | Auth gate logic overrides local provider configuration | 1 comment; frustration with "following docs exactly" but hitting auth wall |
| **[#3511](https://github.com/QwenLM/qwen-code/issues/3511)** | JetBrains AI integration requires Qwen OAuth, blocks API-key-only setup | Enterprise/IDE users need flexible auth; OAuth mandate blocks air-gapped environments | 1 comment; ACP registry UX gap |
| **[#3535](https://github.com/QwenLM/qwen-code/issues/3535)** | Feature request: CLI flag/env var to ignore SSL errors | Common in enterprise proxies, self-signed certs, and rapid prototyping environments | New (0 comments); follows pattern of local-deployment flexibility requests |
| **[#3520](https://github.com/QwenLM/qwen-code/issues/3520)** | Tool runs without output or errors — silent failure mode | Debugging black hole; breaks trust in agent execution | 2 comments; needs structured logging/verbosity improvements |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| **[#3534](https://github.com/QwenLM/qwen-code/pull/3534)** | **fix(i18n): sync mismatched keys between en.js and zh.js** — Adds 4 missing EN keys, 5 missing CN keys actively referenced in `t()` calls | Prevents runtime translation fallbacks and UI gaps | Open |
| **[#3512](https://github.com/QwenLM/qwen-code/pull/3512)** | **feat(cli): combine elapsed + timeout in shell time indicator** — Renders `(elapsed · timeout N)` inline from t=0, eliminating `ShellStatsBar` row split | Cleaner progress UX for long-running commands | Open |
| **[#3533](https://github.com/QwenLM/qwen-code/pull/3533)** | **fix(cli): stop slash completion render loop** — Stabilizes `useResumeCommand()` dependencies; fixes `/model ` crash with "Loading suggestions..." infinite loop | Direct fix for `#3530` | Open |
| **[#3488](https://github.com/QwenLM/qwen-code/pull/3488)** | **feat(cli): background-agent UI — pill, combined dialog, detail view** | Surfaces previously invisible background subagent state; critical for `/ultrareview` and multi-agent flows | Open |
| **[#3525](https://github.com/QwenLM/qwen-code/pull/3525)** | **fix(core): scope StreamingToolCallParser per stream, not per Converter** | Root-cause fix for `#3516` subagent "empty response text" failures; eliminates singleton race condition | **Merged** |
| **[#3531](https://github.com/QwenLM/qwen-code/pull/3531)** | **fix(cli): promote resubmitted history prompt to most recent** | History navigation polish: arrow-key-resubmitted prompts surface to top of stack | Open |
| **[#3013](https://github.com/QwenLM/qwen-code/pull/3013)** | **fix(ui): add SlicingMaxSizedBox to prevent terminal flickering** | Caps render buffer for large outputs (`npm install`, `cat large-file.json`); eliminates 5000-line scroll stutter | Open |
| **[#3519](https://github.com/QwenLM/qwen-code/pull/3519)** | **feat(cli): unified image paste — Cmd+V, base64 text, drag-drop → [Image #N]** | Consolidates three input paths; fixes two macOS Cmd+V bugs; enables visual context in prompts | Open |
| **[#3502](https://github.com/QwenLM/qwen-code/pull/3502)** | **feat(web-search): remove built-in web_search tool, replace with MCP-based approach** | **Architectural pivot**: Decouples from DashScope/Tavily/Google/GLM providers; users bring own search MCP servers | Open — addresses `#3496` |
| **[#3460](https://github.com/QwenLM/qwen-code/pull/3460)** | **feat(cli): auto-detect terminal theme ('auto' or unset)** | `COLORFGBG` → `OSC 11` → BT.709 luminance detection; closes `#2998`, `#3053`, `#2135` | **Merged** |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **MCP-first architecture** | `#3502` (web-search → MCP), `#2528` (OSC notify for cmux), ACP hooks in v0.15.0 | Strong — maintainers actively deprecating built-in tools for open protocol |
| **Local/self-hosted LLM ergonomics** | `#3384`, `#1280`, `#3532`, `#3535` (SSL ignore) | High friction — docs, auth gating, and discovery need unified overhaul |
| **Terminal UX polish** | `#3512` (timeout display), `#3013` (flicker fix), `#3460` (theme auto-detect), `#3519` (image paste) | Active investment — CLI competitive with Claude Code |
| **Background agent observability** | `#3488` (UI pill/dialog), `#1267` (background task management) | Emerging — multi-agent workflows becoming first-class |
| **Flexible/auth-agnostic deployment** | `#3511` (JetBrains API key), `#3203` (free tier backlash), `#3496` (domestic search APIs) | Critical for China market and enterprise |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Root Cause | Community Sentiment |
|------------|-----------|------------|---------------------|
| **Authentication fragility** | 🔥🔥🔥🔥🔥 | OAuth token expiration (`#3506`, `#3515`, `#3504`, `#3501`, `#3524`), local model auth override (`#3532`) | Frustrated — "even after logging in" recurring theme; blocks all functionality |
| **Local model configuration complexity** | 🔥🔥🔥🔥 | Settings schema drift (`#3384`), undocumented validation, Ollama discovery gaps (`#1280`) | Confused — docs exist but don't match runtime behavior |
| **React/CLI render instability** | 🔥🔥🔥 | `Maximum update depth` (`#3530`, `#3533`), flickering (`#3013`), blank lines (`#3509`) | Annoyed — breaks flow state in interactive sessions |
| **Subagent/reasoning model reliability** | 🔥🔥🔥 | Empty response crashes (`#3516`, `#3525`), `</think>` pollution (`#2596`) | Concerned — affects trust in agent autonomy |
| **Search/tooling vendor lock-in** | 🔥🔥 | DashScope dependency for search, OAuth mandate for IDE integrations | Seeking alternatives — MCP migration welcomed |

---

*Digest compiled from github.com/QwenLM/qwen-code activity on 2026-04-22 to 2026-04-23.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*