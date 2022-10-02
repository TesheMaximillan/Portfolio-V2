import React from 'react';
import { useSelector } from 'react-redux';
import styles from './About.module.scss';

const About = () => {
  const about = useSelector((state) => state.main.about);
  const skills = useSelector((state) => state.main.skills);

  const {
    aboutt,
    abouttContainer,
    abouttContainerText,
    abouttText,
    abouttContainerSkills,
    skill,
  } = styles;

  return (
    <div className={aboutt}>
      <div className={abouttContainer}>
        <div className={abouttContainerSkills}>
          <div className={skill}>
            <h3>Languages</h3>
            <div>
              {skills.languages.map((lang) => (
                <p key={lang.id}>{lang.name}</p>
              ))}

            </div>
          </div>
          <div className={skill}>
            <h3>Frameworks</h3>
            <div>
              {skills.frameworks.map((framework) => (
                <p key={framework.id}>{framework.name}</p>
              ))}

            </div>
          </div>
          <div className={skill}>
            <h3>Tools</h3>
            <div>
              {skills.tools.map((tool) => (
                <p key={tool.id}>{tool.name}</p>
              ))}

            </div>
          </div>
          <div className={skill}>
            <h3>Soft Skills</h3>
            <div>
              {skills.softskills.map((softskill) => (
                <p key={softskill.id}>{softskill.name}</p>
              ))}

            </div>
          </div>
        </div>
        <div className={abouttContainerText}>
          <h2>About</h2>
          <p className={abouttText}>{about}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
