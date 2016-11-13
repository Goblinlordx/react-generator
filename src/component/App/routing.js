import React from 'react';
import {Router, IndexRoute, Route, Redirect, browserHistory} from 'react-router';
import store from 'store';

import AuthedRoute from 'component/AuthedRoute';
import NavShell from 'component/NavShell';
import Login from 'component/Login';
import Logout from 'component/Logout';
import Test from 'component/Test';
import Home from 'component/Home';
import NotFound from 'component/NotFound';

//const AuthedRoute = _AuthedRoute(store, '/login');
const BasicAuth = AuthedRoute(auth => auth.ed, '/login');
const BasicUnauth = AuthedRoute(auth => !auth.ed, '/test', true);

const Routing = () => (
  <Router history={browserHistory}>
    <Route path='/' component={NavShell}>
      <Route component={BasicAuth}>
        <Route path='test' component={Test}/>
        <Route path='logout' component={Logout}/>
      </Route>
      <Route component={BasicUnauth}>
        <Route path='login' component={Login}/>
      </Route>
      <IndexRoute component={Home}/>
      <Route path='404' component={NotFound}/>
    </Route>
    <Redirect from='*' to='/404'/>
  </Router>
);

export default Routing;
