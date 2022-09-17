import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineCode } from 'react-icons/ai';
import styles from './Profile.module.scss';

const Profile = () => {
  const {
    profileContainer,
    profileParent,
    profileDetails,
    profileName,
    primaryText,
    highlightedText,
    animatedText,
    icon,
  } = styles;
  return (
    <div className={profileContainer}>
      <div className={profileParent}>
        <div className={profileDetails}>
          <div className={profileName}>
            <span className={primaryText}>
              <h1>
                Hello, I&apos;m
                <span className={highlightedText}>
                  {' '}
                  Teshome Kurabachew
                </span>
              </h1>
            </span>
          </div>
          <div className={animatedText}>
            <AiOutlineCode className={icon} />
            <TypeAnimation
              sequence={[
                "I'm a Full Stack Web Developer",
                1000,
                "I'm a Software Engineer",
                1000,
                "I'm a DevOps Engineer",
                1000,
              ]}
              speed={50}
              style={{ color: '#8c8c8e' }}
              wrapper="h2"
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
