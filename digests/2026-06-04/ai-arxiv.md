# ArXiv AI 研究日报 2026-06-04

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-04 00:48 UTC

---

# ArXiv AI 研究日报 · 2026-06-04

---

## 一、今日速览

今日 ArXiv 的 AI 研究呈现出几个清晰的主线：**大模型推理效率与可控性**成为核心议题，多篇论文从 KV Cache 压缩、思维链引导、推理结构分析等角度切入；**强化学习训练范式**持续演进，尤其在奖励模型设计、视觉推理中的 RL 信用分配、以及查询-评分标准协同优化方面取得新进展；**具身智能与多模态**方向活跃，涵盖人形机器人运动跟踪、视觉语言安全监控、无人机导航等；此外，**训练方法论**（超大规模预训练新范式、Muon 优化器理论分析、Forward-Forward 回归扩展）和**垂直领域基准**（金融推理、单细胞多组学、数学能力评估）也值得关注。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. [Neuron Populations Exhibit Divergent Selectivity with Scale](http://arxiv.org/abs/2606.03990v1)**
作者：A. Dravid, Y. Bahri, A. A. Efros et al.
> 将 Scaling Law 从宏观损失曲线深入到神经元群体层面，发现 Rosetta Neurons 的激活模式随模型规模发生可预测的分化，为理解模型内部表征演化提供了微观视角。

**2. [Language Models Need Sleep: Learning to Self-Modify and Consolidate Memories](http://arxiv.org/abs/2606.03979v1)**
作者：A. Behrouz, F. Hashemi, V. Mirrokni
> 提出让 LLM 模拟"睡眠"机制来自主修改和巩固记忆，突破当前模型仅擅长即时预测或上下文学习的局限，向持续学习迈出重要一步。

**3. [Quantifying Faithful Confidence Expression in Large Reasoning Models](http://arxiv.org/abs/2606.03969v1)**
作者：A. Gani, A. Meskin, G. K.-M. Liu et al.
> 系统量化大型推理模型中内在置信度与语言表达置信度之间的对齐程度（FC），揭示了推理模型在不确定性沟通上的系统性失效模式。

**4. [q0: Primitives for Hyper-Epoch Pretraining](http://arxiv.org/abs/2606.03938v1)**
作者：B. Mandal, S. Berman, A. Vegesna et al.
> 提出"超纪元预训练"概念，认为在计算增长快于高质量文本供给的时代，应从训练单一模型转向多轮训练范式，为预训练策略提供新框架。

**5. [Denoise First, Orthogonalize Later: Understanding Momentum in Muon via Spectral Filtering](http://arxiv.org/abs/2606.03899v1)**
作者：X. Li, Z. Zhang, W. Liu et al.
> 首次从谱滤波角度解释 Muon 优化器中动量机制的理论作用，填补了 Muon 在大语言模型训练中表现优异但理论理解不足的关键空白。

**6. [Reasoning Structure of Large Language Models](http://arxiv.org/abs/2606.03883v1)**
作者：F. Berdoz, L. A. Lanzendörfer, F. Farestam et al.
> 超越最终答案准确率，引入逻辑谜题基准和推理结构分析管线，揭示相同分数下 LLM 推理路径的根本性差异。

**7. [PyraMathBench: Evaluating and Improving Mathematical Capability in Large Language Models](http://arxiv.org/abs/2606.03858v1)**
作者：Z. Ouyang, L. Wang, G. de Melo et al.
> 提出融合数值处理与数学推理的综合评估基准，弥补现有基准在数学能力可解释性评估上的不足。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**8. [Agentic Chain-of-Thought Steering for Efficient and Controllable LLM Reasoning](http://arxiv.org/abs/2606.03965v1)**
作者：Y. Xia, Z. Xie, X. Xu et al.
> 提出 Agentic CoT Steering 方法，在推理过程中动态引导思维链走向，实现推理效率与可控性的统一，而非简单截断或压缩。

**9. [Synthesize and Reward — Reinforcement Learning for Multi-Step Tool Use in Live Environments](http://arxiv.org/abs/2606.03892v1)**
作者：I. Abdelaziz, A. Munawar, K. Basu et al.
> 针对多步工具调用的三大障碍（环境构建成本高、合成查询与实际状态脱节、基于召回的 RL 奖励不准），提出合成-奖励联合训练框架。

**10. [Self-Refining Agentic Reinforcement Learning for Vision-Conditioned UAV Navigation](http://arxiv.org/abs/2606.03963v1)**
作者：R. A. Khan, Y. Yaqoot, M. A. Mustafa et al.
> 提出自精炼的 Agentic RL 框架，减少视觉导航中对人工设计奖励函数和反复调参的依赖，提升无人机自主导航的实用性。

**11. [Agent libOS: A Library-OS-Inspired Runtime for Long-Running, Capability-Controlled LLM Agents](http://arxiv.org/abs/2606.03895v1)**
作者：Y. Zhang
> 借鉴 Library OS 设计理念，为长期运行的 LLM Agent 构建运行时框架，支持状态维护、子任务分叉、外部事件等待、权限请求等复杂 Agent 行为。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**12. [Skill-RM: Unifying Heterogeneous Evaluation Criteria via Agent Skill](http://arxiv.org/abs/2606.03980v1)**
作者：T. Chen, G. Jiang, P. Cheng et al.
> 提出 Skill-RM，以 Agent 技能为统一框架整合规则验证器、参考答案、程序检查清单等异构评估标准，为 LLM 后训练提供更丰富的奖励信号。

**13. [QUBRIC: Co-Designing Queries and Rubrics for RL Beyond Verifiable Rewards](http://arxiv.org/abs/2606.03968v1)**
作者：R. Zhang, R. Feng, Z. Zhang et al.
> 发现查询结构与评分标准之间存在结构性瓶颈，提出 QUBRIC 协同优化查询分布与评分标准，突破可验证奖励之外的 RL 训练限制。

**14. [Value-Aware Stochastic KV Cache Eviction for Reasoning Models](http://arxiv.org/abs/2606.03928v1)**
作者：T.-Y. Chang, H. Y. Fu, D. Fu et al.
> 提出基于价值感知的随机 KV Cache 淘汰策略，在推理模型的内存-计算瓶颈与准确率之间取得更优平衡。

**15. [Entropy Is Not Enough: Unlocking Effective Reinforcement Learning for Visual Reasoning via Vision-Anchored Token Selection](http://arxiv.org/abs/2606.03937v1)**
作者：S. Jin, P. Wang, B. Liu et al.
> 发现纯文本 RLVR 中有效的 token 级熵信用分配机制在视觉推理中失效，提出视觉锚定 Token Selection 方法解锁视觉推理中的有效 RL 训练。

---

### 📊 应用（垂直领域、多模态、代码生成）

**16. [Humanoid-GPT: Scaling Data and Structure for Zero-Shot Motion Tracking](http://arxiv.org/abs/2606.03985v1)**
作者：Z. Qi, X. Chen, D. Liu et al.
> 基于 20 亿帧重定向运动语料训练的 GPT 式 Transformer，实现零样本全身运动跟踪，突破浅层 MLP 跟踪器在敏捷性与泛化性之间的权衡。

**17. [VLESA: Vision-Language Embodied Safety Agent for Human Activity Monitoring](http://arxiv.org/abs/2606.03954v1)**
作者：H. Hu, Y. Pan, J. Li et al.
> 提出视觉语言具身安全 Agent 框架，从第一视角监控人类活动并实时评估物理安全风险，应对 AI 辅助物理任务中的安全挑战。

**18. [Hedge-Bench: Benchmarking Agents on Hard, Realistic Tasks Pertaining to Financial Reasoning](http://arxiv.org/abs/2606.03918v1)**
作者：E. Cho, S. Huang, A. Lu et al.
> 构建面向金融专家级分析推理的 Agent 基准测试，聚焦开放式复杂推理问题，弥补现有基准在金融领域深度推理评估上的空白。

**19. [scTranslation: A Comprehensive Benchmark for Single-Cell Multi-Omics Modality Translation](http://arxiv.org/abs/2606.03906v1)**
作者：J. Cheng, J. Zhou, J. Xia et al.
> 提出单细胞多组学模态转换的综合基准，推动计算生物学中跨组学数据整合方法的发展。

---

## 三、研究趋势信号

从今日 50 篇投稿中可以观察到几个新兴方向正在加速汇聚：

**推理效率与可控性**成为最密集的投稿方向——从 KV Cache 淘汰（#24）、CoT 引导（#11）、推理结构分析（#42）到置信度校准（#8），研究者不再满足于"能推理"，而是追求"高效且可控地推理"。**RL 训练范式的精细化**同样显著，奖励模型统一（#5）、查询-评分协同设计（#9）、视觉 RL 信用分配（#21）等工作表明 RL 研究正从粗放走向系统。**具身智能的实用化**趋势明显，人形机器人（#3）、无人机导航（#12）、安全监控（#15）等工作都在解决真实部署中的工程挑战。此外，**训练方法论的理论深化**（Muon 动量分析 #36、超纪元预训练 #20、Forward-Forward 回归扩展 #25）和**Agent 基础设施**（Agent libOS #37、RealClawBench #39）也预示着 AI 系统正在向更成熟、更工程化的方向演进。

---

## 四、值得精读

**1. [Neuron Populations Exhibit Divergent Selectivity with Scale](http://arxiv.org/abs/2606.03990v1)**
**理由：** 这项工作将 Scaling Law 的研究范式从宏观性能指标推进到神经元群体的微观层面，为"模型规模如何改变内部表征"这一根本问题提供了实证证据。对于理解大模型涌现能力、设计更高效的模型架构具有重要参考价值，且方法论具有可扩展性。

**2. [QUBRIC: Co-Designing Queries and Rubrics for RL Beyond Verifiable Rewards](http://arxiv.org/abs/2606.03968v1)**
**理由：** 精准识别了当前 RL 训练中"查询分布固定"这一被忽视的结构性瓶颈，提出了查询与评分标准协同设计的新范式。这一洞察对 RLHF、RLAIF 等主流对齐训练流程具有直接的方法论启示，可能成为扩展 RL 到非可验证领域的关键突破口。

**3. [Agent libOS: A Library-OS-Inspired Runtime for Long-Running, Capability-Controlled LLM Agents](http://arxiv.org/abs/2606.03895v1)**
**理由：** 当 LLM Agent 从简单的请求-响应模式演进为长期运行的软件 Actor 时，系统层面的基础设施设计变得至关重要。这篇论文借鉴 Library OS 的设计哲学，为 Agent 运行时提供了系统化的架构思考，对构建可审计、可恢复、安全可控的生产级 Agent 系统具有前瞻意义。

---

*OWL · ArXiv AI 研究日报 · 2026-06-04*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*