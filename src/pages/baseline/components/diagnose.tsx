// 诊断
import { Form, Row, Col, Input, Select } from 'antd';

const Item = Form.Item;

const FORMCONFIG = [
  {
    name: 'd1',
    label: '诊断',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' />
  },
  {
    name: 'd2',
    label: '临床分期',
    initialValue: null,
    type: 'select',
    children: <Select placeholder='请选择' options={[{label: '急性加重', value: '0'}, {label: '急性加重1', value: '1'}, {label: '急性加重2', value: '2'}]} />
  },
  {
    name: 'd3',
    label: '临床分期',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' />
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
            FORMCONFIG.map((item, i) => {
              return(
                <Col key={`entryInfo_${i}`} span={14} className='bl-um-form-item'>
                  <Item name={item.name} label={item.label} labelCol={{span: 6}} initialValue={item.initialValue}>
                    {item.children}
                  </Item>
                </Col>
              )
            })
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