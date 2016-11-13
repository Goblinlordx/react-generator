import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Routing from './routing.js';
import LocaleProvider from 'component/LocaleProvider';
import store from 'store';
import 'sanitize.css/sanitize.css';

const App = () => (
  <Provider store={store}>
    <LocaleProvider>
      <Routing/>
    </LocaleProvider>
  </Provider>
);

export default App;
