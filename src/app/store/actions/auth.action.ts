import { createAction, props } from '@ngrx/store';
import { FormData, FormState } from '../models/form.state';

const setLoginForm = createAction(
  '[Form] submit form',
  props<{ value: Partial<FormState> }>()
);

const formLoginSuccess = createAction(
  '[Form] form submitting success',
  props<{ value: any }>()
);

const formLoginFailure = createAction(
  '[Form] form submitting failure',
  props<{ value: any }>()
);

export default {
  setLoginForm,
  formLoginSuccess,
  formLoginFailure,
};
