/* eslint-disable @next/next/no-img-element */
'use client';
import { testAlert } from '@/utils/utils';
import { IconClose } from '../Icons';
import styles from './styles.module.scss';

export function TagItem() {
  return (
    <div className={styles.tagItem}>
      <img src="images/png/pokemon.png" alt="community" width={16} />
      <span className={styles.text}>r/pokemon</span>
      <div className="pointer" onClick={() => testAlert()}>
        <IconClose size={16} />
      </div>
    </div>
  );
}
