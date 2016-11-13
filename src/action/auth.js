import T from './type';
const {LOGIN, LOGOUT} = T;

export function login(username, password) {
  return {
    type: LOGIN,
    payload: {
      username,
      password,
    },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
