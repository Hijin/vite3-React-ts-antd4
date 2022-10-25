
import EntryInfo  from './entryInfo';
import ViewDate from './viewDate';
import Diagnose from './diagnose';
import Xcg from './xcg';
import Xct from './xct';
import Fgntq from './fgntq';
import Xzsy from './xzsy';
import Jfsy from './jfsy';
import Feno from './feno';
import Rpbzhs from './rpbzhs';
import Tltc from './tltc';
import Yfywff from './yfywff';
import Yjywhs from './yjywhs';
import Blfysj from './blfysj';
import Aqxsf from './aqxsf';
import Lcsyjsy from './lcsyjsy';


const comps: {[key: string]: () => JSX.Element} = {
  // 人口信息
  entryInfo: EntryInfo,
  // 访视日期
  viewDate: ViewDate,
  // 诊断
  diagnose: Diagnose,
  // 血常规
  xcg: Xcg,
  // 胸部CT
  xct: Xct,
  // 肺功能通气
  fgntq: Fgntq,
  // 舒张实验
  xzsy: Xzsy,
  // 激发试验
  jfsy: Jfsy,
  // FeNO
  feno: Feno,
  // 入排标准核实
  rpbzhs: Rpbzhs,
  // 脱落/剔除
  tltc: Tltc,
  // 研究药物发放
  yfywff: Yfywff,
  // 研究药物回收
  yjywhs: Yjywhs,
  // 不良反应事件
  blfysj: Blfysj,
  // 安全性随访
  aqxsf: Aqxsf,
  // 临床试验结束页
  lcsyjsy: Lcsyjsy
}

export default comps;