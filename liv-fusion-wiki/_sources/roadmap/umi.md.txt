# UMI 研究计划（未来主线）

## 为什么做 UMI

UMI（Universal Manipulation Interface）是我把“SLAM + 融合估计”延伸到“具身操作与示教学习”的关键入口。

## 目标

- 搭建低门槛、高质量的示教与数采系统
- 打通从感知融合到策略学习的数据闭环
- 支持可复用的操作任务基线（抓取、放置、精细操作）

## 技术路线（初版）

1. **设备层**：示教设备与多模态同步（LiDAR/Camera/IMU/力觉）
2. **数据层**：统一数据格式、自动质检、语义标注策略
3. **模型层**：模仿学习 + 扩散策略 + VLA 接口
4. **系统层**：在线回放评测、sim2real 验证闭环

## 和现有项目的关系

- FAST-LIVO / Global-LVBA：提供稳定时空参考与融合 backbone
- LIV-Handheld：提供采集硬件与数据基建经验
- CamVox / low-cost 路线：提供成本可控部署思路
- LIV-GaussMap：提供可交互场景表示能力
