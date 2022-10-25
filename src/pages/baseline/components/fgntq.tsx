// 肺功能通气
import { Form, Row, Col, Input, Radio, DatePicker, Tooltip } from 'antd';

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
    name: 'd2',
    label: 'FVC（L）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d20' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值' addonBefore='预计值' />
        </Item>
        <Item name='d21' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d22' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试1/结果值' className='input-group-custom-flex-tip'>%测试1/结果值</Tooltip>}
          />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd3',
    label: 'FEV1（L））',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d30' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值' addonBefore='预计值' />
        </Item>
        <Item name='d31' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d32' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/结果值' className='input-group-custom-flex-tip'>%测试1/结果值</Tooltip>} />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd4',
    label: 'FEV1%FVC（%）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d40' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='d41' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d42' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/结果值' className='input-group-custom-flex-tip'>%测试1/结果值</Tooltip>} />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd5',
    label: 'FEV1%FVC MAX（%）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d50' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='d51' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d52' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/结果值' className='input-group-custom-flex-tip'>%测试1/结果值</Tooltip>} />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd6',
    label: 'FEV1*30（L/min）',
    initialValue: null,
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d60' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='d61' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d62' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/结果值' className='input-group-custom-flex-tip'>%测试1/结果值</Tooltip>} />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd7',
    label: 'PEF（L/S）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d70' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='d71' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d72' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/结果值' className='input-group-custom-flex-tip'>%测试1/结果值</Tooltip>} />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd8',
    label: 'MEF 75（L/S）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d80' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='d81' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d82' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/结果值' className='input-group-custom-flex-tip'>%测试1/结果值</Tooltip>} />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd9',
    label: 'MEF 50（L/S）',
    initialValue: null,
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d90' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='d91' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d92' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/结果值' className='input-group-custom-flex-tip'>%测试1/结果值</Tooltip>} />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd10',
    label: 'MMEF 75/25（L/S）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d100' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='d101' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d102' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/结果值' className='input-group-custom-flex-tip'>%测试1/结果值</Tooltip>} />
        </Item>
      </Input.Group>
    )
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
          <Form form={form} onFinish={onFinish} wrapperCol={{span: 24}}>
            {
              FORMCONFIG.map((item, i) => {

                if(i === 1 && checkValue === '0') return null;
                if(i > 1 && checkValue === '1') return null;

                return(
                  <Item key={`entryInfo_${i}`} name={item.name} label={item.label} labelCol={{span: 6}} wrapperCol={{span: 18}} initialValue={item.initialValue}>
                    {item.children}
                  </Item>
                )
              })
            }
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