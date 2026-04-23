# Hugging Face Trending Models Digest 2026-04-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-23 00:29 UTC

---

**Hugging Face Trending Models Digest – April 23, 2026**

---

### **Today's Highlights**  
The Hugging Face ecosystem continues to see explosive growth in multimodal and instruction-tuned models, with Google’s Gemma 4 series leading downloads across both text and vision tasks. Qwen’s latest MoE architectures are gaining strong traction, especially in quantized and community-distilled variants. Unsloth’s GGUF optimizations have become a major force, driving massive adoption of large models on consumer hardware. Meanwhile, specialized applications like privacy filtering (OpenAI) and embodied AI (Tencent) signal growing interest in real-world deployment scenarios.

---

### **Trending Models**

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **zai-org/GLM-5.1** ([link](https://huggingface.co/zai-org/GLM-5.1)) — zai-org | 1,470 likes | 170,511 downloads  
  A high-performance GLM-based conversational LLM with MoE architecture, gaining attention for its efficiency and strong reasoning capabilities.
- **MiniMaxAI/MiniMax-M2.7** ([link](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)) — MiniMaxAI | 1,033 likes | 416,155 downloads  
  A commercial-grade conversational model optimized for enterprise use, reflecting rising demand for proprietary yet accessible LLMs.
- **Qwen/Qwen3.6-27B** ([link](https://huggingface.co/Qwen/Qwen3.6-27B)) — Qwen | 408 likes | 0 downloads  
  A dense variant of the Qwen3.6 family focused on balanced performance and accessibility, though not yet widely downloaded.

#### 🎨 Multimodal & Generation
- **google/gemma-4-E4B-it** ([link](https://huggingface.co/google/gemma-4-E4B-it)) — google | 797 likes | 2,793,042 downloads  
  An any-to-any Gemma 4 model supporting image-text interaction, driving significant engagement due to Google’s open-weight strategy and strong base performance.
- **tencent/HY-World-2.0** ([link](https://huggingface.co/tencent/HY-World-2.0)) — tencent | 552 likes | 0 downloads  
  A cutting-edge world model capable of generating 3D content from images, representing Tencent’s push into embodied AI and spatial understanding.
- **baidu/ERNIE-Image-Turbo** ([link](https://huggingface.co/baidu/ERNIE-Image-Turbo)) — baidu | 348 likes | 6,742 downloads  
  A fast, Apache-licensed text-to-image model emphasizing speed without sacrificing quality—appealing to developers prioritizing low-latency inference.

#### 🔧 Specialized Models
- **openai/privacy-filter** ([link](https://huggingface.co/openai/privacy-filter)) — openai | 269 likes | 3 downloads  
  A token-classification model designed to detect and redact private information in user inputs, highlighting growing regulatory and safety concerns.
- **nvidia/Lyra-2.0** ([link](https://huggingface.co/nvidia/Lyra-2.0)) — nvidia | 256 likes | 252 downloads  
  A research-focused region-aware model tied to arXiv paper 2604.13036, suggesting early-stage exploration in geolocation-sensitive AI.

#### 📦 Fine-tunes & Quantizations
- **unsloth/Qwen3.6-35B-A3B-GGUF** ([link](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)) — unsloth | 670 likes | 1,112,454 downloads  
  The top-downloaded model today: a GGUF-optimized version of Qwen’s MoE architecture enabling efficient local deployment.
- **HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive** ([link](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)) — HauhauCS | 456 likes | 841,003 downloads  
  An uncensored, abliterated fine-tune of Gemma 4 that removes safety guardrails—popular among users seeking unfiltered behavior.
- **dealignai/Gemma-4-31B-JANG_4M-CRACK** ([link](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)) — dealignai | 1,333 likes | 170,390 downloads  
  A highly liked MLX-optimized version of Gemma 4 with aggressive abliteration, enabling fast on-device inference via Apple Silicon.

---

### **Ecosystem Signal**  
The dominant trend is the rapid maturation of **MoE architectures**, particularly from Qwen and GLM lineages, which offer scalable performance at lower cost per token. Open-weight models continue to outpace proprietary ones in download volume, with **Google’s Gemma 4** and **Qwen** leading the pack—demonstrating that transparency and licensing freedom drive adoption. The surge in **GGUF quantization** (especially via Unsloth and community forks) underscores democratization of large models on consumer hardware. Additionally, there’s a clear niche for **“uncensored” or abliterated variants**, indicating demand for customization beyond safety defaults. Companies like Tencent and Baidu are investing heavily in **multimodal generation**, while OpenAI signals enterprise-grade utility through tools like privacy filters. Overall, the ecosystem is shifting toward modular, efficient, and deployable AI components.

---

### **Worth Exploring**  
1. **google/gemma-4-E4B-it** ([link](https://huggingface.co/google/gemma-4-E4B-it)) — This any-to-any model represents a major milestone in open-weight multimodal reasoning; its massive download count reflects both technical excellence and strategic open release by Google.
2. **zai-org/GLM-5.1** ([link](https://huggingface.co/zai-org/GLM-5.1)) — As a high-efficiency MoE conversational model, it offers a compelling balance between capability and cost—ideal for studying modern LLM design patterns.
3. **unsloth/Qwen3.6-35B-A3B-GGUF** ([link](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)) — Its unprecedented download numbers highlight the importance of quantization frameworks; examining how Unsloth optimizes inference could inform future deployment strategies.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*