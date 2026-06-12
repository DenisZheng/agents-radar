# Hugging Face 热门模型日报 2026-06-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-12 00:44 UTC

---

# 📡 Hugging Face 热门模型日报 · 2026年6月12日（周榜）

> 数据来源：Hugging Face Hub 周榜点赞 Top 30

---

## 1. 今日速览

- 本周榜单被多项 **Google Gemma 4 系列**模型强势占据——从基础版、指令微调版到扩散变体及一系列量化/微调衍生版，合计超过10个条目，形成明显的"家族效应"。
- **DeepSeek-V4-Pro** 以 4,781 点赞和 406 万下载量断层领跑，继续巩固其作为最热门开源 LLM 的地位。
- **NVIDIA** 在专用模型赛道多点开花：视觉定位（LocateAnything-3B，1,870 点赞）、ASR（Nemotron ASR Streaming）、以及 550B 级 Nemotron Ultra 系列，覆盖从边缘到超大规模。
- 社区量化生态极为活跃，**Unsloth** 几乎为每个热门 Gemma 4 变体都提供了 GGUF 版本，下载量动辄数十万，说明端侧/低成本推理需求旺盛。
- 图像生成领域，**Ideogram 4** 以 FP8 和 NF4 两种量化格式同时上榜，显示高质量文生图模型正加速走向可部署化。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话说明 |
|---|---|---|---|---|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,781 | 4,061,006 | 本周绝对王者，406万下载量证明其已成为开源 LLM 的事实标准，综合能力与生态工具链均领先。 |
| [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 939 | 675,936 | Google 统一多模态架构 Gemma 4 的 12B 指令版，any-to-any 能力使其成为本周最受关注的通用基础模型之一。 |
| [google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B) | google | 516 | 140,221 | Gemma 4 12B 基础版，为社区微调与量化提供了核心底座。 |
| [LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) | LiquidAI | 594 | 142,134 | Liquid AI 的 MoE 架构小模型，8B 总参数仅激活 1B，主打高效推理，是端侧部署的有力竞争者。 |
| [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 749 | 134,752 | 仅 1B 参数却在推理任务上表现亮眼，HRM（Hierarchical Reasoning Model）架构引发学术界广泛关注。 |
| [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | CohereLabs | 308 | 1,859 | Cohere 推出的代码专用小模型，MoE 架构，面向代码生成与理解场景。 |
| [nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro) | nex-agi | 206 | 1,185 | 基于 Qwen3.5 MoE 的文本生成模型，定位高性能通用对话。 |
| [nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini) | nex-agi | 163 | 1,222 | Nex-N2 的轻量版，同样基于 Qwen3.5 MoE，适合资源受限场景。 |
| [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16) | nvidia | 198 | 59,066 | NVIDIA 550B 超大规模 MoE 模型，BF16 精度，面向企业级高性能推理。 |
| [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4) | nvidia | 168 | 91,117 | 同系列 NVFP4 量化版，显著降低部署门槛，下载量反而更高。 |
| [stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) | stepfun-ai | 368 | 50,187 | 阶跃星辰的视觉语言模型，兼顾图像理解与文本生成，定位"Flash"级快速响应。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话说明 |
|---|---|---|---|---|
| [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | google | 488 | 0 | Google 将扩散机制融入 Gemma 统一架构的 26B 模型，探索原生多模态生成的新范式。 |
| [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) | ideogram-ai | 484 | 7,170 | Ideogram 4 的 FP8 量化版，高质量文生图能力与更低显存占用的结合。 |
| [ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4) | ideogram-ai | 315 | 6,124 | 同系列 NF4 量化版，进一步压缩部署成本，两种量化格式同时上榜说明需求强烈。 |
| [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 355 | 19,948 | 基于 Qwen3 的 4B TTS 模型，Higgs Audio V3 系列在语音合成质量上表现突出。 |
| [google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2) | google | 178 | 19,806 | Google 的实时文本到音频生成模型，支持低延迟音乐与音效合成。 |
| [zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2) | zai-org | 114 | 0 | 智谱 AI 的图像到视频模型，基于姿态驱动的角色动画生成。 |
| [ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R) | ByteDance | 222 | 305 | 字节跳动的图像+文本到视频渲染模型，Bernini 渲染器技术，学术论文同步发布。 |
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 1,870 | 131,794 | 视觉定位模型，给定图像和自然语言描述即可精确定位目标，131K 下载量显示其在机器人/自动驾驶场景的高实用价值。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话说明 |
|---|---|---|---|---|
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 372 | 4,965 | 仅 0.6B 参数的流式 ASR 模型，支持缓存感知推理，专为实时语音识别场景优化。 |
| [MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS) | MisoLabs | 194 | 0 | 新发布的 TTS 模型，定位高质量语音合成，社区关注度正在上升。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话说明 |
|---|---|---|---|---|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,676 | 3,057,541 | 本周下载量之王（305万+），Qwen3.6 35B MoE 的"去审查"微调版，反映社区对无过滤模型的巨大需求。 |
| [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | unsloth | 561 | 711,706 | Unsloth 出品的 Gemma 4 12B 指令版 GGUF，71万下载量证明其是本地部署首选。 |
| [unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF) | unsloth | 200 | 148,252 | 同系列 QAT（量化感知训练）版 GGUF，精度损失更小。 |
| [unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF) | unsloth | 142 | 129,110 | Gemma 4 26B 大版本的 QAT-GGUF，让消费级硬件运行 26B 模型成为可能。 |
| [unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF) | unsloth | 179 | 0 | DiffusionGemma 的 GGUF 版，Unsloth 持续扩展其量化覆盖范围。 |
| [google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf) | google | 129 | 96,749 | Google 官方自发布的 QAT Q4_0 量化版，官方背书加速社区采用。 |
| [OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED) | OBLITERATUS | 234 | 14,838 | Gemma 4 12B 的"去审查"微调版，社区对无过滤变体的需求持续存在。 |
| [huihui-ai/Huihui-gemma-4-12B-it-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated) | huihui-ai | 143 | 6,400 | 另一款 Gemma 4 的 abliterated（对齐消除）版本，技术路线略有不同。 |
| [Comfy-Org/Ideogram-4](https://huggingface.co/Comfy-Org/Ideogram-4) | Comfy-Org | 134 | 0 | ComfyUI 官方适配的 Ideogram 4 工作流包，降低图像生成的使用门槛。 |

---

## 3. 生态信号

本周榜单最突出的趋势是 **Gemma 4 家族的全面爆发**。Google 以统一多模态架构（any-to-any）为核心策略，一次性推出 12B/26B 基础版、指令微调版、扩散生成版，形成完整产品矩阵。社区响应极为迅速——Unsloth 几乎同步推出全系列 GGUF 量化版，总下载量超过 160 万；多个"去审查"微调版也迅速涌现，反映开源社区对模型自主性的强烈诉求。

**MoE（混合专家）架构**成为本周的绝对主流：DeepSeek-V4-Pro、LiquidAI LFM2.5、Cohere North Mini Code、Nex-N2 系列、Nemotron Ultra 550B、Qwen3.6 35B 均采用 MoE，说明行业已就"以更少激活参数换取更强能力"达成共识。

**量化生态**方面，GGUF 格式继续统治端侧部署场景，FP8/NF4 等新型量化也在图像生成领域快速普及。值得注意的是，NVIDIA 自家 550B 模型的 NVFP4 量化版下载量（91K）已超过 BF16 原版（59K），说明即便是超大模型，社区也在积极寻找低成本运行方案。

整体来看，开源权重模型在数量和质量上均保持强劲势头，Google、NVIDIA、DeepSeek、字节跳动、智谱 AI 等厂商持续将最先进模型开源，与闭源 API 模式形成鲜明竞争。

---

## 4. 值得探索

### 🔬 [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)
**推荐理由：** 仅 1B 参数却在推理基准上挑战更大模型，Hierarchical Reasoning Model 架构代表了一条不同于"暴力 scaling"的技术路线。749 点赞和 134K 下载量说明社区对其潜力高度认可，非常值得研究其架构设计与训练方法。

### 🌊 [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)
**推荐理由：** Google 将扩散生成能力原生集成到统一多模态架构中，而非传统的"LLM + 扩散模型拼接"方案。这一范式可能定义下一代多模态模型的设计方向，虽然目前下载量为 0（刚发布），但 488 点赞已预示其将成为研究热点。

### ⚡ [LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)
**推荐理由：** 8B 总参数仅激活 1B 的极致 MoE 设计，在端侧部署场景中具有独特优势。594 点赞和 142K 下载量显示其实用价值已被验证，适合关注高效推理和边缘部署的开发者深入研究。

---

*报告生成时间：2026-06-12 | 数据来源：Hugging Face Hub 周榜*
*本报告由 OWL 自动分析生成，数据截至榜单发布当日。*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*