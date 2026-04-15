# Hugging Face Trending Models Digest 2026-04-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-09 00:10 UTC

---

# Hugging Face Trending Models Digest — April 9, 2026

---

## 1. Today's Highlights

Google's **Gemma 4** family dominates this week's rankings, capturing 10 of the top 30 spots with its new multimodal architecture spanning 2B to 31B parameters. The ecosystem shows strong demand for **uncensored and reasoning-distilled variants**, with community fine-tunes like Jackrong's Qwen3.5-Claude reasoning distillation and HauhauCS's aggressive uncensored versions gaining significant traction. **Quantization remains critical infrastructure**: Unsloth's GGUF conversions of Gemma 4 models are among the most downloaded, enabling local deployment. Notably, **multimodal capabilities are becoming table stakes**—the "any-to-any" Gemma-4-E4B and video-to-video models signal a shift beyond text-centric AI. Chinese labs (Zhipu, Baidu, Tencent, Alibaba) continue robust open-weight releases, challenging Western model dominance.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 1,457 | 1,106,883 | Flagship instruction-tuned multimodal LLM with vision capabilities, leading weekly engagement. |
| [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 730 | 1,300 | Zhipu's latest MoE architecture with DSA optimization, representing China's frontier open-weight efforts. |
| [dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 783 | 44,246 | Abliterated/uncensored Gemma 4 variant for MLX, tapping demand for unfiltered local inference. |
| [prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf) | prism-ml | 520 | 59,633 | Extreme 1-bit quantization enabling runnable LLMs on minimal hardware, pushing efficiency boundaries. |
| [nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4) | nvidia | 310 | 291,523 | NVIDIA's FP4-optimized official variant, showcasing hardware-native quantization for Hopper/Blackwell. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) | google | 505 | 622,963 | "Any-to-any" native multimodal model—text, image, audio in unified architecture, signaling next-gen modality fusion. |
| [google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it) | google | 537 | 835,825 | Mid-size vision-language model balancing capability and deployability for production multimodal apps. |
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | Jackrong | 2,505 | 560,798 | **Top-liked model this week**—distilled reasoning from Claude 4.6 Opus into open Qwen3.5, democratizing frontier reasoning. |
| [netflix/void-model](https://huggingface.co/netflix/void-model) | netflix | 645 | 0 | Video-to-video inpainting for object removal, representing enterprise media AI entering open-source. |
| [baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR) | baidu | 1,127 | 41,667 | Production-grade vision-language OCR from Baidu, strong enterprise interest despite lower download velocity. |
| [Hcompany/Holo3-35B-A3B](https://huggingface.co/Hcompany/Holo3-35B-A3B) | Hcompany | 254 | 1,829 | Qwen3.5-MoE based multimodal model, emerging architecture for efficient vision-language inference. |
| [openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2) | openbmb | 431 | 605 | OpenBMB's multilingual TTS, continuing their speech research lineage with improved prosody control. |
| [k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice) | k2-fsa | 395 | 144,864 | Zero-shot multilingual voice cloning with strong open-source community adoption for TTS applications. |
| [CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026) | CohereLabs | 834 | 144,435 | Cohere's latest ASR release, competitive Whisper alternative with strong multilingual performance. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [tencent/HY-OmniWeaving](https://huggingface.co/tencent/HY-OmniWeaving) | tencent | 237 | 0 | Research-preview diffusion architecture with dual arXiv citations, signaling upcoming generation capabilities. |
| [kai-os/Carnice-9b](https://huggingface.co/kai-os/Carnice-9b) | kai-os | 124 | 2,329 | Hermes-agent fine-tuned Qwen3.5 for tool use and autonomous agent workflows, niche but growing category. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) | unsloth | 354 | 992,783 | Near 1M downloads—Unsloth's efficient GGUF conversion enabling local 26B multimodal inference. |
| [unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF) | unsloth | 239 | 686,025 | Full-size Gemma 4 GGUF, proving demand for largest feasible local models. |
| [unsloth/gemma-4-E4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF) | unsloth | 193 | 634,015 | Any-to-any model quantized, ambitious attempt at multimodal local deployment. |
| [HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,061 | 796,814 | High-engagement uncensored Qwen fine-tune, 796K downloads shows strong demand for unfiltered small models. |
| [HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 200 | 193,995 | Extending uncensored approach to Gemma 4's multimodal architecture, niche but notable. |
| [Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF) | Jackrong | 228 | 64,274 | Reasoning-enhanced Qwen3.5 in GGUF, combining distillation with local deployment. |
| [Jackrong/Qwopus3.5-9B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-v3-GGUF) | Jackrong | 228 | 76,914 | Efficient reasoning model for consumer hardware, practical accessibility focus. |

---

## 3. Ecosystem Signal

**Gemma 4 has achieved ecosystem dominance** in a way reminiscent of Llama 2-3's peak, with Google releasing a coherent family (2B/4B/9B/12B/26B/31B) spanning edge to data center. The "A4B" (4B active/26B total) and "E4B" (any-to-any) variants show sophisticated MoE and multimodal engineering. However, **community activity reveals user priorities**: uncensored variants, reasoning distillation, and aggressive quantization consistently outperform official models in engagement metrics.

**Chinese open-weight models are now fully competitive**—Qwen3.5 and GLM-5.1 appear alongside Western models without "alternative" framing. The Jackrong and HauhauCS fine-tune ecosystems demonstrate that **open-weight infrastructure enables rapid capability transfer** from proprietary systems (Claude 4.6 Opus reasoning) to deployable formats.

**Quantization is no longer optimization—it's primary infrastructure**. Unsloth's GGUF conversions achieve 600K-1M downloads, often exceeding base model traction. This signals a maturing market where **local/edge deployment is the default assumption**, not cloud inference. The 1-bit Bonsai-8B and NVIDIA's FP4 variants represent diverging paths: extreme compression versus hardware-native precision.

**Multimodal convergence** is the architectural story. "Image-text-to-text" dominates pipelines; "any-to-any" emerges as the new frontier. Even specialized models (OCR, TTS, ASR) increasingly use unified vision-language backbones rather than task-specific architectures.

---

## 4. Worth Exploring

| Model | Why Explore |
|-------|-------------|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | **Highest engagement model this week** (2,505 likes)—represents a significant capability transfer from proprietary to open weights. If reasoning distillation scales as suggested, this enables Claude-level chain-of-thought without API dependency. Worth benchmarking against o3-mini and Gemini 2.5 Flash on reasoning benchmarks. |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | The "any-to-any" architecture is the most ambitious multimodal design currently available open-weight. Unlike vision-language models that bolt image encoders onto text decoders, E4B's native multimodal training suggests more robust cross-modal reasoning. Critical for researchers studying whether unified architectures outperform composed systems. |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | 1-bit quantization at 8B scale tests the practical floor of model compression. If quality remains viable, this enables smartphone-native LLM inference without NPU dependency. Important for accessibility in low-resource contexts and for understanding how far quantization can extend before capability collapse. |

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*