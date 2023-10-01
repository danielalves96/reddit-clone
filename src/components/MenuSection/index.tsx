'use client';
import React from 'react';
import { MenuSectionProps } from 'src/types/general';
import { testAlert } from 'src/utils/utils';
import Button from '../Button';
import styles from './styles.module.scss';

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <div className={styles.menu}>
      <span className={styles.sectionTitle}>{title}</span>
      {items.map((item, index) => (
        <Button
          key={index}
          text={item}
          color="gray"
          onClick={() => testAlert()}
        />
      ))}
    </div>
  );
};

export default MenuSection;
