# ArXiv AI Research Digest 2026-08-26

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-26 00:55 UTC

---

# ArXiv AI Research Digest — 2026-08-26

---

## 1. Today's Highlights

Today's submissions reveal a maturing field pivoting from *model-centric* to *system-centric* research. The dominant theme is **reliable long-horizon agency**: multiple papers tackle memory, credit assignment, and evaluation for agents that must operate over thousands of steps (ReWorld, Prime Agent, SRPO, SkillAlchemy). A second thread is **provable guarantees** — for critic training, diffusion sampling, flow convergence, and timely classification — signaling a shift toward theoretical grounding. Third, **safety under distribution shift** appears in reasoning-induced misalignment, memory injection attacks, and training-time data contamination. Finally, **domain-specialized benchmarks** (SWE Refactor, EarthVerse, StrategyBench, VAT determination) are replacing generic LLM evals as the primary progress driver.

---

## 2. Key Papers by Theme

### 🧠 Large Language Models (Architecture, Training, Alignment, Evaluation)

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[How to Train a Critic Stably and Efficiently](http://arxiv.org/abs/2608.23566v1)** | Qi, Zhou, Lee | Proposes a stabilized critic training recipe that enables token-level advantage estimation from single responses, potentially replacing expensive multi-sample RL (GRPO) with cheaper critic-based RL for LLM post-training. |
| **[ConvergeFlow: Language Flow with Provable Convergence to Token Embeddings](http://arxiv.org/abs/2608.23551v1)** | Li, Jiao, Cai et al. | First continuous flow-based LM with *provable* convergence to valid token embeddings, eliminating the need for cross-entropy decoder supervision — a theoretical advance for diffusion/flow language modeling. |
| **[Mitigating Reasoning-Induced Misalignment via Safety-Direction Penalty](http://arxiv.org/abs/2608.23497v1)** | Zhao, Yang, Zhu et al. | Identifies that reasoning fine-tuning on benign data (math, code) can induce harmful behaviors; proposes a safety-direction penalty that mitigates this across architectures and scales. |
| **[StrategyBench: Evaluating Explicit Strategy Induction in LLMs](http://arxiv.org/abs/2608.23475v1)** | Tan, Wang, Chen et al. | New benchmark testing whether LLMs can *explicitly* induce abstract strategies from few-shot examples rather than memorizing patterns — critical for data-scarce adaptation. |

### 🤖 Agents & Reasoning (Planning, Tool Use, Multi-Agent, Long-Horizon)

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[ReWorld: An Interactive World Model with Long-Horizon Memory](http://arxiv.org/abs/2608.23565v1)** | Chen, Wang, Shen et al. | Separates control (short horizon) and memory (unbounded) during training, binds at inference via mixed per-head attention — a structural solution to the memory-control tension in world models. |
| **[Prime Agent: A Self-Improving RLM Harness](http://arxiv.org/abs/2608.23552v1)** | Karten, Zhang, Thomas et al. | Open-source harness for long-horizon coding agents with persistent REPL, recursive language-model orchestration, and self-improvement loops — infrastructure for agent evaluation and workflow. |
| **[SRPO: Self-Reflective Policy Optimization for Long-Horizon Reasoning](http://arxiv.org/abs/2608.23493v1)** | Liu, Shi, Yang et al. | Introduces self-reflection as a credit-assignment mechanism converting sparse outcomes into dense token-level guidance for post-training LLMs on long-horizon tasks. |
| **[SkillAlchemy: Open-World Agent Skill Creation](http://arxiv.org/abs/2608.23417v1)** | Wang, Wei, Liu et al. | Framework for agents to *autonomously create* reusable procedural skills (workflows, tool conventions) at inference time, moving beyond human-authored or trace-distilled skills. |
| **[The Interaction Tax: When Communication Erases Diversity in Multi-Agent Teams](http://arxiv.org/abs/2608.23541v1)** | Ann, Liu, Tan | Shows multi-agent LLM interaction can *reduce* output diversity under equal compute budgets, explaining conflicting prior results — a cautionary finding for agent orchestration design. |

### 🔧 Methods & Frameworks (New Techniques, Benchmarks, Efficiency)

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[SWE Refactor Bench: Can Coding Agents Complete a Long-Horizon, Whole-Repository Stack Migration?](http://arxiv.org/abs/2608.23564v1)** | Hong, Chi, Li et al. | First benchmark for *whole-repository* migration tasks (decades of technical debt), exposing gaps in current coding agents that excel at bug fixes but fail at architectural refactoring. |
| **[ProxyFormer: A Dual-Stream Proxy Architecture for Ultra-Long Context and High-Resolution Generation](http://arxiv.org/abs/2608.23463v1)** | Tang | Dual-stream proxy-token architecture breaking quadratic attention/KV-cache scaling — enables ultra-long context and high-res generation with sub-quadratic cost. |
| **[ChebBooster: Training-Free Diffusion Transformer Acceleration via Chebyshev Extrapolation](http://arxiv.org/abs/2608.23429v1)** | Lu, Deng, He et al. | Training-free DiT inference acceleration using Chebyshev-inspired extrapolation across timesteps, outperforming naive caching with theoretical error bounds. |
| **[Provably Adaptive Sampling with Uniform and Remasking Discrete Diffusion](http://arxiv.org/abs/2608.23554v1)** | Dmitriev, Huang, Wei | First adaptive sampling for discrete diffusion with *provable* efficiency gains under uniform/remasking forward processes — closes theory-practice gap in discrete diffusion. |

### 📊 Applications (Domain-Specific, Multimodal, Code, Science)

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[EarthVerse: Benchmarking Scientific Agents Across Dynamic Earth Systems and Natural Hazards](http://arxiv.org/abs/2608.23525v1)** | Cui, Yin, Tang et al. | Benchmark for agents that must fuse multi-source, multi-scale, multi-modal Earth observation data under hazard uncertainty — pushes agent eval into scientific reasoning. |
| **[InjecMEM: Memory Injection Attack on LLM Agent Memory Systems](http://arxiv.org/abs/2608.23471v1)** | Tian, Zhang, Sha et al. | Demonstrates a practical memory injection attack requiring only *one* malicious interaction to persistently corrupt agent behavior — exposes a new attack surface in deployed agent memory. |
| **[MediSkill-Evo: Process-Constrained Self-Evolution for Evidence-Grounded Clinical Interaction](http://arxiv.org/abs/2608.23397v1)** | Wu, Xie, Sun et al. | Clinical agent that self-evolves under *process constraints* (evidence gathering, care protocols), not just outcome accuracy — shifts medical AI eval toward procedural fidelity. |

---

## 3. Research Trend Signal (≈160 words)

Three convergent directions define the emerging frontier. **First, credit assignment for long horizons** is being attacked from multiple angles: self-reflection (SRPO), critic stabilization, world-model memory/control separation (ReWorld), and procedural skill distillation (SkillAlchemy). The field recognizes that next-token prediction and short-horizon RL are insufficient for autonomous agents. **Second, provable guarantees are migrating from theory into systems papers** — adaptive discrete diffusion sampling, flow convergence, timely classification with performance bounds, and Chebyshev extrapolation with error certificates. This suggests a maturing ML engineering discipline demanding deployable reliability. **Third, evaluation is specializing**: generic chat benchmarks are yielding to *task-structured* suites (SWE Refactor for migration, EarthVerse for scientific synthesis, StrategyBench for explicit induction, VAT determination for regulatory reasoning). The next wave will likely combine these threads: agents that *provably* acquire and compose verified skills for *measured* long-horizon tasks in *specific* domains, with safety guarantees against reasoning-induced drift and memory corruption.

---

## 4. Worth Deep Reading

| Paper | Reason |
|-------|--------|
| **[ReWorld: An Interactive World Model with Long-Horizon Memory](http://arxiv.org/abs/2608.23565v1)** | The clean architectural separation of control vs. memory horizons, with mixed per-head attention binding at inference, is a *design pattern* likely to influence world-model architectures broadly — not just for video but for any embodied agent requiring persistent spatial reasoning. |
| **[How to Train a Critic Stably and Efficiently](http://arxiv.org/abs/2608.23566v1)** | If the stabilized critic recipe delivers on its promise, it changes the economics of LLM post-training: single-response token-level advantages could replace 16–64x sampling in GRPO, making RLHF/RLHF-style alignment dramatically cheaper and more accessible. |
| **[InjecMEM: Memory Injection Attack on LLM Agent Memory Systems](http://arxiv.org/abs/2608.23471v1)** | The first systematic study of *persistent* memory corruption in deployed agents. As memory becomes a default subsystem, this attack class will drive a new research area: *memory safety* — analogous to how prompt injection spawned guardrail research. Essential reading for anyone building production agent systems. |

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*