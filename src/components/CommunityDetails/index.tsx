/* eslint-disable @next/next/no-img-element */
import React from 'react';
import AuthorSection from '../AuthorSection';
import CommunityInfo from '../CommunityInfo';
import ComunityMainData from '../ComunityMainData';
import Divider from '../Divider';
import MenuSection from '../MenuSection';
import styles from './styles.module.scss';

const CommunityDetails: React.FC = () => {
  const communityData = {
    title: 'r/pokemon',
    subtitle: 'Pokémon: Gotta Catch’Em All!',
    description:
      'r/pokemon is an unofficial Pokémon fan community. This is the place for most things Pokémon on Reddit—TV shows, video games, toys, trading cards, you name it!',
    members: '4.4m',
    online: '4.4k',
    rank: 'Top 1%',
  };

  const menuItems = ['Wiki', 'Discord', 'Regras'];

  return (
    <div className={styles.cdSpacing}>
      <div className={styles.container}>
        <img src="images/png/wallpaper.png" alt="wallpaper" />
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
