import { useEffect, useState } from 'react'
import { Select } from 'antd'

const { Option } = Select;
const SelectNet = ({ placeholder = '请选择', ...resetProps }:any) => {
  const [options, setOptions] = useState<any[]>([])
  const [optionsLoading, setOptionsLoading] = useState(false)
  useEffect(() => {
    getOptions()
  }, [])
  const getOptions = () => {
    setOptionsLoading(true)
    // TODO: 配置字典枚举查询
    setTimeout(() => {
      setOptions([
        { key: 'option1', label: 'option1' },
        { key: 'option2', label: 'option2' },
        { key: 'option3', label: 'option3' }
      ])
      setOptionsLoading(false)
    }, 2000)
  }
  return <Select placeholder={placeholder} loading={optionsLoading} {...resetProps}>
    {options.map((v: any) => <Option value={v.key} key={v.key}>{v.label}</Option>)}
  </Select>
}

export default SelectNet