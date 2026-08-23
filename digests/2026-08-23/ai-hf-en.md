# Hugging Face Trending Models Digest 2026-08-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-23 00:55 UTC

---

# Hugging Face Trending Models Digest — 2026-08-23

## Today's Highlights

The Qwen3.8-27B ecosystem dominates this week's trends, with the base model (12K+ likes) spawning over a dozen community quantizations, abliterations, and fine-tunes spanning GGUF, FP8, and MLX formats. Video generation surges with MiniMaxAI's MiniMax-H3 (4.3K likes, 3.9M downloads) and Lightricks' LTX-2.5 leading multimodal adoption, while DeepSeek-V4-Flash (3.6K likes) and MoonshotAI's Kimi-K3 (10.9K likes) signal continued momentum for Chinese lab frontier models. Community effort is heavily concentrated on post-training modification—particularly "abliteration" (refusal removal) and MTP (multi-token prediction) optimization—rather than new base model releases. Notably, official quantized releases from Qwen (FP8) and unsloth (GGUF) are outpacing many community variants in downloads, suggesting a shift toward vendor-optimized deployment artifacts.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 12,135 | 2,090,699 | Flagship 27B multimodal model driving the week's largest derivative ecosystem; strong conversational and vision capabilities. |
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 10,926 | 2,612,739 | High-performing multimodal model with compressed-tensors optimization; rapid adoption for chat and feature extraction. |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek-ai | 3,630 | 2,976,281 | Efficient Flash variant of DeepSeek-V4; leading downloads among pure text LLMs with strong conversational benchmarks. |
| **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)** | deepseek-ai | 718 | 54,566 | Pro-tier V4 release; higher capability but lower adoption than Flash, indicating preference for efficiency. |
| **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** | Qwen | 1,146 | 17,386 | Massive 95B-active MoE (2.4T params) for extreme-scale reasoning; early adoption for research workloads. |
| **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith-ai | 320 | 12,611 | Community MoE (35B total, 3B active) built on Qwen3.5 architecture; niche but active development. |
| **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)** | meta-models | 1,755 | 517,564 | 30B multimodal model from meta-models collective; strong conversational and image-text performance. |
| **[superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)** | superwhisper | 202 | 1,913 | Small ASR-focused model; early-stage but notable for audio-language integration. |
| **[empero-ai/Qwen3.8-9B-Distill](https://huggingface.co/empero-ai/Qwen3.8-9B-Distill)** | empero-ai | 165 | 9,260 | Distilled 9B variant retaining multimodal capabilities; targets edge deployment. |
| **[z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)** | z-lab | 194 | 29,705 | Speculative decoding optimization for Qwen3.8-27B; reduces latency via draft model. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4,338 | 3,899,160 | Leading open video generation model (image-text-to-video); highest downloads in multimodal category. |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 1,565 | 694,670 | Versatile diffusion model supporting image-to-video, text-to-video, and video-to-video; single-file deployment. |
| **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** | MiniMaxAI | 1,182 | 16,644 | Text-to-music generation with diffusers support; niche but growing creative adoption. |
| **[TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max)** | TenStrip | 316 | 0 | Fine-tune of MiniMax-H3 for enhanced video generation; zero downloads suggests early/private release. |

### 🔧 Specialized Models (code, math, medical, embeddings, utilities)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 1,397 | 0 | Critical utility: corrected Jinja chat templates for Qwen3.5/3.8; high likes reflect widespread template issues. |
| **[LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler)** | LBH-123-AI | 159 | 0 | Latent upscaler for MiniMax-H3 pipeline; utility component for video quality enhancement. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, abliterations)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 2,625 | 6,320,542 | Official unsloth GGUF quantization; highest downloads overall, de facto standard for local deployment. |
| **[Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8)** | Qwen | 664 | 2,306,777 | Vendor FP8 quantization; 2.3M downloads show strong enterprise/hardware adoption. |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter | 886 | 34,909 | MLX-format abliterated version for Apple Silicon; leads MLX category. |
| **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter | 990 | 142,846 | Community FP8 abliteration; high downloads indicate demand for uncensored FP8. |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS | 531 | 164,950 | Multi-format (MLX, safetensors, GGUF) abliteration; broad compatibility focus. |
| **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | HauhauCS | 485 | 486,221 | Aggressive MTP (multi-token prediction) + uncensored GGUF; high downloads for specialized optimization. |
| **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti | 623 | 1,223,422 | Popular uncensored GGUF with MTP; 1.2M downloads show strong community trust. |
| **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter | 336 | 85,371 | Additional orcarouter GGUF abliteration; consistent contributor to uncensored ecosystem. |
| **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** | huihui-ai | 254 | 635,416 | Well-adopted abliterated GGUF; significant downloads for mid-tier likes. |
| **[ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF)** | ornith-ai | 232 | 173,935 | GGUF quantization of community MoE; MIT license enables commercial use. |
| **[huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated)** | huihui-ai | 246 | 21,612 | Full-precision abliterated version; lower downloads than GGUF counterpart. |
| **[empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF)** | empero-ai | 245 | 97,247 | Ridge-optimized GGUF quantization; targets specific hardware profiles. |
| **[DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU | 191 | 176,969 | Complex fine

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*