# Hugging Face Trending Models Digest 2026-04-05

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-05 00:11 UTC

---

# Hugging Face Trending Models Digest — April 5, 2026

---

## 1. Today's Highlights

The Gemma-4 family dominates this week's releases with Google's rollout of multimodal variants spanning 26B to 31B parameters, including experimental "any-to-any" E-series models. Community distillation efforts are accelerating, with Jackrong's Qwen3.5-Claude reasoning distillates and HauhauCS's uncensored variants capturing significant engagement. Quantization remains a major force: Unsloth's GGUF ports of Gemma-4 models are seeing massive download volumes, while 1-bit compression research from prism-ml signals continued efficiency optimization. Notably, Netflix has entered the open model space with a video inpainting model, and Cohere has expanded into speech recognition—broadening the multimodal landscape beyond text and static images.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 840 | 287,440 | Flagship instruction-tuned multimodal LLM with strong vision-language performance and broad ecosystem support. |
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | Jackrong | 2,289 | 524,224 | Community-distilled reasoning model capturing Claude-4.6 Opus capabilities at 27B parameters—highest likes this week. |
| [LiquidAI/LFM2.5-350M](https://huggingface.co/LiquidAI/LFM2.5-350M) | LiquidAI | 224 | 12,477 | Compact liquid foundation model demonstrating efficient sequence modeling with sub-billion parameter scale. |
| [chromadb/context-1](https://huggingface.co/chromadb/context-1) | chromadb | 368 | 3,417 | Chroma's first text generation model, optimized for retrieval-augmented and context-heavy applications. |
| [HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 967 | 715,586 | Aggressively uncensored 9B variant with massive download traction for unrestricted use cases. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) | google | 306 | 108,261 | Experimental "any-to-any" modality model enabling flexible input-output combinations beyond image-text. |
| [google/gemma-4-E2B-it](https://huggingface.co/google/gemma-4-E2B-it) | google | 228 | 89,983 | Smaller E-series any-to-any model for efficient multimodal experimentation. |
| [baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR) | baidu | 926 | 36,635 | Production-grade vision-language OCR with strong Chinese and multilingual document understanding. |
| [netflix/void-model](https://huggingface.co/netflix/void-model) | netflix | 304 | 0 | Netflix's entry into open video AI: object removal and inpainting for video editing workflows. |
| [CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026) | CohereLabs | 786 | 96,615 | Cohere's first open ASR model, expanding their portfolio beyond text into audio understanding. |
| [mistralai/Voxtral-4B-TTS-2603](https://huggingface.co/mistralai/Voxtral-4B-TTS-2603) | mistralai | 660 | 5,096 | Compact multilingual TTS from Mistral with vLLM inference support for real-time applications. |
| [k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice) | k2-fsa | 172 | 20,345 | Zero-shot multilingual voice cloning with efficient open-source deployment. |
| [Hcompany/Holo3-35B-A3B](https://huggingface.co/Hcompany/Holo3-35B-A3B) | Hcompany | 215 | 1,302 | Qwen3.5-MoE based multimodal model with 35B active parameters for vision-language tasks. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [microsoft/harrier-oss-v1-0.6b](https://huggingface.co/microsoft/harrier-oss-v1-0.6b) | microsoft | 155 | 9,362 | Qwen3-based embedding model optimized for MTEB benchmarks and retrieval tasks. |
| [microsoft/harrier-oss-v1-270m](https://huggingface.co/microsoft/harrier-oss-v1-270m) | microsoft | 122 | 9,001 | Ultra-efficient 270M parameter embeddings from Microsoft's new Harrier series. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF) | Jackrong | 502 | 241,087 | GGUF-quantized v2 of the popular Claude distillation for local inference. |
| [unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF) | unsloth | 162 | 273,734 | Unsloth's optimized GGUF port of Gemma-4 31B—highest downloads in this category. |
| [unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) | unsloth | 216 | 301,284 | Efficient MoE-quantized variant of Gemma-4 26B with massive deployment traction. |
| [unsloth/gemma-4-E4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF) | unsloth | 122 | 203,879 | Any-to-any model quantization enabling local multimodal experimentation. |
| [prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf) | prism-ml | 383 | 32,930 | Extreme 1-bit quantized 8B model pushing efficiency boundaries for edge deployment. |
| [prism-ml/Bonsai-8B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-8B-mlx-1bit) | prism-ml | 136 | 16,936 | Apple MLX-native 1-bit variant for efficient Mac and iOS inference. |
| [HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,168 | 676,494 | High-engagement uncensored MoE model with strong vision capabilities. |
| [nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4) | nvidia | 162 | 44,171 | NVIDIA's FP4-optimized Gemma-4 leveraging Hopper/Blackwell hardware acceleration. |
| [Jackrong/Qwopus3.5-9B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-v3-GGUF) | Jackrong | 170 | 30,569 | Compact reasoning-focused Qwen3.5 quantization for resource-constrained environments. |
| [Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF) | Jackrong | 157 | 25,979 | Larger reasoning variant with GGUF optimization for local deployment. |

---

## 3. Ecosystem Signal

**Gemma-4 emerges as the dominant open-weight family**, with Google releasing a coordinated spectrum of base, instruction, and experimental any-to-any variants. The rapid GGUF porting by Unsloth—achieving 778K+ combined downloads across three models—demonstrates how quantization infrastructure now operates at launch velocity. This creates a two-tier ecosystem: official releases for research and cloud deployment, with community-optimized variants for local inference.

**Qwen3.5 has become the substrate of choice for community innovation**. Jackrong and HauhauCS together account for four of the top ten models by likes, specializing in reasoning distillation and uncensored fine-tunes respectively. The "Claude-4.6 Opus Reasoning Distilled" naming convention signals a maturing distillation culture—explicitly branding teacher-model capabilities rather than obscuring origins.

**Modality expansion is accelerating**: Cohere's ASR entry, Netflix's video model, and Google's any-to-any experiments suggest the "multimodal" category is fragmenting into specialized pipelines. Meanwhile, 1-bit quantization (prism-ml) and NVIDIA's FP4 optimizations indicate hardware-aware compression is becoming as important as architecture innovation. The zero-download Netflix model and Tencent's arXiv-tagged release suggest pre-release positioning is increasingly common.

---

## 4. Worth Exploring

**[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** — Highest engagement (2,289 likes) and substantial download volume indicate this is currently the most effective open reasoning model. Worth studying for distillation methodology and as a baseline for complex task evaluation.

**[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** — The "any-to-any" architecture represents a genuine modality-flexible design rather than fixed input-output pairs. Essential for researchers tracking next-generation multimodal paradigms, with [unsloth's GGUF port](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF) enabling accessible experimentation.

**[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** — 1-bit quantization at 8B scale tests the practical limits of extreme compression. With 32K+ downloads, it's attracting serious edge-deployment interest. Compare against standard 4-bit quants to assess quality-efficiency tradeoffs in production settings.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*