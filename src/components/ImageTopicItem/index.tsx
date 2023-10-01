/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { SidebarImageItem } from 'src/types/general';
import { testAlert } from 'src/utils/utils';
import styles from './styles.module.scss';

const ImageTopicItem: React.FC<SidebarImageItem> = ({ imageSrc, text }) => {
  return (
    <div
      className={styles.listItemImage}
      onClick={() => testAlert()}
      data-testid="list-item-image"
    >
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
