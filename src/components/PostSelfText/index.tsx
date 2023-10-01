import React from 'react';
import styles from './styles.module.scss';
import { truncateString } from 'src/utils/utils';

const PostSelfText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div
      className={styles.selfText}
      dangerouslySetInnerHTML={{
        __html: truncateString(text, 600).replace(/\n/g, '<br />'),
      }}
    />
  );
};

export default PostSelfText;
