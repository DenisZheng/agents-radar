# Hugging Face Trending Models Digest 2026-07-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-13 01:43 UTC

---

# 🤗 Hugging Face Trending Models Digest — July 13, 2026

## 1. Today's Highlights

The Hugging Face ecosystem this week is dominated by the **Qwen3.6** and **Qwen3.5** family, with multiple quantized variants, MoE configurations, and uncensored fine-tunes surging in popularity. NVIDIA continues its aggressive open-weight strategy with the release of **Nemotron-Labs-Audex-30B-A3B** and the massive **Nemotron-Labs-3-Puzzle-75B-A9B**, both pushing MoE architectures into the mainstream. **Unlimited-OCR** from Baidu (1.94K likes, 1.43M downloads) signals strong demand for vision-language document processing, while **GLM-5.2** from ZAI (3.86K likes) leads the chart as the week's most-liked model overall. Quantization activity remains intense, with GGUF variants of nearly every major release appearing within hours—**Qwen3.6-35B-A3B-Uncensored** alone has accumulated 2.6M downloads.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 3,857 likes | 441K downloads  
  A MoE-DSA conversational model from ZAI, topping the charts with strong reasoning and dialogue performance.

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — InternScience | 510 likes | 29K downloads  
  A Qwen3.5-MoE-based agent model designed for tool-use and multi-turn task completion.

- **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)** — migtissera | 94 likes | 971 downloads  
  A Qwen3.5-based vision-language model with enhanced reasoning via the "Tess" fine-tuning recipe.

- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** — nvidia | 113 likes | 34.8K downloads  
  A massive 75B MoE model (9B active) with NVFP4 quantization, targeting puzzle-solving and multi-step reasoning.

- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** — nvidia | 131 likes | 901 downloads  
  NVIDIA's 30B MoE with 3B active params, optimized for audio understanding and multimodal tasks.

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** — meituan-longcat | 182 likes | 1.8K downloads  
  A long-context conversational model from Meituan, focusing on extended dialogue retention.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric | 865 likes | 0 downloads  
  A corrections pack for Qwen chat templates, trending due to widespread template compatibility issues.

- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** — SupraLabs | 107 likes | 1.4K downloads  
  A lightweight 51M router model for selecting optimal LLM pathways in multi-model setups.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 1,943 likes | 1.43M downloads  
  A universal OCR model handling diverse document layouts, languages, and image qualities—extremely high download volume.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia | 2,717 likes | 1.5M downloads  
  A 3B vision-language model for object localization and referring expression comprehension, from NVIDIA.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Alissonerdx | 111 likes | 0 downloads  
  A LoRA for identity-preserving text-to-video using the LTX-Video pipeline, enabling consistent face generation.

- **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** — robbyant | 85 likes | 0 downloads  
  A 14B world model for image-to-video generation, using causal attention for faster inference.

- **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)** — nineninesix | 85 likes | 2.3K downloads  
  A text-to-speech model based on Qwen3.5, supporting natural prosody and multi-speaker synthesis.

- **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)** — CohereLabs | 95 likes | 9.9K downloads  
  A specialized automatic speech recognition model for Arabic, released by Cohere Labs.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — OpenMOSS-Team | 130 likes | 14.5K downloads  
  Combines transcription with speaker diarization in an audio-text-to-text pipeline.

- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** — open-gigaai | 123 likes | 0 downloads  
  A diffusion-based world model for video generation, supporting consistent scene simulation.

- **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)** — robbyant | 91 likes | 461 downloads  
  A 30B MoE video generation model with 3B active parameters and a custom Diffusers pipeline.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — bottlecapai | 266 likes | 4.5K downloads  
  A reasoning-enhanced vision-language model built on Qwen3.6, emphasizing token-efficient thinking.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 2,676 likes | 2.6M downloads  
  An uncensored, aggressive-tuned MoE vision model with massive community adoption.

### 🔧 Specialized Models (code, math, embeddings, tabular)

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — google | 357 likes | 21K downloads  
  Google's TabFM foundation model for zero-shot tabular classification and regression tasks.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — yuxinlu1 | 1,159 likes | 445K downloads  
  A heavily fine-tuned Gemma 4 variant optimized for agentic coding and terminal interaction.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 2,047 likes | 1.97M downloads  
  A GGUF-quantized reasoning model distilled from Claude-style synthesis, extremely popular for local deployment.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — GnLOLot | 201 likes | 49.3K downloads  
  A tiny 1B GGUF variant of MiniCPM5, fine-tuned for chain-of-thought reasoning.

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** — unsloth | 152 likes | 44.6K downloads  
  Unsloth's GGUF quantization of DeepSeek V4 Flash, enabling fast inference on consumer hardware.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — unsloth | 1,058 likes | 2.9M downloads  
  The most downloaded Qwen3.6 GGUF variant, offering multi-token prediction for faster generation.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B-GGUF](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B-GGUF)** — bottlecapai | 83 likes | 312K downloads  
  A GGUF-quantized ThinkingCap emphasizing token-efficient reasoning for resource-constrained setups.

- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** — unsloth | 179 likes | 1.38M downloads  
  An NVFP4-quantized Qwen3.6 variant, offering 4-bit floating point precision for NVIDIA hardware.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — deepreinforce-ai | 855 likes | 1.35M downloads  
  A MIT-licensed 35B GGUF model with strong general reasoning, heavily downloaded for local chat.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — conradlocke | 212 likes | 0 downloads  
  A LoRA for editing identities in images using the Krea-2 base model, popular in the ComfyUI community.

---

## 3. Ecosystem Signal

**Qwen dominates the open-weight landscape.** The Qwen3.5/3.6 lineage now spans nearly every use case: reasoning (ThinkingCap), uncensored variants (HauhauCS), MoE routing (Agents-A1), and vision capabilities. Unsloth has emerged as the de-facto quantization provider for these models, with their GGUF and NVFP4 releases collectively exceeding 4 million downloads this week alone.

**Mixture-of-Experts (MoE) is becoming the default architecture.** NVIDIA's Nemotron-Labs series (30B-A3B, 75B-A9B) and Tencent's Hy3 both adopt MoE, while Qwen3.6-35B-A3B proves that MoE at scale can achieve massive downloads. The trend toward sparse activation (3B active out of 35B or 9B out of 75B) indicates the ecosystem is optimizing for inference cost as much as raw capability.

**Quantization is no longer optional—it's expected.** Every notable release now ships a GGUF, NVFP4, or both within days. The "AGI-level" reasoning models (Qwythos, DeepSeek V4 Flash) are almost exclusively consumed through quantized variants. This suggests the deployment community prioritizes accessibility over absolute peak performance.

**Specialized vertical models are gaining traction.** Baidu's Unlimited-OCR and Google's TabFM signal a shift toward domain-specific foundation models, while Cohere's Arabic ASR and OpenMOSS's diarization show that single-task models with high accuracy are competing with general-purpose VLMs.

---

## 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — At just 3B parameters with 1.5M downloads and 2.7K likes, this model represents the sweet spot between vision-language capability and deployability. It's ideal for studying how object localization can be distilled into compact architectures while maintaining high accuracy.

2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — With 2.6M downloads, this is the community's choice for unrestricted MoE vision-language interaction. Worth studying as a reference point for alignment-free fine-tuning at scale and the trade-offs between aggressiveness and coherence.

3. **[unsorted/unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — The most downloaded model this week (2.9M) demonstrates the market's hunger for efficient, multi-token-predictive quantized models. It represents the current state-of-the-art in balancing speed, quality, and hardware accessibility.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*