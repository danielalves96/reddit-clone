import React from 'react';
import styles from './styles.module.scss';
import { IconChevronDown, IconChevronUp } from '../Icons';

export const SidebarTopicTilte: React.FC<{
  title: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ title, isOpen, onClick }) => (
  <div className={styles.topic} onClick={onClick}>
    <span>{title}</span>
    {isOpen ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
  </div>
);
