# 具身智能项目总览

<div class="hero-panel compact">
  <p class="hero-kicker">Embodied Intelligence · Data → Policy Loop</p>
  <h2>从融合感知到操作学习闭环</h2>
  <p>目标不是单点算法，而是可复现的数据—训练—评测系统能力。</p>
</div>

## 主线结构（两部分）

### Part 1 · 数据与策略闭环

1. **LIV-UMI 数采设备**：稳定采集多模态示教数据。
2. **UMI-SLAM**：为示教与回放提供可靠时空基座。
3. **数据回放与质检**：提高数据有效率和可复用性。
4. **DP 模型训练与评测**：形成策略模型迭代闭环。

### Part 2 · XLeRobot 复现

5. **机械结构&电控**：完成硬件系统搭建、板卡连接与整机联调。
6. **遥操&ACT**：打通示教、训练、评测与真实机器人部署链路。

## 关键目标

- 提升示教数据质量与一致性
- 缩短从采集到可训练数据的处理周期
- 建立统一评测口径（成功率、稳定性、泛化）
- 让研究成果可迁移到真实机器人平台

## 快速入口

### 数据与策略闭环
- [LIV-UMI 数采设备](liv-umi.md)
- [UMI-SLAM](umi-slam.md)
- [数据回放与质检](data-replay-qc.md)
- [DP 模型训练与评测](dp-training-eval.md)

### XLeRobot 复现
- [机械结构&电控](xlerobot-mech-electrical.md)
- [遥操&ACT](xlerobot-teleop-act.md)
