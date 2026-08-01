# Hugging Face Trending Models Digest 2026-08-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-01 02:10 UTC

---

# Hugging Face Trending Models Digest — 2026-08-01

---

## 1. Today's Highlights

The Hugging Face Hub is dominated by **multimodal foundation models** and **aggressive community fine-tuning of Qwen3.6**. MoonshotAI's **Kimi-K3** leads with 9.3K weekly likes, signaling strong demand for open-weight image-text models. DeepSeek-V4-Flash and GLM-5.2 demonstrate continued momentum from Chinese labs in frontier LLMs. Meanwhile, Baidu's **Unlimited-OCR** (2.5M downloads) proves production-grade specialized models drive massive adoption. The ecosystem shows a clear split: labs release base models (Kimi-K3, DeepSeek-V4, GLM-5.2, Solar-Open2), while community builders (DavidAU, HauhauCS, LuffyTheFox, unsloth) rapidly iterate GGUF quantizations and uncensored variants—especially on Qwen3.6 MoE architectures.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,923 | 2,923,499 | Flagship open-weight LLM from DeepSeek; massive download volume indicates production adoption. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,708 | 1,651,533 | Z.ai's latest MoE-DSA architecture; strong Chinese/English bilingual performance, high community trust. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,021 | 0 | July 2026 refresh of V4-Flash; arxiv:2606.19348 suggests architectural updates. |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 714 | 12,911 | 250B parameter open model; Upstage's largest release, targeting enterprise-scale reasoning. |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 863 | 76,212 | Code-specialized LLM from Poolside; strong developer mindshare for software engineering tasks. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 595 | 26,928 | Compact 3B model; efficient deployment profile with solid instruction-following. |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 326 | 869 | Agentic-search oriented MoE; built on Qwen3.5-MoE foundation for tool-use workflows. |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 352 | 579 | Lightweight Aquila variant; Qwen3.6-based for edge deployment. |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 107 | 599 | MoE fine-tune of Qwen3.6; mixture-of-experts specialization for reasoning. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,282 | 493,481 | **Top trending model**; unified image-text-to-text foundation model, compressed-tensors optimization. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,663 | 2,513,603 | Production OCR model; 2.5M downloads reflect real-world document processing deployment. |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,664 | 57,259 | Multimodal conversational model; strong image-text reasoning, growing community adoption. |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 234 | 2,726 | Qwen3.5-based vision-language model; emphasizes computer-use/agentic interaction. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 150 | 5,650 | Microsoft's multimodal base model; MIT license enables commercial use. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 348 | 1,449 | Edge-optimized TTS; CPU-friendly, local-first speech synthesis for on-device apps. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 151 | 2,481 | ArkTTS-based speech synthesis; 0.6B parameter preview for high-quality TTS. |
| [owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 121 | 802 | Ultra-compact TTS variant; targets microcontroller-class deployment. |
| [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 135 | 5,464 | BitNet-quantized ASR from VibeVoice line; 1-bit compression for speech recognition. |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 196 | 2,971 | Distilled Inkling variant; maintains multimodal capability at reduced size. |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 371 | 10,241 | Code-focused multimodal model; Qwen3.5-MoE base with image-text-to-text for visual coding. |

---

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 371 | 10,241 | Multimodal code model; handles visual programming tasks (UI→code, diagram understanding). |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 863 | 76,212 | Specialized for software engineering; strong repository-level code generation and reasoning. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,150 | 1,119,057 | **Most downloaded fine-tune**; multi-merge (Fable+Heretic+NEO), MTP, IMATRIX, GGUF—uncensored creative writing. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,205 | 1,835,931 | Aggressive uncensored MoE fine-tune; vision-capable, 1.8M downloads show uncensored demand. |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 228 | 36,180 | Official GGUF quantization of Kimi-K3; unsloth optimization for local inference. |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,125 | 712,835 | **2-bit ternary quantization**; extreme compression (llama.cpp/gguf) with retained conversational ability. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 272 | 212,426 | Hermes-style uncensored MoE merge; GGUF for consumer hardware deployment. |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 151 | 18,531 | **NVFP4 quantization** of 250B model; vLLM support, novel 4-bit floating-point format. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-M

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*