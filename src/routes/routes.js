import React from 'react';

// import TestMdxComp from './../content/test';
// import ArrayMapDoc from './../content/array-map';
import generateMarkdown from './../content/generateLazyMarkdown';

const routes = [
  {
    path: '/array-map',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/array-map/array-map.mdx')
    ),
    text: 'Implement Array.map',
    preload: () => import('./../content/array-map/array-map.mdx')
  },
  {
    path: '/array-reduce',
    exact: true,
    main: generateMarkdown(() => import('./../content/test/test.mdx')),
    text: 'Implement Array.reduce',
    preload: () => import('./../content/test/test.mdx')
  },
  {
    path: '/array-foreach',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/array-for-each/array-for-each.mdx')
    ),
    text: 'Implement Array.forEach',
    preload: () => import('./../content/array-for-each/array-for-each.mdx')
  },
  {
    path: '/array-filter',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/array-filter/array-filter.mdx')
    ),
    text: 'Implement Array.filter',
    preload: () => import('./../content/array-filter/array-filter.mdx')
  }
];

export default routes;
