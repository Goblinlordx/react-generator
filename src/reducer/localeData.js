import {createReducer} from 'util';
import {SET_LOCALE_DATA} from 'action/type';
import en from 'locale/en.cson';

const localeData = createReducer({
  [SET_LOCALE_DATA]: (state, {locale, data}) => ({
    ...state,
    [locale]: data,
  })
}, {
  en,
});

export default localeData;
