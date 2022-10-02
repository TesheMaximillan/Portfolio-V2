import React from 'react';
import Contact from '../common/Contact';
import Footer from '../common/Footer';
import NavbarContent from '../common/NavbarContent';
import ProjectModal from '../common/ProjectModal';
import styles from './Main.module.scss';
import Navbar from './Navbar';
import Profile from './Profile';

const Main = () => {
  const { mainContainer, mainCurtain } = styles;
  const [element, setElement] = React.useState('projects');

  const handlePage = (type) => {
    setElement(type);
  };

  const modalRef = React.useRef();
  return (
    <div className={mainContainer}>
      <div className={mainCurtain} />
      <ProjectModal ref={modalRef} />
      <Profile />
      <Navbar element={element} handlePage={handlePage} />
      <NavbarContent element={element} modalRef={modalRef} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
