export type UMInfo = {
  id: string;
  name: string;
  isFinish?: boolean;
}
// 检查项
export const USE_MODES: UMInfo[] = [
  {
    id: 'entryInfo',
    name: '人口信息学',
  },
  {
    id: 'viewDate',
    name: '访视日期',
  },
  {
    id: 'diagnose',
    name: '诊断',
  },
  {
    id: 'boutineBlood',
    name: '血常规',
  },
  {
    id: 'chestCT',
    name: '胸部CT',
    isFinish: true
  },
  {
    id: 'lungVentilation',
    name: '肺功能通气',
  },
  {
    id: 'broncho',
    name: '舒张实验',
  },
  {
    id: 'jfsy',
    name: '激发试验',
  },
  {
    id: 'feno',
    name: 'FeNO',
  },
  {
    id: 'rpbzhs',
    name: '入排标准核实',
  },
  {
    id: 'fallOffOut',
    name: '脱落/剔除',
  },
  {
    id: 'studyDelivery',
    name: '研究药物发放',
  },
  {
    id: 'studyRecycling',
    name: '研究药物回收',
  },
  {
    id: 'adverse',
    name: '不良反应事件',
  },
  {
    id: 'access',
    name: '安全性随访',
  },
  {
    id: 'endPage',
    name: '临床试验结束页',
  }
]
// 性别
export const gender = {
  male: { value: 0, label: '男性' },
  female: { value: 1, label: '女性' },
  secret: { value: 2, label: '保密' },
}