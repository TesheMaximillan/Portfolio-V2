import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaExpand, FaCloudDownloadAlt } from 'react-icons/fa';
import styles from './Sidebar.module.scss';
import avatar from '../assets/images/Professional Photo (2).jpg';
import resume from '../assets/resume.pdf';

const Sidebar = () => {
  const user = useSelector((state) => state.main.user);
  const skills = useSelector((state) => state.main.softSkills);
  const hardSkills = useSelector((state) => state.main.skills);

  const {
    name, title, subtitle, status, phone, address,
  } = user;

  const circleStroke = (value) => 292.273 - (292.273 * value) / 100;
  const barStroke = (value) => 100 - (100 * value) / 100;

  const {
    sidebar, sidebarHeader, sidebarMain, sidebarFooter, Frame, sidebarAvatar, sidebarAvatarCurtain,
    imgIcon, lampLight, lampLightAvailable, profile, profileName, profileSmText, sidebarMainContent,
    sidebarMainTable, sidebarMainDivider, sidebarMainSoftskills, sidebarMainSoftskillsItems,
    circleProgress, circleProgressText, sidebarMainHardskills, sidebarMainHardskillsItems,
    sidebarMainHardskillsItemsHeading, sidebarMainHardskillsItemsProgress, progressbarText,
    sidebarDownload,
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
        <div className={sidebarMain} data-scrollbar="true" tabIndex={-1}>
          <div className={sidebarMainContent}>
            <div className={sidebarMainTable}>
              <ul>
                <li>
                  <h4>Status</h4>
                  <span>{status}</span>
                </li>
                <li>
                  <h4>Phone</h4>
                  <span>{phone}</span>
                </li>
                <li>
                  <h4>Address</h4>
                  <span>{address}</span>
                </li>
              </ul>
            </div>
            <div className={sidebarMainDivider} />
            <div className={sidebarMainSoftskills}>
              {skills.map((skill) => (
                <div className={sidebarMainSoftskillsItems} key={skill.id}>
                  <div className={circleProgress}>
                    <svg viewBox="0 0 100 100" style={{ display: 'block', width: '100%' }}>
                      <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#eee" strokeWidth="7" fillOpacity="0" />
                      <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#555" strokeWidth="7" fillOpacity="0" style={{ strokeDasharray: '292.273, 292.273', strokeDashoffset: circleStroke(skill.level) }} />
                    </svg>
                    <div className={circleProgressText}>
                      {skill.level}
                    </div>
                  </div>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
            <div className={sidebarMainDivider} />
            <div className={sidebarMainHardskills}>
              {hardSkills.map((skill) => (
                <div className={sidebarMainHardskillsItems} key={skill.id}>
                  <div className={sidebarMainHardskillsItemsHeading}>
                    <h4>{skill.name}</h4>
                  </div>
                  <div className={sidebarMainHardskillsItemsProgress}>
                    <div style={{ position: 'relative' }}>
                      <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                        <path d="M 0,0.86 L 100,0.86" stroke="#eee" strokeWidth="1.72" fillOpacity="0" />
                        <path
                          d="M 0,0.86 L 100,0.86"
                          stroke="#555"
                          strokeWidth="1.72"
                          fillOpacity="0"
                          style={{ strokeDasharray: '100 100', strokeDashoffset: barStroke(skill.level) }}
                        />
                      </svg>
                      <div className={progressbarText}>
                        {`${skill.level}%`}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={sidebarMainDivider} />
          </div>
        </div>
        <div className={sidebarFooter}>
          <div className={sidebarDownload}>
            <Link to={resume} download>
              Download Resume
              <FaCloudDownloadAlt />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
