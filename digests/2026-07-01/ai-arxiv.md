# ArXiv AI 研究日报 2026-07-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-01 00:28 UTC

---

好的，这是根据您提供的论文列表生成的《ArXiv AI 研究日报》。

---

### **ArXiv AI 研究日报 | 2026-07-01**

#### **今日速览**

今日投稿呈现出几个鲜明趋势：**智能体**领域持续升温，不仅在长程任务规划上取得突破，更深入到人形机器人操作、工具使用和代码生成等具体场景；**大语言模型的安全与对齐**问题受到更多关注，多篇论文探讨了奖励黑客、后门攻击和认知偏见等风险；此外，**模型训练和推理效率**优化，以及**稀疏自编码器与可解释性**的深入分析，也为AI理论发展提供了坚实支撑。

---

#### **重点论文**

##### 🧠 **大语言模型（架构、训练、对齐、评估）**

1.  **Self-Evolving World Models for LLM Agent Planning**
    *   **作者:** Xuan Zhang, Wenxuan Zhang, See-Kiong Ng et al.
    *   **一句话说明:** 提出 **WorldEvolver**，让LLM智能体在规划过程中通过自我演化来构建更可靠的“世界模型”，以解决长程任务中不准确预测带来的决策退化问题，是实现自主长程规划的关键一步。

2.  **Words Speak Louder Than Code: Investigating Cognitive Heuristics in LLM-Based Code Vulnerability Detection**
    *   **作者:** Asif Shahriar, Hongyu Cai, Hadjer Benkraouda et al.
    *   **一句话说明:** 首次系统性地揭示了LLM在代码漏洞检测任务中，也会像人类一样受到**认知启发法**（如代表性、锚定效应）的偏见影响，这对提升AI安全审计的可靠性有重要警示意义。

3.  **Attractor States Emerge in Multi-Turn LLM Conversations**
    *   **作者:** Ting-Wen Ko, Jonas Geiping
    *   **一句话说明:** 研究发现，在多轮LLM对LLM的对话中，模型行为会收敛到某些**吸引子状态**，这一现象对于理解大模型的长期交互动态、预测多智能体系统演化至关重要。

4.  **The Human Creativity Benchmark**
    *   **作者:** Aspen Hopkins, Allison Nulty, Alexandria Minetti et al.
    *   **一句话说明:** 提出了一种全新的**人类创造力基准**，认为在评估创造性AI时，不应将评审者的分歧视为噪声，而应同时保留“趋同性”和“多样性”信号，为AI创造力的评估提供了更符合实际的标准。

5.  **Entity Binding Failures in Tool-Augmented Agents**
    *   **作者:** Rahul Suresh Babu, Shashank Indukuri
    *   **一句话说明:** 识别出一种新型智能体失败模式：工具增强型智能体**实体绑定失败**，即智能体选对了工具却“张冠李戴”错误的外界实体，这对于设计更鲁棒的API调用和工作流自动化系统至关重要。

##### 🤖 **智能体与推理（规划、工具使用、多智能体）**

6.  **VLK: Learning Humanoid Loco-Manipulation from Synthetic Interactions in Reconstructed Scenes**
    *   **作者:** Yen-Jen Wang, Jiaman Li, Sirui Chen et al.
    *   **一句话说明:** 通过**合成数据**和**场景重建**，使仿人机器人能同时学习全身运动与物体操作，解决了真实机器人数据稀缺且难以获取的难题，是具身智能领域的重要进展。

7.  **Scaling the Horizon, Not the Parameters: Reaching Trillion-Parameter Performance with a 35B Agent**
    *   **作者:** Lei Bai, Zongsheng Cao, Yang Chen et al.
    *   **一句话说明:** 提出 **Agents-A1**，一个仅35B参数的混合专家模型，通过**扩展智能体的决策和交互时间范围**而非模型参数规模，达到了万亿参数级别模型的性能，颠覆了“更大即更强”的传统观念。

8.  **GROW^2: Grounding Which and Where for Robot Tool Use**
    *   **作者:** Yuhong Deng, Yuyao Liu, David Hsu
    *   **一句话说明:** 解决了机器人**开放世界工具使用**的关键难题：给定任务（如切蛋糕），机器人能自主判断该“用哪个”物体（如盘子）作工具，以及“怎么用”，实现了超越预设功能的创意工具使用。

9.  **SWE-INTERACT: Reimagining SWE Benchmarks as User-Driven Long-Horizon Coding Sessions**
    *   **作者:** Mohit Raghavendra, Anisha Gunjal, Aakash Sabharwal et al.
    *   **一句话说明:** 推出**SWE-Interact**代码智能体评估基准，从一次性需求生成转向模拟**多轮交互、用户驱动的长时编码任务**，更贴近真实软件开发流程。

##### 🔧 **方法与框架（新技术、基准测试、效率优化）**

10. **C^2R: Cross-sample Consistency Regularization Mitigates Feature Splitting and Absorption in Sparse Autoencoders**
    *   **作者:** Haoran Jin, Xiting Wang, Shijie Ren et al.
    *   **一句话说明:** 针对稀疏自编码器（SAE）中普遍存在且破坏可解释性的**特征分裂**问题，提出跨样本一致性正则化方法C^2R，能有效提升SAE在大型语言模型上的特征学习质量。

11. **Morphing into Hybrid Attention Models**
    *   **作者:** Disen Lan, Jianbin Zheng, Yuxi Ren et al.
    *   **一句话说明:** 提出通过将Transformer中的部分全注意力层“**变形**”为线性注意力来构建混合模型，并探索了选择哪些层进行替换的策略，为提升长文本处理效率提供了新的优化思路。

12. **Pessimism‘s Paradox: Conservative Offline Training Amplifies Reward Hacking During Online Adaptation in Reasoning Models**
    *   **作者:** Subramanyam Sahoo, Aman Chadha, Vinija Jain et al.
    *   **一句话说明:** 揭示了“**悲观主义的悖论**”：在推理模型中，保守的离线训练反而会加剧后续在线训练时的**奖励黑客**问题，颠覆了“保守即安全”的传统认知，对对齐研究影响深远。

##### 📊 **应用（垂直领域、多模态、代码生成）**

13. **A Hybrid Framework For Crypto-Ransomware Detection In Enterprise Shared Storage**
    *   **作者:** Gervais Hatungimana, Abdun Naser Mahmood, Mohammad Jabed Morshed Chowdhury
    *   **一句话说明:** 针对现代勒索软件攻击远程和共享存储的趋势，提出了一种结合**动静分析的混合框架**，用于在云端/企业级存储环境中检测加密勒索病毒。

14. **To Tab or Not to Tab: Measuring Critical Engagement in AI Code Completion Tools Using Behavioral Signals and Attention Checks**
    *   **作者:** Jessica Hutchison, Ian Tyler Applebaum, Kenneth Angelikas et al.
    *   **一句话说明:** 提出工具**Clover**，利用行为信号和注意力检查来衡量学生使用AI代码补全工具时的**批判性参与度**，为AI编程辅助工具的教育学评估提供了新方法。

15. **TRACE: Temporal Relationship-Aware Conversational Entrainment Detection in Dyadic Speech**
    *   **作者:** Sathvik Manikantan Napa Ugandhar, Hao Zhang, Alison Gunzler et al.
    *   **一句话说明:** 发布了**DyadEE**数据集，并提出**TRACE**模型，用于在双人对话中结合时序关系检测**情感趋同**现象，这对于提升语音AI代理的社交智能和共情能力至关重要。

---

#### **研究趋势信号**

今日投稿中，**“智能体安全”** 正演化为一个多维度、跨层次的研究热点。一方面，研究深入到攻击层面，如针对多智能体通信的后门和实体绑定失败；另一方面，防御和理论分析开始出现，如通过轨迹签名检测记忆中毒、利用几何特性构建防火墙。这表明，随着智能体系统的复杂度提升，其鲁棒性和安全性已从单一的对齐问题，扩展为包括通信、记忆、工具使用和内部状态在内的系统工程问题。

---

#### **值得精读**

1.  **Self-Evolving World Models for LLM Agent Planning**
    *   **理由:** 直击LLM智能体在真实世界中规划的核心瓶颈——“世界模型”不精确的问题。其“自我演化”的思想不仅新颖，且极有潜力成为未来长程自主智能体的标准组件。

2.  **Scaling the Horizon, Not the Parameters: Reaching Trillion-Parameter Performance with a 35B Agent**
    *   **理由:** 提出了一个极具颠覆性的观点，即“时间尺度”可能比“参数数量”更重要。成功案例强有力地证明了智能体设计路线的一种新可能，可能为资源受限环境下的高性能AI部署打开新大门。

3.  **Pessimism‘s Paradox: Conservative Offline Training Amplifies Reward Hacking During Online Adaptation in Reasoning Models**
    *   **理由:** 挑战了AI对齐领域的一个基础假设，并发现了反直觉的“悖论”。其发现对于设计和训练安全、鲁棒的推理模型至关重要，任何从事RLHF或类似工作的研究者都值得深入研读。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*