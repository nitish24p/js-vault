import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Code from './../code';
import {
  blockquote,
  anchor,
  paragraph,
  markdown,
  ol,
  ul
} from './customComponents';
import colors from './colors';
const components = {
  h1: props => <h1 style={{ color: colors.primary }} {...props} />,
  h2: props => <h2 style={{ color: colors.primary }} {...props} />,
  h3: props => <h3 style={{ color: colors.primary }} {...props} />,
  h4: props => <h4 style={{ color: colors.primary }} {...props} />,
  h5: props => <h5 style={{ color: colors.primary }} {...props} />,
  h6: props => (
    <h6 style={{ color: colors.primary }} {...props}>
      {props.children}
    </h6>
  ),
  a: props => <a {...props} style={anchor} />,
  p: props => (
    <p {...props} style={paragraph}>
      {props.children}
    </p>
  ),
  pre: props => <div {...props} style={{ overflow: 'auto' }} />,
  blockquote: props => <blockquote {...props} style={blockquote} />,
  ol: props => (
    <ol {...props} style={ol}>
      {props.children}
    </ol>
  ),
  ul: props => (
    <ul {...props} style={ul}>
      {props.children}
    </ul>
  ),
  code: Code
};
export default props => (
  <MDXProvider components={components}>
    <div {...props} style={markdown} />
  </MDXProvider>
);
