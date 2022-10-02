/* eslint-disable react/prop-types */
import React from 'react';
import { ImProfile } from 'react-icons/im';
import { AiOutlineProject } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import styles from './Navbar.module.scss';

const Navbar = ({ handlePage, element }) => {
  const {
    nav, navContainer, navBtn, navBtnActive, btnIcon, btnText,
  } = styles;

  const classname = (type) => {
    if (type === element) {
      return `${navBtn} ${navBtnActive}`;
    }
    return navBtn;
  };

  return (
    <div className={nav}>
      <div className={navContainer}>
        <a
          type="button"
          href="#navbarContent"
          className={classname('projects')}
          onClick={() => handlePage('projects')}
        >
          <span className={btnIcon}>
            <AiOutlineProject />
          </span>
          <span className={btnText}>Projects</span>
        </a>
        <a
          type="button"
          href="#navbarContent"
          className={classname('about')}
          onClick={() => handlePage('about')}
        >
          <span className={btnIcon}>
            <ImProfile />
          </span>
          <span className={btnText}>About</span>
        </a>
        <a
          type="button"
          href="#navbarContent"
          className={classname('experience')}
          onClick={() => handlePage('experience')}
        >
          <span className={btnIcon}>
            <GiSkills />
          </span>
          <span className={btnText}>Experience</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
