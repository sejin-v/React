import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Users from '../../components/users/Users';
import { getUsers } from '../../modules/users';

const UsersContainer = () => {
  const { users, error } = useSelector(({ users }) => ({
    users: users.users,
    error: users.error,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  //따로 event를 수행하지 않고, component가 전부 렌더링 되고 자동으로 수행되어야하므로 useEffect를 사용한다.

  if (error) return <div>오류</div>;
  return <Users users={users} />;
};

export default UsersContainer;
