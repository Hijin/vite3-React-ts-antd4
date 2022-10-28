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
const Login = ({userStore}:any) => {
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
      message.success('登录成功')
      userStore.setPermission(['a','b'])
      safeTimeout(() => {
        navigate('/researchpc/projects', { replace: true })
      }, 2000)
    }, 1000)
  };

  return (
    <div className="login">
      <div className="login__form">
        <img src={imgModule.logo2} width="180" className="login__form__logo" />
        <div className="login__form__head">科研系统</div>
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
      <footer className="login__footer">
        ©2022 Powered by LeafLong Therapeutics. All Rights Reserved.
        版权归上海朗曳医疗科技所有
      </footer>
    </div>
  );
};

export default inject('userStore')(observer(Login))
