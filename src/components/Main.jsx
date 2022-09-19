import React from 'react';
import styles from './Main.module.scss';
import Navbar from './Navbar';
import Profile from './Profile';

const Main = () => {
  const { mainContainer, mainCurtain } = styles;
  return (
    <div className={mainContainer}>
      <div className={mainCurtain} />
      <Profile />
      <Navbar />
    </div>
  );
};

export default Main;
