# Hugging Face 热门模型日报 2026-06-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-10 00:42 UTC

---

# Hugging Face 热门模型日报（2026-06-10）

---

## 1. 今日速览

本周 Hugging Face 热门榜最受瞩目的无疑是 **DeepSeek-V4-Pro**，以 4,740 赞、430 万下载量断层领先，延续了 DeepSeek 系列在开源社区的统治级热度。**Gemma 4**（Google）家族密集上榜——涵盖基础版、指令微调版及多个量化版本，下载量总计超过百万，显示出 Google 在开源多模态模型上正加速推进。NVIDIA 的 **LocateAnything-3B** 也在视觉理解领域异军突起，1,729 赞表明用户对视觉定位任务的兴趣高涨。另一方面，多位社区玩家（如 HauhauCS、OBLITERATUS）围绕热门模型进行微调与"去审查化"，说明开源模型生态的二次创作日趋活跃。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  作者：deepseek-ai | 点赞 4,740 | 下载 4,302,553
  DeepSeek 最新通用对话模型，性能对标各大前沿闭源模型，下载量遥遥领先，堪称本周现象级热门。

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  作者：google | 点赞 810 | 下载 581,354
  Google Gemma 4 系列指令微调版，支持图文多模态输入，在开源多模态模型中迅速获得高关注度。

- **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)**
  作者：google | 点赞 479 | 下载 122,464
  Gemma 4 基础模型，提供 any-to-any 多模态能力底座，适合进一步微调部署。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  作者：HauhauCS | 点赞 1,593 | 下载 2,983,909
  基于 Qwen 3.6 的"去审查化"社区微调版本，下载量近 300 万，反映出社区对无审查模型的需求热度。

- **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)**
  作者：nvidia | 点赞 174 | 下载 56,864
  NVIDIA 最新旗舰级 MoE 大模型，550B 总参数、激活 55B（A55B），主打高性能推理。

- **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)**
  作者：nvidia | 点赞 152 | 下载 71,818
  同上 Nemotron Ultra 的 NVFP4 量化版本，大幅降低显存门槛，适合消费级 GPU 部署。

- **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)**
  作者：nex-agi | 点赞 160 | 下载 783
  基于 Qwen3.5-MOE 架构的新型对话模型，提供图文多下载能力，可作为研究性质的替代选择。

- **[nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini)**
  作者：nex-agi | 点赞 110 | 下载 748
  同样为基于 Qwen 3.5-MOE 架构的轻量版对话模型，参数量降低，适合资源有限场景下研究。

- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
  作者：LiquidAI | 点赞 572 | 下载 137,138
  LiquidAI 推出的高效 MoE 模型，8B 总参数仅激活 1B（A1B），在移动端和边缘算力场景极具潜力。

- **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
  作者：JetBrains | 点赞 272 | 下载 17,571
  JetBrains 推出的思考链增强型对话模型，12B 参数激活 2.5B，主打代码与推理场景。

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
  作者：CohereLabs | 点赞 156 | 下载 1,784
  Cohere 面向代码场景的小型模型，基于 Cohere2-MOE 架构，适合代码补全与辅助编程。

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  作者：sapientinc | 点赞 733 | 下载 133,351
  Sapient 推出的 HRM（Hierarchical Reasoning Model）架构文本模型，仅 1B 参数却在推理任务上表现亮眼，引发架构研究热潮。

- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
  作者：stepfun-ai | 点赞 358 | 下载 46,729
  阶跃星辰推出的 Step 3.7 系列 Flash 版，支持图文多模态，主打快速推理与高性价比。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  作者：nvidia | 点赞 1,729 | 下载 123,922
  NVIDIA 的视觉定位模型，支持通过文本描述在图像中精确定位目标，在视觉理解领域热度飙升。

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
  作者：ideogram-ai | 点赞 440 | 下载 5,915
  Ideogram 4 的 FP8 量化版本，高质量文本到图像生成，在设计与创意领域持续受到追捧。

- **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)**
  作者：ideogram-ai | 点赞 287 | 下载 5,250
  Ideogram 4 的 NF4 量化版本，进一步降低显存需求，适合本地部署图像生成。

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
  作者：bosonai | 点赞 282 | 下载 16,207
  Boson AI 的 Higgs Audio V3 语音合成模型，4B 参数，支持高质量 TTS，在语音生成领域表现突出。

- **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)**
  作者：google | 点赞 164 | 下载 18,216
  Google Magenta 实时音乐生成模型，支持文本到音频的实时合成，面向音乐创作场景。

- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
  作者：ByteDance | 点赞 193 | 下载 281
  字节跳动发布的 Bernini-R 图像文本到视频生成模型，基于 Apache 2.0 许可，代表字节在视频生成领域的开源布局。

- **[jdopensource/JoyAI-Echo](https://huggingface.co/jdopensource/JoyAI-Echo)**
  作者：jdopensource | 点赞 114 | 下载 4,502
  京东开源的文本到视频生成模型，基于 LTX-Video 架构，支持音视频联合生成。

- **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)**
  作者：nvidia | 点赞 214 | 下载 36,739
  NVIDIA Cosmos 3 系列轻量版，面向物理世界模拟与多模态理解，Nano 规格适合边缘部署。

- **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
  作者：PaddlePaddle | 点赞 280 | 下载 10,139
  百度飞桨的 OCR 视觉语言模型，基于 ERNIE 4.5，在文档理解与 OCR 任务上表现优异。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  作者：nvidia | 点赞 318 | 下载 4,181
  NVIDIA 的流式语音识别模型，仅 0.6B 参数，支持实时 ASR，适合低延迟语音交互场景。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
  作者：unsloth | 点赞 531 | 下载 660,140
  Unsloth 对 Gemma 4 指令微调版进行 GGUF 量化，下载量超 66 万，是本地部署最热门的版本之一。

- **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)**
  作者：unsloth | 点赞 171 | 下载 127,332
  Gemma 4 的 QAT（量化感知训练）+ GGUF 版本，在保持精度的同时大幅压缩体积。

- **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)**
  作者：unsloth | 点赞 114 | 下载 96,059
  Gemma 4 更大参数版本（26B 总参数，激活 4B）的 QAT-GGUF 量化版，兼顾性能与效率。

- **[google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)**
  作者：google | 点赞 114 | 下载 63,049
  Google 官方发布的 Gemma 4 QAT Q4_0 GGUF 量化版本，提供官方认证的轻量部署方案。

- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
  作者：OBLITERATUS | 点赞 136 | 下载 8,106
  社区对 Gemma 4 进行"去审查化"微调的版本，反映了开源社区对模型自由度的高度关注。

---

## 3. 生态信号

本周榜单呈现出几个清晰的生态趋势：

**Gemma 4 家族全面铺开。** Google 一次性推出基础版、指令微调版及多个量化版本，配合 Unsloth 等社区伙伴的 GGUF 量化，形成了从云端到本地的完整部署矩阵，总下载量超过百万，势头正猛。

**MoE 架构持续主导。** 从 DeepSeek-V4-Pro、Nemotron Ultra 550B-A55B、LFM2.5-8B-A1B 到 Mellum2-12B-A2.5B，混合专家架构已成为大模型标配，"大总参、小激活"的设计在性能与效率之间找到了平衡点。

**量化与社区微调生态繁荣。** Unsloth 几乎成为 Gemma 4 量化的"标配"合作伙伴，GGUF 格式的下载量远超原版；同时，HauhauCS、OBLITERATUS 等社区玩家围绕热门模型进行去审查化微调，下载量甚至超过原版，说明开源社区的二次创作已成为不可忽视的力量。

**多模态能力成为标配。** 越来越多的模型（Gemma 4、Step 3.7、Nex-N2 系列）将图文多模态作为默认能力，纯文本模型的占比正在缩小。

---

## 4. 值得探索

1. **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** — 仅 1B 参数却在推理任务上表现惊艳，其分层推理架构（HRM）代表了一种不同于传统 Transformer 的新范式，非常值得研究其架构设计与训练方法。

2. **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** — 8B 总参数仅激活 1B，是目前参数效率最高的开源模型之一，在移动端和边缘部署场景中具有极大潜力，适合关注端侧 AI 的开发者深入研究。

3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — 视觉定位是一个快速增长的应用方向，该模型以 3B 参数实现了精准的目标定位，在自动驾驶、机器人视觉、安防等领域有广阔的应用前景。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*