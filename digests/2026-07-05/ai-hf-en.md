# Hugging Face Trending Models Digest 2026-07-05

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-05 01:56 UTC

---

Here is the **Hugging Face Trending Models Digest** for **2026-07-05**.

---

## 1. Today's Highlights

The Hugging Face Hub is dominated by a major Qwen 3.5/3.6 ecosystem surge, with both official releases and a massive wave of community fine-tunes and quantizations driving adoption. NVIDIA is making a strong push with enterprise-ready optimized models like `Qwen3.6-27B-NVFP4` and the innovative `LocateAnything-3B` for spatial reasoning, while Google and Baidu contribute with specialized tools for tabular data and OCR, respectively. The open-weight community remains hyperactive, with high-download GGUF variants of Gemma 4, Qwen MoE, and Claude-distilled models indicating a strong preference for local, quantized inference. A notable trend is the rise of **multi-modal MoE** architectures (e.g., 35B-A3B, 119B-A6B) as the new standard for balancing performance and efficiency.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** by zai-org | 3,399 likes, 208,920 downloads  
  A top-tier conversational MoE model from Zhipu AI, trending for its strong Chinese/English performance and high community engagement.

- **[DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** by deepseek-ai | 370 likes, 10,306 downloads  
  The latest flagship reasoning model from DeepSeek, gaining attention for its advanced inference capabilities and accompanying research paper (arxiv:2606.19348).

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** by Qwen | 534 likes, 50,188 downloads  
  A specialized agentic MoE model (35B total, 3B active) from the Qwen team, designed for autonomous tool use and multi-step reasoning tasks.

- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** by mistralai | 100 likes, 4 downloads  
  Mistral's latest efficient MoE model (119B total, 6B active), a fine-tune of their earlier Leanstral-2603, optimized for vLLM deployment.

- **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)** by AliesTaha | 120 likes, 0 downloads  
  A Qwen3-based instruction-tuned model, exploring trace-based reasoning for improved logical consistency.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** by nvidia | 2,604 likes, 1,194,542 downloads  
  A 3B image-text-to-text model for precise object localization and spatial understanding, trending for its utility in robotics and vision pipelines.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** by baidu | 1,714 likes, 988,379 downloads  
  A versatile OCR model handling unlimited-length text in images, widely adopted for document digitization and automation tasks.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** by krea | 496 likes, 89,384 downloads  
  A fast distilled text-to-image model based on Krea-2-Raw, popular for rapid creative prototyping and real-time generation.

- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** by fal | 157 likes, 0 downloads  
  A LoRA adapter for LTX-2.3 video model enabling photorealistic 3D-aware video generation, new and intriguing for creators.

### 🔧 Specialized Models (code, math, medical, embeddings, security)

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** by google | 196 likes, 1,177 downloads  
  Google's foundational tabular model for zero-shot classification and regression, a significant step toward generalist tabular AI.

- **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)** by BugTraceAI | 132 likes, 12,001 downloads  
  A Qwen3-based model fine-tuned for offensive security and vulnerability analysis, representing the growing cybersecurity AI niche.

- **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)** by nationaldesignstudio | 123 likes, 1,881 downloads  
  A lightweight ONNX/BERT model for token classification (PII detection), deployable via Transformers.js for privacy-preserving client-side use.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** by HauhauCS | 2,454 likes, 2,993,053 downloads  
  An uncensored, aggressively fine-tuned Qwen3.6 MoE model in GGUF format, the most downloaded model this week, driven by demand for unrestrained local chat.

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** by yuxinlu1 | 2,595 likes, 641,260 downloads  
  A highly optimized GGUF quantization of a Gemma 4 coder fine-tune for reasoning and code generation, trending for its strong local performance.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** by empero-ai | 1,461 likes, 1,464,047 downloads  
  A GGUF-quantized model distilling Claude-style reasoning into a 9B architecture, extremely popular for local roleplay and creative writing.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** by yuxinlu1 | 1,010 likes, 342,752 downloads  
  An agentic variant of Gemma 4 tuned for terminal and tool use, optimized via composer technique for multi-agent workflows.

## 3. Ecosystem Signal

The ecosystem is converging on **Mixture-of-Experts (MoE) architectures** as the dominant paradigm for both cloud and edge deployment, with entries like `Qwen3.6-35B-A3B`, `GLM-5.2`, and `Leanstral-1.5-119B-A6B` all activating only a fraction of their parameters. **Qwen** has solidified its position as the most popular base model family for community fine-tuning, overtaking Llama in this cycle, with variants spanning uncensored, agentic, coding, and security applications. **NVIDIA** is aggressively pushing **FP4 quantization** (`NVFP4`) as a new standard for high-throughput inference, while **GGUF** remains the format of choice for the open-weight local community, as evidenced by models exceeding 1 million downloads. A notable undercurrent is the rise of **agentic fine-tunes** (e.g., `Qwen-AgentWorld`, `gemma-4-agentic`), signaling that the next phase of LLM adoption is moving beyond chat toward autonomous task execution.

## 4. Worth Exploring

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – A rare combination of high download volume (1M+) and a genuinely novel capability (spatial localization). This is a must-try for anyone building vision pipelines, robotics, or document parsing systems.

2.  **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** – A foundational model for tabular data represents a paradigm shift away from gradient-boosted trees. It is worth studying for zero-shot classification/regression on structured data without task-specific training.

3.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive-GGUF](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – With nearly **3 million downloads** in a single week, this model is the strongest signal of community demand for unrestricted, locally-run MoE models. It is the reference point for understanding the current open-weight fine-tuning landscape.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*