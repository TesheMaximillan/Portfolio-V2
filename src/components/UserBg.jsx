import React from 'react';
// import { useSelector } from 'react-redux';
import style from './User.module.scss';

const User = () => {
  // const user = useSelector((state) => state.main.user);
  const { userContainer, userContainerBgOverlay } = style;
  // const { name } = user;

  return (
    <>
      <div className={userContainer}>
        <div className={userContainerBgOverlay} />
      </div>
    </>
  );
};

export default User;
