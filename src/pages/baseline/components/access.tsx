// 安全性随访
import { Form, Row, Col } from 'antd';
import { Access as FORMCONFIG } from './common';
import UploadImg from './uploadImg';
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
      <Row>
        <Col span={14}>
          <Form form={form} onFinish={onFinish} labelCol={{span: 6}} wrapperCol={{span: 8}}>
            {
              FORMCONFIG.map((item, i) => {

                return(
                  <Item key={`entryInfo_${i}`} name={item.name} label={item.label}  initialValue={item.initialValue}>
                    {item.children}
                  </Item>
                )
              })
            }
          </Form>
        </Col>
        <Col span={10}>
          <UploadImg />
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