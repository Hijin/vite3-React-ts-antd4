import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import cs from 'classnames';
import './index.less';


const USE_MODES: UMInfo[]  = [
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

type UMInfo = {
  id: string;
  name: string;
  isFinish?: boolean;
}

const Baseline = () => {
  const [uminfo, setUminfo] = useState<UMInfo>({
    id: 'entryInfo',
    name: '人口信息学',
  });
  const [querystr] = useSearchParams();
  // 是否入组
  const isGroup: number = parseInt(querystr.get('isg') || '');
  // 随访状态
  const isView = parseInt(querystr.get('isv') || '');
  // 基线名称
  const baseName = querystr.get('tl');

  return (
    <section className='bl-um-wrapper'>
      <header className='bl-um-header'>
        <span className='bl-um-wrapper-sub'>患者管理&nbsp;/&nbsp;{['已入组患者', '未入组患者'][isGroup]}&nbsp;/&nbsp;</span>{baseName}<span className='bl-um-wrapper-sup'>({['未随访', '已随访', '已逾期'][isView]})</span>
      </header>
      <section className='bl-um-mode-wrap'>
        <header className='bl-um-mode-head'>功能模块</header>
        <section className='bl-um-mode-contain'>
          {
            USE_MODES.map((um: UMInfo) => {

              return (
                <div
                  key={`bl-um-${um.id}`}
                  className={cs('bl-um-mode-content', {
                    'bl-um-mode-content-finish': !!um.isFinish,
                    'bl-um-mode-content-select': uminfo?.id === um.id,
                  })}
                  onClick={() => setUminfo(um)}
                >
                  {um.name}
                </div>
              )
            })
          }
        </section>
      </section>
      <section className='bl-um-contain'>
        <header className='bl-um-contain-head'>{uminfo?.name}</header>
        <section className='bl-um-contain-content'></section>
      </section>
    </section>
  )
}

export default Baseline;