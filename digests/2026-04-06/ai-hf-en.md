# Hugging Face Trending Models Digest 2026-04-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-06 00:11 UTC

---

# Hugging Face Trending Models Digest — April 6, 2026

## 1. Today's Highlights

Google's **Gemma 4** family dominates this week's leaderboard with multiple variants spanning 2B to 31B parameters, including experimental "any-to-any" multimodal models (E2B/E4B). Community distillation efforts are accelerating, with **Jackrong's Qwen3.5-Claude-4.6-Opus reasoning distillates** capturing significant attention—demonstrating demand for compact, high-reasoning models. The **1-bit quantization movement** gains traction through **prism-ml's Bonsai-8B**, signaling a push toward extreme edge deployment. Notably, **uncensored fine-tunes** from **HauhauCS** are driving substantial download volume, reflecting persistent market demand for unaligned model variants. Netflix's entry into video-to-video generation with **void-model** hints at expanding enterprise AI investments beyond traditional tech players.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,345 | 539,356 | Community-distilled reasoning model capturing Claude-4.6-Opus capabilities in a 27B parameter efficient architecture. |
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 994 | 725,110 | High-engagement uncensored variant with exceptional download velocity, indicating strong demand for unfiltered local inference. |
| **[LiquidAI/LFM2.5-350M](https://huggingface.co/LiquidAI/LFM2.5-350M)** | LiquidAI | 229 | 14,877 | Ultra-compact 350M parameter liquid neural network for resource-constrained applications. |
| **[chromadb/context-1](https://huggingface.co/chromadb/context-1)** | chromadb | 370 | 3,584 | Purpose-built retrieval-augmented generation model from the vector database leader. |
| **[facebook/tribev2](https://huggingface.co/facebook/tribev2)** | facebook | 307 | 53,322 | Meta's latest community-oriented model with regional US licensing considerations. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 983 | 490,192 | Flagship instruction-tuned multimodal model with native vision-language capabilities. |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 349 | 197,704 | Experimental "any-to-any" architecture enabling flexible input-output modality combinations. |
| **[google/gemma-4-E2B-it](https://huggingface.co/google/gemma-4-E2B-it)** | google | 250 | 167,166 | Compact any-to-any variant demonstrating Google's modality-agnostic model direction. |
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** | baidu | 987 | 37,707 | Production-grade Chinese-optimized document understanding with InternVL architecture. |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 389 | 0 | Enterprise video inpainting and object removal—first major streaming platform open-weight release. |
| **[CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026)** | CohereLabs | 804 | 120,998 | Cohere's latest ASR model with competitive performance on long-form audio. |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 244 | 39,852 | Zero-shot multilingual voice cloning with next-token prediction architecture. |
| **[mistralai/Voxtral-4B-TTS-2603](https://huggingface.co/mistralai/Voxtral-4B-TTS-2603)** | mistralai | 673 | 5,458 | Mistral's compact text-to-speech entry optimized for vLLM deployment. |
| **[Hcompany/Holo3-35B-A3B](https://huggingface.co/Hcompany/Holo3-35B-A3B)** | Hcompany | 222 | 1,532 | MoE-based multimodal model with aggressive activation sparsity (35B total, 3B active). |
| **[HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,185 | 688,440 | Uncensored MoE vision-language model combining high engagement with multimodal capabilities. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[microsoft/harrier-oss-v1-0.6b](https://huggingface.co/microsoft/harrier-oss-v1-0.6b)** | microsoft | 163 | 10,824 | Qwen3-based embedding model optimized for MTEB benchmarks and sentence-transformers compatibility. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | prism-ml | 426 | 38,631 | Extreme 1-bit quantization enabling sub-1GB deployment of 8B parameter models. |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF)** | Jackrong | 509 | 254,428 | Refined GGUF conversion of the popular reasoning distillation with improved llama.cpp compatibility. |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 245 | 487,384 | Unsloth-optimized GGUF conversion with 4-bit activation-aware quantization. |
| **[unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF)** | unsloth | 179 | 408,920 | High-download conversion of Google's flagship multimodal model for local inference. |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 201 | 3,123 | MLX-native abliterated variant for Apple Silicon deployment with uncensored behavior. |
| **[nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4)** | nvidia | 195 | 85,892 | NVIDIA-optimized FP4 quantization using ModelOpt for Hopper/Blackwell efficiency. |
| **[Jackrong/Qwopus3.5-9B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-v3-GGUF)** | Jackrong | 187 | 43,478 | Compact reasoning-optimized Qwen variant with multi-platform GGUF support. |
| **[Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF)** | Jackrong | 171 | 37,479 | Larger reasoning-focused variant with explicit reasoning tag in model metadata. |
| **[prism-ml/Bonsai-8B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-8B-mlx-1bit)** | prism-ml | 147 | 20,522 | Apple Silicon-optimized 1-bit implementation with MLX-Swift compatibility. |
| **[unsloth/gemma-4-E4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF)** | unsloth | 140 | 317,335 | Any-to-any model conversion enabling local multimodal experimentation. |

---

## 3. Ecosystem Signal

**Gemma 4** has emerged as the definitive open-weight release of early 2026, with Google deploying a sophisticated tiered strategy: base multimodal models (31B/26B), activation-sparse variants (A4B), and experimental any-to-any architectures (E2B/E4B). This represents a maturation beyond simple scaling—Google is now competing on architectural diversity and deployment flexibility. The **Qwen3.5 ecosystem**, particularly through community distillation efforts by **Jackrong** and **HauhauCS**, demonstrates that Chinese-origin model families have achieved global adoption parity, with reasoning distillation and uncensored variants driving substantial engagement.

Quantization activity is intensifying along two axes: **extreme compression** (1-bit Bonsai, NVFP4) and **ecosystem-native optimization** (MLX for Apple Silicon, GGUF for llama.cpp). **Unsloth** has established itself as the dominant conversion infrastructure, appearing across four high-download Gemma variants. The uncensored model segment, while controversial, shows no demand abatement—**HauhauCS** variants account for over 1.4M combined downloads. Enterprise participation is expanding meaningfully: **Netflix's video-to-video release** and **Baidu's OCR specialization** indicate open-weight strategies extending beyond traditional AI labs into vertical application domains.

---

## 4. Worth Exploring

**[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** — This represents the most sophisticated open-weight reasoning distillation available, compressing frontier Claude capabilities into a deployable 27B parameter footprint. The 2,345 likes and half-million downloads suggest validated quality; worth studying for distillation methodology and as a production reasoning backend.

**[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** — The 1-bit quantization frontier merits close attention for edge AI implications. With 38K+ downloads despite technical novelty, Bonsai demonstrates practical viability of extreme quantization. Essential for researchers and engineers evaluating sub-1GB model deployment.

**[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** — Google's "any-to-any" architecture is the most significant structural innovation in this release cycle. With 197K downloads for an experimental variant, it offers early access to modality-agnostic model paradigms that may define next-generation multimodal systems.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*