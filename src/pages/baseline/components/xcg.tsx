// 诊断
import { Form, Row, Col, Input, Radio, DatePicker } from 'antd';

const Item = Form.Item;

const FORMCONFIG = [
  {
    name: 'checked',
    label: '是否进行血常规检查',
    initialValue: '0',
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>已检查</Radio>
        <Radio value='1'>未检查</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'reason',
    label: '请说明原因',
    initialValue: '',
    type: 'datepicker',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
  },
  {
    name: 'd2',
    label: '检查日期',
    initialValue: null,
    type: 'datepicker',
    children: <DatePicker placeholder='请选择' />
  },
  {
    name: 'd3',
    label: '白细胞计数（WBC）',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' addonAfter='10^9/L' />
  },
  {
    name: 'd4',
    label: '淋巴细胞计数（LY）',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' addonAfter='10^9/L' />
  },
  {
    name: 'd5',
    label: '单核细胞计数（M）',
    initialValue: null,
    type: 'input',
    children: <Input placeholder='请输入' addonAfter='10^9/L' />
  },
  {
    name: 'd6',
    label: '嗜酸性粒细胞计（E）',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' addonAfter='10^9/L' />
  },
  {
    name: 'd7',
    label: '红细胞计数（RBC）',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' addonAfter='10^12/L' />
  },
  {
    name: 'd8',
    label: '血红蛋白（HGB）',
    initialValue: null,
    type: 'input',
    children: <Input placeholder='请输入' addonAfter='g/L' />
  },
  {
    name: 'd9',
    label: '血小板计数（PLT）',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' addonAfter='10^9/L' />
  }
]

const Comp = () => {
  const [form] = Form.useForm();
  const checkValue = Form.useWatch('checked', form) || '0';

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
      <Row>
        <Col span={12}>
          <Form form={form} onFinish={onFinish} wrapperCol={{span: 10}}>
            <Row className='bl-um-form-wrap'>
              {
                FORMCONFIG.map((item, i) => {

                  if(i === 1 && checkValue === '0') return null;
                  if(i > 1 && checkValue === '1') return null;

                  return(
                    <Col key={`entryInfo_${i}`} span={14} className='bl-um-form-item'>
                      <Item name={item.name} label={item.label} labelCol={{span: 12}} initialValue={item.initialValue}>
                        {item.children}
                      </Item>
                    </Col>
                  )
                })
              }
            </Row>
          </Form>
        </Col>
        <Col span={12}>
          upload
        </Col>
      </Row>
      <footer className='bl-um-contain-foot'>
        <span className='bl-um-contain-foot-cancel' onClick={cancelHandle}>取消</span>
        <span className='bl-um-contain-foot-save' onClick={saveHandle}>保存</span>
      </footer>
    </>
  )
}

export default Comp;