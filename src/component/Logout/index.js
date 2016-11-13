import React, {Component} from 'react';
import {logout} from 'lib/firebase';

class Logout extends Component {
  componentWillMount() {
    logout();
  }
  render() {return null;}
}

export default Logout;
