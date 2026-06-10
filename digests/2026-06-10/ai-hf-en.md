# Hugging Face Trending Models Digest 2026-06-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-10 00:42 UTC

---



# Hugging Face Trending Models Digest — June 10, 2026

---

## 1. Today's Highlights

The top of the leaderboard is dominated by **DeepSeek-V4-Pro**, which surged to 4,740 likes and over 4.3 million downloads, signaling massive community enthusiasm for DeepSeek's latest flagship. **Google's Gemma 4 family** (12B and 26B variants) is having a breakout moment, with multiple quantized and fine-tuned versions from both Google and Unsloth appearing across the list — a sign of rapid ecosystem adoption. **NVIDIA** is making a strong showing with models spanning vision-language (LocateAnything-3B), speech recognition (Nemotron ASR), and a massive 550B MoE text model (Nemotron-3 Ultra). Meanwhile, the "uncensored" community fine-tune of Qwen3.6-35B by HauhauCS racked up nearly 3 million downloads, reflecting persistent demand for unrestricted open-weight models.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, Chat Models, Instruction-Tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — Author: deepseek-ai | ❤️ 4,740 | ⬇️ 4,302,553
  DeepSeek's latest flagship conversational model leads the entire trending chart by a wide margin, combining strong reasoning with massive download traction.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — Author: HauhauCS | ❤️ 1,593 | ⬇️ 2,983,909
  An uncensored community fine-tune of Qwen3.6-35B (MoE, vision-capable) in GGUF format, trending due to its aggressive personality and near-3M download count.

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** — Author: sapientinc | ❤️ 733 | ⬇️ 133,351
  A compact 1B-parameter text-generation model from Sapient Inc. built on the Hierarchical Reasoning Model (HRM) architecture, drawing interest for its efficiency-focused design.

- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** — Author: LiquidAI | ❤️ 572 | ⬇️ 137,138
  Liquid AI's latest MoE architecture model (8B total, 1B active) delivers strong performance with minimal compute, gaining traction among efficiency-minded developers.

- **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** — Author: nvidia | ❤️ 174 | ⬇️ 56,864
  NVIDIA's colossal 550B-parameter MoE model in BF16, representing the frontier of open-weight large-scale language modeling.

- **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)** — Author: nvidia | ❤️ 152 | ⬇️ 71,818
  The NVFP4-quantized variant of Nemotron-3 Ultra, making the 550B model more deployable on NVIDIA hardware.

- **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** — Author: nex-agi | ❤️ 160 | ⬇️ 783
  A Qwen3.5-based MoE model from Nex-AGI supporting both image-text and text generation, positioning itself as a versatile multimodal LLM.

- **[nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini)** — Author: nex-agi | ❤️ 110 | ⬇️ 748
  The smaller sibling of Nex-N2-Pro, offering a compact Qwen3.5 MoE option for lightweight deployments.

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** — Author: CohereLabs | ❤️ 156 | ⬇️ 1,784
  Cohere's compact code-oriented model built on the Cohere2 MoE architecture, targeting programming and conversational code assistance.

- **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** — Author: JetBrains | ❤️ 272 | ⬇️ 17,571
  JetBrains' 12B MoE "thinking" model optimized for code reasoning and conversational tasks, reflecting the IDE giant's push into AI-assisted development.

- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** — Author: OBLITERATUS | ❤️ 136 | ⬇️ 8,106
  An uncensored/abliterated community fine-tune of Google's Gemma 4 12B, catering to users seeking fewer content restrictions.

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — Author: nvidia | ❤️ 1,729 | ⬇️ 123,922
  NVIDIA's 3B vision-language model for image localization and feature extraction, ranking as the second-most-liked model this week.

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** — Author: ideogram-ai | ❤️ 440 | ⬇️ 5,915
  Ideogram's latest text-to-image model in FP8 precision, offering high-quality image generation with reduced memory footprint.

- **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** — Author: ideogram-ai | ❤️ 287 | ⬇️ 5,250
  The NF4-quantized version of Ideogram 4, making this powerful image generator accessible on consumer hardware.

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** — Author: bosonai | ❤️ 282 | ⬇️ 16,207
  Boson AI's 4B text-to-speech model built on the Higgs multimodal Qwen3 backbone, delivering expressive voice synthesis.

- **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** — Author: google | ❤️ 164 | ⬇️ 18,216
  Google's real-time text-to-audio generation model from the Magenta project, enabling low-latency music and audio synthesis.

- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** — Author: stepfun-ai | ❤️ 358 | ⬇️ 46,729
  StepFun's fast vision-language model supporting image-text-to-text tasks, gaining attention for its speed-quality balance.

- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** — Author: ByteDance | ❤️ 193 | ⬇️ 281
  ByteDance's image-text-to-video generation model (Bernini Renderer), representing the growing frontier of open video generation.

- **[jdopensource/JoyAI-Echo](https://huggingface.co/jdopensource/JoyAI-Echo)** — Author: jdopensource | ❤️ 114 | ⬇️ 4,502
  JD Open Source's text-to-video model built on LTX-Video, with audio-video generation capabilities.

- **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)** — Author: nvidia | ❤️ 214 | ⬇️ 36,739
  NVIDIA's compact Cosmos 3 Omni model for multimodal generation, part of NVIDIA's push into foundation models for physical AI and world simulation.

- **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** — Author: PaddlePaddle | ❤️ 280 | ⬇️ 10,191
  PaddlePaddle's latest vision-language OCR model built on ERNIE 4.5, advancing document understanding and text extraction.

### 🔧 Specialized Models (Code, Speech, OCR)

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — Author: nvidia | ❤️ 318 | ⬇️ 4,181
  NVIDIA's 0.6B streaming ASR model with cache-aware architecture, designed for real-time, low-latency speech recognition.

- **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)** — Author: MisoLabs | ❤️ 173 | ⬇️ 0
  A PyTorch-based text-to-speech model from MisoLabs, newly uploaded and generating early community interest.

### 📦 Fine-tunes & Quantizations (Community Fine-tunes, GGUF, AWQ)

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** — Author: unsloth | ❤️ 531 | ⬇️ 660,140
  Unsloth's GGUF quantization of Gemma 4 12B IT, the most-downloaded GGUF variant this week, enabling efficient local inference.

- **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** — Author: unsloth | ❤️ 171 | ⬇️ 127,332
  Unsloth's QAT-enhanced GGUF version of Gemma 4 12B, offering improved quantization quality over standard methods.

- **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)** — Author: unsloth | ❤️ 114 | ⬇️ 96,059
  The larger 26B MoE variant of Gemma 4, quantized by Unsloth with QAT for image-text-to-text workloads.

- **[google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)** — Author: google | ❤️ 114 | ⬇️ 63,049
  Google's own official Q4_0 GGUF quantization of Gemma 4 12B IT, providing a trusted reference quantization.

- **[Comfy-Org/Ideogram-4](https://huggingface.co/Comfy-Org/Ideogram-4)** — Author: Comfy-Org | ❤️ 111 | ⬇️ 0
  A ComfyUI-packaged version of Ideogram 4, making the image generator accessible within the popular node-based UI workflow.

---

## 3. Ecosystem Signal

This week's trending list reveals several converging dynamics in the open-weight AI ecosystem. **Google's Gemma 4 family** is experiencing explosive community adoption — it appears in 7 out of 30 trending entries (including base models, official quantizations, community fine-tunes, and Unsloth variants), suggesting Gemma 4 has become the go-to open model family for local and fine-tuned deployment. The sheer volume of GGUF and QAT quantizations signals that the community is prioritizing edge and consumer-hardware inference.

**NVIDIA** is emerging as a major open-model powerhouse, with 5 trending models spanning ASR, vision-language, text generation at massive scale (550B MoE), and multimodal generation (Cosmos3). This positions NVIDIA not just as an infrastructure provider but as a direct competitor in the foundation model space.

**MoE (Mixture of Experts) architecture** dominates the new releases — Qwen3.6, LFM2.5, Nemotron-3, Nex-N2, Cohere2, and Mellum2 all use MoE, confirming the industry's shift toward sparse activation for efficiency. Meanwhile, **DeepSeek-V4-Pro's** overwhelming lead in both likes and downloads (4.3M) underscores DeepSeek's continued momentum as a community favorite, likely driven by its strong performance-to-cost ratio.

The presence of multiple "uncensored" and "abliterated" models (HauhauCS's Qwen3.6, OBLITERATUS's Gemma 4) with very high download counts reflects an ongoing tension between safety-aligned releases and community demand for unrestricted models — a dynamic that shows no signs of abating.

---

## 4. Worth Exploring

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — With 4,740 likes and 4.3 million downloads, this is clearly the model the community has rallied around. It's essential to understand what architectural and training improvements DeepSeek has introduced, as it sets the benchmark for open-weight conversational AI in mid-2026.

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — As the second-most-liked model (1,729 likes) with a focused vision-language localization capability, this represents NVIDIA's strategic push into specialized multimodal models. It's worth studying for anyone working on visual grounding, robotics, or spatial reasoning tasks.

3. **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** — With only 1B active parameters out of 8B total, this MoE model from LiquidAI is a compelling case study in extreme efficiency. For developers targeting edge deployment or cost-sensitive applications, LFM2.5 demonstrates how far sparse architectures have come in closing the gap with dense models.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*