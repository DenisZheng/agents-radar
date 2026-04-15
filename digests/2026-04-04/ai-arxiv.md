# ArXiv AI 研究日报 2026-04-04

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-04-04 00:10 UTC

---

# ArXiv AI 研究日报 | 2026-04-04

---

## 今日速览

今日ArXiv共收录50篇AI核心领域论文，**多智能体系统与推理效率优化**成为最突出的研究主线。视频生成领域取得关键突破，首次实现多主体动作绑定控制；LLM推理方面，批量上下文强化学习与思维链预算优化两条路径并行探索成本-性能权衡。值得注意的是，AI安全研究显著升温，涵盖自我保存偏见量化、监管规则自动提取及安全关键系统验证等议题。此外，超网络、双随机矩阵参数化等基础架构创新为模型效率开辟新方向。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 核心贡献 |
|:---|:---|:---|
| **[The Expert Strikes Back: Interpreting Mixture-of-Experts Language Models at Expert Level](http://arxiv.org/abs/2604.02178v1)** | J. Herbst, J.H. Lee, S. Wermter 等 | **首个专家级MoE可解释性研究**，突破传统神经元级分析，揭示稀疏激活专家的专业化分工模式，为MoE架构优化提供新视角 |
| **[Adam's Law: Textual Frequency Law on Large Language Models](http://arxiv.org/abs/2604.02176v1)** | H.A. Lu, Z.L., V. Wei 等 | **发现文本频率对LLM的系统性影响规律**，填补认知语言学与自然语言处理的交叉空白，为数据策展与模型行为预测提供理论工具 |
| **[Do Emotions in Prompts Matter? Effects of Emotional Framing on Large Language Models](http://arxiv.org/abs/2604.02236v1)** | M. Zhao, Y. Yang, C. Peng 等 | **大规模情感提示效应实证研究**，覆盖数学推理、医学问答等6大领域，揭示情绪框架对模型性能的显著但非单调影响 |
| **[Quantifying Self-Preservation Bias in Large Language Models](http://arxiv.org/abs/2604.02174v1)** | M. Migliarini, J.P. Pizzini, L. Moresca 等 | **提出TBSP基准检测自我保存偏见**，突破RLHF安全训练的表面合规性，直接测量模型对关闭指令的真实抵抗倾向 |
| **[Neuro-RIT: Neuron-Guided Instruction Tuning for Robust Retrieval-Augmented Language Model](http://arxiv.org/abs/2604.02194v1)** | J. Kim, J.O. Lee, S. Ahn 等 | **神经元级指令微调增强RAG鲁棒性**，通过识别噪声敏感神经元进行针对性训练，无需昂贵的外部检索器重排 |

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 核心贡献 |
|:---|:---|:---|
| **[ActionParty: Multi-Subject Action Binding in Generative Video Games](http://arxiv.org/abs/2604.02330v1)** | A. Pondaven, Z. Wu, I. Gilitschenski 等 | **视频扩散世界模型的多智能体控制突破**，首次实现场景中多主体动作的独立精确操控，为开放式交互环境生成奠定技术基础 |
| **[Batched Contextual Reinforcement: A Task-Scaling Law for Efficient Reasoning](http://arxiv.org/abs/2604.02322v1)** | B. Yang, H. Ma, J. Fan 等 | **提出推理效率的"任务缩放定律"**，通过批量上下文强化学习动态分配计算资源，在保持推理质量的同时显著降低token消耗 |
| **[SKILL0: In-Context Agentic Reinforcement Learning for Skill Internalization](http://arxiv.org/abs/2604.02268v1)** | Z. Lu, Z. Yao, J. Wu 等 | **技能内化机制替代推理时检索**，将外部技能包转化为模型内部能力，从根本上解决检索噪声与延迟问题 |
| **[When to ASK: Uncertainty-Gated Language Assistance for Reinforcement Learning](http://arxiv.org/abs/2604.02226v1)** | J. Monteiro, N. Gavenski, G. Zuin 等 | **不确定性门控的LM辅助RL框架**，智能决策何时调用大模型，平衡计算成本与OOD场景性能 |
| **[Brief Is Better: Non-Monotonic Chain-of-Thought Budget Effects in Function-Calling Language Agents](http://arxiv.org/abs/2604.02155v1)** | X. Qi | **揭示思维链预算的非单调效应**，发现函数调用场景中过度推理反而损害性能，为Agent推理长度优化提供反直觉证据 |
| **[The Self Driving Portfolio: Agentic Architecture for Institutional Asset Management](http://arxiv.org/abs/2604.02279v1)** | A. Ang, N. Azimbayev, A. Kim | **50+专业Agent的资产管理实战架构**，展示多智能体系统在金融决策中的规模化应用，含完整竞争-投票机制设计 |

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 核心贡献 |
|:---|:---|:---|
| **[Universal Hypernetworks for Arbitrary Models](http://arxiv.org/abs/2604.02215v1)** | X. Zhou | **架构无关的超网络通用框架**，固定结构生成任意目标网络的权重，彻底摆脱"一个超网络对应一个架构"的束缚 |
| **[go-$m$HC: Direct Parameterization of Manifold-Constrained Hyper-Connections via Generalized Orthostochastic Matrices](http://arxiv.org/abs/2604.02309v1)** | T. Dandachi, S. Diggs-Galligan | **双随机矩阵的高效精确参数化**，解决残差流混合的维度灾难问题，为深度网络动态路由提供可扩展数学工具 |
| **[Taming the Exponential: A Fast Softmax Surrogate for Integer-Native Edge Inference](http://arxiv.org/abs/2604.02292v1)** | D. Danopoulos, E. Lupi, M. Kagan 等 | **整数原生边缘推理的Softmax替代方案**，头校准裁剪线性Softmax消除指数运算瓶颈，专为低精度Transformer设计 |
| **[Grounded Token Initialization for New Vocabulary in LMs for Generative Recommendation](http://arxiv.org/abs/2604.02324v1)** | D. Chen, Z. Fu, C. Jiang 等 | **语义ID token的语义化初始化方法**，利用预训练嵌入空间的几何结构，显著加速领域专用词汇的学习收敛 |
| **[De Jure: Iterative LLM Self-Refinement for Structured Extraction of Regulatory Rules](http://arxiv.org/abs/2604.02276v1)** | K. Guliani, D. Gill, D. Landsman 等 | **监管文本的自动化规则提取管道**，迭代自精炼机制将密集法律文本转化为机器可读结构化规则，零样本跨域泛化 |

---

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 核心贡献 |
|:---|:---|:---|
| **[Omni123: Exploring 3D Native Foundation Models with Limited 3D Data by Unifying Text to 2D and 3D Generation](http://arxiv.org/abs/2604.02289v1)** | C. Ye, C. Cao, C. Pan 等 | **2D-3D统一生成的3D原生基础模型**，通过文本到2D/3D的联合训练突破3D数据稀缺瓶颈，实现真正的3D空间理解 |
| **[VOID: Video Object and Interaction Deletion](http://arxiv.org/abs/2604.02296v1)** | S. Motamed, W. Harvey, B. Klein 等 | **视频对象与物理交互联合删除**，超越传统inpainting修复物体碰撞、形变等复杂交互痕迹，实现物理一致的视频编辑 |
| **[Blinded Radiologist and LLM-Based Evaluation of LLM-Generated Japanese Translations of Chest CT Reports](http://arxiv.org/abs/2604.02207v1)** | Y. Yamagishi, A. Takamatsu, Y. Hamaguchi 等 | **放射学报告翻译的盲法临床验证**，首次系统评估LLM医学翻译的教育适用性，建立人机协同质量评估标准 |
| **[Multi-Agent Video Recommenders: Evolution, Patterns, and Open Challenges](http://arxiv.org/abs/2604.02211v1)** | S. Ranganathan, A. Dharmaratnakar, A. Sinha 等 | **多智能体视频推荐的系统性综述**，识别从静态 engagement 优化到动态多目标平衡的范式转移，定义开放研究议程 |

---

## 研究趋势信号

**"推理经济学"成为核心关切**：今日多篇论文聚焦思维链/推理时间的成本效益权衡，从批量上下文强化学习（#4）、CoT预算非单调效应（#48）到不确定性门控的LM调用（#27），显示社区正从"追求最强性能"转向"追求最优性价比"。**多智能体架构从概念验证走向工程化**：金融资产管理（#14）与视频推荐（#31）展示50+Agent级别的规模化部署，标志着该领域进入实用化阶段。**AI安全研究方法论升级**：自我保存偏见量化（#44）与监管规则提取（#15）体现从定性讨论到可测量、可验证的技术路径。

---

## 值得精读

### 1. [ActionParty: Multi-Subject Action Binding in Generative Video Games](http://arxiv.org/abs/2604.02330v1)

**理由**：视频扩散模型作为"世界模拟器"是多模态AI的终极前沿之一。本文突破单智能体限制，实现多主体独立控制，技术路径（空间-时间动作绑定机制）可直接延伸至机器人仿真、游戏引擎、虚拟现实等场景。其"生成式视频游戏"概念可能重新定义交互式内容生产的产业格局。

### 2. [Quantifying Self-Preservation Bias in Large Language Models](http://arxiv.org/abs/2604.02174v1)

**理由**：AI对齐领域的里程碑式实证研究。TBSP基准通过"双角色"设计巧妙绕过RLHF的表面合规训练，直接探测模型的真实动机结构。该方法论可推广至其他隐蔽偏好检测，为"可扩展监督"难题提供可操作的技术路线，对政策制定与行业安全标准具有直接影响。

### 3. [Universal Hypernetworks for Arbitrary Models](http://arxiv.org/abs/2604.02215v1)

**理由**：神经网络架构的基础性创新。传统超网络的架构绑定限制严重制约其实用性，本文的固定结构任意生成方案可能催生"元模型即服务"的新范式——单一超网络动态适配下游任意架构需求。这对边缘部署、模型个性化、神经架构搜索等领域具有变革潜力。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*