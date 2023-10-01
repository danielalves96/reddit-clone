/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import styles from './styles.module.scss';
import { IconDots, IconStatus } from '../Icons';
import { Post } from 'src/types/general';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { testAlert } from 'src/utils/utils';

const PostHeader: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className={styles.postHeader}>
      <div className={styles.authorData}>
        <img
          className={styles.authorImage}
          src={post.author_image}
          alt="Author Image"
        />
        <a
          className={styles.authorName}
          href={`https://www.reddit.com/u/${post.author}`}
          target="_blank"
        >
          u/{post.author}
        </a>
        <IconStatus size={3} color="#586F76" />
        <span className={styles.createdDate}>
          {formatDistance(
            new Date(new Date(post.created * 1000).toISOString()),
            new Date(),
            {
              locale: ptBR,
              addSuffix: true,
            },
          )}
        </span>
      </div>
      <div className="pointer" onClick={() => testAlert()}>
        <IconDots size={20} />
      </div>
    </div>
  );
};

export default PostHeader;
