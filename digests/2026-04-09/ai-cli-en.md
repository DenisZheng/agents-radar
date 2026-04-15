# AI CLI Tools Community Digest 2026-04-09

> Generated: 2026-04-09 00:10 UTC | Tools covered: 8

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

# AI CLI Tools Ecosystem Report — April 9, 2026

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing intensifying competition as vendors race to establish developer mindshare through rapid iteration cycles, MCP ecosystem expansion, and Claude Code feature parity. All major tools are converging on agentic workflows with subagent orchestration, while differentiation increasingly hinges on terminal UX refinement, context management sophistication, and billing transparency. The community is simultaneously demanding open-source alternatives and expressing frustration with opaque usage metering—tensions that are driving both decompilation efforts and architectural rewrites across the ecosystem.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Release Status |
|------|:-----------:|:---------:|:--------------:|----------------|
| **Claude Code** | 50 | 10 | 2 (v2.1.96–97) | Stable, rapid patch cadence |
| **OpenAI Codex** | ~15 tracked | ~12 | 6 (α.19–.24) | Alpha stabilization sprint |
| **Gemini CLI** | ~12 tracked | ~12 | 3 (v0.37.0, preview, nightly) | Stable + nightly dual track |
| **GitHub Copilot CLI** | ~12 tracked | 3 | 1 (v1.0.22-0) | Conservative, quality-focused |
| **Kimi Code CLI** | ~10 tracked | ~12 | 0 | Pre-release development |
| **OpenCode** | ~15 tracked | ~12 | 1 (v1.4.0) | Breaking SDK changes |
| **Pi** | 16 closed + new | 8 merged | 2 (v0.66.0–.1) | Hotfix-responsive |
| **Qwen Code** | ~12 tracked | ~12 | 3 (v0.14.2 + nightlies) | VS Code-focused iteration |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Community Needs |
|-------------|-------|--------------------------|
| **Thinking/Reasoning Visibility** | Claude Code (#8477, #30660), Kimi (#1801), OpenCode | Real-time CoT streaming, persistent reasoning display, error handling for think-only outputs |
| **Session/Context Management** | Claude Code (#26328, #45493), Gemini (#22819, #3022), Qwen (#2621, #3017, #3022), Kimi (#1796, #1794), Pi (#2963) | Cross-project session visibility, context compression without data loss, explicit deletion controls, fork/branch primitives |
| **MCP Ecosystem Robustness** | Claude Code (#11927, #12443), Codex (#16944, #13476), Copilot CLI (#2498, #2236), Kimi (#1806), Qwen (#3033) | Environment variable propagation, reduced approval friction, registry reliability, tool name sanitization |
| **Billing Transparency & Controls** | Claude Code (#38335, #41930), Codex (#14593), Pi (#2943) | Usage limit anomaly resolution, consumption visibility, predictable metering |
| **Windows Terminal Parity** | Codex (#10410, #15277, #13542), Gemini (#20675, #21445), OpenCode (#4704, #21458), Kimi (#1790) | Arrow key handling, PTY stability, sandbox path resolution, PowerShell integration |
| **Global/Portable Configuration** | Copilot CLI (#1157), Kimi (#1747), Qwen (#2951) | Cross-repository hooks, environment-variable config paths, rules system portability |

---

## 4. Differentiation Analysis

| Tool | Core Focus | Target User | Technical Approach |
|------|-----------|-------------|------------------|
| **Claude Code** | Premium engineering workflows | Professional developers, Max plan subscribers | Closed-source, rapid UI polish, Bedrock/AWS integration depth |
| **OpenAI Codex** | Enterprise/government scale | Business/Enterprise tiers, FedRAMP customers | Rust CLI rewrite, sandbox security, marketplace extensibility |
| **Gemini CLI** | Google ecosystem integration | GCP users, multi-modal developers | React Ink TUI, aggressive latency optimization, AST-aware tooling investigation |
| **GitHub Copilot CLI** | IDE-adjacent augmentation | VS Code-centric developers, GitHub Enterprise | Conservative release cadence, policy enforcement, session collision safety |
| **Kimi Code CLI** | Claude Code parity + web UI | Chinese market, web-first developers | Python→TypeScript migration debate, YOLO mode, shell context injection |
| **OpenCode** | Open-source Claude alternative | Privacy-conscious, self-hosting developers | Bun/Node runtime flexibility, aggressive provider expansion, voice/multimodal |
| **Pi** | Terminal-native power users | Keyboard-driven developers, SSH-heavy workflows | Extension-based architecture, OpenRouter aggregation, minimal TUI |
| **Qwen Code** | VS Code companion excellence | IDE-preferring developers, enterprise China | Tight VS Code integration, context compression research, LSP diagnostics |

---

## 5. Community Momentum & Maturity

### Highest Activity (Rapid Iteration)
| Tool | Indicators |
|------|-----------|
| **Claude Code** | 50 issues/24h, sustained release velocity, dominant crisis management (#38335) |
| **OpenAI Codex** | 6 alpha releases/24h, active Rust stabilization, highest single-issue engagement (#14593: 491 comments) |
| **Gemini CLI** | Triple-track releases (stable/preview/nightly), P0 same-day fixes (#24936→#24974) |

### Moderate Activity (Feature Building)
| Tool | Indicators |
|------|-----------|
| **Kimi Code CLI** | Intensive shell UX PR cluster (n-WN), architectural rewrite proposal (#1707), no releases |
| **OpenCode** | Breaking SDK changes, memory leak investigation megathread, voice mode in development |
| **Qwen Code** | VS Code companion sprint, P0 context compression features, release workflow failures |

### Conservative Activity (Quality Focus)
| Tool | Indicators |
|------|-----------|
| **GitHub Copilot CLI** | 3 PRs/24h, policy/regression fixes, enterprise stability prioritization |
| **Pi** | Easter egg iteration, SSH extension polish, small-team responsiveness |

---

## 6. Trend Signals

| Signal | Evidence | Strategic Implication |
|--------|----------|----------------------|
| **Trust erosion from opaque metering** | Claude Code #38335 (478 comments), Codex #14593 (491 comments), Pi #2943 | Vendors must invest in real-time usage dashboards and anomaly explanation; billing transparency becoming competitive differentiator |
| **Decompilation pressure on closed-source tools** | Claude Code #41518 (1,906 TS files extracted), #41447, #41611 | Community frustration with proprietary tools driving open-source alternatives; legal risk vs. innovation tension |
| **MCP as de facto extension standard** | Universal across all tools; Codex marketplace (#17087), Gemini hook system (#24990) | Tool vendors becoming platforms; MCP server quality and discovery becoming ecosystem health metric |
| **Context management as core competency** | Qwen P0 compression (#3017), Claude Code compaction fixes, Gemini memory routing (#22819) | Token economics driving architectural innovation; "unlimited context" marketing vs. engineering reality |
| **Terminal UX as moat** | n-WN's 5+ Kimi PRs on keybindings, Gemini Windows fixes (#23505), Codex statusline meters (#17170) | Developer daily-driver status requires sub-100ms polish; TUI frameworks (Ink, etc.) becoming critical infrastructure |
| **Voice and multimodal emergence** | OpenCode #20677, Gemini realtime prompt centralization | CLI tools expanding beyond text; voice as accessibility and efficiency vector |

---

*Report compiled from community digest data dated 2026-04-09. Metrics approximate based on digest coverage scope.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-09 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Highlights |
|:---|:---|:---|:---|:---|:---|
| 1 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Addresses universal pain point in Claude's document output; author notes these issues "affect every document Claude generates" |
| 2 | **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating Skill quality across 5 dimensions (structure, security, testing, etc.) | Enterprise-grade tooling for Skill governance; positions Claude as a Skill reviewer for itself |
| 3 | **frontend-design** (improved) | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity and single-conversation actionability—ensures every instruction is executable | Community-driven refinement of existing Skill; focus on "steerability without verbosity" |
| 4 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, template-fill, and parse ODT ↔ HTML for LibreOffice/OnlyOffice workflows | Fills gap between DOCX and plain text; ISO standard format for open-source office stacks |
| 5 | **DOCX tracked changes fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Fixes document corruption from `w:id` collisions when adding tracked changes to bookmarked documents | Critical bugfix for enterprise legal/document workflows; root cause in OOXML shared ID space |
| 6 | **system documentation** | [#95](https://github.com/anthropics/skills/pull/95) | 🟡 Open | Comprehensive evidence management system docs with architecture diagrams and flowcharts | Heavy enterprise/forensic use case; 4 detailed markdown files for system governance |
| 7 | **SAP-RPT-1-OSS predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | Integrates SAP's open-source tabular foundation model for predictive analytics on SAP data | Bridges Claude to enterprise ERP systems; Apache 2.0 model from SAP TechEd 2025 |
| 8 | **skill-creator YAML validation** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 Open | Pre-parse validation to catch unquoted descriptions with `:` characters preventing silent failures | Developer experience improvement; catches "truncated or split" YAML before load |

---

## 2. Community Demand Trends

From 50 tracked Issues, these Skill directions show concentrated demand:

| Trend | Evidence | Implied Skill Need |
|:---|:---|:---|
| **Skill Lifecycle Management** | [#62](https://github.com/anthropics/skills/issues/62) (disappearing skills), [#202](https://github.com/anthropics/skills/issues/202) (skill-creator best practices), [#532](https://github.com/anthropics/skills/issues/532) (enterprise SSO/API key conflicts) | Robust skill versioning, backup, and org-wide governance tools |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (Expose Skills as MCPs) | Skills-as-APIs: automatic MCP server generation from Skill definitions |
| **Agent Memory & Context** | [#154](https://github.com/anthropics/skills/pull/154) (shodh-memory), [#521](https://github.com/anthropics/skills/pull/521) (record-knowledge) | Persistent cross-session memory with team-wide knowledge sharing |
| **Enterprise Security & Trust** | [#492](https://github.com/anthropics/skills/issues/492) (namespace impersonation), [#412](https://github.com/anthropics/skills/issues/412) (agent governance) | Skill provenance verification, policy enforcement, audit trails |
| **Platform Expansion** | [#29](https://github.com/anthropics/skills/issues/29) (AWS Bedrock), [#228](https://github.com/anthropics/skills/issues/228) (org-wide sharing) | Multi-platform deployment and centralized skill distribution |
| **Native OS Automation** | [#806](https://github.com/anthropics/skills/pull/806) (macOS AppleScript/sensory) | Escape screenshot-based computer use for programmatic system control |

---

## 3. High-Potential Pending Skills

Active PRs with recent momentum likely to merge:

| Skill | PR | Last Activity | Why It Lands Soon |
|:---|:---|:---|:---|
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 2026-03-30 | Comprehensive testing stack coverage (Testing Trophy, React Testing Library, MSW, Playwright)—fills critical gap in Claude's code generation reliability |
| **sensory (macOS automation)** | [#806](https://github.com/anthropics/skills/pull/806) | 2026-04-02 | Two-tier permission system addresses security concerns upfront; native alternative to brittle screenshot automation |
| **x402 BSV micropayments** | [#374](https://github.com/anthropics/skills/pull/374) | 2026-04-01 | Natural language interface for AI service payments; aligns with emerging agent-to-agent economy |
| **masonry-generate-image-and-videos** | [#335](https://github.com/anthropics/skills/pull/335) | 2026-03-14 | Imagen 3.0 + Veo 3.1 integration; media generation is high-velocity use case |
| **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | 2026-02-04 | 10-step workflow for technical debt identification—addresses maintainability at scale |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | 2026-03-19 | Community health infrastructure; repo scores 25% on GitHub metrics—high-impact, low-risk merge |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade Skill governance infrastructure**—spanning lifecycle management (versioning, backup, org sharing), trust boundaries (namespace verification, audit trails), and developer experience (validation, testing patterns, MCP interoperability)—as organizations move from individual Skill experimentation to production-scale agent deployment.

---

---

# Claude Code Community Digest — 2026-04-09

---

## 1. Today's Highlights

Anthropic shipped two CLI releases (v2.1.96–97) with UI polish and a critical Bedrock auth fix, while the community continues to grapple with widespread usage limit anomalies that have persisted since late March. The most-engaged issue of the day—#42796 on degraded model performance for complex engineering tasks—was closed after 176 comments and 948 upvotes, suggesting Anthropic may have deployed a backend fix. Meanwhile, open-source pressure intensifies with multiple PRs attempting to extract or reconstruct source code from shipped artifacts.

---

## 2. Releases

| Version | Key Changes |
|--------|-------------|
| **v2.1.97** | Focus view toggle (`Ctrl+O`) in `NO_FLICKER` mode showing prompt, one-line tool summary with edit diffstats, and final response; `refreshInterval` status line setting; `workspace.git_worktree` added to status line |
| **v2.1.96** | **Critical fix:** Resolved Bedrock `403 "Authorization header is missing"` regression introduced in 2.1.94 when using `AWS_BEARER_TOKEN_BEDROCK` or `CLAUDE_CODE_SKIP_BEDROCK_AUTH` |

---

## 3. Hot Issues

| # | Title | Status | Why It Matters | Community Signal |
|---|-------|--------|--------------|----------------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | Claude Max plan session limits exhausted abnormally fast since March 23 | 🔴 Open | **The dominant crisis:** 478 comments, 369 upvotes. Users report 5–10x faster consumption with no official root-cause analysis. | Extremely high engagement; frustration over silence from Anthropic |
| [#42796](https://github.com/anthropics/claude-code/issues/42796) | Unusable for complex engineering tasks with Feb updates | 🟢 Closed | 948 upvotes, 176 comments. Closed today—implies backend model rollback or fix deployed. | Relief mixed with demands for transparency |
| [#11405](https://github.com/anthropics/claude-code/issues/11405) | TUI says update available via brew; brew shows up to date | 🟢 Closed | Long-standing packaging/sync bug finally resolved. | 112 upvotes; closure welcomed |
| [#8477](https://github.com/anthropics/claude-code/issues/8477) | Add option to always show Claude's thinking | 🔴 Open | 195 upvotes. Visibility into reasoning is a competitive differentiator vs. OpenAI's visible CoT. | Persistent demand since v2.0.0 |
| [#41930](https://github.com/anthropics/claude-code/issues/41930) | Critical: Widespread abnormal usage limit drain—multiple root causes | 🔴 Open | Meta-issue aggregating billing anomalies across all tiers; author is paying customer documenting systemic failure. | 49 comments; calls for executive response |
| [#1486](https://github.com/anthropics/claude-code/issues/1486) | View jumps to top when reviewing code edits while scrolled | 🟢 Closed | UX friction in core edit-review workflow; fix improves daily usability. | 97 upvotes; long tail of similar reports |
| [#12443](https://github.com/anthropics/claude-code/issues/12443) | Get rid of malware warning in Read tool response | 🔴 Open | Security UX debt: over-aggressive warnings disrupt legitimate workflows. | 16 comments; security vs. usability tension |
| [#11927](https://github.com/anthropics/claude-code/issues/11927) | `env` vars from `.claude/settings.json` not passed to MCPs | 🔴 Open | Breaks MCP configuration patterns; blocks local development workflows. | 27 upvotes; plugin ecosystem impact |
| [#30660](https://github.com/anthropics/claude-code/issues/30660) | Stream extended thinking output in real-time | 🔴 Open | 19 upvotes. Parity with ChatGPT's visible reasoning; reduces perceived latency. | Developer experience priority |
| [#45493](https://github.com/anthropics/claude-code/issues/45493) | Multi-agent batch launches cause session context to disappear | 🔴 Open | **New regression:** 12–15+ agents trigger UI context loss until session resume. | Fresh report; agent scaling blocker |

---

## 4. Key PR Progress

| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#45150](https://github.com/anthropics/claude-code/pull/45150) | Expand CLAUDE_CODE_ACCESSIBILITY docs | 🟡 Open | Documents screen reader synchronization behavior; inclusion-focused improvement |
| [#40322](https://github.com/anthropics/claude-code/pull/40322) | Enhance firewall with hybrid static/dynamic IP management | 🟡 Open | Fixes sudo env stripping, crontab availability, heredoc bugs; supersedes #5609 |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | Open source Claude Code ✨ | 🟡 Open | Symbolic/community pressure PR; closes multiple "open source" requests. Unlikely to merge |
| [#45156](https://github.com/anthropics/claude-code/pull/45156) | Fix accidental strikethrough in Korean Tool Search docs | 🟡 Open | Localization quality fix for Korean MCP documentation |
| [#45151](https://github.com/anthropics/claude-code/pull/45151) | Add FORCE_HYPERLINK environment variable documentation | 🟡 Open | Documents escape hatch for tmux/screen hyperlink detection |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | Add the missing source to claude code | 🟡 Open | Attempted source reconstruction; legal/technical feasibility unclear |
| [#41518](https://github.com/anthropics/claude-code/pull/41518) | Fully Open Source Claude Code | 🟡 Open | **Aggressive decompilation:** Extracted 1,906 TypeScript files from 57MB sourcemap; builds with Bun. Raises license compliance questions |
| [#26328](https://github.com/anthropics/claude-code/pull/26328) | Add session-manager plugin | 🟢 Closed | Session lifecycle management (`/session-manager:delete`, `:list`, `:cleanup`). Community-valued; closure reason unclear |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Thinking/Reasoning Visibility** | #8477, #30660 | High—competitive parity demand |
| **Session Management** | #26328 (closed), #36261 | Moderate—workaround scripts proliferating |
| **Billing Transparency & Controls** | #38335, #41930, #44726 | Critical—trust erosion risk |
| **MCP Ecosystem Robustness** | #11927, #12443 | Growing—plugin architecture maturation |
| **Open Source / Source Availability** | #41447, #41518, #41611, #59, #456 | Intensifying—decompilation attempts signal community frustration |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Unexplained usage limit depletion** | 🔥 Pervasive since March 23 | Financial unpredictability; workflow disruption; #38335, #41930 dominate tracker |
| **Model quality regression for complex tasks** | 🔥 High (now allegedly fixed) | #42796 closure suggests fix, but trust damaged |
| **Multi-agent scale limitations** | ⚠️ Emerging | #45493 reports UI breakdown at 12–15 agents |
| **Cowork/Chrome integration fragility** | ⚠️ Persistent | #41034, #40281, #44486, #45503—Windows-specific Plan9 and auth issues |
| **MCP environment/configuration gaps** | ⚠️ Steady | #11927 env var propagation; plugin dev friction |
| **Accessibility and terminal integration** | 📈 Growing | #45150, #45151—screen readers, hyperlink detection edge cases |

---

*Digest compiled from github.com/anthropics/claude-code — 50 issues, 10 PRs, 2 releases in 24h window.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-09

## Today's Highlights

The Codex team is iterating rapidly on the Rust CLI with six alpha releases in 24 hours (v0.119.0-alpha.19 through .24), suggesting active stabilization work ahead of a broader release. Meanwhile, the community continues to surface critical platform gaps—particularly around Windows deployment, remote development workflows, and token consumption economics—with several issues crossing 100+ comments and hundreds of upvotes.

---

## Releases

**Rust CLI Alpha Series: v0.119.0-alpha.19 → v0.119.0-alpha.24**
- Rapid-fire alpha releases indicate active bug-fixing and stabilization
- No detailed changelogs provided in release notes
- [Releases page](https://github.com/openai/codex/releases)

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#14593](https://github.com/openai/codex/issues/14593) **Burning tokens very fast** | Business-tier users reporting unexpectedly rapid token depletion—directly impacts cost predictability and trust | 🔥 491 comments, 187 👍 — highest engagement in dataset; users sharing consumption patterns and seeking transparency |
| [#10410](https://github.com/openai/codex/issues/10410) **macOS Intel (x86_64) support** | Large installed base of Intel Macs excluded from desktop app; Universal build requested | 170 comments, 248 👍; persistent demand since February |
| [#10450](https://github.com/openai/codex/issues/10450) **Remote Development in Codex Desktop App** | Critical gap for developers using remote/SSH workspaces—blocks VS Code migration path | 105 comments, 508 👍; top-voted feature request |
| [#8648](https://github.com/openai/codex/issues/8648) **Codex replies to earlier messages instead of latest** | Core conversation state management bug—breaks multi-turn reliability | 38 comments, 24 👍; affects Pro users on latest models |
| [#13476](https://github.com/openai/codex/issues/13476) **Excessive approval prompts for Playwright MCP** | Regression in sandbox approval UX—friction for automated testing workflows | 24 comments, 35 👍; team subscription users impacted |
| [#13993](https://github.com/openai/codex/issues/13993) **Standalone Windows installer (`codex-setup.exe`)** | Microsoft Store restrictions block enterprise/corporate deployments | 19 comments, 58 👍; IT policy compatibility issue |
| [#15277](https://github.com/openai/codex/issues/15277) **`apply_patch` fails on Windows after first write** | Sandbox ownership logic breaks iterative editing on Windows | 14 comments; blocks Windows VS Code extension workflows |
| [#13542](https://github.com/openai/codex/issues/13542) **Bundled `rg` fails with Access Denied on Windows** | Integrated terminal broken for search operations due to WindowsApps path restrictions | 13 comments, 16 👍; PowerShell integration issue |
| [#16849](https://github.com/openai/codex/issues/16849) **VSCode extension: `open-in-targets` error loop → 100% CPU** | Runaway polling in webview causes system resource exhaustion | 12 comments, 5 👍; severe performance regression |
| [#15497](https://github.com/openai/codex/issues/15497) **Suppress hook status messages in TUI** | Hooks generate noisy ephemeral output—breaks clean CLI automation | 11 comments, 21 👍; `suppressOutput` currently no-op |

---

## Key PR Progress

| PR | Feature/Fix | Significance |
|----|-------------|------------|
| [#17171](https://github.com/openai/codex/pull/17171) **Route Fed API-key logins to Gov API** | FedRAMP compliance: auto-detects government orgs and routes to appropriate API endpoints | Critical for federal/enterprise adoption |
| [#16736](https://github.com/openai/codex/pull/16736) **Move unified-exec sandbox launch to exec-server** | Refactors sandbox argv construction for remote execution; foundation for distributed Codex | Architecture modernization |
| [#17170](https://github.com/openai/codex/pull/17170) **Render statusline context as a meter** | Replaces confusing "X% left" with visual context meter; hides legacy `context-used` | UX clarity improvement |
| [#16276](https://github.com/openai/codex/pull/16276) **Add memory extensions** | External contribution for persistent memory capabilities | Community-driven enhancement |
| [#16944](https://github.com/openai/codex/pull/16944) **Expand tool search to custom MCPs** | Generalizes tool discovery beyond built-in MCP servers; renames for consistency | MCP ecosystem growth |
| [#17165](https://github.com/openai/codex/pull/17165) **Move default realtime prompt into core** | Centralizes realtime backend prompt ownership; fixes empty prompt handling | Reliability fix for voice/realtime |
| [#17087](https://github.com/openai/codex/pull/17087) **Add `codex marketplace add` command** | Plugin marketplace installation with GitHub shorthand, sparse checkout support | Extensibility infrastructure |
| [#17168](https://github.com/openai/codex/pull/17168) **Clarify sandbox block messages** | Removes Codex-branded proxy denials; adds explicit sandbox policy reasoning | Debugging transparency |
| [#10109](https://github.com/openai/codex/pull/10109) **Allow `sendto(NULL, 0)` for asyncio self-pipe** | Fixes SQLite/asyncio hangs under no-network sandboxing | Stability fix for async workloads |
| [#17163](https://github.com/openai/codex/pull/17163) **Defer steered input until after compact continuation** | Prevents steering from being lost during context compaction | Conversation state reliability |

---

## Feature Request Trends

1. **Cross-Platform Parity** — Windows and Intel Mac support dominate requests; users expect first-class desktop experiences beyond Apple Silicon
2. **Remote/SSH Development** — Strong demand for remote workspace support matching VS Code's Remote-SSH capabilities
3. **Deployment Flexibility** — Standalone installers (`.exe`, `.dmg`) requested over store-only distribution for enterprise environments
4. **Cost Transparency & Control** — Token consumption visibility and rate-limit clarity increasingly critical at scale
5. **MCP Ecosystem Expansion** — Custom MCP server discovery, reduced approval friction, and better tool search integration

---

## Developer Pain Points

| Category | Specific Frustrations | Frequency |
|----------|----------------------|-----------|
| **Windows Experience** | Store restrictions, Access Denied errors, sandbox path issues, installer limitations | 🔴 High — 6+ active issues |
| **Token Economics** | Unpredictable consumption, lack of visibility into burn rate, Business/Pro tier concerns | 🔴 High — #14593 dominant thread |
| **Sandbox UX** | Excessive approval prompts, `apply_patch` regressions, hook output noise | 🟡 Medium — active PR attention |
| **Context/State Management** | Reply-to-wrong-message bugs, compaction losing steering, stale UI state | 🟡 Medium — core reliability |
| **Platform Gaps** | Intel Mac exclusion, remote development missing, Linux bwrap edge cases | 🟡 Medium — structural limitations |

---

*Digest compiled from github.com/openai/codex activity on 2026-04-09.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — April 9, 2026

## Today's Highlights

Three releases shipped in 24 hours including v0.37.0 stable, with the nightly build landing critical hook system UI improvements and end-to-end model override propagation. A P0 regression where Edit/WriteFile tools hid their target paths was rapidly identified and fixed. Meanwhile, Windows terminal compatibility remains a persistent friction point with multiple active PRs addressing arrow-key navigation and input handling.

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.39.0-nightly.20260408** | Nightly | Hook system messages now display in UI; `BeforeModel` hook model overrides propagate end-to-end; new approve button functionality |
| **v0.38.0-preview.0** | Preview | Slash command list refreshes after `/skills reload`; `complete_task` tool reliability fixes |
| **v0.37.0** | Stable | Test agent centralization for evals; agents re-enabled by default; plan telemetry updates |

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|------------------|
| [#20675](https://github.com/google-gemini/gemini-cli/issues/20675) — Windows 10 interactive shell arrow-key breakage | **17 comments** — Core usability blocker for Windows developers running external tools like `pnpm create vite` through Gemini CLI | Long-running; multiple attempted fixes; active PR #23505 in progress |
| [#20498](https://github.com/google-gemini/gemini-cli/issues/20498) — Paid subscribers lack Gemini 3 access | **9 comments, 2 👍** — Subscription/model tier confusion undermines paid value proposition | Enterprise user frustration; needs triage |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware file reads/search/mapping assessment | **4 comments, 1 👍** — Potential paradigm shift for precise code navigation; could reduce token waste and misaligned reads | Maintainer-only EPIC; linked to #22746 tooling investigation |
| [#21445](https://github.com/google-gemini/gemini-cli/issues/21445) — Ctrl+Backspace word deletion broken on Windows | **7 comments** — Daily productivity friction for Windows terminal users | **Closed** via PR #21447; first-time contributor fix merged |
| [#24936](https://github.com/google-gemini/gemini-cli/issues/24936) — Edit/WriteFile tools not showing modified file paths | **1 comment, P0** — Critical UX regression breaking edit confirmation safety | **Closed** same day via PR #24974; rapid response |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) — Memory routing: global vs. project | **1 comment, 2 👍** — Foundation for persistent, context-aware agent behavior | Workstream rollup; memory subagent architecture |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) — Subagents unaware of active approval modes | **1 comment, 1 👍** — Policy engine/agent instruction mismatch creates constraint violations | Maintainer-only; agent coordination reliability |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent should discourage destructive git operations | **1 comment, 1 👍** — Safety guardrail for `--force` and `git reset` misuse | Workstream rollup; trust/safety priority |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) — SSH session text scrambling | **1 comment** — Remote development workflow breaker | Windows→gLinux cloudtop scenario; needs SSH detection helper (#24546) |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) — Permission prompts repeating for same file | **1 comment** — "Allow for all future sessions" persistence failure | Fresh report; consent state management bug |

---

## Key PR Progress

| PR | Feature/Fix | Technical Significance |
|----|-------------|------------------------|
| [#24974](https://github.com/google-gemini/gemini-cli/pull/24974) — Restore file path display in edit/write confirmations | **P0 fix** for #24936 regression; restores critical safety context in tool confirmations | Merged |
| [#23505](https://github.com/google-gemini/gemini-cli/pull/23505) — Windows interactive shell arrow-key fix | Addresses #20675 root cause: PSReadLine interference and PTY mode conflicts | Open; help wanted |
| [#24990](https://github.com/google-gemini/gemini-cli/pull/24990) — Input prompt clipping bug fix | Ink 6.6.9 upgrade + SVG regression test for full-width input rendering | Open |
| [#24752](https://github.com/google-gemini/gemini-cli/pull/24752) — Decoupled ContextManager and Sidecar architecture | Foundation for #24751 fix; agent context lifecycle refactoring | Open |
| [#24941](https://github.com/google-gemini/gemini-cli/pull/24941) — Generalized evals infrastructure | Named suite organization, behavioral/hero/component eval categorization, queuing system | Open |
| [#24667](https://github.com/google-gemini/gemini-cli/pull/24667) — Lightweight parent process startup optimization | **~1.1s faster launch** (3.3s→2.2s); eliminates double-boot via process forking architecture | Open |
| [#24972](https://github.com/google-gemini/gemini-cli/pull/24972) — Dynamic session ID injection | Fixes `/stats session` resume bugs; removes static module-level state | Open |
| [#24968](https://github.com/google-gemini/gemini-cli/pull/24968) — OAuth timeout cleanup | Memory leak fix: clears 5-min timeouts post-authentication | Open |
| [#24903](https://github.com/google-gemini/gemini-cli/pull/24903) — Shell tool description display logic | Dynamic NL description vs. raw command balancing for clarity | Open |
| [#24569](https://github.com/google-gemini/gemini-cli/pull/24569) — Dynamic extension plan resolution | MRU-based lazy initialization; resolves circular dependency blocking new extensions | Open |

---

## Feature Request Trends

**1. Memory & Context Persistence**
Multiple issues converge on agent memory architecture: global vs. project-scoped memory (#22819), proactive memory writes (#22809), and subagent memory coordination. Users expect Gemini CLI to remember preferences and project conventions across sessions.

**2. AST-Aware Tooling**
Strong maintainer investment in #22745/#22746 investigating AST-based file reads and codebase mapping. Community appetite for precise symbol-level navigation over text-grep approximations.

**3. Windows Terminal Parity**
Persistent gap between *nix and Windows UX: arrow keys, Ctrl+Backspace, SSH rendering, and shell integration all require platform-specific handling. Multiple concurrent PRs suggest this is a priority corridor.

**4. Safety & Approval UX**
Destructive operation guardrails (#22672), approval mode awareness (#23582), and permission persistence (#24916) indicate demand for transparent, trustworthy autonomous behavior.

---

## Developer Pain Points

| Category | Manifestation | Frequency Signal |
|----------|-------------|----------------|
| **Windows Terminal Compatibility** | Arrow-key crashes, Ctrl+Backspace, SSH text corruption, PSReadLine conflicts | 5+ active issues/PRs; longest-running open issue (#20675, 17 comments) |
| **Tool Transparency** | File paths hidden in confirmations, unclear what agent will modify | P0 regression (#24936) + ongoing UI layout debates (#24943) |
| **Permission Fatigue** | Repeated prompts for same files, "allow for all future sessions" failing | Fresh report (#24916) + historical patterns |
| **Startup Latency** | ~3s cold start unacceptable for iterative workflows | PR #24667 explicitly targets 33% improvement |
| **Scroll/Rendering Stability** | Flashing, momentum bugs, React error #185 in long chats | 3+ issues (#24470, #24438, #24917) |
| **Model Access Clarity** | Paid subscribers confused about Gemini 3 availability | Enterprise trust issue (#20498) |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-09

## Today's Highlights

GitHub Copilot CLI v1.0.22-0 shipped with critical safety guardrails for sub-agent spawning and session collision warnings. Enterprise MCP server policy enforcement remains the dominant friction point, with multiple high-engagement issues around 404 registry errors and false "disabled by organization" warnings. The community is actively pushing for global hooks configuration parity with Claude Code and per-repository MCP scoping.

---

## Releases

**v1.0.22-0** — [Release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.22-0)

| Change | Impact |
|--------|--------|
| Sub-agent depth and concurrency limits | Prevents runaway agent spawning in complex workflows |
| Session-in-use warnings | Alerts when resuming sessions active in another CLI instance |
| V8 grapheme segmentation fix | Eliminates crash on affected systems |
| `sessionStart`/`sessionEnd` improvements | Better session lifecycle tracking |

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2498](https://github.com/github/copilot-cli/issues/2498) | MCP servers blocked by policy on GHE 404 | **Enterprise blocker**: GHE instances without MCP registry support break all non-default servers | 17 comments, 3 👍 — resolved with policy fallback |
| [#1157](https://github.com/github/copilot-cli/issues/1157) | Global hooks configuration | **Feature parity gap**: Claude Code/Cursor offer global hooks; Copilot requires per-repo setup | 12 comments, 25 👍 — strong demand |
| [#2236](https://github.com/github/copilot-cli/issues/2236) | MCP servers disappear with false policy warning | **Regression**: Org registry servers vanish, blocking team workflows | 9 comments, 67 👍 — highest voted open issue |
| [#1897](https://github.com/github/copilot-cli/issues/1897) | "Not authorized" despite Copilot Pro enabled | **Auth confusion**: Policy vs. billing entitlement mismatch | 11 comments, ongoing triage |
| [#2479](https://github.com/github/copilot-cli/issues/2479) | Individual users hit 404 on MCP registry policy | **Scope creep**: Policy endpoint fails for non-Enterprise users | 8 comments, 12 👍 |
| [#2434](https://github.com/github/copilot-cli/issues/2434) | Restore Gemini Pro support | **Model diversity loss**: v1.0.14 dropped gemini-3-pro-preview | 6 comments, 7 👍 |
| [#2551](https://github.com/github/copilot-cli/issues/2551) | Claude Opus/Sonnet 4.5 503 GOAWAY errors | **Reliability**: New model versions failing at scale | 5 comments, fresh report |
| [#2541](https://github.com/github/copilot-cli/issues/2541) | Disable eye animation option | **Accessibility/preference**: Visual distraction in terminal | 8 comments |
| [#2583](https://github.com/github/copilot-cli/issues/2583) | `copilot update` command broken | **Regression**: Update mechanism fails post-v1.0.17 | 4 comments, Windows-specific |
| [#2597](https://github.com/github/copilot-cli/issues/2597) | Claude Sonnet 4.5 listed but returns 400 | **Model availability drift**: UI/Backend sync issue | 1 comment, emerging |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2587](https://github.com/github/copilot-cli/pull/2587) | Automated issue classification with GitHub Agentic Workflows | AI-powered `area:` and `triage` labeling using `gh-aw` | Open — infrastructure investment |
| [#2565](https://github.com/github/copilot-cli/pull/2565) | Guard against duplicate PATH entries | Fixes installer idempotency on shell profile modification | Open — DX polish |
| [#2556](https://github.com/github/copilot-cli/pull/2556) | Developer skill expansion | "Level up skills" — skill system enhancement | Open — capabilities growth |

*Only 3 PRs active in last 24h; focus on quality over quantity*

---

## Feature Request Trends

**1. Configuration Scope Flexibility**
- Global hooks (#1157) and per-repository MCP config (#2528) dominate requests
- Pattern: Users want Claude Code parity in configuration portability

**2. Model Availability & Transparency**
- Restore Gemini Pro (#2434), stable Claude 4.5 access (#2551, #2597)
- Underlying need: predictable model selection without silent removals

**3. Enterprise Policy Clarity**
- Better error messaging when MCP servers blocked (#2498, #2236)
- Distinction between "blocked by policy" vs. "endpoint unavailable"

**4. Terminal UX Control**
- Disable animations (#2541), persistent plan visibility (#2598), input hooks (#1128)

---

## Developer Pain Points

| Category | Manifestation | Frequency |
|----------|-------------|-----------|
| **MCP Registry Reliability** | 404 errors, false policy warnings, disappearing servers | **Critical** — 5+ top issues |
| **Authentication Entitlement Confusion** | "Not authorized" errors despite valid Copilot Pro subscriptions | High — #1897 pattern |
| **Model Availability Drift** | Models listed in `/models` failing at runtime; silent removals | High — #2434, #2551, #2597 |
| **Update Mechanism Fragility** | `copilot update` and `winget` integration breaking | Medium — #2583 |
| **Session/Process Hygiene** | Orphaned PowerShell processes (#2573), session collision edge cases | Medium |
| **Enterprise/Individual Feature Parity Gaps** | MCP registry assumptions break individual users | Medium — #2479 |

---

*Digest compiled from github.com/github/copilot-cli activity 2026-04-08*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-09

---

## 1. Today's Highlights

The community saw **intensive shell UX refinement** with 4 merged PRs from n-WN fixing session picker friction and slash command completion flows. A **major TypeScript rewrite proposal** (#1707) gained traction as developers debate Python's long-term viability for the CLI. Meanwhile, **streaming reliability** emerged as a critical theme with multiple PRs addressing timeout handling and partial result recovery.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#1747](https://github.com/MoonshotAI/kimi-cli/issues/1747) Three-tier Rules System | Directly targets Claude Code feature parity—most upvoted enhancement request for structured development guidelines | Author detailed 3-level hierarchy (global/user/project); 3 comments discussing implementation approach |
| [#1807](https://github.com/MoonshotAI/kimi-cli/issues/1807) TTY freeze in Ghostty | Terminal compatibility bug affecting modern Rust-based terminals; blocks adoption for Ghostty users | Fresh report (0 comments), needs reproduction confirmation |
| [#1621](https://github.com/MoonshotAI/kimi-cli/issues/1621) CWD removal crash | **Closed**—External drive unplugging caused infinite exception cascade; now fixed with graceful crash reporting | n-WN delivered complete fix in #1622 |
| [#1806](https://github.com/MoonshotAI/kimi-cli/issues/1806) MCP tool name sanitization | **Closed**—21st.dev MCP server compatibility; numeric-prefixed tool names broke Kimi API validation | NaqibAhmad landed fix same day in #1805 |
| [#1795](https://github.com/MoonshotAI/kimi-cli/issues/1795) Slash completion extra Enter presses | **Closed**—High-friction UX: 3 Enter presses needed for command execution | Fixed in #1793 by n-WN |
| [#1796](https://github.com/MoonshotAI/kimi-cli/issues/1796) Directory scope toggle for /sessions | **Closed**—Power users need cross-project session visibility; parity with Claude Code `/resume` | Implemented via Ctrl+A in #1797 |
| [#1794](https://github.com/MoonshotAI/kimi-cli/issues/1794) Pointless single-session picker | **Partially closed**—Confusing UX when only current session exists | #1792 merged; follow-up #1799 addresses edge case |
| [#1791](https://github.com/MoonshotAI/kimi-cli/issues/1791) Third-party provider image upload params | Compatibility regression for custom API endpoints; blocks non-Moonshot usage | Awaiting maintainer response |
| [#1786](https://github.com/MoonshotAI/kimi-cli/issues/1786) UI lag on ~800 line files | **Critical performance**—Minutes-long UI desync from actual file writes | No comments yet; suggests rendering pipeline bottleneck |

---

## 4. Key PR Progress

| PR | Status | Feature/Fix | Technical Detail |
|----|--------|-------------|----------------|
| [#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707) | **OPEN** | TypeScript + Bun + React Ink rewrite | 166 TS files, ~32k LOC, 37 test files; radical architectural shift from Python |
| [#1767](https://github.com/MoonshotAI/kimi-cli/pull/1767) | **OPEN** | YOLO mode for Web UI | Extends auto-approve to web interface; backend API + frontend toggle |
| [#1801](https://github.com/MoonshotAI/kimi-cli/pull/1801) | **OPEN** | Think-only response handling | Treats reasoning-only outputs as errors; prevents silent failures when stream interrupts during thinking |
| [#1803](https://github.com/MoonshotAI/kimi-cli/pull/1803) | **CLOSED** | Streaming timeout + recovery | 600s→1800s timeout; recovers partial tool call results on disconnect |
| [#1802](https://github.com/MoonshotAI/kimi-cli/pull/1802) | **OPEN** | Background task lifecycle | Prevents agent loop exit while background tasks run; adds completion event waiting |
| [#1800](https://github.com/MoonshotAI/kimi-cli/pull/1800) | **OPEN** | OpenAI APIError retry classification | Base `APIError` now retryable for mid-stream transport failures |
| [#1715](https://github.com/MoonshotAI/kimi-cli/pull/1715) | **OPEN** | Claude plugin compatibility | Local plugin discovery via `--plugin-dir`; auto-detects Claude plugin structure |
| [#1587](https://github.com/MoonshotAI/kimi-cli/pull/1587) | **OPEN** | Shell mode context injection | Shell output enters conversation as `<system-reminder>`; persistent `cd` with real shell resolution |
| [#1789](https://github.com/MoonshotAI/kimi-cli/pull/1789) | **OPEN** | Mermaid diagram rendering | Web UI now renders Mermaid fenced code blocks as diagrams |
| [#1790](https://github.com/MoonshotAI/kimi-cli/pull/1790) | **OPEN** | Windows PowerShell Core preference | `pwsh` prioritized over legacy `powershell.exe` via PATH + default install detection |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Rules/Guidelines System** | #1747 explicitly models Claude Code's 3-tier structure | Users want project-specific AI behavior control beyond global settings |
| **Cross-Project Session Management** | #1796, #1794, #1797 | Multi-repo workflows need session visibility beyond CWD |
| **MCP Ecosystem Robustness** | #1806, #1805 | Tool name sanitization, server compatibility becoming table stakes |
| **Web UI Parity** | #1767 (YOLO), #1789 (Mermaid) | CLI-first tool expanding to web without feature gaps |
| **Third-Provider Flexibility** | #1791 | Custom endpoint users hitting parameter validation edge cases |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Manifestation |
|------------|-----------|---------------|
| **Streaming Reliability** | 4 PRs (#1801, #1803, #1802, #1800) | Timeouts, partial results, think-only responses, transport failures—suggests fragile network layer |
| **Shell UX Friction** | 5+ PRs from n-WN alone | Completion flows, keybindings, session pickers need iterative polish |
| **Python Performance Ceiling** | #1707 rewrite proposal, #1786 lag issue | 800-line files causing minutes-long UI desync fuels language migration debate |
| **Terminal Compatibility** | #1807 (Ghostty), #1545 (SIGTSTP) | Modern terminals and signal handling need ongoing attention |
| **MCP/Plugin Standards** | #1806, #1715 | Fragmented server naming conventions, plugin ecosystem lock-in |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity on 2026-04-08.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-09

---

## 1. Today's Highlights

OpenCode **v1.4.0** shipped with **breaking SDK changes** to diff metadata—full file contents are no longer included in `to`/`from` fields, reducing payload sizes. A critical **terminal input regression** was fixed after the Bun→Node websocket migration left PTY connections broken. Meanwhile, the team is consolidating **memory leak reports** into a centralized tracking issue and actively collecting heap snapshots from the community.

---

## 2. Releases

### [v1.4.0](https://github.com/anomalyco/opencode/releases/tag/v1.4.0)

**Breaking Change:** SDK diff metadata now omits full file contents in `to`/`from` fields—only patch data is included. This addresses performance issues with large file operations but may break integrations relying on complete file snapshots in tool metadata.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3743](https://github.com/anomalyco/opencode/issues/3743) | **Loop in certain models** (KIMI K2, MiniMax, GLM 4.6) | Models enter infinite tool-calling loops; `/compact` sometimes helps, sometimes requires manual stop. Affects production workflows with popular Chinese models. | 24 comments, 10 👍—active troubleshooting, provider-specific workarounds discussed |
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** | Centralized tracking for scattered memory leak reports. Team explicitly requests heap snapshots, warns against LLM-generated solutions. | 22 comments, 19 👍—high engagement, diagnostic data being collected |
| [#5474](https://github.com/anomalyco/opencode/issues/5474) | **`/undo` only rolls back messages, not file changes** | Critical UX gap—users expect atomic revert of AI operations. Creates workspace inconsistency. | 18 comments, 4 👍—long-standing, multiple related issues |
| [#4704](https://github.com/anomalyco/opencode/issues/4704) | **`/undo` and `/timeline` don't revert edits (Windows)** | Platform-specific variant of above, affects Git and non-Git projects. Logs provided. | 15 comments, 12 👍—Windows users particularly impacted |
| [#20995](https://github.com/anomalyco/opencode/issues/20995) | **Gemma 4 tool calling fails via Ollama** | Streaming `tool_calls` not recognized despite correct API response. Blocks local Gemma 4 adoption. | 9 comments, 26 👍—highly upvoted, Ollama compatibility gap |
| [#3844](https://github.com/anomalyco/opencode/issues/3844) | **Plan mode questions like Claude Code** | Feature parity request—Claude Code's interactive planning is seen as superior UX. | 10 comments, **123 👍**—top-voted feature request |
| [#12741](https://github.com/anomalyco/opencode/issues/12741) | **Skills not auto-detected in `~/.agents/skills`** | Documentation/implementation mismatch for global skill paths. Confuses users migrating from Claude Code. | 12 comments, 7 👍—docs credibility issue |
| [#21458](https://github.com/anomalyco/opencode/issues/21458) | **Windows subagent sessions cannot be prompted** | Recent restriction prevents guiding subagents on Windows—regression in task delegation workflow. | 4 comments—immediate user pushback on change |
| [#9808](https://github.com/anomalyco/opencode/issues/9808) | **Support sudo/password-requiring commands** | `stdio: "ignore"` breaks interactive auth—blocks `sudo`, SSH, GPG workflows. | 3 comments, 19 👍—long-standing infrastructure limitation |
| [#21541](https://github.com/anomalyco/opencode/issues/21541) | **Terminal not accepting input** | Critical regression from Bun→Node migration—integrated terminal completely non-functional. | 3 comments—fixed in PR #21490 |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#21589](https://github.com/anomalyco/opencode/pull/21589) | **Normalize missing array items in tool schemas** | Fixes OpenAI validation failures on MCP tools like `docker_create_container` by injecting `items: {}` for permissive arrays. | Open, needs issue/compliance |
| [#21490](https://github.com/anomalyco/opencode/pull/21490) | **Restore PTY websocket connectivity (Node ws)** | Fixes terminal input regression (#21480, #21469, #21440, #21541) after Bun→Node migration. Custom auth check for `node-ws`. | **Merged** |
| [#21538](https://github.com/anomalyco/opencode/pull/21538) | **macOS bash sandboxing via `sandbox-exec`** | Opt-in command sandboxing for security. Resolves paths before sandbox profile application. | Open, experimental |
| [#21586](https://github.com/anomalyco/opencode/pull/21586) | **Trigger words for inline image attachments** | Adds "analyze", "screenshot", "describe" to image filenames so skills like `vision-analysis` auto-activate. Closes #21585. | Open |
| [#20491](https://github.com/anomalyco/opencode/pull/20491) | **Kiro (AWS CodeWhisperer) provider** | Adds AWS Event Stream binary protocol support. Major enterprise provider expansion. | Open |
| [#20677](https://github.com/anomalyco/opencode/pull/20677) | **Voice mode: STT, TTS, VAD, barge-in** | Full voice interface with mic button, continuous mode, interruption handling. Closes #18226. | Open |
| [#20672](https://github.com/anomalyco/opencode/pull/20672) | **MCP resource subscription support** | Real-time resource updates via MCP subscriptions. Template support, SDK client exposure. Closes #12092. | Open |
| [#13321](https://github.com/anomalyco/opencode/pull/13321) | **Robust subagent completion propagation** | Fixes parent session hangs when Task tool completes but `prompt()` never resolves. Awaits `prune()`, adds timeout. Closes #9003, #10802, #11865. | Open |
| [#20675](https://github.com/anomalyco/opencode/pull/20675) | **Hardened serve mode: permissions, bash safety, recovery** | Next-gen permission system with granular controls. Bash timeout/signal improvements. Closes #14473. | Open |
| [#21572](https://github.com/anomalyco/opencode/pull/21572) | **Sort messages by creation time, not ID** | Fixes session ordering bugs where non-sequential IDs caused message misordering. Closes #15657, #17012, #21569. | Open |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Claude Code parity** | #3844 (plan mode questions, 123 👍), #3439 (custom model aliases), #21508 (tool to change agent after plan) | High—users benchmark against Claude Code explicitly |
| **Permission/Security hardening** | #2632 (closed, default permissions too permissive), #18659 (host-shell with stdin passthrough), #21538 (macOS sandboxing) | Growing—enterprise adoption driving safety requirements |
| **Voice/ multimodal input** | #20677 (voice mode PR), #21585/#21586 (image trigger words for skills) | Active development—voice PR in progress |
| **Subagent workflow improvements** | #9003 (fixed), #11012 (subagent enclosure limits task management), #21458 (Windows subagent prompting restricted) | Tension between isolation and control |
| **Provider ecosystem expansion** | #20491 (Kiro), #20995 (Gemma 4/Ollama fixes), #21237 (Azure reasoningSummary guards) | Aggressive—covering AWS, Google, local, Chinese providers |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Current Response |
|------------|-----------|--------|----------------|
| **Undo/revert reliability** | 3+ issues (#5474, #4704, related) | **Critical**—data integrity at risk | No confirmed fix; workarounds only |
| **Memory leaks** | Consolidated in #20695 | High—crashes, OOM kills | Active data collection, no fix yet |
| **Windows second-class experience** | #4704, #21458, #21557, #21550, #21581 | High—terminal, subagents, MCP, shell crashes all platform-specific | Fixes reactive, not systematic |
| **Interactive command execution** | #9808 (sudo/SSH), #18659 (stdin passthrough) | Medium—blocks DevOps workflows | Long-standing, architectural limitation |
| **Migration friction (Claude Code)** | #12741 (skills paths), #12432 (`DISABLE_CLAUDE_CODE` breaks skills) | Medium—docs/implementation drift | Docs fixes in progress |
| **Terminal/PTY regressions** | #21541 (fixed), #21490 | **Critical**—core IDE function broken | Fast fix (24h) after Bun→Node migration |

---

*Digest compiled from github.com/anomalyco/opencode — 2026-04-09*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-09

## Today's Highlights

Pi shipped **v0.66.1** hotfixing the Earendil easter egg announcement, which was moved from automatic startup to the hidden `/dementedelves` slash command after binary release users reported missing images. The community closed **8 PRs** and **16 issues** in 24 hours, with heavy activity around model registry UX improvements and SSH extension enhancements. A significant wave of fixes addresses long-standing pain points: terminal stack overflows, stale OpenRouter model lists, and cryptic `models.json` authentication errors.

---

## Releases

### [v0.66.1](https://github.com/badlogic/pi-mono/releases/tag/v0.66.1)
- **Changed**: Earendil announcement moved from automatic startup to hidden `/dementedelves` slash command ([diff](https://github.com/badlogic/pi-mono/commit/v0.66.1))

### [v0.66.0](https://github.com/badlogic/pi-mono/releases/tag/v0.66.0)
- **New**: Earendil startup announcement with inline image rendering (April 8–9, 2026)
- **New**: Interactive Anthropic subscription auth warning clarifying third-party usage draws from "extra usage" quota

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#2815](https://github.com/badlogic/pi-mono/issues/2815) **Antigravity deprecation** — "This version of Antigravity is no longer supported" | Breaking change for users of Antigravity models; unclear migration path | 9 comments, no 👍 — confusion about model availability |
| [#2943](https://github.com/badlogic/pi-mono/issues/2943) **Claude "out of extra usage" errors** | Max plan users hit unexpected quota walls; exposes opacity of Anthropic's third-party billing | 6 comments, 5 👍 — validated widespread frustration, quickly closed with workaround guidance |
| [#2960](https://github.com/badlogic/pi-mono/issues/2960) **Missing announcement image in binaries** | Easter egg broken for binary users; asset bundling gap identified | 2 comments — [PR #2961](https://github.com/badlogic/pi-mono/pull/2961) shipped same day |
| [#2967](https://github.com/badlogic/pi-mono/issues/2967) **WSL `/login` fails with EADDRINUSE** | Browser-based auth incompatible with WSL networking; blocks Anthropic login entirely | 1 comment — user requests URL-based fallback like other tools |
| [#2651](https://github.com/badlogic/pi-mono/issues/2651) **Container.render() stack overflow** | Long sessions crash with `RangeError`; TUI architecture limitation | 1 comment — [PR #2932](https://github.com/badlogic/pi-mono/pull/2932) fixes via `concat()` instead of spread |
| [#2868](https://github.com/badlogic/pi-mono/issues/2868) **Self-identify coding agent via env var** | Tools/scripts need to detect Pi context for behavioral adjustments | 1 comment — straightforward feature request, unimplemented |
| [#2778](https://github.com/badlogic/pi-mono/issues/2778) **Autocomplete cwd-dependent results** | `@file` mentions behave unpredictably across worktrees; `fd` path matching issue | 1 comment — UX inconsistency in file picker |
| [#2945](https://github.com/badlogic/pi-mono/issues/2945) **Multi-skill autocomplete UX** | `/skill:` only triggers at prompt start; active skills not visible | 1 comment — workflow friction for power users |
| [#2944](https://github.com/badlogic/pi-mono/issues/2944) **@file mentions with spaces** | Obsidian-style filenames break mention parsing | 1 comment — note-taking integration pain point |
| [#2936](https://github.com/badlogic/pi-mono/issues/2936) **Provider defaults to Anthropic, locks TUI** | `/login` forces Anthropic flow with no escape; `ctrl+c` unresponsive | 1 comment — critical UX trap for new users |

---

## Key PR Progress

| PR | Feature / Fix | Impact |
|----|-------------|--------|
| [#2964](https://github.com/badlogic/pi-mono/pull/2964) **SSH extension: remote context files** | Loads `AGENTS.md` / `CLAURO.md` from remote host, not just local | Fixes "forgotten context" in SSH sessions; closes [#2965](https://github.com/badlogic/pi-mono/issues/2965) |
| [#2963](https://github.com/badlogic/pi-mono/pull/2963) **`/clone` command** | Duplicates session at leaf position vs. `/fork`'s parent-based fork | New workflow primitive for session management; closes [#2962](https://github.com/badlogic/pi-mono/issues/2962) |
| [#2961](https://github.com/badlogic/pi-mono/pull/2961) **Bundle announcement images in binaries** | Fixes asset inclusion for binary releases | Resolves [#2960](https://github.com/badlogic/pi-mono/issues/2960) |
| [#2959](https://github.com/badlogic/pi-mono/pull/2959) **models.json UX: skip redundant apiKey, survive `registerProvider()`** | Custom models no longer wiped on extension reload; auth-aware validation | Closes [#2955](https://github.com/badlogic/pi-mono/issues/2955), [#2956](https://github.com/badlogic/pi-mono/issues/2956) |
| [#2958](https://github.com/badlogic/pi-mono/pull/2958) **Prefer base model over `:variant` suffixes** | `qwen/qwen3.6-plus` no longer resolves to `:free` variant | Fixes silent deprecated model selection; closes [#2954](https://github.com/badlogic/pi-mono/issues/2954) |
| [#2957](https://github.com/badlogic/pi-mono/pull/2957) **Regenerate models.generated.ts from live APIs** | Adds `qwen/qwen3.6-plus`, `alibaba/qwen3.6-plus`, others | Addresses stale model list; closes [#2953](https://github.com/badlogic/pi-mono/issues/2953) |
| [#2951](https://github.com/badlogic/pi-mono/pull/2951) **Retry on Alibaba Qwen rate-increased errors** | Expands `_isRetryableError()` regex for Qwen-specific messaging | Closes [#2952](https://github.com/badlogic/pi-mono/issues/2952) |
| [#2932](https://github.com/badlogic/pi-mono/pull/2932) **Fix Container.render() stack overflow** | Replaces `push(...spread)` with `concat()` for large outputs | Resolves [#2651](https://github.com/badlogic/pi-mono/issues/2651) crash in long sessions |

---

## Feature Request Trends

1. **First-class Anthropic Console support** — Users want `/login` option for `console.anthropic.com` billing, not just Pro/Max ([#2948](https://github.com/badlogic/pi-mono/issues/2948))
2. **Thinking effort shortcuts** — `/effort` or similar to avoid deep `/settings` navigation ([#2941](https://github.com/badlogic/pi-mono/issues/2941))
3. **Gitignored skills inclusion** — Allow `.gitignore`d skills in agent context for nix/flake-based workflows ([#2947](https://github.com/badlogic/pi-mono/issues/2947))
4. **Environment self-identification** — `PI_CODING_AGENT=true` for subprocess detection ([#2868](https://github.com/badlogic/pi-mono/issues/2868))
5. **Reproducibility tooling** — ValiChord extension for scientific verification ([#2942](https://github.com/badlogic/pi-mono/issues/2942))

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Model registry friction** | `models.json` requires redundant `apiKey`, custom models wiped on reload, stale generated lists, cryptic partial matching | **High** — 4+ related issues/PRs in 24h |
| **Anthropic auth/billing opacity** | "Extra usage" quota surprises, forced login flows, WSL incompatibilities | **High** — 3+ issues |
| **TUI robustness** | Stack overflows, terminal jumping/scrolling, autocomplete context sensitivity | **Medium** — long-standing, partially addressed |
| **SSH extension gaps** | Remote context files ignored until [#2964](https://github.com/badlogic/pi-mono/pull/2964) | **Medium** |
| **File mention UX** | Spaces in filenames, cwd-dependent results, incomplete argument completion | **Medium** — workflow friction |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-09

## Today's Highlights
The team shipped **v0.14.2** as a hotfix for a critical VS Code webview blank screen regression introduced in v0.14.1. Community activity surged around context management pain points, with multiple P0/P1 feature requests for multi-layer context compression and fork subagents landing simultaneously. The VS Code IDE companion continues rapid iteration with 5+ active PRs targeting slash commands, insight reports, and UI stability.

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.14.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.2)** | Hotfix | Fixes blank screen in VS Code 0.14.1 webview ([#2959](https://github.com/QwenLM/qwen-code/pull/2959)); preserves null exit codes from signal kills instead of collapsing to 0 ([#2959](https://github.com/QwenLM/qwen-code/pull/2959)) |
| [v0.14.1-nightly.20260408.4d4af4ac5](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.1-nightly.20260408.4d4af4ac5) | Nightly | Same webview fix as above |
| [v0.14.0-preview.6](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.0-preview.6) | Preview | Same webview fix as above |

> Note: The v0.14.2 release workflow initially failed twice ([#3023](https://github.com/QwenLM/qwen-code/issues/3023), [#3024](https://github.com/QwenLM/qwen-code/issues/3024)) due to sandbox image version mismatches before successful resolution.

---

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2721](https://github.com/QwenLM/qwen-code/issues/2721) | 能否把 iflow cli 项目接过呀? | **Strategic**: Users explicitly prefer competitor's UX; 13 comments suggest strong attachment to iflow's `/chat` session management | 13 💬, migration pressure |
| [#2395](https://github.com/QwenLM/qwen-code/issues/2395) | Input lag when typing — 5+ second delay | **P1 Performance**: Severe UX degradation blocking daily use; Windows 11 + VS Code 1.111.0 specific | 7 💬, needs repro |
| [#2973](https://github.com/QwenLM/qwen-code/issues/2973) | 对system prompt的遵循很差 | **Core Reliability**: System prompt adherence failures undermine agent trust | 4 💬, fresh report |
| [#1104](https://github.com/QwenLM/qwen-code/issues/1104) | "This is an unexpected error" — git init failure | **Onboarding Friction**: Fatal crash on non-git directories; blocks new users | 3 💬, +1 👍 |
| [#2621](https://github.com/QwenLM/qwen-code/issues/2621) | How can I clean the context used? | **Context Hygiene**: "New Session" fails to clear context — fundamental UX gap | 3 💬 |
| [#3025](https://github.com/QwenLM/qwen-code/issues/3025) | iflow cli的好功能接过来 | **Feature Parity**: Specific request for `/chat` session persistence + skills directory bug fix | 2 💬 |
| [#2951](https://github.com/QwenLM/qwen-code/issues/2951) | 支持全局的 .qwen 目录配置 | **Enterprise/Cloud**: Environment variable for `~/.qwen` path needed for mounted storage scenarios | 2 💬 |
| [#3033](https://github.com/QwenLM/qwen-code/issues/3033) | VS code extension doesn't work with MCP | **Integration Gap**: Unity MCP works in CLI but fails in VS Code extension — parity issue | 0 💬, fresh |
| [#3032](https://github.com/QwenLM/qwen-code/issues/3032) | Add a way to delete chats | **Data Management**: No UI option to delete chats; manual filesystem deletion required | 0 💬, +1 👍 |
| [#3017](https://github.com/QwenLM/qwen-code/issues/3017) | [P0] Multi-layer Context Compression | **Architectural**: 70% compression loses edited file context; competing with Claude's approach | 0 💬, P0 priority |

---

## Key PR Progress

| # | Title | Feature/Fix | Status |
|---|-------|-------------|--------|
| [#2916](https://github.com/QwenLM/qwen-code/pull/2916) | Expose /context usage data in SDK API | Enables programmatic context window monitoring for SDK consumers; closes gap vs Claude Code | Open |
| [#3034](https://github.com/QwenLM/qwen-code/pull/3034) | LSP diagnostics caching + document refresh fallback | Fixes empty diagnostics for typescript-language-server and push-diagnostic-only LSPs | Open |
| [#2932](https://github.com/QwenLM/qwen-code/pull/2932) | Enhance /review with deterministic analysis, autofix, security | Major upgrade to 4-agent parallel review; targets Copilot Code Review parity | Open |
| [#2593](https://github.com/QwenLM/qwen-code/pull/2593) | Support /insight command in VSCode Companion | Brings insight reports to IDE without terminal context switching | Open |
| [#3031](https://github.com/QwenLM/qwen-code/pull/3031) | Fallback to CLI confirmation when IDE diff open fails | Resilience fix for scheduler-based IDE diff refactor (#2728) | Open |
| [#2850](https://github.com/QwenLM/qwen-code/pull/2850) | Match env-prefixed shell commands against permission rules | Fixes `PYTHONPATH=... python3` failing "Always allow" persistence | Open |
| [#2548](https://github.com/QwenLM/qwen-code/pull/2548) | Expose /skills as slash command with secondary picker | VS Code UX: `/skills` opens picker instead of immediate execution | Open |
| [#3006](https://github.com/QwenLM/qwen-code/pull/3006) | Microcompaction for idle context cleanup | Lightweight pre-pass clearing old tool results after 60min idle; reduces token pressure | Open |
| [#3022](https://github.com/QwenLM/qwen-code/pull/3022) | Add /branch command for session forking | Independent conversation branching with collision-aware naming | Open |
| [#3013](https://github.com/QwenLM/qwen-code/pull/3013) | SlicingMaxSizedBox to prevent terminal flickering | Fixes UI stuttering on large verbose outputs (npm install, git log) | Open |

---

## Feature Request Trends

| Theme | Evidence | Implication |
|-------|----------|-------------|
| **Session/Context Management** | #2721, #3025 (iflow `/chat`), #2621, #3032, #3022 (`/branch`), #3017, #3016 | Users demand explicit control over conversation lifecycle — persistence, deletion, forking, compression |
| **IDE Parity & Integration** | #3033 (MCP), #2593 (`/insight`), #2548 (`/skills`), #2951 (config path) | VS Code companion must reach CLI feature completeness |
| **Observability & Diagnostics** | #2916 (context API), #3018 (`/doctor` tool), #3027 (empty insights) | Need runtime introspection for debugging environment issues |
| **Enterprise/Cloud Deployability** | #2951 (env-configurable paths), #2490 (Coding Plan auth) | Supporting mounted storage, SSO, and organizational deployments |

---

## Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Context Window Management** | 🔥🔥🔥🔥🔥 | #2621, #3017, #3006, #2721 — users hit limits, can't clear context, lose file references after compression; P0 features in flight |
| **VS Code Extension Stability** | 🔥🔥🔥🔥 | #2959 (blank screen, now fixed), #3033 (MCP broken), #2395 (input lag), #3007 (flickering) — IDE experience lagging CLI |
| **Permission/Command Handling** | 🔥🔥🔥 | #2850 (env prefixes), #2955 (truncated commands), #1104 (git dependency) — friction in automated workflows |
| **System Prompt Reliability** | 🔥🔥🔥 | #2973, #3019 (subagent skill triggers), #2952 (agent .md files ignored) — agent behavior unpredictability |
| **SDK Error Handling** | 🔥🔥 | #3014 — cannot distinguish SDK internal errors from LLM output; blocks programmatic use |
| **Onboarding/Configuration** | 🔥🔥 | #3021 (install script error), #61 (FAQ maintenance), #2951 (path flexibility) — first-run friction |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*