import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Code from './../code';
const components = {
  h1: props => <h1 style={{ color: 'tomato' }} {...props} />,
  pre: props => <div {...props} style={{ overflow: 'auto' }} />,
  code: Code
}
export default props => (
  <MDXProvider components={components}>
    <main {...props}>
    </main>
  </MDXProvider>
)