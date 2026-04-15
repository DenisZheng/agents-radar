# Hugging Face Trending Models Digest 2026-04-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-11 01:50 UTC

---

# Hugging Face Trending Models Digest — April 11, 2026

---

## 1. Today's Highlights

Google's **Gemma 4** family dominates this week's trending list with multiple variants spanning 26B to 31B parameters and experimental "any-to-any" architectures, signaling a major push toward natively multimodal open models. Community fine-tuning activity is exceptionally high, with **HauhauCS** and **Jackrong** releasing multiple uncensored and reasoning-distilled variants of Qwen 3.5 and Gemma 4. The emergence of **"abliterated"** and **aggressive uncensored** tags points to growing demand for unfiltered model variants. Notably, **Netflix** entered the Hub with a zero-download video inpainting model, while **Tencent** and **Baidu** continue expanding Chinese multimodal offerings. Quantization remains essential infrastructure, with **Unsloth** providing GGUF conversions for nearly every major release within days.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [**zai-org/GLM-5.1**](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 935 | 15,930 | Latest GLM generation with MoE-DSA architecture, positioning as open alternative to GPT-4 class models |
| [**Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled**](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | Jackrong | 2,566 | 567,166 | Highest likes this week; distills Claude 4.6 Opus reasoning into efficient Qwen 3.5 architecture |
| [**nvidia/Gemma-4-31B-IT-NVFP4**](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4) | nvidia | 336 | 453,893 | NVIDIA-optimized FP4 variant demonstrating production-ready quantization for datacenter deployment |
| [**prism-ml/Bonsai-8B-gguf**](https://huggingface.co/prism-ml/Bonsai-8B-gguf) | prism-ml | 550 | 68,205 | Extreme 1-bit quantization enabling LLM inference on minimal hardware |
| [**kai-os/Carnice-9b**](https://huggingface.co/kai-os/Carnice-9b) | kai-os | 140 | 3,715 | Compact Hermes-agent tuned model for agentic workflows |
| [**LGAI-EXAONE/EXAONE-4.5-33B**](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B) | LGAI-EXAONE | 97 | 2,292 | LG's latest Korean-optimized multimodal model expanding regional open-source ecosystem |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 1,675 | 1,589,761 | Flagship Gemma 4 release with native image-text-to-text; highest download velocity |
| [**google/gemma-4-E4B-it**](https://huggingface.co/google/gemma-4-E4B-it) | google | 564 | 961,135 | Experimental "any-to-any" architecture pointing toward unified multimodal foundation models |
| [**google/gemma-4-26B-A4B-it**](https://huggingface.co/google/gemma-4-26B-A4B-it) | google | 588 | 1,269,031 | Efficient 26B active/4B activated MoE variant balancing capability and inference cost |
| [**openbmb/VoxCPM2**](https://huggingface.co/openbmb/VoxCPM2) | openbmb | 669 | 3,765 | OpenBMB's next-gen multilingual TTS with improved prosody control |
| [**k2-fsa/OmniVoice**](https://huggingface.co/k2-fsa/OmniVoice) | k2-fsa | 473 | 269,789 | Zero-shot voice cloning with strong multilingual support from speech recognition specialists |
| [**netflix/void-model**](https://huggingface.co/netflix/void-model) | netflix | 738 | 0 | Surprising entry from streaming giant; video inpainting for object removal—zero downloads suggests gated/early access |
| [**baidu/Qianfan-OCR**](https://huggingface.co/baidu/Qianfan-OCR) | baidu | 1,133 | 43,619 | Production OCR leveraging InternVL architecture for document understanding |
| [**tencent/HY-Embodied-0.5**](https://huggingface.co/tencent/HY-Embodied-0.5) | tencent | 121 | 272 | Hunyuan vision-language model for embodied AI applications |
| [**google/gemma-4-E2B-it**](https://huggingface.co/google/gemma-4-E2B-it) | google | 389 | 646,063 | Lightweight any-to-any variant (2B active) enabling edge multimodal deployment |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [**tencent/HY-OmniWeaving**](https://huggingface.co/tencent/HY-OmniWeaving) | tencent | 243 | 0 | Research preview for unified generation across modalities; cited arXiv papers suggest technical depth |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [**dealignai/Gemma-4-31B-JANG_4M-CRACK**](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 900 | 75,426 | MLX-native "abliterated" Gemma 4 for Apple Silicon with 4M token extended context |
| [**HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 250 | 317,399 | Aggressive uncensored variant of experimental E4B; "aggressive" tag denotes minimal safety filtering |
| [**unsloth/gemma-4-26B-A4B-it-GGUF**](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) | unsloth | 395 | 1,361,202 | Highest GGUF downloads; enables local inference of large MoE on consumer hardware |
| [**HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,090 | 848,916 | Compact uncensored Qwen 3.5 with exceptional download traction for its size |
| [**Jackrong/Qwopus3.5-27B-v3-GGUF**](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF) | Jackrong | 258 | 104,450 | Reasoning-optimized Qwen 3.5 variant in GGUF for local deployment |
| [**unsloth/gemma-4-31B-it-GGUF**](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF) | unsloth | 265 | 906,913 | Full-parameter Gemma 4 GGUF conversion; nearly 1M downloads in first week |
| [**HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,251 | 935,896 | Largest uncensored MoE variant this week; 35B total/3B active parameters |
| [**unsloth/gemma-4-E4B-it-GGUF**](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF) | unsloth | 224 | 845,716 | Any-to-any architecture in GGUF format—experimental multimodal on local hardware |
| [**unsloth/GLM-5.1-GGUF**](https://huggingface.co/unsloth/GLM-5.1-GGUF) | unsloth | 105 | 17,672 | Rapid GGUF conversion enabling llama.cpp compatibility for GLM-5.1 |
| [**Jackrong/Qwopus3.5-9B-v3-GGUF**](https://huggingface.co/Jackrong/Qwopus3.5-9B-v3-GGUF) | Jackrong | 244 | 91,184 | Efficient reasoning model for edge deployment |

---

## 3. Ecosystem Signal

**Gemma 4** has achieved immediate ecosystem dominance, with Google releasing six variants simultaneously—three base, three instruction-tuned—spanning dense and MoE architectures plus experimental "any-to-any" multimodal configurations. This release strategy mirrors Meta's Llama approach but with tighter parameter efficiency (26B-31B vs. 70B+ competitors). The **Qwen 3.5** family maintains strong community momentum through **Jackrong** and **HauhauCS**, who collectively account for 7 trending models through aggressive fine-tuning and quantization pipelines.

The quantization infrastructure has matured remarkably: **Unsloth** now provides same-day GGUF conversions with 1M+ download velocities, effectively decoupling model release from accessible deployment. This creates a two-tier ecosystem where original weights serve cloud/API use while quantized variants capture local/edge demand.

A notable polarization emerges around **uncensored/abliterated** models, with explicit "aggressive" tagging and 2M+ combined downloads suggesting substantial demand for unfiltered variants—particularly in regions with different content moderation expectations. The **MLX** tag on one Gemma variant indicates Apple's ML framework gaining traction for efficient local inference.

Corporate participation diversifies: **Netflix**'s video model (despite zero downloads suggesting access control) and **NVIDIA**'s optimized FP4 variant demonstrate open-weight models becoming standard infrastructure across industries, not merely research artifacts.

---

## 4. Worth Exploring

**[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** — Highest community validation (2,566 likes) for a distilled reasoning model. The 27B parameter count offers genuine utility while the Claude 4.6 Opus distillation suggests capability approaching frontier closed models. Worth studying for distillation methodology and as a production reasoning candidate.

**[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** — The "any-to-any" architecture represents Google's experimental direction for unified multimodal foundations. With 961K downloads despite "experimental" status, it's becoming a de facto standard for researchers studying next-generation multimodal architectures. The 4B activated parameter count enables feasible experimentation.

**[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** — Most technically distinctive fine-tune: MLX optimization for Apple Silicon, 4M context extension, and "abliteration" technique for removing refusals. The 75K downloads on a platform-specific variant indicates strong demand for efficient local deployment. Worth examining for context extension methods and Apple ecosystem ML optimization.

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*