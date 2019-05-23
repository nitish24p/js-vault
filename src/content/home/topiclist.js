import React, { Fragment } from 'react';
import Link from './../../components/link';
import styles from './topiclist.module.css';
import routes from './../../routes/routes';

const TopicList = props => (
  <Fragment>
    {routes.map((route, index) => (
      <TopicList.Item path={route.path} preload={route.preload} key={index}>
        {route.longText}
      </TopicList.Item>
    ))}
  </Fragment>
);

TopicList.Item = ({ path, preload, children }) => (
  <p className={styles.wrapper}>
    <Link path={path} preload={preload} className={styles.link}>
      {children}
    </Link>
  </p>
);

export default TopicList;
