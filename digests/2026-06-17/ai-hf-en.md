# Hugging Face Trending Models Digest 2026-06-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-17 00:44 UTC

---

# Hugging Face Trending Models Digest — June 17, 2026

---

## 1. Today's Highlights

The standout story today is **DeepSeek-V4-Pro** dominating the leaderboard with 4,896 likes and nearly 2.83 million downloads, cementing DeepSeek's continued dominance in open-weight LLMs. Google's **Gemma 4** family is making a strong showing across multiple entries — from the unified 12B instruction-tuned model to diffusion and coding variants — signaling Google's aggressive push into multimodal open models. The **Qwen 3.6 35B-A3B** MoE model is also a breakout hit with over 3.36 million downloads, reflecting intense demand for efficient, high-performance MoE architectures. Community quantization activity is surging, with **Unsloth** alone accounting for five trending GGUF releases. Meanwhile, multimodal generation continues to diversify, with entries spanning image generation (Ideogram 4), pose-driven video (SCAIL-2), and streaming ASR (NVIDIA's Nemotron).

---

## 2. Trending Models

### 🧠 Language Models (LLMs, Chat Models, Instruction-Tuned)

| Model | Author | Likes | Downloads | Summary |
|---|---|---|---|---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,896 | 2,829,747 | DeepSeek's latest flagship conversational LLM, dominating the leaderboard with massive download numbers and broad adoption. |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 2,135 | 3,360,615 | Alibaba's new MoE model with 35B total but only 3B active parameters, achieving remarkable efficiency and the highest download count on the list. |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 1,053 | 1,223,383 | Google's unified Gemma 4 12B model supporting any-to-any multimodal input, representing Google's most ambitious open-weight release to date. |
| **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)** | prefeitura-rio | 316 | 189,744 | A massive 397B MoE conversational model from Rio de Janeiro's city government — a striking example of public-sector open AI. |
| **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** | nex-agi | 308 | 4,957 | A Qwen 3.5 MoE-based multimodal model from Nex AGI, targeting both text and image understanding. |
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 296 | 0 | Zhipu AI's latest GLM MoE model with DSA (Dynamic Sparse Attention), a next-generation architecture for efficient long-context reasoning. |
| **[nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini)** | nex-agi | 227 | 9,161 | The smaller companion to Nex-N2-Pro, offering a lighter Qwen 3.5 MoE option for resource-constrained deployments. |
| **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | microsoft | 160 | 192 | Microsoft's compact 4B model fine-tuned for fast context processing in Explorer SubAgent workflows. |
| **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | WeiboAI | 172 | 0 | A small 3B reasoning model from Weibo focused on mathematical thinking, built on the Qwen 2 architecture. |

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

| Model | Author | Likes | Downloads | Summary |
|---|---|---|---|---|
| **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | google | 944 | 375,974 | Google's diffusion-based Gemma variant for image-text-to-text tasks, blending generative and understanding capabilities. |
| **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | MiniMaxAI | 1,011 | 25,064 | MiniMax's multimodal model supporting image-text-to-text workflows with a Mixture-of-Experts backbone. |
| **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | moonshotai | 800 | 102,206 | Moonshot AI's latest Kimi model optimized for code-related multimodal tasks with compressed tensor support. |
| **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram-ai | 559 | 12,466 | Ideogram's fourth-generation text-to-image model in FP8 precision, pushing photorealistic image generation quality. |
| **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)** | zai-org | 205 | 0 | Zhipu's pose-driven character animation model that converts still images into video using diffusion techniques. |
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 464 | 43,361 | A 4B-parameter text-to-speech model from Boson AI built on a Qwen 3 multimodal backbone. |
| **[Zyphra/ZONOS2](https://huggingface.co/Zyphra/ZONOS2)** | Zyphra | 99 | 539 | Zyphra's second-generation text-to-speech model, licensed under Apache 2.0 for broad commercial use. |

### 🔧 Specialized Models (Code, Math, Medical, Embeddings, ASR)

| Model | Author | Likes | Downloads | Summary |
|---|---|---|---|---|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 2,101 | 98,698 | NVIDIA's compact 3B model for image feature extraction and visual localization — the second most-liked model on the list. |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 468 | 5,777 | A tiny 0.6B streaming ASR model from NVIDIA with cache-aware architecture for real-time speech recognition. |
| **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | CohereLabs | 412 | 12,129 | Cohere's compact code generation model built on the Cohere 2 MoE architecture. |

### 📦 Fine-tunes & Quantizations (Community Fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
|---|---|---|---|---|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,887 | 2,716,651 | An uncensored, aggressively fine-tuned GGUF version of Qwen 3.6 35B-A3B — the most downloaded model on the entire list. |
| **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 | 1,160 | 60,921 | A community GGUF quantization of Gemma 4 12B fine-tuned specifically for coding and reasoning tasks. |
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 633 | 1,009,602 | Unsloth's optimized GGUF quantization of Google's Gemma 4 12B, making it accessible for local and edge deployment. |
| **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)** | DavidAU | 370 | 366,279 | An elaborate multi-dataset fine-tune of Qwen 3.6 40B with uncensored thinking and coding capabilities in GGUF format. |
| **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** | unsloth | 287 | 120,435 | Unsloth's GGUF port of Google's Diffusion Gemma 26B, enabling efficient local inference for image-text tasks. |
| **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** | OBLITERATUS | 335 | 76,044 | A fine-tuned Gemma 4 12B variant with modified safety alignments, available in both GGUF and safetensors formats. |
| **[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** | Jackrong | 218 | 79,157 | A 27B coder GGUF model with Multi-Token Prediction ( vision support, fine-tuned from the Qwen 3.6 family. |
| **[unsloth/Kimi-K2.7-Code-GGUF](https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF)** | unsloth | 119 | 16,817 | Unsloth's GGUF quantization of Moonshot's Kimi K2.7 Code for efficient local deployment. |
| **[unsloth/MiniMax-M3-GGUF](https://huggingface.co/unsloth/MiniMax-M3-GGUF)** | unsloth | 92 | 18,206 | GGUF port of MiniMax's multimodal MoE model, enabling local inference for image-text tasks. |
| **[unsloth/North-Mini-Code-1.0-GGUF](https://huggingface.co/unsloth/North-Mini-Code-1.0-GGUF)** | unsloth | 78 | 26,313 | GGUF quantization of Cohere's North Mini Code model for lightweight local coding assistance. |

---

## 3. Ecosystem Signal

The Hugging Face ecosystem in mid-2026 is defined by three converging forces. **First, MoE architectures are becoming the default.** Models like Qwen 3.6 35B-A3B, DeepSeek-V4-Pro, GLM-5.2, and multiple Nex-N2 variants all rely on Mixture-of-Experts designs, reflecting the industry's shift toward models that deliver high performance with a fraction of the active compute. The Qwen 3.6 35B-A3B's 3.36 million downloads — the highest on the list — signals that users increasingly prioritize inference efficiency over raw parameter count.

**Second, Google's Gemma 4 family is emerging as a major open-weight contender.** With five trending entries spanning unified multimodal (any-to-any), diffusion-based image understanding, coding, and community quantizations, Google is positioning Gemma as a versatile alternative to proprietary models. The unified any-to-any pipeline tag on gemma-4-12B-it is particularly notable, suggesting Google is competing directly with GPT-4o-style generality in open weights.

**Third, community quantization and fine-tuning activity is exploding.** Unsloth alone accounts for five trending GGUF releases, and the most-downloaded model on the list is a community uncensored fine-tune (HauhauCS, 2.72M downloads). This reveals a strong demand for accessible, locally deployable models — and a community eager to push beyond default safety and capability boundaries. The proliferation of "uncensored" and "heretic" fine-tunes also highlights ongoing tensions between open access and alignment norms.

Finally, **multimodal generation is fragmenting into specialized niches** — from pose-driven video (SCAIL-2) to streaming ASR (NVIDIA Nemotron) to TTS (Higgs Audio, ZONOS2) — suggesting the ecosystem is moving beyond general-purpose vision-language models toward task-optimized multimodal tools.

---

## 4. Worth Exploring

**1. [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — With 3.36 million downloads and only 3B active parameters, this is the efficiency story of the year. It's the ideal model to study for understanding how MoE routing and sparse activation can deliver flagship-level performance at a fraction of the inference cost. Essential for anyone building production systems where compute budget matters.

**2. [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** — Google's unified any-to-any model represents a bold architectural bet: a single model that handles text, image, and multimodal inputs interchangeably. At 12B parameters, it's small enough to run locally yet versatile enough to serve as a general-purpose assistant. The 1.22 million downloads suggest the community agrees.

**3. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — The second most-liked model on the list (2,101 likes) with a remarkably small 3B footprint, this model punches well above its weight for visual localization and image feature extraction. It's worth studying for anyone interested in efficient vision models or building applications that require spatial understanding of images without the overhead of large vision-language models.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*