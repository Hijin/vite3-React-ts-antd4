// 人口信息
import { useEffect } from 'react';
import moment from 'moment';
import { Form, Row, Col } from 'antd';
import { EntryInfo as FORMCONFIG} from './common';

const Item = Form.Item;

const Comp = () => {
  const [form] = Form.useForm();
  // birthday
  const birthday = Form.useWatch('birthday', form) || '';

  useEffect(() => {
    let ageValue = '';
    if(birthday) {
      ageValue = `${+moment().format('YYYY') - birthday.format('YYYY')}`;
    }
    form.setFieldValue('age', ageValue);
  }, [birthday])

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
      <Form form={form} onFinish={onFinish} wrapperCol={{span: 12}} labelCol={{span: 10}} >
        <Row className='bl-um-form-wrap-double' wrap>
          {
            FORMCONFIG.map((item, i) => {
              return (
                <Col key={`entryInfo_${i}`} span={12}>
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