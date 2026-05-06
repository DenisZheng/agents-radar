# Hugging Face Trending Models Digest 2026-04-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-21 00:16 UTC

---

# Hugging Face Trending Models Digest — April 21, 2026

## 1. Today's Highlights

The Hugging Face ecosystem this week is dominated by **Google's Gemma 4 family** and **Qwen's 3.6 series**, with both base models and their quantized variants capturing significant attention. Notably, **Jackrong's Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled** leads all models with 2,741 likes, signaling strong demand for reasoning-distilled models. The **uncensored/abliterated fine-tune movement** remains highly active, with multiple community variants of Gemma 4 and Qwen models racking up substantial downloads. Tencent's expansion into embodied AI and world models (HY-Embodied-0.5, HY-World-2.0) hints at China's growing push toward physical AI applications. Meanwhile, speech synthesis is experiencing a renaissance with **k2-fsa/OmniVoice** surpassing 1 million downloads and **openbmb/VoxCPM2** leading likes in the audio category.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 1,001 | 314,205 | MiniMax's latest conversational LLM with strong engagement, positioning as a serious alternative to Western models. |
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,438 | 124,162 | Zhipu's GLM-5.1 with MoE+DSA architecture continues the GLM family's evolution as a top-tier Chinese open-weight model. |
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 371 | 423 | Kimi's K2.6 release with compressed-tensors optimization targets efficient deployment of long-context capabilities. |
| **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | Jackrong | 147 | 7,182 | A creative "frankenmerge" combining Qwen3.5 and GLM lineages for enhanced reasoning in quantized form. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,222 | 4,237,068 | Google's flagship multimodal Gemma 4 with 4.2M downloads dominates as the most widely adopted open vision-language model. |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 769 | 2,395,486 | The "any-to-any" variant of Gemma 4, breaking modality boundaries with unified input/output across text, image, and audio. |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | google | 756 | 3,113,602 | The MoE-enabled Gemma 4 variant offering efficient scaling with 26B active params from 4B experts. |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,043 | 334,628 | Alibaba's Qwen3.6 with MoE architecture and native vision capabilities, a direct challenger to Gemma 4's dominance. |
| **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 496 | 4,144 | Baidu's 8B-parameter text-to-image model under Apache 2.0, marking ERNIE's expansion into open generative visual AI. |
| **[baidu/ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo)** | baidu | 334 | 5,297 | Faster inference variant of ERNIE-Image with growing adoption for production text-to-image workflows. |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 886 | 1,662 | Hunyuan's first embodied AI model bridging vision-language understanding with robotic action planning. |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 495 | 0 | A world model for 3D generation from images, representing Tencent's bet on spatial intelligence foundations. |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 660 | 1,080,795 | The breakout TTS model of 2026 with 1M+ downloads, delivering zero-shot multilingual voice cloning at production quality. |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 1,197 | 66,555 | Leading the TTS category in likes with impressive multilingual capabilities from Tsinghua's OpenBMB team. |
| **[NucleusAI/Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image)** | NucleusAI | 201 | 1,336 | Experimental sparse-MoE diffusion model exploring parameter-efficient image generation architectures. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | nvidia | 235 | 155 | NVIDIA's research artifact (arXiv:2604.13036) suggests new directions in audio/language model convergence, though downloads remain minimal. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,741 | 567,288 | The week's top-liked model: distillation from Claude 4.6 Opus's reasoning traces into an efficient Qwen3.5 architecture. |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 561 | 816,485 | Unsloth's highly optimized GGUF quantization of Qwen3.6, enabling local deployment of 35B-equivalent MoE on consumer hardware. |
| **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 380 | 50,701 | Aggressive uncensoring of Gemma 4's any-to-any model, controversial but demonstrating strong community demand for unfiltered variants. |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,314 | 163,752 | MLX-optimized abliterated Gemma 4 for Apple Silicon, combining censorship removal with native Mac performance. |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 283 | 216,308 | Vision-capable uncensored Qwen3.6 GGUF, filling a niche for unrestricted multimodal local deployment. |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 424 | 781,705 | Nearly 800K downloads make this the most popular uncensored vision-language model, a significant community phenomenon. |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 437 | 77,195 | Optimized llama.cpp-compatible Gemma 4 MoE with speed-focused quantization for efficient local inference. |
| **[Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2)** | Jiunsong | 187 | 17,497 | Apple Silicon-native 4-bit MLX variant, extending the supergemma4 line to macOS ecosystems. |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 560 | 2,432,222 | Unsloth's most-downloaded model this week: expertly quantized Gemma 4 MoE with 2.4M+ downloads, setting the standard for local deployment. |
| **[unsloth/ERNIE-Image-Turbo-GGUF](https://huggingface.co/unsloth/ERNIE-Image-Turbo-GGUF)** | unsloth | 179 | 30,081 | Experimental GGUF conversion of diffusion model weights, pushing quantization boundaries beyond language models. |
| **[Qwen/Qwen3.6-35B-A3B-FP8](https://huggingface.co/Qwen/Qwen3.6-35B-A3B-FP8)** | Qwen | 139 | 207,019 | Official FP8 release from Qwen team for datacenter-efficient inference with minimal accuracy loss. |

---

## 3. Ecosystem Signal

**Gemma 4 has achieved clear ecosystem dominance**, with Google's family claiming 3 of the top 5 download counts and multiple variants spanning 31B dense, 26B MoE, and 4B expert configurations. The "any-to-any" paradigm introduced by [gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) represents a genuine architectural inflection point, collapsing previously separate modality pipelines into unified models. Qwen remains the strongest challenger, particularly in the Chinese and Asian developer communities, with Qwen3.6's MoE architecture closely mirroring Gemma 4's approach.

The **uncensored/abliterated movement** has matured from fringe to mainstream, with HauhauCS, Jiunsong, and OBLITERATUS collectively driving millions of downloads. This signals unresolved tension between corporate AI safety preferences and developer demands for unrestricted tooling—particularly for vision-language applications where content policies are most restrictive.

**Quantization is now table stakes**, with Unsloth establishing itself as the indispensable infrastructure layer. Their GGUF variants consistently outperform official releases in download velocity, suggesting developers prioritize local deployment over API access. The emergence of MLX-specific variants (dealignai, Jiunsong) indicates Apple Silicon has become a first-class target for open model deployment.

Chinese model ecosystems (Qwen, GLM, MiniMax, Baidu, Tencent, Moonshot) now constitute roughly half of trending models, demonstrating that open-weight AI development has become genuinely multipolar. Proprietary API models increasingly serve as **distillation targets** rather than endpoints, as seen in Jackrong's Claude 4.6 Opus reasoning distillation.

---

## 4. Worth Exploring

**[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** — This model merits attention as the clearest evidence of "distillation as capability transfer" working at scale. With 2,741 likes and 567K downloads, it reportedly captures Claude 4.6 Opus's reasoning patterns in a 27B parameter footprint. For researchers and practitioners, it offers a testbed for studying whether distilled reasoning generalizes or merely memorizes, and whether the efficiency gains justify the ethical and legal ambiguities of training on proprietary model outputs.

**[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** — With 1.08 million downloads and relatively modest 660 likes, this TTS model exhibits the highest download-to-like ratio on the list, suggesting production deployment rather than casual experimentation. Its zero-shot multilingual voice cloning capabilities at this scale represent a potential inflection point for accessibility tools, content localization, and synthetic media. Worth studying for its technical approach and for understanding responsible deployment challenges in voice synthesis.

**[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** — Despite zero downloads, this image-to-3D world model is strategically significant as Tencent's bid to define spatial intelligence foundations. With NVIDIA's Cosmos and various world model efforts emerging, HY-World-2.0's architecture and training methodology deserve scrutiny from researchers tracking the convergence of generative models with physical simulation. The zero downloads likely reflect gated release or early-stage availability rather than lack of interest.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*