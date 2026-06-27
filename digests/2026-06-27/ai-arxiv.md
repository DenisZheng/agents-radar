# ArXiv AI 研究日报 2026-06-27

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-27 00:38 UTC

---

# ArXiv AI 研究日报

**2026年6月27日 · 第13期**

---

## 一、今日速览

今日 ArXiv AI 领域投稿呈现三大热点：

1. **无Ground-Truth RL训练范式突破** — RiVER 框架表明，即使没有标准答案，LLM 也能通过排序机制进行强化学习训练，大幅拓展了 RLVR 的应用边界。
2. **智能体持续升温** — GUI 智能体、具身智能体、Agentic BPM 等多个方向并行推进，从规划推理到物理自动化全面渗透。
3. **LLM 鲁棒性与安全性研究深入** — 从幻觉预测与预防、提示注入攻击分类，到安全分类器的意图感知训练，模型可靠性研究正走向机制化、系统化。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| # | 论文 | 作者 | 核心贡献 |
|---|------|------|----------|
| 2 | **[Reinforcement Learning without Ground-Truth Solutions can Improve LLMs](http://arxiv.org/abs/2606.27369v1)** | Lin, Lin, Gao et al. | 提出 RiVER 排序诱导可验证框架，摆脱 RLVR 对标准答案的依赖，将强化学习扩展至无 Ground-Truth 任务。 |
| 4 | **[When are likely answers right? On Sequence Probability and Correctness in LLMs](http://arxiv.org/abs/2606.27359v1)** | Zenn & Geiping | 系统研究"序列概率 vs 正确性"的关系，为所有基于概率偏移的解码方法提供理论基础。 |
| 12 | **[LLM-Based Examination of Eligibility Criteria from Securities Prospectuses at the German Central Bank](http://arxiv.org/abs/2606.27316v1)** | Hamotskyi et al. | 将 LLM 应用于金融监管文档的合规性核验，展示 LLM 在高度专业化领域的落地方案。 |
| 21 | **[When Does Combining Language Models Help? A Co-Failure Ceiling on Routing, Voting, and Mixture-of-Agents Across 67 Frontier Models](http://arxiv.org/abs/2606.27288v1)** | Chen, Josef | 证明多模型组合系统的准确率存在"共失败上限"，挑战了多模型融合必然更优的直觉。 |
| 40 | **[Ask, Don't Judge: Binary Questions for Interpretable LLM Evaluation and Self-Improvement](http://arxiv.org/abs/2606.27226v1)** | Cho, Chawla, Cai et al. | 提出 BINEVAL 框架——用二元判定题替代整体评分，解决 LLM 输出评估不可解释的瓶颈。 |

### 🤖 智能体与推理（规划、工具使用、多智能体）

| # | 论文 | 作者 | 核心贡献 |
|---|------|------|----------|
| 9 | **[Empowering GUI Agents via Autonomous Experience Exploration and Hindsight Experience Utilization for Task Planning](http://arxiv.org/abs/2606.27330v1)** | Men, Jin, Cao et al. | 让 GUI 智能体自主探索经验并事后复用，提升小规模 MLLM 的 GUI 任务规划能力。 |
| 22 | **[Prompt Injection in Automated Résumé Screening with Large Language Models: Single and Multi-Injection Settings](http://arxiv.org/abs/2606.27287v1)** | Baxi, Xu, Jiang et al. | 研究 LLM 求职简历筛选中的提示注入攻击，揭示自动化招聘系统的安全隐患。 |
| 31 | **[Advancing Omnimodal Embodied Agents from Isolated Skills to Everyday Physical Autonomy](http://arxiv.org/abs/2606.27251v1)** | Shi, Huai, Wang et al. | 实现具身智能体从孤立技能到日常物理自主操作的跨越，统一调度数字与物理工具。 |
| 37 | **[Bridging Talk and Thought: Understanding Dialogue Dynamics Across Collaborative Problem-Solving Contexts](http://arxiv.org/abs/2606.27233v1)** | Liu, Yin, Kan et al. | 提出协作问题解决中的对话动态分析框架，关注人机/多智能体交互的新兴模式。 |
| 49 | **[Automating Potential-based Reward Shaping with Vision Language Model Guidance](http://arxiv.org/abs/2606.27180v1)** | Müller & Kudenko | 用 VLM 指导势函数奖励塑形，解决稀疏奖励下 RL 智能体探索与奖励归因难题。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）

| # | 论文 | 作者 | 核心贡献 |
|---|------|------|----------|
| 3 | **[Autoregressive Boltzmann Generators](http://arxiv.org/abs/2606.27361v1)** | Rehman, Tan, Bengio et al. | 提出自回归波尔兹曼生成器，高效采样分子系统热力学平衡态，融合统计物理与生成建模。 |
| 10 | **[Hallucination in World Models is Predictable and Preventable](http://arxiv.org/abs/2606.27326v1)** | Hansen & Wang | 证明世界模型的幻觉集中在状态-动作空间的低覆盖区域，并提出预测与预防策略。 |
| 13 | **[Blackwell Approachability and Gradient Equilibrium are Equivalent](http://arxiv.org/abs/2606.27315v1)** | Lee, Haghtalab, Jordan et al. | 建立 Blackwell 可接近性与梯度平衡的等价性，为在线优化奠定理论基础。 |
| 19 | **[Generative Models on Analog Hardware with Dynamics](http://arxiv.org/abs/2606.27294v1)** | Wang & Achour | 利用模拟硬件（耦合振荡器）的动态特性加速生成建模，实现低功耗推理。 |
| 24 | **[Recovering Governing Equations from Solution Data: Identifiability Bounds for Linear and Nonlinear ODEs](http://arxiv.org/abs/2606.27285v1)** | Pan & Bölcskei | 为从数据中恢复控制方程提供可辨识性理论边界，推进科学机器学习基础。 |
| 30 | **[E-TTS: A New Embodied Test-Time Scaling Framework for Robotic Manipulation](http://arxiv.org/abs/2606.27268v1)** | Ye, Li, Yuan et al. | 提出具身任务的测试时扩展框架，研究推理在机器人操控中的缩放机制。 |
| 41 | **[Hierarchical Muon: Tiled Newton-Schulz Updates for Efficient Muon Optimization](http://arxiv.org/abs/2606.27216v1)** | Tang, Xu, Saad et al. | 提出分层 Muon 优化器，通过分块 Newton-Schulz 更新大幅提升矩阵优化效率。 |
| 33 | **[Effective Covariance Dynamics in Solvable High-Dimensional GANs](http://arxiv.org/abs/2606.27246v1)** | Bond & Doğan | 扩展可解 GAN 模型至结构化潜在协方差，深化对高维 GAN 训练动力学的理论理解。 |

### 📊 应用（垂直领域、多模态）

| # | 论文 | 作者 | 核心贡献 |
|---|------|------|----------|
| 6 | **[Mapping Political-Elite Networks in Europe with a Multilingual Joint Entity-Relation Extraction Pipeline](http://arxiv.org/abs/2606.27347v1)** | Solovev & Lasser | 构建多语言联合实体-关系抽取管道，大规模绘制欧洲政治精英关系网络。 |
| 8 | **[Language-Based Digital Twins for Elderly Cognitive Assistance](http://arxiv.org/abs/2606.27334v1)** | Hosseini, Mahoor, Dodge | 基于语言模式的数字孪生用于老年人轻度认知障碍早期检测。 |
| 14 | **[Beyond Surface Forms: A Comprehensive, Mechanism-Oriented Taxonomy of Indirect Linguistic Encoding for LLM-Based Coded Language Detection](http://arxiv.org/abs/2606.27314v1)** | Firoozfar, Abolhasani, Mousavi et al. | 提出间接语言编码的分类学，提升 LLM 对暗语、委婉语等规避审查行为的检测能力。 |
| 26 | **[EO-WM: A Physically Informed World Model for Probabilistic Earth Observation Forecasting](http://arxiv.org/abs/2606.27277v1)** | Luo, Yuan, Yang et al. | 提出物理信息的世界模型用于地球观测概率预测，将天气信号融入卫星影像推演。 |
| 43 | **[Paved with True Intents: Intent-Aware Training Improves LLM Safety Classification Across Training Regimes](http://arxiv.org/abs/2606.27210v1)** | Ferrao, Müller-Hof, Sîrbu et al. | 显式建模用户意图以改善 LLM 安全分类，跨训练 regime 均有效。 |
| 48 | **[A Process Harness for Uplifting Legacy Workflow to Agentic BPM: Design and Realization in CUGA FLO](http://arxiv.org/abs/2606.27188v1)** | Fournier & Limonad | 提出"流程线束"机制，将传统工作流平滑升级为 Agentic BPM，无需替换底层引擎。 |

---

## 三、研究趋势信号

今日投稿透露出三个正在加速成形的研究方向：

1. **测试时扩展（Test-Time Scaling）正在从数字世界走向物理世界** — E-TTS 将推理缩放的思路引入机器人操控，暗示"通过推理增强策略"可能成为具身智能的下一波关键范式。

2. **LLM 安全性研究从"粗粒度拦截"走向"细粒度理解"** — 包括提示注入分类、意图感知安全训练、间接语言编码检测等，均试图在理解攻击者意图和语义层面进行防御，而非简单关键词触发。

3. **多模型组合的理论反思正在兴起** — 共失败上限的研究（论文 21）提示社区：堆叠更多模型并不总能提升效果，模型多样性比模型数量可能更重要，这对当前流行的 MoE、投票、级联等方法是重要提醒。

---

## 四、值得精读

1. **[Reinforcement Learning without Ground-Truth Solutions can Improve LLMs](http://arxiv.org/abs/2606.27369v1)** — 直击 RLVR 最大痛点（依赖标准答案），RiVER 的排序诱导方法优雅且实用，有潜力成为 RL 后训练的新范式。建议关注其在大規模任务上的扩展实验。

2. **[When Does Combining Language Models Help?](http://arxiv.org/abs/2606.27288v1)** — 用 67 个前沿模型给出共失败上界的严格证明，对所有使用多模型系统的研究和工程实践具有直接指导价值，理论贡献扎实。

3. **[Hallucination in World Models is Predictable and Preventable](http://arxiv.org/abs/2606.27326v1)** — 从"幻觉是随机发生的"到"幻觉是可预测的"，这一观念转变对具身决策和视频生成系统都至关重要，实验设计巧妙，结论具有可操作性。

---

*本期日报由 AI 研究分析师生成 · 下期见*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*