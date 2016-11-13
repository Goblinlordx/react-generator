import React, {Component} from 'react';
import {googleLogin} from 'lib/firebase';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <button type="button" onClick={googleLogin}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
