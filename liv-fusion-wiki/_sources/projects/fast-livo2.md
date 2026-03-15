# FAST-LIVO2

在 FAST-LIVO 基础上，进一步强化鲁棒性、效率与工程可用性。

<p class="link-row">GitHub：<a href="https://github.com/hku-mars/FAST-LIVO2">https://github.com/hku-mars/FAST-LIVO2</a> &nbsp;|&nbsp; arXiv：<a href="https://arxiv.org/abs/2408.14035">https://arxiv.org/abs/2408.14035</a></p>

## 项目定位

- **类型**：Fast, Direct LiDAR-Inertial-Visual Odometry
- **状态**：✅ 已完成
- **主线位置**：Phase B（激光视觉融合定位与建图）
- **核心价值**：从“可用”走向“可持续稳定部署”。

## 核心亮点

- **实时高精度重建:** 系统能够实时生成照片级高精度的稠密彩色点云。更重要的是，它可以在基于ARM架构的低算力平台 (如rk3588，Jetson Orin NX，RB5等) 上实时运行。
- **极端环境下的稳定性:** 可以在极度退化且无GPS信号的矿洞隧道里 (超过25min采集) 稳定建图且返回原点。另外我们还在大量激光雷达/视觉退化数据 (超过2TB) 上进行过测试，验证了其高效和鲁棒性。
- **无人机自主导航突破:** FAST-LIVO2是世界上首个将激光雷达-惯性-视觉里程计 (LIVO) 系统应用于无人机自动导航的方案。它使得无人机能够在激光雷达和视觉均退化的场景中保持稳定工作。
- **航空测绘精度提升:** 有效解决了航空测绘中出现的激光雷达退化或点云测量不准导致的累计误差问题 (空对地距离太远，光斑效应明显)，进而得到像素级建图结果。
- **3D场景表达的下游应用支持:** 为下游应用 (如Mesh生成以及纹理贴图，深度监督的3D Gaussian Splatting等) 快速生成稠密且准确的大规模彩色点云和相机位姿。
- **实景三维扫描:** 凭借非接触、高精度、高细节、高效率、大尺度等特性获取古代建筑，地貌景观等三维数据，然后导入UE5建模软件中，使得游戏 (比如黑神话悟空DLC) 中建筑在细节上能与现实世界相媲美。

## 效果展示

<div class="video-link-group">
  <div class="video-link-list">
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1Ezxge7EEi" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">FAST-LIVO2</span>
        <span class="video-link-note">HKU_MaRS · Bilibili · 10:07</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1Ezxge7EEi&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
  </div>
</div>

## 社区复现案例与论文讲解

<div class="video-link-group">
  <div class="video-link-list">
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1j8RgYvEWJ" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">FAST-LIVO2专题系列</span>
        <span class="video-link-note">GundaSmart · Bilibili · 合集</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1j8RgYvEWJ&query=%24.data.ugc_season.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1g32EBDE7V/" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">三维扫描仪制作教程</span>
        <span class="video-link-note">重建世界LAB · Bilibili · 合集</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1g32EBDE7V&query=%24.data.ugc_season.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
    <a class="video-link-item" href="https://www.bilibili.com/video/BV1W3k6BxEVD?spm_id_from=333.788.videopod.sections" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">FAST-LIVO2论文讲解</span>
        <span class="video-link-note">计算机视觉life · Bilibili · 合集</span>
      </span>
      <span class="video-link-views is-loading" data-stat-url="https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1W3k6BxEVD&query=%24.data.ugc_season.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0">...</span>
    </a>
  </div>
</div>

## 数据集

<div class="video-link-group">
  <div class="video-link-list">
    <a class="video-link-item" href="https://drive.google.com/drive/folders/1bf5LQ8iSxw-fD8BObZmouw7lRxNacfrA" target="_blank" rel="noopener noreferrer">
      <span class="video-link-main">
        <span class="video-link-title">FAST-LIVO2 数据集</span>
        <span class="video-link-note">Google Drive</span>
      </span>
      <span class="video-link-views">数据集</span>
    </a>
  </div>
</div>

<script src="../_static/video-stats.js"></script>
