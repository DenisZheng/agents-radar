# Hugging Face Trending Models Digest 2026-07-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-28 01:57 UTC

---

# Hugging Face Trending Models Digest — 2026-07-28

---

## 1. Today's Highlights

Moonshot AI's **Kimi-K3** leads the weekly likes chart (6.3K) as a flagship multimodal model, while **Z.ai's GLM-5.2** demonstrates massive adoption with 1M+ downloads. The **Qwen3.6-35B-A3B** family dominates community activity—spawning over half a dozen fine-tunes, GGUF quantizations, and NVFP4 variants—signaling strong open-weight momentum around MoE architectures. Microsoft continues diversifying with **Mage-Flow** (text-to-image) and **Fara1.5** (computer-use agent), while OCR specialization surges with Baidu's **Unlimited-OCR** (2.6M downloads) and **OvisOCR2**. Quantization innovation is accelerating: ternary (2-bit), 1-bit, and NVFP4 formats now appear alongside standard GGUF releases.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,551 | 1,003,547 | Massive MoE LLM with DSA attention; leading open-weight Chinese/English model with conversational strength. |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 629 | 3,761 | 250B parameter open LLM; notable for scale and Upstage's enterprise-grade training pipeline. |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 758 | 63,605 | Code-specialized LLM from Poolside; base for multiple quantization variants trending this week. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 493 | 16,518 | Compact 3B model optimized for Chinese/English bilingual tasks; efficient deployment profile. |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 207 | 6,421 | Security-focused 1B Granite-MoE hybrid; targeted at threat detection and safety classification. |
| [Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 199 | 2,532 | Feature-extraction oriented LLM; early beta with novel architecture hints. |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 242 | 5,312 | Qwen3.5-MoE based coding specialist; image-text-to-text pipeline for multimodal code tasks. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 6,297 | 2,850 | Flagship multimodal model; compressed-tensors format, leading weekly likes by wide margin. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,332 | 2,645,773 | Production-grade OCR with 2.6M downloads; document understanding at massive scale. |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,604 | 36,196 | Conversational multimodal model; strong image-text-to-text reasoning capabilities. |
| [microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 388 | 1,691 | Text-to-image diffusion with editing capabilities; diffusers-based, instruction-following. |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 150 | 1,406 | Qwen3.5-based computer-use agent; vision-language model for GUI automation. |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,323 | 695,744 | Code-specialized multimodal variant; compressed-tensors, high download velocity. |
| [baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 124 | 2,276 | NVFP4-quantized vision-language version of GLM-5.2; optimized for sglang serving. |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 327 | 42,152 | Qwen3.5-based OCR specialist; document and scene text extraction focus. |
| [microsoft/Mage-Flow-Edit-Turbo](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo) | microsoft | 102 | 1,115 | Instruction-based image editing; image-to-image diffusion for precise manipulations. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 223 | 483 | Edge-ready TTS; CPU-optimized speech synthesis for local deployment. |
| [nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 133 | 33,127 | Edge-optimized world model; diffusers-based, targeting robotics/physical AI. |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 556 | 0 | LoRA for identity-preserving image editing on Krea-2; ComfyUI ecosystem. |

---

### 🔧 Specialized Models (code, math, medical, embeddings, OCR, agents)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 242 | 5,312 | Multimodal coding assistant on Qwen3.5-MoE; handles image-to-code and repo reasoning. |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,323 | 695,744 | Code-specialized Kimi variant; compressed-tensors for efficient serving. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,332 | 2,645,773 | Industry-scale OCR; 2.6M downloads indicate production adoption. |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 327 | 42,152 | Qwen3.5-based OCR; document/table/chart extraction specialist. |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 150 | 1,406 | Computer-use agent; vision-language model for GUI navigation and automation. |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 207 | 6,421 | Security-oriented 1B MoE; threat detection and safety classification. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, NVFP4)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 754 | 634,146 | Heavily merged/uncensored Qwen3.6 27B; GGUF + Unsloth, maximal fine-tune branding. |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 218 | 117,456 | Unsloth-optimized GGUF of Poolside's Laguna-S-2.1; vLLM compatible. |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,069 | 648,938 | **2-bit ternary quantization** of Bonsai-27B; llama.cpp, extreme compression research. |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 659 | 2,257,928 | **1-bit quantized** 27B model; 2.2M downloads show strong demand for ultra-compressed LLMs. |
| [poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 154 | 85,554 | Official GGUF release from Poolside; endpoints compatible, US region. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,133 | 1,894,395 | Uncensored MoE vision

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*