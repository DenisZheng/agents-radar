# Hugging Face 热门模型日报 2026-06-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-07 00:40 UTC

---

# Hugging Face 热门模型日报
**2026-06-07**

---

## 📌 今日速览

本周 Hugging Face 热度榜被 **DeepSeek-V4 系列**强势霸占，Pro 版以 4,681 赞、超 550 万下载量断层领先，Flash 版紧随其后拿下 1,421 赞。**NVIDIA** 成为本周最活跃厂商，一口气推出 Cosmos3 系列世界模型、Nemotron-3 系列大模型以及多款量化版本，覆盖从 0.6B 到 550B 的全尺寸谱系。**Gemma 4** 和 **Qwen 3.6** 两大开源家族持续迭代，社区量化版本下载量惊人——Unsloth 的 GGUF 版 Gemma 4 下载量达 45 万，HauhauCS 的 Qwen 3.6 无审查版更是突破 277 万下载。整体来看，MoE 架构、多模态统一模型、以及低成本量化部署是本周三大关键词。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 👍 | ⬇️ | 说明 |
|---|---|---|---|---|
| [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,681 | 5,510,611 | 本周绝对王者，超 550 万下载的旗舰级对话模型，MoE 架构，性能与效率兼顾 |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,421 | 3,436,213 | DeepSeek-V4 的轻量高速版，343 万下载，适合低延迟推理场景 |
| [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 616 | 315,131 | Google 新一代统一多模态模型，12B 参数支持 any-to-any 任务 |
| [google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B) | google | 377 | 84,549 | Gemma 4 基础版，为社区微调提供高质量基座 |
| [LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) | LiquidAI | 533 | 95,440 | Liquid AI 的 MoE 小模型，8B 总参数仅激活 1B，边缘部署友好 |
| [openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B) | openbmb | 774 | 100,575 | 仅 1B 参数的高效文本生成模型，小模型赛道的新标杆 |
| [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 711 | 161,627 | 基于 Hierarchical Reasoning Model 架构的 1B 文本模型，推理能力突出 |
| [JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking) | JetBrains | 239 | 16,395 | JetBrains 推出的思考型 MoE 模型，12B 参数仅激活 2.5B |
| [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16) | nvidia | 143 | 47,285 | NVIDIA 550B 参数 MoE 旗舰，仅激活 55B，面向企业级推理 |
| [stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) | stepfun-ai | 342 | 38,716 | 阶跃星辰的视觉语言模型，支持图像理解与文本生成 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 👍 | ⬇️ | 说明 |
|---|---|---|---|---|
| [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 1,581 | 1,704,964 | 基于 LTX-2.3 的视频生成基座模型，170 万下载，社区热度极高 |
| [nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano) | nvidia | 183 | 24,820 | NVIDIA Cosmos3 系列轻量世界模型，支持多模态理解与生成 |
| [nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super) | nvidia | 148 | 20,403 | Cosmos3 旗舰版世界模型，面向物理世界模拟与视频生成 |
| [nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image) | nvidia | 119 | 1,634 | Cosmos3 的文本到图像分支，高质量图像生成 |
| [nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video) | nvidia | 111 | 1,295 | Cosmos3 的图像到视频分支，静态图转动态视频 |
| [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) | ideogram-ai | 306 | 2,818 | Ideogram 4 的 FP8 量化版文本到图像模型，兼顾质量与速度 |
| [ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4) | ideogram-ai | 212 | 2,671 | Ideogram 4 的 NF4 量化版，进一步降低显存占用 |
| [ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R) | ByteDance | 149 | 223 | 字节跳动的图像/文本到视频渲染模型，Apache 2.0 开源 |
| [meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5) | meituan-longcat | 525 | 1,806 | 美团 LongCat 数字人视频生成模型，支持音频驱动虚拟形象 |
| [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 153 | 2,184 | Boson AI 的 4B 参数 TTS 模型，基于 Qwen3 的多模态语音合成 |
| [MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS) | MisoLabs | 130 | 0 | MisoLabs 开源语音合成模型，支持多音色语音生成 |
| [google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2) | google | 108 | 9,394 | Google Magenta 实时音乐生成模型，支持文本到音频创作 |
| [nvidia/PiD](https://huggingface.co/nvidia/PiD) | nvidia | 312 | 972 | NVIDIA 图像超分辨率模型，基于扩散模型的高质量图像放大 |

### 🔧 专用模型（OCR、语音识别等）

| 模型 | 作者 | 👍 | ⬇️ | 说明 |
|---|---|---|---|---|
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 1,452 | 111,078 | NVIDIA 3B 视觉定位模型，精准定位图像中的目标区域 |
| [PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6) | PaddlePaddle | 258 | 8,365 | 百度 PaddleOCR 视觉语言版，基于 ERNIE 4.5 的多语言 OCR |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 219 | 1,380 | NVIDIA 0.6B 流式语音识别模型，支持低延迟实时 ASR |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 👍 | ⬇️ | 说明 |
|---|---|---|---|---|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,487 | 2,771,843 | Qwen 3.6 的社区无审查微调版，277 万下载，本周下载量最高 |
| [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | unsloth | 421 | 458,174 | Unsloth 出品的 Gemma 4 GGUF 量化版，消费级硬件即可运行 |
| [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | nvidia | 197 | 1,015,381 | NVIDIA 官方 NVFP4 量化版 Qwen 3.6，101 万下载，GPU 推理效率极高 |
| [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4) | nvidia | 117 | 17,225 | Nemotron-3 550B 的 NVFP4 量化版，大幅降低部署门槛 |

---

## 🌐 生态信号

本周 Hugging Face 生态呈现三大趋势：

**MoE 架构全面主导。** 从 DeepSeek-V4、Qwen 3.6、Nemotron-3 到 LFM2.5、Mellum2，几乎所有热门新模型都采用 MoE 架构，"大参数、小激活"已成为行业共识。550B 总参数仅激活 55B 的 Nemotron-3 Ultra 标志着 MoE 正式进入超大规模时代。

**NVIDIA 生态扩张加速。** NVIDIA 本周在 Hugging Face 上异常活跃，Cosmos3 系列（Nano/Super/Text2Image/Image2Video）构建了完整的多模态生成管线，Nemotron-3 覆盖从 0.6B ASR 到 550B LLM 的全栈能力，加上多款官方量化版本，NVIDIA 正从芯片厂商转型为模型生态核心玩家。

**社区量化需求爆发。** GGUF 和 NVFP4 量化版本下载量远超原版——Qwen 3.6 无审查版 277 万下载、Unsloth Gemma 4 版 45 万下载、NVIDIA 官方 NVFP4 版 101 万下载，说明消费级部署和边缘推理需求旺盛。开源权重模型持续压制闭源 API 的社区影响力。

---

## 💡 值得探索

**1. [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
550 万下载的旗舰模型，代表了当前开源 LLM 的最高水准。其 MoE 架构在保持强大性能的同时显著降低推理成本，值得深入研究其架构设计和训练策略。

**2. [nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super)**
NVIDIA 的世界模型旗舰，覆盖文本到图像、图像到视频等多模态生成任务。作为物理世界模拟和具身智能的基础设施，Cosmos3 系列可能成为下一代 AI 应用的核心引擎。

**3. [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
基于 LTX-2.3 的视频生成基座，170 万下载量证明了社区对高质量开源视频模型的强烈需求。作为可微调基座，它为视频生成领域的二次开发提供了极佳起点。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*