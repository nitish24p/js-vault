import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './app.module.css';

//import Content from './content/test.mdx';
import Provider from './components/provider';

import Header from './components/header';
import Sidebar from './components/sidebar';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className={styles.app}>
          <Sidebar>
            <Sidebar.MenuItem link="/">Home</Sidebar.MenuItem>
            <Sidebar.MenuItem link="/array-map">Array.map</Sidebar.MenuItem>
          </Sidebar>
          {/* <Router></Router> */}
          <Routes />
          {/* <Provider>
            <Content />
          </Provider> */}
        </main>
      </div>
    );
  }
}

export default App;
