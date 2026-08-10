# Hugging Face Trending Models Digest 2026-08-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-10 01:13 UTC

---

# Hugging Face Trending Models Digest — 2026-08-10

## 🎯 Today's Highlights
The MiniMax-H3 video generation ecosystem dominates this week’s trends, spawning over a dozen ComfyUI ports, LoRAs, and quantized variants within days of release. Chinese labs continue to lead open-weight multimodal innovation: Moonshot’s Kimi-K3 (10.4K likes) and Z.ai’s GLM-5.2 (2.5M downloads) showcase MoE-powered chat/ vision models, while Baidu’s Unlimited-OCR (2.9M downloads) signals production-grade document understanding. Community fine-tuning culture has matured into fusion pipelines—Heretic, Fable, and Hermes merges on Qwen3-VL/3.6 bases—while quantization (GGUF, NVFP4, INT8) is now a first-class release artifact. Safety tooling emerges with Mistral’s Shieldstral-1.0-3B, and NVIDIA’s Nemotron VoiceChat pushes real-time voice agents.

---

## 📊 Trending Models by Category

### 🧠 Language Models (LLMs, Chat, Instruction-Tuned)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 10,399 | 1,456,459 | Flagship multimodal MoE from Moonshot; compressed-tensors release enables efficient inference for image-text reasoning. |
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 4,914 | 2,488,397 | GLM MoE-DSA architecture; massive download velocity indicates strong adoption for Chinese/English chat and tool use. |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek-ai | 2,945 | 868,576 | Latest Flash iteration—speed-optimized DeepSeek V4 with conversational competence; unsloth GGUF already available. |
| **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** | LiquidAI | 452 | 85,651 | Liquid Foundation Model 2.5; non-transformer architecture offering sub-quadratic scaling for long-context tasks. |
| **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** | Kwaipilot | 552 | 18,574 | Qwen3.5-MoE based code specialist; targets agentic coding with image-text-to-text capability for repo-context. |
| **[inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash)** | inclusionAI | 245 | 4,747 | Bailing-hybrid flash model; custom code release for low-latency conversational deployment. |
| **[mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B)** | mistralai | 211 | 5,651 | Dedicated safety/guardrail model; vLLM-ready for content moderation pipelines. |
| **[deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview)** | deepgrove | 289 | 1,089 | Mixture-of-Experts causal LM preview; early research release exploring sparse scaling. |
| **[endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1)** | endless-frontier | 123 | 482 | Qwen3.5-MoE conversational variant; community MoE experiment. |

---

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 3,245 | 35,295 | SOTA image-text-to-video diffusion; native I2V/T2V/R2V with strong motion consistency—ecosystem anchor. |
| **[black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev)** | black-forest-labs | 14,059 | 487,171 | Rectified flow transformer for text-to-image; remains the open-weight quality benchmark. |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 3,986 | 2,889,062 | Production OCR model handling arbitrary layouts/languages; feature-extraction pipeline for document AI. |
| **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)** | microsoft | 323 | 461,150 | Multimodal LLM with strong image-text reasoning; research-grade vision-language alignment. |
| **[lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)** | lightx2v | 233 | 6,117 | Distilled Turbo variant for faster I2V/T2V; diffusers-compatible. |
| **[Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot)** | Abiray | 155 | 511,473 | Heavily quantized (NVFP4/INT4/INT8) MiniMax-H3 with ConvRot; enables consumer GPU deployment. |
| **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)** | Audio8 | 333 | 13,132 | ArkTTS-based 0.6B text-to-speech; lightweight streaming audio generation. |
| **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)** | nvidia | 260 | 543 | Unified voice chat model (ASR+LLM+TTS); research release for real-time conversational agents. |

---

### 🔧 Specialized Models (Code, Math, Medical, Embeddings, Safety)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** | Kwaipilot | 552 | 18,574 | Code-specialized Qwen3.5-MoE with multimodal repo understanding. |
| **[mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B)** | mistralai | 211 | 5,651 | Safety classifier for guardrailing LLM outputs; vLLM integration ready. |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 3,986 | 2,889,062 | Document understanding / OCR at scale. |
| **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)** | nvidia | 260 | 543 | End-to-end voice conversational agent. |
| **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)** | Audio8 | 333 | 13,132 | Lightweight TTS for on-device/streaming use. |

---

### 📦 Fine-tunes & Quantizations (Community Merges, GGUF, AWQ, ComfyUI)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** | Comfy-Org | 1,073 | 4,947,943 | Official ComfyUI single-file port; 4.9M downloads show immediate ecosystem adoption. |
| **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU | 1,808 | 2,390,692 | Massive multi-merge (Fable+Heretic+Hermes) on Qwen3.6-27B; uncensored GGUF for local chat. |
| **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)** | unsloth | 627 | 188,761 | Day-one GGUF quantization via unsloth; enables CPU/MPS inference. |
| **[realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs)** | realrebelai | 188 | 160,747 | GGUF quantization stack for MiniMax-H3 (base: Comfy-Org port); ComfyUI-ready. |
| **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF)** |

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*