# Hugging Face Trending Models Digest 2026-04-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-12 00:12 UTC

---

 # Hugging Face Trending Models Digest — April 12, 2026

---

## 1. Today's Highlights

This week's trending models reveal Google's **Gemma 4** family dominating the ecosystem with multiple variants spanning 2B to 31B parameters, including the experimental "any-to-any" E4B and E2B models. Community fine-tuning activity is exceptionally active, with **HauhauCS** releasing multiple uncensored variants and **Jackrong** distilling reasoning capabilities from Claude 4.6 Opus into Qwen 3.5 architectures. Notably, **nvidia/personaplex-7b-v1** signals growing interest in speech-to-speech AI agents, while **netflix/void-model** represents a rare video-to-video entry from a major studio. The continued proliferation of GGUF quantizations by Unsloth underscores persistent demand for local, efficient inference.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 985 | 23,998 | Latest GLM MoE architecture with DSA optimization, representing Zhipu's continued push for efficient large-scale language models. |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,582 | 566,643 | High-engagement reasoning distillation combining Qwen 3.5 architecture with Claude 4.6 Opus reasoning patterns. |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | prism-ml | 560 | 71,661 | Extreme 1-bit quantization pushing the boundaries of minimal viable LLMs for edge deployment. |
| **[LGAI-EXAONE/EXAONE-4.5-33B](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B)** | LGAI-EXAONE | 105 | 3,396 | LG's latest Korean-optimized multimodal model, representing regional foundation model competition. |
| **[kai-os/Carnice-9b](https://huggingface.co/kai-os/Carnice-9b)** | kai-os | 149 | 4,147 | Hermes-agent tuned Qwen 3.5 variant optimized for autonomous agent workflows. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 1,730 | 2,026,015 | Flagship Gemma 4 vision-language model with massive adoption, setting the open-weight multimodal baseline. |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 587 | 1,136,791 | Experimental "any-to-any" architecture enabling flexible input-output modality combinations. |
| **[google/gemma-4-E2B-it](https://huggingface.co/google/gemma-4-E2B-it)** | google | 405 | 774,725 | Compact any-to-any variant democratizing multimodal AI for resource-constrained environments. |
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** | baidu | 1,136 | 44,379 | InternVL-based document understanding model targeting enterprise OCR and visual information extraction. |
| **[nvidia/personaplex-7b-v1](https://huggingface.co/nvidia/personaplex-7b-v1)** | nvidia | 2,422 | 473,689 | Moshi-based speech-to-speech agent with persona capabilities, signaling NVIDIA's voice AI ambitions. |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 500 | 340,361 | Zero-shot multilingual voice cloning with strong open-source community backing. |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 697 | 5,722 | Next-generation TTS from OpenBMB with improved prosody and multilingual coverage. |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 758 | 0 | CogVideoX-based video inpainting for object removal, representing studio investment in generative video tooling. |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 126 | 535 | Hunyuan vision-language model for embodied AI and robotics applications. |
| **[tencent/HY-OmniWeaving](https://huggingface.co/tencent/HY-OmniWeaving)** | tencent | 247 | 0 | Research preview of unified multimodal generation with dual arXiv preprints indicating active development. |
| **[LiquidAI/LFM2.5-VL-450M](https://huggingface.co/LiquidAI/LFM2.5-VL-450M)** | LiquidAI | 100 | 4,925 | Ultra-efficient 450M parameter vision-language model from liquid neural network specialists. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4)** | nvidia | 352 | 565,972 | NVIDIA-optimized FP4 quantization using ModelOpt, targeting H100/B200 deployment efficiency. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 930 | 89,753 | MLX-compatible abliterated Gemma 4 for Apple Silicon, demonstrating strong community demand for uncensored local inference. |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 265 | 373,322 | Aggressive uncensored fine-tune of Gemma 4's any-to-any model, controversial but heavily downloaded. |
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,098 | 868,534 | Most-liked uncensored Qwen 3.5 variant, indicating sustained demand for unfiltered local models. |
| **[HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,256 | 962,827 | MoE-enabled uncensored vision model, combining efficiency and multimodal capabilities with controversial fine-tuning. |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 420 | 1,523,972 | Highest-downloaded GGUF this period, Unsloth's efficient quantization enabling widespread local deployment. |
| **[unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF)** | unsloth | 281 | 997,865 | Near-million download GGUF of Google's flagship, proving Unsloth's dominance in accessible quantization. |
| **[unsloth/gemma-4-E4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF)** | unsloth | 236 | 932,802 | Any-to-any model in GGUF format, extending multimodal capabilities to consumer hardware. |
| **[unsloth/GLM-5.1-GGUF](https://huggingface.co/unsloth/GLM-5.1-GGUF)** | unsloth | 115 | 21,864 | Rapid GGUF conversion of newly released GLM-5.1, showing Unsloth's responsive ecosystem support. |
| **[Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF)** | Jackrong | 264 | 111,740 | Reasoning-optimized Qwen 3.5 in GGUF, community alternative to proprietary reasoning models. |
| **[LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo)** | LilaRest | 141 | 13,912 | Community NVFP4 optimization pushing NVIDIA's format beyond official implementations. |

---

## 3. Ecosystem Signal

**Gemma 4 hegemony with experimental edges.** Google's Gemma 4 family commands unprecedented ecosystem attention—8 of 30 trending models, spanning 2B to 31B parameters with three architectural tiers: standard vision-language (31B/26B), experimental any-to-any (E4B/E2B), and dense variants. The "any-to-any" pipeline tag represents Google's bid to define the next multimodal paradigm, though adoption lags behind proven image-text-to-text architectures.

**Qwen 3.5 as the community's canvas.** Alibaba's Qwen 3.5 architecture powers 5 trending models, predominantly through community fine-tunes. Jackrong's Claude distillation and HauhauCS's aggressive uncensored series demonstrate Qwen's emergence as the preferred base for experimental modifications—more tractable than Gemma for community modification, more capable than Llama derivatives for Asian-language contexts.

**Quantization as infrastructure.** Unsloth's systematic GGUF conversion of every major release—4 models this period—has created a de facto standard for accessible local inference. The download volumes (3.5M+ combined for Unsloth GGUFs) reveal a bifurcated ecosystem: researchers and enterprises use native PyTorch, while practitioners and hobbyists overwhelmingly prefer quantized formats.

**Speech AI's inflection point.** Three TTS/speech models trend simultaneously, with NVIDIA's personaplex-7b representing the most sophisticated entry: not merely text-to-speech, but speech-to-speech agents with persona persistence. This suggests 2026 as the year voice interfaces mature beyond transcription and synthesis toward genuine conversational agents.

**The uncensored paradox.** HauhauCS's three models combine 2,619 likes with 2.2M downloads—engagement ratios suggesting users download quietly what they hesitate to endorse publicly. This persistent demand creates tension with platform policies and model licenses, particularly as Gemma's terms explicitly prohibit certain modifications.

---

## 4. Worth Exploring

**[nvidia/personaplex-7b-v1](https://huggingface.co/nvidia/personaplex-7b-v1)** — This Moshi-based speech-to-speech model represents the most technically ambitious trending entry. Unlike conventional TTS, it maintains conversational state across voice exchanges with persona consistency. Worth studying for: (1) architectural patterns for real-time speech LLMs, (2) NVIDIA's emerging voice AI stack, (3) implications for human-computer interaction design. The 2,422 likes with 473K downloads suggest strong researcher interest despite limited public documentation.

**[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** — The highest-liked model (2,582) demonstrates sophisticated knowledge transfer from proprietary to open-weight architectures. Worth trying for: evaluating whether distilled reasoning matches native capabilities, understanding distillation methodology for advanced reasoning patterns, and as a cost-effective alternative to API-dependent reasoning models. The 566K downloads indicate production deployment beyond experimentation.

**[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** — The "any-to-any" experimental variant merits attention despite lower engagement than the standard 31B. Worth exploring for: architectural preview of Google's multimodal roadmap, testing novel input-output combinations (audio→image, video→text), and assessing whether flexible modality routing outperforms specialized pipelines. The 1.1M downloads suggest substantial curiosity, though practical applications remain undefined.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*