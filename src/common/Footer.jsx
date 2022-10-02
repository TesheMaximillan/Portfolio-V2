import React from 'react';
import { ImGithub } from 'react-icons/im';
import { DiHeroku } from 'react-icons/di';
import { BiArrowToTop } from 'react-icons/bi';
import {
  SiNetlify, SiReact, SiRedux, SiRuby, SiRubyonrails,
} from 'react-icons/si';
import styles from './Footer.module.scss';

const Footer = () => {
  const {
    footer, footerText, footerIcon, icon, top, topIcon,
  } = styles;
  return (
    <div className={footer}>
      <div className={footerIcon}>
        <SiReact className={icon} />
        <SiRedux className={icon} />
        <SiRuby className={icon} />
        <SiRubyonrails className={icon} />
        <ImGithub className={icon} />
        <DiHeroku className={icon} />
        <SiNetlify className={icon} />
        <a href="#top" className={top}>
          <BiArrowToTop className={topIcon} />
        </a>
      </div>
      <div className={footerText}>
        <p>
          Made with
          {' '}
          <span>❤</span>
          {' '}
          by
          {' '}
          Teshome Kurabachew
        </p>
      </div>
    </div>
  );
};

export default Footer;
