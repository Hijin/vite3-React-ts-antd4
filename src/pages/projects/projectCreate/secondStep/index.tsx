
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Table, Button, Popconfirm, message } from 'antd'
import './index.less'

const SecondStep = () => {
  const navigate = useNavigate()
  const [standards, setStandards] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const selectedStandards = useRef([])
  useEffect(() => {
    getStandards()
  }, [])
  const getStandards = () => {
    setLoading(true)
    setTimeout(() => {
      setStandards([
        { id: '1', standard: '受试者必须自愿参加此项研究及遵守研究规定，了解并遵守、配合相应检查，遵守用药剂量、随访计划，并自愿签署书面知情同意书' },
        { id: '2', standard: '受试者年龄≥18岁，并≤70岁，不限男女和种族' },
        { id: '3', standard: '反复发作喘息、气急、胸闷或咳嗽，时间≥8周' },
        { id: '4', standard: '支气管舒张剂使用前FEV1≥70%预计值且支气管舒张剂使用后FEV1/FVC>0.7' },
        { id: '5', standard: '血常规除嗜酸性粒细胞以外无明显异常，胸部CT无明显异常' },
        { id: '6', standard: '因哮喘样症状就诊的初诊患者，或既往疑似哮喘病史但1年内未用吸入激素等哮喘治疗药物的患者' },
        { id: '7', standard: '育龄期女性在试验期间采取有效的避孕措施' },
      ])
      setLoading(false)
    }, 1000)
  }
  const handleStandardChange = (selectedRowKeys: any) => {
    selectedStandards.current = selectedRowKeys
  }
  const handleDeleteStandard = (record: any, index: number) => {
    standards.splice(index, 1)
    setStandards([...standards])
    const selIndex = selectedStandards.current.indexOf(record.id)
    selIndex > -1 && selectedStandards.current.splice(selIndex, 1)
  }
  const handleCommit = () => {
    console.log(selectedStandards.current);
    if (!selectedStandards.current.length) {
      return message.warning('请选择入排标准~')
    }
    navigate('/researchpc/projects/create/third')
  }
  const TableColumns: any = [
    { title: '序号', dataIndex: 'index', key: 'index', render: (text: string, record: any, index: number) => <span>{index + 1}</span> },
    { title: '入选标准', dataIndex: 'standard', key: 'standard' },
    {
      title: '操作', dataIndex: 'option', key: 'option', width: 150, render: (text: string, record: any, index: number) =>
        <Popconfirm
          placement="bottomRight"
          title='确定删除该入选标准嘛？'
          onConfirm={() => handleDeleteStandard(record, index)}
        ><Button type="link" danger>删除</Button></Popconfirm>
    },
  ]
  return <>
    <div className="pc-second br-10 bg-w mt-30 flex-1 flex-col over-hide">
      <div className="pc-second__title ft-16 ft-b flex-h-c">入选标准设置</div>
      <Table
        className='mt-25 flex-1 over-auto'
        rowKey='id'
        columns={TableColumns}
        dataSource={standards}
        loading={loading}
        pagination={false}
        rowSelection={{
          onChange: handleStandardChange
        }} />
    </div>
    <div className='t-c'>
      <Button className='pc-first__commit-btn' type="primary" shape="round" onClick={handleCommit}>设置排出标准</Button>
    </div>
  </>
}

export default SecondStep