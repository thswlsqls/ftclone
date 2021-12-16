import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginReqestAction } from '../../../../REDUX_actions/user_actions';
import Login from './Login';
import { Space, Row } from 'antd';
import 'antd/dist/antd.css';

function LoginContainer() {
  const dispatch = useDispatch();

  const onLoginReq = (userData) => {
    dispatch(loginReqestAction(userData));
    console.log(`로그인 요청 시도 ${userData.userName} ${userData.password}`);
  };

  return (
    <Row
      style={{
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <Login onLoginReq={onLoginReq} />
    </Row>
  );
}

export default LoginContainer;
