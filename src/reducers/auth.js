import {createReducer} from 'util';
import {SET_AUTH} from 'actions/type';

const auth = createReducer({
  [SET_AUTH]: (state, payload) => payload,
}, {
  ing: false,
  ed: false,
  data: null
});

export default auth;
