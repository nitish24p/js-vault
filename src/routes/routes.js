import generateMarkdown from './../content/generateLazyMarkdown';

const routes = [
  {
    path: '/array-map',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/array-map/array-map.mdx')
    ),
    text: 'Implement Array.map',
    preload: () => import('./../content/array-map/array-map.mdx'),
    longText: 'Implement the Array.map method on the Array Prototype'
  },
  {
    path: '/array-filter',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/array-filter/array-filter.mdx')
    ),
    text: 'Implement Array.filter',
    preload: () => import('./../content/array-filter/array-filter.mdx'),
    longText: 'Implement the Array.filter method on the Array Prototype'
  },
  {
    path: '/array-reduce',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/array-reduce/array-reduce.mdx')
    ),
    text: 'Implement Array.reduce',
    preload: () => import('./../content/array-reduce/array-reduce.mdx'),
    longText: 'Implement the Array.reduce method on the Array Prototype'
  },
  {
    path: '/array-foreach',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/array-for-each/array-for-each.mdx')
    ),
    text: 'Implement Array.forEach',
    preload: () => import('./../content/array-for-each/array-for-each.mdx'),
    longText: 'Implement the Array.forEach method on the Array Prototype'
  },
  {
    path: '/function-bind',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/function-bind/function-bind.mdx')
    ),
    text: 'Implement Function.bind',
    preload: () => import('./../content/function-bind/function-bind.mdx'),
    longText: 'Implement the Function.bind method on the Function Prototype'
  },
  {
    path: '/async-parallel',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/async-parallel/async-parallel.mdx')
    ),
    text: 'Implement Async Parallel',
    preload: () => import('./../content/async-parallel/async-parallel.mdx'),
    longText:
      'Implement Async.parallel, which executes a set of asycn tasks parallelly'
  },
  {
    path: '/async-series',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/async-series/async-series.mdx')
    ),
    text: 'Implement Async Series',
    preload: () => import('./../content/async-series/async-series.mdx'),
    longText:
      'Implement Async.series, which executes a set of asycn tasks in series'
  },
  {
    path: '/memoize-function',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/memoize-function/memoize-function.mdx')
    ),
    text: 'Memoize any function',
    preload: () => import('./../content/memoize-function/memoize-function.mdx'),
    longText:
      'Write a function which will memoize subsequent calls to a function'
  },
  {
    path: '/promise-polyfilll',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/promise-polyfill/promise-polyfill.mdx')
    ),
    text: 'Implement Promise polyfill',
    preload: () => import('./../content/promise-polyfill/promise-polyfill.mdx'),
    longText: 'Create a class that can be used as a Promise'
  },
  {
    path: '/promise-all',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/promise-all/promise-all.mdx')
    ),
    text: 'Implement Promise.all',
    preload: () => import('./../content/promise-all/promise-all.mdx'),
    longText: 'Write a method which will implement Promise.all'
  },
  {
    path: '/array-flatten',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/array-flatten/array-flatten.mdx')
    ),
    text: 'Flatten An Array',
    preload: () => import('./../content/array-flatten/array-flatten.mdx'),
    longText: 'Write a method which will flatten any array into a 1D array'
  },
  {
    path: '/array-listener',
    exact: true,
    main: generateMarkdown(() =>
      import('./../content/array-listener/array-listener.mdx')
    ),
    text: 'Array Event Listener',
    preload: () => import('./../content/array-listener/array-listener.mdx'),
    longText:
      'Attach a listener to an array which gets triggered when an item is pushed into the array'
  }

  //====================DELETE JUNK BELOW THIS=====================
];

export default routes;
