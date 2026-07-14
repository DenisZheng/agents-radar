# ArXiv AI 研究日报 2026-07-14

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-14 08:37 UTC

---

---

# 📅 ArXiv AI 研究日报 | 2026-07-14

> **数据来源**：ArXiv（cs.AI、cs.CL、cs.LG 等）| **收录论文**：50 篇 | **提交日期**：2026-07-13

---

## 🚀 今日速览

本期 ArXiv 投稿呈现 **“理论深化 + 落地闭环”** 双轨并行态势：  
1. **Transformer 归纳推理机制** 获得统一理论框架解释（论文 3），**模型压缩** 迈向自生成训练数据的极限探索（论文 1）；  
2. **LLM 元认知**（论文 2）、**Judge 偏见的机制可解释性**（论文 6）等工作推动“黑盒走向白盒”；  
3. **多智能体安全** 暴露分布式后门新攻击面（论文 24），**具身智能** 给出从世界动作模型到实体大脑的路线图（论文 40）；  
4. **GraphRAG 工程化**（论文 43）、**医疗/工业/职业规划** 等垂直领域基准与数据集密集发布，落地工具链成熟度显著提升。

---

## 🎯 重点论文（12 篇）

### 🧠 大语言模型（架构、训练、对齐、评估）

| # | 标题 | 作者 | 核心贡献与看点 |
|---|------|------|----------------|
| 1 | **[Requential Coding: Pushing the Limits of Model Compression with Self-Generated Training Data](http://arxiv.org/abs/2607.11883v1)** | Qiu S. et al. | 提出“自生成训练数据”压缩范式，用模型自身生成的短码替代原始数据，探索压缩率与泛化的理论极限。 |
| 2 | **[Metacognition in LLMs: Foundations, Progress, and Opportunities](http://arxiv.org/abs/2607.11881v1)** | Liu G.K.-M. et al. | 系统综述 LLM 元认知能力（监控、规划、纠错），构建统一评估框架，指明下一代可信 AI 的关键瓶颈。 |
| 3 | **[Invariant Learning Dynamics of Transformers in Inductive Reasoning Tasks](http://arxiv.org/abs/2607.11875v1)** | Musat T. et al. | 首次给出 Transformer 在广义归纳任务上学习动力学的不变量理论，统一解释多种合成任务的涌现规律。 |
| 6 | **[Inside the Unfair Judge: A Mechanistic Interpretability Account of LLM-as-Judge Bias](http://arxiv.org/abs/2607.11871v1)** | Xu Z. et al. | 从隐藏状态表征层面剖析 LLM-as-Judge 偏见，提供超越输入输出层面的可干预机制解释。 |
| 36 | **[Production and Perception in LLMs: A Token Probability Approach](http://arxiv.org/abs/2607.11703v1)** | Marklová A. et al. | 用 Token 概率视角量化 LLM “生成-感知”不对称性，揭示其与人类心理语言学现象的异同。 |

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| # | 标题 | 作者 | 核心贡献与看点 |
|---|------|------|----------------|
| 12 | **[MM-ToolSandBox: A Unified Framework for Evaluating Visual Tool-Calling Agents](http://arxiv.org/abs/2607.11818v1)** | Ma K. et al. | 发布含 500+ 工具、16 领域、多图多轮的有状态执行环境，填补视觉基础工具调用评估空白。 |
| 24 | **[When Local Monitors Miss Compositional Harm: Diagnosing Distributed Backdoors in Multi-Agent Systems](http://arxiv.org/abs/2607.11751v1)** | Hu Y., Wang R. | 发现多智能体系统中“分布式后门”攻击：单步均通过本地监测，组合后触发危害，揭示运行时监控的根本盲区。 |
| 38 | **[Agent Hacks Agent: Autoresearch for Production-Agent Red-Teaming](http://arxiv.org/abs/2607.11698v1)** | Mao X. et al. | 针对 Claude Code、Codex 等生产级 Agent 设计自动化红队框架，实现攻击策略随模型/工具演进的持续自研。 |
| 39 | **[Think Through a Bottleneck: Hourglass Reasoning for Rigorous Induction](http://arxiv.org/abs/2607.11696v1)** | Zhu H. | 提出“沙漏推理”结构，强制推理阶段信息瓶颈化流动，显著提升 few-shot 归纳任务的严谨性。 |

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

| # | 标题 | 作者 | 核心贡献与看点 |
|---|------|------|----------------|
| 8 | **[AdvancedMathBench: A Benchmark Suite for Advanced Mathematical Proof Generation and Verification](http://arxiv.org/abs/2607.11849v1)** | Kong L. et al. | 面向研究级数学（抽象代数、拓扑等）的证明生成/验证基准，细粒度评估 LLM 在高等数学上的真实能力。 |
| 11 | **[Transformer-Guided Swarm Intelligence for Frugal Neural Architecture Search](http://arxiv.org/abs/2607.11826v1)** | Amigon R. | 结合 Transformer 与群智能，在消费级 GPU 上实现千倍加速的 NAS，民主化架构搜索。 |
| 43 | **[RAGU: A Multi-Step GraphRAG Engine with a Compact Domain-Adapted LLM](http://arxiv.org/abs/2607.11683v1)** | Komarov M. et al. | 开源模块化 GraphRAG 引擎：分离抽取/融合/检索/生成，配合小模型领域适配，工程落地性强。 |
| 46 | **[How to Tame Grokking: Representation Geometry as a Control Signal](http://arxiv.org/abs/2607.11666v1)** | Kazanskii M.A. | 发现表征几何（如特征维度坍缩）可作为 Grokking 发生时机的控制信号，实现对泛化延迟的主动调控。 |

---

### 📊 应用（垂直领域、多模态、代码生成）

| # | 标题 | 作者 | 核心贡献与看点 |
|---|------|------|----------------|
| 7 | **[Evidence-Backed Video Question Answering](http://arxiv.org/abs/2607.11862v1)** | Wang S. et al. | 构建可验证视觉定位的 Video QA 基准与模型，突破“黑盒式回答”局限，提供细粒度时空证据链。 |
| 27 | **[MET: Theory-Grounded and Culture-Aware Multilingual Moral Reasoning](http://arxiv.org/abs/2607.11736v1)** | Lee A. et al. | 首个理论落地、文化自适应的多语言道德推理基准，修正直接翻译带来的文化偏移。 |
| 40 | **[From World Action Models to Embodied Brains: A Roadmap for Open-World Physical Intelligence](http://arxiv.org/abs/2607.11689v1)** | Liang Y. et al. | 系统梳理从世界模型、VLA 策略到 World Action Model 再到具身大脑的技术路线图，极具指导性。 |
| 50 | **[Xiaomi-Robotics-U0: Unified Embodied Synthesis with World Foundation Model](http://arxiv.org/abs/2607.11643v1)** | Li X. et al. | 小米发布统一具身合成框架，用世界基础模型解决多视角一致性、几何连贯性与本体约束，工程落地里程碑。 |

---

## 📈 研究趋势信号

**三大新兴方向显性化**：  
1. **“可验证生成”成硬指标**：从 Video QA（论文 7）到数学证明（论文 8）、GraphRAG（论文 43），研究共识从“生成质量”转向“证据链可追溯、逻辑可验证”，工程上普遍采用**分阶段管线+小模型专用化**架构。  
2. **多智能体安全进入“组合攻击”阶段**：分布式后门（论文 24）、自进化红队（论文 38）表明，单点防御失效，威胁建模必须上升到**系统层面的信息流与组合语义**分析。  
3. **具身智能从“演示”走向“统一合成”**：世界模型、动作模型、仿真器、真机本体约束被纳入同一生成框架（论文 40、50），**多视角几何一致性**成为视频生成模型落地机器人的核心技术瓶颈。  

---

## 💎 值得精读（Top 3）

| 论文 | 理由 |
|------|------|
| **[Invariant Learning Dynamics of Transformers in Inductive Reasoning Tasks](http://arxiv.org/abs/2607.11875v1)** | 罕见的**理论突破**：给出 Transformer 归纳推理的统一不变量动力学，可指导架构改进、课程设计与能力预测，长周期引用价值极高。 |
| **[Inside the Unfair Judge: A Mechanistic Interpretability Account of LLM-as-Judge Bias](http://arxiv.org/abs/2607.11871v1)** | **方法论示范**：从输入输出层面下潜到表征层面，提供可干预的神经元/方向级偏见定位路径，对对齐、评测、红队均有直接迁移价值。 |
| **[RAGU: A Multi-Step GraphRAG Engine with a Compact Domain-Adapted LLM](http://arxiv.org/abs/2607.11683v1)** | **工程标杆**：模块化、开源、小模型友好，完整解决 GraphRAG “抽取噪声、检索脆弱、模型重”的三大痛点，适合团队直接落地或二次开发。 |

---

> **备注**：本日报基于 ArXiv 实时抓取，论文版本为 v1，后续更新请以 ArXiv 页面为准。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*