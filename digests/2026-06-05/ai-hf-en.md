# Hugging Face Trending Models Digest 2026-06-05

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-05 00:40 UTC

---

# Hugging Face Trending Models Digest — June 5, 2026

---

## 1. Today's Highlights

The top of the leaderboard is dominated by **DeepSeek-V4-Pro**, which surged to 4,629 likes and nearly 5.7 million downloads, signaling massive community appetite for DeepSeek's latest flagship. **Qwen3.6-27B** follows closely with 1,613 likes and over 5.4 million downloads, cementing the Qwen3.5/3.6 family as one of the most actively adopted open-weight model lines. NVIDIA has a strong multi-model presence with six entries spanning localization, quantization, image generation, and video — reflecting its strategy of surrounding popular open models with optimized variants. The GGUF quantization ecosystem remains vibrant, with unsloth and community contributors driving massive download numbers for edge-deployable versions of Gemma 4, Qwen3.6, and Step-3.7. Notably, Sulphur-2-base hit 1.5 million downloads in the text-to-video space, suggesting generative video is rapidly maturing as a category.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, Chat Models, Instruction-Tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — *deepseek-ai* | ❤️ 4,629 | ⬇️ 5,687,031
  DeepSeek's latest flagship conversational model leads the entire trending chart by a wide margin, offering state-of-the-art reasoning and general-purpose chat capabilities under an MIT license.

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — *deepseek-ai* | ❤️ 1,402 | ⬇️ 3,503,796
  A lighter, faster variant of the V4 family optimized for high-throughput deployment, making DeepSeek's latest architecture accessible at lower compute cost.

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** — *Qwen* | ❤️ 1,613 | ⬇️ 5,440,074
  The 27B multimodal-capable member of the Qwen3.6 series, trending for its strong performance across text and vision tasks with massive community adoption.

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** — *google* | ❤️ 410 | ⬇️ 14,866
  Google's instruction-tuned Gemma 4 at 12B parameters, notable for its unified any-to-any architecture spanning text and image inputs.

- **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** — *google* | ❤️ 270 | ⬇️ 1,978
  The base (non-instruction-tuned) variant of Gemma 4 12B, providing a foundation for researchers who want to fine-tune on custom tasks.

- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** — *LiquidAI* | ❤️ 508 | ⬇️ 72,114
  A Mixture-of-Experts text-generation model from LiquidAI using only 1B active parameters out of 8B total, targeting efficient edge and on-device inference.

- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** — *openbmb* | ❤️ 768 | ⬇️ 79,427
  A remarkably compact 1B-parameter model from OpenMBM that punches above its weight for its size, attracting interest from the efficiency-focused community.

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** — *sapientinc* | ❤️ 617 | ⬇️ 157,457
  Sapient's Hierarchical Reasoning Model at 1B parameters, trending for its novel architecture that separates fast "intuitive" reasoning from slow "deliberative" reasoning.

- **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** — *JetBrains* | ❤️ 201 | ⬇️ 12,157
  JetBrains' second-generation "thinking" model with only 2.5B active parameters, designed for code-aware and analytical reasoning tasks.

- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** — *stepfun-ai* | ❤️ 251 | ⬇️ 22,715
  StepFun's fast vision-language model in the Step 3.7 series, offering multimodal understanding with a focus on speed.

- **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** — *NemoStation* | ❤️ 518 | ⬇️ 18,942
  A compact 2B video-text-to-text model built on Qwen3.5, enabling video understanding and captioning in a very small footprint.

---

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** — *SulphurAI* | ❤️ 1,548 | ⬇️ 1,678,259
  A text-to-video generation model fine-tuned from Lightricks LTX-2.3, achieving explosive download numbers as the open video generation ecosystem heats up.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — *nvidia* | ❤️ 1,281 | ⬇️ 91,834
  NVIDIA's 3B image-text-to-text model for visual localization and grounding, trending for its ability to precisely locate objects described in natural language.

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** — *ideogram-ai* | ❤️ 203 | ⬇️ 310
  Ideogram's latest text-to-image model in FP8 precision, offering high-quality image generation with reduced memory requirements.

- **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** — *ideogram-ai* | ❤️ 158 | ⬇️ 398
  The NF4-quantized variant of Ideogram 4, pushing image generation to even lower VRAM footprints for consumer GPU users.

- **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)** — *nvidia* | ❤️ 162 | ⬇️ 17,903
  The smallest entry in NVIDIA's Cosmos 3 omni-modal generation suite, designed for lightweight generative AI workloads.

- **[nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super)** — *nvidia* | ❤️ 133 | ⬇️ 16,767
  The flagship Cosmos 3 model for high-fidelity multimodal generation, covering text, image, and video synthesis.

- **[nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image)** — *nvidia* | ❤️ 108 | ⬇️ 961
  A text-to-image specialized variant of Cosmos 3 Super, optimized for photorealistic image generation.

- **[nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video)** — *nvidia* | ❤️ 102 | ⬇️ 899
  An image-to-video generation model in the Cosmos 3 Super family, enabling motion synthesis from static images.

- **[nvidia/PiD](https://huggingface.co/nvidia/PiD)** — *nvidia* | ❤️ 302 | ⬇️ 852
  NVIDIA's image-to-image super-resolution diffusion model, trending for its ability to upscale and enhance low-resolution images with high fidelity.

- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** — *ByteDance* | ❤️ 120 | ⬇️ 129
  ByteDance's image-text-to-video renderer (Bernini Renderer), a research-stage model for controllable video generation from multimodal inputs.

- **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** — *meituan-longcat* | ❤️ 516 | ⬇️ 381
  A talking-head / avatar video generation model from Meituan's LongCat team, generating realistic avatar videos from audio and text inputs.

- **[OpenMOSS-Team/MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5)** — *OpenMOSS-Team* | ❤️ 144 | ⬇️ 28,331
  A text-to-speech model from the OpenMOSS team, supporting Chinese and other languages with a delay-based generation architecture.

- **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** — *PaddlePaddle* | ❤️ 230 | ⬇️ 5,970
  PaddlePaddle's vision-language OCR model built on ERNIE 4.5, offering robust document understanding and text extraction from images.

---

### 🔧 Specialized Models (Code, Math, Medical, Embeddings)

- No strongly specialized models (code/math/medical/embedding-specific) appear in this week's top 30. The trending list is dominated by general-purpose LLMs and generative multimodal models, suggesting the community's current focus is on broad-capability foundation models rather than narrow-domain tools.

---

### 📦 Fine-tunes & Quantizations (Community Fine-tunes, GGUF, AWQ)

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — *HauhauCS* | ❤️ 1,401 | ⬇️ 2,646,756
  An uncensored, aggressively fine-tuned GGUF version of Qwen3.6 35B-A3B, achieving the highest download count in this digest at 2.6M — a testament to demand for unrestricted local models.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — *unsloth* | ❤️ 645 | ⬇️ 1,063,964
  Unsloth's GGUF-quantized version of Qwen3.6 27B with Multi-Token Prediction support, enabling faster inference on consumer hardware.

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** — *unsloth* | ❤️ 284 | ⬇️ 62,850
  Unsloth's quantized GGUF build of Google's Gemma 4 12B instruction-tuned model, making it runnable on laptops and edge devices.

- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** — *nvidia* | ❤️ 178 | ⬇️ 629,244
  NVIDIA's NVFP4-quantized version of Qwen3.6 35B-A3B, leveraging NVIDIA's Model Optimizer toolchain for maximum inference efficiency on NVIDIA hardware.

- **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)** — *LiquidAI* | ❤️ 182 | ⬇️ 102,119
  The official GGUF build of LiquidAI's LFM2.5 MoE model, optimized for llama.cpp and edge deployment.

- **[stepfun-ai/Step-3.7-Flash-GGUF](https://huggingface.co/stepfun-ai/Step-3.7-Flash-GGUF)** — *stepfun-ai* | ❤️ 107 | ⬇️ 44,434
  StepFun's official GGUF quantization of Step-3.7-Flash with imatrix calibration, enabling efficient CPU and edge inference for the vision-language model.

---

## 3. Ecosystem Signal

Several macro-trends emerge from this week's data. **DeepSeek V4** is the undisputed momentum leader: both the Pro and Flash variants combined account for over 9.1 million downloads, indicating that DeepSeek's latest generation has achieved near-ubiquitous adoption in the open-weight community. The **Qwen3.5/3.6 family** is the other major force, with four distinct entries (27B base, 35B-A3B uncensored, 35B-A3B NVFP4, 27B-MTP GGUF) collectively showing that Qwen's MoE architecture at the 27B–35B scale has become a default choice for both direct use and quantization targets.

**NVIDIA** is playing a platform role with six trending models, but notably these span very different use cases — from Cosmos generative models to PiD super-resolution to LocateAnything grounding to NVFP4 quantization — suggesting NVIDIA is positioning itself as an infrastructure layer across the entire generative AI stack rather than competing on any single model.

The **GGUF/quantization ecosystem** is thriving: roughly one-third of the top 30 are quantized variants, and the highest-download models (HauhauCS's uncensored Qwen at 2.6M, unsloth's Qwen at 1.06M) are community quantizations rather than original releases. This underscores that the ability to run models locally is a primary driver of community engagement.

**Generative video** is emerging as a breakout category, with Sulphur-2-base (1.6M downloads), Cosmos3-Super-Image2Video, Bernini-R, and LongCat-Video-Avatar all appearing simultaneously — a sign that open video generation is transitioning from experimental to practical.

Finally, **small models** (1B–3B) from MiniCPM, HRM, Marlin, and LiquidAI are attracting disproportionate likes relative to their size, reflecting growing interest in efficient architectures for edge and on-device deployment.

---

## 4. Worth Exploring

**1. [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** — At only 1B parameters, Sapient's Hierarchical Reasoning Model introduces a genuinely novel architectural idea: separating fast, intuitive processing from slow, deliberate reasoning in a way inspired by dual-process cognitive theory. With 617 likes and 157K downloads, it's clearly resonating. For researchers and practitioners interested in efficient reasoning models that go beyond simple chain-of-thought, HRM is the most architecturally interesting small model on this list.

**2. [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** — With 1.5 million downloads and 1,548 likes, this is the breakout text-to-video model of the week. Built on Lightricks' LTX-2.3 base, it represents the leading edge of open-weight video generation. Anyone working in creative AI, content generation, or multimodal synthesis should evaluate this model now, as the open video generation ecosystem is moving extremely fast.

**3. [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — It leads the chart for good reason. With 4,629 likes, nearly 5.7 million downloads, and an MIT license, DeepSeek-V4-Pro is the most significant open-weight model release in recent memory. Whether you need a general-purpose reasoning model, a strong baseline for fine-tuning, or a production-grade conversational AI, this is the model to benchmark against. Its combination of performance, permissive licensing, and massive community adoption makes it the default starting point for most LLM use cases today.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*