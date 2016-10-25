import React from 'react';
import {Router, IndexRoute, Route, Redirect, browserHistory} from 'react-router';

import NavShell from 'component/NavShell';
import Home from 'component/Home';
import NotFound from 'component/NotFound';

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
