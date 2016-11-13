import React from 'react';
import {googleLogin} from 'lib/firebase';

const Login = _ => (
  <div>
    <h1>Login Page</h1>
    <button type="button" onClick={googleLogin}>
      Login
    </button>
  </div>
);

export default Login;
