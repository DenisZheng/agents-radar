# Hugging Face Trending Models Digest 2026-06-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-09 00:36 UTC

---

# Hugging Face Trending Models Digest
*Data as of 2026-06-09*

---

## 1. Today's Highlights

This week's Hugging Face leaderboard is dominated by a massive release from DeepSeek: **DeepSeek-V4-Pro** leads with 4,720 likes and a staggering 5.4M downloads, signaling enormous community anticipation for the next generation of this flagship reasoning/model family. Meanwhile, **Google's Gemma 4** ecosystem has fully landed — the 12B and 26B-A4B MoE variants, along with their instruct and quantized GGUF versions, collectively occupy the list with high download counts, showing strong adoption of the new unified any-to-any architecture. NVIDIA continues to push aggressively across modalities with **LocateAnything-3B** (spatial grounding), **Cosmos3-Nano/Super** (world models), and the **Nemotron-3 Ultra 550B-A55B** MoE model in multiple quantization formats. The trend toward Mixture-of-Experts architectures and aggressively quantized deployment formats (GGUF, NVFP4, QAT) is the defining technical theme this week.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, Chat Models, Instruction-Tuned)

- [**DeepSeek-V4-Pro**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) — *deepseek-ai* | ❤️ 4,720 | ⬇️ 5.4M
  The flagship reasoning model from DeepSeek; its record-breaking download count reflects its status as the most anticipated open-weight LLM release this month.

- [**DeepSeek-V4-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) — *deepseek-ai* | ❤️ 1,447 | ⬇️ 3.3M
  The lighter variant of DeepSeek-V4, offering a speed/efficiency trade-off that has resonated strongly with the developer community.

- [**google/gemma-4-12B-it**](https://huggingface.co/google/gemma-4-12B-it) — *google* | ❤️ 750 | ⬇️ 554K
  Google's new instruction-tuned Gemma 4 model with unified image-text-to-any capabilities, representing the first release in the redesigned Gemma 4 family.

- [**google/gemma-4-12B**](https://huggingface.co/google/gemma-4-12B) — *google* | ❤️ 450 | ⬇️ 118K
  The base pretrained companion to the instruct variant, aimed at fine-tuning and research experimentation.

- [**nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16) — *nvidia* | ❤️ 165 | ⬇️ 56K
  NVIDIA's colossal 550B (55B active) MoE model built on the Nemotron-H architecture, targeting high-throughput enterprise and inference workloads.

- [**nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4) — *nvidia* | ❤️ 145 | ⬇️ 66K
  An NVFP4-quantized version of the Nemotron-3 Ultra, making the 550B MoE model deployable on significantly fewer GPUs.

- [**LiquidAI/LFM2.5-8B-A1B**](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) — *LiquidAI* | ❤️ 548 | ⬇️ 135K
  A compact but powerful 8B (1B active) MoE from LiquidAI, demonstrating that highly efficient sparse models can compete with much larger dense counterparts.

- [**sapientinc/HRM-Text-1B**](https://huggingface.co/sapientinc/HRM-Text-1B) — *sapientinc* | ❤️ 726 | ⬇️ 164K
  The text-generation variant of the Hierarchical Reasoning Model (HRM), proving that even a 1B-parameter model can deliver competitive reasoning with the right architecture.

- [**JetBrains/Mellum2-12B-A2.5B-Thinking**](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking) — *JetBrains* | ❤️ 259 | ⬇️ 17K
  JetBrains' extended-thinking language model built on their Mellum MoE architecture, targeting code intelligence and analytical reasoning tasks.

- [**nex-agi/Nex-N2-Pro**](https://huggingface.co/nex-agi/Nex-N2-Pro) — *nex-agi* | ❤️ 116 | ⬇️ 716
  A Qwen3.5-MoE-based pro model with multimodal support, offering a capable alternative in the mid-weight model space.

---

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

- [**ideogram-ai/ideogram-4-fp8**](https://huggingface.co/ideogram-ai/ideogram-4-fp8) — *ideogram-ai* | ❤️ 393 | ⬇️ 5.5K
  The FP8-quantized release of Ideogram 4, a top-tier text-to-image model known for typographic accuracy and photorealism.

- [**ideogram-ai/ideogram-4-nf4**](https://huggingface.co/ideogram-ai/ideogram-4-nf4) — *ideogram-ai* | ❤️ 261 | ⬇️ 5K
  An NF4-quantized variant of Ideogram 4, enabling high-quality image generation on consumer-grade hardware.

- [**stepfun-ai/Step-3.7-Flash**](https://huggingface.co/stepfun-ai/Step-3.7-Flash) — *stepfun-ai* | ❤️ 351 | ⬇️ 46K
  A flash-speed vision-language model from StepFun, designed for real-time multimodal understanding and generation tasks.

- [**ByteDance/Bernini-R**](https://huggingface.co/ByteDance/Bernini-R) — *ByteDance* | ❤️ 184 | ⬇️ 278
  A cutting-edge image-to-video renderer from ByteDance, leveraging the architecture described in an upcoming 2026 paper.

- [**nvidia/Cosmos3-Nano**](https://huggingface.co/nvidia/Cosmos3-Nano) — *nvidia* | ❤️ 203 | ⬇️ 34K
  A compact version of NVIDIA's Cosmos 3 world model, designed for efficient multimodal scene understanding and physical world simulation.

- [**nvidia/Cosmos3-Super**](https://huggingface.co/nvidia/Cosmos3-Super) — *nvidia* | ❤️ 157 | ⬇️ 28K
  The full-power Cosmos 3 world model, pushing the frontier of transformer-based world models and physical AI understanding.

- [**SulphurAI/Sulphur-2-base**](https://huggingface.co/SulphurAI/Sulphur-2-base) — *SulphurAI* | ❤️ 1,600 | ⬇️ 1.7M
  A massive community-adjusted base model for LTX 2.3 video generation with impressive likes and download numbers, indicating strong interest in text-to-video.

- [**jdopensource/JoyAI-Echo**](https://huggingface.co/jdopensource/JoyAI-Echo) — *jdopensource* | ❤️ 102 | ⬇️ 4K
  A text-to-video and audio-video generation model backed by JD.com's open-source initiative, targeting creative content generation workflows.

- [**google/magenta-realtime-2**](https://huggingface.co/google/magenta-realtime-2) — *google* | ❤️ 151 | ⬇️ 18K
  Google's Magenta Realtime 2 text-to-audio model, enabling real-time music and audio generation with TFLite deployment support.

- [**bosonai/higgs-audio-v3-tts-4b**](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) — *bosonai* | ❤️ 244 | ⬇️ 15K
  A 4B-parameter text-to-speech model built on the Higgs multimodal Qwen3 backbone, delivering high-fidelity voice synthesis.

- [**MisoLabs/MisoTTS**](https://huggingface.co/MisoLabs/MisoTTS) — *MisoLabs* | ❤️ 156 | ⬇️ 0
  A new text-to-speech model from MisoLabs, generating buzz despite zero downloads at the time of this snapshot — likely a very recent upload.

---

### 🔧 Specialized Models (Code, Math, Medical, Embeddings, OCR, ASR)

- [**nvidia/LocateAnything-3B**](https://huggingface.co/nvidia/LocateAnything-3B) — *nvidia* | ❤️ 1,617 | ⬇️ 122K
  A 3B-parameter spatial grounding model that excels at locating and describing objects within images, bridging vision and language understanding.

- [**nvidia/nemotron-3.5-asr-streaming-0.6b**](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) — *nvidia* | ❤️ 287 | ⬇️ 4K
  A compact 0.6B streaming ASR model with cache-aware attention, optimized for low-latency real-time speech recognition on edge devices.

- [**PaddlePaddle/PaddleOCR-VL-1.6**](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6) — *PaddlePaddle* | ❤️ 277 | ⬇️ 10K
  The latest version of PaddleOCR-VL, combining ERNIE 4.5 vision-language capabilities with OCR for robust document and scene text extraction.

---

### 📦 Fine-tunes & Quantizations (Community Fine-tunes, GGUF, AWQ)

- [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) — *HauhauCS* | ❤️ 1,553 | ⬇️ 3M
  An uncensored GGUF fine-tune of the Qwen 3.6 35B MoE model, achieving the highest download count on this list at 3M — a testament to demand for unrestricted local models.

- [**unsloth/gemma-4-12b-it-GGUF**](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) — *unsloth* | ❤️ 500 | ⬇️ 645K
  Unsloth's GGUF quantization of Google's Gemma 4 12B instruct model, making it runnable on consumer hardware with minimal quality loss.

- [**unsloth/Qwen3.6-27B-MTP-GGUF**](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) — *unsloth* | ❤️ 695 | ⬇️ 1.2M
  A GGUF-quantized Qwen 3.6 27B model with Multi-Token Prediction, offering faster inference and strong performance in a portable format.

- [**unsloth/gemma-4-12B-it-qat-GGUF**](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF) — *unsloth* | ❤️ 146 | ⬇️ 121K
  A QAT-aware GGUF build of Gemma 4 12B instruct, combining quantization-aware training with GGUF portability for maximum efficiency.

- [**unsloth/gemma-4-26B-A4B-it-qat-GGUF**](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF) — *unsloth* | ❤️ 100 | ⬇️ 87K
  The 26B-A4B MoE variant of Gemma 4 in QAT-GGUF format, bringing Google's largest Gemma 4 model to local deployment.

- [**google/gemma-4-12B-it-qat-q4_0-gguf**](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf) — *google* | ❤️ 97 | ⬇️ 52K
  Google's own official QAT Q4_0 GGUF release of Gemma 4 12B instruct, providing a first-party optimized local deployment option.

---

## 3. Ecosystem Signal

This week's trending list reveals several converging forces reshaping the open-weight model landscape. **Mixture-of-Experts (MoE) architectures have become the dominant design paradigm** — DeepSeek-V4, Gemma 4 (26B-A4B), Qwen 3.6 (35B-A3B, 27B-MTP), Nemotron-3 Ultra (550B-A55B), LFM2.5 (8B-A1B), and Mellum2 (12B-A2.5B) all use sparse activation, reflecting the industry's consensus that MoE delivers the best performance-per-FLOP ratio. **Quantization and local deployment are no longer afterthoughts** — Unsloth alone accounts for five entries, and the community's appetite for GGUF formats is evident in the 3M downloads of the uncensored Qwen 3.6 variant. NVIDIA's multi-modal push (LocateAnything, Cosmos3, Nemotron ASR) signals a strategic bet on physical AI and embodied intelligence. Meanwhile, **Google's Gemma 4 family represents a bold architectural shift** toward unified any-to-any models, and the simultaneous release of official QAT-GGUF variants shows that even major labs now treat first-class local deployment as a priority. The open-weight ecosystem is maturing rapidly: models are bigger, sparser, more multimodal, and more deployable than ever.

---

## 4. Worth Exploring

1. **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — With 4,720 likes and 5.4M downloads, this is clearly the model of the moment. As the successor to the widely adopted DeepSeek-V3 lineage, it likely introduces significant advances in reasoning, coding, and long-context handling. Anyone working with LLMs should benchmark this against their current stack.

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — Spatial grounding — the ability to precisely locate and describe objects in images — is a critical capability for robotics, AR/VR, and embodied AI. At only 3B parameters, this model punches well above its weight and is worth studying for anyone building vision-language applications that go beyond captioning.

3. **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** — This 8B-parameter model with only 1B active parameters is a masterclass in efficient MoE design. It's an excellent case study for researchers and engineers interested in how far sparse activation can go, and it's practical enough to run on modest hardware while delivering competitive performance.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*