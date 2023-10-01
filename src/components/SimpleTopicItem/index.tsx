import React from 'react';
import styles from './styles.module.scss';
import { testAlert } from 'src/utils/utils';
import { SidebarItem } from 'src/types/general';

const SimpleTopicItem: React.FC<SidebarItem> = ({ text, icon }) => {
  return (
    <div className={styles.listItem} onClick={() => testAlert()}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default SimpleTopicItem;
