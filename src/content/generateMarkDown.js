import React, { lazy, Suspense } from 'react';
//import Content from './test.mdx';
import Layout from './../components/layout';
const a = require('./array-map/array-map.mdx');
//const Content = lazy(() => import('./array-map.mdx'));

// const ArrayMapDoc = props => (
//   <Layout>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Content />
//     </Suspense>
//     {/* <Content /> */}
//   </Layout>
// );

function generateMarkDown(importCompnent) {
  const Content = lazy(importCompnent());
  return props => (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Content {...props} />
      </Suspense>
    </Layout>
  );
}

export default generateMarkDown;
