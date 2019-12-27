import React from 'react';
import { Route } from 'react-router';

import routes from './routes';


export default () => (
  Object
    .keys(routes)
    .map(i => <Route key={i} exact path={routes[i].route} component={routes[i].component} />)
);
