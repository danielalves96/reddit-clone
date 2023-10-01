import React from 'react';
import { ButtonProps } from 'src/types/general';
import styles from './styles.module.scss';

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
