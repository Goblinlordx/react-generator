import React from 'react';
import {Router, IndexRoute, Route, Redirect, browserHistory} from 'react-router';

import NavShell from 'components/NavShell';
import Home from 'components/Home';
import NotFound from 'components/NotFound';

const Routing = () => (
  <Router history={browserHistory}>
    <Route path='/' component={NavShell}>
      <IndexRoute component={Home}/>
      <Route path="404" component={NotFound}/>
    </Route>
    <Redirect from="*" to="/404"/>
  </Router>
);

export default Routing;
