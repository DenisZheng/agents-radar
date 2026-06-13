# Hugging Face Trending Models Digest 2026-06-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-13 00:43 UTC

---

# Hugging Face Trending Models Digest — June 13, 2026

---

## 1. Today's Highlights

Today's Hugging Face trending list is overwhelmingly dominated by Google's **Gemma 4 family**, with the 12B and 26B variants—across base, instruction-tuned, and quantized formats—collecting the lion's share of likes and downloads. The heavyweight newcomer is **DeepSeek-V4-Pro**, which leads all models with a staggering 4,796 likes and over 3.3 million downloads, signaling massive community anticipation for DeepSeek's latest flagship. On the multimodal front, **DiffusionGemma** (Google's diffusion-based text-and-image model) and **Ideogram 4** (in both FP8 and NF4 variants) point to continued demand for efficient image generation. Community quantization activity, led by **Unsloth**, remains a persistent trend, with GGUF and QAT variants of Gemma 4 models proliferating rapidly.

---

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes / Downloads |
|---|---|---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,796 ❤️ / 3,384,418 ⬇️ |

DeepSeek's latest flagship conversational and reasoning model, topping the entire trending list by a wide margin — a clear signal of the community's excitement around the next generation of DeepSeek's highly competitive open-weight LLMs.

**[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | Google | 967 ❤️ / 911,544 ⬇️
The 12B instruction-tuned member of Google's Gemma 4 unified multimodal family, trending due to its strong text-and-image reasoning in a compact parameter budget.

**[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** | Google | 527 ❤️ / 198,271 ⬇️
The base (pretrained) 12B checkpoint of Gemma 4, attracting researchers and fine-tuners looking for a strong any-to-any foundation model.

**[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** | nex-agi | 223 ❤️ / 2,551 ⬇️
A Qwen3.5-MoE-based text generation and image-text model from Nex AI, offering a competitive open-weight alternative in the LLM-as-a-service landscape.

**[nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini)** | nex-agi | 180 ❤️ / 2,839 ⬇️
The smaller companion to Nex-N2-Pro, making the same Qwen3.5-MoE architecture accessible at a reduced scale.

**[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | CohereLabs | 335 ❤️ / 4,054 ⬇️
Cohere's compact code-focused conversational model (Cohere2-MoE architecture), catering to developers who want fast, lightweight code generation.

**[XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash)** | XiaomiMiMo | 97 ❤️ / 2,607 ⬇️
Xiaomi's MiMo-V2.5 Pro with FP4 quantization and DFlash attention, notable as a rare open-weight offering from a Chinese hardware giant.

---

### 🎨 Multimodal & Generation

**[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | Google | 614 ❤️ / 20,669 ⬇️
Google's diffusion-based multimodal Gemma variant for image-and-text reasoning — an innovative hybrid approach to multimodal understanding that is drawing significant research interest.

**[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram-ai | 503 ❤️ / 4,987 ⬇️
Ideogram's latest text-to-image model in FP8 format, pushing the state of the art in photorealistic and typography-aware image generation.

**[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** | ideogram-ai | 327 ❤️ / 2,910 ⬇️
The NF4-quantized companion to Ideogram 4, making high-quality image generation feasible on consumer-grade GPUs.

**[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | NVIDIA | 1,925 ❤️ / 149,261 ⬇️
NVIDIA's compact image-grounding model for object localization from text descriptions, the second-most-liked model today — a testament to strong demand for visual grounding tools.

**[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | MiniMaxAI | 253 ❤️ / 442 ⬇️
MiniMax's multimodal vision-language model, an ambitious entry from one of China's AI unicorns aimed at general-purpose image-text tasks.

**[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)** | zai-org | 135 ❤️ / 0 ⬇️
A pose-driven, character-to-video animation model from Zhipu AI — an early-stage but intriguing step toward controllable video generation.

**[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | ByteDance | 229 ❤️ / 373 ⬇️
ByteDance's image-and-text-to-video rendering model, published with an Apache 2.0 license and an accompanying arXiv paper, signaling ByteDance's growing investment in open video generation research.

**[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** | Google | 184 ❤️ / 6,491 ⬇️
Google Magenta's real-time text-to-audio generation model, targeting music and sound design applications with low-latency inference.

**[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 386 ❤️ / 29,347 ⬇️
Boson AI's 4B-parameter text-to-speech model built on Qwen3 multimodal architecture, trending for its high-quality speech synthesis.

**[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)** | MisoLabs | 195 ❤️ / 0 ⬇️
A newer text-to-speech model from MisoLabs, adding to the rapidly expanding landscape of open-weight speech synthesis options.

---

### 🔧 Specialized Models

**[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | NVIDIA | 392 ❤️ / 3,551 ⬇️
NVIDIA's sub-1B streaming ASR model with cache-aware attention, purpose-built for real-time, on-device speech recognition — the go-to choice for edge deployment.

**[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | moonshotai | 337 ❤️ / 0 ⬇️
Moonshot AI's latest code-specialized variant of the Kimi K2.5 series, though notable for its zero download count — likely a very fresh release.

---

### 📦 Fine-tunes & Quantizations

**[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,722 ❤️ / 2,393,894 ⬇️
A community "uncensored" GGUF quantization of a Qwen 3.6 MoE vision model with outsized download numbers — likely inflated by automated pipelines, but indicative of hunger for unrestricted open-weight models.

**[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | Unsloth | 570 ❤️ / 836,531 ⬇️
Unsloth's GGUF-quantized Gemma 4 12B — the most downloaded GGUF variant in the list, enabling CPU-friendly and low-memory inference of Google's flagship.

**[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)** | Unsloth | 148 ❤️ / 221,174 ⬇️
The 26B Active-4B variant of Gemma 4 quantized with QAT and GGUF, making Google's largest multimodal Gemma model feasible on consumer hardware.

**[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | Unsloth | 206 ❤️ / 208,891 ⬇️
The 12B instruction-tuned Gemma 4 in QAT-GGUF, offering the best quality-speed tradeoff for local deployment.

**[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** | Unsloth | 214 ❤️ / 17,666 ⬇️
Unsloth's local-deployment-friendly GGUF conversion of DiffusionGemma, democratizing access to Google's cutting-edge diffusion-multimodal hybrid.

**[google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)** | Google | 133 ❤️ / 175,635 ⬇️
Google's own official Q4_0 GGUF quantization of the Gemma 4 12B instruction model — notable because Google is now directly publishing quantized checkpoints.

**[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** | OBLITERATUS | 254 ❤️ / 43,578 ⬇️
An "abliterated" (refusal-removed) fine-tune of Gemma 4 12B, reflecting ongoing community efforts to produce unrestricted instruction-tuned variants.

**[huihui-ai/Huihui-gemma-4-12B-it-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated)** | huihui-ai | 147 ❤️ / 8,013 ⬇️
Another abliterated Gemma 4 variant, this one in any-to-any format, showing that the "abliteration" community is actively targeting Google's latest model family.

**[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** | Jackrong | 116 ❤️ / 0 ⬇️
A community GGUF quantization of a Qwen-based 27B code model with multi-token prediction (MTP), aimed at maximizing coding throughput.

---

## 3. Ecosystem Signal

Today's trending list paints a picture of a **deeply fragmented but energetic open-weight ecosystem**. **Gemma 4 is the week's dominant model family**: at least 8 of the 30 trending models are Gemma 4 variants in some form (base, instruction-tuned, quantized, abliterated, or GGUF-converted). This concentration suggests Google's strategy of releasing unified, any-to-any open models is generating enormous downstream community activity — from Unsloth's GGUF conversions (which consistently rack up hundreds of thousands of downloads) to the prolific "abliteration" subculture producing uncensored forks.

**DeepSeek-V4-Pro's** commanding lead — nearly 5,000 likes and 3.3M downloads on what appears to be a brand-new release — underscores the community's deep loyalty to DeepSeek as a competitor to Western frontier labs. Its numbers dwarf even the most popular Gemma 4 entries.

**Quantization remains a first-class ecosystem activity.** Unsloth has entrenched itself as an essential infrastructure player, converting every new flagship into GGUF formats that make models runnable on consumer hardware. Google's decision to ship its own official QAT-GGUF checkpoints (e.g., `gemma-4-12B-it-qat-q4_0-gguf`) is a notable strategic shift — implying Google is beginning to formally support local/edge deployment use cases rather than leaving it entirely to the community.

The **multimodal and media generation space is consolidating around quality and efficiency.** Ideogram 4 (offering both FP8 and NF4 checkpoints), DiffusionGemma, and ByteDance's Bernini-R all point toward a push for high-fidelity generation at lower computational cost. Pose-driven video animation (SCAIL-2, from Zhipu AI) represents the frontier of controllable video — small numbers today, but strategically important.

Finally, the **"uncensored/aqlilterated" niche remains commercially visible**, with community-modified models consistently attracting downloads and likes, suggesting ongoing tension between the safety positions of model publishers and user demand for unrestricted access.

---

## 4. Worth Exploring

**[👉 deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
With 4,796 likes and over 3.3 million downloads, DeepSeek-V4-Pro is the undeniable standout of the week. DeepSeek has a strong track record of delivering frontier-tier open-weight models at competitive price-performance ratios, and V4-Pro is generating community buzz on par with any major Western lab release. Worth downloading immediately for benchmarking, agentic, and conversational use cases.

**[👉 google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
Google's DiffusionGemma represents a genuinely novel architectural direction — applying diffusion-based generation to multimodal reasoning rather than treating it as a pure language or pure image model. For researchers interested in the convergence of generative and discriminative multimodal AI, this is one of the most intellectually interesting releases on Hugging Face right now.

**[👉 nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
NVIDIA's 3B-parameter object localization model achieved 1,925 likes — the second-highest on the entire list — reflecting massive practical demand for visual grounding. At only 3B parameters, it offers an efficient, production-ready solution for grounding, referring expression comprehension, and visual search pipelines, and its high download count (149K) confirms strong real-world adoption.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*