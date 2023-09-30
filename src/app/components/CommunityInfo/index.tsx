'use client';
import React from 'react';
import styles from './styles.module.scss';
import { IconRank, IconStatus } from '../Icons';
import { CommunityInfoProps } from '@/types/general';
import { testAlert } from '@/utils/utils';

const CommunityInfo: React.FC<CommunityInfoProps> = ({
  members,
  online,
  rank,
}) => {
  return (
    <div className={styles.communityData}>
      <div>
        <span className={styles.dataTitle}>{members}</span>
        <span className={styles.dataSubtitle}>Membros</span>
      </div>
      <div>
        <span className={styles.dataTitle}>{online}</span>
        <div className={styles.withIcon}>
          <IconStatus size={6} />
          <span className={styles.dataSubtitle}>Online</span>
        </div>
      </div>
      <div>
        <span className={styles.dataTitle}>{rank}</span>
        <div className={styles.withIcon} onClick={() => testAlert()}>
          <span className={styles.dataSubtitle}>Classificar por tamanho</span>
          <IconRank size={12} />
        </div>
      </div>
    </div>
  );
};

export default CommunityInfo;
