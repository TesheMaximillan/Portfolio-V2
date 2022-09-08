import React from 'react';
import User from './User';
import styles from './Main.module.scss';

const Main = () => {
  const { mainContainer } = styles;
  return (
    <div className={mainContainer}>
      <User />
    </div>
  );
};

export default Main;
