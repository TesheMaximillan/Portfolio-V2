import React from 'react';
import { useSelector } from 'react-redux';
import styles from './About.module.scss';

const About = () => {
  const [expand, setExpand] = React.useState('Expand');
  const about = useSelector((state) => state.main.about);
  const tools = useSelector((state) => state.main.tools);
  const {
    aboutt,
    abouttContainer,
    abouttContainerText,
    abouttText,
    abouttContainerTools,
    btnMore,
    btnLess,
    abouttBtn,
  } = styles;

  const handleExpand = () => {
    if (expand === 'Expand') {
      setExpand('Collapse');
    } else {
      setExpand('Expand');
    }
  };

  const btnClass = expand === 'Expand' ? `${abouttContainer} ${btnMore}` : `${abouttContainer} ${btnLess}`;
  return (
    <div className={aboutt}>
      <h2>About</h2>
      <div className={btnClass}>
        <div className={abouttContainerText}>
          {about.map((item) => (
            <p className={abouttText} key={item.id}>
              {item.text}
            </p>
          ))}
        </div>
        <div className={abouttContainerTools}>
          <p>{tools.frontend}</p>
          <p>{tools.backend}</p>
          <p>{tools.methods}</p>
          <p>{tools.languages}</p>
          <p>{tools.systems}</p>
          <p>{tools.professional}</p>
          <p>{tools.others}</p>
        </div>
      </div>
      <button type="button" className={abouttBtn} onClick={handleExpand}>
        {expand}
      </button>
    </div>
  );
};

export default About;
