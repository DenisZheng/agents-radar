# Hugging Face Trending Models Digest 2026-07-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-09 01:50 UTC

---

Here is the **Hugging Face Trending Models Digest** for **2026-07-09**.

---

## 1. Today's Highlights

The Hugging Face ecosystem is being reshaped by a massive wave of GGUF-quantized releases, with community-driven Qwen 3.5/3.6 variants and fine-tunes dominating the download charts. Nvidia’s **LocateAnything-3B** and Baidu’s **Unlimited-OCR** signal a growing appetite for specialized vision-language models that solve concrete, non-chat tasks. Meanwhile, the **Ornith** series from deepreinforce-ai and the **Gemma-4 coder** fine-tunes from yuxinlu1 highlight a strong push toward performant, locally deployable reasoning and coding models. The week also sees a notable new MoE entry from **zai-org (GLM-5.2)** and the first quantized **DeepSeek-V4** builds, indicating that the large model race is accelerating rapidly in both open-weight and quantized forms.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 3,667 likes | 281k downloads  
  A conversational MoE model based on the GLM-DSA architecture, trending due to its strong balance of multi-turn chat quality and MoE efficiency.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 2,573 likes | 2.8M downloads  
  An uncensored, aggressive fine-tune of Qwen3.6 with vision capabilities, massively popular in GGUF format for local roleplay and creative generation.
- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — deepseek-ai | 439 likes | 15k downloads  
  The latest iteration of DeepSeek’s flagship model series, incorporating DSpark optimization for improved inference speed and reasoning.
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — tencent | 564 likes | 121 downloads  
  Tencent’s Hunyuan V3 text-generation model, gaining attention as a strong Chinese/English bilingual LLM from a major cloud provider.
- **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)** — AliesTaha | 187 likes | 3.8k downloads  
  A Qwen3-based instruct model fine-tuned on synthetic fable narratives, popular for storytelling and creative writing tasks.
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — InternScience | 400 likes | 14k downloads  
  A MoE vision-language model (Qwen3.5-MoE) designed for agentic tool-use and multi-modal reasoning tasks.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia | 2,667 likes | 1.4M downloads  
  Nvidia’s feature-extraction model for zero-shot object localization in images, trending as a practical alternative to large vision-language models.
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 1,873 likes | 1M downloads  
  An image-text-to-text model specialized in unlimited-scale OCR, driving demand for efficient document and scene-text processing.
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — krea | 555 likes | 123k downloads  
  A distilled, faster variant of the Krea-2 image generation model, trending in the creative AI community for its speed and quality.
- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — bottlecapai | 142 likes | 46 downloads  
  A vision-language reasoning model built on Qwen3.6, adding "thinking" tokens for improved multimodal chain-of-thought.
- **[eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B)** — eric-venti-seeds | 107 likes | 0 downloads  
  A LoRA for controlling lighting direction in Flux-based image-to-image generation, trending in the ComfyUI ecosystem.
- **[Patil/Krea-2-depth-controlnet](https://github.com/Patil/Krea-2-depth-controlnet)** — Patil | 71 likes | 0 downloads  
  A depth-conditioned ControlNet for Krea-2, enabling precise structure-guided image editing.

### 🔧 Specialized Models (code, math, medical, embeddings)
- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — google | 313 likes | 9.4k downloads  
  Google’s TabFM foundation model for tabular zero-shot classification and regression, signaling a push toward general-purpose tabular AI.
- **[poolside/Laguna-XS-2.1](https://huggingface.co/poolside/Laguna-XS-2.1)** — poolside | 77 likes | 3.3k downloads  
  A compact code-generation model by Poolside, optimized for software engineering tasks and fine-tuning on enterprise codebases.
- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** — mistralai | 166 likes | 157 downloads  
  Mistral’s latest Leanstral (sparse MoE) with 119B total parameters but only 6B active, trending as a highly efficient coding and reasoning model.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 1,856 likes | 1.6M downloads  
  A GGUF-quantized version of a Claude-Mythos-style fine-tune, top of the charts for its rich creative writing and roleplaying performance.
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — yuxinlu1 | 2,652 likes | 674k downloads  
  A GGUF build of a Gemma-4 coder fine-tune, dominating the coding niche with high reasoning accuracy in a small quantized format.
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — unsloth | 1,010 likes | 2.8M downloads  
  Unsloth’s ultra-efficient quantization of Qwen3.6 with Multi-Token Prediction, one of the most downloaded models this week.
- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — deepreinforce-ai | 800 likes | 502k downloads  
  The GGUF version of the Ornith-1.0 35B MoE model, trending for its strong performance-to-size ratio in local inference.
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric | 781 likes | 0 downloads  
  A community fix for Qwen chat templates (Jinja/MLX), trending as an essential utility for anyone deploying Qwen models locally.
- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** — unsloth | 96 likes | 47 downloads  
  The first GGUF quantization of DeepSeek-V4, making the flagship model accessible to consumer hardware for the first time.

## 3. Ecosystem Signal

The current landscape reveals three dominant trends. First, **Qwen 3.5/3.6 has become the de facto base architecture** for the community: nearly half of the top 30 models are built on it (Ornith, ThinkingCap, HauhauCS, Agents-A1, etc.), and it enjoys massive quantized download volumes. Second, **GGUF quantization is no longer an afterthought—it is the primary distribution channel** for many models, with 11 of the top 30 being GGUF variants, often receiving more downloads than their original float16 counterparts. This signals that local inference on consumer hardware (CPU/GPU) is the dominant use case, not cloud API deployment. Third, **proprietary labs (Nvidia, Baidu, Tencent, Google) are increasingly competing for the "practical application" niche** (OCR, tabular, localization) rather than general chat, while open-weight models from deepseek, Mistral, and Zhipu AI push the frontier on reasoning and MoE. The community’s appetite for **uncensored and roleplay models** remains strong, as evidenced by the massive popularity of Mythos-style fine-tunes.

## 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — A compact, high-accuracy model for zero-shot object localization that outperforms many larger vision-language models. It is a prime candidate for integration into agentic workflows and RPA pipelines.

2. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — The most downloaded quantized model this week; its Multi-Token Prediction architecture promises faster generation with minimal quality loss. A must-test for anyone running LLMs locally.

3. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — At 3,667 likes, this is the most liked model on the list. Its MoE-DSA architecture (Dynamic Sparse Attention) offers a fresh approach to transformer efficiency and is likely to see widespread community adoption.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*