# Hugging Face 热门模型日报 2026-06-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-09 00:36 UTC

---

# Hugging Face 热门模型日报 · 2026-06-09

---

## 今日速览

本周 Hugging Face 榜单呈现出明显的"多模态大一统"趋势——Google Gemma 4 系列以 `any-to-any` 能力成为最大赢家，三天内密集上榜五个变体（官方权重 + 社区量化），点赞与下载双双霸榜。DeepSeek V4 系列热度不减，Pro 版以 4,720 点赞和 540 万次下载登顶，Flash 版同样强势，延续了 DeepSeek 在开源大模型的头部地位。NVIDIA 本周多点开花，Agent 定位模型、超大 MoE、流式 ASR、世界模型 Cosmos3 悉数上榜，展现出系统性布局。端侧高效架构（MoE/MLA）与社区量化生态（Unsloth GGUF）成为两条平行热点主线，开源生态活跃度极高。

---

## 热门模型

### 🧠 语言模型

**[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
- deepseek-ai | ★ 4,720 | ⬇ 5,399,597
- 本周榜单冠军。DeepSeek 最新旗舰推理模型，继承系列在代码与数学上的卓越表现，540 万次下载体现了开发者社区的绝对信任。

**[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
- deepseek-ai | ★ 1,447 | ⬇ 3,262,529
- DeepSeek V4 的轻量高速版本，以极低延迟和成本提供接近 Pro 的推理能力，326 万次下载说明其在生产部署中的超高性价比。

**[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
- HauhauCS | ★ 1,553 | ⬇ 3,036,465
- 基于 Qwen3.6 MoE 架构的社区微调版，303 万次下载为全榜最高，"uncensored"标签和 MoE 效率使其在特定用户群体中极具吸引力。

**[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
- LiquidAI | ★ 548 | ⬇ 135,131
- LiquidAI 推出的极致高效 MoE 模型，仅 1B 激活参数即可媲美更大模型，代表了端侧部署的新范式。

**[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
- JetBrains | ★ 259 | ⬇ 17,448
- JetBrains 首款开源思考模型，MoE 架构 + 推理增强，标志着 IDE 巨头正式入局开源 LLM 赛道。

**[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)**
- nvidia | ★ 165 | ⬇ 55,910
- NVIDIA 550B 参数超大 MoE 模型，55B 激活参数，定位为下一代 Agent 基础模型，代表了开源大模型规模竞赛的新高度。

**[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)**
- nvidia | ★ 145 | ⬇ 66,219
- 同一 Ultra 模型的 NVIDIA 自研 FP4 量化版本，展示了 NVIDIA 在模型压缩与硬件协同优化上的深度整合。

**[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
- sapientinc | ★ 726 | ⬇ 163,951
- 仅 1B 参数却凭借层次推理机制（Hierarchical Reasoning Model）在推理任务上表现亮眼，是"小而精"路线的代表作。

**[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)**
- nex-agi | ★ 116 | ⬇ 716
- 基于 Qwen3.5 MoE 的社区微调模型，下载量尚低但代表了新兴团队对开源模型的快速跟进。

---

### 🎨 多模态与生成

**[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
- google | ★ 750 | ⬇ 554,173
- Google Gemma 4 指令微调版，`any-to-any` 统一架构支持图像、文本多模态输入输出，是本周最受关注的通用多模态模型。

**[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)**
- google | ★ 450 | ⬇ 117,509
- Gemma 4 基础模型，与 it 版本同期发布，为社区微调提供统一多模态基座。

**[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
- nvidia | ★ 1,617 | ⬇ 121,594
- NVIDIA 视觉定位模型，3B 参数即可实现精准的图像中目标定位与理解，点赞数排名第二，在视觉 Agent 场景中极具潜力。

**[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
- stepfun-ai | ★ 351 | ⬇ 45,535
- 阶跃星辰最新多模态视觉语言模型，Flash 版本主打推理速度与性价比，代表国内多模态模型的快速迭代。

**[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
- ideogram-ai | ★ 393 | ⬇ 5,495
- Ideogram 4 的 FP8 量化版本，专注于高质量文本到图像生成，在图像生成质量与部署效率间取得平衡。

**[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)**
- ideogram-ai | ★ 261 | ⬇ 4,963
- 同一模型的 NF4 量化版本，进一步降低显存需求，适合消费级 GPU 部署。

**[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
- SulphurAI | ★ 1,600 | ⬇ 1,707,062
- 基于 LTX-2.3 的视频生成模型，160 万次下载和 1,600 点赞使其成为本周最热门的视频生成模型，社区量化版本活跃。

**[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
- ByteDance | ★ 184 | ⬇ 278
- 字节跳动图像到视频生成模型，基于最新论文发布，下载量尚低但代表了字节在视频生成领域的持续投入。

**[jdopensource/JoyAI-Echo](https://huggingface.co/jdopensource/JoyAI-Echo)**
- jdopensource | ★ 102 | ⬇ 4,053
- 京东开源的文本到视频模型，基于 LTX-Video 架构，支持音视频联合生成，是电商场景视频生成的探索。

**[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
- bosonai | ★ 244 | ⬇ 15,005
- Boson AI 第三代 TTS 模型，4B 参数实现高质量语音合成，基于 Qwen3 多模态架构，代表了 TTS 领域的新标杆。

**[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)**
- MisoLabs | ★ 156 | ⬇ 0
- 新兴 TTS 模型，下载量为 0 说明刚发布，但 156 点赞显示社区对新型语音合成技术的期待。

**[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)**
- google | ★ 151 | ⬇ 17,531
- Google 实时音乐生成模型，支持 TFLite 部署，代表了生成式 AI 在音乐创作领域的最新进展。

**[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)**
- nvidia | ★ 203 | ⬇ 34,104
- NVIDIA Cosmos3 世界模型的轻量版本，面向物理世界理解与生成，Nano 尺寸适合边缘部署。

**[nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super)**
- nvidia | ★ 157 | ⬇ 27,548
- Cosmos3 旗舰版本，NVIDIA 在物理 AI 世界模型上的全面布局，与 Nano 形成高低搭配。

**[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
- PaddlePaddle | ★ 277 | ⬇ 9,924
- 百度 PaddleOCR 最新视觉语言版本，基于 ERNIE 4.5，在文档理解与 OCR 任务上表现出色。

---

### 🔧 专用模型

**[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
- nvidia | ★ 287 | ⬇ 3,957
- NVIDIA 0.6B 流式 ASR 模型，支持缓存感知的实时语音识别，代表了端侧语音交互的高效方案。

---

### 📦 微调与量化

**[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
- unsloth | ★ 500 | ⬇ 645,263
- Gemma 4 的 Unsloth GGUF 量化版，64 万次下载证明社区对高效推理格式的强烈需求，Unsloth 已成为量化生态的代名词。

**[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)**
- unsloth | ★ 146 | ⬇ 121,399
- 采用 QAT（量化感知训练）的 GGUF 版本，在精度与效率间取得更好平衡。

**[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)**
- unsloth | ★ 100 | ⬇ 87,455
- Gemma 4 26B MoE 版本的社区量化，4B 激活参数 + GGUF 使其可在消费级硬件运行。

**[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
- unsloth | ★ 695 | ⬇ 1,186,648
- Qwen3.6 27B 的 GGUF 量化版，118 万次下载为量化模型中最高，MTP（Multi-Token Prediction）技术进一步提升推理速度。

**[google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)**
- google | ★ 97 | ⬇ 52,386
- Google 官方发布的 GGUF 量化版本，表明官方开始直接参与量化生态，降低社区依赖。

---

## 生态信号

本周榜单最显著的特征是 **"统一多模态"范式的全面崛起**。Google Gemma 4 系列以 `any-to-any` 统一架构同时覆盖图像理解、文本生成、视觉定位等任务，三天内五个变体密集上榜，标志着多模态模型从"拼接式"走向"原生统一"。**MoE 架构已成为绝对主流**——从 DeepSeek V4、Qwen3.6、Nemotron Ultra 550B 到 LiquidAI LFM2.5，几乎每个新模型都采用稀疏激活设计，在性能与效率间找到新平衡点。**NVIDIA 的系统性布局**同样值得关注，从 Agent 定位模型、超大 MoE、流式 ASR 到物理世界模型 Cosmos3，覆盖了 AI 应用的完整栈。社区量化生态方面，**Unsloth 已成为 GGUF 量化的代名词**，本周四个 Unsloth 量化模型合计下载超 200 万次，而 Google 官方也开始发布 GGUF 版本，说明量化已从社区驱动走向官方支持。整体来看，开源生态的活跃度和成熟度已达到历史新高。

---

## 值得探索

**1. [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
Gemma 4 是本周最具代表性的模型。其 `any-to-any` 统一架构意味着一个模型即可处理图像理解、文本生成、视觉问答等多模态任务，无需在不同模型间切换。12B 参数规模在消费级 GPU 上可运行，且官方同时提供了基础版和指令版，为开发者和研究者提供了完整的多模态开发基座。

**2. [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
540 万次下载和 4,720 点赞的双重冠军。DeepSeek V4 Pro 延续了系列在推理、代码和数学上的卓越表现，代表了当前开源大模型的最高水准。对于需要强推理能力的生产场景，这是最值得评估的模型。

**3. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
仅 3B 参数即可实现精准的视觉定位，1,617 点赞说明社区对其实用价值的高度认可。在视觉 Agent、机器人感知、智能监控等需要"看懂并定位"的场景中，这是一个极具潜力的轻量级方案，值得在边缘部署场景中优先尝试。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*