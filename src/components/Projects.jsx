/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Card from '../common/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Projects.module.scss';

const Projects = ({ modalRef }) => {
  const projects = useSelector((state) => state.main.projects);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const { projectsContainer } = styles;

  return (
    <div className={projectsContainer}>
      <h2>Projects</h2>
      <Slider {...settings}>
        {projects.map((project) => (
          <Card key={project.id} project={project} modalRef={modalRef} />
        ))}
      </Slider>
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
