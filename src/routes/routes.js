import React from 'react';

// import TestMdxComp from './../content/test';
// import ArrayMapDoc from './../content/array-map';
import generateMarkdown from './../content/generateLazyMarkdown';

const routes = [
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
    path: '/array-map',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/array-map/array-map.mdx')
    ),
    text: 'Implement Array.map',
    preload: () => import('./../content/array-map/array-map.mdx')
  },
  {
    path: '/array-filter',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/array-filter/array-filter.mdx')
    ),
    text: 'Implement Array.filter',
    preload: () => import('./../content/array-filter/array-filter.mdx')
  },
  {
    path: '/array-reduce',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/array-reduce/array-reduce.mdx')
    ),
    text: 'Implement Array.reduce',
    preload: import('./../content/array-reduce/array-reduce.mdx')
  },
  {
    path: '/function-bind',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/function-bind/function-bind.mdx')
    ),
    text: 'Implement Function.bind',
    preload: () => import('./../content/function-bind/function-bind.mdx')
  },
  {
    path: '/array-listener',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/array-listener/array-listener.mdx')
    ),
    text: 'Array Event Listener',
    preload: () => import('./../content/array-listener/array-listener.mdx')
  },
  {
    path: '/async-parallel',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/async-parallel/async-parallel.mdx')
    ),
    text: 'Implement Async Parallel',
    preload: () => import('./../content/async-parallel/async-parallel.mdx')
  }

  //====================DELETE JUNK BELOW THIS=====================
];

export default routes;
