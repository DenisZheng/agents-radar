# ArXiv AI Research Digest 2026-04-18

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-04-18 00:23 UTC

---

**ArXiv AI Research Digest – April 18, 2026**

---

### **Today's Highlights**

This week’s submissions reflect a maturation of agentic AI systems with growing emphasis on reliability, interpretability, and domain-specific deployment. A strong thread concerns the robustness and evaluation of LLM-based judges—both in isolation and within multi-agent environments—with new tools diagnosing transitivity violations and contextual manipulation vulnerabilities. Simultaneously, advances in efficient inference (e.g., symbolic tensor optimization, token merging) and uncertainty-aware medical imaging segmentation signal continued focus on scalability and safety-critical applications. The emergence of benchmarks targeting cooperation in social dilemmas and executable trading strategies further highlights the expanding scope of LLM reasoning beyond language into structured, goal-driven domains.

---

### **Key Papers**

#### 🧠 Large Language Models

1. **[Diagnosing LLM Judge Reliability: Conformal Prediction Sets and Transitivity Violations](http://arxiv.org/abs/2604.15302v1)**  
   *Gupta & Kumar*  
   Introduces a dual-method diagnostic toolkit revealing widespread inconsistency in LLM-as-judge outputs through transitivity analysis and conformal prediction sets, exposing hidden unreliability in automated evaluation pipelines.

2. **[Context Over Content: Exposing Evaluation Faking in Automated Judges](http://arxiv.org/abs/2604.15224v1)**  
   *Gupta et al.*  
   Demonstrates that LLMs can be manipulated via stakes-signaling context to fabricate favorable evaluations, challenging the assumption that judges assess content independently of framing.

3. **[From Tokens to Steps: Verification-Aware Speculative Decoding for Efficient Multi-Step Reasoning](http://arxiv.org/abs/2604.15244v1)**  
   *Purohit et al.*  
   Proposes a step-level verification mechanism for speculative decoding that prevents error propagation by validating intermediate reasoning steps rather than just final tokens.

4. **[CoopEval: Benchmarking Cooperation-Sustaining Mechanisms and LLM Agents in Social Dilemmas](http://arxiv.org/abs/2604.15267v1)**  
   *Tewolde et al.*  
   Presents CoopEval, a benchmark showing that stronger LLMs paradoxically reduce cooperative behavior in mixed-motive games, urging design of incentive-aligned architectures.

5. **[Prism: Symbolic Superoptimization of Tensor Programs](http://arxiv.org/abs/2604.15272v1)**  
   *Wu et al.*  
   Introduces Prism, the first symbolic superoptimizer for tensor programs using a novel sGraph representation, enabling provable correctness-preserving optimizations in deep learning compilers.

#### 🤖 Agents & Reasoning

6. **[MM-WebAgent: A Hierarchical Multimodal Web Agent for Webpage Generation](http://arxiv.org/abs/2604.15309v1)**  
   *Li et al.*  
   Describes a hierarchical multimodal agent that integrates vision, language, and code generation to autonomously construct webpages from high-level natural language specifications.

7. **[RadAgent: A tool-using AI agent for stepwise interpretation of chest computed tomography](http://arxiv.org/abs/2604.15231v1)**  
   *Roschewitz et al.*  
   Develops RadAgent, an LLM-powered agent that generates clinically interpretable, step-by-step reasoning traces for CT scans—enhancing transparency for radiologists.

8. **[Scepsy: Serving Agentic Workflows Using Aggregate LLM Pipelines](http://arxiv.org/abs/2604.15186v1)**  
   *Wagenländer et al.*  
   Introduces Scepsy, a serving system that manages variable execution times and framework heterogeneity in agentic workflows through aggregate pipeline scheduling.

#### 🔧 Methods & Frameworks

9. **[SegWithU: Uncertainty as Perturbation Energy for Single-Forward-Pass Risk-Aware Medical Image Segmentation](http://arxiv.org/abs/2604.15271v1)**  
   *Fu et al.*  
   Proposes a lightweight uncertainty quantification method based on perturbation energy, achieving reliable single-pass risk assessment in medical segmentation without repeated inference.

10. **[VisPCO: Visual Token Pruning Configuration Optimization via Budget-Aware Pareto-Frontier Learning](http://arxiv.org/abs/2604.15188v1)**  
    *Ji et al.*  
    Automatically optimizes visual token pruning configurations across accuracy-efficiency trade-offs using learned Pareto-frontier models, eliminating manual tuning.

11. **[One-shot learning for complex dynamical behaviors of weakly nonlinear forced oscillators](http://arxiv.org/abs/2604.15181v1)**  
    *Ma et al.*  
    Applies MEv-SINDy to learn governing equations from a single time series, enabling extrapolative prediction of nonlinear dynamics without iterative simulation.

12. **[AdaSplash-2: Faster Differentiable Sparse Attention](http://arxiv.org/abs/2604.15180v1)**  
    *Gonçalves et al.*  
    Accelerates α-entmax sparse attention with hardware-aware kernels and dynamic sparsity patterns, closing performance gaps with dense attention on long sequences.

#### 📊 Applications

13. **[QuantCode-Bench: A Benchmark for Executable Algorithmic Trading Strategies](http://arxiv.org/abs/2604.15151v1)**  
    *Khoroshilov et al.*  
    QuantCode-Bench evaluates LLMs on generating, validating, and backtesting executable trading strategies—bridging NLP and quantitative finance rigorously.

14. **[Blinded Multi-Rater Comparative Evaluation of LLM vs Clinician Responses in CGM Counseling](http://arxiv.org/abs/2604.15124v1)**  
    *Guo et al.*  
    Conducts a blinded clinical trial comparing LLM-generated diabetes counseling grounded in CGM data against clinician-authored responses, assessing empathy, accuracy, and clarity.

15. **[MADE: Living Benchmark for Multi-Label Text Classification with UQ of Medical Device Adverse Events](http://arxiv.org/abs/2604.15203v1)**  
    *Agarwal et al.*  
    MADE provides continuously updated, uncertainty-quantified labels for adverse event detection in medical devices, addressing label noise and drift in real-world deployments.

---

### **Research Trend Signal**

This week’s papers collectively signal a pivotal shift toward **systematic reliability engineering** in agentic AI. With agents increasingly deployed in high-stakes domains (medical imaging, autonomous driving, financial trading), researchers are moving beyond performance metrics to address failure modes such as judge inconsistency, reward hacking, and distributional shift. The proliferation of diagnostic tools—like transitivity checks for LLM judges and conformal prediction sets—reflects demand for verifiable behavior. Concurrently, efficiency innovations (symbolic tensor optimization, token merging, sparse attention) aim to sustain scaling without sacrificing correctness. Crucially, many works now embed **human-in-the-loop validation**, whether through clinical trials or rhetorical strategy analysis, underscoring that next-generation AI must interoperate transparently with human experts rather than replace them outright. Finally, the rise of domain-specific benchmarks (trading, medical counseling, maritime coverage) indicates that general-purpose capabilities are being refined into specialized, auditable systems.

---

### **Worth Deep Reading**

1. **[Diagnosing LLM Judge Reliability: Conformal Prediction Sets and Transitivity Violations](http://arxiv.org/abs/2604.15302v1)**  
   This paper is essential reading given the centrality of LLM-as-a-judge paradigms in modern ML evaluation. Its rigorous statistical diagnostics offer a blueprint for building trustworthy automated evaluators.

2. **[RadAgent: A tool-using AI agent for stepwise interpretation of chest computed tomography](http://arxiv.org/abs/2604.15231v1)**  
   Represents a mature integration of agentic reasoning with clinical workflow transparency. The stepwise trace generation model could become a template for explainable AI in medicine.

3. **[Prism: Symbolic Superoptimization of Tensor Programs](http://arxiv.org/abs/2604.15272v1)**  
   Offers a foundational advance in program optimization with implications for both correctness and efficiency. The sGraph abstraction may influence future compiler design for neural networks.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*