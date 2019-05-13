import React, { lazy, Suspense } from 'react';
//import Content from './test.mdx';
import Layout from './../../components/layout';
const Content = lazy(() => import('./array-map.mdx'));

const ArrayMapDoc = props => (
  <Layout>
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
    {/* <Content /> */}
  </Layout>
);

export default ArrayMapDoc;
