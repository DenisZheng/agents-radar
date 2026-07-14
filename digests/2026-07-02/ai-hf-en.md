# Hugging Face Trending Models Digest 2026-07-02

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-02 00:28 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-02

## 1. Today's Highlights

This week's trending models reveal a boom in **GGUF-quantized reasoning models** and **multimodal MoE architectures**. The **GLM-5.2** family dominates with the base model (#3, 3.1K likes) alongside NVIDIA's NVFP4 quantized variant (#14) and community GGUF releases from Unsloth (#24) and huihui-ai (#27). **DeepSeek-V4** debuts with two entries (Pro-DSpark and Flash-DSpark), signaling DeepSeek's push into sparse activation. In the image domain, **NVIDIA's LocateAnything-3B** (#16, 2.5K likes, 896K downloads) is a breakout hit for visual grounding, while **Krea-2-Turbo** (#12) shows real-time text-to-image momentum. A notable uncensored MoE variant, **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** (#23), has amassed over 3 million downloads—the highest on the list.

## 2. Trending Models by Category

### 🧠 Language Models

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 3,168 likes | 159,967 downloads  
  A MoE-based conversational model (likely GLM's successor with dynamic sparse attention), trending as the top LLM this week.

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** — Qwen | 497 likes | 34,371 downloads  
  A 35B-parameter MoE agent model (3B active) with world-model reasoning, reflecting Qwen's agentic turn.

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — deepseek-ai | 277 likes | 7,629 downloads  
  DeepSeek's fourth-generation model with DSpark sparse computation, pushing reasoning efficiency alongside arxiv:2606.19348.

- **[deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)** — deepseek-ai | 124 likes | 13,038 downloads  
  A faster variant of V4-Pro, optimized for lower latency with the same DSpark architecture.

- **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)** — LiquidAI | 180 likes | 21,935 downloads  
  A 230M-parameter liquid foundation model designed for efficient learning, trending for its extreme parameter efficiency.

### 🎨 Multimodal & Generation

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 1,575 likes | 630,246 downloads  
  A powerful image-text-to-text OCR model, trending for its near-universal text extraction capabilities.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia | 2,544 likes | 896,058 downloads  
  A 3B-parameter image feature extraction model for precise object localization, the top model by downloads on the list.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — krea | 435 likes | 56,953 downloads  
  A fast text-to-image diffusion model based on Krea-2-Raw, optimized for real-time generation.

- **[krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)** — krea | 260 likes | 39,515 downloads  
  The base Krea-2 image generation model, powering the Turbo variant and several LoRA adaptations.

- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** — fal | 136 likes | 0 downloads  
  A LoRA for image-to-video generation with realistic 3D effects, at an early adoption stage.

### 🔧 Specialized Models

- **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)** — nvidia | 198 likes | 136,933 downloads  
  NVIDIA's 4-bit floating point quantized GLM-5.2, enabling high-performance inference on NVIDIA hardware.

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** — nvidia | 171 likes | 2,671 downloads  
  A 27B MoE model (likely 3.6B active) using NVIDIA's ModelOpt-optimized NVFP4 quantization for Qwen.

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — InternScience | 138 likes | 511 downloads  
  A MoE text-generation model (based on Qwen3.5) specialized for agentic tasks, reflecting the growing agent ecosystem.

### 📦 Fine-tunes & Quantizations

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — yuxinlu1 | 2,551 likes | 597,090 downloads  
  A GGUF-quantized Gemma-4-12B fine-tune optimized for coding and reasoning, combining Fable5 and Composer 2.5 techniques.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 1,150 likes | 1,113,871 downloads  
  A 9B Qwen3.5-based GGUF fine-tune blending Claude-style reasoning with Mythos distillation, highly downloaded.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — deepreinforce-ai | 609 likes | 233,701 downloads  
  GGUF quantized version of the Ornith-1.0-35B MoE model, MIT-licensed and endpoints-compatible.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 2,376 likes | 3,055,962 downloads  
  An uncensored GGUF MoE variant of Qwen3.6 (35B total, 3B active) with aggressive alignment modifications; highest download count on the list.

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** — unsloth | 490 likes | 212,201 downloads  
  Unsloth's GGUF quantization of GLM-5.2, optimized for consumer hardware inference.

- **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)** — huihui-ai | 115 likes | 901 downloads  
  An "abliterated" GGUF variant of GLM-5.2 with safety alignment removed, appealing to uncensored use cases.

- **[Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF)** — Jackrong | 99 likes | 12,635 downloads  
  A Qwen3.6-based MoE GGUF fine-tune for coding with Multi-Turn Prediction, targeting developer workflows.

## 3. Ecosystem Signal

**Model families gaining momentum:** The **GLM-5.2** ecosystem (base, NVIDIA NVFP4, Unsloth GGUF, abliterated variants) shows strong community adoption with diverse quantization options. **DeepSeek-V4** enters the scene with two DSpark entries, signaling a shift toward sparse MoE architectures for scaling efficiency. The **Ornith-1.0** family from deepreinforce-ai spans 9B, 35B, and 397B sizes with MIT licensing—a notable open-weight play.

**Open-weight vs proprietary trends:** Nearly all top models are openly available, with NVIDIA and Baidu contributing alongside independent labs. The "abliterated" and uncensored variants (HauhauCS, huihui-ai) indicate demand for unfiltered base models persists despite safety debates.

**Quantization & fine-tuning activity:** GGUF dominates—13 of 30 models are GGUF quantized (43%). The popularity of Gemma-4-12B, Ornith, and Qwen MoE GGUF variants suggests a strong consumer ecosystem for efficient local execution. Unsloth and huihui-ai are key community quantization players. The uncensored Qwen3.6 variant's 3M downloads highlights demand for politically unrestricted models.

**Notable:**
- **Image-video generation** is nascent but growing (fal/LTX-2.3-3DREAL-LoRA)
- **Agent-specific models** (Qwen-AgentWorld, InternScience/Agents-A1) reflect the shifting focus from pure chat to tool-use and world models
- The **Krea-2** family (base, Turbo, Comfy-Org, style LoRAs) shows maturation of the text-to-image ecosystem with community LoRA support

## 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — With 2.5K likes and nearly 900K downloads, this is the breakout multimodal model of the week. It fills a real gap in visual grounding at a practical 3B size, making it ideal for OCR pipelines, UI automation, and robotics perception.

2. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — At 2,551 likes and 597K downloads, this Gemma-4-12B fine-tune combines two advanced training techniques (Fable5 + Composer 2.5) for coding. Its GGUF format makes it accessible for local development, and it's a strong candidate for agentic code generation workflows.

3. **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — DeepSeek's V4 architecture with DSpark sparse computation is a technical landmark. While still low on downloads (7.6K), it represents the frontier of efficient reasoning—worth studying for researchers and for evaluating against GPT-4-class models in open-weight form.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*