# GS-LIVO

把实时 LIVO 与 Gaussian Mapping 真正打通的高保真实时场景表示系统。

<p class="link-row">GitHub：<a href="https://github.com/HKUST-Aerial-Robotics/GS-LIVO">https://github.com/HKUST-Aerial-Robotics/GS-LIVO</a> &nbsp;|&nbsp; arXiv：<a href="https://arxiv.org/abs/2501.08672">https://arxiv.org/abs/2501.08672</a></p>

## 项目定位

- **类型**：LiDAR-Inertial-Visual Odometry + 3D Gaussian Splatting
- **状态**：✅ 已完成（开源系统参考）
- **主线位置**：Phase D（表示与任务扩展）
- **核心价值**：把稳健的多传感器位姿估计与 Gaussian Mapping 在线打通，形成可实时运行的 LiDAR-3DGS 系统入口。

## 核心亮点

- 在线融合 LiDAR、视觉与 IMU 的 Gaussian Mapping 系统
- 同时兼顾实时估计与高保真场景表达
- 为 LiDAR-3DGS 方向提供公开可复现工程入口
- 可直接服务渲染展示与后续具身任务接口
