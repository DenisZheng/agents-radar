# Hugging Face Trending Models Digest 2026-05-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-01 01:49 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-05-01

## 1. Today's Highlights

This week's Hugging Face landscape is dominated by the explosive debut of **DeepSeek-V4** variants, with the Pro version amassing over 3,200 likes and 270k+ downloads, signaling a major shift in the open-weight LLM arena. **Qwen3.6** continues its reign as the most downloaded model family across multiple sizes and formats, while **Google's Gemma-4-31B-it** leads absolute download figures at over 7 million. A strong wave of **uncensored community fine-tunes** on Qwen3.6 models (from HauhauCS, AEON-7) and the emergence of **MiMo-V2.5** from Xiaomi highlight growing demand for multimodal and agent-capable models. The ecosystem is also seeing increased **GGUF quantization activity** via unsloth, and **specialized any-to-any models** from NVIDIA and inclusionAI are gaining traction.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — deepseek-ai · 3,299 likes · 271,652 downloads  
  The flagship conversational LLM of the DeepSeek-V4 family, trending as the most-liked model this week due to its state-of-the-art reasoning and massive community interest.

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — deepseek-ai · 883 likes · 198,830 downloads  
  A faster, MIT-licensed variant of DeepSeek-V4, trending for its permissive licensing and efficient inference profile.

- **[deepseek-ai/DeepSeek-V4-Pro-Base](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-Base)** — deepseek-ai · 246 likes · 1,883 downloads  
  The base (non-chat) version of DeepSeek-V4-Pro in FP8 precision, gaining attention for fine-tuning and research use cases.

- **[deepseek-ai/DeepSeek-V4-Flash-Base](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Base)** — deepseek-ai · 185 likes · 6,797 downloads  
  FP8 base model companion to DeepSeek-V4-Flash, preferred for lightweight customization workloads.

- **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)** — z-lab · 181 likes · 12,879 downloads  
  A distilled Flash variant of Qwen3.6-27B optimized for feature extraction, trending for efficient deployment.

- **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)** — mistralai · 170 likes · 2,528 downloads  
  A 128B-parameter medium-scale Mistral model with vLLM support, attracting attention for its multilingual (EN/FR) capabilities.

- **[talkie-lm/talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it)** — talkie-lm · 171 likes · 0 downloads  
  Instruction-tuned 13B model based on a custom base, notable for Apache-2.0 licensing despite zero downloads yet.

- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)** — poolside · 160 likes · 3,077 downloads  
  A text-generation model from poolside, gaining traction in the vLLM ecosystem for code and general reasoning tasks.

- **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)** — tencent · 190 likes · 14,145 downloads  
  Tencent's Hy3 preview model, a conversational LLM generating interest for its potential as a strong Chinese-language competitor.

- **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** — zai-org · 1,567 likes · 276,153 downloads  
  A MoE-based conversational model from the GLM family, highly popular for its efficient DSA attention mechanism and strong performance.

- **[inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T)** — inclusionAI · 70 likes · 315 downloads  
  A massive 1T-parameter conversational model from inclusionAI's Ling-2.6 series, trending for its ambitious scale and Bailing hybrid architecture.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** — Qwen · 1,031 likes · 766,593 downloads  
  A 27B image-text-to-text model leading the Qwen3.6 family, trending for strong multimodal reasoning and massive adoption.

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — Qwen · 1,538 likes · 1,977,187 downloads  
  A 35B MoE variant with 3B active parameters, extremely popular for its efficiency/performance trade-off in multimodal tasks.

- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** — moonshotai · 1,166 likes · 591,214 downloads  
  Kimi's K2.6 vision-language model with compressed tensors, trending for its feature extraction capabilities and efficient architecture.

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** — XiaomiMiMo · 318 likes · 4,468 downloads  
  Xiaomi's flagship text-generation agent model with long-context support, gaining interest as an agent-capable LLM.

- **[XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5)** — XiaomiMiMo · 168 likes · 18,731 downloads  
  The base multimodal variant of MiMo, supporting vision-language and audio tasks, signaling Xiaomi's push into open multimodal AI.

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** — nvidia · 168 likes · 25,657 downloads  
  NVIDIA's any-to-any reasoning MoE model (30B total, 3B active), trending for omni-modal capabilities and efficient inference.

- **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** — inclusionAI · 237 likes · 674 downloads  
  A unified any-to-any model combining transformers and diffusers, gaining traction for multimodal generation versatility.

- **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** — sensenova · 90 likes · 745 downloads  
  An 8B any-to-any multimodal model from SenseNova, notable for its MoT (Mixture-of-Transformers) architecture.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — google · 2,452 likes · 7,111,084 downloads  
  Google's Gemma-4 instruction-tuned 31B multimodal model, the absolute download leader this week, reflecting massive enterprise interest.

- **[facebook/sapiens2](https://huggingface.co/facebook/sapiens2)** — facebook · 102 likes · 0 downloads  
  A human-centric vision transformer model from Meta, notable for its arxiv publication and potential in human pose/segmentation tasks.

- **[inclusionAI/Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash)** — inclusionAI · 123 likes · 805 downloads  
  A faster variant of Ling-2.6 with MIT license, gaining interest for efficient multimodal deployment.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** — openai · 1,139 likes · 82,887 downloads  
  OpenAI's token-classification model for privacy filtering, trending as a key tool for data sanitization pipelines.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** — unsloth · 513 likes · 855,842 downloads  
  GGUF quantization of Qwen3.6-27B by unsloth, extremely popular for local deployment on consumer hardware.

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — unsloth · 873 likes · 1,850,307 downloads  
  GGUF variant of the MoE Qwen3.6-35B-A3B, the second most-downloaded model this week, ideal for efficient local multimodal use.

- **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)** — HauhauCS · 241 likes · 265,356 downloads  
  Uncensored fine-tune of Qwen3.6-27B with aggressive behavior profile, trending in the uncensored model community.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS · 511 likes · 662,312 downloads  
  MoE uncensored variant with strong download numbers, reflecting demand for less restricted multimodal models.

- **[AEON-7/Qwen3.6-27B-AEON-Ultimate-Uncensored-BF16](https://huggingface.co/AEON-7/Qwen3.6-27B-AEON-Ultimate-Uncensored-BF16)** — AEON-7 · 70 likes · 2,883 downloads  
  BF16 uncensored fine-tune using abliteration techniques, notable for its technical approach to safety removal.

- **[kai-os/Carnice-V2-27b-GGUF](https://huggingface.co/kai-os/Carnice-V2-27b-GGUF)** — kai-os · 71 likes · 21,446 downloads  
  GGUF conversion of a Qwen3.6-based model, gaining downloads for llama.cpp compatibility.

- **[unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF)** — unsloth · 83 likes · 17,478 downloads  
  GGUF version of NVIDIA's reasoning omni-modal model, enabling consumer-grade hardware inference.

## 3. Ecosystem Signal

The current Hugging Face ecosystem shows three dominant momentum vectors. **First, the DeepSeek-V4 release** marks a paradigm shift in open-weight LLM quality, achieving top likes and downloads while establishing a clear "Pro vs Flash" tiering strategy. **Second, the Qwen3.6 ecosystem** has become the most active fine-tuning substrate, with community members creating uncensored, quantized (GGUF), and distilled variants at scale — reflecting a maturation of the open-source LLM supply chain where base models serve as platforms for derivative works. **Third, the rise of any-to-any models** (NVIDIA Nemotron-3, inclusionAI LLaDA2.0, SenseNova U1) signals that multimodal omni-models are becoming the new frontier, moving beyond simple image-text-to-text to true multi-modal reasoning.

Notably, **open-weight models continue to dominate the leaderboard** with no proprietary-only entries in the top 30. The **GGUF quantization ecosystem (via unsloth)** drives massive download numbers for local deployment, with Qwen3.6 variants reaching 1.8M+ downloads. The **uncensored model subculture** is particularly active around Qwen3.6, suggesting strong community demand for models without built-in safety guardrails. Finally, **Chinese AI labs** (DeepSeek, Qwen, Xiaomi Moonshot, Tencent, inclusionAI) account for over half of the trending models, underscoring China's growing influence in open-weight AI development.

## 4. Worth Exploring

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — As the most-liked model of the week, this represents the current state-of-the-art in open-weight LLMs. It's worth studying for its architecture choices, training methodology, and conversational quality that led to such rapid community adoption.

2. **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** — A pioneering any-to-any reasoning model with MoE efficiency, this model exemplifies the next frontier of omni-modal AI. Its 3B active parameter design makes it uniquely accessible for experimentation on consumer hardware.

3. **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** — With 1,567 likes and strong download numbers, this MoE conversational model from the GLM family deserves attention for its DSA attention mechanism and competitive performance. It represents a strong alternative to Qwen and DeepSeek in the Chinese LLM ecosystem.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*