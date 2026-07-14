# Hugging Face Trending Models Digest 2026-07-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-04 01:50 UTC

---

# Hugging Face Trending Models Digest — 2026-07-04

## Today's Highlights

This week's trending models show a clear surge in **Mixture-of-Experts (MoE) architectures**, with multiple entries from the GLM-5.2, Qwen3.5/3.6, and Ornith families. **GGUF quantized models dominate the top downloads**, reflecting strong community demand for local deployment. NVIDIA makes a strong showing with both vision and optimized inference models, while **uncensored and abliterated variants** continue to gain traction. The emergence of **3D-aware video generation** (fal/LTX-2.3-3DREAL-LoRA) and **PII detection** (rampart) signals expanding use cases beyond pure text generation.

---

## Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 3,344 likes | 191,462 downloads  
  MoE conversational model with DSA attention; leading the week by likes, demonstrating strong adoption of GLM architecture.

- **[DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — deepseek-ai | 343 likes | 9,388 downloads  
  Latest DeepSeek V4 variant with dynamic sparse attention; paired with a supporting arXiv paper (2606.19348).

- **[DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)** — deepseek-ai | 142 likes | 32,675 downloads  
  Faster, lighter sibling of the Pro model; optimized for speed with same DSpark architecture.

- **[Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)** — deepreinforce-ai | 200 likes | 8,079 downloads  
  Massive 397B MoE model (Qwen3.5-based); pushes the frontier of open-weight large models despite lower download counts.

- **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)** — LiquidAI | 197 likes | 29,645 downloads  
  Efficient 230M liquid foundation model; trends as a lightweight alternative for resource-constrained deployments.

- **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)** — BugTraceAI | 125 likes | 11,444 downloads  
  Quantized Qwen3-based model specialized for cybersecurity and offensive security tasks.

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — google | 151 likes | 450 downloads  
  Google's tabular foundation model for zero-shot classification/regression; notable as a new entry in tabular ML.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia | 2,589 likes | 1,108,586 downloads  
  Object localization model with "locate anything" capability; high downloads reflect strong demand for visual grounding.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 1,692 likes | 885,040 downloads  
  Baidu's unlimited OCR model; trending due to its broad application in document processing and digitization.

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** — Qwen | 524 likes | 45,455 downloads  
  MoE vision-language model (35B total, 3B active) optimized for agentic tasks; signals focus on embodied AI.

- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** — fal | 150 likes | 0 downloads  
  LoRA for 3D-aware video generation from LTX-2.3; novel despite zero downloads (likely recently uploaded).

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — krea | 481 likes | 84,006 downloads  
  Fast text-to-image model based on Krea-2-Raw; Krea's growing ecosystem includes multiple LoRA and ComfyUI support.

- **[Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2)** — Comfy-Org | 242 likes | 10 downloads  
  Krea-2 integrated into ComfyUI; trends as infrastructure for the Krea diffusion ecosystem.

- **[ilkerzgi/fal-Krea-2-Style-LoRAs](https://huggingface.co/ilkerzgi/fal-Krea-2-Style-LoRAs)** — ilkerzgi | 116 likes | 0 downloads  
  Collection of style LoRAs for Krea-2 on fal.ai; zero downloads suggests very fresh upload.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — yuxinlu1 | 2,585 likes | 628,225 downloads  
  Gemma-4 fine-tune for coding and reasoning; top-tier performance in code generation benchmarks.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — yuxinlu1 | 992 likes | 329,391 downloads  
  Agentic variant of Gemma-4 fine-tune; optimized for terminal/agent use cases with extended context.

- **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)** — nationaldesignstudio | 115 likes | 1,149 downloads  
  BERT-based token classification for PII detection; ONNX/Transformers.js compatible for browser deployment.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 1,372 likes | 1,366,360 downloads  
  Qwen3.5-based GGUF fine-tune; highest downloads this week, indicating strong community preference for local-ready reasoning models.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 2,433 likes | 3,029,679 downloads  
  Uncensored MoE vision model (35B/3B active); massive download count suggests high demand for unrestricted models.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — unsloth | 938 likes | 1,774,298 downloads  
  Multi-Token Prediction variant of Qwen3.6; unsloth's quantization expertise drives adoption.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — deepreinforce-ai | 684 likes | 322,780 downloads  
  GGUF version of the 35B MoE model; multiple quantized variants (9B, 35B) from deepreinforce.

- **[deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)** — deepreinforce-ai | 414 likes | 287,942 downloads  
  Smaller GGUF sibling of the Ornith family; offers a more accessible entry point.

- **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)** — nvidia | 214 likes | 189,970 downloads  
  NVIDIA-optimized GLM-5.2 with FP4 quantization; part of NVIDIA's ModelOpt pipeline push.

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** — nvidia | 229 likes | 94,465 downloads  
  NVIDIA's FP4 quantized Qwen3.6; competing with community GGUF offerings.

- **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)** — huihui-ai | 144 likes | 3,683 downloads  
  Abliterated (uncensored) version of GLM-5.2 in GGUF format; part of the abliteration trend.

- **[Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF)** — Jackrong | 122 likes | 44,807 downloads  
  Qwen3.6 MoE coder with Multi-Token Prediction; tailored for code generation.

---

## Ecosystem Signal

The dominant trend this week is the **rise of MoE architectures** — GLM-5.2, Ornith-1.0 (3 variants), Qwen3.5/3.6 MoE, and DeepSeek V4—all leverage mixture-of-experts for better efficiency. **GGUF quantization remains the primary distribution channel** for local inference, with 11 of 30 entries being GGUF models. The **uncensored/abliterated subculture** is gaining visibility: HauhauCS's uncensored Qwen3.6 leads downloads at 3M+, and huihui-ai's abliterated GLM-5.2 continues the pattern. NVIDIA is positioning as an optimization layer with NVFP4 quantizations of key models (Qwen3.6, GLM-5.2), competing directly with community GGUF tooling. The **Gemma-4 fine-tune ecosystem** (coder, agentic) shows Google's open models gaining community traction. The **Krea-2 diffusion ecosystem** (Turbo, LoRAs, ComfyUI integration) indicates maturing infrastructure for text-to-image pipelines. Finally, **specialized vertical models**—cybersecurity (BugTraceAI), PII detection (rampart), tabular ML (tabfm)—suggest the market is moving beyond general-purpose chat toward domain-specific applications.

---

## Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — With 2.5K likes and 1.1M downloads, this 3B vision model punches above its weight. Its "locate anything" capability represents a practical application of visual grounding that's immediately useful for robotics, document processing, and UI automation.

2. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — 2.5K likes and 628K downloads in a coding-specialized Gemma-4 fine-tune. The fable5/composer2.5 recipe is producing strong code benchmarks; this GGUF variant makes it accessible for local development workflows.

3. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — 938 likes and 1.7M downloads. Multi-Token Prediction is an emerging technique that improves inference throughput, and unsloth's optimization expertise makes this a practical choice for production deployments requiring fast, quantized generation.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*