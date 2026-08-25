# Hugging Face Trending Models Digest 2026-08-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-25 00:54 UTC

---

---

### 📈 Hugging Face Trending Models Digest — 2026-08-25

#### 1. Today's Highlights
The Qwen3.8-27B ecosystem dominates this week’s leaderboard, spawning over a dozen high-traffic variants spanning base, FP8, GGUF, and multiple “uncensored/abliterated” community fine-tunes — signaling intense open-weight customization activity. MiniMaxAI’s MiniMax-H3 surges as the leading open video generation model (4.4M downloads), while Lightricks’ LTX-2.5 and MiniMax-Music3 extend multimodal momentum into image-to-video and music synthesis. DeepSeek-V4-Flash-0731 maintains strong traction (3.7K likes, 3.3M downloads), reinforcing DeepSeek’s position as a premier open-weight LLM family. Meanwhile, Ornith’s MoE series (35B-A3B and 9B) and speculative-decoding variants (DFlash2) highlight growing interest in efficient architecture innovations. Community tooling — chat-template fixes and quantized GGUF repacks — continues to amplify accessibility.

---

#### 2. Trending Models

##### 🧠 Language Models (LLMs, Chat, Instruction-Tuned)
| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,514 | 2,645,226 | Flagship 27B multimodal LLM with image-text-to-text pipeline; top base model this week. |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,681 | 3,274,129 | High-performance open-weight chat model; strong conversational benchmarks. |
| [**ornith-ai/Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 397 | 60,294 | MoE (35B total, 3B active) Qwen3.5-based model; efficient inference via sparse activation. |
| [**ornith-ai/Ornith-1.5-9B**](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 202 | 83,192 | Compact 9B dense variant; strong instruction-following for resource-constrained deployments. |
| [**superwhisper/s1-mini**](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 229 | 2,976 | Tiny ASR-specialized Qwen3 model; optimized for on-device speech recognition. |
| [**z-lab/Qwen3.8-27B-DFlash2**](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 214 | 50,763 | Speculative-decoding accelerated version; 2-3× speedup via draft model. |
| [**incoai/Qwen3.8-27B-DFlash2**](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 173 | 85,034 | Community replicate of DFlash2 speculative-decoding variant. |

##### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)
| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,417 | 4,465,161 | SOTA open text-to-video & image-to-video model; 4.4M downloads signal massive adoption. |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,723 | 790,378 | Versatile diffusion model for image→video, text→video, video→video; single-file deploy. |
| [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,228 | 18,065 | High-fidelity text-to-music generation; emerging leader in open audio synthesis. |
| [**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 681 | 3,004,940 | Official FP8-quantized multimodal Qwen3.8; 50% VRAM reduction with minimal quality loss. |
| [**orcarouter/Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,028 | 57,947 | MLX-optimized abliterated variant for Apple Silicon; uncensored multimodal chat. |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,099 | 224,114 | FP8 + abliteration combo; high throughput, reduced refusal rates. |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 578 | 761,975 | Aggressive MTP (Multi-Token Prediction) GGUF quant; optimized for llama.cpp speed. |
| [**Audio8/Audio8-TTS-Preview-0.1b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 145 | 2,775 | Early-preview ArkTTS-based text-to-speech; promising open TTS contender. |

##### 🔧 Specialized Models (Code, Math, Medical, Embeddings, ASR/TTS)
| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**superwhisper/s1-mini**](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 229 | 2,976 | Specialized ASR model on Qwen3; targets real-time transcription on edge devices. |
| [**z-lab/Qwen3.8-27B-DFlash2**](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 214 | 50,763 | Speculative-decoding research artifact; demonstrates 2-3× throughput gains. |
| [**incoai/Qwen3.8-27B-DFlash2**](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 173 | 85,034 | Community build of DFlash2; validates speculative-decoding reproducibility. |
| [**Audio8/Audio8-TTS-Preview-0.1b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 145 | 2,775 | Open TTS preview; ArkTTS architecture with feature-extraction pipeline. |

##### 📦 Fine-tunes & Quantizations (Community Fine-tunes, GGUF, AWQ, Chat Templates)
| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,837 | 7,009,063 | Official Unsloth GGUF quant pack; 7M+ downloads = de facto standard for local inference. |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,447 | 0 | Critical Jinja chat-template fixes for Qwen3.5; resolves formatting bugs in vLLM/llama.cpp. |
| [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 695 | 312,627 | Multi-format (MLX/GGUF/safetensors) abliterated model; refusal suppression via weight orthogonalization. |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 690 | 1,456,700 | Popular GGUF uncensored variant with MTP; 1.4M downloads = strong community trust. |
| [**ornith-ai/Ornith-1.5-35B-A3B-GGUF**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 275 | 988,170 | GGUF quant of MoE model; MIT license, endpoints-compatible. |
| [**ornith-ai/Ornith-1.5-9B-GGUF**](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 186 | 971,104 | Compact GGUF MoE; near-1M downloads show demand for efficient local MoE. |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 334 | 1,140,375 | Abliterated GGUF with Huihui branding; 1.1M downloads = reliable quant. |
| [**DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 226 | 209,017 | Experimental GAIN+COLD-FUSION training + MTP; niche but innovative recipe. |
| [**0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF**](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 260 | 654,805 | “Heretic” abliteration method; distinct refusal-removal approach. |
| [**empero-ai/Qwen3.8-27B-Ridge-GGUF**](https://huggingface.co/emper

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*