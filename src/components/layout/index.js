import React from 'react';
import Provider from './../provider';
import styles from './layout.module.css';

const LayOut = ({ children }) => {
  const pathname =  window.location.pathname

  const disqusShortname = 'jsvault';

  const disqusConfig = {
    url: `https://jsvault.com${pathname}`,
    identifier: pathname.substring(1),
    title: "Vault",
  };

  return (
    <div className={styles.content}>
      <Provider pathname={pathname} shortname={disqusShortname} config={disqusConfig}>{children}</Provider>
    </div>
  );
};

export default LayOut;
