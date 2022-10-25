import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, DatePicker, Button, Table, message } from 'antd'
import moment from 'moment';
import { SelectNet } from '@/components'
import TableColumns from './tableColumns'
import './index.less'

const { RangePicker } = DatePicker;
const FirstStep = () => {
  const navigate = useNavigate()
  const [departments, setDepartments] = useState([
    { key: new Date().getTime(), main: 1, count: 0 }
  ])
  const [showDepartDelete, setShowDepartDelete] = useState(false)
  const [form] = Form.useForm()
  useEffect(() => {
    setShowDepartDelete(departments.length > 1)
    console.log(departments.length);

  }, [departments])
  const handleDepartmentsChange = () => {
    form.setFieldValue('depart', departments)
  }
  const handleDepartmentsAdd = () => {
    setDepartments([
      ...departments,
      { key: new Date().getTime(), main: 1, count: 0 }
    ])
  }
  const handleDepartmentsDelete = (record: any, index: number) => {
    departments.splice(index, 1)
    setDepartments([...departments])
  }
  const cols = TableColumns({
    onChange: handleDepartmentsChange,
    onAdd: handleDepartmentsAdd,
    onDelete: handleDepartmentsDelete,
    showDelete: showDepartDelete
  })

  const disabledDate = (current: any) => {
    return current && current < moment().endOf('day');
  };
  const handleCommit = async () => {
    await form.validateFields()
    if (!availableDepartments()) return
    navigate('second')
  }
  const availableDepartments = () => {
    if (departments.find((v: any) => !v.name)) {
      message.warning('科研中心名称不能为空，请核对~')
      return false
    }
    if (departments.find((v: any) => !v.depart)) {
      message.warning('科研中心科室不能为空，请核对~')
      return false
    }
    if (departments.find((v: any) => v.count < 1)) {
      message.warning('科研中心目标组人数不能为空，请核对~')
      return false
    }
    return true
  }

  return <>
    <div className="pc-first bg-w br-10 mt-20 flex-1 flex-col over-auto">
      <Form
        form={form}
        className='flex-wp flex-1 over-auto'
        labelCol={{ flex: '90px' }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
      >
        <Form.Item label="项目名称:" name="name" rules={[{ required: true, message: '请输入项目名称' }]}>
          <Input placeholder='请输入' />
        </Form.Item>
        <Form.Item label="项目周期:" name="date" rules={[{ required: true, message: '请选择项目周期' }]}>
          <RangePicker disabledDate={disabledDate} />
        </Form.Item>
        <Form.Item label="项目描述:" name="desc" rules={[{ required: true, message: '请输入项目描述' }]}>
          <Input placeholder='请输入' />
        </Form.Item>
        <Form.Item label="项目代码:" name="code" rules={[{ required: true, message: '请输入项目代码' }]}>
          <Input placeholder='请输入' />
        </Form.Item>
        <Form.Item label="项目PI:" name="PI" rules={[{ required: true, message: '请选择项目PI' }]}>
          <SelectNet mode="multiple" />
        </Form.Item>
        <Form.Item label="项目成员:" name="member" rules={[{ required: true, message: '请选择项目成员' }]}>
          <SelectNet mode="multiple" />
        </Form.Item>
        <Form.Item label="研究类型:" name="type" >
          <SelectNet placeholder='请选择' />
        </Form.Item>
        <Form.Item label="对照组:" name="contrast">
          <SelectNet mode="tags" />
        </Form.Item>
        <Form.Item label="科研中心:" name='depart' className='pc-first__form-item-table' rules={[{ required: true, message: '请添加科研中心' }]}>
          <Table dataSource={departments} columns={cols} pagination={false}/>
        </Form.Item>
      </Form>
    </div>
    <div className='t-c'>
      <Button className='pc-first__commit-btn' type="primary" shape="round" onClick={handleCommit}>下一步:设置入排条件</Button>
    </div>
  </>

}

export default FirstStep