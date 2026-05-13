# Hugging Face Trending Models Digest 2026-05-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-13 00:35 UTC

---

**Hugging Face Trending Models Digest – May 13, 2026**

---

### **Today's Highlights**  
The ecosystem continues to see strong momentum around open-weight, instruction-tuned large language models—especially from DeepSeek, Qwen, and Gemma—with multiple variants hitting top weekly likes. Multimodal generation is also heating up, with SulphurAI’s text-to-video pipeline leading engagement and HiDream-ai pushing image-text-to-image capabilities via Qwen3 VL integration. Notably, speculative decoding optimizations (e.g., z-lab’s DFlash) and uncensored fine-tunes reflect growing demand for performance-enhanced, community-driven variants.

---

### **Trending Models**

#### 🧠 **Language Models**  
- **deepseek-ai/DeepSeek-V4-Pro** ([link](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro))  
  *Author: deepseek-ai | Likes: 3,890 | Downloads: 2,017,835*  
  A high-performance conversational LLM leveraging advanced reasoning architecture; trending due to its exceptional throughput and open availability.

- **Qwen/Qwen3.6-35B-A3B** ([link](https://huggingface.co/Qwen/Qwen3.6-35B-A3B))  
  *Author: Qwen | Likes: 1,735 | Downloads: 3,858,503*  
  A MoE-based multimodal model excelling at long-context conversations and vision tasks, driving adoption in enterprise chat applications.

- **google/gemma-4-31B-it** ([link](https://huggingface.co/google/gemma-4-31B-it))  
  *Author: google | Likes: 2,609 | Downloads: 9,119,339*  
  Google’s latest open-weight Gemma iteration supports image-text understanding and conversational use, favored for its balance of size and capability.

#### 🎨 **Multimodal & Generation**  
- **SulphurAI/Sulphur-2-base** ([link](https://huggingface.co/SulphurAI/Sulphur-2-base))  
  *Author: SulphurAI | Likes: 731 | Downloads: 157,648*  
  An end-to-end text-to-video generator using advanced diffusion pipelines, notable for high-quality motion synthesis and US-region endpoint compatibility.

- **HiDream-ai/HiDream-O1-Image** ([link](https://huggingface.co/HiDream-ai/HiDream-O1-Image))  
  *Author: HiDream-ai | Likes: 270 | Downloads: 3,418*  
  Integrates Qwen3 VL for unified image-text-to-image generation, appealing to creative AI developers building hybrid visual systems.

- **k2-fsa/OmniVoice** ([link](https://huggingface.co/k2-fsa/OmniVoice))  
  *Author: k2-fsa | Likes: 855 | Downloads: 2,224,595*  
  A multilingual zero-shot TTS system enabling voice cloning across languages, widely adopted in localization and accessibility tools.

#### 🔧 **Specialized Models**  
- **openai/privacy-filter** ([link](https://huggingface.co/openai/privacy-filter))  
  *Author: openai | Likes: 1,421 | Downloads: 190,993*  
  Token classification tool for detecting personally identifiable information (PII), increasingly used by privacy-conscious organizations.

- **XiaomiMiMo/MiMo-V2.5-Pro** ([link](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro))  
  *Author: XiaomiMiMo | Likes: 511 | Downloads: 41,654*  
  Optimized for long-context agentic workflows, supporting extended memory and retrieval-augmented generation.

#### 📦 **Fine-tunes & Quantizations**  
- **unsloth/Qwen3.6-35B-A3B-GGUF** ([link](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF))  
  *Author: unsloth | Likes: 1,009 | Downloads: 2,733,708*  
  Ultra-efficient GGUF quantization of the Qwen MoE model, enabling fast inference on consumer hardware with minimal quality loss.

- **Jiunsong/supergemma4-26b-uncensored-gguf-v2** ([link](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2))  
  *Author: Jiunsong | Likes: 559 | Downloads: 287,827*  
  Community uncensored variant of Gemma4 optimized for unfiltered creative and technical tasks, popular among power users.

---

### **Ecosystem Signal**  
The Hugging Face ecosystem shows clear momentum toward **open-weight, instruction-tuned LLMs**, especially within the **Gemma**, **Qwen**, and **DeepSeek** families. These models are being rapidly fine-tuned, quantized, and repurposed by the community—evidenced by the proliferation of GGUF variants (e.g., unsloth, heretic, MTP) that prioritize local deployment. Multimodal generation is expanding beyond images into **video (text-to-video)** and **audio (TTS/voice cloning)**, with new pipelines like SulphurAI’s entering the top trends. Meanwhile, **OpenAI’s privacy filter** signals institutional interest in safety infrastructure. The rise of **speculative decoding enhancements (DFlash)** and **MoE architectures** reflects a broader shift toward scalable, efficient inference without sacrificing quality. Overall, the landscape remains dominated by open models with strong community tooling, though proprietary endpoints (like those marked `region:us`) are gaining traction for latency-sensitive applications.

---

### **Worth Exploring**  

1. **deepseek-ai/DeepSeek-V4-Pro**  
   With over 3,800 weekly likes and massive downloads, this model represents one of the most capable open-weight LLMs currently available. Its reasoning-focused design makes it ideal for technical and analytical workloads.

2. **k2-fsa/OmniVoice**  
   As a zero-shot, multilingual TTS model with >2M downloads, OmniVoice demonstrates how voice technology is becoming accessible across languages—perfect for studying low-resource speech synthesis or integrating into global apps.

3. **unsloth/Qwen3.6-35B-A3B-GGUF**  
   This GGUF version enables state-of-the-art multimodal performance on modest hardware. It’s an excellent example of how community quantization efforts can democratize access to powerful models.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*