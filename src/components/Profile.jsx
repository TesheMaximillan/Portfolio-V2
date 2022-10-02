import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineCode } from 'react-icons/ai';
import {
  FaCloudDownloadAlt, FaLinkedin, FaTwitterSquare, FaAngellist, FaGithub,
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { useSelector } from 'react-redux';
import styles from './Profile.module.scss';

const Profile = () => {
  const user = useSelector((state) => state.main.user);

  const {
    profileContainer,
    profileParent,
    profileDetails,
    profileName,
    primaryText,
    animatedText,
    icon,
    tagline,
    profileOptions,
    profileImage,
    profileImageBackground,
    typeAnimation,
    profileSocial,
    profileDownload,
    downloadicon,
  } = styles;
  return (
    <div className={profileContainer} id="top">
      <div className={profileParent}>
        <div className={profileDetails}>
          <div className={profileName}>
            <span className={primaryText}>
              <h1>Hello, I&apos;m Teshome Kurabachew</h1>
            </span>
          </div>
          <div className={animatedText}>
            <AiOutlineCode className={icon} />
            <TypeAnimation
              sequence={[
                "I'm a Full-Stack Developer ✔️",
                1000,
                "I'm a Software Engineer ✔️",
                1000,
                "I'm a DevOps Engineer ✔️",
                1000,
              ]}
              speed={50}
              style={{ color: '#FFC107' }}
              wrapper="h2"
              repeat={Infinity}
              className={typeAnimation}
            />
          </div>
          <div className={tagline}>
            <p>{user.summary}</p>
          </div>
          <div className={profileOptions}>
            <a href="#contact">
              <button type="button" className="primaryButton">
                Hire Me
              </button>
            </a>
            <div className={`${profileDownload}`}>
              <FaCloudDownloadAlt classname={downloadicon} />
              <Link to="/resume.pdf" target="_blank" download>
                Resume
              </Link>
            </div>

          </div>
          <div className={profileSocial} id="navbarContent">
            <button type="button" onClick={() => window.open('https://www.linkedin.com/in/teshome-kurabachew/')}>
              <FaLinkedin />
            </button>
            <button type="button" onClick={() => window.open('https://angel.co/u/teshome-kurabachew')}>
              <FaAngellist />
            </button>
            <button type="button" onClick={() => window.open('https://github.com/TesheMaximillan')}>
              <FaGithub />
            </button>
            <button type="button" onClick={() => window.open('https://teshome.kurabachew@gmail.com')}>
              <SiGmail />
            </button>
            <button type="button" onClick={() => window.open('https://twitter.com/TesheKura')}>
              <FaTwitterSquare />
            </button>
          </div>

        </div>
        <div className={profileImage}>
          <div className={profileImageBackground} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
