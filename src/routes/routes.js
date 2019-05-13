import React from 'react';

import TestMdxComp from './../content/test';
import ArrayMapDoc from './../content/array-map';
import generateMarkDown from './../content/generateMarkDown';

const routes = [
  // {
  //   path: '/',
  //   exact: true,
  //   main: () => <h1>Home COmponent</h1>
  // },
  {
    path: '/array-map',
    exact: true,
    main: ArrayMapDoc,
    text: 'Implement Array.map'
  },
  {
    path: '/array-filter',
    exact: true,
    main: generateMarkDown(() =>
      import('./../content/array-map/array-map.mdx')
    ),
    text: 'Implement Array.filter'
  },
  {
    path: '/array-reduce',
    exact: true,
    main: TestMdxComp,
    text: 'Implement Array.reduce'
  }
];

export default routes;
