# Hugging Face Trending Models Digest 2026-04-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-17 00:15 UTC

---

# Hugging Face Trending Models Digest — April 17, 2026

---

## 1. Today's Highlights

This week's Hugging Face leaderboard is dominated by **Google's Gemma 4 family**, with multiple official variants and community quantizations racking up millions of downloads combined. **Jackrong's Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled** stands out as the most-liked model overall, signaling massive appetite for reasoning-distilled open weights. Chinese labs continue to punch above their weight: **MiniMaxAI**, **zai-org**, **Tencent**, and **Baidu** all have models in the top tier across language, multimodal, and generative domains. Meanwhile, **uncensored/abliterated fine-tunes** of Gemma 4 are proliferating rapidly, and **Unsloth** has become the de facto quantization infrastructure layer with four GGUF entries in the top 30. Notably, **video and 3D generation** is breaking into the trending list with Netflix's inpainting model and Tencent's HY-World 2.0.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7) | MiniMaxAI | 849 | 142,955 | A compact but capable Chinese-origin conversational LLM gaining traction for efficient local deployment. |
| [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 1,285 | 94,376 | The latest GLM MoE architecture with sparse attention, drawing strong interest from researchers tracking efficient scaling. |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 1,980 | 3,195,626 | Google's flagship instruction-tuned Gemma 4 model, now the most downloaded release of the week by a wide margin. |
| [google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) | google | 705 | 1,801,321 | An experimental "any-to-any" Gemma 4 variant blurring the lines between language and multimodal reasoning. |
| [google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it) | google | 715 | 2,344,759 | A mid-size activated-parameter Gemma 4 offering strong performance-to-download efficiency. |
| [LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo) | LilaRest | 232 | 57,507 | An NVIDIA FP4-optimized port of Gemma 4 for next-gen RTX local inference. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5) | tencent | 769 | 1,060 | Hunyuan's embodied vision-language model, trending for robotics and agentic AI research. |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 430 | 0 | A freshly released MoE VLM from the Qwen team—zero downloads suggest it's minutes old but already heavily liked. |
| [baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image) | baidu | 378 | 1,351 | Baidu's open-weight text-to-image diffusion model, notable for its Apache 2.0 license. |
| [baidu/ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo) | baidu | 262 | 1,369 | A faster distilled variant of ERNIE-Image targeting rapid generation workflows. |
| [openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2) | openbmb | 939 | 15,249 | A multilingual text-to-speech model from Tsinghua's OpenBMB lab, praised for natural prosody. |
| [tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0) | tencent | 159 | 0 | A world-model for image-to-3D generation, representing Tencent's push into spatial AI. |
| [netflix/void-model](https://huggingface.co/netflix/void-model) | netflix | 860 | 0 | Netflix's surprise entry into video inpainting and object removal, built on CogVideoX. |
| [NucleusAI/Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image) | NucleusAI | 134 | 464 | An experimental sparse-MoE diffusion architecture attracting architecture-curious researchers. |
| [k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice) | k2-fsa | 600 | 701,830 | A zero-shot multilingual voice-cloning TTS system with massive real-world adoption. |

### 🔧 Specialized Models (code, math, medical, embeddings)

*No models in this week's top 30 fall squarely into pure code, math, medical, or embedding categories. The closest specialized entries are reasoning-distilled VLMs and TTS systems, which are categorized above.*

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2) | Jiunsong | 332 | 42,468 | A widely downloaded llama.cpp-ready uncensored Gemma 4 fine-tune. |
| [dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 1,155 | 143,000 | An MLX-optimized, abliterated Gemma 4 with unusually high like velocity for a community fork. |
| [OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED) | OBLITERATUS | 205 | 1,586 | A provocative "obliterated" safety-removed variant of the any-to-any Gemma 4. |
| [unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 199 | 0 | Unsloth's same-day GGUF release of Qwen's newest VLM, showcasing quantization speed. |
| [unsloth/ERNIE-Image-Turbo-GGUF](https://huggingface.co/unsloth/ERNIE-Image-Turbo-GGUF) | unsloth | 139 | 7,912 | The first GGUF text-to-image model from Unsloth, pushing quantization into diffusion territory. |
| [Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2) | Jiunsong | 155 | 8,908 | An Apple Silicon-optimized 4-bit MLX port of the uncensored SuperGemma4. |
| [unsloth/MiniMax-M2.7-GGUF](https://huggingface.co/unsloth/MiniMax-M2.7-GGUF) | unsloth | 125 | 56,638 | Rapid GGUF conversion of MiniMax-M2.7, enabling low-resource deployment. |
| [unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) | unsloth | 491 | 2,104,448 | The most-downloaded quantized model of the week, with over 2M pulls. |
| [HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 374 | 620,327 | A vision-capable GGUF uncensored Gemma 4 fine-tune with substantial downstream usage. |
| [Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF) | Jackrong | 323 | 154,097 | A reasoning-focused Qwen3.5 GGUF distilled for local inference. |

---

## 3. Ecosystem Signal

**Gemma 4 has become the gravitational center of the open-weight ecosystem.** With three official Google variants generating over 7 million combined downloads and at least eight community fine-tunes/quantizations in the top 30, it is clear that Gemma 4 has inherited the release-cycle energy previously seen around Llama and Qwen. The **Qwen family** remains highly competitive, particularly through **Jackrong's distillation work** and **Qwen's own rapid VLM releases**, but Gemma 4's quantization-friendly architecture and permissive licensing have made it the default substrate for community experimentation.

A striking trend is the **mainstreaming of "abliterated" and uncensored fine-tunes**—no longer fringe, these models now represent some of the highest-velocity downloads and likes. This suggests a growing divergence between corporate safety alignment and practitioner preferences for unfiltered local deployment.

**Unsloth has effectively won the quantization infrastructure race** for this cycle, with four GGUF releases in the top 30 and same-day turnaround on major model drops. Their 2.1M-download Gemma 4 GGUF demonstrates that quantization is no longer a niche optimization but the primary distribution channel for many users.

Finally, Chinese labs (**MiniMax, Zhipu/GLM, Tencent, Baidu, Qwen**) now account for roughly half of the trending models, confirming that open-weight AI leadership is genuinely multipolar. Proprietary models still set the reasoning ceiling—as evidenced by the Claude-4.6-Opus distillation—but the open ecosystem is closing the gap faster than ever.

---

## 4. Worth Exploring

1. **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)**  
   This is the most-liked model of the week by a large margin, and for good reason: it represents a high-quality open-weight distillation of a top-tier proprietary reasoning model. If you're studying how reasoning capabilities transfer across model families, or need a strong local reasoning assistant, this is the one to benchmark first.

2. **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)**  
   Google's "any-to-any" Gemma 4 is architecturally ambitious and already seeing 1.8M downloads. It's worth exploring because it previews where open multimodal models are heading—unified encoders, flexible input modalities, and scalable deployment. Researchers tracking the convergence of LLM and VLM architectures should prioritize this.

3. **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**  
   With 700K+ downloads, OmniVoice is not just trending—it's being actively used. Its zero-shot multilingual voice cloning capabilities are among the most practical open TTS systems available, making it essential for anyone building voice applications or studying speech synthesis generalization.

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*