import React from 'react';
import styles from './header.module.css';
import logo from './../../assets/logo_v1.png';

const Header = props => (
  <header className={styles.header}>
    <div className={styles.headerCorner} />
    <div className={styles.headerLockup}>
      <img src={logo} width="40" />
      <span className={styles.title}> JS Vault</span>
    </div>
  </header>
);

export default Header;
