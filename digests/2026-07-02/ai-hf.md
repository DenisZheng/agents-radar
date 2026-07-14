# Hugging Face 热门模型日报 2026-07-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-02 00:28 UTC

---

好的，作为AI模型生态分析师，以下是基于您提供的数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-02**

#### **今日速览**

本周 Hugging Face 的热度呈现三大信号：**GLM 系列**凭借智谱AI的5.2版本成为最大赢家，包揽点赞榜前三，显示出强大的社区号召力；**量化模型（GGUF）** 继续统治下载榜，特别是针对大参数的MoE（混合专家）模型，社区对本地部署的渴求依然强烈；此外，**多模态能力**几乎成为所有新模型标配，无论是语言模型还是专用模型，都尝试支持图像输入。值得注意的是，**DeepSeek-V4**和**Qwen AgentWorld**等新家族开始崭露头角，预示着下一代模型竞争的技术方向。

---

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** - 作者: zai-org | 点赞: 3,168 | 下载: 159,967
  - **智谱AI的旗舰MoE模型，凭借强大的对话和生成能力，荣登本周热度榜首。**

- **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)** - 作者: deepreinforce-ai | 点赞: 186 | 下载: 5,792
  - **基于Qwen3.5架构的巨型MoE模型，代表了开源社区在参数量级上的极限探索。**

- **[deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)** - 作者: deepreinforce-ai | 点赞: 291 | 下载: 135,452
  - **Ornith系列的35B完整精度版本，在性能和部署成本间取得平衡。**

- **[deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B)** - 作者: deepreinforce-ai | 点赞: 332 | 下载: 46,677
  - **Ornith系列的小尺寸基础模型，适合研究和小型应用场景。**

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** - 作者: deepseek-ai | 点赞: 277 | 下载: 7,629
  - **DeepSeek最新V4系列的旗舰版本，拥有独立的arXiv论文，代表了顶尖的技术实力。**

- **[deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)** - 作者: deepseek-ai | 点赞: 124 | 下载: 13,038
  - **V4系列的轻量快速版，专为注重推理速度和成本优化的场景设计。**

- **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LiquidAI/LFM2.5-230M)** - 作者: LiquidAI | 点赞: 180 | 下载: 21,935
  - **极低参数量的高效语言模型，证明了在小模型领域仍有突破空间，适合边缘端部署。**

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** - 作者: baidu | 点赞: 1,575 | 下载: 630,246
  - **百度的全能OCR模型，支持图像到文本的转换，凭借优秀的特征提取能力获得极高下载量。**

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** - 作者: krea | 点赞: 435 | 下载: 56,953
  - **基于Krea-2-Raw的加速版图像生成模型，主打更高的推理效率。**

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** - 作者: nvidia | 点赞: 2,544 | 下载: 896,058
  - **英伟达推出的图像定位模型，能精准识别和定位图像中的任意物体，是本周下载量最高的多模态模型。**

- **[krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)** - 作者: krea | 点赞: 260 | 下载: 39,515
  - **Krea系列的基础图像生成原始模型，是众多社区微调和加速版的起点。**

- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** - 作者: fal | 点赞: 136 | 下载: 0
  - **用于LTX视频模型的3D真实感LoRA轻量级微调模块，拓展了图像到视频生成的能力。**

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** - 作者: InternScience | 点赞: 138 | 下载: 511
  - **专注于智能体（Agent）任务的MoE模型，虽然下载量不高，但代表了专用智能体模型的重要方向。**

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** - 作者: empero-ai | 点赞: 1,150 | 下载: 1,113,871
  - **基于Qwen3.5微调的创意写作模型GGUF版本，下载量极高，说明社区对高质量量化版微调模型需求旺盛。**

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** - 作者: yuxinlu1 | 点赞: 2,551 | 下载: 597,090
  - **基于Gemma 4的代码专用模型GGUF版本，凭借强大的编码和推理能力，成为本周最受欢迎的量化模型之一。**

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** - 作者: HauhauCS | 点赞: 2,376 | 下载: 3,055,962
  - **社区制作的“无审查”版Qwen3.6 MoE模型，下载量惊人，展示了社区对模型潜在能力探索的强烈兴趣。**

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** - 作者: yuxinlu1 | 点赞: 918 | 下载: 288,741
  - **专为智能体（Agent）场景微调的Gemma 4模型量化版，代表了模型从生成到行动的进化趋势。**

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** - 作者: unsloth | 点赞: 490 | 下载: 212,201
  - **著名微调框架Unsloth制作的GLM-5.2 GGUF量化版，极大方便了社区对GLM-5.2的本地运行。**

- **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)** - 作者: nvidia | 点赞: 198 | 下载: 136,933
  - **英伟达为GLM-5.2提供的4位浮点量化版，代表着官方和硬件厂商对模型优化的投入。**

- **[deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)** - 作者: deepreinforce-ai | 点赞: 365 | 下载: 191,409
  - **Ornith-1.0-9B的GGUF量化版本，满足了社区对中等规模模型本地运行的需求。**

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** - 作者: deepreinforce-ai | 点赞: 609 | 下载: 233,701
  - **Ornith-1.0-35B的GGUF量化版本，是追求高性能本地部署用户的热门选择。**

- **[unsloth/Qwen-AgentWorld-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen-AgentWorld-35B-A3B-GGUF)** - 作者: unsloth | 点赞: 129 | 下载: 196,441
  - **Unsloth为Qwen专用Agent模型制作的量化版，该模型旨在理解和交互世界模型。**

- **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)** - 作者: huihui-ai | 点赞: 115 | 下载: 901
  - **社区对GLM-5.2进行“abliterated”（移除安全限制）处理的GGUF版本，反映了社区对模型可控性与创造力之间博弈的探索。**

- **[Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF)** - 作者: Jackrong | 点赞: 99 | 下载: 12,635
  - **一个社区微调的代码专用模型，结合了多任务学习，体现了社区在专业细分领域的快速迭代。**

---

#### **生态信号**

1.  **GLM 与 Qwen 双雄争霸，DeepSeek 异军突起**：本周榜单几乎被 **GLM-5.2** 和 **Qwen（3.5/3.6）** 两大系列包揽，后者通过 **Ornith** 和 **Qwythos** 等第三方微调模型显示了强大的生命力。同时，**DeepSeek-V4** 的正式开源，标志着其已跻身头部开源模型家族，未来竞争将更激烈。
2.  **量化是终局之战**：榜单前20名中有超过一半是GGUF量化版本，下载量动辄数十万甚至上百万。这表明，**推理效率和本地化部署能力**已成为衡量模型实用性的关键标准，社区最关心的不是“有多大模型”，而是“能用多好的模型”。
3.  **“无审查”社区文化持续发酵**：从 **HauhauCS** 近300万的下载量可以看出，社区对于自由、无限制地探索模型潜力的需求非常强烈，这形成了官方模型与社区“魔改”模型并存的独特生态。
4.  **Agent与代码能力是模型增长点**：无论是 **Agentic** 微调的 Gemini 4，还是各类 **Coder** 模型，都表明社区正在积极推动语言模型从“对话”向“行动”和“工作”转变。

---

#### **值得探索**

1.  **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**：如果你关注技术前沿，这个模型是必读选项。它附带独立论文，代表了当前开源模型在复杂推理和任务处理上的顶尖水平，值得研究人员和高级开发者深度体验。
2.  **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**：对于开发者和程序员，这是本周最值得尝试的代码助手。它基于 Google 的 Gemma 4 进行深度微调，其 GGUF 版本（597k下载）证明其在性能和可用性上都得到了社区广泛验证，是提升编码效率的利器。
3.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**：如果你想了解社区模型的“野性”力量，这个近300万下载的模型是最佳案例。它展示了去掉安全限制后Qwen MoE模型的强大创造力，但使用时请注意潜在的生成内容风险。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*