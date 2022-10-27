
import EntryInfo  from './entryInfo';
import ViewDate from './viewDate';
import Diagnose from './diagnose';
import BoutineBlood from './boutineBlood';
import ChestCT from './chestCT';
import LungVentilation from './lungVentilation';
import Broncho from './broncho';
import Jfsy from './jfsy';
import Feno from './feno';
import Rpbzhs from './rpbzhs';
import FallOffOut from './fallOffOut';
import StudyDelivery from './studyDelivery';
import StudyRecycling from './studyRecycling';
import Adverse from './adverse';
import Access from './access';
import EndPage from './endPage';


const comps: {[key: string]: () => JSX.Element} = {
  // 人口信息
  entryInfo: EntryInfo,
  // 访视日期
  viewDate: ViewDate,
  // 诊断
  diagnose: Diagnose,
  // 血常规
  boutineBlood: BoutineBlood,
  // 胸部CT
  chestCT: ChestCT,
  // 肺功能通气
  lungVentilation: LungVentilation,
  // 舒张实验
  broncho: Broncho,
  // 激发试验
  jfsy: Jfsy,
  // FeNO
  feno: Feno,
  // 入排标准核实
  rpbzhs: Rpbzhs,
  // 脱落/剔除
  fallOffOut: FallOffOut,
  // 研究药物发放
  studyDelivery: StudyDelivery,
  // 研究药物回收
  studyRecycling: StudyRecycling,
  // 不良反应事件
  adverse: Adverse,
  // 安全性随访
  access: Access,
  // 临床试验结束页
  endPage: EndPage
}

export default comps;