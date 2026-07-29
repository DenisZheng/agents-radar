# ArXiv AI Research Digest 2026-07-29

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-07-29 02:00 UTC

---

# ArXiv AI Research Digest — 2026-07-29

---

## 🎯 Today's Highlights

Today's submissions reveal three convergent frontiers: **massive-scale MoE architectures with native multimodality** (Kimi K3's 2.8T parameters, 1M context), **agentic systems grounded in verifiable reasoning and security** (multi-turn planning distillation, taint-confinement permissions, code-repair contracts), and **data-centric efficiency at every stack layer** — from per-example pretraining curation (DataOrchestra) and VLM mixture recipes (DecoupleMix) to token-level sparse attention indexing (PIVOT) and page-local KV compression (LOCKS). Medical AI advances on two axes: vision-centric multimodal understanding (ClinFusion) and extreme-label-efficient segmentation (ESRVS). A new wave of **evaluation rigor** targets hallucination geometry (D-Score), faithfulness auditing, conformal risk control per subpopulation, and real-world forecasting benchmarks (LLM-SoccerArena).

---

## 📚 Key Papers by Theme

### 🧠 Large Language Models — Architecture, Training, Alignment, Evaluation

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[Kimi K3: Open Frontier Intelligence](http://arxiv.org/abs/2607.24653v1)** | Kimi Team et al. | 2.8T-parameter MoE (104B activated) with native vision, 1M-token context, and novel Delta Attention + Attention Residuals for cross-length information flow — a new open-weight frontier model. |
| **[UNIFUSION: Adapting Autoregressive Language Models into Discrete Diffusion under a Unified Reverse-Rate Objective](http://arxiv.org/abs/2607.24507v1)** | Jiang et al. | First direct adaptation of AR checkpoints to uniform-noise diffusion (every token editable), solving the corruption-kernel mismatch via a unified reverse-rate objective. |
| **[PIVOT: Efficient Query-Group Indexing for Token-Level Sparse Attention](http://arxiv.org/abs/2607.24593v1)** | Liu et al. | Eliminates the indexer bottleneck in token-level sparse attention (e.g., DeepSeek Sparse Attention) via query-group indexing, enabling production-scale sparse attention. |
| **[LOCKS: Page-Local Compact Key Summaries for Efficient Long-Context Decoding](http://arxiv.org/abs/2607.24555v1)** | Hwang | Exploits locally low-rank attention keys with page-specific compact bases, reducing KV cache read bandwidth without global low-rank approximation losses. |
| **[DataOrchestra: Learning to Orchestrate Per-Example Curation of Pretraining Data](http://arxiv.org/abs/2607.24717v1)** | Huang et al. | Replaces fixed corpus-level preprocessing with a learned per-example curation policy, adapting processing to each sample's needs for better downstream LLM performance. |
| **[D-Score: A Spectral Hidden-State Signal for Hallucination Detection in Large Language Models](http://arxiv.org/abs/2607.24586v1)** | Raimondi et al. | Introduces a spectral hidden-activation statistic (D-Score) that detects hallucinations from internal model geometry without external supervision or output inspection. |
| **[Hierarchical Group-Conditional Conformal Risk Control for Selective Prediction in Language Models](http://arxiv.org/abs/2607.24562v1)** | Salem et al. | Extends conformal risk control to provide per-group (domain, difficulty, style) risk guarantees for selective prediction, addressing heterogeneous population deployment. |

---

### 🤖 Agents & Reasoning — Planning, Tool Use, Security, Verification

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[The Physics of Multi-Turn Long-Horizon Planning: From Pre-training to Post-training via Single- and Multi-Teacher On-Policy Agentic Distillation](http://arxiv.org/abs/2607.24720v1)** | Men et al. | Formalizes multi-turn planning as a physics-grounded problem; proposes on-policy agentic distillation from single/multi-teacher trajectories to acquire planning capability systematically. |
| **[Agentic Permissions Policy Algebra for Taint Confinement in LLM Agents](http://arxiv.org/abs/2607.24625v1)** | Kravchenko et al. | Algebraic policy framework for dynamic taint confinement in agents processing mixed-confidentiality data, enabling declassification without permanent context contamination. |
| **[Looping Is Not Reliability: State-Bound Evidence and Typed Revision Contracts for Agentic Code Repair](http://arxiv.org/abs/2607.24604v1)** | Gao et al. | Shows generate-test-revise loops lack reliability guarantees; introduces state-bound evidence and typed revision contracts to verify, retain, and submit correct patches. |
| **[Reason-Mediated Behavioral Models for Auditing LLM Social Simulators](http://arxiv.org/abs/2607.24649v1)** | Pandey, Jajoo | Moves beyond outcome-matching to audit whether LLM social simulators use correct rationales; introduces reason-mediated behavioral models as audit instruments. |
| **[From Execution to Capability: Scientific Experience Consolidation via Procedural Knowledge Synthesis](http://arxiv.org/abs/2607.24459v1)** | Dong et al. | Converts verified runtime experience from scientific computing into transferable procedural knowledge, enabling durable capability growth across problems. |

---

### 🔧 Methods & Frameworks — Efficiency, Benchmarks, Interpretability

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[DecoupleMix: Decoupled Ratio Search and Convex Allocation for Scalable VLM Data Recipes](http://arxiv.org/abs/2607.24516v1)** | Xie et al. | Replaces heuristic VLM pretraining mixtures with a principled two-stage framework: decoupled ratio search + convex allocation, yielding attributable, scalable data recipes. |
| **[ERUnderstand: Evaluating Vision-Language Models on Structured ER Diagrams](http://arxiv.org/abs/2607.24707v1)** | Ansari et al. | First large-scale benchmark for structured understanding of Entity-Relationship diagrams as rendered images, enabling AI-assisted database engineering. |
| **[BettiSplit: Topology-Guided Privacy-Aware Split Learning Against Feature Inversion and Gradient Leakage](http://arxiv.org/abs/2607.24556v1)** | Nair et al. | Uses topological data analysis (Betti numbers) to guide split-point placement in split learning, provably minimizing feature inversion and gradient leakage risk. |
| **[LLM-SoccerArena: Benchmarking LLMs on Real-World Predictions in Sports](http://arxiv.org/abs/2607.24573v1)** | Schröder et al. | Dynamic, prospective benchmark for LLM forecasting on real-world sports outcomes, testing information synthesis over time rather than static retrospective evaluation. |

---

### 📊 Applications — Multimodal, Medical, Domain-Specific

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[ClinFusion: A Vision-Centric Multimodal LLM System for Holistic Medical Understanding](http://arxiv.org/abs/2607.24743v1)** | Yuan et al. | Vision-centric MLLM architecture absorbing heterogeneous 2D/3D medical images with evaluation protocols aligned to clinical workflows. |
| **[ESRVS: Extreme Semi-Supervised Retinal Vessel Segmentation with a Single Annotated Image](http://arxiv.org/abs/2607.24453v1)** | Xu, Zhang | Achieves retinal vessel segmentation with only **one** annotated image via selective unlabeled data utilization and consistency regularization. |
| **[SIREN: Towards End-to-End Extreme-Weather Early Warning with Experience-Grounded LLM Agents](http://arxiv.org/abs/2607.24588v1)** | Ni et al. | End-to-end LLM agent system for extreme-weather early warning, grounding decisions in meteorological experience and scaling the warning-to-action pipeline. |
| **[From transcription to semantic corpus analysis: unsupervised learning of sentence representations for ancient languages](http://arxiv.org/abs/2607.24542v1)** | de la Selle | Unsupervised sentence embeddings for noisy, heterogeneous ancient-language corpora from ATR outputs, enabling semantic search and text reuse detection. |

---

## 📈 Research Trend Signal (≈160 words)

Three meta-trends dominate this batch. **First, the "efficiency everywhere" paradigm** has moved beyond model compression into the data pipeline (DataOrchestra, DecoupleMix), attention indexing (PIVOT), KV cache topology (LOCKS), and even quantum compiler generation (Efficient LLM-Generated Shuttling Compilers). Practitioners now optimize the *entire stack* under fixed compute/memory budgets. **Second, agentic systems are acquiring formal security and correctness primitives**: taint-confinement algebras, typed revision contracts, reason-mediated audits, and hierarchical conformal risk control signal a shift from "make agents work" to "prove agents behave." **Third, evaluation is becoming prospective, structured, and geometry-aware** — D-Score's spectral hallucination signal, LLM-SoccerArena's live forecasting, ERUnderstand's diagram-to-schema benchmark, and task-conditional faithfulness audits all reject static accuracy metrics in favor of *process* and *structure* validation. Meanwhile, medical AI pushes label efficiency to the extreme (ESRVS: 1 image) while scaling multimodal heterogeneity (ClinFusion: 2D+3D). The convergence suggests the next 6–12 months will see **provably efficient, auditable, multimodal agents deployed in high-stakes domains** — medicine, weather, scientific computing, legal — with data-centric recipes replacing heuristic scaling.

---

## 🔍 Worth Deep Reading

| Paper | Reason |
|-------|--------|
| **[Kimi K3: Open Frontier Intelligence](http://arxiv.org/abs/2607.24653v1)** | **Architectural milestone**: 2.8T MoE with native vision, 1M context, and novel attention mechanisms (Delta Attention, Attention Residuals) released as open weights. Essential for anyone tracking frontier model architecture, MoE scaling laws, and long-context mechanisms. The systems innovations (KV cache, routing, multimodal fusion) will be widely studied and adapted. |
| **[The Physics of Multi-Turn Long-Horizon Planning](http://arxiv.org/abs/2607.24720v1)** | **Conceptual reframing**: Treats planning as a physics-grounded, distillation-tractable problem rather than an emergent capability. The single/multi-teacher on-policy agentic distillation framework provides a reproducible methodology for acquiring planning skills — critical for agent reliability. Connects pre-training data properties to post-training planning competence. |
| **[DecoupleMix: Decoupled Ratio Search and Convex Allocation for Scalable VLM Data Recipes](http://arxiv.org/abs/2607.24516v1)** | **Methodological leverage**: Replaces the "dark art" of VLM data mixing with a principled, attributable two-stage optimization. The decoupled ratio search + convex allocation framework is immediately applicable to any multimodal pretraining pipeline and addresses the reproducibility crisis in data-centric AI. High impact-per-read for practitioners building VLMs. |

---

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*