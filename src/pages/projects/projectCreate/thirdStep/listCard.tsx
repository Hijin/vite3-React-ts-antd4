import { Input, InputNumber, Select, Button } from "antd"
import { Constants } from '@/utils'
import cs from 'classnames'

const { Option } = Select
const { USE_MODES } = Constants
const SelectAfter = (props: any) => (
  <Select defaultValue="天" {...props}>
    <Option value="天">天</Option>
    <Option value="周">周</Option>
  </Select>
);

const ListCard = ({ info, onChange,onAdd,onDelete,showDelete }: any) => {
  const handleInfoChange = (prop: string, val: any) => {
    info[prop] = val
    onChange && onChange(info)
  }
  const handleModeCheckChange = (mode: any) => {
    const index = info.checkMode.indexOf(mode.id)
    index > -1 ? info.checkMode.splice(index, 1) : info.checkMode.push(mode.id)
    onChange && onChange(info)
  }
  return <div className="pc-third__card  br-10 bg-w mt-30">
    <div className="flex-h-c flex-wp">
      <div className="mv-5 flex-h-c">
        <label className="nowrap col-6 ft-15">访视名称:</label>
        <Input placeholder="请输入" className="ml-10 mr-40" style={{ width: '160px' }} onChange={(e: any) => handleInfoChange('name', e.target.value)} />
      </div>
      <div className="mv-5 flex-h-c">
        <label className="nowrap col-6 ft-15">访视开始时间:</label>
        <InputNumber
          placeholder="请输入"
          className="ml-10 mr-40"
          style={{ width: '160px' }}
          min={1}
          controls={false}
          onChange={(val) => handleInfoChange('startTime', val)}
          addonAfter={<SelectAfter onChange={(val: any) => handleInfoChange('startTimeUtil', val)} />} />
      </div>
      <div className="mv-5 flex-h-c">
        <label className="nowrap col-6 ft-15">访视范围周期:</label>
        <InputNumber
          placeholder="请输入"
          className="ml-10 mr-40"
          style={{ width: '160px' }}
          min={1}
          controls={false}
          onChange={(val) => handleInfoChange('range', val)}
          addonAfter={<SelectAfter onChange={(val: any) => handleInfoChange('rangeUtil', val)} />} />
      </div>
      <InputNumber
        placeholder="输入误差天数"
        className="mr-40 mv-5"
        style={{ width: '150px' }}
        min={0}
        onChange={(val) => handleInfoChange('diffDay', val)}
      />
      <Button type="primary" shape="round" className="mv-5" onClick={()=>onAdd&&onAdd()}>添加访视</Button>
      {showDelete&&<Button type="primary" shape="round" className="mv-5 ml-15" onClick={()=>onDelete&&onDelete()}>删除访视</Button>}
    </div>
    <div className="flex-h-c flex-wp">
      {USE_MODES.map((v): any =>
        <div
          className={cs("pc-third__card__mode pointer ft-14 ft-b",
            { 'pc-third__card__mode--active': info.checkMode.indexOf(v.id) > -1 }
          )}
          key={v.id}
          onClick={() => handleModeCheckChange(v)}
        >
          {v.name}
        </div>)}
    </div>
  </div>
}

export default ListCard