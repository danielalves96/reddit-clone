/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './styles.module.scss';
import Button from '../Button';
import { IconBox, IconChevronDown } from '../Icons';

const Feed: React.FC = () => {
  return (
    <div className={styles.feedContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <div className={styles.communityData}>
            <img src="images/png/pokemon.png" alt="image" width={49} />
            <span>r/pokemon</span>
          </div>
          <div className={styles.controls}>
            <span>Ordenar por:</span>
            <div className={styles.dropdown}>
              <span>Em destaque</span>
              <IconChevronDown size={16} color="#586F76" />
            </div>
            <div className={styles.dropdown}>
              <IconBox size={15} color="#586F76" />
              <IconChevronDown size={16} color="#586F76" />
            </div>
          </div>
        </div>
        <Button text="Postar" color="ghost" />
      </div>
    </div>
  );
};

export default Feed;
