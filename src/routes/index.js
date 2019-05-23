import React from 'react';
import { Route } from 'react-router-dom';
import routes from './routes';
import generateMarkDown from './../content/generateLazyMarkdown';

const Home = generateMarkDown(() => import('./../content/home/home.mdx'));

export default () => (
  // <Router>
  <div>
    <Route path="/" exact={true} component={Home} />
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    ))}
  </div>
  // </Router>
);
