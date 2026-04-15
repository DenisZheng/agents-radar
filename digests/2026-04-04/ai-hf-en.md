# Hugging Face Trending Models Digest 2026-04-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-04 00:10 UTC

---

# Hugging Face Trending Models Digest — April 4, 2026

---

## 1. Today's Highlights

The Qwen 3.5 ecosystem dominates this week's trending charts, with community fine-tuner **Jackrong** claiming the top spot through aggressive distillation of Claude 4.6 Opus reasoning capabilities into a 27B parameter model. Google's Gemma-4 family has launched in force with multiple variants spanning 2B to 31B parameters, including experimental "any-to-any" multimodal architectures. Notably, **uncensored fine-tunes** from HauhauCS are driving massive download volumes—nearly 1.4M combined—suggesting strong demand for unfiltered local inference. The emergence of 1-bit quantization (prism-ml's Bonsai) and Netflix's entry into video AI signal continued diversification beyond pure language modeling.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,222 | 487,446 | Distills Claude 4.6 Opus reasoning into open-weights Qwen 3.5, offering frontier-level chain-of-thought at runnable scale |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 674 | 76,200 | Google's flagship instruction-tuned Gemma-4 with native vision-language capabilities |
| **[nvidia/Nemotron-Cascade-2-30B-A3B](https://huggingface.co/nvidia/Nemotron-Cascade-2-30B-A3B)** | nvidia | 456 | 137,849 | NVIDIA's Cascade MoE architecture delivering efficient inference through activated parameter sparsity |
| **[LiquidAI/LFM2.5-350M](https://huggingface.co/LiquidAI/LFM2.5-350M)** | LiquidAI | 212 | 10,194 | Ultra-efficient 350M parameter liquid foundation model for edge deployment |
| **[chromadb/context-1](https://huggingface.co/chromadb/context-1)** | chromadb | 362 | 3,195 | Chroma's first native generative model, optimized for retrieval-augmented generation workflows |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[Qwen/Qwen3.5-9B](https://huggingface.co/Qwen/Qwen3.5-9B)** | Qwen | 1,157 | 4,818,944 | Official Qwen 3.5 release with 4.8M downloads—dominant open vision-language foundation |
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** | baidu | 859 | 26,980 | Baidu's production OCR with InternVL architecture, strong CJK document understanding |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 253 | 23,460 | Experimental "any-to-any" modality—accepts and generates arbitrary media types |
| **[mistralai/Voxtral-4B-TTS-2603](https://huggingface.co/mistralai/Voxtral-4B-TTS-2603)** | mistralai | 649 | 4,760 | Mistral's compact multilingual TTS with vLLM inference optimization |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 128 | 6,560 | Open-source TTS supporting African American English and African American Language variants |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 197 | 0 | Netflix's video inpainting model for object removal—zero downloads suggest gated release |
| **[facebook/sam3.1](https://huggingface.co/facebook/sam3.1)** | facebook | 126 | 7,763 | Segment Anything 3.1 with native video segmentation capabilities |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026)** | CohereLabs | 763 | 84,600 | Cohere's latest ASR with competitive Whisper-level accuracy and enterprise licensing |
| **[microsoft/harrier-oss-v1-0.6b](https://huggingface.co/microsoft/harrier-oss-v1-0.6b)** | microsoft | 148 | 7,508 | 600M parameter embedding model built on Qwen3, MTEB-benchmarked |
| **[microsoft/harrier-oss-v1-270m](https://huggingface.co/microsoft/harrier-oss-v1-270m)** | microsoft | 117 | 5,677 | Lightweight 270M embedding variant using Gemma3 text encoder |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 948 | 700,218 | Highest-volume uncensored fine-tune—"aggressive" safety removal for unrestricted local use |
| **[HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,156 | 652,331 | MoE-scale uncensored variant with vision capabilities, nearly matching official Qwen's like count |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF)** | Jackrong | 492 | 227,053 | GGUF quantization of the top-trending reasoning model—broad llama.cpp compatibility |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | prism-ml | 357 | 26,164 | Extreme 1-bit quantization—8B model runnable on consumer hardware with minimal quality loss |
| **[prism-ml/Bonsai-8B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-8B-mlx-1bit)** | prism-ml | 126 | 12,610 | Apple Silicon-optimized MLX port of the 1-bit Bonsai architecture |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 182 | 99,223 | Unsloth-optimized GGUF of Google's MoE Gemma-4 with 4B active parameters |
| **[unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF)** | unsloth | 130 | 83,931 | Dense Gemma-4 31B in efficient GGUF format for local inference |
| **[Jackrong/Qwopus3.5-9B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-v3-GGUF)** | Jackrong | 146 | 19,991 | Compact reasoning-optimized Qwen 3.5 variant in GGUF |
| **[Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF)** | Jackrong | 116 | 10,567 | Larger-scale reasoning variant with aggressive quantization for accessibility |

---

## 3. Ecosystem Signal

**Qwen 3.5 has achieved ecosystem dominance**—the official 9B base model leads all downloads at 4.8M, while community fine-tunes from Jackrong and HauhauCS capture three of the top five like counts. This mirrors Llama's 2024 trajectory: Alibaba's permissive licensing and consistent quality releases have cultivated a thriving derivative market. Google's Gemma-4 launch represents a strategic pivot—abandoning the "small models only" positioning for competitive 31B dense and MoE variants, though download volumes trail Qwen significantly.

The **uncensored fine-tuning economy** has matured into a measurable force. HauhauCS's combined 1.35M downloads demonstrate that safety-filter removal drives substantial user demand, particularly for local deployment. This creates tension with platform policies and model licenses, yet remains technically straightforward with current tooling.

**Quantization innovation is accelerating**: 1-bit methods (Bonsai) and Unsloth's optimized GGUF pipelines are collapsing hardware requirements faster than model growth. The ratio of GGUF downloads to base model downloads (~50% for top models) suggests local inference is now default behavior for power users. Meanwhile, **proprietary frontier signals** appear through distillation—Jackrong's "Claude 4.6 Opus" branding implies access to unreleased Anthropic capabilities, highlighting the continued information asymmetry between closed and open development.

---

## 4. Worth Exploring

| Model | Recommendation |
|-------|---------------|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | **Most significant capability unlock.** If the distillation claim holds, this offers frontier reasoning at 27B scale—test against GPQA or live coding benchmarks. The 487K downloads suggest community validation, but verify reasoning traces independently. |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | **Technical frontier to watch.** 1-bit quantization has been theoretically promising but practically disappointing; Bonsai's 26K downloads and positive early signals warrant testing on your own hardware. Success here would redefine edge AI economics. |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | **Architectural preview.** The "any-to-any" designation suggests Google's unified multimodal ambitions. With only 23K downloads, it's underexplored relative to hype—probe for actual cross-modal capabilities beyond marketing, particularly audio and video generation quality. |

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*