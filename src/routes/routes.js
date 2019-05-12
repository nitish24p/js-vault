import React from 'react';

import TestMdxComp from './../content/test';
import ArrayMapDoc from './../content/array-map';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <h1>Home COmponent</h1>
  },
  {
    path: '/array-map',
    exact: true,
    main: ArrayMapDoc
  },
  {
    path: '/array-reduce',
    exact: true,
    main: TestMdxComp
  },
  {
    path: '/array-list',
    exact: true,
    main: TestMdxComp
  }
];

export default routes;
