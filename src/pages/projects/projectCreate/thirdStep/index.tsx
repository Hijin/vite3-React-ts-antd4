import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import { Button, message } from "antd"
import ListCard from "./listCard"
import './index.less'

const ThirdStep = () => {
  const navigate = useNavigate()
  const { info, onInfoChange,onChangeStep }: any = useOutletContext();
  const [list, setList] = useState([
    { id: new Date().getTime(), checkMode: [], startTimeUtil:'天',rangeUtil:'天'}
  ])
  const handleCommit = () => {
    if (!availableList()) return
    onInfoChange && onInfoChange({
      ...info,
      visitList: list
    })
    onChangeStep&&onChangeStep(3)
    navigate('/researchpc/projects/create/done')
  }
  const handleAddListCard = () => {
    list.push({ id: new Date().getTime(), checkMode: [],startTimeUtil:'天',rangeUtil:'天' })
    setList([...list])
  }
  const handleListChange = (index: number, val?: any) => {
    val ? list.splice(index, 1, val) : list.splice(index, 1)
    setList([...list])
  }
  const availableList = () => {
    console.log(list.filter((v: any) => !v.name));

    if (list.filter((v: any) => !v.name).length) {
      message.warning('访视名称不能为空，请核对~')
      return false
    }
    if (list.filter((v: any) => !v.startTime).length) {
      message.warning('访视开始时间不能为空，请核对~')
      return false
    }
    if (list.filter((v: any) => !v.range).length) {
      message.warning('访视范围周期不能为空，请核对~')
      return false
    }
    if (list.filter((v: any) => !v.startTime).length) {
      message.warning('访视项为空，请核对~')
      return false
    }
    return true
  }
  return <div className="pc-third flex-1 over-auto">
    {list.map((v, index) => <ListCard
      info={v}
      key={v.id}
      showDelete={list.length > 1}
      onAdd={handleAddListCard}
      onDelete={() => handleListChange(index)}
      onChange={(val: any) => handleListChange(index, val)} />)}
    <div className='t-c'>
      <Button className='pc-first__commit-btn' type="primary" shape="round" onClick={handleCommit}>提交项目信息</Button>
    </div>
  </div>
}

export default ThirdStep