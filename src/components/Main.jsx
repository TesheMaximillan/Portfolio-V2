import React from 'react';
import Footer from '../common/Footer';
import ProjectModal from '../common/ProjectModal';
import styles from './Main.module.scss';
import Navbar from './Navbar';
import Profile from './Profile';

const Main = () => {
  const { mainContainer, mainCurtain } = styles;
  const modalRef = React.useRef();
  return (
    <div className={mainContainer}>
      <div className={mainCurtain} />
      <ProjectModal ref={modalRef} />
      <Profile />
      <Navbar modalRef={modalRef} />
      <Footer />
    </div>
  );
};

export default Main;
