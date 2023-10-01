'use client';
import React from 'react';
import styles from './styles.module.scss';
import Button from '../Button';
import { IconDots, IconQRCode } from '../Icons';
import { testAlert } from 'src/utils/utils';

const HeaderButtons: React.FC = () => {
  return (
    <div className={styles.buttons} data-testid="header-buttons">
      <Button
        icon={<IconQRCode size={18} />}
        text="Baixar app"
        color="gray"
        onClick={() => testAlert()}
      />
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
