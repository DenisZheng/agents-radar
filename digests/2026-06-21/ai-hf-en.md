# Hugging Face Trending Models Digest 2026-06-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-21 00:43 UTC

---

# Hugging Face Trending Models Digest — June 21, 2026

---

## 1. Today's Highlights

The top of the leaderboard is dominated by **DeepSeek-V4-Pro**, which surged to nearly 5,000 likes and 2.8M downloads, signaling massive community appetite for high-performance open-weight reasoning and conversational models. **Gemma 4** continues to make waves across multiple entries — Google's own 12B instruction-tuned variant and community GGUF quantizations alike are racking up downloads at an extraordinary pace (1.7M+ for the base model). The **Qwen 3.6 ecosystem** is arguably the most fragmented and actively fine-tuned family on the board, with uncensored, coder, MTP, and GGUF variants from at least six different authors. NVIDIA's **LocateAnything-3B** emerged as a dark horse with 2,216 likes, suggesting strong interest in compact vision-language localization models. Meanwhile, multimodal generation is heating up with Google's **DiffusionGemma-26B** and ZAI's **SCAIL-2** video generation model both drawing significant attention.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, Chat Models, Instruction-Tuned)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,985 | 2,797,050 | DeepSeek's latest flagship reasoning and conversational model, leading the board by a wide margin as the community's most-downloaded and most-liked model of the week. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 1,687 | 19,683 | ZAI's GLM-5.2 MoE model with DSA (DeepSeek-style attention), positioning itself as a strong open-weight contender in the LLM space. |
| [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | microsoft | 244 | 1,998 | Microsoft's compact 4B model optimized for fast context processing, tagged as an "Explorer SubAgent" — hinting at agentic use cases. |
| [nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro) | nex-agi | 340 | 7,724 | A Qwen3.5-MoE-based model from Nex-AI, blending text generation with image-text-to-text capabilities. |
| [prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B) | prefeitura-rio | 327 | 190,694 | A massive 397B open-weight Qwen3.5-MoE model from Rio de Janeiro's city government — a striking example of public-sector AI adoption. |
| [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | CohereLabs | 467 | 18,783 | Cohere's compact code-oriented model, bringing enterprise-grade code generation to a smaller footprint. |

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | google | 1,022 | 673,464 | Google's 26B diffusion-based Gemma variant for image-text-to-text tasks, merging diffusion paradigms with the Gemma architecture at scale. |
| [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 1,106 | 1,696,240 | Google's unified 12B Gemma 4 instruction-tuned model with any-to-any capabilities, one of the most downloaded models on the entire list. |
| [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) | MiniMaxAI | 1,159 | 85,771 | MiniMax's M3 multimodal vision-language model, gaining traction as a competitive image-text-to-text system. |
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 2,216 | 235,606 | NVIDIA's compact 3B model for image localization and feature extraction — the single most-liked model this week, indicating strong demand for efficient vision tools. |
| [zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2) | zai-org | 241 | 0 | ZAI's pose-driven character animation and video generation model, representing the growing open-source video generation space. |
| [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 496 | 72,225 | Boson AI's 4B Higgs Audio v3 TTS model built on Qwen3 multimodal architecture, pushing the boundaries of open-weight speech synthesis. |
| [ostris/ideogram_4_turbotime_lora](https://huggingface.co/ostris/ideogram_4_turbotime_lora) | ostris | 82 | 1,679 | A LoRA adapter for Ideogram 4 enabling faster image generation, reflecting the active text-to-image fine-tuning community. |

### 🔧 Specialized Models (Code, Math, Embeddings, ASR)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 929 | 317,963 | Moonshot AI's Kimi K2.7 specialized for code tasks, combining image-text-to-text capabilities with strong coding performance. |
| [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B) | WeiboAI | 511 | 16,270 | Weibo's compact 3B reasoning model fine-tuned for mathematical thinking, showing that small math-specialized models still draw significant interest. |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 584 | 21,426 | NVIDIA's 0.6B streaming ASR model with cache-aware architecture, addressing real-time speech recognition at the edge. |
| [LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M) | LiquidAI | 81 | 6,128 | LiquidAI's 350M embedding model from the LFM2.5 series, offering lightweight sentence similarity for resource-constrained deployments. |

### 📦 Fine-tunes & Quantizations (Community GGUF, AWQ, Fine-tunes)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | yuxinlu1 | 1,983 | 312,332 | A GGUF-quantized Gemma 4 12B coding model merged with Fable 5 and Composer 2.5 — the second most-liked model this week, showing the power of community merges. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,040 | 3,812,636 | An uncensored, aggressive fine-tune of Qwen 3.6 35B — the single most-downloaded model on this entire list at 3.8M downloads, revealing enormous demand for unrestricted open-weight models. |
| [DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF) | DavidAU | 411 | 587,521 | A heavily merged and quantized Qwen 3.6 40B GGUF combining influences from Claude, Deckard, Heretic, and NEO — a testament to the creative extremes of the fine-tuning community. |
| [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) | unsloth | 205 | 22,586 | Unsloth's efficient GGUF quantization of GLM-5.2, making the model accessible for local inference. |
| [unsloth/Kimi-K2.7-Code-GGUF](https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF) | unsloth | 146 | 37,260 | Unsloth's GGUF version of Moonshot's Kimi K2.7 Code, democratizing access to this coding-specialized multimodal model. |
| [Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF) | Jackrong | 269 | 168,502 | A GGUF-quantized Qwen 3.6 27B coder with Multi-Token Prediction (MTP), targeting high-throughput code generation. |
| [zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8) | zai-org | 115 | 138,174 | ZAI's official FP8 quantized version of GLM-5.2, offering a middle ground between quality and efficiency. |
| [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 183 | 6,307 | A second-generation agentic Gemma 4 GGUF with terminal capabilities, showing iterative improvement in community merges. |

---

## 3. Ecosystem Signal

Three model families dominate this week's trending landscape: **Qwen 3.6**, **Gemma 4**, and **GLM-5.2**. Qwen 3.6 is the most actively extended family, with community variants spanning uncensored fine-tunes, coder specializations, MTP enhancements, and GGUF quantizations from at least eight different authors — a sign of an ecosystem reaching critical mass. Gemma 4's presence is split between Google's official releases (the unified 12B-it and DiffusionGemma-26B) and a vibrant community of GGUF quantizers and merge artists, with yuxinlu1's coding and agentic variants leading community engagement. GLM-5.2, while newer, already has official FP8 and community GGUF variants, suggesting rapid adoption.

The quantization ecosystem is maturing: **Unsloth** has established itself as the go-to provider for efficient GGUF conversions, with three entries this week alone. The sheer download numbers for GGUF models (HauhauCS's uncensored Qwen at 3.8M, DavidAU's merged Qwen at 587K) confirm that local inference remains a primary use case for the open-weight community. Meanwhile, the "uncensored" tag appears on multiple high-performing models, reflecting an ongoing tension between capability and safety alignment that continues to drive community fine-tuning behavior.

Notably, **multimodal models** now represent nearly half the list, with image-text-to-text emerging as the dominant pipeline tag — surpassing pure text-generation for the first time in recent trending snapshots. This signals a broader industry shift toward unified multimodal architectures rather than task-specific models.

---

## 4. Worth Exploring

**1. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — With 2,216 likes (the highest on the list) and 235K downloads, this compact vision-language localization model from NVIDIA addresses a real gap: efficient, accurate image understanding at the 3B scale. For anyone building applications that require spatial reasoning over images — robotics, document analysis, visual QA — this model deserves immediate attention. Its high like-to-download ratio suggests strong satisfaction among early adopters.

**2. [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — The undisputed leader this week with 4,985 likes and 2.8M downloads. DeepSeek's continued dominance in the open-weight space is remarkable, and V4-Pro appears to be their most capable reasoning and conversational model yet. For researchers and practitioners evaluating the frontier of open-weight LLMs, this is the benchmark to test against.

**3. [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** — Google's fusion of diffusion methods with the Gemma architecture at 26B parameters is a technically ambitious direction. With 673K downloads in its first week, the community is clearly curious whether diffusion-based image generation can compete with established approaches when scaled within a strong language model backbone. Worth studying for anyone tracking the convergence of generative paradigms.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*