# Hugging Face Trending Models Digest 2026-08-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-30 02:59 UTC

---

# Hugging Face Trending Models Digest — 2026-08-30

---

## 1. Today's Highlights

The Qwen 3.8 family dominates this week’s leaderboard, with the flagship **Qwen3.8-27B** (13.3k likes, 4M+ downloads) and the new **Qwen3.8-Flash-Next** (4.3k likes) anchoring a massive ecosystem of community quantizations, abliterations, and MLX/GGUF ports. **Moonshot’s Kimi-K3** (11k likes) and **DeepSeek-V4-Flash** (3.8k likes) confirm Chinese labs are setting the pace for open-weight frontier models. Video generation is the breakout modality: **MiniMax-H3** (4.6k likes, 5M downloads) and **Lightricks LTX-2.5** (2.1k likes) lead a wave of diffusion-based text-to-video and image-to-video releases, now accompanied by ControlNet unions and 4-step distillation LoRAs. Uncensored/abliterated variants of Qwen3.8-27B proliferate across GGUF, FP8, and MLX formats, signaling strong community demand for alignment-flexible deployments.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,263 | 4,028,839 | Flagship 27B multimodal model; top open-weight release this week, powering dozens of community derivatives. |
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,083 | 2,701,014 | Large-scale MoE with compressed-tensors support; strong reasoning and long-context, rapidly adopted for research and production. |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,810 | 4,330,482 | High-throughput Flash variant; leading choice for low-latency chat and agent workloads. |
| [**Qwen/Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,294 | 52,341 | Next-gen Flash architecture; image-text-to-text, optimized for speed and multimodal reasoning. |
| [**zai-org/GLM-5.3-Flash**](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,626 | 189,793 | GLM-5 Flash distillation; strong Chinese/English bilingual performance with efficient inference. |
| [**zai-org/GLM-5.3**](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,277 | 8,804 | Full GLM-5.3 MoE-DSA; competitive on benchmarks, conversational focus. |
| [**ornith-ai/Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 497 | 106,562 | Qwen3.5-MoE derivative; 35B total / 3B active, strong instruction following. |
| [**tencent/Hy4-preview**](https://huggingface.co/tencent/Hy4-preview) | tencent | 285 | 1,394 | Hunyuan v4 preview; early access to Tencent’s next-gen architecture. |
| [**thomsonreuters/Thomson-1.0-Small**](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 151 | 831 | Enterprise-focused small MoE; legal/financial domain adaptation. |
| [**pipecat-ai/phonellm-alpha-1**](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 136 | 2,668 | Nemotron-H based; optimized for real-time voice agents and phoneme-level tasks. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,623 | 5,018,833 | SOTA open video generation (image-text-to-video); diffusers-native, massive adoption. |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,140 | 1,044,661 | Unified diffusion for image→video, text→video, video→video; single-file weights, broad compatibility. |
| [**alibaba-pai/MiniMax-H3-Fun-Controlnet-Union**](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 162 | 4,250 | ControlNet union for MiniMax-H3; enables precise motion/structure control in video gen. |
| [**FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree**](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 153 | 0 | 4-step distilled MiniMax-H3; data-free distillation preview for ultra-fast inference. |
| [**alibaba-pai/MiniMax-H3-Acc-LoRAs**](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 142 | 13,767 | Acceleration LoRAs for MiniMax-H3; 2-4 step inference with quality retention. |
| [**BreezeBlue/Breeze-TTS-2**](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 192 | 1,017 | Next-gen text-to-speech; transformer-based, high naturalness, low footprint. |

---

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF**](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 124 | 47,817 | Qwen3.5-MoE derived coder; 35B/3B active, GGUF with imatrix quantization for code tasks. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, MLX, chat templates)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,187 | 8,363,481 | Official Unsloth GGUF quantization; multiple bit-widths, drop-in for llama.cpp/ollama. |
| [**orcarouter/Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,218 | 97,508 | MLX-native abliterated build; optimized for Apple Silicon, uncensored responses. |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,260 | 290,216 | FP8 dynamic quantization; balances speed/quality for H100/H200 deployments. |
| [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 920 | 645,554 | Multi-format abliteration (MLX, safetensors, GGUF); broad hardware support. |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 823 | 1,843,237 | llama.cpp GGUF with MTP (multi-token prediction); high throughput uncensored variant. |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 748 | 1,061,687 | Aggressive MTP + GGUF; multimodal vision support retained, uncensored. |
| [**orcarouter/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 559 | 215,892 | Standard GGUF abliteration; clean baseline for local deployment. |
| [**unsloth/Qwen3.8-Flash-Next-GGUF**](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 567 | 188,061 | GGUF quantization of the new Flash-Next model; day-zero availability. |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 439 | 1,485,837 | Popular abliterated GGUF; extensive quantization options, strong community trust. |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,518 | 0 | Jinja chat-template fixes for Qwen 3.5/3.8; resolves template bugs across inference engines. |
| [**unsloth/GLM-5.3-Flash-GGUF**](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 274 | 27,288 | GGUF port of GLM-5.3-Flash; enables local CPU/GPU inference. |
| [**Qwen/Qwen3.8-Flash-Next-FP8**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 155 | 44,281 | Official FP8 quantization from Qwen; validated for Hopper/Blackwell. |
| [**orcarouter/Qwen3.8-27B-Uncensored**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 208 | 42,987 | Base safetensors abliteration; starting point for further quantization. |

---

## 3. Ecosystem Signal

**Qwen 3.8 has become the de facto open-weight hub model.** The sheer volume of community derivatives—GGUF (Unsloth, JonathanColetti, HauhauCS, huihui-ai), FP8 (OrcaRouter, Qwen official), MLX (OrcaRouter), abliterations (OBLITERATUS, multiple authors), and chat-template fixes—mirrors the Llama-2/3 ecosystem at its peak but compressed into weeks. **Moonshot (Kimi-K3) and DeepSeek (V4-Flash)** are the only other families attracting comparable derivative activity, though largely limited to official quantizations so far

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*