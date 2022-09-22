import React from 'react';
import { ImGithub } from 'react-icons/im';
import { DiHeroku } from 'react-icons/di';
import {
  SiNetlify, SiReact, SiRedux, SiRuby, SiRubyonrails,
} from 'react-icons/si';
import styles from './Footer.module.scss';

const Footer = () => {
  const {
    footer, footerText, footerIcon, icon,
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
