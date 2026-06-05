# Hugging Face 热门模型日报 2026-06-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-05 00:40 UTC

---

# Hugging Face 热门模型日报
**2026年6月5日**

---

## 一、今日速览

本周 Hugging Face 榜单呈现"中国模型全面主导、生成模型爆发式增长"的格局。DeepSeek-V4 系列展现出惊人的影响力，Pro 版本以 4,629 赞和 568 万下载断层领先，Flash 版本同样突破百万级下载。Qwen 3.6 系列 MoE 架构在 NVIDIA、unsloth 等社区完成全面量化覆盖，开源生态协同效应显著。视频生成领域异军突起，Sulphur-2-base 以 154 万登顶榜首，展示出图像/视频/音频生成模型的巨大需求缺口。NVIDIA 的 Cosmos 3 系列（Nano、Super 及多任务变体）密集上线，标志头部公司向统一多模态模型发起新一轮冲锋。

---

## 二、热门模型

### 🧠 语言模型

**[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** 👍 4,629 | ⬇️ 5,687,031
作者：deepseek-ai · 任务：text-generation
旗舰推理模型，以 4600+ 点赞和 568 万下载成为本周绝对焦点，标志 DeepSeek V4 系列登顶 HF 榜首。

**[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** 👍 1,613 | ⬇️ 5,440,074
作者：Qwen · 任务：image-text-to-text
通义千问 3.6 系列的 27B 参数版本，544 万下载量，是阿里开源生态当前最具拉新能力的多模态基础模型。

**[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** 👍 1,402 | ⬇️ 3,503,796
作者：deepseek-ai · 任务：text-generation
DeepSeek V4 轻量响应版本，在速度与效果间取得平衡，下载超过 350 万，适合大规模部署和高并发推理场景。

**[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** 👍 410 | ⬇️ 14,866
作者：google · 任务：any-to-any
Google Gemma 系列第四代 12B 指令微调版，支持 any-to-any 多模态输入，是 Google 开源策略的最新旗舰。

**[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** 👍 508 | ⬇️ 72,114
作者：LiquidAI · 任务：text-generation
MoE 架构轻量模型，仅激活 1B 参数即在效率与效果间达到极致平衡，近年来 LiquidAI 在超高效模型路线上的代表之作。

**[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** 👍 768 | ⬇️ 79,427
作者：openbmb · 任务：text-generation
仅 1B 参数但下载量突出，清华大学旗下团队在端侧和小模型赛道持续发力，面向高资源效率场景。

**[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** 👍 617 | ⬇️ 157,457
作者：sapientinc · 任务：text-generation
Sabatian 团队基于 Hierarchical Reasoning Model 架构的文本模型，1B 参数却在榜单上表现优异，架构创新驱动型轻量模型。

**[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** 👍 201 | ⬇️ 12,157
作者：JetBrains · 任务：text-generation
JetBrains 出品的代码与推理 MoE 模型，2.5B 激活参数+思维链能力，直击开发者的智能编码需求。

**[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** 👍 270 | ⬇️ 1,978
作者：google · 任务：any-to-any
Gemma 4 的基座版本，下载量相对较低，主要面向需要微调和进一步开发的研究型用户。

---

### 🎨 多模态与生成

**[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** 👍 1,548 | ⬇️ 1,678,259
作者：SulphurAI · 任务：text-to-video
以 154 万下载成为本周"下载王"级生成模型，基于 Lightricks LTX-2.3 的文本到视频生成模型，社区对视频生成的渴求可见一斑。

**[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** 👍 1,401 | ⬇️ 2,646,756
作者：HauhauCS · 任务：image-text-to-text
社区放开的内容安全限制微调版本，265 万下载量说明社区对"无限制"模型存在巨大需求，同时也引发安全讨论。

**[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** 👍 1,281 | ⬇️ 91,834
作者：nvidia · 任务：image-text-to-text
NVIDIA 推出的图像定位模型，在视觉理解和跨模态对齐方面表现突出，适用于检测与定位密集型视觉任务。

**[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** 👍 251 | ⬇️ 22,715
作者：stepfun-ai · 任务：image-text-to-text
阶跃星辰 3.7 系列的 Flash 版本，覆盖视觉-语言任务，代表国产 MLLM 阵营持续扩张。

**[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** 👍 516 | ⬇️ 381
作者：meituan-longcat · 任务：audio-text-to-video
美团旗下龙猫视频化身模型，低下载量暗示早期阶段或侧重内部使用，布局 AI 驱动视频内容生态。

**[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** 👍 203 | ⬇️ 310
作者：ideogram-ai · 任务：text-to-image
Ideogram 第四代图像生成模型的 FP8 量化版，在质量与推理效率上取得进展。

**[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)** 👍 162 | ⬇️ 17,903
作者：nvidia
NVIDIA Cosmos 3 系列的轻量级入口版本，为开发者提供入门级统一多模态模型体验。

**[nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super)** 👍 133 | ⬇️ 16,767
作者：nvidia
Cosmos 3 超大规模版本，面向生成与理解双任务，代表 NVIDIA 在"世界模型"方向的最新押注。

**[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** 👍 120 | ⬇️ 129
作者：ByteDance · 任务：image-text-to-video
字节跳动推出的图像文本到视频模型，学术论文支撑，低下载量表明早期发布阶段，值得关注其后续进展。

**[OpenMOSS-Team/MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5)** 👍 144 | ⬇️ 28,331
作者：OpenMOSS-Team · 任务：text-to-speech
复旦 MOSS 团队的中文语音合成模型，在中文 TTS 领域持续迭代，填补高质量开源中文语音模型空白。

**[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** 👍 158 | ⬇️ 398
作者：ideogram-ai · 任务：text-to-image
Ideogram 4 的 NF4 超轻量量化版本，适配资源受限环境的图像生成需求。

**[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** 👍 518 | ⬇️ 18,942
作者：NemoStation · 任务：video-text-to-text
面向视频内容理解的轻量模型，以 2B 参数支撑视频问答和描述，在视频理解小众赛道中表现亮眼。

**[nvidia/PiD](https://huggingface.co/nvidia/PiD)** 👍 302 | ⬇️ 852
作者：nvidia · 任务：image-to-image
NVIDIA 图像扩散模型，专注超分辨率等图像到图像转换任务。

**[nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image)** 👍 108 | ⬇️ 961
**[nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video)** 👍 102 | ⬇️ 899
Cosmos 3 Super 的任务专用变体，覆盖文本生成图像和图像生成视频两个子任务。

---

### 🔧 专用模型

**[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** 👍 230 | ⬇️ 5,970
作者：PaddlePaddle · 任务：image-text-to-text
百度 PaddlePaddle 的视觉语言 OCR 模型，结合 ERNIE 4.5，在文档理解和表格检测方面持续提升。

---

### 📦 微调与量化

**[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** 👍 178 | ⬇️ 629,244
作者：nvidia · 任务：text-generation
NVIDIA 官方 FP4 版 Qwen 3.6 MoE 模型，62.9 万下载，是头部云厂商与开源社区协同量化的标杆案例。

**[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** 👍 645 | ⬇️ 1,063,964
作者：unsloth · 任务：image-text-to-text
unsloth 社区发布的 Qwen 3.6-27B GGUF 量化版，106 万下载证明社区对可本地部署的量化多模态模型需求旺盛。

**[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** 👍 284 | ⬇️ 62,850
作者：unsloth · 任务：image-text-to-text
Gemma 4 的社区量化版，Unsloth 继续在快速量化领域保持领先。

**[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)** 👍 182 | ⬇️ 102,119
作者：LiquidAI · 任务：text-generation
LFM2.5 的自家 GGUF 量化版，10 万+ 下载说明端侧和边缘部署需求强烈。

**[stepfun-ai/Step-3.7-Flash-GGUF](https://huggingface.co/stepfun-ai/Step-3.7-Flash-GGUF)** 👍 107 | ⬇️ 44,434
作者：stepfun-ai · 任务：image-text-to-text
Step 3.7 Flash 的量化版，提供 llama.cpp 等框架友好的部署选项。

---

## 三、生态信号

本周 Hugging Face 呈现三大生态信号：

**1. 中国模型阵营全面主导。** DeepSeek-V4、Qwen 3.6、Step 3.7、LongCat 等中国团队/公司的模型占据了榜单下载量和点赞数的前列。DeepSeek-V4-Pro 以 568 万下载断层领先，Qwen 3.6 系列在多尺寸、多量化版本上形成完整矩阵。这标志着中国开源 LLM 生态已经从"跟随者"转变为"引领者"。

**2. 量化生态高度活跃。** unsloth、NVIDIA、LiquidAI 等不间断推出 GGUF、FP4、NF4 等量化版本，反映出**本地推理和边缘部署的需求正在爆炸性增长**。Qwen 3.6 系列在不到一周内就出现了 NVIDIA 官方 FP4、unsloth GGUF、社区微调版本等多个变体，从侧面印证了 MoE 架构对量化友好的结构优势。

**3. 生成模型新赛道爆发。** Sulphur 2 的 154 万下载和 LongCat Video Avatar 的上线表明，**文本到视频/音频的生成模型已经成为新的流量入口**。NVIDIA Cosmos 3 系列（5 个变体同日上线）进一步说明头部公司正朝"统一多模态世界模型"方向全力押注，未来视频理解+生成的一体化模型将成为主战场。

---

## 四、值得探索

### 1. [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
**推荐理由：** 本周综合热度最高的模型，568 万下载量说明其已大规模落地。作为对标顶级闭源模型的国产开源旗舰，其在推理、代码和数学任务上的表现值得深度评测对比。关注其与 V4-Flash（350 万下载）之间的能力-成本权衡，对实际工程选型极具参考价值。

### 2. [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)
**推荐理由：** 文本到视频领域罕见的高质量开源模型，154 万下载在生成类模型中极为突出。基于 LTX-2.3 架构，对研究视频生成技术路线（扩散 vs自回归、DiT 变体）有重要参考价值，也适合对 AI 视频创作有需求的团队优先尝试。

### 3. [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)
**推荐理由：** 仅用 1B 参数就实现了亮眼的榜单表现，代表了**轻量化架构创新**这一极具潜力的研究方向。其 Hierarchical Reasoning Model 架构跳出了单纯堆参数的范式，值得研究者和模型设计者深入剖析，同时也为端侧和小资源场景部署提供了新思路。

---

*Hugging Face 热门模型日报由 OWL 生成 · 数据截止 2026-06-05*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*