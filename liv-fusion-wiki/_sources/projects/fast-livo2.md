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

## 效果展示

<div class="video-card">
  <p class="video-lead">FAST-LIVO2 效果视频</p>
  <a class="video-thumb" href="https://www.bilibili.com/video/BV1Ezxge7EEi/" target="_blank" rel="noopener noreferrer">
    <span class="video-stat-badge is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1Ezxge7EEi&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0" aria-hidden="true">
      <span class="video-stat-caption">播放量</span>
      <span class="video-stat-value">...</span>
    </span>
    <span class="video-play" aria-hidden="true"></span>
    <img src="../_static/img/fast-livo2-bilibili-cover.jpg" alt="FAST-LIVO2 Bilibili 视频封面" />
    <span class="video-overlay" aria-hidden="true">
      <span class="video-progress"></span>
      <span class="video-meta">
        <span class="video-label">HKU_MARS · Bilibili</span>
        <span class="video-time">1:34</span>
      </span>
    </span>
  </a>
</div>

<div class="video-card">
  <p class="video-lead">FAST-LIVO2 复现教程视频</p>
  <a class="video-thumb" href="https://www.bilibili.com/video/BV1g32EBDE7V/" target="_blank" rel="noopener noreferrer">
    <span class="video-stat-badge is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1g32EBDE7V&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0" aria-hidden="true">
      <span class="video-stat-caption">播放量</span>
      <span class="video-stat-value">...</span>
    </span>
    <span class="video-play" aria-hidden="true"></span>
    <img src="../_static/img/fast-livo2-tutorial-bilibili-cover-crop.jpg" alt="FAST-LIVO2 复现教程 Bilibili 视频封面" />
    <span class="video-overlay" aria-hidden="true">
      <span class="video-progress"></span>
      <span class="video-meta">
        <span class="video-label">重建世界LAB · Bilibili</span>
        <span class="video-time">18:55</span>
      </span>
    </span>
  </a>
</div>

<script src="../_static/video-stats.js"></script>

## 关联项目

- 上一代基线： [FAST-LIVO1](fast-livo1.md)
- 后端优化： [Global-LVBA](global-lvba.md)
- 标定与部署： [FAST-Calib](fast-calib.md)
- 表示扩展： [LIV-GaussMap](liv-gaussmap.md)
