# Hugging Face Trending Models Digest 2026-06-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-12 00:44 UTC

---

# Hugging Face Trending Models Digest — 2026-06-12

---

## 1. Today's Highlights

This week's Hugging Face trending layer is **dominated by DeepSeek-V4-Pro**, which towers above all others with 4,781 likes and over 4 million downloads, cementing DeepSeek's position as one of the most popular model providers on the platform. **Google's Gemma 4 family** is making an exceptionally strong showing, with at least six entries across base, instruction-tuned, quantized, and abliterated variants from Google and the community — signaling rapid adoption of the new architecture. **NVIDIA is diversifying aggressively**, with a high-performing localization model (LocateAnything-3B at 1,870 likes), streaming ASR (Nemotron-ASR), and the massive Nemotron-3-Ultra-550B in both BF16 and NVFP4 formats. A clear secondary trend is the **unsloth-polarization of distribution**: nearly every major released model is now immediately accompanied by a GGUF quantized variant by unsloth, who are becoming as essential to the ecosystem as the original model publishers themselves.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, Chat Models, Instruction-Tuned)

| Model | Author | Likes / Downloads | Summary |
|---|---|---|---|
| [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,781 ❤️ / 4,061,006 ⬇️ | The breakout star of the week — DeepSeek's latest flagship is a 4M+-download powerhouse, likely continuing the series' reputation for strong reasoning at competitive efficiency. |
| [Gemma-4-12B-IT](https://huggingface.co/google/gemma-4-12B-it) | google | 939 ❤️ / 675,936 ⬇️ | Google's new generation 12B instruction-tuned model with any-to-any capabilities, already a top-3 performer on weekly likes and rapidly becoming a go-to general-purpose open-weight model. |
| [Gemma-4-12B](https://huggingface.co/google/gemma-4-12B) | google | 516 ❤️ / 140,221 ⬇️ | The base (non-instruction-tuned) variant of Gemma 4 at 12B, serving as a foundation for the wave of community fine-tunes and quantizations seen this week. |
| [LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) | LiquidAI | 594 ❤️ / 142,134 ⬇️ | Liquid AI's sparse MoE model delivers surprisingly capable text generation in a tiny 8B/1.5B-active footprint, gaining strong traction for edge and on-device deployment. |
| [DiffusionGemma-26B-A4B-IT](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | google | 488 ❤️ / 0 ⬇️ | Google's diffusion-based gemma variant at 26B (4B active) — an experimental architecture merging diffusion LLMs with gemma, though downloads haven't picked up yet. |
| [North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | CohereLabs | 308 ❤️ / 1,859 ⬇️ | Cohere's code-focused mini model, suggesting Cohere is carving out a niche in developer tools with a lightweight, purpose-built code assistant. |
| [HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 749 ❤️ / 134,752 ⬇️ | Sapient AI's Hierarchical Reasoning Model at just 1B params — its high like-to-download ratio hints at genuine excitement for a novel architecture that punches far above its weight. |
| [Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro) | nex-agi | 206 ❤️ / 1,185 ⬇️ | Nex-AGI's Qwen3.5-MoE based pro model, representing a smaller open-source lab building on Alibaba's Qwen MoE foundation. |
| [Nex-N2-Mini](https://huggingface.co/nex-agi/Nex-N2-mini) | nex-agi | 163 ❤️ / 1,222 ⬇️ | The lighter sibling of Nex-N2-Pro, targeting accessible MoE inference with a smaller footprint. |
| [Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) | stepfun-ai | 368 ❤️ / 50,187 ⬇️ | StepFun's latest vision-language model, blending image and text generation in a practical "flash" configuration. |
| [NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16) | nvidia | 198 ❤️ / 59,066 ⬇️ | NVIDIA's massive 550B-parameter (55B active) MoE model in BF16 — the sheer scale signals NVIDIA's commitment to competing at the frontier of open-weight models. |

---

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

| Model | Author | Likes / Downloads | Summary |
|---|---|---|---|
| [LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 1,870 ❤️ / 131,794 ⬇️ | NVIDIA's 3B image-text-to-text model for visual localization is the #2 liked model on the week, filling a practical computer vision niche that larger LLMs don't address well. |
| [Ideogram-4-FP8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) | ideogram-ai | 484 ❤️ / 7,170 ⬇️ | Ideogram's fourth-generation text-to-image model in FP8 format — continuing the text-rendering strength that made Ideogram a design and creative tooling favorite. |
| [Ideogram-4-NF4](https://huggingface.co/ideogram-ai/ideogram-4-nf4) | ideogram-ai | 315 ❤️ / 6,124 ⬇️ | The NF4 quantized variant of Ideogram-4, improving accessibility and local inference speed for the creative community. |
| [Bernini-R](https://huggingface.co/ByteDance/Bernini-R) | ByteDance | 222 ❤️ / 305 ⬇️ | ByteDance's image-to-video model ("Bernini Renderer") generating buzz despite low downloads — its novel approach to image-text-to-video is academically fresh (arxiv:2605.22344). |
| [SCAIL-2](https://huggingface.co/zai-org/SCAIL-2) | zai-org | 114 ❤️ / 0 ⬇️ | ZAI-ORG's character animation (image-to-video) model represents China's AI labs pushing into pose-driven video generation, even if downloads haven't ignited yet. |
| [Higgs-Audio-v3-TTS-4B](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 355 ❤️ / 19,948 ⬇️ | Boson AI's third-generation TTS model using Qwen3-based multimodal architecture, suggesting speech synthesis is converging with general-purpose language models. |
| [MisoTTS](https://huggingface.co/MisoLabs/MisoTTS) | MisoLabs | 194 ❤️ / 0 ⬇️ | MisoLabs' text-to-speech model — early stage but part of the broader trend of democratized TTS development. |
| [Magenta-Realtime-2](https://huggingface.co/google/magenta-realtime-2) | google | 178 ❤️ / 19,806 ⬇️ | Google's latest music/audio generation model in TFLite format, emphasizing real-time, on-device creative audio tools. |

---

### 🔧 Specialized Models (Code, ASR, Domain-Specific)

| Model | Author | Likes / Downloads | Summary |
|---|---|---|---|
| [Nemotron-3.5-ASR-Streaming-0.6B](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 372 ❤️ / 4,965 ⬇️ | NVIDIA's cache-aware streaming ASR model at 0.6B parameters addresses the growing need for real-time, low-latency speech recognition in production systems. |

---

### 📦 Fine-tunes, Quantizations & Community Variants

| Model | Author | Likes / Downloads | Summary |
|---|---|---|---|
| [Unsloth/Gemma-4-12B-IT-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | unsloth | 561 ❤️ / 711,706 ⬇️ | Unsloth's GGUF conversion of Gemma-4-12B-IT is the **most-downloaded quantized model this week** — demonstrating that GGUF has become the de facto format for local LLM deployment. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,676 ❤️ / 3,057,541 ⬇️ | The single most-downloaded model on the list — a community "uncensored" variant of Qwen 3.6, demonstrating the enormous user appetite for unrestricted local deployment. |
| [Unsloth/Gemma-4-12B-IT-QAT-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF) | unsloth | 200 ❤️ / 148,252 ⬇️ | QAT (Quantization-Aware Training) GGUF variant of Gemma-4-12B-IT — represents the cutting edge of quantization quality preservation. |
| [Gemma-4-12B-IT-QAT-Q4_0-GGUF](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf) | google | 129 ❤️ / 96,749 ⬇️ | Google's own official GGUF quantized release of Gemma-4, putting the original author in direct competition with community quantizers like unsloth. |
| [NVIDIA-Nemotron-3-Ultra-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4) | nvidia | 168 ❤️ / 91,117 ⬇️ | NVIDIA's proprietary NVFP4 quantization of their 550B monster — enables inference of a frontier-scale model on significantly fewer GPUs. |
| [Unsloth/DiffusionGemma-26B-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF) | unsloth | 179 ❤️ / 0 ⬇️ | Unsloth extending GGUF support to Google's experimental diffusion-based gemma — a "nice to have" that shows the community quantizer is covering even frontier research models. |
| [OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED) | OBLITERATUS | 234 ❤️ / 14,838 ⬇️ | Part of the "abliterated" community wave removing refusals from Gemma-4 — a practice that remains controversial but shows sustained demand. |
| [Unsloth/Gemma-4-26B-A4B-IT-QAT-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF) | unsloth | 142 ❤️ / 129,110 ⬇️ | The largest unsloth-quantized Gemma-4 variant this week, bringing Google's 26B-parameter vision-language model into local-friendly territory. |
| [Huihui/Gemma-4-12B-IT-Abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated) | huihui-ai | 143 ❤️ / 6,400 ⬇️ | Another community abliteration of Gemma-4, showing how fast the community modifies Google's models post-release. |
| [Comfy-Org/Ideogram-4](https://huggingface.co/Comfy-Org/Ideogram-4) | Comfy-Org | 134 ❤️ / 0 ⬇️ | ComfyOrg's ComfyUI-packaged integration of Ideogram-4, lowering the barrier to entry for node-based AI image workflows. |

---

## 3. Ecosystem Signal

Three forces are reshaping the Hugging Face ecosystem this week. First, **Google's Gemma 4 has achieved "platform" status** — it arrived recently but has already spawned quantizations (standard GGUF, QAT-GGUF, NF4), abliterated variants, and vision-language variants within the Gemma family itself. The speed of community response to Gemma 4 suggests it has become the default open-weight foundation model, replacing Gemma 3 and Llama 3 in community mindshare.

Second, **Unsloth has become a distribution layer for the entire ecosystem**. Their GGUF versions of Gemma-4-12B-IT and HauhauCS's uncensored Qwen variants are racking up hundreds of thousands of downloads, meaning unsloth now sits between frontier research and practical deployment for a massive user base. Google releasing their own official GGUF variants is a direct acknowledgment of this dynamic.

Third, **MoE (Mixture of Experts) is becoming the default sparse architecture** across model scales — from LiquidAI's 8B-A1B to NVIDIA's 550B-A55B and Nex-AGI's Qwen3.5-MoE variants. The message is clear: the industry has converged on MoE as the path to scaling without proportional cost increases. Meanwhile, NVIDIA's broad presence (localization, ASR, massive MoE, custom NVFP4 quantization) signals their ambition to be not just GPU infrastructure but a full-stack AI model provider. The "uncensored"/"abliterated" trend continues to grow in download volume even when likes remain moderate, revealing a persistent gap between what users want to download and what the broader community formally endorses.

---

## 4. Worth Exploring

**1. [HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** — Sapient AI's Hierarchical Reasoning Model is arguably the most architecturally interesting model on this list. With only 1B parameters, it scores 749 likes (behind only DeepSeek-V4-Pro, Gemma-4-12B-IT, LocateAnything-3B, LFM2.5, and the uncensored Qwen variant), meaning the community recognizes something special. As AI labs race to ever-larger models, a tiny model using a novel hierarchical reasoning architecture that achieves competitive performance could signal a genuinely new direction in efficient reasoning. **Watch this one closely.**

**2. [HauhauCS/Qwen3.6-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — With over 3 million downloads, this is the most-pulled model by actual users, revealing a reality that like counts alone miss: there is an enormous silent majority of users prioritizing unrestricted, quantifiable local inference over polished flagship models. Whether you endorse the practice or not, understanding this demand is critical for anyone building for the open-weight ecosystem.

**3. [LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — NVIDIA's visual localization model sitting at #2 in likes (1,870) is a reminder that **not all important models are chatbots**. Practical, application-specific computer vision models that solve real industry problems (robotics, autonomous systems, AR) often fly under the radar of hype cycles but represent the most immediately deployable AI technology from this week's list. NVIDIA choosing to release it as open-weight is strategically significant.

---

*Digest generated by OWL for Hugging Face Hub trending analysis, 2026-06-12.*

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*