# Hugging Face Trending Models Digest 2026-04-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-19 00:25 UTC

---

Of course. Here is the structured Hugging Face Trending Models Digest for 2026-04-19.

---

### **Hugging Face Trending Models Digest**
*April 19, 2026*

---

#### **Today's Highlights**

The most significant trend this week is the rapid expansion and fine-tuning of Google's Gemma 4 family. The official models, particularly the E4B and 26B variants, are seeing massive adoption, with community versions like "OBLITERATED" and "JANG_4M-CRACK" pushing the boundaries of uncensored and uncapped reasoning. Another key trend is the rise of specialized, high-performance multimodal models from Chinese tech giants like MiniMax, Qwen, and Tencent. Finally, the ecosystem continues to thrive on community-driven quantization efforts from projects like unsloth and Llama.cpp, making these powerful models accessible for local deployment.

---

#### **Trending Models**

##### 🧠 Language Models (LLMs, chat models, instruction-tuned)

*   **zai-org/GLM-5.1** (https://huggingface.co/zai-org/GLM-5.1)
    *   Author: zai-org | Likes: 1,399 | Downloads: 103,847
    *   A new MoE language model from Zhipu AI that's quickly gaining traction, featuring its DSA architecture.
*   **Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled** (https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)
    *   Author: Jackrong | Likes: 2,732 | Downloads: 576,608
    *   A highly popular community distillation project that combines Qwen's base model with the advanced reasoning capabilities of Claude 4.6 Opus.
*   **OBLITERATUS/gemma-4-E4B-it-OBLITERATED** (https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)
    *   Author: OBLITERATUS | Likes: 306 | Downloads: 24,052
    *   An uncensored and abliterated version of Google's Gemma 4 E4B, designed for unfiltered text generation.
*   **dealignai/Gemma-4-31B-JANG_4M-CRACK** (https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)
    *   Author: dealignai | Likes: 1,283 | Downloads: 156,865
    *   A powerful, uncapped, and uncensored variant of the Gemma 4 31B model, optimized for MLX on Apple silicon.

##### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

*   **MiniMaxAI/MiniMax-M2.7** (https://huggingface.co/MiniMaxAI/MiniMax-M2.7)
    *   Author: MiniMaxAI | Likes: 957 | Downloads: 258,064
    *   MiniMax's latest flagship text-generation model, showcasing their progress in large-scale language modeling.
*   **google/gemma-4-31B-it** (https://huggingface.co/google/gemma-4-31B-it)
    *   Author: google | Likes: 2,153 | Downloads: 3,778,070
    *   Google's official image-text-to-text Gemma 4 model, a foundational model for multimodal applications.
*   **tencent/HY-Embodied-0.5** (https://huggingface.co/tencent/HY-Embodied-0.5)
    *   Author: tencent | Likes: 864 | Downloads: 1,454
    *   Tencent's Hunyuan Vision-Language model focused on embodied intelligence, demonstrating strong performance in complex visual tasks.
*   **netflix/void-model** (https://huggingface.co/netflix/void-model)
    *   Author: netflix | Likes: 869 | Downloads: 0
    *   Netflix's proprietary model for advanced video inpainting and editing, capable of removing or altering objects in videos seamlessly.
*   **openbmb/VoxCPM2** (https://huggingface.co/openbmb/VoxCPM2)
    *   Author: openbmb | Likes: 1,108 | Downloads: 35,870
    *   A state-of-the-art multilingual text-to-speech model that supports zero-shot voice cloning, representing a leap in audio synthesis.

##### 🔧 Specialized Models (code, math, medical, embeddings)

*   **nvidia/Lyra-2.0** (https://huggingface.co/nvidia/Lyra-2.0)
    *   Author: nvidia | Likes: 192 | Downloads: 81
    *   NVIDIA's latest research model for generating high-fidelity audio, as detailed in a recent arXiv paper (arXiv:2604.13036).

##### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

*   **unsloth/Qwen3.6-35B-A3B-GGUF** (https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)
    *   Author: unsloth | Likes: 448 | Downloads: 442,900
    *   A quantized version of the Qwen 3.6 MoE model, enabling efficient inference on consumer hardware via GGML/llama.cpp.
*   **k2-fsa/OmniVoice** (https://huggingface.co/k2-fsa/OmniVoice)
    *   Author: k2-fsa | Likes: 641 | Downloads: 957,869
    *   A versatile text-to-speech model supporting multiple languages and advanced features like zero-shot voice cloning and prosody control.
*   **unsloth/MiniMax-M2.7-GGUF** (https://huggingface.co/unsloth/MiniMax-M2.7-GGUF)
    *   Author: unsloth | Likes: 134 | Downloads: 100,683
    *   A GGML-quantized version of MiniMax's M2.7 model, making it accessible for offline use and integration into various applications.

---

#### **Ecosystem Signal**

This week's data paints a clear picture of a maturing and highly competitive AI landscape. **Google's Gemma 4 family** is experiencing explosive growth, both in terms of official releases and community-driven variants, signaling a major push in the open-weight space. This is complemented by strong momentum from **MiniMax** and **Qwen**, who are rapidly advancing their core model families. A significant trend is the proliferation of **fine-tuned and quantized models**. Projects like unsloth and individual creators are actively distributing GGUF versions, specialized uncensored variants, and distilled knowledge, fostering an incredibly vibrant ecosystem of accessibility and customization. While proprietary models like Netflix's `void-model` exist, the open-weight approach, supported by official models from Google, Qwen, and MiniMax, is clearly dominating the download and like metrics, reflecting a strong user preference for open and adaptable solutions.

---

#### **Worth Exploring**

1.  **google/gemma-4-31B-it** (https://huggingface.co/google/gemma-4-31B-it): With over 3.7 million downloads, this is a foundational model in the Gemma 4 suite. Its official status and multimodal (image-text) capabilities make it a prime candidate for building a wide range of interactive applications.
2.  **openbmb/VoxCPM2** (https://huggingface.co/openbmb/VoxCPM2): As a top-ranked text-to-speech model, VoxCPM2 represents the current state-of-the-art in multilingual, zero-shot voice cloning technology. It's a great example of how specialized models are pushing the boundaries of human-AI interaction.
3.  **netflix/void-model** (https://huggingface.co/netflix/void-model): Despite its low download count, this model represents a significant advancement in applied AI for content creation. Studying its capabilities can provide deep insights into the future of video post-production and digital asset management.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*