import React from 'react';
import styles from './UserTransition.module.scss';

const UserTransition = () => {
  const { transitionFade, transitionFadeScroll, transitionFadeScrollContent } = styles;
  return (
    <div className={transitionFade} data-swup="0">
      <div className={transitionFadeScroll}>
        <div className={transitionFadeScrollContent}>
          retyu
        </div>
      </div>
    </div>
  );
};

export default UserTransition;
