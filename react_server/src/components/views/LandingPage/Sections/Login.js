import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

function Login({ onLoginReq }) {
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');

  const onUserNameInputChanged = (e) => {
    setuserName(e.currentTarget.value);
    console.log(userName);
  };

  const onPasswordInputChanged = (e) => {
    setpassword(e.currentTarget.value);
    console.log(password);
  };

  let userData = {
    userName: userName,
    password: password,
  };

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      //   initialValues={{ remember: true }}
      //   onFinish={onFinish}
      //   onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        label='Username'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input onChange={(e) => onUserNameInputChanged(e)} />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password onChange={(e) => onPasswordInputChanged(e)} />
      </Form.Item>

      <Form.Item
        name='remember'
        valuePropName='checked'
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type='primary'
          htmlType='submit'
          onClick={(userData) =>
            onLoginReq({
              userName: userName,
              password: password,
            })
          }
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
