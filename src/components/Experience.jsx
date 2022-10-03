import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Experience.module.scss';

const Experience = () => {
  const experiences = useSelector((state) => state.main.experience);

  const {
    container, title, experience, experienceTitle, experienceText, experienceCompany,
    experienceDate, experiencePosition,
  } = styles;
  return (
    <div>
      <h2 className={title}>Experience</h2>
      <div className={container}>
        {experiences.map((exp) => (
          <div key={exp.id} className={experience}>
            <h3 className={experienceCompany}>{exp.company}</h3>
            <div className={experiencePosition}>
              <h4 className={experienceTitle}>{exp.title}</h4>
              <p className={experienceDate}>{exp.dates}</p>
            </div>
            <div className={experienceText}>
              {exp.description.map((desc) => (
                <p key={desc}>{desc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
