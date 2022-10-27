// 研究药物回收
import { Form, Row, Col } from 'antd';
import { StudyRecycling as FORMCONFIG } from './common';
import UploadImg from './uploadImg';
const Item = Form.Item;


const Comp = () => {
  const [form] = Form.useForm();
  const checkValue = Form.useWatch('isStudyDrugBoxRecycling', form) || '0';

  const cancelHandle = () => {
    form.resetFields();
  }
  const saveHandle = () => {
    form.submit();
  }
  const onFinish = (values: unknown) => {
    console.log('finish', values);
  }

  return (
    <>
      <Row>
        <Col span={14}>
          <Form form={form} onFinish={onFinish} labelCol={{span: 8}} wrapperCol={{span: 10}} className='bl-um-form-wrap'>
            {
              FORMCONFIG.map((item, i) => {

                if(i === 1 && checkValue === '0') return null;
                if(i > 1 && checkValue === '1') return null;

                return(
                  <Item key={`entryInfo_${i}`} name={item.name} label={item.label} initialValue={item.initialValue}>
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