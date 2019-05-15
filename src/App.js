import React, { Component } from 'react';
import styles from './app.module.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import AppRoutes from './routes';
import routes from './routes/routes';

class App extends Component {
  state = {
    isSidebarOpen: false
  };
  toggleSidebar = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      this.setState(({ isSidebarOpen }) => ({ isSidebarOpen: !isSidebarOpen }));
    }
  };
  render() {
    return (
      <div>
        <Header onToggleSidebar={this.toggleSidebar} />
        <main className={styles.app}>
          <Sidebar
            open={this.state.isSidebarOpen}
            onLinkClick={this.toggleSidebar}
          >
            {routes.map((route, index) => (
              <Sidebar.MenuItem
                key={index}
                link={route.path}
                preload={route.preload}
              >
                {route.text}
              </Sidebar.MenuItem>
            ))}
          </Sidebar>
          <AppRoutes />
        </main>
      </div>
    );
  }
}

export default App;
