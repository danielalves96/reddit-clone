import React from 'react';
import { SidebarItem } from 'src/types/general';
import { testAlert } from 'src/utils/utils';
import { IconChevronDown } from '../Icons';
import styles from './styles.module.scss';

const DropdownTopicItem: React.FC<SidebarItem> = ({ text, icon }) => {
  return (
    <div className={styles.listItemIcon} onClick={() => testAlert()}>
      <div className={styles.listGroupIcon}>
        {icon}
        <span>{text}</span>
      </div>
      <IconChevronDown size={20} />
    </div>
  );
};

export default DropdownTopicItem;
