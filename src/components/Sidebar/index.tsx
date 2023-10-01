'use client';
import React, { useState } from 'react';
import {
  recentItems,
  resourcesItems,
  sidebarItems,
  subjectsItems,
} from 'src/mocks/sidebar';
import Divider from '../Divider';
import DropdownTopicItem from '../DropdownTopicItem';
import ImageTopicItem from '../ImageTopicItem';
import ShowMoreButton from '../ShowMoreButton';
import { SidebarTopicTilte } from '../SidebarTopicTilte';
import SimpleTopicItem from '../SimpleTopicItem';
import styles from './styles.module.scss';

const Sidebar: React.FC = () => {
  const [isOpenRecent, setIsOpenRecent] = useState(true);
  const [isOpenSubjects, setIsOpenSubjects] = useState(true);
  const [isOpenResources, setIsOpenResources] = useState(true);

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.content}>
        {sidebarItems.map((item, index) => (
          <SimpleTopicItem key={index} icon={item.icon} text={item.text} />
        ))}

        <Divider />

        <SidebarTopicTilte
          title="RECENTES"
          isOpen={isOpenRecent}
          onClick={() => setIsOpenRecent(!isOpenRecent)}
        />
        {isOpenRecent && (
          <>
            {recentItems.map((item, index) => (
              <ImageTopicItem
                key={index}
                imageSrc={item.imageSrc}
                text={item.text}
              />
            ))}
          </>
        )}

        <Divider />

        <SidebarTopicTilte
          title="ASSUNTOS"
          isOpen={isOpenSubjects}
          onClick={() => setIsOpenSubjects(!isOpenSubjects)}
        />
        {isOpenSubjects && (
          <>
            {subjectsItems.map((item, index) => (
              <DropdownTopicItem
                key={index}
                icon={item.icon}
                text={item.text}
              />
            ))}
            <ShowMoreButton />
          </>
        )}

        <Divider />

        <SidebarTopicTilte
          title="RECURSOS"
          isOpen={isOpenResources}
          onClick={() => setIsOpenResources(!isOpenResources)}
        />

        {isOpenResources && (
          <>
            {resourcesItems.map((item, index) => (
              <DropdownTopicItem
                key={index}
                icon={item.icon}
                text={item.text}
              />
            ))}
            <ShowMoreButton />
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
