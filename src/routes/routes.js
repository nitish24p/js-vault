import React from 'react';

import TestMdxComp from './../content/test';

const routes = [
  {
    path: '/home',
    //exact: true,
    main: () => <h1>Home COmponent</h1>
  },
  {
    path: '/array-map',
    //exact: true,
    main: TestMdxComp
  }
];

export default routes;
