import {applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from 'saga';

const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run(saga);

export default applyMiddleware(
  sagaMiddleware
);

