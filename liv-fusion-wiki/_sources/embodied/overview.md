# 具身智能总览

从融合感知到操作学习闭环，目标不是做单点算法，而是建立可复现的数据、训练与评测系统能力。

## 项目状态

<div class="status-grid">
  <a class="status-card" href="liv-umi.md">
    <p class="status-title">Omni-UMI 数采设备</p>
    <span class="badge ongoing">进行中</span>
    <p>搭建稳定的多模态示教采集入口，沉淀可复用硬件与流程。</p>
  </a>
  <a class="status-card" href="umi-slam.md">
    <p class="status-title">UMI-SLAM</p>
    <span class="badge ongoing">进行中</span>
    <p>为示教、回放与策略训练提供可靠的时空基座。</p>
  </a>
  <a class="status-card" href="data-replay-qc.md">
    <p class="status-title">数据回放与质检</p>
    <span class="badge ongoing">进行中</span>
    <p>建立数据回放、筛查和问题定位闭环，提高数据有效率。</p>
  </a>
  <a class="status-card" href="dp-training-eval.md">
    <p class="status-title">DP 模型训练与评测</p>
    <span class="badge ongoing">进行中</span>
    <p>形成训练、验证和迭代的基础评测流程。</p>
  </a>
</div>

## 研究主线

<div class="timeline">
  <div class="timeline-item">
    <h4>Phase A · 示教采集入口搭建</h4>
    <p>Omni-UMI：先把多模态示教采集系统搭起来，保证数据入口稳定、可复用。</p>
  </div>
  <div class="timeline-item">
    <h4>Phase B · 时空基座与数据闭环</h4>
    <p>UMI-SLAM + 数据回放与质检：建立示教、回放、问题定位和数据筛查的基础链路。</p>
  </div>
  <div class="timeline-item">
    <h4>Phase C · 策略训练与评测流程</h4>
    <p>DP 模型训练与评测：形成从数据整理到训练验证的基础评测闭环。</p>
  </div>
</div>

## 关键目标

- 提升示教数据质量与一致性
- 缩短从采集到可训练数据的处理周期
- 建立统一评测口径（成功率、稳定性、泛化）
- 让研究成果可迁移到真实机器人平台
