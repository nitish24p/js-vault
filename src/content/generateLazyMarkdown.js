import React, { lazy, Suspense } from 'react';
import Layout from './../components/layout';

function generateLazyMarkdown(importCompnent) {
  const Content = lazy(importCompnent);
  return props => (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Content {...props} />
      </Suspense>
    </Layout>
  );
}

export default generateLazyMarkdown;
