import React, {Component} from 'react';
import {logout} from 'lib/firebase';

class Test extends Component {
  render() {
    const {onClickLogout} = this.props;
    return (
      <div>
        <h1>Test Page</h1>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }
}

export default Test;
