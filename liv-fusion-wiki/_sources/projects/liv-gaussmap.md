# LIV-GaussMap

激光辅助的3DGS

<p class="link-row">arXiv：<a href="https://arxiv.org/abs/2401.14857">https://arxiv.org/abs/2401.14857</a></p>

## 项目定位

- **类型**：3DGS
- **状态**：✅ 已完成
- **主线位置**：Phase D（表示与任务扩展）
- **核心价值**：将激光视觉融合重建的彩色点云，升级为高保真、光度真实的场景表征。

## 核心亮点

- 基于 LiDAR 点云完成高斯椭球深度与旋转的参数初始化
- 限制高斯椭球仅在 surfel 面片上进行移动、分裂和合并，以此优化结构指标。

## 流程图

![LIV-GaussMap 流程图](/liv-fusion-wiki/_static/img/projects/liv-gaussmap.jpg)
