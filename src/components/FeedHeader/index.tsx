/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import styles from './styles.module.scss';
import Button from '../Button';
import { IconBox, IconChevronDown } from '../Icons';
import { testAlert } from 'src/utils/utils';

const FeedHeader: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.communityData}>
          <img src="images/png/pokemon.png" alt="image" width={49} />
          <span>r/pokemon</span>
        </div>
        <div className={styles.controls}>
          <span>Ordenar por:</span>
          <div className={styles.dropdown} onClick={() => testAlert()}>
            <span>Em destaque</span>
            <IconChevronDown size={16} color="#586F76" />
          </div>
          <div className={styles.dropdown} onClick={() => testAlert()}>
            <IconBox size={15} color="#586F76" />
            <IconChevronDown size={16} color="#586F76" />
          </div>
        </div>
      </div>
      <Button text="Postar" color="ghost" onClick={() => testAlert()} />
    </div>
  );
};

export default FeedHeader;
