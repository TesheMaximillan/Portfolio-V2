/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ModalHeader.module.scss';
import ModalCarousel from './ModalCarousel';

const ModalHeader = ({ project }) => {
  const {
    modalHeader, modalHeaderTitle, modalHeaderTechnologies,
  } = styles;

  return (
    <div className={modalHeader}>
      <h2 className={modalHeaderTitle}>{project.name}</h2>
      <div className={modalHeaderTechnologies}>
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <ModalCarousel project={project} />
    </div>
  );
};

export default ModalHeader;
