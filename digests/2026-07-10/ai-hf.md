# Hugging Face 热门模型日报 2026-07-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-10 01:49 UTC

---

好的，作为AI模型生态分析师，以下是为您生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-10**

#### **今日速览**

本周 Hugging Face 生态呈现出三大核心看点：**Qwen 3.5/3.6** 系列及其衍生模型在推理、对话和多模态任务上展现出统治力，并伴随大量社区微调与量化活动；**NVIDIA** 凭借其在视觉定位（`LocateAnything-3B`）和模型量化（`NVFP4`）上的技术输出，成为生态中不可忽视的力量；同时，**Google Gemma 4** 的代码与智能体版本（`gemma-4-12B-agentic-fable5`）在开发者社区获得极高人气，标志着开源模型在专用领域（如Agent、Coding）的竞争进入白热化。

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | 作者: tencent | 点赞: 615 | 下载: 5,572
  腾讯推出的最新语言模型，基于Hunyuan架构，定位为强大的文本生成模型，标志着国内大厂在通用基座模型上的持续迭代。

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 点赞: 3,729 | 下载: 362,300
  智谱AI推出的新一代对话模型，采用MoE架构，凭借强大的对话能力和开源策略，在开发者社区中受关注度极高。

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | 作者: deepseek-ai | 点赞: 458 | 下载: 29,230
  深度求索的旗舰级V4模型“Pro”版本，性能强劲，是开源社区中备受期待的“最强推理模型”之一。

- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** | 作者: SupraLabs | 点赞: 73 | 下载: 722
  一个轻量级的模型路由专家，可用于在多个LLM之间智能分配任务，体现了模型生态基础设施的精细化发展趋势。

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | 作者: InternScience | 点赞: 436 | 下载: 23,112
  基于Qwen3.5 MoE架构的智能体专用模型，专为工具调用和复杂任务规划而生，代表了模型即服务（MaaS）的Agent化趋势。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 作者: nvidia | 点赞: 2,687 | 下载: 1,447,244
  NVIDIA发布的3B参数通用视觉定位模型，能对任意图像中的目标进行指代与分割，技术实力强劲，在视觉特征提取领域极具潜力。

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Raw)** | 作者: krea | 点赞: 569 | 下载: 157,302
  Krea团队在其基座模型上推出的“Turbo”加速版，专注于文本到图像生成，代表了文生图领域追求更高效率和更低延迟的趋势。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 点赞: 1,903 | 下载: 1,246,042
  百度的通用OCR模型，以其强大的识别能力和“无限制”的适用场景（支持多语言、多字体）成为本周下载量最高的模型之一。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | 作者: google | 点赞: 330 | 下载: 16,374
  谷歌推出的表格数据基础模型（TabFM），专为表格分类与回归任务设计，在零样本场景下表现亮眼，是LLM下沉到结构化数据分析的代表作。

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | 作者: yuxinlu1 | 点赞: 2,670 | 下载: 703,735
  基于Google Gemma 4的代码专家模型，经过“fable5”数据合成和“composer”微调，专注于Coding和Reasoning，在开发者中人气极高。

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | 作者: yuxinlu1 | 点赞: 1,117 | 下载: 418,171
  同一个作者对Gemma 4的“智能体”版本微调，强调终端Agent能力（terminal），与代码版互为补充。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 点赞: 1,930 | 下载: 1,875,602
  基于Qwen3.5的对话微调版本，配合其GGUF量化版，凭借高超的“角色扮演”和“写作”能力，成为社区中最火爆的微调模型之一。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 点赞: 2,596 | 下载: 2,716,428
  本周下载量最高的模型之一，一个基于Qwen3.6的“无审查”版本，强调“激进”对话风格，体现了社区对模型“自由化”的强烈需求。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | 作者: unsloth | 点赞: 1,025 | 下载: 2,894,918
  Unsloth团队将最新的Qwen3.6模型进行量化，并集成了“MTP”（Multi-Token Prediction）特性，兼顾了高性能和推理速度。

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | 作者: deepreinforce-ai | 点赞: 820 | 下载: 957,721
  一个35B规模的开源模型，经过GGUF量化后，以其优秀的综合能力和适中的参数量，成为消费级硬件上部署的优选。

#### **生态信号**

1.  **Qwen家族统治，Gemma与NVIDIA双线崛起**：当前生态的核心玩家是阿里系的**Qwen 3.5/3.6**，其强大的基座能力催生了海量的社区微调（如`Qwythos`、`Uncensored`）。同时，Google的**Gemma 4**（尤其在Coding/Agent领域）和**NVIDIA**（通过创新硬件如`NVFP4`量化方案和专用模型`LocateAnything`）正快速建立自己的影响力版图。
2.  **开源权重 vs 闭源**：以`tencent/Hy3`、`zai-org/GLM-5.2`、`deepseek-ai/DeepSeek-V4`为代表的国内大厂模型继续开源，社区通过`GGUF`、`safetensors`等形式大量分发，证明“开源权重+本地部署”依然是抵抗API依赖的核心策略。闭源API模型则通过知识蒸馏（如基于`Claude`理念的`fable`系列）间接影响开源。
3.  **量化与微调活动异常活跃**：几乎所有热门模型都会迅速被`unsloth`、`empero-ai`等量化专家适配为GGUF格式，以适配`llama.cpp`等消费级推理引擎。同时，针对特定风格（如`Uncensored`、`Agentic`）的微调成为社区创新的主要驱动力，表明用户对“模型个性化”和“场景专用化”的需求远未被大模型厂商满足。

#### **值得探索**

1.  **nvidia/LocateAnything-3B**：如果你对“看图说话”或“视觉基础模型”感兴趣，这个3B模型是必试项。它证明了在特定视觉任务上，小参数量的专用模型可以做到非常专业和强大，性能远超同等尺寸的通用图文模型。
2.  **google/tabfm-1.0.0-pytorch**：如果你日常与表格数据打交道，这个模型值得深入研究。它打破了“LLM只擅长文本”的刻板印象，为大模型在金融、风控、医疗等结构化数据分析领域的应用提供了新思路。
3.  **unsloth/Qwen3.6-27B-MTP-GGUF**：作为本周下载量冠军的量化版本，它完美代表了当前开源生态的“最优解”：用最新的最强底座（Qwen3.6）+ 最先进的技术（MTP）+ 最实用的格式（GGUF），是部署自有模型的首选参考。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*