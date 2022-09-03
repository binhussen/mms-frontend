import { createReducer, on } from '@ngrx/store';
import authAction from '../actions/auth.action';
import { AuthState } from '../models/auth.state';
export const initialState: AuthState = {
  id: null,
  status: null,
  submittedToUrl: null,
  token: null,
  action: null,
  data: null,
};
export const authReducer = createReducer(
  initialState,
  on(authAction.setLoginForm, (state, { value }) => ({
    ...state,
    ...value,
    status: 'PENDING',
  })),
  on(authAction.authSuccess, (state, { value }) => ({
    ...state,
    response: value,
    status: 'SUCCESS',
  })),
  on(authAction.authFailure, (state, { value }) => ({
    ...state,
    response: value,
    status: 'FAILED',
  }))
);
