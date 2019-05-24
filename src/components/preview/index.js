import React from 'react';
import styles from './preview.module.css';

const Preview = ({ value, error }) => {
  return (
    <div className={styles.previewWrapper} id="preview">
      <h4>Output</h4>
      <div className={`${styles.preview} ${error ? styles.error : ''}`}>
        <pre className={styles.pre}>{JSON.stringify(value)}</pre>
      </div>
    </div>
  );
};

export default Preview;
