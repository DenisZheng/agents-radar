# Hugging Face Trending Models Digest 2026-04-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-19 00:13 UTC

---

# Hugging Face Trending Models Digest — April 19, 2026

---

## 1. Today's Highlights

The Hugging Face ecosystem is experiencing explosive activity around Google's **Gemma 4** family, with three variants dominating download metrics and community fine-tunes proliferating rapidly. **Qwen 3.6-35B-A3B** emerges as the leading open multimodal MoE architecture, with both official releases and aggressive community quantizations gaining substantial traction. Notably, **uncensored/abliterated fine-tunes** represent a significant trend, with multiple creators (HauhauCS, Jiunsong, dealignai, OBLITERATUS) releasing modified versions of mainstream models that are accumulating serious download volumes. Chinese labs continue their open-weight dominance: MiniMax, Qwen, Baidu, Tencent, and Zhipu AI (via zai-org/GLM-5.1) all have top-performing models this week. The emergence of **any-to-any** architectures (Google's Gemma-4-E4B-it) and **embodied/world models** (Tencent's HY-World-2.0) signals the next frontier beyond static multimodality.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,399 | 103,847 | Zhipu AI's latest MoE with dynamic sparse attention (DSA), representing China's most sophisticated open chat model release this quarter. |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 957 | 258,064 | MiniMax's compact but capable text-generation model showing strong adoption despite being overshadowed by larger names. |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,732 | 576,608 | **Top-liked model this week** — community distillation transferring Claude 4.6 Opus reasoning patterns into Qwen architecture, demonstrating the maturity of reasoning distillation techniques. |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | google | 736 | 2,778,992 | Google's activated-parameter efficient variant with massive download volume, indicating strong production deployment interest. |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 395 | 66,552 | High-speed llama.cpp-compatible uncensored variant of Gemma 4, filling demand for unrestricted local inference. |
| **[LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo)** | LilaRest | 247 | 104,603 | NVIDIA FP4 quantized version of Gemma-4-31B, optimized for RTX 50-series hardware with minimal accuracy loss. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,153 | 3,778,070 | **Highest downloads this week** — Google's flagship vision-language model, establishing the new standard for open multimodal performance. |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 831 | 82,000 | Official release of Qwen's 35B total / 3B activated parameter MoE with native vision understanding, challenging Gemma 4's dominance. |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 864 | 1,454 | Hunyuan's first open embodied AI model with motion understanding, previewing robotics and physical-world interaction capabilities. |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 733 | 2,118,971 | Google's experimental "any-to-any" architecture — accepting and generating arbitrary modality combinations, pointing toward true unified multimodality. |
| **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 453 | 3,116 | Baidu's Apache-2.0 licensed 8B text-to-image model, notable for permissive licensing from a major Chinese lab. |
| **[baidu/ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo)** | baidu | 307 | 4,119 | Accelerated variant of ERNIE-Image with improved inference speed, gaining traction for production image generation pipelines. |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 1,108 | 35,870 | High-quality multilingual TTS from Tsinghua's OpenBMB team, standing out in an underrepresented category. |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 641 | 957,869 | **Second-highest downloads** — zero-shot multilingual voice cloning with near-million downloads, indicating massive demand for personalized speech synthesis. |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 342 | 0 | Hunyuan's world model for image-to-3D generation, previewing spatial intelligence despite zero downloads (likely gated/restricted access). |
| **[NucleusAI/Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image)** | NucleusAI | 167 | 1,045 | Sparse MoE diffusion architecture for text-to-image, experimenting with mixture-of-experts in generative visual models. |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 869 | 0 | Netflix's video-to-video inpainting model for object removal and editing, notable as a major non-tech company's open model release. |
| **[LiconStudio/Ltx2.3-VBVR-lora-I2V](https://huggingface.co/LiconStudio/Ltx2.3-VBVR-lora-I2V)** | LiconStudio | 138 | 6,025 | Specialized LoRA for logical video reasoning in image-to-video generation, addressing a niche but growing need for coherent long-form video. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | nvidia | 192 | 81 | NVIDIA's latest research model (arXiv:2604.13036), likely audio/music given the Lyra lineage, though pipeline unspecified; low engagement suggests early preview. |
| **[OpenMOSS-Team/MOSS-TTS-Nano-100M](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-Nano-100M)** | OpenMOSS-Team | 141 | 33,394 | Ultra-compact 100M parameter Chinese TTS, demonstrating efficient speech synthesis for edge deployment. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 447 | 442,900 | Unsloth's highly optimized GGUF quantization of Qwen's MoE, enabling consumer GPU inference of a 35B-parameter-class model. |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,282 | 156,865 | Aggressively uncensored MLX-native Gemma 4 fine-tune with substantial community following, optimized for Apple Silicon. |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 201 | 92,003 | Vision-capable uncensored Qwen MoE quantization, combining multimodal access with unrestricted outputs. |
| **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 304 | 24,052 | Abliterated version of Google's any-to-any Gemma-4-E4B, attempting to remove safety guardrails from the most flexible multimodal architecture. |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 396 | 704,737 | **Highest-downloaded fine-tune** — uncensored any-to-any Gemma 4 in GGUF, with extraordinary download volume indicating massive demand for unrestricted multimodal models. |
| **[unsloth/ERNIE-Image-Turbo-GGUF](https://huggingface.co/unsloth/ERNIE-Image-Turbo-GGUF)** | unsloth | 165 | 19,176 | Unsloth's GGUF conversion of Baidu's image generator, unusual application of quantization to diffusion models. |
| **[unsloth/MiniMax-M2.7-GGUF](https://huggingface.co/unsloth/MiniMax-M2.7-GGUF)** | unsloth | 134 | 100,683 | Efficient quantization of MiniMax's compact model, demonstrating Unsloth's role as the dominant quantization infrastructure provider. |
| **[Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2)** | Jiunsong | 173 | 14,165 | Apple Silicon-optimized 4-bit MLX version of uncensored Gemma 4, serving the growing Mac-based local AI community. |
| **[Qwen/Qwen3.6-35B-A3B-FP8](https://huggingface.co/Qwen/Qwen3.6-35B-A3B-FP8)** | Qwen | 119 | 100,271 | Official FP8 quantization from Qwen team, enabling efficient server deployment of their flagship MoE. |

---

## 3. Ecosystem Signal

**Gemma 4 has achieved ecosystem dominance** in a way no previous open model family has. With 3.8M downloads for the flagship 31B variant, 2.1M for the experimental E4B, and 2.8M for the efficient A4B, Google has successfully converted architectural leadership into mass adoption. The sheer volume of community modifications — uncensored fine-tunes, aggressive quantizations, hardware-specific optimizations — indicates Gemma 4 has become the default substrate for experimentation.

**Chinese labs continue to set the pace for open-weight releases.** MiniMax, Qwen, Baidu, Tencent, and Zhipu AI collectively represent 50% of trending models, with Qwen's MoE architecture showing particular sophistication. The MoE paradigm has fully matured: three of the top models use sparse activation, and community quantizers have successfully adapted GGUF/MLX formats for these architectures.

The **uncensored/abliterated movement** has evolved from fringe to mainstream, with HauhauCS, Jiunsong, and dealignai accumulating millions of combined downloads. This represents both technical achievement (successfully modifying safety-tuned models without breaking capabilities) and a genuine market signal about user preferences for unrestricted models.

**Unsloth has emerged as critical infrastructure**, with four trending quantizations and the highest single-model download count among community creators. Their optimization work effectively extends model accessibility across hardware constraints.

Notably, **proprietary-adjacent distillation** (Jackrong's Claude 4.6 Opus reasoning transfer) now generates the most likes of any model, suggesting the frontier of capability advancement increasingly occurs through knowledge transfer rather than从头 training.

---

## 4. Worth Exploring

**[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** — This model demands attention as the highest-liked release and a proof-of-concept for a potentially transformative trend: distilling reasoning patterns from frontier proprietary models into efficient open architectures. At 27B parameters with 577K downloads, it offers a plausible path to near-frontier reasoning capability without frontier compute costs. Study its training methodology and failure modes to understand the limits of reasoning distillation.

**[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** — The "any-to-any" pipeline designation makes this the most architecturally significant model on the list. Unlike constrained multimodal models, it purportedly handles arbitrary input-output modality combinations. With 2.1M downloads and an active community of uncensored fine-tunes, it's the platform most likely to enable novel applications that don't fit existing modality-paired paradigms. Essential for researchers tracking the unification of multimodal AI.

**[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** — While downloads remain low (likely due to preview status), this represents the vanguard of embodied AI in open weights. The "mot" (motion) tag and Tencent's concurrent HY-World-2.0 release signal systematic investment in physical-world understanding. For researchers and developers anticipating robotics and spatial AI, this is the earliest accessible window into production-grade embodied models from a major lab.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*