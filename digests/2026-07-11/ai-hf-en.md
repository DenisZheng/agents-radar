# Hugging Face Trending Models Digest 2026-07-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-11 01:28 UTC

---

Here is the **Hugging Face Trending Models Digest** for July 11, 2026.

---

## 1. Today's Highlights

The Hugging Face ecosystem this week is dominated by a major wave of **Qwen 3.6** and **Qwen 3.5** derivative models, signaling a clear community pivot towards this latest generation of Chinese-origin base models. We are also seeing a surge in **NVFP4 quantized models from NVIDIA**, indicating that 4-bit floating-point quantization is becoming a standard for efficient deployment. Among the top performers, **nvidia/LocateAnything-3B** stands out as the highest-voted model, showcasing strong demand for open-weight object localization. The MoE (Mixture of Experts) trend continues to accelerate, with both enterprise (Mistral, NVIDIA) and community models (Qwen3.6-35B-A3B) leveraging sparse activation to balance performance and efficiency. Finally, a notable trend is the emergence of **specialized video and identity-preservation models** (LTX, LingBot), suggesting GenAI is expanding beyond static images into consistent character generation.

---

## 2. Trending Models by Category

### 🧠 Language Models

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — Author: zai-org | Likes: 3,785 | Downloads: 392,655
  - A dense MoE conversational model from Zhipu AI, trending for its strong conversational capabilities and open-weight GLM lineage.

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — Author: deepseek-ai | Likes: 463 | Downloads: 33,088
  - The latest official flagship from DeepSeek (V4) with a spark-optimized inference pipeline, gaining traction for state-of-the-art reasoning at scale.

- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** — Author: mistralai | Likes: 184 | Downloads: 315
  - A sparse 119B (6B active) MoE model designed for lean inference; trending due to Mistral’s ongoing focus on efficient large-scale deployment.

- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** — Author: SupraLabs | Likes: 86 | Downloads: 1,160
  - A tiny 51M routing model for directing queries to specialized LLMs; trending for its unique approach to model orchestration.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — Author: froggeric | Likes: 836 | Downloads: 0
  - A no-code utility model/package fixing chat templates for Qwen 3.5; trending due to widespread compatibility issues with older Jinja templates.

- **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)** — Author: AliesTaha | Likes: 198 | Downloads: 4,875
  - A Qwen 3-based instruct model fine-tuned on "fable" story data; trending for creative writing and narrative generation use cases.

---

### 🎨 Multimodal & Generation

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — Author: nvidia | Likes: 2,700 | Downloads: 1,456,269
  - A 3B image-text-to-text model for zero-shot object localization; the highest-liked model this week, driven by demand for precise visual grounding.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — Author: baidu | Likes: 1,921 | Downloads: 1,319,683
  - An image-text-to-text model for unlimited-character OCR; trending due to its industry-grade performance on complex document extraction.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — Author: krea | Likes: 575 | Downloads: 164,525
  - A turbocharged diffusion model for text-to-image generation; trending for its speed improvements over the base Krea-2-Raw.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — Author: OpenMOSS-Team | Likes: 98 | Downloads: 5,919
  - An audio-text-to-text pipeline for transcription with speaker diarization; trending due to the growing need for structured audio processing.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Author: Alissonerdx | Likes: 83 | Downloads: 0
  - A text-to-video model focused on identity preservation for faces; trending as a new niche in consistent character-to-video generation.

- **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)** — Author: robbyant | Likes: 76 | Downloads: 317
  - A video-generation MoE model (30B, 3B active) using the LingBotVideoPipeline; trending for its efficient video synthesis architecture.

---

### 🔧 Specialized Models

- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** — Author: nvidia | Likes: 99 | Downloads: 23,404
  - A large puzzle-solving / reasoning model in 4-bit floating-point format; trending for its combination of high capability with extreme quantization.

- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** — Author: nvidia | Likes: 94 | Downloads: 576
  - A sparse 30B audio understanding model; trending as a specialized component for multi-modal audio reasoning pipelines.

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — Author: google | Likes: 345 | Downloads: 18,626
  - A zero-shot tabular foundation model for classification and regression; trending for bringing LLM-like generalization to structured data.

---

### 📦 Fine-tunes & Quantizations

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — Author: HauhauCS | Likes: 2,623 | Downloads: 2,660,170
  - An uncensored, aggressive personality fine-tune of Qwen 3.6 MoE in GGUF format; extremely high downloads reflect demand for unfiltered, roleplay-capable models.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — Author: unsloth | Likes: 1,036 | Downloads: 2,895,457
  - A GGUF quantized version of Qwen 3.6 with multi-token prediction (MTP); trending as the most popular community quant of the week.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** — Author: empero-ai | Likes: 761 (full model) | Downloads: 184,315
  - A reasoning-tuned variant of Qwen 3.5 with “Claude Mythos” style; trending for its narrative and reasoning blend.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — Author: deepreinforce-ai | Likes: 835 | Downloads: 1,085,554
  - A 35B general-purpose GGUF model; trending for its MIT license and strong endpoints compatibility.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — Author: yuxinlu1 | Likes: 1,134 | Downloads: 427,668
  - A GGUF fine-tune of Gemma 4 for agentic coding and terminal use; trending for its prompt-based "composer" workflow.

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** — Author: unsloth | Likes: 124 | Downloads: 31,895
  - A GGUF quantization of the DeepSeek-V4-Flash model; trending due to early community adoption of the new V4 architecture.

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** — Author: nvidia | Likes: 336 | Downloads: 787,748
  - An official NVFP4 quantized version of Qwen 3.6-27B; trending as a best-practice example of 4-bit floating-point deployment.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — Author: GnLOLot | Likes: 157 | Downloads: 9,029
  - A 1B parameter thinking model fine-tuned with a "Claude Opus" style; trending for its extreme parameter efficiency.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — Author: conradlocke | Likes: 161 | Downloads: 0
  - A LoRA adapter for identity editing on Krea-2; trending for enabling consistent character edits in image generation.

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** — Author: meituan-longcat | Likes: 170 | Downloads: 1,308
  - A long-context conversational model from Meituan; trending for extended context handling in Chinese-language applications.

---

## 3. Ecosystem Signal

The **Qwen ecosystem** (3.5 & 3.6) is currently the strongest momentum vector in the open-weight community, surpassing the earlier Llama and Gemma waves in terms of sheer volume of fine-tunes and quantizations. The **MoE architecture** has become the default for both enterprise (NVIDIA Nemotron series, Mistral Leanstral, DeepSeek V4) and community (Qwen3.6-35B-A3B) models, driven by the need for high capability with lower active parameter counts. **GGUF quantization** remains the dominant deployment format, with NVFP4 (4-bit floating point) emerging as a new standard from NVIDIA, offering better accuracy retention than traditional int4. **Unsloth** continues to be the leading community quantizer, releasing the highest-downloaded variants. In terms of open-weight vs proprietary, open models are now competing directly on capability (e.g., DeepSeek V4 vs GPT-4 era), while proprietary APIs (e.g., Krea, Baidu) are focusing on domain-specific services (OCR, image editing). Finally, the rise of **identity-preservation models** (LTX Face ID, Krea LoRA) signals a shift from generic generation to personalized, character-consistent outputs.

---

## 4. Worth Exploring

1. **nvidia/LocateAnything-3B** — With the highest likes this week, this model represents the cutting edge of zero-shot visual grounding. It is ideal for developers building object detection and spatial reasoning features without needing task-specific training data.

2. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** — The combination of massive downloads (2.6M) and high likes (2.6k) makes this a must-examine case for understanding the community’s appetite for uncensored, MoE-based roleplay models. It also demonstrates how far Qwen 3.6 can be pushed via aggressive fine-tuning.

3. **google/tabfm-1.0.0-pytorch** — For anyone working with structured (tabular) data, this is a paradigm shift. It applies pre-training and zero-shot transfer to tabular tasks, analogous to how LLMs revolutionized text. It is worth studying for its potential to replace traditional gradient-boosted trees in many workflows.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*