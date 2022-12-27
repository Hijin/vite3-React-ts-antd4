import { useState } from "react";
import { Button, Input, Form, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { inject, observer } from 'mobx-react';
import { Tool } from "@/utils";
import imgModule from "@/assets/imgs";
import "./index.less";

const { safeTimeout } = Tool
const LOGIN_STORAGE_KEY = 'userLoginInfo'
const Login = inject('userStore')(observer(({ userStore }: any) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const formInitValue = JSON.parse(localStorage.getItem(LOGIN_STORAGE_KEY) ?? JSON.stringify({ remember: true }))
  const handleCommit = (values: any) => {
    const { username, password, remember } = values
    setLoading(true)
    console.log(username, password);
    safeTimeout(() => {
      setLoading(false)
      remember ? localStorage.setItem(LOGIN_STORAGE_KEY, JSON.stringify(values)) : localStorage.removeItem(LOGIN_STORAGE_KEY)
      message.success({ content: '登录成功', duration: 1 })
      userStore.setPermission(['a', 'b'])
      userStore.setUserInfo({ name: '王医生', avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' })
      safeTimeout(() => {
        navigate('/home', { replace: true })
      }, 1500)
    }, 1000)
  };

  return (
    <div className="login">
      <div className="login__form">
        <img src={imgModule.logo} width="50" className="login__form__logo" />
        <Form
          name="basic"
          initialValues={formInitValue}
          onFinish={handleCommit}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item >
            <Button
              className="login__form__commit"
              type="primary"
              shape="round"
              htmlType="submit"
              loading={loading}
            >
              登&nbsp;录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
})
);

export default Login
