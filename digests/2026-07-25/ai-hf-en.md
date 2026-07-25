# Hugging Face Trending Models Digest 2026-07-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-25 02:04 UTC

---

# Hugging Face Trending Models Digest — 2026-07-25

---

## 1. Today's Highlights

The Qwen 3.6 family dominates this week's trending list, with the official **Qwen/Qwen3.6-35B-A3B** (2.5K likes, 6.5M downloads) anchoring a massive ecosystem of community fine-tunes and quantizations — including uncensored variants from HauhauCS, DavidAU, and LuffyTheFox that collectively exceed 5M downloads. **Z.ai's GLM-5.2** leads all models with 4.4K likes, signaling strong adoption for its MoE-DSA architecture. **Google's Gemma-4-31B-it** debuts with 3.4K likes and 12.6M downloads, reinforcing the open-weight frontier model race. OCR-specialized models surge: **baidu/Unlimited-OCR** tops 3K likes and 2.5M downloads, while **ATH-MaaS/OvisOCR2** adds another 30K downloads. Quantization innovation accelerates — prism-ml pushes 1-bit and 2-bit LLMs, while baseten and poolside deploy NVFP4 for efficient inference.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 4,416 | 667,403 | MoE-DSA architecture LLM leading weekly likes; strong conversational and reasoning performance. |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 3,360 | 12,629,921 | Google's latest open-weight instruction-tuned model; multimodal, massive download velocity. |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 2,503 | 6,460,680 | Flagship Qwen 3.6 MoE model; foundation for dozens of community fine-tunes and quantizations. |
| **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** | upstage | 542 | 1,106 | 250B-parameter open LLM; early release with limited downloads but high architectural interest. |
| **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | poolside | 612 | 28,992 | Code-specialized LLM; multiple quantization variants (GGUF, NVFP4) trending in parallel. |
| **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** | Nanbeige | 372 | 8,169 | Compact 3B Chinese/English bilingual model gaining traction for edge deployment. |
| **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** | fdtn-ai | 149 | 4,266 | GraniteMoE-hybrid 1B model focused on security applications; small but specialized. |
| **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** | Motif-Technologies | 185 | 2,108 | Feature-extraction oriented LLM; early beta with niche research interest. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 3,014 | 2,500,391 | General-purpose OCR model; highest-download multimodal model this week, production-ready. |
| **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | thinkingmachines | 1,546 | 27,883 | Conversational image-text-to-text model; strong multimodal reasoning for document understanding. |
| **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** | microsoft | 235 | 891 | Text-to-image and editing pipeline via diffusers; early release with research focus. |
| **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | ATH-MaaS | 276 | 30,292 | Qwen2.5-based OCR specialist; rapid adoption for document digitization workflows. |
| **[baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4)** | baseten | 90 | 494 | NVFP4-quantized vision variant of GLM-5.2; showcases efficient multimodal deployment. |
| **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | conradlocke | 532 | 0 | LoRA for Krea-2 identity-preserving image editing; ComfyUI integration, zero downloads but high likes. |
| **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)** | nvidia | 112 | 30,303 | Edge-optimized world model from NVIDIA; diffusers-based, targeting robotics/simulation. |

---

### 🔧 Specialized Models (code, math, medical, embeddings, robotics, ASR)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | moonshotai | 1,263 | 756,668 | Code-specialized multimodal model; compressed-tensors format, strong agentic coding benchmarks. |
| **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** | Kwaipilot | 125 | 396 | Qwen3.5-MoE based coder; early dev release with image-text-to-text capability for visual coding. |
| **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** | openbmb | 173 | 559 | Vision-language-action model for robotic manipulation; MiniCPM-VLA architecture. |
| **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** | openbmb | 123 | 349 | Robot tracking VLA model; companion to RobotManip for embodied AI pipelines. |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 937 | 797,525 | Streaming ASR model; 0.6B params, NeMo-based, production-grade for real-time transcription. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, NVFP4)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 3,069 | 2,057,103 | Uncensored Qwen 3.6 MoE fine-tune; GGUF, vision-capable, highest-download community variant. |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero-ai | 2,455 | 1,906,539 | Reasoning-focused Qwen3.5 fine-tune; GGUF quantized, 5.1M token training, strong logic benchmarks. |
| **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | prism-ml | 632 | 2,028,115 | 1-bit quantized LLM via llama.cpp; extreme compression with conversational capability retained. |
| **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | prism-ml | 1,006 | 595,415 | 2-bit ternary quantization; pushes ultra-low-bit LLM inference further. |
| **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU | 486 | 407,421 | Heavily merged/fused Qwen 3.6 fine-tune; Unsloth-trained, GGUF, uncensored, creative writing focus. |
| **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)** | unsloth | 170 | 57,536 | Unsloth-optimized GGUF quantization of poolside's code LLM; vLLM compatible. |
| **[poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF)** | poolside | 133 | 62,092 | Official GGUF release from poolside; endpoints compatible, US region. |
| **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)** | poolside | 129 |

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*