# GS-LIVO

实时生成并更新用八叉树管理的Gaussian Map，并将其用于定位。

<p class="link-row">GitHub：<a href="https://github.com/HKUST-Aerial-Robotics/GS-LIVO">https://github.com/HKUST-Aerial-Robotics/GS-LIVO</a> &nbsp;|&nbsp; arXiv：<a href="https://arxiv.org/abs/2501.08672">https://arxiv.org/abs/2501.08672</a></p>

## 项目定位

- **类型**：GS-SLAM
- **状态**：✅ 已完成
- **主线位置**：Phase D（表示与任务扩展）
- **核心价值**：用各向异性的高斯椭球来表征 LIVO 的地图

## 核心亮点

- 在线初始化和优化高斯地图   
- 增量更新相机视野内的高斯子地图，维护连续 GPU 内存和哈希表离散内存的双向映射

## 效果展示

1. 在线初始化和更新 Gaussian Map

   <video controls autoplay loop muted playsinline preload="metadata" style="width: 100%; max-width: 960px; border: 1px solid #d9e7ef; border-radius: 12px;">
     <source src="/liv-fusion-wiki/_static/img/projects/gs-livo/online_initialization.webm" type="video/webm">
   </video>

2. 高斯椭球细节

   <video controls autoplay loop muted playsinline preload="metadata" style="width: 100%; max-width: 960px; border: 1px solid #d9e7ef; border-radius: 12px;">
     <source src="/liv-fusion-wiki/_static/img/projects/gs-livo/detail_of_ellipsoid.webm" type="video/webm">
   </video>
