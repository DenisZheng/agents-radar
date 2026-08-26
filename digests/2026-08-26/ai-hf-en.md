# Hugging Face Trending Models Digest 2026-08-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-26 00:55 UTC

---

#  🤗 Hugging Face Trending Models Digest — 2026-08-26

---

## 1. Today's Highlights

The Qwen 3.5 ecosystem dominates this week’s leaderboard, with the base **Qwen3.8-27B** model topping 12.7k likes and spawning a massive wave of community fine-tunes, quantizations (GGUF, FP8, MLX), and “abliterated/uncensored” variants. **Moonshot AI’s Kimi-K3** emerges as the strongest new multimodal entrant (11k likes), signaling intense competition in open-weight vision-language models. On the generative frontier, **MiniMax-H3** (4.5k likes) and **LTX-2.5** (1.8k likes) push open video generation forward, while **DeepSeek-V4-Flash** (3.7k likes) reinforces the trend of high-performance, efficient LLMs. Quantized and specialized inference formats (GGUF, speculative decoding via DFlash2) now account for over 40% of the top-30 list, reflecting a maturing deployment-focused community.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,710 | 2,945,415 | Flagship open-weight 27B multimodal LLM; leads weekly likes and serves as base for dozens of community derivatives. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,996 | 2,865,293 | New vision-language model with compressed-tensor optimization; strong Chinese/English multimodal reasoning. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,714 | 3,528,373 | Efficient high-throughput LLM optimized for low-latency chat; 3.5M+ downloads show production adoption. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 419 | 70,158 | MoE model (35B total, 3B active) built on Qwen3.5; strong instruction-following with sparse activation. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 758 | 74,707 | Larger sibling of Flash; targets higher-quality reasoning at increased compute. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 238 | 3,474 | Compact Qwen3-based model with integrated ASR capabilities for voice assistants. |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 216 | 98,323 | Dense 9B variant of Ornith series; balanced quality/size for on-device deployment. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,457 | 4,639,786 | State-of-the-art open image-text-to-video model; 4.6M downloads indicate broad creator adoption. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,800 | 833,845 | Versatile diffusion model supporting image→video, text→video, video→video in single file. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,245 | 18,705 | Text-to-music generation with diffusers integration; niche but high-quality audio synthesis. |
| [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 156 | 3,640 | Early-access TTS model (ArkTTS architecture); low likes but notable for open speech synthesis. |
| [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 152 | 2,682 | “Any-to-any” native multimodal model (Mixture of Transformers); early-stage unified modality handling. |

### 🔧 Specialized Models (code, math, medical, embeddings, speculative decoding)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 227 | 64,984 | Speculative decoding draft model (DFlash2) for accelerating Qwen3.8-27B inference. |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 179 | 105,786 | Community replicate of DFlash2 draft model; higher downloads suggest wider testing. |
| [EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2) | EschaLabs | 126 | 2,319 | Extreme 2-bit quantization research; pushes compression limits for 27B models. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, MLX)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,915 | 7,334,695 | Official Unsloth GGUF quantizations; 7.3M downloads make it the de-facto local-inference format. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 749 | 389,747 | “Abliterated” safety-filter removal; popular for unrestricted research/creative use. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,095 | 68,855 | MLX-optimized uncensored variant for Apple Silicon; combines abliteration + Metal acceleration. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,148 | 249,744 | FP8 quantized uncensored model; targets H100/Ampere inference with reduced memory. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 623 | 832,185 | Aggressive MTP (multi-token prediction) fine-tune + GGUF; high throughput for chat. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 721 | 1,525,645 | Popular community GGUF uncensored build; 1.5M downloads show strong local-LLM demand. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 452 | 154,225 | OrcaRouter’s GGUF uncensored release; optimized for their routing framework. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 357 | 1,230,831 | Abliterated + GGUF; consistent high downloads indicate trusted community maintainer. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 240 | 221,918 | Experimental GAIN training + Cold Fusion merging + MTP; showcases advanced fine-tune stacking. |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 183 | 15,341 | Base FP16/bf16 uncensored fine-tune; reference for quantization derivatives. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 297 | 1,156,903 | Official GGUF of Ornith MoE; MIT license enables commercial use. |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 20

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*