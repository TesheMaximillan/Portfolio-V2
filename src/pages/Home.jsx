import React from 'react';
import Sidebar from '../common/Sidebar';
import User from '../components/User';
import style from './Home.module.scss';

const Home = () => {
  const { main, mainContainer, mainWrapper } = style;
  return (
    <div className={main}>
      <div className={mainWrapper}>
        <div className={mainContainer}>
          <Sidebar />
          <User />
        </div>
      </div>
    </div>
  );
};

export default Home;
