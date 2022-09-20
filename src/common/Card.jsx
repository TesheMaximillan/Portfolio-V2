import React from 'react';
import {
  SiRubyonrails, SiRuby, SiReact, SiRedux,
} from 'react-icons/si';
import styles from './Card.module.scss';
import img from '../assets/images/background.jpg';

const Card = () => {
  const {
    card, cardHeader, cardMain, cardFooter,
  } = styles;

  return (
    <div className={card}>
      <div className={cardHeader}>
        <img src={img} alt="project" />
      </div>
      <div className={cardMain}>
        <h3>Art Blog App</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quibusdam odio vero similique ea nemo provident dignissimos
        </p>
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

export default Card;
