// 人口信息
import { Form, Row, Col, Input, Radio, DatePicker } from 'antd';

const Item = Form.Item;

const FORMCONFIG = [
  {
    name: 'viewdate',
    label: '访视日期',
    initialValue: '',
    type: 'datepicker',
    children: <DatePicker placeholder='请选择' />
  },
  {
    name: 'checked',
    label: '是否签署知情同意书',
    initialValue: '0',
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>已签署</Radio>
        <Radio value='1'>未签署</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'date',
    label: '签署日期',
    initialValue: '',
    type: 'datepicker',
    children: <DatePicker placeholder='请选择' />
  },
  {
    name: 'reason',
    label: '请说明原因',
    initialValue: '',
    type: 'datepicker',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
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
      <Form form={form} onFinish={onFinish} wrapperCol={{span: 12}}>
        <Row className='bl-um-form-wrap'>
          {
            FORMCONFIG.map((item, i) => {

              if(checkValue === '0' && i === 3) return null;
              if(checkValue === '1' && i === 2) return null;

              return(
                <Col key={`entryInfo_${i}`} span={16} className='bl-um-form-item'>
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