import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineCode } from 'react-icons/ai';
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
  } = styles;
  return (
    <div className={profileContainer}>
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
