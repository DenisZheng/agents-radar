# Hugging Face Trending Models Digest 2026-04-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-08 00:13 UTC

---

# Hugging Face Trending Models Digest — April 8, 2026

---

## 1. Today's Highlights

The **Gemma 4 family** dominates this week's trending list with Google's release of multiple parameter-efficient variants (31B, 26B-A4B, E4B, E2B) featuring native multimodal capabilities and MoE architectures. **Jackrong's Qwen3.5 distillation series** continues to gain serious traction, particularly the Claude-4.6-Opus reasoning-distilled variants that are outperforming expectations on community benchmarks. The emergence of **1-bit quantization** (prism-ml's Bonsai-8B) and **NVFP4 optimized variants** (NVIDIA's Gemma-4-31B) signals a major push toward extreme edge deployment. Notably, **uncensored/abliterated fine-tunes** remain highly sought after, with HauhauCS and dealignai models accumulating significant download velocity despite—or perhaps because of—their controversial nature.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 1,330 | 884,290 | Google's flagship instruction-tuned multimodal LLM with native image understanding and competitive reasoning benchmarks. |
| [dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 680 | 29,514 | Aggressively uncensored MLX-compatible variant targeting Apple Silicon users seeking unrestricted outputs. |
| [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 295 | 389 | Next-generation GLM with MoE-DSA architecture, though surprisingly low downloads suggest limited accessibility or awareness. |
| [LiquidAI/LFM2.5-350M](https://huggingface.co/LiquidAI/LFM2.5-350M) | LiquidAI | 251 | 19,572 | Compact 350M parameter liquid foundation model demonstrating strong efficiency-to-performance ratios for resource-constrained applications. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | Jackrong | 2,450 | 552,015 | **Highest likes this week** — sophisticated knowledge distillation from Claude-4.6-Opus into Qwen3.5 architecture with multimodal support. |
| [google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) | google | 470 | 473,605 | "Any-to-any" modality architecture enabling flexible input/output combinations beyond traditional image-text pairs. |
| [google/gemma-4-E2B-it](https://huggingface.co/google/gemma-4-E2B-it) | google | 326 | 321,237 | Smaller E2B variant of the any-to-any Gemma-4 family, balancing capability with deployment efficiency. |
| [baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR) | baidu | 1,071 | 39,933 | Baidu's production-grade vision-language OCR system built on InternVL architecture with strong multilingual document understanding. |
| [k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice) | k2-fsa | 353 | 104,915 | Zero-shot multilingual voice cloning and text-to-speech with remarkably natural prosody transfer across languages. |
| [netflix/void-model](https://huggingface.co/netflix/void-model) | netflix | 562 | 0 | Netflix's video inpainting/editing model for object removal — zero downloads suggest gated access or pre-release status generating anticipation. |
| [openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2) | openbmb | 242 | 129 | Research-oriented multilingual TTS with novel CPM architecture, though minimal adoption indicates experimental maturity. |
| [CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026) | CohereLabs | 828 | 135,919 | Cohere's latest ASR release showing strong multilingual performance and robust handling of noisy audio conditions. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [tencent/HY-OmniWeaving](https://huggingface.co/tencent/HY-OmniWeaving) | tencent | 233 | 0 | Novel diffusion architecture referenced in recent arXiv papers; zero downloads indicate research preview or infrastructure dependency. |
| [nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4) | nvidia | 285 | 213,294 | NVIDIA-optimized variant using 4-bit floating point (NVFP4) via ModelOpt, delivering ~2x throughput improvement on Hopper/Blackwell. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf) | prism-ml | 499 | 52,632 | Extreme 1-bit quantization breakthrough enabling 8B parameter models on consumer hardware with surprisingly preserved quality. |
| [unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) | unsloth | 316 | 826,592 | **Highest GGUF downloads** — Unsloth's optimized MoE quantization making 26B-A4B viable for local deployment. |
| [unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF) | unsloth | 226 | 605,867 | Full 31B Gemma-4 in GGUF format, demonstrating Unsloth's dominance in efficient model packaging. |
| [unsloth/gemma-4-E4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF) | unsloth | 176 | 531,000 | Any-to-any Gemma-4 variant quantized for llama.cpp compatibility, expanding multimodal access to edge devices. |
| [Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF) | Jackrong | 217 | 55,601 | Reasoning-optimized Qwen3.5 variant with "Qwopus" branding suggesting octopus-like multi-capability architecture. |
| [Jackrong/Qwopus3.5-9B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-v3-GGUF) | Jackrong | 220 | 65,995 | Compact reasoning model delivering outsized performance through aggressive distillation techniques. |
| [HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 172 | 148,886 | Aggressively abliterated any-to-any Gemma-4 with vision capabilities intact, finding niche in unrestricted research applications. |
| [HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,035 | 775,478 | **Highest likes in quantization category** — remarkably popular uncensored variant with massive download velocity. |
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF) | Jackrong | 530 | 292,760 | Refined v2 distillation with improved GGUF quantization, capturing more of Claude's reasoning traces. |
| [prism-ml/Bonsai-8B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-8B-mlx-1bit) | prism-ml | 160 | 28,723 | Apple Silicon-native 1-bit implementation using MLX framework, enabling 8B models on MacBook Air-tier hardware. |

---

## 3. Ecosystem Signal

**Google's Gemma 4 family** has achieved dominant ecosystem positioning, with 8 variants in the top 30 and a combined 3.5M+ downloads. The strategic diversification into MoE (A4B), any-to-any (E4B/E2B), and standard dense architectures suggests Google is aggressively pursuing "one family, many deployments" to compete with Meta's Llama and Alibaba's Qwen. **Jackrong** has emerged as the most influential individual/community contributor, with 5 models and sophisticated distillation pipelines that blur the line between open-weight and proprietary capability access.

The quantization ecosystem shows **Unsloth's near-monopoly** in GGUF packaging for major releases, while **prism-ml's 1-bit innovations** represent a genuine architectural shift toward sub-2-bit viability. The strong performance of **uncensored/abliterated models** (3 in top 30, 1M+ combined downloads) indicates persistent demand for unfiltered model weights despite platform moderation trends.

**Proprietary-to-open distillation** is now standard practice, with Claude-4.6-Opus and implied GPT-4-level teachers appearing in multiple community fine-tunes. NVIDIA's NVFP4 optimization and the rise of MLX-specific releases signal **hardware-aware quantization** as the next competitive frontier.

---

## 4. Worth Exploring

| Model | Reasoning |
|-------|-----------|
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | The 1-bit quantization breakthrough is genuinely disruptive—if quality holds, this enables LLM deployment on microcontrollers and decades-old hardware. Essential for understanding the compression frontier. |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Represents the state-of-the-art in knowledge distillation from proprietary models; studying its training methodology and benchmark performance offers insight into how much of frontier capability can be transferred to open weights. |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | The "any-to-any" modality architecture is a genuine architectural evolution beyond standard multimodal—worth examining for researchers building next-generation unified multimodal systems, particularly its handling of arbitrary input-output modality combinations. |

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*