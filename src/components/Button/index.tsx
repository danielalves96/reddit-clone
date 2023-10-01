import React from 'react';
import styles from './styles.module.scss';
import { ButtonProps } from 'src/types/general';

const Button: React.FC<ButtonProps> = ({
  text,
  color = 'blue',
  icon,
  icon2,
  onClick,
}) => {
  const buttonClasses = [styles.button, styles[color]].join(' ');

  return (
    <button className={buttonClasses} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span> {text}</span>
      {icon2 && <span className={styles.icon2}>{icon2}</span>}
    </button>
  );
};

export default Button;
