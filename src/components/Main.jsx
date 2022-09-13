import React from 'react';
import UserBg from './UserBg';
import styles from './Main.module.scss';

const Main = () => {
  const { mainContainer, mainCurtain } = styles;
  return (
    <div className={mainContainer}>
      <div className={mainCurtain} />
      <UserBg />
    </div>
  );
};

export default Main;
