# FAST-LIVO2

在 FAST-LIVO1 基础上，进一步强化鲁棒性、效率与工程可用性。

<p class="link-row">GitHub：<a href="https://github.com/hku-mars/FAST-LIVO2">https://github.com/hku-mars/FAST-LIVO2</a> &nbsp;|&nbsp; arXiv：<a href="https://arxiv.org/abs/2408.14035">https://arxiv.org/abs/2408.14035</a></p>

## 项目定位

- **类型**：Fast, Direct LiDAR-Inertial-Visual Odometry
- **状态**：✅ 已完成（主力系统）
- **主线位置**：Phase A → Phase C 过渡（前端稳态 + 全局能力衔接）
- **核心价值**：从“可用”走向“可持续稳定部署”。

## 核心亮点

- 相比 FAST-LIVO1，进一步提升复杂场景鲁棒性
- 更强的资源利用效率，对边缘设备更友好
- 视觉与 LiDAR 融合更紧密，整体系统稳定性更高
- 更适合作为后续全局优化与长期运行主线

## 效果展示与复现视频

<div class="video-link-group">
  <p class="video-link-group-title">效果展示</p>
  <div class="video-link-list">
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1Ezxge7EEi/" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">官方 FAST-LIVO2 演示</span>
        <span class="video-link-note">HKU_MaRS · Bilibili · 10:07</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1Ezxge7EEi&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1eFoBY2Egg" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">ROS2 Jetson + Mid360 + D435i 复现展示</span>
        <span class="video-link-note">Azusa-Cat · Bilibili · 1:35</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1eFoBY2Egg&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1o1foYyExc" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">中山大学 FAST-LIVO2 效果实测</span>
        <span class="video-link-note">轮式具身智能机器人 · Bilibili · 4:11</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1o1foYyExc&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1HXfJYLEj5" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">FAST-LIVO2 与 FAST-LIVO1 对比演示</span>
        <span class="video-link-note">随东风赴山海 · Bilibili · 4:34</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1HXfJYLEj5&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
  </div>
</div>

<div class="video-link-group">
  <p class="video-link-group-title">复现与工程补充</p>
  <div class="video-link-list">
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1j8RgYvEWJ" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">GundaSmart FAST-LIVO2 工程系列</span>
        <span class="video-link-note">GundaSmart · Bilibili · 共 4 条 · 介绍 / 适配 / 硬件 / 标定 / 效果答疑</span>
      </span>
      <span class="video-link-views" data-stat-collection="gundasmart-fast-livo2-series" data-stat-fallback="4.5万">4.5万播放</span>
    </a>
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1W3k6BxEVD?spm_id_from=333.788.videopod.sections" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">计算机视觉Life《FAST-LIVO2》合集</span>
        <span class="video-link-note">计算机视觉life · Bilibili · 共 31 条 · 理论 / 论文 / 实验 / 结果分析</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1W3k6BxEVD&query=%24.data.ugc_season.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0" data-stat-fallback="6万">6万播放</span>
    </a>
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1g32EBDE7V/" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">FAST-LIVO2 环境安装与重建效果课程</span>
        <span class="video-link-note">重建世界LAB · Bilibili · 18:55</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1g32EBDE7V&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1qTP2ebEEc" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">FAST-LIVO2 全流程复现</span>
        <span class="video-link-note">轮式具身智能机器人 · Bilibili · 10:24</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1qTP2ebEEc&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
  </div>
</div>

<script src="../_static/video-stats.js"></script>

## 关联项目

- 上一代基线： [FAST-LIVO1](fast-livo1.md)
- 后端优化： [Global-LVBA](global-lvba.md)
- 标定与部署： [FAST-Calib](fast-calib.md)
- 表示扩展： [LIV-GaussMap](liv-gaussmap.md)
