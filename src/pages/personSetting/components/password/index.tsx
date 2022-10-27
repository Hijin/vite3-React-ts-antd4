import { Form, Input, Button, message } from 'antd';
import './index.less';

const SetPassword = () => {
  const password = sessionStorage.getItem('password') || '';

  const onFinish = (values: any) => {
    console.log('Success:', values);

    if (values.oldPassword === values.newPassword) {
      return message.error('新密码与旧密码相同，请重新输入！')
    }

    if (values.confirmPassword !== values.newPassword) {
      return message.error('确认新密码不正确，请重新输入！')
    }

    if (values.newPassword.length < 6) {
      return message.error('请输入6位以上密码!')
    }
  };

  return (
    <div>
      <div className='ld_dpw-container'>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ oldPassword: password }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="原密码"
            name="oldPassword"
            rules={[{ required: true, message: '' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="新密码"
            name="newPassword"
            rules={[{ required: true, message: '' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="确认新密码"
            name="confirmPassword"
            rules={[{
              required: true, message: '',
            }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='default' htmlType='reset'>
              取消
            </Button>
            <Button type="primary" htmlType="submit" className='ml-25'>
              保存
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SetPassword;
