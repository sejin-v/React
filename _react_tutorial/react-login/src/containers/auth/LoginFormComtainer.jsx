import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';
import { changeField, login } from '../../modules/auth';

const LoginFormComtainer = () => {
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.form,
    auth: auth.auth,
    authError: auth.authError,
  }));
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
    authError && setError('존재하지 않는 회원입니다.');
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ key: name, value }));
  };

  return (
    <LoginForm
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      error={error}
    />
  );
};

export default withRouter(LoginFormComtainer);
