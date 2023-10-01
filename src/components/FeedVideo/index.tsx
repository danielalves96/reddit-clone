import React from 'react';
import styles from './styles.module.scss';

const FeedVideo: React.FC<{ media: any }> = ({ media }) => {
  return (
    <div>
      <video className={styles.video} controls role="video">
        <source src={media?.reddit_video?.fallback_url} type="video/mp4" />
        <source src={media?.reddit_video?.fallback_url} type="video/ogg" />
      </video>
    </div>
  );
};

export default FeedVideo;
