import {combineReducers} from 'redux';

import init from './init';
import auth from './auth';
import user from './user';
import localeData from './localeData';


const root = combineReducers({
  init,
  auth,
  user,
  localeData
});


export default root;
