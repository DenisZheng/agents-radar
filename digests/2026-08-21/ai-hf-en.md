# Hugging Face Trending Models Digest 2026-08-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-21 00:55 UTC

---

# Hugging Face Trending Models Digest — 2026-08-21

## Today's Highlights
The Qwen 3.8 ecosystem dominates this week’s leaderboard, with the flagship **Qwen3.8-27B** (11.7k likes) and its MoE sibling **Qwen3.8-2.4T-A95B** anchoring a massive wave of community quantization (GGUF, FP8, NVFP4, MLX) and uncensored/abliterated fine-tunes. **Moonshot’s Kimi-K3** (10.9k likes) emerges as the strongest non-Qwen multimodal contender, while **MiniMax** secures dual modality leadership: **MiniMax-H3** (4.2k likes) for image-to-video and **MiniMax-Music3** for text-to-music. DeepSeek’s V4 series (Pro and Flash) maintains steady traction, and Lightricks’ **LTX-2.5** (1.4k likes) signals continued innovation in open video diffusion. Uncensored/abliterated variants now represent a distinct, high-demand sub-category, reflecting community appetite for less restricted models.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,745 | 1,373,584 | Flagship 27B multimodal model (image-text-to-text) leading the Qwen 3.8 family with strong conversational and vision capabilities. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,883 | 2,349,853 | Highly popular 30B-class multimodal model excelling in image-text understanding and feature extraction, compressed-tensors optimized. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,575 | 2,547,549 | Fast, efficient V4-series text-generation model optimized for latency-sensitive conversational deployment. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,121 | 14,592 | Massive Mixture-of-Experts (MoE) model with 95B active params, trained on 2.4T tokens for advanced text generation. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 679 | 43,287 | Full-capability V4 Pro model targeting high-quality text generation and reasoning tasks. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 217 | 1,713 | Community MoE (35B total, 3B active) built on Qwen 3.5 architecture for text and image-text tasks. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 154 | 348 | Tiny ASR-focused model (Qwen3-based) for on-device speech recognition. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,338 | 0 | Essential utility: corrected Jinja chat templates for Qwen/Qwen2.5/Qwen3 models across MLX/llama.cpp. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,240 | 3,308,673 | State-of-the-art image-text-to-video model; dominant open video generation backbone with diffusers support. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,416 | 611,825 | Versatile diffusion model for image-to-video, text-to-video, video-to-video in a single file. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,105 | 14,471 | Dedicated text-to-music generation model (diffusers, safetensors) expanding MiniMax into audio. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,718 | 478,622 | 30B multimodal (image-text-to-text) model positioned as a high-quality conversational vision-language model. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 652 | 380,072 | Optimized/distilled variant of MiniMax-H3 for faster image-to-video inference (t2v, i2v, r2v). |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 298 | 0 | Community fine-tune of MiniMax-H3 specialized for image-text-to-video with enhanced aesthetics. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 242 | 1,373 | Experimental image-text-to-text model from dots3 family, early preview release. |

---

### 🔧 Specialized Models (code, math, medical, embeddings, ASR)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 154 | 348 | Ultra-compact ASR model (Qwen3-based) for on-device automatic speech recognition. |

*Note: This week’s trending list lacks dedicated code/math/medical/embedding specialists; the specialization signal is concentrated in ASR (s1-mini) and video/audio generation.*

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, MLX, FP8)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,358 | 5,126,652 | Most-downloaded GGUF quantization of Qwen3.8-27B; optimized for llama.cpp/CPU/Apple Silicon. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 633 | 1,517,643 | Official FP8 quantized release from Qwen team for high-throughput GPU inference. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 713 |

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*