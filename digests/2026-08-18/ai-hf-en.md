# Hugging Face Trending Models Digest 2026-08-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-18 00:51 UTC

---

# Hugging Face Trending Models Digest — 2026-08-18

---

## 1. Today's Highlights

The Qwen 3.8 family dominates this week’s leaderboard, with the 27B flagship (**Qwen/Qwen3.8-27B**) and MoE variant (**Qwen/Qwen3.8-2.4T-A95B**) collectively amassing >11k likes and >400k downloads. MiniMax’s **MiniMax-H3** has become the de-facto open video-generation backbone, spawning 5+ high-engagement fine-tunes/LoRAs (Comfy-Org, fal, larryvrh, TenStrip, lightx2v) and >16M cumulative downloads. DeepSeek-V4-Flash (**deepseek-ai/DeepSeek-V4-Flash-0731**) surges with 3.5k likes and ~2M downloads, signaling strong demand for efficient proprietary-grade LLMs. Quantization ecosystems (Unsloth GGUF/FP8/NVFP4, community uncensored variants) now routinely outpace base-model downloads. Multimodal video/audio generation (LTX-2.5, MiniMax-Music3, Anima-2.9B) is the fastest-growing modality cluster.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 10,715 | 415,039 | Flagship 27B multimodal LLM; top weekly likes, strong conversational & image-text-to-text performance. |
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,802 | 2,163,953 | Highest-liked model overall; 3B compressed-tensor VL model with massive adoption for edge deployment. |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,498 | 1,978,298 | Efficient proprietary-grade LLM; 2M+ downloads show production appetite for DeepSeek V4 series. |
| [**Qwen/Qwen3.8-2.4T-A95B**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,041 | 9,465 | MoE 95B (2.4T tokens) for scaling-law research; niche but influential for architecture experiments. |
| [**meta-models/Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,661 | 334,099 | 30B image-text-to-text model; strong community fine-tune base (see Unsloth GGUF below). |
| [**deepseek-ai/DeepSeek-V4-Pro-0813**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 573 | 25,006 | Pro-tier DeepSeek V4; lower volume but steady interest for high-end reasoning tasks. |
| [**nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 307 | 231,271 | NVFP4-quantized Nemotron; showcases Nvidia’s inference-optimized model stack. |
| [**nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 169 | 69,833 | BF16 reference for Nemotron Lightning; benchmarking baseline. |
| [**LiquidAI/LFM2.5-VL-3B**](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 162 | 6,816 | Liquid Foundation Model 2.5 VL; novel architecture (non-transformer) gaining research attention. |
| [**dots-studio/dots3-note-prev**](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 207 | 633 | Early-access Dots3 note-taking assistant; niche but active community. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,088 | 2,403,238 | Flagship image-text-to-video model; ecosystem anchor for 5+ fine-tunes/LoRAs this week. |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,109 | 465,529 | Versatile video diffusion (I2V, T2V, V2V); single-file diffusion format eases ComfyUI integration. |
| [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 905 | 10,375 | Text-to-music generation; complementary to H3 video for full multimedia pipelines. |
| [**lightx2v/Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 585 | 264,351 | Speed-optimized H3 variant; popular for real-time video generation workflows. |
| [**Gazingstars123/Anima-2.9B**](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 233 | 23,202 | Compact text-to-image diffusion; ComfyUI-ready single file, growing artist adoption. |
| [**fal/MiniMax-H3-Realism-People-LoRA**](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 243 | 18,562 | LoRA for photorealistic humans on H3; demonstrates rapid LoRA ecosystem maturation. |
| [**larryvrh/MiniMax-H3-Turbo-Lora**](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 786 | 0 | High-engagement LoRA for Turbo variant; zero downloads suggests recent upload/private access. |
| [**TenStrip/10Eros-Max**](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 236 | 0 | H3 fine-tune for specific aesthetic; early community experimentation. |

---

### 🔧 Specialized Models (code, math, medical, embeddings, tooling)

| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [**inclusionAI/Ling-3.0-tiny**](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 306 | 6,266 | Tiny hybrid (bailing_hybrid) model; MIT license, US region — likely edge/embedding focused. |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,211 | 0 | Jinja/MLX chat-template fixes for Qwen 3.5; high likes indicate widespread template pain points. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, FP8, AWQ, LoRA)

| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,630 | 2,727,609 | **Highest downloads this week** (2.7M); GGUF quantization enables local CPU/GPU inference. |
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,403 | 14,015,769 | **Massive downloads (14M+)**; ComfyUI-optimized H3 fine-tune, diffusion-single-file format. |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,120 | 3,033,928 | Top fine-tune by likes; uncensored fusion with MTP, GGUF — community demand for unaligned models. |
| [**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 530 | 495,646 | Official FP8 quantization; 500k+ downloads show enterprise inference adoption. |
| [**unsloth/Muse-Glimmer-30B-GGUF**](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 470 | 755,125 | GGUF of Meta’s Muse-Glimmer; extends multimodal local inference options. |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 299 | 357,701 | Uncensored GGUF variant; strong demand for alignment-removed models. |
| [**unsloth/Qwen3.8-27B-NVFP4**](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 240 | 378,177 | NVFP4 quantization for Nvidia GPUs; Unsloth’s multi-format coverage strategy. |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 436 | 15,812 | FP8 uncensored; niche but growing uncensored+quantized combo. |
| [**Comfy-Org/MiniMax-Music-3**](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 167 | 256,988 | ComfyUI port of MiniMax-Music3; Apache-2.0 license encourages commercial use. |
| [**Qwen/Qwen3.8-2.4T-A95B-FP8**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*