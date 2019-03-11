import { Action } from '@ngrx/store';
import { LoginActions, LoginActionTypes } from '../actions/login.actions';

export interface User {
  isAuthentificated: boolean;
  token?: string;
  info?: any;
}

export interface AuthState {
  user: User;
  loading: boolean;
}

export const initialState: AuthState = {
  user: {
    isAuthentificated: false,
  },
  loading: false,
};

export function authReducer(state = initialState, action: LoginActions): AuthState {
  switch (action.type) {
    case LoginActionTypes.Login:
      return <AuthState>{
        ...state,
        loading: true,
      };
    case LoginActionTypes.LoginSuccess:
      return {
        ...state,
        user: {
          isAuthentificated: true,
          token: action.token,
        },
        loading: false,
      };
    case LoginActionTypes.LoginFailure:
      return {
        ...state,
        user: { isAuthentificated: false },
        loading: false,
      };
    case LoginActionTypes.LogOff:
      return {
        ...state,
        loading: true,
      };
    case LoginActionTypes.LogOffSuccess:
      return {
        ...state,
        user: {
          isAuthentificated: false,
          token: null,
        },
        loading: false,
      };
    case LoginActionTypes.LogOffFailure:
      return {
        ...state,
        loading: false,
      };
    case LoginActionTypes.GetUser:
      return {
        ...state,
        loading: true,
      };
    case LoginActionTypes.GetUserSuccess:
      return {
        ...state,
        user: {
          ...state.user,
          info: action.info,
        },
        loading: false,
      };
    case LoginActionTypes.GetUserFailure:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
