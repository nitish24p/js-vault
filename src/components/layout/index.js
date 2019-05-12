import React from 'react';
import Provider from './../provider';
import styles from './layout.module.css';

const LayOut = ({ children }) => {
  return (
    <div className={styles.content}>
      <Provider>{children}</Provider>
    </div>
  );
};

export default LayOut;
