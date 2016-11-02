import keyMirror from 'key-mirror';

const types = keyMirror({
  FLUSH: null,
  LOGIN: null,
  INITIALIZED: null,
  AUTH_START: null,
  AUTH_SUCCESS: null,
  AUTH_FAIL: null,
  AUTH_RESET_ERROR: null,
  SET_USER: null,
  SET_LOCALE_DATA: null,
});

export default types;
