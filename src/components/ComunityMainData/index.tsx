'use client';
import { ComunityMainDataProps } from 'src/types/general';
import { testAlert } from 'src/utils/utils';
import Button from '../Button';
import styles from './styles.module.scss';

const ComunityMainData = ({
  title,
  description,
  subtitle,
}: ComunityMainDataProps) => {
  return (
    <>
      <span className={styles.title}>{title}</span>
      <div className="px-15">
        <Button text="Unir-se" onClick={() => testAlert()} />
      </div>
      <div className={styles.description}>
        <span className={styles.descriptionTitle}>{subtitle}</span>
        <span className={styles.descriptionText}>{description}</span>
      </div>
    </>
  );
};

export default ComunityMainData;
