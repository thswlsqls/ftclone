import {
  REGISTER_USER,
  LOGIN_USER,
  AUTH_USER,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../REDUX_actions/types';

const INITIAL_STATE = {
  loginPendding: false,
  loginDone: false,
  loginError: null,
  userData: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      return { ...state, loginSucces: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case LOGIN_REQ:
      return {
        ...state,
        loginPendding: true,
        loginDone: false,
        loginError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginPendding: false,
        loginDone: true,
        userData: action.data,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginPendding: false,
        loginError: action.error,
      };
    default:
      return state;
  }
}
