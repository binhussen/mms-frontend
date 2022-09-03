import { createAction, props } from '@ngrx/store';
import { FormData, FormState } from '../models/form.state';

const setLoginForm = createAction(
  '[Form] submit form',
  props<{ value: Partial<FormState> }>()
);

const authSuccess = createAction(
  '[Form] auth submitting success',
  props<{ value: any }>()
);

const authFailure = createAction(
  '[Form] auth submitting failure',
  props<{ value: any }>()
);

export default {
  setLoginForm,
  authSuccess,
  authFailure,
};
