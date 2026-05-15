# ArXiv AI Research Digest 2026-05-15

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-05-15 00:33 UTC

---

**ArXiv AI Research Digest**  
*May 15, 2026*

---

### **Today's Highlights**

This week’s submissions reveal a strong focus on **efficiency and robustness in large-scale AI systems**, particularly around LLM inference, secure aggregation, and streaming architectures. A notable thread involves overcoming data scarcity through innovative pretraining strategies—both in language (tiny-scale MoE vs dense models) and physical simulation (sparse PDE observations). Meanwhile, safety and interpretability remain central: hallucination detection now operates at the step level, while new frameworks audit software requirements and expose hidden biases in agent behavior. The rise of multimodal agents continues, but with fresh scrutiny into perception-action gaps in omnimodal systems.

---

### **Key Papers**

#### 🧠 **Large Language Models**
- **[WARDEN](http://arxiv.org/abs/2605.13846v1)** – Z. Zhang et al. | Introduces WARDEN, an early LLM that transcribes and translates Wardaman—an endangered Australian language—using only 6 hours of audio, demonstrating feasibility for ultra-low-resource languages.
- **[Dense vs Sparse Pretraining at Tiny Scale](http://arxiv.org/abs/2605.13769v1)** – A. Wael | Systematically compares dense and Mixture-of-Experts transformers under shared training recipes, revealing active-parameter matching as critical for fair comparison in low-data regimes.
- **[Attention Once Is All You Need](http://arxiv.org/abs/2605.13784v1)** – V. Norgren | Proposes stateful transformers enabling O(1) incremental updates during streaming inference, eliminating redundant prefill costs common in request-driven engines.

#### 🤖 **Agents & Reasoning**
- **[Good Agentic Friends Do Not Just Give Verbal Advice](http://arxiv.org/abs/2605.13839v1)** – W. Bao et al. | Shows that LLMs can directly update each other’s weights instead of exchanging text, reducing communication overhead and preserving intermediate computation fidelity.
- **[History Anchors](http://arxiv.org/abs/2605.13825v1)** – A.G. Rodríguez Salgado | Demonstrates that harmful prior actions persist in LLM decision chains, raising safety concerns for multi-step agentic workflows.
- **[ScioMind](http://arxiv.org/abs/2605.13725v1)** – Y. Yang et al. | Introduces cognitively grounded belief dynamics in LLM-based social simulations via anchoring mechanisms, moving beyond black-box opinion shifts.

#### 🔧 **Methods & Frameworks**
- **[KVServe](http://arxiv.org/abs/2605.13734v1)** – Z. Liu et al. | Optimizes KV cache compression in disaggregated LLM serving by aligning compression with service-level objectives, cutting cross-node communication without quality loss.
- **[MinT](http://arxiv.org/abs/2605.13779v1)** – M. Lab et al. | Presents MinT, a managed infrastructure for efficiently storing and serving millions of LoRA adapters from few base models, scaling fine-tuning-as-a-service.
- **[Provable Quantization with Randomized Hadamard Transform](http://arxiv.org/abs/2605.13810v1)** – Y. Feng et al. | Offers theoretical guarantees for vector quantization using randomized Hadamard transforms, improving efficiency over dense rotations in federated learning and retrieval.

#### 📊 **Applications**
- **[Uncertainty-Driven Anomaly Detection for Psychotic Relapse](http://arxiv.org/abs/2605.13816v1)** – N. Tsalkitzis et al. | Fuses multi-task learning with uncertainty quantification on smartwatch data to forecast psychiatric relapse, advancing digital phenotyping.
- **[Di-BiLPS](http://arxiv.org/abs/2605.13790v1)** – Z. Li et al. | Solves sparse-observation PDE problems via bidirectional latent solvers with denoising, enabling accurate modeling where traditional methods fail.
- **[MILM](http://arxiv.org/abs/2605.13711v1)** – H.-H. Chung et al. | Adapts LLMs to irregular multimodal time series (e.g., EHRs) via informative sampling, capturing asynchronous clinical data effectively.

---

### **Research Trend Signal**

A clear trend emerging from today’s papers is the **tight integration of efficiency, robustness, and domain-specific adaptation** in modern AI systems. On the infrastructure side, disaggregated LLM serving (KVServe, MinT) and streaming inference (Attention Once...) reflect a push toward scalable, cost-aware deployment. Simultaneously, researchers are addressing fundamental limitations: sparse data (WARDEN, Di-BiLPS), unreliable evaluations (Reproducibility via annotator modeling), and unsafe reasoning trajectories (History Anchors, Negation Neglect). Multimodality advances (LMPath, Senses Wide Shut) are now coupled with rigorous failure analysis, signaling maturity beyond mere capability demonstration. Finally, quantum-inspired techniques (QLAM) and neurosymbolic auditing suggest growing interest in combining structural priors with learned representations—especially where interpretability and correctness are non-negotiable.

---

### **Worth Deep Reading**

1. **[Attention Once Is All You Need](http://arxiv.org/abs/2605.13784v1)** – This paper rethinks transformer inference as a stateful process, offering a paradigm shift from request-driven to data-driven execution. Its implications for real-time applications like autonomous systems and live translation are profound.

2. **[Negation Neglect](http://arxiv.org/abs/2605.13829v1)** – A stark warning about how LLM alignment can backfire when models are finetuned on “false” claims flagged as such. It exposes a subtle but dangerous failure mode in knowledge updating and deserves attention from safety researchers.

3. **[MinT: Managed Infrastructure for Training and Serving Millions of LLMs](http://arxiv.org/abs/2605.13779v1)** – As fine-tuning proliferates, MinT addresses the operational bottleneck of storing and retrieving countless LoRA variants. Understanding its architecture will be key for organizations managing model portfolios at scale.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*