# Hugging Face Trending Models Digest 2026-07-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-01 00:28 UTC

---

# 🤗 Hugging Face Trending Models Digest — July 1, 2026

## 1. Today's Highlights

This week's Hugging Face trending board is dominated by massive MoE (Mixture-of-Experts) models and their quantized variants, signaling a shift toward running high-parameter-count models efficiently on consumer hardware. **GLM-5.2** from Zhipu AI leads the board with 3,050 likes, while **NVIDIA's LocateAnything-3B** (2,520 likes) and **yuxinlu1's Gemma-4-12B coder quant** (2,530 likes) represent strong community interest in both vision-language grounding and specialized coding models. The emergence of **Qwen-AgentWorld-35B-A3B** and community uncensored flavors like **HauhauCS/Qwen3.6-35B-A3B-Uncensored** (2,358 likes, 3M+ downloads) highlights a growing appetite for agent-capable, large-context MoE models. Notably, **fal's LTX-2.3-3DREAL-LoRA** marks a new frontier in controllable 3D-aware video generation.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, Chat, Instruction-Tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — Zhipu AI's flagship MoE model with 3,050 likes; leading the week with strong conversational capabilities and DSA architecture.
- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** — 35B MoE agent-world model by Qwen (465 likes); trending due to its novel world-modeling approach for agentic tasks.
- **[deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B)** & **[Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)** — MIT-licensed Qwen3.5-based models with image-text-to-text capabilities; open-weight alternative gaining traction.
- **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)** — The largest Ornith variant at 397B parameters; flagship for enterprise-scale open MoE deployment.
- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** — 756 likes, strong math reasoning model built on Qwen2; trending for education and logic tasks.
- **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)** — Small but capable Liquid Foundation Model; notable for efficiency research.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — Uncensored Qwen3.6 MoE fine-tune with 2,358 likes and 3M+ downloads; massive adoption for unrestricted use cases.

### 🎨 Multimodal & Generation (Image, Video, Text-to-X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 1,489 likes; Baidu's end-to-end OCR model processing images to text; trending for document AI and automation.
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — 2,520 likes and 800K+ downloads; NVIDIA's open-vocabulary object localization; a must-use for vision grounding.
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — 420 likes; fast text-to-image diffusion model built on Krea-2-Raw; trending for speed-quality tradeoff.
- **[krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)** — 258 likes; base generative model for the Krea-2 ecosystem; foundation for finetunes.
- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** — 126 likes; pioneering 3D-realistic video LoRA over LTX-2.3; first-of-its-kind for 3D-aware image-to-video.

### 🔧 Specialized Models (Code, Math, Agentic, Vision)

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — 886 likes; Gemma-4-based agentic coding model with terminal integration; trending for agent workflows.
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — 2,530 likes; purpose-built code model with reasoning capability; highly downloaded (575K).
- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — 249 likes; DeepSeek's latest flagship with DSpark optimization and arXiv paper; research-grade reasoning.
- **[deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)** — 112 likes; faster, more efficient variant of DeepSeek-V4; targeted at deployment.
- **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)** — 134 likes; cybersecurity-focused fine-tune of DeepSeek-V4; niche but impactful.

### 📦 Fine-tunes & Quantizations (Community Finetunes, GGUF, AWQ)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — 1,056 likes, 970K+ downloads; leading GGUF quantized reasoning model with Qwen3.5 backbone.
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** — 593 likes; the full-precision base of the Qwythos family; reasoning and story-mixing model.
- **[deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)** & **[Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — 345 and 547 likes respectively; quantized variants of the Ornith series for accessible local deployment.
- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** — 388 likes, 5.5M downloads; NVIDIA's FP4 quantized Qwen3.6 MoE — the most downloaded model this week by a wide margin.
- **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)** — 182 likes; FP4 quantized GLM-5.2 by NVIDIA; demonstrates hardware-model co-optimization.
- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** — 484 likes; community GGUF of GLM-5.2 via Unsloth; popular for efficient local inference.
- **[unsloth/Qwen-AgentWorld-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen-AgentWorld-35B-A3B-GGUF)** — 123 likes; GGUF quant of AgentWorld for agentic tasks on low-resource hardware.
- **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)** — 99 likes; abliterated (safety-removed) GLM-5.2 GGUF; niche uncensored variant.

---

## 3. Ecosystem Signal

**MoE is the new standard.** This week's leaderboard is overwhelmingly MoE-based — GLM-5.2, Qwen-AgentWorld, Qwen3.6, Ornith-1.0-397B, and DeepSeek-V4 all employ Mixture-of-Experts architectures. The community is no longer favoring purely dense models; the tradeoff of parameter count vs. active compute is now mainstream. **Open-weight momentum remains strong** — Ornith and Qwythos are MIT-licensed, and DeepSeek continues its open-weight strategy. The downloading data reveals a clear winner: **NVIDIA's NVFP4 quantization** of Qwen3.6-35B-A3B leads with 5.5M downloads, signaling that 4-bit floating point quantization has become the de facto standard for deploying large MoE models on consumer GPUs. **Agentic and coding fine-tunes** (Gemma-4-agentic, Qwen-AgentWorld) are rising fast, suggesting the ecosystem is shifting from general chat to task-specific agent capabilities. The uncensored model category (HauhauCS, Huihui) continues to see strong demand despite platform concerns.

---

## 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — A compact 3B vision grounding model that excels at open-vocabulary object localization with 800K+ downloads. Ideal for RAG-pipeline image understanding, autonomous driving, or any application requiring precise spatial reasoning without massive compute.

2. **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** — A pioneering LoRA for 3D-aware video generation that pushes LTX-2.3 into new territory. Worth studying for anyone building generative media pipelines or researching spatial consistency in video models.

3. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — With 2,530 likes and 575K downloads, this is the week's standout code-specialized GGUF. It balances reasoning and coding ability on a 12B architecture — ideal for local development workflows and code agent testing.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*