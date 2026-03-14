# FAST-LIVO1

建立从“实验室可运行”到“真实场景可部署”的第一代工程基线。

<p class="link-row">GitHub：<a href="https://github.com/hku-mars/FAST-LIVO">https://github.com/hku-mars/FAST-LIVO</a> &nbsp;|&nbsp; arXiv：<a href="https://arxiv.org/abs/2203.00893">https://arxiv.org/abs/2203.00893</a></p>

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

## 效果展示与复现视频

<div class="video-link-group">
  <p class="video-link-group-title">效果展示</p>
  <div class="video-link-list">
    <a class="video-link-item" href="https://www.bilibili.com/video/BV15q4y1i7sj" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">官方 FAST-LIVO 演示</span>
        <span class="video-link-note">HKU_MaRS · Bilibili · 2:13</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV15q4y1i7sj&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1rd4y1v7Fd" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">深圳大学 FAST-LIVO 建图测试</span>
        <span class="video-link-note">NURAMI-_- · Bilibili · 4:37</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1rd4y1v7Fd&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1Zz4y1a7k3" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">手持平台展示与东北大学科学馆试跑</span>
        <span class="video-link-note">FAST-LIVO 系列 · Bilibili · 1:44</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1Zz4y1a7k3&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1D84y1p74U" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">官方数据集演示 hku1.bag</span>
        <span class="video-link-note">FAST-LIVO 系列 · Bilibili · 2:13</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1D84y1p74U&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
  </div>
</div>

<div class="video-link-group">
  <p class="video-link-group-title">复现与工程补充</p>
  <div class="video-link-list">
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1T142197ci" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">GundaSmart《SLAM专题》合集</span>
        <span class="video-link-note">GundaSmart · Bilibili · 共 16 条 · FAST-LIVO1/2 / 标定 / 同步 / 部署</span>
      </span>
      <span class="video-link-views" data-stat-collection="gundasmart-slam-topic" data-stat-fallback="17万">17万播放</span>
    </a>
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1SCTMz6EUM" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">FAST-LIVO 时间同步设备制作过程</span>
        <span class="video-link-note">随东风赴山海 · Bilibili · 4:31</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1SCTMz6EUM&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
  </div>
</div>

<script src="../_static/video-stats.js"></script>

## 关联项目

- 下一阶段： [FAST-LIVO2](fast-livo2.md)
- 后端补强： [Global-LVBA](global-lvba.md)
- 工程部署支持： [FAST-Calib](fast-calib.md)、[LIV-Handheld](liv-handheld.md)
