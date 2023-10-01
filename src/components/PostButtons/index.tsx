'use client';
import React from 'react';
import { PostButtonsProps } from 'src/types/general';
import { testAlert } from 'src/utils/utils';
import Button from '../Button';
import { IconArrowDown, IconArrowUp, IconComment, IconShare } from '../Icons';
import styles from './styles.module.scss';

const PostButtons: React.FC<PostButtonsProps> = ({ ups, num_comments }) => {
  return (
    <>
      <div className={styles.buttons}>
        <Button
          color="gray"
          text={ups.toString()}
          icon={<IconArrowUp size={16} />}
          icon2={<IconArrowDown size={16} />}
          onClick={() => testAlert()}
        />
        <Button
          color="gray"
          text={num_comments.toString()}
          icon={<IconComment size={16} />}
          onClick={() => testAlert()}
        />
        <Button
          color="gray"
          text="Compartilhar"
          icon={<IconShare size={16} />}
          onClick={() => testAlert()}
        />
      </div>
    </>
  );
};

export default PostButtons;
