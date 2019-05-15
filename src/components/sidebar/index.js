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
        onMouseEnter={() => props.onHoverLink(props.preload)}
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

  onHoverLink = preload => {
    preload && typeof preload === 'function' && preload();
  };

  renderChildren = () => {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        onClick: this.onLinkClick,
        onHoverLink: this.onHoverLink
      });
    });
  };

  render() {
    return (
      <div className={styles.sidebar} id="sidebar">
        <div className={styles.navigationListParent}>
          <ul className={styles.navList}>{this.renderChildren()}</ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
