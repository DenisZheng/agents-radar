# Hugging Face Trending Models Digest 2026-07-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-16 02:01 UTC

---

The user wants a structured Hugging Face Trending Models Digest based on the provided list of 30 trending models as of 2026-07-16. I need to analyze the data and produce a digest with four sections: Today's Highlights, Trending Models by category, Ecosystem Signal, and Worth Exploring.

First, I'll categorize the models:

**Language Models (LLMs, chat models, instruction-tuned):**
- prism-ml/Ternary-Bonsai-27B-gguf (text-generation, ternary 2-bit)
- prism-ml/Bonsai-27B-gguf (text-generation, 1-bit)
- zai-org/GLM-5.2 (text-generation, MoE)
- tencent/Hy3 (text-generation)
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF (text-generation)
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking (text-generation)
- empero-ai/Qwythos-9B-v2 (text-generation)
- deepreinforce-ai/Ornith-1.0-35B-GGUF (text-generation)
- yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF (text-generation, agentic)
- nvidia/Nemotron-Labs-Audex-30B-A3B (text-generation)
- jlnsrk/GLM-5.2-colibri-int4 (quantized GLM)
- InternScience/Agents-A1 (text-generation, MoE, but also image-text-to-text? tags include image-text-to-text and moe, but pipeline is text-generation. Might be multimodal? I'll put in Language Models but note multimodal capability)

**Multimodal & Generation (image, video, audio, text-to-X):**
- thinkingmachines/Inkling (image-text-to-text, audio-text-to-text)
- empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF (image-text-to-text)
- bottlecapai/ThinkingCap-Qwen3.6-27B (image-text-to-text)
- conradlocke/krea2-identity-edit (image-editing)
- OpenMOSS-Team/MOSS-Transcribe-Diarize (audio-text-to-text)
- HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive (image-text-to-text)
- empero-ai/Qwythos-9B-v2-GGUF (image-text-to-text)
- open-gigaai/Giga-World-1 (diffusers, text-to-image? tags: diffusers, safetensors, license:apache-2.0, region:us - pipeline N/A, likely image generation)
- baidu/Unlimited-OCR (image-text-to-text, OCR)
- ATH-MaaS/OvisOCR2 (image-text-to-text, OCR)
- AngelSlim/Hy3-GGUF (text-generation, but base is Hy3, quantized)
- unsloth/Qwen3.6-27B-NVFP4 (image-text-to-text)
- robbyant/lingbot-world-v2-14b-causal-fast (image-to-video)
- Alissonerdx/LTX-Best-Face-ID (text-to-video, identity preservation)
- mgwr/M87 (text-to-image, LoRA)
- robbyant/lingbot-video-moe-30b-a3b (video generation, MoE)

**Specialized Models (code, math, medical, embeddings):**
- Cactus-Compute/needle (function-calling, tool-use)
- froggeric/Qwen-Fixed-Chat-Templates (chat templates, not a model per se)
- Maybe also yuxinlu1/gemma-4-12B-agentic... (agentic, coding) but already in LLMs.

**Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ):**
Many models are quantized: GGUF versions. The category should include community fine-tunes and quantizations. But many models appear in other categories as well. I'll list quantized versions under Fine-tunes & Quantizations, but also note their base category.

Better to organize by primary category, and for Fine-tunes & Quantizations, include models that are explicitly fine-tunes or quantizations of existing models.

Let's scan each model:

1. prism-ml/Ternary-Bonsai-27B-gguf: quantized (ternary 2-bit) of Bonsai-27B? Likely a quantization. Category: Fine-tunes & Quantizations (but also LLM)
2. thinkingmachines/Inkling: multimodal (image-text-to-text, audio-text-to-text) - new model family? Multimodal.
3. empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF: multimodal, quantized GGUF.
4. prism-ml/Bonsai-27B-gguf: quantized (1-bit) - Fine-tunes & Quantizations.
5. zai-org/GLM-5.2: new LLM (MoE) - Language Models.
6. bottlecapai/ThinkingCap-Qwen3.6-27B: multimodal (image-text-to-text) - Multimodal.
7. conradlocke/krea2-identity-edit: image editing LoRA - Multimodal.
8. OpenMOSS-Team/MOSS-Transcribe-Diarize: audio transcription/diarization - Multimodal (audio).
9. tencent/Hy3: LLM - Language Models.
10. GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF: quantized GGUF of MiniCPM5 fine-tune - Fine-tunes & Quantizations.
11. InternScience/Agents-A1: LLM with MoE, also image-text-to-text? tags include qwen3_5_moe, image-text-to-text, moe. Might be multimodal. But pipeline text-generation. Could be both. I'll put in Language Models.
12. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive: multimodal, uncensored fine-tune - Multimodal & Fine-tunes.
13. froggeric/Qwen-Fixed-Chat-Templates: not a model, but chat templates - Specialized? Or Fine-tunes? It's a utility. Might skip or put in Specialized.
14. empero-ai/Qwythos-9B-v2-GGUF: quantized multimodal - Fine-tunes & Quantizations.
15. open-gigaai/Giga-World-1: diffusers model, likely text-to-image - Multimodal.
16. GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking: fine-tune of MiniCPM5 - Fine-tunes & Quantizations.
17. empero-ai/Qwythos-9B-v2: base multimodal model - Multimodal.
18. baidu/Unlimited-OCR: OCR specialized - Specialized Models (OCR).
19. ATH-MaaS/OvisOCR2: OCR - Specialized Models.
20. AngelSlim/Hy3-GGUF: quantized Hy3 - Fine-tunes & Quantizations.
21. jlnsrk/GLM-5.2-colibri-int4: quantized GLM-5.2 - Fine-tunes & Quantizations.
22. unsloth/Qwen3.6-27B-NVFP4: quantized (NVFP4) multimodal - Fine-tunes & Quantizations.
23. robbyant/lingbot-world-v2-14b-causal-fast: image-to-video - Multimodal (video).
24. deepreinforce-ai/Ornith-1.0-35B-GGUF: quantized LLM - Fine-tunes & Quantizations.
25. Alissonerdx/LTX-Best-Face-ID: text-to-video with identity preservation - Multimodal (video).
26. mgwr/M87: text-to-image LoRA - Multimodal.
27. yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF: quantized agentic fine-tune - Fine-tunes & Quantizations.
28. robbyant/lingbot-video-moe-30b-a3b: video generation MoE - Multimodal.
29. Cactus-Compute/needle: function-calling, tool-use - Specialized (agentic).
30. nvidia/Nemotron-Labs-Audex-30B-A3B: LLM - Language Models.

Now, for Today's Highlights: notable trends: quantization (GGUF, NVFP4, ternary, 1-bit), multimodal models (Qwen3.6, MiniCPM5, OCR), new model families (GLM-5.2, Hy3, Nemotron, Inkling), fine-tunes for reasoning/agentic.

Trending Models by category:

I'll create categories:

🧠 Language Models (LLMs, chat models, instruction-tuned)
- zai-org/GLM-5.2
- tencent/Hy3
- InternScience/Agents-A1
- nvidia/Nemotron-Labs-Audex-30B-A3B
- deepreinforce-ai/Ornith-1.0-35B-GGUF (though quantized, it's an LLM)
- prism-ml/Ternary-Bonsai-27B-gguf (quantized)
- prism-ml/Bonsai-27B-gguf (quantized)
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking (fine-tune)
- yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF (quantized fine-tune)
- jlnsrk/GLM-5.2-colibri-int4 (quantized)

But some are quantized versions. Maybe separate base models from quantized. The category "Fine-tunes & Quantizations" will cover quantized versions. So for Language Models, include base models: GLM-5.2, Hy3, Agents-A1, Nemotron, maybe Ornith-1.0-35B-GGUF is quantized but it's a model release? The tag says transformers, gguf, text-generation. It's a GGUF quantized model. Might be both. I'll put base models in Language Models, and quantized versions in Fine-tunes & Quantizations.

But the list includes both base and quantized. For example, prism-ml/Ternary-Bonsai-27B-gguf is a quantized version of Bonsai-27B? Not sure. Bonsai-27B-gguf is also quantized. The base Bonsai might not be in list. So I'll categorize by primary nature.

Let's define:

🧠 Language Models: Base LLMs (not primarily quantized or fine-tuned for specific tasks, though they may be instruction-tuned). Includes: GLM-5.2, Hy3, Agents-A1, Nemotron-Labs-Audex-30B-A3B, maybe MiniCPM5-1B-Claude-Opus-Fable5-Thinking (fine-tune), but it's a fine-tune. I'll put fine-tunes in Fine-tunes & Quantizations.

Better: Language Models: models that are primarily text-generation LLMs, including base and instruction-tuned. Multimodal models go to Multimodal.

So:
- zai-org/GLM-5.2 (MoE LLM)
- tencent/Hy3 (LLM)
- InternScience/Agents-A1 (MoE LLM, possibly multimodal but pipeline text-generation)
- nvidia/Nemotron-Labs-Audex-30B-A3B (LLM)
- deepreinforce-ai/Ornith-1.0-35B-GGUF (LLM quantized, but still LLM)
- prism-ml/Ternary-Bonsai-27B-gguf (quantized LLM)
- prism-ml/Bonsai-27B-gguf (quantized LLM)
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking (fine-tuned LLM)
- yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF (quantized fine-tuned LLM)
- jlnsrk/GLM-5.2-colibri-int4 (quantized LLM)

But many are quantized. The category Fine-tunes & Quantizations should capture quantization activity. I'll include quantized models there, and base models in Language Models.

Let's check each model's tags: if it has "gguf", "quantized", "int4", "NVFP4", "ternary", "1-bit", it's a quantization. If it's a fine-tune (e.g., "fine-tune", "uncensored", "thinking", "agentic"), it's a fine-tune.

I'll create categories:

🧠 Language Models (Base LLMs)
- zai-org/GLM-5.2
- tencent/Hy3
- InternScience/Agents-A1
- nvidia/Nemotron-Labs-Audex-30B-A3B

🎨 Multimodal & Generation
- thinkingmachines/Inkling (image-text-to-text, audio-text-to-text)
- empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF (multimodal quantized)
- bottlecapai/ThinkingCap-Qwen3.6-27B (image-text-to-text)
- conradlocke/krea2-identity-edit (image editing)
- OpenMOSS-Team/MOSS-Transcribe-Diarize (audio)
- HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive (multimodal fine-tune)
- empero-ai/Qwythos-9B-v2-GGUF (multimodal quantized)
- open-gigaai/Giga-World-1 (text-to-image)
- baidu/Unlimited-OCR (OCR)
- ATH-MaaS/OvisOCR2 (OCR)
- unsloth/Qwen3.6-27B-NVFP4 (multimodal quantized)
- robbyant/lingbot-world-v2-14b-causal-fast (image-to-video)
- Alissonerdx/LTX-Best-Face-ID (text-to-video)
- mgwr/M87 (text-to-image LoRA)
- robbyant/lingbot-video-moe-30b-a3b (video generation)
- empero-ai/Qwythos-9B-v2 (base multimodal)

🔧 Specialized Models
- Cactus-Compute/needle (function-calling, tool-use)
- froggeric/Qwen-Fixed-Chat-Templates (chat templates)
- baidu/Unlimited-OCR (could be here too)
- ATH-MaaS/OvisOCR2 (here too)
- yuxinlu1/gemma-4-12B-agentic... (agentic, coding) - but it's a fine-tune.

📦 Fine-tunes & Quantizations
- prism-ml/Ternary-Bonsai-27B-gguf
- prism-ml/Bonsai-27B-gguf
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking
- empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF (already in multimodal)
- HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive (multimodal fine-tune)
- empero-ai/Qwythos-9B-v2-GGUF
- AngelSlim/Hy3-GGUF
- jlnsrk/GLM-5.2-colibri-int4
- unsloth/Qwen3.6-27B-NVFP4
- deepreinforce-ai/Ornith-1.0-35B-GGUF
- yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF
- Alissonerdx/LTX-Best-Face-ID (fine-tune for identity)
- mgwr/M87 (LoRA)

But there is overlap. I'll assign each model to one primary category to avoid duplication. For the digest, each model should appear once. I'll choose the most fitting category.

Let's decide:

1. prism-ml/Ternary-Bonsai-27B-gguf -> Fine-tunes & Quantizations (quantization)
2. thinkingmachines/Inkling -> Multimodal & Generation (new multimodal model)
3. empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF -> Multimodal & Generation (multimodal quantized)
4. prism-ml/Bonsai-27B-gguf -> Fine-tunes & Quantizations (quantization)
5. zai-org/GLM-5.2 -> Language Models
6. bottlecapai/ThinkingCap-Qwen3.6-27B -> Multimodal & Generation
7. conradlocke/krea2-identity-edit -> Multimodal & Generation (image editing)
8. OpenMOSS-Team/MOSS-Transcribe-Diarize -> Multimodal & Generation (audio)
9. tencent/Hy3 -> Language Models
10. GnLO

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*