// 胸部CT
import { Form, Row, Col, Input, Radio, DatePicker } from 'antd';

const Item = Form.Item;

const FORMCONFIG = [
  {
    name: 'checked',
    label: '是否进行胸部CT检查',
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
    label: '报告内容',
    initialValue: null,
    type: 'input',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
  },
  {
    name: 'd3',
    label: '诊断意见',
    initialValue: null,
    type: 'input',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
  },
  {
    name: 'd4',
    label: '临床异议评估',
    initialValue: '0',
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>正常</Radio>
        <Radio value='1'>异常无临床意义</Radio>
        <Radio value='2'>异常有临床意义</Radio>
      </Radio.Group>
    )
  },
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
          <Form form={form} onFinish={onFinish} wrapperCol={{span: 16}}>
            <Row className='bl-um-form-wrap'>
              {
                FORMCONFIG.map((item, i) => {

                  if(i === 1 && checkValue === '0') return null;
                  if(i > 1 && checkValue === '1') return null;

                  return(
                    <Col key={`entryInfo_${i}`} span={16} className='bl-um-form-item'>
                      <Item name={item.name} label={item.label} labelCol={{span: 8}} initialValue={item.initialValue}>
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