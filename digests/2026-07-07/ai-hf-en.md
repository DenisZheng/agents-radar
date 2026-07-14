# Hugging Face Trending Models Digest 2026-07-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-07 01:59 UTC

---

Here is the structured Hugging Face Trending Models Digest for **2026-07-07**.

---

## Hugging Face Trending Models Digest – July 7, 2026

### 1. Today's Highlights

The Hugging Face ecosystem is dominated by a major surge in **uncensored and abliterated fine-tunes** of Qwen and GLM family models, with several GGUF quantizations topping the download charts. NVIDIA is making a strong push with specialized vision and tabular models, releasing both `LocateAnything-3B` and a new FP4 quantized `Qwen3.6-27B`. Google’s entry into tabular zero-shot learning with `TabFM-1.0` signals a growing trend toward foundation models for structured data. Meanwhile, the **Mixture-of-Experts (MoE)** architecture continues to dominate large-scale language model releases, with models like `Leanstral-1.5-119B-A6B` and `Ornith-1.0-35B` emphasizing efficiency over raw parameter count.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – zai-org | Likes: 3,531 | Downloads: 231,218  
  A conversational MoE model with high community engagement, trending due to its strong reasoning benchmarks and an active ecosystem of abliterated fine-tunes.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** – deepreinforce-ai | Likes: 759 | Downloads: 436,780  
  A 35B MoE model (Qwen 3.5 based) quantized via GGUF, trending for its efficient inference and MIT license, making it ideal for local deployment.

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** – deepseek-ai | Likes: 409 | Downloads: 14,276  
  The latest in DeepSeek’s V4 line, featuring DSpark acceleration; trending due to its cutting-edge reasoning capabilities and accompanying arXiv paper.

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** – meituan-longcat | Likes: 114 | Downloads: 43  
  Meituan’s long-context conversational model, gaining attention for its extended context window and industrial use-case origins.

- **[nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16)** – nvidia | Likes: 126 | Downloads: 10,766  
  A two-tower MoE base model from NVIDIA, notable for its architecture innovation in separating retrieval and generation paths.

- **[internscience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** – InternScience | Likes: 345 | Downloads: 8,766  
  A Qwen 3.5 MoE variant optimized for agentic tasks, trending in the AI agent development community.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – nvidia | Likes: 2,635 | Downloads: 1,340,559  
  A feature-extraction vision model for object localization, trending due to NVIDIA’s brand trust and its wide applicability in robotics and AR.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** – baidu | Likes: 1,793 | Downloads: 1,070,230  
  An image-text-to-text model for unlimited-scope OCR; trending because of Baidu’s production-grade quality and its utility in document processing.

- **[Krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** – krea | Likes: 529 | Downloads: 109,470  
  A distilled, turbo version of Krea-2 for text-to-image generation, popular among creatives seeking faster inference.

- **[eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B)** – eric-venti-seeds | Likes: 79 | Downloads: 0  
  A niche LoRA for controlling lighting direction in Flux-based image generation; interesting for specialized creative workflows.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – HauhauCS | Likes: 2,529 | Downloads: 2,910,241  
  An uncensored, aggressively fine-tuned Qwen 3.6 MoE vision model; trending for high download volume and community debate around safety.

#### 🔧 Specialized Models (code, math, medical, embeddings)

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** – google | Likes: 257 | Downloads: 7,036  
  A zero-shot tabular classification/regression transformer, signaling Google’s bet on foundation models for structured data.

- **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)** – nationaldesignstudio | Likes: 136 | Downloads: 3,821  
  A BERT-based ONNX/Transformers.js model for PII detection, trending for privacy compliance use in edge deployments.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** – froggeric | Likes: 698 | Downloads: 0  
  Not a model, but a resource pack fixing Qwen chat templates; trending as a critical utility for MLX and llama.cpp users.

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** – yuxinlu1 | Likes: 2,623 | Downloads: 664,319  
  A GGUF quantized coding model based on Gemma 4, popular for its specialized coding performance and local deployment efficiency.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** – yuxinlu1 | Likes: 1,051 | Downloads: 370,884  
  An agentic fine-tune of Gemma 4, optimized for terminal-use agents; trending in the agentic coding tool space.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – empero-ai | Likes: 1,642 | Downloads: 1,617,508  
  A 1M-step fine-tune of Qwen 3.5 with Claude-style data, then quantized to GGUF; trending due to exceptional chat quality.

- **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)** – huihui-ai | Likes: 177 | Downloads: 6,660  
  An abliterated, GGUF version of GLM 5.2; popular in communities seeking uncensored conversation models.

- **[Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF)** – Jackrong | Likes: 151 | Downloads: 126,831  
  A multi-token prediction (MTP) variant of Qwen 3.6 for coding, quantized to GGUF; trending for its speed advantage in code generation.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** – unsloth | Likes: 974 | Downloads: 2,818,499  
  Unsloth’s GGUF quantization of Qwen 3.6 27B with MTP; trending for being the most downloaded model today, thanks to its ease of use.

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** – nvidia | Likes: 290 | Downloads: 430,676  
  NVIDIA’s FP4 quantization of Qwen 3.6, demonstrating 4-bit inference at scale; trending as a reference for hardware-optimized deployment.

### 3. Ecosystem Signal

The week’s trends confirm several major shifts. **MoE architectures** are now the default: nearly every model above 20B parameters uses a mixture of experts (e.g., `Ornith-1.0-35B`, `Leanstral-1.5-119B-A6B`, `GLM-5.2`). The **Qwen 3.5/3.6 family** has become the dominant base for community fine-tuning, surpassing Llama in download volume across GGUF and uncensored variants. **GGUF quantization** is the preferred format for local inference, with models like `Qwen3.6-27B-MTP-GGUF` exceeding 2.8 million downloads. **Uncensored and abliterated** model variants continue to grow in popularity, reflecting a persistent community demand for less restricted AI behavior. Meanwhile, **NVIDIA** is investing heavily in the open-weight ecosystem, releasing both highly specialized models (`LocateAnything-3B`) and optimized inference formats (`NVFP4`). On the frontier, **DeepSeek-V4-Pro** and **Leanstral-1.5** represent the cutting edge of reasoning and efficiency, respectively.

### 4. Worth Exploring

1. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** – Highly recommended for local coding assistants. With 2.6k likes and proven performance, it represents the best balance of quality and efficiency in the coding model space.

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – A must-try for any computer vision or robotics project. Its 2.6k likes and dedicated feature-extraction pipeline make it a practical, versatile tool for object localization.

3. **[unslooth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** – As the most downloaded model today, it is the de-facto standard for running Qwen 3.6 locally. Worth studying for its quantization quality and inference speed.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*