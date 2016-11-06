import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class Home extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <FormattedMessage
          id='example'
        />
      </div>
    );
  }
}

export default Home;
