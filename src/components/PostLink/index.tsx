import React from 'react';
import styles from './styles.module.scss';

const PostLink: React.FC<{ url: string }> = ({ url }) => {
  return (
    <div className={styles.link}>
      <a href={url} target="_blank">
        {url}
      </a>
    </div>
  );
};

export default PostLink;
