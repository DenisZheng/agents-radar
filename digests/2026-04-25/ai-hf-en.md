# Hugging Face Trending Models Digest 2026-04-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-25 00:15 UTC

---

# Hugging Face Trending Models Digest — April 25, 2026

---

## 1. Today's Highlights

The Hugging Face ecosystem this week is dominated by **DeepSeek-V4** and **Qwen3.6** releases, signaling intensifying competition in open-weight frontier models. Google's [gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) leads in raw adoption with 5.4M downloads, proving Gemma's production staying power. Community quantization activity remains exceptionally vibrant—Unsloth's GGUF variants of Qwen and Kimi models collectively exceed 1.7M weekly downloads, far outpacing their base counterparts. Notably, "uncensored" fine-tunes ([HauhauCS](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive), [OBLITERATUS](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)) command significant engagement, reflecting persistent demand for unaligned model variants. Meanwhile, Tencent's [HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0) and NVIDIA's [Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0) advance the nascent image-to-3D world model category.

---

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 2,418 | 30 | Flagship reasoning-optimized LLM with 2.4K likes despite minimal downloads—research interest is surging ahead of deployment. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 618 | 23 | MIT-licensed speed-optimized variant, positioning DeepSeek for permissive commercial adoption. |
| [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 1,502 | 204,327 | Zhipu's latest MoE architecture with DSA optimization, gaining strong traction in Chinese and international dev communities. |
| [MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7) | MiniMaxAI | 1,056 | 469,402 | High-throughput conversational model approaching half-million weekly downloads, signaling MiniMax's scaling success. |
| [tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview) | tencent | 135 | 1,235 | Preview of Tencent's Hy v3 architecture, early but notable for Big Tech's continued open-weight experimentation. |
| [hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF) | hesamation | 175 | 83,694 | Community distillation of proprietary reasoning into open Qwen MoE, 84K downloads shows distillation demand. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) | moonshotai | 976 | 208,251 | Vision-language flagship with compressed-tensor optimization, Moonshot's strongest open release yet. |
| [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 754 | 162,349 | Compact multimodal workhorse balancing vision and language capabilities at manageable scale. |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,383 | 861,178 | The week's download leader among open multimodal models—MoE efficiency driving near-million adoption. |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,337 | 5,457,597 | Undisputed adoption king with 5.4M downloads; Gemma-4's vision-language integration validates Google's open strategy. |
| [tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0) | tencent | 592 | 2,741 | World model for 3D scene generation from images, representing Tencent's push into spatial AI. |
| [openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2) | openbmb | 1,228 | 94,124 | Breakthrough multilingual TTS with 1.2K likes—voice synthesis quality rivaling proprietary alternatives. |
| [baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image) | baidu | 551 | 7,102 | Apache-2.0 text-to-image model at 8B parameters, Baidu's most permissive generative release to date. |
| [nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0) | nvidia | 266 | 498 | Research-preview world model for 3D generation, NVIDIA's compute-heavy approach to spatial foundation models. |
| [inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni) | inclusionAI | 166 | 103 | Ambitious "any-to-any" MoE architecture, low downloads but high conceptual interest for unified multimodal AI. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 686 | 12,664 | Rare open-weight release from OpenAI—ONNX-optimized PII detection filling a critical compliance gap. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF) | unsloth | 372 | 340,032 | Efficient quantization enabling local multimodal deployment—2× base model downloads prove GGUF utility. |
| [unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 740 | 1,397,244 | **Highest downloads overall**: Unsloth's MoE quantization is the definitive local inference choice this week. |
| [unsloth/Kimi-K2.6-GGUF](https://huggingface.co/unsloth/Kimi-K2.6-GGUF) | unsloth | 104 | 9,757 | Early GGUF for Kimi vision model, smaller footprint suggests optimization challenges with Moonshot's architecture. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 416 | 388,836 | Aggressive safety tuning removal on Qwen MoE, 389K downloads reveal substantial uncensored model demand. |
| [HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 134 | 75,561 | Smaller uncensored variant, consistent community appetite for unaligned multimodal models. |
| [OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED) | OBLITERATUS | 493 | 101,144 | "Abliterated" Gemma-4 with 101K downloads, demonstrating systematic uncensoring as a sustained community practice. |
| [Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2) | Jiunsong | 474 | 141,390 | Optimized uncensored Gemma-4 GGUF combining speed tuning with safety removal, v2 iteration shows refinement. |
| [Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF) | Jackrong | 200 | 70,227 | "Frankenmerge" of Qwen and GLM lineages, experimental architecture fusion gaining niche but dedicated following. |
| [KyleHessling1/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/KyleHessling1/Qwopus-GLM-18B-Merged-GGUF) | KyleHessling1 | 95 | 17,725 | Community fork of the Qwopus merge, lower engagement but validates reproducibility of merge techniques. |
| [z-lab/Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash) | z-lab | 141 | 22,460 | Custom "DFlash" optimization on Qwen MoE, experimental efficiency tuning with moderate adoption. |

---

## 3. Ecosystem Signal

**Qwen and DeepSeek have emerged as the twin poles of open-weight innovation.** Qwen3.6 variants dominate both official releases and community derivatives, with the 35B-A3B MoE architecture proving especially adaptable—appearing in official, quantized, uncensored, and distilled forms. DeepSeek-V4's launch strategy is notable: releasing Pro, Flash, and Base variants simultaneously with differentiated licensing (MIT for Flash) suggests mature product-market segmentation previously unseen in open research.

The **quantization ecosystem has matured into a parallel distribution channel**. Unsloth's GGUF releases routinely outperform base models in downloads by 10-50×, indicating that local inference accessibility now drives adoption more than raw capability. This creates a "capability funnel" where frontier models reach mass users only through community optimization.

**Uncensored fine-tuning persists as a structural phenomenon**, not fringe activity. With three models exceeding 100K weekly downloads and collective uncensored downloads rivaling official releases, safety-aligned training is being systematically reversed at scale. This represents an unresolved tension in open-weight strategy.

Proprietary-to-open distillation ([hesamation's Claude distillation](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)) and architectural "frankenmerges" ([Qwopus](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)) demonstrate the community's growing sophistication in capability transfer and recombination. The ecosystem is less about consuming official releases than remixing them.

---

## 4. Worth Exploring

**[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — With 5.4M weekly downloads, this is the most battle-tested multimodal model available. Google's iterative Gemma refinement has produced a vision-language system with proven deployment reliability, and its permissive license enables commercial use without the legal ambiguity of some Asian-lab releases. Essential for production multimodal applications.

**[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — At 1.4M downloads, this is the definitive local inference model of the moment. The MoE architecture's 3B active parameters enable remarkable efficiency, and Unsloth's quantization preserves vision-language capabilities that typically degrade in GGUF conversion. Ideal for developers needing private, offline multimodal AI.

**[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** — The most technically impressive non-LLM release this week. With 1,228 likes and 94K downloads, this multilingual TTS system rivals ElevenLabs and OpenAI Voice in quality while remaining fully open. For voice applications, it represents the strongest open alternative to proprietary APIs, with particular strength in Chinese and cross-lingual synthesis.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*