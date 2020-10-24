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

  if (error) return <div>오류발생!!</div>;

  return <Users users={users} />;
};

export default UsersContainer;
