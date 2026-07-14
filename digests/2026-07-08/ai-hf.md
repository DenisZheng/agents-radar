# Hugging Face 热门模型日报 2026-07-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-08 01:28 UTC

---

好的，作为AI模型生态分析师，以下是我为您整理的2026年7月8日《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-08**

#### **今日速览**

本周 Hugging Face 热门榜呈现两大核心趋势：**Qwen 3.5/3.6 家族的全面爆发**与**视觉语言模型（VLM）的实用化落地**。基于Qwen架构的微调与量化模型占据了榜单半壁江山，特别是“Qwythos”和“Ornith”系列在社区引起了极高热度。同时，企业级与专业模型表现抢眼，如百度的OCR模型下载量突破百万，谷歌的表格基础模型和英伟达的视觉定位模型也展现出巨大潜力。此外，Gemma 4和GLM 5.2的社区微调版本在编码和推理任务上持续受到追捧。

#### **热门模型**

##### 🧠 **语言模型（LLM、对话模型、指令微调）**

1.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **作者:** zai-org | **点赞:** 3,591 | **下载:** 281,584
    *   **说明:** 智谱AI的GLM-5.2模型，采用MoE架构，以高点赞数领跑，是本周最受关注的对话模型之一。

2.  **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
    *   **作者:** deepreinforce-ai | **点赞:** 779 | **下载:** 502,663
    *   **说明:** `deepreinforce-ai` 基于Qwen 3.5打造的35B MoE模型Ornith的GGUF量化版，兼顾大容量与部署效率，下载量极高。

3.  **[deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)**
    *   **作者:** deepreinforce-ai | **点赞:** 452 | **下载:** 454,944
    *   **说明:** 与35B版同源的9B版本，因其在性能和资源消耗之间达到良好平衡，成为个人开发者和研究者的首选模型。

4.  **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
    *   **作者:** deepseek-ai | **点赞:** 424 | **下载:** 15,538
    *   **说明:** 深度求索的V4 Pro版本，标志着其旗舰模型系列的持续迭代，是开源社区追求极致性能的重要标杆。

5.  **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**
    *   **作者:** empero-ai | **点赞:** 723 | **下载:** 152,516
    *   **说明:** `empero-ai` 的Qwythos-9B原始权重版本，专注于融合多种能力，是社区微调领域的标志性作品。

6.  **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)**
    *   **作者:** mistralai | **点赞:** 157 | **下载:** 157
    *   **说明:** Mistral AI推出的119B参数MoE模型，架构先进，是大型企业级推理应用的潜在选项。

7.  **[nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16)**
    *   **作者:** nvidia | **点赞:** 131 | **下载:** 10,936
    *   **说明:** 英伟达推出的“双塔”架构基础模型，可能为检索增强生成（RAG）等特定场景提供了新的技术路线。

##### 🎨 **多模态与生成（图像、视频、音频、文本到X）**

1.  **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   **作者:** empero-ai | **点赞:** 1,758 | **下载:** 1,683,711
    *   **说明:** 本周的**明星模型**。基于Qwen 3.5的视觉语言模型Qwythos的GGUF量化版，拥有巨大的下载量，是社区量化部署VLM的焦点。

2.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **作者:** baidu | **点赞:** 1,833 | **下载:** 1,084,945
    *   **说明:** 百度的“无限”OCR模型，被标注为`image-text-to-text`任务，展示了其强大的文档理解和文字识别能力，下载量巨大。

3.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **作者:** nvidia | **点赞:** 2,657 | **下载:** 1,424,958
    *   **说明:** 英伟达推出的视觉定位模型，3B参数具备令人印象深刻的物体检测和定位能力，在趋势榜中备受推崇。

4.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者:** HauhauCS | **点赞:** 2,551 | **下载:** 2,823,988
    *   **说明:** 基于Qwen 3.6的社区去审查版VLM，极其受欢迎。它展示了社区对更少限制、更“激进”模型输出的需求。

5.  **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   **作者:** krea | **点赞:** 540 | **下载:** 123,729
    *   **说明:** Krea推出的文生图模型，作为Krea-2系列的快速版本，专注于视觉内容创作，是AI艺术领域的生力军。

##### 🔧 **专用模型（代码、数学、医疗、嵌入等）**

1.  **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   **作者:** yuxinlu1 | **点赞:** 2,638 | **下载:** 674,977
    *   **说明:** 基于Google Gemma 4的编码专用模型，经过社区微调，结合了fable5和composer技术，是AI编程工具的核心驱动力之一。

2.  **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
    *   **作者:** google | **点赞:** 287 | **下载:** 9,458
    *   **说明:** 谷歌发布的表格数据基础模型，支持零样本分类和回归，为金融、医疗等数据处理领域提供了预训练大模型解决方案。

3.  **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**
    *   **作者:** nvidia | **点赞:** 315 | **下载:** 538,687
    *   **说明:** 英伟达使用其Model Optimizer对Qwen 3.6进行优化的版本，在英伟达硬件上实现极致性能。

##### 📦 **微调与量化（社区微调、GGUF、AWQ）**

1.  **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   **作者:** unsloth | **点赞:** 991 | **下载:** 2,842,118
    *   **说明:** `unsloth` 提供的Qwen 3.6 MTP版本GGUF量化，是Qwen大家族中最受欢迎的量化版本之一，体现了社区对高效部署的极致追求。

2.  **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    *   **作者:** yuxinlu1 | **点赞:** 1,076 | **下载:** 384,383
    *   **说明:** 与编码版同源，但专注于**Agent**能力，是构建自主代理的核心模型，社区微调潜力巨大。

3.  **[Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF)**
    *   **作者:** Jackrong | **点赞:** 161 | **下载:** 159,871
    *   **说明:** 另一个基于Qwen 3.6的编码MoE模型量化版，进一步巩固了Qwen在社区微调领域的统治地位。

4.  **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)**
    *   **作者:** huihui-ai | **点赞:** 185 | **下载:** 7,349
    *   **说明:** 社区对GLM-5.2的“去安全机制”（abliterated）量化版，代表了社区对模型中“审查”机制存在不同意见。

#### **生态信号**

*   **Qwen 家族一统江湖？** 模型家族势头最旺的当属 **Qwen 3.5/3.6**，从基础权重到MoE、编码、视觉、去审查版，再到GGUF量化版，形成了极其完整的生态链。榜单中近半模型直接或间接基于Qwen，显示了其作为社区基础模型的强大吸引力。
*   **开源权重 vs 闭源：** 榜单上几乎全是开源模型，但开源本身呈现出“层级化”。以Google (Gemma 4)、Mistral AI (Leanstral)为代表的“顶级玩家”提供基础权重，而`deepreinforce-ai`、`empero-ai`等社区力量则在其上进行了大量有价值的微调与衍生创作。
*   **量化活动是主力：** GGUF 量化模型占据了下载量榜的前列。这表明**本地推理**和**非一线硬件部署**仍是当前AI应用的核心需求。`unsloth` 和 `llama.cpp` 等社区工具让大型VLM和LLM的部署变得越来越便捷。

#### **值得探索**

1.  **[](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**：这是本周无可争议的**最佳实践模型**。它集VLM、量化、高下载量于一身，是体验社区最前沿量化技术和探索强大视觉语言能力的首选。

2.  **[](https://huggingface.co/nvidia/LocateAnything-3B)**：如果您对AI视觉应用（如机器人、自动驾驶、图像分析）感兴趣，这个模型值得深入。3B参数实现了强大的物体定位功能，代表了专业模型“小而美”的方向。

3.  **[](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**：对AI辅助编程有高要求的用户，强烈建议尝试此模型。它结合了Gemma 4的强大基础与社区顶尖的编码微调技术，是目前开源编码模型中的佼佼者。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*