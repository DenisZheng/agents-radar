# Hugging Face Trending Models Digest 2026-09-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-06 02:22 UTC

---

# Hugging Face Trending Models Digest — 2026-09-06

---

## 1. Today's Highlights

The Qwen 3.8 family dominates this week’s trending list, with the base 27B model surpassing **6M downloads** and spawning a massive ecosystem of GGUF quantizations, uncensored fine-tunes, and Flash-Next variants. DeepSeek unveils **DeepSeek-V4-Flash-Vision-Exp**, an experimental multimodal model signaling rapid iteration in vision-language capabilities. Z.ai’s **GLM-5.3** series (base and Flash) enters the chart with strong multimodal conversational performance. Video generation sees a breakthrough with **MiniMax-H3** (5M+ downloads) and Lightricks’ **LTX-2.5**, while Google’s **TimeFM-3.0** highlights growing demand for specialized time-series forecasting. Community quantization (GGUF, FP8, GSQ-RCO) and “uncensored/abliterated” fine-tunes have become a standard layer atop every major open-weight release.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,040 | 6,024,467 | Flagship 27B multimodal LLM; leading open-weight model with massive adoption and downstream ecosystem. |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,719 | 370,417 | MoE-based 5.3 generation with DSA attention; strong bilingual reasoning and conversational ability. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 544 | 4,755 | Compact 4B instruction-tuned model optimized for efficient deployment. |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 174 | 1,333 | Mixture-of-Vision-Attention 36B model exploring sparse multimodal routing. |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 443 | 6,195 | Hunyuan-family preview release; early look at Tencent’s next-gen architecture. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,701 | 14,739,982 | Perennial baseline; still widely used for research, education, and lightweight tasks. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,986 | 56,175,564 | Foundational encoder; remains essential for classification, embeddings, and fine-tuning. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,156 | 7,101,423 | Distilled BERT; 60% faster, 97% performance—standard for resource-constrained NLP. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 680 | 184,542 | Experimental vision-language model from DeepSeek V4 line; fast multimodal inference focus. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,914 | 401,327 | Accelerated multimodal variant of Qwen 3.8; optimized for latency-sensitive vision-language tasks. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,079 | 727,610 | Flash-optimized GLM 5.3 with image-text-to-text pipeline; strong Chinese/English multimodal chat. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,934 | 5,057,414 | State-of-the-art text-to-video / image-to-video diffusion model; 5M+ downloads signal creator adoption. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,892 | 1,484,329 | Unified video generation (text-to-video, image-to-video, video-to-video); single-file diffusion ease. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 448 | 5,962 | High-quality text-to-speech with transformers backend; emerging open TTS option. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,210 | 20,755,211 | Foundational vision-language encoder; ubiquitous for zero-shot classification and retrieval. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 263 | 12,961 | Massively multilingual speech (300M params); part of MMS project for low-resource languages. |

---

### 🔧 Specialized Models (code, math, medical, embeddings, forecasting)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 457 | 123,025 | Foundation model for time-series forecasting; zero-shot across domains, PyTorch-native. |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,559 | 255,006,933 | Go-to 384-dim sentence embedder; 255M downloads prove default status for RAG, clustering, search. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, FP8, AWQ)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,545 | 10,157,510 | Official Unsloth GGUF quantizations of Qwen 3.8-27B; 10M+ downloads show GGUF dominance for local LLM. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 799 | 780,823 | GGUF pack for the Flash-Next variant; enables fast local multimodal inference. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 410 | 297,493 | Mixed-precision GSQ+RCO quantization; research-grade compression with accuracy preservation. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 223 | 174,405 | Heavily merged/uncensored fine-tune with MTP; exemplifies “kitchen-sink” community recipes. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 965 | 1,527,627 | Aggressive uncensored + MTP fine-tune; high downloads reflect demand for unrestricted local models. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 987 | 2,453,361 | Popular uncensored GGUF; clean abliteration for alignment removal without capability loss. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,096 | 968,936 | Abliterated (refusal-removed) version; multi-format (MLX, safetensors, GGUF) for broad hardware support. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 728 | 283,774 | Router-oriented uncensored quantization; tuned for orchestration workloads. |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 239 | 106,845 | Uncensored Flash-Next GGUF; extends abliteration to accelerated multimodal variant. |
| [orcarouter/GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 186 | 8,338 | FP8-quantized uncensored GLM Flash; early adoption of FP8 for bandwidth-constrained deployment. |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 115 | 10,680 | Vision-capable GGUF fine

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*