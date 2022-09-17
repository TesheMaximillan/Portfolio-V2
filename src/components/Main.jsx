import React from 'react';
import styles from './Main.module.scss';
import Profile from './Profile';

const Main = () => {
  const { mainContainer, mainCurtain } = styles;
  return (
    <div className={mainContainer}>
      <div className={mainCurtain} />
      <Profile />
    </div>
  );
};

export default Main;
