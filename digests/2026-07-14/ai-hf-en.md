# Hugging Face Trending Models Digest 2026-07-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-14 01:20 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-14

## 1. Today's Highlights

The Hugging Face ecosystem is experiencing a major Qwen 3.6 wave, with multiple high-download GGUF quantizations and MoE variants dominating the trending list. **GLM-5.2** from Zhipu AI leads in likes (3,900), signaling strong interest in its Mixture-of-Experts architecture. The **Qwen 3.6 uncensored MoE model** from HauhauCS has already surpassed 2.5 million downloads, indicating continued demand for unconstrained reasoning models. On the multimodal front, **Baidu's Unlimited-OCR** and **Cohere's Arabic speech recognition** model show enterprise-grade foundation models gaining traction. Notably, **nvidia/Nemotron-Labs-Audex-30B-A3B** marks a significant entry in the efficient MoE space with a 30B total / 3B active parameter configuration.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | ⭐ 3,900 | 📥 464,914  
  A 5.2-generation MoE conversational model from Zhipu AI, trending as the top-liked model today for its efficient sparse architecture.

- **[internscience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — InternScience | ⭐ 526 | 📥 29,801  
  A Qwen 3.5 MoE model fine-tuned specifically for agentic workflows, drawing interest from the AI agent development community.

- **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)** — migtissera | ⭐ 104 | 📥 1,105  
  A Qwen 3.5-based multimodal assistant model, part of the evolving Tess series for image-text-to-text tasks.

- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** — SupraLabs | ⭐ 114 | 📥 1,573  
  A compact 51M-parameter router model for directing queries to appropriate downstream models, reflecting growing interest in model routing infrastructure.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | ⭐ 1,963 | 📥 1,506,937  
  Baidu's enterprise-grade OCR model with broad language support, trending for its robust real-world document processing capabilities.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Alissonerdx | ⭐ 124 | 📥 0  
  A LoRA for identity-preserving text-to-video generation using LTX-Video, gaining attention for personalized video creation.

- **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** — robbyant | ⭐ 93 | 📥 0  
  A 14B world model for image-to-video generation, pushing boundaries in causal video prediction.

- **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)** — nineninesix | ⭐ 95 | 📥 3,940  
  A text-to-speech model built on Qwen 3.5 text backbone, representing the convergence of LLM and TTS technologies.

- **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)** — CohereLabs | ⭐ 102 | 📥 11,647  
  Cohere's dedicated Arabic ASR model, reflecting growing demand for high-quality non-English speech recognition.

- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** — open-gigaai | ⭐ 128 | 📥 0  
  A new generative world model using Diffusers, early-stage but signaling the expansion of diffusion models beyond image generation.

### 🔧 Specialized Models (code, math, medical, embeddings, audio)

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — OpenMOSS-Team | ⭐ 162 | 📥 39,509  
  A combined transcription and speaker diarization model from OpenMOSS, trending for meeting and call analysis workflows.

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — google | ⭐ 362 | 📥 21,590  
  Google's TabFM foundation model for zero-shot tabular classification and regression, gaining traction in enterprise data science.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — conradlocke | ⭐ 255 | 📥 0  
  A LoRA for identity-consistent image editing built on Krea-2, reflecting the trend toward controllable image manipulation.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric | ⭐ 888 | 📥 0  
  A small but highly-liked utility repo providing corrected Jinja chat templates for Qwen models, highlighting the ecosystem's attention to proper prompt formatting.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — yuxinlu1 | ⭐ 1,178 | 📥 452,627  
  A heavily fine-tuned Gemma 4 derivative optimized for agentic coding and terminal use, one of the most downloaded specialized models today.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | ⭐ 2,084 | 📥 1,985,221  
  A Qwen 3.5-based 9B GGUF quantized model fine-tuned with synthetic Claude data, extremely popular for local deployment.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | ⭐ 2,710 | 📥 2,512,124  
  An uncensored MoE variant of Qwen 3.6 (35B total, 3B active) in GGUF format, trending for its aggressive reasoning style.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — deepreinforce-ai | ⭐ 868 | 📥 1,392,300  
  A 35B GGUF model with MIT license, gaining popularity for its permissive licensing and strong general performance.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — unsloth | ⭐ 1,074 | 📥 2,901,906  
  The highest-downloaded quantized model today, featuring Unsloth's optimized GGUF of Qwen 3.6 with Multi-Token Prediction.

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** — unsloth | ⭐ 162 | 📥 49,423  
  Unsloth's GGUF quant of DeepSeek V4 Flash, cited with arxiv:2606.19348, indicating academic interest in efficient inference.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — GnLOLot | ⭐ 220 | 📥 68,714  
  A tiny 1B thinking model in GGUF format, demonstrating that sub-2B reasoning models remain relevant in the quantized ecosystem.

- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** — jlnsrk | ⭐ 86 | 📥 1,997  
  An int4 quantization of GLM-5.2 optimized for CPU inference using expert streaming, enabling local deployment of large MoE models.

- **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)** — empero-ai | ⭐ 105 | 📥 45,189  
  Updated GGUF quantization of the Qwythos series, continuing the Qwen 3.5 fine-tuning lineage.

- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** — nvidia | ⭐ 114 | 📥 38,775  
  NVIDIA's 75B MoE model with only 9B active parameters, using their proprietary NVFP4 quantization format.

---

## 3. Ecosystem Signal

**Qwen 3.6 dominates the MoE quantization landscape.** Five of the top 30 models are Qwen 3.5/3.6 derivatives in GGUF or NVFP4 format, collectively exceeding 8 million downloads. This signals that Qwen's Mixture-of-Experts architecture has become the preferred backbone for community fine-tuning and local deployment, likely due to its excellent parameter efficiency (35B total / 3B active).

**GGUF remains the quantization standard**, appearing in 10 of the 30 trending models. The coexistence of unsloth's optimized GGUF pipeline alongside NVIDIA's proprietary NVFP4 format (used in the Nemotron models) suggests the ecosystem is bifurcating: open GGUF for broad compatibility vs. closed/optimized formats for specific hardware.

**Efficient MoE is the dominant architecture theme.** The GLM-5.2, Qwen MoE series, and NVIDIA Nemotron models all leverage sparse activation (30B–75B total with 3B–9B active). This reflects the market's prioritization of inference efficiency without sacrificing model capacity.

**Enterprise foundation models are entering the open-weight ecosystem.** Baidu's Unlimited-OCR, Google's TabFM, Cohere's Arabic ASR, and NVIDIA's Nemotron Labs suite represent a shift where major tech companies release domain-specific foundation models with permissive licenses, competing with community-built alternatives.

---

## 4. Worth Exploring

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — The highest-liked model today by a wide margin. Its "GLM MoE DSA" architecture likely represents Zhipu AI's latest thinking on efficient sparse attention. Worth studying for anyone building production-scale conversational AI.

2. **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** — NVIDIA's entry into the efficient MoE space is significant. Comparing its 30B-A3B and 75B-A9B variants provides insight into the scaling laws of sparse models, and the NVFP4 format may preview future quantization directions for NVIDIA hardware.

3. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — With nearly 3 million downloads, this is the community's most trusted quantization of Qwen 3.6. The Multi-Token Prediction variant is worth benchmarking against the standard Qwen 3.6 to evaluate inference speed improvements vs. quality trade-offs.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*