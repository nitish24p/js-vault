import React, { lazy, Suspense } from 'react';
import Layout from './../components/layout';
import Loader from './../components/loader';

function generateLazyMarkdown(importCompnent) {
  const Content = lazy(importCompnent);
  return props => (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Content {...props} />
      </Suspense>
    </Layout>
  );
}

export default generateLazyMarkdown;
