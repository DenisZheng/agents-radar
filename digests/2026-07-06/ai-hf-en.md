# Hugging Face Trending Models Digest 2026-07-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-06 02:03 UTC

---

Here is your structured **Hugging Face Trending Models Digest** for **2026-07-06**.

---

### 1. Today’s Highlights

This week’s trending models reveal a clear pivot toward **MoE (Mixture-of-Experts) architecture** and **aggressive local quantization**. **GLM-5.2** from zai-org leads in total likes (3,470) and represents a new frontier in ultra-sparse MoE models (DS-Attention). **Nvidia’s LocateAnything-3B** (2,618 likes) signals growing demand for grounded, task-specific vision-language models. The community is also deeply engaged with **model “abliteration”** (removing safety filters) and **uncensored fine-tunes**, as seen with the *HauhauCS* and *DavidAU* variants. Quantization remains the dominant distribution vector, with **GGUF** models accounting for the vast majority of downloads (e.g., *Qwythos-9B-GGUF* at 1.5M downloads in a single week).

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — *zai-org* | 3,470 likes | 220k downloads  
  A high-sparsity MoE base model (DSA attention) that is trending as the new state-of-the-art for efficient conversational agents.

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — *deepseek-ai* | 390 likes | 12.5k downloads  
  The latest iteration of DeepSeek’s flagship reasoning series, noted for its novel DSpark inference optimization.

- **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)** — *nvidia* | 240 likes | 280k downloads  
  Nvidia’s NVFP4 quantized variant of GLM-5.2, demonstrating that FP4 precision is becoming production-ready for MoE models.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — *HauhauCS* | 2,487 likes | 3M downloads  
  An aggressive, uncensored fine-tune of Qwen3.6 (35B-A3B MoE), dominating downloads this week due to demand for unrestricted reasoning.

- **[DavidAU/Qwen3.5-9B-Claude-4.6-HighIQ-THINKING-HERETIC-UNCENSORED](https://huggingface.co/DavidAU/Qwen3.5-9B-Claude-4.6-HighIQ-THINKING-HERETIC-UNCENSORED)** — *DavidAU* | 153 likes | 54k downloads  
  A niche fine-tune combining Claude lineage with Qwen3.5, optimized for long-chain reasoning without safety guardrails.

- **[deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)** — *deepseek-ai* | 161 likes | 48.7k downloads  
  The faster, lighter sibling of DeepSeek-V4-Pro, targeting high-throughput deployment scenarios.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — *baidu* | 1,750 likes | 1M downloads  
  A general-purpose OCR model that handles unlimited input resolution, trending as the go-to open-source OCR solution.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — *nvidia* | 2,618 likes | 1.2M downloads  
  A 3B vision-language model that can locate any object in an image via text prompts; trending for robotics and RPA use cases.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — *krea* | 515 likes | 99k downloads  
  A turbo-distilled image generation model (Diffusers) based on the Krea-2 family, optimizing for speed over quality.

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** — *Qwen* | 549 likes | 55k downloads  
  A vision-language MoE model explicitly built for agentic workflows (tool use, web browsing), reflecting the rise of agentic LLMs.

#### 🔧 Specialized Models (code, math, medical, embeddings, security)

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — *yuxinlu1* | 2,610 likes | 652k downloads  
  A code-specialized fine-tune of Gemma-4 (12B) using the Fable5 Composer technique; the highest-liked GGUF on the list today.

- **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)** — *BugTraceAI* | 135 likes | 12k downloads  
  A cybersecurity-specific LLM (Qwen3.5 base) fine-tuned for offensive security and vulnerability analysis.

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — *google* | 226 likes | 2.7k downloads  
  A foundation model for tabular data (zero-shot classification/regression), signaling a push beyond NLP and vision into structured data.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — *empero-ai* | 1,557 likes | 1.5M downloads  
  A GGUF-quantized merge of a Claude-thinking fine-tune on Qwen3.5-9B; the #1 most downloaded model this week.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — *deepreinforce-ai* | 731 likes | 394k downloads  
  The GGUF variant of the Ornith-1.0 model family (MIT license), trending for its permissive licensing and strong performance at 35B.

- **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)** — *huihui-ai* | 169 likes | 5.6k downloads  
  An “abliterated” (refusal-trained-removed) version of GLM-5.2 in GGUF format, reflecting demand for minimally guided models.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — *unsloth* | 964 likes | 2.8M downloads  
  The most downloaded model overall (2.8M), a GGUF quantization of Qwen3.6-27B using the MTP (Multi-Token Prediction) variant; easily run via llama.cpp.

### 3. Ecosystem Signal

The ecosystem is undergoing a **MoE consolidation**. Nearly half of the top 30 trending models are Mixture-of-Experts (e.g., GLM-5.2, Qwen3.6-A3B, Ornith-35B). The community is no longer just experimenting with MoE; it is the default architecture for new flagship releases. On the **quantization front**, GGUF dominates distribution (10M+ total downloads across GGUF entries alone), while **NVFP4** emerges as a credible proprietary alternative from Nvidia. The **open-weight trend** is accelerating: GLM-5.2, DeepSeek-V4, and Qwen-AgentWorld are all fully open under permissive licenses, putting increasing pressure on closed models. Simultaneously, there is a notable **“uncensored” and “abliterated” sub-movement**—users are actively redistributing models with safety filters removed, a trend that raises both community enthusiasm and moderation concerns.

### 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — This is the **model to study** for multimodal grounding. At only 3B parameters, it achieves competitive localization accuracy, making it a prime candidate for on-device robotics and visual QA pipelines. Its architecture may influence future lightweight VLM designs.

2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — As the **highest-liked model** of the week, it represents the state of the art in sparse MoE language modeling. It is worth testing for long-context reasoning, and its DSA attention mechanism may provide insights for your own model compression work.

3. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — With **2.8M downloads**, this is the practical winner of the week. If you need a high-quality, locally runnable model for production evaluation or agentic tasks, start here. The Unsloth quantization pipeline it uses is also a reference implementation for efficient GGUF conversion of MoE models.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*