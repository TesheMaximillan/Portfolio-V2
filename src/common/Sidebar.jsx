import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaExpand } from 'react-icons/fa';
import styles from './Sidebar.module.scss';
import avatar from '../assets/images/Professional Photo (2).jpg';

const Sidebar = () => {
  const user = useSelector((state) => state.main.user);
  const { name, title, subtitle } = user;

  const {
    sidebar, sidebarHeader, sidebarMain, sidebarFooter, Frame, sidebarAvatar, sidebarAvatarCurtain,
    imgIcon, lampLight, lampLightAvailable, profile, profileName, profileSmText,
  } = styles;
  return (
    <div className={sidebar}>
      <div className={Frame}>
        <div className={sidebarHeader}>
          <div className={sidebarAvatar}>
            <Link to={avatar} className={sidebarAvatarCurtain}>
              <img src={avatar} alt="avatar" />
              <FaExpand className={imgIcon} />
            </Link>
            <div className={lampLight}>
              <div className={lampLightAvailable} />
            </div>
          </div>
          <h3 className={profile}>
            <Link to="/" className={profileName}>{name}</Link>
          </h3>
          <div className={profileSmText}>
            {title}
            <br />
            {subtitle}
          </div>
        </div>
        <div className={sidebarMain}>
          Main
        </div>
        <div className={sidebarFooter}>
          Footer
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
