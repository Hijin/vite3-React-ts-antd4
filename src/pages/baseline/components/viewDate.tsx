// 人口信息
import { Form, Row, Col } from 'antd';
import { ViewDate as FORMCONFIG } from './common';
const Item = Form.Item;


const Comp = () => {
  const [form] = Form.useForm();
  const isAgree = Form.useWatch('isAgree', form) || '0';

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
      <Form form={form} onFinish={onFinish} wrapperCol={{span: 12}} labelCol={{span: 6}}>
        <Row className='bl-um-form-wrap-double'>
          {
            FORMCONFIG.map((item, i) => {

              if(isAgree === '0' && i === 3) return null;
              if(isAgree === '1' && i === 2) return null;

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