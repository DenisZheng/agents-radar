# Hugging Face Trending Models Digest 2026-04-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-30 00:20 UTC

---

# Hugging Face Trending Models Digest — April 30, 2026

---

## 1. Today's Highlights

**DeepSeek-V4-Pro** dominates the trending charts with 3,237 weekly likes, signaling DeepSeek's continued momentum in the open-weight LLM space with its latest generation. Google's **Gemma-4-31B-it** leads in raw adoption with over 6.5M downloads, demonstrating the sustained commercial viability of lightweight multimodal models. The Qwen 3.6 family shows remarkable ecosystem depth, with four variants in the top 30 including official releases, quantized GGUFs, and uncensored community fine-tunes. Notably, **Tencent's HY-World-2.0** introduces an emerging "world model" category for 3D generation, while **inclusionAI's LLaDA2.0-Uni** pushes toward unified any-to-any architectures. The quantization community remains highly active, with unsloth alone contributing three heavily-downloaded GGUF variants.

---

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [**deepseek-ai/DeepSeek-V4-Pro**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 3,237 | 174,402 | Flagship reasoning-optimized LLM from DeepSeek's V4 series, gaining strong community traction for its balanced performance and open weights. |
| [**deepseek-ai/DeepSeek-V4-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 856 | 96,948 | MIT-licensed efficient variant of V4, appealing to commercial deployments seeking permissive licensing without capability sacrifice. |
| [**zai-org/GLM-5.1**](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 1,559 | 256,484 | Zhipu's latest GLM iteration with MoE-DSA architecture, showing strong Chinese-community and international interest in non-Western foundation models. |
| [**tencent/Hy3-preview**](https://huggingface.co/tencent/Hy3-preview) | tencent | 184 | 7,671 | Tencent's Hy3 language model preview, representing emerging competition in the Chinese LLM landscape with conversational optimizations. |
| [**poolside/Laguna-XS.2**](https://huggingface.co/poolside/Laguna-XS.2) | poolside | 130 | 15 | Compact code-specialized model from the AI coding startup, notable for vLLM-native deployment targeting developer tooling. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 2,438 | 6,558,301 | Google's Gemma 4 instruction-tuned multimodal workhorse, achieving extraordinary download velocity as the default choice for vision-language applications. |
| [**Qwen/Qwen3.6-35B-A3B**](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,514 | 1,510,129 | Mixture-of-Experts multimodal model with aggressive A3B activation sparsity, delivering 35B-parameter quality at inference-efficient cost. |
| [**Qwen/Qwen3.6-27B**](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,002 | 508,728 | Dense vision-language variant balancing capability and deployability, popular for production multimodal pipelines. |
| [**moonshotai/Kimi-K2.6**](https://huggingface.co/moonshotai/Kimi-K2.6) | moonshotai | 1,150 | 489,001 | Kimi's latest with compressed-tensor optimizations and feature-extraction capabilities, extending Moonshot's long-context leadership into multimodal domains. |
| [**XiaomiMiMo/MiMo-V2.5**](https://huggingface.co/XiaomiMiMo/MiMo-V2.5) | XiaomiMiMo | 157 | 2,661 | Xiaomi's multimodal foundation model spanning vision, language, and audio modalities, signaling consumer electronics integration ambitions. |
| [**tencent/HY-World-2.0**](https://huggingface.co/tencent/HY-World-2.0) | tencent | 625 | 3,134 | Pioneering image-to-3D world model for spatial generation, carving out a novel category beyond traditional text-to-image pipelines. |
| [**nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16**](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16) | nvidia | 142 | 9,824 | NVIDIA's omni-modal reasoning model with BF16 precision, targeting enterprise deployment on NVIDIA infrastructure with any-to-any flexibility. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [**openai/privacy-filter**](https://huggingface.co/openai/privacy-filter) | openai | 1,090 | 57,743 | OpenAI's first Hub-hosted token-classification model for PII detection, marking a strategic shift toward deployable safety tooling. |
| [**inclusionAI/LLaDA2.0-Uni**](https://huggingface.co/inclusionAI/LLaDA2.0-Uni) | inclusionAI | 235 | 506 | Ambitious any-to-any unified architecture combining transformers and diffusers, exploring next-generation modality-agnostic AI. |
| [**facebook/sapiens2**](https://huggingface.co/facebook/sapiens2) | facebook | 95 | 0 | Human-centric vision transformer for human understanding tasks, continuing Meta's Sapiens research lineage with zero downloads suggesting pre-release positioning. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [**unsloth/Qwen3.6-35B-A3B-GGUF**](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 863 | 1,705,737 | Most-downloaded model this period: unsloth's GGUF quantization of Qwen's MoE multimodal model, enabling consumer GPU deployment of frontier capabilities. |
| [**unsloth/Qwen3.6-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF) | unsloth | 496 | 702,161 | High-efficiency quantization of the dense Qwen 3.6 variant, popular for local LLM applications requiring vision support. |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 501 | 578,813 | Aggressive uncensored MoE fine-tune with substantial adoption, reflecting sustained demand for unaligned model variants despite safety debates. |
| [**HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 234 | 215,232 | Vision-capable uncensored variant, extending the HauhauCS fine-tuning approach to multimodal contexts. |
| [**OBLITERATUS/gemma-4-E4B-it-OBLITERATED**](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED) | OBLITERATUS | 541 | 134,773 | "Abliterated" Gemma 4 with safety training removed, gaining significant traction in the model modification community. |
| [**Jackrong/Qwopus3.6-27B-v1-preview-GGUF**](https://huggingface.co/Jackrong/Qwopus3.6-27B-v1-preview-GGUF) | Jackrong | 90 | 48,204 | Community GGUF merge of Qwen and Octopus concepts, illustrating experimental quantization culture around hybrid architectures. |
| [**unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF**](https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF) | unsloth | 73 | 0 | Pre-release quantization of NVIDIA's omni-modal model, positioning for local deployment of enterprise-grade reasoning. |

---

## 3. Ecosystem Signal

**Model family concentration** is unmistakable: Qwen 3.6 variants occupy six slots, DeepSeek V4 claims four, and unsloth quantizations appear three times. This suggests ecosystem maturation around proven architectures rather than fragmented experimentation. The Qwen family's dominance—spanning official releases, FP8 variants, MoE and dense forms, plus extensive community derivatives—establishes Alibaba's model suite as the most vibrant open-weight ecosystem on the platform.

**Open-weight momentum continues accelerating against proprietary alternatives.** OpenAI's single presence (a narrow safety tool) contrasts sharply with Google's Gemma, Meta's Sapiens2, and numerous Chinese-lab releases. The proprietary-to-open ratio in trending models has inverted dramatically from 2024 baselines, with commercial labs now participating primarily through lightweight or safety-focused releases rather than frontier models.

**Quantization has become the primary distribution mechanism.** GGUF variants from unsloth alone account for 2.4M+ downloads this period, exceeding most official model releases. The uncensored fine-tune phenomenon—HauhauCS and OBLITERATUS collectively approaching 1M downloads—represents a persistent parallel distribution channel with significant adoption but minimal institutional acknowledgment. This bifurcation between "official" and "modified" model economies merits closer governance attention.

**Emerging architectural signals** include: (a) any-to-any/unified multimodal architectures (LLaDA2.0-Uni, Nemotron Omni), (b) world models for 3D generation (HY-World-2.0), and (c) aggressive MoE sparsity as default (Qwen 3.6-35B-A3B, Nemotron-3-Nano-Omni). These suggest 2026's frontier is moving beyond text-image duality toward unified spatial and modality-agnostic reasoning.

---

## 4. Worth Exploring

### [**deepseek-ai/DeepSeek-V4-Pro**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
**Why try it:** The clear community favorite by likes, representing DeepSeek's most capable open-weight release to date. With 174K downloads and strong engagement, it offers a well-tested alternative to closed API models for reasoning-intensive applications. The V4 architecture improvements warrant evaluation against GPT-4.5/Claude 4 equivalents for cost-performance tradeoffs.

### [**unsloth/Qwen3.6-35B-A3B-GGUF**](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)
**Why study it:** The highest-downloaded model this period (1.7M) demonstrates that quantized MoE multimodal models can achieve mass consumer deployment. Its success validates technical approaches to efficient inference and reveals genuine demand patterns—more users seek local, multimodal, mixture-of-experts capabilities than current infrastructure assumptions suggest. Essential for understanding quantization economics.

### [**tencent/HY-World-2.0**](https://huggingface.co/tencent/HY-World-2.0)
**Why watch it:** Among the few genuinely novel categories in this list, HY-World-2.0's image-to-3D world model architecture points toward spatial AI as the next generative frontier. With modest but growing traction (625 likes, 3K downloads), it offers early exposure to world models that may underpin robotics, gaming, and spatial computing applications before they achieve mainstream attention.

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*