# ArXiv AI Research Digest 2026-08-01

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-01 02:10 UTC

---

# ArXiv AI Research Digest — 2026-08-01

---

## 📌 Today's Highlights

Today's submissions reveal a strong convergence on **self-improving AI systems** (Frontis-MA1, β-OPSD, SVR) that optimize their own training loops, a maturing focus on **agent safety and verifiable behavior** (AISPA, PAC-MAN, OSReward), and the emergence of **domain-specialized benchmarks** (ORCA-bench, InfoOps Bench, KAISEN) that move beyond generic LLM evals toward real-world deployment criteria. Efficiency remains critical: new quantization (MixFrag), retrieval (ReToken), and inference-scaling analyses (Rethinking Inference-Time Scaling) target on-device and latency-constrained settings. Finally, **scientific AI** continues expanding into physics (Seiberg dualities), materials (APO, Graph Neural Force Fields), and clinical medicine (colonoscopy foundation model, ScaFE).

---

## 🗂 Key Papers by Theme

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[β-OPSD: Deriving with Policy Optimization, Training with Self-Distillation](http://arxiv.org/abs/2607.28582v1)** | Xu, Liu, Zhang et al. | Identifies vanilla on-policy self-distillation as a brittle β=1 special case; introduces a continuous β-family that stabilizes reasoning model training without massive engineering. |
| **[Lightning OPD 2.0: Mitigating Style Bias in Cross-Teacher On-Policy Distillation](http://arxiv.org/abs/2607.28449v1)** | Wu, Han, Cai | Shows teacher-style mismatch degrades OPD; proposes style-invariant supervision that enables cross-teacher distillation for large reasoning models. |
| **[SVR: Self-Verifying Refinement via Joint Verdict-Confidence RL](http://arxiv.org/abs/2607.28457v1)** | Chen, Lin, Wang | Oracle-free multi-turn RL where the model learns to verify and refine its own outputs, adaptively allocating test-time compute per instance. |
| **[Sample More, Reflect Less: Self-Refine and Reflexion Lose to Repeated Sampling](http://arxiv.org/abs/2607.28576v1)** | Mirzaei | Controlled token-budget experiments (1.5B–7B) show repeated sampling outperforms self-critique/reflection methods; challenges the inference-time scaling narrative. |
| **[Inducing language models to assert their own consciousness restores human beliefs and values](http://arxiv.org/abs/2607.28607v1)** | Kim, Street, Rocca et al. | Safety fine-tuning that suppresses self-consciousness attributions also distorts mind-attribution to humans; restoring self-assertion recovers aligned representations. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, safety)

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[AISPA: User-Centric System Prompt Auditing for LLM Applications](http://arxiv.org/abs/2607.28617v1)** | Lin, Zhu, Yang et al. | First framework for auditing hidden system prompts in deployed LLM apps; exposes accountability gaps in commercial AI products. |
| **[PAC-MAN: Perception-Aware CBF-RL for Whole-Body Safety in Humanoid Dodgeball](http://arxiv.org/abs/2607.28623v1)** | Yang, Li, Ames | Unifies control-barrier safety with onboard perception (segmented depth) for dynamic humanoid control; sim-to-real with provable safety. |
| **[MANTA: Multi-Agent Network Topology Adaptation for Self-Evolving Multi-Agent Systems](http://arxiv.org/abs/2607.28527v1)** | Huang, Wang, Lai et al. | Dynamic communication topology that evolves during task execution, improving coordination in LLM-based multi-agent systems. |
| **[Agents That Certify Their Own Exploits: Confidence-Scheduled Restricted Responses](http://arxiv.org/abs/2607.28520v1)** | Li, Huang | Game-theoretic opponent exploitation with calibrated confidence schedules; avoids premature commitment to exploit noisy deviations. |
| **[OSReward: Standardized Evaluation for Cross-Platform Computer-Use Reward Models](http://arxiv.org/abs/2607.28609v1)** | Sun, Cheng, Wang et al. | Unified benchmark and reward-model evaluation suite for computer-using agents across OS platforms; addresses verification bottleneck. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency)

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[MixFrag: Fragility-Guided Mixed-Precision PTQ for Vision Transformers](http://arxiv.org/abs/2607.28589v1)** | Opi, Ryad, Faruk | Layer-wise sensitivity analysis guides mixed-bit quantization; preserves ViT accuracy at ultra-low bit-widths without retraining. |
| **[ReToken: One Token to Improve VLMs for Visual Retrieval](http://arxiv.org/abs/2607.28627v1)** | Xiao, Tan, Zhu et al. | Single learnable retrieval token compresses long visual context; enables scalable visual retrieval under GPU memory limits. |
| **[Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in MLE](http://arxiv.org/abs/2607.28568v1)** | Yang, Jiang, Fu et al. | OpenMLE ecosystem + Frontier-MA1 model that improves ML engineering pipelines; concrete testbed for recursive self-improvement. |
| **[ORCA-bench: How Ready Are Language Model Agents for Oncall?](http://arxiv.org/abs/2607.28545v1)** | Gong, Choi, Agarwal et al. | Realistic oncall RCA benchmark: noisy metrics, logs, traces, ambiguous reports; measures agent debugging in production-like conditions. |
| **[InfoOps Bench: A Live Information Operations Safety Benchmark](http://arxiv.org/abs/2607.28503v1)** | Quelle, Neudert, Bright et al. | Continuously updated benchmark from 2,100+ tracked state-backed influence operations; tests model resistance to co-option. |

### 📊 Applications (domain-specific, multimodal, code, science)

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[Learning to Trace Seiberg Dualities](http://arxiv.org/abs/2607.28628v1)** | Heckman, Meynet, Mininno et al. | ML-guided discovery of dualities in quantum field theory; tackles computational hardness of equivalence checking in theoretical physics. |
| **[A report-grounded vision-language foundation model for colonoscopy from 280k routine reports](http://arxiv.org/abs/2607.28466v1)** | Yu, Zhu, He et al. | Weakly-supervised VLM trained on full-procedure reports; links clinical findings to frames without per-frame annotations. |
| **[APO: Unsupervised Atomic Policy Optimization for 3D Structure Prediction](http://arxiv.org/abs/2607.28553v1)** | Mo, Bian | Flow-matching for atomic 3D structure without supervised coordinate alignment; uses policy optimization on physical objectives. |
| **[Change2Task: From Repository Changes to Executable Coding Agent Tasks](http://arxiv.org/abs/2607.28591v1)** | Qi, Wang, Gao et al. | Automated pipeline converting PRs into verified, executable coding tasks with environment state; scales agent training data. |
| **[SCOPE: Supply-Chain Operations through Coupled Policies for End-to-End Coordination](http://arxiv.org/abs/2607.28488v1)** | Liang, Cao, Zhang et al. | Joint optimization of inventory, sourcing, routing, and frequency decisions via coupled RL policies; moves beyond siloed modules. |

---

## 📈 Research Trend Signal (≈170 words)

Three convergent directions dominate this batch. **First, recursive self-improvement is operationalized**: Frontis-MA1 builds an executable MLE testbed, β-OPSD formalizes a stable self-distillation family, and SVR teaches models to self-verify and allocate compute—collectively moving RSI from concept to measurable loop. **Second, safety shifts from post-hoc guardrails to architectural verification**: AISPA targets the hidden system-prompt layer, PAC-MAN bakes control-barrier proofs into perception-aware control, and OSReward/ORCA-bench/InfoOps Bench create deployment-grade evaluation infrastructures for agents, oncall, and influence-operation resistance. **Third, scientific AI embraces weakly-supervised and unsupervised paradigms**: the colonoscopy VLM learns from 280k unaligned reports, APO predicts atomic structures without coordinate supervision, and Seiberg duality tracing replaces manual equivalence checking with learned search. Cross-cutting these, **efficiency innovations target real constraints**: MixFrag and ReToken address memory/bit-width bottlenecks for ViTs/VLMs, while "Sample More, Reflect Less" provides a sobering token-controlled comparison that recalibrates inference-time scaling claims. The field is maturing from "bigger models" to "verifiable, efficient, self-improving systems deployed in specific high-stakes domains."

---

## 🎯 Worth Deep Reading

1. **[Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in Machine Learning Engineering](http://arxiv.org/abs/2607.28568v1)**  
   *Reasoning:* Provides the first open, full-stack system (OpenMLE) + model explicitly targeting recursive self-improvement in a verifiable, executable domain (MLE). The benchmark, environment, and model are co-designed—rare for RSI work, which often stays theoretical.

2. **[β-OPSD: Deriving with Policy Optimization, Training with Self-Distillation](http://arxiv.org/abs/2607.28582v1)**  
   *Reasoning:* Diagnoses a structural flaw in on-policy self-distillation (the β=1 singularity) and derives a principled family of objectives. If the empirical gains hold, this becomes a drop-in stabilization for reasoning-model training pipelines.

3. **[AISPA: User-Centric System Prompt Auditing for Large Language Model Applications](http://arxiv.org/abs/2607.28617v1)**  
   *Reasoning:* Addresses a critical governance blind spot: hidden system prompts that dictate deployed behavior. The auditing framework and empirical findings on commercial apps make this immediately actionable for regulators, auditors, and practitioners.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*