import React from 'react';

const LoginForm = ({ form, onSubmit, onChange, error }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" name="id" onChange={onChange} value={form.id} />
      </div>
      {error && <div>error</div>}
    </form>
  );
};

export default LoginForm;
