import firebase from 'firebase/app';
import 'firebase/auth';
import config from 'config/firebase.cson';
import store from 'store';
import T from 'action/type';
const {INITIALIZED, AUTH_SUCCESS, SET_USER, FLUSH} = T;

firebase.initializeApp(config);

firebase.auth()
  .onAuthStateChanged(user => {
    const {init} = store.getState();
    if (user) {
      store.dispatch({
        type: AUTH_SUCCESS,
      });
      store.dispatch({
        type: SET_USER,
        payload: user,
      });
    } else {
      store.dispatch({
        type: FLUSH,
      });
    }
    if (!init.ed) {
      store.dispatch({
        type: INITIALIZED,
      })
    }
  });

const googleProvider = new firebase.auth.GoogleAuthProvider();
export function googleLogin() {
  firebase.auth().signInWithPopup(googleProvider);
};
export function logout() {
  firebase.auth().signOut();
};
