import React from 'react';
import styles from './styles.module.scss';
import { ButtonProps } from '@/types/general';

const Button: React.FC<ButtonProps> = ({
  text,
  color = 'blue',
  icon,
  onClick,
}) => {
  const buttonClasses = [styles.button, styles[color]].join(' ');

  return (
    <button className={buttonClasses} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span> {text}</span>
    </button>
  );
};

export default Button;
