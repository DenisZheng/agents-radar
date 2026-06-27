# Hugging Face Trending Models Digest 2026-06-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-27 00:38 UTC

---

# Hugging Face Trending Models Digest — June 27, 2026

---

## 1. Today's Highlights

Hugging Face's trending page today is dominated by the continued explosion of **Qwen3.6-35B-A3B** variants, with community uncensored and quantized releases racking up millions of downloads — HauhauCS's uncensored GGUF alone has crossed **3.45 million downloads**. **GLM-5.2** from ZAI is the most-liked model this week (2,589 likes), signaling strong appetite for next-generation MoE architectures. The GGUF ecosystem remains incredibly vibrant, with unsloth and community quantizers driving massive distribution. On the multimodal side, **MiniMax-M3** and **nvidia/LocateAnything-3B** show that vision-language models are gaining serious traction, while **Krea-2** represents the latest in text-to-image generation. Notably, **nvidia/Qwen3.6-35B-A3B-NVFP4** has amassed a staggering **4.81 million downloads**, making it one of the most-pulled models on the platform.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, Chat, Instruction-Tuned)

| Model | Details |
|-------|---------|
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org \| ❤️ 2,589 \| 📥 83,589 | ZAI's flagship MoE model with DSA attention — the most-liked model this week, signaling strong community excitement for the next generation of the GLM architecture. |
| **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | Author: WeiboAI \| ❤️ 731 \| 📥 54,638 | A compact 3B reasoning model from Weibo's AI team, focused on mathematical thinking — impressive engagement for a sub-4B parameter model. |
| **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | Author: microsoft \| ❤️ 355 \| 📥 5,735 | Microsoft's fine-tuned 4B Explorer SubAgent, targeting agentic workflows with fast context processing — a sign of big-tech investment in small agent models. |
| **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | Author: Qwen \| ❤️ 320 \| 📥 13,186 | Qwen's agent-focused MoE model, purpose-built for tool use and multi-step reasoning tasks. |
| **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)** | Author: LiquidAI \| ❤️ 112 \| 📥 8,286 | An ultra-lightweight 230M-parameter model from LiquidAI, targeting edge and on-device inference. |
| **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)** | Author: Chunjiang-Intelligence \| ❤️ 107 \| 📥 1,103 | A community fine-tune of DeepSeek-V4 optimized for cybersecurity applications — early but notable domain specialization. |

### 🎨 Multimodal & Generation

| Model | Details |
|-------|---------|
| **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | Author: MiniMaxAI \| ❤️ 1,246 \| 📥 169,951 | MiniMax's flagship vision-language model with multimodal reasoning — strong likes signal it's a serious contender in the VLM space. |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia \| ❤️ 2,383 \| 📥 494,756 | NVIDIA's 3B visual grounding model that can localize anything from text descriptions — second most-liked model this week with near half-million downloads. |
| **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | Author: krea \| ❤️ 285 \| 📥 8,721 | Turbo version of Krea-2 text-to-image model, offering faster generation with maintained quality. |
| **[krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)** | Author: krea \| ❤️ 202 \| 📥 10,408 | The base Krea-2 text-to-image model, serving as foundation for the Turbo variant and community fine-tunes. |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | Author: nvidia \| ❤️ 707 \| 📥 56,434 | NVIDIA's streaming-capable 0.6B ASR model — compact enough for real-time speech recognition on edge devices. |

### 🔧 Specialized Models (OCR, Code, Math, PDF, Vision)

| Model | Details |
|-------|---------|
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu \| ❤️ 1,040 \| 📥 134,146 | Baidu's unlimited OCR model for image-to-text extraction — a workhorse for document processing pipelines. |
| **[datalab-to/lift](https://huggingface.co/datalab-to/lift)** | Author: datalab-to \| ❤️ 158 \| 📥 6,054 | A Qwen3.5-based model specialized for PDF understanding and document intelligence. |
| **[deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)** | Author: deepreinforce-ai \| ❤️ 121 \| 📥 1,005 | A 35B MoE model from DeepReinforce targeting complex reasoning — the full-precision base for GGUF variants. |
| **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)** | Author: deepreinforce-ai \| ❤️ 106 \| 📥 126 | The massive 397B Ornith model — a frontier-scale MoE, though still early in adoption. |

### 📦 Fine-tunes & Quantizations

| Model | Details |
|-------|---------|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS \| ❤️ 2,263 \| 📥 3,453,492 | The single most-downloaded model on this list — an uncensored, aggressive-tuned GGUF of Qwen3.6-35B-A3B with vision support. |
| **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1 \| ❤️ 2,398 \| 📥 516,333 | A community GGUF fine-tune of Gemma 4 12B for coding — second most-liked model, showing enormous demand for open code models. |
| **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | Author: yuxinlu1 \| ❤️ 684 \| 📥 186,663 | Agentic variant of the Gemma 4 12B coder, optimized for terminal and tool-use tasks. |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai \| ❤️ 584 \| 📥 486,810 | A 9B reasoning model with 1M token context, quantized to GGUF — Claude Mythos fine-tune on Qwen3.5 base. |
| **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | Author: unsloth \| ❤️ 410 \| 📥 107,553 | Unsloth's efficient GGUF quantization of GLM-5.2, making the MoE model accessible on consumer hardware. |
| **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | Author: nvidia \| ❤️ 361 \| 📥 4,812,629 | NVIDIA's official NVFP4 quantized version — the most-downloaded single model on this list, showing demand for hardware-optimized inference. |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** | Author: empero-ai \| ❤️ 446 \| 📥 20,346 | Full-precision version of the Qwythos 9B reasoning model with 1M context support. |
| **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)** | Author: nvidia \| ❤️ 87 \| 📥 441 | NVIDIA's NVFP4-optimized GLM-5.2 — early days but signals official hardware-vendor optimization of third-party architectures. |
| **[Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF)** | Author: Jackrong \| ❤️ 93 \| 📥 35,027 | Community GGUF of a 27B coder model with multi-token prediction support. |
| **[HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced)** | Author: HauhauCS \| ❤️ 91 \| 📥 23,772 | QAT-quantized, balanced uncensored variant of Gemma 4 12B with vision capabilities. |
| **[huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated)** | Author: huihui-ai \| ❤️ 135 \| 📥 5,445 | Abliterated (uncensored) version of the popular Gemma 4 12B coder fine-tune. |
| **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | Author: deepreinforce-ai \| ❤️ 230 \| 📥 3,002 | GGUF quantization of the 35B Ornith model for more accessible deployment. |
| **[deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)** | Author: deepreinforce-ai \| ❤️ 156 \| 📥 1,779 | Smaller 9B variant of the Ornith model, quantized for lightweight inference. |
| **[deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B)** | Author: deepreinforce-ai \| ❤️ 112 \| 📥 218 | Full-precision 9B Ornith model — the base for its GGUF counterpart. |
| **[Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2)** | Author: Comfy-Org \| ❤️ 137 \| 📥 10 | ComfyUI-native integration of Krea-2 — very early, only 10 downloads, but signals ecosystem tooling support. |

---

## 3. Ecosystem Signal

The most striking trend this week is the **complete dominance of GGUF-quantized community variants** over their base models in download volume. The HauhauCS uncensored Qwen3.6-35B-A3B GGUF has 3.45M downloads versus 4.81M for NVIDIA's NVFP4 version — together, these two variants of the same base model account for over **8.2 million downloads**, dwarfing most other models on the platform. This signals that the open-source inference ecosystem (llama.cpp, Ollama, LM Studio) has become a primary consumption channel, not just a niche.

**Qwen3.5/3.6** is clearly the hottest model family right now, appearing in at least 8 entries across base models, fine-tunes, and quantizations. **Gemma 4** is the second most-active family, with yuxinlu1's coder and agentic variants generating enormous engagement (2,398 and 684 likes respectively). The **GLM** architecture from ZAI is gaining serious momentum — GLM-5.2 leads all models in likes (2,589), and both unsloth and NVIDIA are investing in quantization, suggesting broad ecosystem confidence.

**NVIDIA's presence** is notable: they appear as both a model creator (LocateAnything-3B, Nemotron-ASR, Qwen3.6-NVFP4, GLM-5.2-NVFP4) and an optimizer of third-party models, indicating a strategy of hardware-software co-design. The NVFP4 format is emerging as NVIDIA's answer to GGUF for their GPU ecosystem.

The **"uncensored" trend** continues unabated, with HauhauCS and huihui-ai variants consistently appearing. This reflects growing demand for unrestricted open-weight models, particularly for research and local deployment use cases.

Finally, the **Ornith-1.0** series from deepreinforce-ai (9B, 35B, 397B) represents an interesting new entrant at multiple scales, though adoption is still early outside of GGUF variants.

---

## 4. Worth Exploring

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — The most-liked model this week for a reason. ZAI's DSA (Dynamic Sparse Attention) architecture in GLM-5.2 represents a genuinely novel approach to MoE scaling. With both unsloth and NVIDIA already providing optimized versions, it's becoming the architecture to watch. Worth studying for anyone interested in next-generation MoE design.

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — At only 3B parameters but with 2,383 likes and nearly 500K downloads, this visual grounding model punches far above its weight. It can localize arbitrary objects in images from text descriptions, making it immediately useful for RAG pipelines, image search, and accessibility applications. A perfect example of how small, task-specific models are winning in practice.

3. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — With 2,398 likes and 516K downloads, this community fine-tune demonstrates the power of the composable fine-tuning ecosystem (Fable5 + Composer 2.5). It's a case study in how community innovation on top of open-weight models can outperform proprietary coding assistants, and it runs on consumer hardware via GGUF.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*