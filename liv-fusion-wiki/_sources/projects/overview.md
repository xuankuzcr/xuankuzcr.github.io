# SLAM与重建总览

把激光视觉 SLAM 系统 (LIVO) 从“实验室可运行”推进到“真实场景可部署、可维护、可复现”，并持续扩展到全局优化与三维重建。

## 项目状态

<div class="status-grid">
  <a class="status-card" href="fast-calib.md">
    <p class="status-title">FAST-Calib</p>
    <span class="badge done">已完成</span>
    <p>快速标定工具链，降低部署门槛。</p>
  </a>
  <a class="status-card" href="liv-handheld.md">
    <p class="status-title">LIV-Handheld</p>
    <span class="badge done">已完成</span>
    <p>模块化的三维数据采集设备。</p>
  </a>
  <a class="status-card" href="fast-livo1.md">
    <p class="status-title">FAST-LIVO</p>
    <span class="badge done">已完成</span>
    <p>方法与工程基线，打通 LiDAR × Vision × IMU 融合主链路。</p>
  </a>
  <a class="status-card" href="fast-livo2.md">
    <p class="status-title">FAST-LIVO2</p>
    <span class="badge done">已完成</span>
    <p>主力系统版本，强调稳、快与工程可用性。</p>
  </a>
  <a class="status-card" href="camvox.md">
    <p class="status-title">CamVox</p>
    <span class="badge done">已完成</span>
    <p>低成本路线参考，激光辅助视觉的 SLAM 系统。</p>
  </a>
  <a class="status-card" href="global-lvba.md">
    <p class="status-title">Global-LVBA</p>
    <span class="badge done">已完成</span>
    <p>全局一致后端优化，得到像素级位姿精度。</p>
  </a>
  <a class="status-card" href="liv-rtk-fusion.md">
    <p class="status-title">RTK-Fusion</p>
    <span class="badge ongoing">进行中</span>
    <p>补全全局绝对参考，RTK 后处理融合方案。</p>
  </a>
  <a class="status-card" href="liv-gaussmap.md">
    <p class="status-title">LIV-GaussMap</p>
    <span class="badge done">已完成</span>
    <p>为重建的真彩点云赋予光度真实场景表征。</p>
  </a>
  <a class="status-card" href="gs-livo.md">
    <p class="status-title">GS-LIVO</p>
    <span class="badge done">已完成</span>
    <p>实时生成各向异性的 Gaussian Map 并用于定位。</p>
  </a>
</div>

## 研究主线

<div class="timeline">
  <div class="timeline-item">
    <h4>Phase A · 提供数据采集与标定方案</h4>
    <p>LIV-Handheld + FAST-Calib：降低采集与标定门槛，提升复现效率。</p>
  </div>
  <div class="timeline-item">
    <h4>Phase B · 激光视觉融合定位与建图</h4>
    <p>FAST-LIVO / FAST-LIVO2：构建实时稳定高精度的 SLAM 系统。</p>
  </div>
  <div class="timeline-item">
    <h4>Phase C · 全局一致性增强</h4>
    <p>Global-LVBA + RTK-Fusion：降低大尺度 long-term 场景的累计误差。</p>
  </div>
  <div class="timeline-item">
    <h4>Phase D · 表示与任务扩展</h4>
    <p>LIV-GaussMap + GS-LIVO：让地图不仅用于定位，也服务于高保真重建与场景表示。</p>
  </div>
</div>

## 研究资产索引

- 个人主页：<https://xuankuzcr.github.io>
- FAST-LIVO：<https://github.com/hku-mars/FAST-LIVO>
- FAST-LIVO2：<https://github.com/hku-mars/FAST-LIVO2>
- FAST-Calib：<https://github.com/hku-mars/FAST-Calib>
- Global-LVBA：<https://github.com/xuankuzcr/Global-LVBA>
- LIV-Handheld：<https://github.com/xuankuzcr/LIV_handhold>
- CamVox：<https://github.com/ISEE-Technology/CamVox>
- GS-LIVO：<https://github.com/HKUST-Aerial-Robotics/GS-LIVO>
