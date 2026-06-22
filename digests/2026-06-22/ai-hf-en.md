# Hugging Face Trending Models Digest 2026-06-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-22 00:43 UTC

---

# Hugging Face Trending Models Digest — June 22, 2026

---

## 1. Today's Highlights

The top of the leaderboard is dominated by **DeepSeek-V4-Pro**, which surged to nearly 5,000 likes and 2.6M downloads, signaling strong community appetite for high-performance open-weight reasoning models. **Qwen3.6-35B-A3B** and **Gemma-4-12B-it** also posted impressive download numbers (5.1M and 1.8M respectively), confirming that the Qwen3.6 and Gemma 4 families are the two hottest open-weight ecosystems right now. On the multimodal front, **Nvidia's LocateAnything-3B** pulled 2,240 likes — the highest single-model like count — suggesting growing demand for vision-grounded spatial reasoning. Meanwhile, community GGUF quantizations of nearly every major model (GLM-5.2, Kimi-K2.7-Code, Gemma-4 variants) continue to proliferate, underscoring the importance of edge-deployable formats.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, Chat Models, Instruction-Tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — *deepseek-ai* | ❤️ 4,999 | ⬇️ 2,611,991
  DeepSeek's latest flagship conversational model leads the weekly charts by a wide margin, offering state-of-the-art reasoning and chat capabilities in an open-weight package.

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — *Qwen* | ❤️ 2,196 | ⬇️ 5,148,673
  The Qwen3.6 MoE flagship is the most-downloaded model on this list, reflecting its strong multimodal and conversational performance at an efficient 35B-parameter scale.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — *zai-org* | ❤️ 1,813 | ⬇️ 27,413
  Zhipu AI's GLM-5.2 introduces a DSA (deep sparse attention) MoE architecture, positioning itself as a serious contender in the open-weight LLM space.

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** — *google* | ❤️ 1,126 | ⬇️ 1,815,370
  Google's Gemma 4 unified model supports any-to-any modalities and has become a go-to base for community fine-tunes, as evidenced by its massive download count.

- **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** — *nex-agi* | ❤️ 342 | ⬇️ 7,872
  A Qwen3.5-MoE-based model from Nex AI that blends text generation with image-text-to-text capabilities, gaining traction for its balanced performance.

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** — *CohereLabs* | ❤️ 474 | ⬇️ 19,551
  Cohere's compact code-oriented model built on a Cohere2 MoE backbone, targeting developers who need fast, conversational code assistance.

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** — *microsoft* | ❤️ 261 | ⬇️ 2,593
  Microsoft's 4B-parameter model optimized for fast context processing, designed for sub-agent and tool-use scenarios.

- **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)** — *zai-org* | ❤️ 120 | ⬇️ 217,361
  The FP8-quantized variant of GLM-5.2, enabling efficient deployment with minimal quality loss.

- **[poolside/Laguna-M.1](https://huggingface.co/poolside/Laguna-M.1)** — *poolside* | ❤️ 83 | ⬇️ 2,580
  A compact LLM from Poolside optimized for vLLM and SGLang serving frameworks.

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — *nvidia* | ❤️ 2,240 | ⬇️ 241,845
  Nvidia's vision-language model for spatial grounding and object localization leads all models in like count, highlighting surging interest in visual reasoning.

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** — *google* | ❤️ 1,034 | ⬇️ 762,861
  Google's diffusion-based Gemma variant bridges image and text generation, attracting strong interest in the generative AI community.

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** — *MiniMaxAI* | ❤️ 1,177 | ⬇️ 104,076
  MiniMax's multimodal M3 model handles image-to-text tasks with a strong balance of quality and efficiency.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — *moonshotai* | ❤️ 945 | ⬇️ 363,308
  Moonshot AI's latest Kimi model combines code generation with image feature extraction, making it a versatile multimodal tool.

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** — *bosonai* | ❤️ 505 | ⬇️ 76,120
  Boson AI's 4B-parameter text-to-speech model built on a Qwen3 multimodal backbone, delivering high-quality speech synthesis.

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — *nvidia* | ❤️ 612 | ⬇️ 27,275
  A compact 0.6B streaming ASR model from Nvidia with cache-aware processing, ideal for real-time speech recognition applications.

- **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** — *owensong* | ❤️ 151 | ⬇️ 0
  An ultra-small TTS model targeting edge and embedded deployment scenarios.

- **[ostris/ideogram_4_turbotime_lora](https://huggingface.co/ostris/ideogram_4_turbotime_lora)** — *ostris* | ❤️ 89 | ⬇️ 2,452
  A LoRA adapter for Ideogram 4 that accelerates image generation inference while preserving quality.

- **[Boogu/Boogu-Image-0.1-Edit](https://huggingface.co/Boogu/Boogu-Image-0.1-Edit)** — *Boogu* | ❤️ 81 | ⬇️ 374
  An early-stage image editing model from Boogu, supporting both English and Chinese.

### 🔧 Specialized Models (Code, Math, Embeddings)

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** — *WeiboAI* | ❤️ 560 | ⬇️ 20,277
  Weibo AI's 3B math-reasoning model punches above its weight, gaining strong traction for lightweight mathematical problem solving.

- **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** — *LiquidAI* | ❤️ 90 | ⬇️ 7,726
  A compact 350M embedding model from LiquidAI's LFM2.5 series, designed for efficient sentence-similarity tasks.

- **[datalab-to/lift](https://huggingface.co/datalab-to/lift)** — *datalab-to* | ❤️ 107 | ⬇️ 516
  A Qwen3.5-based model specialized for PDF understanding and document processing.

### 📦 Fine-tunes & Quantizations (Community Fine-tunes, GGUF, AWQ)

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — *yuxinlu1* | ❤️ 2,082 | ⬇️ 358,677
  A community GGUF quantization of a Gemma-4 12B code-reasoning fine-tune, combining multiple training stages for strong coding performance.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — *HauhauCS* | ❤️ 2,078 | ⬇️ 3,966,691
  An uncensored fine-tune of Qwen3.6-35B that has amassed nearly 4M downloads — the highest on this list — reflecting enormous demand for unrestricted open-weight models.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — *yuxinlu1* | ❤️ 272 | ⬇️ 21,730
  A second-generation agentic GGUF build of Gemma-4 12B, optimized for terminal and tool-use workflows.

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** — *unsloth* | ❤️ 224 | ⬇️ 32,260
  Unsloth's GGUF quantization of GLM-5.2, making Zhipu AI's latest model accessible for local inference.

- **[unsloth/Kimi-K2.7-Code-GGUF](https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF)** — *unsloth* | ❤️ 150 | ⬇️ 42,837
  Unsloth's quantized version of Moonshot AI's Kimi-K2.7-Code, enabling efficient local deployment.

- **[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** — *Jackrong* | ❤️ 275 | ⬇️ 190,993
  A GGUF quantization of a Qwen3.6 27B coder model with multi-token prediction (MTP), popular for code generation workloads.

- **[bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF)** — *bytkim* | ❤️ 101 | ⬇️ 36,421
  A community GGUF build of Qwen3.6 27B with MTP and pi-tuning, targeting math and reasoning tasks.

- **[lordx64/Qwable-v1](https://huggingface.co/lordx64/Qwable-v1)** — *lordx64* | ❤️ 144 | ⬇️ 3,351
  A Qwen3.5-MoE-based multimodal fine-tune exploring the boundaries of open-weight vision-language models.

- **[Mia-AiLab/Qwable-3.6-27b](https://huggingface.co/Mia-AiLab/Qwable-3.6-27b)** — *Mia-AiLab* | ❤️ 119 | ⬇️ 22,879
  A community fine-tune of Qwen3.6 27B, contributing to the growing ecosystem of Qwen-derived models.

---

## 3. Ecosystem Signal

The most striking trend this week is the **Qwen3.6 explosion**. The base model (Qwen/Qwen3.6-35B-A3B) leads all models with 5.1M downloads, and its derivatives — uncensored fine-tunes, GGUF quantizations, MTP-enhanced coder variants — collectively account for a massive share of the trending list. This mirrors the trajectory Qwen2.5 enjoyed in late 2024, but at a significantly larger scale, suggesting the Qwen ecosystem is becoming the default open-weight foundation for both research and production.

**Gemma 4** is the second major story. Google's unified any-to-any model has spawned a wave of community fine-tunes (particularly from prolific contributor yuxinlu1), with GGUF quantizations making the 12B variant accessible for local coding and agentic workflows. The Gemma family's permissive licensing continues to be a key driver.

**Quantization activity is at an all-time high.** Unsloth alone has GGUF builds of GLM-5.2, Kimi-K2.7-Code, and others trending simultaneously. The community's appetite for edge-deployable models is clearly outpacing the release of new base architectures, and GGUF has solidified its position as the de facto standard format for local LLM deployment.

On the proprietary-vs-open front, the list is overwhelmingly open-weight. Even models from major labs (Google, Microsoft, Nvidia, DeepSeek) are released with permissive or semi-permissive licenses, and the most-downloaded model (HauhauCS's uncensored Qwen3.6) is a community modification — a strong signal that the open-weight paradigm is firmly dominant in the Hugging Face ecosystem.

---

## 4. Worth Exploring

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — With nearly 5,000 likes and 2.6M downloads, this is the model to watch. DeepSeek has consistently pushed the frontier of open-weight reasoning, and V4-Pro appears to be their strongest release yet. Essential for anyone evaluating the current state of the art in open LLMs.

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — The highest like count on the list (2,240) for a reason: spatial grounding and visual localization are rapidly becoming critical capabilities for AI agents and robotics. At 3B parameters, it is remarkably efficient for its task class, and Nvidia's track record with production-grade models makes this a strong candidate for real-world deployment.

3. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — The most-downloaded model on this list at 5.1M, and the foundation for an entire ecosystem of fine-tunes and quantizations. Understanding this model's architecture (35B total, 3B active via MoE) and capabilities is essential for anyone building on open-weight multimodal AI today.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*