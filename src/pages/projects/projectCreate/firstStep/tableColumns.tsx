import { Button, Radio, InputNumber } from 'antd'
import { SelectNet } from '@/components'

const TableColumns = ({ onChange, onAdd, onDelete, showDelete }: any) => {
  const handlePropsChange = (record: any, val: string, prop: string) => {
    record[prop] = val
    onChange && onChange()
  }
  return [
    {
      title: '中心名称', dataIndex: 'name', key: 'name', render: (text: string, record: any) =>
        <SelectNet onChange={(val: any) => handlePropsChange(record, val, 'name')} />
    },
    { title: '中心科室', dataIndex: 'depart', key: 'depart', render: (text: string, record: any) => <SelectNet onChange={(val: any) => handlePropsChange(record, val, 'depart')} /> },
    {
      title: '是否主中心', dataIndex: 'main', key: 'main', render: (text: string, record: any) =>
        <Radio.Group defaultValue={record.main} onChange={(e: any) => handlePropsChange(record, e.target.value, 'main')} >
          <Radio value={1}>是</Radio>
          <Radio value={2}>否</Radio>
        </Radio.Group>
    },
    { title: '目标组人数', dataIndex: 'count', key: 'count', render: (text: string, record: any) => <InputNumber min={0} placeholder='请输入' defaultValue={record.count} onChange={(val: any) => handlePropsChange(record, val, 'count')} /> },
    {
      title: '操作', dataIndex: 'option', key: 'option',width:150, render: (text: string, record: any,index:number) => <div className='flex-h-c'>
        <Button type="link" onClick={() => onAdd && onAdd(record)}>新增</Button>
        {showDelete && <Button type="link" onClick={() => onDelete && onDelete(record,index)}>删除</Button>}
      </div>
    },
  ]
}

export default TableColumns