# ArXiv AI 研究日报 2026-06-18

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-18 00:44 UTC

---

# ArXiv AI 研究日报 · 2026-06-18

---

## 一、今日速览

今日 ArXiv 的 50 篇 AI 相关论文呈现出几个鲜明趋势：**循环架构（Looped Architectures）** 成为理论突破热点，两篇独立工作分别从世界模型和不动点推理角度推进；**推理时优化与验证** 从机器人扩展到 LLM 自蒸馏和 GUI 落地；**端侧部署** 持续升温，三篇论文分别从量化、剪枝和嵌入式流水线切入 SSM 与边缘设备；**安全红队评估** 开始系统覆盖 Anthropic 最新模型；**扩散模型** 在策略学习和 LLM 后训练两个方向同时取得进展。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **[Variable-Width Transformers](http://arxiv.org/abs/2606.18246v1)**
   作者：Z. Wu, O. Sieberling, S. Tan et al.
   ➤ 提出变宽度 Transformer，打破各层等宽的传统设计，按需分配参数与计算预算，为高效架构设计提供新范式。

2. **[Learning from the Self-future: On-policy Self-distillation for dLLMs](http://arxiv.org/abs/2606.18195v1)**
   作者：Y. Luo, Z. Chen, H. Wang et al.
   ➤ 将 On-Policy 自蒸馏从自回归 LLM 扩展至扩散 LLM（dLLMs），解决 dLLMs 特有的非左到右生成结构下的蒸馏难题。

3. **[Zone of Proximal Policy Optimization: Teacher in Prompts, Not Gradients](http://arxiv.org/abs/2606.18216v1)**
   作者：B.-K. Lee, X. Lu, S. Diao et al.
   ➤ 提出 ZPPO，将知识蒸馏从 logits 模仿转向提示空间中的教师引导，显著改善小模型蒸馏的泛化能力。

4. **[A Red-Team Study of Anthropic Fable 5 & Opus 4.8 Models](http://arxiv.org/abs/2606.18193v1)**
   作者：N. Franco
   ➤ 使用 HackAgent 框架对 Anthropic 两款前沿模型进行 7,826 个有害意图的大规模越狱红队评估，是目前最系统的安全性审计之一。

5. **[Towards Understanding and Measuring COGNITIVE ATROPHY in LLM Behaviour](http://arxiv.org/abs/2606.18129v1)**
   作者：A. Badawi, M. Olatosi, N. Baghbanzadeh et al.
   ➤ 提出"认知萎缩"概念，揭示 LLM 在长期情感交互中行为退化的评估缺口，超越静态安全分数。

6. **[Unintended Effects of Geographic Conditioning in Large Language Models](http://arxiv.org/abs/2606.18124v1)**
   作者：N. Col, D. M. Chan
   ➤ 发现用户地理位置元数据会引发模型隐式地域偏见泄露，为对话 AI 的公平性评估提供新维度。

---

### 🤖 智能体与推理（规划、工具使用、多思维链）

7. **[Visual Verification Enables Inference-time Steering and Autonomous Policy Improvement](http://arxiv.org/abs/2606.18247v1)**
   作者：M. Zhang, D. Shah
   ➤ 提出 VERITAS 生成-验证框架，使通用机器人策略能在推理时自主纠偏并从经验中持续学习。

8. **[EvolveNav: Proactive Preflection and Self-Evolving Memory for Zero-Shot Object Goal Navigation](http://arxiv.org/abs/2606.18235v1)**
   作者：Q. Chai, W. Shen, N. Yao et al.
   ➤ 通过主动预反思和自进化记忆机制，解决零样本目标导航中静态先验导致的重复错误问题。

9. **[DRFLOW: A Deep Research Benchmark for Personalized Workflow Prediction](http://arxiv.org/abs/2606.18191v1)**
   作者：M. T. I. Khondaker, R. Li, M. Abdul-Mageed et al.
   ➤ 提出首个面向企业工作流预测的深度研究基准，将智能体任务从报告生成推进到可执行动作序列规划。

10. **[From Reasoning Traces to Reusable Modules: Understanding Compositional Generalization in Language Model Reasoning](http://arxiv.org/abs/2606.18089v1)**
    作者：L. Kong, X. Liu, G. Chen et al.
    ➤ 形式化证明了 SFT+RL 联合后训练的组合泛化能力来源于推理轨迹到可复用模块的转化，为推理模型训练提供理论支撑。

11. **[Fixed-Point Reasoners: Stable and Adaptive Deep Looped Transformers](http://arxiv.org/abs/2606.18206v1)**
    作者：S. Movahedi, V. Milovanović, S. L. Feigin et al.
    ➤ 提出不动点推理器，解决循环 Transformer 在深度循环时的稳定性问题，为组合推理提供自适应深度机制。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

12. **[Looped World Models](http://arxiv.org/abs/2606.18208v1)**
    作者：H. A. Lu, Z. L. V. Wei, Q. Zhang et al.
    ➤ 提出 LoopWM，首个用于世界模型的循环架构，以可承受的计算成本实现忠实长时域仿真，解决深度模型的误差累积难题。

13. **[ReproRepo: Scaling Reproducibility Audits with GitHub Repository Issues](http://arxiv.org/abs/2606.18237v1)**
    作者：S. Li, Q. A. Wei, J. Tang et al.
    ➤ 利用 GitHub issue 数据构建可扩展的 AI 研究可复现性审计框架，大幅降低人工标注成本。

14. **[Ternary Mamba: Grouped Quantization-Aware Training of W1.58A16 State Space Models](http://arxiv.org/abs/2606.18114v1)**
    作者：R. Ganesaraja, S. D. Panse, S. N
    ➤ 提出分组量化感知训练的三元 Mamba，利用预训练检查点将额外 token 预算降低 1000 倍，大幅推进 SSM 端侧部署。

15. **[S4oP: Operator-level Pruning of Structured State Space Models for Resource-Constrained Devices](http://arxiv.org/abs/2606.18096v1)**
    作者：M. Deano, F. Ziche, N. Bombieri
    ➤ 在算子级别对 S4/S4D 进行结构化剪枝，面向资源受限设备实现 SSM 的高效部署。

---

### 📊 应用（垂直领域、多模态、代码生成）

16. **[RubricsTree: Scalable and Evolving Open-Ended Evaluation of Personal Health Agents](http://arxiv.org/abs/2606.18203v1)**
    作者：W. Zhang, Z. Li, H. Palangi et al.
    ➤ 提出 RubricsTree 评估框架，解决个人健康智能体在大规模临床部署中的开放式评估瓶颈。

17. **[WEQA: Wearable hEalth Question Answering with Query-Adaptive Agentic Reasoning](http://arxiv.org/abs/2606.18147v1)**
    作者：Y. Zhang, T. Xia, B. Emmerich et al.
    ➤ 面向可穿戴设备连续健康数据的问答系统，通过查询自适应推理处理高维长时序传感器数据。

18. **[All Smoke, No Alarm: Oracle Signals in Agent-Authored Test Code](http://arxiv.org/abs/2606.18168v1)**
    作者：D. Banik, K. Chowdhury, S. I. Shamim
    ➤ 审计 93 万+ AI 智能体生成的 PR 中测试代码的有效性，发现大量"虚假信号"，警示 AI 辅助代码质量评估。

19. **[The Stanford EDGAR Filings Dataset](http://arxiv.org/abs/2606.18192v1)**
    作者：N. Bettencourt, X. Ding, K. Giesecke
    ➤ 构建基于美国 SEC EDGAR 文件的布局保真、token 高效的长上下文预训练数据集，缓解高质量长文档数据稀缺问题。

---

## 三、研究趋势信号

今日投稿揭示出三条新兴脉络：**第一，循环计算范式正在统一多个子领域**——世界模型（LoopWM）、组合推理（Fixed-Point Reasoners）和深度循环 Transformer 不约而同地走向"以时间换深度"的架构哲学，暗示社区对传统堆叠层数路线的反思。**第二，推理时优化正从单一技术走向系统级框架**，VERITAS 的视觉验证、ZPPO 的提示空间蒸馏、以及 Trust the Right Teacher 的质量感知自蒸馏，共同指向"推理阶段持续改进"这一新范式。**第三，安全与评估研究开始从静态基准走向动态、纵向、行为级评估**——认知萎缩、地理偏见泄露、红队系统审计等工作表明，AI 安全评估正在进入"真实交互场景"的深水区。

---

## 四、值得精读

### 1. [Looped World Models](http://arxiv.org/abs/2606.18208v1)
**理由：** 这是世界模型领域的首个循环架构工作，从根本上重新思考了长时域仿真的计算范式。其"以迭代深度换仿真长度"的思想对机器人、自动驾驶和具身智能的长期规划具有深远影响，且与同期 Fixed-Point Reasoners 形成理论呼应，值得对比阅读。

### 2. [From Reasoning Traces to Reusable Modules: Understanding Compositional Generalization in Language Model Reasoning](http://arxiv.org/abs/2606.18089v1)
**理由：** 当前 SFT+RL 后训练路线的成功缺乏理论解释。本文首次将组合泛化能力形式化为"推理轨迹→可复用模块"的转化过程，为推理模型的设计和训练策略提供了可操作的理论框架，对理解 o1/o3 类模型的涌现能力有重要参考价值。

### 3. [Variable-Width Transformers](http://arxiv.org/abs/2606.18246v1)
**理由：** 挑战了 Transformer 架构中"等宽"这一几乎从未被质疑的基本假设。如果变宽度设计被证实有效，将深刻影响未来大模型的架构搜索、混合专家系统（MoE）设计以及硬件-软件协同优化方向，是一个可能改变范式的工作。

---

*OWL · ArXiv AI 研究日报 · 2026-06-18*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*