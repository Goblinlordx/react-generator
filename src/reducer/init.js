import {createReducer} from 'util';
import T from 'action/type';
const {FLUSH, INITIALIZED} = T;

const init = createReducer({
  [FLUSH]: state => state,
  [INITIALIZED]: () => ({ed: true})
}, {
  ed: false,
});

export default init;
