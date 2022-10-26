// 诊断
import { Form, Row, Col } from 'antd';
import { Diagnose as FORMCONFIG } from './common';
const Item = Form.Item;


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
      <Form form={form} onFinish={onFinish} labelCol={{span: 4}} wrapperCol={{span: 8}}>
        <Row className='bl-um-form-wrap-double'>
          {
            FORMCONFIG.map((item, i) => {
              return(
                <Col key={`entryInfo_${i}`} span={24}>
                  <Item name={item.name} label={item.label} initialValue={item.initialValue}>
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