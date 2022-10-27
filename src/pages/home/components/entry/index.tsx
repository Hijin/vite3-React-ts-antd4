import { useEffect, useState } from 'react'
import { Spin } from 'antd'
import HomeCard from "../homeCard"
import './index.less'

const columns = [
  { title: '状态', key: 'state' },
  { title: '基线', key: '1' },
  { title: '治疗周期一', key: '2' },
  { title: '治疗周期二', key: '3' },
  { title: '治疗周期三', key: '4' },
  { title: '随诊', key: '5' },
  { title: '不良反应', key: '6' },
  { title: '结束实验', key: '7' },
]
const Entry = () => {
  const [list, setList] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getLists()
  }, [])
  const getLists = () => {
    setLoading(true)
    setTimeout(() => {
      setList([
        { state: '录入未完成', 1: 19 },
        { state: '录入已完成', 1: 19 },
        { state: '部分录入', 1: 19 },
      ])
      setLoading(false)

    }, 1500)
  }
  return <HomeCard
    title="患者录入情况"
  >
    <div className='flex-h-c mt-15 home-entry__head'>
      {columns.map((v: any) => <div className='flex-1 home-entry__head__th ft-14 ft-b' key={v.key}>{v.title}</div>)}
    </div>
    <Spin spinning={loading}>
      <div className='home-entry__body'>
        {list.map((v: any) => <div key={v.state} className='flex-h-c home-entry__body__tr'>
          {columns.map((col: any) => <div className='flex-1 home-entry__body__th ft-14' key={`${v.state}${col.key}`}>{v[col.key]}</div>)}
        </div>)}
      </div>
    </Spin>
  </HomeCard>
}

export default Entry