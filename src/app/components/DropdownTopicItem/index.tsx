import React from 'react';
import styles from './styles.module.scss';
import { IconChevronDown } from '../Icons';
import { testAlert } from '@/utils/utils';
import { SidebarItem } from '@/types/general';

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
