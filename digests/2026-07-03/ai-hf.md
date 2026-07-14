# Hugging Face 热门模型日报 2026-07-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-03 01:51 UTC

---

好的，这是根据您提供的2026-07-03 Hugging Face Hub热门模型数据生成的《Hugging Face 热门模型日报》。

---

# Hugging Face 热门模型日报 (2026-07-03)

## 今日速览

本周 Hugging Face 社区热度持续高涨，**多模态**与**视觉语言模型**成为绝对焦点，百度、Google、NVIDIA 等巨头均有重磅发布。**MoE（混合专家）架构**成为大模型主流，Qwen3.5/3.6 和 GLM-5.2 系列模型凭借高效推理和优秀性能广受追捧。社区微调与量化活动异常活跃，涌现出大量针对特定场景（如代码、Agent）优化的模型。值得注意的是，**图像定位**与**视频生成**领域的专用模型也取得了突破性进展。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   作者: zai-org | 点赞: 3,256 | 下载: 176,154
   一句话说明: 智谱AI旗下的最新MoE大模型，以极高的对话质量获得了本周最高点赞数，是社区对话模型的新标杆。

2. **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
   作者: deepseek-ai | 点赞: 303 | 下载: 8,184
   一句话说明: DeepSeek V4系列的“Pro”版本，专为追求极致性能的推理场景设计，论文已公开，代表了开源最强模型之一。

3. **[deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)**
   作者: deepseek-ai | 点赞: 128 | 下载: 23,939
   一句话说明: 与Pro版定位不同，Flash版更侧重推理速度与效率，适合大规模部署和高吞吐量应用。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   作者: baidu | 点赞: 1,652 | 下载: 758,489
   一句话说明: 百度开源的“无限制”OCR模型，能处理任意场景的文字识别，凭借强大的实用性和下载量高居第二。

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   作者: nvidia | 点赞: 2,573 | 下载: 1,006,831
   一句话说明: NVIDIA推出的图像“指哪打哪”的定位模型，无需训练即可定位任意开放词汇目标，是本周最火的多模态模型之一。

3. **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
   作者: krea | 点赞: 462 | 下载: 69,788
   一句话说明: 图像生成领域的明星项目Krea的第二代Turbo版本，在生成速度和画质上相比前代有显著提升。

4. **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**
   作者: fal | 点赞: 145 | 下载: 0
   一句话说明: 一款用于LTX视频模型的LoRA模块，专门针对3D写实风格进行优化，是视频生成领域的新探索。

### 🔧 专用模型（代码、数学、医疗、嵌入）

1. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
   作者: yuxinlu1 | 点赞: 2,573 | 下载: 614,069
   一句话说明: 基于Gemma-4的顶级代码模型，经过高效微调后，在代码生成与推理任务上表现卓越，是开发者首选。

2. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
   作者: yuxinlu1 | 点赞: 962 | 下载: 314,374
   一句话说明: 同样是Gemma-4的微调版本，但专门针对AI Agent场景优化，具备更强的工具调用和自主决策能力。

3. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
   作者: google | 点赞: 118 | 下载: 89
   一句话说明: Google推出的新一代表格数据基础模型，在零样本分类和回归任务上表现出色，为结构化数据领域带来了新思路。

4. **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)**
   作者: nationaldesignstudio | 点赞: 104 | 下载: 790
   一句话说明: 一个专门用于PII（个人隐私信息）检测和分类的BERT变体，适合直接部署在Web端进行数据脱敏处理。

### 📦 微调与量化（社区微调、GGUF、AWQ）

1. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   作者: empero-ai | 点赞: 1,256 | 下载: 1,250,562
   一句话说明: Qwen 3.5的精调变体，通过GGUF量化后，在llama.cpp上实现了极高的运行效率，下载量接近130万。

2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   作者: HauhauCS | 点赞: 2,396 | 下载: 3,078,904
   一句话说明: 本周下载量冠军，这是一个极度“激进”和“无审查”的Qwen3.6 MoE模型，引发了社区广泛讨论与使用。

3. **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
   作者: deepreinforce-ai | 点赞: 658 | 下载: 284,585
   一句话说明: Ornith全家桶的35B版本GGUF量化版，以MIT许可开源，同时兼容多种部署框架，社区友好度极高。

4. **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)**
   作者: huihui-ai | 点赞: 135 | 下载: 2,592
   一句话说明: 对GLM-5.2进行了“去审查”（Abliteration）微调并量化，代表了社区对模型自由度的持续追求。

## 生态信号

*   **Qwen3.x 与 MoE 家族势头正旺**：本周榜单中，Qwen3.5/3.6系列及其衍生模型占据多个席位，其灵活的MoE架构激发了社区极大的创作热情，衍生出大量针对特定功能（如Coder、Uncensored）的微调版本。GLM-5.2同样作为MoE模型，展示了中国开源模型的强劲实力。
*   **开源权重全面碾压闭源**：榜单前30名全为开源模型，NVIDIA、Google、百度等巨头均积极拥抱开源。这种开放生态使得社区能够快速基于基座模型进行二次开发，形成“基座+社区微调”的高效迭代模式。
*   **量化活动成为主流**：几乎所有热门大模型都同时提供GGUF等量化版本。考虑到庞大的下载量，可以判断社区用户（尤其是个人开发者和使用者）正大规模转向使用量化模型在本地或边缘设备上运行，以平衡性能与成本。

## 值得探索

1. **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**：这是Qwen官方为Agent场景打造的专用MoE模型。如果你正在构建AI智能体或复杂的任务规划系统，这个模型值得深入研究，它代表了基座模型向特定使用场景进化的方向。

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：如果你对计算机视觉感兴趣，你会发现这个模型的潜力巨大。它几乎可以“零样本”定位任何东西，无论是做图像分析、目标追踪还是自动驾驶，都提供了一种全新的、颠覆性的解题思路。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*