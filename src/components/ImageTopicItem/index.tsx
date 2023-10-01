/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './styles.module.scss';
import { testAlert } from 'src/utils/utils';
import { SidebarImageItem } from 'src/types/general';

const ImageTopicItem: React.FC<SidebarImageItem> = ({ imageSrc, text }) => {
  return (
    <div className={styles.listItemImage} onClick={() => testAlert()}>
      <img
        src={imageSrc}
        alt="Image"
        width={33}
        className={styles.profileImage}
      />
      <span>{text}</span>
    </div>
  );
};
export default ImageTopicItem;
