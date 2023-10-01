/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './styles.module.scss';

const PostImage: React.FC<{ thumbnail: string }> = ({ thumbnail }) => {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} src={thumbnail} alt="thumbnail" />
    </div>
  );
};

export default PostImage;
