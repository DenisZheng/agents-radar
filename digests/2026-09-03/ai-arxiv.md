# ArXiv AI 研究日报 2026-09-03

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-03 02:29 UTC

---

---

# 《ArXiv AI 研究日报》2026-09-03

## 今日速览
本期 ArXiv 共收录 50 篇 AI 相关新作。**智能体评测迈入“长程复杂任务”新阶段**，CivBench 以《文明 VI》建立百步工具调用基准，推动规划与状态追踪能力成核心考点。**模型压缩与安全性深度绑定**，Debias-SparseGPT 与 One-for-All Robustness 揭示剪枝放大偏见、单一鲁棒半径过拟合等隐患，倒逼压缩走向“感知感知”。**神经符号融合在高风险领域落地**，医疗诊断、药物发现等任务显式引入本体排序器与物理约束，提升可追溯性。**多模态数据构建呈现“大规模+细粒度+多语言”趋势**，SonicCaps 与 MultiGhostBench 分别补齐音频描述与多语言长文本归因空白。**测试时适应（TTA）与 MoE 路由机制遭遇理论反思**，教师-学生范式与独立路由假设均被实证挑战，提示基础组件需重审。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[Debias-SparseGPT: Bias-Aware Pruning for Large Language Models](http://arxiv.org/abs/2609.02496v1)** | Proskurina et al. | **首次量化剪枝对社会偏见的放大效应**，提出偏见感知稀疏化目标，在保持压缩率的同时显著缓解输出偏见漂移，为绿色 AI 与负责任 AI 交叉提供关键基准。 |
| **[Scalable Kronecker-Fisher Approximation: Efficient Hessian Analysis for Billion-Parameter Language Models Compression](http://arxiv.org/abs/2609.02451v1)** | Yusupov et al. | 利用 Kronecker 结构近似 Fisher 矩阵，实现**亿级参数模型的跨层二阶信息捕获**，揭示一致的脆弱参数模式，为大规模结构化剪枝/量化提供可扩展理论工具。 |
| **[Learn from Whoever Is Right: Answer-Verified Multi-Teacher Distillation for Multi-Domain LLMs](http://arxiv.org/abs/2609.02548v1)** | He et al. | 针对多领域模型融合，提出**答案验证路由机制**：动态选择领域专家教师并经验证蒸馏，避免负迁移，在数学/代码/通用基准上超越单一 RL 合并基线。 |
| **[When Persona Attributes Improve Population Alignment in Large Language Models](http://arxiv.org/abs/2609.02526v1)** | Fröhling et al. | 系统实证 **Persona Prompting 在模拟人类调查面板中的有效边界**，发现显式人口统计属性优于隐式风格，且对齐增益随模型规模呈现涌现式增长。 |
| **[When Decodability Is Not Enough: Logical Validity Representations, Behavioral Dissociation, and Causal Tests in Language Models](http://arxiv.org/abs/2609.02438v1)** | Sudheendra, Srivastava | 区分“可解码性”与“逻辑有效性表征”，通过行为解离与因果干预实验，**证实模型内部并未忠实表征逻辑有效性**，揭示推理捷径机制。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[CivBench: A Long-Horizon Benchmark for Tool-Mediated Agents in Civilization VI](http://arxiv.org/abs/2609.02459v1)** | Andrews et al. | **首个基于商业级 4X 策略游戏的长程智能体基准**，单局 300+ 轮、数千工具调用、大动作空间，强制要求持续规划、状态维护与战略推理，填补 WebShop/ALFWorld 至真实决策的巨大鸿沟。 |
| **[Competitive Market Behavior of LLMs](http://arxiv.org/abs/2609.02580v1)** | Struski et al. | 将 LLM 置于**双边匹配市场、连续双边拍卖等经典博弈机制中**，实证其偏离纳什均衡、表现出有限理性与框架效应，为 AI 经济学与机制设计提供实测依据。 |
| **[Before the Script, Set the Stage: How Worldview Simulation Amplifies Psychologically Grounded Persuasion in Multi-Turn Jailbreaking](http://arxiv.org/abs/2609.02414v1)** | Chen et al. | 解耦越狱中的“社会影响策略”与“世界观模拟”，提出 **BLUEPRINT 评估框架**，证实引导模型模拟特定世界观能显著放大说服攻击成功率，揭示对齐的深层认知漏洞。 |
| **[Diagnosing with Insights: Structured Analysis of Agent Failures via Behavioral Abstractions](http://arxiv.org/abs/2609.02371v1)** | Bi et al. | 面向长轨迹 Agent 故障，引入**行为抽象与结构化洞察生成**，自动将混乱轨迹压缩为可读的“失败模式报告”，大幅降低人工诊断成本，推动 Agent 可观测性工程化。 |
| **[Coverage, Not Targeting: A Structural Regime in Multi-Turn Agent Credit Assignment](http://arxiv.org/abs/2609.02417v1)** | Zhou et al. | 理论识别**验证器信息密度**为多轮信用分配的关键结构量，证明“覆盖型”奖励分布优于“定向型”归因的相变条件，为长程 RL 奖励设计提供第一性原理指导。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[ViSAR: Training-Free Adaptive-k Retrieval for Visual Document Question Answering](http://arxiv.org/abs/2609.02486v1)** | Mialland et al. | 针对 DocVQA 检索，**免训练自适应确定检索页数 k**，结合查询-页面相似度分布动态截断，在保持召回率前提下将检索量压缩 40%+，显著降低 LVLM 推理延迟。 |
| **[Rethinking the Teacher-Student Framework for Test-Time Adaptation](http://arxiv.org/abs/2609.02507v1)** | Sójka et al. | **系统性批判 TTA 中教师-学生架构的误差累积根源**，证明教师平滑掩盖了学生崩溃，提出基于单模型梯度投影的轻量替代方案，在分布偏移基准上更稳健且参数更少。 |
| **[Towards One-for-All Robustness Across a Continuum of Threat Levels](http://arxiv.org/abs/2609.02440v1)** | Hou, Liu | 针对对抗鲁棒性“单一预算过拟合”痛点，提出**连续威胁水平下的统一鲁棒训练**，通过动态预算采样与正则化，单一模型在 ε∈[0, ε_max] 全谱系达到 SOTA，消除多模型部署开销。 |
| **[Evidence for Shared Routing Geometry and Dynamics in Sparse Mixture-of-Experts](http://arxiv.org/abs/2609.02404v1)** | Labzin et al. | 实证发现 MoE **跨层路由决策存在强几何共享与动态耦合**，早期路由信号可高精度预测深层专家选择，挑战“独立路由”假设，启发路由压缩与专家合并新思路。 |
| **[MultiGhostBench: A Multilingual Benchmark for Long-Form LLM-Generated Text Attribution under Distribution Shifts](http://arxiv.org/abs/2609.02379v1)** | Greco et al. | 面向**多语言、长文本、分布偏移**的 LLM 归因任务，构建覆盖 10 语言、最新模型的基准，揭示现有检测器在跨语言/跨领域泛化上的系统性失效。 |

### 📊 应用（垂直领域、多模态、代码生成）

| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[Learning to Fuse LLMs with Ontology Rankers for Rare-Disease Diagnosis](http://arxiv.org/abs/2609.02473v1)** | Jiang et al. | **神经符号融合范式落地罕见病诊断**：LLM 生成候选，本体排序器提供可追溯表型匹配证据链，学习融合器兼得准确率与可解释性，临床可用性大幅提升。 |
| **[Predictors of Loneliness in Older Adults Using Multimodal Analysis of

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*