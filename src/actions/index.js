import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from './types';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text,
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

const loginUserSuccess = (dispatch, user) => {
  debugger;
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};

const loginUserFail = (dispatch, error) => {
  debugger;
  dispatch({ type: LOGIN_USER_FAIL, payload: error.message });
};

export const loginUser = ({ email, password }) => (dispatch) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user => loginUserSuccess(dispatch, user)), user => loginUserFail(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user));
    });
};

