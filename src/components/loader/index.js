import React from 'react';
import styles from './loader.module.css';

const Loader = props => (
  <div className={styles.loader}>
    <div
      className={styles.bar}
      style={{ marginTop: '20px', marginBottom: '20px', height: '40px' }}
    />

    <div className={styles.bar} style={{ height: '20px' }} />

    <div
      className={styles.bar}
      style={{ marginTop: '20px', marginBottom: '20px', height: '400px' }}
    />
  </div>
);

export default Loader;
