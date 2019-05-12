import React from 'react';
import styles from './sidebar.module.css';
import { Link, NavLink } from 'react-router-dom';

const SidebarItem = props => {
  return (
    <li>
      <NavLink activeClassName={'active'} to={props.link}>
        {props.children}
      </NavLink>
    </li>
  );
};

class Sidebar extends React.PureComponent {
  static MenuItem = SidebarItem;
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.navigationListParent}>
          <ul className={styles.navList}>{this.props.children}</ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
