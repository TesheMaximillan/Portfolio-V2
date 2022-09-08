import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import Sidebar from '../common/Sidebar';
import Main from '../components/Main';
import style from './Home.module.scss';

const Home = () => {
  const [sidebarClass, setSidebarClass] = React.useState('');
  const {
    main, mainContainer, mainWrapper, hamburgerMenu,
  } = style;

  const handleSidebar = () => {
    if (sidebarClass === '') {
      setSidebarClass('active');
    } else {
      setSidebarClass('');
    }
  };

  const icon = sidebarClass === '' ? <GiHamburgerMenu className={hamburgerMenu} onClick={handleSidebar} /> : <MdClose className={hamburgerMenu} onClick={handleSidebar} />;

  return (
    <div className={main}>
      <div className={mainWrapper}>
        <div className={mainContainer}>
          <Sidebar sidebarClass={sidebarClass} />
          {icon}
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Home;
