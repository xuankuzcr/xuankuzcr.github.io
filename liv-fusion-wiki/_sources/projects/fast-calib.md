# FAST-Calib

让外参标定从“部署痛点”变成“分钟级常规流程”的基础工具链。

<p class="link-row">GitHub：<a href="https://github.com/hku-mars/FAST-Calib">https://github.com/hku-mars/FAST-Calib</a> &nbsp;|&nbsp; arXiv：<a href="https://arxiv.org/abs/2507.17210">https://arxiv.org/abs/2507.17210</a></p>

## 项目定位

- **类型**：LiDAR-Camera 外参标定
- **状态**：✅ 已完成（基础工具链）
- **主线位置**：Phase A（多传感器同步与标定）
- **核心价值**：把 LiDAR-Camera 外参标定流程标准化，为 FAST-LIVO 系列和后续系统部署提供稳定入口。

## 核心亮点

- 无需初值的快速外参标定流程
- 同时兼容固态与机械式 LiDAR
- 对 FAST-LIVO 系列部署有直接增益
- 让多传感器系统在工程上更易复现与维护

## 社区复现案例

<div class="video-link-group">
  <div class="video-link-list">
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1c2keBMEgQ" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">重建世界LAB 外参标定讲解</span>
        <span class="video-link-note">重建世界LAB · Bilibili · 17:09</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1c2keBMEgQ&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1gvLgzPEcR" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">GundaSmart 标定与程序部署</span>
        <span class="video-link-note">GundaSmart · Bilibili · 9:08</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1gvLgzPEcR&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1E3rQYQERf" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">GundaSmart 内外参联合标定</span>
        <span class="video-link-note">GundaSmart · Bilibili · 17:42</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1E3rQYQERf&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
  </div>
</div>

## 标定数据集

<div class="video-link-group">
  <div class="video-link-list">
    <a class="video-link-item" href="https://drive.google.com/drive/folders/1W87Dx3MUuPhTpCLvaavWqNUJZV03yU6L?usp=drive_link" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">单场景标定样例数据</span>
        <span class="video-link-note">Google Drive · Mid360 / Avia / Ouster · 单场景静态采集</span>
      </span>
      <span class="video-link-views">数据集</span>
    </a>
    <a class="video-link-item" href="https://drive.google.com/drive/folders/1g__plgFqp5tsk-TY7Ioh4RXru62AdLmr?usp=drive_link" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">多场景联合标定样例数据</span>
        <span class="video-link-note">Google Drive · Avia · 3 场景联合标定</span>
      </span>
      <span class="video-link-views">数据集</span>
    </a>
  </div>
</div>

<script src="../_static/video-stats.js"></script>
