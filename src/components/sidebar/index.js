import React from 'react';
import styles from './sidebar.module.css';
import { Link, NavLink } from 'react-router-dom';

const SidebarItem = props => {
  console.log('called');
  return (
    <li>
      <NavLink
        activeClassName={'active'}
        to={props.link}
        onClick={props.onClick}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

class Sidebar extends React.PureComponent {
  static MenuItem = SidebarItem;
  onLinkClick = () => {
    console.log('clicked a link');
  };

  renderChildren = () => {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        onClick: this.onLinkClick
      });
    });
  };

  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.navigationListParent}>
          <ul className={styles.navList}>{this.renderChildren()}</ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
