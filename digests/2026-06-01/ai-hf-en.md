# Hugging Face Trending Models Digest 2026-06-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-01 02:21 UTC

---

# Hugging Face Trending Models Digest — June 1, 2026

---

## 1. Today's Highlights

The **Qwen3.6** family dominates this week's trending list like never before, appearing in at least seven distinct entries across official releases, community fine-tunes, and GGUF quantizations — a clear signal that Alibaba's latest architecture has become the community's go-to base model. **DeepSeek-V4-Pro** leads all models with 4,502 likes and nearly 6 million downloads, cementing DeepSeek's position as the most downloaded open-weight model family on the platform. Multimodal and video generation models are surging, with entries from ByteDance, Meituan, and SulphurAI reflecting the industry's push toward unified any-to-any generation. Meanwhile, **openai/privacy-filter** marks a notable open-source release from OpenAI, drawing significant attention for its token-classification approach to data privacy. The sheer volume of GGUF and community quantization activity underscores that edge deployment and local inference remain the dominant grassroots trend.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, Chat Models, Instruction-Tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — *Author: deepseek-ai | 4,502 likes | 5,886,599 downloads*
  DeepSeek's flagship conversational model leads the entire trending list in both likes and downloads, reflecting its status as the most widely adopted open-weight LLM.

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — *Author: deepseek-ai | 1,321 likes | 3,483,641 downloads*
  A lighter, faster variant of DeepSeek-V4 that is rapidly gaining traction for production deployments where latency matters.

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** — *Author: Qwen | 1,552 likes | 5,064,096 downloads*
  Alibaba's Qwen3.6 27B is the most-liked official model release this week, establishing itself as the community's preferred open-weight foundation for both text and vision tasks.

- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** — *Author: openbmb | 661 likes | 36,730 downloads*
  A compact 1B-parameter text-generation model from OpenBMB that punches above its weight for on-device and resource-constrained scenarios.

- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** — *Author: LiquidAI | 321 likes | 27,677 downloads*
  LiquidAI's mixture-of-experts architecture with only 1B active parameters delivers strong text-generation performance in a remarkably small footprint.

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** — *Author: sapientinc | 428 likes | 143,904 downloads*
  A 1B-parameter text model from Sapient Inc. that has attracted significant download interest, suggesting strong community curiosity about its novel architecture.

- **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)** — *Author: tencent | 440 likes | 4,226 downloads*
  Tencent's hybrid MoE translation model targets high-quality multilingual translation with an efficient 3B active parameter design.

- **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** — *Author: tencent | 1,094 likes | 17,471 downloads*
  The smaller sibling of Tencent's Hy-MT2 family, this dense 1.8B translation model is gaining strong community traction for lightweight multilingual tasks.

- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** — *Author: nvidia | 92 likes | 105,608 downloads*
  NVIDIA's NVFP4-quantized version of Qwen3.6 35B MoE enables efficient inference on NVIDIA hardware with minimal quality loss.

---

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** — *Author: SulphurAI | 1,470 likes | 1,590,236 downloads*
  A text-to-video generation model with massive download numbers, indicating strong community demand for accessible open-weight video synthesis.

- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** — *Author: bytedance-research | 992 likes | 2,948 downloads*
  ByteDance's any-to-any multimodal model supports both image and video generation, representing the industry's push toward unified generative architectures.

- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** — *Author: openbmb | 1,084 likes | 444,679 downloads*
  The latest vision-language model in the MiniCPM-V series delivers strong multimodal understanding in a compact, efficient package.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — *Author: nvidia | 611 likes | 24,586 downloads*
  NVIDIA's 3B image-text-to-text model focuses on visual localization tasks, bridging the gap between understanding and grounding in vision-language AI.

- **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** — *Author: meituan-longcat | 440 likes | 0 downloads*
  Meituan's video avatar generation model targets audio- and text-driven talking-head video synthesis, a rapidly growing application area.

- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** — *Author: Supertone | 754 likes | 56,472 downloads*
  A text-to-speech synthesis model that has carved out a strong niche in high-quality, natural voice generation.

- **[microsoft/Lens](https://huggingface.co/microsoft/Lens)** — *Author: microsoft | 149 likes | 1,959 downloads*
  Microsoft's text-to-image diffusion model, backed by academic research (arxiv:2605.21573), adds to the growing roster of corporate open-weight image generators.

- **[nvidia/PiD](https://huggingface.co/nvidia/PiD)** — *Author: nvidia | 218 likes | 498 downloads*
  NVIDIA's image-to-image super-resolution model leverages diffusion techniques for high-quality image upscaling.

- **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** — *Author: NemoStation | 471 likes | 16,277 downloads*
  A 2B video-text-to-text model built on Qwen3.5, targeting efficient video understanding and captioning.

- **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)** — *Author: numind | 208 likes | 57,248 downloads*
  An image-to-text extraction model from Numind that specializes in structured data extraction from visual documents.

- **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** — *Author: PaddlePaddle | 118 likes | 2,731 downloads*
  The latest iteration of PaddlePaddle's OCR model, now powered by ERNIE4.5 vision-language capabilities for improved document understanding.

- **[OpenMOSS-Team/MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5)** — *Author: OpenMOSS-Team | 83 likes | 14,272 downloads*
  A Chinese-focused text-to-speech model from the OpenMOSS team, continuing their open-source speech synthesis efforts.

- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** — *Author: stepfun-ai | 162 likes | 7,638 downloads*
  StepFun's vision-language model offers fast image-text-to-text inference for multimodal understanding tasks.

---

### 🔧 Specialized Models (Code, Math, Medical, Embeddings, Privacy)

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** — *Author: openai | 1,573 likes | 306,344 downloads*
  OpenAI's open-source token-classification model for detecting and filtering personally identifiable information, a rare and notable release from the company.

---

### 📦 Fine-tunes & Quantizations (Community Fine-tunes, GGUF, AWQ)

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — *Author: HauhauCS | 1,160 likes | 2,439,402 downloads*
  An uncensored GGUF fine-tune of Qwen3.6 35B MoE that has amassed over 2.4 million downloads, making it one of the most-downloaded community models this week.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — *Author: unsloth | 578 likes | 926,440 downloads*
  Unsloth's GGUF quantization of Qwen3.6 27B with multi-token prediction support enables efficient local inference with enhanced generation quality.

- **[Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)** — *Author: Jackrong | 178 likes | 124,807 downloads*
  A community GGUF quantization of Qwen3.6 27B with MTP (multi-token prediction) for faster speculative decoding on consumer hardware.

- **[Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF)** — *Author: Jackrong | 190 likes | 37,241 downloads*
  The standard GGUF variant of the Qwopus3.6-27B-v2, optimized for llama.cpp deployment without MTP overhead.

- **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)** — *Author: LiquidAI | 133 likes | 41,828 downloads*
  LiquidAI's official GGUF build of their LFM2.5 MoE model, purpose-built for edge deployment via llama.cpp.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — *Author: froggeric | 469 likes | 0 downloads*
  A community-maintained collection of corrected Jinja chat templates for the Qwen family, addressing known formatting issues in official releases.

- **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** — *Author: circlestone-labs | 1,610 likes | 756,861 downloads*
  A single-file diffusion model optimized for ComfyUI workflows, reflecting the strong community demand for plug-and-play generative models.

---

## 3. Ecosystem Signal

The Qwen3.6 family is the undisputed center of gravity in this week's Hugging Face ecosystem. With the official 27B and 35B MoE variants, NVIDIA's NVFP4 quantization, multiple GGUF builds from Unsloth and Jackrong, and even an uncensored community fine-tune, Qwen3.6 appears in more distinct trending entries than any other model family. This mirrors the trajectory Qwen2.5 enjoyed in late 2024 but at a significantly larger scale — the 27B variant alone has surpassed 5 million downloads.

DeepSeek-V4, meanwhile, continues its remarkable run as the most downloaded model family on the platform, with the Pro and Flash variants combining for over 9 million downloads. The DeepSeek-Qwen duopoly in open-weight LLMs is now firmly established, with both families serving as the default foundation for community fine-tuning, quantization, and specialization.

Three broader trends stand out. **First**, the GGUF quantization ecosystem is maturing rapidly: community quantizers like Unsloth and Jackrong are now shipping multi-token prediction (MTP) variants, indicating that speculative decoding is becoming a standard feature rather than a novelty. **Second**, video generation is emerging as the next frontier of open-weight competition, with Sulphur-2-base, Lance, and LongCat-Video-Avatar all trending simultaneously. **Third**, OpenAI's release of a privacy-filter model — while modest in scope — is symbolically significant, suggesting that even the most proprietary AI companies see strategic value in selective open-weight releases. The overall picture is one of a maturing open-weight ecosystem where community infrastructure (GGUF, ComfyUI, chat templates) is becoming as important as the base models themselves.

---

## 4. Worth Exploring

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — With 4,502 likes and nearly 6 million downloads, this is the most impactful open-weight model release of the week. Its combination of conversational ability, broad adoption, and MIT-adjacent licensing makes it the default starting point for anyone building on open-weight LLMs in mid-2026.

2. **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** — The most versatile foundation model on this list, supporting both image-text-to-text and conversational pipelines. Its explosive community ecosystem — already spawning quantizations, fine-tunes, and template fixes within weeks of release — makes it essential to study for understanding where the open-weight ecosystem is heading.

3. **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** — While smaller in scale, this is arguably the most strategically interesting release of the week. OpenAI rarely open-sources models, and a token-classification tool for PII detection addresses a critical compliance need. It's worth studying both for its technical approach and for what it signals about OpenAI's evolving relationship with the open-weight community.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*