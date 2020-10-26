import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
//withRouter를 통해서 웹상에 입력된 정보를 가져올수있다
export default withRouter(UsersContainer);
