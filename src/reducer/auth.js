import {createReducer} from 'util';
import {AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_RESET_ERROR} from 'action/type';

const auth = createReducer({
  [AUTH_START]: state => ({
    ...state,
    ing: true,
    ed: false,
    data: null,
  }),
  [AUTH_SUCCESS]: (_, data) => ({
    ing: false,
    ed: true,
    error: null,
    data,
  }),
  [AUTH_FAIL]: (_, error) => ({
    ing: false,
    ed: false,
    data: null,
    error,
  }),
  [AUTH_RESET_ERROR]: state => ({
    ...state,
    error: null,
  }),
});

export default auth;
