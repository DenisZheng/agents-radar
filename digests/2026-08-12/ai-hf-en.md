# Hugging Face Trending Models Digest 2026-08-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-12 01:19 UTC

---

# Hugging Face Trending Models Digest — 2026-08-12

---

## 1. Today's Highlights

The **MiniMax-H3 video generation ecosystem** dominates this week’s trends, with the base model (MiniMaxAI/MiniMax-H3) spawning 7+ community LoRAs, ComfyUI ports, and specialized variants — collectively amassing over 7M downloads. **moonshotai/Kimi-K3** leads all models with 10.5K likes, signaling strong demand for open multimodal LLMs. **DeepSeek-V4-Flash** (3.1K likes, 1M+ downloads) and **Baidu Unlimited-OCR** (4K likes, 2.8M downloads) demonstrate continued momentum for high-performance open-weight language and document-understanding models. Quantization activity is intense: unsloth has released GGUF variants for both DeepSeek-V4-Flash and Muse-Glimmer-30B, while NVIDIA pushes NVFP4-optimized Nemotron models.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 10,525 | 1,565,484 | Flagship open multimodal LLM (image-text-to-text) with compressed-tensors optimization; top-liked model this week. |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek-ai | 3,150 | 1,048,685 | Latest Flash variant of DeepSeek-V4; high-throughput text generation with massive download velocity. |
| **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU | 1,898 | 2,521,093 | Heavily merged/uncensored Qwen 27B GGUF; community fusion showcase with 2.5M downloads. |
| **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** | LiquidAI | 550 | 93,668 | Compact 2.6B Liquid Foundation Model; efficient text generation with novel architecture. |
| **[inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash)** | inclusionAI | 303 | 6,148 | Bailing-hybrid MoE model optimized for fast conversational inference. |
| **[nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)** | nvidia | 126 | 19,250 | NVFP4-quantized 30B MoE for low-latency deployment on NVIDIA hardware. |
| **[mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B)** | mistralai | 228 | 6,769 | Specialized 3B safety/guardrail model for content moderation pipelines. |
| **[endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1)** | endless-frontier | 166 | 708 | Qwen3.5-MoE based multimodal conversational model. |
| **[deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview)** | deepgrove | 332 | 2,049 | Mixture-of-Experts causal LM preview release. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 3,574 | 59,368 | Flagship image-text-to-video diffusion model; center of a 7+ variant ecosystem. |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 4,018 | 2,892,191 | Specialized document OCR/understanding model; 2.8M downloads indicate production adoption. |
| **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)** | meta-models | 1,097 | 0 | 30B multimodal (image-text-to-text) model; base for GGUF quantizations below. |
| **[lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)** | lightx2v | 340 | 20,376 | Accelerated MiniMax-H3 variant for image-to-video with 20K downloads. |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 213 | 39 | Unified video model supporting I2V, T2V, V2V, and image-text-to-video. |
| **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)** | nvidia | 325 | 653 | 11B voice chat model with multi-paper lineage (2024–2026). |
| **[fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA)** | fal | 111 | 0 | LoRA specializing MiniMax-H3 for photorealistic human generation. |
| **[SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3)** | SexGod1979 | 265 | 0 | Community fine-tune of MiniMax-H3 for text-to-video (Apache-2.0). |

---

### 🔧 Specialized Models (code, math, medical, embeddings, OCR, safety)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 4,018 | 2,892,191 | Production-grade document OCR & understanding; highest-download specialized model. |
| **[mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B)** | mistralai | 228 | 6,769 | Dedicated safety classifier for LLM guardrailing; vLLM-ready. |
| **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)** | nvidia | 325 | 653 | End-to-end voice chat model with research-backed architecture. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, ComfyUI)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** | Comfy-Org | 1,212 | 6,798,796 | **Single-file ComfyUI port** of MiniMax-H3; 6.8M downloads = de facto standard for ComfyUI video workflows. |
| **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)** | unsloth | 649 | 207,990 | GGUF quantization of DeepSeek-V4-Flash; enables local CPU/GPU inference via llama.cpp. |
| **[unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF)** | unsloth | 305 | 0 | GGUF version of Meta's 30B multimodal model. |
| **[LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF)** | LiquidAI | 201 | 111,942 | Official GGUF release of LFM2.5-2.6B for llama.cpp deployment. |
| **[meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF)** | meta-models | 202 | 0 | Meta's own GGUF quantization of Muse-Glimmer-30B. |
| **[larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)** | larryvrh | 651 | 0 | LoRA for accelerated MiniMax-H3 video generation. |
| **[Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy)** | Kijai | 276 | 0 | Alternative ComfyUI integration for MiniMax-H3. |
| **[drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI)** | drbaph | 273 | 0 | Pruned LoRA + ComfyUI adapter for MiniMax-H3 Turbo. |
| **[ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot)** | ethanfel | 458 | 0 | INT8-quantized Qwen3-VL 32B with ConvRot, ComfyUI-ready. |
| **[lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA)** | lightx2v | 129 | 353 | LoRA that rewrites prompts for better MiniMax-H3 video output. |
| **[sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-V

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*