import React from 'react';
import styles from './styles.module.scss';
import TagsInput from '../TagsInput';
import HeaderButtons from '../HeaderButtons';
import HeaderLogo from '../HeaderLogo';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <TagsInput />
      <HeaderButtons />
    </header>
  );
};

export default Header;
