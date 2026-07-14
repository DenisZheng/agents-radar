# OpenClaw Ecosystem Digest 2026-07-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-14 01:20 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

Here is the OpenClaw project digest for 2026-07-14.

---

### OpenClaw Project Digest — 2026-07-14

#### 1. Today's Overview

The OpenClaw project is exhibiting **very high activity**, with 500 issues and 500 pull requests updated in the last 24 hours. While the sheer volume and a handful of `P0` regressions indicate significant pressure on maintainers, the project is also seeing robust progress. Two new releases (`v2026.7.1` and `v2026.7.1-beta.6`) shipped, and many critical bug fixes are ready for review. The community remains highly engaged, particularly around long-standing feature requests and severe regressions.

#### 2. Releases

Two new versions were released:
- **`v2026.7.1`** and **`v2026.7.1-beta.6`** (identical changelog)

**Highlights:**
- **New Models & Providers:** Added support for Featherless, Claude Sonnet 5, Mythos 5, Meta Muse Spark 1.1, and a new `ClawRouter`.
- **Default Model Change:** `GPT-5.6` is now the default setup model.
- **Reasoning Modes:** New `/think` commands are now available: `ultra` for Sol and Terra models, and `max` for Luna models.
- **Configuration:** The system now honors `Z.AI max` setting and refreshes model availability after OAuth authentication.

**Migration Note:** Users relying on the previous default model should review their configuration after updating, as the default has changed to `GPT-5.6`.

#### 3. Project Progress

Several important fixes and features were merged or have made significant progress:

- **Infrastructure Stability:** Major work was completed to fix a critical regression in the CLI wizard (`#103290`, merged). The fix makes failed Hermes imports safely retryable, preventing users from getting stuck after a failed setup.
- **Code Quality:** A large refactoring effort is underway. PR `#106939` consolidates streaming fallbacks into a deprecation module, while issue `#106555` (closed) outlines a plan to break up the 4,000+ line `chat.send` handler. Multiple PRs (e.g., `#106962`) are focused on speeding up test suites.
- **Bug Fixes in Review:** Several high-impact fixes are ready for maintainer review:
    - **Session Initialization:** PR `#101920` provides a self-healing mechanism for the "reply session initialization conflicted" error, a major source of session-wedging bugs.
    - **Channel Stability:** PRs `#106471` (Signal) and `#106506` (Reef) fix WebSocket handshake timeouts that could cause connections to hang indefinitely.
    - **Data Integrity:** PR `#106940` hides internal transport metadata from memory recall, preventing contamination of agent context.

#### 4. Community Hot Topics

The most active discussions highlight a mix of persistent feature gaps and acute regressions.

- **#75 [Linux/Windows Clawdbot Apps](openclaw/openclaw Issue #75)** (112 comments, 81 👍)
    - **Analysis:** This is a long-standing, high-demand request for desktop apps on non-Apple platforms. The high comment and reaction count confirms this is a major barrier to adoption for Windows and Linux users. It remains open with no clear resolution path.

- **#7707 [Memory Trust Tagging by Source](openclaw/openclaw Issue #7707)** (18 comments, 0 👍)
    - **Analysis:** This is a sophisticated security-focused feature request aimed at preventing "memory poisoning." While it has zero upvotes, the detailed discussion suggests deep interest from a security-conscious segment of the user base regarding agent safety.

- **#104721 [All tool results return literal "(see attached image)" string](openclaw/openclaw Issue #104721)** (16 comments, 1 👍) `P0`
    - **Analysis:** A `P0` regression that completely breaks tool execution, replacing actual output with a placeholder. This is causing frantic discussion as it blocks core agent functionality. It is clearly a top-priority issue for the team.

- **#6615 [Denylist support for exec-approvals](openclaw/openclaw Issue #6615)** (7 comments, 7 👍)
    - **Analysis:** A high-signal security request for an "allow everything except X" policy for command execution. This is a direct response to user needs for granular control over agent behavior without constant prompting.

#### 5. Bugs & Stability

The project is dealing with a surge of `P0` and `P1` regressions, many of which are session-state and data-loss related.

| Issue | Severity | Summary | Fix Status |
| :--- | :--- | :--- | :--- |
| [#104721](openclaw/openclaw Issue #104721) | **P0** | All tool calls return "(see attached image)" placeholder. | Open, no fix PR yet. |
| [#103076](openclaw/openclaw Issue #103076) | **P0** | Legacy-state migration blocks gateway startup (multiple sources). | Open, acknowledged as a blocker. |
| [#101290](openclaw/openclaw Issue #101290) | **P0** | `openclaw.sqlite` corruption due to CLI preflight checks. | Open, need to reproduce. |
| [#102020](openclaw/openclaw Issue #102020) | **Bug** | Second message in a session fails ("session initialization conflicted"). | **Has fix PR** (#101920). |
| [#100121](openclaw/openclaw Issue #100121) | **P1** | `exec` tool failures suppress model response, showing "(see attached image)". | Open, root cause analysis complete. |
| [#90944](openclaw/openclaw Issue #90944) | **P1** | Subagent reply not delivered, user gets raw summary instead. | Open, linked PR open. |
| [#92769](openclaw/openclaw Issue #92769) | **P1** | Reasoning fields dropped from MiniMax M3 model history. | Open, labeled as a regression. |
| [#106914](openclaw/openclaw Issue #106914) | **P2** | `models list` command crashes after v2026.7.1 update. | **Closed as fixed** (fix was in the release). |

#### 6. Feature Requests & Roadmap Signals

The community is pushing for improved **security, cross-platform support, and observability**.

- **High Likelihood for Next Version:**
    - **Memory Trust Tagging (#7707):** Security is a growing theme. This could be bundled with other memory improvements.
    - **Dynamic Model Discovery (#10687):** As model catalogues grow, static lists become a scalability bottleneck. This is increasingly critical for providers like OpenRouter.
    - **Configurable Model Fallback on Context Exceeded (#9986):** A clear pain point that directly affects usability. This is a natural extension of the existing fallback system.

- **Long-term Roadmap Signals:**
    - **Linux/Windows Desktop Apps (#75):** The highest-voted issue ever. Platform support is inevitable but requires significant engineering.
    - **Filesystem Sandboxing (#7722):** A companion to the exec-approvals feature, indicating a push towards "least privilege" agent configurations.
    - **Voice & Streaming:** PRs for TTS streaming (#8355) and fix for Google Meet audio (#106474) show investment in real-time voice interactions is ongoing.

#### 7. User Feedback Summary

- **Dissatisfaction (Pain Points):**
    - **Regressions are painful:** Multiple reports of "previously working" features breaking (e.g., #104721, #92769) cause significant user frustration and erode trust in the update process.
    - **Session reliability is fragile:** The recurring "session initialization conflicted" error (#102020) is a major source of friction. Users report losing entire conversations or getting stuck in broken states.
    - **Poor error messages:** The "(see attached image)" placeholder (#100121) and the generic "context overflow" message (#9409) leave users blind to what went wrong.

- **Satisfaction (Use Cases and Wins):**
    - **Model flexibility is highly valued:** The new `/think` commands and `GPT-5.6` default are designed to improve performance, which is a direct response to user needs.
    - **Security-conscious users are engaged:** The detailed feature requests around exec-approvals (#6615) and memory tagging (#7707) show a sophisticated community actively trying to make agents safer.
    - **Active community contribution:** The high number of well-documented bug reports and fix PRs from users (e.g., `hugenshen`, `nicknmorty`) indicates a healthy and capable contributor base.

#### 8. Backlog Watch

Several important issues, some dating back months, are stuck in the review/decision phase.

- **[#75] Linux/Windows Clawdbot Apps** (Created: 2026-01-01): The top community request. Gains no traction despite massive interest. Needs a product decision.
- **[#7707] Memory Trust Tagging by Source** (Created: 2026-02-03) & **[#7722] Filesystem Sandboxing** (Created: 2026-02-03): Two crucial security features that have been waiting for a maintainer review and product decision for over five months. Lack of progress is a potential risk for enterprise adoption.
- **[#75767] Gateway Restart Hang on macOS with SMB Volumes** (Created: 2026-05-01): A `P2` reliability issue that can lock users out of their gateway after a restart. Stalled due to a need for live reproduction.
- **[#106914] `models list` Crash** (Created: 2026-07-13): A `P2` regression introduced in the latest release. While the fix is closed, the fact a crash in a core command was shipped underscores the need for more robust release testing.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the July 14, 2026 community digests.

---

### Cross-Project Comparison Report: AI Agent Ecosystem
**Date:** 2026-07-14 | **Source:** Community Digest Summaries

#### 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is characterized by **high velocity, intense competition, and a focus on stability over novelty**. On July 14, the landscape showed a clear bifurcation: large, established projects (OpenClaw, ZeroClaw, IronClaw) are grappling with scale-related regressions and "bug bashes," while smaller or more focused projects (NanoBot, PicoClaw) are pushing targeted feature integrations. A universal theme is the **pain of rapid iteration**, with post-release regressions causing significant community frustration, particularly in tool execution reliability and session state management. Security is emerging as a top-tier concern, with multiple projects implementing audit trails, approval flow hardening, and dependency modernization.

#### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status (24h) | Health Score | Key Signal |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500* | 500* | ✅ **Released (v2026.7.1)** | **Stable (High Stress)** | Major release with `P0` regressions |
| **ZeroClaw** | 50 | 50 | ⏸ None | **Stable (High Stress)** | Bug bash + architectural RFCs in progress |
| **IronClaw** | 34 | 50 | ⏸ None (Preparing) | **Iterating** | NEA-25 architectural overhaul |
| **CoPaw** | 50 | 50 | ✅ **Released (v2.0.0.post1)** | **Stable (High Stress)** | Critical tool-call pairing failures |
| **NanoBot** | 13 | 45 | ⏸ None | **Iterating (Healthy)** | Strong, focused maintenance phase |
| **PicoClaw** | 4 | 5 | ⏸ None | **Healthy (Low Volume)** | Targeted, community-driven |
| **LobsterAI** | 0 | 21 | ⏸ None | **Stable (Sprint Phase)** | Heavy focus on build infrastructure |
| **NullClaw** | 0 | 13 | ⏸ None | **Stabilizing** | All PRs open, no new releases |
| **NanoClaw** | 3 | 33 | ⏸ None | **Iterating (Healthy)** | Major security issues closed |
| **Moltis** | 0 | 1 | ⏸ None | **Low Activity** | Single fix PR in review |
| **TinyClaw** | 0 | 0 | ⏸ None | **Dormant** | No activity |
| **ZeptoClaw** | 0 | 0 | ⏸ None | **Dormant** | No activity |

*Note: OpenClaw's precise counts were not provided, but described as "500 issues and 500 PRs updated."

#### 3. OpenClaw's Position

OpenClaw is the **largest and most established project** in this cohort, operating at a scale (500+ issues/PRs) that dwarfs even its closest competitors (ZeroClaw, IronClaw at ~50). Its advantages are clear:

- **Largest Feature Surface:** It ships the broadest range of new models, providers, and interaction modes (e.g., `/think` commands, `ClawRouter`) in a single release.
- **Highest Community Engagement:** It has the most active and sophisticated user base, as evidenced by complex feature requests like **Memory Trust Tagging (#7707)** and **Exec-Approval Denylists (#6615)**.
- **Reference Implementation Status:** It is explicitly the "core reference" project, positioning it as the canonical source for the ecosystem's architectural decisions.

**Key Differences from Peers:**
- **Reactive vs. Proactive Security:** While **NanoClaw** recently closed two CVEs (MCP approval smuggling), OpenClaw's security features (#7707, #6615) are still in the feature-request phase, suggesting a more preemptive but slower security posture.
- **Platform Support Gap:** OpenClaw's community demands for **Linux/Windows desktop apps (#75)** are unmatched by its peers. ZeroClaw is actively rolling out macOS CI (#9014), while IronClaw focuses on Matrix support—neither addresses the multi-platform desktop gap.
- **Regression Volume:** The sheer number of `P0` bugs in a single release cycle (e.g., #104721, #103076) indicates that OpenClaw's testing infrastructure may be straining under its own complexity, a problem less pronounced in smaller projects like **PicoClaw** or **NanoBot**.

#### 4. Shared Technical Focus Areas

Several technical requirements are emerging across multiple projects simultaneously, indicating shared pain points in the architecture of personal AI agents.

| Requirement | Projects Involved | Specifics |
| :--- | :--- | :--- |
| **Reliable Tool Execution** | OpenClaw, CoPaw, IronClaw, PicoClaw | Tool-call pairing errors (`#104721`), missing function signatures (`#3230`), and excessive tool invocations (`#6046`) are a cross-cutting crisis. |
| **Session & State Integrity** | OpenClaw, ZeroClaw, IronClaw, NanoBot | "Session initialization conflicted" errors, stale caches, and silent state drops are the #1 source of user frustration across all large projects. |
| **Security & Trust Boundaries** | OpenClaw, NanoClaw, ZeroClaw, IronClaw | MCP approval flow hardening (NanoClaw #2827), exec-approval denylists (OpenClaw #6615), and memory content scanning (ZeroClaw #8984) are all being built. |
| **Infrastructure & Build Reliability** | LobsterAI, ZeroClaw, PicoClaw, CoPaw | Windows signing, macOS notarization, tar extraction fallbacks, and dependency bumps are consuming significant engineering time, indicating a maturing of deployment expectations. |
| **Provider & Model Flexibility** | OpenClaw, ZeroClaw, NanoClaw, PicoClaw | Support for Anthropic caching, dynamic model discovery, and provider-agnostic memory is a shared priority for reducing API costs and complexity. |
| **Cross-Platform / Desktop Support** | OpenClaw, ZeroClaw, LobsterAI | Windows/Linux desktop apps are the most requested feature (OpenClaw #75), while ZeroClaw and LobsterAI are actively improving macOS and Windows installer UX. |

#### 5. Differentiation Analysis

While the ecosystem shares many pain points, the projects are carving distinct identities:

- **OpenClaw (The Reference Platform):** Aims to be the **most comprehensive** system. High risk, high reward. Focus on broad model support, rich feature surface, and community standards. Suffers from growing pains of its own success.
- **NanoBot (The Workflow Integrator):** Strong focus on **channel integrations** (Telegram, Discord, Feishu) and **Dream (memory) workflows**. Appears to be optimizing for developer productivity and feature velocity over raw stability.
- **ZeroClaw (The Structured Automation Engine):** Uniquely investing in a **SOP (Standard Operating Procedure) control plane** and **WASM channel plugins**. Targets a more deterministic, enterprise-style automation use case compared to general-purpose chat agents.
- **IronClaw (The Enterprise Extension Hub):** Driving a **unified extension model (NEA-25)** and heavy bug bash. Focus on Slack/GitHub/Gmail integrations. The emphasis on "bug bash" implies a quality gate before a major release (v0.29.1).
- **NanoClaw (The Security-Focused Fork):** Rapidly closed two CVEs in the approval flow. Its focus on **multi-provider persistent memory** and **Dial channel (SMS/voice)** suggests a niche in building secure, autonomous agents. Its security response time is best-in-class.
- **PicoClaw (The Lightweight Companion):** Mature but low-volume. Community-driven focus on **vodozemac replacement** (security) and **Anthropic caching** (cost). Serves as a "light" alternative for users who find OpenClaw too complex.

#### 6. Community Momentum & Maturity

Based on activity volume, release cadence, and bug severity, the projects can be tiered:

- **High Velocity / High Stress (Tier 1):** **OpenClaw, ZeroClaw, CoPaw, IronClaw.** These projects are shipping new features and releases, but are also experiencing high-severity regressions that erode user trust. They are innovating but paying the tax of complexity.
- **Iterative / Healthy (Tier 2):** **NanoBot, NanoClaw, LobsterAI.** These projects show strong, focused activity with a lower severity of regressions. They are making consistent progress on infrastructure and features without the same level of public backlash.
- **Stabilizing / Low Activity (Tier 3):** **NullClaw, PicoClaw, Moltis, TinyClaw, ZeptoClaw.** These projects have low to moderate activity. They are either in a maintenance phase (NullClaw, Moltis), are "niche" with a smaller but loyal community (PicoClaw), or are effectively dormant (TinyClaw, ZeptoClaw).

**Key Takeaways for Decision-Makers:**
- **For a stable, reference implementation:** **OpenClaw** is the standard, but expect post-release bumps.
- **For a specific, low-regret integration (e.g., Telegram):** **NanoBot** is showing strong momentum.
- **For enterprise automation with SOP workflows:** **ZeroClaw** is the leading candidate.
- **For maximum security in approval flows:** **NanoClaw** has the best track record today.

#### 7. Trend Signals

The aggregated feedback from the community digests reveals several key industry trends for AI agent developers:

1.  **The "Tool-Use Reliability" Crisis is Real:** The most common and severe bug across all projects is the broken `tool_call` / `tool_result` pairing. This is the single biggest barrier to agent autonomy. **User expectation:** Agents must be able to execute tools correctly every time.

2.  **Security is the New Moat:** The demand for audit trails, memory content scanning, approval hardening, and dependency modernization (e.g., `libolm` → `vodozemac`) is not a "nice-to-have" but a blocker for production/enterprise deployment. **Value for developers:** Investing in security primitives (MCP approval, exec denylists) early is a competitive advantage.

3.  **Desktop is a Battleground:** The failure to support Windows/Linux desktops (OpenClaw #75) is the single largest feature gap. Projects that solve cross-platform desktop deployment effectively (like LobsterAI's Windows installer fixes) will unlock a significantly larger user base. **Value for developers:** A native desktop installer is a prerequisite for mainstream adoption.

4.  **The "Silent Failure" is the Worst Failure:** Bugs where the agent appears to work but silently drops messages (NanoClaw #2995), caches the wrong response (IronClaw #6050), or hallucinates data (Hermes #63860) cause the highest user dissatisfaction. **Value for developers:** Instrumentation and observability (e.g., audit tools, structured logging) are as important as the features themselves.

5.  **Smaller, Cheaper, Local:** Requests for "local-first modes" (ZeroClaw #5287) and configurable context limits (NullClaw #961) show a clear market pressure to **reduce API costs** and **support offline/small models**. This is driven by both cost-conscious users and privacy concerns.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — July 14, 2026

## 1. Today's Overview

NanoBot continues to show strong development momentum with **45 PRs** and **13 issues** updated in the last 24 hours. The project is in a **high-velocity maintenance and feature phase**, with 18 PRs merged/closed and 11 issues resolved. No new releases were published today. Key areas of activity include heartbeat system refinements, Dream session bug fixes, Windows encoding support, Telegram streaming improvements, and a major documentation reorganization. The maintainer team (notably chengyongru, adabarbulescu, and axelray-dev) is actively driving multiple concurrent feature branches across channels, tools, and WebUI.

## 2. Releases

**No new releases today.** The latest release remains the prior published version.

---

## 3. Project Progress

**18 PRs merged/closed today**, highlighting several areas of advancement:

### Features & Enhancements
- **PR #4320** (merged): New `tools.audit` configuration and `AuditTool` for agent action observability — a significant observability infrastructure addition.
- **PR #4914** (merged): Brazilian Portuguese (pt-BR) locale added to WebUI — expanding localization coverage.
- **PR #4620** (open, active): New `nanobot heartbeat trigger` CLI command to support manual heartbeat triggering with dry-run and JSON output.

### Documentation
- **PR #4913** (merged): README and release archive update through July 12.
- **PR #4912** (merged): Removed broken Star History embed after GitHub API restrictions.
- **PR #4916** (open): Full documentation reorganization around user workflows, with WebUI as primary setup path.

### Bug Fixes
- **PR #4909** (merged): Dream memory diff now ignores line-ending-only differences (CRLF/LF).
- **PR #4915** (open): Heartbeat evaluation made configurable, addressing regressions from migration to cron.
- **PR #4917** (open): UTF-16 decoding for Windows subprocess output in shell tool.
- **PR #4839** (open): Fix for HTML `parse_mode` handling in Telegram stream overflow chunks.

### Refactoring
- **PR #4908** (open): Major channel architecture refactor moving setup and instance ownership into channels themselves.
- **PR #4866** (open): Model presets now bound to sessions with immutable LLM runtime capture per turn.

---

## 4. Community Hot Topics

### Most Active Issue: Endless Loop Bug
- **Issue #4864** — *[bug] Endless loop for <tool_call> <function=complete_goal>* — 3 comments, opened July 9
- **Analysis:** The `complete_goal` tool enters an infinite error loop because the gateway is parsing the `recap` parameter as a bare string instead of JSON. The user identified a likely gateway regression in tool parameter serialization. This is a **production-critical bug** affecting goal completion workflows. No fix PR is yet linked.
- 🔗 [Issue #4864](https://github.com/HKUDS/nanobot/issues/4864)

### Tool Gateway Seam Proposal
- **Issue #4911** (open, new today) — *[enhancement] A guarded tool gateway seam so channels can run the agent's tools* — 0 comments
- **Analysis:** The user proposes a mechanism for channels to access agent tools (motivated by voice/real-time channel needs where an external model emits `functools` events). This signals architectural demand for tighter channel–agent integration.
- 🔗 [Issue #4911](https://github.com/HKUDS/nanobot/issues/4911)

### Stale Feature Requests Resurfacing
- **Issue #192** — *Introduce WeChat function* (from Feb 6, closed as stale)
- **Issue #1011** — *Mattermost Bot* (from Feb 22, 4 👍, closed as stale)
- **Analysis:** These long-dormant issues were touched today by maintainers (likely auto-closure or stale-bot). The Mattermost request has 4 upvotes, indicating persistent user interest in alternative chat platforms beyond Discord/Telegram/Feishu.

---

## 5. Bugs & Stability

### Critical/High Severity
| Bug | Impact | Fix PR Status |
|-----|--------|---------------|
| **#4864** — Endless loop in `complete_goal` due to parameter serialization regression | Tool execution stuck in infinite loop | ❌ No fix PR yet |
| **#4897** — Discord bot integration: bot shows online but receives no messages | Discord channel completely non-functional | ❌ Closed without fix details |
| **#4893** — `/dream-log` and `/dream-restore` show non-Dream commits | Confusing output, structural issue for Dream workflow | ❌ No fix PR yet |
| **#4894** — `prune_dream_sessions()` fails on base64-encoded filenames (introduced in cf2f5896) | Dream session pruning broken for all new sessions | ✅ **PR #4909** merged (line-ending fix for diffs, not this exact bug) |
| **#4882** — `MemoryStore.dream_content_diff()` reports empty files as changed | False positives in Dream memory diffs | ✅ **PR #4909** merged (line-ending normalization may mitigate) |

### Medium Severity
| Bug | Impact | Fix PR Status |
|-----|--------|---------------|
| **#4887** — Dev test setup fails due to missing `lark-oapi` dependency | Developer friction for Feishu tests | ❌ No fix yet |
| **#2376** — Two assistant messages at end of list causing LLM API error (closed, historical) | Already fixed | ✅ Fixed |
| **#2352** — Feishu file uploads not accessible by bot (closed, possible user config issue) | Feature not working for some users | ❌ Closed, may need docs improvement |

### Regressions
- **#4864** (parameter serialization regression): Likely introduced by recent gateway changes.
- **#4894** (Dream session filename encoding): Introduced in commit `cf2f5896`.

---

## 6. Feature Requests & Roadmap Signals

### High-Probability Next-Release Features

| Feature | Issue/PR | Probability | Rationale |
|---------|----------|-------------|-----------|
| **Audit Tool** | PR #4320 (merged) | ✅ Already merged | Ready for next release |
| **Session-bound model presets** | PR #4866 (open, p1) | 🟢 High | Core architecture change, actively developed |
| **Channel architecture refactor** | PR #4908 (open, p1) | 🟢 High | Foundation for future channel features |
| **Brazilian Portuguese locale** | PR #4914 (merged) | ✅ Already merged | Ready for next release |
| **Heartbeat trigger CLI** | PR #4620 (open) | 🟡 Medium | Addresses #3437, feature-complete |
| **WebUI session Markdown export** | PR #4587 (open, p2) | 🟡 Medium | Nice-to-have, no conflicts resolved |
| **WebUI / config.json parity** | PR #4313 (open) | 🟡 Medium | Large PR, has merge conflicts |
| **Nano Timer tool** | PR #4853 (open, p1) | 🟢 High | Small dependency-free tool |

### User-Requested Features Under Discussion
- **Guarded tool gateway for channels** (Issue #4911): Indicates growing demand for voice/real-time channel support.
- **Message output level filtering** (Issue #1500, closed but 1 👍): Users want info/warning/error verbosity control for channel output.
- **WeChat integration** (Issue #192) and **Mattermost integration** (Issue #1011): Persistent platform demand.

---

## 7. User Feedback Summary

### Pain Points (Negative/Dissatisfied)

1. **"Endless loop broke my workflow"** (Issue #4864) — A user reports `complete_goal` causing infinite looping, affecting goal completion functionality. This is the most active bug.

2. **"Discord bot shows online but never responds"** (Issue #4897) — Setup frustration; user followed all steps but bot is non-functional.

3. **"Dream tools show commits from other things"** (Issue #4893) — User confusion when Dream-specific commands return non-Dream data.

4. **"Can't see files sent via Feishu"** (Issue #2352, Chinese language) — User reports bot tries to open browser to download files instead of using API.

5. **"Test setup is broken"** (Issue #4887) — Developer friction: `uv sync --extra dev && pytest` fails on fresh clone.

### Positive Signals

- **Audit tool** (PR #4320) received no negative feedback and was merged cleanly.
- **Brazilian Portuguese locale** (PR #4914) was contributed by the community, indicating healthy international contributor engagement.
- **Documentation reorganization** (PR #4916) is underway to simplify onboarding, responding to earlier usability feedback.

---

## 8. Backlog Watch

### Stale Issues Needing Maintainer Attention

| Issue | Age | Status | Action Required |
|-------|-----|--------|-----------------|
| **#1304** — *Can't use codex* | 137 days | Closed today (likely stale-bot) | Codex integration appears abandoned; consider documenting known limitations |
| **#192** — *WeChat function* | 159 days | Closed as stale | Community interest exists (China users); roadmap decision needed |
| **#1011** — *Mattermost Bot* | 142 days | Closed as stale | 4 upvotes; moderate demand for enterprise channels |
| **#1500** — *Output mode filtering* | 132 days | Closed today | User request for verbosity control; 1 👍, but UX impact is high |
| **#1599** — *Telegram streaming* | 130 days | Still **open** with merge conflicts | **Blocked**: Needs conflict resolution; would benefit many Telegram users |
| **#4313** — *WebUI/config.json parity* | 32 days | Still **open** with merge conflicts | **Blocked**: Large PR, merge conflicts need attention |

### Critical Backlog Priority
- **PR #1599** (Telegram streaming) has been open for **130 days** with conflicts — the longest-open active feature PR. This is a high-value user-facing feature that could unlock real-time streaming for Telegram users. Requires maintainer intervention to resolve conflicts.
- **PR #4313** (WebUI parity) is 32 days old with conflicts and addresses the top WebUI usability gap.

---

*Report generated from github.com/HKUDS/nanobot activity data for 2026-07-14.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for **2026-07-14**.

---

## Hermes Agent Project Digest: 2026-07-14

### 1. Today's Overview
Activity on the Hermes Agent repository was **very high** today, with fifty issues and fifty pull requests updated in the last 24 hours. While 27 issue closures suggest maintainers are effectively clearing backlogs, the project currently faces a **high number of open pull requests (49)** and **new, severe bugs** that demand immediate attention. A significant portion of today’s activity focuses on fixing stability issues across the compute stack, including a memory-exhaustion bug in the MCP tool loop, a critical gateway crash related to tool results, and several data-corruption risks in session and transcript handling. Despite no new releases, the commit velocity indicates a major stabilization push ahead of a likely upcoming patch.

### 2. Releases
**No new releases** were published in the last 24 hours.

### 3. Project Progress
Only **one pull request** was closed or merged today (the remainder of the 50 are open). The merged item was not explicitly shown in the top 20, but the volume of open PRs (49) suggests a high volume of work in progress. Notable open PRs submitted today that indicate current development priorities include:
- **MCP Stability**: PR #64061 (`fix(mcp): materialize ResourceLink/EmbeddedResource/Audio blocks instead of dropping them`) addresses a data-loss issue for enterprise PDF workflows.
- **Security & Compliance**: PR #64062 (`fix: hashlib FIPS crash in qqbot, wecom, yuanbao_media`) fixes crashes on FIPS-enabled systems.
- **Agent Loop Logic**: PR #64058 (`fix: guard empty-response continuation to prevent hallucination`) corrects a flaw where truncated reasoning output could lead to a hallucinated continuation.

### 4. Community Hot Topics
The community is actively discussing several high-impact bugs:

- **Telegram DM Topic Mode Blocking**: Issue #63911 (`Telegram DM topic mode: root-lobby gate silently swallows kanban wake events`) has 3 comments and is a high-priority bug (P3 but flagged with `risk-session-state` and `risk-message-delivery`). The core issue is a logic gate preventing agent completions in topic mode, effectively breaking a core feature. A fix PR (#64064) was opened today to address a related Telegram 409 conflict loop.
- **Gateway OOM on MCP Timeout**: Issue #63892 (`gateway OOM: MCP poll loop mistakes a completed future's real TimeoutError for a poll timeout`) is a **P0 (Critical)** bug describing a memory leak leaking ~108MB/s of traceback data. This is the single most severe stability issue in the repo today.
- **Tool-Result Image Memory Leak**: Issue #63849 (`Tool-result images are never evicted on the OpenAI-compatible path`) reports that screenshots from tools like `browser_vision` accumulate in memory, causing local models to run out of memory (OOM). This is a major regression for users running local or memory-constrained models.
- **Dashboard Authentication Regression**: Issue #64055 (`Dashboard no longer respects auth methods`) was closed today after a user reported that self-hosted OIDC auth is broken, forcing users into Nous Portal login. The quick closure suggests a fast fix was applied.

### 5. Bugs & Stability
Today saw a cluster of severe stability and data-integrity bugs:

**Critical (P0)**:
- **Gateway OOM due to MCP Poll Spin**: Issue #63892. A `concurrent.futures.TimeoutError` is misinterpreted, causing a spin loop that leaks memory at ~108MB/s. **Status: Open, no fix PR yet.**

**High (P1)**:
- **Stale Housekeeping Response**: Issue #63860. A cached response from a "housekeeping" turn can overwrite a later, substantive tool-only turn, causing Hermes to hallucinate the wrong output. **Status: Open, flagged with `risk-session-state`.**
- **Gateway Stop/Interrupt Broken**: Issue #26813. Sending `/stop` to an active agent on Slack/Telegram feeds the command as text instead of interrupting the agent. **Status: Open (recently updated but not closed).**

**Medium (P2)**:
- **Telegram DM Topic Mode Blocking**: Issue #63911. **Fix PR #64064 opened today.**
- **Tool-Result Image Memory Leak**: Issue #63849. **Status: Open.**
- **File Not Found on Interrupt**: Issue #63069. Reading a file after a disconnect falsely reports "File not found." **Status: Open.**
- **Empty-Response Hallucination**: Issue #64058 (PR). **Fix submitted today.**

**Low (P3)**:
- **Session List Duplication**: Issue #39086. Stale UI elements bleed into new chats. **Closed/Implemented.**

### 6. Feature Requests & Roadmap Signals
The community’s feature requests today signal a need for better **operational tooling and platform integration**:

- **Fallback Chain Readiness Check**: Issue #63852 requests a native command (`hermes fallback check`) to verify the runtime usability of fallback models without running a full agent session. This is a high-utility DevOps feature likely for the next minor release.
- **Windows Terminal Modes**: PR #64066 adds "Smart," "WSL2," and "Windows Native" terminal modes to the Desktop app. This is a significant UX improvement for Windows power users and is likely to be reviewed and merged soon.
- **WhatsApp Bridge Lifecycle Events**: PR #64068 adds structured lifecycle logging for the WhatsApp bridge, responding to operator needs for easier monitoring.

### 7. User Feedback Summary
User feedback today reveals a mix of satisfaction with rapid bug-fixing and frustration with persistent, "invisible" failures:

- **Pain Points**: Users are reporting "silent" failures where the agent appears healthy but is not processing messages (Telegram topic mode, Telegram 409 retry loops). The Chinese IME issues are closed, indicating a solved pain point for CJK users. Users on Windows and Docker are facing a disproportionate number of configuration and runtime errors (e.g., #38919 CPU limitation on Intel Macs, #39185 missing CLI entry point).
- **Use Cases Emergent**: The request for dedicated video/audio block materialization in MCP (PR #64061) points to an enterprise use case for complex document processing. The OOM bug with tool-result images (#63849) highlights a deep reliance on computer-use and vision workflows that are now at risk.
- **Satisfaction**: Issues like #38935 (setting installation path) and #39187 (execute_code approval persistence) being closed as "implemented-on-main" shows the maintainers are responsive to user friction.

### 8. Backlog Watch
Several longstanding issues and PRs remain unaddressed, carrying significant risk:

- **Critical Backlog Item**: **Issue #26813 (`Gateway: /stop and /interrupt are fed to agent as steer text`)**. This P1 bug was created on 2026-05-16, was updated today, but remains open. It is a fundamental safety and control issue for all gateway users (Slack, Telegram, Discord).
- **Stale PRs**: **PR #38784 (`fix: installer should detect a broken Node.js binary`)**. This is a 40-day-old PR that addresses a silent failure on Termux/Android. It has no comments and has not been merged, despite being a clear quality-of-life fix.
- **Unresolved Docker Persistence**: **Issue #39220 (Closed)**: While marked closed, the underlying problem of Docker container data not persisting across updates for WhatsApp users was a fundamental configuration challenge that was likely sidestepped rather than solved at the architecture level. Maintainers should ensure a more robust solution exists in the official Docker guides.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here's the project digest for **PicoClaw** (github.com/sipeed/picoclaw) for **2026-07-14**.

---

## PicoClaw Project Digest — 2026-07-14

### 1. Today's Overview
Activity is above average today, with 4 open issues and 5 pull requests updated in the last 24 hours. The project remains in a mature, active development phase, with ongoing work on core model resolution logic, Anthropic provider caching, and build/packaging hygiene. A single closed PR indicates a feature was merged, but no new release was cut today. The community is raising important technical debt and compatibility concerns, particularly around security (vodozemac) and provider-specific edge cases.

### 2. Releases
**No new releases today.** The latest release remains unreported in this window. No migration or breaking change notes available.

### 3. Project Progress
One PR was **merged/closed** today:
- **#3253 - Feat/gateway webhook** (merged) — A new feature introducing a webhook mechanism for the gateway component. This suggests backend extensibility being added, likely for event-driven integrations or notifications. The exact implementation details were not fully visible in the summary.

Additionally, one **critical bug fix** was opened and remains open:
- **#3254 - [OPEN] fix(agent): prefer verbatim model matches over provider-alias splits when resolving refs** — This PR addresses a regression in model resolution where a partial alias match could override an exact model name, leading to incorrect provider selection. This is a high-priority fix for anyone using multi-provider configurations.

### 4. Community Hot Topics
The most active discussions are centered on **dependency security** and **performance optimization**:

- **#3088 - [High Priority] Feature: use vodozemac instead of libolm** — 8 comments, 2 👍. This issue is the top community concern. The request to replace the unmaintained and insecure `libolm` with the official `vodozemac` library reflects a strong push for cryptographic robustness. This has been stale for over a month but remains labeled `priority: high`.

- **#3231 - Feature: add basicauth header for SearXNG** — 1 comment. Non-English issue requesting HTTP Basic Auth support for self-hosted SearXNG instances, indicating real-world deployment pain points with authentication.

- **#3228 - [OPEN] fix(anthropic-messages): send SystemParts as system blocks with cache_control** — Linked to #3229. This PR and its companion issue are hot because they directly impact **cost savings** for Anthropic API users. The ability to set per-block `cache_control` on system messages is a must-have for agentic workloads.

**Underlying need:** Users are demanding both security modernization (libolm → vodozemac) and API cost optimization (Anthropic caching). These are not just nice-to-haves; they are blocking production deployments.

*Links:* [#3088](https://github.com/sipeed/picoclaw/issues/3088), [#3228](https://github.com/sipeed/picoclaw/pull/3228), [#3229](https://github.com/sipeed/picoclaw/issues/3229)

### 5. Bugs & Stability
One new bug was reported today, with an active fix PR already open:

- **#3230 - [BUG] "Function call is missing thought_signature" when calling Gemini via OpenAI compat format** — **Severity: High**. This breaks tool-use workflows for Gemini users who route through Cloudflare AI Gateway. The error is triggered by an incompatibility in how `thought_signature` is expected by Gemini. *No fix PR yet listed.*

- **#3254 - [OPEN] fix(agent): prefer verbatim model matches** — **Severity: Medium/High**. Not a direct crash, but causes silent incorrect model routing for users with multiple provider aliases. A fix PR is already open by `fabdelgado`.

*Stability assessment:* Core model resolution has a known regression, and the Gemini/OpenAI compat path has a serious functional bug. These need attention before a stable release.

*Links:* [#3230](https://github.com/sipeed/picoclaw/issues/3230), [#3254](https://github.com/sipeed/picoclaw/pull/3254)

### 6. Feature Requests & Roadmap Signals
Several feature signals point to what is likely coming in the next minor release (0.4.x?):

- **vodozemac replacement ( #3088 )** — Very likely to be picked up for a security-focused release. It touches core dependencies and is a maintainer priority.
- **Anthropic rolling conversation cache breakpoints ( #3229 )** — A sophisticated proposal to cache conversation history blocks to reduce token costs. This indicates the team is thinking about **long-running agentic loops** as a first-class use case.
- **SearXNG BasicAuth ( #3231 )** — Low implementation cost, high value for self-hosters. Likely to appear in a minor release.
- **Gateway webhook (#3253, merged)** — Already landed. Expect documentation and configuration examples to follow.

**Prediction:** The next version will likely include: Anthropic system message caching, gateway webhooks, and potentially the vodozemac migration.

### 7. User Feedback Summary
Real user pain points visible from issues and PRs:

- **Dissatisfaction:** The `libolm` dependency is actively causing security anxiety. Users are demanding its removal (Issue #3088, 2 👍). The Gemini API compatibility issue ( #3230 ) is blocking users on Cloudflare AI Gateway.
- **Satisfaction/Neutral:** There is satisfaction that the maintainers are accepting infrastructure improvements (Docker base image bumps, gitignore cleanup). The community is also proactively contributing fixes for model resolution (PR #3254).
- **Use case patterns:** Users are heavily relying on **multi-provider configurations** (Anthropic + OpenAI + Gemini) and **self-hosted search** (SearXNG). The agentic workload pattern is dominant.

### 8. Backlog Watch
Items that have been stale/unanswered for an extended period and may require maintainer attention:

- **#3088 - Use vodozemac instead of libolm** — Stale for ~35 days despite `priority: high`. This is the most important item in the backlog. Risk: accumulating security debt.
- **#3192 - Bump goreleaser base images** — Stale for ~17 days. Minor, but indicative of slower-than-ideal CI/CD maintenance.
- **#3191 - Remove duplicate .gitignore entry** — Stale for ~17 days. Trivial but unmerged; low risk.
- **#3229 - Rolling conversation cache breakpoints** — Opened ~8 days ago, only 1 comment. Given its complexity, it needs maintainer review, otherwise it may stall.

**Watch items:** The vodozemac issue ( #3088 ) is the top risk item. If it goes another month without movement, the community may fork or create security advisories.

*Links:* [#3088](https://github.com/sipeed/picoclaw/issues/3088), [#3229](https://github.com/sipeed/picoclaw/issues/3229)

---

**Project Health Summary:** Active, responsive, but carrying technical debt. The vodozemac issue and Gemini compat bug are the two most critical items to resolve for maintaining trust and compatibility.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-14

## Today's Overview

NanoClaw sees **very high activity** today with **33 PRs** updated in the last 24 hours—the vast majority (27) either merged or closed—along with **3 closed issues**. No new releases were published. The project is in a **major consolidation phase**: two long-standing security vulnerabilities around `add_mcp_server` approval flow were finally closed, a new Dial SMS/voice channel was merged, and a provider-agnostic persistent memory system entered open review. The sharp spike in PR volume suggests a coordinated push toward a next release candidate after a sustained period of bug fixes and security hardening.

## Releases

**None.** No new releases were published today.

## Project Progress

The following features and fixes advanced or were merged today:

- **Dial channel adapter (SMS + AI voice calls)** — Merged (#3032, #3033): Full native adapter using `@getdial/sdk`, with outbound SMS/MMS support, inbound webhook handling, and a setup wizard entry point. Real phone number for agents.
- **Structured skill format for channel installs** — Merged (#3035): Channel install skills become single source of truth; setup wizard now applies `SKILL.md` machine-applicable steps rather than bespoke per-channel flows.
- **Scheduled tasks in templates** — Merged (#3022): Templates can define recurring cron jobs in `tasks/*.md` with optional script gates; tasks are created paused when agent groups are stamped.
- **Instance-wide default agent provider** — Merged (#2906): New `DEFAULT_AGENT_PROVIDER` env var (default `claude`) stamps provider on group creation, reducing operator overhead.
- **Provider output substitutions** — Merged (#2120): Generic `errorSubstitutions` array on `AgentProvider` allows per-provider result/error text transformation.
- **`ncl wirings create` ACL fix** — Merged (#2938): Wiring creation now delegates to canonical helper, auto-creating `agent_destinations` ACL rows.
- **Dialog cleanup & diagnostics** — Merged (#1887, #1889): Hard-fail on sqlite3 errors in cleanup scripts; respect `DO_NOT_TRACK` and skip PostHog events when curl missing.
- **Missing channel adapter retry fix** — Merged (#2996, #2226): Missing-adapter messages now route into retry path instead of being silently marked delivered; `deliver` throws `MissingChannelAdapterError`.
- **Full MCP server payload on approval card** — Merged (#2998): Security fix rendering `args` and `env` on approval cards so approver can inspect them.
- **Container shared skill symlink warning** — Merged (#3002): Warns when a real entry blocks a shared skill symlink.
- **Agent-runner batch error logging** — Merged (#2966): Logs when errored batches are acked completed.

Open PRs under active review:
- **Provider-agnostic persistent memory** (#3012, #3013): New memory tree shared across providers; Codex counterpart loads memory on session start.
- **Optional MCP tool allowlist** (#3037): Restrict invocable MCP tools via env var.
- **Current time injection** (#3036): Injects `current_time` into context header with weekday in local timestamps to fix agent day-of-week confusion.
- **Socket hardening** (#2802): Client timeout/cap and server fail-closed/frame-cap for `ncl` socket transport.

## Community Hot Topics

- **#2998 — fix(self-mod): render full MCP server payload on the approval card** ([link](https://github.com/nanocoai/nanoclaw/pull/2998))  
  *Closed, core-team.* Addresses the core security issue (#2762, #2827) where `add_mcp_server` approval cards hid runtime `args` and `env`. Fix renders the full payload so approvers see what they're approving.

- **#2995 — [bug] Outbound messages to an offline channel adapter are marked delivered without any send** ([link](https://github.com/nanocoai/nanoclaw/issues/2995))  
  *Closed.* Exactly matches the bug fixed by #2996 and #2226. User discovery of silent data loss when channel adapters are offline—high-impact UX issue.

- **#3022 — feat: support scheduled tasks in templates** ([link](https://github.com/nanocoai/nanoclaw/pull/3022))  
  *Closed, core-team.* Strong interest in cron-based agent behaviors. Addresses need for recurring autonomous agent actions without manual intervention.

- **#3012/#3013 — Persistent memory system** ([link](https://github.com/nanocoai/nanoclaw/pull/3012) & [link](https://github.com/nanocoai/nanoclaw/pull/3013))  
  *Open, core-team.* Provider-agnostic memory shared across Claude, Codex, and other providers. Large architectural change with significant community interest.

**Underlying needs:** Users are demanding two things simultaneously: (1) stronger security guarantees in agent self-modification flows, and (2) richer autonomous behavior (scheduled tasks, persistent memory, multi-provider support). The security issues highlight that trust boundaries in agent approval flows were insufficient.

## Bugs & Stability

**High severity:**
- **Offline channel adapter silent message drop** (#2995, fixed by #2996 + #2226) — **CRITICAL**. Messages to unregistered adapters were marked delivered without any send attempt. Fix merges retry path. Resolved.

**Medium severity:**
- **Agent day-of-week/time confusion** (#3036, open fix PR) — Agent frequently confuses day-of-week and hour, especially on scheduled-task turns. Fix injects `current_time` and weekday into context header. Under review.
- **`ncl wirings create` silent agent_destinations omission** (#2743, closed fix) — Wirings created via CLI silently skipped ACL row; agent sends to new chat were dropped. Fixed.
- **Cleanup script silent data loss** (#1889, closed fix) — sqlite3 failures treated as "no active sessions." Fixed with hard-fail.

**Low severity:**
- **Diagnostics opt-out gap** (#1887, closed fix) — PostHog events not respecting `DO_NOT_TRACK`. Fixed.

**Security fixes resolved today:**
- `add_mcp_server` approval smuggling (#2827, #2762) — Both closed. Hidden `args`/`env` now rendered on approval card (#2998).

## Feature Requests & Roadmap Signals

The following features are likely candidates for the next release:

1. **Provider-agnostic persistent memory** (#3012, #3013) — Strong architectural signal. Near-final, core-team authored. Likely to merge within the week.

2. **MCP tool allowlist** (#3037) — Practical security hardening. Small, clean PR with immediate operator value. Likely to merge quickly.

3. **Dial channel adapter** (#3032, #3033) — Already merged. Full production channel for SMS/voice calls.

4. **Scheduled tasks in templates** (#3022) — Already merged. Enables recurring autonomous agent behaviors.

5. **Socket hardening** (#2802) — Long-standing open PR. Security-critical for multi-tenant deployments.

**Predicted next feature focus:** The memory system (#3012/#3013) represents the largest architectural investment. Combined with scheduled tasks and multi-provider support, the project appears to be targeting **autonomous, memory-capable agents that operate across providers and channels without human supervision**.

## User Feedback Summary

**Pain points expressed via issues/PRs:**
- **Silent message loss** (offline adapters, missing ACL rows) — Most concrete complaint. Users discovering that their agents "send" messages that never arrive.
- **Approval flow opacity** — Security researchers identified that self-modification approval cards didn't show full payloads, enabling potential approval smuggling. Two CVEs-worth of issues raised and fixed.
- **Agent time confusion** — Operators with scheduled tasks report agents consistently misidentifying the day-of-week and hour, causing scheduling errors.
- **Diagnostics lack opt-out** — Users wanting privacy found PostHog telemetry hard to disable.

**Satisfaction signals:**
- Rapid closure of security issues (3 issues, 2 CVEs closed within hours of each other).
- High PR merge velocity (27 merged/closed today) indicates responsive maintainers.
- New channel adapter (Dial) and template scheduling directly address operator requests for richer agent capabilities.

## Backlog Watch

- **#2802 — Socket hardening (client timeout/cap + server fail-closed)** ([link](https://github.com/nanocoai/nanoclaw/pull/2802))  
  *Open since 2026-06-17 (4 weeks).* Security-relevant PR for production deployments. Needs maintainer attention—no review comments visible.

- **#3036 — Current time injection** ([link](https://github.com/nanocoai/nanoclaw/pull/3036))  
  *Open since 2026-07-13 (1 day).* Fresh but directly addresses a common user complaint (agent time confusion). Should be fast-tracked.

- **Long-closed issues without response** — No issues older than 7 days remain open. The project's triage appears very responsive. No critical backlog items are languishing.

**Overall project health:** Excellent. High merge velocity, security issues closed promptly, and major architectural features (memory, templates, multi-provider) advancing in parallel. The only concern is the 4-week-old socket hardening PR (#2802) which remains unreviewed despite being security-sensitive.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Good. Here is the structured project digest for NullClaw, generated from the provided GitHub data for the date 2026-07-14.

---

### NullClaw Project Digest – 2026-07-14

This digest reflects the state of the `nullclaw/nullclaw` repository as of the 24-hour window ending on 2026-07-14.

---

#### 1. Today's Overview

Today’s activity is focused entirely on **quality assurance and stabilization**, with no new releases or newly closed pull requests. The project saw significant maintenance activity with 13 PRs updated, all of which remain in an open state. These PRs address a wide range of critical areas, including core agent interactions (REPL input handling, tool approval flows), platform-specific fixes (Android, Discord), and hardening of integrations (Teams, Matrix, Weixin). While no new features are being launched today, the breadth of fixes indicates a strong push to polish the system before a potential next release.

#### 2. Releases

**None.** No new releases were created in the last 24 hours.

#### 3. Project Progress

No pull requests were merged or closed in the last 24 hours. However, 13 PRs were actively updated, signaling ongoing work and review. Key areas of progress include:

- **Agent CLI & UX:** PR #970 introduces a raw-mode line editor for the interactive REPL, and PR #969 implements a structured, two-turn flow for tool approval requests.
- **Infrastructure & Reliability:** PR #968 fixes Matrix sync state persistence across restarts. PR #954 resolves a use-after-free bug in cron job message delivery. PR #953 adds logic to recover closed Discord gateway sockets.
- **Platform Support:** PR #966 provides a secure buffered curl fallback for HTTP issues on Android (Termux).
- **Configuration & Control:** PR #961 adds configurable memory recall behavior (`auto_recall`, `recall_limit`, `max_context_bytes`), giving users more control over the agent’s memory usage.

#### 4. Community Hot Topics

While no new issues were reported today, several long-standing PRs continue to drive discussion and iteration:

- **[#964: Enable native API-level tool calls during streaming](https://github.com/nullclaw/nullclaw/pull/964)**
  - Created by `mtdphn`, this PR addresses a significant limitation where streaming requests with API-level tools were not being executed by the Agent. The core need is to allow direct tool execution within a streaming response, a crucial feature for real-time, interactive agent behaviors.

- **[#961: feat(memory): add configurable auto-recall, recall_limit, max_context_bytes](https://github.com/nullclaw/nullclaw/pull/961)**
  - The high number of PRs touching memory (see also #968) suggests memory management is a central community concern. This PR directly addresses user desire for finer control over memory behavior to manage token usage and relevance.

#### 5. Bugs & Stability

No new bugs were reported in the last 24 hours. The work is focused on resolving previously identified issues, which include:

| Issue | Severity | Status |
| :--- | :--- | :--- |
| **Agent REPL prints control characters** (PR #970) | Medium | Fix PR in review |
| **Cron jobs fail to deliver messages** (use-after-free) (PR #954) | High | Fix PR in review |
| **Discord gateway disconnection** (PR #953) | Medium | Fix PR in review |
| **Matrix sync state reset on restart** (PR #968) | High | Fix PR in review |
| **HTTP NameServerFailure on Android** (PR #966) | Medium | Fix PR in review |
| **MS Teams 403 error on bot auth** (PR #958) | Medium | Fix PR in review |

All identified bugs currently have open pull requests actively attempting to resolve them.

#### 6. Feature Requests & Roadmap Signals

The most prominent feature signals from the current PRs are:

- **Advanced Agent Control:** Users want richer interactions with the agent, including proper command-line editing (PR #970) and a structured approval process for potentially dangerous actions like shell commands (PR #969). This points towards a focus on **user safety and robust human-in-the-loop workflows**.
- **Native Provider Integration:** PR #962 documents support for a native Anthropic provider, bypassing middleware. This suggests a roadmap focused on providing first-class support for leading LLM providers with minimal configuration.
- **Configuration Granularity:** The addition of `auto_recall`, `recall_limit`, and `max_context_bytes` (PR #961) indicates a clear demand for **advanced power-user configuration** to optimize cost and performance. This is likely to be a focus in the next minor version.

**Prediction for Next Version:** A release including the memory controls from PR #961 and the agent REPL improvements from PR #970 seems highly probable, as they address core UX and user control.

#### 7. User Feedback Summary

The PRs themselves serve as direct feedback from the developer community. Key user pain points being addressed include:

- **Unreliable Service Integration:** Unacceptable behavior in core integrations like Discord (disconnections), Matrix (state loss), and Teams (auth failures) is being actively fixed.
- **Poor Terminal UX:** The lack of a proper line editor in the agent REPL (control characters being printed) is a clear usability failure being corrected (PR #970).
- **Silent Failures:** The use-after-free bug causing cron jobs to "silently fail" (PR #954) represents a high level of user dissatisfaction, as it makes the platform unreliable for scheduled tasks.
- **Platform-Specific Frustrations:** The Android HTTP bug (PR #966) shows that users are actively using the tool on diverse platforms and are encountering platform-specific blockers.

#### 8. Backlog Watch

While no issues are currently in a backlog, a pattern of long-standing PRs is notable:

- **PR #956 (CI/Docker):** A dependency bump for Alpine from 3.23 to 3.24 has been open since June 15. This is a routine security update that likely requires little review but is being blocked, potentially by CI conflicts.
- **PR #953 & #954 (Stability):** These high-impact fixes for Discord and Cron scheduling have been open since mid-June without being merged. These are critical for platform stability and should be prioritized for review and merge.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-14

## Today's Overview

IronClaw is in a period of **high development velocity**, with 50 pull requests updated in the last 24 hours and 34 issues active. The project is deeply engaged in a major architectural overhaul—the **NEA-25 unified extension model**—with multiple stacked PRs advancing through review (Train A roll-up, extension-surface discovery, unified Slack extension). A substantial **bug bash ($P1–$P3)** is underway, surface by the sheer volume of issues filed by `joe-rlo` over the past 4-5 days, indicating intensive end-to-end quality assurance targeting the WebUI, extension lifecycle, Slack/GitHub integrations, and routine automations. The maintainer team is simultaneously shipping integration harness improvements, dependency updates, and a new Matrix channel skeleton. No new releases were published today.

## Releases

No new releases in the last 24 hours. The last tracked release PR (#5598) remains open, proposing version bumps for `ironclaw_common` (0.4.2 → 0.5.0, with breaking changes), `ironclaw_skills` (0.3.0 → 0.4.0, with breaking changes), and `ironclaw` itself (0.24.0 → 0.29.1).

## Project Progress

**Merged/closed PRs today (16 total):**

- **[#5971 — fix: carry storage error cause when compaction summary persistence fails](https://github.com/nearai/ironclaw/pull/5971)** — Fixes error swallowing in `HostManagedLoopCompactionPort::persist_summary`
- **[#5957 — fix(reborn): harden OAuth and per-user extension lifecycles](https://github.com/nearai/ironclaw/pull/5957)** — Combines Slack OAuth, extension-removal cleanup, and ownership migration
- **[#6021 — build(deps): bump everything-else group with 22 updates](https://github.com/nearai/ironclaw/pull/6021)** — Dependency updates including `agent-client-protocol` from 0.10.4 to 1.2.0
- **[#6058 — build(reborn): ship extension ownership migration](https://github.com/nearai/ironclaw/pull/6058)** — Ships migration binary in Reborn Railway runtime image
- **[#6062 — feat(matrix): add Reborn channel skeleton](https://github.com/nearai/ironclaw/pull/6062)** — Initial WASM channel component for Matrix support (closed, may be superseded or withdrawn)

**Features that advanced:**
- **Extension model overhaul**: NEA-25 Train A roll-up (#6061) and stack PRs 3-5/7 (#5842, #5845, #5847) remain open — the unified extension model is the dominant architectural initiative
- **Per-user MCP registration store** (#5970, open): T1 of the MCP registration stack rebuilt on `InstallationOwner` machinery
- **Tools-capable completion nudge** (#6013): Interactive coding steering policy enhanced
- **V1-to-Reborn migration workflow** (#5936): Offline migration workflow continues maturing

## Community Hot Topics

**Most active issues:**

1. **[#5948 — GitHub extension falsely reports as activated](https://github.com/nearai/ironclaw/issues/5948)** (5 comments, P3 bug_bash) — The assistant claims the GitHub extension is "installed and configured/activated" when it is only installed. Points to a fundamental mismatch between the assistant's capability map and the actual extension state.

2. **[#6050 — "Failed to load conversation history" false banner](https://github.com/nearai/ironclaw/issues/6050)** (2 comments) — A persistent error banner appears even when the current request succeeds, undermining user trust in the UI.

3. **[#5640 — Harness gap: RecordingSecurityAuditSink missing](https://github.com/nearai/ironclaw/issues/5640)** (2 comments) — Integration harness doesn't wire `hook_security_audit_sink`, creating a parity gap between test and production environments.

4. **[#5741 — builtin.http.save fails with OutputTooLarge](https://github.com/nearai/ironclaw/issues/5741)** (2 comments) — Tool fails when saving large web pages, a regression in hosted single-tenant Reborn.

5. **[#6000 — No SECURITY.md / private reporting disabled](https://github.com/nearai/ironclaw/issues/6000)** (1 comment) — External security researcher cannot privately report a vulnerability in the Reborn runtime; no `SECURITY.md` exists and GitHub private vulnerability reporting is disabled.

**Underlying needs:** 
- Extension state reporting is unreliable—the system tells users one thing while the UI shows another
- Error banners persist after recovery, creating confusion about actual system health
- Security reporting infrastructure is absent, a potential blocker for responsible disclosure
- Integration test harness has known gaps compared to production wiring

## Bugs & Stability

**P1 Severity:**
- **[#5943 — Slack DM action posts to current channel instead of user's DMs](https://github.com/nearai/ironclaw/issues/5943)** — Direct message requests go to the shared channel. A fundamental misrouting of Slack delivery intent. *No fix PR identified.*

**P2 Severity (critical usability issues):**
- **[#5836 — Routine fails on every scheduled run with "No thread attached"](https://github.com/nearai/ironclaw/issues/5836)** — 0% success rate for a 5-minute routine; systemic scheduled run failure
- **[#5885 — Approval notification opens action without showing approval message](https://github.com/nearai/ironclaw/issues/5885)** — Users cannot approve/deny actions via notifications
- **[#5879 — Stale error banner remains visible after successful follow-up](https://github.com/nearai/ironclaw/issues/5879)** — Persists failure state even after recovery
- **[#5707 — Routine creation exposes internal implementation details](https://github.com/nearai/ironclaw/issues/5707)** — Leaks cron syntax, trigger names, internal commands to users
- **[#6048 — Agent run fails due to unavailable tool call](https://github.com/nearai/ironclaw/issues/6048)** — Model attempts to call tool not available, blocking large workspace tasks
- **[#6047 — Task messages displayed out of chronological order](https://github.com/nearai/ironclaw/issues/6047)** — Message ordering breaks conversation flow
- **[#6046 — Simple email-to-sheet triggers 124 tool invocations](https://github.com/nearai/ironclaw/issues/6046)** — Excessive tool usage degrades performance and cost
- **[#6045 — Agent diagnoses root cause instead of accomplishing user intent](https://github.com/nearai/ironclaw/issues/6045)** — Agent identifies fix but does not auto-retry trivial errors
- **[#6044 — Enter key sometimes does not submit message in WebUI](https://github.com/nearai/ironclaw/issues/6044)** — Intermittent keyboard input failure
- **[#6043 — GitHub connection flow fails with capability error instead of auth flow](https://github.com/nearai/ironclaw/issues/6043)** — Authentication flow never starts
- **[#6060 — Routine delivery target leaks across all routines](https://github.com/nearai/ironclaw/issues/6060)** — Setting one routine's delivery to Slack changes delivery for all routines on that account; a significant data leakage / configuration isolation bug

**P3 Severity:**
- [#5948](https://github.com/nearai/ironclaw/issues/5948), [#5889](https://github.com/nearai/ironclaw/issues/5889), [#6052](https://github.com/nearai/ironclaw/issues/6052), [#6051](https://github.com/nearai/ironclaw/issues/6051), [#6049](https://github.com/nearai/ironclaw/issues/6049) — Various UX issues: extensions registry slow to load, document labeling with misleading warning icons, Gmail disconnect fails with unhelpful "Validation" error, "Load older messages" button non-functional.

**Fix PRs in flight:**
- [#6064](https://github.com/nearai/ironclaw/pull/6064) — Fixes stale chat history load banner (#6050, P3)
- [#6055](https://github.com/nearai/ironclaw/pull/6055) — Adds integration tests for extension-remove channel cleanup and StaleSurface refresh pinning

## Feature Requests & Roadmap Signals

**Strong roadmap signals from merged/active PRs:**

1. **Unified Extension Model (NEA-25)** — The dominant theme. 8-PR taxonomy stack (#6061 roll-up) consolidating `slack_bot` and `slack_personal` into one `slack` extension, replacing `kind`-based identification with surface-based classification. *Likely to land in next release.*

2. **Per-user MCP Registration Store** (#5970) — T1 of the MCP registration stack progressing. *Feature parity for MCP server management.*

3. **Matrix Channel Support** (#6062) — Skeleton WASM channel for Matrix, indicating expansion beyond Slack as a supported external channel. *Early-stage, likely multiple releases away.*

4. **CI Static Pre-push Checks** (#6022) — New checks for `include_str!` path + Docker COPY coverage, hermetic environment validation. *Improving development reliability.*

5. **V1-to-Reborn Migration Workflow** (#5936) — Offline migration tooling for users upgrading from legacy v1. *High-value for enterprise users on old versions.*

**Features requested by community:**
- Private vulnerability reporting mechanism (#6000) — *Should be a quick fix (add SECURITY.md, enable reporting)*
- Ability to deactivate/reconfigure/uninstall GitHub extension (#6029) — *Lifecycle management for extensions is missing UI*
- Per-routine delivery target configuration (#6060) — *Currently global; users want independent routing per automation*

## User Feedback Summary

**Real pain points from bug bash activity (based on `joe-rlo` filings):**

| Pain Point | Frequency | Severity |
|---|---|---|
| Error state persists after recovery (stale banners, false errors) | Multiple issues (#6050, #5879, #5891) | High — undermines trust |
| Extensions report wrong status | #5948, #6043, #6049 | High — users can't trust extension state |
| Scheduled routines fail systematically | #5836 | Critical — breaks core automation promise |
| Message/task ordering is broken | #6047 | High — breaks conversation understanding |
| Agent over-engineers simple requests | #6045, #6046 | Medium — excessive tool use / inaction |
| Slack integration misrouting | #5943, #5882 | High — sending DMs to wrong channel |
| Extension lifecycle is incomplete | #6029, #5953 | Medium — no way to uninstall GitHub extension |
| Configuration leaks across routines | #6060 | Critical — security/correctness issue |

**Satisfaction signals:** The team is actively triaging and fixing these bug bash findings (#6064 addresses the stale banner), suggesting rapid response to discovered issues.

## Backlog Watch

**Issues needing maintainer attention:**

1. **[#5640 — Harness gap: RecordingSecurityAuditSink missing](https://github.com/nearai/ironclaw/issues/5640)** (created 2026-07-04, 2 comments) — Open for 10 days. Integration harness parity gap with production. No PR linked.

2. **[#5741 — builtin.http.save fails with OutputTooLarge](https://github.com/nearai/ironclaw/issues/5741)** (created 2026-07-06, 2 comments) — Open for 8 days. Tool fails on large web pages in hosted Reborn. No fix PR linked.

3. **[#6000 — No SECURITY.md / private reporting disabled](https://github.com/nearai/ironclaw/issues/6000)** (created 2026-07-11, 1 comment) — Security researcher blocked from responsible disclosure. Critical governance gap. No response from maintainers as of this digest.

**PRs needing maintainer review:**
- [#5598 — Release PR](https://github.com/nearai/ironclaw/pull/5598) — Open since July 3, proposing version bumps with breaking changes. The project is accumulating changes that should be in a release, including the entire NEA-25 stack.
- [#5936 — V1-to-Reborn migration workflow](https://github.com/nearai/ironclaw/pull/5936) — Large, complex PR (XL, risk: high) open since July 10. Needs careful review given the risk profile.

---

*Generated from GitHub data on 2026-07-14. All links point to nearai/ironclaw repository.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for **LobsterAI** on **2026-07-14**.

---

## LobsterAI Project Digest – 2026-07-14

### 1. Today's Overview
The project experienced a major burst of activity, with **21 pull requests updated** in the last 24 hours, including **19 merges/closes** and **2 still open**. This represents a significant code push, likely a coordinated stabilizing sprint. There were **no new releases** cut today, and the issue tracker shows **0 active issues**, indicating that the team is focusing tightly on closing out work rather than triaging new bugs. The activity is dominated by build reliability fixes (Windows/macOS signing, installer self-healing) and core feature refinement (notifications, streaming, follow-up queueing).

### 2. Releases
**None.** No new releases were published today.

### 3. Project Progress
Today’s 19 closed/merged PRs advanced several key areas:

- **Build & Platform Stability (High Priority):**
    - [#2327](https://github.com/netease-youdao/LobsterAI/pull/2327): Fixed Windows binary signing so that `LobsterAI.exe` is signed (not just the NSIS installer shell), preventing antivirus freezes.
    - [#2326](https://github.com/netease-youdao/LobsterAI/pull/2326): Added a self-healing mechanism for Windows installer tar extraction, falling back to `system tar.exe` with a watchdog.
    - [#2321](https://github.com/netease-youdao/LobsterAI/pull/2321): Fixed a macOS update failure (`hdiutil` error).
    - [#2323](https://github.com/netease-youdao/LobsterAI/pull/2323): Added an opt-in Windows web installer target for CDN-based downloads.
    - [#2328](https://github.com/netease-youdao/LobsterAI/pull/2328): Fixed Chrome process leaks by serializing browser launch/search operations.

- **Cowork & Event Handling:**
    - [#2324](https://github.com/netease-youdao/LobsterAI/pull/2324): Streamed ordered thinking blocks from OpenClaw, improving reasoning visibility.
    - [#2318](https://github.com/netease-youdao/LobsterAI/pull/2318): Upgraded the desktop notification system; renamed to `DesktopNotificationManager` and added foreground notification modes.
    - [#2315](https://github.com/netease-youdao/LobsterAI/pull/2315) & [#2292](https://github.com/netease-youdao/LobsterAI/pull/2292): Connected and stabilized the queued follow-up coordinator across sessions.
    - [#2300](https://github.com/netease-youdao/LobsterAI/pull/2300): Enabled file attachments in the steer queue for follow-up messages.
    - [#2320](https://github.com/netease-youdao/LobsterAI/pull/2320): Fixed recurring cron jobs fast-forwarding incorrectly, preventing missed-job replay loops.

- **UI Refinements:**
    - [#2319](https://github.com/netease-youdao/LobsterAI/pull/2319): Revamped homepage quick-action scenarios, swapping "教育学习" for "文档写作" with updated docs/pptx prompts.
    - [#2325](https://github.com/netease-youdao/LobsterAI/pull/2325): Fixed title descender clipping in badges and stabilized the cowork template.
    - [#2322](https://github.com/netease-youdao/LobsterAI/pull/2322): Optimized the file card component.

### 4. Community Hot Topics
There is very little community discussion visible today. The issue tracker has **0 open issues**, and the only open PRs are automated (dependencies). The relatively high-comment PRs are all authored by core contributors (fisherdaddy, liuzhq1986). This suggests that the project is currently in an internal stabilization phase rather than an open community feedback cycle.

### 5. Bugs & Stability
Today’s work directly addressed several critical stability bugs, all with fix PRs merged:

| Severity | Bug | Fix PR |
|---|---|---|
| **Critical** | Windows installer hangs due to unsigned `LobsterAI.exe` (antivirus freeze) | [#2327](https://github.com/netease-youdao/LobsterAI/pull/2327) |
| **Critical** | Windows installer hangs/fails if security software freezes the extractor | [#2326](https://github.com/netease-youdao/LobsterAI/pull/2326) |
| **High** | macOS update fails due to `hdiutil` error | [#2321](https://github.com/netease-youdao/LobsterAI/pull/2321) |
| **High** | Concurrent browser launches leak Chrome processes | [#2328](https://github.com/netease-youdao/LobsterAI/pull/2328) |
| **Medium** | Recurring cron jobs replay missed runs despite skip-missed setting | [#2320](https://github.com/netease-youdao/LobsterAI/pull/2320) |
| **Medium** | Stalled compaction retry never clears context maintenance | [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289) |

No new regressions or crashes were reported in the open issues today.

### 6. Feature Requests & Roadmap Signals
No new feature requests appeared in issues today. However, the merged PRs provide strong signals about the upcoming roadmap:

- **Next Version Likely Includes:**
    - A new **web installer option** for Windows (CDN-based downloads).
    - **Enhanced desktop notifications** (foreground permission/request alerts, stale alert clearing).
    - **Streamed thinking blocks** for OpenClaw/Cowork, improving transparency.
    - **Queued follow-up attachments** (files, images, text) for the steer system.
    - **Hardened Windows installer** with fallback extraction logic.

### 7. User Feedback Summary
No direct user feedback was captured in today’s issues. However, the volume of fixes around **Windows installer hangs**, **antivirus freezing**, and **macOS update failures** strongly implies that users (particularly on Windows) have been experiencing first-run installation failures and update interruptions. The self-healing installer logic (PR #2326) is a direct reaction to field pain points.

### 8. Backlog Watch
Two older PRs remain open and have not been touched recently:

- [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (dependabot, Electron bump from 40.2.1 to 43.1.0): Open since April 2. This is a major Electron version jump. While it is a dependency bump, it may have merge conflicts or breaking changes that maintainers are triaging.
- [#1323](https://github.com/netease-youdao/LobsterAI/pull/1323) (stale): Fix for cowork input-too-long error classification. Open since April 2. This is a minor but user-visible UX fix. Its staleness suggests it may have fallen off the priority list.

Both items could benefit from a maintainer check-in or explicit close.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-14

## Today's Overview
The Moltis project has experienced a quiet 24-hour period with no new issues, no new releases, and no merged or closed pull requests. A single open pull request (#1147) was updated yesterday, indicating that the project’s activity is currently focused on a backend fix rather than new feature development. With zero open issues and a low PR throughput, the project appears to be in a maintenance or low-activity phase. The lack of community engagement (no comments or reactions on the active PR) suggests that either the user base is small or most needs are currently met.

## Releases
No new releases were published today. The project has no recent release history to report.

## Project Progress
No pull requests were merged or closed in the last 24 hours. The only ongoing work is:
- **PR #1147** (open): *fix(caldav): honor time range in list_events via server-side calendar-query* — This fix addresses a bug where the `start`/`end` parameters of `list_events` were ignored, causing the tool to always fetch all events. No progress has been made toward merging.

## Community Hot Topics
No issues or pull requests today generated comments or reactions. The sole active PR has zero reactions and no discussion, indicating that the Moltis community is currently quiet. Underlying needs may emerge once this fix is deployed and users test the corrected `list_events` behavior.

## Bugs & Stability
One unmerged fix is in progress:
- **Critical Bug** (unreported in Issues, but addressed in PR #1147): The `CalDavClient::list_events` method ignored time range parameters, contradicting its documentation. This could cause performance degradation and incorrect data retrieval in calendar-related workflows.
  - **Fix PR**: #1147 (open, not yet merged)
  - **Severity**: Medium — affects correctness but not crashes.
  - **Status**: No known regressions or crashes reported.

No new bugs, crashes, or regressions were reported today.

## Feature Requests & Roadmap Signals
No new feature requests were filed today. The current focus remains on fixing existing functionality (calendar event filtering). If the CalDAV fix is merged, next logical features might include improved pagination handling or expanded calendar backend support (e.g., OAuth2, multiple calendar accounts), as these are common downstream user requests for personal AI assistants.

## User Feedback Summary
No user feedback was submitted in the last 24 hours. Historical patterns suggest that users value correct calendar and task integration. The bug fixed in PR #1147 addresses a pain point (unexpectedly large event fetches), which likely caused confusion or performance issues for users relying on time-bound queries.

## Backlog Watch
There are no long-unanswered issues (zero open issues total) and only one open PR:
- **PR #1147** — *fix(caldav): honor time range in list_events* — Awaiting maintainer review since July 11, last updated July 13. No reviewer or comments have been posted. This PR is the only pending item and requires maintainer attention to merge or provide feedback.

**Link**: [PR #1147](https://github.com/moltis-org/moltis/pull/1147)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the structured digest for CoPaw (QwenPaw) on 2026-07-14.

---

## CoPaw Project Digest — 2026-07-14

### 1. Today's Overview
The project is experiencing a **high-activity, high-stress** phase following the release of v2.0.0.post1. Activity is extremely elevated, with 50 issues and 50 PRs updated in the last 24 hours. However, the majority of this activity is reactive, driven by a surge of bug reports and regressions from the v2.0.0 rollout. A massive community effort is underway to stabilize the release, with 28 PRs merged/closed and a heavy focus on fixing tool-call pairing errors, context compression bugs, and missing dependencies. While the project is highly engaging, the current sentiment among users is one of frustration regarding stability compared to v1.x.

### 2. Releases
- **Version:** v2.0.0.post1
- **Link:** [Release v2.0.0.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post1)
- **Summary:** This is a hotfix release primarily addressing a critical crash. It includes a fix to prevent browser autofill on the provider search input and a fix for legacy session loading issues. The release is derived from the `QwenPaw` repository, indicating a branding shift from the previous `AgentScope` dataset.

### 3. Project Progress
The development team and community have been extremely productive, closing a high volume of PRs focused on the most critical stability issues in v2.0.0:
- **Tool Call Paring Fixes:** PR #5989 by tadebao implemented a multi-layer defense system against orphaned `tool_result` messages, a root cause of the pervasive `400 BadRequestError`.
- **Background Offload Hints:** PRs #6050 and #6052 by XiuShenAl and #6058 by rayrayraykk addressed the `ToolResultBlock` orphan issue in background tool hints. The latter also temporarily disables the broken offload mechanism to prevent further errors.
- **Governance Improvements:** PR #6054 by vanwaals relaxed the no-finding fallback and added a global sandbox switch to reduce low-value approval prompts.
- **Plugin & Queue Cleanup:** PR #6044 by zhijianma fixed a bug where tools registered via `register_tool` were invisible to agents at runtime. PR #6045 fixed a bug where the message queue was not being cleared when a session was deleted via the UI.

### 4. Community Hot Topics
- **Most Active: Tool Call & Context Compression Bugs**
    - **Issues:** #5961, #5960, #5986, #5962, #6006, #6034, #5947
    - **Analysis:** The most prevalent and frustrating issues revolve around `tool_call`/`tool_result` pairing errors, leading to `400 BadRequestError` or `MODEL_EXECUTION_ERROR`. Users report these errors occurring due to context compression ([#5960](https://github.com/agentscope-ai/QwenPaw/issues/5960)), scroll eviction ([#5962](https://github.com/agentscope-ai/QwenPaw/issues/5962)), and general tool hint messaging ([#5996](https://github.com/agentscope-ai/QwenPaw/issues/5996), [PR #6006](https://github.com/agentscope-ai/QwenPaw/issues/6006)). The issue is so severe that users like `xurids` are "urgently" requesting a fix.
- **Missing Features in v2.0.0:**
    - **Issue:** #5980 by jackicy9736
    - **Analysis:** A user reported that critical features from v1.1.12, including "SSH Offline" and profile management, are completely inaccessible (returning 404 errors) in the new v2.0.0 Desktop app. This indicates significant feature incompleteness in the new release.

### 5. Bugs & Stability
**Severity: Critical — Many regressions from v2.0.0 rollout**

- **Tool Call Pairing Failure:** The most dangerous and widespread bug. Context compression and scroll eviction are corrupting message sequences, causing API 400 errors. Multiple users report this crashes sessions on WeChat (#5962) and in general use (#5960, #6034).
    - **Fixes:** Multiple PRs (#5989, #6050, #6052, #5953) propose fixes, but the issue is complex and not yet fully resolved.
- **Shell Command Timeout (Hard-coded):** Runtime 2.0 has a hard-coded 60-second timeout for `execute_shell_command`, which ignores user-configured `shell_command_timeout` settings. Longer commands are silently offloaded or killed.
    - **Issue:** #5963 (by maximilize)
    - **Fixes:** No specific fix PR identified for this issue.
- **Dependency & Import Errors:**
    - Dream feature fails due to a `ModuleNotFoundError` for `agentscope.tool._builtin._scripts` (#6024, #5965).
    - Desktop python-runtime missing `agentscope` dependency causing `auto_memory` failure (#6012).
- **Governance/Approval Ignored:**
    - MCP tool allow/deny settings are ignored; agents can still call disabled tools (#5947).
    - `approval_level: OFF` configuration is ignored, and approval prompts appear on the wrong channel (e.g., desktop instead of DingTalk) (#6020).

### 6. Feature Requests & Roadmap Signals
- **Feature Request: CIDR Whitelist Support**
    - **Link:** #6048 by SongDaChuan
    - **Details:** A request to support CIDR notation in the "no-authentication host whitelist." This is a specific, well-defined improvement for enterprise network setups.
    - **Prediction:** Low effort, high value for professional users. Unlikely to be blocked by other work; could appear in the next patch release if a contributor picks it up.

### 7. User Feedback Summary
- **High Dissatisfaction:** The majority of feedback is deeply negative regarding the v2.0.0 release. Users are expressing strong frustration about the loss of stability and feature regression compared to v1.x.
    - "v2.0.0版本,越来越不稳定了,还不如V1.xxx的版本. 稳定性方面,远远不如腾讯的workbuddy" (v2.0.0 is increasingly unstable, far inferior to v1.x, and less stable than Tencent's workbuddy) — Issue #6013.
    - "升级到2.0版后出现了很多意想不到的情况" (Many unexpected situations after upgrading to v2.0) — Issue #6034.
    - A user identified as `xurids` opened a critical issue titled "消息队列功能没有了！急急急，望修复" (Message queue feature is GONE! Urgent, please fix) — Issue #6006.
- **Critical Workflow Blocked:** Features like SSH Offline and Profiles returning 404 errors (#5980) suggest that core workflows for power users are completely broken in the new version.

### 8. Backlog Watch
- **Issue #5872:** "[Bug]: Docker 容器内 browser_use 启动失败" (Browser_use fails in Docker container). This issue has been open since July 9th. The underlying dbus connection problem in containers is a known environment issue, but the lack of maintainer interaction suggests it is a low priority despite being a blocker for users relying on browser automation in Docker.
    - **Link:** [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872)
- **PR #5069:** "feat(agents): add visual model fallback for text-only primary models." This feature PR, opened over a month ago, adds a significant capability (image-to-text fallback). It is still open and has not received a review from maintainers, suggesting it is either complex or deprioritized in favor of stability fixes.
    - **Link:** [#5069](https://github.com/agentscope-ai/QwenPaw/pull/5069)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — July 14, 2026

Generated from GitHub activity at [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. Today's Overview

ZeroClaw remains at high development velocity with **50 issues and 50 PRs updated in the last 24 hours**, reflecting a mature open-source project deep in its development cycle. The project has 34 open/active issues versus 16 closed, while PRs show a notably skewed ratio of **48 open to 2 merged/closed**, suggesting a throughput bottleneck as maintainers work through a surge of submissions. The v0.8.3 milestone is in final closeout (all child trackers closed) with v0.8.4 now the active maintenance train targeting July 31. There were **no new releases** today. The project continues to balance significant new capabilities—SOP (Standard Operating Procedure) control plane, persistent memory parity, and WASM channel plugins—alongside critical bug fixes and documentation improvements.

---

## 2. Releases

**No new releases were published today.**

---

## 3. Project Progress

**Closed/Merged PRs (2 total):**
- [#9044](https://github.com/zeroclaw-labs/zeroclaw/pull/9044) — **google_workspace rejects camelCase methods** — Fix merged for the Google Workspace tool that incorrectly validated method names with only lowercase ASCII characters, breaking calls like `batchUpdate`.
- [#9040](https://github.com/zeroclaw-labs/zeroclaw/pull/9040) (fix) — **Foreground daemon startup feedback restored** — Fix merged for a regression from PR #7934 that caused blank terminal on `zeroclaw daemon` startup until `--verbose` was passed.

**Trackers reaching completion:**
- v0.8.3 release closeout: All six child trackers now closed, with only the release-validation index tracker [#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320) remaining for final publication.

**Feature advancement signals:**
- **SOP control plane** — Major progress via stacked PRs [#8979](https://github.com/zeroclaw-labs/zeroclaw/pull/8979) (channel gate prompts with checkpoint edit/revise), [#9027](https://github.com/zeroclaw-labs/zeroclaw/pull/9027) (AMQP per-message dispatch idempotency), and [#9030](https://github.com/zeroclaw-labs/zeroclaw/pull/9030) (step agent policy reassembly on nested paths).
- **WASM channel plugins** — [PR #8852](https://github.com/zeroclaw-labs/zeroclaw/pull/8852) wires the first real caller for installed WASM channel plugins, making them actually runnable.
- **Memory content scanning** — [PR #8984](https://github.com/zeroclaw-labs/zeroclaw/pull/8984) adds a content-screening layer to all memory backends with deny/blocklist patterns and scan logging.
- **Localization fixes** — [PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) adds Matrix single-message streaming for paced progress drafts.
- **macOS release CI** — [PR #9014](https://github.com/zeroclaw-labs/zeroclaw/pull/9014) adds notarization and stapling for the macOS DMG; [PR #9032](https://github.com/zeroclaw-labs/zeroclaw/pull/9032) embeds the dashboard in the macOS release sidecar.

**Closed issues (16) included** coverage enhancement tickets [#7693](https://github.com/zeroclaw-labs/zeroclaw/issues/7693), [#7690](https://github.com/zeroclaw-labs/zeroclaw/issues/7690), [#7688](https://github.com/zeroclaw-labs/zeroclaw/issues/7688), [#7694](https://github.com/zeroclaw-labs/zeroclaw/issues/7694), and several v0.8.3 tracker sub-items.

---

## 4. Community Hot Topics

### Most Active Discussions

1. **[RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** — **14 comments**, 0 👍  
   *Author: Audacity88 | Updated: 2026-07-13*  
   A governance RFC (revision 16) proposing automated work routing through label-based board management. Status: accepted and in rollout. This long-running RFC shows the project's care for maintainer workflow, but the slow adoption (now at v0.8.2 while started at 0.8.0-beta-1) suggests implementation complexity.

2. **[RFC: Prefer a lighter ZeroClaw core through external integrations](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)** — **9 comments**, 0 👍  
   *Author: ilteoood | Updated: 2026-07-13*  
   Defines boundaries for keeping the core lean by moving long-tail integrations to skills, MCP servers, and plugins. This high-risk, accepted RFC is fundamental to ZeroClaw’s architecture but has been in discussion since April—indicating careful deliberation about the core-vs-plugin boundary.

3. **[Feature: Local-First Mode for Small Models](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)** — **5 comments**, 2 👍  
   *Author: ThirDecade2020 | Updated: 2026-07-14*  
   Proposes a compact mode reducing prompt bloat, disabling permissive fallback parsing, and preventing prompt-leakage. **Most upvoted this period** (2 👍)—signals strong community desire for offline/small-model support. Created April 4—long-standing demand that has yet to land.

4. **[Bug: Docker Compose gateway loopback-bound](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)** — **3 comments**, 0 👍  
   *Author: knoppix2 | Created: 2026-07-13*  
   S1 severity (workflow blocked) bug where Docker gateway remains loopback-bound behind published port. Immediate community concern given S1 ranking.

5. **[Bug: Channel runtime commands bypass Fluent localization](https://github.com/zeroclaw-labs/zeroclaw/issues/6548)** — **3 comments**, 0 👍  
   *Author: drbparadise | Updated: 2026-07-13*  
   Hard-coded English strings in channel runtime replies when locale is non-English (e.g., zh-CN). Affects international usability.

### Community Engagement Observations

The project shows healthy but **low upvote activity** across issues (only #5287 has 2 👍). Comment activity clusters around governance/architecture documents (RFCs) and high-severity bugs. The PR list shows many needs-author-action tags (4 PRs), suggesting maintainers are actively requesting changes from contributors.

---

## 5. Bugs & Stability

### Critical/S1 (Workflow Blocked)

| Issue | Description | Severity | Has Fix PR? |
|-------|-------------|----------|-------------|
| [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) | Docker Compose gateway loopback-bound behind published port (connection refused) | S1 | No |

### High/S2 (Degraded Behavior)

| Issue | Description | Severity | Has Fix PR? |
|-------|-------------|----------|-------------|
| [#9046](https://github.com/zeroclaw-labs/zeroclaw/issues/9046) | `models_cache.json` never written—model calls break silently | S2 | No |
| [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) | Ctrl+C forces quit on Windows with exit code 1073741510 | S2 | No |

### Medium/S3 (Minor Issues)

| Issue | Description | Severity | Has Fix PR? |
|-------|-------------|----------|-------------|
| [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | Channel runtime commands bypass Fluent localization | S3 | No |
| [#8847](https://github.com/zeroclaw-labs/zeroclaw/issues/8847) | `cargo test --doc` fails due to duplicated Rustdoc flag | S3 | [PR #9032](https://github.com/zeroclaw-labs/zeroclaw/pull/9032) (CI fixes in progress) |

### Regressions

- **Daemon foreground startup** — Regression introduced in #7934, now fixed by [#9040](https://github.com/zeroclaw-labs/zeroclaw/pull/9040) (merged).
- **Google Workspace camelCase methods** — Fix merged via [#9044](https://github.com/zeroclaw-labs/zeroclaw/pull/9044).
- **Windows Ctrl+C** — [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) may be a regression or platform-specific bug.

### Bug Fix PRs Under Review

- [#9029](https://github.com/zeroclaw-labs/zeroclaw/pull/9029) — Fixes OpenAI vision capability reporting (S2, needs-author-action)
- [#8353](https://github.com/zeroclaw-labs/zeroclaw/pull/8353) — Improves error message context, removes unwraps
- [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) — Centralizes deferred MCP access policy (needs-maintainer-review)
- [#8913](https://github.com/zeroclaw-labs/zeroclaw/pull/8913) — Annotates max-iteration turn stop with visible reason (needs-maintainer-review)
- [#9030](https://github.com/zeroclaw-labs/zeroclaw/pull/9030) — Reassembles SOP step agent policy on nested path (needs-author-action)
- [#9033](https://github.com/zeroclaw-labs/zeroclaw/pull/9033) — Removes unused webview plugin capabilities (desktop security hardening)

---

## 6. Feature Requests & Roadmap Signals

### Active Features in Development

- **[SOP Milestone 5/5](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)** — Daemon-owned SOP control plane with 13 capabilities. Three stacked PRs active today (#8979, #9027, #9030). High-risk, XL-sized effort nearing substantial completion.
- **[Persistent Memory Parity](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)** — Multi-PR rollout bringing cross-session memory to parity. New RFC [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) proposes separating conversation history from long-term memory.
- **Memory Content Screening** — [PR #8984](https://github.com/zeroclaw-labs/zeroclaw/pull/8984) adds content-scanning at write/recall boundaries, addressing security requirements.
- **WASM Channel Plugin Runtime** — [PR #8852](https://github.com/zeroclaw-labs/zeroclaw/pull/8852) activates installed WASM channel plugins.
- **[Local-First Mode](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)** — Upvoted feature for compact local-model support; no PR yet but remains on radar.

### New Feature Requests (Last 24h)

- **[#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)** — RFC: Separate conversation history from agent-curated long-term memory (Audacity88, 1 comment). Proposes clean separation of autosave conversation turns from curated memory.
- **[#9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022)** — Optional Slack Events API over HTTP for scale-to-zero deploys (dakaii, 1 comment). Addresses serverless/container deployment patterns.
- **[#8998](https://github.com/zeroclaw-labs/zeroclaw/issues/8998)** — Dedicated GUI surface for channel pairing codes (JordanTheJet, 1 comment). Improves UX for channel binding workflow.
- **[#8997](https://github.com/zeroclaw-labs/zeroclaw/issues/8997)** — Warn when peer_groups.channel ref points at non-existent alias (JordanTheJet). Config validation improvement.

### Likely v0.8.4 Candidates

Based on tracker [#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357) (July 31 target) and current activity:
- SOP 5/5 completion (PRs #8979, #9027, #9030)
- Persistent memory parity (#8891 trackers)
- WASM channel plugin activation (#8852)
- macOS build pipeline hardening (#9014, #9032)
- Memory content screening (#8984)

---

## 7. User Feedback Summary

### Pain Points Expressed

- **Docker deployment friction** — [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035): "Connection refused" behind published ports in Docker Compose. Suggests documentation/Dockerfile improvements needed.
- **Windows user experience** — [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028): Ctrl+C forces process termination without graceful shutdown on Windows. Exit code 1073741510 indicates a forced termination.
- **Model cache reliability** — [#9046](https://github.com/zeroclaw-labs/zeroclaw/issues/9046): `models_cache.json` is read but never written, causing `/model` commands to silently fail. The hint to run `zeroclaw models refresh` doesn't resolve it.
- **Internationalization gaps** — [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548): Hard-coded English strings bypass Fluent localization even with non-English locale configured.
- **Missing startup feedback** — Regression (now fixed in #9040) where foreground daemon showed blank terminal, causing user confusion about whether startup succeeded.

### Positive Signals

- Active contributions from diverse community: first-time contributors ([knoppix2](https://github.com/knoppix2), [lynnkeele](https://github.com/lynnkeele), [kouhe3](https://github.com/kouhe3)) reporting bugs and feature requests.
- MCP/OpenAI provider fixes ([Papilionidae](https://github.com/Papilionidae) via [#9029](https://github.com/zeroclaw-labs/zeroclaw/pull/9029)) show responsive maintainers.
- Documentation improvements: PRs [#8990](https://github.com/zeroclaw-labs/zeroclaw/pull/8990), [#8986](https://github.com/zeroclaw-labs/zeroclaw/pull/8986), [#9041](https://github.com/zeroclaw-labs/zeroclaw/pull/9041), [#9042](https://github.com/zeroclaw-labs/zeroclaw/pull/9042), [#9050](https://github.com/zeroclaw-labs/zeroclaw/pull/9050) — maintainers actively investing in contributor experience and architecture documentation.

---

## 8. Backlog Watch

### Long-Standing Items Needing Maintainer Attention

| Item | Author | Created | Status | Days Open |
|------|--------|---------|--------|-----------|
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) Local-First Mode | ThirDecade2020 | 2026-04-04 | status:accepted, no PR | **101 days** |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) Lighter Core RFC | ilteoood | 2026-04-27 | status:accepted, in-progress | **78 days** |
| [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) Localization bypass | drbparadise | 2026-05-09 | status:accepted | **66 days** |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) Work Lanes RFC | Audacity88 | 2026-05-20 | in-progress/rollout | **55 days** |

### PRs Needing Maintainer Review

| PR | Author | Created | Label | Days Open |
|----|--------|---------|-------|-----------|
| [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) MCP access policy | wangmiao0668000666 | 2026-06-29 | needs-maintainer-review | **15 days** |
| [#8913](https://github.com/zeroclaw-labs/zeroclaw/pull/8913) Max-iteration annotation | wangmiao0668000666 | 2026-07-09 | needs-maintainer-review | **5 days** |

### Aging Trackers with No Recent Updates

- [#7685](https://github.com/zeroclaw-labs/zeroclaw/issues/7685) — Test coverage tracker (33 days, last updated today but tagged status:accepted, awaiting follow-ups)
- [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) — ADR baseline restoration (10 days, last updated today but no PRs in progress)

### Observation

The **48 open PRs vs 2 merged** ratio is the most notable health signal today. While some of these may be stacked PRs awaiting parent merges, this volume suggests a growing review debt. Several high-priority bug fixes (especially [#9029](https://github.com/zeroclaw-labs/zeroclaw/pull/9029) for OpenAI vision capability and [#9030](https://github.com/zeroclaw-labs/zeroclaw/pull/9030) for SOP nested paths) have `needs-author-action` labels, indicating maintainers have requested changes but are waiting for contributor updates.

---

*Data snapshot: 2026-07-14 23:45 UTC. Generated from GitHub API data with analysis of 50 issues and 50 PRs updated in the last 24 hours.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*