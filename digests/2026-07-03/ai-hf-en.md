# Hugging Face Trending Models Digest 2026-07-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-03 01:51 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-03

## Today's Highlights

This week's trending models reveal a strong convergence of vision-language capabilities and MoE architectures, with Qwen 3.5/3.6 and GLM-5.2 dominating the ecosystem. The emergence of "AgentWorld" from Qwen and specialized agentic models from InternScience signals growing interest in autonomous AI agents built on MoE backbones. Community quantization activity remains intense, particularly around uncensored variants and coding-specialized GGUF releases. Notably, NVIDIA's LocateAnything-3B (2.6K likes, 1M downloads) stands out as the top multimodal model, while Baidu's Unlimited-OCR demonstrates enterprise interest in production-grade OCR pipelines. The Ornith family from deepreinforce-ai shows strong adoption across three parameter scales (9B, 35B, 397B), suggesting a diversified user base from local deployment to cloud-scale inference.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 3,256 likes | 176K downloads
  A large MoE-based conversational model from Zhipu AI, trending as the highest-liked LLM this week with strong community interest in its DSA architecture.

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — deepseek-ai | 303 likes | 8K downloads
  The latest frontier model from DeepSeek with a companion arXiv paper (2606.19348), attracting attention from researchers and enterprise users.

- **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)** — deepreinforce-ai | 196 likes | 7K downloads
  A massive 397B MoE model based on Qwen3.5, representing the upper end of the Ornith family's parameter range for cloud-scale deployment.

- **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)** — LiquidAI | 192 likes | 26K downloads
  A compact 230M parameter model from Liquid AI, gaining traction for edge and low-resource deployment scenarios.

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** — Qwen | 511 likes | 39K downloads
  Qwen's specialized agent framework model with 35B total parameters (3B active), designed for autonomous task completion and tool use.

- **[InternScience/Agents-A1](https://ge.huggingface.co/InternScience/Agents-A1)** — InternScience | 182 likes | 1.5K downloads
  An MoE-based agent model optimized for multi-step reasoning and tool orchestration, signaling the agentic AI trend.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia | 2,573 likes | 1M downloads
  NVIDIA's 3B parameter vision-language model for open-vocabulary object localization, topping the multimodal charts with massive adoption.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 1,256 likes | 1.25M downloads
  A quantized GGUF version of a Qwen3.5-based vision-language model, combining reasoning with image understanding in a local-deployable format.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 1,652 likes | 758K downloads
  Baidu's production-grade OCR model supporting unlimited document types, trending for enterprise document processing workflows.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — krea | 462 likes | 70K downloads
  A fast text-to-image generation model built on Krea-2-Raw, optimized for real-time creative applications.

- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** — fal | 145 likes | 0 downloads (new)
  A LoRA adapter for LTX video models enabling 3D-realistic video generation, despite zero downloads (likely just uploaded).

- **[Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2)** — Comfy-Org | 231 likes | 10 downloads
  ComfyUI-compatible version of the Krea-2 model, indicating strong pipeline integration demand.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — yuxinlu1 | 2,573 likes | 614K downloads
  A GGUF-quantized Gemma-4 coding model with composition fine-tuning, one of the week's highest-rated models for code generation.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — yuxinlu1 | 962 likes | 314K downloads
  A Gemma-4 variant specifically tuned for terminal-based agentic workflows, bridging code generation with autonomous execution.

- **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)** — BugTraceAI | 121 likes | 8K downloads
  A cybersecurity-focused 27B model quantized to Q6, specialized in offensive security analysis and vulnerability detection.

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — google | 118 likes | 89 downloads
  Google's foundational model for tabular data classification and regression, supporting zero-shot inference on structured data.

- **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)** — nationaldesignstudio | 104 likes | 790 downloads
  A BERT-based ONNX model for PII detection and token classification, optimized for Transformers.js browser deployment.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 2,396 likes | 3.08M downloads
  The week's highest-downloaded model, an uncensored GGUF variant of Qwen3.6 MoE with aggressive alignment removal, driving massive community adoption for unrestricted use cases.

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** — nvidia | 210 likes | 27K downloads
  NVIDIA's FP4 quantized version of Qwen3.6 using Model Optimizer, targeting efficient inference on NVIDIA hardware.

- **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)** — nvidia | 208 likes | 160K downloads
  FP4 quantization of GLM-5.2 by NVIDIA, enabling efficient deployment of this large MoE model on enterprise GPU infrastructure.

- **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)** — huihui-ai | 135 likes | 2.6K downloads
  An "abliterated" (safety-removed) GGUF variant of GLM-5.2, using Unsloth for efficient quantization.

- **[Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF)** — Jackrong | 117 likes | 30K downloads
  A coding-specialized GGUF quantization of Qwen3.6 MoE with Multi-Task Prediction, optimized for llama.cpp inference.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — deepreinforce-ai | 658 likes | 285K downloads
  GGUF quantization of the Ornith 35B model, enabling local deployment with MIT license and endpoint compatibility.

- **[deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)** — deepreinforce-ai | 397 likes | 255K downloads
  The 9B sibling of the Ornith GGUF family, popular for lightweight local deployment with good performance.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** — empero-ai | 645 likes | 125K downloads
  The non-quantized base version of the trending Qwythos vision-language model, likely used as source for the GGUF variant.

## Ecosystem Signal

The model ecosystem is clearly converging around **Mixture-of-Experts (MoE) architectures**, with GLM-5.2, Qwen 3.5/3.6, Ornith, and DeepSeek-V4 all employing MoE designs. The **Qwen family** (3.5 → 3.6) shows the most momentum, spawning dozens of community fine-tunes and quantizations—particularly the "uncensored" variant from HauhauCS which achieved 3M+ downloads in a single week. **NVIDIA's ModelOpt quantization pipeline** (NVFP4) is emerging as a de facto standard for enterprise GPU deployment, with both Qwen and GLM receiving official FP4 variants.

The **Gemma-4 ecosystem** is growing steadily through community fine-tunes, especially for coding and agentic tasks. Meanwhile, **DeepSeek-V4** continues to attract research attention with its accompanying arXiv publication. The **Ornith family** from deepreinforce-ai demonstrates successful multi-scale deployment strategy (9B/35B/397B) with MIT licensing enabling commercial use. Notably, **Baidu's Unlimited-OCR** signals that Chinese tech giants are actively open-sourcing production vision systems, competing with NVIDIA's LocateAnything for multimodal dominance.

## Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — With 2.6K likes and 1M downloads in its first week, this 3B vision-language model for open-vocabulary localization is the breakout multimodal hit. Worth studying for its efficient architecture and strong zero-shot localization capabilities.

2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — While controversial, this model's 3M+ downloads make it the most adopted model this week. It represents an important data point about community demand for unrestricted models, and its aggressive fine-tuning approach is worth analyzing for safety research.

3. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — Google's foundational model for tabular data is a potentially transformative release. Most LLM trends focus on text and vision, but structured data remains the backbone of enterprise AI. This model's zero-shot classification capabilities could reshape how organizations approach tabular ML.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*