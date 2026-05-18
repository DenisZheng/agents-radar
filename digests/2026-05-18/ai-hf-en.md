# Hugging Face Trending Models Digest 2026-05-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-18 00:35 UTC

---

**Hugging Face Trending Models Digest – May 18, 2026**

---

### **Today's Highlights**  
The ecosystem is seeing strong momentum in open-weight multimodal and generative models, with DeepSeek-V4-Pro leading likes (4,010) due to its advanced reasoning capabilities. Qwen3.6 variants dominate downloads, reflecting continued interest in large-scale instruction-tuned and MoE architectures. Notably, ZAYA1-8B emerges as a new open research model from Zyphra, signaling growing investment in specialized reasoning models. Text-to-video and image-to-video pipelines are gaining traction, with SulphurAI’s Sulphur-2-base and TenStrip’s LTX2.3-10Eros drawing significant attention for high-fidelity generation.

---

### **Trending Models**

#### 🧠 **Language Models (LLMs, chat models, instruction-tuned)**  
- **deepseek-ai/DeepSeek-V4-Pro** ([link](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)) — deepseek-ai | 4,010 likes | 3.1M downloads  
  A cutting-edge text-generation model with advanced reasoning, widely adopted in enterprise and research settings.
- **Qwen/Qwen3.6-27B** ([link](https://huggingface.co/Qwen/Qwen3.6-27B)) — Qwen | 1,315 likes | 3.4M downloads  
  A highly capable multimodal conversational model optimized for both performance and efficiency.
- **google/gemma-4-31B-it** ([link](https://huggingface.co/google/gemma-4-31B-it)) — Google | 2,666 likes | 9.9M downloads  
  An instruction-tuned version of Gemma4, praised for strong multilingual and reasoning abilities.

#### 🎨 **Multimodal & Generation (image, video, audio, text-to-X)**  
- **SulphurAI/Sulphur-2-base** ([link](https://huggingface.co/SulphurAI/Sulphur-2-base)) — SulphurAI | 1,068 likes | 970K downloads  
  State-of-the-art open-weight text-to-video generator with high-resolution output and regional deployment support.
- **HiDream-ai/HiDream-O1-Image** ([link](https://huggingface.co/HiDream-ai/HiDream-O1-Image)) — HiDream-ai | 376 likes | 14K downloads  
  Dual-pipeline model supporting both image-text-to-image and image-text-to-text tasks with strong visual fidelity.
- **ResembleAI/Dramabox** ([link](https://huggingface.co/ResembleAI/Dramabox)) — ResembleAI | 134 likes | 936 downloads  
  Specialized TTS model focused on voice cloning and expressive speech synthesis for theatrical applications.

#### 🔧 **Specialized Models (code, math, medical, embeddings)**  
- **microsoft/Fara-7B** ([link](https://huggingface.co/microsoft/Fara-7B)) — Microsoft | 573 likes | 17K downloads  
  Multimodal vision-language model designed for document understanding and cross-modal reasoning.
- **jackxinning/Leanly_AI** ([link](https://huggingface.co/jackxinning/Leanly_AI)) — jackxinning | 116 likes | 9K downloads  
  Medical-domain QA model fine-tuned for clinical decision support with bilingual (EN/ZH) capabilities.

#### 📦 **Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)**  
- **unsloth/Qwen3.6-35B-A3B-MTP-GGUF** ([link](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)) — unsloth | 212 likes | 181K downloads  
  Quantized MoE variant of Qwen3.6 optimized for low-memory inference using Unsloth’s efficient packing.
- **Jiunsong/supergemma4-26b-uncensored-gguf-v2** ([link](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)) — Jiunsong | 617 likes | 269K downloads  
  Community-released uncensored GGUF version enabling unrestricted use in creative or research contexts.

---

### **Ecosystem Signal**  

This week’s trends highlight a clear shift toward **open-weight, multimodal, and task-specific generative models**. DeepSeek and Qwen continue to lead in popularity, driven by their balance of performance, openness, and compatibility with inference frameworks like vLLM and LM Studio. The proliferation of **GGUF quantizations**—especially from unsloth and community contributors—demonstrates strong demand for CPU/GPU-efficient deployments outside cloud environments. Meanwhile, **multimodal pipelines** (text-to-video, image-to-3D, TTS) are rapidly evolving, with companies like SulphurAI and Lightricks pushing boundaries in generative media. Proprietary models remain present but are increasingly complemented by open alternatives, suggesting a maturation toward hybrid ecosystems where open weights enable customization while closed systems offer polished APIs.

---

### **Worth Exploring**  

1. **Zyphra/ZAYA1-8B** ([link](https://huggingface.co/Zyphra/ZAYA1-8B)) — This newly released open-research model represents a step forward in structured reasoning; its arXiv citation (2605.05365) signals academic rigor and potential impact in logical inference tasks.

2. **TencentARC/Pixal3D** ([link](https://huggingface.co/TencentARC/Pixal3D)) — Early-stage yet promising image-to-3D pipeline backed by Tencent’s research arm; ideal for studying novel geometry-aware generation techniques.

3. **SulphurAI/Sulphur-2-base** ([link](https://huggingface.co/SulphurAI/Sulphur-2-base)) — One of the most downloaded open text-to-video models, offering strong baseline quality for prototyping generative video workflows at scale.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*