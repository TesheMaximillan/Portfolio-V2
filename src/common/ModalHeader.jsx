import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalHeader.module.scss';

const ModalHeader = ({ project }) => {
  const { modalHeader, modalHeaderTitle } = styles;

  return (
    <div className={modalHeader}>
      <h2 className={modalHeaderTitle}>{project.name}</h2>
    </div>
  );
};

ModalHeader.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    screenshots: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ModalHeader;
