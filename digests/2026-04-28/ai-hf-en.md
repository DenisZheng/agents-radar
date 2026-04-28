# Hugging Face Trending Models Digest 2026-04-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-28 00:30 UTC

---

Of course! Here is a structured Hugging Face Trending Models Digest based on the provided data.

***

### Hugging Face Trending Models Digest
*April 28, 2026*

---

### 1. Today's Highlights

The ecosystem continues to see a surge in highly capable open-weight models. DeepSeek's new **DeepSeek-V4-Pro** leads the pack with over 3,000 likes, demonstrating strong community interest in their latest reasoning model. A major trend is the proliferation of quantized versions, with **Qwen/Qwen3.6-35B-A3B** and its GGUF counterpart seeing millions of downloads, highlighting the demand for efficient deployment. Furthermore, proprietary models from OpenAI and Google are also gaining traction, as seen with the **openai/privacy-filter** and the popular **google/gemma-4-31B-it**, signaling that both open-source and closed-source models have a place in the market.

---

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

*   **zai-org/GLM-5.1** (https://huggingface.co/zai-org/GLM-5.1): An open-source MoE model with strong performance in conversational tasks, gaining significant attention with over 1,500 likes.
*   **MiniMaxAI/MiniMax-M2.7** (https://huggingface.co/MiniMaxAI/MiniMax-M2.7): A proprietary, conversational LLM from MiniMaxAI, showing impressive adoption with over 490k downloads and 1,074 likes.
*   **moonshotai/Kimi-K2.6** (https://huggingface.co/moonshotai/Kimi-K2.6): A powerful multimodal model from Moonshot AI, notable for its use of compressed-tensors for efficiency, with over 1,099 likes and nearly 443k downloads.
*   **tencent/Hy3-preview** (https://huggingface.co/tencent/Hy3-preview): Tencent's preview of their Hy3 text-generation model, part of their broader suite of language technologies.
*   **OBLITERATUS/gemma-4-E4B-it-OBLITERATED** (https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED): A community-modified, uncensored version of Google's Gemma 4 model, appealing to users seeking alternative content policies.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

*   **Qwen/Qwen3.6-27B** (https://huggingface.co/Qwen/Qwen/Qwen3.6-27B): A high-performing image-text-to-text model from Qwen, leading in its category with over 399k downloads.
*   **Qwen/Qwen3.6-35B-A3B** (https://huggingface.co/Qwen/Qwen/Qwen3.6-35B-A3B): A larger Mixture-of-Experts variant of Qwen3.6-27B, achieving massive download numbers (over 1.3 million) due to its efficiency and performance.
*   **google/gemma-4-31B-it** (https://huggingface.co/google/gemma-4-31B-it): A powerful, open multimodal model from Google, generating significant buzz with over 2,300 likes and more than 6.3 million downloads.
*   **baidu/ERNIE-Image** (https://huggingface.co/baidu/ERNIE-Image): Baidu's ERNIE Image model for text-to-image generation, available under an Apache-2.0 license.
*   **tencent/HY-World-2.0** (https://huggingface.co/tencent/HY-World-2.0): Tencent's advanced model for image-to-3D generation, showcasing progress in creative AI applications.

#### 🔧 Specialized Models (code, math, medical, embeddings)

*   **inclusionAI/LLaDA2.0-Uni** (https://huggingface.co/inclusionAI/LLaDA2.0-Uni): A specialized MoE model designed for any-to-any modality processing, representing a niche but advanced capability.
*   **facebook/sapiens2** (https://huggingface.co/facebook/sapiens2): Facebook's human-centric vision model, focused on detailed understanding of human scenes and objects.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

*   **unsloth/Qwen3.6-35B-A3B-GGUF** (https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF): The GGUF quantized version of Qwen3.6-35B-A3B, achieving the highest number of downloads (over 1.6 million), making it highly accessible for local deployment.
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** (https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive): A popular community-modified "uncensored" version of the Qwen model, with over 525k downloads.
*   **hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF** (https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF): A distilled GGUF model fine-tuned for enhanced reasoning capabilities.
*   **unsloth/Qwen3.6-27B-GGUF** (https://huggingface.co/unsloth/Qwen3.6-27B-GGUF): The GGUF quantized version of Qwen3.6-27B, with over 636k downloads, offering an efficient alternative to the base model.

---

### 3. Ecosystem Signal

The Hugging Face ecosystem signals a robust and competitive landscape where both open-weight and proprietary models thrive. The most dominant trend is the rapid development and adoption of Mixture-of-Experts (MoE) architectures, exemplified by the Qwen and DeepSeek models. This trend is driven by the pursuit of higher performance and computational efficiency, allowing models to achieve state-of-the-art results while maintaining manageable parameter counts for certain operations.

A clear split exists between open and closed ecosystems: giants like Google, OpenAI, and MiniMaxAI release proprietary models that gain immense traction, while open-source alternatives from companies like DeepSeek, Qwen, and ZhipuAI push the boundaries of what's possible with open collaboration. This creates a healthy competition that benefits the entire field.

On the practical side, the quantization and fine-tuning community is exceptionally active. Models like Qwen3.6-35B-A3B-GGUF demonstrate the power of community-driven optimization, making powerful models accessible for local deployment and experimentation. Similarly, a variety of "uncensored" or specialized fine-tunes show the community's desire to customize model behavior beyond the original training objectives, highlighting the importance of flexibility and customization in the modern AI stack.

---

### 4. Worth Exploring

1.  **deepseek-ai/DeepSeek-V4-Pro** (https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro): With over 3,000 likes, this model is clearly a favorite among researchers and developers. It represents the cutting edge of open-source reasoning models and offers a compelling alternative to other top-tier offerings. Its high engagement suggests it will be a key player in upcoming benchmarks and applications.

2.  **Qwen/Qwen3.6-35B-A3B** (https://huggingface.co/Qwen/Qwen/Qwen3.6-35B-A3B): This model's staggering download count (over 1.3 million) is a testament to its popularity and perceived value. As one of the most downloaded models on the Hub, it's an excellent candidate for anyone looking to experiment with large-scale, efficient language and multimodal generation.

3.  **google/gemma-4-31B-it** (https://huggingface.co/google/gemma-4-31B-it): Released by Google, this model bridges the gap between the scale of Gemini and accessibility of smaller models. Its combination of strong performance, open availability, and massive download numbers makes it a must-try for understanding current-generation multimodal capabilities and the impact of large-scale, proprietary research.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*