/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../common/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Projects.module.scss';

const Projects = ({ modalRef }) => {
  const projects = useSelector((state) => state.main.projects);

  const { projectsContainer } = styles;

  return (
    <div className={projectsContainer}>
      <h2>Projects</h2>
      {projects.map((project) => (
        <Card key={project.id} project={project} modalRef={modalRef} />
      ))}
    </div>
  );
};

Projects.propTypes = {
  modalRef: PropTypes.shape({
    current: PropTypes.shape({
      handleModal: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Projects;
