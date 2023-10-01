'use client';
import React from 'react';
import styles from './styles.module.scss';
import { PostBadgeProps } from 'src/types/general';
import { testAlert } from 'src/utils/utils';

const PostBadge: React.FC<PostBadgeProps> = ({ text, color }) => {
  return (
    <div className={styles.badge} onClick={() => testAlert()}>
      <span
        className={styles.badgeText}
        style={{
          backgroundColor: `${color}`,
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default PostBadge;
