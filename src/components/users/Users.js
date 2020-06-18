import React, { useContext } from 'react';

import GithubContext from '../../context/gitub/githubContext';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;
  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
