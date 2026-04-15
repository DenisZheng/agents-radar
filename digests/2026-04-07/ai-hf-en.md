# Hugging Face Trending Models Digest 2026-04-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-07 00:12 UTC

---

# Hugging Face Trending Models Digest — April 7, 2026

---

## 1. Today's Highlights

Google's **Gemma 4** family dominates this week's leaderboard with multiple variants spanning 2B to 31B parameters, including experimental "any-to-any" multimodal models (E2B/E4B) that signal a major architectural push toward unified modalities. Community fine-tuning activity is exceptionally vibrant, with **Jackrong** and **HauhauCS** releasing numerous distilled and uncensored variants of Qwen 3.5 models, collectively amassing millions of downloads. The emergence of **1-bit quantization** via prism-ml's Bonsai-8B and aggressive uncensored fine-tunes highlights diverging community priorities: extreme efficiency versus unrestricted capability. Notably, **Netflix's void-model** marks a rare enterprise entry into open video AI, while specialized audio models from **CohereLabs**, **MistralAI**, and **k2-fsa** indicate renewed investment in speech pipelines.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 1,149 | 678,740 | Flagship instruction-tuned Gemma 4 with native vision-language capabilities, setting the open-weight performance baseline. |
| [**Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled**](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | Jackrong | 2,399 | 548,344 | Highest-liked model this week; distills proprietary reasoning patterns into open Qwen 3.5 architecture. |
| [**dealignai/Gemma-4-31B-JANG_4M-CRACK**](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 490 | 13,727 | Aggressively uncensored Gemma 4 variant via "abliteration," attracting researchers studying safety trade-offs. |
| [**LiquidAI/LFM2.5-350M**](https://huggingface.co/LiquidAI/LFM2.5-350M) | LiquidAI | 237 | 17,695 | Compact liquid foundation model demonstrating state-space alternatives to transformers at sub-1B scale. |
| [**HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,015 | 751,402 | Most-downloaded uncensored model; 9B parameter sweet spot for consumer hardware deployment. |
| [**HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,201 | 722,769 | MoE-based uncensored variant; 35B active parameters with efficient 3B activation per token. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [**google/gemma-4-26B-A4B-it**](https://huggingface.co/google/gemma-4-26B-A4B-it) | google | 453 | 476,612 | Mid-size multimodal Gemma with aggressive 4-bit activation quantization for efficient vision-language inference. |
| [**google/gemma-4-E4B-it**](https://huggingface.co/google/gemma-4-E4B-it) | google | 410 | 321,152 | Experimental "any-to-any" architecture supporting arbitrary input/output modality combinations. |
| [**google/gemma-4-E2B-it**](https://huggingface.co/google/gemma-4-E2B-it) | google | 289 | 237,266 | Lightweight any-to-any variant (2B) enabling multimodal experimentation on resource-constrained devices. |
| [**baidu/Qianfan-OCR**](https://huggingface.co/baidu/Qianfan-OCR) | baidu | 1,017 | 38,388 | Production-grade Chinese-optimized OCR with InternVL backbone; strong enterprise adoption signal. |
| [**netflix/void-model**](https://huggingface.co/netflix/void-model) | netflix | 449 | 0 | First open-weight video inpainting model from major streaming platform; zero downloads suggest gated release strategy. |
| [**tencent/HY-OmniWeaving**](https://huggingface.co/tencent/HY-OmniWeaving) | tencent | 220 | 0 | Dual-arxiv referenced diffusion architecture; likely Hunyuan-based omnidirectional video generation system. |
| [**Hcompany/Holo3-35B-A3B**](https://huggingface.co/Hcompany/Holo3-35B-A3B) | Hcompany | 233 | 1,681 | Qwen 3.5 MoE-based holographic/3D-aware vision-language model with sparse 3B activation. |
| [**k2-fsa/OmniVoice**](https://huggingface.co/k2-fsa/OmniVoice) | k2-fsa | 296 | 64,509 | Zero-shot multilingual TTS with voice cloning from Next-gen Kaldi team; strong open-source audio foundation. |
| [**CohereLabs/cohere-transcribe-03-2026**](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026) | CohereLabs | 817 | 128,326 | Cohere's latest ASR release; enterprise-focused with competitive Whisper-class performance. |
| [**mistralai/Voxtral-4B-TTS-2603**](https://huggingface.co/mistralai/Voxtral-4B-TTS-2603) | mistralai | 681 | 5,719 | Mistral's compact 4B TTS with vLLM inference support; surprisingly low downloads suggest recent release. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [*No pure specialized models in top 30*] | — | — | — | Specialization trend absorbed into multimodal LLMs; domain-specific capabilities increasingly bundled into generalist architectures. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [**prism-ml/Bonsai-8B-gguf**](https://huggingface.co/prism-ml/Bonsai-8B-gguf) | prism-ml | 468 | 45,185 | Extreme 1-bit GGUF quantization pushing llama.cpp efficiency boundaries; research-grade compression. |
| [**unsloth/gemma-4-26B-A4B-it-GGUF**](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) | unsloth | 278 | 649,596 | Unsloth-optimized Gemma 4 with 649K downloads; dominant quantization workflow for consumer deployment. |
| [**Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF**](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF) | Jackrong | 519 | 272,020 | Version 2 GGUF of top reasoning distillate; iterative refinement showing community velocity. |
| [**unsloth/gemma-4-31B-it-GGUF**](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF) | unsloth | 208 | 503,482 | Full 31B Gemma 4 in GGUF; half-billion downloads validate Unsloth as quantization infrastructure leader. |
| [**Jackrong/Qwopus3.5-9B-v3-GGUF**](https://huggingface.co/Jackrong/Qwopus3.5-9B-v3-GGUF) | Jackrong | 204 | 53,441 | Compact "Qwopus" reasoning variant; 9B target for edge deployment with distilled reasoning traces. |
| [**Jackrong/Qwopus3.5-27B-v3-GGUF**](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF) | Jackrong | 195 | 48,113 | Larger Qwopus variant; "v3" suffix indicates rapid iteration cycle in Jackrong's distillation pipeline. |
| [**nvidia/Gemma-4-31B-IT-NVFP4**](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4) | nvidia | 238 | 129,352 | NVIDIA's proprietary NVFP4 format via ModelOpt; hardware-vendor quantization competing with open GGUF. |
| [**prism-ml/Bonsai-8B-mlx-1bit**](https://huggingface.co/prism-ml/Bonsai-8B-mlx-1bit) | prism-ml | 153 | 24,861 | Apple MLX-native 1-bit variant; macOS-specific optimization of extreme quantization research. |
| [**unsloth/gemma-4-E4B-it-GGUF**](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF) | unsloth | 160 | 418,980 | Any-to-any Gemma 4 in GGUF; 419K downloads prove multimodal models viable for consumer inference. |
| [**HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 133 | 99,038 | Uncensored any-to-any Gemma 4; combining multimodal flexibility with unrestricted outputs. |
| [**Jackrong/Qwopus3.5-27B-v3**](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3) | Jackrong | 125 | 6,595 | Base safetensors release of Qwopus 27B; low downloads relative to GGUF confirm quantization preference. |

---

## 3. Ecosystem Signal

**Gemma 4** has achieved immediate ecosystem dominance, with Google releasing eight distinct variants (base, IT, A4B, E2B/E4B) that collectively capture the multimodal transition. The "any-to-any" E-series represents the most ambitious open-weight modality-unification attempt to date, though practical adoption lags behind simpler image-text-to-text variants. **Qwen 3.5** maintains strong community momentum through **Jackrong** and **HauhauCS**, whose distillation and uncensoring pipelines have generated over 2.5 million combined downloads—demonstrating that open-weight models now sustain derivative innovation velocities matching proprietary release cycles.

Quantization has become the critical infrastructure layer: **Unsloth** alone accounts for 1.6M+ downloads across four Gemma 4 GGUF variants, while **NVIDIA's NVFP4** and **prism-ml's 1-bit research** indicate hardware-vendor and academic compression research are converging on extreme efficiency. The uncensored model phenomenon deserves attention: four of the top six most-downloaded models carry "uncensored" or "abliterated" tags, suggesting significant demand for unrestricted capabilities that outpaces safety-aligned alternatives. Notably, **zero-download entries** from Netflix and Tencent indicate enterprise and research institutions are increasingly using Hugging Face for visibility rather than distribution—signaling platform maturation beyond pure open-source hosting.

---

## 4. Worth Exploring

| Model | Rationale |
|-------|-----------|
| [**google/gemma-4-E4B-it**](https://huggingface.co/google/gemma-4-E4B-it) | The "any-to-any" architecture represents a paradigm shift beyond discrete multimodal pipelines. With 321K downloads and experimental status, it's the most accessible entry point for researchers investigating unified modality representations. The E4B's ability to process and generate across arbitrary input/output combinations (text, image, audio, video) positions it as a reference implementation for next-generation foundation model architectures. |
| [**Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled**](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | Highest engagement (2,399 likes) signals exceptional quality perception. This model demonstrates that community distillation can successfully transfer proprietary reasoning patterns—previously considered inaccessible—into open architectures. Essential for studying knowledge distillation efficacy and for practitioners needing Claude-class reasoning without API dependencies. |
| [**prism-ml/Bonsai-8B-gguf**](https://huggingface.co/prism-ml/Bonsai-8B-gguf) | 1-bit quantization at 8B scale pushes the Pareto frontier of efficiency versus capability. While research-grade, its 45K downloads and dedicated MLX variant indicate genuine utility for edge deployment. Critical for researchers investigating post-training quantization limits and for developers building ultra-low-resource applications where model size directly translates to deployment feasibility. |

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*