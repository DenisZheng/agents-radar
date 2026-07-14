# Hugging Face Trending Models Digest 2026-07-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-08 01:28 UTC

---

Here is the structured Hugging Face Trending Models Digest for July 8, 2026.

---

## Hugging Face Trending Models Digest — 2026-07-08

### 1. Today’s Highlights

The Hugging Face ecosystem is dominated by a wave of **MoE (Mixture-of-Experts) and quantized GGUF releases** from the Qwen 3.5/3.6 and GLM families. High-download outliers include **Qwen 3.6-based uncensored vision models** and **Gemma 4 fine-tunes for coding and agentic tasks**. Nvidia is pushing both multimodal localization models (LocateAnything-3B) and high-efficiency inference formats (NVFP4), while new entrants like **DeepSeek V4 Pro and Tencent’s Hy3** signal continued corporate investment in open-weight release cycles.

---

### 2. Trending Models by Category

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  *Author:* zai-org | *Likes:* 3,591 | *Downloads:* 281,584  
  A conversational MoE transformer based on GLM architecture; trending due to its massive community reception and strong multi-turn dialogue performance.

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**  
  *Author:* deepseek-ai | *Likes:* 424 | *Downloads:* 15,538  
  The latest iteration of DeepSeek’s flagship reasoning model, attracting attention for its accompanying arXiv paper and advanced dspark optimization.

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**  
  *Author:* tencent | *Likes:* 488 | *Downloads:* 121  
  A new text-generation model from Tencent’s Hunyuan family; early-stage but high-signal due to corporate backing and fresh architecture releases.

- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)**  
  *Author:* mistralai | *Likes:* 157 | *Downloads:* 157  
  Mistral’s sparse MoE flagship (119B total, 6B active); low download count but high strategic importance as a vLLM-compatible open-weight leader.

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)**  
  *Author:* meituan-longcat | *Likes:* 139 | *Downloads:* 385  
  A long-context conversational model from Meituan; niche but notable for its focus on extended context windows in production-grade chat.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
  *Author:* nvidia | *Likes:* 2,657 | *Downloads:* 1,424,958  
  An image-text-to-text model for zero-shot object localization; surging due to its simplicity, Nvidia brand, and broad visual grounding use cases.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  *Author:* HauhauCS | *Likes:* 2,551 | *Downloads:* 2,823,988  
  An uncensored, aggressive-tuned vision MoE model based on Qwen 3.6; one of the highest-download models this week, driven by uncensored communities.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  *Author:* empero-ai | *Likes:* 1,758 | *Downloads:* 1,683,711  
  A GGUF-quantized multimodal Claude-style merge; highly popular for local deployment of a “Mythos” roleplay/reasoning blend.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**  
  *Author:* krea | *Likes:* 540 | *Downloads:* 123,729  
  A text-to-image diffusion model built on Krea-2-Raw; trending for its turbo inference speed and competitive image quality.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  *Author:* baidu | *Likes:* 1,833 | *Downloads:* 1,084,945  
  A feature-extraction model for OCR; widely downloaded for production document processing pipelines.

#### 🔧 Specialized Models (code, math, medical, embeddings)

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**  
  *Author:* google | *Likes:* 287 | *Downloads:* 9,458  
  Google’s foundational model for tabular data classification and regression with zero-shot capabilities; a new category entry for structured data ML.

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**  
  *Author:* yuxinlu1 | *Likes:* 2,638 | *Downloads:* 674,977  
  A Gemma 4 GGUF fine-tune specialized for code and reasoning; one of the most-liked models this week due to strong coding benchmarks.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**  
  *Author:* yuxinlu1 | *Likes:* 1,076 | *Downloads:* 384,383  
  Another Gemma 4 GGUF variant, focused on agentic and terminal use; trending as agent frameworks mature.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**  
  *Author:* unsloth | *Likes:* 991 | *Downloads:* 2,842,118  
  A GGUF quantized version of Qwen 3.6 27B using Unsloth’s fast quantization pipeline; the most downloaded model this week.

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**  
  *Author:* nvidia | *Likes:* 315 | *Downloads:* 538,687  
  Nvidia’s 4-bit floating-point quantization of Qwen 3.6 27B using Model Optimizer; signals Nvidia’s push into efficient LLM inference formats.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**  
  *Author:* deepreinforce-ai | *Likes:* 779 | *Downloads:* 502,663  
  MIT-licensed GGUF variant of the Ornith-1.0 MoE; broadly adopted for its permissive license and stable quantization.

- **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)**  
  *Author:* huihui-ai | *Likes:* 185 | *Downloads:* 7,349  
  An “abliterated” (safety-filter-removed) GGUF of GLM-5.2; niche but notable for the abliteration trend on top MoEs.

- **[InternScience/Agents-A1-Q4_K_M-GGUF](https://huggingface.co/InternScience/Agents-A1-Q4_K_M-GGUF)**  
  *Author:* InternScience | *Likes:* 74 | *Downloads:* 11,226  
  A quantized MoE vision-language model optimized for local agent deployment; growing alongside the agent-model ecosystem.

---

### 3. Ecosystem Signal

The ecosystem is seeing a **decisive shift toward Mixture-of-Experts (MoE) architectures** as the dominant paradigm for both dense and sparse models: Qwen 3.5/3.6, GLM-5.2, Ornith, and Nemotron all leverage MoE. **GGUF quantization remains the primary vehicle for community adoption**, with most top-10 downloads being GGUF variants. **Nvidia is emerging as a key infrastructure player**, releasing both multimodal perception models (LocateAnything) and low-bit floating-point quantizations (NVFP4). **Open-weight corporate releases from Tencent, Baidu, and DeepSeek** are accelerating, while **Mistral’s Leanstral series** sets a new bar for sparse activation efficiency. There is also a notable uptick in **uncensored and “abliterated” fine-tunes**, reflecting strong demand for unrestrained model behavior in local deployments.

---

### 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — A rare compact + capable vision grounding model from Nvidia. Worth studying for anyone building visual agent or RPA pipelines.

2. **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** — A state-of-the-art sparse MoE with only 6B active parameters. Excellent candidate for studying efficient scaling and production MoE deployment.

3. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — Google’s entry into tabular foundation models. If it generalizes well, it could reshape how teams approach structured data ML. Early but high-impact potential.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*