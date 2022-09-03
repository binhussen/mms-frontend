import { createAction, props } from '@ngrx/store';
import { AuthState } from '../models/auth.state';

const setLoginForm = createAction(
  '[Auth] auth submit',
  props<{ value: Partial<AuthState> }>()
);

const authSuccess = createAction(
  '[Auth] auth submitting success',
  props<{ value: any }>()
);

const authFailure = createAction(
  '[Auth] auth submitting failure',
  props<{ value: any }>()
);

export default {
  setLoginForm,
  authSuccess,
  authFailure,
};
