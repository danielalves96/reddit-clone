import React from 'react';
import { truncateString } from 'src/utils/utils';
import styles from './styles.module.scss';

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
