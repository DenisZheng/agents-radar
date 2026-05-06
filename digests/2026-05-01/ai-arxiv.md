# ArXiv AI 研究日报 2026-05-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-01 01:49 UTC

---

好的，作为AI研究分析师，以下是根据您提供的论文列表生成的《ArXiv AI 研究日报》。

---

### 📝 ArXiv AI 研究日报：2026-05-01

#### 1. 今日速览

今日研究亮点纷呈，**扩散语言模型**与**小型语言模型（SLM）** 的效率提升成为焦点，前者通过跨架构蒸馏实现性能突破，后者则借助大模型“选择性思考”来弥补推理短板。在智能体领域，**实时世界预测**与**自适应检索增强生成**为构建更具主动性和动态性的AI系统开辟了新路径。此外，对AI系统的**可信任**与**安全性**的探讨，如同步噪声理论、临床AI信任框架等，从理论和应用层面提供了严谨的分析。基础方法方面，**无训练架构搜索**和**凸神经网络**的新进展则展示了理论与实践的深度结合。

#### 2. 重点论文

##### 🧠 大语言模型（架构、训练、对齐、评估）

-   **Turning the TIDE: Cross-Architecture Distillation for Diffusion Large Language Models**
    -   **作者:** Gongbo Zhang et al.
    -   **一句话说明:** 提出了跨架构蒸馏方法TIDE，将自回归LLM的知识迁移至扩散LLM（dLLM），有效提升了dLLM的生成质量和并行解码效率，为构建更高效的下一代语言模型铺平了道路。
    -   [链接](http://arxiv.org/abs/2604.26951v1)

-   **Language Diffusion Models are Associative Memories Capable of Retrieving Unseen Data**
    -   **作者:** Bao Pham et al.
    -   **一句话说明:** 从理论上论证了基于均匀扩散的离散扩散模型（UDDM）本质上是一种联想记忆模型，并揭示了其具备检索“未见数据”（即创造性地组合训练数据）的能力，深化了我们对扩散模型生成机制的理解。
    -   [链接](http://arxiv.org/abs/2604.26841v1)

-   **Select to Think: Unlocking SLM Potential with Local Sufficiency**
    -   **作者:** Wenxuan Ye et al.
    -   **一句话说明:** 提出“选择性思考”框架，让小型语言模型（SLM）在推理时识别出“推理分歧点”，并仅在必要时才调用大型模型（LLM）进行辅助，以极低的额外成本大幅提升SLM的推理能力。
    -   [链接](http://arxiv.org/abs/2604.26940v1)

-   **MoRFI: Monotonic Sparse Autoencoder Feature Identification**
    -   **作者:** Dimitris Dimakopoulos et al.
    -   **一句话说明:** 提出了一种新的稀疏自编码器特征识别方法MoRFI，能更精确地定位LLM中存储事实知识的神经元，为识别和修正模型幻觉、进行知识编辑提供了更可靠的工具。
    -   [链接](http://arxiv.org/abs/2604.26866v1)

-   **Domain-Adapted Small Language Models for Reliable Clinical Triage**
    -   **作者:** Manar Aljohani et al.
    -   **一句话说明:** 验证了经过领域适配的开源小型语言模型（SLM）在急诊分诊（ESI评分）任务上能取得与大型模型相媲美的可靠性，证明了在医疗等关键领域部署高效、可信的SLM的可行性。
    -   [链接](http://arxiv.org/abs/2604.26766v1)

##### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

-   **When to Retrieve During Reasoning: Adaptive Retrieval for Large Reasoning Models**
    -   **作者:** Dongxin Guo et al.
    -   **一句话说明:** 针对长思维链推理模型，提出自适应检索策略，在模型推理过程中动态决定“何时需要检索外部知识”，解决了传统RAG在推理任务中检索时机与推理过程错配的问题。
    -   [链接](http://arxiv.org/abs/2604.26649v1)

-   **FutureWorld: A Live Environment for Training Predictive Agents with Real-World Outcome Rewards**
    -   **作者:** Zhixin Han et al.
    -   **一句话说明:** 构建了名为FutureWorld的实时预测环境，让智能体通过与真实世界事件（如股价、天气）的互动进行训练，并利用真实结果作为奖励信号，开辟了训练“实时预测”智能体的新范式。
    -   [链接](http://arxiv.org/abs/2604.26733v1)

-   **Accelerating RL Post-Training Rollouts via System-Integrated Speculative Decoding**
    -   **作者:** Hayate Iso et al.
    -   **一句话说明:** 将投机性解码技术系统性地整合到LLM的强化学习（RL）后训练阶段，显著加速了策略rollout的生成过程，有望极大降低RL训练的计算成本。
    -   [链接](http://arxiv.org/abs/2604.26779v1)

##### 🔧 方法与框架（新技术、基准测试、效率优化）

-   **Random Cloud: Finding Minimal Neural Architectures Without Training**
    -   **作者:** Javier Gil Blázquez
    -   **一句话说明:** 提出“随机云”方法，通过在随机初始化网络中探索并进行结构缩减，实现了无需任何训练的神经网络架构搜索，找到了极简且有效的网络结构，挑战了“训练是架构搜索必要条件”的传统观念。
    -   [链接](http://arxiv.org/abs/2604.26830v1)

-   **Unifying Sparse Attention with Hierarchical Memory for Scalable Long-Context LLM Serving**
    -   **作者:** Zihan Zhao et al.
    -   **一句话说明:** 提出一种系统级方案，将动态稀疏注意力与分层KV缓存管理（如将冷数据卸载至CPU内存）相结合，在保证长上下文服务生成质量的同时，显著提升了内存效率和推理吞吐量。
    -   [链接](http://arxiv.org/abs/2604.26837v1)

-   **Hyper Input Convex Neural Networks for Shape Constrained Learning and Optimal Transport**
    -   **作者:** Shayan Hundrieser et al.
    -   **一句话说明:** 提出了超输入凸神经网络（HyCNN），一种在理论上保证对输入处处凸的新架构，为形状约束学习和最优传输问题提供了更强大的建模能力。
    -   [链接](http://arxiv.org/abs/2604.26942v1)

-   **ClassEval-Pro: A Cross-Domain Benchmark for Class-Level Code Generation**
    -   **作者:** Yeheng Chen et al.
    -   **一句话说明:** 发布了新的代码生成基准ClassEval-Pro，专注于评估LLM生成完整、结构化的“类”（Class）级别代码的能力，填补了函数级和仓库级代码生成之间的评估空白。
    -   [链接](http://arxiv.org/abs/2604.26923v1)

##### 📊 应用（垂直领域、多模态、代码生成）

-   **Decoupling Knowledge and Task Subspaces for Composable Parametric Retrieval Augmented Generation**
    -   **作者:** Weihang Su et al.
    -   **一句话说明:** 提出解耦知识子空间和任务子空间的参数化检索增强生成（PRAG）方法，将外部文档编码为可组合的轻量参数模块，实现了更灵活、零样本泛化能力更强的知识注入。
    -   [链接](http://arxiv.org/abs/2604.26768v1)

-   **Translating Under Pressure: Domain-Aware LLMs for Crisis Communication**
    -   **作者:** Antonio Castaldo et al.
    -   **一句话说明:** 为解决危机沟通中的多语言翻译瓶颈，提出领域自适应流水线，通过检索增强和模型微调，在小规模平行语料上训练出专业、及时的灾难信息翻译系统。
    -   [链接](http://arxiv.org/abs/2604.26597v1)

#### 3. 研究趋势信号

-   **小型模型智能增强：** 相较于单纯堆砌参数，通过“选择性思考”、“跨架构蒸馏”和“领域适配”等手段，让小型模型在特定场景下具备匹敌或超越大型模型的能力，正成为一个明确的趋势，旨在实现效率与性能的帕累托最优。
-   **实时与动态智能体：** 研究重心正从静态的知识问答转向动态的、与真实世界交互的智能体。“实时预测”、“自适应检索”和“RL加速rollout”等研究，共同指向了构建能够实时感知、主动规划和快速学习的AI Agent的未来方向。
-   **跨架构与系统级优化：** 无论是“扩散模型”与“自回归模型”的融合蒸馏，还是“注意力机制”与“分层内存”的系统级协同，打破单一架构壁垒、从全栈视角进行性能优化，正成为解决大模型部署中核心瓶颈（如推理速度、长上下文处理）的核心思路。

#### 4. 值得精读

1.  **Turning the TIDE: Cross-Architecture Distillation for Diffusion Large Language Models**
    -   **理由:** 本文探讨了扩散LLM（dLLM）和自回归LLM这两种截然不同架构的融合，其跨架构蒸馏的思路有望解决dLLM性能不及自回归模型的痛点，对下一代语言模型架构的发展具有重要的参考价值。

2.  **Select to Think: Unlocking SLM Potential with Local Sufficiency**
    -   **理由:** 本文提供了一种极具实用价值的SLM性能提升方案。它通过“按需”调用大模型，在成本和性能之间取得了巧妙的平衡，为在资源受限环境下部署有竞争力的语言模型提供了清晰可行的路线图。

3.  **Random Cloud: Finding Minimal Neural Architectures Without Training**
    -   **理由:** 本文提出的“无训练”架构搜索方法完全颠覆了传统NAS的思想。其简洁而反直觉的核心思想挑战了领域共识，如果其可扩展性得到验证，将极大改变神经网络设计的流程和效率。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*