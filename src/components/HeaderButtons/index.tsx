'use client';
import React from 'react';
import { testAlert } from 'src/utils/utils';
import Button from '../Button';
import { IconDots, IconQRCode } from '../Icons';
import styles from './styles.module.scss';

const HeaderButtons: React.FC = () => {
  return (
    <div className={styles.buttons} data-testid="header-buttons">
      <div className={styles.downloadButton}>
        <Button
          icon={<IconQRCode size={18} />}
          text="Baixar app"
          color="gray"
          onClick={() => testAlert()}
        />
      </div>
      <Button text="Entrar" color="orange" onClick={() => testAlert()} />
      <div
        className="pointer"
        onClick={() => testAlert()}
        data-testid="more-options-button"
      >
        <IconDots size={20} />
      </div>
    </div>
  );
};

export default HeaderButtons;
