# Hugging Face Trending Models Digest 2026-04-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-10 00:13 UTC

---

# Hugging Face Trending Models Digest — April 10, 2026

---

## 1. Today's Highlights

Google's **Gemma 4** family dominates this week's trending list with multiple variants (31B, 26B-A4B, E4B, E2B) spanning vision-language and any-to-any capabilities, signaling Google's aggressive push into open multimodal AI. Community fine-tuning activity is exceptionally vibrant, with **Jackrong's Qwen3.5-Claude reasoning distillate** amassing 2,542 likes—the highest in this cohort—demonstrating strong demand for distilled reasoning capabilities. The **uncensored/abliterated model niche** remains active with multiple entries from HauhauCS and dealignai, while **quantization specialists Unsloth** maintain heavy presence across Gemma and GLM families. Notably, **enterprise entrants Netflix and Baidu** are expanding the Hub's scope into video editing and OCR respectively.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 1,562 | 1,333,678 | Flagship instruction-tuned Gemma 4 with image-text-to-text capabilities; highest download velocity in cohort. |
| [**dealignai/Gemma-4-31B-JANG_4M-CRACK**](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 850 | 59,852 | Abliterated/uncensored MLX-compatible variant for Apple Silicon, filling a niche for unrestricted local inference. |
| [**zai-org/GLM-5.1**](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 848 | 8,465 | Zhipu AI's latest GLM with MoE-DSA architecture; emerging challenger to Llama/Gemma dominance. |
| [**nvidia/Gemma-4-31B-IT-NVFP4**](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4) | nvidia | 327 | 365,659 | NVIDIA-optimized FP4 variant leveraging ModelOpt for efficient datacenter deployment. |
| [**kai-os/gemma4-31b-Opus-4.6-reasoning**](https://huggingface.co/kai-os/gemma4-31b-Opus-4.6-reasoning) | kai-os | 146 | 283 | Experimental reasoning-tuned Gemma 4 using synthetic Opus 4.6 distillation signals. |
| [**kai-os/Carnice-9b**](https://huggingface.co/kai-os/Carnice-9b) | kai-os | 136 | 3,257 | Compact 9B Hermes-agent specialized model for tool-use and autonomous agent workflows. |
| [**prism-ml/Bonsai-8B-gguf**](https://huggingface.co/prism-ml/Bonsai-8B-gguf) | prism-ml | 539 | 64,863 | Extreme 1-bit quantized 8B model enabling runnable LLMs on minimal hardware. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [**Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled**](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | Jackrong | 2,542 | 564,664 | Highest-liked model this week; multimodal reasoning powerhouse distilling Claude 4.6 Opus into Qwen3.5 architecture. |
| [**google/gemma-4-E4B-it**](https://huggingface.co/google/gemma-4-E4B-it) | google | 537 | 784,026 | "Any-to-any" modality model—Google's bid for unified multimodal understanding and generation. |
| [**google/gemma-4-26B-A4B-it**](https://huggingface.co/google/gemma-4-26B-A4B-it) | google | 567 | 1,046,548 | Mid-size vision-language workhorse with strong conversational capabilities. |
| [**google/gemma-4-E2B-it**](https://huggingface.co/google/gemma-4-E2B-it) | google | 377 | 514,591 | Efficient any-to-any variant balancing capability and inference cost. |
| [**baidu/Qianfan-OCR**](https://huggingface.co/baidu/Qianfan-OCR) | baidu | 1,129 | 42,622 | Baidu's vision-language OCR entry; strong like-to-download ratio suggests enterprise interest. |
| [**netflix/void-model**](https://huggingface.co/netflix/void-model) | netflix | 697 | 0 | Zero-download video-to-video inpainting model; Netflix's first Hub release signals MLOps transparency push. |
| [**openbmb/VoxCPM2**](https://huggingface.co/openbmb/VoxCPM2) | openbmb | 590 | 1,815 | Tsinghua's multilingual TTS with emerging traction in non-English speech synthesis. |
| [**k2-fsa/OmniVoice**](https://huggingface.co/k2-fsa/OmniVoice) | k2-fsa | 439 | 200,591 | Zero-shot multilingual voice cloning from the Kaldi-Next ecosystem; strong download velocity. |
| [**CohereLabs/cohere-transcribe-03-2026**](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026) | CohereLabs | 845 | 150,149 | Cohere's ASR entry with competitive performance on long-form audio; March 2026 checkpoint. |
| [**tencent/HY-OmniWeaving**](https://huggingface.co/tencent/HY-OmniWeaving) | tencent | 240 | 0 | Research preview with dual arXiv citations; Tencent's diffusion architecture for cross-modal generation. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| *No pure specialized models in this cohort; specialization appears via fine-tuning tags (reasoning, agentic)* | — | — | — | — |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [**unsloth/gemma-4-26B-A4B-it-GGUF**](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) | unsloth | 373 | 1,197,486 | Highest-download quantization; Unsloth's GGUF conversion enabling local vision-Llama.cpp inference. |
| [**HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 225 | 238,236 | Aggressive uncensored variant of Google's any-to-any model; controversial but high-utility for research. |
| [**unsloth/gemma-4-31B-it-GGUF**](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF) | unsloth | 250 | 806,395 | Full-size Gemma 4 GGUF; enables 31B multimodal inference on consumer GPU/Apple Silicon. |
| [**unsloth/gemma-4-E4B-it-GGUF**](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF) | unsloth | 209 | 737,252 | Any-to-any GGUF conversion; technically ambitious given multimodal complexity. |
| [**Jackrong/Qwopus3.5-27B-v3-GGUF**](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF) | Jackrong | 240 | 98,156 | Quantized reasoning-distilled Qwen3.5; "Qwopus" branding suggests ongoing iteration series. |
| [**HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,077 | 821,239 | Exceptionally high-engagement small uncensored model; 9B sweet spot for local deployment. |
| [**Jackrong/Qwopus3.5-9B-v3-GGUF**](https://huggingface.co/Jackrong/Qwopus3.5-9B-v3-GGUF) | Jackrong | 239 | 83,943 | Compact reasoning-distilled variant; v3 iteration signals active maintenance. |
| [**Jackrong/Qwopus3.5-27B-v3**](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3) | Jackrong | 164 | 14,065 | Full-precision base for the GGUF variant; lower downloads suggest quantization preference. |
| [**unsloth/GLM-5.1-GGUF**](https://huggingface.co/unsloth/GLM-5.1-GGUF) | unsloth | 96 | 13,329 | Early GGUF support for GLM-5.1; establishing Unsloth's coverage beyond Gemma/Qwen. |

---

## 3. Ecosystem Signal

**Gemma 4 has achieved clear ecosystem dominance**—Google released 8+ variants (base, instruction, vision, any-to-any) with Apache 2.0 licensing, enabling the derivative wave visible in this list. The concentration of Unsloth quantizations (5 entries) and HauhauCS uncensored variants (3 entries) demonstrates how open-weight releases catalyze community infrastructure.

**Qwen3.5 emerges as the secondary anchor**, particularly through Jackrong's "Qwopus" reasoning distillation series. Notably, these distillates surpass their base models in engagement (2,542 likes vs. 848 for native GLM-5.1), suggesting **synthetic data from frontier models (Claude 4.6 Opus)** is becoming a viable democratization pathway.

The **quantization economy is maturing**: GGUF downloads frequently exceed base model downloads (e.g., 1.2M vs. 1.0M for Gemma-4-26B-A4B), indicating users prioritize runnable artifacts over reference implementations. The 1-bit Bonsai-8B and NVFP4 optimizations signal **extreme compression as a distinct research thrust**.

Enterprise participation (Netflix, Baidu, CohereLabs, Tencent) is expanding Hub's scope beyond traditional open-source, though download patterns suggest these releases serve transparency and recruitment goals over direct adoption.

---

## 4. Worth Exploring

| Model | Rationale |
|-------|-----------|
| [**Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled**](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | **Highest signal-to-noise ratio**: Combines Qwen3.5's efficient architecture with Claude 4.6 Opus reasoning traces. The 564K downloads with 2,542 likes suggest validated utility for complex reasoning tasks, code generation, and multimodal applications. Benchmark against your current reasoning model. |
| [**unsloth/gemma-4-26B-A4B-it-GGUF**](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) | **Local multimodal deployment benchmark**: 1.2M downloads indicate this is the current state-of-the-art for running vision-language models on consumer hardware. Test if the A4B (4-bit activation) tradeoffs preserve quality for your use case. |
| [**prism-ml/Bonsai-8B-gguf**](https://huggingface.co/prism-ml/Bonsai-8B-gguf) | **Extreme efficiency frontier**: 1-bit quantization at 8B scale is technically audacious. Worth studying for edge deployment feasibility—does the compression tax justify the hardware accessibility gains? Early indicator of post-GGUF quantization research directions. |

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*