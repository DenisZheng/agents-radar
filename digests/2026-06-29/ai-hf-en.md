# Hugging Face Trending Models Digest 2026-06-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-29 00:40 UTC

---

# Hugging Face Trending Models Digest — June 29, 2026

---

## 1. Today's Highlights

This week's trending page is dominated by a wave of **Qwen3.5/3.6 MoE models** and aggressive community quantization activity, with HauhauCS's uncensored Qwen3.6-35B-A3B GGUF racking up a staggering 3.2M downloads. **Baidu's Unlimited-OCR** debuts as a strong multimodal contender with 1,230 likes, while **NVIDIA** pushes optimized NVFP4 variants of both GLM-5.2 and Qwen3.6-35B-A3B into the ecosystem. The **Ornith-1.0 family** from deepreinforce-ai spans an impressive 9B to 397B parameter range, signaling growing appetite for open-weight MoE architectures. Meanwhile, **Krea-2** image generation models and **fal's LTX-2.3-3DREAL-LoRA** hint at accelerating text-to-video momentum.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, Chat, Instruction-Tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 2,816 | 118,651 | Flagship MoE+DSA architecture text-generation model, the most-liked model this week, signaling strong community interest in ZAI's latest foundation model. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | empero-ai | 525 | 52,492 | 9B parameter Qwen3.5-based model fine-tuned on Claude-generated mythos/reasoning data with 1M context length. |
| [Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B) | Qwen | 398 | 23,697 | Qwen's own 35B-A3B MoE agentic model, purpose-built for tool-use and multi-step reasoning tasks. |
| [deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B) | deepreinforce-ai | 203 | 19,635 | Mid-range MoE model in the Ornith family, Qwen3.5-MoE based with image-text-to-text capability. |
| [deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B) | deepreinforce-ai | 233 | 5,814 | Compact 9B variant of the Ornith family, MIT-licensed and endpoints-compatible for easy deployment. |
| [deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B) | deepreinforce-ai | 145 | 1,116 | Massive 397B MoE flagship in the Ornith family, pushing the scale frontier for open-weight models. |
| [deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | deepseek-ai | 178 | 373 | DeepSeek's V4 Pro variant with DSpark optimization, early-stage release with limited downloads so far. |
| [deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark) | deepseek-ai | 76 | 24 | Lightweight flash variant of DeepSeek-V4, likely optimized for inference speed. |
| [Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable) | Chunjiang-Intelligence | 124 | 1,409 | DeepSeek-V4 fine-tune specialized for cybersecurity applications. |
| [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B) | WeiboAI | 743 | 59,337 | Compact 3B reasoning model from WeiboAI, Qwen2-based and math-focused with strong engagement. |
| [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | microsoft | 369 | 6,779 | Microsoft's 4B SFT model optimized for fast context processing with Explorer SubAgent capabilities. |
| [LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M) | LiquidAI | 141 | 12,384 | Ultra-compact 230M parameter model from LiquidAI, targeting edge and on-device deployment. |

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 1,230 | 295,064 | Baidu's high-performance OCR model for unlimited document/image text extraction, a major multimodal debut. |
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 2,434 | 646,451 | NVIDIA's 3B image-feature-extraction model for object localization, the second most-liked model this week. |
| [krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo) | krea | 354 | 27,631 | Turbocharged text-to-image generation model, optimized variant of Krea-2 for faster inference. |
| [krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw) | krea | 229 | 22,622 | Base Krea-2 text-to-image model, the foundation for the Turbo variant. |
| [Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2) | Comfy-Org | 175 | 10 | ComfyUI-native integration of Krea-2 for node-based image generation workflows. |
| [fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA) | fal | 95 | 0 | LoRA adapter for LTX-2.3 video model tuned on 3D-realistic content, pushing text-to-video quality. |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 734 | 67,419 | NVIDIA's streaming ASR model at 0.6B parameters, optimized for real-time speech recognition. |

### 🔧 Specialized Models (Code, Math, Domain-Specific)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 795 | 831,529 | GGUF-quantized version of Qwythos-9B, the single most-downloaded model this week, optimized for local reasoning. |
| [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | yuxinlu1 | 2,471 | 549,926 | Gemma-4 12B fine-tuned for coding with Fable5/Composer2.5 data, the most-liked GGUF model this week. |
| [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 792 | 225,822 | Agentic variant of the Gemma-4 12B coder, tuned for terminal/tool-use tasks with tau2 scaling. |

### 📦 Fine-tunes & Quantizations (Community GGUF, NVFP4, Optimized)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,302 | 3,248,724 | Uncensored GGUF of Qwen3.6-35B-A3B — the most-downloaded model on the entire list by a wide margin. |
| [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | nvidia | 371 | 5,235,413 | NVIDIA's NVFP4-quantized Qwen3.6-35B-A3B, the single most-downloaded model this week at 5.2M downloads. |
| [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) | unsloth | 442 | 146,023 | Unsloth-optimized GGUF quantization of GLM-5.2 for efficient local deployment. |
| [nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4) | nvidia | 154 | 45,762 | NVIDIA Model Optimizer NVFP4 variant of GLM-5.2 for GPU-optimized inference. |
| [deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | deepreinforce-ai | 408 | 79,630 | GGUF quantization of Ornith-1.0-35B for CPU/local inference. |
| [deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF) | deepreinforce-ai | 273 | 36,846 | GGUF quantization of the compact Ornith-1.0-9B model. |
| [unsloth/Qwen-AgentWorld-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen-AgentWorld-35B-A3B-GGUF) | unsloth | 95 | 79,503 | Unsloth GGUF variant of Qwen's AgentWorld model for local agentic deployment. |
| [HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced) | HauhauCS | 100 | 40,820 | QAT-quantized uncensored Gemma-4 12B with vision/multimodal support, balanced safety profile. |

---

## 3. Ecosystem Signal

The June 29 trending page reveals several converging dynamics in the open-weight ecosystem. **MoE architectures are clearly the dominant paradigm** — Qwen3.5/3.6 MoE, GLM-5.2 (MoE+DSA), and the Ornith family all leverage mixture-of-experts designs, reflecting the community's pursuit of strong performance at manageable inference cost. **Qwen's ecosystem is expanding rapidly**, with official models (Qwen-AgentWorld), NVIDIA-optimized NVFP4 variants, and a thriving uncensored/quantized community all trending simultaneously.

**Quantization activity is at an all-time high.** The top two most-downloaded models are GGUF/NVFP4 variants (HauhauCS's uncensored Qwen3.6 at 3.2M and NVIDIA's NVFP4 Qwen3.6 at 5.2M), demonstrating that the community prioritizes deployable, locally-runnable models over raw checkpoints. Unsloth and NVIDIA's Model Optimizer are the key quantization infrastructure providers, while community creators like HauhauCS and yuxinlu1 are driving massive download volume through specialized fine-tunes.

**Open-weight models are holding their own against proprietary offerings.** With DeepSeek-V4, GLM-5.2, and Qwen3.6 all trending alongside strong community derivatives, the gap between open and closed capabilities continues to narrow. The emergence of specialized models — cybersecurity (DeepSeek-v4-Fable), OCR (UnlocateAnything), ASR (nemotron-3.5), and agentic tool-use (AgentWorld, VibeThinker) — signals maturation beyond general-purpose chat toward domain-optimized deployments.

---

## 4. Worth Exploring

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — The most-liked model this week (2,816 likes) and a genuine architectural innovation with its MoE+DSA (Dynamic Sparse Attention) design. Worth studying for anyone interested in next-generation LLM architectures that balance efficiency and capability. The strong community quantization response (unsloth GGUF, NVIDIA NVFP4) confirms its significance.

2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — A high-quality OCR model from Baidu with 295K downloads in its debut week. For production document processing, multimodal pipelines, or RAG systems requiring robust text extraction, this is a compelling new option in a space that has lacked strong open-weight contenders.

3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — NVIDIA's 2,434-liked object localization model bridges the gap between vision understanding and actionable spatial reasoning. At 3B parameters with 646K downloads, it's practical for real-world deployment and worth evaluating for robotics, AR, or any application requiring precise image-grounded localization.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*