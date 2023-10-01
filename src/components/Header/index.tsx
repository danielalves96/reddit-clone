import React from 'react';
import HeaderButtons from '../HeaderButtons';
import HeaderLogo from '../HeaderLogo';
import TagsInput from '../TagsInput';
import styles from './styles.module.scss';

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
