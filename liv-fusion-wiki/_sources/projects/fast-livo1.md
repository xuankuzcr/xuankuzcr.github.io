# FAST-LIVO1

<div class="hero-panel compact">
  <p class="hero-kicker">LIVO Baseline · Real-time · Deployable</p>
  <h2>FAST-LIVO1：实时激光视觉惯性紧耦合里程计</h2>
  <p>建立从“实验室可运行”到“真实场景可部署”的第一代工程基线。</p>
</div>

## 1) 项目定位

- **类型**：LiDAR-Inertial-Visual Odometry
- **状态**：✅ 已完成（代表作）
- **主线位置**：Phase A（前端融合贯通）
- **核心价值**：把 LiDAR + Camera + IMU 紧耦合链路打通，形成后续 FAST-LIVO2 的可复用起点。

## 2) 核心亮点

- 多传感器紧耦合状态估计（LiDAR × Vision × IMU）
- 兼顾实时性与精度的工程实现
- 具备跨平台部署潜力（x86 / ARM）
- 为后续全局优化与表示扩展提供稳定前端输入

## 3) 结果证据（建议看图 + 视频）

- 系统流程图（Framework）
- 退化场景效果图（LiDAR / 视觉挑战）
- 轨迹与点云结果图（对比或典型片段）
- Demo 视频：建议放 90 秒总览 + 完整复现实验

## 4) 复现入口（不在本页展开教程）

- GitHub（README）：<https://github.com/hku-mars/FAST-LIVO>
- 论文：<https://arxiv.org/abs/2203.00893>
- B站建议检索关键词：`FAST-LIVO 复现`、`LIVO SLAM 复现`

> 详细环境配置、运行命令、参数说明请直接看 GitHub README 与 B站复现视频。

## 5) 关联项目

- 下一阶段： [FAST-LIVO2](fast-livo2.md)
- 后端补强： [Global-LVBA](global-lvba.md)
- 工程部署支持： [FAST-Calib](fast-calib.md)、[LIV-Handheld](liv-handheld.md)
