import React, {Component, Children} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

const _AuthedRoute = (authorize, redirectPath, continueTransition) =>
@withRouter
@connect(({auth}) => ({auth}))
class AuthedRoute extends Component {
  authed = undefined;
  verifyAuth(nextProps) {
    const {auth} = nextProps || this.props;
    return this.authed = authorize(auth);
  }
  redirect() {
    const {router, location} = this.props;
    if (continueTransition && location.state && location.state.nextPathname) {
      router.replace(location.state.nextPathname);
    } else {
      router.replace({
        pathname: redirectPath,
        state: {
          nextPathname: location.pathname
        }
      });
    }
  }
  componentWillMount() {
    if (!this.verifyAuth()) this.redirect();
  }
  componentWillUpdate(nextProps) {
    if (!this.verifyAuth(nextProps)) this.redirect();
  }
  render() {
    const {children} = this.props;
    // Stop render tree if auth failed
    return this.authed && Children.only(children);
  }
};


export default _AuthedRoute;
