
import { useEffect, useState } from 'react'
import { Input, Image, Spin } from 'antd'
import imgModule from '@/assets/imgs'
import HomeCard from "../homeCard"
import './index.less'

const items = [
  { key: 'target', text: '目标入组', numColor: '#FB6260', icon: imgModule.group_target },
  { key: 'in', text: '已入组', numColor: '#000', icon: imgModule.group_in },
  { key: 'filter', text: '筛选总数', numColor: '#000', icon: imgModule.group_filter },
  { key: 'disabled', text: '未满足条件数', numColor: '#000', icon: imgModule.group_disabled },
]
const InGroupStatistical = () => {
  const [info, setInfo] = useState<any>({})
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getStatisticalInfo()
  }, [])
  const getStatisticalInfo = (val?: string) => {
    // TODO:
    console.log(val)
    setLoading(true)
    setTimeout(() => {
      setInfo({
        target: 3400,
        in: 1200,
        filter: 359,
        disabled: 1300
      })
      setLoading(false)
    }, 1000)
  }
  return <HomeCard
    title="入组情况统计"
    titleRight={<Input.Search
      placeholder="全部科研中心"
      onSearch={getStatisticalInfo}
      style={{ width: 200 }} />}>
    <Spin spinning={loading} delay={500}>
      <div className='flex-a in-group-static'>
        {items.map((v: any) => <div className='flex' key={v.key}>
          <Image src={v.icon} width={44} height={44} preview={false} />
          <div className='ml-20'>
            <div className='ft-14 col-3'>{v.text}</div>
            <div className='ft-28 fw-600 mt-5' style={{ color: v.numColor }}>{info[v.key] ?? '-'}</div>
          </div>
        </div>)}
      </div>
    </Spin>
  </HomeCard>
}

export default InGroupStatistical