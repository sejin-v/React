import React, { useEffect } from 'react';
import { getLogin } from '../../modules/login';

const User = ({ email }) => {
  return <div>{email}</div>;
};

const Login = ({ users, loginSubmit, emailOnChange, pwOnChange }) => {
  return (
    <form onSubmit={loginSubmit}>
      <input type="text" placeholder="email" onChange={emailOnChange} />
      <input type="password" placeholder="password" onChange={pwOnChange} />
      <button>로그인</button>
    </form>
  );
};

export default Login;
