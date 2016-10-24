import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Routing from './routing.js';
import LocaleProvider from 'components/LocaleProvider';
import store from 'store';

class App extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <Provider store={store}>
        <LocaleProvider>
          <Routing/>
        </LocaleProvider>
      </Provider>
    );
  }
}

export default App;
