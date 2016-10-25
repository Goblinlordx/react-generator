import {createReducer} from 'util';
import {SET_USER} from 'action/type';

const user = createReducer({
  [SET_USER]: (_, user) => user,
},{})

export default user;
