import React from 'react';
import { useSelector } from 'react-redux';
import style from './User.module.scss';

const User = () => {
  const user = useSelector((state) => state.main.user);
  const { userContainer } = style;
  const { name } = user;

  return (
    <>
      <div className={userContainer}>
        {name}
      </div>
    </>
  );
};

export default User;
