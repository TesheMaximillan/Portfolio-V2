/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { forwardRef, useState, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { CgCloseO } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import styles from './ProjectModal.module.scss';
import Footer from './Footer';
import ModalHeader from './ModalHeader';

const ProjectModal = forwardRef((props, ref) => {
  const {
    modalWrapper,
    modalBackdrop,
    modalContent,
    modalClose,
    modalContainer,
    modalDescription,
    modalBtnContainer,
    modalBtn,
  } = styles;
  const [display, setDisplay] = useState({ status: false, project: {} });

  const handleModal = (project) => {
    setDisplay({ status: !display.status, project });
  };

  useImperativeHandle(ref, () => ({
    handleModal: (project) => handleModal(project),
  }));

  if (display.status) {
    return createPortal(
      <motion.div className={modalWrapper}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          className={modalBackdrop}
          onClick={() => handleModal({})}
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.3 } }}
          className={modalContent}
        >
          <CgCloseO onClick={() => handleModal({})} className={modalClose} />
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.3 },
            }}
            className={modalContainer}
          >
            <ModalHeader project={display.project} />
          </motion.div>
          <div className={modalBtnContainer}>
            <button type="button" className={modalBtn} onClick={() => window.open(display.project.live)}>
              🚀 Live Demo
            </button>
            <button type="button" className={modalBtn} onClick={() => window.open(display.project.repository)}>
              <BsGithub />
              {' '}
              Repository
            </button>
          </div>

          <div className={modalDescription}>
            <h1>About the Project</h1>
            <p>{display.project.description}</p>
          </div>

          <Footer />
        </motion.div>
      </motion.div>,
      document.getElementById('modal-root'),
    );
  }

  return null;
});

export default ProjectModal;
