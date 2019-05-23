import React from 'react';
import { Link } from 'react-router-dom';

const LinkWithPrefetch = ({ path, preload, children, ...rest }) => (
  <Link to={path} onMouseEnter={preload} {...rest}>
    {children}
  </Link>
);

export default LinkWithPrefetch;
