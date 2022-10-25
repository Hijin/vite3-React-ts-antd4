// 人口信息
import { Form, Row, Col, Input, Select, DatePicker } from 'antd';

const Item = Form.Item;

const FORMCONFIG = [
  {
    name: 'center',
    label: '科研中心',
    initialValue: '上海第一人民医院',
    type: 'input',
    children: <Input placeholder='请输入' disabled />
  },
  {
    name: 'number',
    label: '受试者筛选号',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' />
  },
  {
    name: 'name',
    label: '受试者姓名',
    initialValue: '',
    type: 'type',
    children: <Input placeholder='请输入' />
  },
  {
    name: 'nameAddr',
    label: '受试者名称缩写',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' />
  },
  {
    name: 'date',
    label: '出生日期',
    initialValue: '',
    type: 'datePicker',
    children: <DatePicker placeholder='请选择' />
  },
  {
    name: 'age',
    label: '年龄',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='-' disabled />
  },
  {
    name: 'sex',
    label: '性别',
    initialValue: null,
    type: 'select',
    children: <Select placeholder='请选择' options={[{label: '男', value: '0'}, {label: '女', value: '1'}]} />
  },
  {
    name: 'match',
    label: '婚姻',
    placeholder: '请选择',
    initialValue: null,
    type: 'select',
    children: <Select placeholder='请选择' options={[{label: '已婚', value: '0'}, {label: '未婚', value: '1'}]} />
  }
]

const Comp = () => {
  const [form] = Form.useForm();

  const cancelHandle = () => {
    form.resetFields();
  }
  const saveHandle = () => {
    form.submit();
  }
  const onFinish = (values: any) => {
    console.log('finish', values);
  }

  return (
    <>
      <Form form={form} onFinish={onFinish} wrapperCol={{span: 10}}>
        <Row className='bl-um-form-wrap'>
          {
            FORMCONFIG.map((item, i) => (
              <Col key={`entryInfo_${i}`} span={12} className='bl-um-form-item'>
                <Item name={item.name} label={item.label} labelCol={{span: 6}} initialValue={item.initialValue}>
                  {item.children}
                </Item>
              </Col>
            ))
          }
        </Row>
      </Form>
      <footer className='bl-um-contain-foot'>
        <span className='bl-um-contain-foot-cancel' onClick={cancelHandle}>取消</span>
        <span className='bl-um-contain-foot-save' onClick={saveHandle}>保存</span>
      </footer>
    </>
  )
}

export default Comp;