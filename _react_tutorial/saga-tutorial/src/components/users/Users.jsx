import React from 'react';

const User = ({ id, name }) => {
  return (
    <li>
      {id}:{name}
    </li>
  );
};

const Users = ({ users }) => {
  return (
    <ul>
      {users && users.map((user) =>
       <User id={user.id} name={user.name} />)}
    </ul>
    // 처음엔 users가 없을 터
  );
};

export default Users;
