# FAST-LIVO1

建立从“实验室可运行”到“真实场景可部署”的第一代工程基线。

<p class="link-row">GitHub：<a href="https://github.com/hku-mars/FAST-LIVO">https://github.com/hku-mars/FAST-LIVO</a><br />论文：<a href="https://arxiv.org/abs/2203.00893">https://arxiv.org/abs/2203.00893</a></p>

## 项目定位

- **类型**：LiDAR-Inertial-Visual Odometry
- **状态**：✅ 已完成（代表作）
- **主线位置**：Phase A（前端融合贯通）
- **核心价值**：把 LiDAR + Camera + IMU 紧耦合链路打通，形成后续 FAST-LIVO2 的可复用起点。

## 核心亮点

- 多传感器紧耦合状态估计（LiDAR × Vision × IMU）
- 兼顾实时性与精度的工程实现
- 具备跨平台部署潜力（x86 / ARM）
- 为后续全局优化与表示扩展提供稳定前端输入

## 效果展示

<div class="video-card">
  <p class="video-lead">FAST-LIVO1 效果视频</p>
  <a class="video-thumb" href="https://www.youtube.com/watch?v=C6Pb_0W9E_g" target="_blank" rel="noopener noreferrer">
    <span class="video-play" aria-hidden="true"></span>
    <img src="../_static/img/fast-livo1-fig7-cover.png" alt="FAST-LIVO 论文 Fig. 7 封面图" />
    <span class="video-overlay" aria-hidden="true">
      <span class="video-progress"></span>
      <span class="video-meta">
        <span class="video-label">FAST-LIVO1 Demo</span>
        <span class="video-time">1:31</span>
      </span>
    </span>
  </a>
</div>

<div class="video-card">
  <p class="video-lead">FAST-LIVO1 复现教程视频</p>
  <a class="video-thumb" href="https://www.bilibili.com/video/BV1T142197ci" target="_blank" rel="noopener noreferrer">
    <span class="video-play" aria-hidden="true"></span>
    <img src="../_static/img/fast-livo1-official-cover.jpg" alt="FAST-LIVO 复现教程视频封面" />
    <span class="video-overlay" aria-hidden="true">
      <span class="video-progress"></span>
      <span class="video-meta">
        <span class="video-label">GundaSmart · Bilibili</span>
        <span class="video-time">13:10</span>
      </span>
    </span>
  </a>
</div>

## 关联项目

- 下一阶段： [FAST-LIVO2](fast-livo2.md)
- 后端补强： [Global-LVBA](global-lvba.md)
- 工程部署支持： [FAST-Calib](fast-calib.md)、[LIV-Handheld](liv-handheld.md)
