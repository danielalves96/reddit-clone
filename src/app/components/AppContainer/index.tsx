import React from 'react';
import styles from './styles.module.scss';
import Sidebar from '../Sidebar';
import Feed from '../Feed';
import CommunityDetails from '../CommunityDetails';

const AppContainer: React.FC = () => {
  return (
    <div className={styles['main-container']}>
      <Sidebar />
      <Feed />
      <CommunityDetails />
    </div>
  );
};

export default AppContainer;
