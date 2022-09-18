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
              <h1>
                Hello, I&apos;m Teshome Kurabachew
              </h1>
            </span>
          </div>
          <div className={animatedText}>
            <AiOutlineCode className={icon} />
            <TypeAnimation
              sequence={[
                "I'm a Full-Stack Web Developer ✔️",
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
            <p>
              In love with pair-programming, JavaScript, React/Redux, Ruby on Rails and remote work.
            </p>
          </div>
          <div className={profileOptions}>
            <button type="button" className="primaryButton">
              Hire Me
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
