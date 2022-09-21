/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { forwardRef, useState, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { CgCloseO } from 'react-icons/cg';
import ModalHeader from './ModalHeader';
import styles from './ProjectModal.module.scss';

const ProjectModal = forwardRef((props, ref) => {
  const {
    modalWrapper, modalBackdrop, modalContent, modalClose,
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
      <div className={modalWrapper}>
        <div className={modalBackdrop} onClick={() => handleModal({})} />
        <div className={modalContent}>
          <CgCloseO onClick={() => handleModal({})} className={modalClose} />
          <ModalHeader project={display.project} />
        </div>
      </div>,
      document.getElementById('modal-root'),
    );
  }

  return null;
});

export default ProjectModal;
