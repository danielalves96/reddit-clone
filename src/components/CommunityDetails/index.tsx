/* eslint-disable @next/next/no-img-element */
import { communityData, menuItems } from '@/mocks/communityDetail';
import React from 'react';
import AuthorSection from '../AuthorSection';
import CommunityInfo from '../CommunityInfo';
import ComunityMainData from '../ComunityMainData';
import Divider from '../Divider';
import MenuSection from '../MenuSection';
import styles from './styles.module.scss';

const CommunityDetails: React.FC = () => {
  return (
    <div className={styles.cdSpacing}>
      <div className={styles.container}>
        <img src={communityData.coverImage} alt="wallpaper" />
        <div className={styles.contentContainer}>
          <ComunityMainData
            title={communityData.title}
            description={communityData.description}
            subtitle={communityData.subtitle}
          />
          <CommunityInfo {...communityData} />
          <Divider />
          <MenuSection title="MENU" items={menuItems} />
          <Divider />
          <AuthorSection />
        </div>
      </div>
    </div>
  );
};

export default CommunityDetails;
