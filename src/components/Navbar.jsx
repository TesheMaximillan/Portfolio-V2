import React from 'react';
import { ImProfile } from 'react-icons/im';
import { AiOutlineProject } from 'react-icons/ai';
import { SiExpensify } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { MdCastForEducation, MdRecommend } from 'react-icons/md';
import styles from './Navbar.module.scss';
import About from './About';

const Navbar = () => {
  const {
    nav, navContainer, navBtn, navBtnActive, btnIcon,
  } = styles;
  const [element, setElement] = React.useState('about');

  const handlePage = (type) => {
    setElement(type);
  };

  const classname = (type) => {
    if (type === element) {
      return `${navBtn} ${navBtnActive}`;
    }
    return navBtn;
  };

  return (
    <div className={nav}>
      <div className={navContainer}>
        <button type="button" className={classname('about')} onClick={() => handlePage('about')}>
          <span className={btnIcon}><ImProfile /></span>
          About
        </button>
        <button type="button" className={classname('projects')} onClick={() => handlePage('projects')}>
          <span className={btnIcon}><AiOutlineProject /></span>
          Projects
        </button>
        <button type="button" className={classname('experience')} onClick={() => handlePage('experience')}>
          <span className={btnIcon}><SiExpensify /></span>
          Experience
        </button>
        <button type="button" className={classname('publication')} onClick={() => handlePage('publication')}>
          <span className={btnIcon}><CgWebsite /></span>
          Publications
        </button>
        <button type="button" className={classname('education')} onClick={() => handlePage('education')}>
          <span className={btnIcon}><MdCastForEducation /></span>
          Education
        </button>
        <button type="button" className={classname('recommendation')} onClick={() => handlePage('recommendation')}>
          <span className={btnIcon}><MdRecommend /></span>
          Recomm...
        </button>
      </div>
      { element === 'about' && <About />}
    </div>
  );
};

export default Navbar;
