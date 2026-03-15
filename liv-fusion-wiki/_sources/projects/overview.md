# SLAM与重建总览

把 LIVO 从“实验室可运行”推进到“真实场景可部署、可维护、可复现”，并持续扩展到全局优化与三维重建表示。

## 项目状态

<div class="status-grid">
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
  <a class="status-card" href="fast-calib.md">
    <p class="status-title">FAST-Calib</p>
    <span class="badge done">已完成</span>
    <p>快速标定工具链，降低部署门槛。</p>
  </a>
  <a class="status-card" href="global-lvba.md">
    <p class="status-title">Global-LVBA</p>
    <span class="badge done">已完成</span>
    <p>全局一致后端优化，补强长程收敛。</p>
  </a>
  <a class="status-card" href="liv-handheld.md">
    <p class="status-title">LIV-Handheld</p>
    <span class="badge done">已完成</span>
    <p>采集与同步平台，提升实验复现效率。</p>
  </a>
  <a class="status-card" href="camvox.md">
    <p class="status-title">CamVox</p>
    <span class="badge done">已完成</span>
    <p>低成本路线参考，平衡成本与性能。</p>
  </a>
  <a class="status-card" href="liv-rtk-fusion.md">
    <p class="status-title">RTK-Fusion</p>
    <span class="badge ongoing">进行中</span>
    <p>补全全局绝对参考，增强跨场景重访稳定性。</p>
  </a>
  <a class="status-card" href="liv-gaussmap.md">
    <p class="status-title">LIV-GaussMap</p>
    <span class="badge done">已完成</span>
    <p>融合几何系统向高保真表示能力延展。</p>
  </a>
  <a class="status-card" href="gs-livo.md">
    <p class="status-title">GS-LIVO</p>
    <span class="badge done">已完成</span>
    <p>公开可复现的 LiDAR-3DGS 工程入口与系统参考。</p>
  </a>
</div>

## 研究主线

<div class="timeline">
  <div class="timeline-item">
    <h4>Phase A · 前端融合跑通</h4>
    <p>FAST-LIVO / FAST-LIVO2：建立稳定实时估计主线，保障高频可用。</p>
  </div>
  <div class="timeline-item">
    <h4>Phase B · 部署成本降低</h4>
    <p>FAST-Calib + LIV-Handheld：降低标定与采集门槛，提升复现效率。</p>
  </div>
  <div class="timeline-item">
    <h4>Phase C · 全局一致性增强</h4>
    <p>Global-LVBA + RTK-Fusion：补强长程收敛，服务大尺度重访。</p>
  </div>
  <div class="timeline-item">
    <h4>Phase D · 表示与任务扩展</h4>
    <p>LIV-GaussMap + GS-LIVO：让地图不仅用于定位，也服务高保真重建与场景表示。</p>
  </div>
</div>

## 研究资产索引

- 个人主页：<https://github.com/xuankuzcr/xuankuzcr.github.io>
- FAST-LIVO：<https://github.com/hku-mars/FAST-LIVO>
- FAST-LIVO2：<https://github.com/hku-mars/FAST-LIVO2>
- FAST-Calib：<https://github.com/hku-mars/FAST-Calib>
- Global-LVBA：<https://github.com/xuankuzcr/Global-LVBA>
- LIV-Handheld：<https://github.com/xuankuzcr/LIV_handhold>
- CamVox：<https://github.com/ISEE-Technology/CamVox>
- GS-LIVO：<https://github.com/HKUST-Aerial-Robotics/GS-LIVO>
