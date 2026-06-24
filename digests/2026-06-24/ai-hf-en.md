# Hugging Face Trending Models Digest 2026-06-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-24 00:34 UTC

---

# Hugging Face Trending Models Digest — June 24, 2026

---

## 1. Today's Highlights

The top of the leaderboard is dominated by **DeepSeek-V4-Pro**, which surged to 5,030 likes and over 2.2 million downloads, signaling massive community appetite for high-performance open-weight reasoning models. **GLM-5.2** and its variants (FP8, GGUF) from zai-org continue to gain traction, reflecting strong interest in Mixture-of-Architectures with DSA (DeepSeek-style attention) designs. Google's **Gemma 4** family is having a breakout week — the base 12B-it model crossed 1,991K downloads while community fine-tunes and GGUF quantizations proliferate across the list. NVIDIA is making multimodal moves with **LocateAnything-3B** (2,316 likes), a spatial grounding model that's resonating with the robotics and embodied AI crowd. Finally, the sheer volume of Qwen3.6 and Gemma 4 community quantizations underscores that the ecosystem's center of gravity has shifted toward efficient, deployable open models.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, Chat Models, Instruction-Tuned)

| Model | Author | Likes / Downloads | Why It's Trending |
|-------|--------|-------------------|-------------------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 5,030 ❤️ / 2,245,489 ⬇️ | The week's undisputed champion — DeepSeek's latest flagship delivers frontier-level reasoning and conversation in a fully open-weight package, driving massive adoption. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 2,195 ❤️ / 40,127 ⬇️ | Zhipu AI's GLM-5.2 introduces a novel MoE+DSA hybrid architecture that's drawing serious attention from researchers exploring alternatives to pure transformer designs. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,156 ❤️ / 3,955,016 ⬇️ | An uncensored variant of Qwen3.6's 35B MoE model with vision support — its staggering 3.9M downloads reveal enormous demand for unrestricted, capable open models. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | empero-ai | 212 ❤️ / 1,856 ⬇️ | A 9B Qwen3.5-based model fine-tuned on Claude-style reasoning with a 1M context window — a compelling option for long-context agentic workflows. |
| [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | microsoft | 321 ❤️ / 4,391 ⬇️ | Microsoft's compact 4B model optimized for fast context processing, positioned as an "Explorer SubAgent" for tool-use and retrieval-augmented tasks. |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 975 ❤️ / 447,920 ⬇️ | Moonshot AI's latest code-specialized model in the Kimi K2 series, offering strong programming capabilities with multimodal input support. |
| [lordx64/Qwable-v1](https://huggingface.co/lordx64/Qwable-v1) | lordx64 | 172 ❤️ / 4,547 ⬇️ | A community fine-tune on Qwen3.5 MoE, exploring the boundaries of small-MoE instruction following with vision capabilities. |
| [poolside/Laguna-M.1](https://huggingface.co/poolside/Laguna-M.1) | poolside | 93 ❤️ / 2,787 ⬇️ | Poolside's first openly deployable model, optimized for vLLM and SGLang inference — a signal that AI infrastructure companies are entering the model release game. |

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

| Model | Author | Likes / Downloads | Why It's Trending |
|-------|--------|-------------------|-------------------|
| [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 1,154 ❤️ / 1,991,703 ⬇️ | Google's Gemma 4 12B unified multimodal model supports any-to-any modalities and has become one of the most downloaded models on the platform this week. |
| [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | google | 1,055 ❤️ / 948,996 ⬇️ | A 26B diffusion-based multimodal model in the Gemma family — Google is clearly betting big on diffusion transformers for image generation and understanding. |
| [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) | MiniMaxAI | 1,220 ❤️ / 131,057 ⬇️ | MiniMax's M3 multimodal model delivers strong image-text-to-text performance, positioning the company as a serious contender in the open multimodal space. |
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 2,316 ❤️ / 274,025 ⬇️ | NVIDIA's spatial grounding model lets users locate objects in images via natural language — the highest-liked model this week, with clear applications in robotics and embodied AI. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 472 ❤️ / 8,396 ⬇️ | Baidu's OCR model promises unlimited-length document understanding, tapping into enterprise demand for robust document AI pipelines. |
| [owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1) | owensong | 177 ❤️ / 0 ⬇️ | An ultra-small text-to-speech model designed for edge deployment — notable for its compact footprint despite zero downloads (brand new). |
| [Boogu/Boogu-Image-0.1-Edit](https://huggingface.co/Boogu/Boogu-Image-0.1-Edit) | Boogu | 112 ❤️ / 592 ⬇️ | An early-stage image editing model from the Boogu project, showing promise for instruction-based image manipulation. |
| [ostris/ideogram_4_turbotime_lora](https://huggingface.co/ostris/ideogram_4_turbotime_lora) | ostris | 111 ❤️ / 3,672 ⬇️ | A LoRA adapter for Ideogram 4 that accelerates generation via distillation — the community is actively optimizing commercial image models for speed. |
| [krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo) | krea | 80 ❤️ / 84 ⬇️ | Krea's turbocharged text-to-image model, freshly released and already generating buzz in the generative art community. |

### 🔧 Specialized Models (Code, Math, Medical, Embeddings, ASR)

| Model | Author | Likes / Downloads | Why It's Trending |
|-------|--------|-------------------|-------------------|
| [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B) | WeiboAI | 664 ❤️ / 41,170 ⬇️ | A compact 3B math-reasoning model from Weibo AI that punches well above its weight class on mathematical benchmarks. |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 656 ❤️ / 41,050 ⬇️ | NVIDIA's 0.6B streaming ASR model with cache-aware attention enables real-time speech recognition on resource-constrained devices. |
| [LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M) | LiquidAI | 114 ❤️ / 10,117 ⬇️ | A 350M embedding model from LiquidAI's LFM2.5 series, offering efficient sentence similarity for RAG and retrieval pipelines. |
| [LiquidAI/LFM2.5-ColBERT-350M](https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M) | LiquidAI | 87 ❤️ / 2,534 ⬇️ | LiquidAI's ColBERT-style late-interaction model for high-precision retrieval — a lightweight alternative to heavyweight rerankers. |
| [datalab-to/lift](https://huggingface.co/datalab-to/lift) | datalab-to | 135 ❤️ / 3,216 ⬇️ | A Qwen3.5-based model specialized for PDF understanding and document extraction, addressing a critical enterprise workflow need. |

### 📦 Fine-tunes & Quantizations (Community Fine-tunes, GGUF, AWQ)

| Model | Author | Likes / Downloads | Why It's Trending |
|-------|--------|-------------------|-------------------|
| [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | yuxinlu1 | 2,237 ❤️ / 456,117 ⬇️ | A GGUF-quantized Gemma 4 12B coder fine-tune — the second-most-liked model this week, proving that quantized coding models are the community's sweet spot. |
| [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 445 ❤️ / 96,459 ⬇️ | An agentic GGUF variant of Gemma 4 12B optimized for terminal and tool-use tasks — part of a growing family of agentic fine-tunes. |
| [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) | unsloth | 300 ❤️ / 55,820 ⬇️ | Unsloth's GGUF quantization of GLM-5.2 makes this architecturally novel model accessible for local inference on consumer hardware. |
| [zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8) | zai-org | 149 ❤️ / 395,290 ⬇️ | The official FP8 quantized version of GLM-5.2, enabling efficient deployment on NVIDIA GPUs with minimal accuracy loss. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 186 ❤️ / 27,218 ⬇️ | GGUF version of the Qwythos 9B long-context model, making million-token inference feasible on local machines. |
| [bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF) | bytkim | 111 ❤️ / 65,765 ⬇️ | A GGUF quantization of a Qwen3.6 27B model with Multi-Token Prediction and pi-tuning — an experimental approach to faster inference. |
| [huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated) | huihui-ai | 112 ❤️ / 3,320 ⬇️ | An abliterated (refusal-removed) version of the Gemma 4 12B coder, catering to users who want unrestricted code generation. |

---

## 3. Ecosystem Signal

This week's trending list reveals several converging currents in the open model ecosystem. **Gemma 4 is the breakout family of the week** — Google's unified multimodal architecture is spawning an entire ecosystem of community fine-tunes, GGUF quantizations, and specialized variants (coder, agentic, abliterated) that collectively account for nearly a quarter of the top 30. The message is clear: when a capable base model is released with a permissive license, the community moves fast.

**MoE (Mixture of Experts) is becoming the default architecture** for new releases. GLM-5.2's DSA hybrid, Qwen3.6's 35B-A3B configuration, and Qwable's MoE fine-tune all point to a community that has embraced sparse activation as the path to scaling without proportional compute costs. The "uncensored" Qwen3.6 variant's 3.9 million downloads is a stark data point: there is enormous latent demand for capable, unrestricted models that the mainstream providers aren't meeting.

**Quantization is no longer optional — it's the product.** The top two most-liked models this week are GGUF quantizations, not base models. Unsloth, yuxinlu1, and bytkim are building real followings as quantizers, and the line between "model creator" and "model optimizer" is blurring. FP8 and GGUF are the two dominant formats, targeting GPU and CPU inference respectively.

**Multimodal is maturing beyond chat.** NVIDIA's LocateAnything (spatial grounding), Baidu's Unlimited-OCR (document AI), and Google's DiffusionGemma (image generation via diffusion transformers) show that the community is moving past text-and-image chat toward specialized multimodal capabilities — spatial reasoning, document understanding, and generative image synthesis.

Finally, **the geographic diversity of model creators is expanding.** Chinese labs (DeepSeek, Zhipu AI, Moonshot, MiniMax, Weibo AI, Baidu) dominate the leaderboard alongside Google, NVIDIA, and Microsoft, confirming that the open model ecosystem is truly global.

---

## 4. Worth Exploring

**1. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — With 2,316 likes (the highest of any model this week) and a novel spatial grounding capability, this model sits at the intersection of computer vision and embodied AI. As robotics and agentic systems increasingly need to understand spatial relationships in images, LocateAnything provides a lightweight, open solution. It's worth studying for anyone building vision-language agents or interactive AI systems.

**2. [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — The GLM-5.2's hybrid MoE+DSA architecture represents a genuinely novel design direction that diverges from the standard transformer playbook. With both FP8 and GGUF variants already available, it's practically deployable today. For researchers and engineers interested in architectural innovation beyond "just another LLM," this is the model to watch.

**3. [empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** — A 9B parameter model with a claimed 1M token context window, fine-tuned on Claude-style reasoning, is a remarkable combination. If the context length claims hold up in practice, this could be a game-changer for long-document analysis, codebase understanding, and multi-turn agentic workflows — all at a size that can run on a single high-end GPU. The GGUF variant makes it even more accessible.

---

*Digest generated by OWL — ZOO Company*

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*