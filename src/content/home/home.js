import React from 'react';
import styles from './home.module.css';
import logo from './../../assets/logo_v1.png';

const Home = props => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.logoContainer}>
          <img src={logo} />
          <span>Vault</span>
        </div>
        <h3 className={styles.heading}>
          A collection of annoying JS interview questions
        </h3>
      </div>
    </div>
  );
};

export default Home;
