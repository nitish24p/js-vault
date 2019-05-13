import React from 'react';
import { Route } from 'react-router-dom';
import routes from './routes';

export default () => (
  // <Router>
  <div>
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
