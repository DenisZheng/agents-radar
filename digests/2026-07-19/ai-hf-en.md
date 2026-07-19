# Hugging Face Trending Models Digest 2026-07-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-19 02:04 UTC

---

# Hugging Face Trending Models Digest — 2026-07-19

## Today's Highlights
Google’s **Gemma‑4‑31B‑it** dominates downloads (12.6 M+), signaling strong adoption of open‑weight multimodal flagships. Chinese labs are surging: **ZAI’s GLM‑5.2** (MoE) leads weekly likes, while **Tencent’s Hy3**, **Baidu’s Unlimited‑OCR**, and multiple **Qwen/ MiniCPM** derivatives populate the top‑30. Extreme quantization is mainstream—**prism‑ml** ships 1‑bit and 2‑bit ternary Bonsai‑27B variants in both GGUF and MLX formats. Uncensored, reasoning‑tuned multimodal models (e.g., **HauhauCS’s Qwen3.6‑35B‑A3B**) and video‑generation LoRAs (LTX, Wan) show the community pushing beyond chat into creative tooling.

---

## Trending Models

### 🧠 Language Models (LLMs, chat, instruction‑tuned)
| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,126 | 541,662 | MoE flagship from ZAI; top‑liked model this week, strong chat & reasoning. |
| [**tencent/Hy3**](https://huggingface.co/tencent/Hy3) | tencent | 829 | 13,571 | Tencent’s latest Hunyuan‑series base model; open‑weight, instruction‑tuned. |
| [**InternScience/Agents-A1**](https://huggingface.co/InternScience/Agents-A1) | InternScience | 579 | 35,575 | Qwen3.5‑MoE derivative optimized for agentic tool‑use and multimodal chat. |
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 444 | 1,218,815 | 1‑bit GGUF quant of Bonsai‑27B; massive downloads show demand for ultra‑compact LLMs. |
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 737 | 301,893 | 2‑bit ternary quant; pushes compression frontier while retaining coherence. |
| [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking) | GnLOLot | 143 | 5,271 | MiniCPM5‑1B fine‑tuned on Claude‑Opus reasoning traces; tiny but thoughtful. |
| [**AngelSlim/Hy3-GGUF**](https://huggingface.co/AngelSlim/Hy3-GGUF) | AngelSlim | 127 | 100,768 | Community GGUF quant of Tencent Hy3; Apache‑2.0 licensed for easy deployment. |
| [**jlnsrk/GLM-5.2-colibri-int4**](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4) | jlnsrk | 132 | 3,869 | INT4 CPU‑optimized GLM‑5.2 with expert‑streaming for low‑resource inference. |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 941 | 0 | Curated Jinja chat templates fixing Qwen3.5 formatting issues; essential for deployers. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)
| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 3,263 | 12,608,008 | Google’s flagship multimodal Gemma‑4; image‑text‑to‑text, leading global downloads. |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,025 | 2,088,470 | Production‑grade OCR model; handles arbitrary layouts/languages, huge enterprise pull. |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,315 | 2,112,869 | Qwen3.5‑based vision‑language model with Claude‑style reasoning; GGUF for local use. |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,866 | 2,190,398 | Uncensored MoE vision‑language model; aggressive reasoning tune, high community interest. |
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,064 | 12,456 | Novel image‑text‑to‑text architecture; early buzz for multimodal reasoning. |
| [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 437 | 10,445 | Qwen3.6‑based multimodal thinker; emphasizes step‑by‑step visual reasoning. |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 170 | 13,750 | Specialized OCR‑tuned Qwen3.5; accurate document understanding. |
| [**OpenMOSS-Team/MOSS-Transcribe-Diarize**](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 259 | 86,385 | Audio‑to‑text with speaker diarization; practical for meeting transcription. |
| [**Wan-AI/Wan-Dancer-14B**](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 114 | 2,328 | Image‑to‑video diffusion model; dance/motion generation focus. |
| [**OpenMOSS-Team/MOSS-VL-Realtime**](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime) | OpenMOSS-Team | 77 | 529 | Low‑latency video‑text‑to‑text for real‑time vision chat. |
| [**conradlocke/krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 395 | 0 | LoRA for Krea‑2 enabling identity‑preserving image edits. |
| [**Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt**](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt) | Cseti | 91 | 0 | IC‑LoRA for LTX‑Video enabling novel‑view synthesis from prompts. |
| [**Alissonerdx/LTX-Best-Face-ID**](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 187 | 0 | LoRA for LTX‑Video preserving facial identity in text‑to‑video. |

### 🔧 Specialized Models (code, math, medical, embeddings, tool‑use)
| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**Cactus-Compute/needle**](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 268 | 935 | JAX‑based function‑calling/tool‑use model; designed for agentic workflows. |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 170 | 13,750 | (Also listed above) OCR‑specialized Qwen3.5 for document AI pipelines. |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,025 | 2,088,470 | (Also listed above) General‑purpose OCR with feature‑extraction head. |

### 📦 Fine‑tunes & Quantizations (community GGUF, MLX, LoRA, AWQ)
| Model | Author | Likes | Downloads | Summary |
|-------|--------|----

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*