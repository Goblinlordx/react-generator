import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from 'action/auth';

@connect(null, dispatch => ({
  onClickLogout: () => dispatch(logout())
}))
class Test extends Component {
  render() {
    const {onClickLogout} = this.props;
    return (
      <div>
        <h1>Test Page</h1>
        <button type="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    );
  }
}

export default Test;
