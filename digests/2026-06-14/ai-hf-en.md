# Hugging Face Trending Models Digest 2026-06-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-14 00:42 UTC

---

**Hugging Face Trending Models Digest — 2026-06-14**

---

### 1. Today's Highlights

The top of the leaderboard is dominated by **DeepSeek-V4-Pro**, which surged to 4,813 likes and over 3.2 million downloads, signaling massive community excitement around DeepSeek's latest flagship. Google's **Gemma 4 family** continues to saturate the trending page, with no fewer than seven entries spanning base models, instruction-tuned variants, community quantizations, and uncensored forks — a testament to the family's broad adoption. Ideogram's **Ideogram 4** text-to-image model is generating buzz in both its fp8 and nf4 quantized forms, suggesting strong interest in efficient image generation. Meanwhile, the proliferation of GGUF and QAT-quantized variants from Unsloth and community contributors underscores the growing demand for locally runnable models.

---

### 2. Trending Models

#### 🧠 Language Models (LLMs, Chat Models, Instruction-Tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — Author: deepseek-ai | Likes: 4,813 | Downloads: 3,250,404
  DeepSeek's latest flagship conversational model, topping the charts with record downloads and likes, likely driven by strong benchmark performance and open-weight accessibility.

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** — Author: google | Likes: 995 | Downloads: 1,005,883
  Google's instruction-tuned 12B multimodal-capable model in the Gemma 4 family, trending due to its unified any-to-any architecture and strong community uptake.

- **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** — Author: google | Likes: 533 | Downloads: 207,338
  The base (pretrained) version of Google's Gemma 4 12B, attracting researchers and fine-tuners looking to build on a capable open-weight foundation.

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** — Author: CohereLabs | Likes: 355 | Downloads: 6,533
  Cohere's compact code-focused model, trending as a lightweight option for code generation and understanding tasks.

- **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** — Author: nex-agi | Likes: 236 | Downloads: 3,092
  A Qwen3.5-MoE-based text-generation model from Nex AI, gaining attention as a competitive open-weight alternative in the mid-size LLM space.

- **[nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini)** — Author: nex-agi | Likes: 193 | Downloads: 3,760
  The smaller sibling of Nex-N2-Pro, offering a more accessible entry point for those experimenting with Qwen3.5-MoE architectures.

- **[XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash)** — Author: XiaomiMiMo | Likes: 106 | Downloads: 3,590
  Xiaomi's agent-oriented text-generation model with FP4 quantization, notable for its focus on agentic workflows and efficient inference.

- **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)** — Author: prefeitura-rio | Likes: 110 | Downloads: 5,933
  A massive 397B open-weight Qwen3.5-MoE model released by the city of Rio de Janeiro, drawing attention for its unusual provenance and scale.

#### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** — Author: google | Likes: 707 | Downloads: 92,080
  Google's 26B diffusion-based multimodal model with A4B architecture, trending as a novel approach to image-text-to-text generation.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — Author: nvidia | Likes: 1,959 | Downloads: 69,443
  NVIDIA's compact 3B model for image feature extraction and localization, earning high likes for its practical utility in vision-language tasks.

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** — Author: MiniMaxAI | Likes: 413 | Downloads: 1,031
  MiniMax's multimodal model supporting image-text-to-text workflows, gaining traction as a new entrant in the multimodal space.

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** — Author: ideogram-ai | Likes: 517 | Downloads: 6,535
  Ideogram's latest text-to-image model in fp8 format, trending for its high-quality image generation and efficient inference.

- **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** — Author: ideogram-ai | Likes: 334 | Downloads: 3,276
  The nf4-quantized variant of Ideogram 4, appealing to users seeking even lighter-weight image generation.

- **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)** — Author: zai-org | Likes: 151 | Downloads: 0
  Z.ai's pose-driven character animation model for image-to-video generation, notable for its specialized video synthesis capabilities.

- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** — Author: ByteDance | Likes: 235 | Downloads: 426
  ByteDance's image-text-to-video renderer, drawing interest as a new open-weight video generation approach from a major tech company.

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** — Author: bosonai | Likes: 414 | Downloads: 32,162
  Boson AI's 4B text-to-speech model, trending for its high-quality audio synthesis built on a Qwen3-based multimodal backbone.

- **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** — Author: google | Likes: 187 | Downloads: 7,331
  Google's real-time text-to-audio model from the Magenta project, gaining attention for low-latency music and audio generation.

#### 🔧 Specialized Models (Code, Math, Medical, Embeddings)

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — Author: moonshotai | Likes: 515 | Downloads: 1,689
  Moonshot AI's code-specialized model in the Kimi K2.7 family, trending among developers seeking strong code generation and understanding.

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — Author: nvidia | Likes: 400 | Downloads: 3,975
  NVIDIA's compact 0.6B streaming ASR model, trending for real-time speech recognition applications with cache-aware optimization.

#### 📦 Fine-tunes & Quantizations (Community Fine-tunes, GGUF, AWQ)

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** — Author: unsloth | Likes: 580 | Downloads: 872,895
  Unsloth's GGUF quantization of Google's Gemma 4 12B instruction-tuned model, massively downloaded for local CPU/GPU inference.

- **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** — Author: unsloth | Likes: 246 | Downloads: 42,885
  Unsloth's GGUF version of Google's DiffusionGemma 26B, making this large multimodal model accessible for local deployment.

- **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** — Author: unsloth | Likes: 213 | Downloads: 227,830
  A QAT-enhanced GGUF quantization of Gemma 4 12B, offering improved quality at reduced bit-width for resource-constrained setups.

- **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)** — Author: unsloth | Likes: 151 | Downloads: 260,757
  The 26B variant with QAT + GGUF quantization, extending Unsloth's popular quantization pipeline to the larger Gemma 4 model.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — Author: HauhauCS | Likes: 1,761 | Downloads: 2,411,202
  An uncensored GGUF variant of a Qwen3.6 35B MoE model, achieving the second-highest download count on the list, reflecting strong demand for unrestricted local models.

- **[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** — Author: Jackrong | Likes: 157 | Downloads: 11,291
  A GGUF-quantized coder variant of a Qwen3.6 27B model with MTP support, targeting developers who want local code generation.

- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** — Author: OBLITERATUS | Likes: 277 | Downloads: 50,289
  An "abliterated" (uncensored) version of Gemma 4 12B, reflecting the community's ongoing interest in removing safety constraints from open models.

- **[huihui-ai/Huihui-gemma-4-12B-it-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated)** — Author: huihui-ai | Likes: 152 | Downloads: 8,270
  Another abliterated Gemma 4 12B variant, showing that multiple community contributors are competing in the uncensored model space.

- **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** — Author: Jiunsong | Likes: 818 | Downloads: 98,882
  An uncensored GGUF build of the 26B Gemma 4 model, combining two high-demand attributes: large scale and local deployability.

---

### 3. Ecosystem Signal

The Gemma 4 family is the undisputed star of this week's trending page, with seven entries spanning base models, instruction-tuned versions, diffusion variants, and a cascade of community quantizations and uncensored forks. This saturation signals that Google's open-weight strategy is paying enormous dividends in community adoption. DeepSeek-V4-Pro's dominance at the top — with nearly 5,000 likes and over 3.2 million downloads — confirms DeepSeek's position as a leading open-weight LLM provider, with its latest release generating the kind of excitement typically reserved for proprietary model launches.

Quantization activity is intense and increasingly sophisticated. Unsloth alone accounts for four trending entries, combining GGUF format with QAT (Quantization-Aware Training) to deliver models that run efficiently on consumer hardware without significant quality loss. The community's appetite for uncensored variants — at least four models explicitly market themselves as "uncensored" or "abliterated" — remains a persistent undercurrent, with Qwen3.6 and Gemma 4 being the preferred bases. MoE architectures are well-represented across multiple families (Qwen3.5, Qwen3.6, Cohere2), suggesting that the community views sparse models as the practical path to scaling. Finally, multimodal and generative models (image, video, audio) are diversifying beyond text, with Ideogram 4, ByteDance's Bernini-R, and Google's Magenta Realtime 2 all making appearances — a sign that the open-weight ecosystem is rapidly closing the gap with proprietary generative AI.

---

### 4. Worth Exploring

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — With nearly 5,000 likes and 3.2 million downloads in a single week, this is clearly the model the community is most excited about. Whether for benchmarking, production use, or research, DeepSeek-V4-Pro is the model to study to understand the current state of open-weight LLMs.

2. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** — Google's diffusion-based approach to multimodal modeling represents a novel architectural direction that diverges from standard autoregressive image generation. For researchers and practitioners interested in the intersection of diffusion models and language understanding, this is a must-examine release.

3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — With the highest like-to-download ratio among practical vision models (1,959 likes), this compact 3B model from NVIDIA addresses a real need for efficient image localization and feature extraction. It's worth trying for anyone building vision-language pipelines where speed and accuracy matter.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*