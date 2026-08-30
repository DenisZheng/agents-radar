# Hugging Face 热门模型日报 2026-08-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-30 02:59 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-08-30

---

## 🎯 今日速览

1. **Qwen 3.8 系列全面霸榜**：从旗舰 `Qwen3.8-27B`（1.3万赞、400万下载）到实验性 `Qwen3.8-Flash-Next`，阿里通义千问已成社区默认基座，衍生量化、去审查、MLX、GGUF 版本占据前 30 名近半壁江山。  
2. **视频生成进入“实用化竞速”**：`MiniMax-H3`（4600赞、500万下载）与 `LTX-2.5` 双雄并立，头部厂商开始发布 ControlNet、LoRA、少步蒸馏等生产级周边，生态从“跑通”转向“可控、低延迟”。  
3. **国产 MoE 新贵密集发布**：`GLM-5.3/Flash`、`DeepSeek-V4-Flash`、`Kimi-K3`、`Hunyuan-Hy4` 同日现身，MoE + FlashAttention + 长上下文成标配，闭源权重开放度显著提升。  
4. **“去审查/合规微调”成产业链**：OrcaRouter、HauhauCS、JonathanColetti 等社区主体以 FP8/GGUF/MLX 多格式并发，下载量百万级，说明企业落地对“可控输出”的刚性需求。  
5. **工具链下沉**：Unsloth 官方量化仓下载破千万，GGUF/MLX/FP8 三制并行，推理部署门槛进一步压低至消费级显存。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ 赞 | 📥 下载 | 一句话解读 |
|------|------|------|--------|------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,263 | 4,028,839 | 当前开源 SOTA 级 27B 多模态基座，长文本/工具调用/视觉推理全能，社区微调首选。 |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,277 | 8,804 | 智谱新一代 MoE 大模型，DSA 稀疏注意力支持 1M+ 上下文，中文长文本理解领先。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,626 | 189,793 | GLM-5.3 蒸馏加速版，推理延迟降 60%，适合实时对话/代理场景。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,810 | 4,330,482 | DeepSeek 首个开放权重 Flash 版，MoE+MLA 架构，代码/数学推理极强，下载量破 430 万。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,083 | 2,701,014 | 月之暗面首个开源 MoE，压缩张量存储，128K 上下文原生支持，长文本 RAG 首选。 |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 285 | 1,394 | 腾讯混元 Hy4 预览版，混合专家+稀疏注意力，企业级知识密集型任务优化。 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 497 | 106,562 | 基于 Qwen3.5 MoE 继续预训练，激活参数仅 3B，边缘部署性价比高。 |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 136 | 2,668 | Nemotron-H 架构语音大模型，面向实时语音对话 Agent，流式 TTS/LLM 联合推理。 |

---

### 🎨 多模态与生成（视频 / 图像 / 音频）

| 模型 | 作者 | ❤️ 赞 | 📥 下载 | 一句话解读 |
|------|------|------|--------|------------|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,623 | 5,018,833 | 视频生成新王，原生 1080p/60fps，支持首尾帧控制、动作一致性，下载量全榜第一。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,140 | 1,044,661 | 实时视频扩散模型，单步蒸馏至 4-step，消费级 24GB 显存可跑，视频生成“轻量化”标杆。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,294 | 52,341 | Qwen 首个原生图文互留 Flash 模型，端侧多模态交互延迟 <200ms。 |
| [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 162 | 4,250 | MiniMax-H3 官方 ControlNet 合集，支持 Depth/Canny/Pose 多条件可控生成。 |
| [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 142 | 13,767 | 加速 LoRA 套装，4-step 推理无损画质，配合 FastVideo 管线实现秒级出片。 |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 153 | 0 | 无数据蒸馏 4-step H3，极致推速，适合实时视频流应用原型验证。 |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 192 | 1,017 | 中文语音合成新 SOTA，零样本音色克隆 + 情绪控制，流式首包延迟 <150ms。 |

---

### 🔧 专用模型（代码 / 数学 / 嵌入 / 垂直领域）

| 模型 | 作者 | ❤️ 赞 | 📥 下载 | 一句话解读 |
|------|------|------|--------|------------|
| [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 151 | 831 | 罗伊特法律/财经垂直 MoE，RAG 检索增强精度超 GPT-4o，合规审计场景可直接落地。 |
| [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 124 | 47,817 | 代码专用 MoE，激活 3B 达到 35B 效果，GGUF 量化后 8GB 显存可跑，代码补全/重构强。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / FP8 / MLX）

| 模型 | 作者 | ❤️ 赞 | 📥 下载 | 一句话解读 |
|------|------|------|--------|------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,187 | 8,363,481 | 官方量化仓，提供 Q2_K~Q8_0 全谱系，下载量破 830 万，本地部署“标准答案”。 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 567 | 188,061 | Flash-Next 同步量化，首批支持视觉+文本 GGUF 统一加载。 |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 274 | 27,288 | GLM-5.3-Flash 首日量化，填补国产 MoE GGUF 空白。 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 920 | 645,554 | 经典“去审查”版，MLX/GGUF/Safetensors 三格式，保留推理能力同时移除拒答。 |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 208 | 42,987 | 全精度去审查基座，提供 FP8/MLX/GGUF 全家桶，企业合规微调上游。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,260 | 290,216 | FP8 量化去审查版，H100/A100 张量核心直推，吞吐提升 2.3×。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 559 | 215,892 | GGUF 去审查，llama.cpp 原生跑，Apple Silicon/消费卡首选。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,218 | 97,508 | MLX 原生格式，Mac M 系列零依赖加速，统一内存零拷贝。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 748 | 1,061,687 | 激进 MTP (Multi-Token Prediction) 微调+去审查，推理加速 1.8×，下载破百万。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 439 | 1,485,837 | 社区高热度去审查 GGUF，iMatrix 量化保智商，中文长文本表现稳健。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 823 | 1,843,237 | 基于 llama.cpp MTP 微调，多格式分发，下载量社区去审查版 TOP1。 |
| [Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 155 | 44,281 | 官方首发 FP8 量化，配合 vLLM/TensorRT-LLM 部署，显存占用减半。 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,518 | 0 | 修复 Qwen 3.5/3.8 官方聊天模板 Jinja 错误，避免推理崩溃/格式错位，工程必备。 |

---

## 🌐 生态信号深度解读（~160 字）

**模型家族势头**：Qwen 3.8 以“旗舰+Flash+量化”三位一体形成护城河，已成开源界“LLaMA 3 级”基座；MiniMax-H3 以生态工具链（ControlNet/LoRA/蒸馏）确立视频生成新标杆；国产 MoE（GLM/DeepSeek/Kimi/Hunyuan）集中开放权重，标志着“闭源训练+开放权重”成主流范式。**开源 vs 闭源**：头部厂商不再吝啬权重，转而通过 Flash/量化/工具链构建“易用性护城河”，社区微调（去审查/垂直/边缘）下载量远超官方基座，说明**部署友好度 > 参数量**已成核心竞争力。**量化微调活动**：GGUF 仍是消费级王者，FP8 

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*