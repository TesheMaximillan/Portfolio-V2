/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {
  SiRubyonrails, SiRuby, SiReact, SiRedux,
} from 'react-icons/si';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = ({ project, modalRef }) => {
  const {
    card, cardHeader, cardMain, cardFooter,
  } = styles;

  return (
    <div className={card} onClick={() => modalRef.current.handleModal(project)}>
      <div className={cardHeader}>
        <img src={project.screenshots[0].image} alt="project" />
      </div>
      <div className={cardMain}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
      <div className={cardFooter}>
        <SiReact />
        <SiRedux />
        <SiRuby />
        <SiRubyonrails />
      </div>
    </div>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    screenshots: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  modalRef: PropTypes.shape({
    current: PropTypes.shape({
      handleModal: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Card;
