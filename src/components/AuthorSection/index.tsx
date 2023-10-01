import React from 'react';
import styles from './styles.module.scss';

const AuthorSection: React.FC = () => {
  return (
    <div className={styles.menu}>
      <span className={styles.sectionTitle}>INFO</span>
      <span className={styles.infoText}>
        Desenvolvido por Daniel Luiz Alves, portfólio em:{' '}
        <a href="https://daniel-luiz-alves.vercel.app/" target="_blank">
          https://daniel-luiz-alves.vercel.app/
        </a>
      </span>
      <br />
    </div>
  );
};

export default AuthorSection;
