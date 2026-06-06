# Hugging Face 热门模型日报 2026-06-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-06 00:38 UTC

---

# Hugging Face 热门模型日报

**日期：2026年6月6日**

---

## 1. 今日速览

本周 Hugging Face 榜单呈现出明显的**DeepSeek 与 NVIDIA 双雄争霸**格局——DeepSeek-V4 系列两款模型合计揽获超过 6,000 颗心，且下载量均超过 350 万次，印证了其成熟的 MoE 架构在开源社区的统治地位。**NVIDIA 的 Cosmos3 全模态系列**（Nano/Super/Text2Image/Image2Video）集中上榜，揭示了后者在视觉生成领域从一家硬件公司向基础模型公司转型的野心。与此同时，**Qwen3.6 MoE 模型的量化版本**和**Google Gemma-4 开源版**的密集上榜，进一步证明中等参数 + 开源权重的组合已成为当前社区最热赛道。**AI 视频生成**成为新的增长极——LongCat-Video-Avatar、Bernini-R、Sulphur-2-base、higgs-audio-v3-tts 等视频/音视频模型扎堆上榜，标志着社区需求从"会聊天的模型"快速向"会创造内容的模型"迁移。

---

## 2. 热门模型分类

### 🧠 语言模型（LLM / 对话 / 指令微调）

| # | 模型 | 作者 | 点赞/下载 | 一句话说明 |
|---|------|------|-----------|-----------|
| 1 | [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | ❤️ 4,657 \| ⬇️ 556万 | 本周点赞榜首，DeepSeek 第四代旗舰 MoE 模型，约 550B 参数但以激活参数高效运行，覆盖代码、推理、对话全场景，是开源社区目前综合体验最好的大模型之一。 |
| 2 | [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | ❤️ 1,412 \| ⬇️ 347万 | DeepSeek-V4 的轻量推理兄弟版，在保持旗舰级架构的同时大幅降低推理成本，适合高并发部署场景。 |
| 3 | [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | ❤️ 545 \| ⬇️ 14万 | Google 第四代 Gemma 指令微调版，仅 12B 参数但覆盖 any-to-any 多模态任务，是 Gemma 家族走向统一架构的标志性产品。 |
| 4 | [google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B) | google | ❤️ 336 \| ⬇️ 5.3万 | Gemma-4 基础版，为社区微调和蒸馏提供理想基座。 |
| 5 | [LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) | LiquidAI | ❤️ 526 \| ⬇️ 8.3万 | Liquid AI 推出的 MoE 模型，仅激活 1B 参数即可运行，专为边缘设备和极低延迟推理设计，代表了"以小博大"的新架构范式。 |
| 6 | [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | ❤️ 702 \| ⬇️ 15.9万 | Sapient Intelligence 推出的递归推理模型（HRM）纯文本版，将 System 2 思维过程显式建模，仅 1B 参数却在推理类基准上表现惊艳。 |
| 7 | [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16) | nvidia | ❤️ 117 \| ⬇️ 9,125 | 550B 参数 MoE 巨兽的 BF16 原精度版本，面向高端多卡推理，是 NVIDIA 对标 DeepSeek 的旗舰自研模型。 |
| 8 | [JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking) | JetBrains | ❤️ 224 \| ⬇️ 1.5万 | JetBrains 推出的推理增强型对话模型，结合 IDE 生态，在代码分析与生成方向有独特优势。 |
| 9 | [openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B) | openbmb | ❤️ 770 \| ⬇️ 9.1万 | OpenBMB 推出的第五代替身模型，以 1B 参数在手机等端侧设备实现流畅对话，称得上一句"小而精"。 |
| 10 | [stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) | stepfun-ai | ❤️ 332 \| ⬇️ 2.8万 | 阶跃星辰（StepFun）的轻量版多模态 MoE 模型，主打视觉理解+文本生成联合推理。 |

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到X）

| # | 模型 | 作者 | 点赞/下载 | 一句话说明 |
|---|------|------|-----------|-----------|
| 1 | [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | ❤️ 1,565 \| ⬇️ 169万 | 基于 Lightricks LTX-2.3 微调的文本到视频模型，以极低的重训成本实现了专业级视频生成效果，是本周多模态赛道最大黑马。 |
| 2 | [nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano) | nvidia | ❤️ 176 \| ⬇️ 2.2万 | NVIDIA Cosmos3 系列最轻量版本，面向快速视觉理解的统一视觉基础模型。 |
| 3 | [nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super) | nvidia | ❤️ 142 \| ⬇️ 1.9万 | Cosmos3 最高参数量版本，用于生成和理解几乎所有视觉模态的统一框架。 |
| 4 | [nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image) | nvidia | ❤️ 116 \| ⬇️ 1,194 | Cosmos3-Super 的文本到图像专项版，挑战 Stable Diffusion 和 FLUX 在开源文生图领域的地位。 |
| 5 | [nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video) | nvidia | ❤️ 106 \| ⬇️ 1,076 | Cosmos3-Super 的图像到视频版本，NVIDIA 打通视觉生成全链路的关键一环。 |
| 6 | [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) | ideogram-ai | ❤️ 269 \| ⬇️ 1,246 | Ideogram 第四代图像模型的 FP8 量化版本，在文字渲染精度和美学质量上进一步提升。 |
| 7 | [ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4) | ideogram-ai | ❤️ 191 \| ⬇️ 1,594 | ideogram-4 的 NF4 超低精度量化版，面向消费级显卡的文生图部署。 |
| 8 | [nvidia/PiD](https://huggingface.co/nvidia/PiD) | nvidia | ❤️ 310 \| ⬇️ 901 | NVIDIA 图像到图像超分辨率模型，结构精巧但性能强劲，适合图像增强管线集成。 |
| 9 | [meituan-longcat/LongCat-Video-AvAvatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5) | meituan-longcat | ❤️ 519 \| ⬇️ 1,675 | 美团 LongCat 团队发布的虚拟人生成模型 1.5 版，根据音频驱动人脸视频生成，代表国内厂商向 AI 视频头像赛道延伸。 |
| 10 | [ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R) | ByteDance | ❤️ 140 \| ⬇️ 175 | 字节跳动 Bernini 渲染器版，图像+文本到视频的生成模型，虽然当前下载量尚低但学术引用（arxiv:2605.22344）含金量十足。 |
| 11 | [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | ❤️ 192 \| ⬇️ 597 | 0.6B 参数的流式 ASR 模型，结合 NVIDIA nemo 框架实现极低延迟语音转文本，专为实时字幕和语音助手优化。 |
| 12 | [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | ❤️ 118 \| ⬇️ 408 | BosonAI 第三代语音合成模型，基于 Qwen3 多模态骨干，支持高质量多语言 TTS 输出。 |
| 13 | [MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS) | MisoLabs | ❤️ 111 \| ⬇️ 0 | MisoLabs 自研 TTS 模型，目前刚上线尚无下载但已引发社区讨论，采用了全新的声学建模框架。 |

### 🔧 专用模型（代码 / 架构 / 嵌入 / 行业）

| # | 模型 | 作者 | 点赞/下载 | 一句话说明 |
|---|------|------|-----------|-----------|
| 1 | [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | ❤️ 1,375 \| ⬇️ 10.2万 | 仅 3B 参数即可完成图像/视频中任意目标定位的视觉通用模型，兼顾精度与效率，是本周点赞第二高的模型。 |
| 2 | [PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6) | PaddlePaddle | ❤️ 245 \| ⬇️ 6,881 | 百度飞桨 OCR 视觉语言版 1.6，基于 ERNIE 4.5 骨干，支持复杂版面分析与多语言文字识别，适合文档 AI 工作流。 |

### 📦 微调与量化（社区微调 / GGUF / AWQ / NVFP4）

| # | 模型 | 作者 | 点赞/下载 | 一句话说明 |
|---|------|------|-----------|-----------|
| 1 | [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | ❤️ 1,451 \| ⬇️ 268.7万 | Qwen3.6 MoE 的"无审查"社区微调版，下载量高达 269 万次霸榜，虽然争议极大但反映了社区对开放权重的旺盛需求。 |
| 2 | [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | unsloth | ❤️ 374 \| ⬇️ 29.6万 | Unsloth 出品的 Gemma-4 官方 GGUF 量化版，让消费级显卡也能流畅运行 12B 多模态模型，是 Gemma-4 生态落地的关键桥梁。 |
| 3 | [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | ❤️ 666 \| ⬇️ 109.2万 | Qwen3.6 27B 多 token 预测（MTP）版的 GGUF 量化版，下载量破百万，表明社区对超长上下文推理的量化部署需求极其强烈。 |
| 4 | [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | nvidia | ❤️ 191 \| ⬇️ 82.2万 | NVIDIA 使用自研 Model Optimizer 对 Qwen3.6 进行 NF4 精度量化的官方版本，可在 RTX 40 系显卡接近无损运行。 |
| 5 | [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4) | nvidia | ❤️ 107 \| ⬇️ 7,419 | 550B Nemotron-Ultra 的 NVFP4 量化版，大幅降低显存需求，让"超大模型本地运行"成为可能。 |

---

## 3. 生态信号

本周榜单透露出三条清晰的生态主线。**第一，MoE 架构全面接管**：DeepSeek-V4 系列、Qwen3.6 系列、Nemotron-Ultra、LFM2.5 均使用 MoE，"小激活参数、大总参数量"已成为模型设计的主流范式，主流玩家已达成共识。**第二，NVIDIA 化身"模型多面手"**：一口气推出 Cosmos3（视觉）、Nemotron（LLM）、LocateAnything（视觉定位）、PiD（超分）、nemotron-ASR（语音）五大类模型，从硬件公司向全栈基础模型供应商转型的野心昭然若揭。**第三，量化与社区微调生态繁荣**：Unsloth 的 GGUF 版累计下载超过 138 万次，HauhauCS 的无审查微调版下载量达 269 万次——开源模型一旦发布即进入社区二次创作的高速通道，"官方发布 → 社区量化/微调 → 大规模传播"已成为标准增长飞轮。值得关注的是，Qwen3.6 系列同时以官方量化版、社区微调版、社区量化版三种形态进入榜单前十，证明其基座质量足够吸引多层次的社区参与。

---

## 4. 值得探索

### 🏆 [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
**理由**：本周当之无愧的榜首。4,657 颗心和 556 万次下载的双重碾压式领先，说明它在能力与易用性之间取得了当前开源世界的最佳平衡。无论你是要做 Agent、代码生成还是长文推理，DeepSeek-V4-Pro 都应该是 2026 年中的首选开源模型。

### 🌟 [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)
**理由**：仅 3B 参数就能实现图像/视频中任意目标的通用定位，下载量 10 万次说明开发者已在大量场景落地。对于需要视觉grounding、工业检测、智能安防等任务的研究者和工程师，这是一个低门槛高上限的视觉基座。

### 🔬 [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)
**理由**：702 颗心的热度对于仅 1B 参数的模型而言异军突起。HRM（Hierarchical Reasoning Model）将 System 2 慢思考过程显式建模，在不依赖 Chain-of-Thought 提示的情况下实现推理增强，代表了 LLM 架构创新的重要方向——如果你在做推理模型或认知架构研究，这个模型值得重点关注。

### 🎬 [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)
**理由**：169 万次下载、1,565 颗心——基于 LTX-2.3 微调的文本到视频模型获得了惊人的社区响应，说明高质量的定制视频生成正在被大量创作者和内容平台采用。它证明"在顶级生成基座上做垂直微调"仍然是当前 AI 视频领域最高性价比的产品策略。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*