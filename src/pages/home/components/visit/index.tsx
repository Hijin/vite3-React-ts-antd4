import { useEffect, useState } from 'react'
import { Spin, Progress } from 'antd'
import HomeCard from "../homeCard"
import './index.less'

const items = [
  { text: '今日随访数', numKey: '1', rateKey: '2', color: "#128078", },
  { text: '已逾期回访数', numKey: '3', rateKey: '4', color: "#FB6260" },
  { text: '已回访人数', numKey: '5', rateKey: '6', color: "#0091FF" }
]
const Visit = () => {
  const [loading, setLoading] = useState(false)
  const [info, setInfo] = useState<any>({})
  useEffect(() => {
    getInfos()
  }, [])
  const getInfos = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setInfo({
        1: 100,
        2: 70,
        3: 200,
        4: 50,
        5: 300,
        6: 60
      })
    }, 1000)
  }
  return <HomeCard
    title="患者随访情况"
  >
    <Spin spinning={loading}>
      <div className='home-visit mt-20 flex-b'>
        {items.map((v: any) => <div className='home-visit__card flex-1 flex-b br-10' key={v.text}>
          <div>
            <div className='col-9 ft-14'>{v.text}</div>
            <div className='col-3 ft-b ft-27 mt-15'>{info[v.numKey]}</div>
          </div>
          <div>
            <Progress className='home-visit__card__progress' type="circle" percent={info[v.rateKey]} width={62} strokeColor={v.color} trailColor={`${v.color}10`} />
            <div className='ft-12 col-3 mt-10'>占总人数比值</div>
          </div>
        </div>)}
      </div>
    </Spin>
  </HomeCard>
}

export default Visit