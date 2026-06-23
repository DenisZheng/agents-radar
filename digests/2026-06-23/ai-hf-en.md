# Hugging Face Trending Models Digest 2026-06-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-23 00:39 UTC

---

# Hugging Face Trending Models Digest — June 23, 2026

---

## 1. Today's Highlights

Hugging Face's trending page today is dominated by the explosive debut of **deepseek-ai/DeepSeek-V4-Pro**, which has already crossed 5,000 likes and 2.4 million downloads, signaling strong community appetite for DeepSeek's latest reasoning-focused architecture. The **Qwen3.6 family** continues its remarkable proliferation, appearing across at least six entries from multiple authors in both base and fine-tuned forms, cementing Alibaba's Qwen ecosystem as one of the most actively extended open-weight lineages. **Gemma 4** also shows strong momentum, with Google's official 12B instruct model and community GGUF/agentic variants collectively drawing massive download counts. On the multimodal front, **nvidia/LocateAnything-3B** and **MiniMaxAI/MiniMax-M3** reflect surging demand for vision-language and image-text-to-text capabilities. Finally, the sheer volume of GGUF and community-quantized variants underscores that efficient local inference remains a primary driver of Hugging Face engagement.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, Chat, Instruction-Tuned)

| Model | Details |
|---|---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | Author: deepseek-ai \| ❤️ 5,012 \| ⬇️ 2,421,858 — DeepSeek's flagship new reasoning model, setting a new benchmark for open-weight LLMs and becoming the most-liked model on the list by a wide margin. |
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org \| ❤️ 2,030 \| ⬇️ 33,589 — Zhipu AI's latest GLM release featuring MoE-DSA architecture, drawing attention for its novel sparse-attention design. |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS \| ❤️ 2,113 \| ⬇️ 4,078,305 — A community uncensored fine-tune of Qwen3.6-35B-A3B with vision support, achieving remarkable download numbers and reflecting demand for permissive, unrestricted local models. |
| **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | Author: CohereLabs \| ❤️ 481 \| ⬇️ 21,078 — Cohere's compact code-specialized model using their Cohere2 MoE architecture, targeting efficient software engineering tasks. |
| **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | Author: moonshotai \| ❤️ 962 \| ⬇️ 412,778 — Moonshot AI's code-optimized variant of the Kimi-K2.7 family, leveraging compressed-tensors for efficient deployment. |
| **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | Author: microsoft \| ❤️ 289 \| ⬇️ 3,498 — Microsoft's compact 4B-parameter agent fine-tuned on the Qwen3 base for fast context processing in agentic workflows. |
| **[poolside/Laguna-M.1](https://huggingface.co/poolside/Laguna-M.1)** | Author: poolside \| ❤️ 90 \| ⬇️ 2,707 — A new open-weight LLM optimized for vLLM and SGLang serving, signaling growing infrastructure-aware model design. |

### 🎨 Multimodal & Generation

| Model | Details |
|---|---|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia \| ❤️ 2,291 \| ⬇️ 247,517 — NVIDIA's 3B-parameter vision-language model for image localization tasks, achieving exceptional engagement for its size. |
| **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | Author: google \| ❤️ 1,049 \| ⬇️ 874,368 — Google's diffusion-based Gemma variant for image generation, bringing diffusion language modeling to the masses. |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | Author: google \| ❤️ 1,139 \| ⬇️ 1,912,198 — Google's official Gemma 4 unified model supporting any-to-any multimodal tasks, one of the most downloaded models on the list. |
| **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | Author: MiniMaxAI \| ❤️ 1,208 \| ⬇️ 119,967 — MiniMax's flagship multimodal model supporting image-text-to-text pipelines, reflecting the Chinese AI lab's growing open-weight presence. |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu \| ❤️ 157 \| ⬇️ 47 — Baidu's OCR-focused model for unlimited document and image text extraction, newly released with early traction. |
| **[lordx64/Qwable-v1](https://huggingface.co/lordx64/Qwable-v1)** | Author: lordx64 \| ❤️ 162 \| ⬇️ 3,733 — A community-built Qwen3.5-MoE based multimodal model, showing grassroots innovation in the Qwen ecosystem. |
| **[datalab-to/lift](https://huggingface.co/datalab-to/lift)** | Author: datalab-to \| ❤️ 125 \| ⬇️ 1,821 — A Qwen3.5-based model specialized for PDF understanding and document intelligence. |
| **[Boogu/Boogu-Image-0.1-Edit](https://huggingface.co/Boogu/Boogu-Image-0.1-Edit)** | Author: Boogu \| ❤️ 100 \| ⬇️ 473 — A new image editing model using the Diffusers pipeline, targeting creative workflows. |
| **[ostris/ideogram_4_turbotime_lora](https://huggingface.co/ostris/ideogram_4_turbotime_lora)** | Author: ostris \| ❤️ 101 \| ⬇️ 3,244 — A LoRA adapter for Ideogram 4 enabling turbo-timed image generation, reflecting the vibrant fine-tuning community around commercial image models. |

### 🔧 Specialized Models (Code, Math, Embeddings, Speech)

| Model | Details |
|---|---|
| **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | Author: WeiboAI \| ❤️ 609 \| ⬇️ 32,385 — Weibo AI's compact 3B reasoning model with math specialization, gaining traction for lightweight analytical tasks. |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | Author: nvidia \| ❤️ 629 \| ⬇️ 34,860 — NVIDIA's ultra-compact streaming ASR model with cache-aware processing, targeting real-time speech recognition at the edge. |
| **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** | Author: owensong \| ❤️ 166 \| ⬇️ 0 — An ultra-small text-to-speech model, newly published and designed for minimal-footprint speech synthesis. |
| **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** | Author: LiquidAI \| ❤️ 100 \| ⬇️ 8,822 — Liquid AI's 350M-parameter embedding model from the LFM2.5 family, offering efficient sentence similarity. |
| **[LiquidAI/LFM2.5-ColBERT-350M](https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M)** | Author: LiquidAI \| ❤️ 78 \| ⬇️ 2,202 — A ColBERT-style late-interaction retrieval model from Liquid AI, targeting high-quality passage ranking. |

### 📦 Fine-tunes & Quantizations

| Model | Details |
|---|---|
| **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1 \| ❤️ 2,168 \| ⬇️ 414,734 — A GGUF-quantized coding fine-tune of Gemma 4 12B, the most downloaded GGUF variant on the list and a testament to demand for runnable local models. |
| **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | Author: yuxinlu1 \| ❤️ 382 \| ⬇️ 50,314 — An agentic/terminal-focused Gemma 4 GGUF variant optimized for tool-use and coding agent workflows. |
| **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | Author: unsloth \| ❤️ 253 \| ⬇️ 41,846 — Unsloth's efficient GGUF quantization of GLM-5.2, making Zhipu's latest model accessible for local inference. |
| **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)** | Author: zai-org \| ❤️ 133 \| ⬇️ 334,716 — Official FP8 quantized version of GLM-5.2, achieving high download counts by reducing GPU memory requirements. |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai \| ❤️ 133 \| ⬇️ 6,633 — A GGUF-quantized 9B reasoning model with a 1M-token context window, targeting long-document local inference. |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** | Author: empero-ai \| ❤️ 126 \| ⬇️ 842 — The unquantized safetensors version of the same 1M-context reasoning model. |
| **[bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF)** | Author: bytkim \| ❤️ 106 \| ⬇️ 52,774 — A GGUF fine-tune of Qwen3.6-27B using Multi-Token Prediction and pi-tuning, an advanced community quantization effort. |
| **[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** | Author: Jackrong \| ❤️ 281 \| ⬇️ 214,630 — A vision-capable GGUF coding model based on Qwen3.6-27B with MTP, showing strong community demand for local coding assistants. |
| **[Mia-AiLab/Qwable-3.6-27b](https://huggingface.co/Mia-AiLab/Qwable-3.6-27b)** | Author: Mia-AiLab \| ❤️ 125 \| ⬇️ 23,958 — A community fine-tune of Qwen3.6-27B, part of the broader Qwable project lineage. |

---

## 3. Ecosystem Signal

The current Hugging Face landscape reveals several converging trends. **First, the Qwen ecosystem has become the most actively extended open-weight family in the world.** Qwen3.6 alone appears in at least six entries spanning uncensored fine-tunes, coding variants, PDF specialists, and GGUF quantizations from multiple independent authors. This mirrors the earlier explosion around Llama but is happening at greater speed and with more architectural diversity (MoE, MTP, vision). **Second, GGUF quantization is no longer just a community convenience—it is a primary distribution format.** Models like the Gemma 4 coder GGUF (414K downloads) and Qwopus3.6-27B GGUF (214K downloads) rival or exceed their base model counterparts in popularity, confirming that local inference on consumer hardware is a first-class use case. **Third, Chinese AI labs are dominating the open-weight conversation.** DeepSeek, Zhipu AI (GLM), Moonshot AI (Kimi), MiniMax, and Alibaba (Qwen) collectively represent the majority of high-engagement models, while Google's Gemma 4 and NVIDIA's specialized models are the primary Western counterparts. **Fourth, model specialization is accelerating.** Rather than general-purpose releases, the trending list is dominated by code models, agentic models, OCR models, ASR models, and embedding models—reflecting a maturing ecosystem where foundation models are platforms for task-specific adaptation rather than end products. **Fifth, 1M-token context windows are emerging as a new battleground**, with models like Qwythos-9B explicitly advertising this capability. The overall signal is clear: open-weight AI is not only competitive with proprietary offerings but is increasingly where innovation in fine-tuning, quantization, and specialization happens fastest.

---

## 4. Worth Exploring

### 🔬 [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
With 5,012 likes and 2.4 million downloads in its debut week, DeepSeek-V4-Pro is the clear model to watch. As DeepSeek's latest reasoning-optimized architecture, it likely pushes the frontier of what open-weight models can achieve on complex analytical and mathematical tasks. Studying its architecture and benchmark performance will be essential for understanding where open-weight LLMs stand relative to proprietary alternatives in mid-2026.

### 🛠️ [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)
This community GGUF fine-tune of Gemma 4 12B is the most downloaded model on the entire list (414,734 downloads), revealing a massive grassroots demand for runnable, quantized coding assistants. It is worth studying as a case example of how the community is bridging the gap between large foundation models and practical local deployment—and as a genuinely useful tool for coding workflows on consumer hardware.

### 🌐 [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)
NVIDIA's 3B-parameter vision-language localization model has earned 2,291 likes—extraordinary for a model of its size and recency. It represents the trend toward highly efficient, task-specific multimodal models that punch above their parameter count. For anyone building visual search, image understanding, or robotics applications, this model is a compelling starting point for experimentation.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*