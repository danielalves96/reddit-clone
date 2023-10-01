import React from 'react';
import styles from './styles.module.scss';
import { testAlert } from 'src/utils/utils';

const ShowMoreButton: React.FC = () => {
  return (
    <button className={styles.seeMoreButton} onClick={() => testAlert()}>
      Ver mais
    </button>
  );
};

export default ShowMoreButton;
