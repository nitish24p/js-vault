import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Code from './../code';
import {
  blockquote,
  anchor,
  paragraph,
  markdown,
  ol,
  ul,
} from './customComponents';
import colors from './colors';
const components = {
  h1: ({ children, ...rest }) => (
    <h1 style={{ color: colors.primary }} {...rest}>
      {children}{' '}
    </h1>
  ),
  h2: ({ children, ...rest }) => (
    <h2 style={{ color: colors.primary }} {...rest}>
      {children}
    </h2>
  ),
  h3: ({ children, ...rest }) => (
    <h3 style={{ color: colors.primary }} {...rest}>
      {children}
    </h3>
  ),
  h4: ({ children, ...rest }) => (
    <h4 style={{ color: colors.primary }} {...rest}>
      {children}
    </h4>
  ),
  h5: ({ children, ...rest }) => (
    <h5 style={{ color: colors.primary }} {...rest}>
      {children}
    </h5>
  ),
  h6: ({ children, ...rest }) => (
    <h6 style={{ color: colors.primary }} {...rest}>
      {children}
    </h6>
  ),
  a: ({ children, ...rest }) => (
    <a {...rest} style={anchor}>
      {children}
    </a>
  ),
  p: ({ children, ...rest }) => (
    <p {...rest} style={paragraph}>
      {children}
    </p>
  ),
  pre: (props) => <div {...props} style={{ overflow: 'auto' }} />,
  blockquote: (props) => <blockquote {...props} style={blockquote} />,
  ol: (props) => (
    <ol {...props} style={ol}>
      {props.children}
    </ol>
  ),
  ul: (props) => (
    <ul {...props} style={ul}>
      {props.children}
    </ul>
  ),
  code: Code,
};
export default (props) => (
  <MDXProvider components={components}>
    <div {...props} style={markdown} />
  </MDXProvider>
);
