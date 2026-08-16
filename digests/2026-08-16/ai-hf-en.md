# Hugging Face Trending Models Digest 2026-08-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-16 00:55 UTC

---

## 📈 Hugging Face Trending Models Digest — 2026-08-16

### 1. Today's Highlights
The Qwen3.8 family dominates this week’s leaderboard with five variants (base, MoE, FP8, NVFP4, GGUF) collectively amassing over 12k likes, signaling a major push toward scalable multimodal LLMs. MiniMax-H3 has erupted into a full ecosystem: the base model exceeds 2.2M downloads, while ComfyUI, Turbo, LoRA, and GGUF ports add millions more, making it the de facto open video-generation stack. DeepSeek-V4-Flash-0731 leads pure text LLMs with 1.8M downloads, reflecting demand for efficient, high-throughput inference. Quantization diversity is unprecedented—GGUF, FP8, NVFP4, and BF16 variants appear for nearly every top model, indicating production deployment is now a primary design constraint. Finally, multimodal video (LTX-2.5, MiniMax-H3) and music (MiniMax-Music3) models are closing the gap with proprietary counterparts in both quality and adoption.

---

### 2. Trending Models by Category

#### 🧠 Language Models (LLMs, chat, instruction-tuned)
| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 9,796 | 91,917 | Flagship 27B multimodal LLM leading the Qwen3.8 series; excels at image-text reasoning and conversation. |
| [**Qwen/Qwen3.8-2.4T-A95B**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 967 | 6,381 | Massive 95B-active MoE (2.4T total params) for extreme-scale text generation; showcases Qwen’s mixture-of-experts architecture. |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,421 | 1,798,247 | High-throughput, cost-optimized V4 variant; weekly downloads near 1.8M prove production adoption for real-time chat. |
| [**deepseek-ai/DeepSeek-V4-Pro-0813**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 490 | 19,945 | Full-capability V4 Pro release; targets maximum reasoning quality with longer context. |
| [**nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 272 | 170,554 | NVFP4-quantized 30B MoE from Nemotron 3.5 line; optimized for low-latency inference on NVIDIA hardware. |
| [**nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 150 | 62,965 | BF16 reference version of the same MoE; enables quality benchmarking against quantized siblings. |
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,725 | 2,100,680 | 2.1M-download multimodal LLM with compressed-tensors; strong feature-extraction and vision-language performance. |
| [**LiquidAI/LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 627 | 135,448 | Compact 2.6B Liquid Foundation Model; novel non-transformer architecture for efficient text generation. |
| [**inclusionAI/Ling-3.0-tiny**](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 258 | 4,832 | Tiny bailing-hybrid model with MIT license; targets edge deployment with custom code support. |
| [**dots-studio/dots3-note-prev**](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 162 | 240 | Experimental dots3_note architecture; early-stage text-generation research model. |

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**meta-models/Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,577 | 246,454 | 30B image-text-to-text model from Meta’s Muse line; strong conversational vision-language capabilities. |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 939 | 378,439 | Versatile diffusion model supporting image→video, text→video, video→video, and image-text→video in a single file. |
| [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 766 | 5,079 | Dedicated text-to-music generator; expands MiniMax’s creative suite beyond video. |
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,972 | 2,212,155 | Flagship image-text-to-video model; 2.2M downloads make it the most adopted open video generator. |
| [**lightx2v/Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 514 | 211,917 | Accelerated Turbo variant of MiniMax-H3; optimized for faster i2v/t2v inference. |
| [**larryvrh/MiniMax-H3-Turbo-Lora**](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 756 | 0 | LoRA adapter for MiniMax-H3-Turbo; enables style/character conditioning for text-to-video/audio. |
| [**fal/MiniMax-H3-Realism-People-LoRA**](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 193 | 12,737 | Specialized LoRA for photorealistic human generation with MiniMax-H3. |
| [**Gazingstars123/Anima-2.9B**](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 188 | 16,829 | Compact 2.9B text-to-image diffusion model; ComfyUI-ready single file. |
| [**LiquidAI/LFM2.5-VL-3B**](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 143 | 4,598 | Vision-language variant of LFM2.5; brings Liquid’s efficient architecture to multimodal tasks. |

#### 📦 Fine-tunes, Quantizations & Community Ports
| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,231 | 867,963 | GGUF-quantized Qwen3.8-27B for CPU/GPU edge inference; 868k downloads show massive local-LLM demand. |
| [**unsloth/Muse-Glimmer-30B-GGUF**](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 435 | 682,188 | GGUF port of Muse-Glimmer-30B; enables consumer-hardware deployment of Meta’s 30B VLM. |
| [**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 427 | 123,157 | Official FP8-quantized 27B model; cuts VRAM in half with minimal quality loss for H100/H200. |
| [**Qwen/Qwen3.8-2.4T-A95B-FP8**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 194 | 10,745 | FP8 version of the 95B-active MoE; makes trillion-parameter inference feasible on 8×H100. |
| [**unsloth/Qwen3.8-27B-NVFP4**](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 166 | 90,924 | NVFP4-quantized 27B; leverages NVIDIA’s 4-bit format for Blackwell-era inference acceleration. |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,051 | 2,983,500 | Heavily fine-tuned, uncensored 27B GGUF; 3M downloads reflect appetite for alignment-modified models. |
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,344 | 12,790,850 | ComfyUI-native repack + fine-tunes of MiniMax-H3; 12.8M downloads confirm it as the standard workflow node. |
| [**meta-models/Muse-Glimmer-30B-GGUF**](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 277 | 321,049 | Official GGUF release from Meta; includes arxiv references for reproducibility. |
| [**unsloth/MiniMax-H3-GGUF**](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 164 | 173,741 | GGUF port of MiniMax-H3 for stable-diffusion.cpp; brings video gen to CPU/low-VRAM setups. |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 159 | 0 | FP8 uncensored fine-tune of Qwen3.8-27B; targets unfiltered reasoning at quantized speeds. |
| [**Kijai/MiniMax-H3_comfy**](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 352 | 0 | Alternative ComfyUI integration for MiniMax-H3; community-maintained custom nodes. |

---

### 3. Ecosystem Signal
**Qwen and MiniMax are the twin gravity wells** of the open-weight ecosystem right now. Qwen’s 3.8 series spans dense, MoE, and every quantization flavor (FP8, NVFP4, GGUF, BF16), indicating a deliberate strategy to cover every deployment tier from edge to cluster. MiniMax-H3 has catalyzed an entire tooling sub-ecosystem: ComfyUI nodes, Turbo distillations, LoRA specializations, and GGUF ports—collectively dwarfing the base model’s downloads. This pattern—**base model → community quantization → workflow integration → domain LoRAs**—is the new open-source flywheel.  

DeepSeek-V4-Flash’s 1.8M weekly downloads reveal that **efficient, production-grade text LLMs** are still the highest-volume segment, while Moonshot’s Kimi-K3 (10.7k likes, 2.1M downloads) proves **multimodal compression (compressed-tensors)** is gaining traction as an alternative to quantization

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*