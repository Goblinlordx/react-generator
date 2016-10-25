import {createReducer} from 'util';
import {FLUSH, INITIALIZED} from 'action/type'

const init = createReducer({
  [FLUSH]: state => state,
  [INITIALIZED]: () => ({ed: true})
},{
  ed: false,
});

export default init;
