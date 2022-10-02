import React from 'react';
import PropTypes from 'prop-types';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import styles from './NavbarContent.module.scss';

const NavbarContent = ({ modalRef, element }) => {
  const { navbarContent } = styles;

  return (
    <div className={navbarContent}>
      {element === 'projects' && <Projects modalRef={modalRef} />}
      {element === 'about' && <About />}
      {element === 'experience' && <Experience />}
    </div>
  );
};

NavbarContent.propTypes = {
  modalRef: PropTypes.shape({
    current: PropTypes.shape({
      handleModal: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
  element: PropTypes.string.isRequired,
};

export default NavbarContent;
