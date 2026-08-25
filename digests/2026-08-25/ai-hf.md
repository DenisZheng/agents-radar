# Hugging Face 热门模型日报 2026-08-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-25 00:54 UTC

---

#  📊 Hugging Face 热门模型日报（2026-08-25）

---

## 🚀 今日速览

1. **Qwen 3.8-27B 确立“社区之王”地位**：官方基座模型以 1.25 万点赞领跑，衍生出超 15 个高热度社区变体（去审查、量化、MLX、推测解码），形成最庞大的单一模型生态圈。  
2. **视频生成进入“实用化竞速期”**：MiniMax-H3（446 万下载）与 LTX-2.5 领跑开源视频模型，MiniMax-Music3 同步推进音频生成，多模态生成能力显著向消费级硬件下沉。  
3. **DeepSeek-V4-Flash 强势入场**：368 万下载、3.6 千点赞，标志着高性能 MoE 模型在开源权重层面持续施压闭源 SOTA。  
4. **本地化部署工具链成熟**：Unsloth GGUF 版下载破 700 万，MLX、FP8、DFlash2（推测解码）等异构加速方案齐发，推理工程化门槛大幅降低。  
5. **“去审查/消融”成社区刚需**：超 40% 热门模型为 Abliterated/Uncensored 变体，反映开发者对模型安全对齐边界的激进探索与实际应用冲突。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,514 | 2,645,226 | 当前开源多模态基座标杆，原生支持图文理解与长上下文，社区微调生态核心。 |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,681 | 3,274,129 | 新一代高效率 MoE 大模型，推理速度与性能平衡极佳，开源权重直接可商用。 |
| [**ornith-ai/Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 397 | 60,294 | 稀疏 MoE 架构（35B 总参数/3B 激活），低显存高性能，适合单卡部署的强推理模型。 |
| [**ornith-ai/Ornith-1.5-9B**](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 202 | 83,192 | Ornith 1.5 系列小参数版，密集模型结构，平衡速度与效果的边缘部署首选。 |
| [**superwhisper/s1-mini**](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 229 | 2,976 | 融合 ASR 与文本生成的小模型，面向语音助手场景的端到端轻量化探索。 |
| [**z-lab/Qwen3.8-27B-DFlash2**](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 214 | 50,763 | 引入 DFlash2 推测解码机制的 Qwen 变体，显著提升长序列生成吞吐。 |
| [**incoai/Qwen3.8-27B-DFlash2**](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 173 | 85,034 | 社区复现的 DFlash2 加速版，验证推测解码在开源大模型上的落地可行性。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,417 | 4,465,161 | 现象级开源视频生成模型，支持文生视频/图生视频，下载量破 440 万验证生产可用性。 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,723 | 790,378 | 单文件扩散视频模型，支持视频生成/编辑/风格迁移，部署极简，创作者工具链宠儿。 |
| [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,228 | 18,065 | 高保真音乐生成模型，文本/风格控制生成完整乐曲，开源音频生成新标杆。 |
| [**Audio8/Audio8-TTS-Preview-0.1b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 145 | 2,775 | 基于 ArkTTS 的流式 TTS 预览版，低延迟合成，探索实时语音交互场景。 |
| [**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 681 | 3,004,940 | 官方发布 FP8 量化多模态版，针对 H100/H200 张量核心优化，大规模推理成本杀手。 |
| [**LBH-123-AI/Minimax_h3_latent_Upscaler**](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 181 | 0 | MiniMax-H3 专用潜空间超分模型，解决视频生成分辨率瓶颈的关键补丁。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入、特殊架构）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| [**ornith-ai/Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 397 | 60,294 | *(重复收录)* 唯一上榜 MoE 专用架构，稀疏激活机制显著降低推理算力门槛。 |
| [**z-lab/Qwen3.8-27B-DFlash2**](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 214 | 50,763 | *(重复收录)* 推测解码专用工程化模型，解决大模型“慢生成

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*