# Hugging Face 热门模型日报 2026-07-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-05 01:56 UTC

---

好的，作为AI模型生态分析师，以下是基于您提供的2026年7月5日数据生成的《Hugging Face热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026年7月5日**

#### **今日速览**

1.  **多模态与视觉定位持续升温**：NVIDIA的`LocateAnything-3B`凭借强大的视觉定位能力登顶本周热门榜，同时百度、InternScience等推出的多模态模型也展现出极高的下载量，表明社区对“看得懂”的AI需求旺盛。
2.  **Qwen家族与“后训练”百花齐放**：以Qwen3.5/3.6为基座的社区微调模型（如`Ornith`, `Qwythos`, `HauhauCS`系列）占据了大量榜单，显示出Qwen已成为新一代最主流的“炼丹”基底。特别是GGUF量化版、Uncensored版等变体受到热捧。
3.  **新架构与新范式：MoE与MoE的普及**：`Qwen-AgentWorld`、`Leanstral`、`Nemotron`等模型均采用MoE（混合专家）架构，实现了大参数量与低推理成本的平衡。同时，`GLM-5.2`与`DeepSeek-V4`两大系列分别代表国内学术与产业界的顶尖水平，竞争激烈。
4.  **Agentic与Coding成为最大热门标签**：从`Ornith`的“agentic”到`gemma-4-12B-agentic`，再到专门的`BugTraceAI`安全模型，AI Agent与代码生成已取代纯文本对话，成为推动模型下载和点赞的核心驱动力。

---

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

1.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    -   **作者**: zai-org | **点赞**: 3,399 | **下载**: 208,920
    -   **说明**: 智谱AI发布的旗舰级MoE语言模型。凭借顶尖的性能和中文生态优势，成为本周点赞数最高的模型，证明了学术界大模型的强大影响力。

2.  **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
    -   **作者**: deepreinforce-ai | **点赞**: 712 | **下载**: 359,659
    -   **说明**: 基于Qwen3.5架构的35B MoE模型GGUF量化版。通过量化，将大型MoE模型下放到消费级硬件，极大地提升了其实用性，因此下载量巨大。

3.  **[deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B)**
    -   **作者**: deepreinforce-ai | **点赞**: 376 | **下载**: 69,837
    -   **说明**: `Ornith`系列的9B版本，兼具多模态能力。作为较小型号的旗舰，在性能与资源消耗间取得了良好平衡，受到开发者社区欢迎。

4.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    -   **作者**: HauhauCS | **点赞**: 2,454 | **下载**: 2,993,053
    -   **说明**: 基于Qwen3.6的35B MoE模型，经过“Uncensored”及激进风格微调。凭借极高的下载量（近300万）和高点赞，反映了社区对更开放、少限制模型及特定风格调教的强烈需求。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    -   **作者**: nvidia | **点赞**: 2,604 | **下载**: 1,194,542
    -   **说明**: NVIDIA推出的视觉定位基础模型。输入图片和文字指令，即可精确框选、分割或定位目标物体，是本周热度最高的多模态模型，下载量破百万。

2.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    -   **作者**: baidu | **点赞**: 1,714 | **下载**: 988,379
    -   **说明**: 百度发布的通用OCR模型。号称能处理任意场景、任意语言的文字识别，以“Unlimited”为特色，成为实用工具的标杆。

3.  **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    -   **作者**: krea | **点赞**: 496 | **下载**: 89,384
    -   **说明**: Krea推出的第二代图像生成模型的“Turbo”版本。专注于高速推理与高质量图片生成，代表了文本到图像领域的持续迭代。

4.  **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**
    -   **作者**: fal | **点赞**: 157 | **下载**: 0
    -   **说明**: 一款用于LTX-2.3视频模型的3D写实LoRA插件。专门为增强视频生成中的真实感和3D效果而设计，体现了社区在视频生成领域的深化探索。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

1.  **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    -   **作者**: yuxinlu1 | **点赞**: 2,595 | **下载**: 641,260
    -   **说明**: 基于Google Gemma 4的12B代码专用模型GGUF量化版。专为代码生成、推理和编程助手设计，配合GGUF量化，让本地代码助手成为可能，成为本周代码类模型的顶流。

2.  **[nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16)**
    -   **作者**: nvidia | **点赞**: 121 | **下载**: 10,479
    -   **说明**: NVIDIA推出的双塔架构基础模型（30B激活参数仅3B）。专为检索和多模态对齐等任务设计，代表了在高效架构上的探索。

3.  **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)**
    -   **作者**: BugTraceAI | **点赞**: 132 | **下载**: 12,001
    -   **说明**: 专门面向网络安全（Offensive-Security）的模型。能用于代码审计、漏洞挖掘和渗透测试，是AI在垂直安全领域落地的典型代表。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

1.  **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    -   **作者**: empero-ai | **点赞**: 1,461 | **下载**: 1,464,047
    -   **说明**: 在Qwen3.5底座上，使用“Claude-Mythos”数据蒸馏微调的9B模型GGUF版。融合了Qwen的基础能力与Claude的风格，加上GGUF门槛，下载量非常高。

2.  **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    -   **作者**: yuxinlu1 | **点赞**: 1,010 | **下载**: 342,752
    -   **说明**: 专注于Agent能力的Gemma 4模型GGUF量化版。通过指令微调强化了调用工具和执行复杂任务的能力，是Agent模型量化的典范。

3.  **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)**
    -   **作者**: huihui-ai | **点赞**: 162 | **下载**: 4,701
    -   **说明**: 对智谱GLM-5.2进行“Abliterated”（移除拒绝回答机制）处理后的GGUF版本。代表了社区对模型“去审查”的广泛兴趣。

---

#### **生态信号**

1.  **模型家族势头**：**Qwen3.5/3.6**俨然成为继Llama后的新一代“开源基座之王”，大量榜单模型源自其MoE架构的微调。**Gemma 4**作为Google的强势选手，在Coding和Agentic领域异军突起。NVIDIA则通过**GLM-5.2-NVFP4**和**Nemotron**展示了其作为硬件厂商的模型生态影响力。

2.  **开源 vs 闭源**：虽然闭源模型（如Claude， GPT）依然强大，但开源社区正在通过“蒸馏+微调+量化”的组合拳快速追赶。模型如`Qwythos`明确标注为“蒸馏自Claude”，表明**模型蒸馏**成为追赶闭源能力的重要途径。社区对Uncensored、Abliterated版本的需求，反映了对开源模型可控性的新诉求。

3.  **量化与微调活动**：**GGUF**已成为绝对主流的量化格式，几乎所有热门模型都会推出GGUF版本。社区微调呈现出**高度专业化**和**风格化**趋势：不再只是“通用对话”，而是针对`code`、`agentic`、`uncensored`甚至`cybersecurity`等具体场景进行深度调教。以`yuxinlu1`为代表的个人创作者贡献巨大，高频产出高质量微调与量化成果。

---

#### **值得探索**

1.  **`yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF`**
    -   **理由**: **本地编程助手的最佳实践**。它结合了Google最强小模型Gemma 4的性能、顶级的代码微调，以及GGUF的高效部署，是开发者个人电脑上最能打、最实用的LLM之一。强烈推荐尝试本地代码补全和Refactoring。

2.  **`nvidia/LocateAnything-3B`**
    -   **理由**: **视觉AI的“瑞士军刀”**。其目标定位能力堪称惊艳，为图像编辑、智能安防、自动驾驶、机器人抓取等应用提供了极其强大的基础能力。作为NVIDIA出品，其性能与文档也值得信赖。

3.  **`HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive`**
    -   **理由**: **探索模型的“极限”**。虽然Uncensored模型有争议，但它的超高下载量（近300万）和点赞数本身就是一种强烈的生态信号。如果你是研究人员或高级用户，可以尝试理解并对比它与其他审查模型的立场空间、表现差异，从而更深刻地理解模型对齐的技术与社会维度。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*