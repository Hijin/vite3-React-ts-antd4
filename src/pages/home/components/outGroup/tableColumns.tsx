import { Button } from "antd"
const columns = ({ onInGroup }:any) => {
  return [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: '病例号',
      dataIndex: '2',
      key: '2',
    },
    {
      title: '姓名',
      dataIndex: '3',
      key: '3',
    },
    {
      title: '性别',
      dataIndex: '4',
      key: '4',
    },
    {
      title: '年龄',
      dataIndex: '5',
      key: '5',
    },
    {
      title: '手机号',
      dataIndex: '6',
      key: '6',
    },
    {
      title: '门诊医生',
      dataIndex: '7',
      key: '7',
    },
    {
      title: '诊断',
      dataIndex: '8',
      key: '8',
    },
    {
      title: '推送时间',
      dataIndex: '9',
      key: '9',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: (text: string, record: any, index: number) => <Button type='link' onClick={() => onInGroup && onInGroup(record, index)}>入组</Button>
    },
  ]
}

export default columns