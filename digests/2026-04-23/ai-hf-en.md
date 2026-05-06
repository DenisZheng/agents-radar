# Hugging Face Trending Models Digest 2026-04-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-23 00:18 UTC

---

# Hugging Face Trending Models Digest — April 23, 2026

## 1. Today's Highlights

Qwen's new **Qwen3.6** family dominates this week's trending list with multiple variants, including the flagship [35B-A3B MoE](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) and [27B dense model](https://huggingface.co/Qwen/Qwen3.6-27B), signaling Alibaba's aggressive push into multimodal, efficient architectures. Google's [Gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) continues to show massive adoption with nearly 4.8M downloads, while the smaller [Gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) introduces an intriguing "any-to-any" modality direction. The community quantization ecosystem remains vibrant, with Unsloth providing optimized [GGUF releases](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) that have already crossed 1.1M downloads. Notably, "uncensored" and "abliterated" fine-tunes continue to attract significant engagement, suggesting sustained demand for unfiltered model variants. Tencent's [HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0) represents a notable expansion into world models and 3D generation, though it has yet to see downloads.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,237 | 582,961 | Flagship MoE model with vision capabilities, offering efficient inference via 3B active parameters from 35B total. |
| **[Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 809 | 54,456 | Moonshot AI's latest multimodal LLM with strong feature extraction capabilities and compressed tensor optimization. |
| **[Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 407 | 0 | Dense variant of the Qwen3.6 family, freshly released with full multimodal support. |
| **[MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 1,033 | 416,155 | Compact but capable conversational model gaining traction for efficient deployment. |
| **[GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,470 | 170,511 | Zhipu AI's latest with MoE and DSA architecture, showing strong community interest. |
| **[Gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,290 | 4,779,095 | Google's most-downloaded open model this week, establishing Gemma-4 as a production standard. |
| **[Gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 797 | 2,793,042 | Experimental "any-to-any" modality model, hinting at Google's unified multimodal future. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 552 | 0 | Tencent's ambitious world model for image-to-3D generation, representing a new frontier in spatial AI. |
| **[ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 529 | 5,253 | Baidu's 8B parameter text-to-image model with Apache 2.0 licensing, enabling commercial use. |
| **[ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo)** | baidu | 348 | 6,742 | Optimized variant of ERNIE-Image with faster inference, gaining more downloads than the base. |
| **[HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 901 | 2,459 | Hunyuan's vision-language model for embodied AI applications, bridging perception and action. |
| **[VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 1,219 | 77,590 | Highly popular multilingual TTS model with strong adoption across language communities. |
| **[Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image)** | NucleusAI | 218 | 1,622 | Sparse MoE diffusion model exploring efficient parameter utilization in image generation. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 269 | 3 | OpenAI's token classification model for PII detection, notable for official release despite minimal downloads. |
| **[Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | nvidia | 256 | 252 | NVIDIA's research artifact with associated arXiv paper, likely an audio or speech foundation model. |
| **[lingbot-map](https://huggingface.co/robbyant/lingbot-map)** | robbyant | 155 | 0 | Research model associated with recent arXiv publication, suggesting emerging linguistic tool capabilities. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 670 | 1,112,454 | Most-downloaded model this week—Unsloth's GGUF quantization enabling local MoE inference. |
| **[Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 372 | 312,962 | Aggressive uncensored fine-tune with substantial adoption for unrestricted applications. |
| **[gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 457 | 79,024 | Abliterated Gemma-4 variant removing safety fine-tuning, popular in the uncensored community. |
| **[Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 191 | 0 | Fresh GGUF release of the dense Qwen3.6-27B, expected to follow its MoE sibling's trajectory. |
| **[Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | Jackrong | 184 | 51,137 | Creative "frankenmerge" combining Qwen and GLM architectures for enhanced reasoning. |
| **[Qwen3.6-35B-A3B-FP8](https://huggingface.co/Qwen/Qwen3.6-35B-A3B-FP8)** | Qwen | 155 | 490,028 | Official FP8 quantized release from Qwen team, enabling efficient H100/B200 deployment. |
| **[supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 462 | 111,654 | Fast llama.cpp-compatible Gemma-4 variant with uncensored tuning. |
| **[Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | hesamation | 143 | 44,930 | Ambitious distillation attempt transferring Claude-4.6 reasoning patterns to open weights. |
| **[Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash)** | z-lab | 113 | 13,968 | Experimental DFlash optimization for feature extraction workloads. |
| **[Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,333 | 170,390 | High-engagement MLX-compatible abliterated Gemma-4 for Apple Silicon. |
| **[Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 456 | 841,003 | Most-downloaded uncensored variant this week, with vision capabilities preserved. |
| **[Kimi-K2.6-GGUF](https://huggingface.co/unsloth/Kimi-K2.6-GGUF)** | unsloth | 91 | 2,958 | Early Unsloth quantization of Moonshot's model, limited adoption due to recency. |
| **[Qwen3.6-27B-FP8](https://huggingface.co/Qwen/Qwen3.6-27B-FP8)** | Qwen | 87 | 0 | Official FP8 dense variant, awaiting broader hardware availability. |
| **[Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/KyleHessling1/Qwopus-GLM-18B-Merged-GGUF)** | KyleHessling1 | 85 | 6,740 | Alternative merge of the Qwen-GLM hybrid, smaller but less adopted than Jackrong's version. |

---

## 3. Ecosystem Signal

The Qwen and Gemma families clearly dominate momentum, together accounting for over two-thirds of trending slots. Qwen's strategic release of multiple formats simultaneously—full weights, FP8, and GGUF partnerships—demonstrates mature ecosystem orchestration that maximizes accessibility across deployment scenarios. Google's Gemma-4 represents the most successful proprietary-to-open-weight pipeline, with the 31B instruction model approaching 5M downloads, though the experimental E4B "any-to-any" variant suggests Google is testing more radical modality fusion.

The quantization ecosystem has matured beyond mere compression into a creative layer: Unsloth's official partnerships now deliver million-download GGUFs within days of base model release, while community creators like HauhauCS and OBLITERATUS have established recognizable brands around uncensored variants. The "abliteration" trend—systematic removal of safety fine-tuning—continues to attract disproportionate engagement, with HauhauCS's [Gemma-4-E4B variant](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive) alone exceeding 840K downloads.

Notably, Chinese labs (Qwen, MiniMax, Zhipu/GLM, Baidu, Tencent, Moonshot) now outnumber Western contributors in this week's trending list, reflecting both technical competitiveness and strategic open-weight releases as market entry tactics. The absence of Meta's Llama family and Mistral from this week's trends suggests potential model cycle timing or shifting community attention.

---

## 4. Worth Exploring

**[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — With nearly 4.8M downloads and the highest like count this week, this represents the current sweet spot of capability, proven reliability, and ecosystem support. The "it" (instruction-tuned) variant demonstrates Google's strongest open-weight offering to date, and its multimodal capabilities make it suitable for production vision-language applications without the complexity of MoE routing.

**[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — For those seeking local deployment of frontier-class models, this is the week's standout: a 35B-parameter MoE compressible to consumer hardware via 3B active parameters, with Unsloth's optimization pedigree ensuring quality retention. The 1.1M downloads in a short period indicate strong community validation of its practical utility.

**[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** — While currently at zero downloads, this image-to-3D world model represents a genuinely novel capability direction compared to the week's LLM-heavy trends. As spatial computing and robotics applications mature, early familiarity with Tencent's Hunyuan world model architecture could provide significant advantage. The "safetensors" and "worldmodel" tags suggest serious engineering investment worth monitoring.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*