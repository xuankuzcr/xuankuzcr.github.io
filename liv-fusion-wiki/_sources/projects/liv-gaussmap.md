# LIV-GaussMap

把稳健位姿估计进一步扩展为可渲染、可交互场景表示的表示层探索。

<p class="link-row">arXiv：<a href="https://arxiv.org/abs/2401.14857">https://arxiv.org/abs/2401.14857</a></p>

## 项目定位

- **类型**：LIV 融合 + Gaussian 地图表示
- **状态**：✅ 已完成
- **主线位置**：Phase D（表示与任务扩展）
- **核心价值**：将激光视觉融合重建的彩色点云，升级为高保真、光度真实的场景表征。

## 核心亮点

- 将状态估计与 3D Radiance Field 地图直接衔接
- 支撑更强的可视化、重建和下游任务接口
- 为 sim2real 与交互式场景理解提供桥接表示
- 验证了 LIV 融合向高保真表示扩展的可行性

## 效果展示

![LIV-GaussMap Demo](https://raw.githubusercontent.com/sheng00125/LIV-GaussMap/master/fig/rb.gif)