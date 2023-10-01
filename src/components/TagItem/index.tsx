/* eslint-disable @next/next/no-img-element */
'use client';
import { testAlert } from 'src/utils/utils';
import { IconClose } from '../Icons';
import styles from './styles.module.scss';
import { communityData } from '@/mocks/communityDetail';

export function TagItem() {
  return (
    <div className={styles.tagItem}>
      <img src={communityData.image} alt="community" width={16} />
      <span className={styles.text}>{communityData.title}</span>
      <div className="pointer" onClick={() => testAlert()}>
        <IconClose size={16} />
      </div>
    </div>
  );
}
