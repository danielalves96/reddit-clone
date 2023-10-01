import React from 'react';
import CommunityDetails from '../CommunityDetails';
import Feed from '../Feed';
import Sidebar from '../Sidebar';
import styles from './styles.module.scss';

const AppContainer: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <Sidebar />
        </div>
        <div className={styles.div2}>
          <Feed />
        </div>
        <div className={styles.div3}>
          <CommunityDetails />
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
