# Hugging Face Trending Models Digest 2026-08-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-17 00:53 UTC

---

# Hugging Face Trending Models Digest — 2026-08-17

---

## 1. Today's Highlights

The Qwen3.8 family dominates this week's leaderboard, with the flagship **Qwen/Qwen3.8-27B** (10.3k likes) and its MoE counterpart **Qwen3.8-2.4T-A95B** (1k likes) anchoring a massive quantization ecosystem spanning GGUF, FP8, NVFP4, and uncensored variants. Video generation is surging: **MiniMax-H3** (4k likes, 2.3M downloads) and its Turbo/LoRA/ComfyUI derivatives collectively drive millions of downloads, while **Lightricks/LTX-2.5** (1k likes) advances unified image-to-video workflows. **Moonshot AI's Kimi-K3** (10.8k likes, 2.1M downloads) emerges as a serious multimodal contender, and **DeepSeek-V4-Flash** (3.5k likes, 1.9M downloads) confirms strong demand for efficient, high-throughput text models. Community quantizers (Unsloth, DavidAU, JonathanColetti) and ComfyUI integrators are now critical distribution layers, often exceeding upstream model downloads.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 10,283 | 267,725 | Flagship 27B multimodal LLM with image-text-to-text capability; top weekly likes signal broad adoption. |
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 10,768 | 2,136,775 | High-performing multimodal model with compressed-tensors support; rapid download growth indicates production interest. |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek-ai | 3,460 | 1,872,232 | Optimized Flash variant of DeepSeek-V4 for low-latency text generation; massive download volume reflects serving demand. |
| **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)** | meta-models | 1,630 | 292,973 | 30B image-text-to-text model with strong conversational benchmarks; active quantization ecosystem forming. |
| **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** | Qwen | 1,011 | 7,932 | Massive MoE (2.4T params, 95B active) for text generation; early adopter interest despite niche hardware needs. |
| **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)** | deepseek-ai | 536 | 21,873 | Pro-tier V4 release with enhanced reasoning; steady uptake for high-quality chat applications. |
| **[nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)** | nvidia | 291 | 196,326 | NVFP4-quantized Nemotron hybrid for efficient inference; NVIDIA hardware optimization drives downloads. |
| **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** | LiquidAI | 647 | 141,009 | Compact 2.6B Liquid Foundation Model with novel architecture; strong efficiency/performance ratio. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4,030 | 2,307,541 | Leading image-text-to-video model; ecosystem of Turbo, LoRA, GGUF, and ComfyUI ports drives massive adoption. |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 1,028 | 424,099 | Unified diffusion model for image-to-video, text-to-video, and video-to-video; single-file simplicity aids deployment. |
| **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** | MiniMaxAI | 842 | 8,639 | Text-to-music generation with diffusers support; early but growing interest in controllable audio synthesis. |
| **[lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)** | lightx2v | 557 | 239,206 | Accelerated MiniMax-H3 variant for faster image-to-video inference; community optimization gaining traction. |
| **[fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA)** | fal | 229 | 16,103 | LoRA adapter for photorealistic human video generation; showcases MiniMax-H3 fine-tuning potential. |
| **[Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B)** | Gazingstars123 | 223 | 20,860 | Text-to-image diffusion model optimized for ComfyUI; niche but active community adoption. |
| **[unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF)** | unsloth | 175 | 204,344 | GGUF-quantized MiniMax-H3 for CPU/edge video generation; extends model reach beyond GPU clusters. |

### 🔧 Specialized Models (code, math, medical, embeddings)

*No dedicated specialized models in this week's top-30; generalist multimodal and language models dominate.*

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, LoRA)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 1,455 | 1,945,635 | GGUF quantization of Qwen3.8-27B; 1.9M downloads make it the most-distributed variant. |
| **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU | 2,095 | 3,020,070 | Heavily fine-tuned + GGUF uncensored Qwen variant; 3M downloads show extreme demand for unaligned models. |
| **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** | Comfy-Org | 1,387 | 13,406,892 | ComfyUI-native MiniMax-H3 with finetunes; 13.4M downloads reveal ComfyUI as primary video-gen interface. |
| **[unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF)** | unsloth | 457 | 718,178 | GGUF port of Muse-Glimmer-30B; enables local multimodal inference on consumer hardware. |
| **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti | 211 | 183,988 | Uncensored Qwen3.8-27B in GGUF; consistent demand for alignment-removed variants. |
| **[meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF)** | meta-models | 298 | 357,877 | Official GGUF release from model authors; arXiv references indicate research transparency. |
| **[unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4)** | unsloth | 202 | 276,269 | NVFP4 quantization for NVIDIA Hopper/Blackwell; targets high-throughput inference pipelines. |
| **[larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)** | larryvrh | 776 | 0 | LoRA for MiniMax-H3-Turbo; high likes despite zero downloads suggest pre-release anticipation. |
| **[Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3)** | Comfy-Org | 151 | 0 | ComfyUI integration for MiniMax-Music3; early ecosystem building for music generation workflows. |

---

## 3. Ecosystem Signal

**Qwen3.8 and MiniMax-H3 define two parallel momentum axes.** Qwen’s 27B dense and 2.4T MoE releases have spawned a quantization Cambrian explosion: Unsloth alone provides GGUF, FP8, and NVFP4 variants, while community fine-tunes (DavidAU, JonathanColetti, orcarouter) push uncensored/abliterated versions to millions of downloads—evidence that *post-training customization now exceeds base-model interest for many practitioners*. Meanwhile, **MiniMax-H3 has become the de facto open video-generation backbone**: the upstream model (2.3M downloads) is amplified 6× by Comfy-Org’s integration (13.4M downloads), with Turbo, LoRA, and GGUF ports filling every deployment niche from cloud to edge. **Moonshot’s Kimi-K3** (10.8k likes, 2.1M downloads) signals a new credible multimodal challenger, while **DeepSeek-V4-Flash** confirms that *efficiency-optimized variants now drive more volume than flagship releases*. Quantization is no longer a footnote—Unsloth, meta-models, and Comfy-Org are first-class distributors. Open-weight models dominate the top-30; proprietary APIs are absent. The trend: **base models launch ecosystems, but community quantization, fine-tuning, and UI-native packaging (ComfyUI, GGUF, llama.cpp) determine real-world reach.**

---

## 4. Worth Exploring

1. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — The central node of the open video-generation ecosystem. Try the **Comfy-Org/MiniMax-H3** port for immediate workflow integration, or **unsloth/MiniMax-H3-GGUF** for CPU

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*