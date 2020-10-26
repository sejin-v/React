import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../../components/login/Login';
import Users from '../../components/users/Users';
import { getLogin } from '../../modules/login';

const LoginContainer = () => {
  const [inputemail, setEmail] = useState(null);
  const [inputpassword, setPassword] = useState(null);

  const { users, error } = useSelector(({ login }) => ({
    users: login.users,
    error: login.error,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogin());
  }, [users]);

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const pwOnChange = (e) => {
    setPassword(e.target.value);
  };

  const loginSubmit = (e) => {
    e.preventDefault();
  };
  if (error) return <div>오류!</div>;

  return (
    <div>
      {users === null ? (
        <Login
          loginSubmit={loginSubmit}
          pwOnChange={pwOnChange}
          emailOnChange={emailOnChange}
          users={users}
        />
      ) : null}
    </div>
  );
};

export default LoginContainer;
