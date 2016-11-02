import {createReducer} from 'util';
import T from 'action/type';
const {SET_USER} = T;

const user = createReducer({
  [SET_USER]: (_, user) => user,
},{})

export default user;
