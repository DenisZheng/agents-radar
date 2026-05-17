# Hugging Face Trending Models Digest 2026-05-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-17 00:34 UTC

---

**Hugging Face Trending Models Digest – May 17, 2026**

---

### **Today’s Highlights**  
The Hugging Face ecosystem continues to see strong momentum in multimodal and generative AI, with DeepSeek-V4-Pro leading weekly likes (3,995) and Google’s Gemma-4-31B-it achieving the highest downloads (9.8M). Multimodal models like Qwen3.6-35B-A3B and MiniCPM-V-4.6 are gaining traction, reflecting growing demand for on-device-capable vision-language systems. Meanwhile, text-to-video models such as Sulphur-2-base and LTX workflows are emerging as key innovation vectors, supported by robust ComfyUI integrations and region-specific optimizations.

---

### **Trending Models**

#### 🧠 **Language Models (LLMs, chat models, instruction-tuned)**
- **deepseek-ai/DeepSeek-V4-Pro** ([link](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro))  
  Author: deepseek-ai | Likes: 3,995 | Downloads: 2.9M  
  A high-performance reasoning-focused LLM that dominates trending due to its advanced inference capabilities and open-weight availability.
  
- **google/gemma-4-31B-it-assistant** ([link](https://huggingface.co/google/gemma-4-31B-it-assistant))  
  Author: google | Likes: 244 | Downloads: 146K  
  An instruction-tuned variant of Google’s Gemma-4 family, optimized for conversational tasks and fine-grained control via any-to-any pipeline.

- **FrontiersMind/Nandi-Mini-600M-Early-Checkpoint** ([link](https://huggingface.co/FrontiersMind/Nandi-Mini-600M-Early-Checkpoint))  
  Author: FrontiersMind | Likes: 78 | Downloads: 8.3K  
  A compact yet innovative text-generation model trained with custom code, showcasing efficient scaling strategies from Indian AI labs.

#### 🎨 **Multimodal & Generation**
- **Qwen/Qwen3.6-35B-A3B** ([link](https://huggingface.co/Qwen/Qwen3.6-35B-A3B))  
  Author: Qwen | Likes: 1,784 | Downloads: 5.2M  
  A powerful MoE-based multimodal model supporting image-text interaction with strong conversational fluency, driving enterprise adoption.

- **openbmb/MiniCPM-V-4.6** ([link](https://huggingface.co/openbmb/MiniCPM-V-4.6))  
  Author: openbmb | Likes: 641 | Downloads: 28K  
  A lightweight, on-device-friendly vision-language model enabling mobile deployment without sacrificing performance.

- **SulphurAI/Sulphur-2-base** ([link](https://huggingface.co/SulphurAI/Sulphur-2-base))  
  Author: SulphurAI | Likes: 1,030 | Downloads: 875K  
  A cutting-edge text-to-video generator leveraging Diffusers and optimized for US-region endpoints, ideal for rapid prototyping.

- **k2-fsa/OmniVoice** ([link](https://huggingface.co/k2-fsa/OmniVoice))  
  Author: k2-fsa | Likes: 891 | Downloads: 2.0M  
  A multilingual zero-shot TTS system enabling voice cloning across languages, widely adopted in global voice synthesis pipelines.

- **TencentARC/Pixal3D** ([link](https://huggingface.co/TencentARC/Pixal3D))  
  Author: TencentARC | Likes: 100 | Downloads: 0  
  First public implementation of image-to-3D generation using novel neural reconstruction techniques, backed by arXiv paper.

#### 🔧 **Specialized Models**
- **microsoft/Fara-7B** ([link](https://huggingface.co/microsoft/Fara-7B))  
  Author: microsoft | Likes: 566 | Downloads: 17K  
  Multimodal model based on Qwen2.5-VL architecture, tailored for Arabic and English understanding with strong visual grounding.

- **jackxinning/Leanly_AI** ([link](https://huggingface.co/jackxinning/Leanly_AI))  
  Author: jackxinning | Likes: 116 | Downloads: 11K  
  Medical-domain QA model fine-tuned on clinical data, supporting both English and Chinese queries.

- **openai/privacy-filter** ([link](https://huggingface.co/openai/privacy-filter))  
  Author: openai | Likes: 1,451 | Downloads: 239K  
  ONNX-compatible token classifier designed to detect and redact sensitive information in user inputs, critical for secure deployments.

#### 📦 **Fine-tunes & Quantizations**
- **unsloth/Qwen3.6-35B-A3B-GGUF** ([link](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GCUF))  
  Author: unsloth | Likes: 1,045 | Downloads: 2.9M  
  High-quality GGUF quantization of Qwen3.6’s MoE variant, optimized for low-latency CPU/GPU inference with minimal overhead.

- **Jiunsong/supergemma4-26b-uncensored-gguf-v2** ([link](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2))  
  Author: Jiunsong | Likes: 607 | Downloads: 274K  
  Uncensored version of Gemma-4 quantized to GGUF format, popular among developers seeking unfiltered interaction.

- **antirez/deepseek-v4-gguf** ([link](https://huggingface.co/antirez/deepseek-v4-gguf))  
  Author: antirez | Likes: 126 | Downloads: 265K  
  Community-sourced GGUF conversion of DeepSeek-V4, enabling offline deployment with llama.cpp compatibility.

---

### **Ecosystem Signal**  
This week underscores a clear shift toward **multimodal generalists**—models capable of handling text, image, audio, and video within unified architectures. The Qwen and Gemma families are dominating both raw performance and community engagement, especially through efficient quantizations (GGUF) by unsloth and third-party contributors. Proprietary models from OpenAI, Google, and Microsoft still lead in enterprise readiness (e.g., privacy-filter), but open-weight alternatives like DeepSeek-V4 and Qwen3.6 are closing the gap rapidly. Notably, **on-device optimization** is becoming a key differentiator, as seen with MiniCPM-V-4.6’s safetensors + on-device tags. Fine-tuning activity remains vibrant, particularly in medical, legal, and regional language domains. Lastly, **video and audio generation** is emerging as the next frontier, with text-to-video models seeing explosive download growth despite modest like counts, signaling strong practical utility.

---

### **Worth Exploring**  
1. **MiniCPM-V-4.6**: Its combination of multimodal capability and on-device efficiency makes it ideal for edge AI applications—especially where privacy or latency matters.
2. **Sulphur-2-base**: As one of the first production-grade text-to-video models with endpoint support, it represents a leap forward in accessible video generation for creators and developers.
3. **OmniVoice**: With 2M+ downloads and zero-shot multilingual voice cloning, this model sets a new benchmark for personalized TTS—perfect for studying how foundation models can be adapted for real-world voice applications.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*