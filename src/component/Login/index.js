import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from 'action/auth';

@connect(null, dispatch => ({
  onClickLogin: () => dispatch(login())
}))
class Login extends Component {
  render() {
    const {onClickLogin} = this.props;
    return (
      <div>
        <h1>Login Page</h1>
        <button type="button" onClick={onClickLogin}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
