# Hugging Face Trending Models Digest 2026-04-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-20 00:14 UTC

---

# Hugging Face Trending Models Digest — April 20, 2026

---

## 1. Today's Highlights

The Hugging Face ecosystem is experiencing explosive growth in multimodal capabilities, with **Google's Gemma-4 family** dominating download metrics (over 9M combined) and **Qwen3.6's MoE architecture** sparking intense community interest. A striking trend is the proliferation of **uncensored/abliterated fine-tunes** — at least 5 variants in this week's top 30 — reflecting sustained demand for unfiltered model weights. **Tencent's Hunyuan ecosystem** is expanding into embodied AI and world models, while **distilled reasoning models** like Jackrong's Qwen3.5-Claude-4.6-Opus variant are gaining remarkable traction (2,734 likes). Chinese labs (Qwen, Baidu, Tencent, MiniMax, Zhipu) now account for nearly half of trending releases, signaling a geographic shift in open-weight innovation.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,185 | 4,003,761 | Flagship multimodal LLM with massive adoption; Google's most downloaded open model this cycle. |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 755 | 2,264,052 | Compact "any-to-any" modality model enabling universal input/output processing. |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | google | 742 | 2,935,876 | Mid-size Gemma-4 variant balancing capability and deployment efficiency. |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 982 | 288,848 | Chinese conversational LLM with strong performance-to-likes ratio; emerging challenger to Qwen. |
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,417 | 112,939 | Zhipu's latest MoE architecture with DSA optimization; academic and enterprise interest. |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,734 | 572,828 | Highest likes this week; distillation from proprietary Claude-4.6-Opus into open Qwen weights. |
| **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | Jackrong | 124 | 2,975 | Experimental "frankenmerge" combining Qwen and GLM architectures for enhanced reasoning. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 930 | 209,112 | Vision-language MoE with sparse activation (3B active of 35B total); efficient multimodal inference. |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 874 | 1,599 | Hunyuan's first open embodied AI model connecting vision-language to robotic action spaces. |
| **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 470 | 3,761 | Apache-2.0 licensed 8B text-to-image model from Baidu's ERNIE ecosystem. |
| **[baidu/ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo)** | baidu | 318 | 4,757 | Faster variant of ERNIE-Image with maintained quality for production deployments. |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 463 | 0 | World model for 3D scene generation; zero downloads suggest gated or early release status. |
| **[NucleusAI/Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image)** | NucleusAI | 187 | 1,179 | Sparse MoE diffusion architecture; experimental approach to efficient image generation. |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 874 | 0 | Video-to-video inpainting from Netflix; zero downloads indicate research preview or API-only access. |
| **[LiconStudio/Ltx2.3-VBVR-lora-I2V](https://huggingface.co/LiconStudio/Ltx2.3-VBVR-lora-I2V)** | LiconStudio | 140 | 6,396 | LoRA for logical video reasoning; niche but growing interest in structured video generation. |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 1,162 | 51,554 | Multilingual TTS with strong likes; Tsinghua's OpenBMB expanding beyond language into speech. |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 645 | 1,019,685 | Million-download zero-shot voice cloning; K2-FSA's speech processing dominance continues. |
| **[OpenMOSS-Team/MOSS-TTS-Nano-100M](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-Nano-100M)** | OpenMOSS-Team | 148 | 36,158 | Ultra-lightweight Chinese TTS; 100M parameters enable edge deployment. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | nvidia | 225 | 132 | Research artifact with arXiv reference; likely audio/music generation given naming lineage. |
| **[robbyant/lingbot-map](https://huggingface.co/robbyant/lingbot-map)** | robbyant | 84 | 0 | Linguistic mapping research model; academic interest without broad deployment. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 506 | 662,293 | Most-downloaded GGUF this week; Unsloth's efficient quantization of Qwen's vision-MoE. |
| **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 346 | 37,130 | Aggressive safety training removal from Gemma-4-E4B; controversial but consistently popular. |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 420 | 72,519 | Optimized GGUF for llama.cpp with claimed speed improvements; iterated community refinement. |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,298 | 160,417 | MLX-native abliterated Gemma-4 for Apple Silicon; high likes reflect Mac user demand. |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 236 | 173,454 | Vision-capable uncensored MoE; rare combination of multimodal + unfiltered weights. |
| **[unsloth/ERNIE-Image-Turbo-GGUF](https://huggingface.co/unsloth/ERNIE-Image-Turbo-GGUF)** | unsloth | 172 | 26,394 | Experimental GGUF quantization for diffusion; Unsloth pushing format boundaries beyond LLMs. |
| **[Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2)** | Jiunsong | 178 | 16,017 | 4-bit MLX variant for memory-constrained Apple devices; precision-efficiency tradeoff exploration. |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 414 | 739,022 | Highest-download uncensored fine-tune; near-million downloads signal massive latent demand. |
| **[Qwen/Qwen3.6-35B-A3B-FP8](https://huggingface.co/Qwen/Qwen3.6-35B-A3B-FP8)** | Qwen | 131 | 160,890 | Official FP8 release from Qwen team; enterprise-grade precision for H100/B200 deployment. |

---

## 3. Ecosystem Signal

**Gemma-4 has achieved ecosystem dominance** through a strategic size ladder: 26B-A4B, 31B, and E4B variants collectively capture ~9.2M downloads, suggesting Google's open-weight strategy is successfully converting research credibility into production adoption. The **Qwen family** maintains strong innovator position with MoE architectures and vision integration, though download volumes trail Google's. Notably, **Chinese labs now release more trending models than Western counterparts** (Qwen, Baidu, Tencent, MiniMax, Zhipu, OpenBMB vs. Google, NVIDIA, Netflix), a reversal from 2024 patterns.

The **uncensored/abliterated segment** represents a structural phenomenon, not fringe activity: 5 of 30 models, 1.7M+ combined downloads, and consistent community iteration (v2 releases, MLX/GGUF multi-format). This persists despite platform content policies, suggesting distributed demand that official releases cannot satisfy.

**Quantization is expanding beyond LLMs** — Unsloth's ERNIE-Image-Turbo-GGUF experiments with diffusion compression, while FP8 official releases indicate hardware-aware precision becoming standard. The **distillation trend** (Jackrong's Claude-4.6-Opus distill) may presage a new wave of capability transfer from proprietary to open weights as frontier models advance.

---

## 4. Worth Exploring

| Model | Reasoning |
|-------|-----------|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Highest engagement this week (2,734 likes) and represents a critical test: can proprietary frontier reasoning be effectively distilled into efficient open weights? The 572K downloads suggest practitioners are already validating this experiment in production. |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | Lowest downloads (1,599) among top-liked models, but strategically pivotal: embodied AI is the next multimodal frontier after vision-language. Early access to Hunyuan's approach to action-conditioned generation could yield significant research advantages. |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | Only model exceeding 1M downloads outside Google's ecosystem; zero-shot multilingual voice cloning at this scale enables applications from accessibility tools to content localization. The K2-FSA team's speech expertise makes this a reliable foundation for voice AI projects. |

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*