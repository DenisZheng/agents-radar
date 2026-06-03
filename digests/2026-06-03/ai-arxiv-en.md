# ArXiv AI Research Digest 2026-06-03

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-06-03 00:47 UTC

---

# ArXiv AI Research Digest — 2026-06-03

*50 papers from cs.AI, cs.CL, cs.LG*

---

## 1. Today's Highlights

Today's submissions reveal a pronounced shift toward **agentic systems and their lifecycle management** — from benchmarking agent skills and persona-driven environments (Papers 13, 14, 26, 34) to speculative tool-call privacy and monitoring before deployment reliability is established. A second dominant thread concerns **multimodal MLLM efficiency and fidelity**, with three papers tackling video encoding redundancy, temporal moment perception, and adaptive modality routing (Papers 3, 19, 36). Third, **alignment and safety** continue to diversify beyond standard RLHF into safety distillation, communicative framing audits, and permissive safety filters for interactive robotics (Papers 6, 15, 27). Finally, there is a notable crop of work on **continual learning** — both for multimodal instruction tuning (Papers 2, 24) and language agent experience accumulation (Paper 37) — suggesting the community is grappling seriously with deployment-time model adaptation.

---

## 2. Key Papers

### 🧠 Large Language Models (Architecture, Training, Alignment, Evaluation)

| # | Title & Link | Authors | Key Contribution |
|---|-------------|---------|------------------|
| 7 | [From Layers to Submodules: Rethinking Granularity in Replacement-Based LLM Compression](http://arxiv.org/abs/2606.02559v1) | Cunegatti et al. | Challenges the full-layer granularity assumption in LLM compression by proposing submodule-level replacement, enabling finer-grained accuracy–efficiency trade-offs. |
| 12 | [SimSD: Simple Speculative Decoding in Diffusion Language Models](http://arxiv.org/abs/2606.02544v1) | Cui et al. | Adapts speculative decoding — previously limited to autoregressive LLMs — to diffusion language models, unlocking faster parallel inference for this emerging class. |
| 15 | [SafeSteer: Localized On-Policy Distillation for Efficient Safety Alignment](http://arxiv.org/abs/2606.02530v1) | Li et al. | Proposes on-policy distillation localized to safety-critical regions, reducing the "alignment tax" on general-purpose capabilities without auxiliary reward models. |
| 16 | [Auditing Asset-Specific Preferences in Financial LLMs](http://arxiv.org/abs/2606.02528v1) | Wu | Shows that LLMs encode systematic asset preferences (e.g., Bitcoin) that causally affect portfolio allocation decisions — a critical finding for deploying LLMs in fintech. |
| 27 | [Not What, But How: A Communicative Audit of LLM Response Framing](http://arxiv.org/abs/2606.02493v1) | Pawar et al. | Audits LLM responses to subjective cultural queries along framing and tone dimensions, arguing that communicative style matters as much as factual correctness. |
| 45 | [On the Scaling of PEFT: Towards Million Personal Models of Trillion Parameters](http://arxiv.org/abs/2606.02437v1) | Mind Lab et al. | Reframes PEFT adapters as persistent local state for personalization at scale, exploring the extreme regime of millions of adapters atop shared trillion-parameter base models. |

### 🤖 Agents & Reasoning (Planning, Tool Use, Multi-Agent)

| # | Title & Link | Authors | Key Contribution |
|---|-------------|---------|------------------|
| 4 | [ClinEnv: An Interactive Multi-Stage Long Horizon EHR Environment for Agents](http://arxiv.org/abs/2606.02568v1) | Lu et al. | Builds an interactive electronic health record environment for clinical decision-making agents, modeling incremental information gathering and irreversible sequential decisions. |
| 13 | [SkillHarm: Lifecycle-Aware Skill-Based Attacks via Automated Construction](http://arxiv.org/abs/2606.02540v1) | Ning et al. | Identifies third-party agent skills as a critical attack surface and automates the construction of lifecycle-aware skill-based exploits — a frontier safety problem. |
| 14 | [Tracking the Behavioral Trajectories of Adapting Agents](http://arxiv.org/abs/2606.02536v1) | Leshin et al. | Proposes a method for monitoring how text-based config, memory, and skill files steer agent behavior over time, addressing agent drift and emergent misalignment. |
| 26 | [Monitoring Agentic Systems Before They're Reliable](http://arxiv.org/abs/2606.02494v1) | Ferrara Boston et al. | Argues that structural defects — not task-level errors — dominate failures in early-production agentic systems, and proposes monitoring frameworks for this maturity stage. |
| 31 | [Iteris: Agentic Research Loops for Computational Mathematics](http://arxiv.org/abs/2606.02484v1) | Chen et al. | Deploys closed-loop agentic workflows for open problems in computational mathematics, complementing existing work on competition-level math problem solving. |
| 32 | [Ghost Tool Calls: Issue-Time Privacy for Speculative Agent Tools](http://arxiv.org/abs/2606.02483v1) | Mohammadi et al. | Identifies a new privacy vulnerability in speculative tool-calling agents — leaked user intent to external services — and proposes mitigations. |
| 34 | [MCP-Persona: Benchmarking LLM Agents on Real-World Personal Applications via Environment Simulation](http://arxiv.org/abs/2606.02470v1) | Wang et al. | Benchmarks agents using the Model Context Protocol on personalized tasks (email, calendar, services), filling a gap between generic tool-use benchmarks and real deployment. |
| 37 | [AGENTCL: Toward Rigorous Evaluation of Continual Learning in Language Agents](http://arxiv.org/abs/2606.02461v1) | Shu et al. | Introduces a rigorous continual learning benchmark for language agents, testing whether agents accumulate experience across task streams without catastrophic interference. |
| 41 | [HLL: Can Agents Cross Humanity's Last Line of Verification?](http://arxiv.org/abs/2606.02449v1) | Song et al. | Tests multimodal agents on CAPTCHA-solving as a concrete deployment benchmark — probing whether agents can handle tasks deliberately designed to resist automation. |

### 🔧 Methods & Frameworks (New Techniques, Benchmarks, Efficiency)

| # | Title & Link | Authors | Key Contribution |
|---|-------------|---------|------------------|
| 8 | [HERO'S JOURNEY: Testing Complex Rule Induction with Text Games](http://arxiv.org/abs/2606.02556v1) | Zheng et al. | Introduces a benchmark for rule induction requiring agents to infer hidden procedural and attribute-based rules from demonstrations in multi-step text-game settings. |
| 21 | [A Biconvex Formulation for Stable Transport of Mixture Models](http://arxiv.org/abs/2606.02515v1) | Marghi et al. | Provides a theoretically grounded biconvex optimal transport formulation for mixture models with guaranteed unique solutions, advancing scalable and interpretable OT. |
| 28 | [Expressivity of Congruence-Based Architectures for DNNs on Positive-Definite Matrices](http://arxiv.org/abs/2606.02490v1) | Oswald & Massart | Analyzes the theoretical expressivity of congruence-like layers for SPD matrix classification, providing architectural guidance for geometric deep learning. |
| 33 | [Physics-Informed Residuals for Adaptive Mesh Refinement in Finite-Difference PDE Solvers](http://arxiv.org/abs/2606.02475v1) | Kasumba & Katende | Embeds physics-informed residuals into the AMR loop of classical finite-difference solvers, improving resolution efficiency near sharp gradients and fronts. |
| 40 | [Initialization is Half the Battle: Generating Diverse Images from a Guidance Potential Posterior](http://arxiv.org/abs/2606.02453v1) | Li et al. | Tackles mode collapse in generative models by improving the latent initialization distribution rather than intervening mid-generation. |
| 48 | [Not All Errors Are Equal: A Systematic Study of Error Propagation in LLM Inference](http://arxiv.org/abs/2606.02430v1) | Huang et al. | Systematically characterizes how soft errors propagate through LLM inference in HPC settings — essential for deploying LLMs on large-scale scientific computing infrastructure. |
| 49 | [Spectral Audit of In-Context Operator Networks](http://arxiv.org/abs/2606.02427v1) | Gao et al. | Proposes spectral analysis as a diagnostic for neural operators, revealing dynamical structure mismatches invisible to standard prediction-error metrics. |

### 📊 Applications (Domain-Specific, Multimodal, Code & Science)

| # | Title & Link | Authors | Key Contribution |
|---|-------------|---------|------------------|
| 1 | [Mitigating Perceptual Judgment Bias in Multimodal LLM-as-a-Judge](http://arxiv.org/abs/2606.02578v1) | Park et al. | Reduces MLLM-judge bias toward plausible narratives over perceptually correct answers via perceptual perturbation and reward modeling — critical for trustworthy AI evaluation. |
| 2 | [ProtoAda: Prototype-Guided Adaptive Adapter Expansion for MCIT](http://arxiv.org/abs/2606.02576v1) | Shi et al. | Addresses inter-task interference in multimodal continual instruction tuning with a prototype-guided, geometrically consolidated adapter expansion strategy. |
| 3 | [AdaCodec: A Predictive Visual Code for Video MLLMs](http://arxiv.org/abs/2606.02569v1) | Hou et al. | Compresses video MLLM input by encoding temporal residuals rather than independent frames, reducing redundant visual tokens without accuracy loss. |
| 5 | [IntraShuffler: Privacy Preserving Framework for Heterogeneous DP Federated Learning](http://arxiv.org/abs/2606.02563v1) | Riya et al. | Strengthens privacy guarantees in heterogeneous DP-FL by shuffling within client groups, improving utility under institution-specific privacy budgets. |
| 9 | [Mixture-Density Representation for Flying-Point-Free Depth Estimation](http://arxiv.org/abs/2606.02552v1) | Bian et al. | Eliminates "flying points" in depth estimation by replacing single-pixel depth assignment with a mixture-density representation that models boundary ambiguity. |
| 10 | [SN-WER: Script-Normalized WER for Multi-Script Indic ASR](http://arxiv.org/abs/2606.02548v1) | Pattnayak | Fixes WER overestimation in multilingual Indic ASR by normalizing across scripts, yielding fairer evaluation of romanized vs. native-script output. |
| 11 | [Transferable Self-Harm Surveillance from ED Triage Notes](http://arxiv.org/abs/2606.02545v1) | Chen et al. | Develops an evidence-augmented ML pipeline for detecting self-harm from emergency triage notes, outperforming diagnostic-code-based surveillance. |
| 18 | [FigSIM: Dataset for Suicide Severity and Figurative Language in Suicide Memes](http://arxiv.org/abs/2606.02523v1) | Chen et al. | Releases a dataset annotating suicide memes for severity levels and figurative language, addressing a growing but under-studied online-harm modality. |
| 19 | [Moment-Video: Diagnosing Temporal Fidelity of Video MLLMs](http://arxiv.org/abs/2606.02522v1) | Liu et al. | Benchmarks video MLLMs on momentary visual events — brief, localized actions critical for answering many practical questions — revealing systematic blind spots. |
| 20 | [Drifting Preference Optimization for One-Step Generative Models](http://arxiv.org/abs/2606.02521v1) | Jiang et al. | Enables preference finetuning of one-step (non-autoregressive, non-diffusion-trajectory) text-to-image generators despite the absence of policy likelihoods or denoising paths. |
| 22 | [LLM-Assisted Discovery of ADHD Signals in Turkish Teacher Narratives](http://arxiv.org/abs/2606.02509v1) | Karacan et al. | Uses LLMs to surface ADHD behavioral signals from unstructured Turkish teacher reports where structured rating scales miss critical information. |
| 23 | [Towards Automated Discovery: Generative Models and Closed-Loop Inverse Materials Design](http://arxiv.org/abs/2606.02507v1) | Babu et al. | Reviews the integration of generative crystal models, multimodal learning, and closed-loop pipelines for inverse materials design. |
| 25 | [Bridging the Last Mile of Time Series Forecasting with LLM Agents](http://arxiv.org/abs/2606.02497v1) | Liao et al. | Shows that LLM agents can incorporate domain knowledge, contextual constraints, and human judgment adjustments into statistical forecast baselines. |
| 30 | [Towards Multidisciplinary Summarization of Hospital Stays](http://arxiv.org/abs/2606.02487v1) | Karacan et al. | Produces efficient provenance categorization of clinical sentences enabling cross-disciplinary NICU summarization from hundreds of heterogeneous notes. |
| 35 | [Learning When to Translate for Multilingual Reasoning](http://arxiv.org/abs/2606.02465v1) | Kang et al. | Learns a selective translation policy for multilingual reasoning, applying English translation only when non-English input likely causes understanding failures. |
| 36 | [MASER: Modality-Adaptive Specialist Routing for Embodied 3D Spatial Intelligence](http://arxiv.org/abs/2606.02463v1) | Raj & Vishnuram | Routes embodied agent queries through modality-specialist sub-networks (RGB, point cloud, depth, pose), improving 3D spatial reasoning over single-modality VLMs. |
| 39 | [Speculative Sampling for Faster Molecular Dynamics](http://arxiv.org/abs/2606.02455v1) | Kosmala et al. | Introduces Langevin Speculative Dynamics to parallelize inherently serial molecular dynamics simulations, significantly improving single-system throughput. |
| 43 | [PaSBench-Video: Streaming Video Benchmark for Proactive Safety Warning](http://arxiv.org/abs/2606.02443v1) | Zhao et al. | Benchmarks MLLMs as proactive safety monitors for streaming video, measuring warning issuance in the critical window before accidents. |
| 46 | [ODTQA-FoRe: Tabular QA Dataset for Future Data Forecasting and Reasoning](http://arxiv.org/abs/2606.02433v1) | Wang et al. | Introduces a tabular QA task requiring future-oriented numerical prediction and reasoning, going beyond current systems' interpolation-only capabilities. |
| 50 | [GC-MoE: Genomics-Guided Cell-Type-Specific Mixture of Experts for Spatial Transcriptomics](http://arxiv.org/abs/2606.02424v1) | Shiku et al. | Uses MoE routing conditioned on genomic features to predict single-cell gene expression from histology images, reducing reliance on costly spatial transcriptomics. |

---

## 3. Research Trend Signal

Today's batch crystallizes three emerging trajectories that, viewed together, map where the field is heading:

**First, the agent lifecycle is becoming a primary research object.** It is no longer sufficient to build an agent that performs well on a benchmark; the community is now studying how agents are *configured* (behavioral tracking, Paper 14), *exploited* (skill-based attacks, Paper 13), *monitored in production* before reliability is achieved (Paper 26), and *connected to real-world personal infrastructure* (MCP benchmark, Paper 34). This signals a maturation from prototype to deployment thinking.

**Second, efficiency and compression research is shifting to finer granularity.** Compression work is moving below the full layer level (Paper 7), video MLLM compression exploits temporal redundancy explicitly (Paper 3), PEFT adapters are being reimagined as mass-personalization state (Paper 45), and speculative decoding is being extended to non-autoregressive architectures (Paper 12). The "one-size-fits-all" efficiency approach is fracturing into architecture- and modality-specific strategies.

**Third, evaluation is diversifying in purpose and rigor.** New benchmarks target under-tested capabilities — rule induction in text games (Paper 8), momentary video events (Paper 19), CAPTCHA-solving as a deployment ceiling (Paper 41), proactive safety monitoring (Paper 43), future data forecasting (Paper 46) — while new auditing methods address framing (Paper 27), spectral dynamics (Paper 49), and soft-error propagation (Paper 48). The evaluation landscape is becoming as rich and varied as the application landscape demands.

---

## 4. Worth Deep Reading

1. **[SkillHarm: Lifecycle-Aware Skill-Based Attacks](http://arxiv.org/abs/2606.02540v1)** (Ning et al.) — Agent skills are a first-class attack surface that has barely been formally studied. This paper automates the construction of lifecycle-aware exploits against agents that implicitly trust third-party skills. As the agent-skill marketplace grows, this line of inquiry will become essential for secure deployment. Understanding these threat models *now* is critical before they are exploited at scale.

2. **[ClinEnv: An Interactive Multi-Stage Long Horizon EHR Environment for Agents](http://arxiv.org/abs/2606.02568v1)** (Lu et al.) — Most medical AI benchmarks are static; clinicians don't practice medicine by selecting answers from a list. This paper models the actual decision-making workflow — incremental information gathering, sequential irreversible decisions under uncertainty — and builds an interactive environment to match. It sets a new standard for realistic clinical agent evaluation and bridges a major gap between benchmark performance and real clinical utility.

3. **[HERO'S JOURNEY: Testing Complex Rule Induction with Text Games](http://arxiv.org/abs/2606.02556v1)** (Zheng et al.) — Rule induction is a foundational cognitive capability that underpins much of what we call "reasoning," yet it is poorly isolated in current benchmarks. This paper provides a clean, controllable testbed spanning attribute and procedural induction with explicit demonstration-based learning. For anyone studying emergent reasoning in LLMs, this benchmark offers a precise diagnostic that avoids the confounds of open-ended generation tasks.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*