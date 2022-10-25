export type UMInfo = {
  id: string;
  name: string;
  isFinish?: boolean;
}
// 检查项
export const USE_MODES: UMInfo[]  = [
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
    id: 'xcg',
    name: '血常规',
  },
  {
    id: 'xct',
    name: '胸部CT',
    isFinish: true
  },
  {
    id: 'fgntq',
    name: '肺功能通气',
  },
  {
    id: 'xzsy',
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
    id: 'tltc',
    name: '脱落/剔除',
  },
  {
    id: 'yfywff',
    name: '研究药物发放',
  },
  {
    id: 'yjywhs',
    name: '研究药物回收',
  },
  {
    id: 'blfysj',
    name: '不良反应事件',
  },
  {
    id: 'aqxsf',
    name: '安全性随访',
  },
  {
    id: 'lcsyjsy',
    name: '临床试验结束页',
  }
]