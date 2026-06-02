# Hugging Face Trending Models Digest 2026-06-02

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-02 00:43 UTC

---

Here is the structured Hugging Face Trending Models Digest as of June 2, 2026:

---

## Hugging Face Trending Models Digest — June 2, 2026

---

## 1. Today's Highlights

DeepSeek-V4-Pro dominates the charts with 4,530 likes and nearly 5.9M downloads, underscoring DeepSeek's continued momentum in pushing frontier text-generation capabilities. The Qwen3.6 family is flooding the ecosystem — spanning official releases, NVIDIA-optimized NVFP4 variants, community uncensored forks, and multiple GGUF quantizations — making it arguably the most actively iterated model family this week. Sulphur-2-base rockets to 1,490 likes as a text-to-video model, signaling surging demand for video generation outside the major AI labs. Meanwhile, pyannote's speaker-diarization-3.1 remains a workhorse with nearly 10M lifetime downloads and a strong like count, while openai's privacy-filter debuting with 1,578 likes suggests the community has a sharp interest in OpenAI's rare open-source contributions. Rounding out the top performers, Tencent's Hy-MT2 translation suite (both 1.8B and 30B-A3B variants) and a cluster of compact mobile/edge-ready models (MiniCPM, LFM2.5, Marlin) reflect the industry's broad push toward efficiency and real-world deployment.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — *Author: deepseek-ai | 4,530 likes | 5,851,826 downloads* — DeepSeek's latest flagship conversational model leads overall trending with frontier-tier text-generation performance and MIT licensing.

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — *Author: deepseek-ai | 1,341 likes | 3,511,636 downloads* — A lighter, faster companion to the Pro variant, making DeepSeek-V4 accessible for resource-constrained setups.

- **[openapi/privacy-filter](https://huggingface.co/openai/privacy-filter)** — *Author: openai | 1,578 likes | 316,092 downloads* — A token-classification model for PII detection, marking a notable open-source release from OpenAI and drawing immediate community interest.

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** — *Author: Qwen | 1,567 likes | 5,154,729 downloads* — The 27B parameter backbone of the Qwen3.5 family, built for multimodal (image-text-to-text) and conversational workloads.

- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** — *Author: openbmb | 689 likes | 45,698 downloads* — An ultra-compact 1B text-generation model optimized for on-device and edge inference, continuing MiniCPM's reputation for packing capability into tiny footprints.

- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** — *Author: LiquidAI | 391 likes | 37,893 downloads* — A mixture-of-experts architecture delivering 8B-parameter quality with only 1B active parameters, targeting edge deployment.

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** — *Author: sapientinc | 439 likes | 149,533 downloads* — Sapient AI's compact text-generation model drawing attention for its unique hierarchical reasoning architecture at 1B scale.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** — *Author: SulphurAI | 1,490 likes | 1,656,520 downloads* — A text-to-video diffusion model that surged in popularity, indicating strong demand for open video-generation beyond proprietary platforms.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — *Author: nvidia | 794 likes | 35,783 downloads* — NVIDIA's image-text-to-text model for visual grounding/localization tasks, bringing three-figure likes to a niche multimodal category.

- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** — *Author: bytedance-research | 1,002 likes | 3,041 downloads* — ByteDance's "any-to-any" multimodal model supporting image, video, and other modalities in a unified framework.

- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** — *Author: openbmb | 1,088 likes | 459,188 downloads* — The latest in the MiniCPM-V vision-language series, offering strong image-text understanding at a compact scale.

- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** — *Author: Supertone | 770 likes | 57,627 downloads* — A text-to-speech model riding the wave of interest in natural, expressive speech synthesis.

- **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** — *Author: NemoStation | 482 likes | 17,012 downloads* — A video-text-to-text model for video understanding and reasoning, lightweight at 2B parameters.

- **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** — *Author: meituan-longcat | 465 likes | 0 downloads* — Meituan's audio- and text-conditioned video avatar generation model, emerging in the digital human space.

- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** — *Author: stepfun-ai | 191 likes | 9,256 downloads* — StepFun's fast vision-language model in the 3.7 series for image-text-to-text tasks.

- **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)** — *Author: numind | 215 likes | 59,010 downloads* — An image-to-text extraction model built on Qwen3.5 for structured document and visual data parsing.

- **[nvidia/PiD](https://huggingface.co/nvidia/PiD)** — *Author: nvidia | 239 likes | 577 downloads* — NVIDIA's image-to-image super-resolution model leveraging diffusion for high-quality upscaling.

- **[Kwai-Keye/Keye-VL-2.0-30B-A3B](https://huggingface.co/Kwai-Keye/Keye-VL-2.0-30B-A3B)** — *Author: Kwai-Keye | 88 likes | 784 downloads* — Kuaishou's updated 30B vision-language model with Mixture-of-Experts sparsity for efficient multimodal inference.

- **[OpenMOSS-Team/MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5)** — *Author: OpenMOSS-Team | 94 likes | 18,564 downloads* — An open-source Chinese-capable text-to-speech model from the MOSS team.

### 🔧 Specialized Models (translation, OCR, speech, embeddings)

- **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** — *Author: tencent | 1,099 likes | 18,131 downloads* — Tencent's compact machine translation model delivering solid multilingual translation at 1.8B scale.

- **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)** — *Author: tencent | 444 likes | 4,458 downloads* — The MoE-based 30B-A3B variant of Tencent's Hy-MT2, paired with the 1.8B to give users a quality-efficiency trade-off ladder.

- **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** — *Author: PaddlePaddle | 156 likes | 3,190 downloads* — A vision-language OCR model built on ERNIE 4.5, pushing document understanding forward in the PaddlePaddle ecosystem.

- **[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)** — *Author: pyannote | 2,106 likes | 9,591,005 downloads* — The gold-standard speaker diarization pipeline, maintaining massive download volume as a de facto audio processing tool.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — *Author: HauhauCS | 1,218 likes | 2,533,393 downloads* — A community uncensored fine-tune of the Qwen3.6 35B-A3B, combining MoE efficiency with unfiltered capability and driving explosive download counts.

- **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)** — *Author: LiquidAI | 143 likes | 55,212 downloads* — The official GGUF-quantized build of LFM2.5-8B-A1B, targeting llama.cpp users and edge hardware.

- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** — *Author: nvidia | 121 likes | 171,588 downloads* — NVIDIA's NVFP4-optimized variant of Qwen3.6 35B-A3B using ModelOpt, delivering lower-precision inference on NVIDIA hardware.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — *Author: unsloth | 593 likes | 952,188 downloads* — Unsloth's GGUF quantization of Qwen3.6 27B with Multi-Token Prediction, a favorite among llama.cpp and local-LLM enthusiasts.

- **[Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)** — *Author: Jackrong | 183 likes | 139,952 downloads* — A community GGUF build (Qwopus variant) of Qwen3.6 27B with MTP, reflecting the diversity of community quantile efforts around the Qwen3.6 family.

- **[stepfun-ai/Step-3.7-Flash-GGUF](https://huggingface.co/stepfun-ai/Step-3.7-Flash-GGUF)** — *Author: stepfun-ai | 84 likes | 37,533 downloads* — The GGUF-quantized version of Step-3.7-Flash for easy local deployment.

- **[prism-ml/bonsai-image-ternary-4B-gemlite-2bit](https://huggingface.co/prism-ml/bonsai-image-ternary-4B-gemlite-2bit)** — *Author: prism-ml | 89 likes | 0 downloads* — An experimental ternary (1.58-bit) quantized 4B image-generation model, exploring extreme compression via GemLite.

---

## 3. Ecosystem Signal

The Qwen3.6 family is the undisputed gravitational center of this week's Hugging Face activity. The official 27B model anchors a sprawling constellation that includes NVIDIA's NVFP4 quantization (delivering FP4 optimization for accelerated inference), the HauhauCS uncensored fine-tune (which independently garnered 1,218 likes and 2.5M downloads), at least two community GGUF builds from Unsloth and Jackrong, and the upstream base model for several other specialized entries. This density of activity underscores how the open-weight community rallies rapidly around new major releases, building an entire deployment ladder — from cloud fine-tune to edge GGUF — within days of launch.

DeepSeek remains the heavyweight brand: V4-Pro leads all models in likes and total downloads (5.85M), and V4-Flash adds another 3.5M downloads, suggesting users are actively choosing between "best quality" and "fastest inference" in the same family. The two models together represent a one-two punch that other labs are still struggling to replicate. Notably, both carry permissive licensing (V4-Flash is MIT), which further accelerates adoption and downstream derivatives listed trending separately.

MoE (Mixture-of-Experts) architecture is pervasive. Alongside the Qwen3.6-A3B models, Tencent's Hy-MT2-30B-A3B and LiquidAI's LFM2.5-8B-A1B both adopt sparse activation patterns, indicating that the industry consensus has firmly shifted toward parameter-rich-but-compute-efficient designs. NVIDIA's involvement in optimizing several of these MoE models (via NVFP4 and ModelOpt) suggests silicon-level co-design is becoming a meaningful differentiator.

The edge and on-device segment is heating up: MiniCPM5-1B, Marlin-2B, and the GGUF variants collectively show that the community is not just chasing frontier scale but actively demand-ing models that run on consumer hardware. SulphurAI's text-to-video model hitting 1,490 likes on its own video-generation capability — without a major lab behind it — is a strong signal that generative video is the next frontier where open models can compete.

OpenAI's surprise privacy-filter release (1,578 likes) reminds us that even the most closed labs occasionally contribute tools that fill genuine community needs, but it is the systematically open — DeepSeek, Qwen, openbmb — that sustain the trending charts week after week.

---

## 4. Worth Exploring

1. **DeepSeek-V4-Pro** ([link](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)) — With 4,530 likes and nearly 5.9M downloads, this is the definitive frontier model to benchmark against. Its mix of conversational ability, MIT-level community adoption, and MIT-leaning licensing makes it the most important model to understand for anyone tracking the state of open LLMs. Whether you are evaluating raw capability, studying architecture decisions, or building applications, V4-Pro is the reference point to beat.

2. **SulphurAI/Sulphur-2-base** ([link](https://huggingface.co/SulphurAI/Sulphur-2-base)) — Text-to-video generation has been dominated by proprietary players; Sulphur-2-base earning 1,490 likes and 1.6M downloads as a community-driven, diffusers-compatible model is a meaningful inflection point. If you are researching generative video or building creative tools, this model is the best signal that open-weight video generation is becoming viable — and worth studying for both capabilities and limitations.

3. **Bytedance-research/Lance** ([link](https://huggingface.co/bytedance-research/Lance)) — ByteDance's "any-to-any" multimodal model sitting at 1,002 likes despite only a few thousand downloads suggests early but serious interest in unified generation across image, video, and text. For those tracking the trajectory toward general-purpose multimodal models — the next paradigm beyond today's text-and-image models — Lance is one of the most architecturally ambitious open entries to study right now.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*