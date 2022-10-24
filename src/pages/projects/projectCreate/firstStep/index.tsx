import { useEffect, useState } from 'react';
import { Form, Input, DatePicker, Select, Button, Table } from 'antd'
import moment from 'moment';
import TableColumns from './tableColumns'
import './index.less'

const { RangePicker } = DatePicker;
const { Option } = Select;
const FirstStep = () => {
  const [PIOptions, setPIOptions] = useState<any[]>([])
  const [departments, setDepartments] = useState([
    { key: new Date().getTime() }
  ])
  const [optionsLoading, setOptionsLoading] = useState({
    PIOptionsLoading: false,
    memberOptionsLoading: false,
    typeOptionsLoading: false,
    contrastLoading: false,
  })
  const [form] = Form.useForm()

  useEffect(() => {
    getOptions('PIOptionsLoading')
  }, [])
  const getOptions = (loadingProp: string) => {
    setOptionsLoading({
      ...optionsLoading,
      [loadingProp]: true
    })
    setTimeout(() => {
      setPIOptions([
        { key: 'PI1', label: 'PI1' },
        { key: 'PI2', label: 'PI2' },
        { key: 'PI3', label: 'PI3' },
        { key: 'PI4', label: 'PI4' },
      ])
      setOptionsLoading({
        ...optionsLoading,
        [loadingProp]: false
      })
    }, 5000)
  }
  const handleDepartmentsChange = () => {
    form.setFieldValue('depart',departments)
  }
  const handleDepartmentsAdd = () => {
    setDepartments([
      ...departments,
      { key: new Date().getTime() }
    ])
  }
  const cols = TableColumns({
    onChange: handleDepartmentsChange,
    onAdd: handleDepartmentsAdd
  })

  const disabledDate = (current: any) => {
    return current && current < moment().endOf('day');
  };

  const handleContrastChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const handleCommit = () => {
    form.validateFields().then((vals) => {
      console.log(vals)
    }).catch((err) => {
      console.log("err==>", err)
    })
    console.log("departments==>", departments)
  }

  return <>
    <div className="pc-first bg-w br-10 mt-20">
      <Form
        form={form}
        className='flex-wp'
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
          <Select placeholder='请选择' mode="multiple" loading={optionsLoading.PIOptionsLoading}>
            {PIOptions.map((v: any) => <Option value={v.key} key={v.key}>{v.label}</Option>)}
          </Select>
        </Form.Item>
        <Form.Item label="项目成员:" name="member" rules={[{ required: true, message: '请选择项目成员' }]}>
          <Select placeholder='请选择' mode="multiple" />
        </Form.Item>
        <Form.Item label="研究类型:" name="type" >
          <Select placeholder='请选择' />
        </Form.Item>
        <Form.Item label="对照组:" name="contrast">
          <Select placeholder='请输入' mode="tags" onChange={handleContrastChange}>
          </Select>
        </Form.Item>
        <Form.Item label="科研中心:" name='depart' className='pc-first__form-item-table' rules={[{ required: true, message: '请添加科研中心' }]}>
          <Table dataSource={departments} columns={cols} pagination={false} />
        </Form.Item>
      </Form>
    </div>
    <div className='t-c'>
      <Button className='pc-first__commit-btn' type="primary" shape="round" onClick={handleCommit}>下一步:设置入排条件</Button>
    </div>
  </>

}

export default FirstStep