import {createStore} from 'redux';
import root from 'reducer';
import {loadState} from './persist';

const initialState = loadState('app') || {};

const store = createStore(root, initialState);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducer', () => {
      const nextRootReducer = require('reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }
}

export default store;
