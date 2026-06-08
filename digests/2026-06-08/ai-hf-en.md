# Hugging Face Trending Models Digest 2026-06-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-08 00:41 UTC

---

# Hugging Face Trending Models Digest
**Date: 2026-06-08**

---

## 1. Today's Highlights

This week on Hugging Face is headlined by **DeepSeek-V4-Pro** dominating with 4,696 likes and over 5.5 million downloads, solidifying DeepSeek's position as a major open-weight LLM contender. NVIDIA makes a massive showing with 11 trending models spanning Cosmos3 multimodal generation, Nemotron-3 series MoE models, and multiple quantized Qwen releases. Google's new **Gemma-4** family arrives in force with four variants already trending, including Unsloth-optimized GGUF builds. The community continues to drive enormous download volumes through quantization, with the uncensored Qwen 3.6 GGUF racking up nearly 3 million downloads despite relatively modest likes.

---

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes / Downloads | Notes |
|-------|--------|-------------------|-------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,696 ♥ / 5.5M ↓ | The week's top performer — a massive open-weight reasoning and conversational model setting a new benchmark. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,434 ♥ / 3.3M ↓ | A fast, lighter sibling of V4-Pro, optimized for lower-latency deployment. |
| [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 687 ♥ / 435K ↓ | Google's latest unified multimodal-any-to-any instruction-tuned model, supporting vision-language workflows. |
| [google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B) | google | 410 ♥ / 100K ↓ | Base (non-instruction) version of Gemma-4, ideal for fine-tuning and research. |
| [openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B) | openbmb | 779 ♥ / 114K ↓ | Ultra-compact 1B-parameter LLM punching well above its weight for on-device and edge inference. |
| [LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) | LiquidAI | 540 ♥ / 118K ↓ | A MoE LLM from LiquidAI with only 1B active parameters — extremely efficient for its size class. |
| [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 718 ♥ / 163K ↓ | A surprisingly capable 1B-parameter text-generation model attracting strong community interest. |
| [JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking) | JetBrains | 249 ♥ / 17K ↓ | JetBrains' MoE reasoning model, signaling growing IDE-to-LLM pipeline convergence. |
| [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16) | nvidia | 156 ♥ / 50K ↓ | NVIDIA's flagship 550B MoE model with 55B active params — a serious production-grade LLM. |
| [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4) | nvidia | 131 ♥ / 40K ↓ | FP4-quantized version of the Nemotron-3 Ultra, dramatically reducing inference memory footprint. |

### 🎨 Multimodal & Generation

| Model | Author | Likes / Downloads | Notes |
|-------|--------|-------------------|-------|
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 1,524 ♥ / 116K ↓ | NVIDIA's zero-shot object localization model — point to anything in an image from text prompts. |
| [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) | ideogram-ai | 345 ♥ / 4.4K ↓ | FP8-quantized version of the latest Ideogram text-to-image model with strong typography rendering. |
| [ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4) | ideogram-ai | 235 ♥ / 3.8K ↓ | Further-compressed NF4 variant of Ideogram-4 for GPU-limited environments. |
| [stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) | stepfun-ai | 348 ♥ / 43K ↓ | A fast vision-language model from Chinese AI lab StepFun for high-throughput multimodal tasks. |
| [nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano) | nvidia | 194 ♥ / 30K ↓ | Entry-level Cosmos3 model for multimodal (text+image+video) generation with omni pipeline support. |
| [nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super) | nvidia | 153 ♥ / 24K ↓ | Full-size Cosmos3 omni model — NVIDIA's most ambitious unified generation model to date. |
| [nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image) | nvidia | 123 ♥ / 5.1K ↓ | Text-to-image specialization of the Cosmos3-Super backbone. |
| [nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video) | nvidia | 114 ♥ / 4.5K ↓ | Image-to-video generation variant of Cosmos3-Super. |
| [ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R) | ByteDance | 167 ♥ / 246 ↓ | ByteDance's image-to-video renderer — early-stage but architecturally interesting. |
| [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 1,586 ♥ / 1.7M ↓ | A quantized text-to-video model based on LTX-2.3, achieving massive download traction. |
| [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 193 ♥ / 7.6K ↓ | A 4B-parameter text-to-speech model built on Qwen3 multimodal architecture. |
| [MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS) | MisoLabs | 142 ♥ / 0 ↓ | A new TTS model from MisoLabs — zero downloads but notable community buzz. |
| [google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2) | google | 131 ♥ / 13K ↓ | Google's real-time text-to-audio generation model, targeting music and sound design workflows. |
| [nvidia/PiD](https://huggingface.co/nvidia/PiD) | nvidia | 317 ♥ / 1.1K ↓ | NVIDIA's image-to-image super-resolution diffusion model. |

### 🔧 Specialized Models

| Model | Author | Likes / Downloads | Notes |
|-------|--------|-------------------|-------|
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 256 ♥ / 3.4K ↓ | A 0.6B streaming ASR model with cache-aware architecture for real-time speech recognition. |
| [PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6) | PaddlePaddle | 266 ♥ / 9.1K ↓ | PaddlePaddle's vision-language OCR model built on ERNIE 4.5, strong for document understanding. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes / Downloads | Notes |
|-------|--------|-------------------|-------|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,521 ♥ / 2.9M ↓ | An uncensored GGUF fine-tune of Qwen 3.6 MoE — the highest-downloaded model this week by far. |
| [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | unsloth | 449 ♥ / 568K ↓ | Unsloth's GGUF quantization of Gemma-4-12B-it, enabling efficient local inference. |
| [unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF) | unsloth | 120 ♥ / 86K ↓ | QAT-aware GGUF build of Gemma-4 for even better quantized accuracy. |
| [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | nvidia | 200 ♥ / 1.2M ↓ | NVIDIA's official FP4 quantization of Qwen 3.6 MoE — enterprise-grade compression with 1.2M downloads. |

---

## 3. Ecosystem Signal

This week reveals several converging trends in the open-weight model ecosystem. **NVIDIA is executing a platform play** — with 11 models trending across LLMs (Nemotron-3), vision-language (LocateAnything, Cosmos3), speech (ASR), and quantization (Qwen NVFP4), NVIDIA is positioning itself as the infrastructure backbone for open AI, not just a chip vendor. The Cosmos3 family's modular release strategy (Nano, Super, Text2Image, Image2Video) mirrors how large tech companies ship model families — giving developers composable building blocks.

**DeepSeek's V4 generation** is the other major story. V4-Pro's 4,696 likes and 5.5M downloads in a single week demonstrate that Chinese open-weight labs have achieved parity with — and in some metrics surpassed — Western counterparts. The Flash variant's 3.3M downloads further shows demand for efficient deployment.

**Quantization is the great equalizer.** The uncensored Qwen 3.6 GGUF (2.9M downloads) and NVIDIA's official NVFP4 build (1.2M downloads) together show that the community prioritizes runnable models over raw parameter count. Unsloth's rapid GGUF releases for Gemma-4 within days of launch highlights how the quantization ecosystem now operates at near-real-time speed.

**MoE (Mixture of Experts) is the dominant architecture** among new releases — Nemotron-3 Ultra (550B/55B), Qwen 3.6 (35B/3B), LFM2.5 (8B/1B), and Mellum2 (12B/2.5B) all use sparse activation. This signals the industry's consensus that MoE is the path to scaling without proportional compute cost.

Finally, **Google's Gemma-4** arriving as a unified any-to-any model (text, image, and beyond) suggests the "generalist multimodal model" paradigm is becoming the default for new foundation model releases.

---

## 4. Worth Exploring

**1. [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
The clear model of the week. With 5.5M downloads and top-like count, it represents the current state of the art in open-weight LLMs. Worth studying for its architecture and trying as a general-purpose reasoning and conversational model. The Flash variant is the practical choice for production deployment.

**2. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
A surprisingly versatile vision model that does zero-shot object localization from text descriptions — no fine-tuning, no bounding-box training data required. At only 3B parameters, it's deployable on consumer hardware and opens up applications in robotics, image editing, and visual search that previously required much larger models.

**3. [nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super)**
NVIDIA's most ambitious unified generation model, with specialized variants for text-to-image and image-to-video. The modular release strategy and omni pipeline tag suggest this is designed as a composable foundation for building custom generation pipelines. Early but architecturally significant — worth studying for anyone working on multimodal generation systems.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*