import React from 'react';
import { SidebarItem } from 'src/types/general';
import { testAlert } from 'src/utils/utils';
import styles from './styles.module.scss';

const SimpleTopicItem: React.FC<SidebarItem> = ({ text, icon }) => {
  return (
    <div className={styles.listItem} onClick={() => testAlert()}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default SimpleTopicItem;
