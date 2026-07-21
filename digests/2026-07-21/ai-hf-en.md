# Hugging Face Trending Models Digest 2026-07-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-21 02:03 UTC

---

# Hugging Face Trending Models Digest — 2026-07-21

---

## 1. Today's Highlights

Google's **Gemma-4-31B-it** dominates downloads (12M+) while Z.ai's **GLM-5.2** leads likes (4.2K), signaling intense competition at the frontier of open-weight multimodal models. The Qwen3.6 MoE family (35B-A3B) has spawned a vibrant ecosystem of uncensored community fine-tunes (HauhauCS, LuffyTheFox, DavidAU), each surpassing 1.5M downloads. Extreme quantization is mainstream: **prism-ml** offers Bonsai-27B in 1-bit, 2-bit ternary, GGUF, and MLX variants, collectively nearing 2M downloads. Baidu's **Unlimited-OCR** (2.4K likes, 2.1M downloads) and Tencent's **Hy3** (847 likes) highlight Chinese labs' strength in specialized vision-language and base models. Robotics enters the trending list with **MiniCPM-RobotManip/Track** (vision-language-action), while **Wan-Dancer-14B** pushes open image-to-video generation.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, Chat, Instruction-Tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,226 | 531,947 | MoE architecture (GLM-MoE-DSA) achieving top-tier reasoning; leading open-weight Chinese LLM. |
| [**gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 3,297 | 11,987,240 | Google's latest 31B multimodal instruction-tuned model; massive adoption signals strong ecosystem integration. |
| [**Hy3**](https://huggingface.co/tencent/Hy3) | tencent | 847 | 13,698 | Tencent's Hunyuan v3 base model; strong Chinese/English bilingual performance, foundation for quantized variants. |
| [**Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,175 | 713,992 | Code-specialized multimodal model with compressed-tensor optimization; targets agentic coding workflows. |
| [**Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 542 | 1,262,894 | 1-bit quantized Qwen3.5 derivative; proves extreme compression viability for local deployment. |
| [**Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 855 | 338,945 | 2-bit ternary quantization; pushes compression frontier further with llama.cpp/MLX support. |

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,444 | 2,122,848 | General-purpose OCR model handling arbitrary layouts/languages; production-grade document understanding. |
| [**Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,369 | 2,117,323 | Qwen3.5-based vision-language model fine-tuned on Claude-distilled reasoning data; GGUF for edge inference. |
| [**Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,937 | 2,007,025 | Uncensored MoE vision-language model; aggressive fine-tuning for unrestricted multimodal reasoning. |
| [**Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,270 | 13,462 | Novel image-text-to-text architecture (inkling_mm_model); early-stage but architecturally distinct. |
| [**Wan-Dancer-14B**](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 145 | 2,408 | Image-to-video diffusion model (i2v); open video generation with character-consistent motion. |
| [**MOSS-Transcribe-Diarize**](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 291 | 87,533 | Audio-text-to-text with speaker diarization; targets meeting/lecture transcription pipelines. |
| [**LTX-Best-Face-ID**](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 214 | 0 | LoRA for identity-preserving text-to-video (LTX-Video); enables consistent character video gen. |

### 🔧 Specialized Models (Code, Math, Embeddings, Robotics)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**Nemotron-3-Embed-1B-BF16**](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16) | nvidia | 87 | 61,708 | Compact 1B embedding model (Ministral-3 architecture); optimized for retrieval/RAG with BF16 precision. |
| [**MiniCPM-RobotManip**](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 135 | 0 | Vision-language-action model for robotic manipulation; MiniCPM-VLA architecture. |
| [**MiniCPM-RobotTrack**](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 100 | 0 | Vision-language-action for object tracking/navigation; complementary to RobotManip. |
| [**needle**](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 292 | 950 | JAX-based function-calling/tool-use specialist; targets agentic workflow orchestration. |

### 📦 Fine-tunes & Quantizations (Community Fine-tunes, GGUF, MLX)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V3-GGUF

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*