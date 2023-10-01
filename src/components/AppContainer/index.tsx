import React from 'react';
import styles from './styles.module.scss';
import Sidebar from '../Sidebar';
import Feed from '../Feed';
import CommunityDetails from '../CommunityDetails';

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
