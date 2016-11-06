import T from './type';
const {AUTH_SUCCESS, FLUSH} = T;

export function login() {
  return {
    type: T.AUTH_SUCCESS
  };
}

export function logout() {
  return {
    type: T.FLUSH
  };
}
