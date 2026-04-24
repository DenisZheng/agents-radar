# Hugging Face Trending Models Digest 2026-04-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-24 00:28 UTC

---

Of course. Here is the structured Hugging Face Trending Models Digest.

***

### 1. **Today's Highlights**

The landscape continues to be dominated by major players, with Google's Gemma-4 series emerging as a clear leader in both likes and downloads. A key trend is the proliferation of community-driven fine-tunes and quantizations, particularly for models like Qwen3.6, which are being aggressively optimized for uncensored and low-resource deployment. Furthermore, multimodal capabilities are expanding beyond vision into 3D generation, as evidenced by new releases from Tencent. The ecosystem is also seeing a strong focus on specialized, high-performance inference formats like NVFP4, indicating a push for production-ready, efficient models.

***

### 2. **Trending Models**

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

*   **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** by zai-org | Likes: 1,481 | Downloads: 182,748
    GLM-5.1 is an open-weight, Mixture-of-Experts (MoE) language model from Zhipu AI, designed for powerful conversational tasks. Its high engagement highlights the demand for capable, open-source alternatives to closed-source LLMs.
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** by google | Likes: 2,313 | Downloads: 5,103,971
    This is a top-tier, instruction-tuned version of Google's Gemma-4 family. Its massive download count and high likes reflect its status as a leading open-weight model for general-purpose conversation and text generation.
*   **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** by MiniMaxAI | Likes: 1,041 | Downloads: 463,243
    Released by MiniMax, this is a large-scale, conversational language model. Its significant traction shows the continued interest in models from Chinese tech giants that are competitive on a global scale.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** by Qwen | Likes: 1,332 | Downloads: 717,811
    This is a state-of-the-art MoE model from Qwen, supporting both image-text-to-text and conversational tasks. It's a flagship multimodal model demonstrating Qwen's strong position in the space.
*   **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** by tencent | Likes: 576 | Downloads: 0
    A world model from Tencent that can generate high-quality 3D assets from textual descriptions or 2D images. Its novelty and advanced capability make it a notable entry in the rapidly growing 3D generation field.
*   **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** by openbmb | Likes: 1,223 | Downloads: 81,729
    VoxCPM2 is a powerful open-weight text-to-speech model. Its popularity signifies a strong community interest in high-quality, multilingual voice synthesis technology.
*   **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** by baidu | Likes: 541 | Downloads: 6,394
    An 8B-parameter text-to-image model from Baidu. Its Apache 2.0 license makes it highly accessible for developers and researchers looking for a capable open-weight diffusion model.

#### 🔧 Specialized Models (code, math, medical, embeddings)

*   **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** by openai | Likes: 558 | Downloads: 1,888
    A specialized token classification model designed to identify and redact sensitive information like emails, phone numbers, and social security numbers. Its presence on Hugging Face provides crucial privacy tooling for the open-source community.
*   **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** by nvidia | Likes: 263 | Downloads: 364
    Lyra-2.0 is an advanced image-to-3D generation model from NVIDIA Research. It represents cutting-edge academic research in 3D content creation, leveraging the company's expertise in graphics and AI.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

*   **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** by unsloth | Likes: 708 | Downloads: 1,283,534
    This GGUF-quantized version of the Qwen3.6-35B-A3B model is a community effort by Unsloth. Its high download volume shows that users are actively seeking easy-to-deploy, quantized versions of large models for local inference and experimentation.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** by HauhauCS | Likes: 400 | Downloads: 350,262
    This is an aggressive, uncensored fine-tune of the Qwen3.6-35B-A3B model. Its popularity highlights a segment of the community focused on unfiltered interaction and creative freedom.
*   **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** by Jiunsong | Likes: 471 | Downloads: 126,271
    Another popular uncensored variant, this time for a Gemma-4 model, provided in the GGUF format. This demonstrates the widespread availability and demand for uncensored models across different base architectures.
*   **[RedHatAI/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/RedHatAI/Qwen3.6-35B-A3B-NVFP4)** by RedHatAI | Likes: 89 | Downloads: 298,020
    This model showcases a cutting-edge NVFP4 quantization of the Qwen3.6-35B-A3B, targeting ultra-low latency inference via vLLM. Its high downloads signal strong interest in next-generation quantization techniques for performance-critical applications.

***

### 3. **Ecosystem Signal**

The Hugging Face ecosystem is currently characterized by a few dominant trends. First, the **Gemma-4** family, backed by Google, is experiencing explosive growth, becoming the most-downloaded model and setting a high benchmark for quality in the open-weight category. This signals a strong preference for high-quality, proprietary-backed open models. Concurrently, the Qwen3.6 family remains the epicenter of **community-driven activity**, with numerous aggressive uncensored variants, efficient GGUF quantizations, and specialized reasoning distillations flooding the platform. This reflects a vibrant ecosystem where users are not just downloading but actively remixing and optimizing models for specific needs like creativity, privacy, or local deployment. Furthermore, we see the rise of advanced quantization formats like **NVFP4**, moving beyond traditional GGUF to offer better performance for production environments, and a growing portfolio of **multimodal specialists** (e.g., 3D generation, TTS), indicating the industry's move beyond pure language models.

***

### 4. **Worth Exploring**

1.  **google/gemma-4-E4B-it**: With over 3 million downloads, this is the undisputed star of the show. It represents Google's best-in-class open-weight model, offering a unique combination of power and versatility for any researcher or developer working on multimodal tasks, making it essential for understanding current open-source capabilities.
2.  **zai-org/GLM-5.1**: As the second-most liked model, GLM-5.1 offers a compelling alternative to other top-tier open LLMs. Its MoE architecture suggests high efficiency and performance, and its high engagement indicates a strong community belief in its quality, making it a prime candidate for those seeking a powerful, open-weight LLM without the brand recognition of giants like Google or Meta.
3.  **openai/privacy-filter**: While not a generative model, this tool is incredibly valuable. In an era of data privacy concerns, having a readily available, open-weight model to scrub sensitive information from your datasets or outputs is a game-changer for responsible AI development. It exemplifies how specialized tools are becoming integral parts of the broader AI toolkit.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*