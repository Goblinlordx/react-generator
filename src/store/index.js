import {createStore} from 'redux';
import root from 'reducers';
import {loadState} from './persist';

const initialState = loadState('app') || {};

const store = createStore(root, initialState);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
}

export default store;