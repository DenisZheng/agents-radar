# Hugging Face Trending Models Digest 2026-07-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-20 03:28 UTC

---

---

## Hugging Face Trending Models Digest — 2026-07-20

### 1. Today's Highlights

The Hugging Face trending leaderboard is dominated by **quantized and fine-tuned vision-language models**, with Qwen3.5/3.6 derivatives occupying 8 of the top 30 slots. Google's **Gemma-4-31B-it** (3.3K likes) and Z.ai's **GLM-5.2** (4.2K likes) lead the base-model race, signaling strong momentum for open-weight MoE architectures. **Extreme quantization** (1-bit, 2-bit ternary, GGUF/MLX) has become mainstream for deployment, with prism-ml's Bonsai family alone accounting for 4 entries. Specialized OCR (Baidu, ATH-MaaS) and uncensored multimodal models (HauhauCS, empero-ai) reflect growing demand for domain-specific and alignment-flexible tools.

---

### 2. Trending Models by Category

#### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,172 | 536,177 | Flagship open-weight MoE LLM (GLM-MoE-DSA) setting new benchmarks for reasoning and multilingual performance. |
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 3,276 | 12,337,374 | Google's latest instruction-tuned multimodal model; massive download volume signals broad adoption. |
| [**tencent/Hy3**](https://huggingface.co/tencent/Hy3) | tencent | 836 | 13,698 | Hunyuan v3 base model; strong Chinese/English bilingual capabilities, foundation for multiple quantized variants. |
| [**InternScience/Agents-A1**](https://huggingface.co/InternScience/Agents-A1) | InternScience | 584 | 35,833 | Qwen3.5-MoE based agent model optimized for tool use and multi-step reasoning. |
| [**Cactus-Compute/needle**](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 279 | 955 | JAX-based function-calling specialist; lightweight tool-use model for agentic workflows. |
| [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking) | GnLOLot | 149 | 5,494 | 1B-parameter thinking model distilled from Claude Opus; demonstrates strong reasoning in tiny footprint. |

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,902 | 2,084,530 | Uncensored vision MoE (35B total, 3B active); aggressive fine-tune for unrestricted multimodal chat. |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,350 | 2,118,995 | Qwen3.5-based vision model with Claude-distilled reasoning; GGUF quantized for local deployment. |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,198 | 2,122,848 | Production-grade OCR model supporting arbitrary layouts, languages, and document types. |
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,158 | 13,462 | Novel image-text-to-text model with conversational capabilities; unique architecture (inkling_mm_model). |
| [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 463 | 10,647 | Qwen3.6-based multimodal model enhanced for step-by-step visual reasoning. |
| [**OpenMOSS-Team/MOSS-Transcribe-Diarize**](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 280 | 87,533 | Audio-text-to-text model for transcription with speaker diarization; real-time capable. |
| [**Wan-AI/Wan-Dancer-14B**](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 129 | 2,408 | Image-to-video diffusion model (14B) for character animation and dance synthesis. |
| [**OpenMOSS-Team/MOSS-VL-Realtime**](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime) | OpenMOSS-Team | 82 | 544 | Video-text-to-text model optimized for real-time streaming understanding. |

#### 🔧 Specialized Models (code, math, medical, embeddings, utilities)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 948 | 0 | Fixed Jinja chat templates for Qwen3.5; essential utility for correct inference formatting. |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 196 | 14,587 | Qwen3.5-based OCR model; lightweight alternative to Baidu's offering. |
| [**conradlocke/krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 427 | 0 | LoRA for Krea-2 enabling identity-preserving image editing via ComfyUI. |

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, MLX, AWQ)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 502 | 1,262,894 | 1-bit quantized Qwen3.5-27B (GGUF); extreme compression with surprising quality retention. |
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 795 | 338,945 | 2-bit ternary quantization of Bonsai-27B; pushes quantization frontier for llama.cpp. |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 108 | 16,719 | Heavily merged/fine-tuned uncensored multimodal model with MTP (multi-token prediction); GGUF. |
| [**unsloth/inkling-GGUF**](https://huggingface.co/unsloth/inkling-GGUF) | unsloth | 105 | 6,771 | Official GGUF quantization of Inkling multimodal model by Unsloth; supports audio/image/text. |
| [**prism-ml/Bonsai-27B-mlx-1bit**](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit) | prism-ml | 140 | 21,690 | 1-bit MLX format for Apple Silicon; same Bonsai base, optimized for Metal. |
| [**prism-ml/Ternary-Bonsai-27B-mlx-2bit**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit) | prism-ml | 121 | 17,869 | 2-bit ternary MLX variant; Apple Silicon deployment target. |
| [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF) | GnLOLot | 121 | 28,012 | GGUF quantized version of the 1B thinking model; runs on edge devices. |
| [**AngelSlim/Hy3-GGUF

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*