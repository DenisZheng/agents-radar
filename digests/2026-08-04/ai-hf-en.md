# Hugging Face Trending Models Digest 2026-08-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-04 01:55 UTC

---

# Hugging Face Trending Models Digest — 2026-08-04

---

## 📌 Today's Highlights

Chinese AI labs dominate this week's leaderboard, with **Moonshot AI's Kimi-K3** (9.8K likes) establishing a new multimodal frontier. **DeepSeek-V4-Flash** variants collectively exceed 4K likes, signaling strong adoption of their latest MoE architecture. **Z.ai's GLM-5.2** (4.8K likes) and **Baidu's Unlimited-OCR** (2.6M downloads) demonstrate the shift toward production-ready, specialized models. Meanwhile, **MiniMax-H3** spawns an entire ecosystem of video-generation derivatives, and community fine-tunes of Qwen3.6 MoE models flood the uncensored/aligned niche.

---

## 🏷️ Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,854 | 967,622 | Flagship multimodal MoE model; leads weekly likes with strong vision-language reasoning. |
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,798 | 2,180,509 | Large MoE LLM (GLM-MoE-DSA) optimized for chat and reasoning; high download velocity. |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,062 | 236,076 | Updated Flash variant of DeepSeek-V4 MoE; faster inference, strong coding/math. |
| [**deepseek-ai/DeepSeek-V4-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,991 | 2,746,291 | Base Flash release; massive downloads indicate broad production adoption. |
| [**poolside/Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 910 | 81,584 | Code-specialized LLM from Poolside; targets software engineering workflows. |
| [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 652 | 34,705 | Compact 3B model; efficient for edge deployment with strong Chinese/English bilingual performance. |
| [**amd/Instella-MoE-16B-A3B-Think**](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 149 | 2,078 | AMD-trained MoE with reasoning focus; optimized for MI300X hardware. |
| [**nota-ai/Solar-Open2-250B-Nota-NVFP4**](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 168 | 68,778 | Quantized (NVFP4) 250B MoE for vLLM deployment; extreme compression with quality retention. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 1,473 | 0 | First major image-text-to-video model on Hub; enables video generation from mixed inputs. |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,847 | 2,601,062 | Production-grade OCR model; handles arbitrary layouts/languages; highest downloads this week. |
| [**microsoft/Mage-VL**](https://huggingface.co/microsoft/Mage-VL) | microsoft | 233 | 431,487 | Vision-language model with strong document/chart understanding; Microsoft research release. |
| [**thinkingmachines/Inkling-Small**](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 264 | 8,504 | Compact multimodal model for conversational image-text tasks. |
| [**Audio8/Audio8-TTS-Preview-0.6b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 212 | 4,609 | Lightweight TTS (0.6B) based on ArkTTS architecture; edge-friendly. |
| [**owensong/Inflect-Micro-v2**](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 398 | 1,944 | Ultra-small TTS for CPU/edge; emphasizes local, privacy-preserving speech synthesis. |
| [**lodestones/Kroma**](https://huggingface.co/lodestones/Kroma) | lodestones | 159 | 0 | LoRA for Krea text-to-image; ComfyUI-native; style-transfer focus. |
| [**microsoft/Fara1.5-27B**](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 268 | 2,988 | Computer-use agent model (Qwen3.5-based); executes GUI actions from screenshots. |

---

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 445 | 14,339 | Qwen3.5-MoE based coder; optimized for agentic development workflows. |
| [**XYZAILab/XYZ-Aquila-pro**](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 351 | 1,214 | Agentic-search enhanced MoE; integrates tool use and retrieval. |
| [**EschaLabs/Qwen3.6-35B-A3B-Escha-W2**](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 156 | 2,682 | MoE fine-tune targeting reasoning/math; 35B with 3B active params. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,433 | 1,550,034 | Heavily merged/uncensored Qwen3.6 MoE; MTP + GGUF + imatrix; top community download. |
| [**unsloth/DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 429 | 69,656 | Official unsloth GGUF quant of DeepSeek-V4-Flash-0731; optimized for llama.cpp. |
| [**unsloth/Kimi-K3-GGUF**](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 282 | 128,215 | GGUF quant of Kimi-K3; enables local multimodal inference on consumer hardware. |
| [**LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 344 | 287,745 | Hermes-aligned uncensored MoE; GGUF with vision support. |
| [**DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 237 | 304,420 | Compact 9B uncensored merge; imatrix-quantized for quality retention. |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,270 | 1,895,741 | Aggressively uncensored Qwen3.6 MoE; GGUF + vision; 2nd highest community likes. |
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 448 | 2 | ComfyUI-native packaging of MiniMax-H3; enables node-based video workflows. |
| [**ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot**](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot) | ethanfel | 99 | 0 | Hybrid Qwen3-VL + MiniMax-H3 pipeline; INT8 + ConvRot quant; ComfyUI-ready. |
| [**unsloth/Kimi-K3**](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 242 | 1,324 | Unsloth-optimized safetensors version; faster training/inference prep. |

---

## 📊 Ecosystem Signal (100–200 words)

**Chinese labs now set the pace.** Moonshot, DeepSeek, Z.ai, MiniMax, and Baidu occupy 6 of the top 10 spots by likes, reflecting a concentration of open-weight innovation in China. MoE architectures dominate the LLM tier—DeepSeek-V4, GLM-5.2, Kimi-K3, and Qwen3.6 variants all use sparse expert designs—signaling industry consensus on MoE for frontier scale.  

**Video generation has arrived on Hub.** MiniMax-H3’s rapid derivative spread (Comfy-Org packaging, ethanfel’s hybrid pipeline, multiple fine-tunes) mirrors the Stable Diffusion moment for text-to-video. Expect workflow tooling (ComfyUI, Diffusers) to accelerate adoption.  

**Quantization is now a first-class release channel.** Unsloth’s same-day GGUF drops for Kimi-K3 and DeepSeek-V4-Flash, plus Nota’s NVFP4 

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*