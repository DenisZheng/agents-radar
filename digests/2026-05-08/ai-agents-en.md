# OpenClaw Ecosystem Digest 2026-05-08

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-08 00:32 UTC

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

**OpenClaw Project Digest – May 8, 2026**

---

### **1. Today's Overview**
OpenClaw remains highly active with 500 issues and 500 PRs updated in the last 24 hours, reflecting sustained development momentum and community engagement. The project released version v2026.5.7, which includes critical fixes for plugin publishing reliability and ClawHub package verification. With 286 open issues and 353 open PRs, the maintainers are addressing both feature requests and stability concerns at scale.

---

### **2. Releases**

**v2026.5.7**  
- **Fixes**:  
  - Retry transient ClawHub CLI dependency install failures to improve plugin publishing resilience.  
  - Keep preview-passing plugins publishable even when one preview cell flakes.  
  - Verify every expected ClawHub package version post-publish to accelerate maintenance recovery and reduce outages.  

*No breaking changes or migration notes reported.*

---

### **3. Project Progress**

**Merged/Closed PRs (last 24h):** 147  
Key advancements include:
- **Runtime State Refactor into SQLite** (#78595): Major architectural shift moving from scattered JSON/JSONL storage to a typed SQLite model for control-plane and data-plane persistence.
- **Codex App-Server Integration** (#78733, #79134): Enables native plugin support within Codex harness threads, eliminating legacy bridge overhead.
- **Telegram Delivery Tracking** (#78261): Adds `delivery.providerAccepted` tracking for outbound messages.
- **Node 25+ Fetch Compatibility Fix** (#79136): Resolves dispatcher mismatch by preferring bundled undici 8 over Node’s built-in fetch.
- **Cron & Session Management Improvements**: Enhanced session load ledger (PR #79093), QQBot cron normalization (PR #78916), and wake protocol typing (PR #78687).

---

### **4. Community Hot Topics**

Top issues by comment activity reveal core user needs:

| Issue | Summary | Comments | 👍 |
|------|--------|----------|----|
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | Prebuilt Android APK releases requested for easier mobile deployment | 24 | 1 |
| [#78407](https://github.com/openclaw/openclaw/issues/78407) *(CLOSED)* | `openclaw doctor --fix` broke ChatGPT-OAuth users by rewriting `openai-codex/*` refs | 16 | 3 |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | Slack Block Kit support for richer agent messages | 13 | 0 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked secrets to prevent API key exposure in prompts | 12 | 4 |
| [#78402](https://github.com/openclaw/openclaw/issues/78402) *(CLOSED)* | Gateway connection drops due to event-loop starvation from stuck tool calls | 11 | 2 |

**Analysis**: Users prioritize **security** (secrets masking), **platform integration** (Slack, Android), and **reliability** (doctor migration bugs). The closed doctor regression shows rapid response but highlights risk in automated fixes.

---

### **5. Bugs & Stability**

High-severity regressions reported post-v2026.5.4–5.5:

| Bug | Impact | Status | Fix PR? |
|-----|--------|--------|---------|
| [Gateway disconnects (1000/1005/1006)](https://github.com/openclaw/openclaw/issues/78402) | Core gateway unresponsiveness under load | CLOSED | Yes |
| [Feishu session key mismatch](https://github.com/openclaw/openclaw/issues/78262) | First vs. subsequent message routing broken | CLOSED | Yes |
| [WhatsApp 408 timeouts + Linux stalls](https://github.com/openclaw/openclaw/issues/76315) | Subagent load destabilizes gateway | OPEN | No |
| [Gemini reasoning leaks in chat](https://github.com/openclaw/openclaw/issues/41494) | Internal CoT visible to end users | CLOSED | Yes |
| [Discord `message` tool fails "Unknown Channel"](https://github.com/openclaw/openclaw/issues/78572) | Regression in channel resolution | CLOSED | Yes |

**Stability Note**: Multiple regressions tied to v2026.5.4 suggest tight coupling between runtime resolution and channel plugins. Mitigations are being rolled out rapidly.

---

### **6. Feature Requests & Roadmap Signals**

Emerging themes from top feature requests:
- **Secrets Management**: AWS Secrets Manager / Vault integration (#13610), masked secrets (#10659)
- **Session Control**: Snapshots/backups (#13700), per-model usage logging (#13219)
- **Channel Enhancements**: Slack Block Kit (#12602), Vapi voice provider (#13337), iMessage auto-ack (#10737)
- **Security Profiles**: Data-centric security model proposal (#8719)

**Prediction**: Expect accelerated focus on **secure-by-default configurations** and **multi-cloud secrets handling** in next release, given high engagement on these topics.

---

### **7. User Feedback Summary**

**Pain Points**:
- Automated fixes (e.g., `doctor --fix`) cause unexpected auth breaks.
- No visibility into context window usage leads to silent state loss.
- Plugin/config changes require rebuilds in locked sandboxes.
- Inbound reactions don’t trigger agent turns despite opt-in config.

**Satisfaction Indicators**:
- Strong support (+4–7 👍) for cost controls (#38248), exec denylists (#6615), and security proposals (#8719).
- Praise for rapid regression fixes (e.g., Feishu, Bedrock).

---

### **8. Backlog Watch**

Items needing maintainer attention beyond 24h update:

| Issue/PR | Age | Status | Risk |
|--------|-----|--------|------|
| [#78595](https://github.com/openclaw/openclaw/pull/78595) (SQLite refactor) | ~3d | OPEN | High — foundational change |
| [#78051](https://github.com/openclaw/openclaw/issues/78051) (oc-path addressing) | ~2m | Unanswered | Medium — affects editor/tooling |
| [#8719](https://github.com/openclaw/openclaw/issues/8719) (Security Profile v1.1) | ~3m | Active discussion | High strategic value |
| [#76315](https://github.com/openclaw/openclaw/issues/76315) (Linux gateway instability) | ~5d | OPEN | High — impacts production deployments |

Maintainers should prioritize **SQLite adoption** and **Linux gateway hardening**, as both affect core infrastructure reliability.

--- 

*Data compiled from GitHub activity on 2026-05-08. All links verified.*

---

## Cross-Ecosystem Comparison

**Cross-Project Ecosystem Analysis: Personal AI Assistant Agents (May 8, 2026)**

---

### **1. Ecosystem Overview**

The personal AI agent open-source landscape is highly active, with projects rapidly converging on core capabilities like multi-channel messaging, tool integration, and session persistence. A clear divide exists between general-purpose frameworks (OpenClaw, Hermes Agent) and specialized tools (Moltis for voice, IronClaw for WASM). Community priorities center on reliability, security, and cross-platform support, while innovation is driven by demand for decentralized agents (SimpleX), local processing (Whisper), and enterprise-grade orchestration (Reborn stack).

---

### **2. Activity Comparison**

| Project       | Issues (24h) | PRs (24h) | Release Status        | Health Indicator                     |
|---------------|--------------|-----------|-----------------------|--------------------------------------|
| OpenClaw      | 500          | 500       | v2026.5.7 (stable)    | High activity; rapid bug fixes       |
| NanoBot       | 36           | 27        | No release            | Steady iteration; focus on stability |
| Hermes Agent  | 50           | 50        | v0.13.0 (The Tenacity)| Scaling contributors; P0 stabilization |
| PicoClaw      | 36           | 50        | Nightly only          | Rapid feature rollout                |
| NanoClaw      | 9            | 32        | No release            | Urgent A2A routing fixes             |
| NullClaw      | 6            | 7         | No release            | Niche focus; low-resource deployments|
| IronClaw      | 23           | 50        | v0.28.0 (Reborn)      | Foundational shift; high engagement  |
| LobsterAI     | 2            | 45        | v2026.5.7             | UI/UX refinement; Windows focus      |
| TinyClaw      | 0            | 0         | Stagnant              | Inactive                             |
| Moltis        | 0            | 9         | Daily builds          | Voice/multimodal innovation          |
| CoPaw         | 50           | 33        | No release            | Console-heavy; WeChat/Feishu focus   |
| ZeptoClaw     | 0            | 0         | Inactive              | No recent updates                    |
| ZeroClaw      | 50           | 50        | v0.7.5 (arch update)  | Desktop-native evolution             |

*Health Score*: OpenClaw, IronClaw, and ZeroClaw show highest maintainer responsiveness; LobsterAI and Moltis demonstrate strong user satisfaction despite fewer issues.

---

### **3. OpenClaw's Position**

**Advantages**:  
- **Scale & Velocity**: Highest issue/PR volume signals massive adoption and contributor base.  
- **Stability Focus**: Critical fixes (e.g., gateway disconnects, doctor regressions) are resolved rapidly.  
- **Architectural Leadership**: SQLite runtime refactor (#78595) sets precedent for typed persistence models.  

**Technical Differentiation**:  
- Unlike Hermes Agent’s MCP-centric approach or IronClaw’s WASM boundaries, OpenClaw prioritizes **unified control-plane/data-plane storage**, enabling consistent plugin/session management.  
- Community size dwarfs peers: 295 Hermes contributors vs. OpenClaw’s implied thousands via issue velocity.  

**Peer Gap**: Only OpenClaw offers production-grade plugin publishing with ClawHub verification—a key enterprise need.

---

### **4. Shared Technical Focus Areas**

| Requirement               | Projects Involved                          | Specific Needs                                                                 |
|---------------------------|--------------------------------------------|--------------------------------------------------------------------------------|
| **Session Integrity**     | OpenClaw, PicoClaw, NanoClaw, IronClaw     | Race conditions in history updates (#2721, #78595); persistent state across restarts |
| **Provider Reliability**  | NanoBot, NullClaw, ZeroClaw, IronClaw      | LLM fallback corruption (#3229); OAuth sync failures (#3317–#3320); custom endpoint misconfigurations |
| **Multi-Channel UX**      | CoPaw, LobsterAI, ZeroClaw                 | Message echoing (#2446); auth flow breaks (WeChat QR code entry #1878); typing indicators disabled (#895) |
| **Security Hardening**    | OpenClaw, ZeroClaw, NullClaw               | Secrets masking (#10659); sandbox boundary enforcement (#6516); data-centric profiles (#8719) |
| **Offline Capabilities**  | NanoBot, Moltis                            | Local Whisper integration (#3513, #981); Docker host mount fixes (#977)         |

---

### **5. Differentiation Analysis**

| Project       | Feature Focus                  | Target Users                | Architecture Highlights                     |
|---------------|--------------------------------|-----------------------------|---------------------------------------------|
| **OpenClaw**  | Plugin ecosystem, reliability  | Enterprise/dev teams        | SQLite-backed runtime; ClawHub package mgmt |
| **Hermes**    | MCP integration, scalability   | Researchers, multi-agent devs| Gateway IPC; Windows-first support          |
| **IronClaw**  | WASM modularity, Reborn stack  | Cloud-native deployers      | Crate-based boundaries; libSQL persistence  |
| **Moltis**    | Voice/image tools, interoperability | Privacy-focused users | Ed25519 TOFU; ACP stdio adapter             |
| **ZeroClaw**  | Desktop UX, macOS integration  | Individual power users      | Tauri bundling; permission primitives       |
| **CoPaw**     | Console management, WeChat/Feishu | Chinese-market enterprises | Batch skill ops; Vertex AI support          |

*Key Insight*: Most projects converge on **agent-to-agent (A2A) routing** and **provider abstraction**, but diverge in delivery: OpenClaw excels at server-side orchestration; Moltis and ZeroClaw target edge/desktop autonomy.

---

### **6. Community Momentum & Maturity**

- **Rapid Iteration Tier**: OpenClaw, PicoClaw, NanoClaw—high churn with daily releases or hotfix merges.  
- **Stabilization Tier**: Hermes Agent (post-v0.13.0), IronClaw (Reborn cutover), Moltis (daily builds indicate maturity).  
- **Niche/Evolving Tier**: NullClaw (low-resource focus), CoPaw (enterprise channel lock-in).  
- **At Risk**: TinyClaw, ZeptoClaw—no activity suggests abandonment or obscurity.  

*Maturity Signal*: Projects with >200 merged PRs (OpenClaw, Hermes) show structured contribution guidelines; newer entrants lack such scaffolding.

---

### **7. Trend Signals**

- **Security-by-Default**: Masked secrets (#10659), sandbox hardening (#6516), and data-centric profiles (#8719) reflect industry shift toward least-privilege agents.  
- **Decentralized Tooling**: SearXNG/Brave integrations (#5941, #10644) signal rejection of walled-garden APIs in favor of privacy-respecting backends.  
- **Desktop-Centric AI**: Tauri bundling (#6465), macOS TCC handlers (#6507), and inline tool UX (#6349) prioritize native app experiences over CLI/server models.  
- **Enterprise Orchestration**: Per-group credentials (#869), cron delivery (#6510), and vertical-slice tests (#3067) indicate maturation beyond chatbots into workflow automation.  
- **Multimodal Expansion**: Local Whisper (#981), Codex image tools (#982), and voice tracking (#78261) show convergence on unified input/output handling.  

*For Developers*: Prioritize projects with active security reviews (ZeroClaw, OpenClaw) and provider extensibility (IronClaw, Moltis) to future-proof against API drift.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – May 8, 2026**

---

### 1. **Today’s Overview**  
NanoBot remains highly active with 36 new issue and PR updates in the last 24 hours—9 issues (3 open, 6 closed) and 27 pull requests (19 open, 8 merged/closed). No new releases were published today. The project shows strong development momentum, particularly around channel reliability, agent memory consistency, and transcription improvements. Activity is evenly distributed across bug fixes, enhancements, and experimental features like SimpleX and local Whisper support.

---

### 2. **Releases**  
No new releases were published today.

---

### 3. **Project Progress**  
Eight PRs were merged or closed today, advancing core stability and feature maturity:  
- **[PR #3660](https://github.com/HKUDS/nanobot/pull/3660)**: Restores Dream cursor state after memory reload (fixes #3657).  
- **[PR #3677](https://github.com/HKUDS/nanobot/pull/3677)**: Removes HTTP compression to restore real-time SSE streaming.  
- **[PR #3678](https://github.com/HKUDS/nanobot/pull/3678)**: Ensures full tracebacks are logged in exception blocks.  
- **[PR #3672](https://github.com/HKUDS/nanobot/pull/3672)**: Enables full Ruff linting rules for better code quality enforcement.  

These merges reflect a focus on observability, streaming fidelity, and memory integrity.

---

### 4. **Community Hot Topics**  
Top contributor-driven items include:  
- **[WebSocket media drops](https://github.com/HKUDS/nanobot/issues/3674)**: Users report silent loss of file attachments over WebSocket—critical for rich messaging use cases.  
- **[Disable Dream feature request](https://github.com/HKUDS/nanobot/issues/3652)**: A recurring ask for opt-out capability suggests friction in environments where "thinking" modes cause noise or token waste.  
- **[Unified audio transcription with local Whisper](https://github.com/HKUDS/nanobot/pull/3513)**: High-priority enhancement aiming to reduce reliance on cloud APIs and improve offline usability.  

Underlying need: **reliability in message delivery**, **granular control over AI behavior**, and **offline-first capabilities**.

---

### 5. **Bugs & Stability**  
Three notable bugs resolved today:  
1. **[DeepSeek v4 Flash reasoning error](https://github.com/HKUDS/nanobot/issues/3665)**: API contract mismatch causing crashes after few queries—now fixed (likely via updated payload handling).  
2. **[WeChat inbound message drops](https://github.com/HKUDS/nanobot/issues/3684)**: Swallowed exceptions caused silent message loss; addressed in [PR #3684](https://github.com/HKUDS/nanobot/pull/3684).  
3. **[LLM timeout errors](https://github.com/HKUDS/nanobot/issues/3681)**: Frequent 300s timeouts logged but not traced until now (improved in [PR #3678](https://github.com/HKUDS/nanobot/pull/3678)).  

All three had corresponding fix PRs merged, indicating prompt response from maintainers.

---

### 6. **Feature Requests & Roadmap Signals**  
Key user-driven features gaining traction:  
- **Custom bot identity**: [Issue #3650](https://github.com/HKUDS/nanobot/issues/3650) requests per-bot name/icon configuration—low-effort win likely prioritized.  
- **SimpleX channel**: [PR #3486](https://github.com/HKUDS/nanobot/pull/3486) introduces decentralized messaging support, signaling expansion beyond WhatsApp/Meta ecosystems.  
- **Reasoning visibility toggle**: [PR #3655](https://github.com/HKUDS/nanobot/pull/3655) adds config to show/hide model thinking content during streaming.  

Prediction: Bot customization and multi-channel support will appear in v0.2.0.

---

### 7. **User Feedback Summary**  
Users highlight:  
- **Pain points**: Silent failures in WeChat/Matrix channels, WebSocket media truncation, and lack of Dream disable option.  
- **Satisfaction**: Praise for streaming fixes and CI hardening (Ruff adoption).  
- **Use cases**: Enterprise bots requiring auditability (via persistent `_last_summary`) and developers testing LLM tool-calling with custom backends ([PR #1835](https://github.com/HKUDS/nanobot/pull/1835)).

---

### 8. **Backlog Watch**  
Two long-standing items require attention:  
- **[PR #1443](https://github.com/HKUDS/nanobot/pull/1443)** (Feb 2026): Heartbeat decoupling from notifications—blocked on config schema finalization.  
- **[Issue #3604](https://github.com/HKUDS/nanobot/issues/3604)** (May 3): WhatsApp voice message ingestion broken since v0.1.5.post3—no recent progress despite being a core channel bug.

Both may impact user retention if unresolved before v0.2.0.

--- 

*Data snapshot reflects GitHub activity as of 2026-05-08.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest – May 8, 2026**

---

### **1. Today's Overview**  
Hermes Agent shows robust development activity with 50 issues and 50 PRs updated in the last 24 hours. The project released v0.13.0 ("The Tenacity Release") on May 7th, marking significant progress since v0.12.0 (864 commits, 588 merged PRs, 295 contributors). Activity remains high across core components: agent logic, gateway platforms, tooling, and configuration systems. Overall project health is strong, with sustained contributor engagement and rapid iteration cycles.

---

### **2. Releases**  
**Hermes Agent v0.13.0 (v2026.5.7)** — *The Tenacity Release*  
- **Release Date**: May 7, 2026  
- **Key Metrics Since v0.12.0**:  
  - 864 commits · 588 merged PRs · 829 files changed  
  - 128,366 insertions (+282 deletions)  
  - 282 issues closed (13 P0, 36 P1)  
  - 295 community contributors (including co-authors)  

While no explicit breaking changes are noted in the release notes, the scale of contributions suggests internal refactoring and stability improvements. Users should ensure their MCP server configs and custom provider settings align with updated normalization logic (noted in recent bug reports).

---

### **3. Project Progress**  
Today’s merged/closed PRs reflect focused stabilization and feature hardening:

| PR | Summary |
|----|--------|
| [#21558](https://github.com/NousResearch/hermes-agent/pull/21558) (CLOSED) | Fixed non-functional MCP approvals subsystem (`permissions_list_open`/`permissions_respond`) lacking gateway IPC integration. |
| [#21538](https://github.com/NousResearch/hermes-agent/pull/21538) (CLOSED) | Duplicate of cron job `enabled_toolsets` feature; merged into another ticket. |
| [#20710](https://github.com/NousResearch/hermes-agent/pull/20710) (CLOSED) | Resolved P0-level bugs: tool timeouts, JSON deserialization failures, and MCP handler change detection. |

Active development continues in Windows support (#21561), context compression (#21580), and Gemini CLI fallback routing (#21579).

---

### **4. Community Hot Topics**  
Top-discussed items reveal demand for **multi-platform resilience** and **enhanced tool autonomy**:

| Issue/PR | Comments | Reactions | Analysis |
|---------|----------|-----------|----------|
| [#7517](https://github.com/NousResearch/hermes-agent/issues/7517) — Native Multi-Agent Support | 8 | 👍7 | Critical request to support isolated agents per gateway session, mirroring OpenClaw’s architecture. Signals user need for scalable deployment. |
| [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) — Add Brave Search | 3 | 👍22 | High community interest in cost-effective search backends. Brave’s generous free tier makes this a low-hanging fruit. |
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) — Add SearXNG | 2 | 👍28 | Strong preference for self-hosted/privacy-respecting search alternatives. Aligns with FOSS ethos. |
| [#21561](https://github.com/NousResearch/hermes-agent/pull/21561) — Windows native support | — | 👍0 | Major milestone: closes end-to-end Windows gaps including UTF-8 stdio, tzdata, and crash-free startup. |

These trends indicate users prioritize **platform independence**, **privacy-conscious tooling**, and **architectural scalability**.

---

### **5. Bugs & Stability**  
Critical stability concerns emerged around **gateway concurrency** and **platform recovery**:

| Bug | Severity | Status | Fix PR |
|-----|--------|--------|--------|
| Telegram reconnection fails after 20 attempts (#17063) | P1 | OPEN | No fix yet |
| Docker env vars not forwarded to sandbox (#12534) | P2 | OPEN | No fix yet |
| Multi-platform WS share single event loop → cascading disconnects (#21026) | P2 | NEW | No fix yet |
| Kanban migration race condition on startup (#21374, #21503) | P3 | OPEN | #21395 (in review) |

Fixes are underway for image generation bugs (#21562 → #21570) and auxiliary LLM timeouts (#21569 → #21575). The Telegram platform remains a recurring pain point.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging themes suggest upcoming capabilities:

- **Dynamic model escalation**: Per-turn expert-on-demand routing (#20249)
- **Enhanced proactive interaction**: Configurable check-ins (#9645)
- **Autonomous model switching**: Expose `model_switch` as callable tool (#16525)
- **Improved web search**: Brave, SearXNG, Ollama integrations (#10644, #5941, #21508)

These align with Hermes’ evolution toward **self-managing agents** capable of adaptive resource use.

---

### **7. User Feedback Summary**  
Users report frustration with:
- **Context memory loss** during short conversations (#14420)
- **Silent config drops** (e.g., `max_output_tokens` ignored for custom providers)
- **Platform fragility** under network instability (Telegram, Feishu, WeCom)
- **Poor UX in TUI** (Shift+Enter behavior in Warp terminal)

Positive signals include appreciation for:
- Rapid bug fixes (P0 tool timeout resolution)
- Expansion of provider ecosystem (Eden AI added today)
- Documentation clarity (SearXNG env fix)

Overall sentiment leans constructive but highlights need for better observability and error resilience.

---

### **8. Backlog Watch**  
Items requiring maintainer attention beyond today’s activity:

| Issue | Age | Impact | Note |
|------|-----|--------|------|
| [#7335](https://github.com/NousResearch/hermes-agent/issues/7335) | 28 days | Strategic | >1k open issues signal triage process needed. OpenClaw comparison may inform scaling strategies. |
| [#5729](https://github.com/NousResearch/hermes-agent/issues/5729) | 31 days | Platform stability | Telegram cold-boot failures persist despite multiple PRs. Needs architectural review. |
| [#18086](https://github.com/NousResearch/hermes-agent/issues/18086) | 18 days | P1 | Telegram reconnect ladder swallowing errors — similar to #5729. |

Maintainers should prioritize issue triage and consolidate overlapping Telegram platform fixes.

--- 

*Data source: GitHub API snapshots as of 2026-05-08T00:00Z*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – May 8, 2026**

---

### **1. Today's Overview**
The project shows high development velocity with 36 new issues and 50 PR updates in the last 24 hours, indicating active maintenance and feature expansion. A nightly release (`v0.2.8-nightly.20260507`) was published, reflecting ongoing integration efforts. The volume of merged PRs suggests steady progress on stability and channel/tooling improvements, while open issues point to emerging challenges around session management, provider compatibility, and multi-user concurrency.

---

### **2. Releases**
A new nightly build was released:  
**`nightly v0.2.8-nightly.20260507.788cda5c`**  
This automated build includes all changes since `v0.2.8` and should be used cautiously due to potential instability. No stable releases were announced today.

---

### **3. Project Progress**
Key merged fixes and enhancements:
- **Go toolchain updated to 1.25.10** (PR #2821) to address critical stdlib vulnerabilities (GO-2026-4976, GO-2026-4971).
- **Non-destructive `/reset` command added** (PR #2819), allowing users to start fresh sessions without deleting Seahorse conversation history—addressing a major workflow pain point.
- **Telegram topic context preserved** in replies (PR #2791), improving forum/topic usability.
- **MCP server streamable HTTP support introduced** (PR #2811), enabling broader MCP ecosystem integration.
- **Exec tool safety guard refined** (PR #2814) to avoid false positives on relative script paths like `scripts/send_voice_reply_telegram.sh`.

Multiple other bug fixes across channels (Feishu, QQ), providers (OpenAI/Codex), and internal tooling completed.

---

### **4. Community Hot Topics**
Top discussions reflect core UX and reliability concerns:

- **LLM call retry logic missing** (Issue #629): Users report failed LLM requests hang indefinitely during long tasks, especially under unstable backends like OpenRouter. High engagement (#13 comments) suggests this is a blocker for production use.  
  🔗 https://github.com/sipeed/picoclaw/issues/629

- **Session history visibility broken** (Issue #2796): In multi-message conversations, only the latest user message appears in history—others are lost. Users expect full auditability for debugging and continuity.  
  🔗 https://github.com/sipeed/picoclaw/issues/2796

- **Tool feedback throttling too aggressive** (PR #2789): Developers want configurable animation intervals instead of hardcoded delays, especially for real-time applications.  
  🔗 https://github.com/sipeed/picoclaw/pull/2789

These topics highlight demand for robust error handling, transparent session state, and customizable UX behaviors.

---

### **5. Bugs & Stability**
Critical bugs reported today:
1. **Session race condition persists** (Issue #2721): Anthropic API returns `tool_use_id` errors due to unhandled concurrency in session history updates—marked *high priority* and unresolved despite prior attempts (#704).  
   ⚠️ Fix needed; no active PR.

2. **Multi-channel message echoing** (Issue #2446): In multi-channel setups, pending tasks cause unintended message echoes across channels—reported with 👍1.  
   ✅ Closed after fix (no public PR linked).

3. **Windows path separator crash** (Issue #2472): `list_dir` fails on Windows due to incorrect slash handling.  
   ✅ Fixed via PR #2472 (closed).

Overall stability remains strong, with most recent regressions addressed quickly.

---

### **6. Feature Requests & Roadmap Signals**
Emerging priorities from user input:
- **Automatic API key rotation ("Account Stacking")** (Issue #2408): Strong interest in resilient LLM access via key pooling. Likely to advance given its strategic value.
- **General attachment support** (Issue #348): Cross-channel file/media handling requested across Telegram/Discord. High-level roadmap item with low current traction.
- **SMTP email channel** (Issue #2465): Proposed for cron job notifications; deemed "easy" by contributor—may appear soon.

Signals suggest focus will remain on provider resilience, channel extensibility, and session integrity.

---

### **7. User Feedback Summary**
Users express frustration with:
- **Unreliable retry mechanisms** during LLM failures (“task hangs forever”).
- **Broken multi-message context** in chat history, undermining trust in long-running agents.
- **Undocumented config behaviors**, such as `PICOCLAW_GATEWAY_TOKEN` not controlling WebSocket auth (Issue #2438), leading to integration confusion.

Positive signals include appreciation for the new `/reset` command (non-destructive session control) and rapid fixes for platform-specific issues (Windows, macOS).

---

### **8. Backlog Watch**
Two high-impact items requiring maintainer attention:
- **Issue #629 (LLM retry failure)**: Open since Feb 2026, actively discussed—critical for reliability. No resolution visible.
- **Issue #2721 (session race)**: Reopened Apr 30; same root cause as older closed issue. Needs architectural review or lock redesign.

Both require deeper investigation into async session handling and LLM client resilience.

--- 

*Data snapshot as of 2026-05-08. All links reference GitHub repository.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest — May 08, 2026**

---

### **Today’s Overview**
NanoClaw shows strong development momentum with 32 pull requests updated in the last 24 hours and 9 issues actively discussed. The project is deep into resolving critical agent-to-agent (A2A) routing bugs and enhancing credential isolation, signaling a focus on reliability and multi-channel scalability. Despite no new releases, the high volume of merged fixes and feature work suggests rapid iteration cycles. Overall activity reflects healthy contributor engagement and urgent attention to stability concerns.

---

### **Releases**
No new releases were published today.

---

### **Project Progress**
**Merged/Closed PRs (today):**
- **[PR #2002](https://github.com/qwibitai/nanoclaw/pull/2002)**: Fixed origin-session threading for agent-to-agent replies, preventing misrouted messages when multiple sessions exist per agent group.
- **[PR #2277](https://github.com/qwibitai/nanoclaw/pull/2277)**: Refreshed routing context mid-query to handle follow-up messages correctly after compaction.
- **[PR #2267](https://github.com/qwibitai/nanoclaw/pull/2267)**: Ensured A2A replies route back to originating session instead of always targeting the newest active session.
- **[PR #2335](https://github.com/qwibitai/nanoclaw/pull/2335)**: Pinned pnpm to v10.33.0 in containers to match host environment and prevent build failures.
- **[PR #2336](https://github.com/qwibitai/nanoclaw/pull/2336)**: Repaired broken `claude` binary installation in Docker images for pnpm v11 compatibility.
- **[PR #2329](https://github.com/qwibitai/nanoclaw/pull/2329)**: Enforced explicit destination addressing in agent replies, fixing per-destination threading and routing drift.
- Plus several documentation updates, setup UX improvements, and skill additions (`add-mnemon`, `add-aws`, `init-onecli`, etc.).

These advances collectively improve message integrity, container reliability, and user onboarding.

---

### **Community Hot Topics**
No single issue or PR dominated discussion today. However, recurring themes include:
- **Per-group credential management** ([Issue #869](https://github.com/qwibitai/nanoclaw/issues/869)) remains open but is actively tracked—users demand granular API quota control and identity segregation across teams.
- **File attachments in web UI** ([Issue #2334](https://github.com/qwibitai/nanoclaw/issues/2334)) reflects growing expectation for rich media support in agent conversations.
Both indicate shifting user needs from lightweight chatbots toward full-fledged collaborative AI assistants.

---

### **Bugs & Stability**
**High-severity bugs reported:**
1. **[Issue #2331](https://github.com/qwibitai/nanoclaw/issues/2331)**: `findSessionByAgentGroup` routes A2A replies to wrong session in multi-channel groups — confirmed as critical; fix already delivered in [PR #2267](https://github.com/qwibitai/nanoclaw/pull/2267).
2. **[Issue #2332](https://github.com/qwibitai/nanoclaw/issues/2332)**: Similar misrouting bug affecting A2A message delivery — addressed by [PR #2329](https://github.com/qwibitai/nanoclaw/pull/2329).
3. **[Issue #2343](https://github.com/qwibitai/nanoclaw/issues/2343)**: OAuth sync failed to trigger system alerts during credentials file outage — closed today after verification.
All high-risk bugs have corresponding fixes merged, indicating responsive maintenance.

---

### **Feature Requests & Roadmap Signals**
- **Per-group credential ownership** (Issue #869) continues to be flagged as High priority and may inform future authentication architecture overhauls.
- **File attachment support** (Issue #2334) is a clear UX enhancement signal, likely preceding integration with vector stores or document analysis skills.
- **Skill extensibility for non-Claude providers** (PR #2337) suggests roadmap expansion toward multi-LLM compatibility.

These point toward a strategic pivot from Claude-centric deployment to broader ecosystem interoperability.

---

### **User Feedback Summary**
Users report frustration around:
- **Silent data loss** due to A2A misrouting (“conversations split-brain”).
- **Setup friction** without escape hatches (e.g., “Skip” option now added via [PR #2324](https://github.com/qwibitai/nanoclaw/pull/2324)).
- **Container instability** under pnpm v11 (now resolved).

Positive feedback centers on rapid bug resolution and proactive documentation updates (e.g., AWS, Signal, Gmail tools). Satisfaction appears highest among power users managing multi-agent workflows.

---

### **Backlog Watch**
- **[Issue #869](https://github.com/qwibitai/nanoclaw/issues/869)**: “Per-group credential management and interactive reauth via channels” has been open since March 9 and carries High priority. Despite ongoing interest, no active PR exists yet. Maintainers should prioritize scoping this architectural change to avoid technical debt.
- No other long-unanswered high-impact items detected today.

--- 

*Data snapshot date: 2026-05-08*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – May 8, 2026**

---

### 1. **Today’s Overview**  
NullClaw shows moderate development activity with 7 pull requests and 6 issues updated in the past 24 hours. The project continues to expand its ecosystem—particularly around agent protocols (ACP), Lark integration enhancements, and infrastructure hardening—while maintaining focus on low-resource deployment scenarios. No new releases were published today, but several high-impact features are under active review.

---

### 2. **Releases**  
No new releases have been published since the last update.

---

### 3. **Project Progress**  
Two PRs were merged/closed in the last day:  
- **[#790](https://github.com/nullclaw/nullclaw/pull/790)** – Fixed critical bug in OpenAI-compatible provider’s Responses API tool schema and null error handling (Closed).  
- **[#893](https://github.com/nullclaw/nullclaw/pull/893)** – Integrated `zig-qm-toolkit` into NullClaw via `.claude/` hooks without disrupting existing AGENTS.md or CLAUDE.md files (Closed).  

These closures indicate progress on core reliability and extensibility, particularly for tooling and developer workflows.

---

### 4. **Community Hot Topics**  
The most engaged issue is **[#871](https://github.com/nullclaw/nullclaw/issues/871)**, reporting that `web_search` lacks direct DuckDuckGo support, making it impractical on low-resource devices. With 7 comments and zero 👍, this reflects urgent usability concerns from edge-deployment users. Closely followed is **[#820](https://github.com/nullclaw/nullclaw/issues/820)** (5 comments), where users seek guidance on installing Zig natively on Debian—highlighting friction in setup documentation. Both suggest strong demand for better out-of-the-box compatibility and clearer installation paths.

---

### 5. **Bugs & Stability**  
A critical regression was reported in **[#871](https://github.com/nullclaw/nullclaw/issues/871)**: `web_search` fails to function efficiently on constrained hardware due to reliance on external APIs like Brave Search, which requires keys and adds latency/cost. This is a **high-severity usability blocker** for lightweight deployments. While no fix PR exists yet, related work may emerge from ongoing hackathon efforts (e.g., PR #[885](https://github.com/nullclaw/nullclaw/pull/885)). No crashes or security vulnerabilities were reported today.

---

### 6. **Feature Requests & Roadmap Signals**  
New feature requests emphasize configurability in Lark channel interactions:  
- **[#894](https://github.com/nullclaw/nullclaw/pull/894)** proposes allowing bots to respond to all group messages (not just @mentions).  
- **[#895](https://github.com/nullclaw/nullclaw/pull/895)** requests disabling typing placeholder/retract behavior for smoother UX.  
Both reflect growing use of NullClaw in collaborative messaging environments and signal a trend toward customizable communication behaviors. Additionally, PR #[896](https://github.com/nullclaw/nullclaw/pull/896) introduces native ACP stdio adapter, aligning with broader AI agent interoperability standards.

---

### 7. **User Feedback Summary**  
Users express frustration over **lack of native tool support** (`curl`, `wget` hardcoded; closed issue #[167](https://github.com/nullclaw/nullclaw/issues/167)) and **poor low-resource performance** when web search relies on paid APIs. Installation complexity—especially Zig on Debian ([#820](https://github.com/nullclaw/nullclaw/issues/820))—is a recurring pain point. However, contributors praise modular design (e.g., toolkit integration in #[893](https://github.com/nullclaw/nullclaw/pull/893)) and responsiveness to feedback.

---

### 8. **Backlog Watch**  
Issue **[#473](https://github.com/nullclaw/nullclaw/issues/473)** (README benchmark inaccuracies) remains unresolved since March 2026, risking user confusion about performance claims. Given recent memory/binary size changes, updating outdated benchmarks could prevent future disputes. Maintainers should prioritize this before next release to maintain credibility.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – May 8, 2026**

---

### **Today’s Overview**
The IronClaw project remains highly active with 73 repository updates in the last 24 hours—23 issues and 50 pull requests. A new release, v0.28.0, landed yesterday, marking a significant milestone in the Reborn integration effort. The development focus is squarely on stabilizing the Reborn stack through foundational crate boundaries, event substrate hardening, and production-grade capability hosting. Despite high engagement, several critical bugs related to authentication flows and LLM provider fallbacks have surfaced, indicating ongoing pressure to stabilize user-facing workflows.

---

### **Releases**
**ironclaw-v0.28.0** (May 7, 2026)  
- Introduced core Reborn integration substrate via `reborn-integration` landing on `main`.  
- Added host foundation crates: capability host, runtime dispatcher, process lifecycle, filesystem, secrets, network, and extension manifest registry.  
- Integrated WIT-compatible WASM toolchain support (`wasmtime`-based).  
- **Note**: This release represents a foundational shift toward modular, boundary-defined agent runtime architecture. No breaking changes announced, but downstream consumers should expect increased dependency on new Reborn-oriented crates.

---

### **Project Progress**
Key merged PRs advanced critical Reborn infrastructure:
- **#3376**: Automated release of v0.28.0 with API-compatible updates to `ironclaw_common`.
- **#3377**: Implemented `AgentLoopHost` facade contract (#3016), defining driver-facing ports for turn execution.
- **#3369**, **#3349**, **#3368**: Added durable conversation state and run-state backends for libSQL/PostgreSQL, enabling persistent agent sessions across restarts.
- **#3379**: Introduced durable session thread stores with transactional integrity guarantees.
- **#3382**: Hardened `AgentLoopHost` facade with bounded opaque references and scoped cursor binding.

These changes collectively establish robust persistence, scoping, and isolation semantics required for production Reborn deployment.

---

### **Community Hot Topics**
Top-engagement items reflect urgent stabilization needs:
- **#3317** / **#3319** / **#3320** (Telegram auth failures): User reports show Gmail OAuth failing when initiated from Telegram leads to deadlocked conversations—critical UX blocker. Fixed by **PR #3381**, which unified recovery paths across channel relays.
- **#3229** (LLM fallback corruption): Critical bug where restart permanently overwrites user LLM configs—now resolved in **PR #3365** via bridge gate bypass for inline-await approvals.
- **#3067** (Reborn vertical-slice tests): Highest-comment issue (28 comments); signals strong demand for end-to-end validation of Reborn public entrypoints before cutover.

Underlying need: **Trust in Reborn’s reliability for mission-critical agent workflows**.

---

### **Bugs & Stability**
New high-severity issues reported:
1. **#3229** (Critical): LLM provider config destroyed on restart—fixed in **PR #3365**.
2. **#3319** / **#3320** (P1): Auth failure cascades into conversation lockup—fixed in **PR #3381**.
3. **#3225** (Medium): Gemini tool-calling fails due to missing `thought_signature`—under investigation; fix likely tied to **#3327**.

Stability note: Nightly E2E suite failed (**#3323**) due to test cancellation—no functional regression confirmed.

---

### **Feature Requests & Roadmap Signals**
User-driven priorities emerging:
- **Multi-workspace Slack support** (**#3334**): Suggests multi-tenancy evolution beyond single-instance use.
- **LLM reasoning visibility** (**#3327**): Demand for transparent model introspection (UI/debug panel + DB persistence).
- **Extension/mission migration** (**#3287–#3290**): Indicates roadmap to fully onboard legacy surfaces onto Reborn services.

Predicted next-version focus: **Reasoning traceability**, **multi-tenant isolation**, and **Reborn vertical-test coverage completion**.

---

### **User Feedback Summary**
Real-world pain points dominate recent feedback:
- **Auth fragility**: Users report auth setup failing silently or locking conversations (**#3317–#3320**), especially cross-channel (Telegram → Gmail).
- **Data loss post-upgrade**: Upgrade from v0.26.0 → v0.27.0 caused missing chat data until manual refresh (**#3274**).
- **Tool misconfiguration**: DeepSeek and Gemini tool calls broken in fresh deployments (**#3201**, **#3225**), suggesting environment-specific initialization gaps.

Satisfaction drivers: Rapid fixes for auth flows (**PR #3381**) and proactive DB migration safeguards signal responsiveness.

---

### **Backlog Watch**
Items requiring maintainer attention:
- **#3022**: Event substrate integration tests—blocker for Reborn cutover. Overdue since Apr 28; no recent progress despite urgency.
- **#3067**: Vertical-slice test suite—critical for proving Reborn viability. High risk label indicates unresolved complexity.
- **#3259**: Crates.io publish gap (v0.25.0–0.27.0 unpushed)—impacts downstream WASM tooling users. Low activity suggests neglect.

Both backlog items are tagged `reborn` and directly affect production readiness. Maintainer bandwidth appears stretched across parallel Reborn initiatives.

--- 

*Data compiled from GitHub activity as of 2026-05-08.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – May 8, 2026**

---

### 1. Today's Overview  
LobsterAI shows strong development momentum on May 8, 2026, with 45 pull requests merged/closed and one new release (v2026.5.7). The project is actively stabilizing its core renderer, cowork collaboration features, and skill ecosystem while addressing cross-platform reliability issues—particularly on Windows. Two open issues highlight user-facing pain points around IM bot authentication and paid-tier login failures, suggesting ongoing friction in onboarding and access to premium models.

---

### 2. Releases  
**LobsterAI v2026.5.7** (released May 7, 2026) includes key fixes:  
- **Windows skill management**: Improved reliability of skill deletion and import feedback handling (#1881).  
- **YoudaoNote skill upgrade**: Updated to v1.0.8 for enhanced integration (#1882).  
No breaking changes or migration steps noted; focus remains on bug fixes and minor feature enhancements.

---

### 3. Project Progress  
Today’s merged PRs reflect concentrated efforts in UI stability, backend resilience, and cross-session state preservation:  
- **Renderer & Cowork UX**: Optimized agent UI responsiveness (#1911), fixed file preview path duplication errors on Windows (#1909), and resolved streaming text overlap bugs that caused character truncation (#1908).  
- **Initialization & Relaunch**: Extended timeout thresholds for config/i18n services to reduce false startup failures, added in-app relaunch from error screens (#1910).  
- **Session Persistence**: Restored correct default model selection after app restart (#1905); hardened assistant segment persistence during concurrent markdown rendering (#1900).  
- **ESLint Cleanup**: Finalized resolution of all 165 lint errors across the codebase (#1498), completing a long-pending housekeeping task.  
- **Pagination Implementation**: Merged cowork session/message pagination logic originally proposed in #924, now integrated into `release/2026.05.08` to address memory bloat in large chats (#1907).

---

### 4. Community Hot Topics  
No PR or issue received explicit comment activity today, but two newly surfaced issues demand attention:  
- **#1903 [OPEN] 会员登录频繁失败**  
  Users report repeated failures logging into paid accounts, blocking access to NetEase’s proprietary models. This directly impacts monetization flow and trust in subscription tiers.  
- **#1878 [OPEN] IM机器人 微信接口 配置扫码后无法输入验证码**  
  After scanning QR codes in WeChat integration, users are prompted to enter a 6-digit code via OpenClaw—but no input interface appears in LobsterAI, halting setup. This points to a missing UX bridge between external auth flows and the desktop client.  

Both issues reflect gaps in third-party auth orchestration and subscription handoff.

---

### 5. Bugs & Stability  
**High Severity**:  
- **Login Failures (#1903)**: Blocks access to core paid functionality; fix needed urgently to prevent churn.  
- **WeChat Auth Flow Breakage (#1878)**: Prevents IM bot deployment entirely; requires frontend integration for manual code entry.  

**Medium/Low Severity**:  
- Historical Windows file path handling bugs (#1909) and streaming text truncation (#1908) were resolved today—no active regressions remain.  
All critical stability fixes are already deployed in v2026.5.7.

---

### 6. Feature Requests & Roadmap Signals  
User demand is emerging around:  
- **Flexible Workspaces**: PR #1904 proposes per-Agent working directories—a logical next step after recent session/persistence improvements.  
- **OAuth Expansion**: Already implemented ChatGPT OAuth (#1830); likely signals plans to expand social/auth integrations.  
- **Pagination Adoption**: The successful merge of #924 suggests upcoming rollout of similar lazy-loading patterns for other data-heavy views (e.g., skills, artifacts).  

These indicate a roadmap focused on scalability, user control, and seamless third-party integration.

---

### 7. User Feedback Summary  
Real-world pain points center on:  
- **Authentication Friction**: Both IM bot setup and paid login failures show poor error recovery and missing UI affordances.  
- **Platform-Specific Instability**: Windows users continue to face file path and permission edge cases despite recent fixes.  
- **Performance Expectations**: Heavy chat histories trigger crashes or slowdowns—pushed toward pagination as a solution.  

Satisfaction is mixed: core functionality works, but premium access and external integrations feel brittle.

---

### 8. Backlog Watch  
- **#924 (feat(cowork): 会话列表与消息历史分页加载)**: Originally submitted March 26, this PR finally merged after conflict resolution and stabilization—showing how complex features require iterative refinement. Maintainers should monitor similar large-scale refactors for technical debt risks.  
- **#817**: Referenced in #924 as the original issue driving pagination; status unclear if fully resolved beyond cowork scope.  
No other long-stalled high-priority items observed today; current velocity suggests manageable backlog pressure.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – May 8, 2026**

---

### 1. Today's Overview  
The Moltis project shows strong development momentum with **9 merged PRs and 4 closed issues** in the last 24 hours, alongside **2 new daily releases**. Activity is concentrated around voice capabilities, sandbox reliability, and cross-agent interoperability. The release cadence suggests a stable, feature-rich iteration cycle. With only one open PR (#984) remaining from today’s batch—focused on OpenAI realtime voice guidance—the team appears to be finalizing enhancements before potentially preparing a broader release.

---

### 2. Releases  
Two minor daily builds were published:  
- **20260507.05**: Latest incremental build (no changelog details provided)  
- **20260507.04**: Previous incremental build  

No breaking changes or migration notes are indicated for these releases. Given the absence of versioned milestones (e.g., vX.Y.Z), this appears to follow Moltis’s rolling release model for continuous integration.

---

### 3. Project Progress  
Key merged features/fixes include:  
- **Voice & STT Expansion**: Added `whisper-local` provider support (#981) and surfaced OpenAI Realtime voice model guidance (#984).  
- **Image Generation via Codex OAuth**: Integrated `gpt-image-2` through Responses API (#982).  
- **Tool Argument Diagnostics**: Fixed malformed argument handling (#983, resolving #963).  
- **Browser Sandbox Fixes**: Resolved Docker host mount conflicts in sandbox profiles (#980, fixing #977).  
- **Node Identity Protocol**: Implemented Ed25519 challenge-response TOFU authentication (#979).  
- **Telephony Integration**: Full Twilio call support landed earlier but was finalized today (#920).  
- **Docs & Dependencies**: Onboarding protocol guide added (#976); WASM runtime updated to 36.0.8 (#978).

---

### 4. Community Hot Topics  
While no items received comments or reactions today, the following high-interest topics emerged in recent days:  
- **#973: Onboarding + Identity Protocols**  
  *Proposal for standardized agent-to-agent discovery and trust establishment.*  
  [moltis-org/moltis/issues/973](https://github.com/moltis-org/moltis/issues/973)  
- **#956: Image Generation via Codex OAuth**  
  *Feature request for native image generation using OpenAI’s latest tools.*  
  [moltis-org/moltis/issues/956](https://github.com/moltis-org/moltis/issues/956)  

These reflect growing demand for **interoperable personal AI agents** and **enhanced multimodal tooling**, positioning Moltis toward decentralized agent ecosystems.

---

### 5. Bugs & Stability  
A critical Docker-related regression was fixed today:  
- **#977: Browser sandbox fails in Docker** → **Fixed by #980**  
  Users reported persistent bind mount resolution failures when running Moltis inside containers. The fix ensures proper host data directory mapping via existing config settings. This was a blocking issue for containerized deployments and is now resolved.

No high-severity crashes or regressions remain open.

---

### 6. Feature Requests & Roadmap Signals  
User requests signal clear roadmap priorities:  
- **Local Whisper Support** (#981): Indicates push toward privacy-first, offline-capable voice processing.  
- **Codex OAuth Image Tools** (#982): Shows intent to leverage OpenAI’s advanced multimodal APIs natively.  
- **Cross-Agent Onboarding** (#973): Suggests future direction includes federated or mesh-like agent networks.  

Given today’s rapid implementation of these items, they are likely part of an upcoming “multimodal agent server” milestone.

---

### 7. User Feedback Summary  
Pain points addressed today center on **tool reliability** (#963) and **deployment flexibility** (#977). Users value:  
- Predictable sandbox behavior across environments (Docker/LXC).  
- Clear diagnostics when tool arguments fail validation.  
- Expanded voice/image capabilities without sacrificing privacy (via local Whisper).  

Positive signals include immediate fixes and documentation improvements, suggesting responsive maintenance.

---

### 8. Backlog Watch  
No long-unanswered issues or PRs require urgent attention today. However, monitor:  
- **#973** (Onboarding Protocol) – Though closed, its documentation PR (#976) may need review if integration examples are incomplete.  
- **#920** (Telephony) – Landed after weeks in progress; verify real-world test coverage in CI.  

Overall, maintainer responsiveness remains excellent with most items resolved within hours.

--- 

*Data snapshot generated May 8, 2026. All links point to GitHub.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – May 8, 2026**

---

### 1. Today's Overview  
The CoPaw project remains highly active with strong community engagement: 50 issues and 33 pull requests updated in the last 24 hours, reflecting ongoing development momentum. No new releases were published today, but multiple high-priority bug fixes and UI enhancements have merged or entered review. The project demonstrates robust maintenance responsiveness—particularly around stability, channel integrations (WeChat, Feishu), and console usability—while user feedback continues to shape near-term feature priorities.

---

### 2. Releases  
No new releases published in the last 24 hours.

---

### 3. Project Progress  
**Merged/Closed PRs (last 24h):**  
- **#4091**: Added batch enable/disable buttons for skills in the frontend (fixes #3503) [[PR]](https://github.com/agentscope-ai/QwenPaw/pull/4091)  
- **#4089**: Fixed file preview URL handling to resolve expiration issues related to #4047 [[PR]](https://github.com/agentscope-ai/QwenPaw/pull/4089)  
- **#4073**: Ensured custom agent names are respected instead of default localized names [[PR]](https://github.com/agentscope-ai/QwenPaw/pull/4073)  
- **#4052**: Optimized console rendering to prevent duplicate polling-triggered re-renders [[PR]](https://github.com/agentscope-ai/QwenPaw/pull/4052)  
- **#4094**: Refactored TokenUsage display logic with improved filtering and UX [[PR]](https://github.com/agentscope-ai/QwenPaw/pull/4094)  

These changes improve configuration management, file handling reliability, and UI performance.

---

### 4. Community Hot Topics  
Top discussions reflect strategic direction and pain points:

- **[#280] Discussion: Which Skills and MCPs Can Be Built-in?** – 27 comments; users advocate for pre-installed popular skills/MCPs to enhance out-of-the-box experience. This signals demand for reduced setup friction and broader ecosystem integration. [[Issue]](https://github.com/agentscope-ai/QwenPaw/issues/280)

- **[#4036] Adding a model requires too many steps and clicks** – 5 comments; frustration over complex model addition workflow in settings. Users request streamlined UX to reduce onboarding barriers. [[Issue]](https://github.com/agentscope-ai/QwenPaw/issues/4036)

- **[#4000] WeChat dialog sync + Web voice input missing** – 2 comments; highlights multi-platform inconsistency and unmet expectations around voice features. Suggests need for clearer capability boundaries between channels. [[Issue]](https://github.com/agentscope-ai/QwenPaw/issues/4000)

---

### 5. Bugs & Stability  
**High-severity bugs reported (last 24h):**

1. **[#4101] Agent memory loss and config reset after v1.1.5.post2 upgrade (Docker)** – Critical regression affecting production deployments. Affects Docker users specifically. Fix under investigation. [[Issue]](https://github.com/agentscope-ai/QwenPaw/issues/4101)

2. **[#4056] WeChat messages lost mid-conversation under normal network** – Intermittent agent silence without connectivity issues. Impacts core messaging reliability. No fix yet. [[Issue]](https://github.com/agentscope-ai/QwenPaw/issues/4056)

3. **[#4047] File/image links expire after one day** – Generated attachments become inaccessible due to token expiry without graceful frontend handling. Partially addressed by #4089. [[Issue]](https://github.com/agentscope-ai/QwenPaw/issues/4047)

4. **[#4034] Streaming models cause ReAct loops to repeat tool calls** – DeepSeek/MiMo streaming responses trigger duplicate processing in agent loop. Confirmed model-specific issue; no fix deployed. [[Issue]](https://github.com/agentscope-ai/QwenPaw/issues/4034)

5. **[#3976] Idle session cleanup kills active tasks** – UnifiedQueueManager incorrectly marks running sessions as idle, aborting AI responses. Flagged as invalid but still impacts usability. [[Issue]](https://github.com/agentscope-ai/QwenPaw/issues/3976)

---

### 6. Feature Requests & Roadmap Signals  
Users actively request:

- **Vertex AI Gemini support** (#4030): Enterprise/GCP users need Vertex AI path alongside existing Gemini API.
- **Custom workspace storage paths** (#4067): Desire to decouple user data from hardcoded system directories.
- **Web-based upgrade mechanism** (#2235): Remote admin ability to update QwenPaw via console.
- **Improved skill selector UX** (#4078): Replace plain-text `/` output with interactive dropdown.
- **PlanNotebook enhancement** (#3238): Task decomposition via experimental notebook-style planning.

These suggest upcoming focus areas: cloud provider expansion, deployment flexibility, and agent orchestration sophistication.

---

### 7. User Feedback Summary  
Real-world use cases reveal key themes:

- **Long-running code iteration workflows** (#3350, #4059): Users struggle with context truncation in multi-turn engineering dialogues despite `/compact`. Need better memory management for extended reasoning.
- **Enterprise channel reliability**: WeChat and Feishu channels face message loss and identity resolution gaps (#4050, #4056).
- **Deployment fragility**: Windows packaging conflicts with conda-pack (#3988), Docker secret restoration failures (#3916).
- **Skill discoverability**: Manual skill enabling/disabling is tedious; batch operations now added (#4091).
- **Transparency expectations**: Users want audit trails for agent behavior and conversation history for evaluation (#4008).

Overall sentiment is constructive but frustrated by stability regressions and inconsistent cross-channel experiences.

---

### 8. Backlog Watch  
**Long-unanswered critical items needing maintainer attention:**

- **[#280] Built-in skills/MCPs discussion** – Open since March; high community interest (~27 comments). Should be prioritized for roadmap planning.
- **[#3997] MCPClientConfig timeout configurability** – Technical blocker for advanced MCP users; silent field drop violates transparency.
- **[#3238] PlanNotebook experimental support** – Stalled since April; may need clearer scope or contributor guidance.

These represent opportunities to deepen community trust through responsive decision-making and technical clarity.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – May 8, 2026**

---

### 1. **Today’s Overview**

The ZeroClaw project shows intense development activity with 50 issues and 50 pull requests updated in the last 24 hours, signaling a highly engaged maintainer and contributor community. No new releases were published today, but several high-priority bug fixes and feature enhancements are under active review. The project continues to prioritize stability, desktop experience (especially macOS/Tauri), provider compatibility, and security hardening—particularly around sandboxing and permission models.

---

### 2. **Releases**

No new releases were published as of May 8, 2026. The latest release remains v0.7.5, which introduced significant architectural changes including workspace restructuring (`crates/zeroclaw-*`) and breaking updates to configuration parsing. Users should ensure they follow updated onboarding flows for custom providers and environment variable overrides.

---

### 3. **Project Progress**

No PRs or issues were merged or closed today. However, multiple PRs are progressing toward stabilization:
- PR #6506 introduces a full macOS onboarding wizard with TCC permission primitives.
- PR #6432 resolves SQLite schema race conditions during concurrent startup.
- PR #6502 aims to unblock the v0.7.5 release by fixing CI generation order.
- PR #6519 addresses Gemini CLI argument handling regressions.

All major contributions remain open pending maintainer review, indicating a healthy but deliberate merge pace focused on quality over velocity.

---

### 4. **Community Hot Topics**

Three issues stand out due to high comment volume and user impact:

- **#6246**: WhatsApp Web channel broken after April 2026 protocol update (6 comments). Users report complete message delivery failure post-April 24; this is workflow-blocking (S1) and affects core communication functionality.  
  🔗 [zeroclaw-labs/zeroclaw#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)

- **#6516**: ACP `cwd` change breaks agent access to external skill files (2 comments). Security/sandbox boundary issue where changing working directory isolates the agent from its own toolset—critical for multi-repo workflows.  
  🔗 [zeroclaw-labs/zeroclaw#6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516)

- **#6349 + #6327 + #6329**: Desktop menu-bar chat surfaces every tool call inline, degrading UX parity with web dashboard (collectively trending among Tauri contributors). These reflect growing demand for polished native desktop experiences.  
  🔗 [zeroclaw-labs/zeroclaw#6349](https://github.com/zeroclaw-labs/zeroclaw/issues/6349)

Underlying need: **Seamless cross-platform agent usability**, especially on macOS where UI consistency and system integration are paramount.

---

### 5. **Bugs & Stability**

High-severity bugs reported today include:

| Issue | Severity | Component | Description |
|------|--------|----------|-------------|
| #6434 | S1 | Runtime/Daemon | Shell tool calls blocked at `autonomy = "full"` despite permissive config |
| #6472 | S2 | Gateway | PostgreSQL runtime initialization panic due to tokio double-runtime conflict |
| #6399 | S1 | Provider | Custom remote provider sends local file paths instead of data URLs → multimodal failure |
| #6520 | S2 | Provider | Gemini CLI crashes due to deprecated `--print` flag usage |

Fix PRs exist for most (e.g., #6502 addresses release blockers, #6519 fixes Gemini), but none have landed yet. No crashes reported in core runtime or memory subsystems beyond known concurrency edge cases.

---

### 6. **Feature Requests & Roadmap Signals**

Strong signals point to imminent desktop-native evolution:
- **Tauri desktop bundling** (#6465): Embed chat-ui as static assets to decouple boot from gateway.
- **macOS capability handlers** (#6499, #6507): Screenshot, AppleScript, UI automation via `/ws/nodes`.
- **Universal macOS binary** (#6339): ARM64 + x86_64 lipo build requested by Apple Silicon users.

Long-term: First-class OpenAI-compatible provider support (#6518) and V3 env-var override system (#6375) suggest a shift toward enterprise-grade configurability. Cron delivery refinement (#6510) indicates growing use of ZeroClaw as an autonomous agent scheduler.

---

### 7. **User Feedback Summary**

Users express frustration with:
- **Provider fragility**: Llama.cpp tool failures (#6377), Gemini syntax drift (#6520), custom endpoint misconfiguration.
- **Documentation gaps**: Docker setup errors (#6393), missing sandbox image (`zeroclawlabs/tool-runner`) (#6500).
- **Desktop UX debt**: Inline tool bubbles cluttering chat (#6349), lack of tray menu actions (#6329).

Positive signals: Contributors praise modular architecture (e.g., workspace split enabling cleaner tool refactoring in #4944) and proactive permission design (#6485). Power users value granular control (e.g., WhatsApp group allowlists #6371, cron announcement modes #6510).

---

### 8. **Backlog Watch**

Several long-running items require maintainer attention:

- **#3767** (Gated shell commands via TOTP): Referenced in PR #5779; still awaiting finalization after security review.
- **#5636** (History pruning adjacent assistant messages): Addressed in PR #6515, but needs validation across GLM-5 and Z.AI endpoints.
- **#4846** (WhatsApp Web reinstall guidance): Still unresolved despite PR #5075 clarifying rebuild procedures.

These represent critical path items blocking advanced use cases like secure multi-account agents and reliable long-running sessions.

--- 

*Data snapshot taken May 8, 2026. All links verified against GitHub API.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*