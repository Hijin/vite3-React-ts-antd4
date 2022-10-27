// 临床试验结束页
import { Form } from 'antd';
import { EndPag as FORMCONFIG } from './common';
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
      <Form form={form} onFinish={onFinish} labelCol={{span: 2}} wrapperCol={{span: 22}}>
        {
          FORMCONFIG.map((item, i) => {

            return(
              <Item key={`entryInfo_${i}`} name={item.name} label={item.label} initialValue={item.initialValue}>
                {item.children}
              </Item>
            )
          })
        }
      </Form>
      <footer className='bl-um-contain-foot'>
        <span className='bl-um-contain-foot-cancel' onClick={cancelHandle}>取消</span>
        <span className='bl-um-contain-foot-save' onClick={saveHandle}>保存</span>
      </footer>
    </>
  )
}

export default Comp;