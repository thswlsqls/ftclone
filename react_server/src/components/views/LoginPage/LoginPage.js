import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { withRouter, Link } from 'react-router-dom';
import { loginUser } from '../../../REDUX_actions/user_actions';

import './styles.css';
import { Checkbox, Input } from 'antd';

function LoginPage(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);

    dispatch(loginUser(data)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push('/');
      } else {
        alert(response.payload.err);
        console.log(response.payload.err);
      }
    });
    
  }; // your form submit function which will invoke after successful validation

  console.log(watch('user_email')); // you can watch individual input by pass the name of the input
  console.log(watch('password')); // you can watch individual input by pass the name of the input

  return (
    <form style={{ width: '50%' }} onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        name='user_email'
        //defaultValue="please text your email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i, maxLength: 20 })}
      />
      {errors.user_email && errors.user_email.type === 'required' && (
        <p>This Email field is required</p>
      )}
      {errors.user_email && errors.user_email.type === 'maxLength' && (
        <p>Your email is not valid</p>
      )}
      {errors.user_email && errors.user_email.type === 'maxLength' && (
        <p>Your input exceed maximum length</p>
      )}

      <label>Password</label>
      <input
        name='password'
        type='password'
        ref={register({ required: true, minLength: 12 })}
      />
      {errors.password && errors.password.type === 'required' && (
        <p>This password field is required</p>
      )}
      {errors.password && errors.password.type === 'minLength' && (
        <p>password would be more then 12 characters</p>
      )}
      <Checkbox>Remember me</Checkbox>
      <Link to='/register' className='login-form-register'>
        Register now!
      </Link>
      <input type='submit' value='Log in' />
    </form>
  );
}

export default withRouter(LoginPage);
