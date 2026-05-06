# Hugging Face Trending Models Digest 2026-04-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-24 00:18 UTC

---

# Hugging Face Trending Models Digest — April 24, 2026

---

## 1. Today's Highlights

Google's **Gemma 4** family dominates the trending list with extraordinary download velocity—**[gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** has surpassed 5.1M downloads, while the experimental **[gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** pioneers an "any-to-any" architecture. Qwen's **3.6 series**, particularly the **35B-A3B MoE variant**, has catalyzed massive community quantization activity with multiple GGUF, FP8, and NVFP4 derivatives flooding the rankings. The emergence of **uncensored fine-tunes** (HauhauCS, OBLITERATUS, Jiunsong) and **frankenmerges** (Qwopus-GLM-18B) signals robust community experimentation. Meanwhile, world models from **Tencent** and **NVIDIA** hint at 3D generation becoming the next frontier. Notably, **OpenAI's privacy-filter** marks a rare official appearance on the Hub, suggesting shifting proprietary strategies.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,481 | 182,748 | Next-gen GLM with MoE+DSA architecture, strong conversational performance gaining researcher attention. |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 1,041 | 463,243 | Chinese LLM challenger with competitive conversational capabilities and rapid adoption. |
| **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 481 | 90,064 | Abliterated/uncensored variant of Google's Gemma 4, popular for unrestricted research applications. |
| **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)** | tencent | 95 | 13 | Early preview of Tencent's Hy v3 architecture, signaling potential next-gen Chinese LLM competition. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,313 | 5,103,971 | Flagship multimodal Gemma with image-text-to-text, becoming the most downloaded open model this week. |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 809 | 3,004,998 | Experimental "any-to-any" architecture—unified multimodal processing in a compact 4B parameter envelope. |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,331 | 717,811 | Vision-capable MoE with exceptional efficiency (35B active, 3B parameters), enterprise adoption driver. |
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 885 | 125,825 | Moonshot's latest multimodal contender with feature extraction capabilities, challenging Qwen/Gemma dominance. |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 646 | 23,964 | Dense alternative to the MoE variant, offering predictable performance for multimodal deployments. |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 1,223 | 81,729 | State-of-the-art multilingual TTS with natural prosody, filling a critical gap in open audio generation. |
| **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 541 | 6,394 | Apache-2.0 licensed 8B text-to-image model from Baidu, notable for permissive licensing in Chinese AI. |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 576 | 0 | World model for image-to-3D generation—zero downloads suggest preview status but high anticipation. |
| **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | nvidia | 263 | 364 | NVIDIA's image-to-3D world model with published research (arXiv:2604.13036), hardware-optimized pipeline. |
| **[NucleusAI/Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image)** | NucleusAI | 225 | 1,740 | Sparse MoE diffusion architecture for text-to-image, exploring parameter-efficient generation. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 558 | 1,888 | Rare OpenAI Hub release—ONNX-based PII detection, signaling potential shift toward deployable safety tools. |
| **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** | inclusionAI | 140 | 8 | Unified multimodal MoE with feature extraction, extremely early-stage but architecturally ambitious. |
| **[z-lab/Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash)** | z-lab | 134 | 18,806 | DFlash-optimized variant for feature extraction workloads, targeting RAG and embedding pipelines. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 708 | 1,283,534 | Most-downloaded model this week—Unsloth's ultra-efficient GGUF quantization enabling consumer GPU inference. |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 399 | 350,262 | Aggressively uncensored vision-capable MoE, controversial but demonstrating massive demand for unfiltered models. |
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 322 | 131,398 | Dense alternative GGUF, offering simpler deployment without MoE routing complexity. |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 470 | 126,271 | Optimized uncensored Gemma 4 with "fast" llama.cpp compatibility, community favorite for local inference. |
| **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | hesamation | 167 | 63,121 | Reasoning distillation from Claude 4.6 Opus into Qwen MoE, novel cross-model knowledge transfer. |
| **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | Jackrong | 192 | 63,745 | "Frankenmerge" of Qwen and GLM architectures, experimental hybrid with emergent reasoning properties. |
| **[Qwen/Qwen3.6-27B-FP8](https://huggingface.co/Qwen/Qwen3.6-27B-FP8)** | Qwen | 119 | 39,230 | Official FP8 quantization, 2x memory reduction with minimal accuracy loss for datacenter deployment. |
| **[unsloth/Kimi-K2.6-GGUF](https://huggingface.co/unsloth/Kimi-K2.6-GGUF)** | unsloth | 101 | 7,186 | First community quantization of Kimi K2.6, expanding hardware accessibility for Moonshot's model. |
| **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 106 | 9,535 | Dense uncensored variant with vision, lower download count suggests MoE preference for uncensored use. |
| **[Qwen/Qwen3.6-35B-A3B-FP8](https://huggingface.co/Qwen/Qwen3.6-35B-A3B-FP8)** | Qwen | 168 | 708,701 | Official FP8 MoE—massive enterprise downloads indicate production deployment at scale. |
| **[RedHatAI/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/RedHatAI/Qwen3.6-35B-A3B-NVFP4)** | RedHatAI | 89 | 298,020 | Red Hat's NVFP4 quantization for vLLM, targeting NVIDIA Blackwell and cloud-native inference. |
| **[KyleHessling1/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/KyleHessling1/Qwopus-GLM-18B-Merged-GGUF)** | KyleHessling1 | 88 | 8,046 | Independent replication of Qwopus merge, validating community interest in hybrid architectures. |

---

## 3. Ecosystem Signal

**Qwen has become the dominant open-weight ecosystem**, with the 3.6 series generating **8 of the top 30 trending slots** and multiple official + community variants. The 35B-A3B MoE architecture in particular has achieved remarkable adoption—its combination of large effective capacity with small active parameter count makes it ideal for quantization. Google's **Gemma 4** counters with superior raw download numbers, suggesting stronger enterprise integration, while its experimental E4B "any-to-any" model tests unified multimodal architectures.

The quantization landscape has **intensified dramatically**: GGUF (Unsloth), FP8 (official), NVFP4 (Red Hat), and DFlash (z-lab) represent competing optimization philosophies for different hardware targets. Community fine-tuning has shifted toward **"uncensored" and "abliterated" variants**—a notable 4 models carry these tags, reflecting demand for unfiltered research access. The **frankenmerge trend** (Qwopus-GLM) indicates sophisticated community experimentation beyond simple fine-tuning.

Proprietary signals are mixed: OpenAI's privacy-filter release is anomalous, while Moonshot and MiniMax are actively open-weight competitive. Chinese labs (Qwen, Zhipu/GLM, Moonshot, Tencent, Baidu, MiniMax) now constitute **the majority of trending model origins**, a striking geographic shift from 2024's US-centric landscape.

---

## 4. Worth Exploring

| Model | Reasoning |
|-------|-----------|
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | The "any-to-any" architecture is genuinely experimental—if it delivers on unified multimodal processing in 4B parameters, it could redefine efficiency benchmarks. Worth studying for architecture research and edge deployment prototyping. |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | At 1.28M downloads, this is the people's choice for a reason. Unsloth's quantization quality enables 35B-equivalent multimodal inference on consumer hardware—test this if you want production-capable local AI. |
| **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | Cross-model distillation from proprietary to open weights is an emerging technique with implications for capability transfer. Early signal for whether frontier reasoning can be effectively extracted into deployable formats. |

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*