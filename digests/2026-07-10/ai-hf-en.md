# Hugging Face Trending Models Digest 2026-07-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-10 01:49 UTC

---

# 🤗 Hugging Face Trending Models Digest — July 10, 2026

## 1. Today's Highlights

This week's trending models reveal a clear surge in **multi-modal MoE architectures** and **aggressive quantization efforts** targeting consumer hardware. NVIDIA is making a strong play with multiple entries in vision-based feature extraction and efficiency-optimized language models. The **Qwen 3.6** ecosystem continues to dominate the fine-tuning landscape, spawning both uncensored variants and specialized agents. Meanwhile, the newly released **DeepSeek-V4-Pro-DSpark** from DeepSeek AI is attracting significant attention alongside a companion GGUF quantization from Unsloth. A notable trend is the rise of **"Fable" series fine-tunes** based on Gemma 4 and MiniCPM5, suggesting an emerging methodology for instruction-tuning. Several Chinese tech giants — Tencent, Baidu, Zhipu AI (zai-org), and Meituan — are pushing significant new weights, signaling aggressive open-weight competition.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

**[tencent/Hy3](https://huggingface.co/tencent/Hy3)**  
*Tencent | 615 likes, 5,572 downloads*  
A new generation of Tencent's Hunyuan-series LLM with text-generation pipeline, likely a dense or MoE architecture optimized for conversational Chinese and English understanding.

**[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
*zai-org | 3,729 likes, 362,300 downloads*  
The latest flagship GLM model employing MoE-DSA architecture; its massive popularity reflects the community's appetite for open-weight Chinese language models with strong reasoning capabilities.

**[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**  
*InternScience | 436 likes, 23,112 downloads*  
A Qwen 3.5-based MoE agent model designed for tool-use and autonomous task completion, riding the wave of agentic AI interest.

**[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)**  
*meituan-longcat | 165 likes, 1,107 downloads*  
Meituan's updated long-context conversational model optimized for extended dialogues and retrieval-augmented chat applications.

**[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**  
*bottlecapai | 186 likes, 2,189 downloads*  
A Qwen 3.6-based reasoning model with explicit "thinking" capability enabled, targeting improved chain-of-thought performance.

**[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**  
*deepseek-ai | 458 likes, 29,230 downloads*  
DeepSeek's latest flagship Pro variant with DSpark acceleration, accompanying a published arXiv paper (2606.19348); signals a major open-weight milestone.

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

**[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
*Baidu | 1,903 likes, 1,246,042 downloads*  
A large-scale OCR model with an "unlimited" scope claim, achieving extremely high download volume for document understanding and text extraction tasks.

**[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
*NVIDIA | 2,687 likes, 1,447,244 downloads*  
NVIDIA's vision-based localization model that can identify and ground any object in images; the third most-liked model on the list and a top earner in downloads.

**[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**  
*krea | 569 likes, 157,302 downloads*  
A faster, optimized variant of the Krea-2 image generation model using the diffusers pipeline, popular for its speed-quality tradeoff.

**[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**  
*conradlocke | 132 likes, 0 downloads*  
A LoRA adapter for Krea-2 enabling identity-preserving image editing, leveraging ComfyUI workflows for creative applications.

**[Patil/Krea-2-depth-controlnet](https://github.com/Patil/Krea-2-depth-controlnet)**  
*Patil | 83 likes, 0 downloads*  
A depth-conditioned ControlNet for Krea-2, enabling spatially-aware image generation from depth maps using flow-matching.

**[eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B)**  
*eric-venti-seeds | 123 likes, 0 downloads*  
A lighting-direction LoRA for the Flux2Klein model family, providing fine-grained control over sun/lighting angle in generated scenes.

---

### 🔧 Specialized Models (code, math, medical, embeddings, tabular)

**[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**  
*Google | 330 likes, 16,374 downloads*  
Google's foundational tabular model supporting zero-shot classification and regression — an important step toward foundation models for structured data.

**[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)**  
*Mistral AI | 179 likes, 258 downloads*  
A 119B-parameter model with only 6B active parameters (MoE), trained via fine-tuning from Leanstral-2603; targets efficient inference with high effective capacity.

**[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)**  
*NVIDIA | 85 likes, 16,959 downloads*  
NVIDIA's Nemotron Labs puzzle-solving model, a 75B MoE (9B active) with NVFP4 quantization for inference efficiency.

**[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)**  
*NVIDIA | 82 likes, 436 downloads*  
A 30B MoE (3B active) Nemotron Labs model potentially focused on audio or speech processing tasks.

**[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)**  
*SupraLabs | 73 likes, 722 downloads*  
A compact 51M-parameter routing model for Mixture-of-Experts switching, serving as an infrastructure component rather than an end-user model.

**[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**  
*deepreinforce-ai | 820 likes, 957,721 downloads*  
A 35B parameter GGUF-quantized model under MIT license, likely optimized for creative writing or roleplay; massive download volume suggests broad community adoption.

**[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)**  
*AliesTaha | 197 likes, 4,647 downloads*  
A Qwen 3-based instruction-tuned model, part of the emergent "fable" fine-tuning methodology family.

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

**[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
*empero-ai | 1,930 likes, 1,875,602 downloads*  
The most downloaded model on this list — a GGUF-quantized Qwen 3.5 fine-tune with reasoning enhancements, optimized for llama.cpp inference on consumer GPUs.

**[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
*HauhauCS | 2,596 likes, 2,716,428 downloads*  
The most-liked and most-downloaded model on the list (2.7M downloads) — an uncensored, aggressively fine-tuned Qwen 3.6 MoE with vision capabilities, indicating intense demand for unconstrained chat models.

**[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**  
*yuxinlu1 | 2,670 likes, 703,735 downloads*  
A GGUF-quantized Gemma 4 coder fine-tuned with the "fable5-composer2.5" methodology, showing strong community enthusiasm for code-specialized models compressed for local use.

**[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**  
*Unsloth | 1,025 likes, 2,894,918 downloads*  
Unsloth's MTP (Multi-Turn Prompt) optimized quantization of Qwen 3.6 — the second most-downloaded model, demonstrating Unsloth's dominant position in the quantization ecosystem.

**[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**  
*yuxinlu1 | 1,117 likes, 418,171 downloads*  
Gemma 4 fine-tuned for agentic and terminal-use tasks, quantized by the same powerful GGUF workflow.

**[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**  
*empero-ai | 748 likes, 179,378 downloads*  
The non-quantized base of the popular Qwythos fine-tune, preserving the original precision for users who prefer full-weight inference.

**[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)**  
*GnLOLot | 142 likes, 2,239 downloads*  
A 1B-parameter MiniCPM5 fine-tune with "Thinking" capability, tiny enough for mobile and edge deployment.

**[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**  
*froggeric | 822 likes, 0 downloads*  
A metadata/model card fix providing corrected Jinja chat templates for Qwen models — no model weights, but 822 likes indicate widespread pain with template formatting issues.

**[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**  
*NVIDIA | 332 likes, 748,054 downloads*  
NVIDIA's NVFP4-quantized version of Qwen 3.6, optimized with their Model Optimizer toolchain for efficient deployment on NVIDIA hardware.

**[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)**  
*Unsloth | 111 likes, 22,953 downloads*  
Unsloth's GGUF quantization of DeepSeek-V4, providing the Flash-attention optimized variant for rapid inference.

**[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)**  
*open-gigaai | 90 likes, 0 downloads*  
An Apache-2.0 licensed model from an open-gigaai, potentially a world model or simulation-focused diffusion model.

---

## 3. Ecosystem Signal

### Qwen 3.6 Becomes the New Fine-tuning Backbone
The Qwen 3.6 family is clearly the **dominant base model** for community fine-tuning this cycle. With MoE sparse-activation variants like Qwen3.6-35B-A3B, NVIDIA's NVFP4 quantization, Unsloth's MTP optimizations, and aggressive "uncensored" variants, Qwen 3.6 has eclipsed Llama as the community's preferred base. This suggests Alibaba's Qwen team has achieved a strong open-weight position through a permissive license and excellent base model quality.

### Gemma 4 + "Fable" Methodology Gains Traction
A novel pattern is emerging: **Gemma 4 base models** are being fine-tuned using a "Fable" instruction-tuning methodology combined with a "Composer" architecture. The resulting models (from yuxinlu1 and others) are achieving hundreds of thousands of downloads, particularly in quantized GGUF format for coding and agent tasks. This could indicate a new SOTA distillation recipe derived from proprietary models.

### Quantization Dominates Consumption
Nearly half of the top downloads are **GGUF quantized models** — Qwythos, Qwen3.6-35B-A3B, Gemma 4 coders, and DeepSeek-V4 Flash all serve compressed variants. Unsloth has become an infrastructure-level player in the ecosystem, their quantization recipes powering multiple top models. The shift is clear: the ecosystem values **download-and-run local inference** over cloud API usage.

### Chinese Tech Giants Go Open-Weight
Tencent (Hy3), Baidu (Unlimited-OCR), Zhipu AI (GLM-5.2), and Meituan (LongCat-2.0) all released major models. This aggressive open-weight strategy from Chinese companies is reshaping the landscape, especially for Chinese-language and multimodal tasks.

### Enterprise Players Enter Vision and Specialized Domains
NVIDIA dominates the multimodal space with LocateAnything-3B (vision grounding) alongside their Nemotron Labs models, while Google's TabFM brings foundation models to structured data — a traditionally underserved domain.

---

## 4. Worth Exploring

### [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)
**Most liked multimodal model (2,687 likes, 1.4M downloads).** This model represents a breakthrough in open-weight visual grounding — the ability to locate any described object in an image. For practitioners building vision pipelines, RAG with images, or autonomous agents, this fills a critical gap previously dominated by proprietary APIs. Its 3B size makes it viable on consumer GPUs, and its high like-to-download ratio suggests genuine user satisfaction.

### [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
**The most-liked and most-downloaded model (2,596 likes, 2.7M downloads).** This uncensored Qwen 3.6 MoE variant tells an important story about user demand — the community strongly desires models without safety restrictions for creative, roleplay, and research use cases. Understanding why this model resonates so deeply is essential for ecosystem analysts tracking the tension between safety alignment and user freedom.

### [deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)
**A major new flagship with accompanying paper (458 likes, arxiv:2606.19348).** DeepSeek's V4 Pro introduces DSpark acceleration technology. Given DeepSeek's track record of competitive performance, this model is worth studying for its architectural innovations, training methodology, and benchmarks. Its pairing with Unsloth's GGUF quantization suggests the community is already preparing for local deployment.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*