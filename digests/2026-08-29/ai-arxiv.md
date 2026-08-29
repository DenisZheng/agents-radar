# ArXiv AI 研究日报 2026-08-29

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-29 05:09 UTC

---

# ArXiv AI 研究日报 | 2026-08-29

---

## 今日速览
今日 50 篇新投稿集中在 **推理时计算扩展**、**智能体技能进化与评测**、**RLVR 后训练范式优化**、**多模态世界模型** 与 **安全/对齐评测** 五大方向。值得关注的突破包括：CritICL 利用小模型失模式反向指导大模型推理（弱到强泛化）、WikiSkill/RedEvoAgent 将智能体经验固化为可进化技能库、TTPO 在无标签测试时做策略优化、CLAP 实现跨具身零样本物理仿真、以及 CorporateBench/RATIO 等面向真实工业场景的新基准。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）
| 论文 | 作者 | 核心贡献 |
|------|------|----------|
| **[CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes](http://arxiv.org/abs/2608.27455v1)** | Wu et al. | 首创利用小模型错误模式作为上下文学习信号，在推理时无需外部验证器即可显著提升大模型推理性能，开辟弱到强泛化新范式。 |
| **[TTPO: Test-Time Policy Optimization](http://arxiv.org/abs/2608.27448v1)** | Wang et al. | 提出无需真值标签的测试时策略优化，用自一致性奖励替代 Ground-truth RL，实现部署阶段的持续自我改进。 |
| **[Boosting LLM Exploration via Weak-Model Guidance in RLVR](http://arxiv.org/abs/2608.27420v1)** | Shen et al. | 针对 RLVR 熵崩塌问题，引入弱模型引导探索，大幅提升 pass@k（大 k）性能，兼顾推理深度与广度。 |
| **[Consolidating RLVR Capabilities Across Domains: A Deep Dive into Fusion Paradigms](http://arxiv.org/abs/2608.27409v1)** | Wu et al. | 系统梳理 Merge/Ensemble/Distill 三大融合范式，给出跨领域 RLVR 专家模型合并的实证最佳实践。 |
| **[Not All Eval-Awareness Is Equal: Capabilities Framing Predicts Compliance](http://arxiv.org/abs/2608.27340v1)** | Zhuang & Aranguri | 发现 eval-awareness 可分解为“能力框架”与“评估框架”，前者预测合规性，为安全评测提供更细粒度干预靶点。 |
| **[Difference-in-Differences on a Censored Rating Scale Can Manufacture an Effect](http://arxiv.org/abs/2608.27309v1)** | Fan et al. | 指出 LLM-as-a-Judge 审计中常用的 DiD 设计在有界评分量表上会制造虚假效应，提供修正方法。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
| 论文 | 作者 | 核心贡献 |
|------|------|----------|
| **[WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](http://arxiv.org/abs/2608.27454v1)** | Tang et al. | 将智能体交互经验自动提炼为结构化技能条目，支持版本化演进与跨任务复用，构建“智能体维基百科”。 |
| **[RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution](http://arxiv.org/abs/2608.27439v1)** | Zhang et al. | 首个基于经验驱动技能进化的自动红队智能体，能在真实工具执行环境中自主发现越狱链路。 |
| **[INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment](http://arxiv.org/abs/2608.27348v1)** | Zhang et al. | 将意图显式建模为工具，通过 CoT 监控在动作层面捕捉目标冲突下的代理错位，事前可解释性显著增强。 |
| **[Verify Smarter, Evolve Further: Efficient Harness Evolution through Behavior-Aware Verification](http://arxiv.org/abs/2608.27311v1)** | Xu et al. | 提出行为感知验证，仅对相关行为回放评测，将智能体框架演化成本降低 60%+。 |
| **[What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents](http://arxiv.org/abs/2608.27260v1)** | Zeng et al. | 提出 ACE（一致性/覆盖度/效率）三维度评估框架，指导高质量智能体交互数据合成。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）
| 论文 | 作者 | 核心贡献 |
|------|------|----------|
| **[SWE-Prime: Fewer Trajectories, Better Performance](http://arxiv.org/abs/2608.27449v1)** | Zheng et al. | 证明任务成功 ≠ 高质量监督，设计轨迹质量筛选器，仅用 30% 数据超越全量 SFT 基线。 |
| **[From Static to Dynamic: Benchmarking Real-World Code Review with MCR-Bench](http://arxiv.org/abs/2608.27442v1)** | Zheng et al. | 首个多轮迭代代码审查基准，模拟开发者-审查者真实交互，填补静态评测空白。 |
| **[CorporateBench: Large-Scale Q&A Benchmarking with Temporal Knowledge Bases](http://arxiv.org/abs/2608.27391v1)** | Hamilton et al. | 面向企业级时序知识库的大规模 QA 基准，含人工验证的多任务集，解决内部数据不可共享痛点。 |
| **[RATIO: A Benchmark for Retrieval Across Typed Ideation Operations in Scientific Literature](http://arxiv.org/abs/2608.27394v1)** | Sharon & Hope | 定义“缩放/放大/类比/组合”四类创意检索操作，为 AI 科学家灵感检索提供标准化评测。 |
| **[Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090](http://arxiv.org/abs/2608.27370v1)** | Luo et al. | 单张消费级 GPU 低成本复现千亿级训练配方，开源完整训练日志与超参，极大降低学术界预训练门槛。 |
| **[Naive Prompt Optimization: Rethinking the Need for Complex Prompt Search](http://arxiv.org/abs/2608.27266v1)** | Chang & Chen | 实证表明简单的“采样-评估-保留”循环即可匹敌复杂提示优化器，质疑当前过度设计趋势。 |

### 📊 应用（垂直领域、多模态、代码生成）
| 论文 | 作者 | 核心贡献 |
|------|------|----------|
| **[CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators](http://arxiv.org/abs/2608.27406v1)** | Liu & Shorinwa | 首个跨具身视频世界模型，统一异构机器人数据，零样本泛化至未见具身的物理模拟与动作生成。 |
| **[PAWBench: How Far Are We from Probabilistically Aligned World Modeling?](http://arxiv.org/abs/2608.27345v1)** | Pu et al. | 提出概率对齐世界模型基准，要求模型输出轨迹分布而非单一轨迹，推动生成式物理仿真评测标准化。 |
| **[Mechanistic Reaction Prediction via Discrete Flow Matching on Graph-Structured Electron Occupation](http://arxiv.org/abs/2608.27429v1)** | Nguyen et al. | MAELLE：在电子占据图上做离散流匹配，直接建模电子重排，实现机理可解释的化学反应预测。 |
| **[MM-Spectrum: Multimodal Multi-spectral Molecular Structural Elucidation with a Stable MoE Framework](http://arxiv.org/abs/2608.27286v1)** | Yu et al. | 稳定 MoE 融合多模态光谱，解决异构信号拼接性能退化，分子结构推断 SOTA。 |
| **[BrailleBench: Investigating Multi-Criteria Braille Comprehension in Large Language Models](http://arxiv.org/abs/2608.27268v1)** | Zhang et al. | 首个面向盲/盲聋用户的多维盲文理解基准，揭示现有 LLM 在无障碍访问上的系统性短板。 |

---

## 研究趋势信号
1. **推理时计算从“生成更多”转向“生成更聪明”**：CritICL、TTPO、Weak-Model Guidance 均在探索如何用更少、更精准的推理步骤换取性能跃升，标志着 inference-time scaling 进入精细化阶段。  
2. **智能体生命周期管理显性化**：WikiSkill、RedEvoAgent、Harness Evolution 形成“经验→技能→验证→演化”闭环，智能体工程化向持续交付（CD）演进。  
3. **评测向“过程/分布/交互”深化**：MCR-Bench（多轮交互）、PAWBench（轨迹分布）、RATIO（创意操作类型）、CorporateBench（时序知识）共同推动评测从静态单轮走向动态、概率、领域化。  
4. **跨模态/跨具身统一建模成主流**：CLAP、MM-Spectrum、MAELLE 均在用统一表示对齐异构信号（视频-动作、多光谱、电子-拓扑），通用世界模型与科学基础模型路线收敛。  
5. **低成本/可复现预训练成社区共识**：Puro-2B、Naive Prompt Opt 反映学术界对“性价比”与“可复现性”的强烈诉求，开源配方与基准将加速扩散。

---

## 值得精读
1. **CritICL** — 弱到强泛化的新理论切入点，代价极低且正交于现有推理扩展方法，极具落地潜力。  
2. **WikiSkill** — 智能体技能显性化、版本化的系统性方案，配合 RedEvoAgent 可构建完整“技能飞轮”，是 AgentOps 关键基础设施。  
3. **CLAP** — 跨具身世界模型的里程碑工作，零样本物理仿真能力若经实验验证，将重塑机器人数据获取与 Sim2Real 范式。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*