# Hugging Face Trending Models Digest 2026-08-02

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-02 02:07 UTC

---

# Hugging Face Trending Models Digest — 2026-08-02

---

## 1. Today's Highlights

Chinese labs dominate this week's trending list, with **Moonshot AI's Kimi-K3** (9.5K likes) and **Z.ai's GLM-5.2** (4.7K likes) leading a wave of high-performance open-weight multimodal and MoE models. **DeepSeek-V4-Flash** variants appear in both original and quantized forms, signaling rapid community adoption of the new architecture. Baidu's **Unlimited-OCR** (2.4M downloads) demonstrates strong demand for production-ready document understanding. The Qwen3.6 family fuels an explosion of community fine-tunes and GGUF quantizations — seven of the top 30 are Qwen3.6 derivatives — while novel quantization formats (NVFP4, ternary 2-bit) push edge deployment boundaries.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, Chat, Instruction-Tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 9,490 | 559,924 | Flagship multimodal MoE from Moonshot AI; compressed-tensors format enables efficient serving — top trending model this week. |
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 4,737 | 1,683,442 | Large MoE with DSA attention; strongest open-weight Chinese/English bilingual model by downloads, conversational focus. |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,948 | 2,814,414 | Latest DeepSeek MoE "Flash" variant; 2.8M downloads reflect massive adoption for high-throughput inference. |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek-ai | 1,431 | 15,366 | July 31 snapshot of V4 Flash; arXiv:2606.19348 documents architecture innovations. |
| **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** | upstage | 717 | 13,426 | 250B parameter open-weight LLM; depth-upscaled architecture targeting frontier performance. |
| **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | poolside | 868 | 77,021 | Code-specialized LLM from Poolside; strong on software engineering benchmarks. |
| **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** | Nanbeige | 611 | 27,892 | Compact 3B model punching above weight class; efficient for on-device deployment. |
| **[XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro)** | XYZAILab | 330 | 923 | MoE model with agentic-search capabilities; built on Qwen3.5-MoE backbone. |
| **[XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini)** | XYZAILab | 357 | 650 | Smaller Aquila variant; explores Qwen3.6 MoE scaling down. |
| **[EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2)** | EschaLabs | 112 | 875 | MoE fine-tune of Qwen3.6-35B-A3B; mixture-of-experts specialization. |
| **[LiquidAI/LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M)** | LiquidAI | 87 | 6,190 | Liquid Foundation Model encoder; fill-mask task, non-transformer architecture for efficiency. |

---

### 🎨 Multimodal & Generation (Image, Audio, Video, Text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 3,714 | 2,457,387 | Production-grade OCR/document understanding; 2.4M downloads confirm enterprise adoption for unlimited-length processing. |
| **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)** | microsoft | 172 | 10,525 | Microsoft's vision-language model; multimodal reasoning with strong OCR and chart understanding. |
| **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)** | microsoft | 242 | 2,775 | Computer-use agent model (Qwen3.5-based); executes GUI actions from screenshots + instructions. |
| **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | thinkingmachines | 1,672 | 59,076 | Compact multimodal model; conversational image-text-to-text with strong reasoning. |
| **[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)** | thinkingmachines | 213 | 3,998 | Distilled Inkling variant for edge deployment; retains multimodal chat capability. |
| **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** | owensong | 361 | 1,565 | Tiny TTS model for CPU/edge; local speech synthesis with low latency. |
| **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)** | Audio8 | 166 | 3,254 | ArkTTS-based text-to-speech; 0.6B params, feature-extraction pipeline for audio generation. |
| **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)** | microsoft | 141 | 5,835 | BitNet-quantized ASR model; ultra-low-bit speech recognition for on-device use. |
| **[lodestones/Kroma](https://huggingface.co/lodestones/Kroma)** | lodestones | 95 | 0 | LoRA for Krea text-to-image; ComfyUI-compatible style adaptation. |

---

### 🔧 Specialized Models (Code, Math, Agents, Embeddings)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*