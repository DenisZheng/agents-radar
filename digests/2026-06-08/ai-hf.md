# Hugging Face 热门模型日报 2026-06-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-08 00:41 UTC

---

# Hugging Face 热门模型日报 · 2026-06-08

---

## 1. 今日速览

本周 Hugging Face 榜单被 **DeepSeek-V4 系列**强势统治——Pro 版以 4,696 赞、Flash 版以 1,434 赞分列一、二，合计下载量近 900 万次，标志着国产开源大模型在全球社区的影响力达到新高。**NVIDIA** 成为本周最活跃的企业贡献者，在视觉定位（LocateAnything-3B）、语音识别（Nemotron-ASR）、世界模型（Cosmos3 系列）及量化优化（Qwen3.6-NVFP4）等多条赛道同时发力。**Gemma 4** 系列（Google 官方 + Unsloth 量化版）持续高热，显示 12B 级多模态统一模型正成为社区新宠。MoE 架构（Qwen3.6-35B-A3B、Nemotron-Ultra-550B-A55B）和高效小模型（MiniCPM5-1B、LFM2.5-8B-A1B）并行上榜，反映社区对"性价比推理"的强烈需求。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| # | 模型 | 作者 | 👍 赞 | ⬇️ 下载 | 一句话说明 |
|---|------|------|--------|---------|------------|
| 1 | [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,696 | 5,515,325 | 本周绝对王者，下载量超 550 万次，DeepSeek 最新旗舰推理/对话模型，MIT 许可，社区热度无出其右。 |
| 2 | [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,434 | 3,347,429 | V4 系列的轻量高速版，下载量 334 万次，适合低延迟场景，与 Pro 版形成高低搭配。 |
| 3 | [Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,521 | 2,923,564 | 基于 Qwen3.6 MoE 架构的社区"去审查"微调版，下载量近 300 万次，反映社区对开放权重模型的旺盛需求。 |
| 4 | [MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B) | openbmb | 779 | 114,329 | 仅 1B 参数的高效小模型，由 OpenBMB 出品，适合端侧部署，779 赞显示社区对小模型的持续热情。 |
| 5 | [HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 718 | 162,822 | Sapient 推出的 1B 级文本生成模型，采用 HRM（Hierarchical Reasoning Model）架构，在小参数下追求推理能力。 |
| 6 | [LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) | LiquidAI | 540 | 118,326 | Liquid AI 的 MoE 架构模型（8B 总参数 / 1B 激活参数），兼顾性能与推理效率。 |
| 7 | [gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 687 | 434,969 | Google Gemma 4 指令微调版，统一多模态架构，687 赞 + 43 万下载，是本周最受关注的官方开源模型之一。 |
| 8 | [gemma-4-12B](https://huggingface.co/google/gemma-4-12B) | google | 410 | 99,655 | Gemma 4 基础版，any-to-any 统一架构，为社区微调提供底座。 |
| 9 | [Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking) | JetBrains | 249 | 16,924 | JetBrains 出品的"思考型"代码/文本模型，MoE 架构（12B 总 / 2.5B 激活），主打推理与对话。 |
| 10 | [NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16) | nvidia | 156 | 49,784 | NVIDIA 550B 超大规模 MoE 模型（55B 激活），面向企业级推理，BF16 精度发布。 |
| 11 | [NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4) | nvidia | 131 | 39,864 | 同系列 NVFP4 量化版，进一步降低部署门槛，NVIDIA Model Optimizer 出品。 |
| 12 | [Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | nvidia | 200 | 1,185,362 | NVIDIA 对 Qwen3.6 MoE 模型进行 NVFP4 量化优化，下载量 118 万次，是本周量化模型中下载量最高的。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| # | 模型 | 作者 | 👍 赞 | ⬇️ 下载 | 一句话说明 |
|---|------|------|--------|---------|------------|
| 1 | [Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 1,586 | 1,715,710 | 基于 LTX-2.3 的文本到视频模型，下载量 171 万次、1,586 赞，是本周生成式 AI 领域最热门的模型。 |
| 2 | [LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 1,524 | 115,556 | NVIDIA 的视觉定位模型（image-text-to-text），1,524 赞位列总榜第一，适用于目标检测与视觉理解任务。 |
| 3 | [ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) | ideogram-ai | 345 | 4,377 | Ideogram 4 的 FP8 量化文生图模型，主打高质量图像生成与文字渲染能力。 |
| 4 | [ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4) | ideogram-ai | 235 | 3,844 | Ideogram 4 的 NF4 量化版，进一步降低显存需求，适合消费级 GPU 部署。 |
| 5 | [Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) | stepfun-ai | 348 | 43,196 | 阶跃星辰的视觉语言模型，支持图像-文本到文本任务，348 赞显示社区对中国多模态模型的关注。 |
| 6 | [Bernini-R](https://huggingface.co/ByteDance/Bernini-R) | ByteDance | 167 | 246 | 字节跳动的图像/文本到视频渲染模型，arXiv 论文加持，下载量尚低但技术方向前沿。 |
| 7 | [Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano) | nvidia | 194 | 29,697 | NVIDIA Cosmos3 世界模型的轻量版，omni 架构，面向具身智能与仿真场景。 |
| 8 | [Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super) | nvidia | 153 | 24,002 | Cosmos3 旗舰版世界模型，NVIDIA 在物理 AI 领域的重要布局。 |
| 9 | [Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image) | nvidia | 123 | 5,075 | Cosmos3 Super 的文生图专用版，diffusers 格式，可与现有工作流集成。 |
| 10 | [Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video) | nvidia | 114 | 4,515 | Cosmos3 Super 的图生视频版，扩展了世界模型的生成能力边界。 |
| 11 | [higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 193 | 7,557 | Boson AI 的 4B 参数 TTS 模型，基于 Qwen3 多模态架构，支持高质量语音合成。 |
| 12 | [MisoTTS](https://huggingface.co/MisoLabs/MisoTTS) | MisoLabs | 142 | 0 | MisoLabs 的 TTS 模型，刚上线尚未有下载，但 142 赞显示社区期待。 |
| 13 | [magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2) | google | 131 | 13,338 | Google 的实时文本到音频生成模型，支持 TFLite 部署，面向音乐/音效创作场景。 |
| 14 | [PiD](https://huggingface.co/nvidia/PiD) | nvidia | 317 | 1,082 | NVIDIA 的图像到图像超分辨率模型，diffusers 格式，317 赞显示社区对图像增强模型的兴趣。 |
| 15 | [PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6) | PaddlePaddle | 266 | 9,084 | 百度 PaddlePaddle 的视觉语言 OCR 模型，基于 ERNIE4.5，面向文档理解与文字提取。 |

---

### 🔧 专用模型（语音识别、OCR 等）

| # | 模型 | 作者 | 👍 赞 | ⬇️ 下载 | 一句话说明 |
|---|------|------|--------|---------|------------|
| 1 | [nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 256 | 3,439 | NVIDIA 的 0.6B 流式 ASR 模型，支持缓存感知推理，适用于实时语音转文字场景。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| # | 模型 | 作者 | 👍 赞 | ⬇️ 下载 | 一句话说明 |
|---|------|------|--------|---------|------------|
| 1 | [gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | unsloth | 449 | 568,158 | Unsloth 出品的 Gemma 4 GGUF 量化版，56.8 万下载，是本周下载量最高的量化模型，极大降低本地部署门槛。 |
| 2 | [gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF) | unsloth | 120 | 85,842 | Unsloth 的 QAT（量化感知训练）版 GGUF，精度损失更小，适合对质量敏感的用户。 |

---

## 3. 生态信号

本周榜单呈现出几个清晰的生态信号：

**DeepSeek 生态全面爆发。** V4-Pro 和 V4-Flash 合计下载量近 900 万次，DeepSeek 已从"挑战者"成长为开源 LLM 生态的核心力量。MIT 许可 + 顶级性能的组合，正在重塑社区对开源模型的预期。

**NVIDIA 成为最活跃的企业贡献者。** 本周 NVIDIA 共有 8 个模型上榜，覆盖视觉定位（LocateAnything）、语音识别（ASR）、世界模型（Cosmos3 系列）、超分辨率（PiD）及量化优化（Qwen3.6-NVFP4、Nemotron-NVFP4），显示其正系统性地构建从感知到生成的全栈开源 AI 生态。

**MoE 架构持续火热。** Qwen3.6-35B-A3B（总参 35B / 激活仅 3B）、Nemotron-Ultra-550B-A55B、LFM2.5-8B-A1B、Mellum2-12B-A2.5B——MoE 已成为大模型"降本增效"的主流路径，社区对 MoE 模型的下载和微调需求旺盛。

**量化与本地部署需求强劲。** Unsloth 的两个 Gemma 4 量化版合计下载超 65 万次，NVIDIA 的 NVFP4 量化版 Qwen3.6 下载量达 118 万次，表明社区对"消费级硬件跑大模型"的需求持续高涨。GGUF 和 NVFP4 正在成为本地部署的事实标准格式。

**多模态统一架构成为新趋势。** Gemma 4（any-to-any）、Cosmos3（omni）、Step-3.7（vision-language）均指向"一个模型处理所有模态"的统一架构方向，这与去年各模态独立模型的格局形成鲜明对比。

---

## 4. 值得探索

### 🔥 DeepSeek-V4-Pro
🔗 https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro

**理由：** 本周无可争议的榜首，4,696 赞 + 550 万下载量，MIT 开源许可。作为 DeepSeek 最新旗舰，它在推理、对话和代码能力上均代表当前开源模型的最高水平。无论是用于研究对比、应用开发还是社区微调，V4-Pro 都是本周最值得深入体验的模型。

### 🌍 NVIDIA Cosmos3-Super
🔗 https://huggingface.co/nvidia/Cosmos3-Super

**理由：** NVIDIA 的"世界模型"代表，Super 版本配合 Text2Image 和 Image2Video 子模型，构成完整的物理仿真与生成管线。对于关注具身智能、自动驾驶仿真、机器人训练等前沿方向的研究者，Cosmos3 提供了一个全新的开源基座，值得重点关注和实验。

### ⚡ Sulphur-2-base
🔗 https://huggingface.co/SulphurAI/Sulphur-2-base

**理由：** 1,586 赞 + 171 万下载量，基于 LTX-2.3 的文本到视频模型，是本周生成式 AI 领域热度最高的作品。文生视频正处于爆发前夜，Sulphur-2-base 的高下载量表明社区正在积极尝试和评估新一代视频生成能力，是了解文生视频最新进展的最佳入口。

---

*数据来源：Hugging Face Hub · 统计周期：2026-06-08 当周 · 排序依据：周点赞数*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*