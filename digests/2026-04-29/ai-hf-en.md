# Hugging Face Trending Models Digest 2026-04-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-29 00:20 UTC

---

# Hugging Face Trending Models Digest — April 29, 2026

---

## 1. Today's Highlights

Google's [gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) dominates the ecosystem with over 6.5 million downloads, cementing Gemma 4 as the most widely adopted open-weight multimodal series to date. DeepSeek's V4 family continues its strong presence with both Pro and Flash variants trending, while Qwen3.6's MoE architecture (35B-A3B) is generating exceptional community engagement through official releases and aggressive community quantization efforts. Notably, the "uncensored" fine-tune movement remains highly active, with HauhauCS's aggressive modifications of Qwen3.6 models accumulating significant downloads despite lower like counts. The emergence of specialized architectures—Tencent's Hy3, Xiaomi's MiMo-V2.5 with agentic long-context capabilities, and inclusionAI's any-to-any LLaDA2.0—signals diversification beyond standard transformer paradigms.

---

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 3,135 | 174,402 | Flagship reasoning-optimized LLM with strong developer adoption for production deployments. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 820 | 96,948 | MIT-licensed efficient variant balancing performance with permissive commercial use. |
| [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 1,549 | 256,484 | Zhipu's latest MoE architecture with DSA optimization, gaining traction as a strong GPT-4 class alternative. |
| [tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview) | tencent | 176 | 7,671 | Novel hybrid architecture preview from Tencent, attracting researchers exploring non-standard transformer designs. |
| [XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro) | XiaomiMiMo | 235 | 396 | Agent-focused long-context specialist, early but promising for autonomous workflow applications. |
| [poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2) | poolside | 66 | 15 | Compact vLLM-optimized model from Poolside, targeting efficient code generation inference. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,416 | 6,558,301 | Dominant open multimodal model—vision-language convergence at massive scale with unprecedented adoption. |
| [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 965 | 508,728 | Dense multimodal workhorse with strong vision-language performance for general applications. |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,487 | 1,510,129 | **Most-downloaded official release**: MoE efficiency with 35B active params from 3B experts, redefining compute-performance tradeoffs. |
| [moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) | moonshotai | 1,130 | 489,001 | Long-context specialist with compressed-tensor optimizations, competing in document analysis and video understanding. |
| [baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image) | baidu | 580 | 8,466 | Apache-2.0 licensed 8B text-to-image model, Baidu's strongest open image generation offering. |
| [tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0) | tencent | 622 | 3,134 | World model for image-to-3D generation, tapping into spatial computing and gaming pipelines. |
| [Lightricks/LTX-2.3-22b-IC-LoRA-HDR](https://huggingface.co/Lightricks/LTX-2.3-22b-IC-LoRA-HDR) | Lightricks | 67 | 0 | Advanced video generation with inverse compositional LoRA and HDR output, pushing cinematic AI boundaries. |
| [XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5) | XiaomiMiMo | 127 | 2,661 | Native audio-vision-language model, rare triple-modality architecture for ambient AI applications. |
| [inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni) | inclusionAI | 223 | 506 | Any-to-any diffusion transformer with MoE routing, experimental but architecturally significant for unified multimodal AI. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 1,023 | 57,743 | OpenAI's rare open-weight release: production PII detection and redaction for enterprise compliance pipelines. |
| [facebook/sapiens2](https://huggingface.co/facebook/sapiens2) | facebook | 83 | 0 | Human-centric vision transformer for pose, depth, and part segmentation—research preview with strong academic interest. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF) | unsloth | 479 | 702,161 | Highly optimized GGUF with massive consumer hardware adoption for local multimodal inference. |
| [unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 850 | 1,705,737 | **Highest downloads overall**: Unsloth's MoE quantization enabling 35B-quality inference on consumer GPUs. |
| [HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 220 | 215,232 | Aggressive safety filter removal with 215K downloads, indicating strong demand for unrestricted local models. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 491 | 578,813 | MoE uncensored variant with exceptional engagement—highest likes among community fine-tunes. |
| [hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF) | hesamation | 204 | 141,233 | Novel distillation from proprietary Claude-4.6-Opus reasoning traces into quantizable open architecture. |
| [OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED) | OBLITERATUS | 534 | 134,773 | Gemma-4 safety removal with GGUF export, demonstrating community demand for unfiltered Google models. |
| [Jackrong/Qwopus3.6-27B-v1-preview-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v1-preview-GGUF) | Jackrong | 86 | 48,204 | Experimental Qwen-Octopus hybrid for tool-use optimization in quantized form. |
| [z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash) | z-lab | 146 | 7,608 | Research-oriented "DFlash" feature-extraction variant, exploring alternative activation patterns. |
| [z-lab/Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash) | z-lab | 174 | 30,002 | MoE extension of DFlash methodology with growing experimental adoption. |

---

## 3. Ecosystem Signal

**Model Family Momentum:** Qwen3.6 has unequivocally become the most vibrant ecosystem on Hugging Face, with 11 entries across official releases, quantizations, and fine-tunes. The 35B-A3B MoE architecture in particular demonstrates that sparse models have crossed into mainstream adoption—[unsloth's GGUF version](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) alone exceeds 1.7 million downloads. DeepSeek V4 maintains strong institutional presence with three variants, while Google's Gemma 4 leverages its inference efficiency for massive deployment scale. Notably, Chinese-origin models (Qwen, DeepSeek, GLM, MiMo, Hy3) represent 60% of trending entries, reflecting concentrated open-weight innovation from that region.

**Open-Weight vs. Proprietary Dynamics:** The trend is increasingly hybrid. OpenAI's [privacy-filter](https://huggingface.co/openai/privacy-filter) represents a strategic, narrow open-weight release for regulatory compliance rather than capability demonstration. Conversely, the [hesamation distillation](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF) explicitly extracts proprietary value into open architectures—a one-way knowledge flow that benefits open ecosystems.

**Quantization & Fine-Tuning Activity:** Unsloth and HauhauCS exemplify divergent community strategies: Unsloth optimizes for performance and accessibility, while HauhauCS aggressively removes safety constraints. The "uncensored" tag appears on 4 models with combined 918K+ downloads, indicating substantial demand for unfiltered local inference. FP8 and GGUF formats are now standard, with base models increasingly released in compressed form ([DeepSeek-V4-Pro-Base](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-Base), [DeepSeek-V4-Flash-Base](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Base)) for immediate downstream optimization.

---

## 4. Worth Exploring

**[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — With 6.5 million downloads, this is the most battle-tested multimodal model available. Its vision-language capabilities are production-ready, and Google's permissive licensing makes it suitable for commercial applications where Qwen's or DeepSeek's licenses may introduce friction. The scale of adoption suggests robust tooling and community support.

**[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — For practitioners seeking maximum capability per inference dollar, this MoE quantization achieves remarkable efficiency. At 1.7 million downloads with strong engagement metrics, it represents the current frontier of consumer-accessible large models. The MoE architecture's 3B active parameters enable faster inference than dense 27B alternatives with superior quality.

**[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** — While nascent (506 downloads), this any-to-any diffusion transformer with MoE routing is architecturally significant. As the only "any-to-any" model in the trending list, it merits study for researchers investigating beyond-autoregressive paradigms and unified multimodal architectures. The inclusion of diffusers and transformers tags suggests genuine architectural hybridity rather than marketing positioning.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*