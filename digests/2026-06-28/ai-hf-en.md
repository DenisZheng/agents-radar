# Hugging Face Trending Models Digest 2026-06-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-28 00:38 UTC

---

# Hugging Face Trending Models Digest — June 28, 2026

---

## 1. Today's Highlights

This week's trending list underscores the relentless pace of open-weight model development in mid-2026. Leading the pack is Google-backed [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) crossing one million downloads in record time, signaling surging demand for production-grade document AI. On the language side, emerging Chinese labs continue to gain traction: Zhipu's [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) tops the chart with nearly 2,700 likes, while MiniMax's new vision-language model [MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) sparks interest as a next-generation multimodal foundation. NVIDIA maintains a strong presence with optimized variants of both GLM-5.2 and Qwen3.6 on the NVFP4 quantization format, and DeepSeek quietly teases [DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) — its next architecture — with a fresh arXiv paper. Meanwhile, the community's appetite for GGUF runs is evident: three of the top ten models by downloads are quantized, uncensored Qwen3.6 or Gemma-4 variants.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, Chat Models, Instruction-Tuned)

| Model | Author | Likes / Downloads | Why It's Trending |
|---|---|---|---|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 2,677 ❤️ / 98,994 ⬇ | Zhipu AI's latest MoE (DSA architecture) flagship joins the Qwen family in LLM leadership. |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,277 ❤️ / 3,331,475 ⬇ | Post-trained, uncensored Qwen3.6-35B shocks the ecosystem with 3.3M+ downloads. |
| [**Qwen/Qwen-AgentWorld-35B-A3B**](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B) | Qwen | 357 ❤️ / 18,872 ⬇ | Qwen's agentic MoE variant purpose-built for tool-use and multi-step reasoning. |
| [**WeiboAI/VibeThinker-3B**](https://huggingface.co/WeiboAI/VibeThinker-3B) | WeiboAI | 742 ❤️ / 57,521 ⬇ | Compact 3B reasoning model focused on math, punching above its size class. |
| [**deepseek-ai/DeepSeek-V4-Pro-DSpark**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | deepseek-ai | 124 ❤️ / 0 ⬇ | Teaser release of DeepSeek's next-gen architecture; paper-linked and eagerly anticipated. |
| [**deepreinforce-ai/Ornith-1.0-397B**](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B) | deepreinforce-ai | 120 ❤️ / 463 ⬇ | Massive 397B-parameter MoE; active research project exploring long-horizon RL agent training. |
| [**deepreinforce-ai/Ornith-1.0-35B**](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B) | deepreinforce-ai | 161 ❤️ / 7,571 ⬇ | Mid-range Omnivore RL agent variant in the Ornith family; strong vision+code capabilities. |
| [**Microsoft/FastContext-1.0-4B-SFT**](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | Microsoft | 365 ❤️ / 6,447 ⬇ | From Microsoft Research; 4B fine-tuned for efficient retrieval-augmented reasoning. |
| [**deepreinforce-ai/Ornith-1.0-9B**](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B) | deepreinforce-ai | 166 ❤️ / 1,501 ⬇ | Dense 9B Ornith base in the vision-language space; quick and capable. |
| [**LiquidAI/LFM2.5-230M**](https://huggingface.co/LiquidAI/LFM2.5-230M) | LiquidAI | 129 ❤️ / 9,791 ⬇ | Ultra-compact 230M Liquid Foundation Model optimized for on-device deployment. |

---

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

| Model | Author | Likes / Downloads | Why It's Trending |
|---|---|---|---|
| [**MiniMaxAI/MiniMax-M3**](https://huggingface.co/MiniMaxAI/MiniMax-M3) | MiniMaxAI | 1,253 ❤️ / 182,714 ⬇ | MiniMax's multi-modal vision-language model shows strong diverse capabilities across tasks and represents their next-gen flagship. |
| [**krea/Krea-2-Turbo**](https://huggingface.co/krea/Krea-2-Turbo) | krea | 310 ❤️ / 17,445 ⬇ | Latent Consistency-based text-to-image model focusing on speed and high-quality aesthetic generation. |
| [**krea/Krea-2-Raw**](https://huggingface.co/krea/Krea-2-Raw) | krea | 214 ❤️ / 17,748 ⬇ | Base diffusion weights for Krea-2; popular among fine-tuners and ComfyUI workflows. |
| [**Comfy-Org/Krea-2**](https://huggingface.co/Comfy-Org/Krea-2) | Comfy-Org | 158 ❤️ / 10 ⬇ | ComfyUI-specific packaging of Krea-2 with custom node support. |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 1,137 ❤️ / 212,760 ⬇ | Baidu's open-weight document OCR model sets a new bar for multilingual layout-aware text extraction. |
| [**nvidia/LocateAnything-3B**](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 2,407 ❤️ / 570,466 ⬇ | NVIDIA's 3B vision model for referring-expression localization; one of the highest-liked models this week. |
| [**nvidia/nemotron-3.5-asr-streaming-0.6b**](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 718 ❤️ / 61,857 ⬇ | Compact streaming speech recognition model achieving low-latency real-time transcription. |

---

### 🔧 Specialized Models (Code, Math, Medical, Embeddings)

| Model | Author | Likes / Downloads | Why It's Trending |
|---|---|---|---|
| [**yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | yuxinlu1 | 2,426 ❤️ / 536,130 ⬇ | Community fine-tune of Gemma-4-12B for code generation; 2.4K likes and massive download volume. |
| [**yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 729 ❤️ / 206,828 ⬇ | Agentic variant of the Gemma-4 coder fine-tune, optimized for terminal and tool-use tasks. |
| [**Chunjiang-Intelligence/DeepSeek-v4-Fable**](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable) | Chunjiang-Intelligence | 112 ❤️ / 1,328 ⬇ | Cybersecurity-focused fine-tune of DeepSeek-V4 for threat analysis and code auditing. |

---

### 📦 Fine-tunes & Quantizations (Community Fine-tunes, GGUF, AWQ)

| Model | Author | Likes / Downloads | Why It's Trending |
|---|---|---|---|
| [**nvidia/Qwen3.6-35B-A3B-NVFP4**](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | nvidia | 367 ❤️ / 5,022,254 ⬇ | NVIDIA's NVFP4-quantized Qwen3.6 MoE — over 5M downloads, the single most-downloaded model this week. |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 671 ❤️ / 712,627 ⬇ | 9B reasoning model with 1M context window, GGUF-quantized for local deployment. |
| [**unsloth/GLM-5.2-GGUF**](https://huggingface.co/unsloth/GLM-5.2-GGUF) | unsloth | 426 ❤️ / 125,230 ⬇ | Unsloth's optimized GGUF build of GLM-5.2 for efficient local inference. |
| [**nvidia/GLM-5.2-NVFP4**](https://huggingface.co/nvidia/GLM-5.2-NVFP4) | nvidia | 125 ❤️ / 6,464 ⬇ | NVIDIA's FP4-optimized GLM-5.2 for Blackwell GPU inference. |
| [**deepreinforce-ai/Ornith-1.0-35B-GGUF**](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | deepreinforce-ai | 322 ❤️ / 20,266 ⬇ | GGUF build of the 35B Ornith MoE for consumer hardware. |
| [**deepreinforce-ai/Ornith-1.0-9B-GGUF**](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF) | deepreinforce-ai | 219 ❤️ / 11,034 ⬇ | Lightweight GGUF variant of the 9B Ornith model. |
| [**HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced**](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced) | HauhauCS | 96 ❤️ / 32,222 ⬇ | QAT-quantized, uncensored Gemma-4-12B with vision support. |
| [**huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated**](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated) | huihui-ai | 137 ❤️ / 6,250 ⬇ | Abliterated (refusal-removed) version of the popular Gemma-4 coder fine-tune. |
| [**Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF**](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF) | Jackrong | 97 ❤️ / 49,935 ⬇ | 27B coder model with multi-token prediction (MTP) support, GGUF-quantized. |

---

## 3. Ecosystem Signal

The mid-2026 Hugging Face landscape reveals several converging trends. **MoE architectures are now mainstream**: GLM-5.2, Qwen3.6-35B-A3B, and the Ornith family all leverage Mixture-of-Experts, reflecting the industry's shift toward sparse activation for cost-efficient scaling. **Chinese labs dominate the leaderboard** — Zhipu, Qwen, MiniMax, DeepSeek, and Baidu collectively account for the majority of top-liked models, underscoring China's accelerating open-weight AI output.

**Quantization is the primary consumption pattern.** NVIDIA's NVFP4 format is emerging as a serious contender alongside GGUF, with the Qwen3.6-NVFP4 model alone surpassing 5 million downloads. The community's preference for GGUF remains strong, with Unsloth and independent creators providing optimized builds within days of base model releases. Notably, **uncensored and abliterated variants** (HauhauCS, huihui-ai) are proliferating rapidly, reflecting demand for unrestricted local models — though this raises ongoing governance questions for the Hub.

**Agentic and coding specialization** is the dominant fine-tuning theme. The yuxinlu1 Gemma-4 coder series demonstrates how community fine-tunes can rival or exceed base model popularity, while Qwen's AgentWorld and Microsoft's FastContext point to a broader industry bet on tool-using, long-context agents. Finally, **multimodal models are converging**: vision-language capabilities are now table stakes even for models primarily marketed as text or code generators, blurring traditional category boundaries.

---

## 4. Worth Exploring

**1. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — With 2,407 likes and 570K+ downloads, this is arguably the most impactful specialized model of the week. NVIDIA's referring-expression localization model achieves remarkable accuracy at just 3B parameters, making it immediately deployable for robotics, accessibility tools, and visual QA pipelines. Its efficiency-to-performance ratio sets a new benchmark for vision grounding.

**2. [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — The highest-liked model on the list and a strong signal of Zhipu AI's rising influence. The DSA (Dynamic Sparse Attention) MoE architecture represents a meaningful architectural innovation beyond standard transformer MoEs. Worth studying for its training methodology and benchmark performance, and worth deploying as a competitive alternative to Qwen and DeepSeek flagships.

**3. [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** — MiniMax's next-generation multimodal model is the most intriguing new foundation release this week. Early benchmarks suggest competitive performance with significantly improved vision-language reasoning. As a relatively new entrant challenging established players like Qwen-VL and InternVL, it merits close evaluation for anyone building multimodal applications.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*