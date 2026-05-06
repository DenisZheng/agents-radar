# ArXiv AI 研究日报 2026-04-24

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-04-24 00:18 UTC

---

# ArXiv AI 研究日报 | 2026-04-24

---

## 今日速览

今日ArXiv共收录50篇AI核心论文，研究热点集中在**多目标对齐与奖励优化**（3篇）、**智能体系统评估与训练**（4篇）以及**认知启发的架构改进**（2篇）。值得关注的是，多篇论文同时挑战"标量化奖励"这一行业惯例，转向Pareto最优与多目标优化；此外，从工作记忆约束到数字孪生模型适应，"类人生物机制"与"物理世界交互"正成为架构设计的新灵感来源。代码智能体首次出现大规模真实用户交互数据集（SWE-chat），填补了该领域实证研究的空白。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[Convergent Evolution: How Different Language Models Learn Similar Number Representations](http://arxiv.org/abs/2604.20817v1)** | Deqing Fu, Tianyi Zhou, Mikhail Belkin 等 | 发现Transformer、线性RNN、LSTM及词嵌入均以T=2,5,10的周期特征表示数字，揭示跨架构的"趋同进化"机制，为理解神经网络数字认知提供统一框架。 |
| **[Working Memory Constraints Scaffold Learning in Transformers under Data Scarcity](http://arxiv.org/abs/2604.20789v1)** | Pranava Madhyastha, Dagmar Adamcova | 将人类工作记忆约束（固定宽度窗口、时间衰减注意力）植入GPT-2，在数据稀缺场景下实现更优学习效果，为认知科学启发的架构设计开辟路径。 |
| **[MGDA-Decoupled: Geometry-Aware Multi-Objective Optimisation for DPO-based LLM Alignment](http://arxiv.org/abs/2604.20685v1)** | Andor Vári-Kakas, Ji Won Park, Natasa Tagasovska 等 | 针对DPO对齐中的多目标冲突，提出几何感知的多目标优化方法，避免固定标量化的次优性，直接优化Pareto前沿。 |
| **[Variance Is Not Importance: Structural Analysis of Transformer Compressibility Across Model Scales](http://arxiv.org/abs/2604.20682v1)** | Samuel Salfati | 对GPT-2与Mistral 7B进行40+实验的系统性压缩分析，发现方差并非重要性的可靠指标，挑战现有剪枝与量化假设。 |
| **[Intersectional Fairness in Large Language Models](http://arxiv.org/abs/2604.20677v1)** | Chaima Boufaied, Ronnie De Souza Santos, Ann Barcomb | 首次系统评估LLM在交叉人口属性（如种族×性别）上的公平性，使用歧义/消歧提示揭示隐藏偏见模式。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[SWE-chat: Coding Agent Interactions From Real Users in the Wild](http://arxiv.org/abs/2604.20779v1)** | Joachim Baumann, Vishakh Padmakumar, Xiang Li 等 | 首个大规模真实用户编码智能体会话数据集，揭示实际使用模式与输出效用，为代码智能体评估提供亟需的实证基础。 |
| **[Learning to Evolve: A Self-Improving Framework for Multi-Agent Systems via Textual Parameter Graph Optimization](http://arxiv.org/abs/2604.20714v1)** | Shan He, Runze Wang, Zhuoyun Du 等 | 将多智能体系统视为"文本参数图"进行自优化，突破扁平提示调优的结构性局限，实现交互网络的自动调试与进化。 |
| **[Supplement Generation Training for Enhancing Agentic Task Performance](http://arxiv.org/abs/2604.20727v1)** | Young Min Cho, Daniele Bonadiman, Divya Bhargavi 等 | 提出"补充生成训练"（SGT），无需全量后训练即可为现有大模型注入智能体能力，解决模型快速迭代带来的训练成本困境。 |
| **[Diagnosing CFG Interpretation in LLMs](http://arxiv.org/abs/2604.20811v1)** | Hanqi Li, Lu Chen, Kai Yu | 系统评估LLM作为上下文无关文法解释器的能力，测试语法正确性、行为功能性与语义忠实性，为工具使用型智能体的接口遵循能力提供诊断基准。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[ParetoSlider: Diffusion Models Post-Training for Continuous Reward Control](http://arxiv.org/abs/2604.20816v1)** | Shelly Golan, Michael Finkelson, Ariel Bereslavsky 等 | 扩散模型后训练新方法，通过连续滑块实现多奖励维度的Pareto前沿探索，无需重新训练即可动态调整生成偏好。 |
| **[V-tableR1: Process-Supervised Multimodal Table Reasoning with Critic-Guided Policy Optimization](http://arxiv.org/abs/2604.20755v1)** | Yubo Jiang, Yitong An, Xin Yang 等 | 针对多模态表格推理的过程监督强化学习框架，引入批评者引导的策略优化，将视觉推理从黑箱模式匹配转化为可验证的逐步推理。 |
| **[Stream-CQSA: Avoiding Out-of-Memory in Attention Computation via Flexible Workload Scheduling](http://arxiv.org/abs/2604.20819v1)** | Yiming Bian, Joshua M. Akey | 通过灵活工作负载调度避免精确自注意力的OOM崩溃，在保持近线性内存效率的同时突破现有方法的全序列假设限制。 |
| **[Coverage, Not Averages: Semantic Stratification for Trustworthy Retrieval Evaluation](http://arxiv.org/abs/2604.20763v1)** | Andrew Klearman, Radu Revutchi, Rohin Garg 等 | 将检索评估重新形式化为统计估计问题，提出语义分层替代平均指标，消除启发式查询集构建的隐藏偏差，为RAG系统可靠性提供严格基础。 |
| **[Near-Future Policy Optimization](http://arxiv.org/abs/2604.20733v1)** | Chuanyu Qin, Chenxu Yang, Qingyi Si 等 | RLVR后训练新范式，利用"近未来"离策略轨迹加速收敛并提升性能上限，解决优质探索轨迹来源的关键瓶颈。 |

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[SpeechParaling-Bench: A Comprehensive Benchmark for Paralinguistic-Aware Speech Generation](http://arxiv.org/abs/2604.20842v1)** | Ruohan Liu, Shukang Yin, Tao Wang 等 | 首个大规模副语言感知语音生成基准，系统评估大型音频语言模型在情感、韵律等副语言特征上的表现，填补LALMs评估空白。 |
| **[OMIBench: Benchmarking Olympiad-Level Multi-Image Reasoning in Large Vision-Language Model](http://arxiv.org/abs/2604.20806v1)** | Qiguang Chen, Chengyu Luan, Jiajun Wu 等 | 面向大型视觉语言模型的奥林匹克级多图像推理基准，突破现有单图像评估局限，测试跨图像上下文整合与复杂推理能力。 |
| **[Can "AI" Be a Doctor? A Study of Empathy, Readability, and Alignment in Clinical LLMs](http://arxiv.org/abs/2604.20791v1)** | Mariano Barone, Francesco Di Serio, Roberto Moio 等 | 多维度评估临床LLM的共情表达、可读性与临床标准对齐度，量化医疗AI沟通质量的现实差距。 |
| **[Closing the Domain Gap in Biomedical Imaging by In-Context Control Samples](http://arxiv.org/abs/2604.20824v1)** | Ana Sanchez-Fernandez, Thomas Pinetz, Werner Zellinger 等 | 利用上下文控制样本消除生物医学成像中的批次效应，无需重新训练即可提升深度学习系统在新实验批次上的泛化能力。 |

---

## 研究趋势信号

**"去标量化"运动兴起**：今日3篇论文（ParetoSlider、MGDA-Decoupled、COMPASS）同时挑战将多目标压缩为单一标量奖励的行业惯例，转向Pareto最优、几何感知优化与自适应采样，反映对齐研究从"简化问题"向"尊重复杂性"的范式转变。**认知-物理双驱动架构设计**：工作记忆约束、数字孪生模型适应等研究将人类认知机制与物理世界动态性嵌入模型设计，超越纯数据驱动的扩展定律。**真实场景实证优先**：SWE-chat首次提供代码智能体的大规模真实使用数据，标志该领域从合成基准向"野外"实证研究的转型。

---

## 值得精读

### 1. [Convergent Evolution: How Different Language Models Learn Similar Number Representations](http://arxiv.org/abs/2604.20817v1)
**理由**：该论文发现Transformer、线性RNN、LSTM及经典词嵌入在数字表示上呈现惊人的跨架构趋同——均以T=2,5,10为优势周期。这一发现具有双重价值：其一，为神经网络"涌现能力"的机理研究提供具体、可验证的解剖案例；其二，揭示的"两层级层次结构"（跨架构共享的通用层与架构特定的实现层）可能适用于其他认知功能的表示分析，为理解深度学习的基础归纳偏置开辟新路径。

### 2. [SWE-chat: Coding Agent Interactions From Real Users in the Wild](http://arxiv.org/abs/2604.20779v1)
**理由**：代码智能体是当前AI产品化的前沿阵地，但研究长期受限于合成基准与实验室环境。该数据集首次捕获开源开发者的真实交互模式，包含会话结构、工具调用序列、用户修正行为等丰富信号。对于构建下一代代码智能体评估协议、理解人机协作中的"有用性"定义、以及设计更贴合实际工作流的交互界面，该数据具有不可替代的基础价值。

### 3. [ParetoSlider: Diffusion Models Post-Training for Continuous Reward Control](http://arxiv.org/abs/2604.20816v1)
**理由**：在多目标生成场景（如图像需同时满足美学质量、文本对齐、安全性等约束）中，"提前标量化"导致僵化权衡。该方法的"连续滑块"交互范式允许用户在推理阶段动态探索Pareto前沿，无需为每种偏好组合重新训练。这一"训练一次、无限调控"的框架，若与LLM的多目标对齐研究（如MGDA-Decoupled）交叉融合，可能催生下一代可控生成系统的统一理论。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*