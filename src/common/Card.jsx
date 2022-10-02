/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { BsGithub } from 'react-icons/bs';
import styles from './Card.module.scss';

const Card = ({ project, modalRef }) => {
  const {
    card, cardHeader, cardMain, cardOverlay, stack, buttons, btn,
  } = styles;

  return (
    <div className={card} onClick={() => modalRef.current.handleModal(project)}>
      <div className={cardHeader}>
        <img src={project.screenshots[0].image} alt="project" />
        <div className={cardOverlay}>
          <h3>{project.name}</h3>
          <button type="button" className="primaryButton">
            View Project
          </button>
        </div>
      </div>
      <div className={cardMain}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <h4>Stack: </h4>
        <div className={stack}>
          {project.technologies.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className={buttons}>
          <button
            type="button"
            className={btn}
            onClick={() => window.open(project.live)}
          >
            🚀 Live Demo
          </button>
          <button
            type="button"
            className={btn}
            onClick={() => window.open(project.repository)}
          >
            <BsGithub />
            <span>Repository</span>
          </button>

          <p>Read More...</p>
        </div>
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
