import React from 'react';
import { testAlert } from 'src/utils/utils';
import styles from './styles.module.scss';

const ShowMoreButton: React.FC = () => {
  return (
    <button className={styles.seeMoreButton} onClick={() => testAlert()}>
      Ver mais
    </button>
  );
};

export default ShowMoreButton;
