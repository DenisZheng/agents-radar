# Hugging Face Trending Models Digest 2026-06-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-25 00:39 UTC

---

# Hugging Face Trending Models Digest — June 25, 2026

---

## 1. Today's Highlights

The Hugging Face trending page today is dominated by the explosive debut of **deepseek-ai/DeepSeek-V4-Pro**, which has rocketed to over 5,000 likes and 2 million downloads in its first week, signaling massive community appetite for DeepSeek's next-generation architecture. The **Gemma 4 ecosystem** continues to fragment into a rich constellation of community fine-tunes, quantizations, and specialized variants (coding, agentic, abliterated), with multiple Gemma-4-12B derivatives from yuxinlu1 and huihui-ai collectively amassing hundreds of thousands of downloads. **Qwen's MoE lineup** (Qwen3.6-35B-A3B, Qwen-AgentWorld-35B-A3B) is gaining serious traction, particularly the aggressively fine-tuned uncensored variant from HauhauCS that has crossed 3.7 million downloads. On the multimodal front, **nvidia/LocateAnything-3B** and **MiniMaxAI/MiniMax-M3** show that vision-language models remain a hot category, while **krea/Krea-2-Turbo** hints at a new wave of fast text-to-image diffusion models. Notably, **zai-org/GLM-5.2** and its FP8/GGUF variants demonstrate that the GLM MoE DSA architecture is becoming a serious contender in the open-weight LLM space.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, Chat Models, Instruction-Tuned)

| Model | Details |
|-------|---------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | Author: deepseek-ai \| ❤️ 5,046 \| 📥 2,052,463 | DeepSeek's flagship next-gen conversational model, setting a new benchmark for open-weight LLMs with massive early adoption. |
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org \| ❤️ 2,351 \| 📥 57,186 | A cutting-edge MoE (Mixture of Experts) DSA architecture for text generation, emerging as a strong open alternative in the LLM landscape. |
| **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | Author: WeiboAI \| ❤️ 692 \| 📥 49,569 | A compact 3B reasoning model from Weibo AI optimized for mathematical thinking, showing strong community interest in small reasoning models. |
| **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | Author: microsoft \| ❤️ 336 \| 📥 4,805 | Microsoft's fine-tuned 4B parameter model for agentic sub-task execution, reflecting growing industry investment in small agent models. |
| **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | Author: Qwen \| ❤️ 143 \| 📥 223 | Qwen's MoE agent model for tool-use and multi-step reasoning, newly released and already attracting attention. |
| **[poolside/Laguna-M.1](https://huggingface.co/poolside/Laguna-M.1)** | Author: poolside \| ❤️ 95 \| 📥 2,913 | A new open-weight LLM optimized for vLLM and SGLang serving, targeting production deployment efficiency. |

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

| Model | Details |
|-------|---------|
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | Author: google \| ❤️ 1,162 \| 📥 2,114,441 | Google's unified any-to-any multimodal Gemma 4 model, supporting vision and text in a single architecture with enormous download volume. |
| **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | Author: google \| ❤️ 1,060 \| 📥 1,036,328 | Google's diffusion-based Gemma model for image generation, bringing text-to-image capability into the Gemma family with a novel architecture. |
| **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | Author: MiniMaxAI \| ❤️ 1,228 \| 📥 143,093 | MiniMax's vision-language multimodal model, gaining traction as a capable alternative in the multimodal AI space. |
| **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | Author: krea \| ❤️ 188 \| 📥 878 | A fast text-to-image generation model, newly released and promising significantly accelerated inference over its predecessor. |
| **[krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)** | Author: krea \| ❤️ 157 \| 📥 1,205 | The base text-to-image model powering the Krea-2 ecosystem, serving as the foundation for the Turbo variant. |
| **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** | Author: owensong \| ❤️ 193 \| 📥 0 | An ultra-small text-to-speech model, notable for its compact size and potential for on-device voice synthesis. |
| **[Boogu/Boogu-Image-0.1-Edit](https://huggingface.co/Boogu/Boogu-Image-0.1-Edit)** | Author: Boogu \| ❤️ 121 \| 📥 743 | An image editing model under Apache-2.0 license, supporting both English and Chinese workflows. |

### 🔧 Specialized Models (Code, Math, Medical, Embeddings, OCR, ASR)

| Model | Details |
|-------|---------|
| **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | Author: moonshotai \| ❤️ 984 \| 📥 480,013 | Moonshot AI's specialized code generation model, demonstrating strong demand for dedicated coding LLMs. |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia \| ❤️ 2,346 \| 📥 359,498 | NVIDIA's 3B parameter visual localization model for grounding and object location tasks in images. |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu \| ❤️ 732 \| 📥 45,687 | Baidu's OCR model for unlimited-length document and image text extraction, addressing real-world document processing needs. |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | Author: nvidia \| ❤️ 678 \| 📥 47,208 | NVIDIA's ultra-compact streaming ASR model with cache-aware processing, enabling real-time speech recognition at the edge. |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** | Author: empero-ai \| ❤️ 307 \| 📥 5,123 | A 9B reasoning model with 1M token context length, targeting complex long-document analysis tasks. |
| **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** | Author: LiquidAI \| ❤️ 119 \| 📥 11,471 | Liquid AI's efficient 350M parameter embedding model for semantic search and similarity tasks. |
| **[LiquidAI/LFM2.5-ColBERT-350M](https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M)** | Author: LiquidAI \| ❤️ 88 \| 📥 3,362 | A ColBERT-style late interaction model for high-quality passage ranking and retrieval. |
| **[datalab-to/lift](https://huggingface.co/datalab-to/lift)** | Author: datalab-to \| ❤️ 147 \| 📥 4,644 | A PDF understanding and extraction model built on Qwen3.5, targeting enterprise document workflows. |

### 📦 Fine-tunes & Quantizations (Community Fine-tunes, GGUF, AWQ)

| Model | Details |
|-------|---------|
| **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1 \| ❤️ 2,296 \| 📥 483,139 | GGUF quantization of a Gemma 4 coding fine-tune, one of the most downloaded models this week thanks to its practical deployability. |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS \| ❤️ 2,205 \| 📥 3,769,369 | An aggressively fine-tuned, uncensored variant of Qwen3.6 MoE with vision support, achieving remarkable download numbers. |
| **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](httpshttps://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | Author: yuxinlu1 \| ❤️ 530 \| 📥 138,704 | Agentic variant of the Gemma 4 GGUF fine-tune optimized for terminal and tool-use tasks. |
| **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | Author: unsloth \| ❤️ 347 \| 📥 76,971 | Unsloth's efficient GGUF quantization of GLM-5.2, making the MoE DSA architecture accessible for local deployment. |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai \| ❤️ 347 \| 📥 63,637 | GGUF quantized version of the Qwythos 9B reasoning model for efficient local inference. |
| **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)** | Author: zai-org \| ❤️ 157 \| 📥 445,304 | Official FP8 quantized variant of GLM-5.2, offering reduced memory footprint with minimal quality loss. |
| **[huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated)** | Author: huihui-ai \| ❤️ 124 \| 📥 4,402 | An abliterated (uncensored) version of the Gemma 4 coding model, reflecting demand for unrestricted community fine-tunes. |
| **[Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF)** | Author: Jackrong \| ❤️ 83 \| 📥 10,867 | A 27B coder model with Multi-Token Prediction (MTP) in GGUF format, targeting speculative decoding workflows. |

---

## 3. Ecosystem Signal

The Hugging Face ecosystem this week reveals several converging trends. **DeepSeek's continued dominance** with V4-Pro's record-breaking debut confirms that the DeepSeek brand carries enormous community trust and that its architecture innovations (likely incorporating MoE and advanced reasoning) are setting the pace for open-weight AI. The **Gemma 4 ecosystem** is undergoing the most vibrant community fragmentation — Google's base model has spawned a sprawling tree of GGUF quantizations, coding fine-tunes, agentic variants, and abliterated versions, with community creators like yuxinlu1 and huihui-ai driving more activity than the original publisher. This mirrors the early Llama ecosystem pattern where community derivatives outperform the base model in adoption.

**MoE architectures** are clearly the architectural trend of the moment: GLM-5.2 (MoE DSA), Qwen3.6-35B-A3B, Qwen-AgentWorld-35B-A3B, and DeepSeek-V4-Pro all leverage mixture-of-experts designs, suggesting the community has collectively decided that MoE is the path to strong performance at manageable inference cost. The **Qwen family** is particularly notable for its breadth — spanning OCR (Unlimited-OCR), agent models (AgentWorld), MoE LLMs, and PDF understanding (lift via datalab-to) — positioning Qwen as the most comprehensive open model family alongside Gemma.

**Quantization activity** is intense and sophisticated: FP8, GGUF, and compressed-tensors formats are all well-represented, with Unsloth's involvement signaling that efficient inference tooling has become a first-class concern. The sheer download volume of GGUF variants (often 10–50× their unquantized counterparts) underscores that **local and edge deployment** is a primary use case for the open-weight community.

Finally, the rise of **small specialized models** — Inflect-Nano-v1 for TTS, FastContext-4B for agent sub-tasks, LocateAnything-3B for visual grounding, nemotron-0.6B for streaming ASR — indicates the ecosystem is maturing beyond the "bigger is better" paradigm toward purpose-built, deployable models.

---

## 4. Worth Exploring

### 🔬 [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
With 5,000+ likes and 2M+ downloads in its debut week, this is the most significant open-weight LLM release of the month. If you're tracking the frontier of what's possible with non-proprietary models, DeepSeek-V4-Pro is the benchmark to study, evaluate, and build upon. Its rapid adoption suggests strong community confidence in its architecture and capabilities.

### 🧩 [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) + [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)
The GLM MoE DSA (Dynamic Sparse Attention) architecture represents a genuinely different technical approach to efficient large-scale language modeling. With both official and community quantizations available, this is an excellent opportunity to experiment with a non-DeepSeek, non-Llama architecture that may offer unique performance characteristics. The availability of an FP8 variant from the official org is particularly noteworthy.

### 🌊 [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)
Google's diffusion-based Gemma model for image generation is architecturally novel — combining the Gemma language model backbone with a diffusion head for image synthesis. This represents an emerging paradigm of unified text-image models that don't rely on traditional VAE or latent diffusion approaches. For researchers and practitioners interested in the next generation of text-to-image models, this is a must-study release.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*