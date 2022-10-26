import { useSearchParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import cs from 'classnames';
import { USE_MODES, UMInfo } from '@/utils/constants';
import comps from './components';
import './index.less';


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

  const Comp: any = useMemo(() => {
    return comps[uminfo.id];
  }, [uminfo])

  const onFinish = (values: any) => {
    console.log('finish', values);
  }

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
        <section className='bl-um-contain-content'>
          <Comp key={`comp_key_${uminfo.id}`} onFinish={onFinish} />
        </section>
      </section>
    </section>
  )
}

export default Baseline;